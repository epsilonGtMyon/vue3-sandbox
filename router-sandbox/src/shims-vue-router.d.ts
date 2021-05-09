import 'vue-router'

/* eslint-disable */
declare module 'vue-router' {
  interface RouteMeta {
    // must be declared by every route
    requiresAuth: boolean
  }
}