import {
  b as Va,
  a as C,
  n as Ua,
  d as wt,
  t as tr,
  w as rr,
  z as Wa,
  A as Ya,
  y as ir,
  S as si,
  o as ja,
  _ as Ha,
  e as Xa,
  r as de,
  I as Ga,
  k as qa,
  g as $n,
  C as Za,
} from './bootstrap-859756f4.mjs'
import { i as Qa, d as Ka } from './index.es-38229df1.mjs'
import { a as es } from './useWallet-3e9ec1a4.mjs'
import Ja from './Header-b81db37f.mjs'
import $a from './Footer-0b7865d8.mjs'
import './numberTranslator-67ca5f44.mjs'
import './logo-db8d36a6.mjs'
var eo = '/_nuxt/assets/earth.4de97971.webp',
  to = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: eo,
  }),
  ro = '/_nuxt/assets/moon.7b28bca0.webp',
  io = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: ro,
  }),
  no = '/_nuxt/assets/neptune.7047903e.webp',
  so = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: no,
  }),
  ao = '/_nuxt/assets/venus.36b54dad.webp',
  oo = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: ao,
  })
function ht(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    )
  return o
}
function ts(o, e) {
  ;(o.prototype = Object.create(e.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = e)
}
/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ee = {
    autoSleep: 120,
    force3D: 'auto',
    nullTargetWarn: 1,
    units: { lineHeight: '' },
  },
  nr = { duration: 0.5, overwrite: !1, delay: 0 },
  Ji,
  Ne = 1e8,
  Y = 1 / Ne,
  $i = Math.PI * 2,
  lo = $i / 4,
  uo = 0,
  rs = Math.sqrt,
  co = Math.cos,
  fo = Math.sin,
  ue = function (e) {
    return typeof e == 'string'
  },
  ce = function (e) {
    return typeof e == 'function'
  },
  dt = function (e) {
    return typeof e == 'number'
  },
  en = function (e) {
    return typeof e == 'undefined'
  },
  _t = function (e) {
    return typeof e == 'object'
  },
  Pe = function (e) {
    return e !== !1
  },
  is = function () {
    return typeof window != 'undefined'
  },
  ai = function (e) {
    return ce(e) || ue(e)
  },
  ns =
    (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  ge = Array.isArray,
  tn = /(?:-?\.?\d|\.)+/gi,
  ss = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  sr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  rn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  as = /[+-]=-?[.\d]+/,
  os = /[^,'"\[\]\s]+/gi,
  ho = /[\d.+\-=]+(?:e[-+]\d*)*/i,
  Z,
  it,
  nn,
  sn,
  Re = {},
  oi = {},
  ls,
  us = function (e) {
    return (oi = ar(e, Re)) && st
  },
  an = function (e, r) {
    return console.warn(
      'Invalid property',
      e,
      'set to',
      r,
      'Missing plugin? gsap.registerPlugin()',
    )
  },
  li = function (e, r) {
    return !r && console.warn(e)
  },
  cs = function (e, r) {
    return (e && (Re[e] = r) && oi && (oi[e] = r)) || Re
  },
  Er = function () {
    return 0
  },
  on = {},
  Tt = [],
  ln = {},
  fs,
  ze = {},
  un = {},
  hs = 30,
  ui = [],
  cn = '',
  fn = function (e) {
    var r = e[0],
      t,
      i
    if ((_t(r) || ce(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
      for (i = ui.length; i-- && !ui[i].targetTest(r); );
      t = ui[i]
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new Ns(e[i], t)))) || e.splice(i, 1)
    return e
  },
  Bt = function (e) {
    return e._gsap || fn(We(e))[0]._gsap
  },
  ds = function (e, r, t) {
    return (t = e[r]) && ce(t)
      ? e[r]()
      : (en(t) && e.getAttribute && e.getAttribute(r)) || t
  },
  Ce = function (e, r) {
    return (e = e.split(',')).forEach(r) || e
  },
  re = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  me = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  _o = function (e, r) {
    for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t; );
    return i < t
  },
  ci = function () {
    var e = Tt.length,
      r = Tt.slice(0),
      t,
      i
    for (ln = {}, Tt.length = 0, t = 0; t < e; t++)
      (i = r[t]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
  },
  _s = function (e, r, t, i) {
    Tt.length && ci(), e.render(r, t, i), Tt.length && ci()
  },
  ps = function (e) {
    var r = parseFloat(e)
    return (r || r === 0) && (e + '').match(os).length < 2
      ? r
      : ue(e)
      ? e.trim()
      : e
  },
  gs = function (e) {
    return e
  },
  Ve = function (e, r) {
    for (var t in r) t in e || (e[t] = r[t])
    return e
  },
  po = function (e) {
    return function (r, t) {
      for (var i in t)
        i in r || (i === 'duration' && e) || i === 'ease' || (r[i] = t[i])
    }
  },
  ar = function (e, r) {
    for (var t in r) e[t] = r[t]
    return e
  },
  ms = function o(e, r) {
    for (var t in r)
      t !== '__proto__' &&
        t !== 'constructor' &&
        t !== 'prototype' &&
        (e[t] = _t(r[t]) ? o(e[t] || (e[t] = {}), r[t]) : r[t])
    return e
  },
  fi = function (e, r) {
    var t = {},
      i
    for (i in e) i in r || (t[i] = e[i])
    return t
  },
  Rr = function (e) {
    var r = e.parent || Z,
      t = e.keyframes ? po(ge(e.keyframes)) : Ve
    if (Pe(e.inherit))
      for (; r; ) t(e, r.vars.defaults), (r = r.parent || r._dp)
    return e
  },
  go = function (e, r) {
    for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t]; );
    return t < 0
  },
  mo = function (e, r, t, i, n) {
    t === void 0 && (t = '_first'), i === void 0 && (i = '_last')
    var s = e[i],
      a
    if (n) for (a = r[n]; s && s[n] > a; ) s = s._prev
    return (
      s ? ((r._next = s._next), (s._next = r)) : ((r._next = e[t]), (e[t] = r)),
      r._next ? (r._next._prev = r) : (e[i] = r),
      (r._prev = s),
      (r.parent = r._dp = e),
      r
    )
  },
  hi = function (e, r, t, i) {
    t === void 0 && (t = '_first'), i === void 0 && (i = '_last')
    var n = r._prev,
      s = r._next
    n ? (n._next = s) : e[t] === r && (e[t] = s),
      s ? (s._prev = n) : e[i] === r && (e[i] = n),
      (r._next = r._prev = r.parent = null)
  },
  pt = function (e, r) {
    e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0)
  },
  It = function (e, r) {
    if (e && (!r || r._end > e._dur || r._start < 0))
      for (var t = e; t; ) (t._dirty = 1), (t = t.parent)
    return e
  },
  yo = function (e) {
    for (var r = e.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent)
    return e
  },
  vo = function o(e) {
    return !e || (e._ts && o(e.parent))
  },
  ys = function (e) {
    return e._repeat ? or(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
  },
  or = function (e, r) {
    var t = Math.floor((e /= r))
    return e && t === e ? t - 1 : t
  },
  di = function (e, r) {
    return (
      (e - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    )
  },
  _i = function (e) {
    return (e._end = me(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || Y) || 0),
    ))
  },
  vs = function (e, r) {
    var t = e._dp
    return (
      t &&
        t.smoothChildTiming &&
        e._ts &&
        ((e._start = me(
          t._time -
            (e._ts > 0
              ? r / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts),
        )),
        _i(e),
        t._dirty || It(t, e)),
      e
    )
  },
  bs = function (e, r) {
    var t
    if (
      ((r._time || (r._initted && !r._dur)) &&
        ((t = di(e.rawTime(), r)),
        (!r._dur || Lr(0, r.totalDuration(), t) - r._tTime > Y) &&
          r.render(t, !0)),
      It(e, r)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (t = e; t._dp; )
          t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp)
      e._zTime = -Y
    }
  },
  nt = function (e, r, t, i) {
    return (
      r.parent && pt(r),
      (r._start = me(
        (dt(t) ? t : t || e !== Z ? Ue(e, t, r) : e._time) + r._delay,
      )),
      (r._end = me(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0),
      )),
      mo(e, r, '_first', '_last', e._sort ? '_start' : 0),
      hn(r) || (e._recent = r),
      i || bs(e, r),
      e
    )
  },
  xs = function (e, r) {
    return (
      (Re.ScrollTrigger || an('scrollTrigger', r)) &&
      Re.ScrollTrigger.create(r, e)
    )
  },
  ws = function (e, r, t, i) {
    if ((Wo(e, r), !e._initted)) return 1
    if (
      !t &&
      e._pt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      fs !== je.frame
    )
      return Tt.push(e), (e._lazy = [r, i]), 1
  },
  bo = function o(e) {
    var r = e.parent
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || o(r))
  },
  hn = function (e) {
    var r = e.data
    return r === 'isFromStart' || r === 'isStart'
  },
  xo = function (e, r, t, i) {
    var n = e.ratio,
      s =
        r < 0 ||
        (!r &&
          ((!e._start && bo(e) && !(!e._initted && hn(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !hn(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      c,
      _
    if (
      (a &&
        e._repeat &&
        ((l = Lr(0, e._tDur, r)),
        (c = or(l, a)),
        e._yoyo && c & 1 && (s = 1 - s),
        c !== or(e._tTime, a) &&
          ((n = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
      s !== n || i || e._zTime === Y || (!r && e._zTime))
    ) {
      if (!e._initted && ws(e, r, i, t)) return
      for (
        _ = e._zTime,
          e._zTime = r || (t ? Y : 0),
          t || (t = r && !_),
          e.ratio = s,
          e._from && (s = 1 - s),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(s, u.d), (u = u._next)
      e._startAt && r < 0 && e._startAt.render(r, !0, !0),
        e._onUpdate && !t && Ye(e, 'onUpdate'),
        l && e._repeat && !t && e.parent && Ye(e, 'onRepeat'),
        (r >= e._tDur || r < 0) &&
          e.ratio === s &&
          (s && pt(e, 1),
          t ||
            (Ye(e, s ? 'onComplete' : 'onReverseComplete', !0),
            e._prom && e._prom()))
    } else e._zTime || (e._zTime = r)
  },
  wo = function (e, r, t) {
    var i
    if (t > r)
      for (i = e._first; i && i._start <= t; ) {
        if (i.data === 'isPause' && i._start > r) return i
        i = i._next
      }
    else
      for (i = e._last; i && i._start >= t; ) {
        if (i.data === 'isPause' && i._start < r) return i
        i = i._prev
      }
  },
  lr = function (e, r, t, i) {
    var n = e._repeat,
      s = me(r) || 0,
      a = e._tTime / e._tDur
    return (
      a && !i && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = n ? (n < 0 ? 1e10 : me(s * (n + 1) + e._rDelay * n)) : s),
      a > 0 && !i ? vs(e, (e._tTime = e._tDur * a)) : e.parent && _i(e),
      t || It(e.parent, e),
      e
    )
  },
  Ts = function (e) {
    return e instanceof Me ? It(e) : lr(e, e._dur)
  },
  To = { _start: 0, endTime: Er, totalDuration: Er },
  Ue = function o(e, r, t) {
    var i = e.labels,
      n = e._recent || To,
      s = e.duration() >= Ne ? n.endTime(!1) : e._dur,
      a,
      l,
      u
    return ue(r) && (isNaN(r) || r in i)
      ? ((l = r.charAt(0)),
        (u = r.substr(-1) === '%'),
        (a = r.indexOf('=')),
        l === '<' || l === '>'
          ? (a >= 0 && (r = r.replace(/=/, '')),
            (l === '<' ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (u ? (a < 0 ? n : t).totalDuration() / 100 : 1))
          : a < 0
          ? (r in i || (i[r] = s), i[r])
          : ((l = parseFloat(r.charAt(a - 1) + r.substr(a + 1))),
            u && t && (l = (l / 100) * (ge(t) ? t[0] : t).totalDuration()),
            a > 1 ? o(e, r.substr(0, a - 1), t) + l : s + l))
      : r == null
      ? s
      : +r
  },
  zr = function (e, r, t) {
    var i = dt(r[1]),
      n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = r[n],
      a,
      l
    if ((i && (s.duration = r[1]), (s.parent = t), e)) {
      for (a = s, l = t; l && !('immediateRender' in a); )
        (a = l.vars.defaults || {}), (l = Pe(l.vars.inherit) && l.parent)
      ;(s.immediateRender = Pe(a.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = r[n - 1])
    }
    return new fe(r[0], s, r[n + 1])
  },
  St = function (e, r) {
    return e || e === 0 ? r(e) : r
  },
  Lr = function (e, r, t) {
    return t < e ? e : t > r ? r : t
  },
  Oe = function (e, r) {
    return !ue(e) || !(r = ho.exec(e)) ? '' : e.substr(r.index + r[0].length)
  },
  So = function (e, r, t) {
    return St(t, function (i) {
      return Lr(e, r, i)
    })
  },
  dn = [].slice,
  Ss = function (e, r) {
    return (
      e &&
      _t(e) &&
      'length' in e &&
      ((!r && !e.length) || (e.length - 1 in e && _t(e[0]))) &&
      !e.nodeType &&
      e !== it
    )
  },
  ko = function (e, r, t) {
    return (
      t === void 0 && (t = []),
      e.forEach(function (i) {
        var n
        return (ue(i) && !r) || Ss(i, 1)
          ? (n = t).push.apply(n, We(i))
          : t.push(i)
      }) || t
    )
  },
  We = function (e, r, t) {
    return ue(e) && !t && (nn || !cr())
      ? dn.call((r || sn).querySelectorAll(e), 0)
      : ge(e)
      ? ko(e, t)
      : Ss(e)
      ? dn.call(e, 0)
      : e
      ? [e]
      : []
  },
  Po = function (e) {
    return (
      (e = We(e)[0] || li('Invalid scope') || {}),
      function (r) {
        var t = e.current || e.nativeElement || e
        return We(
          r,
          t.querySelectorAll
            ? t
            : t === e
            ? li('Invalid scope') || sn.createElement('div')
            : e,
        )
      }
    )
  },
  ks = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random()
    })
  },
  Ps = function (e) {
    if (ce(e)) return e
    var r = _t(e) ? e : { each: e },
      t = Nt(r.ease),
      i = r.from || 0,
      n = parseFloat(r.base) || 0,
      s = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      u = r.axis,
      c = i,
      _ = i
    return (
      ue(i)
        ? (c = _ = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && l && ((c = i[0]), (_ = i[1])),
      function (d, f, p) {
        var h = (p || r).length,
          m = s[h],
          g,
          S,
          T,
          v,
          b,
          x,
          w,
          P,
          k
        if (!m) {
          if (((k = r.grid === 'auto' ? 0 : (r.grid || [1, Ne])[1]), !k)) {
            for (
              w = -Ne;
              w < (w = p[k++].getBoundingClientRect().left) && k < h;

            );
            k--
          }
          for (
            m = s[h] = [],
              g = l ? Math.min(k, h) * c - 0.5 : i % k,
              S = k === Ne ? 0 : l ? (h * _) / k - 0.5 : (i / k) | 0,
              w = 0,
              P = Ne,
              x = 0;
            x < h;
            x++
          )
            (T = (x % k) - g),
              (v = S - ((x / k) | 0)),
              (m[x] = b = u ? Math.abs(u === 'y' ? v : T) : rs(T * T + v * v)),
              b > w && (w = b),
              b < P && (P = b)
          i === 'random' && ks(m),
            (m.max = w - P),
            (m.min = P),
            (m.v = h =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (k > h
                    ? h - 1
                    : u
                    ? u === 'y'
                      ? h / k
                      : k
                    : Math.max(k, h / k)) ||
                0) * (i === 'edges' ? -1 : 1)),
            (m.b = h < 0 ? n - h : n),
            (m.u = Oe(r.amount || r.each) || 0),
            (t = t && h < 0 ? Ls(t) : t)
        }
        return (
          (h = (m[d] - m.min) / m.max || 0),
          me(m.b + (t ? t(h) : h) * m.v) + m.u
        )
      }
    )
  },
  _n = function (e) {
    var r = Math.pow(10, ((e + '').split('.')[1] || '').length)
    return function (t) {
      var i = Math.round(parseFloat(t) / e) * e * r
      return (i - (i % 1)) / r + (dt(t) ? 0 : Oe(t))
    }
  },
  Cs = function (e, r) {
    var t = ge(e),
      i,
      n
    return (
      !t &&
        _t(e) &&
        ((i = t = e.radius || Ne),
        e.values
          ? ((e = We(e.values)), (n = !dt(e[0])) && (i *= i))
          : (e = _n(e.increment))),
      St(
        r,
        t
          ? ce(e)
            ? function (s) {
                return (n = e(s)), Math.abs(n - s) <= i ? n : s
              }
            : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    l = parseFloat(n ? s.y : 0),
                    u = Ne,
                    c = 0,
                    _ = e.length,
                    d,
                    f;
                  _--;

                )
                  n
                    ? ((d = e[_].x - a), (f = e[_].y - l), (d = d * d + f * f))
                    : (d = Math.abs(e[_] - a)),
                    d < u && ((u = d), (c = _))
                return (
                  (c = !i || u <= i ? e[c] : s),
                  n || c === s || dt(s) ? c : c + Oe(s)
                )
              }
          : _n(e),
      )
    )
  },
  Os = function (e, r, t, i) {
    return St(ge(e) ? !r : t === !0 ? !!(t = 0) : !i, function () {
      return ge(e)
        ? e[~~(Math.random() * e.length)]
        : (t = t || 1e-5) &&
            (i = t < 1 ? Math.pow(10, (t + '').length - 2) : 1) &&
            Math.floor(
              Math.round((e - t / 2 + Math.random() * (r - e + t * 0.99)) / t) *
                t *
                i,
            ) / i
    })
  },
  Co = function () {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
      r[t] = arguments[t]
    return function (i) {
      return r.reduce(function (n, s) {
        return s(n)
      }, i)
    }
  },
  Oo = function (e, r) {
    return function (t) {
      return e(parseFloat(t)) + (r || Oe(t))
    }
  },
  Mo = function (e, r, t) {
    return As(e, r, 0, 1, t)
  },
  Ms = function (e, r, t) {
    return St(t, function (i) {
      return e[~~r(i)]
    })
  },
  Ao = function o(e, r, t) {
    var i = r - e
    return ge(e)
      ? Ms(e, o(0, e.length), r)
      : St(t, function (n) {
          return ((i + ((n - e) % i)) % i) + e
        })
  },
  Do = function o(e, r, t) {
    var i = r - e,
      n = i * 2
    return ge(e)
      ? Ms(e, o(0, e.length - 1), r)
      : St(t, function (s) {
          return (s = (n + ((s - e) % n)) % n || 0), e + (s > i ? n - s : s)
        })
  },
  Br = function (e) {
    for (var r = 0, t = '', i, n, s, a; ~(i = e.indexOf('random(', r)); )
      (s = e.indexOf(')', i)),
        (a = e.charAt(i + 7) === '['),
        (n = e.substr(i + 7, s - i - 7).match(a ? os : tn)),
        (t +=
          e.substr(r, i - r) + Os(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
        (r = s + 1)
    return t + e.substr(r, e.length - r)
  },
  As = function (e, r, t, i, n) {
    var s = r - e,
      a = i - t
    return St(n, function (l) {
      return t + (((l - e) / s) * a || 0)
    })
  },
  Fo = function o(e, r, t, i) {
    var n = isNaN(e + r)
      ? 0
      : function (f) {
          return (1 - f) * e + f * r
        }
    if (!n) {
      var s = ue(e),
        a = {},
        l,
        u,
        c,
        _,
        d
      if ((t === !0 && (i = 1) && (t = null), s)) (e = { p: e }), (r = { p: r })
      else if (ge(e) && !ge(r)) {
        for (c = [], _ = e.length, d = _ - 2, u = 1; u < _; u++)
          c.push(o(e[u - 1], e[u]))
        _--,
          (n = function (p) {
            p *= _
            var h = Math.min(d, ~~p)
            return c[h](p - h)
          }),
          (t = r)
      } else i || (e = ar(ge(e) ? [] : {}, e))
      if (!c) {
        for (l in r) yn.call(a, e, l, 'get', r[l])
        n = function (p) {
          return xn(p, a) || (s ? e.p : e)
        }
      }
    }
    return St(t, n)
  },
  Ds = function (e, r, t) {
    var i = e.labels,
      n = Ne,
      s,
      a,
      l
    for (s in i)
      (a = i[s] - r),
        a < 0 == !!t && a && n > (a = Math.abs(a)) && ((l = s), (n = a))
    return l
  },
  Ye = function (e, r, t) {
    var i = e.vars,
      n = i[r],
      s,
      a
    if (!!n)
      return (
        (s = i[r + 'Params']),
        (a = i.callbackScope || e),
        t && Tt.length && ci(),
        s ? n.apply(a, s) : n.call(a)
      )
  },
  Ir = function (e) {
    return (
      pt(e),
      e.scrollTrigger && e.scrollTrigger.kill(!1),
      e.progress() < 1 && Ye(e, 'onInterrupt'),
      e
    )
  },
  ur,
  Eo = function (e) {
    e = (!e.name && e.default) || e
    var r = e.name,
      t = ce(e),
      i =
        r && !t && e.init
          ? function () {
              this._props = []
            }
          : e,
      n = { init: Er, render: xn, add: yn, kill: Zo, modifier: qo, rawVars: 0 },
      s = { targetTest: 0, get: 0, getSetter: bn, aliases: {}, register: 0 }
    if ((cr(), e !== i)) {
      if (ze[r]) return
      Ve(i, Ve(fi(e, n), s)),
        ar(i.prototype, ar(n, fi(e, s))),
        (ze[(i.prop = r)] = i),
        e.targetTest && (ui.push(i), (on[r] = 1)),
        (r =
          (r === 'css' ? 'CSS' : r.charAt(0).toUpperCase() + r.substr(1)) +
          'Plugin')
    }
    cs(r, i), e.register && e.register(st, i, Ae)
  },
  j = 255,
  Nr = {
    aqua: [0, j, j],
    lime: [0, j, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, j],
    navy: [0, 0, 128],
    white: [j, j, j],
    olive: [128, 128, 0],
    yellow: [j, j, 0],
    orange: [j, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [j, 0, 0],
    pink: [j, 192, 203],
    cyan: [0, j, j],
    transparent: [j, j, j, 0],
  },
  pn = function (e, r, t) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? r + (t - r) * e * 6
        : e < 0.5
        ? t
        : e * 3 < 2
        ? r + (t - r) * (2 / 3 - e) * 6
        : r) *
        j +
        0.5) |
        0
    )
  },
  Fs = function (e, r, t) {
    var i = e ? (dt(e) ? [e >> 16, (e >> 8) & j, e & j] : 0) : Nr.black,
      n,
      s,
      a,
      l,
      u,
      c,
      _,
      d,
      f,
      p
    if (!i) {
      if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Nr[e]))
        i = Nr[e]
      else if (e.charAt(0) === '#') {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (s = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              '#' +
              n +
              n +
              s +
              s +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & j, i & j, parseInt(e.substr(7), 16) / 255]
          )
        ;(e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & j, e & j])
      } else if (e.substr(0, 3) === 'hsl') {
        if (((i = p = e.match(tn)), !r))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (n = c * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = pn(l + 1 / 3, n, s)),
            (i[1] = pn(l, n, s)),
            (i[2] = pn(l - 1 / 3, n, s))
        else if (~e.indexOf('='))
          return (i = e.match(ss)), t && i.length < 4 && (i[3] = 1), i
      } else i = e.match(tn) || Nr.transparent
      i = i.map(Number)
    }
    return (
      r &&
        !p &&
        ((n = i[0] / j),
        (s = i[1] / j),
        (a = i[2] / j),
        (_ = Math.max(n, s, a)),
        (d = Math.min(n, s, a)),
        (c = (_ + d) / 2),
        _ === d
          ? (l = u = 0)
          : ((f = _ - d),
            (u = c > 0.5 ? f / (2 - _ - d) : f / (_ + d)),
            (l =
              _ === n
                ? (s - a) / f + (s < a ? 6 : 0)
                : _ === s
                ? (a - n) / f + 2
                : (n - s) / f + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      t && i.length < 4 && (i[3] = 1),
      i
    )
  },
  Es = function (e) {
    var r = [],
      t = [],
      i = -1
    return (
      e.split(kt).forEach(function (n) {
        var s = n.match(sr) || []
        r.push.apply(r, s), t.push((i += s.length + 1))
      }),
      (r.c = t),
      r
    )
  },
  Rs = function (e, r, t) {
    var i = '',
      n = (e + i).match(kt),
      s = r ? 'hsla(' : 'rgba(',
      a = 0,
      l,
      u,
      c,
      _
    if (!n) return e
    if (
      ((n = n.map(function (d) {
        return (
          (d = Fs(d, r, 1)) &&
          s +
            (r ? d[0] + ',' + d[1] + '%,' + d[2] + '%,' + d[3] : d.join(',')) +
            ')'
        )
      })),
      t && ((c = Es(e)), (l = t.c), l.join(i) !== c.c.join(i)))
    )
      for (u = e.replace(kt, '1').split(sr), _ = u.length - 1; a < _; a++)
        i +=
          u[a] +
          (~l.indexOf(a)
            ? n.shift() || s + '0,0,0,0)'
            : (c.length ? c : n.length ? n : t).shift())
    if (!u) for (u = e.split(kt), _ = u.length - 1; a < _; a++) i += u[a] + n[a]
    return i + u[_]
  },
  kt = (function () {
    var o =
        '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      e
    for (e in Nr) o += '|' + e + '\\b'
    return new RegExp(o + ')', 'gi')
  })(),
  Ro = /hsl[a]?\(/,
  zs = function (e) {
    var r = e.join(' '),
      t
    if (((kt.lastIndex = 0), kt.test(r)))
      return (
        (t = Ro.test(r)),
        (e[1] = Rs(e[1], t)),
        (e[0] = Rs(e[0], t, Es(e[1]))),
        !0
      )
  },
  pi,
  je = (function () {
    var o = Date.now,
      e = 500,
      r = 33,
      t = o(),
      i = t,
      n = 1e3 / 240,
      s = n,
      a = [],
      l,
      u,
      c,
      _,
      d,
      f,
      p = function h(m) {
        var g = o() - i,
          S = m === !0,
          T,
          v,
          b,
          x
        if (
          (g > e && (t += g - r),
          (i += g),
          (b = i - t),
          (T = b - s),
          (T > 0 || S) &&
            ((x = ++_.frame),
            (d = b - _.time * 1e3),
            (_.time = b = b / 1e3),
            (s += T + (T >= n ? 4 : n - T)),
            (v = 1)),
          S || (l = u(h)),
          v)
        )
          for (f = 0; f < a.length; f++) a[f](b, d, x, m)
      }
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0)
        },
        deltaRatio: function (m) {
          return d / (1e3 / (m || 60))
        },
        wake: function () {
          ls &&
            (!nn &&
              is() &&
              ((it = nn = window),
              (sn = it.document || {}),
              (Re.gsap = st),
              (it.gsapVersions || (it.gsapVersions = [])).push(st.version),
              us(oi || it.GreenSockGlobals || (!it.gsap && it) || {}),
              (c = it.requestAnimationFrame)),
            l && _.sleep(),
            (u =
              c ||
              function (m) {
                return setTimeout(m, (s - _.time * 1e3 + 1) | 0)
              }),
            (pi = 1),
            p(2))
        },
        sleep: function () {
          ;(c ? it.cancelAnimationFrame : clearTimeout)(l), (pi = 0), (u = Er)
        },
        lagSmoothing: function (m, g) {
          ;(e = m || 1 / Y), (r = Math.min(g, e, 0))
        },
        fps: function (m) {
          ;(n = 1e3 / (m || 240)), (s = _.time * 1e3 + n)
        },
        add: function (m) {
          a.indexOf(m) < 0 && a.push(m), cr()
        },
        remove: function (m, g) {
          ~(g = a.indexOf(m)) && a.splice(g, 1) && f >= g && f--
        },
        _listeners: a,
      }),
      _
    )
  })(),
  cr = function () {
    return !pi && je.wake()
  },
  z = {},
  zo = /^[\d.\-M][\d.\-,\s]/,
  Lo = /["']/g,
  Bo = function (e) {
    for (
      var r = {},
        t = e.substr(1, e.length - 3).split(':'),
        i = t[0],
        n = 1,
        s = t.length,
        a,
        l,
        u;
      n < s;
      n++
    )
      (l = t[n]),
        (a = n !== s - 1 ? l.lastIndexOf(',') : l.length),
        (u = l.substr(0, a)),
        (r[i] = isNaN(u) ? u.replace(Lo, '').trim() : +u),
        (i = l.substr(a + 1).trim())
    return r
  },
  Io = function (e) {
    var r = e.indexOf('(') + 1,
      t = e.indexOf(')'),
      i = e.indexOf('(', r)
    return e.substring(r, ~i && i < t ? e.indexOf(')', t + 1) : t)
  },
  No = function (e) {
    var r = (e + '').split('('),
      t = z[r[0]]
    return t && r.length > 1 && t.config
      ? t.config.apply(
          null,
          ~e.indexOf('{') ? [Bo(r[1])] : Io(e).split(',').map(ps),
        )
      : z._CE && zo.test(e)
      ? z._CE('', e)
      : t
  },
  Ls = function (e) {
    return function (r) {
      return 1 - e(1 - r)
    }
  },
  Bs = function o(e, r) {
    for (var t = e._first, i; t; )
      t instanceof Me
        ? o(t, r)
        : t.vars.yoyoEase &&
          (!t._yoyo || !t._repeat) &&
          t._yoyo !== r &&
          (t.timeline
            ? o(t.timeline, r)
            : ((i = t._ease),
              (t._ease = t._yEase),
              (t._yEase = i),
              (t._yoyo = r))),
        (t = t._next)
  },
  Nt = function (e, r) {
    return (e && (ce(e) ? e : z[e] || No(e))) || r
  },
  Vt = function (e, r, t, i) {
    t === void 0 &&
      (t = function (l) {
        return 1 - r(1 - l)
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2
        })
    var n = { easeIn: r, easeOut: t, easeInOut: i },
      s
    return (
      Ce(e, function (a) {
        ;(z[a] = Re[a] = n), (z[(s = a.toLowerCase())] = t)
        for (var l in n)
          z[
            s + (l === 'easeIn' ? '.in' : l === 'easeOut' ? '.out' : '.inOut')
          ] = z[a + '.' + l] = n[l]
      }),
      n
    )
  },
  Is = function (e) {
    return function (r) {
      return r < 0.5 ? (1 - e(1 - r * 2)) / 2 : 0.5 + e((r - 0.5) * 2) / 2
    }
  },
  gn = function o(e, r, t) {
    var i = r >= 1 ? r : 1,
      n = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      s = (n / $i) * (Math.asin(1 / i) || 0),
      a = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * fo((c - s) * n) + 1
      },
      l =
        e === 'out'
          ? a
          : e === 'in'
          ? function (u) {
              return 1 - a(1 - u)
            }
          : Is(a)
    return (
      (n = $i / n),
      (l.config = function (u, c) {
        return o(e, u, c)
      }),
      l
    )
  },
  mn = function o(e, r) {
    r === void 0 && (r = 1.70158)
    var t = function (s) {
        return s ? --s * s * ((r + 1) * s + r) + 1 : 0
      },
      i =
        e === 'out'
          ? t
          : e === 'in'
          ? function (n) {
              return 1 - t(1 - n)
            }
          : Is(t)
    return (
      (i.config = function (n) {
        return o(e, n)
      }),
      i
    )
  }
Ce('Linear,Quad,Cubic,Quart,Quint,Strong', function (o, e) {
  var r = e < 5 ? e + 1 : e
  Vt(
    o + ',Power' + (r - 1),
    e
      ? function (t) {
          return Math.pow(t, r)
        }
      : function (t) {
          return t
        },
    function (t) {
      return 1 - Math.pow(1 - t, r)
    },
    function (t) {
      return t < 0.5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
    },
  )
})
z.Linear.easeNone = z.none = z.Linear.easeIn
Vt('Elastic', gn('in'), gn('out'), gn())
;(function (o, e) {
  var r = 1 / e,
    t = 2 * r,
    i = 2.5 * r,
    n = function (a) {
      return a < r
        ? o * a * a
        : a < t
        ? o * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < i
        ? o * (a -= 2.25 / e) * a + 0.9375
        : o * Math.pow(a - 2.625 / e, 2) + 0.984375
    }
  Vt(
    'Bounce',
    function (s) {
      return 1 - n(1 - s)
    },
    n,
  )
})(7.5625, 2.75)
Vt('Expo', function (o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0
})
Vt('Circ', function (o) {
  return -(rs(1 - o * o) - 1)
})
Vt('Sine', function (o) {
  return o === 1 ? 1 : -co(o * lo) + 1
})
Vt('Back', mn('in'), mn('out'), mn())
z.SteppedEase = z.steps = Re.SteppedEase = {
  config: function (e, r) {
    e === void 0 && (e = 1)
    var t = 1 / e,
      i = e + (r ? 0 : 1),
      n = r ? 1 : 0,
      s = 1 - Y
    return function (a) {
      return (((i * Lr(0, s, a)) | 0) + n) * t
    }
  },
}
nr.ease = z['quad.out']
Ce(
  'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
  function (o) {
    return (cn += o + ',' + o + 'Params,')
  },
)
var Ns = function (e, r) {
    ;(this.id = uo++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = r),
      (this.get = r ? r.get : ds),
      (this.set = r ? r.getSetter : bn)
  },
  Vr = (function () {
    function o(r) {
      ;(this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        lr(this, +r.duration, 1, 1),
        (this.data = r.data),
        pi || je.wake()
    }
    var e = o.prototype
    return (
      (e.delay = function (t) {
        return t || t === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
            )
          : this.totalDuration() && this._dur
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            lr(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur
      }),
      (e.totalTime = function (t, i) {
        if ((cr(), !arguments.length)) return this._tTime
        var n = this._dp
        if (n && n.smoothChildTiming && this._ts) {
          for (vs(this, t), !n._dp || n.parent || bs(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent)
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            nt(this._dp, this, this._start - this._delay)
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === Y) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), _s(this, t, i)),
          this
        )
      }),
      (e.time = function (t, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ys(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              i,
            )
          : this._time
      }),
      (e.totalProgress = function (t, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio
      }),
      (e.progress = function (t, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) +
                ys(this),
              i,
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio
      }),
      (e.iteration = function (t, i) {
        var n = this.duration() + this._rDelay
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * n, i)
          : this._repeat
          ? or(this._tTime, n) + 1
          : 1
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return this._rts === -Y ? 0 : this._rts
        if (this._rts === t) return this
        var i =
          this.parent && this._ts ? di(this.parent._time, this) : this._tTime
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -Y ? 0 : this._rts),
          yo(this.totalTime(Lr(-this._delay, this._tDur, i), !0)),
          _i(this),
          this
        )
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (cr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Y &&
                      (this._tTime -= Y),
                  ))),
            this)
          : this._ps
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t
          var i = this.parent || this._dp
          return (
            i && (i._sort || !this.parent) && nt(i, this, t - this._delay), this
          )
        }
        return this._start
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (Pe(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        )
      }),
      (e.rawTime = function (t) {
        var i = this.parent || this._dp
        return i
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? di(i.rawTime(t), this)
            : this._tTime
          : this._tTime
      }),
      (e.globalTime = function (t) {
        for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
          (n = i._start + n / (i._ts || 1)), (i = i._dp)
        return n
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Ts(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var i = this._time
          return (this._rDelay = t), Ts(this), i ? this.time(i) : this
        }
        return this._rDelay
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo
      }),
      (e.seek = function (t, i) {
        return this.totalTime(Ue(this, t), Pe(i))
      }),
      (e.restart = function (t, i) {
        return this.play().totalTime(t ? -this._delay : 0, Pe(i))
      }),
      (e.play = function (t, i) {
        return t != null && this.seek(t, i), this.reversed(!1).paused(!1)
      }),
      (e.reverse = function (t, i) {
        return (
          t != null && this.seek(t || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        )
      }),
      (e.pause = function (t, i) {
        return t != null && this.seek(t, i), this.paused(!0)
      }),
      (e.resume = function () {
        return this.paused(!1)
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -Y : 0)),
            this)
          : this._rts < 0
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Y), this
      }),
      (e.isActive = function () {
        var t = this.parent || this._dp,
          i = this._start,
          n
        return !!(
          !t ||
          (this._ts &&
            this._initted &&
            t.isActive() &&
            (n = t.rawTime(!0)) >= i &&
            n < this.endTime(!0) - Y)
        )
      }),
      (e.eventCallback = function (t, i, n) {
        var s = this.vars
        return arguments.length > 1
          ? (i
              ? ((s[t] = i),
                n && (s[t + 'Params'] = n),
                t === 'onUpdate' && (this._onUpdate = i))
              : delete s[t],
            this)
          : s[t]
      }),
      (e.then = function (t) {
        var i = this
        return new Promise(function (n) {
          var s = ce(t) ? t : gs,
            a = function () {
              var u = i.then
              ;(i.then = null),
                ce(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                n(s),
                (i.then = u)
            }
          ;(i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? a()
            : (i._prom = a)
        })
      }),
      (e.kill = function () {
        Ir(this)
      }),
      o
    )
  })()
Ve(Vr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Y,
  _prom: 0,
  _ps: !1,
  _rts: 1,
})
var Me = (function (o) {
  ts(e, o)
  function e(t, i) {
    var n
    return (
      t === void 0 && (t = {}),
      (n = o.call(this, t) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!t.smoothChildTiming),
      (n.autoRemoveChildren = !!t.autoRemoveChildren),
      (n._sort = Pe(t.sortChildren)),
      Z && nt(t.parent || Z, ht(n), i),
      t.reversed && n.reverse(),
      t.paused && n.paused(!0),
      t.scrollTrigger && xs(ht(n), t.scrollTrigger),
      n
    )
  }
  var r = e.prototype
  return (
    (r.to = function (i, n, s) {
      return zr(0, arguments, this), this
    }),
    (r.from = function (i, n, s) {
      return zr(1, arguments, this), this
    }),
    (r.fromTo = function (i, n, s, a) {
      return zr(2, arguments, this), this
    }),
    (r.set = function (i, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Rr(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new fe(i, n, Ue(this, s), 1),
        this
      )
    }),
    (r.call = function (i, n, s) {
      return nt(this, fe.delayedCall(0, i, n), s)
    }),
    (r.staggerTo = function (i, n, s, a, l, u, c) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || a),
        (s.onComplete = u),
        (s.onCompleteParams = c),
        (s.parent = this),
        new fe(i, s, Ue(this, l)),
        this
      )
    }),
    (r.staggerFrom = function (i, n, s, a, l, u, c) {
      return (
        (s.runBackwards = 1),
        (Rr(s).immediateRender = Pe(s.immediateRender)),
        this.staggerTo(i, n, s, a, l, u, c)
      )
    }),
    (r.staggerFromTo = function (i, n, s, a, l, u, c, _) {
      return (
        (a.startAt = s),
        (Rr(a).immediateRender = Pe(a.immediateRender)),
        this.staggerTo(i, n, a, l, u, c, _)
      )
    }),
    (r.render = function (i, n, s) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : me(i),
        _ = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        f,
        p,
        h,
        m,
        g,
        S,
        T,
        v,
        b,
        x,
        w
      if (
        (this !== Z && c > l && i >= 0 && (c = l), c !== this._tTime || s || _)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (i += this._time - a)),
          (d = c),
          (v = this._start),
          (T = this._ts),
          (g = !T),
          _ && (u || (a = this._zTime), (i || !n) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((x = this._yoyo),
            (m = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(m * 100 + i, n, s)
          if (
            ((d = me(c % m)),
            c === l
              ? ((h = this._repeat), (d = u))
              : ((h = ~~(c / m)),
                h && h === c / m && ((d = u), h--),
                d > u && (d = u)),
            (b = or(this._tTime, m)),
            !a && this._tTime && b !== h && (b = h),
            x && h & 1 && ((d = u - d), (w = 1)),
            h !== b && !this._lock)
          ) {
            var P = x && b & 1,
              k = P === (x && h & 1)
            if (
              (h < b && (P = !P),
              (a = P ? 0 : u),
              (this._lock = 1),
              (this.render(a || (w ? 0 : me(h * m)), n, !u)._lock = 0),
              (this._tTime = c),
              !n && this.parent && Ye(this, 'onRepeat'),
              this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                g !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this
            if (
              ((u = this._dur),
              (l = this._tDur),
              k &&
                ((this._lock = 2),
                (a = P ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !w && this.invalidate()),
              (this._lock = 0),
              !this._ts && !g)
            )
              return this
            Bs(this, w)
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((S = wo(this, me(a), me(d))), S && (c -= d - (d = S._start))),
          (this._tTime = c),
          (this._time = d),
          (this._act = !T),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && d && !n && (Ye(this, 'onStart'), this._tTime !== c))
        )
          return this
        if (d >= a && i >= 0)
          for (f = this._first; f; ) {
            if (
              ((p = f._next), (f._act || d >= f._start) && f._ts && S !== f)
            ) {
              if (f.parent !== this) return this.render(i, n, s)
              if (
                (f.render(
                  f._ts > 0
                    ? (d - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (d - f._start) * f._ts,
                  n,
                  s,
                ),
                d !== this._time || (!this._ts && !g))
              ) {
                ;(S = 0), p && (c += this._zTime = -Y)
                break
              }
            }
            f = p
          }
        else {
          f = this._last
          for (var O = i < 0 ? i : d; f; ) {
            if (((p = f._prev), (f._act || O <= f._end) && f._ts && S !== f)) {
              if (f.parent !== this) return this.render(i, n, s)
              if (
                (f.render(
                  f._ts > 0
                    ? (O - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (O - f._start) * f._ts,
                  n,
                  s,
                ),
                d !== this._time || (!this._ts && !g))
              ) {
                ;(S = 0), p && (c += this._zTime = O ? -Y : Y)
                break
              }
            }
            f = p
          }
        }
        if (
          S &&
          !n &&
          (this.pause(),
          (S.render(d >= a ? 0 : -Y)._zTime = d >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = v), _i(this), this.render(i, n, s)
        this._onUpdate && !n && Ye(this, 'onUpdate', !0),
          ((c === l && l >= this.totalDuration()) || (!c && a)) &&
            (v === this._start || Math.abs(T) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                pt(this, 1),
              !n &&
                !(i < 0 && !a) &&
                (c || a || !l) &&
                (Ye(
                  this,
                  c === l && i >= 0 ? 'onComplete' : 'onReverseComplete',
                  !0,
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom())))
      }
      return this
    }),
    (r.add = function (i, n) {
      var s = this
      if ((dt(n) || (n = Ue(this, n, i)), !(i instanceof Vr))) {
        if (ge(i))
          return (
            i.forEach(function (a) {
              return s.add(a, n)
            }),
            this
          )
        if (ue(i)) return this.addLabel(i, n)
        if (ce(i)) i = fe.delayedCall(0, i)
        else return this
      }
      return this !== i ? nt(this, i, n) : this
    }),
    (r.getChildren = function (i, n, s, a) {
      i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -Ne)
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof fe
            ? n && l.push(u)
            : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, s)))),
          (u = u._next)
      return l
    }),
    (r.getById = function (i) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === i) return n[s]
    }),
    (r.remove = function (i) {
      return ue(i)
        ? this.removeLabel(i)
        : ce(i)
        ? this.killTweensOf(i)
        : (hi(this, i),
          i === this._recent && (this._recent = this._last),
          It(this))
    }),
    (r.totalTime = function (i, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = me(
              je.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts),
            )),
          o.prototype.totalTime.call(this, i, n),
          (this._forcing = 0),
          this)
        : this._tTime
    }),
    (r.addLabel = function (i, n) {
      return (this.labels[i] = Ue(this, n)), this
    }),
    (r.removeLabel = function (i) {
      return delete this.labels[i], this
    }),
    (r.addPause = function (i, n, s) {
      var a = fe.delayedCall(0, n || Er, s)
      return (
        (a.data = 'isPause'), (this._hasPause = 1), nt(this, a, Ue(this, i))
      )
    }),
    (r.removePause = function (i) {
      var n = this._first
      for (i = Ue(this, i); n; )
        n._start === i && n.data === 'isPause' && pt(n), (n = n._next)
    }),
    (r.killTweensOf = function (i, n, s) {
      for (var a = this.getTweensOf(i, s), l = a.length; l--; )
        Pt !== a[l] && a[l].kill(i, n)
      return this
    }),
    (r.getTweensOf = function (i, n) {
      for (var s = [], a = We(i), l = this._first, u = dt(n), c; l; )
        l instanceof fe
          ? _o(l._targets, a) &&
            (u
              ? (!Pt || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            s.push(l)
          : (c = l.getTweensOf(a, n)).length && s.push.apply(s, c),
          (l = l._next)
      return s
    }),
    (r.tweenTo = function (i, n) {
      n = n || {}
      var s = this,
        a = Ue(s, i),
        l = n,
        u = l.startAt,
        c = l.onStart,
        _ = l.onStartParams,
        d = l.immediateRender,
        f,
        p = fe.to(
          s,
          Ve(
            {
              ease: n.ease || 'none',
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: 'auto',
              duration:
                n.duration ||
                Math.abs(
                  (a - (u && 'time' in u ? u.time : s._time)) / s.timeScale(),
                ) ||
                Y,
              onStart: function () {
                if ((s.pause(), !f)) {
                  var m =
                    n.duration ||
                    Math.abs(
                      (a - (u && 'time' in u ? u.time : s._time)) /
                        s.timeScale(),
                    )
                  p._dur !== m && lr(p, m, 0, 1).render(p._time, !0, !0),
                    (f = 1)
                }
                c && c.apply(p, _ || [])
              },
            },
            n,
          ),
        )
      return d ? p.render(0) : p
    }),
    (r.tweenFromTo = function (i, n, s) {
      return this.tweenTo(n, Ve({ startAt: { time: Ue(this, i) } }, s))
    }),
    (r.recent = function () {
      return this._recent
    }),
    (r.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Ds(this, Ue(this, i))
    }),
    (r.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Ds(this, Ue(this, i), 1)
    }),
    (r.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + Y)
    }),
    (r.shiftChildren = function (i, n, s) {
      s === void 0 && (s = 0)
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= s && ((a._start += i), (a._end += i)), (a = a._next)
      if (n) for (u in l) l[u] >= s && (l[u] += i)
      return It(this)
    }),
    (r.invalidate = function () {
      var i = this._first
      for (this._lock = 0; i; ) i.invalidate(), (i = i._next)
      return o.prototype.invalidate.call(this)
    }),
    (r.clear = function (i) {
      i === void 0 && (i = !0)
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s)
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        It(this)
      )
    }),
    (r.totalDuration = function (i) {
      var n = 0,
        s = this,
        a = s._last,
        l = Ne,
        u,
        c,
        _
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i),
        )
      if (s._dirty) {
        for (_ = s.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (nt(s, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((n -= c),
              ((!_ && !s._dp) || (_ && _.smoothChildTiming)) &&
                ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
              s.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = u)
        lr(s, s === Z && s._time > n ? s._time : n, 1, 1), (s._dirty = 0)
      }
      return s._tDur
    }),
    (e.updateRoot = function (i) {
      if ((Z._ts && (_s(Z, di(i, Z)), (fs = je.frame)), je.frame >= hs)) {
        hs += Ee.autoSleep || 120
        var n = Z._first
        if ((!n || !n._ts) && Ee.autoSleep && je._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next
          n || je.sleep()
        }
      }
    }),
    e
  )
})(Vr)
Ve(Me.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
var Vo = function (e, r, t, i, n, s, a) {
    var l = new Ae(this._pt, e, r, 0, 1, Hs, null, n),
      u = 0,
      c = 0,
      _,
      d,
      f,
      p,
      h,
      m,
      g,
      S
    for (
      l.b = t,
        l.e = i,
        t += '',
        i += '',
        (g = ~i.indexOf('random(')) && (i = Br(i)),
        s && ((S = [t, i]), s(S, e, r), (t = S[0]), (i = S[1])),
        d = t.match(rn) || [];
      (_ = rn.exec(i));

    )
      (p = _[0]),
        (h = i.substring(u, _.index)),
        f ? (f = (f + 1) % 5) : h.substr(-5) === 'rgba(' && (f = 1),
        p !== d[c++] &&
          ((m = parseFloat(d[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: h || c === 1 ? h : ',',
            s: m,
            c:
              p.charAt(1) === '='
                ? parseFloat(p.substr(2)) * (p.charAt(0) === '-' ? -1 : 1)
                : parseFloat(p) - m,
            m: f && f < 4 ? Math.round : 0,
          }),
          (u = rn.lastIndex))
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ''),
      (l.fp = a),
      (as.test(i) || g) && (l.e = 0),
      (this._pt = l),
      l
    )
  },
  yn = function (e, r, t, i, n, s, a, l, u) {
    ce(i) && (i = i(n || 0, e, s))
    var c = e[r],
      _ =
        t !== 'get'
          ? t
          : ce(c)
          ? u
            ? e[
                r.indexOf('set') || !ce(e['get' + r.substr(3)])
                  ? r
                  : 'get' + r.substr(3)
              ](u)
            : e[r]()
          : c,
      d = ce(c) ? (u ? Ho : Ys) : vn,
      f
    if (
      (ue(i) &&
        (~i.indexOf('random(') && (i = Br(i)),
        i.charAt(1) === '=' &&
          ((f =
            parseFloat(_) +
            parseFloat(i.substr(2)) * (i.charAt(0) === '-' ? -1 : 1) +
            (Oe(_) || 0)),
          (f || f === 0) && (i = f))),
      _ !== i)
    )
      return !isNaN(_ * i) && i !== ''
        ? ((f = new Ae(
            this._pt,
            e,
            r,
            +_ || 0,
            i - (_ || 0),
            typeof c == 'boolean' ? Go : js,
            0,
            d,
          )),
          u && (f.fp = u),
          a && f.modifier(a, this, e),
          (this._pt = f))
        : (!c && !(r in e) && an(r, i),
          Vo.call(this, e, r, _, i, d, l || Ee.stringFilter, u))
  },
  Uo = function (e, r, t, i, n) {
    if (
      (ce(e) && (e = Ur(e, n, r, t, i)),
      !_t(e) || (e.style && e.nodeType) || ge(e) || ns(e))
    )
      return ue(e) ? Ur(e, n, r, t, i) : e
    var s = {},
      a
    for (a in e) s[a] = Ur(e[a], n, r, t, i)
    return s
  },
  Vs = function (e, r, t, i, n, s) {
    var a, l, u, c
    if (
      ze[e] &&
      (a = new ze[e]()).init(
        n,
        a.rawVars ? r[e] : Uo(r[e], i, n, s, t),
        t,
        i,
        s,
      ) !== !1 &&
      ((t._pt = l = new Ae(t._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
      t !== ur)
    )
      for (u = t._ptLookup[t._targets.indexOf(n)], c = a._props.length; c--; )
        u[a._props[c]] = l
    return a
  },
  Pt,
  Wo = function o(e, r) {
    var t = e.vars,
      i = t.ease,
      n = t.startAt,
      s = t.immediateRender,
      a = t.lazy,
      l = t.onUpdate,
      u = t.onUpdateParams,
      c = t.callbackScope,
      _ = t.runBackwards,
      d = t.yoyoEase,
      f = t.keyframes,
      p = t.autoRevert,
      h = e._dur,
      m = e._startAt,
      g = e._targets,
      S = e.parent,
      T = S && S.data === 'nested' ? S.parent._targets : g,
      v = e._overwrite === 'auto' && !Ji,
      b = e.timeline,
      x,
      w,
      P,
      k,
      O,
      A,
      M,
      V,
      D,
      N,
      L,
      te,
      De
    if (
      (b && (!f || !i) && (i = 'none'),
      (e._ease = Nt(i, nr.ease)),
      (e._yEase = d ? Ls(Nt(d === !0 ? i : d, nr.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !b && !!t.runBackwards),
      !b || (f && !t.stagger))
    ) {
      if (
        ((V = g[0] ? Bt(g[0]).harness : 0),
        (te = V && t[V.prop]),
        (x = fi(t, on)),
        m && pt(m.render(-1, !0)),
        n)
      )
        if (
          (pt(
            (e._startAt = fe.set(
              g,
              Ve(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: S,
                  immediateRender: !0,
                  lazy: Pe(a),
                  startAt: null,
                  delay: 0,
                  onUpdate: l,
                  onUpdateParams: u,
                  callbackScope: c,
                  stagger: 0,
                },
                n,
              ),
            )),
          ),
          r < 0 && !s && !p && e._startAt.render(-1, !0),
          s)
        ) {
          if ((r > 0 && !p && (e._startAt = 0), h && r <= 0)) {
            r && (e._zTime = r)
            return
          }
        } else p === !1 && (e._startAt = 0)
      else if (_ && h) {
        if (m) !p && (e._startAt = 0)
        else if (
          (r && (s = !1),
          (P = Ve(
            {
              overwrite: !1,
              data: 'isFromStart',
              lazy: s && Pe(a),
              immediateRender: s,
              stagger: 0,
              parent: S,
            },
            x,
          )),
          te && (P[V.prop] = te),
          pt((e._startAt = fe.set(g, P))),
          r < 0 && e._startAt.render(-1, !0),
          (e._zTime = r),
          !s)
        )
          o(e._startAt, Y)
        else if (!r) return
      }
      for (e._pt = 0, a = (h && Pe(a)) || (a && !h), w = 0; w < g.length; w++) {
        if (
          ((O = g[w]),
          (M = O._gsap || fn(g)[w]._gsap),
          (e._ptLookup[w] = N = {}),
          ln[M.id] && Tt.length && ci(),
          (L = T === g ? w : T.indexOf(O)),
          V &&
            (D = new V()).init(O, te || x, e, L, T) !== !1 &&
            ((e._pt = k = new Ae(
              e._pt,
              O,
              D.name,
              0,
              1,
              D.render,
              D,
              0,
              D.priority,
            )),
            D._props.forEach(function (tt) {
              N[tt] = k
            }),
            D.priority && (A = 1)),
          !V || te)
        )
          for (P in x)
            ze[P] && (D = Vs(P, x, e, L, O, T))
              ? D.priority && (A = 1)
              : (N[P] = k = yn.call(
                  e,
                  O,
                  P,
                  'get',
                  x[P],
                  L,
                  T,
                  0,
                  t.stringFilter,
                ))
        e._op && e._op[w] && e.kill(O, e._op[w]),
          v &&
            e._pt &&
            ((Pt = e),
            Z.killTweensOf(O, N, e.globalTime(r)),
            (De = !e.parent),
            (Pt = 0)),
          e._pt && a && (ln[M.id] = 1)
      }
      A && Xs(e), e._onInit && e._onInit(e)
    }
    ;(e._onUpdate = l),
      (e._initted = (!e._op || e._pt) && !De),
      f && r <= 0 && b.render(Ne, !0, !0)
  },
  Yo = function (e, r) {
    var t = e[0] ? Bt(e[0]).harness : 0,
      i = t && t.aliases,
      n,
      s,
      a,
      l
    if (!i) return r
    n = ar({}, r)
    for (s in i)
      if (s in n) for (l = i[s].split(','), a = l.length; a--; ) n[l[a]] = n[s]
    return n
  },
  jo = function (e, r, t, i) {
    var n = r.ease || i || 'power1.inOut',
      s,
      a
    if (ge(r))
      (a = t[e] || (t[e] = [])),
        r.forEach(function (l, u) {
          return a.push({ t: (u / (r.length - 1)) * 100, v: l, e: n })
        })
    else
      for (s in r)
        (a = t[s] || (t[s] = [])),
          s === 'ease' || a.push({ t: parseFloat(e), v: r[s], e: n })
  },
  Ur = function (e, r, t, i, n) {
    return ce(e)
      ? e.call(r, t, i, n)
      : ue(e) && ~e.indexOf('random(')
      ? Br(e)
      : e
  },
  Us = cn + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
  Ws = {}
Ce(Us + ',id,stagger,delay,duration,paused,scrollTrigger', function (o) {
  return (Ws[o] = 1)
})
var fe = (function (o) {
  ts(e, o)
  function e(t, i, n, s) {
    var a
    typeof i == 'number' && ((n.duration = i), (i = n), (n = null)),
      (a = o.call(this, s ? i : Rr(i)) || this)
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      _ = l.immediateRender,
      d = l.stagger,
      f = l.overwrite,
      p = l.keyframes,
      h = l.defaults,
      m = l.scrollTrigger,
      g = l.yoyoEase,
      S = i.parent || Z,
      T = (ge(t) || ns(t) ? dt(t[0]) : 'length' in i) ? [t] : We(t),
      v,
      b,
      x,
      w,
      P,
      k,
      O,
      A
    if (
      ((a._targets = T.length
        ? fn(T)
        : li(
            'GSAP target ' + t + ' not found. https://greensock.com',
            !Ee.nullTargetWarn,
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      p || d || ai(u) || ai(c))
    ) {
      if (
        ((i = a.vars),
        (v = a.timeline = new Me({ data: 'nested', defaults: h || {} })),
        v.kill(),
        (v.parent = v._dp = ht(a)),
        (v._start = 0),
        d || ai(u) || ai(c))
      ) {
        if (((w = T.length), (O = d && Ps(d)), _t(d)))
          for (P in d) ~Us.indexOf(P) && (A || (A = {}), (A[P] = d[P]))
        for (b = 0; b < w; b++)
          (x = fi(i, Ws)),
            (x.stagger = 0),
            g && (x.yoyoEase = g),
            A && ar(x, A),
            (k = T[b]),
            (x.duration = +Ur(u, ht(a), b, k, T)),
            (x.delay = (+Ur(c, ht(a), b, k, T) || 0) - a._delay),
            !d &&
              w === 1 &&
              x.delay &&
              ((a._delay = c = x.delay), (a._start += c), (x.delay = 0)),
            v.to(k, x, O ? O(b, k, T) : 0),
            (v._ease = z.none)
        v.duration() ? (u = c = 0) : (a.timeline = 0)
      } else if (p) {
        Rr(Ve(v.vars.defaults, { ease: 'none' })),
          (v._ease = Nt(p.ease || i.ease || 'none'))
        var M = 0,
          V,
          D,
          N
        if (ge(p))
          p.forEach(function (L) {
            return v.to(T, L, '>')
          })
        else {
          x = {}
          for (P in p)
            P === 'ease' || P === 'easeEach' || jo(P, p[P], x, p.easeEach)
          for (P in x)
            for (
              V = x[P].sort(function (L, te) {
                return L.t - te.t
              }),
                M = 0,
                b = 0;
              b < V.length;
              b++
            )
              (D = V[b]),
                (N = {
                  ease: D.e,
                  duration: ((D.t - (b ? V[b - 1].t : 0)) / 100) * u,
                }),
                (N[P] = D.v),
                v.to(T, N, M),
                (M += N.duration)
          v.duration() < u && v.to({}, { duration: u - v.duration() })
        }
      }
      u || a.duration((u = v.duration()))
    } else a.timeline = 0
    return (
      f === !0 && !Ji && ((Pt = ht(a)), Z.killTweensOf(T), (Pt = 0)),
      nt(S, ht(a), n),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (_ ||
        (!u &&
          !p &&
          a._start === me(S._time) &&
          Pe(_) &&
          vo(ht(a)) &&
          S.data !== 'nested')) &&
        ((a._tTime = -Y), a.render(Math.max(0, -c))),
      m && xs(ht(a), m),
      a
    )
  }
  var r = e.prototype
  return (
    (r.render = function (i, n, s) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = i > l - Y && i >= 0 ? l : i < Y ? 0 : i,
        _,
        d,
        f,
        p,
        h,
        m,
        g,
        S,
        T
      if (!u) xo(this, i, n, s)
      else if (
        c !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 != i < 0)
      ) {
        if (((_ = c), (S = this.timeline), this._repeat)) {
          if (((p = u + this._rDelay), this._repeat < -1 && i < 0))
            return this.totalTime(p * 100 + i, n, s)
          if (
            ((_ = me(c % p)),
            c === l
              ? ((f = this._repeat), (_ = u))
              : ((f = ~~(c / p)),
                f && f === c / p && ((_ = u), f--),
                _ > u && (_ = u)),
            (m = this._yoyo && f & 1),
            m && ((T = this._yEase), (_ = u - _)),
            (h = or(this._tTime, p)),
            _ === a && !s && this._initted)
          )
            return this
          f !== h &&
            (S && this._yEase && Bs(S, m),
            this.vars.repeatRefresh &&
              !m &&
              !this._lock &&
              ((this._lock = s = 1),
              (this.render(me(p * f), !0).invalidate()._lock = 0)))
        }
        if (!this._initted) {
          if (ws(this, i < 0 ? i : _, s, n)) return (this._tTime = 0), this
          if (u !== this._dur) return this.render(i, n, s)
        }
        if (
          ((this._tTime = c),
          (this._time = _),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = g = (T || this._ease)(_ / u)),
          this._from && (this.ratio = g = 1 - g),
          _ && !a && !n && (Ye(this, 'onStart'), this._tTime !== c))
        )
          return this
        for (d = this._pt; d; ) d.r(g, d.d), (d = d._next)
        ;(S &&
          S.render(
            i < 0 ? i : !_ && m ? -Y : S._dur * S._ease(_ / this._dur),
            n,
            s,
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !n &&
            (i < 0 && this._startAt && this._startAt.render(i, !0, s),
            Ye(this, 'onUpdate')),
          this._repeat &&
            f !== h &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            Ye(this, 'onRepeat'),
          (c === this._tDur || !c) &&
            this._tTime === c &&
            (i < 0 &&
              this._startAt &&
              !this._onUpdate &&
              this._startAt.render(i, !0, !0),
            (i || !u) &&
              ((c === this._tDur && this._ts > 0) || (!c && this._ts < 0)) &&
              pt(this, 1),
            !n &&
              !(i < 0 && !a) &&
              (c || a) &&
              (Ye(this, c === l ? 'onComplete' : 'onReverseComplete', !0),
              this._prom && !(c < l && this.timeScale() > 0) && this._prom()))
      }
      return this
    }),
    (r.targets = function () {
      return this._targets
    }),
    (r.invalidate = function () {
      return (
        (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(),
        o.prototype.invalidate.call(this)
      )
    }),
    (r.kill = function (i, n) {
      if ((n === void 0 && (n = 'all'), !i && (!n || n === 'all')))
        return (this._lazy = this._pt = 0), this.parent ? Ir(this) : this
      if (this.timeline) {
        var s = this.timeline.totalDuration()
        return (
          this.timeline.killTweensOf(i, n, Pt && Pt.vars.overwrite !== !0)
            ._first || Ir(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            lr(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        )
      }
      var a = this._targets,
        l = i ? We(i) : a,
        u = this._ptLookup,
        c = this._pt,
        _,
        d,
        f,
        p,
        h,
        m,
        g
      if ((!n || n === 'all') && go(a, l))
        return n === 'all' && (this._pt = 0), Ir(this)
      for (
        _ = this._op = this._op || [],
          n !== 'all' &&
            (ue(n) &&
              ((h = {}),
              Ce(n, function (S) {
                return (h[S] = 1)
              }),
              (n = h)),
            (n = Yo(a, n))),
          g = a.length;
        g--;

      )
        if (~l.indexOf(a[g])) {
          ;(d = u[g]),
            n === 'all'
              ? ((_[g] = n), (p = d), (f = {}))
              : ((f = _[g] = _[g] || {}), (p = n))
          for (h in p)
            (m = d && d[h]),
              m &&
                ((!('kill' in m.d) || m.d.kill(h) === !0) && hi(this, m, '_pt'),
                delete d[h]),
              f !== 'all' && (f[h] = 1)
        }
      return this._initted && !this._pt && c && Ir(this), this
    }),
    (e.to = function (i, n) {
      return new e(i, n, arguments[2])
    }),
    (e.from = function (i, n) {
      return zr(1, arguments)
    }),
    (e.delayedCall = function (i, n, s, a) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: a,
      })
    }),
    (e.fromTo = function (i, n, s) {
      return zr(2, arguments)
    }),
    (e.set = function (i, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(i, n)
    }),
    (e.killTweensOf = function (i, n, s) {
      return Z.killTweensOf(i, n, s)
    }),
    e
  )
})(Vr)
Ve(fe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
Ce('staggerTo,staggerFrom,staggerFromTo', function (o) {
  fe[o] = function () {
    var e = new Me(),
      r = dn.call(arguments, 0)
    return r.splice(o === 'staggerFromTo' ? 5 : 4, 0, 0), e[o].apply(e, r)
  }
})
var vn = function (e, r, t) {
    return (e[r] = t)
  },
  Ys = function (e, r, t) {
    return e[r](t)
  },
  Ho = function (e, r, t, i) {
    return e[r](i.fp, t)
  },
  Xo = function (e, r, t) {
    return e.setAttribute(r, t)
  },
  bn = function (e, r) {
    return ce(e[r]) ? Ys : en(e[r]) && e.setAttribute ? Xo : vn
  },
  js = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
  },
  Go = function (e, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * e), r)
  },
  Hs = function (e, r) {
    var t = r._pt,
      i = ''
    if (!e && r.b) i = r.b
    else if (e === 1 && r.e) i = r.e
    else {
      for (; t; )
        (i =
          t.p +
          (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) +
          i),
          (t = t._next)
      i += r.c
    }
    r.set(r.t, r.p, i, r)
  },
  xn = function (e, r) {
    for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next)
  },
  qo = function (e, r, t, i) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === i && n.modifier(e, r, t), (n = s)
  },
  Zo = function (e) {
    for (var r = this._pt, t, i; r; )
      (i = r._next),
        (r.p === e && !r.op) || r.op === e
          ? hi(this, r, '_pt')
          : r.dep || (t = 1),
        (r = i)
    return !t
  },
  Qo = function (e, r, t, i) {
    i.mSet(e, r, i.m.call(i.tween, t, i.mt), i)
  },
  Xs = function (e) {
    for (var r = e._pt, t, i, n, s; r; ) {
      for (t = r._next, i = n; i && i.pr > r.pr; ) i = i._next
      ;(r._prev = i ? i._prev : s) ? (r._prev._next = r) : (n = r),
        (r._next = i) ? (i._prev = r) : (s = r),
        (r = t)
    }
    e._pt = n
  },
  Ae = (function () {
    function o(r, t, i, n, s, a, l, u, c) {
      ;(this.t = t),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = a || js),
        (this.d = l || this),
        (this.set = u || vn),
        (this.pr = c || 0),
        (this._next = r),
        r && (r._prev = this)
    }
    var e = o.prototype
    return (
      (e.modifier = function (t, i, n) {
        ;(this.mSet = this.mSet || this.set),
          (this.set = Qo),
          (this.m = t),
          (this.mt = n),
          (this.tween = i)
      }),
      o
    )
  })()
Ce(
  cn +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (o) {
    return (on[o] = 1)
  },
)
Re.TweenMax = Re.TweenLite = fe
Re.TimelineLite = Re.TimelineMax = Me
Z = new Me({
  sortChildren: !1,
  defaults: nr,
  autoRemoveChildren: !0,
  id: 'root',
  smoothChildTiming: !0,
})
Ee.stringFilter = zs
var gi = {
  registerPlugin: function () {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
      r[t] = arguments[t]
    r.forEach(function (i) {
      return Eo(i)
    })
  },
  timeline: function (e) {
    return new Me(e)
  },
  getTweensOf: function (e, r) {
    return Z.getTweensOf(e, r)
  },
  getProperty: function (e, r, t, i) {
    ue(e) && (e = We(e)[0])
    var n = Bt(e || {}).get,
      s = t ? gs : ps
    return (
      t === 'native' && (t = ''),
      e &&
        (r
          ? s(((ze[r] && ze[r].get) || n)(e, r, t, i))
          : function (a, l, u) {
              return s(((ze[a] && ze[a].get) || n)(e, a, l, u))
            })
    )
  },
  quickSetter: function (e, r, t) {
    if (((e = We(e)), e.length > 1)) {
      var i = e.map(function (c) {
          return st.quickSetter(c, r, t)
        }),
        n = i.length
      return function (c) {
        for (var _ = n; _--; ) i[_](c)
      }
    }
    e = e[0] || {}
    var s = ze[r],
      a = Bt(e),
      l = (a.harness && (a.harness.aliases || {})[r]) || r,
      u = s
        ? function (c) {
            var _ = new s()
            ;(ur._pt = 0),
              _.init(e, t ? c + t : c, ur, 0, [e]),
              _.render(1, _),
              ur._pt && xn(1, ur)
          }
        : a.set(e, l)
    return s
      ? u
      : function (c) {
          return u(e, l, t ? c + t : c, a, 1)
        }
  },
  isTweening: function (e) {
    return Z.getTweensOf(e, !0).length > 0
  },
  defaults: function (e) {
    return e && e.ease && (e.ease = Nt(e.ease, nr.ease)), ms(nr, e || {})
  },
  config: function (e) {
    return ms(Ee, e || {})
  },
  registerEffect: function (e) {
    var r = e.name,
      t = e.effect,
      i = e.plugins,
      n = e.defaults,
      s = e.extendTimeline
    ;(i || '').split(',').forEach(function (a) {
      return (
        a && !ze[a] && !Re[a] && li(r + ' effect requires ' + a + ' plugin.')
      )
    }),
      (un[r] = function (a, l, u) {
        return t(We(a), Ve(l || {}, n), u)
      }),
      s &&
        (Me.prototype[r] = function (a, l, u) {
          return this.add(un[r](a, _t(l) ? l : (u = l) && {}, this), u)
        })
  },
  registerEase: function (e, r) {
    z[e] = Nt(r)
  },
  parseEase: function (e, r) {
    return arguments.length ? Nt(e, r) : z
  },
  getById: function (e) {
    return Z.getById(e)
  },
  exportRoot: function (e, r) {
    e === void 0 && (e = {})
    var t = new Me(e),
      i,
      n
    for (
      t.smoothChildTiming = Pe(e.smoothChildTiming),
        Z.remove(t),
        t._dp = 0,
        t._time = t._tTime = Z._time,
        i = Z._first;
      i;

    )
      (n = i._next),
        (r ||
          !(
            !i._dur &&
            i instanceof fe &&
            i.vars.onComplete === i._targets[0]
          )) &&
          nt(t, i, i._start - i._delay),
        (i = n)
    return nt(Z, t, 0), t
  },
  utils: {
    wrap: Ao,
    wrapYoyo: Do,
    distribute: Ps,
    random: Os,
    snap: Cs,
    normalize: Mo,
    getUnit: Oe,
    clamp: So,
    splitColor: Fs,
    toArray: We,
    selector: Po,
    mapRange: As,
    pipe: Co,
    unitize: Oo,
    interpolate: Fo,
    shuffle: ks,
  },
  install: us,
  effects: un,
  ticker: je,
  updateRoot: Me.updateRoot,
  plugins: ze,
  globalTimeline: Z,
  core: {
    PropTween: Ae,
    globals: cs,
    Tween: fe,
    Timeline: Me,
    Animation: Vr,
    getCache: Bt,
    _removeLinkedListItem: hi,
    suppressOverwrites: function (e) {
      return (Ji = e)
    },
  },
}
Ce('to,from,fromTo,delayedCall,set,killTweensOf', function (o) {
  return (gi[o] = fe[o])
})
je.add(Me.updateRoot)
ur = gi.to({}, { duration: 0 })
var Ko = function (e, r) {
    for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
      t = t._next
    return t
  },
  Jo = function (e, r) {
    var t = e._targets,
      i,
      n,
      s
    for (i in r)
      for (n = t.length; n--; )
        (s = e._ptLookup[n][i]),
          s &&
            (s = s.d) &&
            (s._pt && (s = Ko(s, i)),
            s && s.modifier && s.modifier(r[i], e, t[n], i))
  },
  wn = function (e, r) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, n, s) {
        s._onInit = function (a) {
          var l, u
          if (
            (ue(n) &&
              ((l = {}),
              Ce(n, function (c) {
                return (l[c] = 1)
              }),
              (n = l)),
            r)
          ) {
            l = {}
            for (u in n) l[u] = r(n[u])
            n = l
          }
          Jo(a, n)
        }
      },
    }
  },
  st =
    gi.registerPlugin(
      {
        name: 'attr',
        init: function (e, r, t, i, n) {
          var s, a
          for (s in r)
            (a = this.add(
              e,
              'setAttribute',
              (e.getAttribute(s) || 0) + '',
              r[s],
              i,
              n,
              0,
              0,
              s,
            )),
              a && (a.op = s),
              this._props.push(s)
        },
      },
      {
        name: 'endArray',
        init: function (e, r) {
          for (var t = r.length; t--; ) this.add(e, t, e[t] || 0, r[t])
        },
      },
      wn('roundProps', _n),
      wn('modifiers'),
      wn('snap', Cs),
    ) || gi
fe.version = Me.version = st.version = '3.9.1'
ls = 1
is() && cr()
z.Power0
z.Power1
z.Power2
z.Power3
z.Power4
z.Linear
z.Quad
z.Cubic
z.Quart
z.Quint
z.Strong
z.Elastic
z.Back
z.SteppedEase
z.Bounce
z.Sine
z.Expo
z.Circ
/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Gs,
  Ct,
  fr,
  Tn,
  Ut,
  qs,
  $o = function () {
    return typeof window != 'undefined'
  },
  Ot = {},
  Wt = 180 / Math.PI,
  hr = Math.PI / 180,
  dr = Math.atan2,
  Zs = 1e8,
  Qs = /([A-Z])/g,
  el = /(?:left|right|width|margin|padding|x)/i,
  tl = /[\s,\(]\S/,
  Mt = {
    autoAlpha: 'opacity,visibility',
    scale: 'scaleX,scaleY',
    alpha: 'opacity',
  },
  Ks = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
  },
  rl = function (e, r) {
    return r.set(
      r.t,
      r.p,
      e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u,
      r,
    )
  },
  il = function (e, r) {
    return r.set(
      r.t,
      r.p,
      e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b,
      r,
    )
  },
  nl = function (e, r) {
    var t = r.s + r.c * e
    r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r)
  },
  Js = function (e, r) {
    return r.set(r.t, r.p, e ? r.e : r.b, r)
  },
  $s = function (e, r) {
    return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
  },
  sl = function (e, r, t) {
    return (e.style[r] = t)
  },
  al = function (e, r, t) {
    return e.style.setProperty(r, t)
  },
  ol = function (e, r, t) {
    return (e._gsap[r] = t)
  },
  ll = function (e, r, t) {
    return (e._gsap.scaleX = e._gsap.scaleY = t)
  },
  ul = function (e, r, t, i, n) {
    var s = e._gsap
    ;(s.scaleX = s.scaleY = t), s.renderTransform(n, s)
  },
  cl = function (e, r, t, i, n) {
    var s = e._gsap
    ;(s[r] = t), s.renderTransform(n, s)
  },
  _e = 'transform',
  At = _e + 'Origin',
  ea,
  Sn = function (e, r) {
    var t = Ct.createElementNS
      ? Ct.createElementNS(
          (r || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          e,
        )
      : Ct.createElement(e)
    return t.style ? t : Ct.createElement(e)
  },
  gt = function o(e, r, t) {
    var i = getComputedStyle(e)
    return (
      i[r] ||
      i.getPropertyValue(r.replace(Qs, '-$1').toLowerCase()) ||
      i.getPropertyValue(r) ||
      (!t && o(e, _r(r) || r, 1)) ||
      ''
    )
  },
  ta = 'O,Moz,ms,Ms,Webkit'.split(','),
  _r = function (e, r, t) {
    var i = r || Ut,
      n = i.style,
      s = 5
    if (e in n && !t) return e
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(ta[s] + e in n);

    );
    return s < 0 ? null : (s === 3 ? 'ms' : s >= 0 ? ta[s] : '') + e
  },
  kn = function () {
    $o() &&
      window.document &&
      ((Gs = window),
      (Ct = Gs.document),
      (fr = Ct.documentElement),
      (Ut = Sn('div') || { style: {} }),
      Sn('div'),
      (_e = _r(_e)),
      (At = _e + 'Origin'),
      (Ut.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (ea = !!_r('perspective')),
      (Tn = 1))
  },
  Pn = function o(e) {
    var r = Sn(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
          'http://www.w3.org/2000/svg',
      ),
      t = this.parentNode,
      i = this.nextSibling,
      n = this.style.cssText,
      s
    if (
      (fr.appendChild(r),
      r.appendChild(this),
      (this.style.display = 'block'),
      e)
    )
      try {
        ;(s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = o)
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox())
    return (
      t && (i ? t.insertBefore(this, i) : t.appendChild(this)),
      fr.removeChild(r),
      (this.style.cssText = n),
      s
    )
  },
  ra = function (e, r) {
    for (var t = r.length; t--; )
      if (e.hasAttribute(r[t])) return e.getAttribute(r[t])
  },
  ia = function (e) {
    var r
    try {
      r = e.getBBox()
    } catch {
      r = Pn.call(e, !0)
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === Pn || (r = Pn.call(e, !0)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +ra(e, ['x', 'cx', 'x1']) || 0,
            y: +ra(e, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0,
          }
        : r
    )
  },
  na = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ia(e))
  },
  Wr = function (e, r) {
    if (r) {
      var t = e.style
      r in Ot && r !== At && (r = _e),
        t.removeProperty
          ? ((r.substr(0, 2) === 'ms' || r.substr(0, 6) === 'webkit') &&
              (r = '-' + r),
            t.removeProperty(r.replace(Qs, '-$1').toLowerCase()))
          : t.removeAttribute(r)
    }
  },
  Dt = function (e, r, t, i, n, s) {
    var a = new Ae(e._pt, r, t, 0, 1, s ? $s : Js)
    return (e._pt = a), (a.b = i), (a.e = n), e._props.push(t), a
  },
  sa = { deg: 1, rad: 1, turn: 1 },
  Ft = function o(e, r, t, i) {
    var n = parseFloat(t) || 0,
      s = (t + '').trim().substr((n + '').length) || 'px',
      a = Ut.style,
      l = el.test(r),
      u = e.tagName.toLowerCase() === 'svg',
      c = (u ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
      _ = 100,
      d = i === 'px',
      f = i === '%',
      p,
      h,
      m,
      g
    return i === s || !n || sa[i] || sa[s]
      ? n
      : (s !== 'px' && !d && (n = o(e, r, t, 'px')),
        (g = e.getCTM && na(e)),
        (f || s === '%') && (Ot[r] || ~r.indexOf('adius'))
          ? ((p = g ? e.getBBox()[l ? 'width' : 'height'] : e[c]),
            re(f ? (n / p) * _ : (n / 100) * p))
          : ((a[l ? 'width' : 'height'] = _ + (d ? s : i)),
            (h =
              ~r.indexOf('adius') || (i === 'em' && e.appendChild && !u)
                ? e
                : e.parentNode),
            g && (h = (e.ownerSVGElement || {}).parentNode),
            (!h || h === Ct || !h.appendChild) && (h = Ct.body),
            (m = h._gsap),
            m && f && m.width && l && m.time === je.time
              ? re((n / m.width) * _)
              : ((f || s === '%') && (a.position = gt(e, 'position')),
                h === e && (a.position = 'static'),
                h.appendChild(Ut),
                (p = Ut[c]),
                h.removeChild(Ut),
                (a.position = 'absolute'),
                l && f && ((m = Bt(h)), (m.time = je.time), (m.width = h[c])),
                re(d ? (p * n) / _ : p && n ? (_ / p) * n : 0))))
  },
  Yt = function (e, r, t, i) {
    var n
    return (
      Tn || kn(),
      r in Mt &&
        r !== 'transform' &&
        ((r = Mt[r]), ~r.indexOf(',') && (r = r.split(',')[0])),
      Ot[r] && r !== 'transform'
        ? ((n = jr(e, i)),
          (n =
            r !== 'transformOrigin'
              ? n[r]
              : n.svg
              ? n.origin
              : yi(gt(e, At)) + ' ' + n.zOrigin + 'px'))
        : ((n = e.style[r]),
          (!n || n === 'auto' || i || ~(n + '').indexOf('calc(')) &&
            (n =
              (mi[r] && mi[r](e, r, t)) ||
              gt(e, r) ||
              ds(e, r) ||
              (r === 'opacity' ? 1 : 0))),
      t && !~(n + '').trim().indexOf(' ') ? Ft(e, r, n, t) + t : n
    )
  },
  fl = function (e, r, t, i) {
    if (!t || t === 'none') {
      var n = _r(r, e, 1),
        s = n && gt(e, n, 1)
      s && s !== t
        ? ((r = n), (t = s))
        : r === 'borderColor' && (t = gt(e, 'borderTopColor'))
    }
    var a = new Ae(this._pt, e.style, r, 0, 1, Hs),
      l = 0,
      u = 0,
      c,
      _,
      d,
      f,
      p,
      h,
      m,
      g,
      S,
      T,
      v,
      b,
      x
    if (
      ((a.b = t),
      (a.e = i),
      (t += ''),
      (i += ''),
      i === 'auto' && ((e.style[r] = i), (i = gt(e, r) || i), (e.style[r] = t)),
      (c = [t, i]),
      zs(c),
      (t = c[0]),
      (i = c[1]),
      (d = t.match(sr) || []),
      (x = i.match(sr) || []),
      x.length)
    ) {
      for (; (_ = sr.exec(i)); )
        (m = _[0]),
          (S = i.substring(l, _.index)),
          p
            ? (p = (p + 1) % 5)
            : (S.substr(-5) === 'rgba(' || S.substr(-5) === 'hsla(') && (p = 1),
          m !== (h = d[u++] || '') &&
            ((f = parseFloat(h) || 0),
            (v = h.substr((f + '').length)),
            (b = m.charAt(1) === '=' ? +(m.charAt(0) + '1') : 0),
            b && (m = m.substr(2)),
            (g = parseFloat(m)),
            (T = m.substr((g + '').length)),
            (l = sr.lastIndex - T.length),
            T ||
              ((T = T || Ee.units[r] || v),
              l === i.length && ((i += T), (a.e += T))),
            v !== T && (f = Ft(e, r, h, T) || 0),
            (a._pt = {
              _next: a._pt,
              p: S || u === 1 ? S : ',',
              s: f,
              c: b ? b * g : g - f,
              m: (p && p < 4) || r === 'zIndex' ? Math.round : 0,
            }))
      a.c = l < i.length ? i.substring(l, i.length) : ''
    } else a.r = r === 'display' && i === 'none' ? $s : Js
    return as.test(i) && (a.e = 0), (this._pt = a), a
  },
  aa = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
  hl = function (e) {
    var r = e.split(' '),
      t = r[0],
      i = r[1] || '50%'
    return (
      (t === 'top' || t === 'bottom' || i === 'left' || i === 'right') &&
        ((e = t), (t = i), (i = e)),
      (r[0] = aa[t] || t),
      (r[1] = aa[i] || i),
      r.join(' ')
    )
  },
  dl = function (e, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var t = r.t,
        i = t.style,
        n = r.u,
        s = t._gsap,
        a,
        l,
        u
      if (n === 'all' || n === !0) (i.cssText = ''), (l = 1)
      else
        for (n = n.split(','), u = n.length; --u > -1; )
          (a = n[u]),
            Ot[a] && ((l = 1), (a = a === 'transformOrigin' ? At : _e)),
            Wr(t, a)
      l &&
        (Wr(t, _e),
        s &&
          (s.svg && t.removeAttribute('transform'), jr(t, 1), (s.uncache = 1)))
    }
  },
  mi = {
    clearProps: function (e, r, t, i, n) {
      if (n.data !== 'isFromStart') {
        var s = (e._pt = new Ae(e._pt, r, t, 0, 0, dl))
        return (s.u = i), (s.pr = -10), (s.tween = n), e._props.push(t), 1
      }
    },
  },
  Yr = [1, 0, 0, 1, 0, 0],
  oa = {},
  la = function (e) {
    return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
  },
  ua = function (e) {
    var r = gt(e, _e)
    return la(r) ? Yr : r.substr(7).match(ss).map(re)
  },
  Cn = function (e, r) {
    var t = e._gsap || Bt(e),
      i = e.style,
      n = ua(e),
      s,
      a,
      l,
      u
    return t.svg && e.getAttribute('transform')
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(',') === '1,0,0,1,0,0' ? Yr : n)
      : (n === Yr &&
          !e.offsetParent &&
          e !== fr &&
          !t.svg &&
          ((l = i.display),
          (i.display = 'block'),
          (s = e.parentNode),
          (!s || !e.offsetParent) &&
            ((u = 1), (a = e.nextSibling), fr.appendChild(e)),
          (n = ua(e)),
          l ? (i.display = l) : Wr(e, 'display'),
          u &&
            (a
              ? s.insertBefore(e, a)
              : s
              ? s.appendChild(e)
              : fr.removeChild(e))),
        r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
  },
  On = function (e, r, t, i, n, s) {
    var a = e._gsap,
      l = n || Cn(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      _ = a.xOffset || 0,
      d = a.yOffset || 0,
      f = l[0],
      p = l[1],
      h = l[2],
      m = l[3],
      g = l[4],
      S = l[5],
      T = r.split(' '),
      v = parseFloat(T[0]) || 0,
      b = parseFloat(T[1]) || 0,
      x,
      w,
      P,
      k
    t
      ? l !== Yr &&
        (w = f * m - p * h) &&
        ((P = v * (m / w) + b * (-h / w) + (h * S - m * g) / w),
        (k = v * (-p / w) + b * (f / w) - (f * S - p * g) / w),
        (v = P),
        (b = k))
      : ((x = ia(e)),
        (v = x.x + (~T[0].indexOf('%') ? (v / 100) * x.width : v)),
        (b = x.y + (~(T[1] || T[0]).indexOf('%') ? (b / 100) * x.height : b))),
      i || (i !== !1 && a.smooth)
        ? ((g = v - u),
          (S = b - c),
          (a.xOffset = _ + (g * f + S * h) - g),
          (a.yOffset = d + (g * p + S * m) - S))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = v),
      (a.yOrigin = b),
      (a.smooth = !!i),
      (a.origin = r),
      (a.originIsAbsolute = !!t),
      (e.style[At] = '0px 0px'),
      s &&
        (Dt(s, a, 'xOrigin', u, v),
        Dt(s, a, 'yOrigin', c, b),
        Dt(s, a, 'xOffset', _, a.xOffset),
        Dt(s, a, 'yOffset', d, a.yOffset)),
      e.setAttribute('data-svg-origin', v + ' ' + b)
  },
  jr = function (e, r) {
    var t = e._gsap || new Ns(e)
    if ('x' in t && !r && !t.uncache) return t
    var i = e.style,
      n = t.scaleX < 0,
      s = 'px',
      a = 'deg',
      l = gt(e, At) || '0',
      u,
      c,
      _,
      d,
      f,
      p,
      h,
      m,
      g,
      S,
      T,
      v,
      b,
      x,
      w,
      P,
      k,
      O,
      A,
      M,
      V,
      D,
      N,
      L,
      te,
      De,
      tt,
      y,
      Le,
      ei,
      qe,
      Ze
    return (
      (u = c = _ = p = h = m = g = S = T = 0),
      (d = f = 1),
      (t.svg = !!(e.getCTM && na(e))),
      (x = Cn(e, t.svg)),
      t.svg &&
        ((L =
          (!t.uncache || l === '0px 0px') &&
          !r &&
          e.getAttribute('data-svg-origin')),
        On(e, L || l, !!L || t.originIsAbsolute, t.smooth !== !1, x)),
      (v = t.xOrigin || 0),
      (b = t.yOrigin || 0),
      x !== Yr &&
        ((O = x[0]),
        (A = x[1]),
        (M = x[2]),
        (V = x[3]),
        (u = D = x[4]),
        (c = N = x[5]),
        x.length === 6
          ? ((d = Math.sqrt(O * O + A * A)),
            (f = Math.sqrt(V * V + M * M)),
            (p = O || A ? dr(A, O) * Wt : 0),
            (g = M || V ? dr(M, V) * Wt + p : 0),
            g && (f *= Math.abs(Math.cos(g * hr))),
            t.svg && ((u -= v - (v * O + b * M)), (c -= b - (v * A + b * V))))
          : ((Ze = x[6]),
            (ei = x[7]),
            (tt = x[8]),
            (y = x[9]),
            (Le = x[10]),
            (qe = x[11]),
            (u = x[12]),
            (c = x[13]),
            (_ = x[14]),
            (w = dr(Ze, Le)),
            (h = w * Wt),
            w &&
              ((P = Math.cos(-w)),
              (k = Math.sin(-w)),
              (L = D * P + tt * k),
              (te = N * P + y * k),
              (De = Ze * P + Le * k),
              (tt = D * -k + tt * P),
              (y = N * -k + y * P),
              (Le = Ze * -k + Le * P),
              (qe = ei * -k + qe * P),
              (D = L),
              (N = te),
              (Ze = De)),
            (w = dr(-M, Le)),
            (m = w * Wt),
            w &&
              ((P = Math.cos(-w)),
              (k = Math.sin(-w)),
              (L = O * P - tt * k),
              (te = A * P - y * k),
              (De = M * P - Le * k),
              (qe = V * k + qe * P),
              (O = L),
              (A = te),
              (M = De)),
            (w = dr(A, O)),
            (p = w * Wt),
            w &&
              ((P = Math.cos(w)),
              (k = Math.sin(w)),
              (L = O * P + A * k),
              (te = D * P + N * k),
              (A = A * P - O * k),
              (N = N * P - D * k),
              (O = L),
              (D = te)),
            h &&
              Math.abs(h) + Math.abs(p) > 359.9 &&
              ((h = p = 0), (m = 180 - m)),
            (d = re(Math.sqrt(O * O + A * A + M * M))),
            (f = re(Math.sqrt(N * N + Ze * Ze))),
            (w = dr(D, N)),
            (g = Math.abs(w) > 2e-4 ? w * Wt : 0),
            (T = qe ? 1 / (qe < 0 ? -qe : qe) : 0)),
        t.svg &&
          ((L = e.getAttribute('transform')),
          (t.forceCSS = e.setAttribute('transform', '') || !la(gt(e, _e))),
          L && e.setAttribute('transform', L))),
      Math.abs(g) > 90 &&
        Math.abs(g) < 270 &&
        (n
          ? ((d *= -1), (g += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((f *= -1), (g += g <= 0 ? 180 : -180))),
      (t.x =
        u -
        ((t.xPercent =
          u &&
          (t.xPercent ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * t.xPercent) / 100
          : 0) +
        s),
      (t.y =
        c -
        ((t.yPercent =
          c &&
          (t.yPercent ||
            (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetHeight * t.yPercent) / 100
          : 0) +
        s),
      (t.z = _ + s),
      (t.scaleX = re(d)),
      (t.scaleY = re(f)),
      (t.rotation = re(p) + a),
      (t.rotationX = re(h) + a),
      (t.rotationY = re(m) + a),
      (t.skewX = g + a),
      (t.skewY = S + a),
      (t.transformPerspective = T + s),
      (t.zOrigin = parseFloat(l.split(' ')[2]) || 0) && (i[At] = yi(l)),
      (t.xOffset = t.yOffset = 0),
      (t.force3D = Ee.force3D),
      (t.renderTransform = t.svg ? pl : ea ? ca : _l),
      (t.uncache = 0),
      t
    )
  },
  yi = function (e) {
    return (e = e.split(' '))[0] + ' ' + e[1]
  },
  Mn = function (e, r, t) {
    var i = Oe(r)
    return re(parseFloat(r) + parseFloat(Ft(e, 'x', t + 'px', i))) + i
  },
  _l = function (e, r) {
    ;(r.z = '0px'),
      (r.rotationY = r.rotationX = '0deg'),
      (r.force3D = 0),
      ca(e, r)
  },
  jt = '0deg',
  Hr = '0px',
  Ht = ') ',
  ca = function (e, r) {
    var t = r || this,
      i = t.xPercent,
      n = t.yPercent,
      s = t.x,
      a = t.y,
      l = t.z,
      u = t.rotation,
      c = t.rotationY,
      _ = t.rotationX,
      d = t.skewX,
      f = t.skewY,
      p = t.scaleX,
      h = t.scaleY,
      m = t.transformPerspective,
      g = t.force3D,
      S = t.target,
      T = t.zOrigin,
      v = '',
      b = (g === 'auto' && e && e !== 1) || g === !0
    if (T && (_ !== jt || c !== jt)) {
      var x = parseFloat(c) * hr,
        w = Math.sin(x),
        P = Math.cos(x),
        k
      ;(x = parseFloat(_) * hr),
        (k = Math.cos(x)),
        (s = Mn(S, s, w * k * -T)),
        (a = Mn(S, a, -Math.sin(x) * -T)),
        (l = Mn(S, l, P * k * -T + T))
    }
    m !== Hr && (v += 'perspective(' + m + Ht),
      (i || n) && (v += 'translate(' + i + '%, ' + n + '%) '),
      (b || s !== Hr || a !== Hr || l !== Hr) &&
        (v +=
          l !== Hr || b
            ? 'translate3d(' + s + ', ' + a + ', ' + l + ') '
            : 'translate(' + s + ', ' + a + Ht),
      u !== jt && (v += 'rotate(' + u + Ht),
      c !== jt && (v += 'rotateY(' + c + Ht),
      _ !== jt && (v += 'rotateX(' + _ + Ht),
      (d !== jt || f !== jt) && (v += 'skew(' + d + ', ' + f + Ht),
      (p !== 1 || h !== 1) && (v += 'scale(' + p + ', ' + h + Ht),
      (S.style[_e] = v || 'translate(0, 0)')
  },
  pl = function (e, r) {
    var t = r || this,
      i = t.xPercent,
      n = t.yPercent,
      s = t.x,
      a = t.y,
      l = t.rotation,
      u = t.skewX,
      c = t.skewY,
      _ = t.scaleX,
      d = t.scaleY,
      f = t.target,
      p = t.xOrigin,
      h = t.yOrigin,
      m = t.xOffset,
      g = t.yOffset,
      S = t.forceCSS,
      T = parseFloat(s),
      v = parseFloat(a),
      b,
      x,
      w,
      P,
      k
    ;(l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= hr),
          (u *= hr),
          (b = Math.cos(l) * _),
          (x = Math.sin(l) * _),
          (w = Math.sin(l - u) * -d),
          (P = Math.cos(l - u) * d),
          u &&
            ((c *= hr),
            (k = Math.tan(u - c)),
            (k = Math.sqrt(1 + k * k)),
            (w *= k),
            (P *= k),
            c &&
              ((k = Math.tan(c)),
              (k = Math.sqrt(1 + k * k)),
              (b *= k),
              (x *= k))),
          (b = re(b)),
          (x = re(x)),
          (w = re(w)),
          (P = re(P)))
        : ((b = _), (P = d), (x = w = 0)),
      ((T && !~(s + '').indexOf('px')) || (v && !~(a + '').indexOf('px'))) &&
        ((T = Ft(f, 'x', s, 'px')), (v = Ft(f, 'y', a, 'px'))),
      (p || h || m || g) &&
        ((T = re(T + p - (p * b + h * w) + m)),
        (v = re(v + h - (p * x + h * P) + g))),
      (i || n) &&
        ((k = f.getBBox()),
        (T = re(T + (i / 100) * k.width)),
        (v = re(v + (n / 100) * k.height))),
      (k =
        'matrix(' + b + ',' + x + ',' + w + ',' + P + ',' + T + ',' + v + ')'),
      f.setAttribute('transform', k),
      S && (f.style[_e] = k)
  },
  gl = function (e, r, t, i, n, s) {
    var a = 360,
      l = ue(n),
      u = parseFloat(n) * (l && ~n.indexOf('rad') ? Wt : 1),
      c = s ? u * s : u - i,
      _ = i + c + 'deg',
      d,
      f
    return (
      l &&
        ((d = n.split('_')[1]),
        d === 'short' && ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
        d === 'cw' && c < 0
          ? (c = ((c + a * Zs) % a) - ~~(c / a) * a)
          : d === 'ccw' && c > 0 && (c = ((c - a * Zs) % a) - ~~(c / a) * a)),
      (e._pt = f = new Ae(e._pt, r, t, i, c, rl)),
      (f.e = _),
      (f.u = 'deg'),
      e._props.push(t),
      f
    )
  },
  fa = function (e, r) {
    for (var t in r) e[t] = r[t]
    return e
  },
  ml = function (e, r, t) {
    var i = fa({}, t._gsap),
      n = 'perspective,force3D,transformOrigin,svgOrigin',
      s = t.style,
      a,
      l,
      u,
      c,
      _,
      d,
      f,
      p
    i.svg
      ? ((u = t.getAttribute('transform')),
        t.setAttribute('transform', ''),
        (s[_e] = r),
        (a = jr(t, 1)),
        Wr(t, _e),
        t.setAttribute('transform', u))
      : ((u = getComputedStyle(t)[_e]),
        (s[_e] = r),
        (a = jr(t, 1)),
        (s[_e] = u))
    for (l in Ot)
      (u = i[l]),
        (c = a[l]),
        u !== c &&
          n.indexOf(l) < 0 &&
          ((f = Oe(u)),
          (p = Oe(c)),
          (_ = f !== p ? Ft(t, l, u, p) : parseFloat(u)),
          (d = parseFloat(c)),
          (e._pt = new Ae(e._pt, a, l, _, d - _, Ks)),
          (e._pt.u = p || 0),
          e._props.push(l))
    fa(a, i)
  }
Ce('padding,margin,Width,Radius', function (o, e) {
  var r = 'Top',
    t = 'Right',
    i = 'Bottom',
    n = 'Left',
    s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function (a) {
      return e < 2 ? o + a : 'border' + a + o
    })
  mi[e > 1 ? 'border' + o : o] = function (a, l, u, c, _) {
    var d, f
    if (arguments.length < 4)
      return (
        (d = s.map(function (p) {
          return Yt(a, p, u)
        })),
        (f = d.join(' ')),
        f.split(d[0]).length === 5 ? d[0] : f
      )
    ;(d = (c + '').split(' ')),
      (f = {}),
      s.forEach(function (p, h) {
        return (f[p] = d[h] = d[h] || d[((h - 1) / 2) | 0])
      }),
      a.init(l, f, _)
  }
})
var ha = {
  name: 'css',
  register: kn,
  targetTest: function (e) {
    return e.style && e.nodeType
  },
  init: function (e, r, t, i, n) {
    var s = this._props,
      a = e.style,
      l = t.vars.startAt,
      u,
      c,
      _,
      d,
      f,
      p,
      h,
      m,
      g,
      S,
      T,
      v,
      b,
      x,
      w
    Tn || kn()
    for (h in r)
      if (h !== 'autoRound' && ((c = r[h]), !(ze[h] && Vs(h, r, t, i, e, n)))) {
        if (
          ((f = typeof c),
          (p = mi[h]),
          f === 'function' && ((c = c.call(t, i, e, n)), (f = typeof c)),
          f === 'string' && ~c.indexOf('random(') && (c = Br(c)),
          p)
        )
          p(this, e, h, c, t) && (w = 1)
        else if (h.substr(0, 2) === '--')
          (u = (getComputedStyle(e).getPropertyValue(h) + '').trim()),
            (c += ''),
            (kt.lastIndex = 0),
            kt.test(u) || ((m = Oe(u)), (g = Oe(c))),
            g ? m !== g && (u = Ft(e, h, u, g) + g) : m && (c += m),
            this.add(a, 'setProperty', u, c, i, n, 0, 0, h),
            s.push(h)
        else if (f !== 'undefined') {
          if (
            (l && h in l
              ? ((u = typeof l[h] == 'function' ? l[h].call(t, i, e, n) : l[h]),
                ue(u) && ~u.indexOf('random(') && (u = Br(u)),
                Oe(u + '') || (u += Ee.units[h] || Oe(Yt(e, h)) || ''),
                (u + '').charAt(1) === '=' && (u = Yt(e, h)))
              : (u = Yt(e, h)),
            (d = parseFloat(u)),
            (S =
              f === 'string' && c.charAt(1) === '=' ? +(c.charAt(0) + '1') : 0),
            S && (c = c.substr(2)),
            (_ = parseFloat(c)),
            h in Mt &&
              (h === 'autoAlpha' &&
                (d === 1 && Yt(e, 'visibility') === 'hidden' && _ && (d = 0),
                Dt(
                  this,
                  a,
                  'visibility',
                  d ? 'inherit' : 'hidden',
                  _ ? 'inherit' : 'hidden',
                  !_,
                )),
              h !== 'scale' &&
                h !== 'transform' &&
                ((h = Mt[h]), ~h.indexOf(',') && (h = h.split(',')[0]))),
            (T = h in Ot),
            T)
          ) {
            if (
              (v ||
                ((b = e._gsap),
                (b.renderTransform && !r.parseTransform) ||
                  jr(e, r.parseTransform),
                (x = r.smoothOrigin !== !1 && b.smooth),
                (v = this._pt = new Ae(
                  this._pt,
                  a,
                  _e,
                  0,
                  1,
                  b.renderTransform,
                  b,
                  0,
                  -1,
                )),
                (v.dep = 1)),
              h === 'scale')
            )
              (this._pt = new Ae(
                this._pt,
                b,
                'scaleY',
                b.scaleY,
                (S ? S * _ : _ - b.scaleY) || 0,
              )),
                s.push('scaleY', h),
                (h += 'X')
            else if (h === 'transformOrigin') {
              ;(c = hl(c)),
                b.svg
                  ? On(e, c, 0, x, 0, this)
                  : ((g = parseFloat(c.split(' ')[2]) || 0),
                    g !== b.zOrigin && Dt(this, b, 'zOrigin', b.zOrigin, g),
                    Dt(this, a, h, yi(u), yi(c)))
              continue
            } else if (h === 'svgOrigin') {
              On(e, c, 1, x, 0, this)
              continue
            } else if (h in oa) {
              gl(this, b, h, d, c, S)
              continue
            } else if (h === 'smoothOrigin') {
              Dt(this, b, 'smooth', b.smooth, c)
              continue
            } else if (h === 'force3D') {
              b[h] = c
              continue
            } else if (h === 'transform') {
              ml(this, c, e)
              continue
            }
          } else h in a || (h = _r(h) || h)
          if (T || ((_ || _ === 0) && (d || d === 0) && !tl.test(c) && h in a))
            (m = (u + '').substr((d + '').length)),
              _ || (_ = 0),
              (g = Oe(c) || (h in Ee.units ? Ee.units[h] : m)),
              m !== g && (d = Ft(e, h, u, g)),
              (this._pt = new Ae(
                this._pt,
                T ? b : a,
                h,
                d,
                S ? S * _ : _ - d,
                !T && (g === 'px' || h === 'zIndex') && r.autoRound !== !1
                  ? nl
                  : Ks,
              )),
              (this._pt.u = g || 0),
              m !== g && g !== '%' && ((this._pt.b = u), (this._pt.r = il))
          else if (h in a) fl.call(this, e, h, u, c)
          else if (h in e) this.add(e, h, u || e[h], c, i, n)
          else {
            an(h, c)
            continue
          }
          s.push(h)
        }
      }
    w && Xs(this)
  },
  get: Yt,
  aliases: Mt,
  getSetter: function (e, r, t) {
    var i = Mt[r]
    return (
      i && i.indexOf(',') < 0 && (r = i),
      r in Ot && r !== At && (e._gsap.x || Yt(e, 'x'))
        ? t && qs === t
          ? r === 'scale'
            ? ll
            : ol
          : (qs = t || {}) && (r === 'scale' ? ul : cl)
        : e.style && !en(e.style[r])
        ? sl
        : ~r.indexOf('-')
        ? al
        : bn(e, r)
    )
  },
  core: { _removeProperty: Wr, _getMatrix: Cn },
}
st.utils.checkPrefix = _r
;(function (o, e, r, t) {
  var i = Ce(o + ',' + e + ',' + r, function (n) {
    Ot[n] = 1
  })
  Ce(e, function (n) {
    ;(Ee.units[n] = 'deg'), (oa[n] = 1)
  }),
    (Mt[i[13]] = o + ',' + e),
    Ce(t, function (n) {
      var s = n.split(':')
      Mt[s[1]] = i[s[0]]
    })
})(
  'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
  'rotation,rotationX,rotationY,skewX,skewY',
  'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
)
Ce(
  'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
  function (o) {
    Ee.units[o] = 'px'
  },
)
st.registerPlugin(ha)
var He = st.registerPlugin(ha) || st
He.core.Tween
/*!
 * ScrollTrigger 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var F,
  pr,
  X,
  ye,
  mt,
  $,
  da,
  An,
  Xr,
  vi,
  bi,
  Dn,
  be,
  xi,
  Fn,
  xe,
  _a,
  pa,
  gr,
  ga,
  En,
  ma,
  Rn,
  Gr = 1,
  Xt = [],
  Gt = [],
  Et = Date.now,
  zn = Et(),
  Je = 0,
  ya = 1,
  wi = function (e) {
    return e
  },
  at = function (e) {
    return (
      Xr(e)[0] ||
      ($e(e) && F.config().nullTargetWarn !== !1
        ? console.warn('Element not found:', e)
        : null)
    )
  },
  va = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  ba = function () {
    return typeof window != 'undefined'
  },
  xa = function () {
    return F || (ba() && (F = window.gsap) && F.registerPlugin && F)
  },
  mr = function (e) {
    return !!~da.indexOf(e)
  },
  qt = function (e, r) {
    return ~Xt.indexOf(e) && Xt[Xt.indexOf(e) + 1][r]
  },
  Ti = function (e, r) {
    var t = r.s,
      i = r.sc,
      n = Gt.indexOf(e),
      s = i === Te.sc ? 1 : 2
    return (
      !~n && (n = Gt.push(e) - 1),
      Gt[n + s] ||
        (Gt[n + s] =
          qt(e, t) ||
          (mr(e)
            ? i
            : function (a) {
                return arguments.length ? (e[t] = a) : e[t]
              }))
    )
  },
  wa = function (e) {
    return (
      qt(e, 'getBoundingClientRect') ||
      (mr(e)
        ? function () {
            return (Ui.width = X.innerWidth), (Ui.height = X.innerHeight), Ui
          }
        : function () {
            return vt(e)
          })
    )
  },
  yl = function (e, r, t) {
    var i = t.d,
      n = t.d2,
      s = t.a
    return (s = qt(e, 'getBoundingClientRect'))
      ? function () {
          return s()[i]
        }
      : function () {
          return (r ? X['inner' + n] : e['client' + n]) || 0
        }
  },
  vl = function (e, r) {
    return !r || ~Xt.indexOf(e)
      ? wa(e)
      : function () {
          return Ui
        }
  },
  Si = function (e, r) {
    var t = r.s,
      i = r.d2,
      n = r.d,
      s = r.a
    return (t = 'scroll' + i) && (s = qt(e, t))
      ? s() - wa(e)()[n]
      : mr(e)
      ? ($[t] || mt[t]) -
        (X['inner' + i] || mt['client' + i] || $['client' + i])
      : e[t] - e['offset' + i]
  },
  Ln = function (e, r) {
    for (var t = 0; t < gr.length; t += 3)
      (!r || ~r.indexOf(gr[t + 1])) && e(gr[t], gr[t + 1], gr[t + 2])
  },
  $e = function (e) {
    return typeof e == 'string'
  },
  ot = function (e) {
    return typeof e == 'function'
  },
  qr = function (e) {
    return typeof e == 'number'
  },
  Bn = function (e) {
    return typeof e == 'object'
  },
  ki = function (e) {
    return ot(e) && e()
  },
  Ta = function (e, r) {
    return function () {
      var t = ki(e),
        i = ki(r)
      return function () {
        ki(t), ki(i)
      }
    }
  },
  Zr = function (e, r, t) {
    return e && e.progress(r ? 0 : 1) && t && e.pause()
  },
  In = function (e, r) {
    if (e.enabled) {
      var t = r(e)
      t && t.totalTime && (e.callbackAnimation = t)
    }
  },
  yr = Math.abs,
  Pi = 'scrollLeft',
  Ci = 'scrollTop',
  Nn = 'left',
  Vn = 'top',
  Oi = 'right',
  Mi = 'bottom',
  Rt = 'width',
  zt = 'height',
  vr = 'Right',
  br = 'Left',
  xr = 'Top',
  wr = 'Bottom',
  ie = 'padding',
  Xe = 'margin',
  Zt = 'Width',
  Ai = 'Height',
  we = 'px',
  et = {
    s: Pi,
    p: Nn,
    p2: br,
    os: Oi,
    os2: vr,
    d: Rt,
    d2: Zt,
    a: 'x',
    sc: function (e) {
      return arguments.length
        ? X.scrollTo(e, Te.sc())
        : X.pageXOffset || ye[Pi] || mt[Pi] || $[Pi] || 0
    },
  },
  Te = {
    s: Ci,
    p: Vn,
    p2: xr,
    os: Mi,
    os2: wr,
    d: zt,
    d2: Ai,
    a: 'y',
    op: et,
    sc: function (e) {
      return arguments.length
        ? X.scrollTo(et.sc(), e)
        : X.pageYOffset || ye[Ci] || mt[Ci] || $[Ci] || 0
    },
  },
  yt = function (e) {
    return X.getComputedStyle(e)
  },
  bl = function (e) {
    var r = yt(e).position
    e.style.position = r === 'absolute' || r === 'fixed' ? r : 'relative'
  },
  Sa = function (e, r) {
    for (var t in r) t in e || (e[t] = r[t])
    return e
  },
  vt = function (e, r) {
    var t =
        r &&
        yt(e)[Fn] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        F.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect()
    return t && t.progress(0).kill(), i
  },
  Un = function (e, r) {
    var t = r.d2
    return e['offset' + t] || e['client' + t] || 0
  },
  ka = function (e) {
    var r = [],
      t = e.labels,
      i = e.duration(),
      n
    for (n in t) r.push(t[n] / i)
    return r
  },
  xl = function (e) {
    return function (r) {
      return F.utils.snap(ka(e), r)
    }
  },
  Wn = function (e) {
    var r = F.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, n) {
          return i - n
        })
    return t
      ? function (i, n, s) {
          s === void 0 && (s = 0.001)
          var a
          if (!n) return r(i)
          if (n > 0) {
            for (i -= s, a = 0; a < t.length; a++) if (t[a] >= i) return t[a]
            return t[a - 1]
          } else for (a = t.length, i += s; a--; ) if (t[a] <= i) return t[a]
          return t[0]
        }
      : function (i, n, s) {
          s === void 0 && (s = 0.001)
          var a = r(i)
          return !n || Math.abs(a - i) < s || a - i < 0 == n < 0
            ? a
            : r(n < 0 ? i - e : i + e)
        }
  },
  wl = function (e) {
    return function (r, t) {
      return Wn(ka(e))(r, t.direction)
    }
  },
  Pa = function (e, r, t, i) {
    return t.split(',').forEach(function (n) {
      return e(r, n, i)
    })
  },
  Se = function (e, r, t) {
    return e.addEventListener(r, t, { passive: !0 })
  },
  Qr = function (e, r, t) {
    return e.removeEventListener(r, t)
  },
  Ca = {
    startColor: 'green',
    endColor: 'red',
    indent: 0,
    fontSize: '16px',
    fontWeight: 'normal',
  },
  Di = { toggleActions: 'play', anticipatePin: 0 },
  Fi = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Ei = function (e, r) {
    if ($e(e)) {
      var t = e.indexOf('='),
        i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0
      ~t && (e.indexOf('%') > t && (i *= r / 100), (e = e.substr(0, t - 1))),
        (e =
          i +
          (e in Fi
            ? Fi[e] * r
            : ~e.indexOf('%')
            ? (parseFloat(e) * r) / 100
            : parseFloat(e) || 0))
    }
    return e
  },
  Ri = function (e, r, t, i, n, s, a, l) {
    var u = n.startColor,
      c = n.endColor,
      _ = n.fontSize,
      d = n.indent,
      f = n.fontWeight,
      p = ye.createElement('div'),
      h = mr(t) || qt(t, 'pinType') === 'fixed',
      m = e.indexOf('scroller') !== -1,
      g = h ? $ : t,
      S = e.indexOf('start') !== -1,
      T = S ? u : c,
      v =
        'border-color:' +
        T +
        ';font-size:' +
        _ +
        ';color:' +
        T +
        ';font-weight:' +
        f +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
    return (
      (v += 'position:' + ((m || l) && h ? 'fixed;' : 'absolute;')),
      (m || l || !h) &&
        (v += (i === Te ? Oi : Mi) + ':' + (s + parseFloat(d)) + 'px;'),
      a &&
        (v +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (p._isStart = S),
      p.setAttribute('class', 'gsap-marker-' + e + (r ? ' marker-' + r : '')),
      (p.style.cssText = v),
      (p.innerText = r || r === 0 ? e + '-' + r : e),
      g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
      (p._offset = p['offset' + i.op.d2]),
      zi(p, 0, i, S),
      p
    )
  },
  zi = function (e, r, t, i) {
    var n = { display: 'block' },
      s = t[i ? 'os2' : 'p2'],
      a = t[i ? 'p2' : 'os2']
    ;(e._isFlipped = i),
      (n[t.a + 'Percent'] = i ? -100 : 0),
      (n[t.a] = i ? '1px' : 0),
      (n['border' + s + Zt] = 1),
      (n['border' + a + Zt] = 0),
      (n[t.p] = r + 'px'),
      F.set(e, n)
  },
  I = [],
  Yn = {},
  Oa = function () {
    return Et() - Je > 34 && Hn()
  },
  Li = function () {
    Hn(), Je || Sr('scrollStart'), (Je = Et())
  },
  Kr = function () {
    return !be && !ma && !ye.fullscreenElement && An.restart(!0)
  },
  Jr = {},
  Tl = [],
  K = [],
  Tr,
  Ma,
  Aa = function (e) {
    var r = F.ticker.frame,
      t = [],
      i = 0,
      n
    if (Ma !== r || Gr) {
      for (Bi(); i < K.length; i += 4)
        (n = X.matchMedia(K[i]).matches),
          n !== K[i + 3] &&
            ((K[i + 3] = n),
            n ? t.push(i) : Bi(1, K[i]) || (ot(K[i + 2]) && K[i + 2]()))
      for (Fa(), i = 0; i < t.length; i++)
        (n = t[i]), (Tr = K[n]), (K[n + 2] = K[n + 1](e))
      ;(Tr = 0), pr && kr(0, 1), (Ma = r), Sr('matchMedia')
    }
  },
  Da = function o() {
    return Qr(H, 'scrollEnd', o) || kr(!0)
  },
  Sr = function (e) {
    return (
      (Jr[e] &&
        Jr[e].map(function (r) {
          return r()
        })) ||
      Tl
    )
  },
  Ge = [],
  Fa = function (e) {
    for (var r = 0; r < Ge.length; r += 5)
      (!e || Ge[r + 4] === e) &&
        ((Ge[r].style.cssText = Ge[r + 1]),
        Ge[r].getBBox && Ge[r].setAttribute('transform', Ge[r + 2] || ''),
        (Ge[r + 3].uncache = 1))
  },
  Bi = function (e, r) {
    var t
    for (xe = 0; xe < I.length; xe++)
      (t = I[xe]), (!r || t.media === r) && (e ? t.kill(1) : t.revert())
    r && Fa(r), r || Sr('revert')
  },
  Ea = function () {
    return Gt.forEach(function (e) {
      return typeof e == 'function' && (e.rec = 0)
    })
  },
  jn,
  kr = function (e, r) {
    if (Je && !e) {
      Se(H, 'scrollEnd', Da)
      return
    }
    jn = !0
    var t = Sr('refreshInit')
    ga && H.sort(),
      r || Bi(),
      I.forEach(function (i) {
        return i.refresh()
      }),
      I.forEach(function (i) {
        return (
          i.vars.end === 'max' &&
          i.setPositions(i.start, Si(i.scroller, i._dir))
        )
      }),
      t.forEach(function (i) {
        return i && i.render && i.render(-1)
      }),
      Ea(),
      An.pause(),
      (jn = !1),
      Sr('refresh')
  },
  Ra = 0,
  Ii = 1,
  Hn = function () {
    if (!jn) {
      var e = I.length,
        r = Et(),
        t = r - zn >= 50,
        i = e && I[0].scroll()
      if (
        ((Ii = Ra > i ? -1 : 1),
        (Ra = i),
        t &&
          (Je && !xi && r - Je > 200 && ((Je = 0), Sr('scrollEnd')),
          (bi = zn),
          (zn = r)),
        Ii < 0)
      ) {
        for (xe = e; xe-- > 0; ) I[xe] && I[xe].update(0, t)
        Ii = 1
      } else for (xe = 0; xe < e; xe++) I[xe] && I[xe].update(0, t)
    }
  },
  Xn = [
    Nn,
    Vn,
    Mi,
    Oi,
    Xe + wr,
    Xe + vr,
    Xe + xr,
    Xe + br,
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order',
  ],
  Ni = Xn.concat([
    Rt,
    zt,
    'boxSizing',
    'max' + Zt,
    'max' + Ai,
    'position',
    Xe,
    ie,
    ie + xr,
    ie + vr,
    ie + wr,
    ie + br,
  ]),
  Sl = function (e, r, t) {
    $r(t)
    var i = e._gsap
    if (i.spacerIsNative) $r(i.spacerState)
    else if (e.parentNode === r) {
      var n = r.parentNode
      n && (n.insertBefore(e, r), n.removeChild(r))
    }
  },
  Gn = function (e, r, t, i) {
    if (e.parentNode !== r) {
      for (var n = Xn.length, s = r.style, a = e.style, l; n--; )
        (l = Xn[n]), (s[l] = t[l])
      ;(s.position = t.position === 'absolute' ? 'absolute' : 'relative'),
        t.display === 'inline' && (s.display = 'inline-block'),
        (a[Mi] = a[Oi] = s.flexBasis = 'auto'),
        (s.overflow = 'visible'),
        (s.boxSizing = 'border-box'),
        (s[Rt] = Un(e, et) + we),
        (s[zt] = Un(e, Te) + we),
        (s[ie] = a[Xe] = a[Vn] = a[Nn] = '0'),
        $r(i),
        (a[Rt] = a['max' + Zt] = t[Rt]),
        (a[zt] = a['max' + Ai] = t[zt]),
        (a[ie] = t[ie]),
        e.parentNode.insertBefore(r, e),
        r.appendChild(e)
    }
  },
  kl = /([A-Z])/g,
  $r = function (e) {
    if (e) {
      var r = e.t.style,
        t = e.length,
        i = 0,
        n,
        s
      for ((e.t._gsap || F.core.getCache(e.t)).uncache = 1; i < t; i += 2)
        (s = e[i + 1]),
          (n = e[i]),
          s
            ? (r[n] = s)
            : r[n] && r.removeProperty(n.replace(kl, '-$1').toLowerCase())
    }
  },
  Vi = function (e) {
    for (var r = Ni.length, t = e.style, i = [], n = 0; n < r; n++)
      i.push(Ni[n], t[Ni[n]])
    return (i.t = e), i
  },
  Pl = function (e, r, t) {
    for (var i = [], n = e.length, s = t ? 8 : 0, a; s < n; s += 2)
      (a = e[s]), i.push(a, a in r ? r[a] : e[s + 1])
    return (i.t = e.t), i
  },
  Ui = { left: 0, top: 0 },
  za = function (e, r, t, i, n, s, a, l, u, c, _, d, f) {
    ot(e) && (e = e(l)),
      $e(e) &&
        e.substr(0, 3) === 'max' &&
        (e = d + (e.charAt(4) === '=' ? Ei('0' + e.substr(3), t) : 0))
    var p = f ? f.time() : 0,
      h,
      m,
      g
    if ((f && f.seek(0), qr(e))) a && zi(a, t, i, !0)
    else {
      ot(r) && (r = r(l))
      var S = e.split(' '),
        T,
        v,
        b,
        x
      ;(g = at(r) || $),
        (T = vt(g) || {}),
        (!T || (!T.left && !T.top)) &&
          yt(g).display === 'none' &&
          ((x = g.style.display),
          (g.style.display = 'block'),
          (T = vt(g)),
          x ? (g.style.display = x) : g.style.removeProperty('display')),
        (v = Ei(S[0], T[i.d])),
        (b = Ei(S[1] || '0', t)),
        (e = T[i.p] - u[i.p] - c + v + n - b),
        a && zi(a, b, i, t - b < 20 || (a._isStart && b > 20)),
        (t -= t - b)
    }
    if (s) {
      var w = e + t,
        P = s._isStart
      ;(h = 'scroll' + i.d2),
        zi(
          s,
          w,
          i,
          (P && w > 20) ||
            (!P && (_ ? Math.max($[h], mt[h]) : s.parentNode[h]) <= w + 1),
        ),
        _ &&
          ((u = vt(a)),
          _ && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + we))
    }
    return (
      f &&
        g &&
        ((h = vt(g)),
        f.seek(d),
        (m = vt(g)),
        (f._caScrollDist = h[i.p] - m[i.p]),
        (e = (e / f._caScrollDist) * d)),
      f && f.seek(p),
      f ? e : Math.round(e)
    )
  },
  Cl = /(?:webkit|moz|length|cssText|inset)/i,
  La = function (e, r, t, i) {
    if (e.parentNode !== r) {
      var n = e.style,
        s,
        a
      if (r === $) {
        ;(e._stOrig = n.cssText), (a = yt(e))
        for (s in a)
          !+s &&
            !Cl.test(s) &&
            a[s] &&
            typeof n[s] == 'string' &&
            s !== '0' &&
            (n[s] = a[s])
        ;(n.top = t), (n.left = i)
      } else n.cssText = e._stOrig
      ;(F.core.getCache(e).uncache = 1), r.appendChild(e)
    }
  },
  Ba = function (e, r) {
    var t = Ti(e, r),
      i = '_scroll' + r.p2,
      n,
      s,
      a = function l(u, c, _, d, f) {
        var p = l.tween,
          h = c.onComplete,
          m = {}
        return (
          p && p.kill(),
          (n = Math.round(_)),
          (c[i] = u),
          (c.modifiers = m),
          (m[i] = function (g) {
            return (
              (g = va(t())),
              g !== n && g !== s && Math.abs(g - n) > 2 && Math.abs(g - s) > 2
                ? (p.kill(), (l.tween = 0))
                : (g = _ + d * p.ratio + f * p.ratio * p.ratio),
              (s = n),
              (n = va(g))
            )
          }),
          (c.onComplete = function () {
            ;(l.tween = 0), h && h.call(p)
          }),
          (p = l.tween = F.to(e, c)),
          p
        )
      }
    return (
      (e[i] = t),
      Se(e, 'wheel', function () {
        return a.tween && a.tween.kill() && (a.tween = 0)
      }),
      a
    )
  }
et.op = Te
var H = (function () {
  function o(r, t) {
    pr ||
      o.register(F) ||
      console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
      this.init(r, t)
  }
  var e = o.prototype
  return (
    (e.init = function (t, i) {
      if (((this.progress = this.start = 0), this.vars && this.kill(1), !ya)) {
        this.update = this.refresh = this.kill = wi
        return
      }
      t = Sa($e(t) || qr(t) || t.nodeType ? { trigger: t } : t, Di)
      var n = t,
        s = n.onUpdate,
        a = n.toggleClass,
        l = n.id,
        u = n.onToggle,
        c = n.onRefresh,
        _ = n.scrub,
        d = n.trigger,
        f = n.pin,
        p = n.pinSpacing,
        h = n.invalidateOnRefresh,
        m = n.anticipatePin,
        g = n.onScrubComplete,
        S = n.onSnapComplete,
        T = n.once,
        v = n.snap,
        b = n.pinReparent,
        x = n.pinSpacer,
        w = n.containerAnimation,
        P = n.fastScrollEnd,
        k = n.preventOverlaps,
        O =
          t.horizontal || (t.containerAnimation && t.horizontal !== !1)
            ? et
            : Te,
        A = !_ && _ !== 0,
        M = at(t.scroller || X),
        V = F.core.getCache(M),
        D = mr(M),
        N =
          ('pinType' in t ? t.pinType : qt(M, 'pinType') || (D && 'fixed')) ===
          'fixed',
        L = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
        te = A && t.toggleActions.split(' '),
        De = 'markers' in t ? t.markers : Di.markers,
        tt = D ? 0 : parseFloat(yt(M)['border' + O.p2 + Zt]) || 0,
        y = this,
        Le =
          t.onRefreshInit &&
          function () {
            return t.onRefreshInit(y)
          },
        ei = yl(M, D, O),
        qe = vl(M, D),
        Ze = 0,
        oe = Ti(M, O),
        rt,
        Fe,
        qn,
        Qt,
        Pr,
        Q,
        Qe,
        lt,
        Kt,
        ut,
        Jt,
        Cr,
        pe,
        ti,
        ri,
        Wi,
        Be,
        Yi,
        ji,
        Hi,
        Or,
        bt,
        Zn,
        Mr,
        Qn,
        Xi,
        Gi,
        ii,
        qi,
        ve,
        ni,
        xt,
        $t,
        Ar,
        Dr,
        Zi,
        Qi
      if (
        ((y.media = Tr),
        (y._dir = O),
        (m *= 45),
        (y.scroller = M),
        (y.scroll = w ? w.time.bind(w) : oe),
        (Qt = oe()),
        (y.vars = t),
        (i = i || t.animation),
        'refreshPriority' in t && (ga = 1),
        (V.tweenScroll = V.tweenScroll || { top: Ba(M, Te), left: Ba(M, et) }),
        (y.tweenTo = rt = V.tweenScroll[O.p]),
        i &&
          ((i.vars.lazy = !1),
          i._initted ||
            (i.vars.immediateRender !== !1 &&
              t.immediateRender !== !1 &&
              i.render(0, !0, !0)),
          (y.animation = i.pause()),
          (i.scrollTrigger = y),
          (ni = qr(_) && _),
          ni &&
            (ve = F.to(i, {
              ease: 'power3',
              duration: ni,
              onComplete: function () {
                return g && g(y)
              },
            })),
          (ii = 0),
          l || (l = i.vars.id)),
        I.push(y),
        v &&
          ((!Bn(v) || v.push) && (v = { snapTo: v }),
          'scrollBehavior' in $.style &&
            F.set(D ? [$, mt] : M, { scrollBehavior: 'auto' }),
          (qn = ot(v.snapTo)
            ? v.snapTo
            : v.snapTo === 'labels'
            ? xl(i)
            : v.snapTo === 'labelsDirectional'
            ? wl(i)
            : v.directional !== !1
            ? function (R, B) {
                return Wn(v.snapTo)(R, B.direction)
              }
            : F.utils.snap(v.snapTo)),
          (xt = v.duration || { min: 0.1, max: 2 }),
          (xt = Bn(xt) ? vi(xt.min, xt.max) : vi(xt, xt)),
          ($t = F.delayedCall(v.delay || ni / 2 || 0.1, function () {
            if (Math.abs(y.getVelocity()) < 10 && !xi && Ze !== oe()) {
              var R = i && !A ? i.totalProgress() : y.progress,
                B = ((R - qi) / (Et() - bi)) * 1e3 || 0,
                U = F.utils.clamp(
                  -y.progress,
                  1 - y.progress,
                  (yr(B / 2) * B) / 0.185,
                ),
                W = y.progress + (v.inertia === !1 ? 0 : U),
                Ie = vi(0, 1, qn(W, y)),
                E = oe(),
                J = Math.round(Q + Ie * pe),
                G = v,
                ct = G.onStart,
                q = G.onInterrupt,
                ke = G.onComplete,
                Ke = rt.tween
              if (E <= Qe && E >= Q && J !== E) {
                if (Ke && !Ke._initted && Ke.data <= yr(J - E)) return
                v.inertia === !1 && (U = Ie - y.progress),
                  rt(
                    J,
                    {
                      duration: xt(
                        yr(
                          (Math.max(yr(W - R), yr(Ie - R)) * 0.185) /
                            B /
                            0.05 || 0,
                        ),
                      ),
                      ease: v.ease || 'power3',
                      data: yr(J - E),
                      onInterrupt: function () {
                        return $t.restart(!0) && q && q(y)
                      },
                      onComplete: function () {
                        y.update(),
                          (Ze = oe()),
                          (ii = qi = i && !A ? i.totalProgress() : y.progress),
                          S && S(y),
                          ke && ke(y)
                      },
                    },
                    E,
                    U * pe,
                    J - E - U * pe,
                  ),
                  ct && ct(y, rt.tween)
              }
            } else y.isActive && $t.restart(!0)
          }).pause())),
        l && (Yn[l] = y),
        (d = y.trigger = at(d || f)),
        (f = f === !0 ? d : at(f)),
        $e(a) && (a = { targets: d, className: a }),
        f &&
          (p === !1 ||
            p === Xe ||
            (p = !p && yt(f.parentNode).display === 'flex' ? !1 : ie),
          (y.pin = f),
          t.force3D !== !1 && F.set(f, { force3D: !0 }),
          (Fe = F.core.getCache(f)),
          Fe.spacer
            ? (ti = Fe.pinState)
            : (x &&
                ((x = at(x)),
                x && !x.nodeType && (x = x.current || x.nativeElement),
                (Fe.spacerIsNative = !!x),
                x && (Fe.spacerState = Vi(x))),
              (Fe.spacer = Be = x || ye.createElement('div')),
              Be.classList.add('pin-spacer'),
              l && Be.classList.add('pin-spacer-' + l),
              (Fe.pinState = ti = Vi(f))),
          (y.spacer = Be = Fe.spacer),
          (Gi = yt(f)),
          (Zn = Gi[p + O.os2]),
          (ji = F.getProperty(f)),
          (Hi = F.quickSetter(f, O.a, we)),
          Gn(f, Be, Gi),
          (Wi = Vi(f))),
        De &&
          ((Cr = Bn(De) ? Sa(De, Ca) : Ca),
          (ut = Ri('scroller-start', l, M, O, Cr, 0)),
          (Jt = Ri('scroller-end', l, M, O, Cr, 0, ut)),
          (Yi = ut['offset' + O.op.d2]),
          (lt = Ri('start', l, M, O, Cr, Yi, 0, w)),
          (Kt = Ri('end', l, M, O, Cr, Yi, 0, w)),
          w && (Qi = F.quickSetter([lt, Kt], O.a, we)),
          !N &&
            !(Xt.length && qt(M, 'fixedMarkers') === !0) &&
            (bl(D ? $ : M),
            F.set([ut, Jt], { force3D: !0 }),
            (Qn = F.quickSetter(ut, O.a, we)),
            (Xi = F.quickSetter(Jt, O.a, we)))),
        w)
      ) {
        var Kn = w.vars.onUpdate,
          Ia = w.vars.onUpdateParams
        w.eventCallback('onUpdate', function () {
          y.update(0, 0, 1), Kn && Kn.apply(Ia || [])
        })
      }
      ;(y.previous = function () {
        return I[I.indexOf(y) - 1]
      }),
        (y.next = function () {
          return I[I.indexOf(y) + 1]
        }),
        (y.revert = function (R) {
          var B = R !== !1 || !y.enabled,
            U = be
          B !== y.isReverted &&
            (B &&
              (y.scroll.rec || (y.scroll.rec = oe()),
              (Dr = Math.max(oe(), y.scroll.rec || 0)),
              (Ar = y.progress),
              (Zi = i && i.progress())),
            lt &&
              [lt, Kt, ut, Jt].forEach(function (W) {
                return (W.style.display = B ? 'none' : 'block')
              }),
            B && (be = 1),
            y.update(B),
            (be = U),
            f &&
              (B ? Sl(f, Be, ti) : (!b || !y.isActive) && Gn(f, Be, yt(f), Mr)),
            (y.isReverted = B))
        }),
        (y.refresh = function (R, B) {
          if (!((be || !y.enabled) && !B)) {
            if (f && R && Je) {
              Se(o, 'scrollEnd', Da)
              return
            }
            ;(be = 1),
              ve && ve.pause(),
              h && i && i.time(-0.01, !0).invalidate(),
              y.isReverted || y.revert()
            for (
              var U = ei(),
                W = qe(),
                Ie = w ? w.duration() : Si(M, O),
                E = 0,
                J = 0,
                G = t.end,
                ct = t.endTrigger || d,
                q = t.start || (t.start === 0 || !d ? 0 : f ? '0 0' : '0 100%'),
                ke = t.pinnedContainer && at(t.pinnedContainer),
                Ke = (d && Math.max(0, I.indexOf(y))) || 0,
                ne = Ke,
                se,
                he,
                er,
                Lt,
                ae,
                le,
                ft,
                Ki,
                Jn,
                Fr;
              ne--;

            )
              (le = I[ne]),
                le.end || le.refresh(0, 1) || (be = 1),
                (ft = le.pin),
                ft &&
                  (ft === d || ft === f) &&
                  !le.isReverted &&
                  (Fr || (Fr = []), Fr.unshift(le), le.revert())
            for (
              ot(q) && (q = q(y)),
                Q =
                  za(q, d, U, O, oe(), lt, ut, y, W, tt, N, Ie, w) ||
                  (f ? -0.001 : 0),
                ot(G) && (G = G(y)),
                $e(G) &&
                  !G.indexOf('+=') &&
                  (~G.indexOf(' ')
                    ? (G = ($e(q) ? q.split(' ')[0] : '') + G)
                    : ((E = Ei(G.substr(2), U)),
                      (G = $e(q) ? q : Q + E),
                      (ct = d))),
                Qe =
                  Math.max(
                    Q,
                    za(
                      G || (ct ? '100% 0' : Ie),
                      ct,
                      U,
                      O,
                      oe() + E,
                      Kt,
                      Jt,
                      y,
                      W,
                      tt,
                      N,
                      Ie,
                      w,
                    ),
                  ) || -0.001,
                pe = Qe - Q || ((Q -= 0.01) && 0.001),
                E = 0,
                ne = Ke;
              ne--;

            )
              (le = I[ne]),
                (ft = le.pin),
                ft &&
                  le.start - le._pinPush < Q &&
                  !w &&
                  ((se = le.end - le.start),
                  (ft === d || ft === ke) &&
                    !qr(q) &&
                    (E += se * (1 - le.progress)),
                  ft === f && (J += se))
            if (
              ((Q += E),
              (Qe += E),
              (y._pinPush = J),
              lt &&
                E &&
                ((se = {}),
                (se[O.a] = '+=' + E),
                ke && (se[O.p] = '-=' + oe()),
                F.set([lt, Kt], se)),
              f)
            )
              (se = yt(f)),
                (Lt = O === Te),
                (er = oe()),
                (Or = parseFloat(ji(O.a)) + J),
                !Ie &&
                  Qe > 1 &&
                  ((D ? $ : M).style['overflow-' + O.a] = 'scroll'),
                Gn(f, Be, se),
                (Wi = Vi(f)),
                (he = vt(f, !0)),
                (Ki = N && Ti(M, Lt ? et : Te)()),
                p &&
                  ((Mr = [p + O.os2, pe + J + we]),
                  (Mr.t = Be),
                  (ne = p === ie ? Un(f, O) + pe + J : 0),
                  ne && Mr.push(O.d, ne + we),
                  $r(Mr),
                  N && oe(Dr)),
                N &&
                  ((ae = {
                    top: he.top + (Lt ? er - Q : Ki) + we,
                    left: he.left + (Lt ? Ki : er - Q) + we,
                    boxSizing: 'border-box',
                    position: 'fixed',
                  }),
                  (ae[Rt] = ae['max' + Zt] = Math.ceil(he.width) + we),
                  (ae[zt] = ae['max' + Ai] = Math.ceil(he.height) + we),
                  (ae[Xe] = ae[Xe + xr] = ae[Xe + vr] = ae[Xe + wr] = ae[
                    Xe + br
                  ] = '0'),
                  (ae[ie] = se[ie]),
                  (ae[ie + xr] = se[ie + xr]),
                  (ae[ie + vr] = se[ie + vr]),
                  (ae[ie + wr] = se[ie + wr]),
                  (ae[ie + br] = se[ie + br]),
                  (ri = Pl(ti, ae, b))),
                i
                  ? ((Jn = i._initted),
                    En(1),
                    i.render(i.duration(), !0, !0),
                    (bt = ji(O.a) - Or + pe + J),
                    pe !== bt && ri.splice(ri.length - 2, 2),
                    i.render(0, !0, !0),
                    Jn || i.invalidate(),
                    En(0))
                  : (bt = pe)
            else if (d && oe() && !w)
              for (he = d.parentNode; he && he !== $; )
                he._pinOffset && ((Q -= he._pinOffset), (Qe -= he._pinOffset)),
                  (he = he.parentNode)
            Fr &&
              Fr.forEach(function (Na) {
                return Na.revert(!1)
              }),
              (y.start = Q),
              (y.end = Qe),
              (Qt = Pr = oe()),
              w || (Qt < Dr && oe(Dr), (y.scroll.rec = 0)),
              y.revert(!1),
              (be = 0),
              i &&
                A &&
                i._initted &&
                i.progress() !== Zi &&
                i.progress(Zi, !0).render(i.time(), !0, !0),
              (Ar !== y.progress || w) &&
                (i && !A && i.totalProgress(Ar, !0),
                (y.progress = Ar),
                y.update(0, 0, 1)),
              f && p && (Be._pinOffset = Math.round(y.progress * bt)),
              c && c(y)
          }
        }),
        (y.getVelocity = function () {
          return ((oe() - Pr) / (Et() - bi)) * 1e3 || 0
        }),
        (y.endAnimation = function () {
          Zr(y.callbackAnimation),
            i &&
              (ve
                ? ve.progress(1)
                : i.paused()
                ? A || Zr(i, y.direction < 0, 1)
                : Zr(i, i.reversed()))
        }),
        (y.labelToScroll = function (R) {
          return (
            (i &&
              i.labels &&
              (Q || y.refresh() || Q) + (i.labels[R] / i.duration()) * pe) ||
            0
          )
        }),
        (y.getTrailing = function (R) {
          var B = I.indexOf(y),
            U = y.direction > 0 ? I.slice(0, B).reverse() : I.slice(B + 1)
          return $e(R)
            ? U.filter(function (W) {
                return W.vars.preventOverlaps === R
              })
            : U
        }),
        (y.update = function (R, B, U) {
          if (!(w && !U && !R)) {
            var W = y.scroll(),
              Ie = R ? 0 : (W - Q) / pe,
              E = Ie < 0 ? 0 : Ie > 1 ? 1 : Ie || 0,
              J = y.progress,
              G,
              ct,
              q,
              ke,
              Ke,
              ne,
              se,
              he
            if (
              (B &&
                ((Pr = Qt),
                (Qt = w ? oe() : W),
                v && ((qi = ii), (ii = i && !A ? i.totalProgress() : E))),
              m &&
                !E &&
                f &&
                !be &&
                !Gr &&
                Je &&
                Q < W + ((W - Pr) / (Et() - bi)) * m &&
                (E = 1e-4),
              E !== J && y.enabled)
            ) {
              if (
                ((G = y.isActive = !!E && E < 1),
                (ct = !!J && J < 1),
                (ne = G !== ct),
                (Ke = ne || !!E != !!J),
                (y.direction = E > J ? 1 : -1),
                (y.progress = E),
                Ke &&
                  !be &&
                  ((q = E && !J ? 0 : E === 1 ? 1 : J === 1 ? 2 : 3),
                  A &&
                    ((ke = (!ne && te[q + 1] !== 'none' && te[q + 1]) || te[q]),
                    (he =
                      i && (ke === 'complete' || ke === 'reset' || ke in i)))),
                k &&
                  ne &&
                  (he || _ || !i) &&
                  (ot(k)
                    ? k(y)
                    : y.getTrailing(k).forEach(function (le) {
                        return le.endAnimation()
                      })),
                A ||
                  (ve && !be && !Gr
                    ? ((ve.vars.totalProgress = E), ve.invalidate().restart())
                    : i && i.totalProgress(E, !!be)),
                f)
              ) {
                if ((R && p && (Be.style[p + O.os2] = Zn), !N)) Hi(Or + bt * E)
                else if (Ke) {
                  if (
                    ((se = !R && E > J && Qe + 1 > W && W + 1 >= Si(M, O)), b)
                  )
                    if (!R && (G || se)) {
                      var er = vt(f, !0),
                        Lt = W - Q
                      La(
                        f,
                        $,
                        er.top + (O === Te ? Lt : 0) + we,
                        er.left + (O === Te ? 0 : Lt) + we,
                      )
                    } else La(f, Be)
                  $r(G || se ? ri : Wi),
                    (bt !== pe && E < 1 && G) ||
                      Hi(Or + (E === 1 && !se ? bt : 0))
                }
              }
              v && !rt.tween && !be && !Gr && $t.restart(!0),
                a &&
                  (ne || (T && E && (E < 1 || !Rn))) &&
                  Xr(a.targets).forEach(function (le) {
                    return le.classList[G || T ? 'add' : 'remove'](a.className)
                  }),
                s && !A && !R && s(y),
                Ke && !be
                  ? (A &&
                      (he &&
                        (ke === 'complete'
                          ? i.pause().totalProgress(1)
                          : ke === 'reset'
                          ? i.restart(!0).pause()
                          : ke === 'restart'
                          ? i.restart(!0)
                          : i[ke]()),
                      s && s(y)),
                    (ne || !Rn) &&
                      (u && ne && In(y, u),
                      L[q] && In(y, L[q]),
                      T && (E === 1 ? y.kill(!1, 1) : (L[q] = 0)),
                      ne || ((q = E === 1 ? 1 : 3), L[q] && In(y, L[q]))),
                    P &&
                      !G &&
                      Math.abs(y.getVelocity()) > (qr(P) ? P : 2500) &&
                      (Zr(y.callbackAnimation),
                      ve ? ve.progress(1) : Zr(i, !E, 1)))
                  : A && s && !be && s(y)
            }
            if (Xi) {
              var ae = w ? (W / w.duration()) * (w._caScrollDist || 0) : W
              Qn(ae + (ut._isFlipped ? 1 : 0)), Xi(ae)
            }
            Qi && Qi((-W / w.duration()) * (w._caScrollDist || 0))
          }
        }),
        (y.enable = function (R, B) {
          y.enabled ||
            ((y.enabled = !0),
            Se(M, 'resize', Kr),
            Se(M, 'scroll', Li),
            Le && Se(o, 'refreshInit', Le),
            R !== !1 && ((y.progress = Ar = 0), (Qt = Pr = Ze = oe())),
            B !== !1 && y.refresh())
        }),
        (y.getTween = function (R) {
          return R && rt ? rt.tween : ve
        }),
        (y.setPositions = function (R, B) {
          f && ((Or += R - Q), (bt += B - R - pe)),
            (y.start = Q = R),
            (y.end = Qe = B),
            (pe = B - R),
            y.update()
        }),
        (y.disable = function (R, B) {
          if (
            y.enabled &&
            (R !== !1 && y.revert(),
            (y.enabled = y.isActive = !1),
            B || (ve && ve.pause()),
            (Dr = 0),
            Fe && (Fe.uncache = 1),
            Le && Qr(o, 'refreshInit', Le),
            $t && ($t.pause(), rt.tween && rt.tween.kill() && (rt.tween = 0)),
            !D)
          ) {
            for (var U = I.length; U--; )
              if (I[U].scroller === M && I[U] !== y) return
            Qr(M, 'resize', Kr), Qr(M, 'scroll', Li)
          }
        }),
        (y.kill = function (R, B) {
          y.disable(R, B), ve && ve.kill(), l && delete Yn[l]
          var U = I.indexOf(y)
          U >= 0 && I.splice(U, 1),
            U === xe && Ii > 0 && xe--,
            (U = 0),
            I.forEach(function (W) {
              return W.scroller === y.scroller && (U = 1)
            }),
            U || (y.scroll.rec = 0),
            i && ((i.scrollTrigger = null), R && i.render(-1), B || i.kill()),
            lt &&
              [lt, Kt, ut, Jt].forEach(function (W) {
                return W.parentNode && W.parentNode.removeChild(W)
              }),
            f &&
              (Fe && (Fe.uncache = 1),
              (U = 0),
              I.forEach(function (W) {
                return W.pin === f && U++
              }),
              U || (Fe.spacer = 0))
        }),
        y.enable(!1, !1),
        !i || !i.add || pe
          ? y.refresh()
          : F.delayedCall(0.01, function () {
              return Q || Qe || y.refresh()
            }) &&
            (pe = 0.01) &&
            (Q = Qe = 0)
    }),
    (o.register = function (t) {
      if (
        !pr &&
        ((F = t || xa()),
        ba() &&
          window.document &&
          ((X = window),
          (ye = document),
          (mt = ye.documentElement),
          ($ = ye.body)),
        F &&
          ((Xr = F.utils.toArray),
          (vi = F.utils.clamp),
          (En = F.core.suppressOverwrites || wi),
          F.core.globals('ScrollTrigger', o),
          $))
      ) {
        Se(X, 'wheel', Li), (da = [X, ye, mt, $]), Se(ye, 'scroll', Li)
        var i = $.style,
          n = i.borderTopStyle,
          s
        ;(i.borderTopStyle = 'solid'),
          (s = vt($)),
          (Te.m = Math.round(s.top + Te.sc()) || 0),
          (et.m = Math.round(s.left + et.sc()) || 0),
          n ? (i.borderTopStyle = n) : i.removeProperty('border-top-style'),
          (Dn = setInterval(Oa, 200)),
          F.delayedCall(0.5, function () {
            return (Gr = 0)
          }),
          Se(ye, 'touchcancel', wi),
          Se($, 'touchstart', wi),
          Pa(Se, ye, 'pointerdown,touchstart,mousedown', function () {
            return (xi = 1)
          }),
          Pa(Se, ye, 'pointerup,touchend,mouseup', function () {
            return (xi = 0)
          }),
          (Fn = F.utils.checkPrefix('transform')),
          Ni.push(Fn),
          (pr = Et()),
          (An = F.delayedCall(0.2, kr).pause()),
          (gr = [
            ye,
            'visibilitychange',
            function () {
              var a = X.innerWidth,
                l = X.innerHeight
              ye.hidden ? ((_a = a), (pa = l)) : (_a !== a || pa !== l) && Kr()
            },
            ye,
            'DOMContentLoaded',
            kr,
            X,
            'load',
            function () {
              return Je || kr()
            },
            X,
            'resize',
            Kr,
          ]),
          Ln(Se)
      }
      return pr
    }),
    (o.defaults = function (t) {
      if (t) for (var i in t) Di[i] = t[i]
      return Di
    }),
    (o.kill = function () {
      ;(ya = 0),
        I.slice(0).forEach(function (t) {
          return t.kill(1)
        })
    }),
    (o.config = function (t) {
      'limitCallbacks' in t && (Rn = !!t.limitCallbacks)
      var i = t.syncInterval
      ;(i && clearInterval(Dn)) || ((Dn = i) && setInterval(Oa, i)),
        'autoRefreshEvents' in t &&
          (Ln(Qr) || Ln(Se, t.autoRefreshEvents || 'none'),
          (ma = (t.autoRefreshEvents + '').indexOf('resize') === -1))
    }),
    (o.scrollerProxy = function (t, i) {
      var n = at(t),
        s = Gt.indexOf(n),
        a = mr(n)
      ~s && Gt.splice(s, a ? 6 : 2),
        i && (a ? Xt.unshift(X, i, $, i, mt, i) : Xt.unshift(n, i))
    }),
    (o.matchMedia = function (t) {
      var i, n, s, a, l
      for (n in t)
        (s = K.indexOf(n)),
          (a = t[n]),
          (Tr = n),
          n === 'all'
            ? a()
            : ((i = X.matchMedia(n)),
              i &&
                (i.matches && (l = a()),
                ~s
                  ? ((K[s + 1] = Ta(K[s + 1], a)), (K[s + 2] = Ta(K[s + 2], l)))
                  : ((s = K.length),
                    K.push(n, a, l),
                    i.addListener
                      ? i.addListener(Aa)
                      : i.addEventListener('change', Aa)),
                (K[s + 3] = i.matches))),
          (Tr = 0)
      return K
    }),
    (o.clearMatchMedia = function (t) {
      t || (K.length = 0), (t = K.indexOf(t)), t >= 0 && K.splice(t, 4)
    }),
    (o.isInViewport = function (t, i, n) {
      var s = ($e(t) ? at(t) : t).getBoundingClientRect(),
        a = s[n ? Rt : zt] * i || 0
      return n
        ? s.right - a > 0 && s.left + a < X.innerWidth
        : s.bottom - a > 0 && s.top + a < X.innerHeight
    }),
    (o.positionInViewport = function (t, i, n) {
      $e(t) && (t = at(t))
      var s = t.getBoundingClientRect(),
        a = s[n ? Rt : zt],
        l =
          i == null
            ? a / 2
            : i in Fi
            ? Fi[i] * a
            : ~i.indexOf('%')
            ? (parseFloat(i) * a) / 100
            : parseFloat(i) || 0
      return n ? (s.left + l) / X.innerWidth : (s.top + l) / X.innerHeight
    }),
    o
  )
})()
H.version = '3.9.1'
H.saveStyles = function (o) {
  return o
    ? Xr(o).forEach(function (e) {
        if (e && e.style) {
          var r = Ge.indexOf(e)
          r >= 0 && Ge.splice(r, 5),
            Ge.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute('transform'),
              F.core.getCache(e),
              Tr,
            )
        }
      })
    : Ge
}
H.revert = function (o, e) {
  return Bi(!o, e)
}
H.create = function (o, e) {
  return new H(o, e)
}
H.refresh = function (o) {
  return o ? Kr() : (pr || H.register()) && kr(!0)
}
H.update = Hn
H.clearScrollMemory = Ea
H.maxScroll = function (o, e) {
  return Si(o, e ? et : Te)
}
H.getScrollFunc = function (o, e) {
  return Ti(at(o), e ? et : Te)
}
H.getById = function (o) {
  return Yn[o]
}
H.getAll = function () {
  return I.slice(0)
}
H.isScrolling = function () {
  return !!Je
}
H.snapDirectional = Wn
H.addEventListener = function (o, e) {
  var r = Jr[o] || (Jr[o] = [])
  ~r.indexOf(e) || r.push(e)
}
H.removeEventListener = function (o, e) {
  var r = Jr[o],
    t = r && r.indexOf(e)
  t >= 0 && r.splice(t, 1)
}
H.batch = function (o, e) {
  var r = [],
    t = {},
    i = e.interval || 0.016,
    n = e.batchMax || 1e9,
    s = function (u, c) {
      var _ = [],
        d = [],
        f = F.delayedCall(i, function () {
          c(_, d), (_ = []), (d = [])
        }).pause()
      return function (p) {
        _.length || f.restart(!0),
          _.push(p.trigger),
          d.push(p),
          n <= _.length && f.progress(1)
      }
    },
    a
  for (a in e)
    t[a] =
      a.substr(0, 2) === 'on' && ot(e[a]) && a !== 'onRefreshInit'
        ? s(a, e[a])
        : e[a]
  return (
    ot(n) &&
      ((n = n()),
      Se(H, 'refresh', function () {
        return (n = e.batchMax())
      })),
    Xr(o).forEach(function (l) {
      var u = {}
      for (a in t) u[a] = t[a]
      ;(u.trigger = l), r.push(H.create(u))
    }),
    r
  )
}
H.sort = function (o) {
  return I.sort(
    o ||
      function (e, r) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (r.start + (r.vars.refreshPriority || 0) * -1e6)
        )
      },
  )
}
xa() && F.registerPlugin(H)
var Ol = '/_nuxt/assets/twitter.7fd98342.svg',
  Ml = '/_nuxt/assets/telegram.c804ba13.svg',
  Al = '/_nuxt/assets/discord.72699eed.svg',
  Dl = '/_nuxt/assets/chart.f7fd1ba6.svg',
  Fl = '/_nuxt/assets/docs.2a4e7217.svg',
  El = '/_nuxt/assets/neptune.1906f5b7.png',
  Rl = '/_nuxt/assets/percentage.5668c6af.svg',
  zl = '/_nuxt/assets/check.3b5eb83b.svg',
  Ll = '/_nuxt/assets/vote.d2024d47.svg',
  Bl = '/_nuxt/assets/moon.1850eb55.png',
  Il = '/_nuxt/assets/qi.eab58250.svg',
  Nl = '/_nuxt/assets/yfi.833feb52.svg',
  Vl = '/_nuxt/assets/chess.e78074ea.svg',
  Ul = '/_nuxt/assets/xvs.50b8c1e5.svg',
  Wl = '/_nuxt/assets/star.5d94e7ae.svg',
  Yl = '/_nuxt/assets/risk.27ba5bc7.svg',
  jl = '/_nuxt/assets/zen.3a9cce36.svg',
  Hl = '/_nuxt/assets/venus.af795289.png',
  Xl = '/_nuxt/assets/pte.c1553a50.svg',
  Gl = '/_nuxt/assets/space.85da27fd.svg',
  ql = '/_nuxt/assets/bridge.d690e91c.svg',
  Zl = '/_nuxt/assets/earth.f131d5da.png',
  Ql = '/_nuxt/assets/treesorg.59886bfb.svg',
  Kl = '/_nuxt/assets/waterproject.1c5ceac8.svg',
  Jl = '/_nuxt/assets/partners.9565a5dc.svg',
  $l = '/_nuxt/assets/transparency.0fe36f24.svg',
  eu = '/_nuxt/assets/tree.fff20fab.svg'
const ee = (o) => (Wa('data-v-1b50aac0'), (o = o()), Ya(), o),
  tu = { class: 'row justify-content-center', ref: 'topWeb' },
  ru = {
    class: 'welcome pe-none user-select-none',
    ref: 'backgroundFrame',
    src:
      'https://iframe.videodelivery.net/0fc585fd79b176a48f45e75e514c31e7?muted=true&preload=false&loop=true&autoplay=false&poster=https%3A%2F%2Fvideodelivery.net%2F0fc585fd79b176a48f45e75e514c31e7%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false',
    allow: 'accelerometer; gyroscope; autoplay; encrypted-media;',
    allowfullscreen: 'false',
  },
  iu = { class: 'u-container pb-md-5 mw-100', ref: 'megaHeader' },
  nu = { class: 'u-container-background px-3 py-2 pb-4' },
  su = { class: 'px-3' },
  au = ee(() =>
    C(
      'h1',
      { class: 'user-select-none mt-2 mt-md-0' },
      'Explore A Universe Of Possibilities',
      -1,
    ),
  ),
  ou = { class: 'descr' },
  lu = ee(() =>
    C(
      'img',
      { class: 'me-3', alt: 'Twitter', src: Ol, height: '22', width: '22' },
      null,
      -1,
    ),
  ),
  uu = ir('Twitter'),
  cu = ee(() =>
    C(
      'img',
      { class: 'me-3', alt: 'Telegram', src: Ml, height: '22', width: '22' },
      null,
      -1,
    ),
  ),
  fu = ir('Telegram'),
  hu = ee(() =>
    C(
      'img',
      { class: 'me-3', alt: 'Discord', src: Al, height: '22', width: '22' },
      null,
      -1,
    ),
  ),
  du = ir('Discord'),
  _u = ee(() =>
    C(
      'img',
      { class: 'me-3', alt: 'Trading', src: Dl, height: '22', width: '22' },
      null,
      -1,
    ),
  ),
  pu = ir('Chart'),
  gu = ee(() =>
    C(
      'img',
      {
        class: 'me-3',
        alt: 'Documentation',
        src: Fl,
        height: '22',
        width: '22',
      },
      null,
      -1,
    ),
  ),
  mu = ir('Whitepaper'),
  yu = { class: 'pe-none' },
  vu = ['srcset'],
  bu = ee(() =>
    C(
      'source',
      {
        srcset: '/_nuxt/pages/~/assets/planets/neptune.png',
        type: 'image/png',
      },
      null,
      -1,
    ),
  ),
  xu = ee(() =>
    C(
      'img',
      {
        class: 'pe-none',
        alt: 'Neptune',
        src: El,
        width: '320',
        height: '320',
      },
      null,
      -1,
    ),
  ),
  wu = si(
    '<div class="u-container-background py-4" data-v-1b50aac0><div class="px-4 my-4" data-depth="0.7" data-v-1b50aac0><h1 class="user-select-none mb-3 w-40" data-v-1b50aac0>Earn Super Yield Up To\xA0<span data-v-1b50aac0>1,533% APR</span></h1><p class="descr" data-v-1b50aac0>A unique protocol allows you to send your coins to the black hole to produce forever-lasting yield NFTs planets. You can then claim or compound them for extra bonuses.</p></div><div class="row p-0 m-0" data-v-1b50aac0><div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Percentage" src="' +
      Rl +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>1,095%+ APR</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>Create your Planet starting with as little as 42,000 UNIV to earn lifetime high-yield UNIV token rewards currently estimated at 3% UNIV per day.</p></div><div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Moon" src="' +
      zl +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>No automated selling pressure</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>Unlike other DaaS which sells fees automatically every minute to send to their treasury, effectively adding enormous sell pressure for the bulls, we don\u2019t. Once in a while, our contracts add liquidity and we borrow it only when needed and possible. This results in lower gas fees as well.</p></div><div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0" data-v-1b50aac0><img class="me-3 user-select-none" alt="Vote" src="' +
      Ll +
      '" height="48" width="48" data-v-1b50aac0>Voting power</h6></div></section><p class="p-3 m-0" data-v-1b50aac0>In the future, the total amount of coins you lock in the ecosystem will give you the ability to shape the future of the project and much more.</p></div></div></div>',
    1,
  ),
  Tu = [wu],
  Su = { class: 'pe-none' },
  ku = ['srcset'],
  Pu = ee(() =>
    C(
      'source',
      { srcset: '/_nuxt/pages/~/assets/planets/moon.png', type: 'image/png' },
      null,
      -1,
    ),
  ),
  Cu = ee(() =>
    C(
      'img',
      { class: 'pe-none', alt: 'Moon', src: Bl, width: '320', height: '320' },
      null,
      -1,
    ),
  ),
  Ou = { class: 'u-container-background py-4' },
  Mu = { class: 'px-4 my-4', 'data-depth': '0.7' },
  Au = ee(() =>
    C(
      'h1',
      { class: 'user-select-none mb-3' },
      'Get Exposure From Cross-Chain Protocols',
      -1,
    ),
  ),
  Du = { class: 'descr' },
  Fu = ee(() =>
    C(
      'small',
      null,
      [
        ir('Supported protocols:'),
        C('img', {
          class: 'ms-2 user-select-none',
          alt: 'BenQi',
          src: Il,
          height: '32',
          width: '32',
        }),
        C('img', {
          class: 'ms-2 user-select-none',
          alt: 'Yearn Finance',
          src: Nl,
          height: '32',
          width: '32',
        }),
        C('img', {
          class: 'ms-2 user-select-none',
          alt: 'Tranchess',
          src: Vl,
          height: '32',
          width: '32',
        }),
        C('img', {
          class: 'ms-2 user-select-none',
          alt: 'Venus',
          src: Ul,
          height: '32',
          width: '32',
        }),
      ],
      -1,
    ),
  ),
  Eu = { class: 'row p-0 m-0' },
  Ru = si(
    '<div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Star" src="' +
      Wl +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>Yield Protocol rewards</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>We believe that DeFi should empower people rather than private investment funds. So we made a public investment fund for the people where we bring to them many DeFi high-yield protocols rewards.</p></div>',
    1,
  ),
  zu = { class: 'u-item col-12 col-lg-4 p-md-0' },
  Lu = ee(() =>
    C(
      'section',
      { class: 'details' },
      [
        C('div', { class: 'row details-header m-0 p-0' }, [
          C('h6', { class: 'px-3 py-3 m-0 col d-flex align-items-center' }, [
            C('img', {
              class: 'me-3 user-select-none',
              alt: 'Risk',
              src: Yl,
              height: '48',
              width: '48',
            }),
            C('span', null, 'Managed risk'),
          ]),
        ]),
      ],
      -1,
    ),
  ),
  Bu = { class: 'p-3 m-0' },
  Iu = { class: 'u-item col-12 col-lg-4 p-md-0' },
  Nu = ee(() =>
    C(
      'section',
      { class: 'details' },
      [
        C('div', { class: 'row details-header m-0 p-0' }, [
          C('h6', { class: 'px-3 py-3 m-0' }, [
            C('img', {
              class: 'me-3 user-select-none',
              alt: 'Zen',
              src: jl,
              height: '48',
              width: '48',
            }),
            C('span', null, 'Stay Zen'),
          ]),
        ]),
      ],
      -1,
    ),
  ),
  Vu = { class: 'p-3 m-0' },
  Uu = { class: 'pe-none' },
  Wu = ['srcset'],
  Yu = ee(() =>
    C(
      'source',
      { srcset: '/_nuxt/pages/~/assets/planets/venus.png', type: 'image/png' },
      null,
      -1,
    ),
  ),
  ju = ee(() =>
    C(
      'img',
      { class: 'pe-none', alt: 'Venus', src: Hl, width: '320', height: '320' },
      null,
      -1,
    ),
  ),
  Hu = { class: 'u-container-background py-4' },
  Xu = { class: 'px-4 my-4', 'data-depth': '0.7' },
  Gu = ee(() =>
    C(
      'b',
      { class: 'soon user-select-none px-2 py-1 mb-3' },
      'Coming soon',
      -1,
    ),
  ),
  qu = { class: 'user-select-none mb-3' },
  Zu = ee(() =>
    C(
      'p',
      { class: 'descr' },
      'Exclusive features that will bring even more utility and revenues to Universe and its community are coming soon. Are you ready?',
      -1,
    ),
  ),
  Qu = { class: 'row p-0 m-0' },
  Ku = { class: 'u-item col-12 col-lg-4 p-md-0' },
  Ju = ee(() =>
    C(
      'section',
      { class: 'details' },
      [
        C('div', { class: 'row details-header m-0 p-0' }, [
          C('h6', { class: 'px-3 py-3 m-0 col d-flex align-items-center' }, [
            C('img', {
              class: 'me-3 user-select-none',
              alt: 'Star',
              src: Xl,
              height: '48',
              width: '48',
            }),
            C('span', null, 'Play-to-Earn'),
          ]),
        ]),
      ],
      -1,
    ),
  ),
  $u = { class: 'p-3 m-0' },
  ec = si(
    '<div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Risk" src="' +
      Gl +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>Buy a Space in the Space</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>You will be able to get and trade plots of lands in space to expose your ever-growing planets to everyone.</p></div><div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Zen" src="' +
      ql +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>Bridge to the Multiverse</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>An interconnected Bridge will allow you to move your planets to other blockchains such as Ethereum and the Binance Smart Chain.</p></div>',
    2,
  ),
  tc = {
    class: 'u-wrapper col-12 col-md-10 row justify-content-center',
    id: 'earth',
  },
  rc = { class: 'pe-none' },
  ic = ['srcset'],
  nc = ee(() =>
    C(
      'source',
      { srcset: '/_nuxt/pages/~/assets/planets/earth.png', type: 'image/png' },
      null,
      -1,
    ),
  ),
  sc = ee(() =>
    C(
      'img',
      { class: 'pe-none', alt: 'Earth', src: Zl, width: '320', height: '320' },
      null,
      -1,
    ),
  ),
  ac = si(
    '<div class="u-container-background py-4" data-v-1b50aac0><div class="px-4 my-4" data-depth="0.7" data-v-1b50aac0><h1 class="user-select-none mb-3" data-v-1b50aac0>Make Crypto Green Again</h1><p class="descr" data-v-1b50aac0>As you earn yield, our unique Earth protocol automatically makes the planet better for you. A small fee funds donations which help make a real difference. We aim to make the Avalanche network Co2-Negative by Q1 2023.</p><small data-v-1b50aac0>Supported charities:<img class="ms-2 user-select-none" alt="Trees.org" src="' +
      Ql +
      '" height="32" width="74" data-v-1b50aac0><img class="ms-3 user-select-none" alt="The Water Project" src="' +
      Kl +
      '" height="32" width="73" data-v-1b50aac0></small></div><div class="row p-0 m-0" data-v-1b50aac0><div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Partners" src="' +
      Jl +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>Amazing Partners</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>We work with partners of various initiatives to make the earth and humans live better. We work exclusively with partners that accept crypto as a means of payment so we can smoothly send them donations seamlessly on-chain and transparently. We keep expanding our list of partners so stay tuned!</p></div><div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Transparency" src="' +
      $l +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>Transparency</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>All our donations are made every week. For transparency purposes, we publish all invoices made to our partners.</p></div><div class="u-item col-12 col-lg-4 p-md-0" data-v-1b50aac0><section class="details" data-v-1b50aac0><div class="row details-header m-0 p-0" data-v-1b50aac0><h6 class="px-3 py-3 m-0 col d-flex align-items-center" data-v-1b50aac0><img class="me-3 user-select-none" alt="Tree" src="' +
      eu +
      '" height="48" width="48" data-v-1b50aac0><span data-v-1b50aac0>Environmentally Friendly</span></h6></div></section><p class="p-3 m-0" data-v-1b50aac0>We take the environment very seriously. This is why we have chosen Avalanche as PoS uses 99% less energy than PoW. Our web infrastructure and contracts are optimized to use less energy and bandwidth as well.</p></div></div></div>',
    1,
  ),
  oc = [ac]
function lc(o, e, r, t, i, n) {
  const s = Ja,
    a = $a
  return (
    ja(),
    Va('div', null, [
      C(
        'main',
        tu,
        [
          C('iframe', ru, null, 512),
          C(
            'iframe',
            {
              class: Ua([
                'background pe-none user-select-none',
                { hidden: t.hasIntroFinished },
              ]),
              ref: 'introFrame',
              src:
                'https://iframe.videodelivery.net/b654c7711a801463389ebf15515f88e6?muted=true&preload=true&autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2Fb654c7711a801463389ebf15515f88e6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false&primaryColor=#fff',
              allow: 'accelerometer; gyroscope; autoplay; encrypted-media;',
              allowfullscreen: 'false',
            },
            null,
            2,
          ),
          C(
            'div',
            {
              class: 'hero d-flex align-items-end col-12 col-md-10 p-0 mb-0',
              ref: t.neptuneHero.trigger,
            },
            [
              C(
                'div',
                iu,
                [
                  C('div', nu, [
                    wt(s, { class: 'px-4', theme: 'dark' }),
                    C('div', su, [
                      C('div', null, [
                        au,
                        C('p', ou, tr(t.appDescription), 1),
                        wt(
                          t.CButtonGroup,
                          {
                            class:
                              'py-2 px-2 row d-flex justify-content-center mt-2',
                            role: 'group',
                            'aria-label': 'Social Links',
                          },
                          {
                            default: rr(() => [
                              wt(
                                t.CButton,
                                {
                                  class:
                                    'col-6 col-md-auto d-flex align-items-center justify-content-center btn-hero-wrapper',
                                  component: 'a',
                                  rel: 'noopener nofollow',
                                  target: '_blank',
                                  href: t.twitterLink,
                                },
                                { default: rr(() => [lu, uu]), _: 1 },
                                8,
                                ['href'],
                              ),
                              wt(
                                t.CButton,
                                {
                                  class:
                                    'col-6 col-md-auto d-flex align-items-center justify-content-center btn-hero-wrapper',
                                  component: 'a',
                                  rel: 'noopener nofollow',
                                  target: '_blank',
                                  href: t.telegramLink,
                                },
                                { default: rr(() => [cu, fu]), _: 1 },
                                8,
                                ['href'],
                              ),
                              wt(
                                t.CButton,
                                {
                                  class:
                                    'col-6 col-md-auto d-flex align-items-center justify-content-center btn-hero-wrapper',
                                  component: 'a',
                                  rel: 'noopener nofollow',
                                  target: '_blank',
                                  href: t.discordLink,
                                },
                                { default: rr(() => [hu, du]), _: 1 },
                                8,
                                ['href'],
                              ),
                              wt(
                                t.CButton,
                                {
                                  class:
                                    'col-6 col-md-auto d-flex align-items-center justify-content-center btn-hero-wrapper',
                                  component: 'a',
                                  rel: 'noopener nofollow',
                                  target: '_blank',
                                  href: t.tradingChartLink,
                                },
                                { default: rr(() => [_u, pu]), _: 1 },
                                8,
                                ['href'],
                              ),
                              wt(
                                t.CButton,
                                {
                                  class:
                                    'col-6 col-md-auto d-flex align-items-center justify-content-center btn-hero-wrapper',
                                  component: 'a',
                                  rel: 'noopener nofollow',
                                  target: '_blank',
                                  href: t.docsLink,
                                },
                                { default: rr(() => [gu, mu]), _: 1 },
                                8,
                                ['href'],
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                    ]),
                  ]),
                ],
                512,
              ),
            ],
            512,
          ),
          C(
            'div',
            {
              class: 'u-wrapper col-12 col-md-10 row justify-content-center',
              id: 'neptune',
              ref: t.moonHero.trigger,
            },
            [
              C(
                'div',
                {
                  class:
                    'u-planet user-select-none w-100 d-flex justify-content-center',
                  ref: t.neptuneHero.planet,
                  'data-depth': '0.8',
                },
                [
                  C('picture', yu, [
                    C(
                      'source',
                      { srcset: t.getWebpSrc('neptune'), type: 'image/webp' },
                      null,
                      8,
                      vu,
                    ),
                    bu,
                    xu,
                  ]),
                ],
                512,
              ),
              C(
                'div',
                {
                  class: 'u-container',
                  ref: t.neptuneHero.container,
                  'data-depth': '0.6',
                },
                Tu,
                512,
              ),
            ],
            512,
          ),
          C(
            'div',
            {
              class: 'u-wrapper col-12 col-md-10 row justify-content-center',
              id: 'moon',
              ref: t.venusHero.trigger,
            },
            [
              C(
                'div',
                {
                  class:
                    'u-planet user-select-none w-100 d-flex justify-content-center',
                  ref: t.moonHero.planet,
                  'data-depth': '0.8',
                },
                [
                  C('picture', Su, [
                    C(
                      'source',
                      { srcset: t.getWebpSrc('moon'), type: 'image/webp' },
                      null,
                      8,
                      ku,
                    ),
                    Pu,
                    Cu,
                  ]),
                ],
                512,
              ),
              C(
                'div',
                {
                  class: 'u-container',
                  ref: t.moonHero.container,
                  'data-depth': '0.6',
                },
                [
                  C('div', Ou, [
                    C('div', Mu, [
                      Au,
                      C(
                        'p',
                        Du,
                        'Let the Universe unlock the doors of high-yield DeFi to you. We take ' +
                          tr(t.appTitle) +
                          ' liquidity from the fees we collect to make high-return interests and give it back to UNIV holders.',
                        1,
                      ),
                      Fu,
                    ]),
                    C('div', Eu, [
                      Ru,
                      C('div', zu, [
                        Lu,
                        C(
                          'p',
                          Bu,
                          'A diversified basket will allow us to maintain good risk-reward for the community. ' +
                            tr(t.appTitle) +
                            ' team research and independently verify each protocol that will be invested into.',
                          1,
                        ),
                      ]),
                      C('div', Iu, [
                        Nu,
                        C(
                          'p',
                          Vu,
                          tr(t.appTitle) +
                            ' will move funds all at once so its holders are exposed to reliable DeFi protocols without the network fees, manual swapping, bridging, staking, bonding, etc. We do the work for you!',
                          1,
                        ),
                      ]),
                    ]),
                  ]),
                ],
                512,
              ),
            ],
            512,
          ),
          C(
            'div',
            {
              class: 'u-wrapper col-12 col-md-10 row justify-content-center',
              id: 'venus',
              ref: t.earthHero.trigger,
            },
            [
              C(
                'div',
                {
                  class:
                    'u-planet user-select-none w-100 d-flex justify-content-center',
                  ref: t.venusHero.planet,
                  'data-depth': '0.8',
                },
                [
                  C('picture', Uu, [
                    C(
                      'source',
                      { srcset: t.getWebpSrc('venus'), type: 'image/webp' },
                      null,
                      8,
                      Wu,
                    ),
                    Yu,
                    ju,
                  ]),
                ],
                512,
              ),
              C(
                'div',
                {
                  class: 'u-container',
                  ref: t.venusHero.container,
                  'data-depth': '0.6',
                },
                [
                  C('div', Hu, [
                    C('div', Xu, [
                      Gu,
                      C(
                        'h1',
                        qu,
                        'Enter ' + tr(t.appTitle) + "'s Metaverse",
                        1,
                      ),
                      Zu,
                    ]),
                    C('div', Qu, [
                      C('div', Ku, [
                        Ju,
                        C(
                          'p',
                          $u,
                          'Exciting features will allow you to win loot and other exclusive NFTs in the ' +
                            tr(t.appTitle) +
                            ' Metaverse.',
                          1,
                        ),
                      ]),
                      ec,
                    ]),
                  ]),
                ],
                512,
              ),
            ],
            512,
          ),
          C('div', tc, [
            C(
              'div',
              {
                class:
                  'u-planet user-select-none w-100 d-flex justify-content-center',
                ref: t.earthHero.planet,
                'data-depth': '0.8',
              },
              [
                C('picture', rc, [
                  C(
                    'source',
                    { srcset: t.getWebpSrc('earth'), type: 'image/webp' },
                    null,
                    8,
                    ic,
                  ),
                  nc,
                  sc,
                ]),
              ],
              512,
            ),
            C(
              'div',
              {
                class: 'u-container',
                ref: t.earthHero.container,
                'data-depth': '0.6',
              },
              oc,
              512,
            ),
          ]),
        ],
        512,
      ),
      wt(a, { class: 'mt-0 u-footer' }),
    ])
  )
}
const uc = Xa({
  setup(o, { expose: e }) {
    e()
    const { visibility: r, hidden: t } = es(),
      {
        appTitle: i,
        tradingChartLink: n,
        appDescription: s,
        twitterLink: a,
        telegramLink: l,
        discordLink: u,
        docsLink: c,
      } = Za(),
      _ = de(),
      d = de(),
      f = de(),
      p = de(),
      h = { name: 'neptune', trigger: de(), container: de(), planet: de() },
      m = { name: 'moon', trigger: de(), container: de(), planet: de() },
      g = { name: 'venus', trigger: de(), container: de(), planet: de() },
      S = { name: 'earth', trigger: de(), container: de(), planet: de() },
      T = (P) => {
        const k = `/assets/planets/${P}.webp`
        return {
          '/assets/planets/earth.webp': to,
          '/assets/planets/moon.webp': io,
          '/assets/planets/neptune.webp': so,
          '/assets/planets/venus.webp': oo,
        }[k].default
      }
    He.registerPlugin(H)
    async function v() {
      const P = He.timeline({
          scrollTrigger: {
            trigger: _.value,
            start: 'top top',
            end: '350px top',
            scrub: !0,
          },
        }),
        k = He.timeline({
          scrollTrigger: {
            trigger: h.trigger.value,
            start: '0% top',
            end: '100% top',
            scrub: !0,
          },
        }),
        O = He.timeline({
          scrollTrigger: {
            trigger: m.trigger.value,
            start: '0% top',
            end: '100% top',
            scrub: !0,
          },
        }),
        A = He.timeline({
          scrollTrigger: {
            trigger: g.trigger.value,
            start: '0% top',
            end: '100% top',
            scrub: !0,
          },
        }),
        M = He.timeline({
          scrollTrigger: {
            trigger: S.trigger.value,
            start: '0% top',
            end: '100% top',
            scrub: !0,
          },
        })
      function V(D, N) {
        const L = D,
          te = parseFloat(L.dataset.depth),
          De = -(L.offsetHeight * te)
        N.to(L, { y: De, ease: 'none' }, 0)
      }
      P.to(d.value, { opacity: 0, ease: 'none' }, 0),
        P.to(p.value, { y: '0', ease: 'none' }, 0),
        P.to(h.trigger.value, { y: '-50vh', ease: 'none' }, 0),
        k.to(h.planet.value, { scale: 1.5, ease: 'none' }, 0),
        O.to(m.planet.value, { scale: 1.5, ease: 'none' }, 0),
        A.to(g.planet.value, { scale: 1.5, ease: 'none' }, 0),
        M.to(S.planet.value, { scale: 1.5, ease: 'none' }, 0),
        He.utils.toArray([h.container.value]).forEach((D) => V(D, k)),
        He.utils.toArray([m.container.value]).forEach((D) => V(D, O)),
        He.utils.toArray([g.container.value]).forEach((D) => V(D, A)),
        He.utils.toArray([S.container.value]).forEach((D) => V(D, M))
    }
    const b = Ga('hasIntroFinished', () => !1)
    function x() {
      const P = () => {
        const O = window.Stream,
          A = O(d.value),
          M = O(f.value)
        A.addEventListener('ended', () => (b.value = !0)),
          $n(r, () => {
            r.value == 'hidden' || t.value
              ? (A.pause(), M.pause())
              : (r.value == 'visible' || !t.value) &&
                (b.value || A.play(), M.play())
          })
      }
      if (window.Stream) P()
      else {
        const O = document.createElement('script')
        ;(O.type = 'text/javascript'),
          (O.src = 'https://embed.videodelivery.net/embed/sdk.latest.js'),
          (O.onload = () => P()),
          document.body.appendChild(O)
      }
    }
    qa(() => {
      x(), setTimeout(() => v(), 500)
    })
    const w = {
      visibility: r,
      hidden: t,
      appTitle: i,
      tradingChartLink: n,
      appDescription: s,
      twitterLink: a,
      telegramLink: l,
      discordLink: u,
      docsLink: c,
      topWeb: _,
      introFrame: d,
      backgroundFrame: f,
      megaHeader: p,
      neptuneHero: h,
      moonHero: m,
      venusHero: g,
      earthHero: S,
      getWebpSrc: T,
      scrollTrigger: v,
      hasIntroFinished: b,
      attachStreamToPlayer: x,
      CButtonGroup: Qa,
      CButton: Ka,
      gsap: He,
      ScrollTrigger: H,
      ref: de,
      usePageVisibility: es,
      watch: $n,
    }
    return (
      Object.defineProperty(w, '__isScriptSetup', {
        enumerable: !1,
        value: !0,
      }),
      w
    )
  },
})
var mc = Ha(uc, [
  ['render', lc],
  ['__scopeId', 'data-v-1b50aac0'],
])
export { mc as default }
