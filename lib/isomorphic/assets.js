import React from 'react'
import { createHash } from 'crypto'
import { take } from 'lodash'

export function css(props) {
  const { css } = props
  if (typeof css !== 'undefined') {
    return [
      <style data-aphrodite dangerouslySetInnerHTML={{__html: css.content}}></style>,
      <script dangerouslySetInnerHTML={{__html: `window.__aphrodite__ = ${JSON.stringify(css.renderedClassNames)}`}} />,
    ]
  }
}

export function js(props) {
  if (process.env.NODE_ENV === 'production') {
    return <script src={`/bundle-${getHash()}.js`} />
  } else {
    return <script src='/bundle.js' />
  }
}

let hash
function getHash() {
  if (typeof hash === 'undefined') {
    hash = generateHash()
  }
  return hash
}

function generateHash() {
  const h = createHash('sha256')
  h.update(Date.now().toString())
  const digest = h.digest('hex')
  return take(digest, 24).join('')
}
