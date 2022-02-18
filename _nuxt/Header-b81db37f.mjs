import {
  D as y,
  c as _,
  w as o,
  n as u,
  B as w,
  o as h,
  d as c,
  a as i,
  E as C,
  F as b,
  y as f,
  t as k,
  _ as N,
  e as j,
  G as B,
  C as L,
} from './bootstrap-859756f4.mjs'
import { u as S } from './useWallet-3e9ec1a4.mjs'
import { d as T, e as V, f as D, g as W } from './index.es-38229df1.mjs'
import { _ as $ } from './logo.png'
import './numberTranslator-67ca5f44.mjs'
const A = () => y().$router
var F = '_nuxt/assets/avax.885adb1d.svg',
  G = '_nuxt/assets/telescope.20e4ac68.svg',
  O = '_nuxt/assets/logout-min.522b1625.svg'
const z = ['alt', 'height', 'width'],
  E = i(
    'img',
    { class: 'me-2', alt: 'Avalanche', src: F, height: '18', width: '18' },
    null,
    -1,
  ),
  H = f('Get UNIV'),
  I = i(
    'img',
    { class: 'me-2', alt: 'Telescope', src: G, height: '18', width: '17' },
    null,
    -1,
  ),
  M = f('Go to Observatory'),
  P = i(
    'img',
    { class: 'me-2', alt: 'Logout', src: O, height: '18', width: '18' },
    null,
    -1,
  )
function R(t, p, r, e, d, s) {
  const m = w('NuxtLink')
  return (
    h(),
    _(
      e.CNavbar,
      {
        class: u(['u-navbar mb-0 py-2 py-sm-3', 'theme-u-' + r.theme]),
        expand: 'xxl',
      },
      {
        default: o(() => [
          c(
            e.CContainer,
            {
              class: u([
                'justify-content-center justify-content-md-between d-flex',
                r.theme == 'light'
                  ? 'px-3'
                  : t.$route.name === 'index'
                  ? 'px-0'
                  : 'px-4 px-xl-0',
              ]),
              fluid: '',
            },
            {
              default: o(() => [
                c(
                  m,
                  { class: 'navbar-brand', to: '/' },
                  {
                    default: o(() => [
                      i(
                        'img',
                        {
                          class: 'logo',
                          alt: e.appTitle,
                          src: $,
                          height: t.$route.name === 'index' ? 48 : 32,
                          width: t.$route.name === 'index' ? 210 : 150,
                        },
                        null,
                        8,
                        z,
                      ),
                    ]),
                    _: 1,
                  },
                ),
                c(
                  e.CForm,
                  { class: 'header-buttons d-flex mt-3 mt-md-0 mb-2 mb-md-0' },
                  {
                    default: o(() => [
                      c(
                        e.CButton,
                        {
                          class: u([
                            'd-flex align-items-center me-2 me-md-3',
                            t.$route.name === 'index'
                              ? 'btn-hero-wrapper'
                              : 'btn-light-header',
                          ]),
                          component: 'a',
                          href: e.tradingLink,
                          rel: 'noopener nofollow noreferrer',
                          target: '_blank',
                        },
                        { default: o(() => [E, H]), _: 1 },
                        8,
                        ['href', 'class'],
                      ),
                      t.$route.name === 'index'
                        ? (h(),
                          _(
                            e.CButton,
                            {
                              key: 0,
                              class: 'btn-hero-wrapper',
                              onClick: C(e.headerConnect, ['prevent']),
                              to: '/observatory',
                            },
                            { default: o(() => [I, M]), _: 1 },
                            8,
                            ['onClick'],
                          ))
                        : b('', !0),
                      e.$isConnected &&
                      e.$wallet.$instance() &&
                      t.$route.name === 'observatory'
                        ? (h(),
                          _(
                            e.CButton,
                            {
                              key: 1,
                              class: 'btn-light-header',
                              onClick: C(e.headerDisconnect, ['prevent']),
                            },
                            {
                              default: o(() => [
                                P,
                                f(
                                  'Logout (' +
                                    k(
                                      e.getShortenedWalletName(
                                        e.$wallet.$instance().account,
                                      ),
                                    ) +
                                    ')',
                                  1,
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['onClick'],
                          ))
                        : b('', !0),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            },
            8,
            ['class'],
          ),
        ]),
        _: 1,
      },
      8,
      ['class'],
    )
  )
}
const U = j({
  props: { theme: String },
  setup(t, { expose: p }) {
    p()
    const { tradingLink: r, appTitle: e } = L(),
      d = B(),
      s = S(),
      m = (a) => {
        const n = 4
        return `${a.slice(0, n)}...${a.slice(-n)}`
      },
      l = (a) => A().push({ path: a })
    async function v() {
      await s.disconnect(), l('/')
    }
    async function x() {
      const a = 'observatory'
      if (d.value) l(a)
      else {
        s.hookOnce('connected', () => {
          l(a)
        })
        try {
          await s.connect()
        } catch (n) {
          n && n.message && (alert(n.message), console.log(n))
        }
      }
    }
    const g = {
      tradingLink: r,
      appTitle: e,
      $isConnected: d,
      $wallet: s,
      getShortenedWalletName: m,
      redirect: l,
      headerDisconnect: v,
      headerConnect: x,
      CButton: T,
      CForm: V,
      CContainer: D,
      CNavbar: W,
    }
    return (
      Object.defineProperty(g, '__isScriptSetup', {
        enumerable: !1,
        value: !0,
      }),
      g
    )
  },
})
var Y = N(U, [['render', R]])
export { Y as default }
