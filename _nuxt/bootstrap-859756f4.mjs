var Vl = Object.defineProperty,
  Kl = Object.defineProperties
var ql = Object.getOwnPropertyDescriptors
var Pi = Object.getOwnPropertySymbols
var Wl = Object.prototype.hasOwnProperty,
  zl = Object.prototype.propertyIsEnumerable
var ki = (e, t, n) =>
    t in e
      ? Vl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  he = (e, t) => {
    for (var n in t || (t = {})) Wl.call(t, n) && ki(e, n, t[n])
    if (Pi) for (var n of Pi(t)) zl.call(t, n) && ki(e, n, t[n])
    return e
  },
  Ye = (e, t) => Kl(e, ql(t))
function nr(e, t) {
  const n = Object.create(null),
    r = e.split(',')
  for (let s = 0; s < r.length; s++) n[r[s]] = !0
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s]
}
const Ql =
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt',
  Yl = nr(Ql),
  Xl =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Jl = nr(Xl)
function Mi(e) {
  return !!e || e === ''
}
function Qt(e) {
  if (U(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ye(r) ? eu(r) : Qt(r)
      if (s) for (const i in s) t[i] = s[i]
    }
    return t
  } else {
    if (ye(e)) return e
    if (ge(e)) return e
  }
}
const Zl = /;(?![^(]*\))/g,
  Gl = /:(.+)/
function eu(e) {
  const t = {}
  return (
    e.split(Zl).forEach((n) => {
      if (n) {
        const r = n.split(Gl)
        r.length > 1 && (t[r[0].trim()] = r[1].trim())
      }
    }),
    t
  )
}
function Yt(e) {
  let t = ''
  if (ye(e)) t = e
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const r = Yt(e[n])
      r && (t += r + ' ')
    }
  else if (ge(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function tu(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !ye(t) && (e.class = Yt(t)), n && (e.style = Qt(n)), e
}
function nu(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let r = 0; n && r < e.length; r++) n = ct(e[r], t[r])
  return n
}
function ct(e, t) {
  if (e === t) return !0
  let n = Ii(e),
    r = Ii(t)
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1
  if (((n = U(e)), (r = U(t)), n || r)) return n && r ? nu(e, t) : !1
  if (((n = ge(e)), (r = ge(t)), n || r)) {
    if (!n || !r) return !1
    const s = Object.keys(e).length,
      i = Object.keys(t).length
    if (s !== i) return !1
    for (const o in e) {
      const a = e.hasOwnProperty(o),
        u = t.hasOwnProperty(o)
      if ((a && !u) || (!a && u) || !ct(e[o], t[o])) return !1
    }
  }
  return String(e) === String(t)
}
function rr(e, t) {
  return e.findIndex((n) => ct(n, t))
}
const Ri = (e) =>
    e == null
      ? ''
      : U(e) || (ge(e) && (e.toString === Ni || !Y(e.toString)))
      ? JSON.stringify(e, Oi, 2)
      : String(e),
  Oi = (e, t) =>
    t && t.__v_isRef
      ? Oi(e, t.value)
      : Jt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {},
          ),
        }
      : At(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ge(t) && !U(t) && !Li(t)
      ? String(t)
      : t,
  oe = {},
  Xt = [],
  qe = () => {},
  ru = () => !1,
  su = /^on[^a-z]/,
  Tn = (e) => su.test(e),
  Qr = (e) => e.startsWith('onUpdate:'),
  me = Object.assign,
  Yr = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  iu = Object.prototype.hasOwnProperty,
  ie = (e, t) => iu.call(e, t),
  U = Array.isArray,
  Jt = (e) => sr(e) === '[object Map]',
  At = (e) => sr(e) === '[object Set]',
  Ii = (e) => e instanceof Date,
  Y = (e) => typeof e == 'function',
  ye = (e) => typeof e == 'string',
  Xr = (e) => typeof e == 'symbol',
  ge = (e) => e !== null && typeof e == 'object',
  Jr = (e) => ge(e) && Y(e.then) && Y(e.catch),
  Ni = Object.prototype.toString,
  sr = (e) => Ni.call(e),
  ou = (e) => sr(e).slice(8, -1),
  Li = (e) => sr(e) === '[object Object]',
  Zr = (e) =>
    ye(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  wn = nr(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  ir = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  au = /-(\w)/g,
  Re = ir((e) => e.replace(au, (t, n) => (n ? n.toUpperCase() : ''))),
  lu = /\B([A-Z])/g,
  Xe = ir((e) => e.replace(lu, '-$1').toLowerCase()),
  En = ir((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  xn = ir((e) => (e ? `on${En(e)}` : '')),
  Cn = (e, t) => !Object.is(e, t),
  Zt = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  or = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  ft = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Fi
const uu = () =>
  Fi ||
  (Fi =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {})
let Je
const ar = []
class Gr {
  constructor(t = !1) {
    ;(this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      !t &&
        Je &&
        ((this.parent = Je),
        (this.index = (Je.scopes || (Je.scopes = [])).push(this) - 1))
  }
  run(t) {
    if (this.active)
      try {
        return this.on(), t()
      } finally {
        this.off()
      }
  }
  on() {
    this.active && (ar.push(this), (Je = this))
  }
  off() {
    this.active && (ar.pop(), (Je = ar[ar.length - 1]))
  }
  stop(t) {
    if (this.active) {
      if (
        (this.effects.forEach((n) => n.stop()),
        this.cleanups.forEach((n) => n()),
        this.scopes && this.scopes.forEach((n) => n.stop(!0)),
        this.parent && !t)
      ) {
        const n = this.parent.scopes.pop()
        n &&
          n !== this &&
          ((this.parent.scopes[this.index] = n), (n.index = this.index))
      }
      this.active = !1
    }
  }
}
function cu(e) {
  return new Gr(e)
}
function $i(e, t) {
  ;(t = t || Je), t && t.active && t.effects.push(e)
}
function fu() {
  return Je
}
function pu(e) {
  Je && Je.cleanups.push(e)
}
const es = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Bi = (e) => (e.w & pt) > 0,
  Hi = (e) => (e.n & pt) > 0,
  du = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= pt
  },
  hu = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let r = 0; r < t.length; r++) {
        const s = t[r]
        Bi(s) && !Hi(s) ? s.delete(e) : (t[n++] = s), (s.w &= ~pt), (s.n &= ~pt)
      }
      t.length = n
    }
  },
  ts = new WeakMap()
let Sn = 0,
  pt = 1
const ns = 30,
  Gt = []
let Pt
const kt = Symbol(''),
  rs = Symbol('')
class An {
  constructor(t, n = null, r) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      $i(this, r)
  }
  run() {
    if (!this.active) return this.fn()
    if (!Gt.length || !Gt.includes(this))
      try {
        return (
          Gt.push((Pt = this)),
          gu(),
          (pt = 1 << ++Sn),
          Sn <= ns ? du(this) : ji(this),
          this.fn()
        )
      } finally {
        Sn <= ns && hu(this), (pt = 1 << --Sn), dt(), Gt.pop()
        const t = Gt.length
        Pt = t > 0 ? Gt[t - 1] : void 0
      }
  }
  stop() {
    this.active && (ji(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function ji(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
function mu(e, t) {
  e.effect && (e = e.effect.fn)
  const n = new An(e)
  t && (me(n, t), t.scope && $i(n, t.scope)), (!t || !t.lazy) && n.run()
  const r = n.run.bind(n)
  return (r.effect = n), r
}
function yu(e) {
  e.effect.stop()
}
let en = !0
const ss = []
function Mt() {
  ss.push(en), (en = !1)
}
function gu() {
  ss.push(en), (en = !0)
}
function dt() {
  const e = ss.pop()
  en = e === void 0 ? !0 : e
}
function Oe(e, t, n) {
  if (!Di()) return
  let r = ts.get(e)
  r || ts.set(e, (r = new Map()))
  let s = r.get(n)
  s || r.set(n, (s = es())), Ui(s)
}
function Di() {
  return en && Pt !== void 0
}
function Ui(e, t) {
  let n = !1
  Sn <= ns ? Hi(e) || ((e.n |= pt), (n = !Bi(e))) : (n = !e.has(Pt)),
    n && (e.add(Pt), Pt.deps.push(e))
}
function st(e, t, n, r, s, i) {
  const o = ts.get(e)
  if (!o) return
  let a = []
  if (t === 'clear') a = [...o.values()]
  else if (n === 'length' && U(e))
    o.forEach((u, l) => {
      ;(l === 'length' || l >= r) && a.push(u)
    })
  else
    switch ((n !== void 0 && a.push(o.get(n)), t)) {
      case 'add':
        U(e)
          ? Zr(n) && a.push(o.get('length'))
          : (a.push(o.get(kt)), Jt(e) && a.push(o.get(rs)))
        break
      case 'delete':
        U(e) || (a.push(o.get(kt)), Jt(e) && a.push(o.get(rs)))
        break
      case 'set':
        Jt(e) && a.push(o.get(kt))
        break
    }
  if (a.length === 1) a[0] && is(a[0])
  else {
    const u = []
    for (const l of a) l && u.push(...l)
    is(es(u))
  }
}
function is(e, t) {
  for (const n of U(e) ? e : [...e])
    (n !== Pt || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run())
}
const bu = nr('__proto__,__v_isRef,__isVue'),
  Vi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(Xr),
  ),
  _u = lr(),
  vu = lr(!1, !0),
  Tu = lr(!0),
  wu = lr(!0, !0),
  Ki = Eu()
function Eu() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = ne(this)
        for (let i = 0, o = this.length; i < o; i++) Oe(r, 'get', i + '')
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(ne)) : s
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Mt()
        const r = ne(this)[t].apply(this, n)
        return dt(), r
      }
    }),
    e
  )
}
function lr(e = !1, t = !1) {
  return function (r, s, i) {
    if (s === '__v_isReactive') return !e
    if (s === '__v_isReadonly') return e
    if (s === '__v_isShallow') return t
    if (s === '__v_raw' && i === (e ? (t ? to : eo) : t ? Gi : Zi).get(r))
      return r
    const o = U(r)
    if (!e && o && ie(Ki, s)) return Reflect.get(Ki, s, i)
    const a = Reflect.get(r, s, i)
    return (Xr(s) ? Vi.has(s) : bu(s)) || (e || Oe(r, 'get', s), t)
      ? a
      : _e(a)
      ? !o || !Zr(s)
        ? a.value
        : a
      : ge(a)
      ? e
        ? as(a)
        : it(a)
      : a
  }
}
const xu = qi(),
  Cu = qi(!0)
function qi(e = !1) {
  return function (n, r, s, i) {
    let o = n[r]
    if (tn(o) && _e(o) && !_e(s)) return !1
    if (
      !e &&
      !tn(s) &&
      (ls(s) || ((s = ne(s)), (o = ne(o))), !U(n) && _e(o) && !_e(s))
    )
      return (o.value = s), !0
    const a = U(n) && Zr(r) ? Number(r) < n.length : ie(n, r),
      u = Reflect.set(n, r, s, i)
    return (
      n === ne(i) && (a ? Cn(s, o) && st(n, 'set', r, s) : st(n, 'add', r, s)),
      u
    )
  }
}
function Su(e, t) {
  const n = ie(e, t)
  e[t]
  const r = Reflect.deleteProperty(e, t)
  return r && n && st(e, 'delete', t, void 0), r
}
function Au(e, t) {
  const n = Reflect.has(e, t)
  return (!Xr(t) || !Vi.has(t)) && Oe(e, 'has', t), n
}
function Pu(e) {
  return Oe(e, 'iterate', U(e) ? 'length' : kt), Reflect.ownKeys(e)
}
const Wi = { get: _u, set: xu, deleteProperty: Su, has: Au, ownKeys: Pu },
  zi = {
    get: Tu,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  ku = me({}, Wi, { get: vu, set: Cu }),
  Mu = me({}, zi, { get: wu }),
  os = (e) => e,
  ur = (e) => Reflect.getPrototypeOf(e)
function cr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = ne(e),
    i = ne(t)
  t !== i && !n && Oe(s, 'get', t), !n && Oe(s, 'get', i)
  const { has: o } = ur(s),
    a = r ? os : n ? fs : Pn
  if (o.call(s, t)) return a(e.get(t))
  if (o.call(s, i)) return a(e.get(i))
  e !== s && e.get(t)
}
function fr(e, t = !1) {
  const n = this.__v_raw,
    r = ne(n),
    s = ne(e)
  return (
    e !== s && !t && Oe(r, 'has', e),
    !t && Oe(r, 'has', s),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function pr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Oe(ne(e), 'iterate', kt), Reflect.get(e, 'size', e)
  )
}
function Qi(e) {
  e = ne(e)
  const t = ne(this)
  return ur(t).has.call(t, e) || (t.add(e), st(t, 'add', e, e)), this
}
function Yi(e, t) {
  t = ne(t)
  const n = ne(this),
    { has: r, get: s } = ur(n)
  let i = r.call(n, e)
  i || ((e = ne(e)), (i = r.call(n, e)))
  const o = s.call(n, e)
  return (
    n.set(e, t), i ? Cn(t, o) && st(n, 'set', e, t) : st(n, 'add', e, t), this
  )
}
function Xi(e) {
  const t = ne(this),
    { has: n, get: r } = ur(t)
  let s = n.call(t, e)
  s || ((e = ne(e)), (s = n.call(t, e))), r && r.call(t, e)
  const i = t.delete(e)
  return s && st(t, 'delete', e, void 0), i
}
function Ji() {
  const e = ne(this),
    t = e.size !== 0,
    n = e.clear()
  return t && st(e, 'clear', void 0, void 0), n
}
function dr(e, t) {
  return function (r, s) {
    const i = this,
      o = i.__v_raw,
      a = ne(o),
      u = t ? os : e ? fs : Pn
    return (
      !e && Oe(a, 'iterate', kt), o.forEach((l, c) => r.call(s, u(l), u(c), i))
    )
  }
}
function hr(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = ne(s),
      o = Jt(i),
      a = e === 'entries' || (e === Symbol.iterator && o),
      u = e === 'keys' && o,
      l = s[e](...r),
      c = n ? os : t ? fs : Pn
    return (
      !t && Oe(i, 'iterate', u ? rs : kt),
      {
        next() {
          const { value: p, done: d } = l.next()
          return d
            ? { value: p, done: d }
            : { value: a ? [c(p[0]), c(p[1])] : c(p), done: d }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function ht(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function Ru() {
  const e = {
      get(i) {
        return cr(this, i)
      },
      get size() {
        return pr(this)
      },
      has: fr,
      add: Qi,
      set: Yi,
      delete: Xi,
      clear: Ji,
      forEach: dr(!1, !1),
    },
    t = {
      get(i) {
        return cr(this, i, !1, !0)
      },
      get size() {
        return pr(this)
      },
      has: fr,
      add: Qi,
      set: Yi,
      delete: Xi,
      clear: Ji,
      forEach: dr(!1, !0),
    },
    n = {
      get(i) {
        return cr(this, i, !0)
      },
      get size() {
        return pr(this, !0)
      },
      has(i) {
        return fr.call(this, i, !0)
      },
      add: ht('add'),
      set: ht('set'),
      delete: ht('delete'),
      clear: ht('clear'),
      forEach: dr(!0, !1),
    },
    r = {
      get(i) {
        return cr(this, i, !0, !0)
      },
      get size() {
        return pr(this, !0)
      },
      has(i) {
        return fr.call(this, i, !0)
      },
      add: ht('add'),
      set: ht('set'),
      delete: ht('delete'),
      clear: ht('clear'),
      forEach: dr(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = hr(i, !1, !1)),
        (n[i] = hr(i, !0, !1)),
        (t[i] = hr(i, !1, !0)),
        (r[i] = hr(i, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [Ou, Iu, Nu, Lu] = Ru()
function mr(e, t) {
  const n = t ? (e ? Lu : Nu) : e ? Iu : Ou
  return (r, s, i) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
      ? e
      : s === '__v_raw'
      ? r
      : Reflect.get(ie(n, s) && s in r ? n : r, s, i)
}
const Fu = { get: mr(!1, !1) },
  $u = { get: mr(!1, !0) },
  Bu = { get: mr(!0, !1) },
  Hu = { get: mr(!0, !0) },
  Zi = new WeakMap(),
  Gi = new WeakMap(),
  eo = new WeakMap(),
  to = new WeakMap()
function ju(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Du(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ju(ou(e))
}
function it(e) {
  return tn(e) ? e : yr(e, !1, Wi, Fu, Zi)
}
function no(e) {
  return yr(e, !1, ku, $u, Gi)
}
function as(e) {
  return yr(e, !0, zi, Bu, eo)
}
function Uu(e) {
  return yr(e, !0, Mu, Hu, to)
}
function yr(e, t, n, r, s) {
  if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = s.get(e)
  if (i) return i
  const o = Du(e)
  if (o === 0) return e
  const a = new Proxy(e, o === 2 ? r : n)
  return s.set(e, a), a
}
function Rt(e) {
  return tn(e) ? Rt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function tn(e) {
  return !!(e && e.__v_isReadonly)
}
function ls(e) {
  return !!(e && e.__v_isShallow)
}
function us(e) {
  return Rt(e) || tn(e)
}
function ne(e) {
  const t = e && e.__v_raw
  return t ? ne(t) : e
}
function cs(e) {
  return or(e, '__v_skip', !0), e
}
const Pn = (e) => (ge(e) ? it(e) : e),
  fs = (e) => (ge(e) ? as(e) : e)
function ps(e) {
  Di() && ((e = ne(e)), e.dep || (e.dep = es()), Ui(e.dep))
}
function gr(e, t) {
  ;(e = ne(e)), e.dep && is(e.dep)
}
function _e(e) {
  return Boolean(e && e.__v_isRef === !0)
}
function Ot(e) {
  return ro(e, !1)
}
function ds(e) {
  return ro(e, !0)
}
function ro(e, t) {
  return _e(e) ? e : new Vu(e, t)
}
class Vu {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ne(t)),
      (this._value = n ? t : Pn(t))
  }
  get value() {
    return ps(this), this._value
  }
  set value(t) {
    ;(t = this.__v_isShallow ? t : ne(t)),
      Cn(t, this._rawValue) &&
        ((this._rawValue = t),
        (this._value = this.__v_isShallow ? t : Pn(t)),
        gr(this))
  }
}
function Ku(e) {
  gr(e)
}
function nn(e) {
  return _e(e) ? e.value : e
}
const qu = {
  get: (e, t, n) => nn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return _e(s) && !_e(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function hs(e) {
  return Rt(e) ? e : new Proxy(e, qu)
}
class Wu {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: r } = t(
      () => ps(this),
      () => gr(this),
    )
    ;(this._get = n), (this._set = r)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function zu(e) {
  return new Wu(e)
}
function Qu(e) {
  const t = U(e) ? new Array(e.length) : {}
  for (const n in e) t[n] = ms(e, n)
  return t
}
class Yu {
  constructor(t, n, r) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
}
function ms(e, t, n) {
  const r = e[t]
  return _e(r) ? r : new Yu(e, t, n)
}
class Xu {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._dirty = !0),
      (this.effect = new An(t, () => {
        this._dirty || ((this._dirty = !0), gr(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = ne(this)
    return (
      ps(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function Ju(e, t, n = !1) {
  let r, s
  const i = Y(e)
  return (
    i ? ((r = e), (s = qe)) : ((r = e.get), (s = e.set)),
    new Xu(r, s, i || !s, n)
  )
}
Promise.resolve()
const kn = []
function so(e, ...t) {
  Mt()
  const n = kn.length ? kn[kn.length - 1].component : null,
    r = n && n.appContext.config.warnHandler,
    s = Zu()
  if (r)
    Ze(r, n, 11, [
      e + t.join(''),
      n && n.proxy,
      s.map(({ vnode: i }) => `at <${ca(n, i.type)}>`).join(`
`),
      s,
    ])
  else {
    const i = [`[Vue warn]: ${e}`, ...t]
    s.length &&
      i.push(
        `
`,
        ...Gu(s),
      ),
      console.warn(...i)
  }
  dt()
}
function Zu() {
  let e = kn[kn.length - 1]
  if (!e) return []
  const t = []
  for (; e; ) {
    const n = t[0]
    n && n.vnode === e
      ? n.recurseCount++
      : t.push({ vnode: e, recurseCount: 0 })
    const r = e.component && e.component.parent
    e = r && r.vnode
  }
  return t
}
function Gu(e) {
  const t = []
  return (
    e.forEach((n, r) => {
      t.push(
        ...(r === 0
          ? []
          : [
              `
`,
            ]),
        ...ec(n),
      )
    }),
    t
  )
}
function ec({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : '',
    r = e.component ? e.component.parent == null : !1,
    s = ` at <${ca(e.component, e.type, r)}`,
    i = '>' + n
  return e.props ? [s, ...tc(e.props), i] : [s + i]
}
function tc(e) {
  const t = [],
    n = Object.keys(e)
  return (
    n.slice(0, 3).forEach((r) => {
      t.push(...io(r, e[r]))
    }),
    n.length > 3 && t.push(' ...'),
    t
  )
}
function io(e, t, n) {
  return ye(t)
    ? ((t = JSON.stringify(t)), n ? t : [`${e}=${t}`])
    : typeof t == 'number' || typeof t == 'boolean' || t == null
    ? n
      ? t
      : [`${e}=${t}`]
    : _e(t)
    ? ((t = io(e, ne(t.value), !0)), n ? t : [`${e}=Ref<`, t, '>'])
    : Y(t)
    ? [`${e}=fn${t.name ? `<${t.name}>` : ''}`]
    : ((t = ne(t)), n ? t : [`${e}=`, t])
}
function Ze(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (i) {
    It(i, t, n)
  }
  return s
}
function Ie(e, t, n, r) {
  if (Y(e)) {
    const i = Ze(e, t, n, r)
    return (
      i &&
        Jr(i) &&
        i.catch((o) => {
          It(o, t, n)
        }),
      i
    )
  }
  const s = []
  for (let i = 0; i < e.length; i++) s.push(Ie(e[i], t, n, r))
  return s
}
function It(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const o = t.proxy,
      a = n
    for (; i; ) {
      const l = i.ec
      if (l) {
        for (let c = 0; c < l.length; c++) if (l[c](e, o, a) === !1) return
      }
      i = i.parent
    }
    const u = t.appContext.config.errorHandler
    if (u) {
      Ze(u, null, 10, [e, o, a])
      return
    }
  }
  nc(e, n, s, r)
}
function nc(e, t, n, r = !0) {
  console.error(e)
}
let br = !1,
  ys = !1
const Ne = []
let ot = 0
const Mn = []
let Rn = null,
  rn = 0
const On = []
let mt = null,
  sn = 0
const oo = Promise.resolve()
let gs = null,
  bs = null
function In(e) {
  const t = gs || oo
  return e ? t.then(this ? e.bind(this) : e) : t
}
function rc(e) {
  let t = ot + 1,
    n = Ne.length
  for (; t < n; ) {
    const r = (t + n) >>> 1
    Nn(Ne[r]) < e ? (t = r + 1) : (n = r)
  }
  return t
}
function _s(e) {
  ;(!Ne.length || !Ne.includes(e, br && e.allowRecurse ? ot + 1 : ot)) &&
    e !== bs &&
    (e.id == null ? Ne.push(e) : Ne.splice(rc(e.id), 0, e), ao())
}
function ao() {
  !br && !ys && ((ys = !0), (gs = oo.then(uo)))
}
function sc(e) {
  const t = Ne.indexOf(e)
  t > ot && Ne.splice(t, 1)
}
function lo(e, t, n, r) {
  U(e)
    ? n.push(...e)
    : (!t || !t.includes(e, e.allowRecurse ? r + 1 : r)) && n.push(e),
    ao()
}
function ic(e) {
  lo(e, Rn, Mn, rn)
}
function vs(e) {
  lo(e, mt, On, sn)
}
function Ts(e, t = null) {
  if (Mn.length) {
    for (
      bs = t, Rn = [...new Set(Mn)], Mn.length = 0, rn = 0;
      rn < Rn.length;
      rn++
    )
      Rn[rn]()
    ;(Rn = null), (rn = 0), (bs = null), Ts(e, t)
  }
}
function _r(e) {
  if (On.length) {
    const t = [...new Set(On)]
    if (((On.length = 0), mt)) {
      mt.push(...t)
      return
    }
    for (mt = t, mt.sort((n, r) => Nn(n) - Nn(r)), sn = 0; sn < mt.length; sn++)
      mt[sn]()
    ;(mt = null), (sn = 0)
  }
}
const Nn = (e) => (e.id == null ? 1 / 0 : e.id)
function uo(e) {
  ;(ys = !1), (br = !0), Ts(e), Ne.sort((n, r) => Nn(n) - Nn(r))
  const t = qe
  try {
    for (ot = 0; ot < Ne.length; ot++) {
      const n = Ne[ot]
      n && n.active !== !1 && Ze(n, null, 14)
    }
  } finally {
    ;(ot = 0),
      (Ne.length = 0),
      _r(),
      (br = !1),
      (gs = null),
      (Ne.length || Mn.length || On.length) && uo(e)
  }
}
let on,
  vr = []
function co(e, t) {
  var n, r
  ;(on = e),
    on
      ? ((on.enabled = !0),
        vr.forEach(({ event: s, args: i }) => on.emit(s, ...i)),
        (vr = []))
      : typeof window != 'undefined' &&
        window.HTMLElement &&
        !((r =
          (n = window.navigator) === null || n === void 0
            ? void 0
            : n.userAgent) === null || r === void 0
          ? void 0
          : r.includes('jsdom'))
      ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
          co(i, t)
        }),
        setTimeout(() => {
          on || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (vr = []))
        }, 3e3))
      : (vr = [])
}
function oc(e, t, ...n) {
  const r = e.vnode.props || oe
  let s = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in r) {
    const c = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: p, trim: d } = r[c] || oe
    d ? (s = n.map((g) => g.trim())) : p && (s = n.map(ft))
  }
  let a,
    u = r[(a = xn(t))] || r[(a = xn(Re(t)))]
  !u && i && (u = r[(a = xn(Xe(t)))]), u && Ie(u, e, 6, s)
  const l = r[a + 'Once']
  if (l) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), Ie(l, e, 6, s)
  }
}
function fo(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const i = e.emits
  let o = {},
    a = !1
  if (!Y(e)) {
    const u = (l) => {
      const c = fo(l, t, !0)
      c && ((a = !0), me(o, c))
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  return !i && !a
    ? (r.set(e, null), null)
    : (U(i) ? i.forEach((u) => (o[u] = null)) : me(o, i), r.set(e, o), o)
}
function ws(e, t) {
  return !e || !Tn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Xe(t)) || ie(e, t))
}
let Le = null,
  Tr = null
function Ln(e) {
  const t = Le
  return (Le = e), (Tr = (e && e.type.__scopeId) || null), t
}
function ac(e) {
  Tr = e
}
function lc() {
  Tr = null
}
const uc = (e) => je
function je(e, t = Le, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && Us(-1)
    const i = Ln(t),
      o = e(...s)
    return Ln(i), r._d && Us(1), o
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function wr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: i,
    propsOptions: [o],
    slots: a,
    attrs: u,
    emit: l,
    render: c,
    renderCache: p,
    data: d,
    setupState: g,
    ctx: v,
    inheritAttrs: O,
  } = e
  let y, _
  const m = Ln(e)
  try {
    if (n.shapeFlag & 4) {
      const w = s || r
      ;(y = Fe(c.call(w, w, p, i, g, d, v))), (_ = u)
    } else {
      const w = t
      ;(y = Fe(
        w.length > 1 ? w(i, { attrs: u, slots: a, emit: l }) : w(i, null),
      )),
        (_ = t.props ? u : fc(u))
    }
  } catch (w) {
    ;(qn.length = 0), It(w, e, 1), (y = ee(Pe))
  }
  let T = y
  if (_ && O !== !1) {
    const w = Object.keys(_),
      { shapeFlag: N } = T
    w.length &&
      N & (1 | 6) &&
      (o && w.some(Qr) && (_ = pc(_, o)), (T = bt(T, _)))
  }
  return (
    n.dirs && (T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs),
    n.transition && (T.transition = n.transition),
    (y = T),
    Ln(m),
    y
  )
}
function cc(e) {
  let t
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    if (gt(r)) {
      if (r.type !== Pe || r.children === 'v-if') {
        if (t) return
        t = r
      }
    } else return
  }
  return t
}
const fc = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Tn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  pc = (e, t) => {
    const n = {}
    for (const r in e) (!Qr(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function dc(e, t, n) {
  const { props: r, children: s, component: i } = e,
    { props: o, children: a, patchFlag: u } = t,
    l = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && u >= 0) {
    if (u & 1024) return !0
    if (u & 16) return r ? po(r, o, l) : !!o
    if (u & 8) {
      const c = t.dynamicProps
      for (let p = 0; p < c.length; p++) {
        const d = c[p]
        if (o[d] !== r[d] && !ws(l, d)) return !0
      }
    }
  } else
    return (s || a) && (!a || !a.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? po(r, o, l)
        : !0
      : !!o
  return !1
}
function po(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const i = r[s]
    if (t[i] !== e[i] && !ws(n, i)) return !0
  }
  return !1
}
function Es({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const hc = (e) => e.__isSuspense,
  mc = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, s, i, o, a, u, l) {
      e == null ? yc(t, n, r, s, i, o, a, u, l) : gc(e, t, n, r, s, o, a, u, l)
    },
    hydrate: bc,
    create: Cs,
    normalize: _c,
  },
  xs = mc
function Fn(e, t) {
  const n = e.props && e.props[t]
  Y(n) && n()
}
function yc(e, t, n, r, s, i, o, a, u) {
  const {
      p: l,
      o: { createElement: c },
    } = u,
    p = c('div'),
    d = (e.suspense = Cs(e, s, r, t, p, n, i, o, a, u))
  l(null, (d.pendingBranch = e.ssContent), p, null, r, d, i, o),
    d.deps > 0
      ? (Fn(e, 'onPending'),
        Fn(e, 'onFallback'),
        l(null, e.ssFallback, t, n, r, null, i, o),
        an(d, e.ssFallback))
      : d.resolve()
}
function gc(e, t, n, r, s, i, o, a, { p: u, um: l, o: { createElement: c } }) {
  const p = (t.suspense = e.suspense)
  ;(p.vnode = t), (t.el = e.el)
  const d = t.ssContent,
    g = t.ssFallback,
    { activeBranch: v, pendingBranch: O, isInFallback: y, isHydrating: _ } = p
  if (O)
    (p.pendingBranch = d),
      nt(d, O)
        ? (u(O, d, p.hiddenContainer, null, s, p, i, o, a),
          p.deps <= 0
            ? p.resolve()
            : y && (u(v, g, n, r, s, null, i, o, a), an(p, g)))
        : (p.pendingId++,
          _ ? ((p.isHydrating = !1), (p.activeBranch = O)) : l(O, s, p),
          (p.deps = 0),
          (p.effects.length = 0),
          (p.hiddenContainer = c('div')),
          y
            ? (u(null, d, p.hiddenContainer, null, s, p, i, o, a),
              p.deps <= 0
                ? p.resolve()
                : (u(v, g, n, r, s, null, i, o, a), an(p, g)))
            : v && nt(d, v)
            ? (u(v, d, n, r, s, p, i, o, a), p.resolve(!0))
            : (u(null, d, p.hiddenContainer, null, s, p, i, o, a),
              p.deps <= 0 && p.resolve()))
  else if (v && nt(d, v)) u(v, d, n, r, s, p, i, o, a), an(p, d)
  else if (
    (Fn(t, 'onPending'),
    (p.pendingBranch = d),
    p.pendingId++,
    u(null, d, p.hiddenContainer, null, s, p, i, o, a),
    p.deps <= 0)
  )
    p.resolve()
  else {
    const { timeout: m, pendingId: T } = p
    m > 0
      ? setTimeout(() => {
          p.pendingId === T && p.fallback(g)
        }, m)
      : m === 0 && p.fallback(g)
  }
}
function Cs(e, t, n, r, s, i, o, a, u, l, c = !1) {
  const {
      p,
      m: d,
      um: g,
      n: v,
      o: { parentNode: O, remove: y },
    } = l,
    _ = ft(e.props && e.props.timeout),
    m = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: o,
      container: r,
      hiddenContainer: s,
      anchor: i,
      deps: 0,
      pendingId: 0,
      timeout: typeof _ == 'number' ? _ : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(T = !1) {
        const {
          vnode: w,
          activeBranch: N,
          pendingBranch: L,
          pendingId: S,
          effects: B,
          parentComponent: H,
          container: W,
        } = m
        if (m.isHydrating) m.isHydrating = !1
        else if (!T) {
          const X = N && L.transition && L.transition.mode === 'out-in'
          X &&
            (N.transition.afterLeave = () => {
              S === m.pendingId && d(L, W, re, 0)
            })
          let { anchor: re } = m
          N && ((re = v(N)), g(N, H, m, !0)), X || d(L, W, re, 0)
        }
        an(m, L), (m.pendingBranch = null), (m.isInFallback = !1)
        let z = m.parent,
          P = !1
        for (; z; ) {
          if (z.pendingBranch) {
            z.effects.push(...B), (P = !0)
            break
          }
          z = z.parent
        }
        P || vs(B), (m.effects = []), Fn(w, 'onResolve')
      },
      fallback(T) {
        if (!m.pendingBranch) return
        const {
          vnode: w,
          activeBranch: N,
          parentComponent: L,
          container: S,
          isSVG: B,
        } = m
        Fn(w, 'onFallback')
        const H = v(N),
          W = () => {
            !m.isInFallback || (p(null, T, S, H, L, null, B, a, u), an(m, T))
          },
          z = T.transition && T.transition.mode === 'out-in'
        z && (N.transition.afterLeave = W),
          (m.isInFallback = !0),
          g(N, L, null, !0),
          z || W()
      },
      move(T, w, N) {
        m.activeBranch && d(m.activeBranch, T, w, N), (m.container = T)
      },
      next() {
        return m.activeBranch && v(m.activeBranch)
      },
      registerDep(T, w) {
        const N = !!m.pendingBranch
        N && m.deps++
        const L = T.vnode.el
        T.asyncDep
          .catch((S) => {
            It(S, T, 0)
          })
          .then((S) => {
            if (T.isUnmounted || m.isUnmounted || m.pendingId !== T.suspenseId)
              return
            T.asyncResolved = !0
            const { vnode: B } = T
            Qs(T, S, !1), L && (B.el = L)
            const H = !L && T.subTree.el
            w(T, B, O(L || T.subTree.el), L ? null : v(T.subTree), m, o, u),
              H && y(H),
              Es(T, B.el),
              N && --m.deps == 0 && m.resolve()
          })
      },
      unmount(T, w) {
        ;(m.isUnmounted = !0),
          m.activeBranch && g(m.activeBranch, n, T, w),
          m.pendingBranch && g(m.pendingBranch, n, T, w)
      },
    }
  return m
}
function bc(e, t, n, r, s, i, o, a, u) {
  const l = (t.suspense = Cs(
      t,
      r,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      s,
      i,
      o,
      a,
      !0,
    )),
    c = u(e, (l.pendingBranch = t.ssContent), n, l, i, o)
  return l.deps === 0 && l.resolve(), c
}
function _c(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32
  ;(e.ssContent = ho(r ? n.default : n)),
    (e.ssFallback = r ? ho(n.fallback) : ee(Pe))
}
function ho(e) {
  let t
  if (Y(e)) {
    const n = cn && e._c
    n && ((e._d = !1), xe()), (e = e()), n && ((e._d = !0), (t = tt), Zo())
  }
  return (
    U(e) && (e = cc(e)),
    (e = Fe(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  )
}
function mo(e, t) {
  t && t.pendingBranch
    ? U(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : vs(e)
}
function an(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: r } = e,
    s = (n.el = t.el)
  r && r.subTree === n && ((r.vnode.el = s), Es(r, s))
}
function $n(e, t) {
  if (Te) {
    let n = Te.provides
    const r = Te.parent && Te.parent.provides
    r === n && (n = Te.provides = Object.create(r)), (n[e] = t)
  }
}
function Ge(e, t, n = !1) {
  const r = Te || Le
  if (r) {
    const s =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && Y(t) ? t.call(r.proxy) : t
  }
}
function yo(e, t) {
  return Bn(e, null, t)
}
function go(e, t) {
  return Bn(e, null, { flush: 'post' })
}
function vc(e, t) {
  return Bn(e, null, { flush: 'sync' })
}
const bo = {}
function Nt(e, t, n) {
  return Bn(e, t, n)
}
function Bn(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = oe,
) {
  const a = Te
  let u,
    l = !1,
    c = !1
  if (
    (_e(e)
      ? ((u = () => e.value), (l = ls(e)))
      : Rt(e)
      ? ((u = () => e), (r = !0))
      : U(e)
      ? ((c = !0),
        (l = e.some(Rt)),
        (u = () =>
          e.map((_) => {
            if (_e(_)) return _.value
            if (Rt(_)) return Lt(_)
            if (Y(_)) return Ze(_, a, 2)
          })))
      : Y(e)
      ? t
        ? (u = () => Ze(e, a, 2))
        : (u = () => {
            if (!(a && a.isUnmounted)) return p && p(), Ie(e, a, 3, [d])
          })
      : (u = qe),
    t && r)
  ) {
    const _ = u
    u = () => Lt(_())
  }
  let p,
    d = (_) => {
      p = y.onStop = () => {
        Ze(_, a, 4)
      }
    }
  if (fn)
    return (d = qe), t ? n && Ie(t, a, 3, [u(), c ? [] : void 0, d]) : u(), qe
  let g = c ? [] : bo
  const v = () => {
    if (!!y.active)
      if (t) {
        const _ = y.run()
        ;(r || l || (c ? _.some((m, T) => Cn(m, g[T])) : Cn(_, g))) &&
          (p && p(), Ie(t, a, 3, [_, g === bo ? void 0 : g, d]), (g = _))
      } else y.run()
  }
  v.allowRecurse = !!t
  let O
  s === 'sync'
    ? (O = v)
    : s === 'post'
    ? (O = () => Ee(v, a && a.suspense))
    : (O = () => {
        !a || a.isMounted ? ic(v) : v()
      })
  const y = new An(u, O)
  return (
    t
      ? n
        ? v()
        : (g = y.run())
      : s === 'post'
      ? Ee(y.run.bind(y), a && a.suspense)
      : y.run(),
    () => {
      y.stop(), a && a.scope && Yr(a.scope.effects, y)
    }
  )
}
function Tc(e, t, n) {
  const r = this.proxy,
    s = ye(e) ? (e.includes('.') ? _o(r, e) : () => r[e]) : e.bind(r, r)
  let i
  Y(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = Te
  vt(this)
  const a = Bn(s, i.bind(r), n)
  return o ? vt(o) : Tt(), a
}
function _o(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function Lt(e, t) {
  if (!ge(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), _e(e))) Lt(e.value, t)
  else if (U(e)) for (let n = 0; n < e.length; n++) Lt(e[n], t)
  else if (At(e) || Jt(e))
    e.forEach((n) => {
      Lt(n, t)
    })
  else if (Li(e)) for (const n in e) Lt(e[n], t)
  return e
}
function Ss() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Un(() => {
      e.isMounted = !0
    }),
    Vn(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const De = [Function, Array],
  wc = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: De,
      onEnter: De,
      onAfterEnter: De,
      onEnterCancelled: De,
      onBeforeLeave: De,
      onLeave: De,
      onAfterLeave: De,
      onLeaveCancelled: De,
      onBeforeAppear: De,
      onAppear: De,
      onAfterAppear: De,
      onAppearCancelled: De,
    },
    setup(e, { slots: t }) {
      const n = ze(),
        r = Ss()
      let s
      return () => {
        const i = t.default && Er(t.default(), !0)
        if (!i || !i.length) return
        const o = ne(e),
          { mode: a } = o,
          u = i[0]
        if (r.isLeaving) return Ps(u)
        const l = To(u)
        if (!l) return Ps(u)
        const c = ln(l, o, r, n)
        Ft(l, c)
        const p = n.subTree,
          d = p && To(p)
        let g = !1
        const { getTransitionKey: v } = l.type
        if (v) {
          const O = v()
          s === void 0 ? (s = O) : O !== s && ((s = O), (g = !0))
        }
        if (d && d.type !== Pe && (!nt(l, d) || g)) {
          const O = ln(d, o, r, n)
          if ((Ft(d, O), a === 'out-in'))
            return (
              (r.isLeaving = !0),
              (O.afterLeave = () => {
                ;(r.isLeaving = !1), n.update()
              }),
              Ps(u)
            )
          a === 'in-out' &&
            l.type !== Pe &&
            (O.delayLeave = (y, _, m) => {
              const T = vo(r, d)
              ;(T[String(d.key)] = d),
                (y._leaveCb = () => {
                  _(), (y._leaveCb = void 0), delete c.delayedLeave
                }),
                (c.delayedLeave = m)
            })
        }
        return u
      }
    },
  },
  As = wc
function vo(e, t) {
  const { leavingVNodes: n } = e
  let r = n.get(t.type)
  return r || ((r = Object.create(null)), n.set(t.type, r)), r
}
function ln(e, t, n, r) {
  const {
      appear: s,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: u,
      onAfterEnter: l,
      onEnterCancelled: c,
      onBeforeLeave: p,
      onLeave: d,
      onAfterLeave: g,
      onLeaveCancelled: v,
      onBeforeAppear: O,
      onAppear: y,
      onAfterAppear: _,
      onAppearCancelled: m,
    } = t,
    T = String(e.key),
    w = vo(n, e),
    N = (S, B) => {
      S && Ie(S, r, 9, B)
    },
    L = {
      mode: i,
      persisted: o,
      beforeEnter(S) {
        let B = a
        if (!n.isMounted)
          if (s) B = O || a
          else return
        S._leaveCb && S._leaveCb(!0)
        const H = w[T]
        H && nt(e, H) && H.el._leaveCb && H.el._leaveCb(), N(B, [S])
      },
      enter(S) {
        let B = u,
          H = l,
          W = c
        if (!n.isMounted)
          if (s) (B = y || u), (H = _ || l), (W = m || c)
          else return
        let z = !1
        const P = (S._enterCb = (X) => {
          z ||
            ((z = !0),
            X ? N(W, [S]) : N(H, [S]),
            L.delayedLeave && L.delayedLeave(),
            (S._enterCb = void 0))
        })
        B ? (B(S, P), B.length <= 1 && P()) : P()
      },
      leave(S, B) {
        const H = String(e.key)
        if ((S._enterCb && S._enterCb(!0), n.isUnmounting)) return B()
        N(p, [S])
        let W = !1
        const z = (S._leaveCb = (P) => {
          W ||
            ((W = !0),
            B(),
            P ? N(v, [S]) : N(g, [S]),
            (S._leaveCb = void 0),
            w[H] === e && delete w[H])
        })
        ;(w[H] = e), d ? (d(S, z), d.length <= 1 && z()) : z()
      },
      clone(S) {
        return ln(S, t, n, r)
      },
    }
  return L
}
function Ps(e) {
  if (jn(e)) return (e = bt(e)), (e.children = null), e
}
function To(e) {
  return jn(e) ? (e.children ? e.children[0] : void 0) : e
}
function Ft(e, t) {
  e.shapeFlag & 6 && e.component
    ? Ft(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Er(e, t = !1) {
  let n = [],
    r = 0
  for (let s = 0; s < e.length; s++) {
    const i = e[s]
    i.type === ve
      ? (i.patchFlag & 128 && r++, (n = n.concat(Er(i.children, t))))
      : (t || i.type !== Pe) && n.push(i)
  }
  if (r > 1) for (let s = 0; s < n.length; s++) n[s].patchFlag = -2
  return n
}
function Se(e) {
  return Y(e) ? { setup: e, name: e.name } : e
}
const Hn = (e) => !!e.type.__asyncLoader
function $t(e) {
  Y(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: i,
    suspensible: o = !0,
    onError: a,
  } = e
  let u = null,
    l,
    c = 0
  const p = () => (c++, (u = null), d()),
    d = () => {
      let g
      return (
        u ||
        (g = u = t()
          .catch((v) => {
            if (((v = v instanceof Error ? v : new Error(String(v))), a))
              return new Promise((O, y) => {
                a(
                  v,
                  () => O(p()),
                  () => y(v),
                  c + 1,
                )
              })
            throw v
          })
          .then((v) =>
            g !== u && u
              ? u
              : (v &&
                  (v.__esModule || v[Symbol.toStringTag] === 'Module') &&
                  (v = v.default),
                (l = v),
                v),
          ))
      )
    }
  return Se({
    name: 'AsyncComponentWrapper',
    __asyncLoader: d,
    get __asyncResolved() {
      return l
    },
    setup() {
      const g = Te
      if (l) return () => ks(l, g)
      const v = (m) => {
        ;(u = null), It(m, g, 13, !r)
      }
      if ((o && g.suspense) || fn)
        return d()
          .then((m) => () => ks(m, g))
          .catch((m) => (v(m), () => (r ? ee(r, { error: m }) : null)))
      const O = Ot(!1),
        y = Ot(),
        _ = Ot(!!s)
      return (
        s &&
          setTimeout(() => {
            _.value = !1
          }, s),
        i != null &&
          setTimeout(() => {
            if (!O.value && !y.value) {
              const m = new Error(`Async component timed out after ${i}ms.`)
              v(m), (y.value = m)
            }
          }, i),
        d()
          .then(() => {
            ;(O.value = !0),
              g.parent && jn(g.parent.vnode) && _s(g.parent.update)
          })
          .catch((m) => {
            v(m), (y.value = m)
          }),
        () => {
          if (O.value && l) return ks(l, g)
          if (y.value && r) return ee(r, { error: y.value })
          if (n && !_.value) return ee(n)
        }
      )
    },
  })
}
function ks(e, { vnode: { ref: t, props: n, children: r } }) {
  const s = ee(e, n, r)
  return (s.ref = t), s
}
const jn = (e) => e.type.__isKeepAlive,
  Ec = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = ze(),
        r = n.ctx
      if (!r.renderer) return t.default
      const s = new Map(),
        i = new Set()
      let o = null
      const a = n.suspense,
        {
          renderer: {
            p: u,
            m: l,
            um: c,
            o: { createElement: p },
          },
        } = r,
        d = p('div')
      ;(r.activate = (m, T, w, N, L) => {
        const S = m.component
        l(m, T, w, 0, a),
          u(S.vnode, m, T, w, S, a, N, m.slotScopeIds, L),
          Ee(() => {
            ;(S.isDeactivated = !1), S.a && Zt(S.a)
            const B = m.props && m.props.onVnodeMounted
            B && ke(B, S.parent, m)
          }, a)
      }),
        (r.deactivate = (m) => {
          const T = m.component
          l(m, d, null, 1, a),
            Ee(() => {
              T.da && Zt(T.da)
              const w = m.props && m.props.onVnodeUnmounted
              w && ke(w, T.parent, m), (T.isDeactivated = !0)
            }, a)
        })
      function g(m) {
        Ms(m), c(m, n, a, !0)
      }
      function v(m) {
        s.forEach((T, w) => {
          const N = Fr(T.type)
          N && (!m || !m(N)) && O(w)
        })
      }
      function O(m) {
        const T = s.get(m)
        !o || T.type !== o.type ? g(T) : o && Ms(o), s.delete(m), i.delete(m)
      }
      Nt(
        () => [e.include, e.exclude],
        ([m, T]) => {
          m && v((w) => Dn(m, w)), T && v((w) => !Dn(T, w))
        },
        { flush: 'post', deep: !0 },
      )
      let y = null
      const _ = () => {
        y != null && s.set(y, Rs(n.subTree))
      }
      return (
        Un(_),
        Cr(_),
        Vn(() => {
          s.forEach((m) => {
            const { subTree: T, suspense: w } = n,
              N = Rs(T)
            if (m.type === N.type) {
              Ms(N)
              const L = N.component.da
              L && Ee(L, w)
              return
            }
            g(m)
          })
        }),
        () => {
          if (((y = null), !t.default)) return null
          const m = t.default(),
            T = m[0]
          if (m.length > 1) return (o = null), m
          if (!gt(T) || (!(T.shapeFlag & 4) && !(T.shapeFlag & 128)))
            return (o = null), T
          let w = Rs(T)
          const N = w.type,
            L = Fr(Hn(w) ? w.type.__asyncResolved || {} : N),
            { include: S, exclude: B, max: H } = e
          if ((S && (!L || !Dn(S, L))) || (B && L && Dn(B, L)))
            return (o = w), T
          const W = w.key == null ? N : w.key,
            z = s.get(W)
          return (
            w.el && ((w = bt(w)), T.shapeFlag & 128 && (T.ssContent = w)),
            (y = W),
            z
              ? ((w.el = z.el),
                (w.component = z.component),
                w.transition && Ft(w, w.transition),
                (w.shapeFlag |= 512),
                i.delete(W),
                i.add(W))
              : (i.add(W),
                H && i.size > parseInt(H, 10) && O(i.values().next().value)),
            (w.shapeFlag |= 256),
            (o = w),
            T
          )
        }
      )
    },
  },
  xc = Ec
function Dn(e, t) {
  return U(e)
    ? e.some((n) => Dn(n, t))
    : ye(e)
    ? e.split(',').includes(t)
    : e.test
    ? e.test(t)
    : !1
}
function wo(e, t) {
  xo(e, 'a', t)
}
function Eo(e, t) {
  xo(e, 'da', t)
}
function xo(e, t, n = Te) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((xr(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) jn(s.parent.vnode) && Cc(r, t, n, s), (s = s.parent)
  }
}
function Cc(e, t, n, r) {
  const s = xr(t, e, r, !0)
  Sr(() => {
    Yr(r[t], s)
  }, n)
}
function Ms(e) {
  let t = e.shapeFlag
  t & 256 && (t -= 256), t & 512 && (t -= 512), (e.shapeFlag = t)
}
function Rs(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function xr(e, t, n = Te, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          Mt(), vt(n)
          const a = Ie(t, n, e, o)
          return Tt(), dt(), a
        })
    return r ? s.unshift(i) : s.push(i), i
  }
}
const at = (e) => (t, n = Te) => (!fn || e === 'sp') && xr(e, t, n),
  Co = at('bm'),
  Un = at('m'),
  So = at('bu'),
  Cr = at('u'),
  Vn = at('bum'),
  Sr = at('um'),
  Ao = at('sp'),
  Po = at('rtg'),
  ko = at('rtc')
function Mo(e, t = Te) {
  xr('ec', e, t)
}
let Os = !0
function Sc(e) {
  const t = Io(e),
    n = e.proxy,
    r = e.ctx
  ;(Os = !1), t.beforeCreate && Ro(t.beforeCreate, e, 'bc')
  const {
    data: s,
    computed: i,
    methods: o,
    watch: a,
    provide: u,
    inject: l,
    created: c,
    beforeMount: p,
    mounted: d,
    beforeUpdate: g,
    updated: v,
    activated: O,
    deactivated: y,
    beforeDestroy: _,
    beforeUnmount: m,
    destroyed: T,
    unmounted: w,
    render: N,
    renderTracked: L,
    renderTriggered: S,
    errorCaptured: B,
    serverPrefetch: H,
    expose: W,
    inheritAttrs: z,
    components: P,
    directives: X,
    filters: re,
  } = t
  if ((l && Ac(l, r, null, e.appContext.config.unwrapInjectedRef), o))
    for (const Q in o) {
      const Z = o[Q]
      Y(Z) && (r[Q] = Z.bind(n))
    }
  if (s) {
    const Q = s.call(n, n)
    ge(Q) && (e.data = it(Q))
  }
  if (((Os = !0), i))
    for (const Q in i) {
      const Z = i[Q],
        de = Y(Z) ? Z.bind(n, n) : Y(Z.get) ? Z.get.bind(n, n) : qe,
        we = !Y(Z) && Y(Z.set) ? Z.set.bind(n) : qe,
        be = $e({ get: de, set: we })
      Object.defineProperty(r, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => be.value,
        set: (Be) => (be.value = Be),
      })
    }
  if (a) for (const Q in a) Oo(a[Q], r, n, Q)
  if (u) {
    const Q = Y(u) ? u.call(n) : u
    Reflect.ownKeys(Q).forEach((Z) => {
      $n(Z, Q[Z])
    })
  }
  c && Ro(c, e, 'c')
  function F(Q, Z) {
    U(Z) ? Z.forEach((de) => Q(de.bind(n))) : Z && Q(Z.bind(n))
  }
  if (
    (F(Co, p),
    F(Un, d),
    F(So, g),
    F(Cr, v),
    F(wo, O),
    F(Eo, y),
    F(Mo, B),
    F(ko, L),
    F(Po, S),
    F(Vn, m),
    F(Sr, w),
    F(Ao, H),
    U(W))
  )
    if (W.length) {
      const Q = e.exposed || (e.exposed = {})
      W.forEach((Z) => {
        Object.defineProperty(Q, Z, {
          get: () => n[Z],
          set: (de) => (n[Z] = de),
        })
      })
    } else e.exposed || (e.exposed = {})
  N && e.render === qe && (e.render = N),
    z != null && (e.inheritAttrs = z),
    P && (e.components = P),
    X && (e.directives = X)
}
function Ac(e, t, n = qe, r = !1) {
  U(e) && (e = Is(e))
  for (const s in e) {
    const i = e[s]
    let o
    ge(i)
      ? 'default' in i
        ? (o = Ge(i.from || s, i.default, !0))
        : (o = Ge(i.from || s))
      : (o = Ge(i)),
      _e(o) && r
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (a) => (o.value = a),
          })
        : (t[s] = o)
  }
}
function Ro(e, t, n) {
  Ie(U(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Oo(e, t, n, r) {
  const s = r.includes('.') ? _o(n, r) : () => n[r]
  if (ye(e)) {
    const i = t[e]
    Y(i) && Nt(s, i)
  } else if (Y(e)) Nt(s, e.bind(n))
  else if (ge(e))
    if (U(e)) e.forEach((i) => Oo(i, t, n, r))
    else {
      const i = Y(e.handler) ? e.handler.bind(n) : t[e.handler]
      Y(i) && Nt(s, i, e)
    }
}
function Io(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = i.get(t)
  let u
  return (
    a
      ? (u = a)
      : !s.length && !n && !r
      ? (u = t)
      : ((u = {}), s.length && s.forEach((l) => Ar(u, l, o, !0)), Ar(u, t, o)),
    i.set(t, u),
    u
  )
}
function Ar(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t
  i && Ar(e, i, n, !0), s && s.forEach((o) => Ar(e, o, n, !0))
  for (const o in t)
    if (!(r && o === 'expose')) {
      const a = Pc[o] || (n && n[o])
      e[o] = a ? a(e[o], t[o]) : t[o]
    }
  return e
}
const Pc = {
  data: No,
  props: Bt,
  emits: Bt,
  methods: Bt,
  computed: Bt,
  beforeCreate: Ae,
  created: Ae,
  beforeMount: Ae,
  mounted: Ae,
  beforeUpdate: Ae,
  updated: Ae,
  beforeDestroy: Ae,
  beforeUnmount: Ae,
  destroyed: Ae,
  unmounted: Ae,
  activated: Ae,
  deactivated: Ae,
  errorCaptured: Ae,
  serverPrefetch: Ae,
  components: Bt,
  directives: Bt,
  watch: Mc,
  provide: No,
  inject: kc,
}
function No(e, t) {
  return t
    ? e
      ? function () {
          return me(
            Y(e) ? e.call(this, this) : e,
            Y(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function kc(e, t) {
  return Bt(Is(e), Is(t))
}
function Is(e) {
  if (U(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function Ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Bt(e, t) {
  return e ? me(me(Object.create(null), e), t) : t
}
function Mc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = me(Object.create(null), e)
  for (const r in t) n[r] = Ae(e[r], t[r])
  return n
}
function Rc(e, t, n, r = !1) {
  const s = {},
    i = {}
  or(i, Rr, 1), (e.propsDefaults = Object.create(null)), Lo(e, t, s, i)
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0)
  n ? (e.props = r ? s : no(s)) : e.type.props ? (e.props = s) : (e.props = i),
    (e.attrs = i)
}
function Oc(e, t, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    a = ne(s),
    [u] = e.propsOptions
  let l = !1
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = e.vnode.dynamicProps
      for (let p = 0; p < c.length; p++) {
        let d = c[p]
        const g = t[d]
        if (u)
          if (ie(i, d)) g !== i[d] && ((i[d] = g), (l = !0))
          else {
            const v = Re(d)
            s[v] = Ns(u, a, v, g, e, !1)
          }
        else g !== i[d] && ((i[d] = g), (l = !0))
      }
    }
  } else {
    Lo(e, t, s, i) && (l = !0)
    let c
    for (const p in a)
      (!t || (!ie(t, p) && ((c = Xe(p)) === p || !ie(t, c)))) &&
        (u
          ? n &&
            (n[p] !== void 0 || n[c] !== void 0) &&
            (s[p] = Ns(u, a, p, void 0, e, !0))
          : delete s[p])
    if (i !== a)
      for (const p in i) (!t || (!ie(t, p) && !0)) && (delete i[p], (l = !0))
  }
  l && st(e, 'set', '$attrs')
}
function Lo(e, t, n, r) {
  const [s, i] = e.propsOptions
  let o = !1,
    a
  if (t)
    for (let u in t) {
      if (wn(u)) continue
      const l = t[u]
      let c
      s && ie(s, (c = Re(u)))
        ? !i || !i.includes(c)
          ? (n[c] = l)
          : ((a || (a = {}))[c] = l)
        : ws(e.emitsOptions, u) ||
          ((!(u in r) || l !== r[u]) && ((r[u] = l), (o = !0)))
    }
  if (i) {
    const u = ne(n),
      l = a || oe
    for (let c = 0; c < i.length; c++) {
      const p = i[c]
      n[p] = Ns(s, u, p, l[p], e, !ie(l, p))
    }
  }
  return o
}
function Ns(e, t, n, r, s, i) {
  const o = e[n]
  if (o != null) {
    const a = ie(o, 'default')
    if (a && r === void 0) {
      const u = o.default
      if (o.type !== Function && Y(u)) {
        const { propsDefaults: l } = s
        n in l ? (r = l[n]) : (vt(s), (r = l[n] = u.call(null, t)), Tt())
      } else r = u
    }
    o[0] && (i && !a ? (r = !1) : o[1] && (r === '' || r === Xe(n)) && (r = !0))
  }
  return r
}
function Fo(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const i = e.props,
    o = {},
    a = []
  let u = !1
  if (!Y(e)) {
    const c = (p) => {
      u = !0
      const [d, g] = Fo(p, t, !0)
      me(o, d), g && a.push(...g)
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!i && !u) return r.set(e, Xt), Xt
  if (U(i))
    for (let c = 0; c < i.length; c++) {
      const p = Re(i[c])
      $o(p) && (o[p] = oe)
    }
  else if (i)
    for (const c in i) {
      const p = Re(c)
      if ($o(p)) {
        const d = i[c],
          g = (o[p] = U(d) || Y(d) ? { type: d } : d)
        if (g) {
          const v = jo(Boolean, g.type),
            O = jo(String, g.type)
          ;(g[0] = v > -1),
            (g[1] = O < 0 || v < O),
            (v > -1 || ie(g, 'default')) && a.push(p)
        }
      }
    }
  const l = [o, a]
  return r.set(e, l), l
}
function $o(e) {
  return e[0] !== '$'
}
function Bo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : e === null ? 'null' : ''
}
function Ho(e, t) {
  return Bo(e) === Bo(t)
}
function jo(e, t) {
  return U(t) ? t.findIndex((n) => Ho(n, e)) : Y(t) && Ho(t, e) ? 0 : -1
}
const Do = (e) => e[0] === '_' || e === '$stable',
  Ls = (e) => (U(e) ? e.map(Fe) : [Fe(e)]),
  Ic = (e, t, n) => {
    const r = je((...s) => Ls(t(...s)), n)
    return (r._c = !1), r
  },
  Uo = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (Do(s)) continue
      const i = e[s]
      if (Y(i)) t[s] = Ic(s, i, r)
      else if (i != null) {
        const o = Ls(i)
        t[s] = () => o
      }
    }
  },
  Vo = (e, t) => {
    const n = Ls(t)
    e.slots.default = () => n
  },
  Nc = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = ne(t)), or(t, '_', n)) : Uo(t, (e.slots = {}))
    } else (e.slots = {}), t && Vo(e, t)
    or(e.slots, Rr, 1)
  },
  Lc = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let i = !0,
      o = oe
    if (r.shapeFlag & 32) {
      const a = t._
      a
        ? n && a === 1
          ? (i = !1)
          : (me(s, t), !n && a === 1 && delete s._)
        : ((i = !t.$stable), Uo(t, s)),
        (o = t)
    } else t && (Vo(e, t), (o = { default: 1 }))
    if (i) for (const a in s) !Do(a) && !(a in o) && delete s[a]
  }
function Ko(e, t) {
  const n = Le
  if (n === null) return e
  const r = n.proxy,
    s = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [o, a, u, l = oe] = t[i]
    Y(o) && (o = { mounted: o, updated: o }),
      o.deep && Lt(a),
      s.push({
        dir: o,
        instance: r,
        value: a,
        oldValue: void 0,
        arg: u,
        modifiers: l,
      })
  }
  return e
}
function et(e, t, n, r) {
  const s = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < s.length; o++) {
    const a = s[o]
    i && (a.oldValue = i[o].value)
    let u = a.dir[r]
    u && (Mt(), Ie(u, n, 8, [e.el, a, e, t]), dt())
  }
}
function qo() {
  return {
    app: null,
    config: {
      isNativeTag: ru,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Fc = 0
function $c(e, t) {
  return function (r, s = null) {
    s != null && !ge(s) && (s = null)
    const i = qo(),
      o = new Set()
    let a = !1
    const u = (i.app = {
      _uid: Fc++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: ha,
      get config() {
        return i.config
      },
      set config(l) {},
      use(l, ...c) {
        return (
          o.has(l) ||
            (l && Y(l.install)
              ? (o.add(l), l.install(u, ...c))
              : Y(l) && (o.add(l), l(u, ...c))),
          u
        )
      },
      mixin(l) {
        return i.mixins.includes(l) || i.mixins.push(l), u
      },
      component(l, c) {
        return c ? ((i.components[l] = c), u) : i.components[l]
      },
      directive(l, c) {
        return c ? ((i.directives[l] = c), u) : i.directives[l]
      },
      mount(l, c, p) {
        if (!a) {
          const d = ee(r, s)
          return (
            (d.appContext = i),
            c && t ? t(d, l) : e(d, l, p),
            (a = !0),
            (u._container = l),
            (l.__vue_app__ = u),
            Xs(d.component) || d.component.proxy
          )
        }
      },
      unmount() {
        a && (e(null, u._container), delete u._container.__vue_app__)
      },
      provide(l, c) {
        return (i.provides[l] = c), u
      },
    })
    return u
  }
}
function Pr(e, t, n, r, s = !1) {
  if (U(e)) {
    e.forEach((d, g) => Pr(d, t && (U(t) ? t[g] : t), n, r, s))
    return
  }
  if (Hn(r) && !s) return
  const i = r.shapeFlag & 4 ? Xs(r.component) || r.component.proxy : r.el,
    o = s ? null : i,
    { i: a, r: u } = e,
    l = t && t.r,
    c = a.refs === oe ? (a.refs = {}) : a.refs,
    p = a.setupState
  if (
    (l != null &&
      l !== u &&
      (ye(l)
        ? ((c[l] = null), ie(p, l) && (p[l] = null))
        : _e(l) && (l.value = null)),
    Y(u))
  )
    Ze(u, a, 12, [o, c])
  else {
    const d = ye(u),
      g = _e(u)
    if (d || g) {
      const v = () => {
        if (e.f) {
          const O = d ? c[u] : u.value
          s
            ? U(O) && Yr(O, i)
            : U(O)
            ? O.includes(i) || O.push(i)
            : d
            ? (c[u] = [i])
            : ((u.value = [i]), e.k && (c[e.k] = u.value))
        } else
          d
            ? ((c[u] = o), ie(p, u) && (p[u] = o))
            : _e(u) && ((u.value = o), e.k && (c[e.k] = o))
      }
      o ? ((v.id = -1), Ee(v, n)) : v()
    }
  }
}
let yt = !1
const kr = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  Fs = (e) => e.nodeType === 8
function Bc(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        nextSibling: s,
        parentNode: i,
        remove: o,
        insert: a,
        createComment: u,
      },
    } = e,
    l = (y, _) => {
      if (!_.hasChildNodes()) {
        n(null, y, _), _r()
        return
      }
      ;(yt = !1),
        c(_.firstChild, y, null, null, null),
        _r(),
        yt && console.error('Hydration completed but contains mismatches.')
    },
    c = (y, _, m, T, w, N = !1) => {
      const L = Fs(y) && y.data === '[',
        S = () => v(y, _, m, T, w, L),
        { type: B, ref: H, shapeFlag: W } = _,
        z = y.nodeType
      _.el = y
      let P = null
      switch (B) {
        case un:
          z !== 3
            ? (P = S())
            : (y.data !== _.children && ((yt = !0), (y.data = _.children)),
              (P = s(y)))
          break
        case Pe:
          z !== 8 || L ? (P = S()) : (P = s(y))
          break
        case jt:
          if (z !== 1) P = S()
          else {
            P = y
            const X = !_.children.length
            for (let re = 0; re < _.staticCount; re++)
              X && (_.children += P.outerHTML),
                re === _.staticCount - 1 && (_.anchor = P),
                (P = s(P))
            return P
          }
          break
        case ve:
          L ? (P = g(y, _, m, T, w, N)) : (P = S())
          break
        default:
          if (W & 1)
            z !== 1 || _.type.toLowerCase() !== y.tagName.toLowerCase()
              ? (P = S())
              : (P = p(y, _, m, T, w, N))
          else if (W & 6) {
            _.slotScopeIds = w
            const X = i(y)
            if ((t(_, X, null, m, T, kr(X), N), (P = L ? O(y) : s(y)), Hn(_))) {
              let re
              L
                ? ((re = ee(ve)),
                  (re.anchor = P ? P.previousSibling : X.lastChild))
                : (re = y.nodeType === 3 ? Ir('') : ee('div')),
                (re.el = y),
                (_.component.subTree = re)
            }
          } else
            W & 64
              ? z !== 8
                ? (P = S())
                : (P = _.type.hydrate(y, _, m, T, w, N, e, d))
              : W & 128 &&
                (P = _.type.hydrate(y, _, m, T, kr(i(y)), w, N, e, c))
      }
      return H != null && Pr(H, null, T, _), P
    },
    p = (y, _, m, T, w, N) => {
      N = N || !!_.dynamicChildren
      const { type: L, props: S, patchFlag: B, shapeFlag: H, dirs: W } = _,
        z = (L === 'input' && W) || L === 'option'
      if (z || B !== -1) {
        if ((W && et(_, null, m, 'created'), S))
          if (z || !N || B & (16 | 32))
            for (const X in S)
              ((z && X.endsWith('value')) || (Tn(X) && !wn(X))) &&
                r(y, X, null, S[X], !1, void 0, m)
          else S.onClick && r(y, 'onClick', null, S.onClick, !1, void 0, m)
        let P
        if (
          ((P = S && S.onVnodeBeforeMount) && ke(P, m, _),
          W && et(_, null, m, 'beforeMount'),
          ((P = S && S.onVnodeMounted) || W) &&
            mo(() => {
              P && ke(P, m, _), W && et(_, null, m, 'mounted')
            }, T),
          H & 16 && !(S && (S.innerHTML || S.textContent)))
        ) {
          let X = d(y.firstChild, _, y, m, T, w, N)
          for (; X; ) {
            yt = !0
            const re = X
            ;(X = X.nextSibling), o(re)
          }
        } else
          H & 8 &&
            y.textContent !== _.children &&
            ((yt = !0), (y.textContent = _.children))
      }
      return y.nextSibling
    },
    d = (y, _, m, T, w, N, L) => {
      L = L || !!_.dynamicChildren
      const S = _.children,
        B = S.length
      for (let H = 0; H < B; H++) {
        const W = L ? S[H] : (S[H] = Fe(S[H]))
        if (y) y = c(y, W, T, w, N, L)
        else {
          if (W.type === un && !W.children) continue
          ;(yt = !0), n(null, W, m, null, T, w, kr(m), N)
        }
      }
      return y
    },
    g = (y, _, m, T, w, N) => {
      const { slotScopeIds: L } = _
      L && (w = w ? w.concat(L) : L)
      const S = i(y),
        B = d(s(y), _, S, m, T, w, N)
      return B && Fs(B) && B.data === ']'
        ? s((_.anchor = B))
        : ((yt = !0), a((_.anchor = u(']')), S, B), B)
    },
    v = (y, _, m, T, w, N) => {
      if (((yt = !0), (_.el = null), N)) {
        const B = O(y)
        for (;;) {
          const H = s(y)
          if (H && H !== B) o(H)
          else break
        }
      }
      const L = s(y),
        S = i(y)
      return o(y), n(null, _, S, L, m, T, kr(S), w), L
    },
    O = (y) => {
      let _ = 0
      for (; y; )
        if (
          ((y = s(y)), y && Fs(y) && (y.data === '[' && _++, y.data === ']'))
        ) {
          if (_ === 0) return s(y)
          _--
        }
      return y
    }
  return [l, c]
}
const Ee = mo
function Wo(e) {
  return Qo(e)
}
function zo(e) {
  return Qo(e, Bc)
}
function Qo(e, t) {
  const n = uu()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: o,
      createText: a,
      createComment: u,
      setText: l,
      setElementText: c,
      parentNode: p,
      nextSibling: d,
      setScopeId: g = qe,
      cloneNode: v,
      insertStaticContent: O,
    } = e,
    y = (
      f,
      h,
      b,
      C = null,
      x = null,
      M = null,
      $ = !1,
      k = null,
      R = !!h.dynamicChildren,
    ) => {
      if (f === h) return
      f && !nt(f, h) && ((C = V(f)), He(f, x, M, !0), (f = null)),
        h.patchFlag === -2 && ((R = !1), (h.dynamicChildren = null))
      const { type: A, ref: K, shapeFlag: j } = h
      switch (A) {
        case un:
          _(f, h, b, C)
          break
        case Pe:
          m(f, h, b, C)
          break
        case jt:
          f == null && T(h, b, C, $)
          break
        case ve:
          X(f, h, b, C, x, M, $, k, R)
          break
        default:
          j & 1
            ? L(f, h, b, C, x, M, $, k, R)
            : j & 6
            ? re(f, h, b, C, x, M, $, k, R)
            : (j & 64 || j & 128) && A.process(f, h, b, C, x, M, $, k, R, ce)
      }
      K != null && x && Pr(K, f && f.ref, M, h || f, !h)
    },
    _ = (f, h, b, C) => {
      if (f == null) r((h.el = a(h.children)), b, C)
      else {
        const x = (h.el = f.el)
        h.children !== f.children && l(x, h.children)
      }
    },
    m = (f, h, b, C) => {
      f == null ? r((h.el = u(h.children || '')), b, C) : (h.el = f.el)
    },
    T = (f, h, b, C) => {
      ;[f.el, f.anchor] = O(f.children, h, b, C, f.el, f.anchor)
    },
    w = ({ el: f, anchor: h }, b, C) => {
      let x
      for (; f && f !== h; ) (x = d(f)), r(f, b, C), (f = x)
      r(h, b, C)
    },
    N = ({ el: f, anchor: h }) => {
      let b
      for (; f && f !== h; ) (b = d(f)), s(f), (f = b)
      s(h)
    },
    L = (f, h, b, C, x, M, $, k, R) => {
      ;($ = $ || h.type === 'svg'),
        f == null ? S(h, b, C, x, M, $, k, R) : W(f, h, x, M, $, k, R)
    },
    S = (f, h, b, C, x, M, $, k) => {
      let R, A
      const {
        type: K,
        props: j,
        shapeFlag: q,
        transition: J,
        patchFlag: se,
        dirs: pe,
      } = f
      if (f.el && v !== void 0 && se === -1) R = f.el = v(f.el)
      else {
        if (
          ((R = f.el = o(f.type, M, j && j.is, j)),
          q & 8
            ? c(R, f.children)
            : q & 16 &&
              H(f.children, R, null, C, x, M && K !== 'foreignObject', $, k),
          pe && et(f, null, C, 'created'),
          j)
        ) {
          for (const fe in j)
            fe !== 'value' &&
              !wn(fe) &&
              i(R, fe, null, j[fe], M, f.children, C, x, I)
          'value' in j && i(R, 'value', null, j.value),
            (A = j.onVnodeBeforeMount) && ke(A, C, f)
        }
        B(R, f, f.scopeId, $, C)
      }
      pe && et(f, null, C, 'beforeMount')
      const le = (!x || (x && !x.pendingBranch)) && J && !J.persisted
      le && J.beforeEnter(R),
        r(R, h, b),
        ((A = j && j.onVnodeMounted) || le || pe) &&
          Ee(() => {
            A && ke(A, C, f), le && J.enter(R), pe && et(f, null, C, 'mounted')
          }, x)
    },
    B = (f, h, b, C, x) => {
      if ((b && g(f, b), C)) for (let M = 0; M < C.length; M++) g(f, C[M])
      if (x) {
        let M = x.subTree
        if (h === M) {
          const $ = x.vnode
          B(f, $, $.scopeId, $.slotScopeIds, x.parent)
        }
      }
    },
    H = (f, h, b, C, x, M, $, k, R = 0) => {
      for (let A = R; A < f.length; A++) {
        const K = (f[A] = k ? _t(f[A]) : Fe(f[A]))
        y(null, K, h, b, C, x, M, $, k)
      }
    },
    W = (f, h, b, C, x, M, $) => {
      const k = (h.el = f.el)
      let { patchFlag: R, dynamicChildren: A, dirs: K } = h
      R |= f.patchFlag & 16
      const j = f.props || oe,
        q = h.props || oe
      let J
      b && Ht(b, !1),
        (J = q.onVnodeBeforeUpdate) && ke(J, b, h, f),
        K && et(h, f, b, 'beforeUpdate'),
        b && Ht(b, !0)
      const se = x && h.type !== 'foreignObject'
      if (
        (A
          ? z(f.dynamicChildren, A, k, b, C, se, M)
          : $ || de(f, h, k, null, b, C, se, M, !1),
        R > 0)
      ) {
        if (R & 16) P(k, h, j, q, b, C, x)
        else if (
          (R & 2 && j.class !== q.class && i(k, 'class', null, q.class, x),
          R & 4 && i(k, 'style', j.style, q.style, x),
          R & 8)
        ) {
          const pe = h.dynamicProps
          for (let le = 0; le < pe.length; le++) {
            const fe = pe[le],
              Ke = j[fe],
              zt = q[fe]
            ;(zt !== Ke || fe === 'value') &&
              i(k, fe, Ke, zt, x, f.children, b, C, I)
          }
        }
        R & 1 && f.children !== h.children && c(k, h.children)
      } else !$ && A == null && P(k, h, j, q, b, C, x)
      ;((J = q.onVnodeUpdated) || K) &&
        Ee(() => {
          J && ke(J, b, h, f), K && et(h, f, b, 'updated')
        }, C)
    },
    z = (f, h, b, C, x, M, $) => {
      for (let k = 0; k < h.length; k++) {
        const R = f[k],
          A = h[k],
          K =
            R.el && (R.type === ve || !nt(R, A) || R.shapeFlag & (6 | 64))
              ? p(R.el)
              : b
        y(R, A, K, null, C, x, M, $, !0)
      }
    },
    P = (f, h, b, C, x, M, $) => {
      if (b !== C) {
        for (const k in C) {
          if (wn(k)) continue
          const R = C[k],
            A = b[k]
          R !== A && k !== 'value' && i(f, k, A, R, $, h.children, x, M, I)
        }
        if (b !== oe)
          for (const k in b)
            !wn(k) && !(k in C) && i(f, k, b[k], null, $, h.children, x, M, I)
        'value' in C && i(f, 'value', b.value, C.value)
      }
    },
    X = (f, h, b, C, x, M, $, k, R) => {
      const A = (h.el = f ? f.el : a('')),
        K = (h.anchor = f ? f.anchor : a(''))
      let { patchFlag: j, dynamicChildren: q, slotScopeIds: J } = h
      J && (k = k ? k.concat(J) : J),
        f == null
          ? (r(A, b, C), r(K, b, C), H(h.children, b, K, x, M, $, k, R))
          : j > 0 && j & 64 && q && f.dynamicChildren
          ? (z(f.dynamicChildren, q, b, x, M, $, k),
            (h.key != null || (x && h === x.subTree)) && $s(f, h, !0))
          : de(f, h, b, K, x, M, $, k, R)
    },
    re = (f, h, b, C, x, M, $, k, R) => {
      ;(h.slotScopeIds = k),
        f == null
          ? h.shapeFlag & 512
            ? x.ctx.activate(h, b, C, $, R)
            : Ve(h, b, C, x, M, $, R)
          : F(f, h, R)
    },
    Ve = (f, h, b, C, x, M, $) => {
      const k = (f.component = ia(f, C, x))
      if ((jn(f) && (k.ctx.renderer = ce), aa(k), k.asyncDep)) {
        if ((x && x.registerDep(k, Q), !f.el)) {
          const R = (k.subTree = ee(Pe))
          m(null, R, h, b)
        }
        return
      }
      Q(k, f, h, b, x, M, $)
    },
    F = (f, h, b) => {
      const C = (h.component = f.component)
      if (dc(f, h, b))
        if (C.asyncDep && !C.asyncResolved) {
          Z(C, h, b)
          return
        } else (C.next = h), sc(C.update), C.update()
      else (h.component = f.component), (h.el = f.el), (C.vnode = h)
    },
    Q = (f, h, b, C, x, M, $) => {
      const k = () => {
          if (f.isMounted) {
            let { next: K, bu: j, u: q, parent: J, vnode: se } = f,
              pe = K,
              le
            Ht(f, !1),
              K ? ((K.el = se.el), Z(f, K, $)) : (K = se),
              j && Zt(j),
              (le = K.props && K.props.onVnodeBeforeUpdate) && ke(le, J, K, se),
              Ht(f, !0)
            const fe = wr(f),
              Ke = f.subTree
            ;(f.subTree = fe),
              y(Ke, fe, p(Ke.el), V(Ke), f, x, M),
              (K.el = fe.el),
              pe === null && Es(f, fe.el),
              q && Ee(q, x),
              (le = K.props && K.props.onVnodeUpdated) &&
                Ee(() => ke(le, J, K, se), x)
          } else {
            let K
            const { el: j, props: q } = h,
              { bm: J, m: se, parent: pe } = f,
              le = Hn(h)
            if (
              (Ht(f, !1),
              J && Zt(J),
              !le && (K = q && q.onVnodeBeforeMount) && ke(K, pe, h),
              Ht(f, !0),
              j && G)
            ) {
              const fe = () => {
                ;(f.subTree = wr(f)), G(j, f.subTree, f, x, null)
              }
              le
                ? h.type.__asyncLoader().then(() => !f.isUnmounted && fe())
                : fe()
            } else {
              const fe = (f.subTree = wr(f))
              y(null, fe, b, C, f, x, M), (h.el = fe.el)
            }
            if ((se && Ee(se, x), !le && (K = q && q.onVnodeMounted))) {
              const fe = h
              Ee(() => ke(K, pe, fe), x)
            }
            h.shapeFlag & 256 && f.a && Ee(f.a, x),
              (f.isMounted = !0),
              (h = b = C = null)
          }
        },
        R = (f.effect = new An(k, () => _s(f.update), f.scope)),
        A = (f.update = R.run.bind(R))
      ;(A.id = f.uid), Ht(f, !0), A()
    },
    Z = (f, h, b) => {
      h.component = f
      const C = f.vnode.props
      ;(f.vnode = h),
        (f.next = null),
        Oc(f, h.props, C, b),
        Lc(f, h.children, b),
        Mt(),
        Ts(void 0, f.update),
        dt()
    },
    de = (f, h, b, C, x, M, $, k, R = !1) => {
      const A = f && f.children,
        K = f ? f.shapeFlag : 0,
        j = h.children,
        { patchFlag: q, shapeFlag: J } = h
      if (q > 0) {
        if (q & 128) {
          be(A, j, b, C, x, M, $, k, R)
          return
        } else if (q & 256) {
          we(A, j, b, C, x, M, $, k, R)
          return
        }
      }
      J & 8
        ? (K & 16 && I(A, x, M), j !== A && c(b, j))
        : K & 16
        ? J & 16
          ? be(A, j, b, C, x, M, $, k, R)
          : I(A, x, M, !0)
        : (K & 8 && c(b, ''), J & 16 && H(j, b, C, x, M, $, k, R))
    },
    we = (f, h, b, C, x, M, $, k, R) => {
      ;(f = f || Xt), (h = h || Xt)
      const A = f.length,
        K = h.length,
        j = Math.min(A, K)
      let q
      for (q = 0; q < j; q++) {
        const J = (h[q] = R ? _t(h[q]) : Fe(h[q]))
        y(f[q], J, b, null, x, M, $, k, R)
      }
      A > K ? I(f, x, M, !0, !1, j) : H(h, b, C, x, M, $, k, R, j)
    },
    be = (f, h, b, C, x, M, $, k, R) => {
      let A = 0
      const K = h.length
      let j = f.length - 1,
        q = K - 1
      for (; A <= j && A <= q; ) {
        const J = f[A],
          se = (h[A] = R ? _t(h[A]) : Fe(h[A]))
        if (nt(J, se)) y(J, se, b, null, x, M, $, k, R)
        else break
        A++
      }
      for (; A <= j && A <= q; ) {
        const J = f[j],
          se = (h[q] = R ? _t(h[q]) : Fe(h[q]))
        if (nt(J, se)) y(J, se, b, null, x, M, $, k, R)
        else break
        j--, q--
      }
      if (A > j) {
        if (A <= q) {
          const J = q + 1,
            se = J < K ? h[J].el : C
          for (; A <= q; )
            y(null, (h[A] = R ? _t(h[A]) : Fe(h[A])), b, se, x, M, $, k, R), A++
        }
      } else if (A > q) for (; A <= j; ) He(f[A], x, M, !0), A++
      else {
        const J = A,
          se = A,
          pe = new Map()
        for (A = se; A <= q; A++) {
          const Me = (h[A] = R ? _t(h[A]) : Fe(h[A]))
          Me.key != null && pe.set(Me.key, A)
        }
        let le,
          fe = 0
        const Ke = q - se + 1
        let zt = !1,
          Ci = 0
        const vn = new Array(Ke)
        for (A = 0; A < Ke; A++) vn[A] = 0
        for (A = J; A <= j; A++) {
          const Me = f[A]
          if (fe >= Ke) {
            He(Me, x, M, !0)
            continue
          }
          let Qe
          if (Me.key != null) Qe = pe.get(Me.key)
          else
            for (le = se; le <= q; le++)
              if (vn[le - se] === 0 && nt(Me, h[le])) {
                Qe = le
                break
              }
          Qe === void 0
            ? He(Me, x, M, !0)
            : ((vn[Qe - se] = A + 1),
              Qe >= Ci ? (Ci = Qe) : (zt = !0),
              y(Me, h[Qe], b, null, x, M, $, k, R),
              fe++)
        }
        const Si = zt ? Hc(vn) : Xt
        for (le = Si.length - 1, A = Ke - 1; A >= 0; A--) {
          const Me = se + A,
            Qe = h[Me],
            Ai = Me + 1 < K ? h[Me + 1].el : C
          vn[A] === 0
            ? y(null, Qe, b, Ai, x, M, $, k, R)
            : zt && (le < 0 || A !== Si[le] ? Be(Qe, b, Ai, 2) : le--)
        }
      }
    },
    Be = (f, h, b, C, x = null) => {
      const { el: M, type: $, transition: k, children: R, shapeFlag: A } = f
      if (A & 6) {
        Be(f.component.subTree, h, b, C)
        return
      }
      if (A & 128) {
        f.suspense.move(h, b, C)
        return
      }
      if (A & 64) {
        $.move(f, h, b, ce)
        return
      }
      if ($ === ve) {
        r(M, h, b)
        for (let j = 0; j < R.length; j++) Be(R[j], h, b, C)
        r(f.anchor, h, b)
        return
      }
      if ($ === jt) {
        w(f, h, b)
        return
      }
      if (C !== 2 && A & 1 && k)
        if (C === 0) k.beforeEnter(M), r(M, h, b), Ee(() => k.enter(M), x)
        else {
          const { leave: j, delayLeave: q, afterLeave: J } = k,
            se = () => r(M, h, b),
            pe = () => {
              j(M, () => {
                se(), J && J()
              })
            }
          q ? q(M, se, pe) : pe()
        }
      else r(M, h, b)
    },
    He = (f, h, b, C = !1, x = !1) => {
      const {
        type: M,
        props: $,
        ref: k,
        children: R,
        dynamicChildren: A,
        shapeFlag: K,
        patchFlag: j,
        dirs: q,
      } = f
      if ((k != null && Pr(k, null, b, f, !0), K & 256)) {
        h.ctx.deactivate(f)
        return
      }
      const J = K & 1 && q,
        se = !Hn(f)
      let pe
      if ((se && (pe = $ && $.onVnodeBeforeUnmount) && ke(pe, h, f), K & 6))
        D(f.component, b, C)
      else {
        if (K & 128) {
          f.suspense.unmount(b, C)
          return
        }
        J && et(f, null, h, 'beforeUnmount'),
          K & 64
            ? f.type.remove(f, h, b, x, ce, C)
            : A && (M !== ve || (j > 0 && j & 64))
            ? I(A, h, b, !1, !0)
            : ((M === ve && j & (128 | 256)) || (!x && K & 16)) && I(R, h, b),
          C && zr(f)
      }
      ;((se && (pe = $ && $.onVnodeUnmounted)) || J) &&
        Ee(() => {
          pe && ke(pe, h, f), J && et(f, null, h, 'unmounted')
        }, b)
    },
    zr = (f) => {
      const { type: h, el: b, anchor: C, transition: x } = f
      if (h === ve) {
        E(b, C)
        return
      }
      if (h === jt) {
        N(f)
        return
      }
      const M = () => {
        s(b), x && !x.persisted && x.afterLeave && x.afterLeave()
      }
      if (f.shapeFlag & 1 && x && !x.persisted) {
        const { leave: $, delayLeave: k } = x,
          R = () => $(b, M)
        k ? k(f.el, M, R) : R()
      } else M()
    },
    E = (f, h) => {
      let b
      for (; f !== h; ) (b = d(f)), s(f), (f = b)
      s(h)
    },
    D = (f, h, b) => {
      const { bum: C, scope: x, update: M, subTree: $, um: k } = f
      C && Zt(C),
        x.stop(),
        M && ((M.active = !1), He($, f, h, b)),
        k && Ee(k, h),
        Ee(() => {
          f.isUnmounted = !0
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve())
    },
    I = (f, h, b, C = !1, x = !1, M = 0) => {
      for (let $ = M; $ < f.length; $++) He(f[$], h, b, C, x)
    },
    V = (f) =>
      f.shapeFlag & 6
        ? V(f.component.subTree)
        : f.shapeFlag & 128
        ? f.suspense.next()
        : d(f.anchor || f.el),
    ae = (f, h, b) => {
      f == null
        ? h._vnode && He(h._vnode, null, null, !0)
        : y(h._vnode || null, f, h, null, null, null, b),
        _r(),
        (h._vnode = f)
    },
    ce = {
      p: y,
      um: He,
      m: Be,
      r: zr,
      mt: Ve,
      mc: H,
      pc: de,
      pbc: z,
      n: V,
      o: e,
    }
  let te, G
  return (
    t && ([te, G] = t(ce)), { render: ae, hydrate: te, createApp: $c(ae, te) }
  )
}
function Ht({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function $s(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (U(r) && U(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i]
      let a = s[i]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = s[i] = _t(s[i])), (a.el = o.el)),
        n || $s(o, a))
    }
}
function Hc(e) {
  const t = e.slice(),
    n = [0]
  let r, s, i, o, a
  const u = e.length
  for (r = 0; r < u; r++) {
    const l = e[r]
    if (l !== 0) {
      if (((s = n[n.length - 1]), e[s] < l)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (a = (i + o) >> 1), e[n[a]] < l ? (i = a + 1) : (o = a)
      l < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
const jc = (e) => e.__isTeleport,
  Kn = (e) => e && (e.disabled || e.disabled === ''),
  Yo = (e) => typeof SVGElement != 'undefined' && e instanceof SVGElement,
  Bs = (e, t) => {
    const n = e && e.to
    return ye(n) ? (t ? t(n) : null) : n
  },
  Dc = {
    __isTeleport: !0,
    process(e, t, n, r, s, i, o, a, u, l) {
      const {
          mc: c,
          pc: p,
          pbc: d,
          o: { insert: g, querySelector: v, createText: O, createComment: y },
        } = l,
        _ = Kn(t.props)
      let { shapeFlag: m, children: T, dynamicChildren: w } = t
      if (e == null) {
        const N = (t.el = O('')),
          L = (t.anchor = O(''))
        g(N, n, r), g(L, n, r)
        const S = (t.target = Bs(t.props, v)),
          B = (t.targetAnchor = O(''))
        S && (g(B, S), (o = o || Yo(S)))
        const H = (W, z) => {
          m & 16 && c(T, W, z, s, i, o, a, u)
        }
        _ ? H(n, L) : S && H(S, B)
      } else {
        t.el = e.el
        const N = (t.anchor = e.anchor),
          L = (t.target = e.target),
          S = (t.targetAnchor = e.targetAnchor),
          B = Kn(e.props),
          H = B ? n : L,
          W = B ? N : S
        if (
          ((o = o || Yo(L)),
          w
            ? (d(e.dynamicChildren, w, H, s, i, o, a), $s(e, t, !0))
            : u || p(e, t, H, W, s, i, o, a, !1),
          _)
        )
          B || Mr(t, n, N, l, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const z = (t.target = Bs(t.props, v))
          z && Mr(t, z, null, l, 0)
        } else B && Mr(t, L, S, l, 1)
      }
    },
    remove(e, t, n, r, { um: s, o: { remove: i } }, o) {
      const {
        shapeFlag: a,
        children: u,
        anchor: l,
        targetAnchor: c,
        target: p,
        props: d,
      } = e
      if ((p && i(c), (o || !Kn(d)) && (i(l), a & 16)))
        for (let g = 0; g < u.length; g++) {
          const v = u[g]
          s(v, t, n, !0, !!v.dynamicChildren)
        }
    },
    move: Mr,
    hydrate: Uc,
  }
function Mr(e, t, n, { o: { insert: r }, m: s }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n)
  const { el: o, anchor: a, shapeFlag: u, children: l, props: c } = e,
    p = i === 2
  if ((p && r(o, t, n), (!p || Kn(c)) && u & 16))
    for (let d = 0; d < l.length; d++) s(l[d], t, n, 2)
  p && r(a, t, n)
}
function Uc(
  e,
  t,
  n,
  r,
  s,
  i,
  { o: { nextSibling: o, parentNode: a, querySelector: u } },
  l,
) {
  const c = (t.target = Bs(t.props, u))
  if (c) {
    const p = c._lpa || c.firstChild
    t.shapeFlag & 16 &&
      (Kn(t.props)
        ? ((t.anchor = l(o(e), t, a(e), n, r, s, i)), (t.targetAnchor = p))
        : ((t.anchor = o(e)), (t.targetAnchor = l(p, t, c, n, r, s, i))),
      (c._lpa = t.targetAnchor && o(t.targetAnchor)))
  }
  return t.anchor && o(t.anchor)
}
const Vc = Dc,
  Hs = 'components',
  Kc = 'directives'
function We(e, t) {
  return Ds(Hs, e, !0, t) || e
}
const Xo = Symbol()
function js(e) {
  return ye(e) ? Ds(Hs, e, !1) || e : e || Xo
}
function qc(e) {
  return Ds(Kc, e)
}
function Ds(e, t, n = !0, r = !1) {
  const s = Le || Te
  if (s) {
    const i = s.type
    if (e === Hs) {
      const a = Fr(i)
      if (a && (a === t || a === Re(t) || a === En(Re(t)))) return i
    }
    const o = Jo(s[e] || i[e], t) || Jo(s.appContext[e], t)
    return !o && r ? i : o
  }
}
function Jo(e, t) {
  return e && (e[t] || e[Re(t)] || e[En(Re(t))])
}
const ve = Symbol(void 0),
  un = Symbol(void 0),
  Pe = Symbol(void 0),
  jt = Symbol(void 0),
  qn = []
let tt = null
function xe(e = !1) {
  qn.push((tt = e ? null : []))
}
function Zo() {
  qn.pop(), (tt = qn[qn.length - 1] || null)
}
let cn = 1
function Us(e) {
  cn += e
}
function Go(e) {
  return (
    (e.dynamicChildren = cn > 0 ? tt || Xt : null),
    Zo(),
    cn > 0 && tt && tt.push(e),
    e
  )
}
function Wn(e, t, n, r, s, i) {
  return Go(Vs(e, t, n, r, s, i, !0))
}
function Ue(e, t, n, r, s) {
  return Go(ee(e, t, n, r, s, !0))
}
function gt(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function nt(e, t) {
  return e.type === t.type && e.key === t.key
}
function Wc(e) {}
const Rr = '__vInternal',
  ea = ({ key: e }) => (e != null ? e : null),
  Or = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ye(e) || _e(e) || Y(e)
        ? { i: Le, r: e, k: t, f: !!n }
        : e
      : null
function Vs(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  i = e === ve ? 0 : 1,
  o = !1,
  a = !1,
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ea(t),
    ref: t && Or(t),
    scopeId: Tr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
  }
  return (
    a
      ? (Ks(u, n), i & 128 && e.normalize(u))
      : n && (u.shapeFlag |= ye(n) ? 8 : 16),
    cn > 0 &&
      !o &&
      tt &&
      (u.patchFlag > 0 || i & 6) &&
      u.patchFlag !== 32 &&
      tt.push(u),
    u
  )
}
const ee = zc
function zc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if (((!e || e === Xo) && (e = Pe), gt(e))) {
    const a = bt(e, t, !0)
    return n && Ks(a, n), a
  }
  if ((lf(e) && (e = e.__vccOpts), t)) {
    t = ta(t)
    let { class: a, style: u } = t
    a && !ye(a) && (t.class = Yt(a)),
      ge(u) && (us(u) && !U(u) && (u = me({}, u)), (t.style = Qt(u)))
  }
  const o = ye(e) ? 1 : hc(e) ? 128 : jc(e) ? 64 : ge(e) ? 4 : Y(e) ? 2 : 0
  return Vs(e, t, n, r, s, o, i, !0)
}
function ta(e) {
  return e ? (us(e) || Rr in e ? me({}, e) : e) : null
}
function bt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: o } = e,
    a = t ? ra(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && ea(a),
    ref:
      t && t.ref ? (n && s ? (U(s) ? s.concat(Or(t)) : [s, Or(t)]) : Or(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ve ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && bt(e.ssContent),
    ssFallback: e.ssFallback && bt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
  }
}
function Ir(e = ' ', t = 0) {
  return ee(un, null, e, t)
}
function Qc(e, t) {
  const n = ee(jt, null, e)
  return (n.staticCount = t), n
}
function na(e = '', t = !1) {
  return t ? (xe(), Ue(Pe, null, e)) : ee(Pe, null, e)
}
function Fe(e) {
  return e == null || typeof e == 'boolean'
    ? ee(Pe)
    : U(e)
    ? ee(ve, null, e.slice())
    : typeof e == 'object'
    ? _t(e)
    : ee(un, null, String(e))
}
function _t(e) {
  return e.el === null || e.memo ? e : bt(e)
}
function Ks(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (U(t)) n = 16
  else if (typeof t == 'object')
    if (r & (1 | 64)) {
      const s = t.default
      s && (s._c && (s._d = !1), Ks(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Rr in t)
        ? (t._ctx = Le)
        : s === 3 &&
          Le &&
          (Le.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Y(t)
      ? ((t = { default: t, _ctx: Le }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Ir(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function ra(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === 'class')
        t.class !== r.class && (t.class = Yt([t.class, r.class]))
      else if (s === 'style') t.style = Qt([t.style, r.style])
      else if (Tn(s)) {
        const i = t[s],
          o = r[s]
        o &&
          i !== o &&
          !(U(i) && i.includes(o)) &&
          (t[s] = i ? [].concat(i, o) : o)
      } else s !== '' && (t[s] = r[s])
  }
  return t
}
function ke(e, t, n, r = null) {
  Ie(e, t, 7, [n, r])
}
function qs(e, t, n, r) {
  let s
  const i = n && n[r]
  if (U(e) || ye(e)) {
    s = new Array(e.length)
    for (let o = 0, a = e.length; o < a; o++)
      s[o] = t(e[o], o, void 0, i && i[o])
  } else if (typeof e == 'number') {
    s = new Array(e)
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, i && i[o])
  } else if (ge(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (o, a) => t(o, a, void 0, i && i[a]))
    else {
      const o = Object.keys(e)
      s = new Array(o.length)
      for (let a = 0, u = o.length; a < u; a++) {
        const l = o[a]
        s[a] = t(e[l], l, a, i && i[a])
      }
    }
  else s = []
  return n && (n[r] = s), s
}
function Yc(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n]
    if (U(r)) for (let s = 0; s < r.length; s++) e[r[s].name] = r[s].fn
    else r && (e[r.name] = r.fn)
  }
  return e
}
function Xc(e, t, n = {}, r, s) {
  if (Le.isCE) return ee('slot', t === 'default' ? null : { name: t }, r && r())
  let i = e[t]
  i && i._c && (i._d = !1), xe()
  const o = i && sa(i(n)),
    a = Ue(
      ve,
      { key: n.key || `_${t}` },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !s && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
    i && i._c && (i._d = !0),
    a
  )
}
function sa(e) {
  return e.some((t) =>
    gt(t) ? !(t.type === Pe || (t.type === ve && !sa(t.children))) : !0,
  )
    ? e
    : null
}
function Jc(e) {
  const t = {}
  for (const n in e) t[xn(n)] = e[n]
  return t
}
const Ws = (e) => (e ? (oa(e) ? Xs(e) || e.proxy : Ws(e.parent)) : null),
  Nr = me(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ws(e.parent),
    $root: (e) => Ws(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Io(e),
    $forceUpdate: (e) => () => _s(e.update),
    $nextTick: (e) => In.bind(e.proxy),
    $watch: (e) => Tc.bind(e),
  }),
  zs = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: o,
        type: a,
        appContext: u,
      } = e
      let l
      if (t[0] !== '$') {
        const g = o[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return r[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (r !== oe && ie(r, t)) return (o[t] = 1), r[t]
          if (s !== oe && ie(s, t)) return (o[t] = 2), s[t]
          if ((l = e.propsOptions[0]) && ie(l, t)) return (o[t] = 3), i[t]
          if (n !== oe && ie(n, t)) return (o[t] = 4), n[t]
          Os && (o[t] = 0)
        }
      }
      const c = Nr[t]
      let p, d
      if (c) return t === '$attrs' && Oe(e, 'get', t), c(e)
      if ((p = a.__cssModules) && (p = p[t])) return p
      if (n !== oe && ie(n, t)) return (o[t] = 4), n[t]
      if (((d = u.config.globalProperties), ie(d, t))) return d[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e
      if (s !== oe && ie(s, t)) s[t] = n
      else if (r !== oe && ie(r, t)) r[t] = n
      else if (ie(e.props, t)) return !1
      return t[0] === '$' && t.slice(1) in e ? !1 : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      o,
    ) {
      let a
      return (
        !!n[o] ||
        (e !== oe && ie(e, o)) ||
        (t !== oe && ie(t, o)) ||
        ((a = i[0]) && ie(a, o)) ||
        ie(r, o) ||
        ie(Nr, o) ||
        ie(s.config.globalProperties, o)
      )
    },
  },
  Zc = me({}, zs, {
    get(e, t) {
      if (t !== Symbol.unscopables) return zs.get(e, t, e)
    },
    has(e, t) {
      return t[0] !== '_' && !Yl(t)
    },
  }),
  Gc = qo()
let ef = 0
function ia(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Gc,
    i = {
      uid: ef++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Gr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Fo(r, s),
      emitsOptions: fo(r, s),
      emit: null,
      emitted: null,
      propsDefaults: oe,
      inheritAttrs: r.inheritAttrs,
      ctx: oe,
      data: oe,
      props: oe,
      attrs: oe,
      slots: oe,
      refs: oe,
      setupState: oe,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = oc.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let Te = null
const ze = () => Te || Le,
  vt = (e) => {
    ;(Te = e), e.scope.on()
  },
  Tt = () => {
    Te && Te.scope.off(), (Te = null)
  }
function oa(e) {
  return e.vnode.shapeFlag & 4
}
let fn = !1
function aa(e, t = !1) {
  fn = t
  const { props: n, children: r } = e.vnode,
    s = oa(e)
  Rc(e, n, s, t), Nc(e, r)
  const i = s ? tf(e, t) : void 0
  return (fn = !1), i
}
function tf(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = cs(new Proxy(e.ctx, zs)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? ua(e) : null)
    vt(e), Mt()
    const i = Ze(r, e, 0, [e.props, s])
    if ((dt(), Tt(), Jr(i))) {
      if ((i.then(Tt, Tt), t))
        return i
          .then((o) => {
            Qs(e, o, t)
          })
          .catch((o) => {
            It(o, e, 0)
          })
      e.asyncDep = i
    } else Qs(e, i, t)
  } else la(e, t)
}
function Qs(e, t, n) {
  Y(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ge(t) && (e.setupState = hs(t)),
    la(e, n)
}
let Lr, Ys
function nf(e) {
  ;(Lr = e),
    (Ys = (t) => {
      t.render._rc && (t.withProxy = new Proxy(t.ctx, Zc))
    })
}
const rf = () => !Lr
function la(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && Lr && !r.render) {
      const s = r.template
      if (s) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: u } = r,
          l = me(me({ isCustomElement: i, delimiters: a }, o), u)
        r.render = Lr(s, l)
      }
    }
    ;(e.render = r.render || qe), Ys && Ys(e)
  }
  vt(e), Mt(), Sc(e), dt(), Tt()
}
function sf(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return Oe(e, 'get', '$attrs'), t[n]
    },
  })
}
function ua(e) {
  const t = (r) => {
    e.exposed = r || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = sf(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Xs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(hs(cs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Nr) return Nr[n](e)
        },
      }))
    )
}
const of = /(?:^|[-_])(\w)/g,
  af = (e) => e.replace(of, (t) => t.toUpperCase()).replace(/[-_]/g, '')
function Fr(e) {
  return (Y(e) && e.displayName) || e.name
}
function ca(e, t, n = !1) {
  let r = Fr(t)
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/)
    s && (r = s[1])
  }
  if (!r && e && e.parent) {
    const s = (i) => {
      for (const o in i) if (i[o] === t) return o
    }
    r =
      s(e.components || e.parent.type.components) || s(e.appContext.components)
  }
  return r ? af(r) : n ? 'App' : 'Anonymous'
}
function lf(e) {
  return Y(e) && '__vccOpts' in e
}
const $e = (e, t) => Ju(e, t, fn)
function uf() {
  return null
}
function cf() {
  return null
}
function ff(e) {}
function pf(e, t) {
  return null
}
function df() {
  return fa().slots
}
function hf() {
  return fa().attrs
}
function fa() {
  const e = ze()
  return e.setupContext || (e.setupContext = ua(e))
}
function mf(e, t) {
  const n = U(e) ? e.reduce((r, s) => ((r[s] = {}), r), {}) : e
  for (const r in t) {
    const s = n[r]
    s
      ? U(s) || Y(s)
        ? (n[r] = { type: s, default: t[r] })
        : (s.default = t[r])
      : s === null && (n[r] = { default: t[r] })
  }
  return n
}
function yf(e, t) {
  const n = {}
  for (const r in e)
    t.includes(r) ||
      Object.defineProperty(n, r, { enumerable: !0, get: () => e[r] })
  return n
}
function gf(e) {
  const t = ze()
  let n = e()
  return (
    Tt(),
    Jr(n) &&
      (n = n.catch((r) => {
        throw (vt(t), r)
      })),
    [n, () => vt(t)]
  )
}
function pn(e, t, n) {
  const r = arguments.length
  return r === 2
    ? ge(t) && !U(t)
      ? gt(t)
        ? ee(e, null, [t])
        : ee(e, t)
      : ee(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && gt(n) && (n = [n]),
      ee(e, t, n))
}
const pa = Symbol(''),
  bf = () => {
    {
      const e = Ge(pa)
      return (
        e ||
          so(
            'Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.',
          ),
        e
      )
    }
  }
function _f() {}
function vf(e, t, n, r) {
  const s = n[r]
  if (s && da(s, e)) return s
  const i = t()
  return (i.memo = e.slice()), (n[r] = i)
}
function da(e, t) {
  const n = e.memo
  if (n.length != t.length) return !1
  for (let r = 0; r < n.length; r++) if (n[r] !== t[r]) return !1
  return cn > 0 && tt && tt.push(e), !0
}
const ha = '3.2.29',
  Tf = {
    createComponentInstance: ia,
    setupComponent: aa,
    renderComponentRoot: wr,
    setCurrentRenderingInstance: Ln,
    isVNode: gt,
    normalizeVNode: Fe,
  },
  wf = Tf,
  Ef = null,
  xf = null,
  Cf = 'http://www.w3.org/2000/svg',
  Dt = typeof document != 'undefined' ? document : null,
  ma = Dt && Dt.createElement('template'),
  Sf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Dt.createElementNS(Cf, e)
        : Dt.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          s.setAttribute('multiple', r.multiple),
        s
      )
    },
    createText: (e) => Dt.createTextNode(e),
    createComment: (e) => Dt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Dt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    cloneNode(e) {
      const t = e.cloneNode(!0)
      return '_value' in e && (t._value = e._value), t
    },
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (s && (s === i || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        ma.innerHTML = r ? `<svg>${e}</svg>` : e
        const a = ma.content
        if (r) {
          const u = a.firstChild
          for (; u.firstChild; ) a.appendChild(u.firstChild)
          a.removeChild(u)
        }
        t.insertBefore(a, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  }
function Af(e, t, n) {
  const r = e._vtc
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function Pf(e, t, n) {
  const r = e.style,
    s = ye(n)
  if (n && !s) {
    for (const i in n) Js(r, i, n[i])
    if (t && !ye(t)) for (const i in t) n[i] == null && Js(r, i, '')
  } else {
    const i = r.display
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (r.display = i)
  }
}
const ya = /\s*!important$/
function Js(e, t, n) {
  if (U(n)) n.forEach((r) => Js(e, t, r))
  else if (t.startsWith('--')) e.setProperty(t, n)
  else {
    const r = kf(e, t)
    ya.test(n)
      ? e.setProperty(Xe(r), n.replace(ya, ''), 'important')
      : (e[r] = n)
  }
}
const ga = ['Webkit', 'Moz', 'ms'],
  Zs = {}
function kf(e, t) {
  const n = Zs[t]
  if (n) return n
  let r = Re(t)
  if (r !== 'filter' && r in e) return (Zs[t] = r)
  r = En(r)
  for (let s = 0; s < ga.length; s++) {
    const i = ga[s] + r
    if (i in e) return (Zs[t] = i)
  }
  return t
}
const ba = 'http://www.w3.org/1999/xlink'
function Mf(e, t, n, r, s) {
  if (r && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(ba, t.slice(6, t.length))
      : e.setAttributeNS(ba, t, n)
  else {
    const i = Jl(t)
    n == null || (i && !Mi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n)
  }
}
function Rf(e, t, n, r, s, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && o(r, s, i), (e[t] = n == null ? '' : n)
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const a = n == null ? '' : n
    ;(e.value !== a || e.tagName === 'OPTION') && (e.value = a),
      n == null && e.removeAttribute(t)
    return
  }
  if (n === '' || n == null) {
    const a = typeof e[t]
    if (a === 'boolean') {
      e[t] = Mi(n)
      return
    } else if (n == null && a === 'string') {
      ;(e[t] = ''), e.removeAttribute(t)
      return
    } else if (a === 'number') {
      try {
        e[t] = 0
      } catch {}
      e.removeAttribute(t)
      return
    }
  }
  try {
    e[t] = n
  } catch {}
}
let $r = Date.now,
  _a = !1
if (typeof window != 'undefined') {
  $r() > document.createEvent('Event').timeStamp &&
    ($r = () => performance.now())
  const e = navigator.userAgent.match(/firefox\/(\d+)/i)
  _a = !!(e && Number(e[1]) <= 53)
}
let Gs = 0
const Of = Promise.resolve(),
  If = () => {
    Gs = 0
  },
  Nf = () => Gs || (Of.then(If), (Gs = $r()))
function lt(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function Lf(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
function Ff(e, t, n, r, s = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t]
  if (r && o) o.value = r
  else {
    const [a, u] = $f(t)
    if (r) {
      const l = (i[t] = Bf(r, s))
      lt(e, a, l, u)
    } else o && (Lf(e, a, o, u), (i[t] = void 0))
  }
}
const va = /(?:Once|Passive|Capture)$/
function $f(e) {
  let t
  if (va.test(e)) {
    t = {}
    let n
    for (; (n = e.match(va)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [Xe(e.slice(2)), t]
}
function Bf(e, t) {
  const n = (r) => {
    const s = r.timeStamp || $r()
    ;(_a || s >= n.attached - 1) && Ie(Hf(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = Nf()), n
}
function Hf(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const Ta = /^on[a-z]/,
  jf = (e, t, n, r, s = !1, i, o, a, u) => {
    t === 'class'
      ? Af(e, r, s)
      : t === 'style'
      ? Pf(e, n, r)
      : Tn(t)
      ? Qr(t) || Ff(e, t, n, r, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Df(e, t, r, s)
        )
      ? Rf(e, t, r, i, o, a, u)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        Mf(e, t, r, s))
  }
function Df(e, t, n, r) {
  return r
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Ta.test(t) && Y(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Ta.test(t) && ye(n))
    ? !1
    : t in e
}
function wa(e, t) {
  const n = Se(e)
  class r extends Br {
    constructor(i) {
      super(n, i, t)
    }
  }
  return (r.def = n), r
}
const Uf = (e) => wa(e, Ka),
  Vf = typeof HTMLElement != 'undefined' ? HTMLElement : class {}
class Br extends Vf {
  constructor(t, n = {}, r) {
    super()
    ;(this._def = t),
      (this._props = n),
      (this._instance = null),
      (this._connected = !1),
      (this._resolved = !1),
      (this._numberProps = null),
      this.shadowRoot && r
        ? r(this._createVNode(), this.shadowRoot)
        : this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    ;(this._connected = !0), this._instance || this._resolveDef()
  }
  disconnectedCallback() {
    ;(this._connected = !1),
      In(() => {
        this._connected || (ii(null, this.shadowRoot), (this._instance = null))
      })
  }
  _resolveDef() {
    if (this._resolved) return
    this._resolved = !0
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name)
    new MutationObserver((r) => {
      for (const s of r) this._setAttr(s.attributeName)
    }).observe(this, { attributes: !0 })
    const t = (r) => {
        const { props: s, styles: i } = r,
          o = !U(s),
          a = s ? (o ? Object.keys(s) : s) : []
        let u
        if (o)
          for (const l in this._props) {
            const c = s[l]
            ;(c === Number || (c && c.type === Number)) &&
              ((this._props[l] = ft(this._props[l])),
              ((u || (u = Object.create(null)))[l] = !0))
          }
        this._numberProps = u
        for (const l of Object.keys(this))
          l[0] !== '_' && this._setProp(l, this[l], !0, !1)
        for (const l of a.map(Re))
          Object.defineProperty(this, l, {
            get() {
              return this._getProp(l)
            },
            set(c) {
              this._setProp(l, c)
            },
          })
        this._applyStyles(i), this._update()
      },
      n = this._def.__asyncLoader
    n ? n().then(t) : t(this._def)
  }
  _setAttr(t) {
    let n = this.getAttribute(t)
    this._numberProps && this._numberProps[t] && (n = ft(n)),
      this._setProp(Re(t), n, !1)
  }
  _getProp(t) {
    return this._props[t]
  }
  _setProp(t, n, r = !0, s = !0) {
    n !== this._props[t] &&
      ((this._props[t] = n),
      s && this._instance && this._update(),
      r &&
        (n === !0
          ? this.setAttribute(Xe(t), '')
          : typeof n == 'string' || typeof n == 'number'
          ? this.setAttribute(Xe(t), n + '')
          : n || this.removeAttribute(Xe(t))))
  }
  _update() {
    ii(this._createVNode(), this.shadowRoot)
  }
  _createVNode() {
    const t = ee(this._def, me({}, this._props))
    return (
      this._instance ||
        (t.ce = (n) => {
          ;(this._instance = n),
            (n.isCE = !0),
            (n.emit = (s, ...i) => {
              this.dispatchEvent(new CustomEvent(s, { detail: i }))
            })
          let r = this
          for (; (r = r && (r.parentNode || r.host)); )
            if (r instanceof Br) {
              n.parent = r._instance
              break
            }
        }),
      t
    )
  }
  _applyStyles(t) {
    t &&
      t.forEach((n) => {
        const r = document.createElement('style')
        ;(r.textContent = n), this.shadowRoot.appendChild(r)
      })
  }
}
function Kf(e = '$style') {
  {
    const t = ze()
    if (!t) return oe
    const n = t.type.__cssModules
    if (!n) return oe
    const r = n[e]
    return r || oe
  }
}
function qf(e) {
  const t = ze()
  if (!t) return
  const n = () => ei(t.subTree, e(t.proxy))
  go(n),
    Un(() => {
      const r = new MutationObserver(n)
      r.observe(t.subTree.el.parentNode, { childList: !0 }),
        Sr(() => r.disconnect())
    })
}
function ei(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense
    ;(e = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          ei(n.activeBranch, t)
        })
  }
  for (; e.component; ) e = e.component.subTree
  if (e.shapeFlag & 1 && e.el) Ea(e.el, t)
  else if (e.type === ve) e.children.forEach((n) => ei(n, t))
  else if (e.type === jt) {
    let { el: n, anchor: r } = e
    for (; n && (Ea(n, t), n !== r); ) n = n.nextSibling
  }
}
function Ea(e, t) {
  if (e.nodeType === 1) {
    const n = e.style
    for (const r in t) n.setProperty(`--${r}`, t[r])
  }
}
const wt = 'transition',
  zn = 'animation',
  Hr = (e, { slots: t }) => pn(As, Sa(e), t)
Hr.displayName = 'Transition'
const xa = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Wf = (Hr.props = me({}, As.props, xa)),
  Ut = (e, t = []) => {
    U(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  Ca = (e) => (e ? (U(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Sa(e) {
  const t = {}
  for (const P in e) P in xa || (t[P] = e[P])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: u = i,
      appearActiveClass: l = o,
      appearToClass: c = a,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: g = `${n}-leave-to`,
    } = e,
    v = zf(s),
    O = v && v[0],
    y = v && v[1],
    {
      onBeforeEnter: _,
      onEnter: m,
      onEnterCancelled: T,
      onLeave: w,
      onLeaveCancelled: N,
      onBeforeAppear: L = _,
      onAppear: S = m,
      onAppearCancelled: B = T,
    } = t,
    H = (P, X, re) => {
      Vt(P, X ? c : a), Vt(P, X ? l : o), re && re()
    },
    W = (P, X) => {
      Vt(P, g), Vt(P, d), X && X()
    },
    z = (P) => (X, re) => {
      const Ve = P ? S : m,
        F = () => H(X, P, re)
      Ut(Ve, [X, F]),
        Aa(() => {
          Vt(X, P ? u : i), ut(X, P ? c : a), Ca(Ve) || Pa(X, r, O, F)
        })
    }
  return me(t, {
    onBeforeEnter(P) {
      Ut(_, [P]), ut(P, i), ut(P, o)
    },
    onBeforeAppear(P) {
      Ut(L, [P]), ut(P, u), ut(P, l)
    },
    onEnter: z(!1),
    onAppear: z(!0),
    onLeave(P, X) {
      const re = () => W(P, X)
      ut(P, p),
        Oa(),
        ut(P, d),
        Aa(() => {
          Vt(P, p), ut(P, g), Ca(w) || Pa(P, r, y, re)
        }),
        Ut(w, [P, re])
    },
    onEnterCancelled(P) {
      H(P, !1), Ut(T, [P])
    },
    onAppearCancelled(P) {
      H(P, !0), Ut(B, [P])
    },
    onLeaveCancelled(P) {
      W(P), Ut(N, [P])
    },
  })
}
function zf(e) {
  if (e == null) return null
  if (ge(e)) return [ti(e.enter), ti(e.leave)]
  {
    const t = ti(e)
    return [t, t]
  }
}
function ti(e) {
  return ft(e)
}
function ut(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function Vt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function Aa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Qf = 0
function Pa(e, t, n, r) {
  const s = (e._endId = ++Qf),
    i = () => {
      s === e._endId && r()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: a, propCount: u } = ka(e, t)
  if (!o) return r()
  const l = o + 'end'
  let c = 0
  const p = () => {
      e.removeEventListener(l, d), i()
    },
    d = (g) => {
      g.target === e && ++c >= u && p()
    }
  setTimeout(() => {
    c < u && p()
  }, a + 1),
    e.addEventListener(l, d)
}
function ka(e, t) {
  const n = window.getComputedStyle(e),
    r = (v) => (n[v] || '').split(', '),
    s = r(wt + 'Delay'),
    i = r(wt + 'Duration'),
    o = Ma(s, i),
    a = r(zn + 'Delay'),
    u = r(zn + 'Duration'),
    l = Ma(a, u)
  let c = null,
    p = 0,
    d = 0
  t === wt
    ? o > 0 && ((c = wt), (p = o), (d = i.length))
    : t === zn
    ? l > 0 && ((c = zn), (p = l), (d = u.length))
    : ((p = Math.max(o, l)),
      (c = p > 0 ? (o > l ? wt : zn) : null),
      (d = c ? (c === wt ? i.length : u.length) : 0))
  const g = c === wt && /\b(transform|all)(,|$)/.test(n[wt + 'Property'])
  return { type: c, timeout: p, propCount: d, hasTransform: g }
}
function Ma(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, r) => Ra(n) + Ra(e[r])))
}
function Ra(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Oa() {
  return document.body.offsetHeight
}
const Ia = new WeakMap(),
  Na = new WeakMap(),
  Yf = {
    name: 'TransitionGroup',
    props: me({}, Wf, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = ze(),
        r = Ss()
      let s, i
      return (
        Cr(() => {
          if (!s.length) return
          const o = e.moveClass || `${e.name || 'v'}-move`
          if (!ep(s[0].el, n.vnode.el, o)) return
          s.forEach(Jf), s.forEach(Zf)
          const a = s.filter(Gf)
          Oa(),
            a.forEach((u) => {
              const l = u.el,
                c = l.style
              ut(l, o),
                (c.transform = c.webkitTransform = c.transitionDuration = '')
              const p = (l._moveCb = (d) => {
                ;(d && d.target !== l) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (l.removeEventListener('transitionend', p),
                    (l._moveCb = null),
                    Vt(l, o)))
              })
              l.addEventListener('transitionend', p)
            })
        }),
        () => {
          const o = ne(e),
            a = Sa(o)
          let u = o.tag || ve
          ;(s = i), (i = t.default ? Er(t.default()) : [])
          for (let l = 0; l < i.length; l++) {
            const c = i[l]
            c.key != null && Ft(c, ln(c, a, r, n))
          }
          if (s)
            for (let l = 0; l < s.length; l++) {
              const c = s[l]
              Ft(c, ln(c, a, r, n)), Ia.set(c, c.el.getBoundingClientRect())
            }
          return ee(u, null, i)
        }
      )
    },
  },
  Xf = Yf
function Jf(e) {
  const t = e.el
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
}
function Zf(e) {
  Na.set(e, e.el.getBoundingClientRect())
}
function Gf(e) {
  const t = Ia.get(e),
    n = Na.get(e),
    r = t.left - n.left,
    s = t.top - n.top
  if (r || s) {
    const i = e.el.style
    return (
      (i.transform = i.webkitTransform = `translate(${r}px,${s}px)`),
      (i.transitionDuration = '0s'),
      e
    )
  }
}
function ep(e, t, n) {
  const r = e.cloneNode()
  e._vtc &&
    e._vtc.forEach((o) => {
      o.split(/\s+/).forEach((a) => a && r.classList.remove(a))
    }),
    n.split(/\s+/).forEach((o) => o && r.classList.add(o)),
    (r.style.display = 'none')
  const s = t.nodeType === 1 ? t : t.parentNode
  s.appendChild(r)
  const { hasTransform: i } = ka(r)
  return s.removeChild(r), i
}
const Et = (e) => {
  const t = e.props['onUpdate:modelValue']
  return U(t) ? (n) => Zt(t, n) : t
}
function tp(e) {
  e.target.composing = !0
}
function La(e) {
  const t = e.target
  t.composing && ((t.composing = !1), np(t, 'input'))
}
function np(e, t) {
  const n = document.createEvent('HTMLEvents')
  n.initEvent(t, !0, !0), e.dispatchEvent(n)
}
const jr = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = Et(s)
      const i = r || (s.props && s.props.type === 'number')
      lt(e, t ? 'change' : 'input', (o) => {
        if (o.target.composing) return
        let a = e.value
        n ? (a = a.trim()) : i && (a = ft(a)), e._assign(a)
      }),
        n &&
          lt(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (lt(e, 'compositionstart', tp),
          lt(e, 'compositionend', La),
          lt(e, 'change', La))
    },
    mounted(e, { value: t }) {
      e.value = t == null ? '' : t
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      i,
    ) {
      if (
        ((e._assign = Et(i)),
        e.composing ||
          (document.activeElement === e &&
            (n ||
              (r && e.value.trim() === t) ||
              ((s || e.type === 'number') && ft(e.value) === t))))
      )
        return
      const o = t == null ? '' : t
      e.value !== o && (e.value = o)
    },
  },
  ni = {
    deep: !0,
    created(e, t, n) {
      ;(e._assign = Et(n)),
        lt(e, 'change', () => {
          const r = e._modelValue,
            s = dn(e),
            i = e.checked,
            o = e._assign
          if (U(r)) {
            const a = rr(r, s),
              u = a !== -1
            if (i && !u) o(r.concat(s))
            else if (!i && u) {
              const l = [...r]
              l.splice(a, 1), o(l)
            }
          } else if (At(r)) {
            const a = new Set(r)
            i ? a.add(s) : a.delete(s), o(a)
          } else o(Ha(e, i))
        })
    },
    mounted: Fa,
    beforeUpdate(e, t, n) {
      ;(e._assign = Et(n)), Fa(e, t, n)
    },
  }
function Fa(e, { value: t, oldValue: n }, r) {
  ;(e._modelValue = t),
    U(t)
      ? (e.checked = rr(t, r.props.value) > -1)
      : At(t)
      ? (e.checked = t.has(r.props.value))
      : t !== n && (e.checked = ct(t, Ha(e, !0)))
}
const ri = {
    created(e, { value: t }, n) {
      ;(e.checked = ct(t, n.props.value)),
        (e._assign = Et(n)),
        lt(e, 'change', () => {
          e._assign(dn(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      ;(e._assign = Et(r)), t !== n && (e.checked = ct(t, r.props.value))
    },
  },
  $a = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = At(t)
      lt(e, 'change', () => {
        const i = Array.prototype.filter
          .call(e.options, (o) => o.selected)
          .map((o) => (n ? ft(dn(o)) : dn(o)))
        e._assign(e.multiple ? (s ? new Set(i) : i) : i[0])
      }),
        (e._assign = Et(r))
    },
    mounted(e, { value: t }) {
      Ba(e, t)
    },
    beforeUpdate(e, t, n) {
      e._assign = Et(n)
    },
    updated(e, { value: t }) {
      Ba(e, t)
    },
  }
function Ba(e, t) {
  const n = e.multiple
  if (!(n && !U(t) && !At(t))) {
    for (let r = 0, s = e.options.length; r < s; r++) {
      const i = e.options[r],
        o = dn(i)
      if (n) U(t) ? (i.selected = rr(t, o) > -1) : (i.selected = t.has(o))
      else if (ct(dn(i), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r)
        return
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function dn(e) {
  return '_value' in e ? e._value : e.value
}
function Ha(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const rp = {
  created(e, t, n) {
    Dr(e, t, n, null, 'created')
  },
  mounted(e, t, n) {
    Dr(e, t, n, null, 'mounted')
  },
  beforeUpdate(e, t, n, r) {
    Dr(e, t, n, r, 'beforeUpdate')
  },
  updated(e, t, n, r) {
    Dr(e, t, n, r, 'updated')
  },
}
function Dr(e, t, n, r, s) {
  let i
  switch (e.tagName) {
    case 'SELECT':
      i = $a
      break
    case 'TEXTAREA':
      i = jr
      break
    default:
      switch (n.props && n.props.type) {
        case 'checkbox':
          i = ni
          break
        case 'radio':
          i = ri
          break
        default:
          i = jr
      }
  }
  const o = i[s]
  o && o(e, t, n, r)
}
function sp() {
  ;(jr.getSSRProps = ({ value: e }) => ({ value: e })),
    (ri.getSSRProps = ({ value: e }, t) => {
      if (t.props && ct(t.props.value, e)) return { checked: !0 }
    }),
    (ni.getSSRProps = ({ value: e }, t) => {
      if (U(e)) {
        if (t.props && rr(e, t.props.value) > -1) return { checked: !0 }
      } else if (At(e)) {
        if (t.props && e.has(t.props.value)) return { checked: !0 }
      } else if (e) return { checked: !0 }
    })
}
const ip = ['ctrl', 'shift', 'alt', 'meta'],
  op = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => ip.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  ap = (e, t) => (n, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const i = op[t[s]]
      if (i && i(n, t)) return
    }
    return e(n, ...r)
  },
  lp = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  up = (e, t) => (n) => {
    if (!('key' in n)) return
    const r = Xe(n.key)
    if (t.some((s) => s === r || lp[s] === r)) return e(n)
  },
  si = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e._vod = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Qn(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Qn(e, !0), r.enter(e))
            : r.leave(e, () => {
                Qn(e, !1)
              })
          : Qn(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Qn(e, t)
    },
  }
function Qn(e, t) {
  e.style.display = t ? e._vod : 'none'
}
function cp() {
  si.getSSRProps = ({ value: e }) => {
    if (!e) return { style: { display: 'none' } }
  }
}
const ja = me({ patchProp: jf }, Sf)
let Yn,
  Da = !1
function Ua() {
  return Yn || (Yn = Wo(ja))
}
function Va() {
  return (Yn = Da ? Yn : zo(ja)), (Da = !0), Yn
}
const ii = (...e) => {
    Ua().render(...e)
  },
  Ka = (...e) => {
    Va().hydrate(...e)
  },
  qa = (...e) => {
    const t = Ua().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = za(r)
        if (!s) return
        const i = t._component
        !Y(i) && !i.render && !i.template && (i.template = s.innerHTML),
          (s.innerHTML = '')
        const o = n(s, !1, s instanceof SVGElement)
        return (
          s instanceof Element &&
            (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
          o
        )
      }),
      t
    )
  },
  Wa = (...e) => {
    const t = Va().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = za(r)
        if (s) return n(s, !0, s instanceof SVGElement)
      }),
      t
    )
  }
function za(e) {
  return ye(e) ? document.querySelector(e) : e
}
let Qa = !1
const fp = () => {
    Qa || ((Qa = !0), sp(), cp())
  },
  pp = () => {}
var dp = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  compile: pp,
  EffectScope: Gr,
  ReactiveEffect: An,
  customRef: zu,
  effect: mu,
  effectScope: cu,
  getCurrentScope: fu,
  isProxy: us,
  isReactive: Rt,
  isReadonly: tn,
  isRef: _e,
  isShallow: ls,
  markRaw: cs,
  onScopeDispose: pu,
  proxyRefs: hs,
  reactive: it,
  readonly: as,
  ref: Ot,
  shallowReactive: no,
  shallowReadonly: Uu,
  shallowRef: ds,
  stop: yu,
  toRaw: ne,
  toRef: ms,
  toRefs: Qu,
  triggerRef: Ku,
  unref: nn,
  camelize: Re,
  capitalize: En,
  normalizeClass: Yt,
  normalizeProps: tu,
  normalizeStyle: Qt,
  toDisplayString: Ri,
  toHandlerKey: xn,
  BaseTransition: As,
  Comment: Pe,
  Fragment: ve,
  KeepAlive: xc,
  Static: jt,
  Suspense: xs,
  Teleport: Vc,
  Text: un,
  callWithAsyncErrorHandling: Ie,
  callWithErrorHandling: Ze,
  cloneVNode: bt,
  compatUtils: xf,
  computed: $e,
  createBlock: Ue,
  createCommentVNode: na,
  createElementBlock: Wn,
  createElementVNode: Vs,
  createHydrationRenderer: zo,
  createPropsRestProxy: yf,
  createRenderer: Wo,
  createSlots: Yc,
  createStaticVNode: Qc,
  createTextVNode: Ir,
  createVNode: ee,
  defineAsyncComponent: $t,
  defineComponent: Se,
  defineEmits: cf,
  defineExpose: ff,
  defineProps: uf,
  get devtools() {
    return on
  },
  getCurrentInstance: ze,
  getTransitionRawChildren: Er,
  guardReactiveProps: ta,
  h: pn,
  handleError: It,
  initCustomFormatter: _f,
  inject: Ge,
  isMemoSame: da,
  isRuntimeOnly: rf,
  isVNode: gt,
  mergeDefaults: mf,
  mergeProps: ra,
  nextTick: In,
  onActivated: wo,
  onBeforeMount: Co,
  onBeforeUnmount: Vn,
  onBeforeUpdate: So,
  onDeactivated: Eo,
  onErrorCaptured: Mo,
  onMounted: Un,
  onRenderTracked: ko,
  onRenderTriggered: Po,
  onServerPrefetch: Ao,
  onUnmounted: Sr,
  onUpdated: Cr,
  openBlock: xe,
  popScopeId: lc,
  provide: $n,
  pushScopeId: ac,
  queuePostFlushCb: vs,
  registerRuntimeCompiler: nf,
  renderList: qs,
  renderSlot: Xc,
  resolveComponent: We,
  resolveDirective: qc,
  resolveDynamicComponent: js,
  resolveFilter: Ef,
  resolveTransitionHooks: ln,
  setBlockTracking: Us,
  setDevtoolsHook: co,
  setTransitionHooks: Ft,
  ssrContextKey: pa,
  ssrUtils: wf,
  toHandlers: Jc,
  transformVNodeArgs: Wc,
  useAttrs: hf,
  useSSRContext: bf,
  useSlots: df,
  useTransitionState: Ss,
  version: ha,
  warn: so,
  watch: Nt,
  watchEffect: yo,
  watchPostEffect: go,
  watchSyncEffect: vc,
  withAsyncContext: gf,
  withCtx: je,
  withDefaults: pf,
  withDirectives: Ko,
  withMemo: vf,
  withScopeId: uc,
  Transition: Hr,
  TransitionGroup: Xf,
  VueElement: Br,
  createApp: qa,
  createSSRApp: Wa,
  defineCustomElement: wa,
  defineSSRCustomElement: Uf,
  hydrate: Ka,
  initDirectivesForSSR: fp,
  render: ii,
  useCssModule: Kf,
  useCssVars: qf,
  vModelCheckbox: ni,
  vModelDynamic: rp,
  vModelRadio: ri,
  vModelSelect: $a,
  vModelText: jr,
  vShow: si,
  withKeys: up,
  withModifiers: ap,
})
function oi(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      i = n ? `${n}:${r}` : r
    typeof s == 'object' && s !== null
      ? oi(s, t, i)
      : typeof s == 'function' && (t[i] = s)
  }
  return t
}
function hp(e, t) {
  return e.reduce(
    (n, r) => n.then(() => r.apply(void 0, t)),
    Promise.resolve(null),
  )
}
function mp(e, t) {
  return Promise.all(e.map((n) => n.apply(void 0, t)))
}
class yp {
  constructor() {
    ;(this._hooks = {}),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this))
  }
  hook(t, n) {
    if (!t || typeof n != 'function') return () => {}
    const r = t
    let s
    for (; this._deprecatedHooks[t]; ) {
      const i = this._deprecatedHooks[t]
      typeof i == 'string' ? (s = { to: i }) : (s = i), (t = s.to)
    }
    return (
      s &&
        (s.message
          ? console.warn(s.message)
          : console.warn(
              `${r} hook has been deprecated` +
                (s.to ? `, please use ${s.to}` : ''),
            )),
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = null))
      }
    )
  }
  hookOnce(t, n) {
    let r,
      s = (...i) => (r(), (r = null), (s = null), n(...i))
    return (r = this.hook(t, s)), r
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n)
      r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t]
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = n
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t)
  }
  addHooks(t) {
    const n = oi(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]))
    return () => {
      r.splice(0, r.length).forEach((s) => s())
    }
  }
  removeHooks(t) {
    const n = oi(t)
    for (const r in n) this.removeHook(r, n[r])
  }
  callHook(t, ...n) {
    return hp(this._hooks[t] || [], n)
  }
  callHookParallel(t, ...n) {
    return mp(this._hooks[t] || [], n)
  }
  callHookWith(t, n, ...r) {
    return t(this._hooks[n] || [], r)
  }
}
function gp() {
  return new yp()
}
function Xn(e, t = {}) {
  const n = function () {}
  n.prototype.name = e
  const r = {}
  return new Proxy(n, {
    get(s, i) {
      return i === 'caller'
        ? null
        : i === '__createMock__'
        ? Xn
        : i in t
        ? t[i]
        : (r[i] = r[i] || Xn(`${e}.${i.toString()}`))
    },
    apply(s, i, o) {
      return Xn(`${e}()`)
    },
    construct(s, i, o) {
      return Xn(`[${e}]`)
    },
    enumerate(s) {
      return []
    },
  })
}
var bp = Xn('mock')
function Ur(e) {
  return console.warn(e), bp
}
const _p = new Set(['store', 'spa', 'fetchCounters']),
  vp = new Set([
    'isHMR',
    'base',
    'payload',
    'from',
    'next',
    'error',
    'redirect',
    'redirected',
    'enablePreview',
    '$preview',
    'beforeNuxtRender',
    'beforeSerialize',
  ]),
  Tp = new Set(['req', 'res', 'ssrContext']),
  wp = ['route', 'params', 'query'],
  Ya = {
    isClient: !0,
    isServer: !1,
    isDev: !1,
    isStatic: void 0,
    target: 'server',
    modern: !1,
  },
  Ep = (e) => {
    ;(e._legacyContext = new Proxy(e, {
      get(t, n) {
        if (_p.has(n)) return Ur(`Accessing ${n} is not supported in Nuxt 3.`)
        if (vp.has(n))
          return Ur(`Accessing ${n} is not yet supported in Nuxt 3.`)
        if (wp.includes(n)) {
          if (!('$router' in e))
            return Ur('vue-router is not being used in this project.')
          switch (n) {
            case 'route':
              return t.$router.currentRoute.value
            case 'params':
            case 'query':
              return t.$router.currentRoute.value[n]
          }
        }
        if (n === '$config' || n === 'env') return Rp()
        if (n in Ya) return Ya[n]
        if (!Tp.has(n))
          return n === 'ssrContext'
            ? t._legacyContext
            : t.ssrContext && n in t.ssrContext
            ? t.ssrContext[n]
            : n === 'nuxt'
            ? t.payload
            : n === 'nuxtState'
            ? t.payload.data
            : n in e.vueApp
            ? e.vueApp[n]
            : n in e
            ? e[n]
            : Ur(`Accessing ${n} is not supported in Nuxt3.`)
      },
    })),
      e.hook('app:created', () => {
        const t = he({}, e.vueApp)
        ;(t.$root = t), (t.constructor = t), (window[`$${e.globalName}`] = t)
      })
  },
  Xa = '__nuxt_plugin'
function xp(e) {
  const t = he(
    {
      provide: void 0,
      globalName: 'nuxt',
      payload: it(he({ data: {}, state: {}, _errors: {} }, window.__NUXT__)),
      isHydrating: !0,
      _asyncDataPromises: {},
    },
    e,
  )
  return (
    (t.hooks = gp()),
    (t.hook = t.hooks.hook),
    (t.callHook = t.hooks.callHook),
    (t.provide = (n, r) => {
      const s = '$' + n
      Vr(t, s, r), Vr(t.vueApp.config.globalProperties, s, r)
    }),
    Vr(t.vueApp, '$nuxt', t),
    Vr(t.vueApp.config.globalProperties, '$nuxt', t),
    t.ssrContext && (t.ssrContext.nuxt = t),
    t.provide('config', it(t.payload.config)),
    t
  )
}
async function Cp(e, t) {
  if (typeof t != 'function') return
  const { provide: n } = (await Mp(e, () => t(e))) || {}
  if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r])
}
async function Sp(e, t) {
  for (const n of t) await Cp(e, n)
}
function Ap(e) {
  let t = !1
  const n = e.map((r) =>
    typeof r != 'function'
      ? () => {}
      : Pp(r)
      ? ((t = !0), (s) => r(s._legacyContext, s.provide))
      : r,
  )
  return t && n.unshift(Ep), n
}
function ai(e) {
  return (e[Xa] = !0), e
}
function Pp(e) {
  return !e[Xa]
}
let li
const kp = (e) => {
  li = e
}
function Mp(e, t) {
  return kp(e), t()
}
function hn() {
  const e = ze()
  if (!e) {
    if (!li) throw new Error('nuxt instance unavailable')
    return li
  }
  return e.appContext.app.$nuxt
}
function Rp() {
  return hn().$config
}
function Vr(e, t, n) {
  Object.defineProperty(e, t, { get: () => n })
}
/*!
 * vue-router v4.0.12
 * (c) 2021 Eduardo San Martin Morote
 * @license MIT
 */ const Ja =
    typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  mn = (e) => (Ja ? Symbol(e) : '_vr_' + e),
  Op = mn('rvlm'),
  Za = mn('rvd'),
  ui = mn('r'),
  Ga = mn('rl'),
  ci = mn('rvl'),
  yn = typeof window != 'undefined'
function Ip(e) {
  return e.__esModule || (Ja && e[Symbol.toStringTag] === 'Module')
}
const ue = Object.assign
function fi(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = Array.isArray(s) ? s.map(e) : e(s)
  }
  return n
}
const Jn = () => {},
  Np = /\/$/,
  Lp = (e) => e.replace(Np, '')
function pi(e, t, n = '/') {
  let r,
    s = {},
    i = '',
    o = ''
  const a = t.indexOf('?'),
    u = t.indexOf('#', a > -1 ? a : 0)
  return (
    a > -1 &&
      ((r = t.slice(0, a)),
      (i = t.slice(a + 1, u > -1 ? u : t.length)),
      (s = e(i))),
    u > -1 && ((r = r || t.slice(0, u)), (o = t.slice(u, t.length))),
    (r = Hp(r != null ? r : t, n)),
    { fullPath: r + (i && '?') + i + o, path: r, query: s, hash: o }
  )
}
function Fp(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function el(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function $p(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    gn(t.matched[r], n.matched[s]) &&
    tl(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function gn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function tl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Bp(e[n], t[n])) return !1
  return !0
}
function Bp(e, t) {
  return Array.isArray(e) ? nl(e, t) : Array.isArray(t) ? nl(t, e) : e === t
}
function nl(e, t) {
  return Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Hp(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/')
  let s = n.length - 1,
    i,
    o
  for (i = 0; i < r.length; i++)
    if (((o = r[i]), !(s === 1 || o === '.')))
      if (o === '..') s--
      else break
  return (
    n.slice(0, s).join('/') +
    '/' +
    r.slice(i - (i === r.length ? 1 : 0)).join('/')
  )
}
var Zn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Zn || (Zn = {}))
var Gn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Gn || (Gn = {}))
function jp(e) {
  if (!e)
    if (yn) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Lp(e)
}
const Dp = /^[^#]+#/
function Up(e, t) {
  return e.replace(Dp, '#') + t
}
function Vp(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Kr = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Kp(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!s) return
    t = Vp(s, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset,
      )
}
function rl(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const di = new Map()
function qp(e, t) {
  di.set(e, t)
}
function Wp(e) {
  const t = di.get(e)
  return di.delete(e), t
}
let zp = () => location.protocol + '//' + location.host
function sl(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let a = s.includes(e.slice(i)) ? e.slice(i).length : 1,
      u = s.slice(a)
    return u[0] !== '/' && (u = '/' + u), el(u, '')
  }
  return el(n, e) + r + s
}
function Qp(e, t, n, r) {
  let s = [],
    i = [],
    o = null
  const a = ({ state: d }) => {
    const g = sl(e, location),
      v = n.value,
      O = t.value
    let y = 0
    if (d) {
      if (((n.value = g), (t.value = d), o && o === v)) {
        o = null
        return
      }
      y = O ? d.position - O.position : 0
    } else r(g)
    s.forEach((_) => {
      _(n.value, v, {
        delta: y,
        type: Zn.pop,
        direction: y ? (y > 0 ? Gn.forward : Gn.back) : Gn.unknown,
      })
    })
  }
  function u() {
    o = n.value
  }
  function l(d) {
    s.push(d)
    const g = () => {
      const v = s.indexOf(d)
      v > -1 && s.splice(v, 1)
    }
    return i.push(g), g
  }
  function c() {
    const { history: d } = window
    !d.state || d.replaceState(ue({}, d.state, { scroll: Kr() }), '')
  }
  function p() {
    for (const d of i) d()
    ;(i = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', c)
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', c),
    { pauseListeners: u, listen: l, destroy: p }
  )
}
function il(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Kr() : null,
  }
}
function Yp(e) {
  const { history: t, location: n } = window,
    r = { value: sl(e, n) },
    s = { value: t.state }
  s.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function i(u, l, c) {
    const p = e.indexOf('#'),
      d =
        p > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(p)) + u
          : zp() + e + u
    try {
      t[c ? 'replaceState' : 'pushState'](l, '', d), (s.value = l)
    } catch (g) {
      console.error(g), n[c ? 'replace' : 'assign'](d)
    }
  }
  function o(u, l) {
    const c = ue({}, t.state, il(s.value.back, u, s.value.forward, !0), l, {
      position: s.value.position,
    })
    i(u, c, !0), (r.value = u)
  }
  function a(u, l) {
    const c = ue({}, s.value, t.state, { forward: u, scroll: Kr() })
    i(c.current, c, !0)
    const p = ue({}, il(r.value, u, null), { position: c.position + 1 }, l)
    i(u, p, !1), (r.value = u)
  }
  return { location: r, state: s, push: a, replace: o }
}
function Xp(e) {
  e = jp(e)
  const t = Yp(e),
    n = Qp(e, t.state, t.location, t.replace)
  function r(i, o = !0) {
    o || n.pauseListeners(), history.go(i)
  }
  const s = ue(
    { location: '', base: e, go: r, createHref: Up.bind(null, e) },
    t,
    n,
  )
  return (
    Object.defineProperty(s, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  )
}
function Jp(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function ol(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const xt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  al = mn('nf')
var ll
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(ll || (ll = {}))
function bn(e, t) {
  return ue(new Error(), { type: e, [al]: !0 }, t)
}
function Kt(e, t) {
  return e instanceof Error && al in e && (t == null || !!(e.type & t))
}
const ul = '[^/]+?',
  Zp = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Gp = /[.+*?^${}()[\]/\\]/g
function ed(e, t) {
  const n = ue({}, Zp, t),
    r = []
  let s = n.start ? '^' : ''
  const i = []
  for (const l of e) {
    const c = l.length ? [] : [90]
    n.strict && !l.length && (s += '/')
    for (let p = 0; p < l.length; p++) {
      const d = l[p]
      let g = 40 + (n.sensitive ? 0.25 : 0)
      if (d.type === 0)
        p || (s += '/'), (s += d.value.replace(Gp, '\\$&')), (g += 40)
      else if (d.type === 1) {
        const { value: v, repeatable: O, optional: y, regexp: _ } = d
        i.push({ name: v, repeatable: O, optional: y })
        const m = _ || ul
        if (m !== ul) {
          g += 10
          try {
            new RegExp(`(${m})`)
          } catch (w) {
            throw new Error(
              `Invalid custom RegExp for param "${v}" (${m}): ` + w.message,
            )
          }
        }
        let T = O ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`
        p || (T = y && l.length < 2 ? `(?:/${T})` : '/' + T),
          y && (T += '?'),
          (s += T),
          (g += 20),
          y && (g += -8),
          O && (g += -20),
          m === '.*' && (g += -50)
      }
      c.push(g)
    }
    r.push(c)
  }
  if (n.strict && n.end) {
    const l = r.length - 1
    r[l][r[l].length - 1] += 0.7000000000000001
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && (s += '(?:/|$)')
  const o = new RegExp(s, n.sensitive ? '' : 'i')
  function a(l) {
    const c = l.match(o),
      p = {}
    if (!c) return null
    for (let d = 1; d < c.length; d++) {
      const g = c[d] || '',
        v = i[d - 1]
      p[v.name] = g && v.repeatable ? g.split('/') : g
    }
    return p
  }
  function u(l) {
    let c = '',
      p = !1
    for (const d of e) {
      ;(!p || !c.endsWith('/')) && (c += '/'), (p = !1)
      for (const g of d)
        if (g.type === 0) c += g.value
        else if (g.type === 1) {
          const { value: v, repeatable: O, optional: y } = g,
            _ = v in l ? l[v] : ''
          if (Array.isArray(_) && !O)
            throw new Error(
              `Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const m = Array.isArray(_) ? _.join('/') : _
          if (!m)
            if (y)
              d.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (p = !0))
            else throw new Error(`Missing required param "${v}"`)
          c += m
        }
    }
    return c
  }
  return { re: o, score: r, keys: i, parse: a, stringify: u }
}
function td(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function nd(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const i = td(r[n], s[n])
    if (i) return i
    n++
  }
  return s.length - r.length
}
const rd = { type: 0, value: '' },
  sd = /[a-zA-Z0-9_]/
function id(e) {
  if (!e) return [[]]
  if (e === '/') return [[rd]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(g) {
    throw new Error(`ERR (${n})/"${l}": ${g}`)
  }
  let n = 0,
    r = n
  const s = []
  let i
  function o() {
    i && s.push(i), (i = [])
  }
  let a = 0,
    u,
    l = '',
    c = ''
  function p() {
    !l ||
      (n === 0
        ? i.push({ type: 0, value: l })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (u === '*' || u === '+') &&
            t(
              `A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`,
            ),
          i.push({
            type: 1,
            value: l,
            regexp: c,
            repeatable: u === '*' || u === '+',
            optional: u === '*' || u === '?',
          }))
        : t('Invalid state to consume buffer'),
      (l = ''))
  }
  function d() {
    l += u
  }
  for (; a < e.length; ) {
    if (((u = e[a++]), u === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        u === '/' ? (l && p(), o()) : u === ':' ? (p(), (n = 1)) : d()
        break
      case 4:
        d(), (n = r)
        break
      case 1:
        u === '('
          ? (n = 2)
          : sd.test(u)
          ? d()
          : (p(), (n = 0), u !== '*' && u !== '?' && u !== '+' && a--)
        break
      case 2:
        u === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + u)
            : (n = 3)
          : (c += u)
        break
      case 3:
        p(), (n = 0), u !== '*' && u !== '?' && u !== '+' && a--, (c = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), p(), o(), s
}
function od(e, t, n) {
  const r = ed(id(e.path), n),
    s = ue(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function ad(e, t) {
  const n = [],
    r = new Map()
  t = fl({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(c) {
    return r.get(c)
  }
  function i(c, p, d) {
    const g = !d,
      v = ud(c)
    v.aliasOf = d && d.record
    const O = fl(t, c),
      y = [v]
    if ('alias' in c) {
      const T = typeof c.alias == 'string' ? [c.alias] : c.alias
      for (const w of T)
        y.push(
          ue({}, v, {
            components: d ? d.record.components : v.components,
            path: w,
            aliasOf: d ? d.record : v,
          }),
        )
    }
    let _, m
    for (const T of y) {
      const { path: w } = T
      if (p && w[0] !== '/') {
        const N = p.record.path,
          L = N[N.length - 1] === '/' ? '' : '/'
        T.path = p.record.path + (w && L + w)
      }
      if (
        ((_ = od(T, p, O)),
        d
          ? d.alias.push(_)
          : ((m = m || _),
            m !== _ && m.alias.push(_),
            g && c.name && !cl(_) && o(c.name)),
        'children' in v)
      ) {
        const N = v.children
        for (let L = 0; L < N.length; L++) i(N[L], _, d && d.children[L])
      }
      ;(d = d || _), u(_)
    }
    return m
      ? () => {
          o(m)
        }
      : Jn
  }
  function o(c) {
    if (ol(c)) {
      const p = r.get(c)
      p &&
        (r.delete(c),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(o),
        p.alias.forEach(o))
    } else {
      const p = n.indexOf(c)
      p > -1 &&
        (n.splice(p, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(o),
        c.alias.forEach(o))
    }
  }
  function a() {
    return n
  }
  function u(c) {
    let p = 0
    for (; p < n.length && nd(c, n[p]) >= 0; ) p++
    n.splice(p, 0, c), c.record.name && !cl(c) && r.set(c.record.name, c)
  }
  function l(c, p) {
    let d,
      g = {},
      v,
      O
    if ('name' in c && c.name) {
      if (((d = r.get(c.name)), !d)) throw bn(1, { location: c })
      ;(O = d.record.name),
        (g = ue(
          ld(
            p.params,
            d.keys.filter((m) => !m.optional).map((m) => m.name),
          ),
          c.params,
        )),
        (v = d.stringify(g))
    } else if ('path' in c)
      (v = c.path),
        (d = n.find((m) => m.re.test(v))),
        d && ((g = d.parse(v)), (O = d.record.name))
    else {
      if (((d = p.name ? r.get(p.name) : n.find((m) => m.re.test(p.path))), !d))
        throw bn(1, { location: c, currentLocation: p })
      ;(O = d.record.name),
        (g = ue({}, p.params, c.params)),
        (v = d.stringify(g))
    }
    const y = []
    let _ = d
    for (; _; ) y.unshift(_.record), (_ = _.parent)
    return { name: O, path: v, params: g, matched: y, meta: fd(y) }
  }
  return (
    e.forEach((c) => i(c)),
    {
      addRoute: i,
      resolve: l,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: s,
    }
  )
}
function ld(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function ud(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: cd(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e ? e.components || {} : { default: e.component },
  }
}
function cd(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r]
  return t
}
function cl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function fd(e) {
  return e.reduce((t, n) => ue(t, n.meta), {})
}
function fl(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
const pl = /#/g,
  pd = /&/g,
  dd = /\//g,
  hd = /=/g,
  md = /\?/g,
  dl = /\+/g,
  yd = /%5B/g,
  gd = /%5D/g,
  hl = /%5E/g,
  bd = /%60/g,
  ml = /%7B/g,
  _d = /%7C/g,
  yl = /%7D/g,
  vd = /%20/g
function hi(e) {
  return encodeURI('' + e)
    .replace(_d, '|')
    .replace(yd, '[')
    .replace(gd, ']')
}
function Td(e) {
  return hi(e).replace(ml, '{').replace(yl, '}').replace(hl, '^')
}
function mi(e) {
  return hi(e)
    .replace(dl, '%2B')
    .replace(vd, '+')
    .replace(pl, '%23')
    .replace(pd, '%26')
    .replace(bd, '`')
    .replace(ml, '{')
    .replace(yl, '}')
    .replace(hl, '^')
}
function wd(e) {
  return mi(e).replace(hd, '%3D')
}
function Ed(e) {
  return hi(e).replace(pl, '%23').replace(md, '%3F')
}
function xd(e) {
  return e == null ? '' : Ed(e).replace(dd, '%2F')
}
function qr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function Cd(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < r.length; ++s) {
    const i = r[s].replace(dl, ' '),
      o = i.indexOf('='),
      a = qr(o < 0 ? i : i.slice(0, o)),
      u = o < 0 ? null : qr(i.slice(o + 1))
    if (a in t) {
      let l = t[a]
      Array.isArray(l) || (l = t[a] = [l]), l.push(u)
    } else t[a] = u
  }
  return t
}
function gl(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = wd(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Array.isArray(r) ? r.map((i) => i && mi(i)) : [r && mi(r)]).forEach(
      (i) => {
        i !== void 0 &&
          ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i))
      },
    )
  }
  return t
}
function Sd(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = Array.isArray(r)
        ? r.map((s) => (s == null ? null : '' + s))
        : r == null
        ? r
        : '' + r)
  }
  return t
}
function er() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function Ct(e, t, n, r, s) {
  const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((o, a) => {
      const u = (p) => {
          p === !1
            ? a(bn(4, { from: n, to: t }))
            : p instanceof Error
            ? a(p)
            : Jp(p)
            ? a(bn(2, { from: t, to: p }))
            : (i &&
                r.enterCallbacks[s] === i &&
                typeof p == 'function' &&
                i.push(p),
              o())
        },
        l = e.call(r && r.instances[s], t, n, u)
      let c = Promise.resolve(l)
      e.length < 3 && (c = c.then(u)), c.catch((p) => a(p))
    })
}
function yi(e, t, n, r) {
  const s = []
  for (const i of e)
    for (const o in i.components) {
      let a = i.components[o]
      if (!(t !== 'beforeRouteEnter' && !i.instances[o]))
        if (Ad(a)) {
          const l = (a.__vccOpts || a)[t]
          l && s.push(Ct(l, n, r, i, o))
        } else {
          let u = a()
          s.push(() =>
            u.then((l) => {
              if (!l)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${i.path}"`),
                )
              const c = Ip(l) ? l.default : l
              i.components[o] = c
              const d = (c.__vccOpts || c)[t]
              return d && Ct(d, n, r, i, o)()
            }),
          )
        }
    }
  return s
}
function Ad(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function bl(e) {
  const t = Ge(ui),
    n = Ge(Ga),
    r = $e(() => t.resolve(nn(e.to))),
    s = $e(() => {
      const { matched: u } = r.value,
        { length: l } = u,
        c = u[l - 1],
        p = n.matched
      if (!c || !p.length) return -1
      const d = p.findIndex(gn.bind(null, c))
      if (d > -1) return d
      const g = vl(u[l - 2])
      return l > 1 && vl(c) === g && p[p.length - 1].path !== g
        ? p.findIndex(gn.bind(null, u[l - 2]))
        : d
    }),
    i = $e(() => s.value > -1 && Md(n.params, r.value.params)),
    o = $e(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        tl(n.params, r.value.params),
    )
  function a(u = {}) {
    return kd(u)
      ? t[nn(e.replace) ? 'replace' : 'push'](nn(e.to)).catch(Jn)
      : Promise.resolve()
  }
  return {
    route: r,
    href: $e(() => r.value.href),
    isActive: i,
    isExactActive: o,
    navigate: a,
  }
}
const Pd = Se({
    name: 'RouterLink',
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: bl,
    setup(e, { slots: t }) {
      const n = it(bl(e)),
        { options: r } = Ge(ui),
        s = $e(() => ({
          [Tl(
            e.activeClass,
            r.linkActiveClass,
            'router-link-active',
          )]: n.isActive,
          [Tl(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active',
          )]: n.isExactActive,
        }))
      return () => {
        const i = t.default && t.default(n)
        return e.custom
          ? i
          : pn(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              i,
            )
      }
    },
  }),
  _l = Pd
function kd(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Md(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == 'string') {
      if (r !== s) return !1
    } else if (
      !Array.isArray(s) ||
      s.length !== r.length ||
      r.some((i, o) => i !== s[o])
    )
      return !1
  }
  return !0
}
function vl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Tl = (e, t, n) => (e != null ? e : t != null ? t : n),
  Rd = Se({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    setup(e, { attrs: t, slots: n }) {
      const r = Ge(ci),
        s = $e(() => e.route || r.value),
        i = Ge(Za, 0),
        o = $e(() => s.value.matched[i])
      $n(Za, i + 1), $n(Op, o), $n(ci, s)
      const a = Ot()
      return (
        Nt(
          () => [a.value, o.value, e.name],
          ([u, l, c], [p, d, g]) => {
            l &&
              ((l.instances[c] = u),
              d &&
                d !== l &&
                u &&
                u === p &&
                (l.leaveGuards.size || (l.leaveGuards = d.leaveGuards),
                l.updateGuards.size || (l.updateGuards = d.updateGuards))),
              u &&
                l &&
                (!d || !gn(l, d) || !p) &&
                (l.enterCallbacks[c] || []).forEach((v) => v(u))
          },
          { flush: 'post' },
        ),
        () => {
          const u = s.value,
            l = o.value,
            c = l && l.components[e.name],
            p = e.name
          if (!c) return wl(n.default, { Component: c, route: u })
          const d = l.props[e.name],
            g = d
              ? d === !0
                ? u.params
                : typeof d == 'function'
                ? d(u)
                : d
              : null,
            O = pn(
              c,
              ue({}, g, t, {
                onVnodeUnmounted: (y) => {
                  y.component.isUnmounted && (l.instances[p] = null)
                },
                ref: a,
              }),
            )
          return wl(n.default, { Component: O, route: u }) || O
        }
      )
    },
  })
function wl(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Od = Rd
function Id(e) {
  const t = ad(e.routes, e),
    n = e.parseQuery || Cd,
    r = e.stringifyQuery || gl,
    s = e.history,
    i = er(),
    o = er(),
    a = er(),
    u = ds(xt)
  let l = xt
  yn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const c = fi.bind(null, (E) => '' + E),
    p = fi.bind(null, xd),
    d = fi.bind(null, qr)
  function g(E, D) {
    let I, V
    return (
      ol(E) ? ((I = t.getRecordMatcher(E)), (V = D)) : (V = E), t.addRoute(V, I)
    )
  }
  function v(E) {
    const D = t.getRecordMatcher(E)
    D && t.removeRoute(D)
  }
  function O() {
    return t.getRoutes().map((E) => E.record)
  }
  function y(E) {
    return !!t.getRecordMatcher(E)
  }
  function _(E, D) {
    if (((D = ue({}, D || u.value)), typeof E == 'string')) {
      const G = pi(n, E, D.path),
        f = t.resolve({ path: G.path }, D),
        h = s.createHref(G.fullPath)
      return ue(G, f, {
        params: d(f.params),
        hash: qr(G.hash),
        redirectedFrom: void 0,
        href: h,
      })
    }
    let I
    if ('path' in E) I = ue({}, E, { path: pi(n, E.path, D.path).path })
    else {
      const G = ue({}, E.params)
      for (const f in G) G[f] == null && delete G[f]
      ;(I = ue({}, E, { params: p(E.params) })), (D.params = p(D.params))
    }
    const V = t.resolve(I, D),
      ae = E.hash || ''
    V.params = c(d(V.params))
    const ce = Fp(r, ue({}, E, { hash: Td(ae), path: V.path })),
      te = s.createHref(ce)
    return ue(
      { fullPath: ce, hash: ae, query: r === gl ? Sd(E.query) : E.query || {} },
      V,
      { redirectedFrom: void 0, href: te },
    )
  }
  function m(E) {
    return typeof E == 'string' ? pi(n, E, u.value.path) : ue({}, E)
  }
  function T(E, D) {
    if (l !== E) return bn(8, { from: D, to: E })
  }
  function w(E) {
    return S(E)
  }
  function N(E) {
    return w(ue(m(E), { replace: !0 }))
  }
  function L(E) {
    const D = E.matched[E.matched.length - 1]
    if (D && D.redirect) {
      const { redirect: I } = D
      let V = typeof I == 'function' ? I(E) : I
      return (
        typeof V == 'string' &&
          ((V = V.includes('?') || V.includes('#') ? (V = m(V)) : { path: V }),
          (V.params = {})),
        ue({ query: E.query, hash: E.hash, params: E.params }, V)
      )
    }
  }
  function S(E, D) {
    const I = (l = _(E)),
      V = u.value,
      ae = E.state,
      ce = E.force,
      te = E.replace === !0,
      G = L(I)
    if (G) return S(ue(m(G), { state: ae, force: ce, replace: te }), D || I)
    const f = I
    f.redirectedFrom = D
    let h
    return (
      !ce &&
        $p(r, V, I) &&
        ((h = bn(16, { to: f, from: V })), we(V, V, !0, !1)),
      (h ? Promise.resolve(h) : H(f, V))
        .catch((b) => (Kt(b) ? b : Q(b, f, V)))
        .then((b) => {
          if (b) {
            if (Kt(b, 2))
              return S(
                ue(m(b.to), { state: ae, force: ce, replace: te }),
                D || f,
              )
          } else b = z(f, V, !0, te, ae)
          return W(f, V, b), b
        })
    )
  }
  function B(E, D) {
    const I = T(E, D)
    return I ? Promise.reject(I) : Promise.resolve()
  }
  function H(E, D) {
    let I
    const [V, ae, ce] = Nd(E, D)
    I = yi(V.reverse(), 'beforeRouteLeave', E, D)
    for (const G of V)
      G.leaveGuards.forEach((f) => {
        I.push(Ct(f, E, D))
      })
    const te = B.bind(null, E, D)
    return (
      I.push(te),
      _n(I)
        .then(() => {
          I = []
          for (const G of i.list()) I.push(Ct(G, E, D))
          return I.push(te), _n(I)
        })
        .then(() => {
          I = yi(ae, 'beforeRouteUpdate', E, D)
          for (const G of ae)
            G.updateGuards.forEach((f) => {
              I.push(Ct(f, E, D))
            })
          return I.push(te), _n(I)
        })
        .then(() => {
          I = []
          for (const G of E.matched)
            if (G.beforeEnter && !D.matched.includes(G))
              if (Array.isArray(G.beforeEnter))
                for (const f of G.beforeEnter) I.push(Ct(f, E, D))
              else I.push(Ct(G.beforeEnter, E, D))
          return I.push(te), _n(I)
        })
        .then(
          () => (
            E.matched.forEach((G) => (G.enterCallbacks = {})),
            (I = yi(ce, 'beforeRouteEnter', E, D)),
            I.push(te),
            _n(I)
          ),
        )
        .then(() => {
          I = []
          for (const G of o.list()) I.push(Ct(G, E, D))
          return I.push(te), _n(I)
        })
        .catch((G) => (Kt(G, 8) ? G : Promise.reject(G)))
    )
  }
  function W(E, D, I) {
    for (const V of a.list()) V(E, D, I)
  }
  function z(E, D, I, V, ae) {
    const ce = T(E, D)
    if (ce) return ce
    const te = D === xt,
      G = yn ? history.state : {}
    I &&
      (V || te
        ? s.replace(E.fullPath, ue({ scroll: te && G && G.scroll }, ae))
        : s.push(E.fullPath, ae)),
      (u.value = E),
      we(E, D, I, te),
      de()
  }
  let P
  function X() {
    P = s.listen((E, D, I) => {
      const V = _(E),
        ae = L(V)
      if (ae) {
        S(ue(ae, { replace: !0 }), V).catch(Jn)
        return
      }
      l = V
      const ce = u.value
      yn && qp(rl(ce.fullPath, I.delta), Kr()),
        H(V, ce)
          .catch((te) =>
            Kt(te, 4 | 8)
              ? te
              : Kt(te, 2)
              ? (S(te.to, V)
                  .then((G) => {
                    Kt(G, 4 | 16) &&
                      !I.delta &&
                      I.type === Zn.pop &&
                      s.go(-1, !1)
                  })
                  .catch(Jn),
                Promise.reject())
              : (I.delta && s.go(-I.delta, !1), Q(te, V, ce)),
          )
          .then((te) => {
            ;(te = te || z(V, ce, !1)),
              te &&
                (I.delta
                  ? s.go(-I.delta, !1)
                  : I.type === Zn.pop && Kt(te, 4 | 16) && s.go(-1, !1)),
              W(V, ce, te)
          })
          .catch(Jn)
    })
  }
  let re = er(),
    Ve = er(),
    F
  function Q(E, D, I) {
    de(E)
    const V = Ve.list()
    return (
      V.length ? V.forEach((ae) => ae(E, D, I)) : console.error(E),
      Promise.reject(E)
    )
  }
  function Z() {
    return F && u.value !== xt
      ? Promise.resolve()
      : new Promise((E, D) => {
          re.add([E, D])
        })
  }
  function de(E) {
    F ||
      ((F = !0),
      X(),
      re.list().forEach(([D, I]) => (E ? I(E) : D())),
      re.reset())
  }
  function we(E, D, I, V) {
    const { scrollBehavior: ae } = e
    if (!yn || !ae) return Promise.resolve()
    const ce =
      (!I && Wp(rl(E.fullPath, 0))) ||
      ((V || !I) && history.state && history.state.scroll) ||
      null
    return In()
      .then(() => ae(E, D, ce))
      .then((te) => te && Kp(te))
      .catch((te) => Q(te, E, D))
  }
  const be = (E) => s.go(E)
  let Be
  const He = new Set()
  return {
    currentRoute: u,
    addRoute: g,
    removeRoute: v,
    hasRoute: y,
    getRoutes: O,
    resolve: _,
    options: e,
    push: w,
    replace: N,
    go: be,
    back: () => be(-1),
    forward: () => be(1),
    beforeEach: i.add,
    beforeResolve: o.add,
    afterEach: a.add,
    onError: Ve.add,
    isReady: Z,
    install(E) {
      const D = this
      E.component('RouterLink', _l),
        E.component('RouterView', Od),
        (E.config.globalProperties.$router = D),
        Object.defineProperty(E.config.globalProperties, '$route', {
          enumerable: !0,
          get: () => nn(u),
        }),
        yn &&
          !Be &&
          u.value === xt &&
          ((Be = !0), w(s.location).catch((ae) => {}))
      const I = {}
      for (const ae in xt) I[ae] = $e(() => u.value[ae])
      E.provide(ui, D), E.provide(Ga, it(I)), E.provide(ci, u)
      const V = E.unmount
      He.add(E),
        (E.unmount = function () {
          He.delete(E),
            He.size < 1 &&
              ((l = xt), P && P(), (u.value = xt), (Be = !1), (F = !1)),
            V()
        })
    },
  }
}
function _n(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}
function Nd(e, t) {
  const n = [],
    r = [],
    s = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const a = t.matched[o]
    a && (e.matched.find((l) => gn(l, a)) ? r.push(a) : n.push(a))
    const u = e.matched[o]
    u && (t.matched.find((l) => gn(l, u)) || s.push(u))
  }
  return [n, r, s]
}
const gi = (e, t) => {
    const n = hn(),
      r = ms(n.payload.state, e)
    return r.value === void 0 && t && (r.value = t()), r
  },
  Ld = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
  Fd = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  $d = /^["{[]|^-?[0-9][0-9.]{0,14}$/
function Bd(e, t) {
  if (!(e === '__proto__' || e === 'constructor')) return t
}
function Hd(e) {
  if (typeof e != 'string') return e
  const t = e.toLowerCase()
  if (t === 'true') return !0
  if (t === 'false') return !1
  if (t === 'null') return null
  if (t === 'nan') return NaN
  if (t === 'infinity') return 1 / 0
  if (t !== 'undefined') {
    if (!$d.test(e)) return e
    try {
      return Ld.test(e) || Fd.test(e) ? JSON.parse(e, Bd) : JSON.parse(e)
    } catch {
      return e
    }
  }
}
var jd = Object.defineProperty,
  El = Object.getOwnPropertySymbols,
  Dd = Object.prototype.hasOwnProperty,
  Ud = Object.prototype.propertyIsEnumerable,
  xl = (e, t, n) =>
    t in e
      ? jd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Vd = (e, t) => {
    for (var n in t || (t = {})) Dd.call(t, n) && xl(e, n, t[n])
    if (El) for (var n of El(t)) Ud.call(t, n) && xl(e, n, t[n])
    return e
  },
  Kd = 'usehead',
  Cl = 'head:count',
  bi = 'data-head-attrs',
  qd = (e, t, n) => {
    const r = n.createElement(e)
    for (const s of Object.keys(t)) {
      let i = t[s]
      s === 'key' ||
        i === !1 ||
        (s === 'children' ? (r.textContent = i) : r.setAttribute(s, i))
    }
    return r
  }
function Wd(e, t) {
  if (e instanceof HTMLElement && t instanceof HTMLElement) {
    const n = t.getAttribute('nonce')
    if (n && !e.getAttribute('nonce')) {
      const r = t.cloneNode(!0)
      return (
        r.setAttribute('nonce', ''),
        (r.nonce = n),
        n === e.nonce && e.isEqualNode(r)
      )
    }
  }
  return e.isEqualNode(t)
}
var zd = (e) => {
    const t = ['key', 'id', 'name', 'property']
    for (const n of t) {
      const r =
        typeof e.getAttribute == 'function'
          ? e.hasAttribute(n)
            ? e.getAttribute(n)
            : void 0
          : e[n]
      if (r !== void 0) return { name: n, value: r }
    }
  },
  Qd = [
    'title',
    'meta',
    'link',
    'base',
    'style',
    'script',
    'htmlAttrs',
    'bodyAttrs',
  ],
  Yd = (e) => {
    const t = []
    for (const n of Object.keys(e))
      if (e[n] != null) {
        if (n === 'title') t.push({ tag: n, props: { children: e[n] } })
        else if (n === 'base')
          t.push({ tag: n, props: Vd({ key: 'default' }, e[n]) })
        else if (Qd.includes(n)) {
          const r = e[n]
          Array.isArray(r)
            ? r.forEach((s) => {
                t.push({ tag: n, props: s })
              })
            : r && t.push({ tag: n, props: r })
        }
      }
    return t
  },
  Sl = (e, t) => {
    const n = e.getAttribute(bi)
    if (n) for (const s of n.split(',')) s in t || e.removeAttribute(s)
    const r = []
    for (const s in t) {
      const i = t[s]
      i != null &&
        (i === !1 ? e.removeAttribute(s) : e.setAttribute(s, i), r.push(s))
    }
    r.length ? e.setAttribute(bi, r.join(',')) : e.removeAttribute(bi)
  },
  Xd = (e = window.document, t, n) => {
    var r
    const s = e.head
    let i = s.querySelector(`meta[name="${Cl}"]`)
    const o = i ? Number(i.getAttribute('content')) : 0,
      a = []
    if (i)
      for (
        let l = 0, c = i.previousElementSibling;
        l < o;
        l++, c = (c == null ? void 0 : c.previousElementSibling) || null
      )
        ((r = c == null ? void 0 : c.tagName) == null
          ? void 0
          : r.toLowerCase()) === t && a.push(c)
    else
      (i = e.createElement('meta')),
        i.setAttribute('name', Cl),
        i.setAttribute('content', '0'),
        s.append(i)
    let u = n.map((l) => qd(l.tag, l.props, e))
    ;(u = u.filter((l) => {
      for (let c = 0; c < a.length; c++) {
        const p = a[c]
        if (Wd(p, l)) return a.splice(c, 1), !1
      }
      return !0
    })),
      a.forEach((l) => {
        var c
        return (c = l.parentNode) == null ? void 0 : c.removeChild(l)
      }),
      u.forEach((l) => {
        s.insertBefore(l, i)
      }),
      i.setAttribute('content', '' + (o - a.length + u.length))
  },
  Jd = () => {
    let e = []
    const t = {
      install(n) {
        ;(n.config.globalProperties.$head = t), n.provide(Kd, t)
      },
      get headTags() {
        const n = []
        return (
          e.forEach((r) => {
            Yd(r.value).forEach((i) => {
              if (i.tag === 'meta' || i.tag === 'base' || i.tag === 'script') {
                const o = zd(i.props)
                if (o) {
                  let a = -1
                  for (let u = 0; u < n.length; u++) {
                    const l = n[u],
                      c = l.props[o.name],
                      p = i.props[o.name]
                    if (l.tag === i.tag && c === p) {
                      a = u
                      break
                    }
                  }
                  a !== -1 && n.splice(a, 1)
                }
              }
              n.push(i)
            })
          }),
          n
        )
      },
      addHeadObjs(n) {
        e.push(n)
      },
      removeHeadObjs(n) {
        e = e.filter((r) => r !== n)
      },
      updateDOM(n = window.document) {
        let r,
          s = {},
          i = {}
        const o = {}
        for (const a of t.headTags) {
          if (a.tag === 'title') {
            r = a.props.children
            continue
          }
          if (a.tag === 'htmlAttrs') {
            Object.assign(s, a.props)
            continue
          }
          if (a.tag === 'bodyAttrs') {
            Object.assign(i, a.props)
            continue
          }
          ;(o[a.tag] = o[a.tag] || []), o[a.tag].push(a)
        }
        r !== void 0 && (n.title = r), Sl(n.documentElement, s), Sl(n.body, i)
        for (const a of Object.keys(o)) Xd(n, a, o[a])
      },
    }
    return t
  },
  Zd = ai((e) => {
    const t = Jd()
    e.vueApp.use(t),
      (e._useMeta = (n) => {
        const r = Ot(n)
        t.addHeadObjs(r),
          yo(() => {
            t.updateDOM()
          }),
          !!ze() &&
            Vn(() => {
              t.removeHeadObjs(r), t.updateDOM()
            })
      })
  })
function _i(e) {
  const t = Y(e) ? $e(e) : e
  hn()._useMeta(t)
}
const Gd = (e) =>
    Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0)),
  St = (e, t) => (n, r) => (
    _i(() => e(he(he({}, Gd(n)), r.attrs), r)),
    () => {
      var s, i
      return t
        ? (i = (s = r.slots).default) == null
          ? void 0
          : i.call(s)
        : null
    }
  ),
  qt = {
    accesskey: String,
    autocapitalize: String,
    autofocus: { type: Boolean, default: void 0 },
    class: String,
    contenteditable: { type: Boolean, default: void 0 },
    contextmenu: String,
    dir: String,
    draggable: { type: Boolean, default: void 0 },
    enterkeyhint: String,
    exportparts: String,
    hidden: { type: Boolean, default: void 0 },
    id: String,
    inputmode: String,
    is: String,
    itemid: String,
    itemprop: String,
    itemref: String,
    itemscope: String,
    itemtype: String,
    lang: String,
    nonce: String,
    part: String,
    slot: String,
    spellcheck: { type: Boolean, default: void 0 },
    style: String,
    tabindex: String,
    title: String,
    translate: String,
  },
  eh = Se({
    name: 'Script',
    props: Ye(he({}, qt), {
      async: Boolean,
      crossorigin: { type: [Boolean, String], default: void 0 },
      defer: Boolean,
      integrity: String,
      nomodule: Boolean,
      nonce: String,
      referrerpolicy: String,
      src: String,
      type: String,
      charset: String,
      language: String,
    }),
    setup: St((e) => ({ script: [e] })),
  }),
  th = Se({
    name: 'Link',
    props: Ye(he({}, qt), {
      as: String,
      crossorigin: String,
      disabled: Boolean,
      href: String,
      hreflang: String,
      imagesizes: String,
      imagesrcset: String,
      integrity: String,
      media: String,
      prefetch: { type: Boolean, default: void 0 },
      referrerpolicy: String,
      rel: String,
      sizes: String,
      title: String,
      type: String,
      methods: String,
      target: String,
    }),
    setup: St((e) => ({ link: [e] })),
  }),
  nh = Se({
    name: 'Base',
    props: Ye(he({}, qt), { href: String, target: String }),
    setup: St((e) => ({ base: e })),
  }),
  rh = Se({
    name: 'Title',
    setup: St((e, { slots: t }) => {
      var r, s
      return {
        title:
          ((s = (r = t.default()) == null ? void 0 : r[0]) == null
            ? void 0
            : s.children) || null,
      }
    }),
  }),
  sh = Se({
    name: 'Meta',
    props: Ye(he({}, qt), {
      charset: String,
      content: String,
      httpEquiv: String,
      key: String,
      name: String,
    }),
    setup: St((e) => ({ meta: [e] })),
  }),
  ih = Se({
    name: 'Style',
    props: Ye(he({}, qt), {
      type: String,
      media: String,
      nonce: String,
      title: String,
      scoped: { type: Boolean, default: void 0 },
    }),
    setup: St((e, { slots: t }) => {
      var s, i, o
      const n = he({}, e),
        r =
          (o =
            (i = (s = t.default) == null ? void 0 : s.call(t)) == null
              ? void 0
              : i[0]) == null
            ? void 0
            : o.children
      return r && (n.children = r), { style: [n] }
    }),
  }),
  oh = Se({ name: 'Head', setup: (e, t) => t.slots.default }),
  ah = Se({
    name: 'Html',
    props: Ye(he({}, qt), { manifest: String, version: String, xmlns: String }),
    setup: St((e) => ({ htmlAttrs: e }), !0),
  }),
  lh = Se({ name: 'Body', props: qt, setup: St((e) => ({ bodyAttrs: e }), !0) })
var Al = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Script: eh,
    Link: th,
    Base: nh,
    Title: rh,
    Meta: sh,
    Style: ih,
    Head: oh,
    Html: ah,
    Body: lh,
  }),
  Pl = {
    globalMeta: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [],
      style: [],
      script: [],
    },
    mixinKey: 'created',
  },
  uh = ai((e) => {
    _i(Pl.globalMeta),
      e.vueApp.mixin({
        [Pl.mixinKey]() {
          var r
          const t = ze(),
            n =
              (t == null ? void 0 : t.type) ||
              ((r = t == null ? void 0 : t.proxy) == null ? void 0 : r.$options)
          !n || !('head' in n) || _i(n.head)
        },
      })
    for (const t in Al) e.vueApp.component(t, Al[t])
  }),
  tr = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  }
const ch = { name: 'NuxtNestedPage' }
function fh(e, t, n, r, s, i) {
  const o = We('RouterView')
  return (
    xe(),
    Ue(o, null, {
      default: je(({ Component: a }) => [
        (xe(), Ue(js(a), { key: e.$route.path })),
      ]),
      _: 1,
    })
  )
}
var kl = tr(ch, [['render', fh]]),
  Ml = {},
  Rl = Se({
    props: { name: { type: [String, Boolean], default: 'default' } },
    setup(e, t) {
      return () => {
        const n = e.name
        return Ml[n] ? pn(Ml[n], e, t.slots) : t.slots.default()
      }
    },
  })
const ph = {
  name: 'NuxtPage',
  components: { NuxtLayout: Rl },
  props: { layout: { type: String, default: null } },
  setup() {
    const e = null,
      t = hn()
    function n(s) {
      return t.callHook('page:start', s)
    }
    function r(s) {
      return t.callHook('page:finish', s)
    }
    return {
      updatedComponentLayout: e,
      onSuspensePending: n,
      onSuspenseResolved: r,
    }
  },
}
function dh(e, t, n, r, s, i) {
  const o = We('NuxtLayout'),
    a = We('RouterView')
  return (
    xe(),
    Ue(a, null, {
      default: je(({ Component: u }) => [
        u
          ? (xe(),
            Ue(
              o,
              {
                key: 0,
                name: n.layout || r.updatedComponentLayout || u.type.layout,
              },
              {
                default: je(() => [
                  ee(
                    Hr,
                    { name: 'page', mode: 'out-in' },
                    {
                      default: je(() => [
                        (xe(),
                        Ue(
                          xs,
                          {
                            onPending: () => r.onSuspensePending(u),
                            onResolve: () => r.onSuspenseResolved(u),
                          },
                          {
                            default: je(() => [
                              (xe(), Ue(js(u), { key: e.$route.path })),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['onPending', 'onResolve'],
                        )),
                      ]),
                      _: 2,
                    },
                    1024,
                  ),
                ]),
                _: 2,
              },
              1032,
              ['name'],
            ))
          : na('', !0),
      ]),
      _: 1,
    })
  )
}
var hh = tr(ph, [['render', dh]])
const mh = 'modulepreload',
  Ol = {},
  yh = '/_nuxt/',
  rt = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${yh}${r}`), r in Ol)) return
            Ol[r] = !0
            const s = r.endsWith('.css'),
              i = s ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${r}"]${i}`)) return
            const o = document.createElement('link')
            if (
              ((o.rel = s ? 'stylesheet' : mh),
              s || ((o.as = 'script'), (o.crossOrigin = '')),
              (o.href = r),
              document.head.appendChild(o),
              s)
            )
              return new Promise((a, u) => {
                o.addEventListener('load', a), o.addEventListener('error', u)
              })
          }),
        ).then(() => t())
  }
var gh = [
    {
      name: 'index',
      path: '/',
      file: '/vercel/path0/pages/index.vue',
      children: [],
      component: () =>
        rt(() => import('./index-038bfdae.mjs'), [
          'index-038bfdae.mjs',
          'assets/index.4484cbea.css',
          'index.es-38229df1.mjs',
          'useWallet-3e9ec1a4.mjs',
          'numberTranslator-67ca5f44.mjs',
          'Header-b81db37f.mjs',
          'assets/Header.c337fc46.css',
          'logo-db8d36a6.mjs',
          'Footer-0b7865d8.mjs',
          'assets/Footer.81b131bc.css',
        ]),
    },
    {
      name: 'observatory',
      path: '/observatory',
      file: '/vercel/path0/pages/observatory.vue',
      children: [],
      component: () =>
        rt(() => import('./observatory-332e6d8d.mjs'), [
          'observatory-332e6d8d.mjs',
          'assets/observatory.619b2cb1.css',
          'useWallet-3e9ec1a4.mjs',
          'numberTranslator-67ca5f44.mjs',
          'formatNumbers-024c86a3.mjs',
          'index.es-38229df1.mjs',
          'Planet-d1e08e58.mjs',
          'assets/Planet.640641b2.css',
          'Header-b81db37f.mjs',
          'assets/Header.c337fc46.css',
          'logo-db8d36a6.mjs',
          'DashboardInfo-b94fc00b.mjs',
          'assets/DashboardInfo.55c8a5fd.css',
          'Limits-a456a39b.mjs',
          'assets/Limits.3b094a0f.css',
          'Footer-0b7865d8.mjs',
          'assets/Footer.81b131bc.css',
        ]),
    },
    {
      name: 'privacy-policy',
      path: '/privacy-policy',
      file: '/vercel/path0/pages/privacy-policy.vue',
      children: [],
      component: () =>
        rt(() => import('./privacy-policy-3b5e0c4c.mjs'), [
          'privacy-policy-3b5e0c4c.mjs',
          'index.es-38229df1.mjs',
          'Header-b81db37f.mjs',
          'assets/Header.c337fc46.css',
          'useWallet-3e9ec1a4.mjs',
          'numberTranslator-67ca5f44.mjs',
          'logo-db8d36a6.mjs',
          'Footer-0b7865d8.mjs',
          'assets/Footer.81b131bc.css',
        ]),
    },
    {
      name: 'tos',
      path: '/tos',
      file: '/vercel/path0/pages/tos.vue',
      children: [],
      component: () =>
        rt(() => import('./tos-ed1eb6e0.mjs'), [
          'tos-ed1eb6e0.mjs',
          'index.es-38229df1.mjs',
          'Header-b81db37f.mjs',
          'assets/Header.c337fc46.css',
          'useWallet-3e9ec1a4.mjs',
          'numberTranslator-67ca5f44.mjs',
          'logo-db8d36a6.mjs',
          'Footer-0b7865d8.mjs',
          'assets/Footer.81b131bc.css',
        ]),
    },
  ],
  bh = ai((e) => {
    e.vueApp.component('NuxtNestedPage', kl),
      e.vueApp.component('NuxtPage', hh),
      e.vueApp.component('NuxtLayout', Rl),
      e.vueApp.component('NuxtLink', _l),
      e.vueApp.component('NuxtChild', kl)
    const t = Xp(),
      n = Id({ history: t, routes: gh })
    e.vueApp.use(n)
    const r = ds(n.currentRoute.value)
    n.afterEach((i, o) => {
      r.value = o
    }),
      Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', {
        get: () => r.value,
      })
    const s = {}
    for (const i in n.currentRoute.value)
      s[i] = $e(() => n.currentRoute.value[i])
    return (
      (e._route = it(s)),
      e.hook('app:created', async () => {
        await n.isReady(), n.currentRoute.value.matched.length
      }),
      { provide: { router: n } }
    )
  })
const _h = /#/g,
  vh = /&/g,
  Th = /=/g,
  Il = /\+/g,
  wh = /%5B/gi,
  Eh = /%5D/gi,
  xh = /%5E/gi,
  Ch = /%60/gi,
  Sh = /%7B/gi,
  Ah = /%7C/gi,
  Ph = /%7D/gi,
  kh = /%20/gi
function Mh(e) {
  return encodeURI('' + e)
    .replace(Ah, '|')
    .replace(wh, '[')
    .replace(Eh, ']')
}
function vi(e) {
  return Mh(e)
    .replace(Il, '%2B')
    .replace(kh, '+')
    .replace(_h, '%23')
    .replace(vh, '%26')
    .replace(Ch, '`')
    .replace(Sh, '{')
    .replace(Ph, '}')
    .replace(xh, '^')
}
function Ti(e) {
  return vi(e).replace(Th, '%3D')
}
function Nl(e = '') {
  try {
    return decodeURIComponent('' + e)
  } catch {
    return '' + e
  }
}
function Rh(e) {
  return Nl(e.replace(Il, ' '))
}
function Oh(e = '') {
  const t = {}
  e[0] === '?' && (e = e.substr(1))
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || []
    if (r.length < 2) continue
    const s = Nl(r[1])
    if (s === '__proto__' || s === 'constructor') continue
    const i = Rh(r[2] || '')
    t[s]
      ? Array.isArray(t[s])
        ? t[s].push(i)
        : (t[s] = [t[s], i])
      : (t[s] = i)
  }
  return t
}
function Ih(e, t) {
  return t
    ? Array.isArray(t)
      ? t.map((n) => `${Ti(e)}=${vi(n)}`).join('&')
      : `${Ti(e)}=${vi(t)}`
    : Ti(e)
}
function Nh(e) {
  return Object.keys(e)
    .map((t) => Ih(t, e[t]))
    .join('&')
}
function Lh(e, t = !1) {
  return /^\w+:\/\/.+/.test(e) || (t && /^\/\/[^/]+/.test(e))
}
const Fh = /\/$|\/\?/
function wi(e = '', t = !1) {
  return t ? Fh.test(e) : e.endsWith('/')
}
function $h(e = '', t = !1) {
  if (!t) return (wi(e) ? e.slice(0, -1) : e) || '/'
  if (!wi(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return (n.slice(0, -1) || '/') + (r.length ? `?${r.join('?')}` : '')
}
function Bh(e = '', t = !1) {
  if (!t) return e.endsWith('/') ? e : e + '/'
  if (wi(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return n + '/' + (r.length ? `?${r.join('?')}` : '')
}
function Hh(e = '') {
  return e.startsWith('/')
}
function jh(e = '') {
  return (Hh(e) ? e.substr(1) : e) || '/'
}
function Dh(e, t) {
  if (Vh(t)) return e
  const n = $h(t)
  return e.startsWith(n) ? e : qh(n, e)
}
function Uh(e, t) {
  const n = Ll(e),
    r = he(he({}, Oh(n.search)), t)
  return (n.search = Nh(r)), Wh(n)
}
function Vh(e) {
  return !e || e === '/'
}
function Kh(e) {
  return e && e !== '/'
}
function qh(e, ...t) {
  let n = e || ''
  for (const r of t.filter(Kh)) n = n ? Bh(n) + jh(r) : r
  return n
}
function Ll(e = '', t) {
  if (!Lh(e, !0)) return t ? Ll(t + e) : Fl(e)
  const [n = '', r, s] = (e.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(
      1,
    ),
    [i = '', o = ''] = (s.match(/([^/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: u, hash: l } = Fl(o)
  return {
    protocol: n,
    auth: r ? r.substr(0, r.length - 1) : '',
    host: i,
    pathname: a,
    search: u,
    hash: l,
  }
}
function Fl(e = '') {
  const [t = '', n = '', r = ''] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1)
  return { pathname: t, search: n, hash: r }
}
function Wh(e) {
  const t =
    e.pathname +
    (e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '') +
    e.hash
  return e.protocol
    ? e.protocol + '//' + (e.auth ? e.auth + '@' : '') + e.host + t
    : t
}
class zh extends Error {
  constructor() {
    super(...arguments)
    this.name = 'FetchError'
  }
}
function Qh(e, t, n) {
  let r = ''
  e && n && (r = `${n.status} ${n.statusText} (${e.toString()})`),
    t && (r = `${t.message} (${r})`)
  const s = new zh(r)
  return (
    Object.defineProperty(s, 'request', {
      get() {
        return e
      },
    }),
    Object.defineProperty(s, 'response', {
      get() {
        return n
      },
    }),
    Object.defineProperty(s, 'data', {
      get() {
        return n && n._data
      },
    }),
    s
  )
}
const Yh = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
function $l(e = 'GET') {
  return Yh.has(e.toUpperCase())
}
function Xh(e) {
  if (e === void 0) return !1
  const t = typeof e
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
    ? !1
    : Array.isArray(e)
    ? !0
    : (e.constructor && e.constructor.name === 'Object') ||
      typeof e.toJSON == 'function'
}
const Jh = new Set([
    'image/svg',
    'application/xml',
    'application/xhtml',
    'application/html',
  ]),
  Zh = new Set(['application/json', 'application/ld+json'])
function Gh(e = '') {
  if (!e) return 'json'
  const t = e.split(';').shift()
  return Zh.has(t)
    ? 'json'
    : Jh.has(t) || t.startsWith('text/')
    ? 'text'
    : 'blob'
}
const em = new Set([408, 409, 425, 429, 500, 502, 503, 504])
function Bl(e) {
  const { fetch: t, Headers: n } = e
  function r(o) {
    if (o.options.retry !== !1) {
      const u =
          typeof o.options.retry == 'number'
            ? o.options.retry
            : $l(o.options.method)
            ? 0
            : 1,
        l = (o.response && o.response.status) || 500
      if (u > 0 && em.has(l))
        return s(o.request, Ye(he({}, o.options), { retry: u - 1 }))
    }
    const a = Qh(o.request, o.error, o.response)
    throw (Error.captureStackTrace && Error.captureStackTrace(a, s), a)
  }
  const s = async function (a, u = {}) {
      const l = {
        request: a,
        options: he(he({}, e.defaults), u),
        response: void 0,
        error: void 0,
      }
      l.options.onRequest && (await l.options.onRequest(l)),
        typeof l.request == 'string' &&
          (l.options.baseURL && (l.request = Dh(l.request, l.options.baseURL)),
          l.options.params && (l.request = Uh(l.request, l.options.params)),
          l.options.body &&
            $l(l.options.method) &&
            Xh(l.options.body) &&
            ((l.options.body = JSON.stringify(l.options.body)),
            (l.options.headers = new n(l.options.headers)),
            l.options.headers.has('content-type') ||
              l.options.headers.set('content-type', 'application/json'),
            l.options.headers.has('accept') ||
              l.options.headers.set('accept', 'application/json'))),
        (l.response = await t(l.request, l.options).catch(
          async (p) => (
            (l.error = p),
            l.options.onRequestError && (await l.options.onRequestError(l)),
            r(l)
          ),
        ))
      const c =
        (l.options.parseResponse ? 'json' : l.options.responseType) ||
        Gh(l.response.headers.get('content-type') || '')
      if (c === 'json') {
        const p = await l.response.text(),
          d = l.options.parseResponse || Hd
        l.response._data = d(p)
      } else l.response._data = await l.response[c]()
      return (
        l.options.onResponse && (await l.options.onResponse(l)),
        l.response.ok ||
          (l.options.onResponseError && (await l.options.onResponseError(l))),
        l.response.ok ? l.response : r(l)
      )
    },
    i = function (a, u) {
      return s(a, u).then((l) => l._data)
    }
  return (
    (i.raw = s),
    (i.create = (o = {}) =>
      Bl(Ye(he({}, e), { defaults: he(he({}, e.defaults), o) }))),
    i
  )
}
const Hl = (function () {
    if (typeof globalThis != 'undefined') return globalThis
    if (typeof self != 'undefined') return self
    if (typeof window != 'undefined') return window
    if (typeof global != 'undefined') return global
    throw new Error('unable to locate global object')
  })(),
  tm =
    Hl.fetch ||
    (() =>
      Promise.reject(new Error('[ohmyfetch] global.fetch is not supported!'))),
  nm = Hl.Headers,
  rm = Bl({ fetch: tm, Headers: nm })
globalThis.$fetch || (globalThis.$fetch = rm)
var sm = () => {}
const Ei = {
  DashboardInfo: $t(() =>
    rt(() => import('./DashboardInfo-b94fc00b.mjs'), [
      'DashboardInfo-b94fc00b.mjs',
      'assets/DashboardInfo.55c8a5fd.css',
      'index.es-38229df1.mjs',
    ]).then((e) => e.default || e),
  ),
  Footer: $t(() =>
    rt(() => import('./Footer-0b7865d8.mjs'), [
      'Footer-0b7865d8.mjs',
      'assets/Footer.81b131bc.css',
      'index.es-38229df1.mjs',
      'logo-db8d36a6.mjs',
    ]).then((e) => e.default || e),
  ),
  Header: $t(() =>
    rt(() => import('./Header-b81db37f.mjs'), [
      'Header-b81db37f.mjs',
      'assets/Header.c337fc46.css',
      'useWallet-3e9ec1a4.mjs',
      'numberTranslator-67ca5f44.mjs',
      'index.es-38229df1.mjs',
      'logo-db8d36a6.mjs',
    ]).then((e) => e.default || e),
  ),
  Limits: $t(() =>
    rt(() => import('./Limits-a456a39b.mjs'), [
      'Limits-a456a39b.mjs',
      'assets/Limits.3b094a0f.css',
      'formatNumbers-024c86a3.mjs',
      'index.es-38229df1.mjs',
      'numberTranslator-67ca5f44.mjs',
    ]).then((e) => e.default || e),
  ),
  NuxtLoading: $t(() =>
    rt(
      () =>
        Promise.resolve().then(function () {
          return Em
        }),
      void 0,
    ).then((e) => e.default || e),
  ),
  Planet: $t(() =>
    rt(
      () =>
        import('./Planet-d1e08e58.mjs').then(function (e) {
          return e.P
        }),
      [
        'Planet-d1e08e58.mjs',
        'assets/Planet.640641b2.css',
        'formatNumbers-024c86a3.mjs',
        'useWallet-3e9ec1a4.mjs',
        'numberTranslator-67ca5f44.mjs',
        'index.es-38229df1.mjs',
      ],
    ).then((e) => e.default || e),
  ),
}
function im(e) {
  for (const t in Ei)
    e.vueApp.component(t, Ei[t]), e.vueApp.component('Lazy' + t, Ei[t])
}
var om = [Zd, uh, bh, sm, im]
const am = {
  setup() {
    hn().hooks.callHookWith((t) => t.map((n) => n()), 'vue:setup')
  },
}
function lm(e, t, n, r, s, i) {
  const o = We('App')
  return xe(), Ue(xs, null, { default: je(() => [ee(o)]), _: 1 })
}
var jl = tr(am, [['render', lm]])
const um = () => gi('isLoading', () => !1),
  Rm = () => gi('isConnected', () => !1)
var cm = [
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'approved',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'uint256',
          name: 'planetId',
          type: 'uint256',
        },
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'rewardAmount',
          type: 'uint256',
        },
      ],
      name: 'Cashout',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'uint256[]',
          name: 'affectedPlanets',
          type: 'uint256[]',
        },
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'rewardAmount',
          type: 'uint256',
        },
      ],
      name: 'CashoutAll',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'uint256',
          name: 'planetId',
          type: 'uint256',
        },
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'amountToCompound',
          type: 'uint256',
        },
      ],
      name: 'Compound',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'uint256[]',
          name: 'affectedPlanets',
          type: 'uint256[]',
        },
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'amountToCompound',
          type: 'uint256',
        },
      ],
      name: 'CompoundAll',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'uint256',
          name: 'newPlanetId',
          type: 'uint256',
        },
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Create',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Paused',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'string',
          name: 'previousName',
          type: 'string',
        },
        {
          indexed: !0,
          internalType: 'string',
          name: 'newName',
          type: 'string',
        },
      ],
      name: 'Rename',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
        { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: !0,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Unpaused',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'UpdateLiquidityPoolManager',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'UpdateUniverse',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'burnedFromRenaming',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
      ],
      name: 'changeLiquidityPoolManagerImplementation',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
      ],
      name: 'changeUniverseImplementation',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'compoundDelay',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'creationMinPrice',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'getApproved',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'getLiquidityPoolManagerImplementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'getUniverseImplementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'operator', type: 'address' },
      ],
      name: 'isApprovedForAll',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'ownerOf',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'processingFee',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'recoverLostAVAX',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_token', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'recoverLostTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardPerDay',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        { internalType: 'bytes', name: '_data', type: 'bytes' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'operator', type: 'address' },
        { internalType: 'bool', name: 'approved', type: 'bool' },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'tierLevel',
      outputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'tierSlope',
      outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
      name: 'tokenByIndex',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'uint256', name: 'index', type: 'uint256' },
      ],
      name: 'tokenOfOwnerByIndex',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'totalValueLocked',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'tokenURI',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_planetId', type: 'uint256' },
        { internalType: 'string', name: 'planetName', type: 'string' },
      ],
      name: 'renamePlanet',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'string', name: 'planetName', type: 'string' },
        { internalType: 'uint256', name: 'planetValue', type: 'uint256' },
      ],
      name: 'createPlanetWithTokens',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_planetId', type: 'uint256' }],
      name: 'cashoutReward',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'cashoutAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '_planetId', type: 'uint256' }],
      name: 'compoundReward',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'compoundAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'calculateTotalDailyEmission',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'string', name: 'planetName', type: 'string' },
      ],
      name: 'isNameAvailable',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'isOwnerOfPlanets',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: '_planetId', type: 'uint256' },
      ],
      name: 'isOwnerOfPlanet',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'getPlanetIdsOf',
      outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'uint256[]', name: '_planetIds', type: 'uint256[]' },
      ],
      name: 'getPlanetsByIds',
      outputs: [
        {
          components: [
            {
              components: [
                { internalType: 'uint256', name: 'id', type: 'uint256' },
                { internalType: 'string', name: 'name', type: 'string' },
                {
                  internalType: 'uint256',
                  name: 'creationTime',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'lastProcessingTimestamp',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'rewardMult',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'planetValue',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'totalClaimed',
                  type: 'uint256',
                },
                { internalType: 'bool', name: 'exists', type: 'bool' },
              ],
              internalType: 'struct PlanetsManagerUpgradeable.PlanetEntity',
              name: 'planet',
              type: 'tuple',
            },
            { internalType: 'uint256', name: 'id', type: 'uint256' },
            {
              internalType: 'uint256',
              name: 'pendingRewards',
              type: 'uint256',
            },
            { internalType: 'uint256', name: 'rewardPerDay', type: 'uint256' },
            { internalType: 'uint256', name: 'compoundDelay', type: 'uint256' },
          ],
          internalType: 'struct PlanetsManagerUpgradeable.PlanetInfoEntity[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_creationMinPrice', type: 'uint256' },
      ],
      name: 'changeNodeMinPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_compoundDelay', type: 'uint256' },
      ],
      name: 'changeCompoundDelay',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'changeRewardPerDay',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint24[6]', name: '_tierLevel', type: 'uint24[6]' },
        { internalType: 'uint16[6]', name: '_tierSlope', type: 'uint16[6]' },
      ],
      name: 'changeTierSystem',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint8', name: '_processingFee', type: 'uint8' },
      ],
      name: 'changeProcessingFee',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'unpause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
      name: 'supportsInterface',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
  ],
  fm = [
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'UpdateLiquidityPoolManager',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'UpdatePlanetsManager',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'UpdateUniverse',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: '_sender',
          type: 'address',
        },
        { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
        { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'WalletObserverEventBuy',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: '_sender',
          type: 'address',
        },
        { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
        { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'WalletObserverEventSellOrLiquidityAdd',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: '_sender',
          type: 'address',
        },
        { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
        { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'WalletObserverEventTransfer',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: 'bool', name: '_status', type: 'bool' },
      ],
      name: 'WalletObserverLiquidityWithdrawal',
      type: 'event',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: '_boughtTokens',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: '_inTokens',
      outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: '_isDenied',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: '_isExcludedFromObserver',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: '_outTokens',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
      ],
      name: 'changePlanetsManagerImplementation',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLiquidityPoolManagerImplementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getPlanetsManagerImplementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getUniverseImplementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'recoverLostAVAX',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_token', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'recoverLostTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
      ],
      name: 'changeUniverseImplementation',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
      ],
      name: 'changeLiquidityPoolManagerImplementation',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_sender', type: 'address' },
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'beforeTokenTransfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMaxTokenPerWallet',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTimeframeExpiresAfter',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTimeframeCurrent',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'getOverviewOf',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'int256', name: '', type: 'int256' },
        { internalType: 'int256', name: '', type: 'int256' },
        { internalType: 'int256', name: '', type: 'int256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'getBoughtTokensOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'isWalletFull',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'isExcludedFromObserver',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_maxTokenPerWallet',
          type: 'uint256',
        },
      ],
      name: 'setMaxTokenPerWallet',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_timeframeExpiresAfter',
          type: 'uint256',
        },
      ],
      name: 'setTimeframeExpiresAfter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_timeframeQuotaIn', type: 'uint256' },
      ],
      name: 'setTimeframeQuotaIn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_timeframeQuotaOut',
          type: 'uint256',
        },
      ],
      name: 'setTimeframeQuotaOut',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'bool', name: 'status', type: 'bool' },
      ],
      name: 'denyMalicious',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'bool', name: 'status', type: 'bool' },
      ],
      name: 'excludeFromObserver',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  pm = [
    {
      inputs: [
        { internalType: 'address', name: '_planetsManager', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
        { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'UpdateLiquidityPoolManager',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'UpdateWalletObserver',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
      name: 'burn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'burnFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
      ],
      name: 'changeLiquidityPoolManagerImplementation',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
      ],
      name: 'changeWalletObserverImplementation',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
      ],
      name: 'decreaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLiquidityPoolManagerImplementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'getWalletObserverImplementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
      ],
      name: 'increaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'planetsManager',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'recoverLostAVAX',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_token', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'recoverLostTokens',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
      constant: !0,
    },
    {
      inputs: [
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'accountBurn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'accountReward',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
      name: 'liquidityReward',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ]
const dm = {
    abi: pm,
    implementation: {
      mainnet: '0x959b88966fC5B261dF8359961357d34F4ee27b4a',
      fuji: '0x2C5a5e8DA330b0c522d6c12ECA2B489A6ba2a549',
    },
  },
  Om = {
    abi: cm,
    implementation: {
      mainnet: '0x89323f00a621D4eD6A56a93295C5f10f4df57FFa',
      fuji: '0xD83e0ff05Aa17c9E3F92c3867B99Ad4e1759DD1f',
    },
  },
  Im = {
    abi: fm,
    implementation: {
      mainnet: '0x71A5C1D6b67Dcc5efe66360c5D7cb138d9C47C23',
      fuji: '0xEf0aff16EA694dc43B7907a4aFC141cFFCBF9D9a',
    },
  },
  hm = 'https://',
  Dl = 'mainnet'
function Ce(e) {
  return `${hm}${e}`
}
const mm = {
    mainnet: {
      name: 'Avalanche Mainnet',
      id: 43114,
      rpc: Ce('api.avax.network/ext/bc/C/rpc'),
      web3Name: 'avalanche-fuji-mainnet',
      rightSide: '0x130966628846bfd36ff31a822705796e8cb8c18d',
      router: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
    },
    fuji: {
      name: 'Avalanche Fuji Testnet',
      id: 43113,
      rpc: Ce('api.avax-test.network/ext/bc/C/rpc'),
      web3Name: 'avalanche-fuji-testnet',
      rightSide: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
      router: '0x2D99ABD9008Dc933ff5c0CD271B88309593aB921',
    },
  },
  Wt = {
    tradingLink: Ce(
      `traderjoexyz.com/trade?outputCurrency=${dm.implementation[Dl]}`,
    ),
    instagramLink: Ce('instagram.com/univmoney'),
    twitterLink: Ce('twitter.com/univmoney'),
    nftMarketplaceLink: Ce('tofunft.com/collection/universe-ecosystem/items'),
    telegramLink: Ce('t.me/univmoney'),
    discordLink: Ce('discord.univ.money'),
    docsLink: Ce('docs.univ.money'),
    smartContractsLink: Ce('docs.univ.money/details/smart-contracts'),
    liquidityLockLink: Ce(
      'dxsale.app/app/v3/dxlockview?id=0&add=0x1c510F7AC1b0ec8340601e4b3a0961e7B0955F38&type=lplock&chain=Avalanche',
    ),
    whatIsUniverseLink: Ce('docs.univ.money/what-is-universe/the-solution'),
    emailLink: 'mailto:support@univ.money',
    telegramDMLink: Ce('t.me/univteam'),
    smartDailyLimitsDetailsLink: Ce(
      'docs.univ.money/details/smart-daily-limits',
    ),
    tradingChartLink: Ce(
      'www.dextools.io/app/avalanche/pair-explorer/0x938e8b130e87d92d873fcca26ba144a32ba12b93',
    ),
    coinGeckoLink: Ce('coingecko.com'),
    coinMarketCapLink: Ce('coinmarketcap.com'),
  },
  ym = Ye(he({}, Wt), {
    currentNetwork: Dl,
    appTitle: 'Universe',
    appDescription:
      'Universe is a blazingly fast and innovative DaaS on the Avalanche network. Passive income up to 1,533% APR, NFTs, Sustainability & Metaverse in your pocket. Create your planet and get lifetime rewards from it.',
    networks: mm,
    preloadOrigins: [
      new URL(Wt.tradingLink).origin,
      new URL(Wt.twitterLink).origin,
      new URL(Wt.telegramLink).origin,
      new URL(Wt.tradingChartLink).origin,
      new URL(Wt.docsLink).origin,
    ],
    prerenderOrigins: [new URL(Wt.docsLink).origin],
  }),
  gm = () => ym
var bm =
  typeof globalThis != 'undefined'
    ? globalThis
    : typeof window != 'undefined'
    ? window
    : typeof global != 'undefined'
    ? global
    : typeof self != 'undefined'
    ? self
    : {}
function Nm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
function _m(e) {
  if (e.__esModule) return e
  var t = Object.defineProperty({}, '__esModule', { value: !0 })
  return (
    Object.keys(e).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(e, n)
      Object.defineProperty(
        t,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[n]
              },
            },
      )
    }),
    t
  )
}
var Wr = { exports: {} },
  vm = _m(dp)
;(function (e, t) {
  ;(function (n, r) {
    e.exports = r(vm)
  })(bm, function (n) {
    return (() => {
      var r = {
          553: (a, u) => {
            Object.defineProperty(u, '__esModule', { value: !0 }),
              (u.default = (l, c) => {
                const p = l.__vccOpts || l
                for (const [d, g] of c) p[d] = g
                return p
              })
          },
          976: (a) => {
            a.exports = n
          },
        },
        s = {}
      function i(a) {
        var u = s[a]
        if (u !== void 0) return u.exports
        var l = (s[a] = { exports: {} })
        return r[a](l, l.exports, i), l.exports
      }
      ;(i.d = (a, u) => {
        for (var l in u)
          i.o(u, l) &&
            !i.o(a, l) &&
            Object.defineProperty(a, l, { enumerable: !0, get: u[l] })
      }),
        (i.o = (a, u) => Object.prototype.hasOwnProperty.call(a, u)),
        (i.r = (a) => {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(a, '__esModule', { value: !0 })
        })
      var o = {}
      return (
        (() => {
          i.r(o),
            i.d(o, {
              Component: () => P,
              Plugin: () => re,
              default: () => Ve,
              useLoading: () => X,
            })
          var a = i(976)
          function u(F, Q, Z) {
            let de =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : {}
            const we = (0, a.h)(F, Q, de),
              be = document.createElement('div')
            return (
              be.classList.add('vld-container'),
              Z.appendChild(be),
              (0, a.render)(we, be),
              we.component
            )
          }
          const l = typeof window != 'undefined' ? window.HTMLElement : Object,
            c = ['aria-busy'],
            p = { class: 'vld-icon' },
            d = {
              mounted() {
                this.enforceFocus &&
                  document.addEventListener('focusin', this.focusIn)
              },
              methods: {
                focusIn(F) {
                  if (
                    !this.isActive ||
                    F.target === this.$refs.root ||
                    this.$refs.root.contains(F.target)
                  )
                    return
                  let Q = this.container
                    ? this.container
                    : this.isFullPage
                    ? null
                    : this.$refs.root.parentElement
                  ;(this.isFullPage || (Q && Q.contains(F.target))) &&
                    (F.preventDefault(), this.$refs.root.focus())
                },
              },
              beforeUnmount() {
                document.removeEventListener('focusin', this.focusIn)
              },
            },
            g = ['width', 'height', 'stroke'],
            v = [
              (0, a.createStaticVNode)(
                '<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',
                1,
              ),
            ],
            O = (0, a.defineComponent)({
              name: 'spinner',
              props: {
                color: { type: String, default: '#000' },
                height: { type: Number, default: 64 },
                width: { type: Number, default: 64 },
              },
            })
          var y = i(553)
          const _ = (0, y.default)(O, [
              [
                'render',
                function (F, Q, Z, de, we, be) {
                  return (
                    (0, a.openBlock)(),
                    (0, a.createElementBlock)(
                      'svg',
                      {
                        viewBox: '0 0 38 38',
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: F.width,
                        height: F.height,
                        stroke: F.color,
                      },
                      v,
                      8,
                      g,
                    )
                  )
                },
              ],
            ]),
            m = ['fill', 'width', 'height'],
            T = [
              (0, a.createStaticVNode)(
                '<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',
                3,
              ),
            ],
            w = (0, a.defineComponent)({
              name: 'dots',
              props: {
                color: { type: String, default: '#000' },
                height: { type: Number, default: 240 },
                width: { type: Number, default: 60 },
              },
            }),
            N = (0, y.default)(w, [
              [
                'render',
                function (F, Q, Z, de, we, be) {
                  return (
                    (0, a.openBlock)(),
                    (0, a.createElementBlock)(
                      'svg',
                      {
                        viewBox: '0 0 120 30',
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: F.color,
                        width: F.width,
                        height: F.height,
                      },
                      T,
                      8,
                      m,
                    )
                  )
                },
              ],
            ]),
            L = ['height', 'width', 'fill'],
            S = [
              (0, a.createStaticVNode)(
                '<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',
                3,
              ),
            ],
            B = (0, a.defineComponent)({
              name: 'bars',
              props: {
                color: { type: String, default: '#000' },
                height: { type: Number, default: 40 },
                width: { type: Number, default: 40 },
              },
            }),
            H = {
              Spinner: _,
              Dots: N,
              Bars: (0, y.default)(B, [
                [
                  'render',
                  function (F, Q, Z, de, we, be) {
                    return (
                      (0, a.openBlock)(),
                      (0, a.createElementBlock)(
                        'svg',
                        {
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 30 30',
                          height: F.height,
                          width: F.width,
                          fill: F.color,
                        },
                        S,
                        8,
                        L,
                      )
                    )
                  },
                ],
              ]),
            },
            W = (0, a.defineComponent)({
              name: 'vue-loading',
              mixins: [d],
              props: {
                active: Boolean,
                programmatic: Boolean,
                container: [Object, Function, l],
                isFullPage: { type: Boolean, default: !0 },
                enforceFocus: { type: Boolean, default: !0 },
                lockScroll: { type: Boolean, default: !1 },
                transition: { type: String, default: 'fade' },
                canCancel: Boolean,
                onCancel: { type: Function, default: () => {} },
                color: String,
                backgroundColor: String,
                blur: { type: String, default: '2px' },
                opacity: Number,
                width: Number,
                height: Number,
                zIndex: Number,
                loader: { type: String, default: 'spinner' },
              },
              emits: ['hide', 'update:active'],
              data() {
                return { isActive: this.active }
              },
              components: H,
              mounted() {
                document.addEventListener('keyup', this.keyPress)
              },
              methods: {
                cancel() {
                  this.canCancel &&
                    this.isActive &&
                    (this.hide(), this.onCancel.apply(null, arguments))
                },
                hide() {
                  this.$emit('hide'),
                    this.$emit('update:active', !1),
                    this.programmatic &&
                      ((this.isActive = !1),
                      setTimeout(() => {
                        const F = this.$refs.root.parentElement
                        var Q, Z
                        ;(0, a.render)(null, F),
                          (Q = F).remove !== void 0
                            ? Q.remove()
                            : (Z = Q.parentNode) === null ||
                              Z === void 0 ||
                              Z.removeChild(Q)
                      }, 150))
                },
                disableScroll() {
                  this.isFullPage &&
                    this.lockScroll &&
                    document.body.classList.add('vld-shown')
                },
                enableScroll() {
                  this.isFullPage &&
                    this.lockScroll &&
                    document.body.classList.remove('vld-shown')
                },
                keyPress(F) {
                  F.keyCode === 27 && this.cancel()
                },
              },
              watch: {
                active(F) {
                  this.isActive = F
                },
                isActive(F) {
                  F ? this.disableScroll() : this.enableScroll()
                },
              },
              computed: {
                bgStyle() {
                  return {
                    background: this.backgroundColor,
                    opacity: this.opacity,
                    backdropFilter: 'blur('.concat(this.blur, ')'),
                  }
                },
              },
              beforeUnmount() {
                document.removeEventListener('keyup', this.keyPress)
              },
            }),
            z = (0, y.default)(W, [
              [
                'render',
                function (F, Q, Z, de, we, be) {
                  return (
                    (0, a.openBlock)(),
                    (0, a.createBlock)(
                      a.Transition,
                      { ref: 'root', name: F.transition },
                      {
                        default: (0, a.withCtx)(() => [
                          (0, a.withDirectives)(
                            (0, a.createElementVNode)(
                              'div',
                              {
                                tabindex: '0',
                                class: (0, a.normalizeClass)([
                                  'vld-overlay is-active',
                                  { 'is-full-page': F.isFullPage },
                                ]),
                                'aria-busy': F.isActive,
                                'aria-label': 'Loading',
                                style: (0, a.normalizeStyle)({
                                  zIndex: F.zIndex,
                                }),
                              },
                              [
                                (0, a.createElementVNode)(
                                  'div',
                                  {
                                    class: 'vld-background',
                                    onClick:
                                      Q[0] ||
                                      (Q[0] = (0, a.withModifiers)(
                                        function () {
                                          return (
                                            F.cancel && F.cancel(...arguments)
                                          )
                                        },
                                        ['prevent'],
                                      )),
                                    style: (0, a.normalizeStyle)(F.bgStyle),
                                  },
                                  null,
                                  4,
                                ),
                                (0, a.createElementVNode)('div', p, [
                                  (0, a.renderSlot)(F.$slots, 'before'),
                                  (0, a.renderSlot)(
                                    F.$slots,
                                    'default',
                                    {},
                                    () => [
                                      ((0, a.openBlock)(),
                                      (0, a.createBlock)(
                                        (0, a.resolveDynamicComponent)(
                                          F.loader,
                                        ),
                                        {
                                          color: F.color,
                                          width: F.width,
                                          height: F.height,
                                        },
                                        null,
                                        8,
                                        ['color', 'width', 'height'],
                                      )),
                                    ],
                                  ),
                                  (0, a.renderSlot)(F.$slots, 'after'),
                                ]),
                              ],
                              14,
                              c,
                            ),
                            [[a.vShow, F.isActive]],
                          ),
                        ]),
                        _: 3,
                      },
                      8,
                      ['name'],
                    )
                  )
                },
              ],
            ]),
            P = z
          function X() {
            let F =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              Q =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {}
            return {
              show() {
                let Z =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : F,
                  de =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : Q
                const we = Object.assign({}, F, Z, {
                  programmatic: !0,
                  lockScroll: !0,
                  isFullPage: !1,
                  active: !0,
                })
                let be = we.container
                we.container || ((be = document.body), (we.isFullPage = !0))
                const Be = Object.assign({}, Q, de)
                return { hide: u(P, we, be, Be).ctx.hide }
              },
            }
          }
          const re = function (F) {
            let Q =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              Z =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {}
            const de = X(Q, Z)
            ;(F.config.globalProperties.$loading = de),
              F.provide('$loading', de)
          }
          P.install = re
          const Ve = P
        })(),
        o
      )
    })()
  })
})(Wr)
const Tm = {
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: !1,
      canSucceed: !0,
      reversed: !1,
      skipTimerCount: 0,
      throttle: 0,
      duration: 5e3,
      continuous: !1,
    }
  },
  computed: {
    left() {
      return this.continuous ? (this.reversed ? 'auto' : '0px') : !1
    },
  },
  beforeDestroy() {
    this.clear()
  },
  methods: {
    clear() {
      clearInterval(this._timer),
        clearTimeout(this._throttle),
        (this._timer = null)
    },
    start() {
      return (
        this.clear(),
        (this.percent = 0),
        (this.reversed = !1),
        (this.skipTimerCount = 0),
        (this.canSucceed = !0),
        this.throttle
          ? (this._throttle = setTimeout(
              () => this.startTimer(),
              this.throttle,
            ))
          : this.startTimer(),
        this
      )
    },
    set(e) {
      return (
        (this.show = !0),
        (this.canSucceed = !0),
        (this.percent = Math.min(100, Math.max(0, Math.floor(e)))),
        this
      )
    },
    get() {
      return this.percent
    },
    increase(e) {
      return (this.percent = Math.min(100, Math.floor(this.percent + e))), this
    },
    decrease(e) {
      return (this.percent = Math.max(0, Math.floor(this.percent - e))), this
    },
    pause() {
      return clearInterval(this._timer), this
    },
    resume() {
      return this.startTimer(), this
    },
    finish() {
      return (this.percent = this.reversed ? 0 : 100), this.hide(), this
    },
    hide() {
      return (
        this.clear(),
        setTimeout(() => {
          ;(this.show = !1),
            this.$nextTick(() => {
              ;(this.percent = 0), (this.reversed = !1)
            })
        }, 500),
        this
      )
    },
    fail(e) {
      return (this.canSucceed = !1), this
    },
    startTimer() {
      this.show || (this.show = !0),
        typeof this._cut == 'undefined' &&
          (this._cut = 1e4 / Math.floor(this.duration)),
        (this._timer = setInterval(() => {
          if (this.skipTimerCount > 0) {
            this.skipTimerCount--
            return
          }
          this.reversed ? this.decrease(this._cut) : this.increase(this._cut),
            this.continuous &&
              (this.percent >= 100
                ? ((this.skipTimerCount = 1), (this.reversed = !this.reversed))
                : this.percent <= 0 &&
                  ((this.skipTimerCount = 1), (this.reversed = !this.reversed)))
        }, 100))
    },
  },
}
function wm(e, t, n, r, s, i) {
  return Ko(
    (xe(),
    Wn(
      'div',
      {
        class: Yt([
          'nuxt-progress',
          {
            'nuxt-progress-notransition': s.skipTimerCount > 0,
            'nuxt-progress-failed': !s.canSucceed,
          },
        ]),
        style: Qt({ width: s.percent + '%', left: i.left }),
      },
      null,
      6,
    )),
    [[si, s.show]],
  )
}
var Ul = tr(Tm, [
    ['render', wm],
    ['__scopeId', 'data-v-3084d273'],
  ]),
  Em = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: Ul,
  })
const xm = { class: 'u-container-pre' }
function Cm(e, t, n, r, s, i) {
  const o = We('Title'),
    a = We('Link'),
    u = We('Meta'),
    l = We('Head'),
    c = We('Html'),
    p = Ul,
    d = We('NuxtPage')
  return (
    xe(),
    Wn('div', xm, [
      ee(
        c,
        { lang: 'en-US' },
        {
          default: je(() => [
            ee(l, null, {
              default: je(() => [
                ee(o, null, {
                  default: je(() => [Ir(Ri(r.appTitle), 1)]),
                  _: 1,
                }),
                ee(a, {
                  rel: 'apple-touch-icon',
                  sizes: '180x180',
                  href: '/apple-touch-icon.png',
                }),
                ee(a, {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '32x32',
                  href: '/favicon-32x32.png',
                }),
                ee(a, {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '16x16',
                  href: '/favicon-16x16.png',
                }),
                ee(a, { rel: 'manifest', href: '/site.webmanifest' }),
                ee(a, {
                  rel: 'mask-icon',
                  href: '/safari-pinned-tab.svg',
                  color: '#5bbad5',
                }),
                (xe(!0),
                Wn(
                  ve,
                  null,
                  qs(
                    r.preloadOrigins,
                    (g) => (
                      xe(),
                      Ue(a, { rel: 'preconnect', href: g }, null, 8, ['href'])
                    ),
                  ),
                  256,
                )),
                (xe(!0),
                Wn(
                  ve,
                  null,
                  qs(
                    r.prerenderOrigins,
                    (g) => (
                      xe(),
                      Ue(a, { rel: 'prerender', href: g }, null, 8, ['href'])
                    ),
                  ),
                  256,
                )),
                ee(u, { name: 'msapplication-TileColor', content: '#da532c' }),
                ee(u, { name: 'theme-color', content: '#ffffff' }),
                ee(
                  u,
                  { name: 'description', content: r.appDescription },
                  null,
                  8,
                  ['content'],
                ),
              ]),
              _: 1,
            }),
          ]),
          _: 1,
        },
      ),
      ee(p, { ref: 'loading' }, null, 512),
      ee(d),
    ])
  )
}
const Sm = Se({
  setup(e, { expose: t }) {
    t()
    const n = Ot(null),
      r = hn(),
      s = um(),
      {
        appTitle: i,
        appDescription: o,
        preloadOrigins: a,
        prerenderOrigins: u,
      } = gm(),
      l = gi('loaderInstance', () => {})
    r.hook('page:start', () => {
      n.value.start()
    }),
      r.hook('page:finish', () => {
        n.value.finish(), window.scrollTo(0, 0)
      }),
      Nt(
        () => s.value,
        (p, d) => {
          p && !d
            ? (l.value = Wr.exports
                .useLoading(
                  {
                    canCancel: !1,
                    isFullPage: !0,
                    height: 96,
                    width: 96,
                    opacity: 0.75,
                    lockScroll: !0,
                    blur: '2px',
                    color: '#fff',
                    backgroundColor: '#000',
                  },
                  { default: () => pn('div') },
                )
                .show())
            : l.value.hide()
        },
      )
    const c = {
      loading: n,
      nuxtApp: r,
      loader: s,
      appTitle: i,
      appDescription: o,
      preloadOrigins: a,
      prerenderOrigins: u,
      loaderInstance: l,
      useLoading: Wr.exports.useLoading,
      ActiveLoader: Wr.exports.ActiveLoader,
    }
    return (
      Object.defineProperty(c, '__isScriptSetup', {
        enumerable: !1,
        value: !0,
      }),
      c
    )
  },
})
var Am = tr(Sm, [['render', Cm]])
let xi
const Pm = Ap(om)
;(xi = async function () {
  var s
  const n = Boolean((s = window.__NUXT__) == null ? void 0 : s.serverRendered)
    ? Wa(jl)
    : qa(jl)
  n.component('App', Am)
  const r = xp({ vueApp: n })
  await Sp(r, Pm),
    await r.hooks.callHook('app:created', n),
    await r.hooks.callHook('app:beforeMount', n),
    r.hooks.hookOnce('page:finish', () => {
      r.isHydrating = !1
    }),
    n.mount('#__nuxt'),
    await r.hooks.callHook('app:mounted', n),
    await In()
}),
  xi().catch((e) => {
    console.error('Error while mounting app:', e)
  })
var km = (e) => xi(e),
  Lm = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: km,
  })
export {
  lc as A,
  We as B,
  gm as C,
  hn as D,
  ap as E,
  na as F,
  Rm as G,
  um as H,
  gi as I,
  gp as J,
  rt as K,
  dm as L,
  Om as M,
  Im as N,
  bm as O,
  vm as P,
  Nm as Q,
  ve as R,
  Qc as S,
  Hr as T,
  ze as U,
  qs as V,
  ni as W,
  gf as X,
  Lm as Y,
  tr as _,
  Vs as a,
  Wn as b,
  Ue as c,
  ee as d,
  Se as e,
  Ko as f,
  Nt as g,
  pn as h,
  it as i,
  Co as j,
  Un as k,
  Cr as l,
  Qu as m,
  Yt as n,
  xe as o,
  $n as p,
  Sr as q,
  Ot as r,
  Vc as s,
  Ri as t,
  Vn as u,
  si as v,
  je as w,
  Ge as x,
  Ir as y,
  ac as z,
}
