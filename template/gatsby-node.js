import * as asdf from 'gatsby-asdf'

export function modifyWebpackConfig(config, stage) {
  asdf.modifyWebpackConfig(config, stage)
  return config
}

export function postBuild(pages, callback) {
  asdf.postBuild(pages, callback)
}
