const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')

const asdfDirectory = path.resolve(process.cwd(), 'template')
const userDirectory = path.resolve(process.cwd(), '..', '..')

glob(`${asdfDirectory}/**/*`, { dot: true }, (error, files) => {
  if (error) console.log(error)
  files.forEach(file => {
    fs.copySync(file, file.replace(asdfDirectory, userDirectory), { clobber: false })
  })
})
