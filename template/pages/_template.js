import React, { Component } from 'react'
import Schema from 'components/Schema'
import Helmet from 'components/Helmet'

export default class Template extends Component {
  render() {
    const { route, location } = this.props
    return (
      <div>
        <Helmet location={location} route={route} />

        <main>
          {this.props.children}
        </main>

        <Schema />
      </div>
    )
  }
}
