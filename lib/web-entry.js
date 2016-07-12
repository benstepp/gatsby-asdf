import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet } from 'aphrodite'
import { applyRouterMiddleware, browserHistory, Router } from 'react-router'
import useScroll from 'react-router-scroll'

import createRoutes from 'create-routes'
const loadContext = require('.gatsby-context')
import { onRouteChange, modifyRoutes } from 'gatsby-browser'

function loadConfig(callback) {
  const stuff = require('config')
  if (module.hot) module.hot.accept(stuff.id, callback)
  return callback()
}

browserHistory.listen(location => {
  if (onRouteChange) {
    onRouteChange(location)
  }
})

let routes
loadConfig(() => {
  loadContext((pagesReq) => {
    const { pages } = require('config')
    if (!routes) {
      routes = createRoutes(pages, pagesReq)
      if (modifyRoutes) { routes = modifyRoutes(routes) }
    }

    if (typeof window !== 'undefined') StyleSheet.rehydrate(window.__aphrodite__)
    render()
  })
})

function render() {
  const mount = typeof window !== 'undefined' ? document.getElementById('react-mount') : void 0
  const router = (
    <Router
      history={browserHistory}
      routes={routes}
      render={applyRouterMiddleware(useScroll())}
    />
  )
  ReactDOM.render(router, mount)
}
