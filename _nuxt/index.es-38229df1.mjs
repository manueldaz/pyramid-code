var fa = Object.defineProperty,
  ca = Object.defineProperties
var va = Object.getOwnPropertyDescriptors
var Ct = Object.getOwnPropertySymbols
var ma = Object.prototype.hasOwnProperty,
  pa = Object.prototype.propertyIsEnumerable
var xt = (e, t, a) =>
    t in e
      ? fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a),
  x = (e, t) => {
    for (var a in t || (t = {})) ma.call(t, a) && xt(e, a, t[a])
    if (Ct) for (var a of Ct(t)) pa.call(t, a) && xt(e, a, t[a])
    return e
  },
  H = (e, t) => ca(e, va(t))
import {
  e as f,
  r as b,
  p as P,
  h as l,
  f as Qe,
  T as Y,
  g as R,
  i as qt,
  j as ga,
  k as ue,
  l as ya,
  m as Ze,
  q as ha,
  s as Bt,
  u as ba,
  v as wa,
  x as j,
} from './bootstrap-859756f4.mjs'
f({
  name: 'CAccordion',
  props: {
    activeItemKey: { type: [Number, String], default: void 0, require: !1 },
    alwaysOpen: Boolean,
    flush: Boolean,
  },
  setup(e, { slots: t }) {
    const a = b(e.activeItemKey),
      n = (r) => {
        a.value = r
      }
    return (
      P('activeItemKey', a),
      P('alwaysOpen', e.alwaysOpen),
      P('setActiveItemKey', n),
      () =>
        l(
          'div',
          { class: ['accordion', { ['accordion-flush']: e.flush }] },
          t.default && t.default(),
        )
    )
  },
})
const St = {
    beforeMount(e, { value: t }, { transition: a }) {
      ;(e._vod = e.style.display === 'none' ? '' : e.style.display),
        a && t && a.beforeEnter(e)
    },
    mounted(e, { value: t }, { transition: a }) {
      a && t && a.enter(e)
    },
    updated(e, { value: t, oldValue: a }, { transition: n }) {
      !t != !a &&
        n &&
        (t ? (n.beforeEnter(e), n.enter(e)) : n.leave(e, () => {}))
    },
  },
  Ot = f({
    name: 'CCollapse',
    props: {
      horizontal: { type: Boolean, required: !1 },
      visible: { type: Boolean, required: !1 },
    },
    emits: ['hide', 'show'],
    setup(e, { slots: t, emit: a }) {
      const n = b(!1),
        r = b(e.visible),
        i = () => {
          n.value = !0
        },
        o = (c, m) => {
          a('show'),
            c.addEventListener('transitionend', () => {
              m()
            }),
            setTimeout(() => {
              if (e.horizontal) {
                c.style.width = `${c.scrollWidth}px`
                return
              }
              c.style.height = `${c.scrollHeight}px`
            }, 1)
        },
        d = (c) => {
          ;(r.value = !0),
            (n.value = !1),
            e.horizontal
              ? c.style.removeProperty('width')
              : c.style.removeProperty('height')
        },
        u = (c) => {
          if (((n.value = !0), (r.value = !1), e.horizontal)) {
            c.style.width = `${c.scrollWidth}px`
            return
          }
          c.style.height = `${c.scrollHeight}px`
        },
        v = (c, m) => {
          a('hide'),
            c.addEventListener('transitionend', () => {
              m()
            }),
            setTimeout(() => {
              if (e.horizontal) {
                c.style.width = '0px'
                return
              }
              c.style.height = '0px'
            }, 1)
        },
        s = (c) => {
          ;(n.value = !1),
            e.horizontal
              ? c.style.removeProperty('width')
              : c.style.removeProperty('height')
        }
      return () =>
        l(
          Y,
          {
            css: !1,
            onBeforeEnter: () => i(),
            onEnter: (c, m) => o(c, m),
            onAfterEnter: (c) => d(c),
            onBeforeLeave: (c) => u(c),
            onLeave: (c, m) => v(c, m),
            onAfterLeave: (c) => s(c),
          },
          () =>
            Qe(
              l(
                'div',
                {
                  class: [
                    n.value ? 'collapsing' : 'collapse',
                    { 'collapse-horizontal': e.horizontal, show: r.value },
                  ],
                },
                t.default && t.default(),
              ),
              [[St, e.visible]],
            ),
        )
    },
  })
f({
  name: 'CAccordionBody',
  setup(e, { slots: t }) {
    const a = j('visible')
    return () =>
      l(
        Ot,
        { class: 'accordion-collapse', visible: a.value },
        {
          default: () =>
            l('div', { class: ['accordion-body'] }, t.default && t.default()),
        },
      )
  },
})
const Ca = f({
  name: 'CAccordionButton',
  setup(e, { slots: t }) {
    const a = j('toggleVisibility'),
      n = j('visible')
    return () =>
      l(
        'button',
        {
          'aria-expanded': !n.value,
          class: ['accordion-button', { collapsed: !n.value }],
          onClick: () => a(),
        },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CAccordionCollapse',
  props: { visible: { type: Boolean, required: !1 } },
  setup(e, { slots: t }) {
    return () =>
      l(
        Ot,
        { class: 'accordion-collapse', visible: e.visible },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CAccordionHeader',
  setup(e, { slots: t }) {
    return () =>
      l(
        'div',
        { class: ['accordion-header'] },
        l(Ca, {}, { default: () => t.default && t.default() }),
      )
  },
})
f({
  name: 'CAccordionItem',
  props: { itemKey: { type: [Number, String], default: void 0, require: !1 } },
  setup(e, { slots: t }) {
    const a = j('activeItemKey'),
      n = j('alwaysOpen'),
      r = j('setActiveItemKey'),
      i = b(e.itemKey ? e.itemKey : Math.random().toString(36).substr(2, 9)),
      o = b(Boolean(a.value === i.value))
    R(a, () => (o.value = Boolean(a.value === i.value)))
    const d = () => {
      ;(o.value = !o.value), !n && o && r(i.value)
    }
    return (
      P('visible', o),
      P('toggleVisibility', d),
      () => l('div', { class: ['accordion-item'] }, t.default && t.default())
    )
  },
})
const Be = {
    type: String,
    validator: (e) =>
      [
        'rounded',
        'rounded-top',
        'rounded-end',
        'rounded-bottom',
        'rounded-start',
        'rounded-circle',
        'rounded-pill',
        'rounded-0',
        'rounded-1',
        'rounded-2',
        'rounded-3',
      ].includes(e),
  },
  q = {
    type: String,
    validator: (e) =>
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'light',
        'link',
        'transparent',
      ].includes(e),
  },
  et = {
    type: String,
    validator: (e) =>
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'light',
        'white',
        'muted',
        'high-emphasis',
        'medium-emphasis',
        'disabled',
        'high-emphasis-inverse',
        'medium-emphasis-inverse',
        'disabled-inverse',
      ].includes(e),
  },
  Ve = f({
    name: 'CCloseButton',
    props: {
      disabled: { type: Boolean, required: !1 },
      white: { type: Boolean, required: !1 },
    },
    emits: ['click'],
    setup(e, { emit: t }) {
      const a = () => {
        t('click')
      }
      return () =>
        l('button', {
          class: [
            'btn',
            'btn-close',
            { ['btn-close-white']: e.white },
            e.disabled,
          ],
          'aria-label': 'Close',
          disabled: e.disabled,
          onClick: a,
        })
    },
  }),
  or = f({
    name: 'CAlert',
    props: {
      color: q,
      dismissible: { type: Boolean, default: !1, required: !1 },
      variant: {
        type: String,
        default: void 0,
        required: !1,
        validator: (e) => e === 'solid',
      },
      visible: { type: Boolean, default: !0, required: !1 },
    },
    emits: ['close'],
    setup(e, { slots: t, emit: a }) {
      const n = b(e.visible)
      R(
        () => e.visible,
        () => {
          n.value = e.visible
        },
      )
      const r = () => {
        ;(n.value = !1), a('close')
      }
      return () =>
        l(
          Y,
          {
            name: 'fade',
            duration: 350,
            enterFromClass: '',
            enterActiveClass: 'fade',
            enterToClass: 'fade show',
            leaveActiveClass: 'fade',
          },
          {
            default: () =>
              n.value &&
              l(
                'div',
                {
                  class: [
                    'alert',
                    e.variant === 'solid'
                      ? `bg-${e.color} text-white border-0`
                      : `alert-${e.color}`,
                    {
                      [`alert-${e.color}`]: e.color,
                      'alert-dismissible': e.dismissible,
                    },
                  ],
                },
                [
                  t.default && t.default(),
                  e.dismissible &&
                    l(Ve, {
                      onClick: () => {
                        r()
                      },
                    }),
                ],
              ),
          },
        )
    },
  })
f({
  name: 'CAlertHeading',
  props: { component: { type: String, default: 'h4', required: !1 } },
  setup(e, { slots: t }) {
    return () => l(e.component, { class: 'alert-heading' }, t)
  },
})
f({
  name: 'CAlertLink',
  setup(e, { slots: t }) {
    return () => l('a', { class: 'alert-link' }, t)
  },
})
f({
  name: 'CAvatar',
  props: {
    color: q,
    shape: Be,
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['sm', 'md', 'lg', 'xl'].includes(e),
    },
    src: { type: String, default: void 0, required: !1 },
    status: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) =>
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'dark',
          'light',
        ].includes(e),
    },
    textColor: et,
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'div',
        {
          class: [
            'avatar',
            {
              [`bg-${e.color}`]: e.color,
              [`avatar-${e.size}`]: e.size,
              [`text-${e.textColor}`]: e.textColor,
            },
            `${e.shape}`,
          ],
        },
        [
          e.src
            ? l('img', { src: e.src, class: 'avatar-img' })
            : t.default && t.default(),
          e.status && l('span', { class: ['avatar-status', `bg-${e.status}`] }),
        ],
      )
  },
})
const tt = f({
  name: 'CBackdrop',
  props: { visible: { type: Boolean, default: !1, required: !1 } },
  setup(e) {
    const t = (i) => {
        i.classList.remove('d-none')
      },
      a = (i, o) => {
        i.addEventListener('transitionend', () => {
          o()
        }),
          setTimeout(() => {
            ;(i.style.visibility = 'visible'), i.classList.add('show')
          }, 1)
      },
      n = (i, o) => {
        i.addEventListener('transitionend', () => {
          o()
        }),
          i.classList.remove('show')
      },
      r = (i) => {
        i.classList.add('d-none')
      }
    return () =>
      l(
        Y,
        {
          onBeforeEnter: (i) => t(i),
          onEnter: (i, o) => a(i, o),
          onLeave: (i, o) => n(i, o),
          onAfterLeave: (i) => r(i),
        },
        () => e.visible && l('div', { class: 'fade' }),
      )
  },
})
f({
  name: 'CBadge',
  props: {
    color: q,
    component: { type: String, required: !1, default: 'span' },
    position: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) =>
        ['top-start', 'top-end', 'bottom-end', 'bottom-start'].includes(e),
    },
    shape: Be,
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => e === 'sm',
    },
    textColor: et,
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        {
          class: [
            'badge',
            {
              [`bg-${e.color}`]: e.color,
              'position-absolute translate-middle': e.position,
              'top-0': e.position && e.position.includes('top'),
              'top-100': e.position && e.position.includes('bottom'),
              'start-100': e.position && e.position.includes('end'),
              'start-0': e.position && e.position.includes('start'),
              [`badge-${e.size}`]: e.size,
              [`text-${e.textColor}`]: e.textColor,
            },
            e.shape,
          ],
        },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CBreadcrumbItem',
  props: {
    active: { type: Boolean, required: !1 },
    href: { type: String, default: void 0, required: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'li',
        x(
          { class: ['breadcrumb-item', { active: e.active }] },
          e.active && { 'aria-current': 'page' },
        ),
        e.href
          ? l('a', { href: e.href }, t.default && t.default())
          : t.default && t.default(),
      )
  },
})
f({
  name: 'CBreadcrumb',
  setup(e, { slots: t, attrs: a }) {
    return () =>
      l(
        'nav',
        { 'aria-label': 'breadcrumb' },
        l('ol', { class: ['breadcrumb', a.class] }, t.default && t.default()),
      )
  },
})
const dr = f({
  name: 'CButton',
  props: {
    active: { type: Boolean, default: !1, required: !1 },
    color: q,
    component: { type: String, default: 'button', required: !1 },
    disabled: { type: Boolean, required: !1 },
    href: { type: String, default: void 0, required: !1 },
    shape: Be,
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['sm', 'lg'].includes(e),
    },
    variant: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['ghost', 'outline'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        x(
          x(
            {
              class: [
                'btn',
                e.variant ? `btn-${e.variant}-${e.color}` : `btn-${e.color}`,
                {
                  [`btn-${e.size}`]: e.size,
                  active: e.active,
                  disabled: e.disabled,
                },
                e.shape,
              ],
              disabled: e.disabled && e.component !== 'a',
            },
            e.component === 'a' &&
              e.disabled && { 'aria-disabled': !0, tabIndex: -1 },
          ),
          e.component === 'a' && e.href && { href: e.href },
        ),
        t.default && t.default(),
      )
  },
})
f({
  name: 'CButtonToolbar',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'btn-toolbar' }, t.default && t.default())
  },
})
const ur = f({
    name: 'CButtonGroup',
    props: {
      size: {
        type: String,
        default: void 0,
        required: !1,
        validator: (e) => ['sm', 'lg'].includes(e),
      },
      vertical: { type: Boolean, required: !1 },
    },
    setup(e, { slots: t }) {
      return () =>
        l(
          'div',
          {
            class: [
              e.vertical ? 'btn-group-vertical' : 'btn-group',
              { [`btn-group-${e.size}`]: e.size },
            ],
          },
          t.default && t.default(),
        )
    },
  }),
  sr = f({
    name: 'CCallout',
    props: { color: q },
    setup(e, { slots: t }) {
      return () =>
        l(
          'div',
          { class: ['callout', { [`callout-${e.color}`]: e.color }] },
          t.default && t.default(),
        )
    },
  }),
  se = f({
    name: 'CCard',
    props: { color: q, textColor: et },
    setup(e, { slots: t }) {
      return () =>
        l(
          'div',
          {
            class: [
              'card',
              {
                [`bg-${e.color}`]: e.color,
                [`text-${e.textColor}`]: e.textColor,
              },
            ],
          },
          t.default && t.default(),
        )
    },
  }),
  fe = f({
    name: 'CCardBody',
    setup(e, { slots: t }) {
      return () => l('div', { class: 'card-body' }, t.default && t.default())
    },
  }),
  xa = f({
    name: 'CCardFooter',
    setup(e, { slots: t }) {
      return () => l('div', { class: 'card-footer' }, t.default && t.default())
    },
  })
f({
  name: 'CCardGroup',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'card-group' }, t.default && t.default())
  },
})
const qa = f({
  name: 'CCardHeader',
  props: { component: { type: String, required: !1, default: 'div' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'card-header' }, t.default && t.default())
  },
})
f({
  name: 'CCardImage',
  props: {
    component: { type: String, required: !1, default: 'img' },
    orientation: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['top', 'bottom'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        { class: `card-img${e.orientation ? `-${e.orientation}` : ''}` },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CCardImageOverlay',
  setup(e, { slots: t }) {
    return () =>
      l('div', { class: 'card-img-overlay' }, t.default && t.default())
  },
})
const De = f({
  name: 'CLink',
  props: {
    active: { type: Boolean, required: !1 },
    component: { type: String, required: !1, default: 'a' },
    disabled: { type: Boolean, required: !1 },
    href: { type: String, default: void 0, required: !1 },
  },
  emits: ['click'],
  setup(e, { slots: t, emit: a }) {
    const n = () => {
      a('click', e.href)
    }
    return () =>
      l(
        e.component,
        H(
          x(
            x(
              x(
                { class: [{ active: e.active, disabled: e.disabled }] },
                e.active && { 'aria-current': 'page' },
              ),
              e.component === 'a' &&
                e.disabled && { 'aria-disabled': !0, tabIndex: -1 },
            ),
            (e.component === 'a' || e.component === 'button') && { onClick: n },
          ),
          { href: e.href },
        ),
        t.default && t.default(),
      )
  },
})
f({
  name: 'CCardLink',
  props: { href: { type: String, default: '#', required: !1 } },
  setup(e, { slots: t }) {
    return () =>
      l(
        De,
        { class: 'card-link', href: e.href },
        { default: () => t.default && t.default() },
      )
  },
})
f({
  name: 'CCardSubtitle',
  props: { component: { type: String, required: !1, default: 'h6' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'card-subtitle' }, t.default && t.default())
  },
})
f({
  name: 'CCardText',
  props: { component: { type: String, required: !1, default: 'p' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'card-text' }, t.default && t.default())
  },
})
f({
  name: 'CCardTitle',
  props: { component: { type: String, required: !1, default: 'h5' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'card-title' }, t.default && t.default())
  },
})
const $t = (e) => {
  const t = e.getBoundingClientRect()
  return (
    t.top >= 0 &&
    t.left >= 0 &&
    t.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    t.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
f({
  name: 'CCarousel',
  props: {
    controls: Boolean,
    dark: Boolean,
    index: { type: Number, default: 0, required: !1 },
    indicators: Boolean,
    interval: { type: [Boolean, Number], default: 5e3, required: !1 },
    pause: {
      type: [Boolean, String],
      default: 'hover',
      required: !1,
      validator: (e) => typeof e == 'boolean' || e === 'hover',
    },
    transition: {
      type: String,
      default: 'slide',
      required: !1,
      validator: (e) => ['crossfade', 'slide'].includes(e),
    },
    wrap: { type: Boolean, default: !0, required: !1 },
  },
  setup(e, { slots: t }) {
    const a = b(),
      n = b(),
      r = b(!1),
      i = b(),
      o = b(e.interval),
      d = (y) => {
        r.value = y
      },
      u = (y) => {
        o.value = y
      }
    P('setAnimating', d), P('setCustomInterval', u)
    const v = () => n.value && clearInterval(n.value),
      s = () => {
        v(),
          typeof e.interval == 'number' &&
            (n.value = setTimeout(
              () => p(),
              typeof o.value == 'number' ? o.value : e.interval,
            ))
      },
      c = qt({ items: [], active: e.index, direction: 'next' })
    ga(() => {
      t.default &&
        (c.items = t.default().filter((y) => y.type.name === 'CCarouselItem'))
    })
    const m = (y) => {
        r.value ||
          ((c.direction = y),
          y === 'next'
            ? c.active === c.items.length - 1
              ? (c.active = 0)
              : c.active++
            : c.active === 0
            ? (c.active = c.items.length - 1)
            : c.active--)
      },
      p = () => {
        !document.hidden && $t(a.value) && m('next')
      },
      h = (y) => {
        if (c.active !== y) {
          if (c.active < y) {
            ;(c.direction = 'next'), (c.active = y)
            return
          }
          c.active > y && ((c.direction = 'prev'), (c.active = y))
        }
      },
      g = () => {
        !document.hidden && $t(a.value) ? (i.value = !0) : (i.value = !1)
      }
    return (
      ue(() => {
        window.addEventListener('scroll', g)
      }),
      ya(() => {
        R(r, () => {
          if (e.wrap) {
            !r.value && s()
            return
          }
          !e.wrap && c.active < c.items.length - 1 && !r.value && s()
        })
      }),
      R(i, () => {
        i.value && s()
      }),
      () =>
        l(
          'div',
          {
            class: [
              'carousel slide',
              e.transition === 'crossfade' && 'carousel-fade',
              e.dark && 'carousel-dark',
            ],
            onmouseover: () => e.pause && v(),
            onmouseleave: () => s(),
            ref: a,
          },
          [
            e.indicators &&
              l(
                'div',
                { class: 'carousel-indicators' },
                c.items.map((y, C) =>
                  l(
                    'button',
                    H(
                      x(
                        { type: 'button', id: C, 'data-coreui-target': '' },
                        c.active === C && { class: 'active' },
                      ),
                      { onClick: () => h(C) },
                    ),
                  ),
                ),
              ),
            l(
              'div',
              { class: 'carousel-inner' },
              c.items.map((y, C) =>
                l(y, { active: c.active === C, direction: c.direction }),
              ),
            ),
            e.controls && [
              l(
                'button',
                {
                  type: 'button',
                  class: 'carousel-control-prev',
                  'data-coreui-target': '',
                  onClick: () => m('prev'),
                },
                [
                  l('span', {
                    class: 'carousel-control-prev-icon',
                    ariaHidden: 'true',
                  }),
                  l('span', { class: 'visually-hidden' }, 'Previous'),
                ],
              ),
              l(
                'button',
                {
                  type: 'button',
                  class: 'carousel-control-next',
                  'data-coreui-target': '',
                  onClick: () => m('next'),
                },
                [
                  l('span', {
                    class: 'carousel-control-next-icon',
                    ariaHidden: 'true',
                  }),
                  l('span', { class: 'visually-hidden' }, 'Next'),
                ],
              ),
            ],
          ],
        )
    )
  },
})
f({
  name: 'CCarouselCaption',
  setup(e, { slots: t }) {
    return () =>
      l('div', { class: 'carousel-caption' }, t.default && t.default())
  },
})
f({
  name: 'CCarouselItem',
  props: {
    active: { type: Boolean, default: !1 },
    direction: { type: String, default: 'next', required: !1 },
    interval: { type: [Boolean, Number], default: !1, required: !1 },
  },
  setup(e, { slots: t }) {
    const a = b(),
      { active: n } = Ze(e),
      r = b(),
      i = b(),
      o = b(n.value && 'active'),
      d = j('setAnimating'),
      u = j('setCustomInterval')
    return (
      R(n, (v, s) => {
        v && u(e.interval),
          !s &&
            v &&
            ((i.value = `carousel-item-${e.direction}`), u(e.interval)),
          setTimeout(() => {
            s && !v && (o.value = 'active'),
              (r.value = `carousel-item-${
                e.direction === 'next' ? 'start' : 'end'
              }`)
          }, 0),
          a.value.addEventListener('transitionstart', () => {
            d(!0)
          }),
          a.value.addEventListener('transitionend', () => {
            d(!1),
              v && ((r.value = ''), (i.value = ''), (o.value = 'active')),
              v || ((r.value = ''), (i.value = ''), (o.value = ''))
          })
      }),
      () =>
        l(
          'div',
          { class: ['carousel-item', o.value, r.value, i.value], ref: a },
          t.default && t.default(),
        )
    )
  },
})
var V = 'top',
  _ = 'bottom',
  F = 'right',
  D = 'left',
  at = 'auto',
  Se = [V, _, F, D],
  ce = 'start',
  Oe = 'end',
  Ba = 'clippingParents',
  kt = 'viewport',
  $e = 'popper',
  Sa = 'reference',
  Lt = Se.reduce(function (e, t) {
    return e.concat([t + '-' + ce, t + '-' + Oe])
  }, []),
  Et = [].concat(Se, [at]).reduce(function (e, t) {
    return e.concat([t, t + '-' + ce, t + '-' + Oe])
  }, []),
  Oa = 'beforeRead',
  $a = 'read',
  ka = 'afterRead',
  La = 'beforeMain',
  Ea = 'main',
  Aa = 'afterMain',
  Ta = 'beforeWrite',
  ja = 'write',
  Na = 'afterWrite',
  Pa = [Oa, $a, ka, La, Ea, Aa, Ta, ja, Na]
function U(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function G(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function ve(e) {
  var t = G(e).Element
  return e instanceof t || e instanceof Element
}
function W(e) {
  var t = G(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function At(e) {
  if (typeof ShadowRoot == 'undefined') return !1
  var t = G(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function Ra(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (a) {
    var n = t.styles[a] || {},
      r = t.attributes[a] || {},
      i = t.elements[a]
    !W(i) ||
      !U(i) ||
      (Object.assign(i.style, n),
      Object.keys(r).forEach(function (o) {
        var d = r[o]
        d === !1 ? i.removeAttribute(o) : i.setAttribute(o, d === !0 ? '' : d)
      }))
  })
}
function za(e) {
  var t = e.state,
    a = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    }
  return (
    Object.assign(t.elements.popper.style, a.popper),
    (t.styles = a),
    t.elements.arrow && Object.assign(t.elements.arrow.style, a.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var r = t.elements[n],
          i = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : a[n]),
          d = o.reduce(function (u, v) {
            return (u[v] = ''), u
          }, {})
        !W(r) ||
          !U(r) ||
          (Object.assign(r.style, d),
          Object.keys(i).forEach(function (u) {
            r.removeAttribute(u)
          }))
      })
    }
  )
}
var Va = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: Ra,
  effect: za,
  requires: ['computeStyles'],
}
function X(e) {
  return e.split('-')[0]
}
var ie = Math.max,
  Ie = Math.min,
  me = Math.round
function pe(e, t) {
  t === void 0 && (t = !1)
  var a = e.getBoundingClientRect(),
    n = 1,
    r = 1
  if (W(e) && t) {
    var i = e.offsetHeight,
      o = e.offsetWidth
    o > 0 && (n = me(a.width) / o || 1), i > 0 && (r = me(a.height) / i || 1)
  }
  return {
    width: a.width / n,
    height: a.height / r,
    top: a.top / r,
    right: a.right / n,
    bottom: a.bottom / r,
    left: a.left / n,
    x: a.left / n,
    y: a.top / r,
  }
}
function nt(e) {
  var t = pe(e),
    a = e.offsetWidth,
    n = e.offsetHeight
  return (
    Math.abs(t.width - a) <= 1 && (a = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: a, height: n }
  )
}
function Tt(e, t) {
  var a = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (a && At(a)) {
    var n = t
    do {
      if (n && e.isSameNode(n)) return !0
      n = n.parentNode || n.host
    } while (n)
  }
  return !1
}
function J(e) {
  return G(e).getComputedStyle(e)
}
function Da(e) {
  return ['table', 'td', 'th'].indexOf(U(e)) >= 0
}
function ee(e) {
  return ((ve(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function Me(e) {
  return U(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (At(e) ? e.host : null) || ee(e)
}
function jt(e) {
  return !W(e) || J(e).position === 'fixed' ? null : e.offsetParent
}
function Ia(e) {
  var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
    a = navigator.userAgent.indexOf('Trident') !== -1
  if (a && W(e)) {
    var n = J(e)
    if (n.position === 'fixed') return null
  }
  for (var r = Me(e); W(r) && ['html', 'body'].indexOf(U(r)) < 0; ) {
    var i = J(r)
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return r
    r = r.parentNode
  }
  return null
}
function ke(e) {
  for (var t = G(e), a = jt(e); a && Da(a) && J(a).position === 'static'; )
    a = jt(a)
  return a &&
    (U(a) === 'html' || (U(a) === 'body' && J(a).position === 'static'))
    ? t
    : a || Ia(e) || t
}
function rt(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function Le(e, t, a) {
  return ie(e, Ie(t, a))
}
function Ma(e, t, a) {
  var n = Le(e, t, a)
  return n > a ? a : n
}
function Nt() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Pt(e) {
  return Object.assign({}, Nt(), e)
}
function Rt(e, t) {
  return t.reduce(function (a, n) {
    return (a[n] = e), a
  }, {})
}
var Ha = function (t, a) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, a.rects, { placement: a.placement }))
        : t),
    Pt(typeof t != 'number' ? t : Rt(t, Se))
  )
}
function _a(e) {
  var t,
    a = e.state,
    n = e.name,
    r = e.options,
    i = a.elements.arrow,
    o = a.modifiersData.popperOffsets,
    d = X(a.placement),
    u = rt(d),
    v = [D, F].indexOf(d) >= 0,
    s = v ? 'height' : 'width'
  if (!(!i || !o)) {
    var c = Ha(r.padding, a),
      m = nt(i),
      p = u === 'y' ? V : D,
      h = u === 'y' ? _ : F,
      g =
        a.rects.reference[s] + a.rects.reference[u] - o[u] - a.rects.popper[s],
      y = o[u] - a.rects.reference[u],
      C = ke(i),
      O = C ? (u === 'y' ? C.clientHeight || 0 : C.clientWidth || 0) : 0,
      $ = g / 2 - y / 2,
      w = c[p],
      k = O - m[s] - c[h],
      B = O / 2 - m[s] / 2 + $,
      S = Le(w, B, k),
      L = u
    a.modifiersData[n] = ((t = {}), (t[L] = S), (t.centerOffset = S - B), t)
  }
}
function Fa(e) {
  var t = e.state,
    a = e.options,
    n = a.element,
    r = n === void 0 ? '[data-popper-arrow]' : n
  r != null &&
    ((typeof r == 'string' && ((r = t.elements.popper.querySelector(r)), !r)) ||
      !Tt(t.elements.popper, r) ||
      (t.elements.arrow = r))
}
var Wa = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: _a,
  effect: Fa,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function ge(e) {
  return e.split('-')[1]
}
var Ka = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function Ga(e) {
  var t = e.x,
    a = e.y,
    n = window,
    r = n.devicePixelRatio || 1
  return { x: me(t * r) / r || 0, y: me(a * r) / r || 0 }
}
function zt(e) {
  var t,
    a = e.popper,
    n = e.popperRect,
    r = e.placement,
    i = e.variation,
    o = e.offsets,
    d = e.position,
    u = e.gpuAcceleration,
    v = e.adaptive,
    s = e.roundOffsets,
    c = e.isFixed,
    m = s === !0 ? Ga(o) : typeof s == 'function' ? s(o) : o,
    p = m.x,
    h = p === void 0 ? 0 : p,
    g = m.y,
    y = g === void 0 ? 0 : g,
    C = o.hasOwnProperty('x'),
    O = o.hasOwnProperty('y'),
    $ = D,
    w = V,
    k = window
  if (v) {
    var B = ke(a),
      S = 'clientHeight',
      L = 'clientWidth'
    if (
      (B === G(a) &&
        ((B = ee(a)),
        J(B).position !== 'static' &&
          d === 'absolute' &&
          ((S = 'scrollHeight'), (L = 'scrollWidth'))),
      (B = B),
      r === V || ((r === D || r === F) && i === Oe))
    ) {
      w = _
      var T = c && k.visualViewport ? k.visualViewport.height : B[S]
      ;(y -= T - n.height), (y *= u ? 1 : -1)
    }
    if (r === D || ((r === V || r === _) && i === Oe)) {
      $ = F
      var E = c && k.visualViewport ? k.visualViewport.width : B[L]
      ;(h -= E - n.width), (h *= u ? 1 : -1)
    }
  }
  var A = Object.assign({ position: d }, v && Ka)
  if (u) {
    var z
    return Object.assign(
      {},
      A,
      ((z = {}),
      (z[w] = O ? '0' : ''),
      (z[$] = C ? '0' : ''),
      (z.transform =
        (k.devicePixelRatio || 1) <= 1
          ? 'translate(' + h + 'px, ' + y + 'px)'
          : 'translate3d(' + h + 'px, ' + y + 'px, 0)'),
      z),
    )
  }
  return Object.assign(
    {},
    A,
    ((t = {}),
    (t[w] = O ? y + 'px' : ''),
    (t[$] = C ? h + 'px' : ''),
    (t.transform = ''),
    t),
  )
}
function Ya(e) {
  var t = e.state,
    a = e.options,
    n = a.gpuAcceleration,
    r = n === void 0 ? !0 : n,
    i = a.adaptive,
    o = i === void 0 ? !0 : i,
    d = a.roundOffsets,
    u = d === void 0 ? !0 : d,
    v = {
      placement: X(t.placement),
      variation: ge(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      zt(
        Object.assign({}, v, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: u,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        zt(
          Object.assign({}, v, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: u,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
var Ua = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: Ya,
    data: {},
  },
  He = { passive: !0 }
function Xa(e) {
  var t = e.state,
    a = e.instance,
    n = e.options,
    r = n.scroll,
    i = r === void 0 ? !0 : r,
    o = n.resize,
    d = o === void 0 ? !0 : o,
    u = G(t.elements.popper),
    v = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    i &&
      v.forEach(function (s) {
        s.addEventListener('scroll', a.update, He)
      }),
    d && u.addEventListener('resize', a.update, He),
    function () {
      i &&
        v.forEach(function (s) {
          s.removeEventListener('scroll', a.update, He)
        }),
        d && u.removeEventListener('resize', a.update, He)
    }
  )
}
var Ja = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: Xa,
    data: {},
  },
  Qa = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function _e(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Qa[t]
  })
}
var Za = { start: 'end', end: 'start' }
function Vt(e) {
  return e.replace(/start|end/g, function (t) {
    return Za[t]
  })
}
function it(e) {
  var t = G(e),
    a = t.pageXOffset,
    n = t.pageYOffset
  return { scrollLeft: a, scrollTop: n }
}
function lt(e) {
  return pe(ee(e)).left + it(e).scrollLeft
}
function en(e) {
  var t = G(e),
    a = ee(e),
    n = t.visualViewport,
    r = a.clientWidth,
    i = a.clientHeight,
    o = 0,
    d = 0
  return (
    n &&
      ((r = n.width),
      (i = n.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((o = n.offsetLeft), (d = n.offsetTop))),
    { width: r, height: i, x: o + lt(e), y: d }
  )
}
function tn(e) {
  var t,
    a = ee(e),
    n = it(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = ie(
      a.scrollWidth,
      a.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0,
    ),
    o = ie(
      a.scrollHeight,
      a.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0,
    ),
    d = -n.scrollLeft + lt(e),
    u = -n.scrollTop
  return (
    J(r || a).direction === 'rtl' &&
      (d += ie(a.clientWidth, r ? r.clientWidth : 0) - i),
    { width: i, height: o, x: d, y: u }
  )
}
function ot(e) {
  var t = J(e),
    a = t.overflow,
    n = t.overflowX,
    r = t.overflowY
  return /auto|scroll|overlay|hidden/.test(a + r + n)
}
function Dt(e) {
  return ['html', 'body', '#document'].indexOf(U(e)) >= 0
    ? e.ownerDocument.body
    : W(e) && ot(e)
    ? e
    : Dt(Me(e))
}
function Ee(e, t) {
  var a
  t === void 0 && (t = [])
  var n = Dt(e),
    r = n === ((a = e.ownerDocument) == null ? void 0 : a.body),
    i = G(n),
    o = r ? [i].concat(i.visualViewport || [], ot(n) ? n : []) : n,
    d = t.concat(o)
  return r ? d : d.concat(Ee(Me(o)))
}
function dt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  })
}
function an(e) {
  var t = pe(e)
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  )
}
function It(e, t) {
  return t === kt ? dt(en(e)) : ve(t) ? an(t) : dt(tn(ee(e)))
}
function nn(e) {
  var t = Ee(Me(e)),
    a = ['absolute', 'fixed'].indexOf(J(e).position) >= 0,
    n = a && W(e) ? ke(e) : e
  return ve(n)
    ? t.filter(function (r) {
        return (
          ve(r) &&
          Tt(r, n) &&
          U(r) !== 'body' &&
          (a ? J(r).position !== 'static' : !0)
        )
      })
    : []
}
function rn(e, t, a) {
  var n = t === 'clippingParents' ? nn(e) : [].concat(t),
    r = [].concat(n, [a]),
    i = r[0],
    o = r.reduce(function (d, u) {
      var v = It(e, u)
      return (
        (d.top = ie(v.top, d.top)),
        (d.right = Ie(v.right, d.right)),
        (d.bottom = Ie(v.bottom, d.bottom)),
        (d.left = ie(v.left, d.left)),
        d
      )
    }, It(e, i))
  return (
    (o.width = o.right - o.left),
    (o.height = o.bottom - o.top),
    (o.x = o.left),
    (o.y = o.top),
    o
  )
}
function Mt(e) {
  var t = e.reference,
    a = e.element,
    n = e.placement,
    r = n ? X(n) : null,
    i = n ? ge(n) : null,
    o = t.x + t.width / 2 - a.width / 2,
    d = t.y + t.height / 2 - a.height / 2,
    u
  switch (r) {
    case V:
      u = { x: o, y: t.y - a.height }
      break
    case _:
      u = { x: o, y: t.y + t.height }
      break
    case F:
      u = { x: t.x + t.width, y: d }
      break
    case D:
      u = { x: t.x - a.width, y: d }
      break
    default:
      u = { x: t.x, y: t.y }
  }
  var v = r ? rt(r) : null
  if (v != null) {
    var s = v === 'y' ? 'height' : 'width'
    switch (i) {
      case ce:
        u[v] = u[v] - (t[s] / 2 - a[s] / 2)
        break
      case Oe:
        u[v] = u[v] + (t[s] / 2 - a[s] / 2)
        break
    }
  }
  return u
}
function Ae(e, t) {
  t === void 0 && (t = {})
  var a = t,
    n = a.placement,
    r = n === void 0 ? e.placement : n,
    i = a.boundary,
    o = i === void 0 ? Ba : i,
    d = a.rootBoundary,
    u = d === void 0 ? kt : d,
    v = a.elementContext,
    s = v === void 0 ? $e : v,
    c = a.altBoundary,
    m = c === void 0 ? !1 : c,
    p = a.padding,
    h = p === void 0 ? 0 : p,
    g = Pt(typeof h != 'number' ? h : Rt(h, Se)),
    y = s === $e ? Sa : $e,
    C = e.rects.popper,
    O = e.elements[m ? y : s],
    $ = rn(ve(O) ? O : O.contextElement || ee(e.elements.popper), o, u),
    w = pe(e.elements.reference),
    k = Mt({ reference: w, element: C, strategy: 'absolute', placement: r }),
    B = dt(Object.assign({}, C, k)),
    S = s === $e ? B : w,
    L = {
      top: $.top - S.top + g.top,
      bottom: S.bottom - $.bottom + g.bottom,
      left: $.left - S.left + g.left,
      right: S.right - $.right + g.right,
    },
    T = e.modifiersData.offset
  if (s === $e && T) {
    var E = T[r]
    Object.keys(L).forEach(function (A) {
      var z = [F, _].indexOf(A) >= 0 ? 1 : -1,
        te = [V, _].indexOf(A) >= 0 ? 'y' : 'x'
      L[A] += E[te] * z
    })
  }
  return L
}
function ln(e, t) {
  t === void 0 && (t = {})
  var a = t,
    n = a.placement,
    r = a.boundary,
    i = a.rootBoundary,
    o = a.padding,
    d = a.flipVariations,
    u = a.allowedAutoPlacements,
    v = u === void 0 ? Et : u,
    s = ge(n),
    c = s
      ? d
        ? Lt
        : Lt.filter(function (h) {
            return ge(h) === s
          })
      : Se,
    m = c.filter(function (h) {
      return v.indexOf(h) >= 0
    })
  m.length === 0 && (m = c)
  var p = m.reduce(function (h, g) {
    return (
      (h[g] = Ae(e, { placement: g, boundary: r, rootBoundary: i, padding: o })[
        X(g)
      ]),
      h
    )
  }, {})
  return Object.keys(p).sort(function (h, g) {
    return p[h] - p[g]
  })
}
function on(e) {
  if (X(e) === at) return []
  var t = _e(e)
  return [Vt(e), t, Vt(t)]
}
function dn(e) {
  var t = e.state,
    a = e.options,
    n = e.name
  if (!t.modifiersData[n]._skip) {
    for (
      var r = a.mainAxis,
        i = r === void 0 ? !0 : r,
        o = a.altAxis,
        d = o === void 0 ? !0 : o,
        u = a.fallbackPlacements,
        v = a.padding,
        s = a.boundary,
        c = a.rootBoundary,
        m = a.altBoundary,
        p = a.flipVariations,
        h = p === void 0 ? !0 : p,
        g = a.allowedAutoPlacements,
        y = t.options.placement,
        C = X(y),
        O = C === y,
        $ = u || (O || !h ? [_e(y)] : on(y)),
        w = [y].concat($).reduce(function (de, Z) {
          return de.concat(
            X(Z) === at
              ? ln(t, {
                  placement: Z,
                  boundary: s,
                  rootBoundary: c,
                  padding: v,
                  flipVariations: h,
                  allowedAutoPlacements: g,
                })
              : Z,
          )
        }, []),
        k = t.rects.reference,
        B = t.rects.popper,
        S = new Map(),
        L = !0,
        T = w[0],
        E = 0;
      E < w.length;
      E++
    ) {
      var A = w[E],
        z = X(A),
        te = ge(A) === ce,
        we = [V, _].indexOf(z) >= 0,
        Ce = we ? 'width' : 'height',
        I = Ae(t, {
          placement: A,
          boundary: s,
          rootBoundary: c,
          altBoundary: m,
          padding: v,
        }),
        K = we ? (te ? F : D) : te ? _ : V
      k[Ce] > B[Ce] && (K = _e(K))
      var je = _e(K),
        ae = []
      if (
        (i && ae.push(I[z] <= 0),
        d && ae.push(I[K] <= 0, I[je] <= 0),
        ae.every(function (de) {
          return de
        }))
      ) {
        ;(T = A), (L = !1)
        break
      }
      S.set(A, ae)
    }
    if (L)
      for (
        var Ne = h ? 3 : 1,
          Ye = function (Z) {
            var qe = w.find(function (Re) {
              var ne = S.get(Re)
              if (ne)
                return ne.slice(0, Z).every(function (Ue) {
                  return Ue
                })
            })
            if (qe) return (T = qe), 'break'
          },
          xe = Ne;
        xe > 0;
        xe--
      ) {
        var Pe = Ye(xe)
        if (Pe === 'break') break
      }
    t.placement !== T &&
      ((t.modifiersData[n]._skip = !0), (t.placement = T), (t.reset = !0))
  }
}
var un = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: dn,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
}
function Ht(e, t, a) {
  return (
    a === void 0 && (a = { x: 0, y: 0 }),
    {
      top: e.top - t.height - a.y,
      right: e.right - t.width + a.x,
      bottom: e.bottom - t.height + a.y,
      left: e.left - t.width - a.x,
    }
  )
}
function _t(e) {
  return [V, F, _, D].some(function (t) {
    return e[t] >= 0
  })
}
function sn(e) {
  var t = e.state,
    a = e.name,
    n = t.rects.reference,
    r = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = Ae(t, { elementContext: 'reference' }),
    d = Ae(t, { altBoundary: !0 }),
    u = Ht(o, n),
    v = Ht(d, r, i),
    s = _t(u),
    c = _t(v)
  ;(t.modifiersData[a] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: v,
    isReferenceHidden: s,
    hasPopperEscaped: c,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': s,
      'data-popper-escaped': c,
    }))
}
var fn = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: sn,
}
function cn(e, t, a) {
  var n = X(e),
    r = [D, V].indexOf(n) >= 0 ? -1 : 1,
    i = typeof a == 'function' ? a(Object.assign({}, t, { placement: e })) : a,
    o = i[0],
    d = i[1]
  return (
    (o = o || 0),
    (d = (d || 0) * r),
    [D, F].indexOf(n) >= 0 ? { x: d, y: o } : { x: o, y: d }
  )
}
function vn(e) {
  var t = e.state,
    a = e.options,
    n = e.name,
    r = a.offset,
    i = r === void 0 ? [0, 0] : r,
    o = Et.reduce(function (s, c) {
      return (s[c] = cn(c, t.rects, i)), s
    }, {}),
    d = o[t.placement],
    u = d.x,
    v = d.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += u),
    (t.modifiersData.popperOffsets.y += v)),
    (t.modifiersData[n] = o)
}
var mn = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: vn,
}
function pn(e) {
  var t = e.state,
    a = e.name
  t.modifiersData[a] = Mt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
var gn = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: pn, data: {} }
function yn(e) {
  return e === 'x' ? 'y' : 'x'
}
function hn(e) {
  var t = e.state,
    a = e.options,
    n = e.name,
    r = a.mainAxis,
    i = r === void 0 ? !0 : r,
    o = a.altAxis,
    d = o === void 0 ? !1 : o,
    u = a.boundary,
    v = a.rootBoundary,
    s = a.altBoundary,
    c = a.padding,
    m = a.tether,
    p = m === void 0 ? !0 : m,
    h = a.tetherOffset,
    g = h === void 0 ? 0 : h,
    y = Ae(t, { boundary: u, rootBoundary: v, padding: c, altBoundary: s }),
    C = X(t.placement),
    O = ge(t.placement),
    $ = !O,
    w = rt(C),
    k = yn(w),
    B = t.modifiersData.popperOffsets,
    S = t.rects.reference,
    L = t.rects.popper,
    T =
      typeof g == 'function'
        ? g(Object.assign({}, t.rects, { placement: t.placement }))
        : g,
    E =
      typeof T == 'number'
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    z = { x: 0, y: 0 }
  if (!!B) {
    if (i) {
      var te,
        we = w === 'y' ? V : D,
        Ce = w === 'y' ? _ : F,
        I = w === 'y' ? 'height' : 'width',
        K = B[w],
        je = K + y[we],
        ae = K - y[Ce],
        Ne = p ? -L[I] / 2 : 0,
        Ye = O === ce ? S[I] : L[I],
        xe = O === ce ? -L[I] : -S[I],
        Pe = t.elements.arrow,
        de = p && Pe ? nt(Pe) : { width: 0, height: 0 },
        Z = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Nt(),
        qe = Z[we],
        Re = Z[Ce],
        ne = Le(0, S[I], de[I]),
        Ue = $
          ? S[I] / 2 - Ne - ne - qe - E.mainAxis
          : Ye - ne - qe - E.mainAxis,
        ia = $
          ? -S[I] / 2 + Ne + ne + Re + E.mainAxis
          : xe + ne + Re + E.mainAxis,
        Xe = t.elements.arrow && ke(t.elements.arrow),
        la = Xe ? (w === 'y' ? Xe.clientTop || 0 : Xe.clientLeft || 0) : 0,
        ct = (te = A == null ? void 0 : A[w]) != null ? te : 0,
        oa = K + Ue - ct - la,
        da = K + ia - ct,
        vt = Le(p ? Ie(je, oa) : je, K, p ? ie(ae, da) : ae)
      ;(B[w] = vt), (z[w] = vt - K)
    }
    if (d) {
      var mt,
        ua = w === 'x' ? V : D,
        sa = w === 'x' ? _ : F,
        re = B[k],
        ze = k === 'y' ? 'height' : 'width',
        pt = re + y[ua],
        gt = re - y[sa],
        Je = [V, D].indexOf(C) !== -1,
        yt = (mt = A == null ? void 0 : A[k]) != null ? mt : 0,
        ht = Je ? pt : re - S[ze] - L[ze] - yt + E.altAxis,
        bt = Je ? re + S[ze] + L[ze] - yt - E.altAxis : gt,
        wt = p && Je ? Ma(ht, re, bt) : Le(p ? ht : pt, re, p ? bt : gt)
      ;(B[k] = wt), (z[k] = wt - re)
    }
    t.modifiersData[n] = z
  }
}
var bn = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: hn,
  requiresIfExists: ['offset'],
}
function wn(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function Cn(e) {
  return e === G(e) || !W(e) ? it(e) : wn(e)
}
function xn(e) {
  var t = e.getBoundingClientRect(),
    a = me(t.width) / e.offsetWidth || 1,
    n = me(t.height) / e.offsetHeight || 1
  return a !== 1 || n !== 1
}
function qn(e, t, a) {
  a === void 0 && (a = !1)
  var n = W(t),
    r = W(t) && xn(t),
    i = ee(t),
    o = pe(e, r),
    d = { scrollLeft: 0, scrollTop: 0 },
    u = { x: 0, y: 0 }
  return (
    (n || (!n && !a)) &&
      ((U(t) !== 'body' || ot(i)) && (d = Cn(t)),
      W(t)
        ? ((u = pe(t, !0)), (u.x += t.clientLeft), (u.y += t.clientTop))
        : i && (u.x = lt(i))),
    {
      x: o.left + d.scrollLeft - u.x,
      y: o.top + d.scrollTop - u.y,
      width: o.width,
      height: o.height,
    }
  )
}
function Bn(e) {
  var t = new Map(),
    a = new Set(),
    n = []
  e.forEach(function (i) {
    t.set(i.name, i)
  })
  function r(i) {
    a.add(i.name)
    var o = [].concat(i.requires || [], i.requiresIfExists || [])
    o.forEach(function (d) {
      if (!a.has(d)) {
        var u = t.get(d)
        u && r(u)
      }
    }),
      n.push(i)
  }
  return (
    e.forEach(function (i) {
      a.has(i.name) || r(i)
    }),
    n
  )
}
function Sn(e) {
  var t = Bn(e)
  return Pa.reduce(function (a, n) {
    return a.concat(
      t.filter(function (r) {
        return r.phase === n
      }),
    )
  }, [])
}
function On(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (a) {
          Promise.resolve().then(function () {
            ;(t = void 0), a(e())
          })
        })),
      t
    )
  }
}
function $n(e) {
  var t = e.reduce(function (a, n) {
    var r = a[n.name]
    return (
      (a[n.name] = r
        ? Object.assign({}, r, n, {
            options: Object.assign({}, r.options, n.options),
            data: Object.assign({}, r.data, n.data),
          })
        : n),
      a
    )
  }, {})
  return Object.keys(t).map(function (a) {
    return t[a]
  })
}
var Ft = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function Wt() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a]
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function')
  })
}
function kn(e) {
  e === void 0 && (e = {})
  var t = e,
    a = t.defaultModifiers,
    n = a === void 0 ? [] : a,
    r = t.defaultOptions,
    i = r === void 0 ? Ft : r
  return function (d, u, v) {
    v === void 0 && (v = i)
    var s = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Ft, i),
        modifiersData: {},
        elements: { reference: d, popper: u },
        attributes: {},
        styles: {},
      },
      c = [],
      m = !1,
      p = {
        state: s,
        setOptions: function (C) {
          var O = typeof C == 'function' ? C(s.options) : C
          g(),
            (s.options = Object.assign({}, i, s.options, O)),
            (s.scrollParents = {
              reference: ve(d)
                ? Ee(d)
                : d.contextElement
                ? Ee(d.contextElement)
                : [],
              popper: Ee(u),
            })
          var $ = Sn($n([].concat(n, s.options.modifiers)))
          return (
            (s.orderedModifiers = $.filter(function (w) {
              return w.enabled
            })),
            h(),
            p.update()
          )
        },
        forceUpdate: function () {
          if (!m) {
            var C = s.elements,
              O = C.reference,
              $ = C.popper
            if (!!Wt(O, $)) {
              ;(s.rects = {
                reference: qn(O, ke($), s.options.strategy === 'fixed'),
                popper: nt($),
              }),
                (s.reset = !1),
                (s.placement = s.options.placement),
                s.orderedModifiers.forEach(function (E) {
                  return (s.modifiersData[E.name] = Object.assign({}, E.data))
                })
              for (var w = 0; w < s.orderedModifiers.length; w++) {
                if (s.reset === !0) {
                  ;(s.reset = !1), (w = -1)
                  continue
                }
                var k = s.orderedModifiers[w],
                  B = k.fn,
                  S = k.options,
                  L = S === void 0 ? {} : S,
                  T = k.name
                typeof B == 'function' &&
                  (s = B({ state: s, options: L, name: T, instance: p }) || s)
              }
            }
          }
        },
        update: On(function () {
          return new Promise(function (y) {
            p.forceUpdate(), y(s)
          })
        }),
        destroy: function () {
          g(), (m = !0)
        },
      }
    if (!Wt(d, u)) return p
    p.setOptions(v).then(function (y) {
      !m && v.onFirstUpdate && v.onFirstUpdate(y)
    })
    function h() {
      s.orderedModifiers.forEach(function (y) {
        var C = y.name,
          O = y.options,
          $ = O === void 0 ? {} : O,
          w = y.effect
        if (typeof w == 'function') {
          var k = w({ state: s, name: C, instance: p, options: $ }),
            B = function () {}
          c.push(k || B)
        }
      })
    }
    function g() {
      c.forEach(function (y) {
        return y()
      }),
        (c = [])
    }
    return p
  }
}
var Ln = [Ja, gn, Ua, Va, mn, un, bn, Wa, fn],
  ut = kn({ defaultModifiers: Ln })
f({
  name: 'CDropdown',
  props: {
    alignment: {
      type: [String, Object],
      default: void 0,
      required: !1,
      validator: (e) =>
        e === 'start' || e === 'end'
          ? !0
          : (typeof e.xs != 'undefined' &&
              (e.xs === 'start' || e.xs === 'end')) ||
            (typeof e.sm != 'undefined' &&
              (e.sm === 'start' || e.sm === 'end')) ||
            (typeof e.md != 'undefined' &&
              (e.md === 'start' || e.md === 'end')) ||
            (typeof e.lg != 'undefined' &&
              (e.lg === 'start' || e.lg === 'end')) ||
            (typeof e.xl != 'undefined' &&
              (e.xl === 'start' || e.xl === 'end')) ||
            (typeof e.xxl != 'undefined' &&
              (e.xxl === 'start' || e.xxl === 'end')),
    },
    dark: { type: Boolean, required: !1 },
    direction: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['dropup', 'dropend', 'dropstart'].includes(e),
    },
    disabled: { type: Boolean, required: !1 },
    placement: { type: String, default: 'bottom-start', required: !1 },
    popper: { type: Boolean, default: !0, required: !1 },
    trigger: { type: [String, Array], required: !1, default: 'click' },
    variant: {
      type: String,
      default: 'btn-group',
      required: !1,
      validator: (e) =>
        ['btn-group', 'dropdown', 'input-group', 'nav-item'].includes(e),
    },
    visible: { type: Boolean, required: !1 },
  },
  emits: ['hide', 'show'],
  setup(e, { slots: t, emit: a }) {
    const n = b(),
      r = b(),
      i = b(e.placement),
      o = b(),
      d = qt({
        alignment: e.alignment,
        dark: e.dark,
        popper: e.popper,
        visible: e.visible,
      }),
      { visible: u } = Ze(d)
    P('config', d),
      P('variant', e.variant),
      P('visible', u),
      P('dropdownRef', n),
      P('dropdownMenuRef', r),
      e.direction === 'dropup' && (i.value = 'top-start'),
      e.direction === 'dropend' && (i.value = 'right-start'),
      e.direction === 'dropstart' && (i.value = 'left-start'),
      e.alignment === 'end' && (i.value = 'bottom-end')
    const v = () => {
        typeof e.alignment != 'object' &&
          n.value &&
          (o.value = ut(n.value, r.value, { placement: i.value }))
      },
      s = () => {
        o.value && o.value.destroy(), (o.value = void 0)
      }
    P('toggleMenu', function () {
      e.disabled === !1 && (u.value === !0 ? (u.value = !1) : (u.value = !0))
    })
    const m = function () {
        e.disabled === !1 && (u.value = !1)
      },
      p = (g) => {
        n.value && !n.value.contains(g.target) && m()
      },
      h = (g) => {
        n.value && !n.value.contains(g.target) && m()
      }
    return (
      ue(() => {
        window.addEventListener('click', h), window.addEventListener('keyup', p)
      }),
      ha(() => {
        window.removeEventListener('click', h),
          window.removeEventListener('keyup', p)
      }),
      R(u, () => {
        e.popper && (u.value ? v() : s()), u.value ? a('show') : a('hide')
      }),
      () =>
        e.variant === 'input-group'
          ? [t.default && t.default()]
          : l(
              'div',
              {
                class: [
                  e.variant === 'nav-item' ? 'nav-item dropdown' : e.variant,
                  e.direction,
                ],
              },
              t.default && t.default(),
            )
    )
  },
})
f({
  name: 'CDropdownItem',
  props: {
    active: { type: Boolean, required: !1 },
    component: { type: String, default: 'a', required: !1 },
    disabled: { type: Boolean, required: !1 },
    href: { type: String, default: void 0, required: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        De,
        {
          class: 'dropdown-item',
          active: e.active,
          component: e.component,
          disabled: e.disabled,
          href: e.href,
        },
        { default: () => t.default && t.default() },
      )
  },
})
f({
  name: 'CDropdownHeader',
  props: { component: { type: String, default: 'h6', required: !1 } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'dropdown-header' }, t.default && t.default())
  },
})
f({
  name: 'CDropdownDivider',
  setup() {
    return () => l('hr', { class: 'dropdown-divider' })
  },
})
f({
  name: 'CDropdownMenu',
  props: { component: { type: String, default: 'div', required: !1 } },
  setup(e, { slots: t }) {
    const a = j('dropdownMenuRef'),
      n = j('config'),
      { alignment: r, dark: i, popper: o, visible: d } = Ze(n),
      u = (v) => {
        const s = []
        return (
          typeof v == 'object' &&
            Object.keys(v).map((c) => {
              s.push(`dropdown-menu${c === 'xs' ? '' : `-${c}`}-${v[c]}`)
            }),
          typeof v == 'string' && s.push(`dropdown-menu-${v}`),
          s
        )
      }
    return () =>
      l(
        e.component,
        H(
          x(
            {
              class: [
                'dropdown-menu',
                { 'dropdown-menu-dark': i.value, show: d.value },
                u(r.value),
              ],
            },
            (typeof r.value == 'object' || !o.value) && {
              'data-coreui-popper': 'static',
            },
          ),
          { ref: a },
        ),
        e.component === 'ul'
          ? t.default && t.default().map((v) => l('li', {}, v))
          : t.default && t.default(),
      )
  },
})
f({
  name: 'CDropdownToggle',
  props: {
    active: { type: Boolean, default: !1, required: !1 },
    color: q,
    caret: { type: Boolean, default: !0, required: !1 },
    component: { type: String, default: 'button', require: !1 },
    disabled: { type: Boolean, required: !1 },
    shape: Be,
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['sm', 'lg'].includes(e),
    },
    split: { type: Boolean, required: !1 },
    variant: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['ghost', 'outline'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    const a = j('dropdownRef'),
      n = j('variant'),
      r = j('visible'),
      i = j('toggleMenu'),
      o = [
        {
          'dropdown-toggle': e.caret,
          'dropdown-toggle-split': e.split,
          show: r,
          active: e.active,
          disabled: e.disabled,
        },
      ],
      d = [
        'btn',
        e.variant ? `btn-${e.variant}-${e.color}` : `btn-${e.color}`,
        { [`btn-${e.size}`]: e.size },
        e.shape,
      ]
    return () =>
      n === 'nav-item'
        ? l(
            'a',
            {
              active: e.active,
              class: ['nav-link', o],
              disabled: e.disabled,
              href: '#',
              onClick: (u) => (u.preventDefault(), i()),
              ref: a,
            },
            { default: () => t.default && t.default() },
          )
        : l(
            e.component,
            H(
              x(
                {
                  class: [...o, ...d],
                  active: e.active,
                  disabled: e.disabled,
                  onClick: () => i(),
                },
                e.component === 'button' && { type: 'button' },
              ),
              { ref: a },
            ),
            e.split
              ? l('span', { class: 'visually-hidden' }, 'Toggle Dropdown')
              : t.default && t.default(),
          )
  },
})
f({
  name: 'CFooter',
  props: {
    position: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['fixed', 'sticky'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'div',
        { class: ['footer', { [`footer-${e.position}`]: e.position }] },
        t.default && t.default(),
      )
  },
})
const fr = f({
  name: 'CForm',
  props: { validated: { type: Boolean, required: !1 } },
  setup(e, { slots: t }) {
    return () =>
      l(
        'form',
        { class: [{ ['was-validated']: e.validated }] },
        t.default && t.default(),
      )
  },
})
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function Kt(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
function En(e) {
  var t, a
  return Kt(e) === !1
    ? !1
    : ((t = e.constructor),
      t === void 0
        ? !0
        : ((a = t.prototype),
          !(Kt(a) === !1 || a.hasOwnProperty('isPrototypeOf') === !1)))
}
function Te() {
  return (
    (Te =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t]
          for (var n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
      }),
    Te.apply(this, arguments)
  )
}
function Gt(e, t) {
  if (e == null) return {}
  var a,
    n,
    r = {},
    i = Object.keys(e)
  for (n = 0; n < i.length; n++) t.indexOf((a = i[n])) >= 0 || (r[a] = e[a])
  return r
}
const An = { silent: !1, logLevel: 'warn' },
  Tn = ['validator'],
  Yt = Object.prototype,
  Ut = Yt.toString,
  jn = Yt.hasOwnProperty,
  Xt = /^\s*function (\w+)/
function Jt(e) {
  var t
  const a = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e
  if (a) {
    const n = a.toString().match(Xt)
    return n ? n[1] : ''
  }
  return ''
}
const le = En,
  Nn = (e) => e
let N = Nn
const ye = (e, t) => jn.call(e, t),
  Pn =
    Number.isInteger ||
    function (e) {
      return typeof e == 'number' && isFinite(e) && Math.floor(e) === e
    },
  he =
    Array.isArray ||
    function (e) {
      return Ut.call(e) === '[object Array]'
    },
  be = (e) => Ut.call(e) === '[object Function]',
  Fe = (e) => le(e) && ye(e, '_vueTypes_name'),
  Qt = (e) =>
    le(e) &&
    (ye(e, 'type') ||
      ['_vueTypes_name', 'validator', 'default', 'required'].some((t) =>
        ye(e, t),
      ))
function st(e, t) {
  return Object.defineProperty(e.bind(t), '__original', { value: e })
}
function oe(e, t, a = !1) {
  let n,
    r = !0,
    i = ''
  n = le(e) ? e : { type: e }
  const o = Fe(n) ? n._vueTypes_name + ' - ' : ''
  if (Qt(n) && n.type !== null) {
    if (n.type === void 0 || n.type === !0 || (!n.required && t === void 0))
      return r
    he(n.type)
      ? ((r = n.type.some((d) => oe(d, t, !0) === !0)),
        (i = n.type.map((d) => Jt(d)).join(' or ')))
      : ((i = Jt(n)),
        (r =
          i === 'Array'
            ? he(t)
            : i === 'Object'
            ? le(t)
            : i === 'String' ||
              i === 'Number' ||
              i === 'Boolean' ||
              i === 'Function'
            ? (function (d) {
                if (d == null) return ''
                const u = d.constructor.toString().match(Xt)
                return u ? u[1] : ''
              })(t) === i
            : t instanceof n.type))
  }
  if (!r) {
    const d = `${o}value "${t}" should be of type "${i}"`
    return a === !1 ? (N(d), !1) : d
  }
  if (ye(n, 'validator') && be(n.validator)) {
    const d = N,
      u = []
    if (
      ((N = (v) => {
        u.push(v)
      }),
      (r = n.validator(t)),
      (N = d),
      !r)
    ) {
      const v =
        (u.length > 1 ? '* ' : '') +
        u.join(`
* `)
      return (u.length = 0), a === !1 ? (N(v), r) : v
    }
  }
  return r
}
function M(e, t) {
  const a = Object.defineProperties(t, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get() {
          return (this.required = !0), this
        },
      },
      def: {
        value(r) {
          return r === void 0
            ? (ye(this, 'default') && delete this.default, this)
            : be(r) || oe(this, r, !0) === !0
            ? ((this.default = he(r)
                ? () => [...r]
                : le(r)
                ? () => Object.assign({}, r)
                : r),
              this)
            : (N(`${this._vueTypes_name} - invalid default value: "${r}"`),
              this)
        },
      },
    }),
    { validator: n } = a
  return be(n) && (a.validator = st(n, a)), a
}
function Q(e, t) {
  const a = M(e, t)
  return Object.defineProperty(a, 'validate', {
    value(n) {
      return (
        be(this.validator) &&
          N(`${
            this._vueTypes_name
          } - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),
        (this.validator = st(n, this)),
        this
      )
    },
  })
}
function Zt(e, t, a) {
  const n = (function (u) {
    const v = {}
    return (
      Object.getOwnPropertyNames(u).forEach((s) => {
        v[s] = Object.getOwnPropertyDescriptor(u, s)
      }),
      Object.defineProperties({}, v)
    )
  })(t)
  if (((n._vueTypes_name = e), !le(a))) return n
  const { validator: r } = a,
    i = Gt(a, Tn)
  if (be(r)) {
    let { validator: u } = n
    u && (u = (d = (o = u).__original) !== null && d !== void 0 ? d : o),
      (n.validator = st(
        u
          ? function (v) {
              return u.call(this, v) && r.call(this, v)
            }
          : r,
        n,
      ))
  }
  var o, d
  return Object.assign(n, i)
}
function We(e) {
  return e.replace(/^(?!\s*$)/gm, '  ')
}
const Rn = () => Q('any', {}),
  zn = () => Q('function', { type: Function }),
  Vn = () => Q('boolean', { type: Boolean }),
  Dn = () => Q('string', { type: String }),
  In = () => Q('number', { type: Number }),
  Mn = () => Q('array', { type: Array }),
  Hn = () => Q('object', { type: Object }),
  _n = () => M('integer', { type: Number, validator: (e) => Pn(e) }),
  Fn = () => M('symbol', { validator: (e) => typeof e == 'symbol' })
function Wn(e, t = 'custom validation failed') {
  if (typeof e != 'function')
    throw new TypeError(
      '[VueTypes error]: You must provide a function as argument',
    )
  return M(e.name || '<<anonymous function>>', {
    type: null,
    validator(a) {
      const n = e(a)
      return n || N(`${this._vueTypes_name} - ${t}`), n
    },
  })
}
function Kn(e) {
  if (!he(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument.',
    )
  const t = `oneOf - value should be one of "${e.join('", "')}".`,
    a = e.reduce((n, r) => {
      if (r != null) {
        const i = r.constructor
        n.indexOf(i) === -1 && n.push(i)
      }
      return n
    }, [])
  return M('oneOf', {
    type: a.length > 0 ? a : void 0,
    validator(n) {
      const r = e.indexOf(n) !== -1
      return r || N(t), r
    },
  })
}
function Gn(e) {
  if (!he(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument',
    )
  let t = !1,
    a = []
  for (let r = 0; r < e.length; r += 1) {
    const i = e[r]
    if (Qt(i)) {
      if (Fe(i) && i._vueTypes_name === 'oneOf' && i.type) {
        a = a.concat(i.type)
        continue
      }
      if ((be(i.validator) && (t = !0), i.type === !0 || !i.type)) {
        N('oneOfType - invalid usage of "true" or "null" as types.')
        continue
      }
      a = a.concat(i.type)
    } else a.push(i)
  }
  a = a.filter((r, i) => a.indexOf(r) === i)
  const n = a.length > 0 ? a : null
  return M(
    'oneOfType',
    t
      ? {
          type: n,
          validator(r) {
            const i = [],
              o = e.some((d) => {
                const u = oe(
                  Fe(d) && d._vueTypes_name === 'oneOf' ? d.type || null : d,
                  r,
                  !0,
                )
                return typeof u == 'string' && i.push(u), u === !0
              })
            return (
              o ||
                N(`oneOfType - provided value does not match any of the ${
                  i.length
                } passed-in validators:
${We(
  i.join(`
`),
)}`),
              o
            )
          },
        }
      : { type: n },
  )
}
function Yn(e) {
  return M('arrayOf', {
    type: Array,
    validator(t) {
      let a = ''
      const n = t.every((r) => ((a = oe(e, r, !0)), a === !0))
      return (
        n ||
          N(`arrayOf - value validation error:
${We(a)}`),
        n
      )
    },
  })
}
function Un(e) {
  return M('instanceOf', { type: e })
}
function Xn(e) {
  return M('objectOf', {
    type: Object,
    validator(t) {
      let a = ''
      const n = Object.keys(t).every((r) => ((a = oe(e, t[r], !0)), a === !0))
      return (
        n ||
          N(`objectOf - value validation error:
${We(a)}`),
        n
      )
    },
  })
}
function Ke(e) {
  const t = Object.keys(e),
    a = t.filter((r) => {
      var i
      return !((i = e[r]) === null || i === void 0 || !i.required)
    }),
    n = M('shape', {
      type: Object,
      validator(r) {
        if (!le(r)) return !1
        const i = Object.keys(r)
        if (a.length > 0 && a.some((o) => i.indexOf(o) === -1)) {
          const o = a.filter((d) => i.indexOf(d) === -1)
          return (
            N(
              o.length === 1
                ? `shape - required property "${o[0]}" is not defined.`
                : `shape - required properties "${o.join(
                    '", "',
                  )}" are not defined.`,
            ),
            !1
          )
        }
        return i.every((o) => {
          if (t.indexOf(o) === -1)
            return (
              this._vueTypes_isLoose === !0 ||
              (N(
                `shape - shape definition does not include a "${o}" property. Allowed keys: "${t.join(
                  '", "',
                )}".`,
              ),
              !1)
            )
          const d = oe(e[o], r[o], !0)
          return (
            typeof d == 'string' &&
              N(`shape - "${o}" property validation error:
 ${We(d)}`),
            d === !0
          )
        })
      },
    })
  return (
    Object.defineProperty(n, '_vueTypes_isLoose', { writable: !0, value: !1 }),
    Object.defineProperty(n, 'loose', {
      get() {
        return (this._vueTypes_isLoose = !0), this
      },
    }),
    n
  )
}
const Jn = ['name', 'validate', 'getter'],
  Qn = (() => {
    var e, t
    return (
      (t = e = class {
        static get any() {
          return Rn()
        }
        static get func() {
          return zn().def(this.defaults.func)
        }
        static get bool() {
          return Vn().def(this.defaults.bool)
        }
        static get string() {
          return Dn().def(this.defaults.string)
        }
        static get number() {
          return In().def(this.defaults.number)
        }
        static get array() {
          return Mn().def(this.defaults.array)
        }
        static get object() {
          return Hn().def(this.defaults.object)
        }
        static get integer() {
          return _n().def(this.defaults.integer)
        }
        static get symbol() {
          return Fn()
        }
        static extend(a) {
          if (he(a)) return a.forEach((v) => this.extend(v)), this
          const { name: n, validate: r = !1, getter: i = !1 } = a,
            o = Gt(a, Jn)
          if (ye(this, n))
            throw new TypeError(`[VueTypes error]: Type "${n}" already defined`)
          const { type: d } = o
          if (Fe(d))
            return (
              delete o.type,
              Object.defineProperty(
                this,
                n,
                i
                  ? { get: () => Zt(n, d, o) }
                  : {
                      value(...v) {
                        const s = Zt(n, d, o)
                        return (
                          s.validator &&
                            (s.validator = s.validator.bind(s, ...v)),
                          s
                        )
                      },
                    },
              )
            )
          let u
          return (
            (u = i
              ? {
                  get() {
                    const v = Object.assign({}, o)
                    return r ? Q(n, v) : M(n, v)
                  },
                  enumerable: !0,
                }
              : {
                  value(...v) {
                    const s = Object.assign({}, o)
                    let c
                    return (
                      (c = r ? Q(n, s) : M(n, s)),
                      s.validator && (c.validator = s.validator.bind(c, ...v)),
                      c
                    )
                  },
                  enumerable: !0,
                }),
            Object.defineProperty(this, n, u)
          )
        }
      }),
      (e.defaults = {}),
      (e.sensibleDefaults = void 0),
      (e.config = An),
      (e.custom = Wn),
      (e.oneOf = Kn),
      (e.instanceOf = Un),
      (e.oneOfType = Gn),
      (e.arrayOf = Yn),
      (e.objectOf = Xn),
      (e.shape = Ke),
      (e.utils = {
        validate: (a, n) => oe(n, a, !0) === !0,
        toType: (a, n, r = !1) => (r ? Q(a, n) : M(a, n)),
      }),
      t
    )
  })()
function Zn(
  e = {
    func: () => {},
    bool: !0,
    string: '',
    number: 0,
    array: () => [],
    object: () => ({}),
    integer: 0,
  },
) {
  var t, a
  return (
    (a = t = class extends Qn {
      static get sensibleDefaults() {
        return Te({}, this.defaults)
      }
      static set sensibleDefaults(n) {
        this.defaults = n !== !1 ? Te({}, n !== !0 ? n : e) : {}
      }
    }),
    (t.defaults = Te({}, e)),
    a
  )
}
class cr extends Zn() {}
const ea = f({
  name: 'CFormLabel',
  props: {
    customClassName: { type: [Array, String], default: void 0, required: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'label',
        { class: e.customClassName ? e.customClassName : 'form-label' },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CFormCheck',
  inheritAttrs: !1,
  props: {
    button: Ke({
      color: q,
      shape: Be,
      size: {
        type: String,
        default: void 0,
        required: !1,
        validator: (e) => ['sm', 'lg'].includes(e),
      },
      variant: {
        type: String,
        default: void 0,
        required: !1,
        validator: (e) => ['outline', 'ghost'].includes(e),
      },
    }),
    id: { type: String, default: void 0, required: !1 },
    indeterminate: Boolean,
    inline: { type: Boolean, required: !1 },
    invalid: { type: Boolean, required: !1 },
    label: { type: String, default: void 0, required: !1 },
    modelValue: { type: [Boolean, String], value: void 0, required: !1 },
    type: { type: String, default: 'checkbox', required: !1 },
    valid: { type: Boolean, required: !1 },
  },
  emits: ['change', 'update:modelValue'],
  setup(e, { attrs: t, emit: a, slots: n }) {
    const r = (d) => {
        const u = d.target
        a('change', d), a('update:modelValue', u.checked)
      },
      i = () =>
        l(
          'input',
          x(
            {
              checked: e.modelValue,
              class: [
                e.button ? 'btn-check' : 'form-check-input',
                { 'is-invalid': e.invalid, 'is-valid': e.valid },
              ],
              id: e.id,
              indeterminate: e.indeterminate,
              onChange: (d) => r(d),
              type: e.type,
            },
            t,
          ),
        ),
      o = () =>
        l(
          ea,
          x(
            {
              customClassName: e.button
                ? [
                    'btn',
                    e.button.variant
                      ? `btn-${e.button.variant}-${e.button.color}`
                      : `btn-${e.button.color}`,
                    { [`btn-${e.button.size}`]: e.button.size },
                    `${e.button.shape}`,
                  ]
                : 'form-check-label',
            },
            e.id && { for: e.id },
          ),
          { default: () => (n.label && n.label()) || e.label },
        )
    return () =>
      e.button
        ? [i(), (n.label || e.label) && o()]
        : e.label
        ? l(
            'div',
            {
              class: [
                'form-check',
                {
                  'form-check-inline': e.inline,
                  'is-invalid': e.invalid,
                  'is-valid': e.valid,
                },
              ],
            },
            [i(), e.label && o()],
          )
        : i()
  },
})
f({
  name: 'CFormFeedback',
  props: {
    component: { type: String, required: !1, default: 'div' },
    invalid: Boolean,
    tooltip: Boolean,
    valid: Boolean,
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        {
          class: [
            {
              [`invalid-${e.tooltip ? 'tooltip' : 'feedback'}`]: e.invalid,
              [`valid-${e.tooltip ? 'tooltip' : 'feedback'}`]: e.valid,
            },
          ],
        },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CFormFloating',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'form-floating' }, t.default && t.default())
  },
})
const vr = f({
  name: 'CFormInput',
  props: {
    disabled: { type: Boolean, required: !1 },
    invalid: { type: Boolean, required: !1 },
    modelValue: { type: String, default: void 0, require: !1 },
    plainText: { type: Boolean, required: !1 },
    readonly: { type: Boolean, required: !1 },
    size: {
      type: String,
      default: void 0,
      require: !1,
      validator: (e) => ['sm', 'lg'].includes(e),
    },
    type: { type: String, default: 'text', require: !1 },
    valid: { type: Boolean, required: !1 },
  },
  emits: ['change', 'input', 'update:modelValue'],
  setup(e, { emit: t, slots: a }) {
    const n = (i) => {
        const o = i.target
        t('change', i), t('update:modelValue', o.value)
      },
      r = (i) => {
        const o = i.target
        t('input', i), t('update:modelValue', o.value)
      }
    return () =>
      l(
        'input',
        {
          class: [
            e.plainText ? 'form-control-plaintext' : 'form-control',
            {
              'form-control-color': e.type === 'color',
              [`form-control-${e.size}`]: e.size,
              'is-invalid': e.invalid,
              'is-valid': e.valid,
            },
          ],
          disabled: e.disabled,
          onChange: (i) => n(i),
          onInput: (i) => r(i),
          readonly: e.readonly,
          type: e.type,
          value: e.modelValue,
        },
        a.default && a.default(),
      )
  },
})
f({
  name: 'CFormRange',
  props: {
    disabled: { type: Boolean, default: void 0, required: !1 },
    max: { type: Number, default: void 0, required: !1 },
    min: { type: Number, default: void 0, required: !1 },
    modelValue: { type: String, value: void 0, required: !1 },
    readonly: { type: Boolean, required: !1 },
    steps: { type: Number, default: void 0, required: !1 },
    value: { type: Number, default: void 0, required: !1 },
  },
  emits: ['change', 'update:modelValue'],
  setup(e, { emit: t, slots: a }) {
    const n = (r) => {
      const i = r.target
      t('change', r), t('update:modelValue', i.value)
    }
    return () =>
      l(
        'input',
        {
          class: 'form-range',
          disabled: e.disabled,
          max: e.max,
          min: e.min,
          onChange: (r) => n(r),
          steps: e.steps,
          readonly: e.readonly,
          type: 'range',
          value: e.modelValue,
        },
        a.default && a.default(),
      )
  },
})
const mr = f({
  name: 'CFormSelect',
  props: {
    htmlSize: { type: Number, default: void 0, required: !1 },
    invalid: { type: Boolean, required: !1 },
    modelValue: { type: String, default: void 0, require: !1 },
    options: { type: Array, default: void 0, required: !1 },
    size: {
      type: String,
      default: void 0,
      require: !1,
      validator: (e) => ['sm', 'lg'].includes(e),
    },
    valid: { type: Boolean, required: !1 },
  },
  emits: ['change', 'update:modelValue'],
  setup(e, { emit: t, slots: a }) {
    const n = (r) => {
      const i = r.target,
        o = Array.from(i.options)
          .filter((u) => u.selected)
          .map((u) => u.value),
        d = i.multiple ? o : o[0]
      t('change', r), t('update:modelValue', d)
    }
    return () =>
      l(
        'select',
        {
          class: [
            'form-select',
            {
              [`form-select-${e.size}`]: e.size,
              'is-invalid': e.invalid,
              'is-valid': e.valid,
            },
          ],
          onChange: (r) => n(r),
          size: e.htmlSize,
        },
        e.options
          ? e.options.map((r) =>
              l(
                'option',
                x(
                  x(
                    {},
                    typeof r == 'object' &&
                      r.disabled && { disabled: r.disabled },
                  ),
                  typeof r == 'object' && r.value && { value: r.value },
                ),
                typeof r == 'string' ? r : r.label,
              ),
            )
          : a.default && a.default(),
      )
  },
})
f({
  name: 'CFormSwitch',
  inheritAttrs: !1,
  props: {
    id: { type: String, default: void 0, required: !1 },
    invalid: { type: Boolean, required: !1 },
    label: { type: String, default: void 0, required: !1 },
    modelValue: { type: [Boolean, String], value: void 0, required: !1 },
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['lg', 'xl'].includes(e),
    },
    type: { type: String, default: 'checkbox', required: !1 },
    valid: { type: Boolean, required: !1 },
  },
  emits: ['change', 'update:modelValue'],
  setup(e, { attrs: t, emit: a }) {
    const n = b(t.checked)
    ue(() => {
      e.modelValue &&
        typeof e.modelValue == 'boolean' &&
        console.log(e.modelValue)
    }),
      R(
        () => e.modelValue,
        () => {
          typeof e.modelValue == 'boolean' && (n.value = e.modelValue)
        },
      )
    const r = (i) => {
      const o = i.target
      a('change', i), a('update:modelValue', o.checked)
    }
    return () =>
      l(
        'div',
        {
          class: [
            'form-check form-switch',
            {
              [`form-switch-${e.size}`]: e.size,
              'is-invalid': e.invalid,
              'is-valid': e.valid,
            },
          ],
        },
        [
          l(
            'input',
            H(x({}, t), {
              checked: n.value,
              class: [
                'form-check-input',
                { 'is-invalid': e.invalid, 'is-valid': e.valid },
              ],
              id: e.id,
              onChange: (i) => r(i),
              type: e.type,
            }),
          ),
          e.label &&
            l(
              ea,
              H(x({}, e.id && { for: e.id }), { class: 'form-check-label' }),
              { default: () => e.label },
            ),
        ],
      )
  },
})
const pr = f({
  name: 'CFormText',
  props: { component: { type: String, required: !1, default: 'div' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'form-text' }, t.default && t.default())
  },
})
f({
  name: 'CFormTextarea',
  props: {
    disabled: { type: Boolean, required: !1 },
    invalid: { type: Boolean, required: !1 },
    modelValue: { type: String, default: void 0, require: !1 },
    plainText: { type: Boolean, required: !1 },
    readonly: { type: Boolean, required: !1 },
    valid: { type: Boolean, required: !1 },
  },
  emits: ['change', 'input', 'update:modelValue'],
  setup(e, { emit: t, slots: a }) {
    const n = (r) => {
      const i = r.target
      t('input', r), t('update:modelValue', i.value)
    }
    return () =>
      l(
        'textarea',
        {
          disabled: e.disabled,
          readonly: e.readonly,
          class: [
            e.plainText ? 'form-control-plaintext' : 'form-control',
            { 'is-invalid': e.invalid, 'is-valid': e.valid },
          ],
          onInput: (r) => n(r),
          value: e.modelValue,
        },
        a.default && a.default(),
      )
  },
})
f({
  name: 'CInputGroup',
  props: {
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['sm', 'lg'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'div',
        { class: ['input-group', { [`input-group-${e.size}`]: e.size }] },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CInputGroupText',
  props: { component: { type: String, required: !1, default: 'span' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'input-group-text' }, t.default && t.default())
  },
})
const er = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  ft = f({
    name: 'CCol',
    props: {
      xs: {
        type: [Boolean, Number, String, Object],
        default: void 0,
        require: !1,
      },
      sm: {
        type: [Boolean, Number, String, Object],
        default: void 0,
        require: !1,
      },
      md: {
        type: [Boolean, Number, String, Object],
        default: void 0,
        require: !1,
      },
      lg: {
        type: [Boolean, Number, String, Object],
        default: void 0,
        require: !1,
      },
      xl: {
        type: [Boolean, Number, String, Object],
        default: void 0,
        require: !1,
      },
      xxl: {
        type: [Boolean, Number, String, Object],
        default: void 0,
        require: !1,
      },
    },
    setup(e, { slots: t }) {
      const a = []
      return (
        er.forEach((n) => {
          const r = e[n],
            i = n === 'xs' ? '' : `-${n}`
          r &&
            ((typeof r == 'number' || typeof r == 'string') &&
              a.push(`col${i}-${r}`),
            typeof r == 'boolean' && a.push(`col${i}`)),
            r &&
              typeof r == 'object' &&
              ((typeof r.span == 'number' || typeof r.span == 'string') &&
                a.push(`col${i}-${r.span}`),
              typeof r.span == 'boolean' && a.push(`col${i}`),
              (typeof r.order == 'number' || typeof r.order == 'string') &&
                a.push(`order${i}-${r.order}`),
              typeof r.offset == 'number' && a.push(`offset${i}-${r.offset}`))
        }),
        () =>
          l('div', { class: [a.length ? a : 'col'] }, t.default && t.default())
      )
    },
  }),
  tr = ['xxl', 'xl', 'lg', 'md', 'sm', 'fluid'],
  gr = f({
    name: 'CContainer',
    props: {
      sm: { type: Boolean, required: !1 },
      md: { type: Boolean, required: !1 },
      lg: { type: Boolean, required: !1 },
      xl: { type: Boolean, required: !1 },
      xxl: { type: Boolean, required: !1 },
      fluid: { type: Boolean, required: !1 },
    },
    setup(e, { slots: t }) {
      const a = []
      return (
        tr.forEach((n) => {
          e[n] && a.push(`container-${n}`)
        }),
        () =>
          l(
            'div',
            { class: [a.length ? a : 'container'] },
            t.default && t.default(),
          )
      )
    },
  }),
  ar = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  yr = f({
    name: 'CRow',
    props: {
      xs: { type: Object, default: void 0, required: !1 },
      sm: { type: Object, default: void 0, required: !1 },
      md: { type: Object, default: void 0, required: !1 },
      lg: { type: Object, default: void 0, required: !1 },
      xl: { type: Object, default: void 0, required: !1 },
      xxl: { type: Object, default: void 0, required: !1 },
    },
    setup(e, { slots: t }) {
      const a = []
      return (
        ar.forEach((n) => {
          const r = e[n],
            i = n === 'xs' ? '' : `-${n}`
          typeof r == 'object' &&
            (r.cols && a.push(`row-cols${i}-${r.cols}`),
            typeof r.gutter == 'number' && a.push(`g${i}-${r.gutter}`),
            typeof r.gutterX == 'number' && a.push(`gx${i}-${r.gutterX}`),
            typeof r.gutterY == 'number' && a.push(`gy${i}-${r.gutterY}`))
        }),
        () => l('div', { class: ['row', a] }, t.default && t.default())
      )
    },
  })
f({
  name: 'CHeader',
  props: {
    container: {
      type: [Boolean, String],
      default: void 0,
      required: !1,
      validator: (e) =>
        typeof e == 'boolean' ||
        ['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(e),
    },
    position: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['fixed', 'sticky'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'div',
        { class: ['header', { [`header-${e.position}`]: e.position }] },
        e.container
          ? l(
              'div',
              {
                class: `container${
                  e.container !== !0 ? '-' + e.container : ''
                }`,
              },
              t.default && t.default(),
            )
          : t.default && t.default(),
      )
  },
})
f({
  name: 'CHeaderBrand',
  props: { component: { type: String, required: !1, default: 'a' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'header-brand' }, t.default && t.default())
  },
})
f({
  name: 'CHeaderDivider',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'header-divider' }, t.default && t.default())
  },
})
f({
  name: 'CHeaderNav',
  props: { component: { type: String, required: !1, default: 'ul' } },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        { class: 'header-nav', role: 'navigation' },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CHeaderText',
  setup(e, { slots: t }) {
    return () => l('span', { class: 'header-text' }, t.default && t.default())
  },
})
f({
  name: 'CHeaderToggler',
  setup(e, { slots: t }) {
    return () =>
      l(
        'button',
        {
          class: 'header-toggler',
          type: 'button',
          'aria-label': 'Toggle navigation',
        },
        t.default ? t.default() : l('span', { class: ['header-toggler-icon'] }),
      )
  },
})
f({
  name: 'CImage',
  props: {
    align: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['start', 'center', 'end'].includes(e),
    },
    fluid: { type: Boolean, required: !1 },
    rounded: { type: Boolean, required: !1 },
    thumbnail: { type: Boolean, required: !1 },
  },
  setup(e) {
    return () =>
      l('img', {
        class: [
          {
            [`float-${e.align}`]:
              e.align && (e.align === 'start' || e.align === 'end'),
            'd-block mx-auto': e.align && e.align === 'center',
            'img-fluid': e.fluid,
            rounded: e.rounded,
            'img-thumbnail': e.thumbnail,
          },
        ],
      })
  },
})
const hr = f({
    name: 'CListGroup',
    props: {
      component: { type: String, required: !1, default: 'ul' },
      flush: { type: Boolean, required: !1 },
      layout: {
        type: String,
        default: void 0,
        required: !1,
        validator: (e) =>
          [
            'horizontal',
            'horizontal-sm',
            'horizontal-md',
            'horizontal-lg',
            'horizontal-xl',
            'horizontal-xxl',
          ].includes(e),
      },
    },
    setup(e, { slots: t }) {
      return () =>
        l(
          e.component,
          {
            class: [
              'list-group',
              {
                'list-group-flush': e.flush,
                [`list-group-${e.layout}`]: e.layout,
              },
            ],
          },
          t.default && t.default(),
        )
    },
  }),
  br = f({
    name: 'CListGroupItem',
    props: {
      active: { type: Boolean, required: !1 },
      color: q,
      disabled: { type: Boolean, required: !1 },
      component: { type: String, required: !1, default: 'li' },
    },
    setup(e, { slots: t }) {
      return () =>
        l(
          e.component,
          x(
            x(
              x(
                {
                  class: [
                    'list-group-item',
                    {
                      [`list-group-item-${e.color}`]: e.color,
                      'list-group-item-action':
                        e.component === 'a' || e.component === 'button',
                      active: e.active,
                      disabled: e.disabled,
                    },
                  ],
                },
                (e.component === 'a' || e.component === 'button') && {
                  active: e.active,
                  disabled: e.disabled,
                },
              ),
              e.active && { 'aria-current': !0 },
            ),
            e.disabled && { 'aria-disabled': !0 },
          ),
          t.default && t.default(),
        )
    },
  }),
  wr = f({
    name: 'CModal',
    props: {
      alignment: {
        default: 'top',
        required: !1,
        validator: (e) => ['top', 'center'].includes(e),
      },
      backdrop: { type: [Boolean, String], default: !0, require: !1 },
      contentClassName: { type: String, default: void 0, required: !1 },
      fullscreen: {
        type: [Boolean, String],
        default: void 0,
        required: !1,
        validator: (e) =>
          typeof e == 'string'
            ? ['sm', 'md', 'lg', 'xl', 'xxl'].includes(e)
            : typeof e == 'boolean',
      },
      keyboard: { type: Boolean, default: !0, required: !1 },
      scrollable: { type: Boolean, required: !1 },
      size: {
        type: String,
        default: void 0,
        required: !1,
        validator: (e) => ['sm', 'lg', 'xl'].includes(e),
      },
      transition: { type: Boolean, default: !0, required: !1 },
      visible: Boolean,
    },
    emits: ['close', 'close-prevented', 'show'],
    setup(e, { slots: t, attrs: a, emit: n }) {
      const r = b(),
        i = b(),
        o = b(e.visible)
      R(
        () => e.visible,
        () => {
          o.value = e.visible
        },
      )
      const d = (g, y) => {
          g.addEventListener('transitionend', () => {
            y()
          }),
            document.body.classList.add('modal-open'),
            (g.style.display = 'block'),
            setTimeout(() => {
              g.classList.add('show')
            }, 1),
            n('show')
        },
        u = () => {
          window.addEventListener('mousedown', p),
            window.addEventListener('keyup', m)
        },
        v = (g, y) => {
          g.addEventListener('transitionend', () => {
            y()
          }),
            document.body.classList.remove('modal-open'),
            g.classList.remove('show')
        },
        s = (g) => {
          window.removeEventListener('mousedown', p),
            window.removeEventListener('keyup', m),
            (g.style.display = 'none')
        },
        c = () => {
          n('close'), (o.value = !1)
        },
        m = (g) => {
          i.value &&
            !i.value.contains(g.target) &&
            (e.backdrop !== 'static' && g.key === 'Escape' && e.keyboard && c(),
            e.backdrop === 'static' &&
              (r.value.classList.add('modal-static'),
              n('close-prevented'),
              setTimeout(() => {
                r.value.classList.remove('modal-static')
              }, 300)))
        },
        p = (g) => {
          window.addEventListener('mouseup', () => h(g), { once: !0 })
        },
        h = (g) => {
          i.value &&
            !i.value.contains(g.target) &&
            (e.backdrop !== 'static' && c(),
            e.backdrop === 'static' &&
              (r.value.classList.add('modal-static'),
              setTimeout(() => {
                r.value.classList.remove('modal-static')
              }, 300)))
        }
      return (
        P('handleDismiss', c),
        () => [
          l(
            Y,
            {
              onEnter: (g, y) => d(g, y),
              onAfterEnter: () => u(),
              onLeave: (g, y) => v(g, y),
              onAfterLeave: (g) => s(g),
            },
            () =>
              o.value &&
              l(
                'div',
                { class: ['modal', { fade: e.transition }, a.class], ref: r },
                l(
                  'div',
                  {
                    class: [
                      'modal-dialog',
                      {
                        'modal-dialog-centered': e.alignment === 'center',
                        [`modal-fullscreen-${e.fullscreen}-down`]:
                          e.fullscreen && typeof e.fullscreen == 'string',
                        'modal-fullscreen':
                          e.fullscreen && typeof e.fullscreen == 'boolean',
                        ['modal-dialog-scrollable']: e.scrollable,
                        [`modal-${e.size}`]: e.size,
                      },
                    ],
                    role: 'dialog',
                  },
                  l(
                    'div',
                    { class: ['modal-content', e.contentClassName], ref: i },
                    t.default && t.default(),
                  ),
                ),
              ),
          ),
          e.backdrop && l(tt, { class: 'modal-backdrop', visible: o.value }),
        ]
      )
    },
  }),
  Cr = f({
    name: 'CModalBody',
    setup(e, { slots: t }) {
      return () => l('div', { class: 'modal-body' }, t.default && t.default())
    },
  }),
  xr = f({
    name: 'CModalFooter',
    setup(e, { slots: t }) {
      return () => l('div', { class: 'modal-footer' }, t.default && t.default())
    },
  }),
  qr = f({
    name: 'CModalHeader',
    props: { closeButton: { type: Boolean, required: !1, default: !0 } },
    setup(e, { slots: t }) {
      const a = j('handleDismiss')
      return () =>
        l('span', { class: 'modal-header' }, [
          t.default && t.default(),
          e.closeButton && l(Ve, { onClick: () => a() }, ''),
        ])
    },
  }),
  Br = f({
    name: 'CModalTitle',
    props: { component: { type: String, default: 'h5', required: !1 } },
    setup(e, { slots: t }) {
      return () =>
        l(e.component, { class: 'modal-title' }, t.default && t.default())
    },
  })
f({
  name: 'CNav',
  props: {
    component: { type: String, required: !1, default: 'ul' },
    layout: {
      type: String,
      required: !1,
      default: void 0,
      validator: (e) => ['fill', 'justified'].includes(e),
    },
    variant: {
      type: String,
      required: !1,
      default: void 0,
      validator: (e) => ['tabs', 'pills'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        {
          class: [
            'nav',
            { [`nav-${e.layout}`]: e.layout, [`nav-${e.variant}`]: e.variant },
          ],
          role: 'navigation',
        },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CNavGroup',
  props: { compact: Boolean, visible: Boolean },
  emits: ['visible-change'],
  setup(e, { slots: t, emit: a }) {
    const n = b(),
      r = b(),
      i = b(),
      o = (g, y) => {
        g ? (i.value = y) : i.value === y && (i.value = 0)
      },
      d = (g) => Boolean(i.value === g)
    ue(() => {
      ;(n.value = e.visible),
        e.visible && r.value.classList.add('show'),
        a('visible-change', n.value)
    }),
      R(
        () => e.visible,
        () => {
          ;(n.value = e.visible), n.value === !1 && (i.value = void 0)
        },
      ),
      R(n, () => {
        a('visible-change', n.value)
      })
    const u = () => {
        ;(n.value = !n.value), a('visible-change', n.value)
      },
      v = (g) => {
        ;(g.style.height = '0px'), r.value.classList.add('show')
      },
      s = (g, y) => {
        g.addEventListener('transitionend', () => {
          y()
        }),
          (g.style.height = `${g.scrollHeight}px`)
      },
      c = (g) => {
        g.style.height = 'auto'
      },
      m = (g) => {
        g.style.height = `${g.scrollHeight}px`
      },
      p = (g, y) => {
        g.addEventListener('transitionend', () => {
          y()
        }),
          setTimeout(() => {
            g.style.height = '0px'
          }, 1)
      },
      h = () => {
        r.value.classList.remove('show')
      }
    return () =>
      l('li', { class: 'nav-group', ref: r }, [
        t.togglerContent &&
          l(
            'a',
            { class: ['nav-link', 'nav-group-toggle'], onClick: u },
            t.togglerContent && t.togglerContent(),
          ),
        l(
          Y,
          {
            css: !1,
            onBeforeEnter: (g) => v(g),
            onEnter: (g, y) => s(g, y),
            onAfterEnter: (g) => c(g),
            onBeforeLeave: (g) => m(g),
            onLeave: (g, y) => p(g, y),
            onAfterLeave: () => h(),
          },
          {
            default: () =>
              n.value &&
              l(
                'ul',
                { class: ['nav-group-items', { compact: e.compact }] },
                t.default &&
                  t
                    .default()
                    .map((g, y) =>
                      g.type.name === 'CNavGroup'
                        ? l(
                            g,
                            x(
                              { onVisibleChange: (C) => o(C, y + 1) },
                              i.value && { visible: d(y + 1) },
                            ),
                          )
                        : g,
                    ),
              ),
          },
        ),
      ])
  },
})
f({
  name: 'CNavGroupItems',
  setup(e, { slots: t }) {
    return () => l('ul', { class: 'nav-group-items' }, t.default && t.default())
  },
})
const ta = f({
  name: 'CNavLink',
  props: {
    active: { type: Boolean, required: !1 },
    component: { type: String, required: !1, default: 'a' },
    disabled: { type: Boolean, required: !1 },
    href: { type: String, default: void 0, required: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        De,
        {
          class: 'nav-link',
          active: e.active,
          component: e.component,
          disabled: e.disabled,
          href: e.href,
        },
        { default: () => t.default && t.default() },
      )
  },
})
f({
  name: 'CNavItem',
  props: x({}, ta.props),
  setup(e, { slots: t }) {
    return () =>
      l(
        'li',
        { class: 'nav-item' },
        e.href
          ? l(
              ta,
              {
                active: e.active,
                component: e.component,
                disabled: e.disabled,
                href: e.href,
              },
              { default: () => t.default && t.default() },
            )
          : t.default && t.default(),
      )
  },
})
f({
  name: 'CNavTitle',
  setup(e, { slots: t }) {
    return () => l('li', { class: 'nav-title' }, t.default && t.default())
  },
})
const Sr = f({
  name: 'CNavbar',
  props: {
    color: q,
    colorScheme: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['dark', 'light'].includes(e),
    },
    component: { type: String, default: 'nav', required: !1 },
    container: {
      type: [Boolean, String],
      default: void 0,
      required: !1,
      validator: (e) =>
        typeof e == 'boolean' ||
        ['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'].includes(e),
    },
    expand: {
      type: [Boolean, String],
      default: void 0,
      required: !1,
      validator: (e) =>
        typeof e == 'boolean' || ['sm', 'md', 'lg', 'xl', 'xxl'].includes(e),
    },
    placement: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['fixed-top', 'fixed-bottom', 'sticky-top'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        {
          class: [
            'navbar',
            {
              [`bg-${e.color}`]: e.color,
              [`navbar-${e.colorScheme}`]: e.colorScheme,
              [typeof e.expand == 'boolean'
                ? 'navbar-expand'
                : `navbar-expand-${e.expand}`]: e.expand,
            },
            e.placement,
          ],
        },
        e.container
          ? l(
              'div',
              {
                class: [
                  `container${e.container !== !0 ? '-' + e.container : ''}`,
                ],
              },
              t.default && t.default(),
            )
          : t.default && t.default(),
      )
  },
})
f({
  name: 'CNavbarBrand',
  props: {
    component: { type: String, default: 'a', required: !1 },
    href: { type: String, default: void 0, required: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component ? e.component : e.href ? 'a' : 'span',
        { class: 'navbar-brand', href: e.href },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CNavbarNav',
  props: { component: { type: String, required: !1, default: 'ul' } },
  setup(e, { slots: t }) {
    return () =>
      l(
        e.component,
        { class: 'navbar-nav', role: 'navigation' },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CNavbarText',
  setup(e, { slots: t }) {
    return () => l('span', { class: 'navbar-text' }, t.default && t.default())
  },
})
f({
  name: 'CNavbarToggler',
  setup(e, { slots: t }) {
    return () =>
      l(
        'button',
        { class: 'navbar-toggler' },
        t.default ? t.default() : l('span', { class: ['navbar-toggler-icon'] }),
      )
  },
})
f({
  name: 'COffcanvas',
  props: {
    backdrop: { type: Boolean, default: !0, require: !1 },
    keyboard: { type: Boolean, default: !0, require: !1 },
    placement: {
      type: String,
      default: void 0,
      require: !0,
      validator: (e) => ['start', 'end', 'top', 'bottom'].includes(e),
    },
    scroll: { type: Boolean, default: !1, required: !1 },
    visible: { type: Boolean, require: !1 },
  },
  emits: ['hide', 'show'],
  setup(e, { slots: t, emit: a }) {
    const n = b(),
      r = b(e.visible)
    R(
      () => e.visible,
      () => {
        r.value = e.visible
      },
    ),
      R(r, () => {
        if (r.value) {
          e.scroll ||
            ((document.body.style.overflow = 'hidden'),
            (document.body.style.paddingRight = '0px'))
          return
        }
        e.scroll ||
          (document.body.style.removeProperty('overflow'),
          document.body.style.removeProperty('padding-right'))
      })
    const i = (p, h) => {
        a('show'),
          p.addEventListener('transitionend', () => {
            h()
          }),
          setTimeout(() => {
            ;(p.style.visibility = 'visible'), p.classList.add('show')
          }, 1)
      },
      o = () => {
        window.addEventListener('mousedown', c),
          window.addEventListener('keyup', s)
      },
      d = (p, h) => {
        p.addEventListener('transitionend', () => {
          h()
        }),
          window.removeEventListener('mousedown', c),
          window.removeEventListener('keyup', s),
          p.classList.remove('show')
      },
      u = (p) => {
        p.style.visibility = 'hidden'
      },
      v = () => {
        ;(r.value = !1), a('hide')
      },
      s = (p) => {
        if (
          n.value &&
          !n.value.contains(p.target) &&
          p.key === 'Escape' &&
          e.keyboard &&
          e.backdrop
        )
          return v()
      },
      c = (p) => {
        window.addEventListener('mouseup', () => m(p), { once: !0 })
      },
      m = (p) => {
        n.value && !n.value.contains(p.target) && e.backdrop && v()
      }
    return () => [
      l(
        Y,
        {
          css: !1,
          onEnter: (p, h) => i(p, h),
          onAfterEnter: () => o(),
          onLeave: (p, h) => d(p, h),
          onAfterLeave: (p) => u(p),
        },
        () =>
          Qe(
            l(
              'div',
              {
                class: [
                  'offcanvas',
                  { [`offcanvas-${e.placement}`]: e.placement },
                ],
                ref: n,
                role: 'dialog',
              },
              t.default && t.default(),
            ),
            [[St, e.visible]],
          ),
      ),
      e.backdrop && l(tt, { class: 'offcanvas-backdrop', visible: r.value }),
    ]
  },
})
f({
  name: 'COffcanvasBody',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'offcanvas-body' }, t.default && t.default())
  },
})
f({
  name: 'COffcanvasHeader',
  setup(e, { slots: t }) {
    return () =>
      l('div', { class: 'offcanvas-header' }, t.default && t.default())
  },
})
f({
  name: 'COffcanvasTitle',
  props: { component: { type: String, required: !1, default: 'h5' } },
  setup(e, { slots: t }) {
    return () =>
      l(e.component, { class: 'offcanvas-title' }, t.default && t.default())
  },
})
f({
  name: 'CPagination',
  props: {
    align: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['start', 'center', 'end'].includes(e),
    },
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['sm', 'lg'].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'nav',
        {},
        l(
          'ul',
          {
            class: [
              'pagination',
              {
                [`justify-content-${e.align}`]: e.align,
                [`pagination-${e.size}`]: e.size,
              },
            ],
          },
          t.default && t.default(),
        ),
      )
  },
})
f({
  name: 'CPaginationItem',
  props: {
    active: { type: Boolean, required: !1 },
    component: { type: String, default: void 0, required: !1 },
    disabled: { type: Boolean, required: !1 },
    href: { type: String, default: void 0, required: !1 },
  },
  setup(e, { slots: t }) {
    return () => {
      const a = e.component ? e.component : e.active ? 'span' : 'a'
      return l(
        'li',
        x(
          { class: ['page-item', { active: e.active, disabled: e.disabled }] },
          e.active && { active: e.active, 'aria-current': 'page' },
        ),
        a === 'a'
          ? l(
              De,
              { class: ['page-link'], component: a, href: e.href },
              { default: () => t.default && t.default() },
            )
          : l(a, { class: ['page-link'] }, t.default && t.default()),
      )
    }
  },
})
const nr = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  Or = f({
    name: 'CPlaceholder',
    props: {
      animation: {
        type: String,
        default: void 0,
        require: !1,
        validator: (e) => ['glow', 'wave'].includes(e),
      },
      color: q,
      component: { type: String, default: 'span', required: !1 },
      size: {
        type: String,
        default: void 0,
        required: !1,
        validator: (e) => ['xs', 'sm', 'lg'].includes(e),
      },
      xs: { type: Number, default: void 0, require: !1 },
      sm: { type: Number, default: void 0, require: !1 },
      md: { type: Number, default: void 0, require: !1 },
      lg: { type: Number, default: void 0, require: !1 },
      xl: { type: Number, default: void 0, require: !1 },
      xxl: { type: Number, default: void 0, require: !1 },
    },
    setup(e, { slots: t }) {
      const a = []
      return (
        nr.forEach((n) => {
          const r = e[n],
            i = n === 'xs' ? '' : `-${n}`
          typeof r == 'number' && a.push(`col${i}-${r}`),
            typeof r == 'boolean' && a.push(`col${i}`)
        }),
        () =>
          l(
            e.component,
            {
              class: [
                e.animation ? `placeholder-${e.animation}` : 'placeholder',
                {
                  [`bg-${e.color}`]: e.color,
                  [`placeholder-${e.size}`]: e.size,
                },
                a,
              ],
            },
            t.default && t.default(),
          )
      )
    },
  }),
  aa = f({
    name: 'CProgressBar',
    props: {
      animated: { type: Boolean, required: !1 },
      color: q,
      value: { type: Number, required: !1, default: 0 },
      variant: {
        type: String,
        default: void 0,
        require: !1,
        validator: (e) => e === 'striped',
      },
    },
    setup(e, { slots: t }) {
      return () =>
        l(
          'div',
          {
            class: [
              'progress-bar',
              `bg-${e.color}`,
              {
                [`progress-bar-${e.variant}`]: e.variant,
                ['progress-bar-animated']: e.animated,
              },
            ],
            role: 'progressbar',
            style: `width: ${e.value}%`,
            'aria-valuenow': e.value,
            'aria-valuemin': '0',
            'aria-valuemax': '100',
          },
          t.default && t.default(),
        )
    },
  }),
  na = f({
    name: 'CProgress',
    props: x(
      {
        height: { type: Number, default: void 0, required: !1 },
        thin: Boolean,
        white: Boolean,
      },
      aa.props,
    ),
    setup(e, { slots: t }) {
      return () =>
        l(
          'div',
          x(
            {
              class: [
                'progress',
                { 'progress-thin': e.thin, 'progress-white': e.white },
              ],
            },
            (e.height, { style: `height: ${e.height}px` }),
          ),
          e.value
            ? l(
                aa,
                {
                  value: e.value,
                  animated: e.animated,
                  color: e.color,
                  variant: e.variant,
                },
                t.default && t.default(),
              )
            : t.default && t.default(),
        )
    },
  })
f({
  name: 'CPopover',
  props: {
    content: { type: String, default: void 0, required: !1 },
    offset: { type: Array, default: () => [0, 8], required: !1 },
    placement: {
      type: String,
      default: 'top',
      required: !1,
      validator: (e) => ['top', 'right', 'bottom', 'left'].includes(e),
    },
    title: { type: String, default: void 0, required: !1 },
    trigger: {
      type: [String, Array],
      default: 'click',
      required: !1,
      validator: (e) =>
        typeof e == 'string'
          ? ['click', 'focus', 'hover'].includes(e)
          : Array.isArray(e)
          ? e.every((t) => ['click', 'focus', 'hover'].includes(t))
          : !1,
    },
    visible: Boolean,
  },
  emits: ['hide', 'show'],
  setup(e, { slots: t, emit: a }) {
    const n = b(),
      r = b(),
      i = b(),
      o = b(e.visible),
      d = (m, p) => {
        a('show'),
          s(),
          m.classList.add('show'),
          m.addEventListener('transitionend', () => {
            p()
          })
      },
      u = (m, p) => {
        a('hide'),
          m.classList.remove('show'),
          m.addEventListener('transitionend', () => {
            p(), c()
          })
      },
      v = (m) => {
        ;(n.value = m.target), (o.value = !o.value)
      },
      s = () => {
        n.value &&
          (i.value = ut(n.value, r.value, {
            placement: e.placement,
            modifiers: [{ name: 'offset', options: { offset: e.offset } }],
          }))
      },
      c = () => {
        i.value && i.value.destroy(), (i.value = void 0)
      }
    return () => [
      l(
        Bt,
        { to: 'body' },
        l(
          Y,
          { onEnter: (m, p) => d(m, p), onLeave: (m, p) => u(m, p) },
          () =>
            o.value &&
            l(
              'div',
              {
                class: 'popover fade bs-popover-auto',
                ref: r,
                role: 'tooltip',
              },
              [
                l('div', { class: 'popover-arrow', 'data-popper-arrow': '' }),
                (e.title || t.title) &&
                  l(
                    'div',
                    { class: 'popover-header' },
                    { default: () => (t.title && t.title()) || e.title },
                  ),
                (e.content || t.content) &&
                  l(
                    'div',
                    { class: 'popover-body' },
                    { default: () => (t.content && t.content()) || e.content },
                  ),
              ],
            ),
        ),
      ),
      t.toggler &&
        t.toggler({
          on: {
            click: (m) => e.trigger.includes('click') && v(m),
            blur: (m) => e.trigger.includes('focus') && v(m),
            focus: (m) => e.trigger.includes('focus') && v(m),
            mouseenter: (m) => e.trigger.includes('hover') && v(m),
            mouseleave: (m) => e.trigger.includes('hover') && v(m),
          },
        }),
    ]
  },
})
const ra = (e) =>
    Boolean(getComputedStyle(e).getPropertyValue('--cui-is-mobile')),
  Ge = (e) => {
    const t = e.getBoundingClientRect()
    return (
      t.top >= 0 &&
      t.left >= 0 &&
      t.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      t.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
f({
  name: 'CSidebar',
  props: {
    narrow: { type: Boolean, required: !1 },
    overlaid: { type: Boolean, required: !1 },
    position: {
      type: String,
      default: void 0,
      validator: (e) => ['fixed'].includes(e),
    },
    size: {
      type: String,
      default: void 0,
      validator: (e) => ['sm', 'lg', 'xl'].includes(e),
    },
    unfoldable: Boolean,
    visible: Boolean,
  },
  emits: ['hide', 'show', 'visible-change'],
  setup(e, { attrs: t, slots: a, emit: n }) {
    const r = b(),
      i = b(),
      o = b(),
      d = b(e.visible)
    R(i, () => {
      n('visible-change', i.value), i.value ? n('show') : n('hide')
    }),
      R(
        () => e.visible,
        () => (d.value = e.visible),
      ),
      R(r, () => {
        r.value && d.value && (d.value = !1)
      }),
      ue(() => {
        ;(r.value = ra(o.value)),
          (i.value = Ge(o.value)),
          window.addEventListener('resize', () => v()),
          window.addEventListener('mouseup', c),
          window.addEventListener('keyup', s),
          o.value.addEventListener('mouseup', m),
          o.value.addEventListener('transitionend', () => {
            i.value = Ge(o.value)
          })
      }),
      ba(() => {
        window.removeEventListener('resize', () => v()),
          window.removeEventListener('mouseup', c),
          window.removeEventListener('keyup', s),
          o.value.removeEventListener('mouseup', m),
          o.value.removeEventListener('transitionend', () => {
            i.value = Ge(o.value)
          })
      })
    const u = () => {
        d.value = !1
      },
      v = () => {
        ;(r.value = ra(o.value)), (i.value = Ge(o.value))
      },
      s = (p) => {
        r.value && !o.value.contains(p.target) && u()
      },
      c = (p) => {
        r.value && !o.value.contains(p.target) && u()
      },
      m = (p) => {
        const h = p.target
        h &&
          h.classList.contains('nav-link') &&
          !h.classList.contains('nav-group-toggle') &&
          r.value &&
          u()
      }
    return () => [
      l(
        'div',
        {
          class: [
            'sidebar',
            {
              'sidebar-narrow': e.narrow,
              'sidebar-overlaid': e.overlaid,
              [`sidebar-${e.position}`]: e.position,
              [`sidebar-${e.size}`]: e.size,
              'sidebar-narrow-unfoldable': e.unfoldable,
              show: d.value === !0 && r.value,
              hide: d.value === !1 && !r.value,
            },
            t.class,
          ],
          ref: o,
        },
        a.default && a.default(),
      ),
      r.value &&
        l(tt, {
          class: 'sidebar-backdrop d-none',
          visible: e.visible,
          onClick: () => {
            d.value = !1
          },
        }),
    ]
  },
})
f({
  name: 'CSidebarBrand',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'sidebar-brand' }, t.default && t.default())
  },
})
f({
  name: 'CSidebarFooter',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'sidebar-footer' }, t.default && t.default())
  },
})
f({
  name: 'CSidebarHeader',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'sidebar-header' }, t.default && t.default())
  },
})
f({
  name: 'CSidebarNav',
  setup(e, { slots: t }) {
    const a = b(),
      n = (i, o) => {
        i ? (a.value = o) : a.value === o && (a.value = 0)
      },
      r = (i) => Boolean(a.value === i)
    return () =>
      l(
        'ul',
        { class: 'sidebar-nav' },
        t.default &&
          t
            .default()
            .map((i, o) =>
              i.type.name === 'CNavGroup'
                ? l(
                    i,
                    x(
                      { onVisibleChange: (d) => n(d, o + 1) },
                      a.value && { visible: r(o + 1) },
                    ),
                  )
                : i,
            ),
      )
  },
})
f({
  name: 'CSidebarToggler',
  setup(e, { slots: t }) {
    return () =>
      l('button', { class: 'sidebar-toggler' }, t.default && t.default())
  },
})
f({
  name: 'CSpinner',
  props: {
    color: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) =>
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'dark',
          'light',
        ].includes(e),
    },
    component: { type: String, default: 'div', required: !1 },
    size: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => e === 'sm',
    },
    variant: {
      type: String,
      default: 'border',
      required: !1,
      validator: (e) => ['border', 'grow'].includes(e),
    },
    visuallyHiddenLabel: { type: String, default: 'Loading...', required: !1 },
  },
  setup(e) {
    return () =>
      l(
        e.component,
        {
          class: [
            `spinner-${e.variant}`,
            `text-${e.color}`,
            e.size && `spinner-${e.variant}-${e.size}`,
          ],
          role: 'status',
        },
        l('span', { class: ['visually-hidden'] }, e.visuallyHiddenLabel),
      )
  },
})
f({
  name: 'CTable',
  props: {
    align: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['bottom', 'middle', 'top'].includes(e),
    },
    borderColor: q,
    bordered: { type: Boolean, required: !1 },
    borderless: { type: Boolean, required: !1 },
    caption: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => e === 'top',
    },
    color: q,
    hover: { type: Boolean, required: !1 },
    responsive: {
      type: [Boolean, String],
      default: void 0,
      required: !1,
      validator: (e) =>
        typeof e == 'string'
          ? ['sm', 'md', 'lg', 'xl', 'xxl'].includes(e)
          : typeof e == 'boolean',
    },
    small: { type: Boolean, required: !1 },
    striped: { type: Boolean, required: !1 },
  },
  setup(e, { slots: t, attrs: a }) {
    const n = () =>
      l(
        'table',
        {
          class: [
            'table',
            {
              [`align-${e.align}`]: e.align,
              [`caption-${e.caption}`]: e.caption,
              [`border-${e.borderColor}`]: e.borderColor,
              'table-bordered': e.bordered,
              'table-borderless': e.borderless,
              [`table-${e.color}`]: e.color,
              'table-hover': e.hover,
              'table-sm': e.small,
              'table-striped': e.striped,
            },
            a.class,
          ],
        },
        t.default && t.default(),
      )
    return () => [
      e.responsive
        ? l(
            'div',
            {
              class:
                typeof e.responsive == 'boolean'
                  ? 'table-responsive'
                  : `table-responsive-${e.responsive}`,
            },
            n(),
          )
        : n(),
    ]
  },
})
f({
  name: 'CTableBody',
  props: { color: q },
  setup(e, { slots: t }) {
    return () =>
      l(
        'tbody',
        { class: [{ [`table-${e.color}`]: e.color }] },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CTableCaption',
  props: {},
  setup(e, { slots: t }) {
    return () => l('caption', {}, t.default && t.default())
  },
})
f({
  name: 'CTableDataCell',
  props: {
    active: { type: Boolean, required: !1 },
    align: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['bottom', 'middle', 'top'].includes(e),
    },
    color: q,
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'td',
        {
          class: [
            {
              [`align-${e.align}`]: e.align,
              'table-active': e.active,
              [`table-${e.color}`]: e.color,
            },
          ],
        },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CTableFoot',
  props: { color: q },
  setup(e, { slots: t }) {
    return () =>
      l(
        'tfoot',
        { class: [{ [`table-${e.color}`]: e.color }] },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CTableHead',
  props: { color: q },
  setup(e, { slots: t }) {
    return () =>
      l(
        'thead',
        { class: [{ [`table-${e.color}`]: e.color }] },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CTableHeaderCell',
  props: { color: q },
  setup(e, { slots: t }) {
    return () =>
      l(
        'th',
        { class: [{ [`table-${e.color}`]: e.color }] },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CTableRow',
  props: {
    active: { type: Boolean, required: !1 },
    align: {
      type: String,
      default: void 0,
      required: !1,
      validator: (e) => ['bottom', 'middle', 'top'].includes(e),
    },
    color: q,
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'tr',
        {
          class: [
            {
              [`align-${e.align}`]: e.align,
              'table-active': e.active,
              [`table-${e.color}`]: e.color,
            },
          ],
        },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CTabContent',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'tab-content' }, t.default && t.default())
  },
})
f({
  name: 'CTabPane',
  props: { visible: { type: Boolean, default: !1, required: !1 } },
  emits: ['hide', 'show'],
  setup(e, { slots: t, emit: a }) {
    const n = b(),
      r = b(!0),
      i = (d, u) => {
        ;(r.value = !1),
          a('show'),
          setTimeout(() => {
            d.classList.add('show')
          }, 1),
          d.addEventListener('transitionend', () => {
            u()
          })
      },
      o = (d, u) => {
        ;(r.value = !1),
          a('hide'),
          d.classList.remove('show'),
          d.addEventListener('transitionend', () => {
            u()
          })
      }
    return () =>
      l(Y, { onEnter: (d, u) => i(d, u), onLeave: (d, u) => o(d, u) }, () =>
        Qe(
          l(
            'div',
            {
              class: [
                'tab-pane',
                'fade',
                { active: e.visible, show: r.value && e.visible },
              ],
              ref: n,
            },
            t.default && t.default(),
          ),
          [[wa, e.visible]],
        ),
      )
  },
})
f({
  name: 'CToast',
  props: {
    autohide: { type: Boolean, default: !0, required: !1 },
    color: q,
    delay: { type: Number, default: 5e3, required: !1 },
    dismissible: { type: Boolean, default: !0, required: !1 },
    index: { type: Number, default: void 0, required: !1 },
    title: { type: String, default: void 0, required: !1 },
    visible: { type: Boolean, default: !0, required: !1 },
  },
  emits: ['close', 'show'],
  setup(e, { slots: t, emit: a }) {
    const n = b(e.visible)
    let r = 0
    P('updateVisible', (s) => {
      n.value = s
    })
    const o = (s, c) => {
        s.addEventListener('transitionend', () => {
          c()
        }),
          setTimeout(() => {
            s.classList.add('show')
          }, 1),
          e.index ? a('show', e.index) : a('show')
      },
      d = (s) => {
        s.classList.remove('show')
      },
      u = (s, c) => {
        s.addEventListener('transitionend', () => {
          c()
        }),
          s.classList.remove('show')
      },
      v = (s) => {
        s.classList.add('hide'), e.index ? a('close', e.index) : a('close')
      }
    return (
      ue(() => {
        e.autohide &&
          (clearTimeout(r),
          (r = window.setTimeout(() => {
            n.value = !1
          }, e.delay)))
      }),
      () =>
        l(
          Y,
          {
            appear: !0,
            onEnter: (s, c) => o(s, c),
            onBeforeLeave: (s) => d(s),
            onLeave: (s, c) => u(s, c),
            onAfterLeave: (s) => v(s),
          },
          () =>
            n.value &&
            l(
              'div',
              {
                class: ['toast fade', { [`bg-${e.color}`]: e.color }],
                'aria-live': 'assertive',
                'aria-atomic': !0,
                role: 'alert',
                ref: 'toastRef',
              },
              t.default && t.default(),
            ),
        )
    )
  },
})
f({
  name: 'CToastBody',
  setup(e, { slots: t }) {
    return () => l('div', { class: 'toast-body' }, t.default && t.default())
  },
})
const rr = f({
  name: 'CToastClose',
  props: x(
    { component: { type: String, default: void 0, required: !1 } },
    Ve.props,
  ),
  emits: ['close'],
  setup(e, { slots: t, emit: a }) {
    const n = j('updateVisible'),
      r = () => {
        a('close'), n(!1)
      }
    return () =>
      e.component
        ? l(
            e.component,
            {
              onClick: () => {
                r()
              },
            },
            () => t.default && t.default(),
          )
        : l(
            Ve,
            H(x({}, e), {
              onClick: () => {
                r()
              },
            }),
          )
  },
})
f({
  name: 'CToaster',
  props: {
    placement: {
      type: String,
      default: void 0,
      require: !1,
      validator: (e) =>
        [
          'top-start',
          'top-center',
          'top-end',
          'middle-start',
          'middle-center',
          'middle-end',
          'bottom-start',
          'bottom-center',
          'bottom-end',
        ].includes(e),
    },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        'div',
        {
          class: [
            'toaster toast-container p-3',
            {
              'position-fixed': e.placement,
              'top-0': e.placement && e.placement.includes('top'),
              'top-50 translate-middle-y':
                e.placement && e.placement.includes('middle'),
              'bottom-0': e.placement && e.placement.includes('bottom'),
              'start-0': e.placement && e.placement.includes('start'),
              'start-50 translate-middle-x':
                e.placement && e.placement.includes('center'),
              'end-0': e.placement && e.placement.includes('end'),
            },
          ],
        },
        t.default && t.default(),
      )
  },
})
f({
  name: 'CToastHeader',
  props: { closeButton: { type: Boolean, require: !1 } },
  emits: ['close'],
  setup(e, { slots: t, emit: a }) {
    return () =>
      l('div', { class: 'toast-header' }, [
        t.default && t.default(),
        e.closeButton && l(rr, { onClose: () => a('close') }),
      ])
  },
})
f({
  name: 'CTooltip',
  props: {
    content: { type: String, default: void 0, required: !1 },
    offset: { type: Array, default: () => [0, 0], required: !1 },
    placement: {
      type: String,
      default: 'top',
      required: !1,
      validator: (e) => ['top', 'right', 'bottom', 'left'].includes(e),
    },
    trigger: {
      type: [String, Array],
      default: 'hover',
      required: !1,
      validator: (e) =>
        typeof e == 'string'
          ? ['click', 'focus', 'hover'].includes(e)
          : Array.isArray(e)
          ? e.every((t) => ['click', 'focus', 'hover'].includes(t))
          : !1,
    },
    visible: Boolean,
  },
  emits: ['hide', 'show'],
  setup(e, { slots: t, emit: a }) {
    const n = b(),
      r = b(),
      i = b(),
      o = b(e.visible),
      d = (m, p) => {
        a('show'),
          s(),
          m.classList.add('show'),
          m.addEventListener('transitionend', () => {
            p()
          })
      },
      u = (m, p) => {
        a('hide'),
          m.classList.remove('show'),
          m.addEventListener('transitionend', () => {
            p(), c()
          })
      },
      v = (m) => {
        ;(n.value = m.target), (o.value = !o.value)
      },
      s = () => {
        n.value &&
          (i.value = ut(n.value, r.value, {
            placement: e.placement,
            modifiers: [{ name: 'offset', options: { offset: e.offset } }],
          }))
      },
      c = () => {
        i.value && i.value.destroy(), (i.value = void 0)
      }
    return () => [
      l(
        Bt,
        { to: 'body' },
        l(
          Y,
          { onEnter: (m, p) => d(m, p), onLeave: (m, p) => u(m, p) },
          () =>
            o.value &&
            l(
              'div',
              {
                class: 'tooltip fade bs-tooltip-auto',
                ref: r,
                role: 'tooltip',
              },
              [
                l('div', { class: 'tooltip-arrow', 'data-popper-arrow': '' }),
                (e.content || t.content) &&
                  l(
                    'div',
                    { class: 'tooltip-inner' },
                    { default: () => (t.content && t.content()) || e.content },
                  ),
              ],
            ),
        ),
      ),
      t.toggler &&
        t.toggler({
          on: {
            click: (m) => e.trigger.includes('click') && v(m),
            blur: (m) => e.trigger.includes('focus') && v(m),
            focus: (m) => e.trigger.includes('focus') && v(m),
            mouseenter: (m) => e.trigger.includes('hover') && v(m),
            mouseleave: (m) => e.trigger.includes('hover') && v(m),
          },
        }),
    ]
  },
})
f({
  name: 'CWidgetStatsA',
  props: {
    color: { type: String, default: void 0, require: !1 },
    title: { type: String, default: void 0, require: !1 },
    value: { type: [Number, String], default: 0, require: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        se,
        {
          class: [
            {
              [`bg-${e.color}`]: e.color,
              'text-high-emphasis-inverse': e.color,
            },
          ],
        },
        () => [
          l(
            fe,
            { class: 'pb-0 d-flex justify-content-between align-items-start' },
            () => [
              l('div', {}, [
                (e.value || t.value) &&
                  l(
                    'div',
                    { class: 'fs-4 fw-semibold' },
                    { default: () => (t.value && t.value()) || e.value },
                  ),
                (e.title || t.title) &&
                  l(
                    'div',
                    {},
                    { default: () => (t.title && t.title()) || e.title },
                  ),
              ]),
              t.action && t.action(),
            ],
          ),
          t.chart && t.chart(),
          t.default && t.default(),
        ],
      )
  },
})
f({
  name: 'CWidgetStatsB',
  props: {
    color: q,
    inverse: { type: Boolean, default: void 0, require: !1 },
    progress: Ke({ color: q, value: { type: Number, default: 0 } }),
    text: { type: String, default: void 0, require: !1 },
    title: { type: String, default: void 0, require: !1 },
    value: { type: [Number, String], default: 0, require: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        se,
        {
          class: [{ 'text-high-emphasis-inverse': e.inverse }],
          color: e.color,
        },
        () =>
          l(fe, { class: 'card-body' }, () => [
            (e.value || t.value) &&
              l(
                'div',
                { class: 'fs-4 fw-semibold' },
                { default: () => (t.value && t.value()) || e.value },
              ),
            (e.title || t.title) &&
              l(
                'div',
                {},
                { default: () => (t.title && t.title()) || e.title },
              ),
            l(
              na,
              H(
                x(
                  H(
                    x(
                      { class: 'my-2' },
                      e.progress &&
                        e.progress.color && { color: e.progress.color },
                    ),
                    { height: 4 },
                  ),
                  e.progress && e.progress.value && { value: e.progress.value },
                ),
                { white: e.inverse },
              ),
            ),
            (e.text || t.text) &&
              l(
                'small',
                {
                  class: [
                    e.inverse
                      ? 'text-medium-emphasis-inverse'
                      : 'text-medium-emphasis',
                  ],
                },
                { default: () => (t.text && t.text()) || e.text },
              ),
          ]),
      )
  },
})
f({
  name: 'CWidgetStatsC',
  props: {
    color: q,
    inverse: { type: Boolean, default: void 0, require: !1 },
    progress: Ke({ color: q, value: { type: Number, default: 0 } }),
    title: { type: String, default: void 0, require: !1 },
    value: { type: [Number, String], default: 0, require: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(se, { class: [{ ['text-white']: e.inverse }], color: e.color }, () =>
        l(fe, { class: 'card-body' }, () => [
          t.icon &&
            l(
              'div',
              {
                class: [
                  'text-end mb-4',
                  e.inverse
                    ? 'text-medium-emphasis-inverse'
                    : 'text-medium-emphasis',
                ],
              },
              t.icon && t.icon(),
            ),
          (e.value || t.value) &&
            l(
              'div',
              { class: 'fs-4 fw-semibold' },
              { default: () => (t.value && t.value()) || e.value },
            ),
          (e.title || t.title) &&
            l(
              'div',
              {
                class: [
                  'text-uppercase fw-semibold small',
                  e.inverse
                    ? 'text-medium-emphasis-inverse'
                    : 'text-medium-emphasis',
                ],
              },
              { default: () => (t.title && t.title()) || e.title },
            ),
          l(
            na,
            H(
              x(
                H(
                  x(
                    { class: 'my-2' },
                    e.progress &&
                      e.progress.color && { color: e.progress.color },
                  ),
                  { height: 4 },
                ),
                e.progress && e.progress.value && { value: e.progress.value },
              ),
              { white: e.inverse },
            ),
          ),
        ]),
      )
  },
})
f({
  name: 'CWidgetStatsD',
  props: { color: q, values: { type: Array, default: () => [], require: !1 } },
  setup(e, { slots: t }) {
    return () =>
      l(
        se,
        {},
        {
          default: () => [
            l(
              qa,
              {
                class: [
                  'position-relative d-flex justify-content-center align-items-center',
                  { [`bg-${e.color}`]: e.color },
                ],
              },
              () => [t.icon && t.icon(), t.chart && t.chart()],
            ),
            l(
              fe,
              { class: 'row text-center' },
              {
                default: () =>
                  e.values &&
                  e.values.map((a, n) => [
                    n % 2 != 0 && l('div', { class: 'vr' }),
                    l(
                      ft,
                      {},
                      {
                        default: () => [
                          l(ft, { class: 'fs-5 fw-semibold' }, () => a.value),
                          l(
                            ft,
                            {
                              class:
                                'text-uppercase text-medium-emphasis small',
                            },
                            () => a.title,
                          ),
                        ],
                      },
                    ),
                  ]),
              },
            ),
          ],
        },
      )
  },
})
f({
  name: 'CWidgetStatsE',
  props: {
    title: { type: String, default: void 0, require: !1 },
    value: { type: [Number, String], default: 0, require: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(se, {}, () =>
        l(fe, { class: 'text-center' }, () => [
          (e.title || t.title) &&
            l(
              'div',
              { class: 'text-muted small text-uppercase font-weight-bold' },
              { default: () => (t.title && t.title()) || e.title },
            ),
          (e.value || t.value) &&
            l(
              'div',
              { class: 'h2 py-3' },
              { default: () => (t.value && t.value()) || e.value },
            ),
          t.chart && t.chart(),
          t.default && t.default(),
        ]),
      )
  },
})
f({
  name: 'CWidgetStatsF',
  props: {
    color: q,
    padding: { type: Boolean, default: !0 },
    title: { type: String, default: void 0, require: !1 },
    text: { type: String, default: void 0, require: !1 },
    value: { type: [Number, String], default: 0, require: !1 },
  },
  setup(e, { slots: t }) {
    return () =>
      l(
        se,
        {},
        {
          default: () => [
            l(
              fe,
              {
                class: ['d-flex align-items-center', e.padding === !1 && 'p-0'],
              },
              () => [
                l(
                  'div',
                  {
                    class: [
                      'me-3',
                      'text-white',
                      `bg-${e.color}`,
                      e.padding ? 'p-3' : 'p-4',
                    ],
                  },
                  (t.default && t.default()) || (t.icon && t.icon()),
                ),
                l('div', {}, [
                  (e.value || t.value) &&
                    l(
                      'div',
                      { class: [`fs-6 fw-semibold text-${e.color}`] },
                      { default: () => (t.value && t.value()) || e.value },
                    ),
                  (e.title || t.title) &&
                    l(
                      'div',
                      {
                        class:
                          'text-medium-emphasis text-uppercase fw-semibold small',
                      },
                      { default: () => (t.title && t.title()) || e.title },
                    ),
                ]),
              ],
            ),
            t.footer && l(xa, {}, () => t.footer && t.footer()),
          ],
        },
      )
  },
})
export {
  ft as C,
  Or as a,
  hr as b,
  br as c,
  dr as d,
  fr as e,
  gr as f,
  Sr as g,
  yr as h,
  ur as i,
  or as j,
  wr as k,
  qr as l,
  xr as m,
  sr as n,
  Br as o,
  Cr as p,
  ea as q,
  vr as r,
  pr as s,
  mr as t,
}
