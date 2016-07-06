import { config } from 'config'
import rem from './rem'
const DEFAULT_GUTTER = config.gutter || 20

export default function column(fraction, options = {}) {
  const gutter = options.hasOwnProperty('gutter') ? options.gutter : DEFAULT_GUTTER
  const column = {
    display: 'block',
    float: 'left',
    paddingLeft: rem(gutter),
    paddingRight: rem(gutter),
    width: `${fraction * 100}%`,
  }

  if (options.hasOwnProperty('offset')) {
    Object.assign(column, { marginLeft: `${options.offset * 100}%` })
  }

  return column
}
