/**
 * https://github.com/Khan/aphrodite
 * MIT License
 * Copyright (c) 2016 Khan Academy
 *
 * This is a layer over aphrodite that provides the unimportant
 * css as a default.
*/
import { mapObj, hashObject } from 'aphrodite/lib/util'
import {
    injectStyleOnce,
    reset,
    startBuffering,
    flushToString,
    addRenderedClassNames,
    getRenderedClassNames,
} from 'aphrodite/lib/inject'

const StyleSheet = {
  create(sheetDefinition) {
    return mapObj(sheetDefinition, ([key, val]) => {
      return [key, {
        _name: `${key}_${hashObject(val)}`,
        _definition: val,
      }]
    })
  },

  rehydrate(renderedClassNames = []) {
    addRenderedClassNames(renderedClassNames)
  },
}

const StyleSheetServer = {
  renderStatic(renderFunc) {
    reset()
    startBuffering()
    const html = renderFunc()
    const cssContent = flushToString()

    return {
      html: html,
      css: {
        content: cssContent,
        renderedClassNames: getRenderedClassNames(),
      },
    }
  },
}

const createCssFn = (useImportant) => (...styleDefinitions) => {
  const validDefinitions = styleDefinitions.filter((def) => def)
  if (validDefinitions.length === 0) {
    return ''
  }

  const className = validDefinitions.map(s => s._name).join('-o_O-')
  injectStyleOnce(
    className,
    `.${className}`,
    validDefinitions.map(d => d._definition),
    useImportant
  )

  return className
}

export default {
  StyleSheet,
  StyleSheetServer,
  css: createCssFn(false),
  important: createCssFn(),
}
