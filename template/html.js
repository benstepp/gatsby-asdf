import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { css, js } from 'assets'
const normalize = require('!css?minimize!normalize.css')
const base = require('!css?minimize!base.css')

export default class HTML extends Component {
  render() {
    const head = Helmet.rewind()
    const attrs = Object.assign({}, head.htmlAttributes.toComponent())

    const { props } = this

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

          <style dangerouslySetInnerHTML={{__html: normalize + base}} />
          {css(props)}
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{__html: this.props.body}} />
          {js(props)}
        </body>
      </html>
    )
  }
}
