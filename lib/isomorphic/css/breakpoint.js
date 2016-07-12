import rem from './rem'

export default function breakpoint(size) {
  switch (size) {
    case 'small':
      return `@media screen and (min-width: ${rem(0)})`
    case 'medium':
      return `@media screen and (min-width: ${rem(640)})`
    case 'large':
      return `@media screen and (min-width: ${rem(1024)})`
    case 'xlarge':
      return `@media screen and (min-width: ${rem(1440)})`
    default:
      return `@media screen and (min-width: ${rem(size)})`
  }
}
