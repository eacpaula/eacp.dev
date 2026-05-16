type ResourceStatus = 'idle' | 'loading' | 'loaded' | 'failed'

export type CalendlyPopupResult =
  | { status: 'opened' }
  | { status: 'fallback-opened'; message: string }
  | { status: 'failed'; message: string }

interface CalendlyWidget {
  initPopupWidget(options: { url: string }): void
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget
  }
}

const CALENDLY_SCRIPT_ID = 'calendly-widget-script'
const CALENDLY_STYLESHEET_ID = 'calendly-widget-stylesheet'
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_STYLESHEET_HREF =
  'https://assets.calendly.com/assets/external/widget.css'

let scriptStatus: ResourceStatus = 'idle'
let stylesheetStatus: ResourceStatus = 'idle'
let scriptPromise: Promise<void> | null = null
let stylesheetPromise: Promise<void> | null = null

function loadScriptOnce(): Promise<void> {
  if (scriptStatus === 'loaded') {
    return Promise.resolve()
  }

  if (scriptPromise) {
    return scriptPromise
  }

  scriptStatus = 'loading'
  scriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(
      CALENDLY_SCRIPT_ID,
    ) as HTMLScriptElement | null

    if (existingScript) {
      if (window.Calendly) {
        scriptStatus = 'loaded'
        resolve()
        return
      }

      existingScript.addEventListener('load', handleLoad, { once: true })
      existingScript.addEventListener('error', handleError, { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = CALENDLY_SCRIPT_ID
    script.src = CALENDLY_SCRIPT_SRC
    script.async = true
    script.addEventListener('load', handleLoad, { once: true })
    script.addEventListener('error', handleError, { once: true })
    document.head.append(script)

    function handleLoad() {
      scriptStatus = window.Calendly ? 'loaded' : 'failed'

      if (window.Calendly) {
        resolve()
        return
      }

      reject(new Error('Calendly widget loaded without exposing the popup API.'))
    }

    function handleError() {
      scriptStatus = 'failed'
      scriptPromise = null
      reject(new Error('Calendly widget script could not be loaded.'))
    }
  })

  return scriptPromise
}

function loadStylesheetOnce(): Promise<void> {
  if (stylesheetStatus === 'loaded') {
    return Promise.resolve()
  }

  if (stylesheetPromise) {
    return stylesheetPromise
  }

  stylesheetStatus = 'loading'
  stylesheetPromise = new Promise((resolve, reject) => {
    const existingStylesheet = document.getElementById(
      CALENDLY_STYLESHEET_ID,
    ) as HTMLLinkElement | null

    if (existingStylesheet) {
      stylesheetStatus = 'loaded'
      resolve()
      return
    }

    const link = document.createElement('link')
    link.id = CALENDLY_STYLESHEET_ID
    link.rel = 'stylesheet'
    link.href = CALENDLY_STYLESHEET_HREF
    link.addEventListener(
      'load',
      () => {
        stylesheetStatus = 'loaded'
        resolve()
      },
      { once: true },
    )
    link.addEventListener(
      'error',
      () => {
        stylesheetStatus = 'failed'
        stylesheetPromise = null
        reject(new Error('Calendly widget stylesheet could not be loaded.'))
      },
      { once: true },
    )
    document.head.append(link)
  })

  return stylesheetPromise
}

async function ensureCalendlyResources(): Promise<void> {
  await Promise.all([loadStylesheetOnce(), loadScriptOnce()])
}

function openSchedulingUrlInNewTab(url: string): CalendlyPopupResult {
  const fallbackWindow = window.open(url, '_blank', 'noopener,noreferrer')

  if (fallbackWindow) {
    return {
      status: 'fallback-opened',
      message: 'Calendly opened in a new tab because the popup was unavailable.',
    }
  }

  return {
    status: 'failed',
    message:
      'Scheduling is temporarily unavailable. Use email or LinkedIn for direct follow-up.',
  }
}

export async function openCalendlyPopup(
  url: string,
): Promise<CalendlyPopupResult> {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return {
      status: 'failed',
      message:
        'Scheduling is only available in the browser. Use email or LinkedIn for direct follow-up.',
    }
  }

  try {
    await ensureCalendlyResources()

    if (!window.Calendly) {
      return openSchedulingUrlInNewTab(url)
    }

    window.Calendly.initPopupWidget({ url })
    return { status: 'opened' }
  } catch {
    return openSchedulingUrlInNewTab(url)
  }
}
