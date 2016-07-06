import Color from 'color'

export default function darken(color, val) {
  const c = Color(color)
  const { h, s, l } = c.hsl()
  const newLightness = l - (val * 100)
  c.hsl({ h, s, l: newLightness })
  return c.hexString()
}
