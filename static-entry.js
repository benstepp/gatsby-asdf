import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite'
import { match, RouterContext } from 'react-router'
import createRoutes from 'create-routes'
import Html from 'html'
const loadContext = require('.gatsby-context')
import { pages } from 'config'

let routes
loadContext((pagesReq) => {
  routes = createRoutes(pages, pagesReq)
})

module.exports = (locals, callback) => {
  match({ routes, location: locals.path }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error)
      callback(error)
    } else if (renderProps) {
      const { html, css } = StyleSheetServer.renderStatic(() => {
        return renderToString(<RouterContext {...renderProps} />)
      })

      const page = `<!DOCTYPE html>\n ${renderToStaticMarkup(
        <Html body={html} css={css} {...renderProps} />
      )}`

      callback(null, page)
    }
  })
}
