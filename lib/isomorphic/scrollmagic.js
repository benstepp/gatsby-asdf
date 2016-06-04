let ScrollMagic

if (typeof window !== 'undefined') {
  ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/scrollmagic')
  window.ScrollMagic = ScrollMagic
  if (process.env.NODE_ENV !== 'production') {
    require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')
  }
} else {
  ScrollMagic = stub()
}

function stub() {
  return {
    Controller: function() {},
    Scene: function() {},
  }
}

export default ScrollMagic
