import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c0d402d = () => interopDefault(import('..\\_theme\\pages\\Category.vue' /* webpackChunkName: "_theme/pages/Category" */))
const _2440747d = () => interopDefault(import('..\\_theme\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _3982de47 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "" */))
const _2120d6f2 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _7054113a = () => interopDefault(import('..\\_theme\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "" */))
const _0702437d = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _1edfe1b8 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _79d46c75 = () => interopDefault(import('..\\_theme\\pages\\Checkout.vue' /* webpackChunkName: "_theme/pages/Checkout" */))
const _29578981 = () => interopDefault(import('..\\_theme\\pages\\Checkout\\OrderReview.vue' /* webpackChunkName: "_theme/pages/Checkout/OrderReview" */))
const _b902267e = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "_theme/pages/Checkout/Payment" */))
const _1a8e759d = () => interopDefault(import('..\\_theme\\pages\\Checkout\\PersonalDetails.vue' /* webpackChunkName: "_theme/pages/Checkout/PersonalDetails" */))
const _56441afa = () => interopDefault(import('..\\_theme\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "_theme/pages/Checkout/Shipping" */))
const _832883ac = () => interopDefault(import('..\\_theme\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "_theme/pages/Checkout/ThankYou" */))
const _2e914f16 = () => interopDefault(import('..\\_theme\\pages\\Home.vue' /* webpackChunkName: "" */))
const _0b10030e = () => interopDefault(import('..\\_theme\\pages\\Home.vue' /* webpackChunkName: "_theme/pages/Home" */))
const _08592f7c = () => interopDefault(import('..\\_theme\\pages\\MyAccount.vue' /* webpackChunkName: "_theme/pages/MyAccount" */))
const _639110ae = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/BillingDetails" */))
const _a7f999f8 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "_theme/pages/MyAccount/LoyaltyCard" */))
const _30410367 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyNewsletter" */))
const _dcf2b22a = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyProfile" */))
const _4decef46 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyReviews" */))
const _0b8624c8 = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "_theme/pages/MyAccount/OrderHistory" */))
const _aeda357c = () => interopDefault(import('..\\_theme\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/ShippingDetails" */))
const _2c462190 = () => interopDefault(import('..\\_theme\\pages\\Product.vue' /* webpackChunkName: "_theme/pages/Product" */))
const _c22f3d8c = () => interopDefault(import('..\\_theme\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _20960ef0 = () => interopDefault(import('..\\_theme\\pages\\Product.vue' /* webpackChunkName: "" */))
const _330d6f96 = () => interopDefault(import('..\\_theme\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _3c0d402d,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _2440747d,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _3982de47,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _2120d6f2,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _7054113a,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _0702437d,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _1edfe1b8,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _79d46c75,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _29578981,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _b902267e,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _1a8e759d,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _56441afa,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _832883ac,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _2e914f16,
    name: "home___de"
  }, {
    path: "/Home",
    component: _0b10030e,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _08592f7c,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _639110ae,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _a7f999f8,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _30410367,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _dcf2b22a,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _4decef46,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _0b8624c8,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _aeda357c,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _2c462190,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _3c0d402d,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _2440747d,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _3982de47,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _2120d6f2,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _7054113a,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _0702437d,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _1edfe1b8,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _79d46c75,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _29578981,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _b902267e,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _1a8e759d,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _56441afa,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _832883ac,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _0b10030e,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _08592f7c,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _639110ae,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _a7f999f8,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _30410367,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _dcf2b22a,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _4decef46,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _0b8624c8,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _aeda357c,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _2c462190,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _c22f3d8c,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _20960ef0,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _330d6f96,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _c22f3d8c,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _20960ef0,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _330d6f96,
    name: "category___en"
  }, {
    path: "/",
    component: _2e914f16,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
