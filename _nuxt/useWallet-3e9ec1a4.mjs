import {
  r as it,
  G as Re,
  H as _t,
  g as gn,
  C as wn,
  I as he,
  J as At,
  K as Ze,
  L as Vt,
  M as Lt,
  N as Rt,
} from './bootstrap-859756f4.mjs'
import { n as pn, B as Tn } from './numberTranslator-67ca5f44.mjs'
const Sn = { passive: !0 },
  Zt = typeof window != 'undefined'
let ke, Pe
function On() {
  return (
    Pe || (Pe = it(Zt && document.hidden)),
    ke ||
      (Zt
        ? ((ke = it(document.visibilityState)),
          document.addEventListener(
            'visibilitychange',
            () => {
              ;(ke.value = document.visibilityState),
                (Pe.value = document.hidden)
            },
            Sn,
          ))
        : (ke = it('visible'))),
    { visibility: ke, hidden: Pe }
  )
}
var x = {}
Object.defineProperty(x, '__esModule', { value: !0 })
function Pt(t, i) {
  for (var r = 0; r < i.length; r++) {
    var e = i[r]
    ;(e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      'value' in e && (e.writable = !0),
      Object.defineProperty(t, e.key, e)
  }
}
function H(t, i, r) {
  return i && Pt(t.prototype, i), r && Pt(t, r), t
}
function p() {
  return (
    (p =
      Object.assign ||
      function (t) {
        for (var i = 1; i < arguments.length; i++) {
          var r = arguments[i]
          for (var e in r)
            Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
        }
        return t
      }),
    p.apply(this, arguments)
  )
}
function _(t, i) {
  ;(t.prototype = Object.create(i.prototype)),
    (t.prototype.constructor = t),
    be(t, i)
}
function at(t) {
  return (
    (at = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    at(t)
  )
}
function be(t, i) {
  return (
    (be =
      Object.setPrototypeOf ||
      function (e, n) {
        return (e.__proto__ = n), e
      }),
    be(t, i)
  )
}
function kn() {
  if (
    typeof Reflect == 'undefined' ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1
  if (typeof Proxy == 'function') return !0
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    )
  } catch {
    return !1
  }
}
function We(t, i, r) {
  return (
    kn()
      ? (We = Reflect.construct)
      : (We = function (n, a, o) {
          var s = [null]
          s.push.apply(s, a)
          var u = Function.bind.apply(n, s),
            l = new u()
          return o && be(l, o.prototype), l
        }),
    We.apply(null, arguments)
  )
}
function bn(t) {
  return Function.toString.call(t).indexOf('[native code]') !== -1
}
function ot(t) {
  var i = typeof Map == 'function' ? new Map() : void 0
  return (
    (ot = function (e) {
      if (e === null || !bn(e)) return e
      if (typeof e != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        )
      if (typeof i != 'undefined') {
        if (i.has(e)) return i.get(e)
        i.set(e, n)
      }
      function n() {
        return We(e, arguments, at(this).constructor)
      }
      return (
        (n.prototype = Object.create(e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        be(n, e)
      )
    }),
    ot(t)
  )
}
function Wt(t, i) {
  if (t == null) return {}
  var r = {},
    e = Object.keys(t),
    n,
    a
  for (a = 0; a < e.length; a++)
    (n = e[a]), !(i.indexOf(n) >= 0) && (r[n] = t[n])
  return r
}
function In(t, i) {
  if (!!t) {
    if (typeof t == 'string') return qt(t, i)
    var r = Object.prototype.toString.call(t).slice(8, -1)
    if (
      (r === 'Object' && t.constructor && (r = t.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(t)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qt(t, i)
  }
}
function qt(t, i) {
  ;(i == null || i > t.length) && (i = t.length)
  for (var r = 0, e = new Array(i); r < i; r++) e[r] = t[r]
  return e
}
function Q(t, i) {
  var r =
    (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator']
  if (r) return (r = r.call(t)).next.bind(r)
  if (
    Array.isArray(t) ||
    (r = In(t)) ||
    (i && t && typeof t.length == 'number')
  ) {
    r && (t = r)
    var e = 0
    return function () {
      return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var ie = (function (t) {
    _(i, t)
    function i() {
      return t.apply(this, arguments) || this
    }
    return i
  })(ot(Error)),
  En = (function (t) {
    _(i, t)
    function i(r) {
      return t.call(this, 'Invalid DateTime: ' + r.toMessage()) || this
    }
    return i
  })(ie),
  Dn = (function (t) {
    _(i, t)
    function i(r) {
      return t.call(this, 'Invalid Interval: ' + r.toMessage()) || this
    }
    return i
  })(ie),
  Nn = (function (t) {
    _(i, t)
    function i(r) {
      return t.call(this, 'Invalid Duration: ' + r.toMessage()) || this
    }
    return i
  })(ie),
  Ie = (function (t) {
    _(i, t)
    function i() {
      return t.apply(this, arguments) || this
    }
    return i
  })(ie),
  zt = (function (t) {
    _(i, t)
    function i(r) {
      return t.call(this, 'Invalid unit ' + r) || this
    }
    return i
  })(ie),
  A = (function (t) {
    _(i, t)
    function i() {
      return t.apply(this, arguments) || this
    }
    return i
  })(ie),
  K = (function (t) {
    _(i, t)
    function i() {
      return t.call(this, 'Zone is an abstract class') || this
    }
    return i
  })(ie),
  h = 'numeric',
  R = 'short',
  F = 'long',
  st = { year: h, month: h, day: h },
  Ht = { year: h, month: R, day: h },
  Mn = { year: h, month: R, day: h, weekday: R },
  Ut = { year: h, month: F, day: h },
  $t = { year: h, month: F, day: h, weekday: F },
  jt = { hour: h, minute: h },
  Yt = { hour: h, minute: h, second: h },
  Gt = { hour: h, minute: h, second: h, timeZoneName: R },
  Jt = { hour: h, minute: h, second: h, timeZoneName: F },
  Bt = { hour: h, minute: h, hourCycle: 'h23' },
  Qt = { hour: h, minute: h, second: h, hourCycle: 'h23' },
  Kt = { hour: h, minute: h, second: h, hourCycle: 'h23', timeZoneName: R },
  Xt = { hour: h, minute: h, second: h, hourCycle: 'h23', timeZoneName: F },
  er = { year: h, month: h, day: h, hour: h, minute: h },
  tr = { year: h, month: h, day: h, hour: h, minute: h, second: h },
  rr = { year: h, month: R, day: h, hour: h, minute: h },
  nr = { year: h, month: R, day: h, hour: h, minute: h, second: h },
  Fn = { year: h, month: R, day: h, weekday: R, hour: h, minute: h },
  ir = { year: h, month: F, day: h, hour: h, minute: h, timeZoneName: R },
  ar = {
    year: h,
    month: F,
    day: h,
    hour: h,
    minute: h,
    second: h,
    timeZoneName: R,
  },
  or = {
    year: h,
    month: F,
    day: h,
    weekday: F,
    hour: h,
    minute: h,
    timeZoneName: F,
  },
  sr = {
    year: h,
    month: F,
    day: h,
    weekday: F,
    hour: h,
    minute: h,
    second: h,
    timeZoneName: F,
  }
function T(t) {
  return typeof t == 'undefined'
}
function ae(t) {
  return typeof t == 'number'
}
function qe(t) {
  return typeof t == 'number' && t % 1 == 0
}
function Cn(t) {
  return typeof t == 'string'
}
function xn(t) {
  return Object.prototype.toString.call(t) === '[object Date]'
}
function ur() {
  try {
    return typeof Intl != 'undefined' && !!Intl.RelativeTimeFormat
  } catch {
    return !1
  }
}
function _n(t) {
  return Array.isArray(t) ? t : [t]
}
function lr(t, i, r) {
  if (t.length !== 0)
    return t.reduce(function (e, n) {
      var a = [i(n), n]
      return e && r(e[0], a[0]) === e[0] ? e : a
    }, null)[1]
}
function An(t, i) {
  return i.reduce(function (r, e) {
    return (r[e] = t[e]), r
  }, {})
}
function ve(t, i) {
  return Object.prototype.hasOwnProperty.call(t, i)
}
function G(t, i, r) {
  return qe(t) && t >= i && t <= r
}
function Vn(t, i) {
  return t - i * Math.floor(t / i)
}
function k(t, i) {
  i === void 0 && (i = 2)
  var r = t < 0,
    e
  return (
    r
      ? (e = '-' + ('' + -t).padStart(i, '0'))
      : (e = ('' + t).padStart(i, '0')),
    e
  )
}
function X(t) {
  if (!(T(t) || t === null || t === '')) return parseInt(t, 10)
}
function oe(t) {
  if (!(T(t) || t === null || t === '')) return parseFloat(t)
}
function ut(t) {
  if (!(T(t) || t === null || t === '')) {
    var i = parseFloat('0.' + t) * 1e3
    return Math.floor(i)
  }
}
function lt(t, i, r) {
  r === void 0 && (r = !1)
  var e = Math.pow(10, i),
    n = r ? Math.trunc : Math.round
  return n(t * e) / e
}
function Ee(t) {
  return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0)
}
function De(t) {
  return Ee(t) ? 366 : 365
}
function ze(t, i) {
  var r = Vn(i - 1, 12) + 1,
    e = t + (i - r) / 12
  return r === 2
    ? Ee(e)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1]
}
function ft(t) {
  var i = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond,
  )
  return (
    t.year < 100 &&
      t.year >= 0 &&
      ((i = new Date(i)), i.setUTCFullYear(i.getUTCFullYear() - 1900)),
    +i
  )
}
function He(t) {
  var i =
      (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7,
    r = t - 1,
    e = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7
  return i === 4 || e === 3 ? 53 : 52
}
function ct(t) {
  return t > 99 ? t : t > 60 ? 1900 + t : 2e3 + t
}
function fr(t, i, r, e) {
  e === void 0 && (e = null)
  var n = new Date(t),
    a = {
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }
  e && (a.timeZone = e)
  var o = p({ timeZoneName: i }, a),
    s = new Intl.DateTimeFormat(r, o).formatToParts(n).find(function (u) {
      return u.type.toLowerCase() === 'timezonename'
    })
  return s ? s.value : null
}
function Ue(t, i) {
  var r = parseInt(t, 10)
  Number.isNaN(r) && (r = 0)
  var e = parseInt(i, 10) || 0,
    n = r < 0 || Object.is(r, -0) ? -e : e
  return r * 60 + n
}
function cr(t) {
  var i = Number(t)
  if (typeof t == 'boolean' || t === '' || Number.isNaN(i))
    throw new A('Invalid unit value ' + t)
  return i
}
function $e(t, i) {
  var r = {}
  for (var e in t)
    if (ve(t, e)) {
      var n = t[e]
      if (n == null) continue
      r[i(e)] = cr(n)
    }
  return r
}
function je(t, i) {
  var r = Math.trunc(Math.abs(t / 60)),
    e = Math.trunc(Math.abs(t % 60)),
    n = t >= 0 ? '+' : '-'
  switch (i) {
    case 'short':
      return '' + n + k(r, 2) + ':' + k(e, 2)
    case 'narrow':
      return '' + n + r + (e > 0 ? ':' + e : '')
    case 'techie':
      return '' + n + k(r, 2) + k(e, 2)
    default:
      throw new RangeError(
        'Value format ' + i + ' is out of range for property format',
      )
  }
}
function Ye(t) {
  return An(t, ['hour', 'minute', 'second', 'millisecond'])
}
var dr = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/,
  Ln = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  mr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  Rn = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
function hr(t) {
  switch (t) {
    case 'narrow':
      return [].concat(Rn)
    case 'short':
      return [].concat(mr)
    case 'long':
      return [].concat(Ln)
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    case '2-digit':
      return [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ]
    default:
      return null
  }
}
var vr = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  yr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  Zn = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
function gr(t) {
  switch (t) {
    case 'narrow':
      return [].concat(Zn)
    case 'short':
      return [].concat(yr)
    case 'long':
      return [].concat(vr)
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7']
    default:
      return null
  }
}
var wr = ['AM', 'PM'],
  Pn = ['Before Christ', 'Anno Domini'],
  Wn = ['BC', 'AD'],
  qn = ['B', 'A']
function pr(t) {
  switch (t) {
    case 'narrow':
      return [].concat(qn)
    case 'short':
      return [].concat(Wn)
    case 'long':
      return [].concat(Pn)
    default:
      return null
  }
}
function zn(t) {
  return wr[t.hour < 12 ? 0 : 1]
}
function Hn(t, i) {
  return gr(i)[t.weekday - 1]
}
function Un(t, i) {
  return hr(i)[t.month - 1]
}
function $n(t, i) {
  return pr(i)[t.year < 0 ? 0 : 1]
}
function jn(t, i, r, e) {
  r === void 0 && (r = 'always'), e === void 0 && (e = !1)
  var n = {
      years: ['year', 'yr.'],
      quarters: ['quarter', 'qtr.'],
      months: ['month', 'mo.'],
      weeks: ['week', 'wk.'],
      days: ['day', 'day', 'days'],
      hours: ['hour', 'hr.'],
      minutes: ['minute', 'min.'],
      seconds: ['second', 'sec.'],
    },
    a = ['hours', 'minutes', 'seconds'].indexOf(t) === -1
  if (r === 'auto' && a) {
    var o = t === 'days'
    switch (i) {
      case 1:
        return o ? 'tomorrow' : 'next ' + n[t][0]
      case -1:
        return o ? 'yesterday' : 'last ' + n[t][0]
      case 0:
        return o ? 'today' : 'this ' + n[t][0]
    }
  }
  var s = Object.is(i, -0) || i < 0,
    u = Math.abs(i),
    l = u === 1,
    d = n[t],
    f = e ? (l ? d[1] : d[2] || d[1]) : l ? n[t][0] : t
  return s ? u + ' ' + f + ' ago' : 'in ' + u + ' ' + f
}
function Tr(t, i) {
  for (var r = '', e = Q(t), n; !(n = e()).done; ) {
    var a = n.value
    a.literal ? (r += a.val) : (r += i(a.val))
  }
  return r
}
var Yn = {
    D: st,
    DD: Ht,
    DDD: Ut,
    DDDD: $t,
    t: jt,
    tt: Yt,
    ttt: Gt,
    tttt: Jt,
    T: Bt,
    TT: Qt,
    TTT: Kt,
    TTTT: Xt,
    f: er,
    ff: rr,
    fff: ir,
    ffff: or,
    F: tr,
    FF: nr,
    FFF: ar,
    FFFF: sr,
  },
  J = (function () {
    ;(t.create = function (e, n) {
      return n === void 0 && (n = {}), new t(e, n)
    }),
      (t.parseFormat = function (e) {
        for (var n = null, a = '', o = !1, s = [], u = 0; u < e.length; u++) {
          var l = e.charAt(u)
          l === "'"
            ? (a.length > 0 && s.push({ literal: o, val: a }),
              (n = null),
              (a = ''),
              (o = !o))
            : o || l === n
            ? (a += l)
            : (a.length > 0 && s.push({ literal: !1, val: a }),
              (a = l),
              (n = l))
        }
        return a.length > 0 && s.push({ literal: o, val: a }), s
      }),
      (t.macroTokenToFormatOpts = function (e) {
        return Yn[e]
      })
    function t(r, e) {
      ;(this.opts = e), (this.loc = r), (this.systemLoc = null)
    }
    var i = t.prototype
    return (
      (i.formatWithSystemDefault = function (e, n) {
        this.systemLoc === null &&
          (this.systemLoc = this.loc.redefaultToSystem())
        var a = this.systemLoc.dtFormatter(e, p({}, this.opts, n))
        return a.format()
      }),
      (i.formatDateTime = function (e, n) {
        n === void 0 && (n = {})
        var a = this.loc.dtFormatter(e, p({}, this.opts, n))
        return a.format()
      }),
      (i.formatDateTimeParts = function (e, n) {
        n === void 0 && (n = {})
        var a = this.loc.dtFormatter(e, p({}, this.opts, n))
        return a.formatToParts()
      }),
      (i.resolvedOptions = function (e, n) {
        n === void 0 && (n = {})
        var a = this.loc.dtFormatter(e, p({}, this.opts, n))
        return a.resolvedOptions()
      }),
      (i.num = function (e, n) {
        if ((n === void 0 && (n = 0), this.opts.forceSimple)) return k(e, n)
        var a = p({}, this.opts)
        return n > 0 && (a.padTo = n), this.loc.numberFormatter(a).format(e)
      }),
      (i.formatDateTimeFromString = function (e, n) {
        var a = this,
          o = this.loc.listingMode() === 'en',
          s = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory',
          u = function (y, O) {
            return a.loc.extract(e, y, O)
          },
          l = function (y) {
            return e.isOffsetFixed && e.offset === 0 && y.allowZ
              ? 'Z'
              : e.isValid
              ? e.zone.formatOffset(e.ts, y.format)
              : ''
          },
          d = function () {
            return o
              ? zn(e)
              : u({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod')
          },
          f = function (y, O) {
            return o
              ? Un(e, y)
              : u(O ? { month: y } : { month: y, day: 'numeric' }, 'month')
          },
          c = function (y, O) {
            return o
              ? Hn(e, y)
              : u(
                  O
                    ? { weekday: y }
                    : { weekday: y, month: 'long', day: 'numeric' },
                  'weekday',
                )
          },
          m = function (y) {
            var O = t.macroTokenToFormatOpts(y)
            return O ? a.formatWithSystemDefault(e, O) : y
          },
          v = function (y) {
            return o ? $n(e, y) : u({ era: y }, 'era')
          },
          w = function (y) {
            switch (y) {
              case 'S':
                return a.num(e.millisecond)
              case 'u':
              case 'SSS':
                return a.num(e.millisecond, 3)
              case 's':
                return a.num(e.second)
              case 'ss':
                return a.num(e.second, 2)
              case 'uu':
                return a.num(Math.floor(e.millisecond / 10), 2)
              case 'uuu':
                return a.num(Math.floor(e.millisecond / 100))
              case 'm':
                return a.num(e.minute)
              case 'mm':
                return a.num(e.minute, 2)
              case 'h':
                return a.num(e.hour % 12 == 0 ? 12 : e.hour % 12)
              case 'hh':
                return a.num(e.hour % 12 == 0 ? 12 : e.hour % 12, 2)
              case 'H':
                return a.num(e.hour)
              case 'HH':
                return a.num(e.hour, 2)
              case 'Z':
                return l({ format: 'narrow', allowZ: a.opts.allowZ })
              case 'ZZ':
                return l({ format: 'short', allowZ: a.opts.allowZ })
              case 'ZZZ':
                return l({ format: 'techie', allowZ: a.opts.allowZ })
              case 'ZZZZ':
                return e.zone.offsetName(e.ts, {
                  format: 'short',
                  locale: a.loc.locale,
                })
              case 'ZZZZZ':
                return e.zone.offsetName(e.ts, {
                  format: 'long',
                  locale: a.loc.locale,
                })
              case 'z':
                return e.zoneName
              case 'a':
                return d()
              case 'd':
                return s ? u({ day: 'numeric' }, 'day') : a.num(e.day)
              case 'dd':
                return s ? u({ day: '2-digit' }, 'day') : a.num(e.day, 2)
              case 'c':
                return a.num(e.weekday)
              case 'ccc':
                return c('short', !0)
              case 'cccc':
                return c('long', !0)
              case 'ccccc':
                return c('narrow', !0)
              case 'E':
                return a.num(e.weekday)
              case 'EEE':
                return c('short', !1)
              case 'EEEE':
                return c('long', !1)
              case 'EEEEE':
                return c('narrow', !1)
              case 'L':
                return s
                  ? u({ month: 'numeric', day: 'numeric' }, 'month')
                  : a.num(e.month)
              case 'LL':
                return s
                  ? u({ month: '2-digit', day: 'numeric' }, 'month')
                  : a.num(e.month, 2)
              case 'LLL':
                return f('short', !0)
              case 'LLLL':
                return f('long', !0)
              case 'LLLLL':
                return f('narrow', !0)
              case 'M':
                return s ? u({ month: 'numeric' }, 'month') : a.num(e.month)
              case 'MM':
                return s ? u({ month: '2-digit' }, 'month') : a.num(e.month, 2)
              case 'MMM':
                return f('short', !1)
              case 'MMMM':
                return f('long', !1)
              case 'MMMMM':
                return f('narrow', !1)
              case 'y':
                return s ? u({ year: 'numeric' }, 'year') : a.num(e.year)
              case 'yy':
                return s
                  ? u({ year: '2-digit' }, 'year')
                  : a.num(e.year.toString().slice(-2), 2)
              case 'yyyy':
                return s ? u({ year: 'numeric' }, 'year') : a.num(e.year, 4)
              case 'yyyyyy':
                return s ? u({ year: 'numeric' }, 'year') : a.num(e.year, 6)
              case 'G':
                return v('short')
              case 'GG':
                return v('long')
              case 'GGGGG':
                return v('narrow')
              case 'kk':
                return a.num(e.weekYear.toString().slice(-2), 2)
              case 'kkkk':
                return a.num(e.weekYear, 4)
              case 'W':
                return a.num(e.weekNumber)
              case 'WW':
                return a.num(e.weekNumber, 2)
              case 'o':
                return a.num(e.ordinal)
              case 'ooo':
                return a.num(e.ordinal, 3)
              case 'q':
                return a.num(e.quarter)
              case 'qq':
                return a.num(e.quarter, 2)
              case 'X':
                return a.num(Math.floor(e.ts / 1e3))
              case 'x':
                return a.num(e.ts)
              default:
                return m(y)
            }
          }
        return Tr(t.parseFormat(n), w)
      }),
      (i.formatDurationFromString = function (e, n) {
        var a = this,
          o = function (c) {
            switch (c[0]) {
              case 'S':
                return 'millisecond'
              case 's':
                return 'second'
              case 'm':
                return 'minute'
              case 'h':
                return 'hour'
              case 'd':
                return 'day'
              case 'M':
                return 'month'
              case 'y':
                return 'year'
              default:
                return null
            }
          },
          s = function (c) {
            return function (m) {
              var v = o(m)
              return v ? a.num(c.get(v), m.length) : m
            }
          },
          u = t.parseFormat(n),
          l = u.reduce(function (f, c) {
            var m = c.literal,
              v = c.val
            return m ? f : f.concat(v)
          }, []),
          d = e.shiftTo.apply(
            e,
            l.map(o).filter(function (f) {
              return f
            }),
          )
        return Tr(u, s(d))
      }),
      t
    )
  })(),
  Z = (function () {
    function t(r, e) {
      ;(this.reason = r), (this.explanation = e)
    }
    var i = t.prototype
    return (
      (i.toMessage = function () {
        return this.explanation
          ? this.reason + ': ' + this.explanation
          : this.reason
      }),
      t
    )
  })(),
  ye = (function () {
    function t() {}
    var i = t.prototype
    return (
      (i.offsetName = function (e, n) {
        throw new K()
      }),
      (i.formatOffset = function (e, n) {
        throw new K()
      }),
      (i.offset = function (e) {
        throw new K()
      }),
      (i.equals = function (e) {
        throw new K()
      }),
      H(t, [
        {
          key: 'type',
          get: function () {
            throw new K()
          },
        },
        {
          key: 'name',
          get: function () {
            throw new K()
          },
        },
        {
          key: 'isUniversal',
          get: function () {
            throw new K()
          },
        },
        {
          key: 'isValid',
          get: function () {
            throw new K()
          },
        },
      ]),
      t
    )
  })(),
  dt = null,
  Sr = (function (t) {
    _(i, t)
    function i() {
      return t.apply(this, arguments) || this
    }
    var r = i.prototype
    return (
      (r.offsetName = function (n, a) {
        var o = a.format,
          s = a.locale
        return fr(n, o, s)
      }),
      (r.formatOffset = function (n, a) {
        return je(this.offset(n), a)
      }),
      (r.offset = function (n) {
        return -new Date(n).getTimezoneOffset()
      }),
      (r.equals = function (n) {
        return n.type === 'system'
      }),
      H(
        i,
        [
          {
            key: 'type',
            get: function () {
              return 'system'
            },
          },
          {
            key: 'name',
            get: function () {
              return new Intl.DateTimeFormat().resolvedOptions().timeZone
            },
          },
          {
            key: 'isUniversal',
            get: function () {
              return !1
            },
          },
          {
            key: 'isValid',
            get: function () {
              return !0
            },
          },
        ],
        [
          {
            key: 'instance',
            get: function () {
              return dt === null && (dt = new i()), dt
            },
          },
        ],
      ),
      i
    )
  })(ye),
  Gn = RegExp('^' + dr.source + '$'),
  Ge = {}
function Jn(t) {
  return (
    Ge[t] ||
      (Ge[t] = new Intl.DateTimeFormat('en-US', {
        hour12: !1,
        timeZone: t,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })),
    Ge[t]
  )
}
var Bn = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }
function Qn(t, i) {
  var r = t.format(i).replace(/\u200E/g, ''),
    e = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r),
    n = e[1],
    a = e[2],
    o = e[3],
    s = e[4],
    u = e[5],
    l = e[6]
  return [o, n, a, s, u, l]
}
function Kn(t, i) {
  for (var r = t.formatToParts(i), e = [], n = 0; n < r.length; n++) {
    var a = r[n],
      o = a.type,
      s = a.value,
      u = Bn[o]
    T(u) || (e[u] = parseInt(s, 10))
  }
  return e
}
var Je = {},
  B = (function (t) {
    _(i, t),
      (i.create = function (n) {
        return Je[n] || (Je[n] = new i(n)), Je[n]
      }),
      (i.resetCache = function () {
        ;(Je = {}), (Ge = {})
      }),
      (i.isValidSpecifier = function (n) {
        return !!(n && n.match(Gn))
      }),
      (i.isValidZone = function (n) {
        if (!n) return !1
        try {
          return new Intl.DateTimeFormat('en-US', { timeZone: n }).format(), !0
        } catch {
          return !1
        }
      })
    function i(e) {
      var n
      return (
        (n = t.call(this) || this),
        (n.zoneName = e),
        (n.valid = i.isValidZone(e)),
        n
      )
    }
    var r = i.prototype
    return (
      (r.offsetName = function (n, a) {
        var o = a.format,
          s = a.locale
        return fr(n, o, s, this.name)
      }),
      (r.formatOffset = function (n, a) {
        return je(this.offset(n), a)
      }),
      (r.offset = function (n) {
        var a = new Date(n)
        if (isNaN(a)) return NaN
        var o = Jn(this.name),
          s = o.formatToParts ? Kn(o, a) : Qn(o, a),
          u = s[0],
          l = s[1],
          d = s[2],
          f = s[3],
          c = s[4],
          m = s[5],
          v = f === 24 ? 0 : f,
          w = ft({
            year: u,
            month: l,
            day: d,
            hour: v,
            minute: c,
            second: m,
            millisecond: 0,
          }),
          g = +a,
          y = g % 1e3
        return (g -= y >= 0 ? y : 1e3 + y), (w - g) / (60 * 1e3)
      }),
      (r.equals = function (n) {
        return n.type === 'iana' && n.name === this.name
      }),
      H(i, [
        {
          key: 'type',
          get: function () {
            return 'iana'
          },
        },
        {
          key: 'name',
          get: function () {
            return this.zoneName
          },
        },
        {
          key: 'isUniversal',
          get: function () {
            return !1
          },
        },
        {
          key: 'isValid',
          get: function () {
            return this.valid
          },
        },
      ]),
      i
    )
  })(ye),
  mt = null,
  P = (function (t) {
    _(i, t),
      (i.instance = function (n) {
        return n === 0 ? i.utcInstance : new i(n)
      }),
      (i.parseSpecifier = function (n) {
        if (n) {
          var a = n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)
          if (a) return new i(Ue(a[1], a[2]))
        }
        return null
      })
    function i(e) {
      var n
      return (n = t.call(this) || this), (n.fixed = e), n
    }
    var r = i.prototype
    return (
      (r.offsetName = function () {
        return this.name
      }),
      (r.formatOffset = function (n, a) {
        return je(this.fixed, a)
      }),
      (r.offset = function () {
        return this.fixed
      }),
      (r.equals = function (n) {
        return n.type === 'fixed' && n.fixed === this.fixed
      }),
      H(
        i,
        [
          {
            key: 'type',
            get: function () {
              return 'fixed'
            },
          },
          {
            key: 'name',
            get: function () {
              return this.fixed === 0 ? 'UTC' : 'UTC' + je(this.fixed, 'narrow')
            },
          },
          {
            key: 'isUniversal',
            get: function () {
              return !0
            },
          },
          {
            key: 'isValid',
            get: function () {
              return !0
            },
          },
        ],
        [
          {
            key: 'utcInstance',
            get: function () {
              return mt === null && (mt = new i(0)), mt
            },
          },
        ],
      ),
      i
    )
  })(ye),
  ht = (function (t) {
    _(i, t)
    function i(e) {
      var n
      return (n = t.call(this) || this), (n.zoneName = e), n
    }
    var r = i.prototype
    return (
      (r.offsetName = function () {
        return null
      }),
      (r.formatOffset = function () {
        return ''
      }),
      (r.offset = function () {
        return NaN
      }),
      (r.equals = function () {
        return !1
      }),
      H(i, [
        {
          key: 'type',
          get: function () {
            return 'invalid'
          },
        },
        {
          key: 'name',
          get: function () {
            return this.zoneName
          },
        },
        {
          key: 'isUniversal',
          get: function () {
            return !1
          },
        },
        {
          key: 'isValid',
          get: function () {
            return !1
          },
        },
      ]),
      i
    )
  })(ye)
function ee(t, i) {
  if (T(t) || t === null) return i
  if (t instanceof ye) return t
  if (Cn(t)) {
    var r = t.toLowerCase()
    return r === 'local' || r === 'system'
      ? i
      : r === 'utc' || r === 'gmt'
      ? P.utcInstance
      : B.isValidSpecifier(r)
      ? B.create(t)
      : P.parseSpecifier(r) || new ht(t)
  } else
    return ae(t)
      ? P.instance(t)
      : typeof t == 'object' && t.offset && typeof t.offset == 'number'
      ? t
      : new ht(t)
}
var Or = function () {
    return Date.now()
  },
  kr = 'system',
  br = null,
  Ir = null,
  Er = null,
  Dr,
  b = (function () {
    function t() {}
    return (
      (t.resetCaches = function () {
        D.resetCache(), B.resetCache()
      }),
      H(t, null, [
        {
          key: 'now',
          get: function () {
            return Or
          },
          set: function (r) {
            Or = r
          },
        },
        {
          key: 'defaultZone',
          get: function () {
            return ee(kr, Sr.instance)
          },
          set: function (r) {
            kr = r
          },
        },
        {
          key: 'defaultLocale',
          get: function () {
            return br
          },
          set: function (r) {
            br = r
          },
        },
        {
          key: 'defaultNumberingSystem',
          get: function () {
            return Ir
          },
          set: function (r) {
            Ir = r
          },
        },
        {
          key: 'defaultOutputCalendar',
          get: function () {
            return Er
          },
          set: function (r) {
            Er = r
          },
        },
        {
          key: 'throwOnInvalid',
          get: function () {
            return Dr
          },
          set: function (r) {
            Dr = r
          },
        },
      ]),
      t
    )
  })(),
  Xn = ['base'],
  ei = ['padTo', 'floor'],
  Nr = {}
function ti(t, i) {
  i === void 0 && (i = {})
  var r = JSON.stringify([t, i]),
    e = Nr[r]
  return e || ((e = new Intl.ListFormat(t, i)), (Nr[r] = e)), e
}
var vt = {}
function yt(t, i) {
  i === void 0 && (i = {})
  var r = JSON.stringify([t, i]),
    e = vt[r]
  return e || ((e = new Intl.DateTimeFormat(t, i)), (vt[r] = e)), e
}
var gt = {}
function ri(t, i) {
  i === void 0 && (i = {})
  var r = JSON.stringify([t, i]),
    e = gt[r]
  return e || ((e = new Intl.NumberFormat(t, i)), (gt[r] = e)), e
}
var wt = {}
function ni(t, i) {
  i === void 0 && (i = {})
  var r = i
  r.base
  var e = Wt(r, Xn),
    n = JSON.stringify([t, e]),
    a = wt[n]
  return a || ((a = new Intl.RelativeTimeFormat(t, i)), (wt[n] = a)), a
}
var Ne = null
function ii() {
  return Ne || ((Ne = new Intl.DateTimeFormat().resolvedOptions().locale), Ne)
}
function ai(t) {
  var i = t.indexOf('-u-')
  if (i === -1) return [t]
  var r,
    e = t.substring(0, i)
  try {
    r = yt(t).resolvedOptions()
  } catch {
    r = yt(e).resolvedOptions()
  }
  var n = r,
    a = n.numberingSystem,
    o = n.calendar
  return [e, a, o]
}
function oi(t, i, r) {
  return (
    (r || i) && ((t += '-u'), r && (t += '-ca-' + r), i && (t += '-nu-' + i)), t
  )
}
function si(t) {
  for (var i = [], r = 1; r <= 12; r++) {
    var e = I.utc(2016, r, 1)
    i.push(t(e))
  }
  return i
}
function ui(t) {
  for (var i = [], r = 1; r <= 7; r++) {
    var e = I.utc(2016, 11, 13 + r)
    i.push(t(e))
  }
  return i
}
function Be(t, i, r, e, n) {
  var a = t.listingMode(r)
  return a === 'error' ? null : a === 'en' ? e(i) : n(i)
}
function li(t) {
  return t.numberingSystem && t.numberingSystem !== 'latn'
    ? !1
    : t.numberingSystem === 'latn' ||
        !t.locale ||
        t.locale.startsWith('en') ||
        new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem ===
          'latn'
}
var fi = (function () {
    function t(r, e, n) {
      ;(this.padTo = n.padTo || 0),
        (this.floor = n.floor || !1),
        n.padTo,
        n.floor
      var a = Wt(n, ei)
      if (!e || Object.keys(a).length > 0) {
        var o = p({ useGrouping: !1 }, n)
        n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), (this.inf = ri(r, o))
      }
    }
    var i = t.prototype
    return (
      (i.format = function (e) {
        if (this.inf) {
          var n = this.floor ? Math.floor(e) : e
          return this.inf.format(n)
        } else {
          var a = this.floor ? Math.floor(e) : lt(e, 3)
          return k(a, this.padTo)
        }
      }),
      t
    )
  })(),
  ci = (function () {
    function t(r, e, n) {
      this.opts = n
      var a
      if (r.zone.isUniversal) {
        var o = -1 * (r.offset / 60),
          s = o >= 0 ? 'Etc/GMT+' + o : 'Etc/GMT' + o
        r.offset !== 0 && B.create(s).valid
          ? ((a = s), (this.dt = r))
          : ((a = 'UTC'),
            n.timeZoneName
              ? (this.dt = r)
              : (this.dt =
                  r.offset === 0
                    ? r
                    : I.fromMillis(r.ts + r.offset * 60 * 1e3)))
      } else
        r.zone.type === 'system'
          ? (this.dt = r)
          : ((this.dt = r), (a = r.zone.name))
      var u = p({}, this.opts)
      a && (u.timeZone = a), (this.dtf = yt(e, u))
    }
    var i = t.prototype
    return (
      (i.format = function () {
        return this.dtf.format(this.dt.toJSDate())
      }),
      (i.formatToParts = function () {
        return this.dtf.formatToParts(this.dt.toJSDate())
      }),
      (i.resolvedOptions = function () {
        return this.dtf.resolvedOptions()
      }),
      t
    )
  })(),
  di = (function () {
    function t(r, e, n) {
      ;(this.opts = p({ style: 'long' }, n)),
        !e && ur() && (this.rtf = ni(r, n))
    }
    var i = t.prototype
    return (
      (i.format = function (e, n) {
        return this.rtf
          ? this.rtf.format(e, n)
          : jn(n, e, this.opts.numeric, this.opts.style !== 'long')
      }),
      (i.formatToParts = function (e, n) {
        return this.rtf ? this.rtf.formatToParts(e, n) : []
      }),
      t
    )
  })(),
  D = (function () {
    ;(t.fromOpts = function (e) {
      return t.create(
        e.locale,
        e.numberingSystem,
        e.outputCalendar,
        e.defaultToEN,
      )
    }),
      (t.create = function (e, n, a, o) {
        o === void 0 && (o = !1)
        var s = e || b.defaultLocale,
          u = s || (o ? 'en-US' : ii()),
          l = n || b.defaultNumberingSystem,
          d = a || b.defaultOutputCalendar
        return new t(u, l, d, s)
      }),
      (t.resetCache = function () {
        ;(Ne = null), (vt = {}), (gt = {}), (wt = {})
      }),
      (t.fromObject = function (e) {
        var n = e === void 0 ? {} : e,
          a = n.locale,
          o = n.numberingSystem,
          s = n.outputCalendar
        return t.create(a, o, s)
      })
    function t(r, e, n, a) {
      var o = ai(r),
        s = o[0],
        u = o[1],
        l = o[2]
      ;(this.locale = s),
        (this.numberingSystem = e || u || null),
        (this.outputCalendar = n || l || null),
        (this.intl = oi(
          this.locale,
          this.numberingSystem,
          this.outputCalendar,
        )),
        (this.weekdaysCache = { format: {}, standalone: {} }),
        (this.monthsCache = { format: {}, standalone: {} }),
        (this.meridiemCache = null),
        (this.eraCache = {}),
        (this.specifiedLocale = a),
        (this.fastNumbersCached = null)
    }
    var i = t.prototype
    return (
      (i.listingMode = function () {
        var e = this.isEnglish(),
          n =
            (this.numberingSystem === null ||
              this.numberingSystem === 'latn') &&
            (this.outputCalendar === null || this.outputCalendar === 'gregory')
        return e && n ? 'en' : 'intl'
      }),
      (i.clone = function (e) {
        return !e || Object.getOwnPropertyNames(e).length === 0
          ? this
          : t.create(
              e.locale || this.specifiedLocale,
              e.numberingSystem || this.numberingSystem,
              e.outputCalendar || this.outputCalendar,
              e.defaultToEN || !1,
            )
      }),
      (i.redefaultToEN = function (e) {
        return (
          e === void 0 && (e = {}), this.clone(p({}, e, { defaultToEN: !0 }))
        )
      }),
      (i.redefaultToSystem = function (e) {
        return (
          e === void 0 && (e = {}), this.clone(p({}, e, { defaultToEN: !1 }))
        )
      }),
      (i.months = function (e, n, a) {
        var o = this
        return (
          n === void 0 && (n = !1),
          a === void 0 && (a = !0),
          Be(this, e, a, hr, function () {
            var s = n ? { month: e, day: 'numeric' } : { month: e },
              u = n ? 'format' : 'standalone'
            return (
              o.monthsCache[u][e] ||
                (o.monthsCache[u][e] = si(function (l) {
                  return o.extract(l, s, 'month')
                })),
              o.monthsCache[u][e]
            )
          })
        )
      }),
      (i.weekdays = function (e, n, a) {
        var o = this
        return (
          n === void 0 && (n = !1),
          a === void 0 && (a = !0),
          Be(this, e, a, gr, function () {
            var s = n
                ? { weekday: e, year: 'numeric', month: 'long', day: 'numeric' }
                : { weekday: e },
              u = n ? 'format' : 'standalone'
            return (
              o.weekdaysCache[u][e] ||
                (o.weekdaysCache[u][e] = ui(function (l) {
                  return o.extract(l, s, 'weekday')
                })),
              o.weekdaysCache[u][e]
            )
          })
        )
      }),
      (i.meridiems = function (e) {
        var n = this
        return (
          e === void 0 && (e = !0),
          Be(
            this,
            void 0,
            e,
            function () {
              return wr
            },
            function () {
              if (!n.meridiemCache) {
                var a = { hour: 'numeric', hourCycle: 'h12' }
                n.meridiemCache = [
                  I.utc(2016, 11, 13, 9),
                  I.utc(2016, 11, 13, 19),
                ].map(function (o) {
                  return n.extract(o, a, 'dayperiod')
                })
              }
              return n.meridiemCache
            },
          )
        )
      }),
      (i.eras = function (e, n) {
        var a = this
        return (
          n === void 0 && (n = !0),
          Be(this, e, n, pr, function () {
            var o = { era: e }
            return (
              a.eraCache[e] ||
                (a.eraCache[e] = [I.utc(-40, 1, 1), I.utc(2017, 1, 1)].map(
                  function (s) {
                    return a.extract(s, o, 'era')
                  },
                )),
              a.eraCache[e]
            )
          })
        )
      }),
      (i.extract = function (e, n, a) {
        var o = this.dtFormatter(e, n),
          s = o.formatToParts(),
          u = s.find(function (l) {
            return l.type.toLowerCase() === a
          })
        return u ? u.value : null
      }),
      (i.numberFormatter = function (e) {
        return (
          e === void 0 && (e = {}),
          new fi(this.intl, e.forceSimple || this.fastNumbers, e)
        )
      }),
      (i.dtFormatter = function (e, n) {
        return n === void 0 && (n = {}), new ci(e, this.intl, n)
      }),
      (i.relFormatter = function (e) {
        return e === void 0 && (e = {}), new di(this.intl, this.isEnglish(), e)
      }),
      (i.listFormatter = function (e) {
        return e === void 0 && (e = {}), ti(this.intl, e)
      }),
      (i.isEnglish = function () {
        return (
          this.locale === 'en' ||
          this.locale.toLowerCase() === 'en-us' ||
          new Intl.DateTimeFormat(this.intl)
            .resolvedOptions()
            .locale.startsWith('en-us')
        )
      }),
      (i.equals = function (e) {
        return (
          this.locale === e.locale &&
          this.numberingSystem === e.numberingSystem &&
          this.outputCalendar === e.outputCalendar
        )
      }),
      H(t, [
        {
          key: 'fastNumbers',
          get: function () {
            return (
              this.fastNumbersCached == null &&
                (this.fastNumbersCached = li(this)),
              this.fastNumbersCached
            )
          },
        },
      ]),
      t
    )
  })()
function ge() {
  for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
    i[r] = arguments[r]
  var e = i.reduce(function (n, a) {
    return n + a.source
  }, '')
  return RegExp('^' + e + '$')
}
function se() {
  for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
    i[r] = arguments[r]
  return function (e) {
    return i
      .reduce(
        function (n, a) {
          var o = n[0],
            s = n[1],
            u = n[2],
            l = a(e, u),
            d = l[0],
            f = l[1],
            c = l[2]
          return [p({}, o, d), s || f, c]
        },
        [{}, null, 1],
      )
      .slice(0, 2)
  }
}
function we(t) {
  if (t == null) return [null, null]
  for (
    var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), e = 1;
    e < i;
    e++
  )
    r[e - 1] = arguments[e]
  for (var n = 0, a = r; n < a.length; n++) {
    var o = a[n],
      s = o[0],
      u = o[1],
      l = s.exec(t)
    if (l) return u(l)
  }
  return [null, null]
}
function Mr() {
  for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
    i[r] = arguments[r]
  return function (e, n) {
    var a = {},
      o
    for (o = 0; o < i.length; o++) a[i[o]] = X(e[n + o])
    return [a, null, n + o]
  }
}
var Fr = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  pt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  Cr = RegExp('' + pt.source + Fr.source + '?'),
  Tt = RegExp('(?:T' + Cr.source + ')?'),
  mi = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
  hi = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
  vi = /(\d{4})-?(\d{3})/,
  yi = Mr('weekYear', 'weekNumber', 'weekDay'),
  gi = Mr('year', 'ordinal'),
  wi = /(\d{4})-(\d\d)-(\d\d)/,
  xr = RegExp(pt.source + ' ?(?:' + Fr.source + '|(' + dr.source + '))?'),
  pi = RegExp('(?: ' + xr.source + ')?')
function pe(t, i, r) {
  var e = t[i]
  return T(e) ? r : X(e)
}
function _r(t, i) {
  var r = { year: pe(t, i), month: pe(t, i + 1, 1), day: pe(t, i + 2, 1) }
  return [r, null, i + 3]
}
function ue(t, i) {
  var r = {
    hours: pe(t, i, 0),
    minutes: pe(t, i + 1, 0),
    seconds: pe(t, i + 2, 0),
    milliseconds: ut(t[i + 3]),
  }
  return [r, null, i + 4]
}
function Te(t, i) {
  var r = !t[i] && !t[i + 1],
    e = Ue(t[i + 1], t[i + 2]),
    n = r ? null : P.instance(e)
  return [{}, n, i + 3]
}
function Ar(t, i) {
  var r = t[i] ? B.create(t[i]) : null
  return [{}, r, i + 1]
}
var Ti = RegExp('^T?' + pt.source + '$'),
  Si = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/
function Oi(t) {
  var i = t[0],
    r = t[1],
    e = t[2],
    n = t[3],
    a = t[4],
    o = t[5],
    s = t[6],
    u = t[7],
    l = t[8],
    d = i[0] === '-',
    f = u && u[0] === '-',
    c = function (v, w) {
      return w === void 0 && (w = !1), v !== void 0 && (w || (v && d)) ? -v : v
    }
  return [
    {
      years: c(oe(r)),
      months: c(oe(e)),
      weeks: c(oe(n)),
      days: c(oe(a)),
      hours: c(oe(o)),
      minutes: c(oe(s)),
      seconds: c(oe(u), u === '-0'),
      milliseconds: c(ut(l), f),
    },
  ]
}
var ki = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
}
function St(t, i, r, e, n, a, o) {
  var s = {
    year: i.length === 2 ? ct(X(i)) : X(i),
    month: mr.indexOf(r) + 1,
    day: X(e),
    hour: X(n),
    minute: X(a),
  }
  return (
    o && (s.second = X(o)),
    t && (s.weekday = t.length > 3 ? vr.indexOf(t) + 1 : yr.indexOf(t) + 1),
    s
  )
}
var bi = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/
function Ii(t) {
  var i = t[1],
    r = t[2],
    e = t[3],
    n = t[4],
    a = t[5],
    o = t[6],
    s = t[7],
    u = t[8],
    l = t[9],
    d = t[10],
    f = t[11],
    c = St(i, n, e, r, a, o, s),
    m
  return u ? (m = ki[u]) : l ? (m = 0) : (m = Ue(d, f)), [c, new P(m)]
}
function Ei(t) {
  return t
    .replace(/\([^)]*\)|[\n\t]/g, ' ')
    .replace(/(\s\s+)/g, ' ')
    .trim()
}
var Di = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  Ni = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  Mi = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/
function Vr(t) {
  var i = t[1],
    r = t[2],
    e = t[3],
    n = t[4],
    a = t[5],
    o = t[6],
    s = t[7],
    u = St(i, n, e, r, a, o, s)
  return [u, P.utcInstance]
}
function Fi(t) {
  var i = t[1],
    r = t[2],
    e = t[3],
    n = t[4],
    a = t[5],
    o = t[6],
    s = t[7],
    u = St(i, s, r, e, n, a, o)
  return [u, P.utcInstance]
}
var Ci = ge(mi, Tt),
  xi = ge(hi, Tt),
  _i = ge(vi, Tt),
  Ai = ge(Cr),
  Vi = se(_r, ue, Te),
  Li = se(yi, ue, Te),
  Ri = se(gi, ue, Te),
  Zi = se(ue, Te)
function Pi(t) {
  return we(t, [Ci, Vi], [xi, Li], [_i, Ri], [Ai, Zi])
}
function Wi(t) {
  return we(Ei(t), [bi, Ii])
}
function qi(t) {
  return we(t, [Di, Vr], [Ni, Vr], [Mi, Fi])
}
function zi(t) {
  return we(t, [Si, Oi])
}
var Hi = se(ue)
function Ui(t) {
  return we(t, [Ti, Hi])
}
var $i = ge(wi, pi),
  ji = ge(xr),
  Yi = se(_r, ue, Te, Ar),
  Gi = se(ue, Te, Ar)
function Ji(t) {
  return we(t, [$i, Yi], [ji, Gi])
}
var Bi = 'Invalid Duration',
  Lr = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1e3,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1e3,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
    minutes: { seconds: 60, milliseconds: 60 * 1e3 },
    seconds: { milliseconds: 1e3 },
  },
  Qi = p(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 365 * 24,
        minutes: 365 * 24 * 60,
        seconds: 365 * 24 * 60 * 60,
        milliseconds: 365 * 24 * 60 * 60 * 1e3,
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 91 * 24,
        minutes: 91 * 24 * 60,
        seconds: 91 * 24 * 60 * 60,
        milliseconds: 91 * 24 * 60 * 60 * 1e3,
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 30 * 24,
        minutes: 30 * 24 * 60,
        seconds: 30 * 24 * 60 * 60,
        milliseconds: 30 * 24 * 60 * 60 * 1e3,
      },
    },
    Lr,
  ),
  V = 146097 / 400,
  Se = 146097 / 4800,
  Ki = p(
    {
      years: {
        quarters: 4,
        months: 12,
        weeks: V / 7,
        days: V,
        hours: V * 24,
        minutes: V * 24 * 60,
        seconds: V * 24 * 60 * 60,
        milliseconds: V * 24 * 60 * 60 * 1e3,
      },
      quarters: {
        months: 3,
        weeks: V / 28,
        days: V / 4,
        hours: (V * 24) / 4,
        minutes: (V * 24 * 60) / 4,
        seconds: (V * 24 * 60 * 60) / 4,
        milliseconds: (V * 24 * 60 * 60 * 1e3) / 4,
      },
      months: {
        weeks: Se / 7,
        days: Se,
        hours: Se * 24,
        minutes: Se * 24 * 60,
        seconds: Se * 24 * 60 * 60,
        milliseconds: Se * 24 * 60 * 60 * 1e3,
      },
    },
    Lr,
  ),
  le = [
    'years',
    'quarters',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes',
    'seconds',
    'milliseconds',
  ],
  Xi = le.slice(0).reverse()
function fe(t, i, r) {
  r === void 0 && (r = !1)
  var e = {
    values: r ? i.values : p({}, t.values, i.values || {}),
    loc: t.loc.clone(i.loc),
    conversionAccuracy: i.conversionAccuracy || t.conversionAccuracy,
  }
  return new N(e)
}
function ea(t) {
  return t < 0 ? Math.floor(t) : Math.ceil(t)
}
function Rr(t, i, r, e, n) {
  var a = t[n][r],
    o = i[r] / a,
    s = Math.sign(o) === Math.sign(e[n]),
    u = !s && e[n] !== 0 && Math.abs(o) <= 1 ? ea(o) : Math.trunc(o)
  ;(e[n] += u), (i[r] -= u * a)
}
function ta(t, i) {
  Xi.reduce(function (r, e) {
    return T(i[e]) ? r : (r && Rr(t, i, r, i, e), e)
  }, null)
}
var N = (function () {
    function t(r) {
      var e = r.conversionAccuracy === 'longterm' || !1
      ;(this.values = r.values),
        (this.loc = r.loc || D.create()),
        (this.conversionAccuracy = e ? 'longterm' : 'casual'),
        (this.invalid = r.invalid || null),
        (this.matrix = e ? Ki : Qi),
        (this.isLuxonDuration = !0)
    }
    ;(t.fromMillis = function (e, n) {
      return t.fromObject({ milliseconds: e }, n)
    }),
      (t.fromObject = function (e, n) {
        if ((n === void 0 && (n = {}), e == null || typeof e != 'object'))
          throw new A(
            'Duration.fromObject: argument expected to be an object, got ' +
              (e === null ? 'null' : typeof e),
          )
        return new t({
          values: $e(e, t.normalizeUnit),
          loc: D.fromObject(n),
          conversionAccuracy: n.conversionAccuracy,
        })
      }),
      (t.fromDurationLike = function (e) {
        if (ae(e)) return t.fromMillis(e)
        if (t.isDuration(e)) return e
        if (typeof e == 'object') return t.fromObject(e)
        throw new A('Unknown duration argument ' + e + ' of type ' + typeof e)
      }),
      (t.fromISO = function (e, n) {
        var a = zi(e),
          o = a[0]
        return o
          ? t.fromObject(o, n)
          : t.invalid(
              'unparsable',
              'the input "' + e + `" can't be parsed as ISO 8601`,
            )
      }),
      (t.fromISOTime = function (e, n) {
        var a = Ui(e),
          o = a[0]
        return o
          ? t.fromObject(o, n)
          : t.invalid(
              'unparsable',
              'the input "' + e + `" can't be parsed as ISO 8601`,
            )
      }),
      (t.invalid = function (e, n) {
        if ((n === void 0 && (n = null), !e))
          throw new A('need to specify a reason the Duration is invalid')
        var a = e instanceof Z ? e : new Z(e, n)
        if (b.throwOnInvalid) throw new Nn(a)
        return new t({ invalid: a })
      }),
      (t.normalizeUnit = function (e) {
        var n = {
          year: 'years',
          years: 'years',
          quarter: 'quarters',
          quarters: 'quarters',
          month: 'months',
          months: 'months',
          week: 'weeks',
          weeks: 'weeks',
          day: 'days',
          days: 'days',
          hour: 'hours',
          hours: 'hours',
          minute: 'minutes',
          minutes: 'minutes',
          second: 'seconds',
          seconds: 'seconds',
          millisecond: 'milliseconds',
          milliseconds: 'milliseconds',
        }[e && e.toLowerCase()]
        if (!n) throw new zt(e)
        return n
      }),
      (t.isDuration = function (e) {
        return (e && e.isLuxonDuration) || !1
      })
    var i = t.prototype
    return (
      (i.toFormat = function (e, n) {
        n === void 0 && (n = {})
        var a = p({}, n, { floor: n.round !== !1 && n.floor !== !1 })
        return this.isValid
          ? J.create(this.loc, a).formatDurationFromString(this, e)
          : Bi
      }),
      (i.toHuman = function (e) {
        var n = this
        e === void 0 && (e = {})
        var a = le
          .map(function (o) {
            var s = n.values[o]
            return T(s)
              ? null
              : n.loc
                  .numberFormatter(
                    p({ style: 'unit', unitDisplay: 'long' }, e, {
                      unit: o.slice(0, -1),
                    }),
                  )
                  .format(s)
          })
          .filter(function (o) {
            return o
          })
        return this.loc
          .listFormatter(
            p({ type: 'conjunction', style: e.listStyle || 'narrow' }, e),
          )
          .format(a)
      }),
      (i.toObject = function () {
        return this.isValid ? p({}, this.values) : {}
      }),
      (i.toISO = function () {
        if (!this.isValid) return null
        var e = 'P'
        return (
          this.years !== 0 && (e += this.years + 'Y'),
          (this.months !== 0 || this.quarters !== 0) &&
            (e += this.months + this.quarters * 3 + 'M'),
          this.weeks !== 0 && (e += this.weeks + 'W'),
          this.days !== 0 && (e += this.days + 'D'),
          (this.hours !== 0 ||
            this.minutes !== 0 ||
            this.seconds !== 0 ||
            this.milliseconds !== 0) &&
            (e += 'T'),
          this.hours !== 0 && (e += this.hours + 'H'),
          this.minutes !== 0 && (e += this.minutes + 'M'),
          (this.seconds !== 0 || this.milliseconds !== 0) &&
            (e += lt(this.seconds + this.milliseconds / 1e3, 3) + 'S'),
          e === 'P' && (e += 'T0S'),
          e
        )
      }),
      (i.toISOTime = function (e) {
        if ((e === void 0 && (e = {}), !this.isValid)) return null
        var n = this.toMillis()
        if (n < 0 || n >= 864e5) return null
        e = p(
          {
            suppressMilliseconds: !1,
            suppressSeconds: !1,
            includePrefix: !1,
            format: 'extended',
          },
          e,
        )
        var a = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds'),
          o = e.format === 'basic' ? 'hhmm' : 'hh:mm'
        ;(!e.suppressSeconds || a.seconds !== 0 || a.milliseconds !== 0) &&
          ((o += e.format === 'basic' ? 'ss' : ':ss'),
          (!e.suppressMilliseconds || a.milliseconds !== 0) && (o += '.SSS'))
        var s = a.toFormat(o)
        return e.includePrefix && (s = 'T' + s), s
      }),
      (i.toJSON = function () {
        return this.toISO()
      }),
      (i.toString = function () {
        return this.toISO()
      }),
      (i.toMillis = function () {
        return this.as('milliseconds')
      }),
      (i.valueOf = function () {
        return this.toMillis()
      }),
      (i.plus = function (e) {
        if (!this.isValid) return this
        for (
          var n = t.fromDurationLike(e), a = {}, o = Q(le), s;
          !(s = o()).done;

        ) {
          var u = s.value
          ;(ve(n.values, u) || ve(this.values, u)) &&
            (a[u] = n.get(u) + this.get(u))
        }
        return fe(this, { values: a }, !0)
      }),
      (i.minus = function (e) {
        if (!this.isValid) return this
        var n = t.fromDurationLike(e)
        return this.plus(n.negate())
      }),
      (i.mapUnits = function (e) {
        if (!this.isValid) return this
        for (
          var n = {}, a = 0, o = Object.keys(this.values);
          a < o.length;
          a++
        ) {
          var s = o[a]
          n[s] = cr(e(this.values[s], s))
        }
        return fe(this, { values: n }, !0)
      }),
      (i.get = function (e) {
        return this[t.normalizeUnit(e)]
      }),
      (i.set = function (e) {
        if (!this.isValid) return this
        var n = p({}, this.values, $e(e, t.normalizeUnit))
        return fe(this, { values: n })
      }),
      (i.reconfigure = function (e) {
        var n = e === void 0 ? {} : e,
          a = n.locale,
          o = n.numberingSystem,
          s = n.conversionAccuracy,
          u = this.loc.clone({ locale: a, numberingSystem: o }),
          l = { loc: u }
        return s && (l.conversionAccuracy = s), fe(this, l)
      }),
      (i.as = function (e) {
        return this.isValid ? this.shiftTo(e).get(e) : NaN
      }),
      (i.normalize = function () {
        if (!this.isValid) return this
        var e = this.toObject()
        return ta(this.matrix, e), fe(this, { values: e }, !0)
      }),
      (i.shiftTo = function () {
        for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
          n[a] = arguments[a]
        if (!this.isValid) return this
        if (n.length === 0) return this
        n = n.map(function (O) {
          return t.normalizeUnit(O)
        })
        for (
          var o = {}, s = {}, u = this.toObject(), l, d = Q(le), f;
          !(f = d()).done;

        ) {
          var c = f.value
          if (n.indexOf(c) >= 0) {
            l = c
            var m = 0
            for (var v in s) (m += this.matrix[v][c] * s[v]), (s[v] = 0)
            ae(u[c]) && (m += u[c])
            var w = Math.trunc(m)
            ;(o[c] = w), (s[c] = (m * 1e3 - w * 1e3) / 1e3)
            for (var g in u)
              le.indexOf(g) > le.indexOf(c) && Rr(this.matrix, u, g, o, c)
          } else ae(u[c]) && (s[c] = u[c])
        }
        for (var y in s)
          s[y] !== 0 && (o[l] += y === l ? s[y] : s[y] / this.matrix[l][y])
        return fe(this, { values: o }, !0).normalize()
      }),
      (i.negate = function () {
        if (!this.isValid) return this
        for (
          var e = {}, n = 0, a = Object.keys(this.values);
          n < a.length;
          n++
        ) {
          var o = a[n]
          e[o] = -this.values[o]
        }
        return fe(this, { values: e }, !0)
      }),
      (i.equals = function (e) {
        if (!this.isValid || !e.isValid || !this.loc.equals(e.loc)) return !1
        function n(u, l) {
          return u === void 0 || u === 0 ? l === void 0 || l === 0 : u === l
        }
        for (var a = Q(le), o; !(o = a()).done; ) {
          var s = o.value
          if (!n(this.values[s], e.values[s])) return !1
        }
        return !0
      }),
      H(t, [
        {
          key: 'locale',
          get: function () {
            return this.isValid ? this.loc.locale : null
          },
        },
        {
          key: 'numberingSystem',
          get: function () {
            return this.isValid ? this.loc.numberingSystem : null
          },
        },
        {
          key: 'years',
          get: function () {
            return this.isValid ? this.values.years || 0 : NaN
          },
        },
        {
          key: 'quarters',
          get: function () {
            return this.isValid ? this.values.quarters || 0 : NaN
          },
        },
        {
          key: 'months',
          get: function () {
            return this.isValid ? this.values.months || 0 : NaN
          },
        },
        {
          key: 'weeks',
          get: function () {
            return this.isValid ? this.values.weeks || 0 : NaN
          },
        },
        {
          key: 'days',
          get: function () {
            return this.isValid ? this.values.days || 0 : NaN
          },
        },
        {
          key: 'hours',
          get: function () {
            return this.isValid ? this.values.hours || 0 : NaN
          },
        },
        {
          key: 'minutes',
          get: function () {
            return this.isValid ? this.values.minutes || 0 : NaN
          },
        },
        {
          key: 'seconds',
          get: function () {
            return this.isValid ? this.values.seconds || 0 : NaN
          },
        },
        {
          key: 'milliseconds',
          get: function () {
            return this.isValid ? this.values.milliseconds || 0 : NaN
          },
        },
        {
          key: 'isValid',
          get: function () {
            return this.invalid === null
          },
        },
        {
          key: 'invalidReason',
          get: function () {
            return this.invalid ? this.invalid.reason : null
          },
        },
        {
          key: 'invalidExplanation',
          get: function () {
            return this.invalid ? this.invalid.explanation : null
          },
        },
      ]),
      t
    )
  })(),
  Me = 'Invalid Interval'
function ra(t, i) {
  return !t || !t.isValid
    ? Fe.invalid('missing or invalid start')
    : !i || !i.isValid
    ? Fe.invalid('missing or invalid end')
    : i < t
    ? Fe.invalid(
        'end before start',
        'The end of an interval must be after its start, but you had start=' +
          t.toISO() +
          ' and end=' +
          i.toISO(),
      )
    : null
}
var Fe = (function () {
    function t(r) {
      ;(this.s = r.start),
        (this.e = r.end),
        (this.invalid = r.invalid || null),
        (this.isLuxonInterval = !0)
    }
    ;(t.invalid = function (e, n) {
      if ((n === void 0 && (n = null), !e))
        throw new A('need to specify a reason the Interval is invalid')
      var a = e instanceof Z ? e : new Z(e, n)
      if (b.throwOnInvalid) throw new Dn(a)
      return new t({ invalid: a })
    }),
      (t.fromDateTimes = function (e, n) {
        var a = Ae(e),
          o = Ae(n),
          s = ra(a, o)
        return s == null ? new t({ start: a, end: o }) : s
      }),
      (t.after = function (e, n) {
        var a = N.fromDurationLike(n),
          o = Ae(e)
        return t.fromDateTimes(o, o.plus(a))
      }),
      (t.before = function (e, n) {
        var a = N.fromDurationLike(n),
          o = Ae(e)
        return t.fromDateTimes(o.minus(a), o)
      }),
      (t.fromISO = function (e, n) {
        var a = (e || '').split('/', 2),
          o = a[0],
          s = a[1]
        if (o && s) {
          var u, l
          try {
            ;(u = I.fromISO(o, n)), (l = u.isValid)
          } catch {
            l = !1
          }
          var d, f
          try {
            ;(d = I.fromISO(s, n)), (f = d.isValid)
          } catch {
            f = !1
          }
          if (l && f) return t.fromDateTimes(u, d)
          if (l) {
            var c = N.fromISO(s, n)
            if (c.isValid) return t.after(u, c)
          } else if (f) {
            var m = N.fromISO(o, n)
            if (m.isValid) return t.before(d, m)
          }
        }
        return t.invalid(
          'unparsable',
          'the input "' + e + `" can't be parsed as ISO 8601`,
        )
      }),
      (t.isInterval = function (e) {
        return (e && e.isLuxonInterval) || !1
      })
    var i = t.prototype
    return (
      (i.length = function (e) {
        return (
          e === void 0 && (e = 'milliseconds'),
          this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
        )
      }),
      (i.count = function (e) {
        if ((e === void 0 && (e = 'milliseconds'), !this.isValid)) return NaN
        var n = this.start.startOf(e),
          a = this.end.startOf(e)
        return Math.floor(a.diff(n, e).get(e)) + 1
      }),
      (i.hasSame = function (e) {
        return this.isValid
          ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e)
          : !1
      }),
      (i.isEmpty = function () {
        return this.s.valueOf() === this.e.valueOf()
      }),
      (i.isAfter = function (e) {
        return this.isValid ? this.s > e : !1
      }),
      (i.isBefore = function (e) {
        return this.isValid ? this.e <= e : !1
      }),
      (i.contains = function (e) {
        return this.isValid ? this.s <= e && this.e > e : !1
      }),
      (i.set = function (e) {
        var n = e === void 0 ? {} : e,
          a = n.start,
          o = n.end
        return this.isValid ? t.fromDateTimes(a || this.s, o || this.e) : this
      }),
      (i.splitAt = function () {
        var e = this
        if (!this.isValid) return []
        for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
          a[o] = arguments[o]
        for (
          var s = a
              .map(Ae)
              .filter(function (m) {
                return e.contains(m)
              })
              .sort(),
            u = [],
            l = this.s,
            d = 0;
          l < this.e;

        ) {
          var f = s[d] || this.e,
            c = +f > +this.e ? this.e : f
          u.push(t.fromDateTimes(l, c)), (l = c), (d += 1)
        }
        return u
      }),
      (i.splitBy = function (e) {
        var n = N.fromDurationLike(e)
        if (!this.isValid || !n.isValid || n.as('milliseconds') === 0) return []
        for (var a = this.s, o = 1, s, u = []; a < this.e; ) {
          var l = this.start.plus(
            n.mapUnits(function (d) {
              return d * o
            }),
          )
          ;(s = +l > +this.e ? this.e : l),
            u.push(t.fromDateTimes(a, s)),
            (a = s),
            (o += 1)
        }
        return u
      }),
      (i.divideEqually = function (e) {
        return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
      }),
      (i.overlaps = function (e) {
        return this.e > e.s && this.s < e.e
      }),
      (i.abutsStart = function (e) {
        return this.isValid ? +this.e == +e.s : !1
      }),
      (i.abutsEnd = function (e) {
        return this.isValid ? +e.e == +this.s : !1
      }),
      (i.engulfs = function (e) {
        return this.isValid ? this.s <= e.s && this.e >= e.e : !1
      }),
      (i.equals = function (e) {
        return !this.isValid || !e.isValid
          ? !1
          : this.s.equals(e.s) && this.e.equals(e.e)
      }),
      (i.intersection = function (e) {
        if (!this.isValid) return this
        var n = this.s > e.s ? this.s : e.s,
          a = this.e < e.e ? this.e : e.e
        return n >= a ? null : t.fromDateTimes(n, a)
      }),
      (i.union = function (e) {
        if (!this.isValid) return this
        var n = this.s < e.s ? this.s : e.s,
          a = this.e > e.e ? this.e : e.e
        return t.fromDateTimes(n, a)
      }),
      (t.merge = function (e) {
        var n = e
            .sort(function (s, u) {
              return s.s - u.s
            })
            .reduce(
              function (s, u) {
                var l = s[0],
                  d = s[1]
                return d
                  ? d.overlaps(u) || d.abutsStart(u)
                    ? [l, d.union(u)]
                    : [l.concat([d]), u]
                  : [l, u]
              },
              [[], null],
            ),
          a = n[0],
          o = n[1]
        return o && a.push(o), a
      }),
      (t.xor = function (e) {
        for (
          var n,
            a = null,
            o = 0,
            s = [],
            u = e.map(function (v) {
              return [
                { time: v.s, type: 's' },
                { time: v.e, type: 'e' },
              ]
            }),
            l = (n = Array.prototype).concat.apply(n, u),
            d = l.sort(function (v, w) {
              return v.time - w.time
            }),
            f = Q(d),
            c;
          !(c = f()).done;

        ) {
          var m = c.value
          ;(o += m.type === 's' ? 1 : -1),
            o === 1
              ? (a = m.time)
              : (a && +a != +m.time && s.push(t.fromDateTimes(a, m.time)),
                (a = null))
        }
        return t.merge(s)
      }),
      (i.difference = function () {
        for (
          var e = this, n = arguments.length, a = new Array(n), o = 0;
          o < n;
          o++
        )
          a[o] = arguments[o]
        return t
          .xor([this].concat(a))
          .map(function (s) {
            return e.intersection(s)
          })
          .filter(function (s) {
            return s && !s.isEmpty()
          })
      }),
      (i.toString = function () {
        return this.isValid
          ? '[' + this.s.toISO() + ' \u2013 ' + this.e.toISO() + ')'
          : Me
      }),
      (i.toISO = function (e) {
        return this.isValid ? this.s.toISO(e) + '/' + this.e.toISO(e) : Me
      }),
      (i.toISODate = function () {
        return this.isValid ? this.s.toISODate() + '/' + this.e.toISODate() : Me
      }),
      (i.toISOTime = function (e) {
        return this.isValid
          ? this.s.toISOTime(e) + '/' + this.e.toISOTime(e)
          : Me
      }),
      (i.toFormat = function (e, n) {
        var a = n === void 0 ? {} : n,
          o = a.separator,
          s = o === void 0 ? ' \u2013 ' : o
        return this.isValid
          ? '' + this.s.toFormat(e) + s + this.e.toFormat(e)
          : Me
      }),
      (i.toDuration = function (e, n) {
        return this.isValid
          ? this.e.diff(this.s, e, n)
          : N.invalid(this.invalidReason)
      }),
      (i.mapEndpoints = function (e) {
        return t.fromDateTimes(e(this.s), e(this.e))
      }),
      H(t, [
        {
          key: 'start',
          get: function () {
            return this.isValid ? this.s : null
          },
        },
        {
          key: 'end',
          get: function () {
            return this.isValid ? this.e : null
          },
        },
        {
          key: 'isValid',
          get: function () {
            return this.invalidReason === null
          },
        },
        {
          key: 'invalidReason',
          get: function () {
            return this.invalid ? this.invalid.reason : null
          },
        },
        {
          key: 'invalidExplanation',
          get: function () {
            return this.invalid ? this.invalid.explanation : null
          },
        },
      ]),
      t
    )
  })(),
  Ce = (function () {
    function t() {}
    return (
      (t.hasDST = function (r) {
        r === void 0 && (r = b.defaultZone)
        var e = I.now().setZone(r).set({ month: 12 })
        return !r.isUniversal && e.offset !== e.set({ month: 6 }).offset
      }),
      (t.isValidIANAZone = function (r) {
        return B.isValidSpecifier(r) && B.isValidZone(r)
      }),
      (t.normalizeZone = function (r) {
        return ee(r, b.defaultZone)
      }),
      (t.months = function (r, e) {
        r === void 0 && (r = 'long')
        var n = e === void 0 ? {} : e,
          a = n.locale,
          o = a === void 0 ? null : a,
          s = n.numberingSystem,
          u = s === void 0 ? null : s,
          l = n.locObj,
          d = l === void 0 ? null : l,
          f = n.outputCalendar,
          c = f === void 0 ? 'gregory' : f
        return (d || D.create(o, u, c)).months(r)
      }),
      (t.monthsFormat = function (r, e) {
        r === void 0 && (r = 'long')
        var n = e === void 0 ? {} : e,
          a = n.locale,
          o = a === void 0 ? null : a,
          s = n.numberingSystem,
          u = s === void 0 ? null : s,
          l = n.locObj,
          d = l === void 0 ? null : l,
          f = n.outputCalendar,
          c = f === void 0 ? 'gregory' : f
        return (d || D.create(o, u, c)).months(r, !0)
      }),
      (t.weekdays = function (r, e) {
        r === void 0 && (r = 'long')
        var n = e === void 0 ? {} : e,
          a = n.locale,
          o = a === void 0 ? null : a,
          s = n.numberingSystem,
          u = s === void 0 ? null : s,
          l = n.locObj,
          d = l === void 0 ? null : l
        return (d || D.create(o, u, null)).weekdays(r)
      }),
      (t.weekdaysFormat = function (r, e) {
        r === void 0 && (r = 'long')
        var n = e === void 0 ? {} : e,
          a = n.locale,
          o = a === void 0 ? null : a,
          s = n.numberingSystem,
          u = s === void 0 ? null : s,
          l = n.locObj,
          d = l === void 0 ? null : l
        return (d || D.create(o, u, null)).weekdays(r, !0)
      }),
      (t.meridiems = function (r) {
        var e = r === void 0 ? {} : r,
          n = e.locale,
          a = n === void 0 ? null : n
        return D.create(a).meridiems()
      }),
      (t.eras = function (r, e) {
        r === void 0 && (r = 'short')
        var n = e === void 0 ? {} : e,
          a = n.locale,
          o = a === void 0 ? null : a
        return D.create(o, null, 'gregory').eras(r)
      }),
      (t.features = function () {
        return { relative: ur() }
      }),
      t
    )
  })()
function Zr(t, i) {
  var r = function (a) {
      return a.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf()
    },
    e = r(i) - r(t)
  return Math.floor(N.fromMillis(e).as('days'))
}
function na(t, i, r) {
  for (
    var e = [
        [
          'years',
          function (w, g) {
            return g.year - w.year
          },
        ],
        [
          'quarters',
          function (w, g) {
            return g.quarter - w.quarter
          },
        ],
        [
          'months',
          function (w, g) {
            return g.month - w.month + (g.year - w.year) * 12
          },
        ],
        [
          'weeks',
          function (w, g) {
            var y = Zr(w, g)
            return (y - (y % 7)) / 7
          },
        ],
        ['days', Zr],
      ],
      n = {},
      a,
      o,
      s = 0,
      u = e;
    s < u.length;
    s++
  ) {
    var l = u[s],
      d = l[0],
      f = l[1]
    if (r.indexOf(d) >= 0) {
      var c
      a = d
      var m = f(t, i)
      if (((o = t.plus(((c = {}), (c[d] = m), c))), o > i)) {
        var v
        ;(t = t.plus(((v = {}), (v[d] = m - 1), v))), (m -= 1)
      } else t = o
      n[d] = m
    }
  }
  return [t, n, o, a]
}
function ia(t, i, r, e) {
  var n = na(t, i, r),
    a = n[0],
    o = n[1],
    s = n[2],
    u = n[3],
    l = i - a,
    d = r.filter(function (v) {
      return ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(v) >= 0
    })
  if (d.length === 0) {
    if (s < i) {
      var f
      s = a.plus(((f = {}), (f[u] = 1), f))
    }
    s !== a && (o[u] = (o[u] || 0) + l / (s - a))
  }
  var c = N.fromObject(o, e)
  if (d.length > 0) {
    var m
    return (m = N.fromMillis(l, e)).shiftTo.apply(m, d).plus(c)
  } else return c
}
var Ot = {
    arab: '[\u0660-\u0669]',
    arabext: '[\u06F0-\u06F9]',
    bali: '[\u1B50-\u1B59]',
    beng: '[\u09E6-\u09EF]',
    deva: '[\u0966-\u096F]',
    fullwide: '[\uFF10-\uFF19]',
    gujr: '[\u0AE6-\u0AEF]',
    hanidec:
      '[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]',
    khmr: '[\u17E0-\u17E9]',
    knda: '[\u0CE6-\u0CEF]',
    laoo: '[\u0ED0-\u0ED9]',
    limb: '[\u1946-\u194F]',
    mlym: '[\u0D66-\u0D6F]',
    mong: '[\u1810-\u1819]',
    mymr: '[\u1040-\u1049]',
    orya: '[\u0B66-\u0B6F]',
    tamldec: '[\u0BE6-\u0BEF]',
    telu: '[\u0C66-\u0C6F]',
    thai: '[\u0E50-\u0E59]',
    tibt: '[\u0F20-\u0F29]',
    latn: '\\d',
  },
  Pr = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  aa = Ot.hanidec.replace(/[\[|\]]/g, '').split('')
function oa(t) {
  var i = parseInt(t, 10)
  if (isNaN(i)) {
    i = ''
    for (var r = 0; r < t.length; r++) {
      var e = t.charCodeAt(r)
      if (t[r].search(Ot.hanidec) !== -1) i += aa.indexOf(t[r])
      else
        for (var n in Pr) {
          var a = Pr[n],
            o = a[0],
            s = a[1]
          e >= o && e <= s && (i += e - o)
        }
    }
    return parseInt(i, 10)
  } else return i
}
function W(t, i) {
  var r = t.numberingSystem
  return i === void 0 && (i = ''), new RegExp('' + Ot[r || 'latn'] + i)
}
var sa = 'missing Intl.DateTimeFormat.formatToParts support'
function S(t, i) {
  return (
    i === void 0 &&
      (i = function (e) {
        return e
      }),
    {
      regex: t,
      deser: function (e) {
        var n = e[0]
        return i(oa(n))
      },
    }
  )
}
var ua = String.fromCharCode(160),
  Wr = '( |' + ua + ')',
  qr = new RegExp(Wr, 'g')
function la(t) {
  return t.replace(/\./g, '\\.?').replace(qr, Wr)
}
function zr(t) {
  return t.replace(/\./g, '').replace(qr, ' ').toLowerCase()
}
function q(t, i) {
  return t === null
    ? null
    : {
        regex: RegExp(t.map(la).join('|')),
        deser: function (e) {
          var n = e[0]
          return (
            t.findIndex(function (a) {
              return zr(n) === zr(a)
            }) + i
          )
        },
      }
}
function Hr(t, i) {
  return {
    regex: t,
    deser: function (e) {
      var n = e[1],
        a = e[2]
      return Ue(n, a)
    },
    groups: i,
  }
}
function kt(t) {
  return {
    regex: t,
    deser: function (r) {
      var e = r[0]
      return e
    },
  }
}
function fa(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
}
function ca(t, i) {
  var r = W(i),
    e = W(i, '{2}'),
    n = W(i, '{3}'),
    a = W(i, '{4}'),
    o = W(i, '{6}'),
    s = W(i, '{1,2}'),
    u = W(i, '{1,3}'),
    l = W(i, '{1,6}'),
    d = W(i, '{1,9}'),
    f = W(i, '{2,4}'),
    c = W(i, '{4,6}'),
    m = function (y) {
      return {
        regex: RegExp(fa(y.val)),
        deser: function (E) {
          var j = E[0]
          return j
        },
        literal: !0,
      }
    },
    v = function (y) {
      if (t.literal) return m(y)
      switch (y.val) {
        case 'G':
          return q(i.eras('short', !1), 0)
        case 'GG':
          return q(i.eras('long', !1), 0)
        case 'y':
          return S(l)
        case 'yy':
          return S(f, ct)
        case 'yyyy':
          return S(a)
        case 'yyyyy':
          return S(c)
        case 'yyyyyy':
          return S(o)
        case 'M':
          return S(s)
        case 'MM':
          return S(e)
        case 'MMM':
          return q(i.months('short', !0, !1), 1)
        case 'MMMM':
          return q(i.months('long', !0, !1), 1)
        case 'L':
          return S(s)
        case 'LL':
          return S(e)
        case 'LLL':
          return q(i.months('short', !1, !1), 1)
        case 'LLLL':
          return q(i.months('long', !1, !1), 1)
        case 'd':
          return S(s)
        case 'dd':
          return S(e)
        case 'o':
          return S(u)
        case 'ooo':
          return S(n)
        case 'HH':
          return S(e)
        case 'H':
          return S(s)
        case 'hh':
          return S(e)
        case 'h':
          return S(s)
        case 'mm':
          return S(e)
        case 'm':
          return S(s)
        case 'q':
          return S(s)
        case 'qq':
          return S(e)
        case 's':
          return S(s)
        case 'ss':
          return S(e)
        case 'S':
          return S(u)
        case 'SSS':
          return S(n)
        case 'u':
          return kt(d)
        case 'uu':
          return kt(s)
        case 'uuu':
          return S(r)
        case 'a':
          return q(i.meridiems(), 0)
        case 'kkkk':
          return S(a)
        case 'kk':
          return S(f, ct)
        case 'W':
          return S(s)
        case 'WW':
          return S(e)
        case 'E':
        case 'c':
          return S(r)
        case 'EEE':
          return q(i.weekdays('short', !1, !1), 1)
        case 'EEEE':
          return q(i.weekdays('long', !1, !1), 1)
        case 'ccc':
          return q(i.weekdays('short', !0, !1), 1)
        case 'cccc':
          return q(i.weekdays('long', !0, !1), 1)
        case 'Z':
        case 'ZZ':
          return Hr(
            new RegExp('([+-]' + s.source + ')(?::(' + e.source + '))?'),
            2,
          )
        case 'ZZZ':
          return Hr(new RegExp('([+-]' + s.source + ')(' + e.source + ')?'), 2)
        case 'z':
          return kt(/[a-z_+-/]{1,256}?/i)
        default:
          return m(y)
      }
    },
    w = v(t) || { invalidReason: sa }
  return (w.token = t), w
}
var da = {
  year: { '2-digit': 'yy', numeric: 'yyyyy' },
  month: { numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM' },
  day: { numeric: 'd', '2-digit': 'dd' },
  weekday: { short: 'EEE', long: 'EEEE' },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: { numeric: 'h', '2-digit': 'hh' },
  minute: { numeric: 'm', '2-digit': 'mm' },
  second: { numeric: 's', '2-digit': 'ss' },
}
function ma(t, i, r) {
  var e = t.type,
    n = t.value
  if (e === 'literal') return { literal: !0, val: n }
  var a = r[e],
    o = da[e]
  if ((typeof o == 'object' && (o = o[a]), o)) return { literal: !1, val: o }
}
function ha(t) {
  var i = t
    .map(function (r) {
      return r.regex
    })
    .reduce(function (r, e) {
      return r + '(' + e.source + ')'
    }, '')
  return ['^' + i + '$', t]
}
function va(t, i, r) {
  var e = t.match(i)
  if (e) {
    var n = {},
      a = 1
    for (var o in r)
      if (ve(r, o)) {
        var s = r[o],
          u = s.groups ? s.groups + 1 : 1
        !s.literal &&
          s.token &&
          (n[s.token.val[0]] = s.deser(e.slice(a, a + u))),
          (a += u)
      }
    return [e, n]
  } else return [e, {}]
}
function ya(t) {
  var i = function (o) {
      switch (o) {
        case 'S':
          return 'millisecond'
        case 's':
          return 'second'
        case 'm':
          return 'minute'
        case 'h':
        case 'H':
          return 'hour'
        case 'd':
          return 'day'
        case 'o':
          return 'ordinal'
        case 'L':
        case 'M':
          return 'month'
        case 'y':
          return 'year'
        case 'E':
        case 'c':
          return 'weekday'
        case 'W':
          return 'weekNumber'
        case 'k':
          return 'weekYear'
        case 'q':
          return 'quarter'
        default:
          return null
      }
    },
    r = null,
    e
  T(t.z) || (r = B.create(t.z)),
    T(t.Z) || (r || (r = new P(t.Z)), (e = t.Z)),
    T(t.q) || (t.M = (t.q - 1) * 3 + 1),
    T(t.h) ||
      (t.h < 12 && t.a === 1
        ? (t.h += 12)
        : t.h === 12 && t.a === 0 && (t.h = 0)),
    t.G === 0 && t.y && (t.y = -t.y),
    T(t.u) || (t.S = ut(t.u))
  var n = Object.keys(t).reduce(function (a, o) {
    var s = i(o)
    return s && (a[s] = t[o]), a
  }, {})
  return [n, r, e]
}
var bt = null
function ga() {
  return bt || (bt = I.fromMillis(1555555555555)), bt
}
function wa(t, i) {
  if (t.literal) return t
  var r = J.macroTokenToFormatOpts(t.val)
  if (!r) return t
  var e = J.create(i, r),
    n = e.formatDateTimeParts(ga()),
    a = n.map(function (o) {
      return ma(o, i, r)
    })
  return a.includes(void 0) ? t : a
}
function pa(t, i) {
  var r
  return (r = Array.prototype).concat.apply(
    r,
    t.map(function (e) {
      return wa(e, i)
    }),
  )
}
function Ur(t, i, r) {
  var e = pa(J.parseFormat(r), t),
    n = e.map(function (y) {
      return ca(y, t)
    }),
    a = n.find(function (y) {
      return y.invalidReason
    })
  if (a) return { input: i, tokens: e, invalidReason: a.invalidReason }
  var o = ha(n),
    s = o[0],
    u = o[1],
    l = RegExp(s, 'i'),
    d = va(i, l, u),
    f = d[0],
    c = d[1],
    m = c ? ya(c) : [null, null, void 0],
    v = m[0],
    w = m[1],
    g = m[2]
  if (ve(c, 'a') && ve(c, 'H'))
    throw new Ie("Can't include meridiem when specifying 24-hour format")
  return {
    input: i,
    tokens: e,
    regex: l,
    rawMatches: f,
    matches: c,
    result: v,
    zone: w,
    specificOffset: g,
  }
}
function Ta(t, i, r) {
  var e = Ur(t, i, r),
    n = e.result,
    a = e.zone,
    o = e.specificOffset,
    s = e.invalidReason
  return [n, a, o, s]
}
var $r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  jr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
function L(t, i) {
  return new Z(
    'unit out of range',
    'you specified ' +
      i +
      ' (of type ' +
      typeof i +
      ') as a ' +
      t +
      ', which is invalid',
  )
}
function Yr(t, i, r) {
  var e = new Date(Date.UTC(t, i - 1, r)).getUTCDay()
  return e === 0 ? 7 : e
}
function Gr(t, i, r) {
  return r + (Ee(t) ? jr : $r)[i - 1]
}
function Jr(t, i) {
  var r = Ee(t) ? jr : $r,
    e = r.findIndex(function (a) {
      return a < i
    }),
    n = i - r[e]
  return { month: e + 1, day: n }
}
function It(t) {
  var i = t.year,
    r = t.month,
    e = t.day,
    n = Gr(i, r, e),
    a = Yr(i, r, e),
    o = Math.floor((n - a + 10) / 7),
    s
  return (
    o < 1
      ? ((s = i - 1), (o = He(s)))
      : o > He(i)
      ? ((s = i + 1), (o = 1))
      : (s = i),
    p({ weekYear: s, weekNumber: o, weekday: a }, Ye(t))
  )
}
function Br(t) {
  var i = t.weekYear,
    r = t.weekNumber,
    e = t.weekday,
    n = Yr(i, 1, 4),
    a = De(i),
    o = r * 7 + e - n - 3,
    s
  o < 1
    ? ((s = i - 1), (o += De(s)))
    : o > a
    ? ((s = i + 1), (o -= De(i)))
    : (s = i)
  var u = Jr(s, o),
    l = u.month,
    d = u.day
  return p({ year: s, month: l, day: d }, Ye(t))
}
function Et(t) {
  var i = t.year,
    r = t.month,
    e = t.day,
    n = Gr(i, r, e)
  return p({ year: i, ordinal: n }, Ye(t))
}
function Qr(t) {
  var i = t.year,
    r = t.ordinal,
    e = Jr(i, r),
    n = e.month,
    a = e.day
  return p({ year: i, month: n, day: a }, Ye(t))
}
function Sa(t) {
  var i = qe(t.weekYear),
    r = G(t.weekNumber, 1, He(t.weekYear)),
    e = G(t.weekday, 1, 7)
  return i
    ? r
      ? e
        ? !1
        : L('weekday', t.weekday)
      : L('week', t.week)
    : L('weekYear', t.weekYear)
}
function Oa(t) {
  var i = qe(t.year),
    r = G(t.ordinal, 1, De(t.year))
  return i ? (r ? !1 : L('ordinal', t.ordinal)) : L('year', t.year)
}
function Kr(t) {
  var i = qe(t.year),
    r = G(t.month, 1, 12),
    e = G(t.day, 1, ze(t.year, t.month))
  return i
    ? r
      ? e
        ? !1
        : L('day', t.day)
      : L('month', t.month)
    : L('year', t.year)
}
function Xr(t) {
  var i = t.hour,
    r = t.minute,
    e = t.second,
    n = t.millisecond,
    a = G(i, 0, 23) || (i === 24 && r === 0 && e === 0 && n === 0),
    o = G(r, 0, 59),
    s = G(e, 0, 59),
    u = G(n, 0, 999)
  return a
    ? o
      ? s
        ? u
          ? !1
          : L('millisecond', n)
        : L('second', e)
      : L('minute', r)
    : L('hour', i)
}
var Dt = 'Invalid DateTime',
  en = 864e13
function Qe(t) {
  return new Z('unsupported zone', 'the zone "' + t.name + '" is not supported')
}
function Nt(t) {
  return t.weekData === null && (t.weekData = It(t.c)), t.weekData
}
function xe(t, i) {
  var r = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid,
  }
  return new I(p({}, r, i, { old: r }))
}
function tn(t, i, r) {
  var e = t - i * 60 * 1e3,
    n = r.offset(e)
  if (i === n) return [e, i]
  e -= (n - i) * 60 * 1e3
  var a = r.offset(e)
  return n === a ? [e, n] : [t - Math.min(n, a) * 60 * 1e3, Math.max(n, a)]
}
function rn(t, i) {
  t += i * 60 * 1e3
  var r = new Date(t)
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds(),
  }
}
function Ke(t, i, r) {
  return tn(ft(t), i, r)
}
function nn(t, i) {
  var r = t.o,
    e = t.c.year + Math.trunc(i.years),
    n = t.c.month + Math.trunc(i.months) + Math.trunc(i.quarters) * 3,
    a = p({}, t.c, {
      year: e,
      month: n,
      day:
        Math.min(t.c.day, ze(e, n)) +
        Math.trunc(i.days) +
        Math.trunc(i.weeks) * 7,
    }),
    o = N.fromObject({
      years: i.years - Math.trunc(i.years),
      quarters: i.quarters - Math.trunc(i.quarters),
      months: i.months - Math.trunc(i.months),
      weeks: i.weeks - Math.trunc(i.weeks),
      days: i.days - Math.trunc(i.days),
      hours: i.hours,
      minutes: i.minutes,
      seconds: i.seconds,
      milliseconds: i.milliseconds,
    }).as('milliseconds'),
    s = ft(a),
    u = tn(s, r, t.zone),
    l = u[0],
    d = u[1]
  return o !== 0 && ((l += o), (d = t.zone.offset(l))), { ts: l, o: d }
}
function _e(t, i, r, e, n, a) {
  var o = r.setZone,
    s = r.zone
  if (t && Object.keys(t).length !== 0) {
    var u = i || s,
      l = I.fromObject(t, p({}, r, { zone: u, specificOffset: a }))
    return o ? l : l.setZone(s)
  } else
    return I.invalid(
      new Z('unparsable', 'the input "' + n + `" can't be parsed as ` + e),
    )
}
function Xe(t, i, r) {
  return (
    r === void 0 && (r = !0),
    t.isValid
      ? J.create(D.create('en-US'), {
          allowZ: r,
          forceSimple: !0,
        }).formatDateTimeFromString(t, i)
      : null
  )
}
function Mt(t, i) {
  var r = t.c.year > 9999 || t.c.year < 0,
    e = ''
  return (
    r && t.c.year >= 0 && (e += '+'),
    (e += k(t.c.year, r ? 6 : 4)),
    i
      ? ((e += '-'), (e += k(t.c.month)), (e += '-'), (e += k(t.c.day)))
      : ((e += k(t.c.month)), (e += k(t.c.day))),
    e
  )
}
function an(t, i, r, e, n) {
  var a = k(t.c.hour)
  return (
    i
      ? ((a += ':'),
        (a += k(t.c.minute)),
        (t.c.second !== 0 || !r) && (a += ':'))
      : (a += k(t.c.minute)),
    (t.c.second !== 0 || !r) &&
      ((a += k(t.c.second)),
      (t.c.millisecond !== 0 || !e) &&
        ((a += '.'), (a += k(t.c.millisecond, 3)))),
    n &&
      (t.isOffsetFixed && t.offset === 0
        ? (a += 'Z')
        : t.o < 0
        ? ((a += '-'),
          (a += k(Math.trunc(-t.o / 60))),
          (a += ':'),
          (a += k(Math.trunc(-t.o % 60))))
        : ((a += '+'),
          (a += k(Math.trunc(t.o / 60))),
          (a += ':'),
          (a += k(Math.trunc(t.o % 60))))),
    a
  )
}
var on = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  ka = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  ba = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  sn = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
  Ia = [
    'weekYear',
    'weekNumber',
    'weekday',
    'hour',
    'minute',
    'second',
    'millisecond',
  ],
  Ea = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond']
function un(t) {
  var i = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    quarter: 'quarter',
    quarters: 'quarter',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal',
  }[t.toLowerCase()]
  if (!i) throw new zt(t)
  return i
}
function ln(t, i) {
  var r = ee(i.zone, b.defaultZone),
    e = D.fromObject(i),
    n = b.now(),
    a,
    o
  if (T(t.year)) a = n
  else {
    for (var s = Q(sn), u; !(u = s()).done; ) {
      var l = u.value
      T(t[l]) && (t[l] = on[l])
    }
    var d = Kr(t) || Xr(t)
    if (d) return I.invalid(d)
    var f = r.offset(n),
      c = Ke(t, f, r)
    ;(a = c[0]), (o = c[1])
  }
  return new I({ ts: a, zone: r, loc: e, o })
}
function fn(t, i, r) {
  var e = T(r.round) ? !0 : r.round,
    n = function (f, c) {
      f = lt(f, e || r.calendary ? 0 : 2, !0)
      var m = i.loc.clone(r).relFormatter(r)
      return m.format(f, c)
    },
    a = function (f) {
      return r.calendary
        ? i.hasSame(t, f)
          ? 0
          : i.startOf(f).diff(t.startOf(f), f).get(f)
        : i.diff(t, f).get(f)
    }
  if (r.unit) return n(a(r.unit), r.unit)
  for (var o = Q(r.units), s; !(s = o()).done; ) {
    var u = s.value,
      l = a(u)
    if (Math.abs(l) >= 1) return n(l, u)
  }
  return n(t > i ? -0 : 0, r.units[r.units.length - 1])
}
function cn(t) {
  var i = {},
    r
  return (
    t.length > 0 && typeof t[t.length - 1] == 'object'
      ? ((i = t[t.length - 1]), (r = Array.from(t).slice(0, t.length - 1)))
      : (r = Array.from(t)),
    [i, r]
  )
}
var I = (function () {
  function t(r) {
    var e = r.zone || b.defaultZone,
      n =
        r.invalid ||
        (Number.isNaN(r.ts) ? new Z('invalid input') : null) ||
        (e.isValid ? null : Qe(e))
    this.ts = T(r.ts) ? b.now() : r.ts
    var a = null,
      o = null
    if (!n) {
      var s = r.old && r.old.ts === this.ts && r.old.zone.equals(e)
      if (s) {
        var u = [r.old.c, r.old.o]
        ;(a = u[0]), (o = u[1])
      } else {
        var l = e.offset(this.ts)
        ;(a = rn(this.ts, l)),
          (n = Number.isNaN(a.year) ? new Z('invalid input') : null),
          (a = n ? null : a),
          (o = n ? null : l)
      }
    }
    ;(this._zone = e),
      (this.loc = r.loc || D.create()),
      (this.invalid = n),
      (this.weekData = null),
      (this.c = a),
      (this.o = o),
      (this.isLuxonDateTime = !0)
  }
  ;(t.now = function () {
    return new t({})
  }),
    (t.local = function () {
      var e = cn(arguments),
        n = e[0],
        a = e[1],
        o = a[0],
        s = a[1],
        u = a[2],
        l = a[3],
        d = a[4],
        f = a[5],
        c = a[6]
      return ln(
        {
          year: o,
          month: s,
          day: u,
          hour: l,
          minute: d,
          second: f,
          millisecond: c,
        },
        n,
      )
    }),
    (t.utc = function () {
      var e = cn(arguments),
        n = e[0],
        a = e[1],
        o = a[0],
        s = a[1],
        u = a[2],
        l = a[3],
        d = a[4],
        f = a[5],
        c = a[6]
      return (
        (n.zone = P.utcInstance),
        ln(
          {
            year: o,
            month: s,
            day: u,
            hour: l,
            minute: d,
            second: f,
            millisecond: c,
          },
          n,
        )
      )
    }),
    (t.fromJSDate = function (e, n) {
      n === void 0 && (n = {})
      var a = xn(e) ? e.valueOf() : NaN
      if (Number.isNaN(a)) return t.invalid('invalid input')
      var o = ee(n.zone, b.defaultZone)
      return o.isValid
        ? new t({ ts: a, zone: o, loc: D.fromObject(n) })
        : t.invalid(Qe(o))
    }),
    (t.fromMillis = function (e, n) {
      if ((n === void 0 && (n = {}), ae(e)))
        return e < -en || e > en
          ? t.invalid('Timestamp out of range')
          : new t({
              ts: e,
              zone: ee(n.zone, b.defaultZone),
              loc: D.fromObject(n),
            })
      throw new A(
        'fromMillis requires a numerical input, but received a ' +
          typeof e +
          ' with value ' +
          e,
      )
    }),
    (t.fromSeconds = function (e, n) {
      if ((n === void 0 && (n = {}), ae(e)))
        return new t({
          ts: e * 1e3,
          zone: ee(n.zone, b.defaultZone),
          loc: D.fromObject(n),
        })
      throw new A('fromSeconds requires a numerical input')
    }),
    (t.fromObject = function (e, n) {
      n === void 0 && (n = {}), (e = e || {})
      var a = ee(n.zone, b.defaultZone)
      if (!a.isValid) return t.invalid(Qe(a))
      var o = b.now(),
        s = T(n.specificOffset) ? a.offset(o) : n.specificOffset,
        u = $e(e, un),
        l = !T(u.ordinal),
        d = !T(u.year),
        f = !T(u.month) || !T(u.day),
        c = d || f,
        m = u.weekYear || u.weekNumber,
        v = D.fromObject(n)
      if ((c || l) && m)
        throw new Ie(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
        )
      if (f && l) throw new Ie("Can't mix ordinal dates with month/day")
      var w = m || (u.weekday && !c),
        g,
        y,
        O = rn(o, s)
      w
        ? ((g = Ia), (y = ka), (O = It(O)))
        : l
        ? ((g = Ea), (y = ba), (O = Et(O)))
        : ((g = sn), (y = on))
      for (var E = !1, j = Q(g), ne; !(ne = j()).done; ) {
        var Y = ne.value,
          me = u[Y]
        T(me) ? (E ? (u[Y] = y[Y]) : (u[Y] = O[Y])) : (E = !0)
      }
      var Oe = w ? Sa(u) : l ? Oa(u) : Kr(u),
        M = Oe || Xr(u)
      if (M) return t.invalid(M)
      var tt = w ? Br(u) : l ? Qr(u) : u,
        Le = Ke(tt, s, a),
        rt = Le[0],
        yn = Le[1],
        nt = new t({ ts: rt, zone: a, o: yn, loc: v })
      return u.weekday && c && e.weekday !== nt.weekday
        ? t.invalid(
            'mismatched weekday',
            "you can't specify both a weekday of " +
              u.weekday +
              ' and a date of ' +
              nt.toISO(),
          )
        : nt
    }),
    (t.fromISO = function (e, n) {
      n === void 0 && (n = {})
      var a = Pi(e),
        o = a[0],
        s = a[1]
      return _e(o, s, n, 'ISO 8601', e)
    }),
    (t.fromRFC2822 = function (e, n) {
      n === void 0 && (n = {})
      var a = Wi(e),
        o = a[0],
        s = a[1]
      return _e(o, s, n, 'RFC 2822', e)
    }),
    (t.fromHTTP = function (e, n) {
      n === void 0 && (n = {})
      var a = qi(e),
        o = a[0],
        s = a[1]
      return _e(o, s, n, 'HTTP', n)
    }),
    (t.fromFormat = function (e, n, a) {
      if ((a === void 0 && (a = {}), T(e) || T(n)))
        throw new A('fromFormat requires an input string and a format')
      var o = a,
        s = o.locale,
        u = s === void 0 ? null : s,
        l = o.numberingSystem,
        d = l === void 0 ? null : l,
        f = D.fromOpts({ locale: u, numberingSystem: d, defaultToEN: !0 }),
        c = Ta(f, e, n),
        m = c[0],
        v = c[1],
        w = c[2],
        g = c[3]
      return g ? t.invalid(g) : _e(m, v, a, 'format ' + n, e, w)
    }),
    (t.fromString = function (e, n, a) {
      return a === void 0 && (a = {}), t.fromFormat(e, n, a)
    }),
    (t.fromSQL = function (e, n) {
      n === void 0 && (n = {})
      var a = Ji(e),
        o = a[0],
        s = a[1]
      return _e(o, s, n, 'SQL', e)
    }),
    (t.invalid = function (e, n) {
      if ((n === void 0 && (n = null), !e))
        throw new A('need to specify a reason the DateTime is invalid')
      var a = e instanceof Z ? e : new Z(e, n)
      if (b.throwOnInvalid) throw new En(a)
      return new t({ invalid: a })
    }),
    (t.isDateTime = function (e) {
      return (e && e.isLuxonDateTime) || !1
    })
  var i = t.prototype
  return (
    (i.get = function (e) {
      return this[e]
    }),
    (i.resolvedLocaleOptions = function (e) {
      e === void 0 && (e = {})
      var n = J.create(this.loc.clone(e), e).resolvedOptions(this),
        a = n.locale,
        o = n.numberingSystem,
        s = n.calendar
      return { locale: a, numberingSystem: o, outputCalendar: s }
    }),
    (i.toUTC = function (e, n) {
      return (
        e === void 0 && (e = 0),
        n === void 0 && (n = {}),
        this.setZone(P.instance(e), n)
      )
    }),
    (i.toLocal = function () {
      return this.setZone(b.defaultZone)
    }),
    (i.setZone = function (e, n) {
      var a = n === void 0 ? {} : n,
        o = a.keepLocalTime,
        s = o === void 0 ? !1 : o,
        u = a.keepCalendarTime,
        l = u === void 0 ? !1 : u
      if (((e = ee(e, b.defaultZone)), e.equals(this.zone))) return this
      if (e.isValid) {
        var d = this.ts
        if (s || l) {
          var f = e.offset(this.ts),
            c = this.toObject(),
            m = Ke(c, f, e)
          d = m[0]
        }
        return xe(this, { ts: d, zone: e })
      } else return t.invalid(Qe(e))
    }),
    (i.reconfigure = function (e) {
      var n = e === void 0 ? {} : e,
        a = n.locale,
        o = n.numberingSystem,
        s = n.outputCalendar,
        u = this.loc.clone({ locale: a, numberingSystem: o, outputCalendar: s })
      return xe(this, { loc: u })
    }),
    (i.setLocale = function (e) {
      return this.reconfigure({ locale: e })
    }),
    (i.set = function (e) {
      if (!this.isValid) return this
      var n = $e(e, un),
        a = !T(n.weekYear) || !T(n.weekNumber) || !T(n.weekday),
        o = !T(n.ordinal),
        s = !T(n.year),
        u = !T(n.month) || !T(n.day),
        l = s || u,
        d = n.weekYear || n.weekNumber
      if ((l || o) && d)
        throw new Ie(
          "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
        )
      if (u && o) throw new Ie("Can't mix ordinal dates with month/day")
      var f
      a
        ? (f = Br(p({}, It(this.c), n)))
        : T(n.ordinal)
        ? ((f = p({}, this.toObject(), n)),
          T(n.day) && (f.day = Math.min(ze(f.year, f.month), f.day)))
        : (f = Qr(p({}, Et(this.c), n)))
      var c = Ke(f, this.o, this.zone),
        m = c[0],
        v = c[1]
      return xe(this, { ts: m, o: v })
    }),
    (i.plus = function (e) {
      if (!this.isValid) return this
      var n = N.fromDurationLike(e)
      return xe(this, nn(this, n))
    }),
    (i.minus = function (e) {
      if (!this.isValid) return this
      var n = N.fromDurationLike(e).negate()
      return xe(this, nn(this, n))
    }),
    (i.startOf = function (e) {
      if (!this.isValid) return this
      var n = {},
        a = N.normalizeUnit(e)
      switch (a) {
        case 'years':
          n.month = 1
        case 'quarters':
        case 'months':
          n.day = 1
        case 'weeks':
        case 'days':
          n.hour = 0
        case 'hours':
          n.minute = 0
        case 'minutes':
          n.second = 0
        case 'seconds':
          n.millisecond = 0
          break
      }
      if ((a === 'weeks' && (n.weekday = 1), a === 'quarters')) {
        var o = Math.ceil(this.month / 3)
        n.month = (o - 1) * 3 + 1
      }
      return this.set(n)
    }),
    (i.endOf = function (e) {
      var n
      return this.isValid
        ? this.plus(((n = {}), (n[e] = 1), n))
            .startOf(e)
            .minus(1)
        : this
    }),
    (i.toFormat = function (e, n) {
      return (
        n === void 0 && (n = {}),
        this.isValid
          ? J.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(
              this,
              e,
            )
          : Dt
      )
    }),
    (i.toLocaleString = function (e, n) {
      return (
        e === void 0 && (e = st),
        n === void 0 && (n = {}),
        this.isValid ? J.create(this.loc.clone(n), e).formatDateTime(this) : Dt
      )
    }),
    (i.toLocaleParts = function (e) {
      return (
        e === void 0 && (e = {}),
        this.isValid
          ? J.create(this.loc.clone(e), e).formatDateTimeParts(this)
          : []
      )
    }),
    (i.toISO = function (e) {
      var n = e === void 0 ? {} : e,
        a = n.format,
        o = a === void 0 ? 'extended' : a,
        s = n.suppressSeconds,
        u = s === void 0 ? !1 : s,
        l = n.suppressMilliseconds,
        d = l === void 0 ? !1 : l,
        f = n.includeOffset,
        c = f === void 0 ? !0 : f
      if (!this.isValid) return null
      var m = o === 'extended',
        v = Mt(this, m)
      return (v += 'T'), (v += an(this, m, u, d, c)), v
    }),
    (i.toISODate = function (e) {
      var n = e === void 0 ? {} : e,
        a = n.format,
        o = a === void 0 ? 'extended' : a
      return this.isValid ? Mt(this, o === 'extended') : null
    }),
    (i.toISOWeekDate = function () {
      return Xe(this, "kkkk-'W'WW-c")
    }),
    (i.toISOTime = function (e) {
      var n = e === void 0 ? {} : e,
        a = n.suppressMilliseconds,
        o = a === void 0 ? !1 : a,
        s = n.suppressSeconds,
        u = s === void 0 ? !1 : s,
        l = n.includeOffset,
        d = l === void 0 ? !0 : l,
        f = n.includePrefix,
        c = f === void 0 ? !1 : f,
        m = n.format,
        v = m === void 0 ? 'extended' : m
      if (!this.isValid) return null
      var w = c ? 'T' : ''
      return w + an(this, v === 'extended', u, o, d)
    }),
    (i.toRFC2822 = function () {
      return Xe(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1)
    }),
    (i.toHTTP = function () {
      return Xe(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
    }),
    (i.toSQLDate = function () {
      return this.isValid ? Mt(this, !0) : null
    }),
    (i.toSQLTime = function (e) {
      var n = e === void 0 ? {} : e,
        a = n.includeOffset,
        o = a === void 0 ? !0 : a,
        s = n.includeZone,
        u = s === void 0 ? !1 : s,
        l = 'HH:mm:ss.SSS'
      return (
        (u || o) && ((l += ' '), u ? (l += 'z') : o && (l += 'ZZ')),
        Xe(this, l, !0)
      )
    }),
    (i.toSQL = function (e) {
      return (
        e === void 0 && (e = {}),
        this.isValid ? this.toSQLDate() + ' ' + this.toSQLTime(e) : null
      )
    }),
    (i.toString = function () {
      return this.isValid ? this.toISO() : Dt
    }),
    (i.valueOf = function () {
      return this.toMillis()
    }),
    (i.toMillis = function () {
      return this.isValid ? this.ts : NaN
    }),
    (i.toSeconds = function () {
      return this.isValid ? this.ts / 1e3 : NaN
    }),
    (i.toJSON = function () {
      return this.toISO()
    }),
    (i.toBSON = function () {
      return this.toJSDate()
    }),
    (i.toObject = function (e) {
      if ((e === void 0 && (e = {}), !this.isValid)) return {}
      var n = p({}, this.c)
      return (
        e.includeConfig &&
          ((n.outputCalendar = this.outputCalendar),
          (n.numberingSystem = this.loc.numberingSystem),
          (n.locale = this.loc.locale)),
        n
      )
    }),
    (i.toJSDate = function () {
      return new Date(this.isValid ? this.ts : NaN)
    }),
    (i.diff = function (e, n, a) {
      if (
        (n === void 0 && (n = 'milliseconds'),
        a === void 0 && (a = {}),
        !this.isValid || !e.isValid)
      )
        return N.invalid('created by diffing an invalid DateTime')
      var o = p(
          { locale: this.locale, numberingSystem: this.numberingSystem },
          a,
        ),
        s = _n(n).map(N.normalizeUnit),
        u = e.valueOf() > this.valueOf(),
        l = u ? this : e,
        d = u ? e : this,
        f = ia(l, d, s, o)
      return u ? f.negate() : f
    }),
    (i.diffNow = function (e, n) {
      return (
        e === void 0 && (e = 'milliseconds'),
        n === void 0 && (n = {}),
        this.diff(t.now(), e, n)
      )
    }),
    (i.until = function (e) {
      return this.isValid ? Fe.fromDateTimes(this, e) : this
    }),
    (i.hasSame = function (e, n) {
      if (!this.isValid) return !1
      var a = e.valueOf(),
        o = this.setZone(e.zone, { keepLocalTime: !0 })
      return o.startOf(n) <= a && a <= o.endOf(n)
    }),
    (i.equals = function (e) {
      return (
        this.isValid &&
        e.isValid &&
        this.valueOf() === e.valueOf() &&
        this.zone.equals(e.zone) &&
        this.loc.equals(e.loc)
      )
    }),
    (i.toRelative = function (e) {
      if ((e === void 0 && (e = {}), !this.isValid)) return null
      var n = e.base || t.fromObject({}, { zone: this.zone }),
        a = e.padding ? (this < n ? -e.padding : e.padding) : 0,
        o = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
        s = e.unit
      return (
        Array.isArray(e.unit) && ((o = e.unit), (s = void 0)),
        fn(n, this.plus(a), p({}, e, { numeric: 'always', units: o, unit: s }))
      )
    }),
    (i.toRelativeCalendar = function (e) {
      return (
        e === void 0 && (e = {}),
        this.isValid
          ? fn(
              e.base || t.fromObject({}, { zone: this.zone }),
              this,
              p({}, e, {
                numeric: 'auto',
                units: ['years', 'months', 'days'],
                calendary: !0,
              }),
            )
          : null
      )
    }),
    (t.min = function () {
      for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
        n[a] = arguments[a]
      if (!n.every(t.isDateTime))
        throw new A('min requires all arguments be DateTimes')
      return lr(
        n,
        function (o) {
          return o.valueOf()
        },
        Math.min,
      )
    }),
    (t.max = function () {
      for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
        n[a] = arguments[a]
      if (!n.every(t.isDateTime))
        throw new A('max requires all arguments be DateTimes')
      return lr(
        n,
        function (o) {
          return o.valueOf()
        },
        Math.max,
      )
    }),
    (t.fromFormatExplain = function (e, n, a) {
      a === void 0 && (a = {})
      var o = a,
        s = o.locale,
        u = s === void 0 ? null : s,
        l = o.numberingSystem,
        d = l === void 0 ? null : l,
        f = D.fromOpts({ locale: u, numberingSystem: d, defaultToEN: !0 })
      return Ur(f, e, n)
    }),
    (t.fromStringExplain = function (e, n, a) {
      return a === void 0 && (a = {}), t.fromFormatExplain(e, n, a)
    }),
    H(
      t,
      [
        {
          key: 'isValid',
          get: function () {
            return this.invalid === null
          },
        },
        {
          key: 'invalidReason',
          get: function () {
            return this.invalid ? this.invalid.reason : null
          },
        },
        {
          key: 'invalidExplanation',
          get: function () {
            return this.invalid ? this.invalid.explanation : null
          },
        },
        {
          key: 'locale',
          get: function () {
            return this.isValid ? this.loc.locale : null
          },
        },
        {
          key: 'numberingSystem',
          get: function () {
            return this.isValid ? this.loc.numberingSystem : null
          },
        },
        {
          key: 'outputCalendar',
          get: function () {
            return this.isValid ? this.loc.outputCalendar : null
          },
        },
        {
          key: 'zone',
          get: function () {
            return this._zone
          },
        },
        {
          key: 'zoneName',
          get: function () {
            return this.isValid ? this.zone.name : null
          },
        },
        {
          key: 'year',
          get: function () {
            return this.isValid ? this.c.year : NaN
          },
        },
        {
          key: 'quarter',
          get: function () {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN
          },
        },
        {
          key: 'month',
          get: function () {
            return this.isValid ? this.c.month : NaN
          },
        },
        {
          key: 'day',
          get: function () {
            return this.isValid ? this.c.day : NaN
          },
        },
        {
          key: 'hour',
          get: function () {
            return this.isValid ? this.c.hour : NaN
          },
        },
        {
          key: 'minute',
          get: function () {
            return this.isValid ? this.c.minute : NaN
          },
        },
        {
          key: 'second',
          get: function () {
            return this.isValid ? this.c.second : NaN
          },
        },
        {
          key: 'millisecond',
          get: function () {
            return this.isValid ? this.c.millisecond : NaN
          },
        },
        {
          key: 'weekYear',
          get: function () {
            return this.isValid ? Nt(this).weekYear : NaN
          },
        },
        {
          key: 'weekNumber',
          get: function () {
            return this.isValid ? Nt(this).weekNumber : NaN
          },
        },
        {
          key: 'weekday',
          get: function () {
            return this.isValid ? Nt(this).weekday : NaN
          },
        },
        {
          key: 'ordinal',
          get: function () {
            return this.isValid ? Et(this.c).ordinal : NaN
          },
        },
        {
          key: 'monthShort',
          get: function () {
            return this.isValid
              ? Ce.months('short', { locObj: this.loc })[this.month - 1]
              : null
          },
        },
        {
          key: 'monthLong',
          get: function () {
            return this.isValid
              ? Ce.months('long', { locObj: this.loc })[this.month - 1]
              : null
          },
        },
        {
          key: 'weekdayShort',
          get: function () {
            return this.isValid
              ? Ce.weekdays('short', { locObj: this.loc })[this.weekday - 1]
              : null
          },
        },
        {
          key: 'weekdayLong',
          get: function () {
            return this.isValid
              ? Ce.weekdays('long', { locObj: this.loc })[this.weekday - 1]
              : null
          },
        },
        {
          key: 'offset',
          get: function () {
            return this.isValid ? +this.o : NaN
          },
        },
        {
          key: 'offsetNameShort',
          get: function () {
            return this.isValid
              ? this.zone.offsetName(this.ts, {
                  format: 'short',
                  locale: this.locale,
                })
              : null
          },
        },
        {
          key: 'offsetNameLong',
          get: function () {
            return this.isValid
              ? this.zone.offsetName(this.ts, {
                  format: 'long',
                  locale: this.locale,
                })
              : null
          },
        },
        {
          key: 'isOffsetFixed',
          get: function () {
            return this.isValid ? this.zone.isUniversal : null
          },
        },
        {
          key: 'isInDST',
          get: function () {
            return this.isOffsetFixed
              ? !1
              : this.offset > this.set({ month: 1 }).offset ||
                  this.offset > this.set({ month: 5 }).offset
          },
        },
        {
          key: 'isInLeapYear',
          get: function () {
            return Ee(this.year)
          },
        },
        {
          key: 'daysInMonth',
          get: function () {
            return ze(this.year, this.month)
          },
        },
        {
          key: 'daysInYear',
          get: function () {
            return this.isValid ? De(this.year) : NaN
          },
        },
        {
          key: 'weeksInWeekYear',
          get: function () {
            return this.isValid ? He(this.weekYear) : NaN
          },
        },
      ],
      [
        {
          key: 'DATE_SHORT',
          get: function () {
            return st
          },
        },
        {
          key: 'DATE_MED',
          get: function () {
            return Ht
          },
        },
        {
          key: 'DATE_MED_WITH_WEEKDAY',
          get: function () {
            return Mn
          },
        },
        {
          key: 'DATE_FULL',
          get: function () {
            return Ut
          },
        },
        {
          key: 'DATE_HUGE',
          get: function () {
            return $t
          },
        },
        {
          key: 'TIME_SIMPLE',
          get: function () {
            return jt
          },
        },
        {
          key: 'TIME_WITH_SECONDS',
          get: function () {
            return Yt
          },
        },
        {
          key: 'TIME_WITH_SHORT_OFFSET',
          get: function () {
            return Gt
          },
        },
        {
          key: 'TIME_WITH_LONG_OFFSET',
          get: function () {
            return Jt
          },
        },
        {
          key: 'TIME_24_SIMPLE',
          get: function () {
            return Bt
          },
        },
        {
          key: 'TIME_24_WITH_SECONDS',
          get: function () {
            return Qt
          },
        },
        {
          key: 'TIME_24_WITH_SHORT_OFFSET',
          get: function () {
            return Kt
          },
        },
        {
          key: 'TIME_24_WITH_LONG_OFFSET',
          get: function () {
            return Xt
          },
        },
        {
          key: 'DATETIME_SHORT',
          get: function () {
            return er
          },
        },
        {
          key: 'DATETIME_SHORT_WITH_SECONDS',
          get: function () {
            return tr
          },
        },
        {
          key: 'DATETIME_MED',
          get: function () {
            return rr
          },
        },
        {
          key: 'DATETIME_MED_WITH_SECONDS',
          get: function () {
            return nr
          },
        },
        {
          key: 'DATETIME_MED_WITH_WEEKDAY',
          get: function () {
            return Fn
          },
        },
        {
          key: 'DATETIME_FULL',
          get: function () {
            return ir
          },
        },
        {
          key: 'DATETIME_FULL_WITH_SECONDS',
          get: function () {
            return ar
          },
        },
        {
          key: 'DATETIME_HUGE',
          get: function () {
            return or
          },
        },
        {
          key: 'DATETIME_HUGE_WITH_SECONDS',
          get: function () {
            return sr
          },
        },
      ],
    ),
    t
  )
})()
function Ae(t) {
  if (I.isDateTime(t)) return t
  if (t && t.valueOf && ae(t.valueOf())) return I.fromJSDate(t)
  if (t && typeof t == 'object') return I.fromObject(t)
  throw new A('Unknown datetime argument: ' + t + ', of type ' + typeof t)
}
var Da = '2.3.0',
  Na = (x.DateTime = I),
  Aa = (x.Duration = N)
x.FixedOffsetZone = P
x.IANAZone = B
x.Info = Ce
x.Interval = Fe
x.InvalidZone = ht
x.Settings = b
x.SystemZone = Sr
x.VERSION = Da
x.Zone = ye
const ce = (t) => {
    const i = _t()
    return async (...r) => {
      i.value = !0
      let e
      try {
        e = await t(...r)
      } catch (n) {
        throw ((i.value = !1), n)
      }
      return (i.value = !1), e
    }
  },
  z = (t) => async (...i) => {
    if (!!Re().value) return await t(...i)
  },
  U = (t) => async (...i) => {
    try {
      return await t(...i)
    } catch (r) {
      if (r.message == 'Internal JSON-RPC error.' && r.data) {
        r.data.message = r.data.message.replace('execution reverted: ', '')
        const e = 'Planets: '
        throw (
          (r.data.message.startsWith(e) &&
            (r.data.message = r.data.message.replace(e, '')),
          new Error(r.data.message.trim()))
        )
      } else throw new Error(r.message)
    }
  }
class Ma extends Error {
  constructor() {
    super('Throttled function aborted')
    this.name = 'AbortError'
  }
}
function Fa({ limit: t, interval: i, strict: r }) {
  if (!Number.isFinite(t))
    throw new TypeError('Expected `limit` to be a finite number')
  if (!Number.isFinite(i))
    throw new TypeError('Expected `interval` to be a finite number')
  const e = new Map()
  let n = 0,
    a = 0
  function o() {
    const d = Date.now()
    return d - n > i
      ? ((a = 1), (n = d), 0)
      : (a < t ? a++ : ((n += i), (a = 1)), n - d)
  }
  const s = []
  function u() {
    const d = Date.now()
    if (s.length < t) return s.push(d), 0
    const f = s.shift() + i
    return d >= f ? (s.push(d), 0) : (s.push(f), f - d)
  }
  const l = r ? u : o
  return (d) => {
    const f = function (...c) {
      if (!f.isEnabled) return (async () => d.apply(this, c))()
      let m
      return new Promise((v, w) => {
        ;(m = setTimeout(() => {
          v(d.apply(this, c)), e.delete(m)
        }, l())),
          e.set(m, w)
      })
    }
    return (
      (f.abort = () => {
        for (const c of e.keys()) clearTimeout(c), e.get(c)(new Ma())
        e.clear(), s.splice(0, s.length)
      }),
      (f.isEnabled = !0),
      f
    )
  }
}
const { visibility: Ft, hidden: dn } = On(),
  Ca = 15e3,
  mn = Fa({ limit: 1, interval: Ca }),
  et = '__walletInstance',
  hn = `${et}_events`,
  Ve = wn(),
  $ = Ve.networks[Ve.currentNetwork]
var te
;(function (t) {
  ;(t.NEW_BLOCK = 'new-block'),
    (t.CONNECTED = 'connected'),
    (t.NETWORK_MISMATCH = 'network-mismatch'),
    (t.DISCONNECTED = 'disconnected'),
    (t.CHANGE_WALLET = 'change-wallet')
})(te || (te = {}))
const re = () => he(hn, () => At()).value,
  C = () => he(et, () => {}).value,
  Ct = async (t = !0) => {
    const i = C()
    i.provider && i.provider.removeAllListeners(),
      (he(et).value = void 0),
      t && re().callHook(te.CHANGE_WALLET)
  },
  xt = async () => {
    await C().web3Modal.clearCachedProvider(),
      (Re().value = !1),
      re().callHook(te.DISCONNECTED),
      await Ct(!1),
      (he(hn).value = At())
  },
  vn = () => {
    if (he('shouldFreezeNewBlockEmission', () => !1).value === !0) {
      console.log('Skipping block refresh')
      return
    }
    console.log('Emit new block'), re().callHook(te.NEW_BLOCK)
  }
let de = mn(() => vn())
gn(Ft, () => {
  Ft.value == 'hidden' || dn.value
    ? (console.log('Stop refreshing'),
      de.cancel && de.cancel(),
      (de = () => {}))
    : (Ft.value == 'visible' || !dn.value) &&
      (console.log('Re-add refresher'), (de = mn(() => vn())), de())
})
const Va = () => {
  const t = async () => {
      const f = he(et, () => {})
      if (typeof f.value == 'undefined') {
        console.log('Connecting...')
        const c = _t()
        c.value = !0
        try {
          const m = await Ze(() => import('./index-f50ccad4.mjs'), [
              'index-f50ccad4.mjs',
              'index-9e1c4a64.mjs',
              'numberTranslator-67ca5f44.mjs',
              'bootstrap-859756f4.mjs',
              'assets/bootstrap.ad35250b.css',
            ]),
            v = (
              await Ze(
                () =>
                  import('./index-be138372.mjs').then(function (M) {
                    return M.i
                  }),
                [
                  'index-be138372.mjs',
                  'bootstrap-859756f4.mjs',
                  'assets/bootstrap.ad35250b.css',
                ],
              )
            ).default,
            w = (
              await Ze(
                () =>
                  import('./index.min-d8b596bb.mjs').then(function (M) {
                    return M.i
                  }),
                [
                  'index.min-d8b596bb.mjs',
                  'bootstrap-859756f4.mjs',
                  'assets/bootstrap.ad35250b.css',
                ],
              )
            ).default,
            g = await Ze(() => import('./index-f5859752.mjs'), [
              'index-f5859752.mjs',
              'index-9e1c4a64.mjs',
              'numberTranslator-67ca5f44.mjs',
              'bootstrap-859756f4.mjs',
              'assets/bootstrap.ad35250b.css',
            ]),
            y = new v({
              cacheProvider: !0,
              theme: 'light',
              providerOptions: {
                walletconnect: {
                  package: w,
                  options: {
                    bridge: 'https://paraswap.bridge.walletconnect.org',
                    pollingInterval: 12e3,
                    networkId: $.id,
                    chainId: $.id,
                    chain: 'AVAX',
                    rpc: { [$.id]: $.rpc },
                    qrcode: !0,
                    supportedChainIds: [$.id],
                    infuraId: !1,
                  },
                },
              },
            }),
            O = await y.connect()
          O.http &&
            O.http.connection &&
            O.http.connection.url &&
            (O.http.connection.url = $.rpc)
          const E = new m.Web3Provider(O, 'any')
          E.on('error', async (M) => {
            switch (M.code) {
              case 'NETWORK_ERROR':
                M.event == 'changed' &&
                  M.detectedNetwork.chainId != $.id &&
                  (re().callHook(te.NETWORK_MISMATCH),
                  Re().value && (await xt()),
                  await Ct(!1))
                break
            }
          })
          const j = E.getSigner(),
            ne = new g.Contract(
              Vt.implementation[Ve.currentNetwork],
              Vt.abi,
              E,
            ),
            Y = new g.Contract(Lt.implementation[Ve.currentNetwork], Lt.abi, E),
            me = new g.Contract(
              Rt.implementation[Ve.currentNetwork],
              Rt.abi,
              E,
            ),
            { chainId: Oe } = await E.getNetwork()
          if ((console.log(E), Oe != $.id))
            throw new Error(
              `Invalid network, switch to ${$.name} and try again`,
            )
          E.on('block', () => de()),
            re().hook(te.DISCONNECTED, async () => {
              typeof E.provider.disconnect == 'function' &&
                (await E.provider.disconnect())
            }),
            typeof window.ethereum != 'undefined' &&
              window.ethereum.once('accountsChanged', async (M) => {
                typeof M[0] == 'string'
                  ? (await Ct(), await t(), de())
                  : await xt()
              }),
            (f.value = {
              network: $,
              provider: E,
              web3Modal: y,
              account: (await E.listAccounts())[0],
              planetsManagerInstance: Y.connect(j),
              universeInstance: ne.connect(j),
              walletObserverInstance: me.connect(j),
            }),
            (Re().value = !0),
            re().callHook(te.CONNECTED)
        } catch (m) {
          throw m
        } finally {
          c.value = !1
        }
      }
      return f.value
    },
    i = async (f, c) => {
      const { planetsManagerInstance: m } = C()
      if (f.length == 0 || c < 42e3)
        throw new Error('The name or the amount is invalid. Please try again.')
      await m.createPlanetWithTokens(f, pn(c))
    },
    r = async (f) => {
      const { planetsManagerInstance: c } = C()
      await c.compoundReward(f)
    },
    e = async (f) => {
      const { planetsManagerInstance: c } = C()
      await c.cashoutReward(f)
    },
    n = async () => {
      const { planetsManagerInstance: f } = C()
      await f.compoundAll()
    },
    a = async () => {
      const { planetsManagerInstance: f } = C()
      await f.cashoutAll()
    },
    o = async () => {
      const { planetsManagerInstance: f, account: c } = C(),
        m = await f.getPlanetIdsOf(c)
      return (await f.getPlanetsByIds(m)).map((g) => {
        const {
            id: y,
            planet: O,
            rewardPerDay: E,
            pendingRewards: j,
            compoundDelay: ne,
          } = g,
          {
            creationTime: Y,
            lastProcessingTimestamp: me,
            name: Oe,
            planetValue: M,
            rewardMult: tt,
            totalClaimed: Le,
          } = O,
          rt = Math.floor(Na.now().toSeconds())
        return {
          id: y,
          creationTime: Y,
          canCompound: Tn.from(rt).gte(me.add(ne)),
          lastProcessingTimestamp: me,
          name: Oe,
          planetValue: M,
          rewardMult: tt,
          totalClaimed: Le,
          rewardPerDay: E,
          pendingRewards: j,
          compoundDelay: ne,
        }
      })
    },
    s = async () => {
      const { universeInstance: f, account: c } = C()
      return await f.balanceOf(c)
    },
    u = async (f, c) => {
      const { planetsManagerInstance: m, account: v } = C()
      if (f.length == 0 || c.length == 0)
        throw new Error(
          'The recipient or the select planet is invalid. Please try again.',
        )
      await m.transferFrom(v, f, c)
    },
    l = async (f, c) => {
      const { planetsManagerInstance: m } = C()
      if (f.length == 0 || c.length == 0)
        throw new Error(
          'The name or the select planet is invalid. Please try again.',
        )
      await m.renamePlanet(c, f)
    },
    d = async () => {
      const { walletObserverInstance: f, account: c } = C(),
        m = await f.getOverviewOf(c)
      return {
        expiresWhen: m[0],
        timeframeQuotaIn: m[1],
        timeframeQuotaOut: m[2],
        getRemainingTransfersIn: m[3],
        getRemainingTransfersOut: m[4],
        getRemainingTransfersOutWithSellAllowance: m[5],
      }
    }
  return {
    connect: t,
    disconnect: z(xt),
    compoundAll: z(ce(U(n))),
    cashoutAll: z(ce(U(a))),
    createPlanet: z(ce(U(i))),
    compoundReward: z(ce(U(r))),
    cashoutReward: z(ce(U(e))),
    transferPlanet: z(ce(U(u))),
    renamePlanet: z(ce(U(l))),
    getPlanets: z(U(o)),
    getUniverseBalance: z(U(s)),
    getLimitsOverview: z(U(d)),
    hook: (f, c) => re().hook(f, c),
    hookOnce: (f, c) => re().hookOnce(f, c),
    $instance: C,
  }
}
export { Na as D, On as a, Aa as b, Va as u }
