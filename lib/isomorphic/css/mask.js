export default function mask(distance = 0) {
  return {
    bottom: distance,
    left: distance,
    position: 'absolute',
    right: distance,
    top: distance,
  }
}
