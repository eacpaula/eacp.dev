import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { AppShell } from './app/AppShell'
import {
  BlogPostRouteComponent,
  RootRouteComponent,
  RouterNotFound,
} from './router-components'

const rootRoute = createRootRoute({
  component: RootRouteComponent,
  notFoundComponent: RouterNotFound,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AppShell,
})

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: BlogPostRouteComponent,
})

const routeTree = rootRoute.addChildren([homeRoute, blogPostRoute])

export const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL,
  scrollRestoration: true,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
