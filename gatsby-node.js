import fs from 'fs'
import path from 'path'
import toml from 'toml'
import { createSitemap } from 'sitemap'

export function modifyWebpackConfig(config, stage) {
  if (stage === 'build-html') {
    config._config.entry = { main: path.resolve(__dirname, 'static-entry.js') }
  } else if (stage === 'develop') {
    config._config.entry = [
      require.resolve('webpack-hot-middleware/client'),
      path.resolve(__dirname, 'web-entry'),
    ]
  } else {
    config._config.entry = { main: path.resolve(__dirname, 'web-entry.js') }
  }

  config._config.resolve.root.splice(1, 0, __dirname)
  return config
}

export function postBuild(pages, callback) {
  const config = toml.parse(fs.readFileSync('./config.toml'))
  const routes = pages.filter(p => p.path !== undefined)

  const sitemap = createSitemap({
    hostname: config.url,
    cachetime: 60000,
    urls: routes.map(r => {
      return {
        url: r.path,
        changefreq: 'monthly',
        priority: 0.5,
      }
    }),
  })
  fs.writeFileSync('./public/sitemap.xml', sitemap.toString())

  const robots = strip`
    User-agent: *
    Sitemap: ${config.url}/sitemap.xml
  `
  fs.writeFileSync('./public/robots.txt', robots)

  callback()
}

function strip(strings, ...values) {
  let output = ''
  for (let i = 0; i < values.length; i++) {
    output += strings[i] + values[i]
  }
  output += strings[values.length]
  let lines = output.split(/(?:\r\n|\n|\r)/)
  return lines.map((line) => {
    return line.replace(/^\s+/gm, '')
  }).join('\n').trim()
}
