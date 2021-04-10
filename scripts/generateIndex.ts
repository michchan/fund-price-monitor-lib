/* eslint-disable no-console */
import generateExports from './generateExports'
import fs = require('fs')

const isDirectory = (name: string): boolean => !/\..+$/.test(name)

/** ---------------- Read folder name ---------------- */

// Read module names from src
const folderNames = fs
  // Read the '/src' folder
  .readdirSync('src')
  // Filter out 'index.ts'
  .filter(name => !['index.ts'].includes(name))

/** ---------------- Definition ---------------- */

function main () {
  // Log out the dir
  console.log('Generate index file of src')

  // Map modules names to import statements
  const importStatements = folderNames
    .map(name => `import * as ${name} from './${name}'`)
    .join('\n')

  // Map modules names to named export statements
  const namedExportsStatements = folderNames
    .map(name => `export * from './${name}'`)
    .join('\n')

  // Map modules names to module export statements
  const moduleExportsStatements = folderNames
    .map(name => `  ...${name},`)
    .join('\n')

  // Generate string of whole file
  const fileText
    = `${importStatements}\n\n`
    + `/** -------------------- Named export -------------------- */\n\n${
      namedExportsStatements}\n\n`
    + '/** -------------------- Module export -------------------- */\n\n'
    + `export default {\n${
      moduleExportsStatements
    }\n}`

  // Write exports codes to the src/index.ts file (or create one and write)
  fs.writeFileSync('src/index.ts', fileText)
}

module.exports = main

/** ---------------- Recur module directories ---------------- */

const generateModuleIndexRecur = (pathname: string) => {
  if (!isDirectory(pathname)) return

  generateExports(pathname)
  const subPathnames = fs.readdirSync(pathname)
  subPathnames.forEach(path => generateModuleIndexRecur(`${pathname}/${path}`))
}

/** ---------------- Execute ---------------- */

// Generate module index
folderNames.forEach(name => generateModuleIndexRecur(`src/${name}`))

// Generate src/index
main()