import React, { Component } from 'react'
import Helmet from 'react-helmet'
const normalize = require('!css?minimize!normalize.css')

export default class HTML extends Component {
  render() {
    const head = Helmet.rewind()
    const attrs = Object.assign({}, head.htmlAttributes.toComponent())

    const { css } = this.props
    let style
    if (typeof css !== 'undefined') {
      style = [
        <style data-aphrodite dangerouslySetInnerHTML={{__html: css.content}}></style>,
        <script dangerouslySetInnerHTML={{__html: `window.__aphrodite__ = ${JSON.stringify(css.renderedClassNames)}`}} />,
      ]
    }

    return (
      <html {...attrs}>
        <head>
          <meta charSet='utf-8' />
          <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
          <meta content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' name='viewport' />
          <meta name='format-detection' content='telephone=no' />

          {head.meta.toComponent()}
          {head.title.toComponent()}
          {head.link.toComponent()}

          {style}
          <style dangerouslySetInnerHTML={{__html: normalize}} />
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src='/bundle.js' />
        </body>
      </html>
    )
  }
}
