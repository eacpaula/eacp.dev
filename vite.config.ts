import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { replaceManagedMetadataBlock } from './src/lib/seo/metadataTags'
import { buildWritingPostMetadata } from './src/features/writing/seo'
import type { WritingPost } from './src/features/writing/data/writing.types'
import { SITE_CANONICAL_ORIGIN } from './src/content/site-config'

function generateBlogPostHtml() {
  let outDir = 'dist'
  let base = '/'

  return {
    name: 'generate-blog-post-html',
    apply: 'build' as const,
    configResolved(config: { build: { outDir: string }; base: string }) {
      outDir = config.build.outDir
      base = config.base
    },
    async closeBundle() {
      const rootDir = fileURLToPath(new URL('.', import.meta.url))
      const postDirectory = path.resolve(
        rootDir,
        'src/features/writing/data/posts',
      )
      const resolvedOutDir = path.resolve(rootDir, outDir)
      const builtIndexHtmlPath = path.resolve(resolvedOutDir, 'index.html')
      const builtIndexHtml = await readFile(builtIndexHtmlPath, 'utf8')
      const postFiles = (await readdir(postDirectory)).filter((fileName) =>
        fileName.endsWith('.json'),
      )

      await Promise.all(
        postFiles.map(async (fileName) => {
          const postPath = path.resolve(postDirectory, fileName)
          const post = JSON.parse(
            await readFile(postPath, 'utf8'),
          ) as WritingPost
          const outputDirectory = path.resolve(
            resolvedOutDir,
            'blog',
            post.slug,
          )
          const postHtml = replaceManagedMetadataBlock(
            builtIndexHtml,
            buildWritingPostMetadata(post, {
              basePath: base,
              canonicalOrigin: SITE_CANONICAL_ORIGIN,
            }),
          )

          await mkdir(outputDirectory, { recursive: true })
          await writeFile(path.resolve(outputDirectory, 'index.html'), postHtml)
        }),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), generateBlogPostHtml()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        notFound: new URL('./404.html', import.meta.url).pathname,
      },
    },
  },
})
