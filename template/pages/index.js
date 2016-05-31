import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

export default class Index extends Component {
  render() {
    return (
      <h1 className={css(styles.h1)}>Index</h1>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    color: 'rebeccapurple',
  },
})
