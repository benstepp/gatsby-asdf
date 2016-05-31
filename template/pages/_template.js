import React, { Component } from 'react'
import ReactTransitionGroup from 'react-transition-group-plus'
import Schema from 'components/schema'
import Helmet from 'components/helmet'

export default class Template extends Component {
  render() {
    const { route, location } = this.props
    return (
      <div>
        <Helmet location={location} route={route} />

        <ReactTransitionGroup>
          {this.props.children}
        </ReactTransitionGroup>

        <Schema />
      </div>
    )
  }
}
