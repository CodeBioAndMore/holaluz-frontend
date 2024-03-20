/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { pinia } from '../stores';
import vuetify from './vuetify'

// Types
import type { App } from 'vue'

//Pinia


export function registerPlugins (app: App) {
  app.use(pinia);
  app.use(vuetify)
}
