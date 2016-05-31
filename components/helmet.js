import React, { Component } from 'react'
import ReactHelmet from 'react-helmet'
import { config } from 'config'

export default class Helmet extends Component {
  get url() {
    const { location } = this.props
    return `${config.url}${location}`
  }

  get metaTitle() {
    const { route } = this.props
    return route.component.metaTitle || config.default_title
  }

  get metaDescription() {
    const { route } = this.props
    return route.component.metaDescription || config.default_title
  }

  render() {
    return (
      <ReactHelmet
        htmlAttributes={{'lang': 'en'}}
        title={this.metaTitle}
        meta={[
          {'name': 'description', 'content': this.metaTescription},

          { name: 'og:title', content: this.metaTitle },
          { name: 'og:description', content: this.metaDescription },
          { name: 'og:url', content: this.url },
          { name: 'og:site_name', content: config.name },
          { name: 'og:type', content: 'website' },
          { name: 'og:local', content: 'en_US' },
          { name: 'og:image', content: config.logo },

          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: config.twitter },
          { name: 'twitter:site:id', content: config.twitter_id },
          { name: 'twitter:title', content: this.metaTitle },
          { name: 'twitter:description', content: this.metaDescription },
          { name: 'twitter:domain', content: config.name },
          { name: 'twitter:image', content: config.logo },

          { name: 'msapplication-TileColor', content: '#FFFFFF' },
          { name: 'msapplication-TileImage', content: '/assets/favicons/windows-tile.png' },
        ]}
        link={[
          {'rel': 'canonical', 'href': this.url},
          { rel: 'shortcut icon', href: '/favicons/favicon.ico', type: 'image/x-icon' },
          { rel: 'icon', href: '/favicons/favicon.ico', type: 'image/x-icon' },
          { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-touch-icon-57x57.png' },
          { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-touch-icon-72x72.png' },
          { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-touch-icon-114x114.png' },
          { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-touch-icon-144x144.png' },
        ]}
      />
    )
  }
}
