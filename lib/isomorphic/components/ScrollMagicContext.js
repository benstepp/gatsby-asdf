import { Component, PropTypes } from 'react'
import { Controller } from 'scrollmagic'

export default class ScrollMagicContext extends Component {
  state = { controller: new Controller() }
  static contextTypes = { location: PropTypes.any }

  static get childContextTypes() {
    return { controller: PropTypes.any }
  }

  getChildContext() {
    return { controller: this.state.controller }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.location.key !== this.context.location.key) {
      this.state.controller.destroy()
      this.setState({ controller: new Controller() })
    }
  }

  render() {
    return this.props.children
  }
}
