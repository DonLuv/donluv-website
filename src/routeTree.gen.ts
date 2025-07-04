/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ProjectsIndexRouteImport } from './routes/projects/index'
import { Route as ProjectsPizzadaoRouteImport } from './routes/projects/pizzadao'
import { Route as ProjectsFroglandRouteImport } from './routes/projects/frogland'
import { Route as ProjectsBittreesRouteImport } from './routes/projects/bittrees'

const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProjectsIndexRoute = ProjectsIndexRouteImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProjectsPizzadaoRoute = ProjectsPizzadaoRouteImport.update({
  id: '/projects/pizzadao',
  path: '/projects/pizzadao',
  getParentRoute: () => rootRouteImport,
} as any)
const ProjectsFroglandRoute = ProjectsFroglandRouteImport.update({
  id: '/projects/frogland',
  path: '/projects/frogland',
  getParentRoute: () => rootRouteImport,
} as any)
const ProjectsBittreesRoute = ProjectsBittreesRouteImport.update({
  id: '/projects/bittrees',
  path: '/projects/bittrees',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/projects/bittrees': typeof ProjectsBittreesRoute
  '/projects/frogland': typeof ProjectsFroglandRoute
  '/projects/pizzadao': typeof ProjectsPizzadaoRoute
  '/projects': typeof ProjectsIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/projects/bittrees': typeof ProjectsBittreesRoute
  '/projects/frogland': typeof ProjectsFroglandRoute
  '/projects/pizzadao': typeof ProjectsPizzadaoRoute
  '/projects': typeof ProjectsIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/projects/bittrees': typeof ProjectsBittreesRoute
  '/projects/frogland': typeof ProjectsFroglandRoute
  '/projects/pizzadao': typeof ProjectsPizzadaoRoute
  '/projects/': typeof ProjectsIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/projects/bittrees'
    | '/projects/frogland'
    | '/projects/pizzadao'
    | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/projects/bittrees'
    | '/projects/frogland'
    | '/projects/pizzadao'
    | '/projects'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/projects/bittrees'
    | '/projects/frogland'
    | '/projects/pizzadao'
    | '/projects/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ProjectsBittreesRoute: typeof ProjectsBittreesRoute
  ProjectsFroglandRoute: typeof ProjectsFroglandRoute
  ProjectsPizzadaoRoute: typeof ProjectsPizzadaoRoute
  ProjectsIndexRoute: typeof ProjectsIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/projects/pizzadao': {
      id: '/projects/pizzadao'
      path: '/projects/pizzadao'
      fullPath: '/projects/pizzadao'
      preLoaderRoute: typeof ProjectsPizzadaoRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/projects/frogland': {
      id: '/projects/frogland'
      path: '/projects/frogland'
      fullPath: '/projects/frogland'
      preLoaderRoute: typeof ProjectsFroglandRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/projects/bittrees': {
      id: '/projects/bittrees'
      path: '/projects/bittrees'
      fullPath: '/projects/bittrees'
      preLoaderRoute: typeof ProjectsBittreesRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ProjectsBittreesRoute: ProjectsBittreesRoute,
  ProjectsFroglandRoute: ProjectsFroglandRoute,
  ProjectsPizzadaoRoute: ProjectsPizzadaoRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
