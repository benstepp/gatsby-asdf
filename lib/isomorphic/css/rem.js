import { config } from 'config'
const BASE = config.remBase || 16

export default function rem(pixel) {
  if (typeof pixel === 'string') {
    const match = pixel.match(/\d+/)
    if (match) pixel = Number(match[0])
  }
  if (typeof pixel === 'number') {
    return `${pixel / BASE}rem`
  }
}
