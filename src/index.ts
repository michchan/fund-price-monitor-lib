import * as models from './models'
import * as services from './services'

/** -------------------- Named export -------------------- */

export * from './models'
export * from './services'

/** -------------------- Module export -------------------- */

export default {
  ...models,
  ...services,
}