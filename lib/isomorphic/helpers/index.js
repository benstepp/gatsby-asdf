import Color from 'color'

export function lighten(color, val) {
  const c = Color(color)
  const { h, s, l } = c.hsl()
  const newLightness = l + (val * 100)
  c.hsl({ h, s, l: newLightness })
  return c.hexString()
}

export function darken(color, val) {
  const c = Color(color)
  const { h, s, l } = c.hsl()
  const newLightness = l - (val * 100)
  c.hsl({ h, s, l: newLightness })
  return c.hexString()
}

export function breakpoint(size) {
  switch (size) {
    case 'small':
      return '@media screen and (min-width: 0px)'
    case 'medium':
      return '@media screen and (min-width: 640px)'
    case 'large':
      return '@media screen and (min-width: 1024px)'
    case 'xlarge':
      return '@media screen and (min-width: 1440px)'
    default:
      return `@media screen and (min-width: ${size}px)`
  }
}
