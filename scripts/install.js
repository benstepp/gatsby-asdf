const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')

const asdfDirectory = path.resolve(process.cwd(), 'template')
const userDirectory = path.resolve(process.cwd(), '..', '..')

function copyTemplate() {
  glob(`${asdfDirectory}/**/*`, { dot: true }, (error, files) => {
    if (error) console.log(error)
    files.forEach(file => {
      try {
        fs.copySync(file, file.replace(asdfDirectory, userDirectory), { clobber: false })
      } catch (e) {}
    })
  })
}

const gitignore = `
node_modules
.gatsby-context.js
public
`
function createGitignore() {
  const ignorePath = path.resolve(userDirectory, '.gitignore')
  try {
    fs.writeFileSync(ignorePath, gitignore, 'utf-8')
  } catch (e) {}
}

copyTemplate()
createGitignore()
