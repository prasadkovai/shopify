import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\_theme\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_vuescrollto_04e9d7dc from 'nuxt_plugin_vuescrollto_04e9d7dc' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_2ed36882 from 'nuxt_plugin_cookieuniversalnuxt_2ed36882' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginseo_b05dcb6a from 'nuxt_plugin_pluginseo_b05dcb6a' // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_f6b13e7c from 'nuxt_plugin_pluginrouting_f6b13e7c' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_0de111ed from 'nuxt_plugin_pluginmain_0de111ed' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugin352a930e_10e59ad1 from 'nuxt_plugin_nuxtplugin352a930e_10e59ad1' // Source: .\\nuxt.plugin.352a930e.js (mode: 'all')
import nuxt_plugin_plugin_705f3a29 from 'nuxt_plugin_plugin_705f3a29' // Source: .\\composition-api\\plugin.js (mode: 'all')
import nuxt_plugin_pluginslogger2ff43543_050af23a from 'nuxt_plugin_pluginslogger2ff43543_050af23a' // Source: .\\plugins.logger.2ff43543.js (mode: 'all')
import nuxt_plugin_pluginsssrd4bcc56e_207aa2c5 from 'nuxt_plugin_pluginsssrd4bcc56e_207aa2c5' // Source: .\\plugins.ssr.d4bcc56e.js (mode: 'all')
import nuxt_plugin_pluginscontext816b9ae8_785df9f4 from 'nuxt_plugin_pluginscontext816b9ae8_785df9f4' // Source: .\\plugins.context.816b9ae8.js (mode: 'all')
import nuxt_plugin_workbox_78580573 from 'nuxt_plugin_workbox_78580573' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_1e2bd6f3 from 'nuxt_plugin_metaplugin_1e2bd6f3' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_22d37c67 from 'nuxt_plugin_iconplugin_22d37c67' // Source: .\\pwa\\icon.plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Shopify | Vue Storefront Next","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"theme-color","content":"#5ece7b"},{"hid":"description","name":"description","content":"\u003E Boilerplate theme"},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_vuescrollto_04e9d7dc === 'function') {
    await nuxt_plugin_vuescrollto_04e9d7dc(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_2ed36882 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_2ed36882(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_b05dcb6a === 'function') {
    await nuxt_plugin_pluginseo_b05dcb6a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_f6b13e7c === 'function') {
    await nuxt_plugin_pluginrouting_f6b13e7c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_0de111ed === 'function') {
    await nuxt_plugin_pluginmain_0de111ed(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin352a930e_10e59ad1 === 'function') {
    await nuxt_plugin_nuxtplugin352a930e_10e59ad1(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_705f3a29 === 'function') {
    await nuxt_plugin_plugin_705f3a29(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginslogger2ff43543_050af23a === 'function') {
    await nuxt_plugin_pluginslogger2ff43543_050af23a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssrd4bcc56e_207aa2c5 === 'function') {
    await nuxt_plugin_pluginsssrd4bcc56e_207aa2c5(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontext816b9ae8_785df9f4 === 'function') {
    await nuxt_plugin_pluginscontext816b9ae8_785df9f4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_78580573 === 'function') {
    await nuxt_plugin_workbox_78580573(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_1e2bd6f3 === 'function') {
    await nuxt_plugin_metaplugin_1e2bd6f3(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_22d37c67 === 'function') {
    await nuxt_plugin_iconplugin_22d37c67(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
