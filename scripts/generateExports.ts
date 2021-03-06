/* eslint-disable no-console */
import fs = require('fs')

/** ---------------- Definition ---------------- */

function main (dir: string): void {
  // Log out the dir
  console.log(`Generate index file of ${dir}`)

  // Read filenames from export statements like "export * from './someFile'"
  const filenames = fs
    // Read the directory specified
    .readdirSync(dir)
    // Filter out 'index.ts' and private files/folders
    .filter(name => !['index.ts'].includes(name) && !/^\_/.test(name))
    // Map every filename to the export statement
    .map(filename => {
      // Remove all '.ts' extension from filenames
      const name = filename.replace(/\.ts$/i, '')
      // Construct the export statement
      return `export * from './${name}'`
    })
    // Join all lines with line break symbol
    .join('\n')

  // Write exports codes to the index.ts file (or create one and write)
  fs.writeFileSync(`${dir}/index.ts`, filenames)
}

export default main