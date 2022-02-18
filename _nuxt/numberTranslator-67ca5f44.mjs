import { O as Cr } from './bootstrap-859756f4.mjs'
var Ar = { exports: {} }
;(function (a) {
  ;(function (f, d) {
    function c(u, t) {
      if (!u) throw new Error(t || 'Assertion failed')
    }
    function y(u, t) {
      u.super_ = t
      var i = function () {}
      ;(i.prototype = t.prototype),
        (u.prototype = new i()),
        (u.prototype.constructor = u)
    }
    function m(u, t, i) {
      if (m.isBN(u)) return u
      ;(this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        u !== null &&
          ((t === 'le' || t === 'be') && ((i = t), (t = 10)),
          this._init(u || 0, t || 10, i || 'be'))
    }
    typeof f == 'object' ? (f.exports = m) : (d.BN = m),
      (m.BN = m),
      (m.wordSize = 26)
    var vt
    try {
      typeof window != 'undefined' && typeof window.Buffer != 'undefined'
        ? (vt = window.Buffer)
        : (vt = require('buffer').Buffer)
    } catch {}
    ;(m.isBN = function (t) {
      return t instanceof m
        ? !0
        : t !== null &&
            typeof t == 'object' &&
            t.constructor.wordSize === m.wordSize &&
            Array.isArray(t.words)
    }),
      (m.max = function (t, i) {
        return t.cmp(i) > 0 ? t : i
      }),
      (m.min = function (t, i) {
        return t.cmp(i) < 0 ? t : i
      }),
      (m.prototype._init = function (t, i, e) {
        if (typeof t == 'number') return this._initNumber(t, i, e)
        if (typeof t == 'object') return this._initArray(t, i, e)
        i === 'hex' && (i = 16),
          c(i === (i | 0) && i >= 2 && i <= 36),
          (t = t.toString().replace(/\s+/g, ''))
        var n = 0
        t[0] === '-' && (n++, (this.negative = 1)),
          n < t.length &&
            (i === 16
              ? this._parseHex(t, n, e)
              : (this._parseBase(t, i, n),
                e === 'le' && this._initArray(this.toArray(), i, e)))
      }),
      (m.prototype._initNumber = function (t, i, e) {
        t < 0 && ((this.negative = 1), (t = -t)),
          t < 67108864
            ? ((this.words = [t & 67108863]), (this.length = 1))
            : t < 4503599627370496
            ? ((this.words = [t & 67108863, (t / 67108864) & 67108863]),
              (this.length = 2))
            : (c(t < 9007199254740992),
              (this.words = [t & 67108863, (t / 67108864) & 67108863, 1]),
              (this.length = 3)),
          e === 'le' && this._initArray(this.toArray(), i, e)
      }),
      (m.prototype._initArray = function (t, i, e) {
        if ((c(typeof t.length == 'number'), t.length <= 0))
          return (this.words = [0]), (this.length = 1), this
        ;(this.length = Math.ceil(t.length / 3)),
          (this.words = new Array(this.length))
        for (var n = 0; n < this.length; n++) this.words[n] = 0
        var o,
          l,
          v = 0
        if (e === 'be')
          for (n = t.length - 1, o = 0; n >= 0; n -= 3)
            (l = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
              (this.words[o] |= (l << v) & 67108863),
              (this.words[o + 1] = (l >>> (26 - v)) & 67108863),
              (v += 24),
              v >= 26 && ((v -= 26), o++)
        else if (e === 'le')
          for (n = 0, o = 0; n < t.length; n += 3)
            (l = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
              (this.words[o] |= (l << v) & 67108863),
              (this.words[o + 1] = (l >>> (26 - v)) & 67108863),
              (v += 24),
              v >= 26 && ((v -= 26), o++)
        return this.strip()
      })
    function gt(u, t) {
      var i = u.charCodeAt(t)
      return i >= 65 && i <= 70
        ? i - 55
        : i >= 97 && i <= 102
        ? i - 87
        : (i - 48) & 15
    }
    function wt(u, t, i) {
      var e = gt(u, i)
      return i - 1 >= t && (e |= gt(u, i - 1) << 4), e
    }
    m.prototype._parseHex = function (t, i, e) {
      ;(this.length = Math.ceil((t.length - i) / 6)),
        (this.words = new Array(this.length))
      for (var n = 0; n < this.length; n++) this.words[n] = 0
      var o = 0,
        l = 0,
        v
      if (e === 'be')
        for (n = t.length - 1; n >= i; n -= 2)
          (v = wt(t, i, n) << o),
            (this.words[l] |= v & 67108863),
            o >= 18
              ? ((o -= 18), (l += 1), (this.words[l] |= v >>> 26))
              : (o += 8)
      else {
        var s = t.length - i
        for (n = s % 2 == 0 ? i + 1 : i; n < t.length; n += 2)
          (v = wt(t, i, n) << o),
            (this.words[l] |= v & 67108863),
            o >= 18
              ? ((o -= 18), (l += 1), (this.words[l] |= v >>> 26))
              : (o += 8)
      }
      this.strip()
    }
    function xt(u, t, i, e) {
      for (var n = 0, o = Math.min(u.length, i), l = t; l < o; l++) {
        var v = u.charCodeAt(l) - 48
        ;(n *= e),
          v >= 49 ? (n += v - 49 + 10) : v >= 17 ? (n += v - 17 + 10) : (n += v)
      }
      return n
    }
    ;(m.prototype._parseBase = function (t, i, e) {
      ;(this.words = [0]), (this.length = 1)
      for (var n = 0, o = 1; o <= 67108863; o *= i) n++
      n--, (o = (o / i) | 0)
      for (
        var l = t.length - e,
          v = l % n,
          s = Math.min(l, l - v) + e,
          r = 0,
          h = e;
        h < s;
        h += n
      )
        (r = xt(t, h, h + n, i)),
          this.imuln(o),
          this.words[0] + r < 67108864 ? (this.words[0] += r) : this._iaddn(r)
      if (v !== 0) {
        var g = 1
        for (r = xt(t, h, t.length, i), h = 0; h < v; h++) g *= i
        this.imuln(g),
          this.words[0] + r < 67108864 ? (this.words[0] += r) : this._iaddn(r)
      }
      this.strip()
    }),
      (m.prototype.copy = function (t) {
        t.words = new Array(this.length)
        for (var i = 0; i < this.length; i++) t.words[i] = this.words[i]
        ;(t.length = this.length),
          (t.negative = this.negative),
          (t.red = this.red)
      }),
      (m.prototype.clone = function () {
        var t = new m(null)
        return this.copy(t), t
      }),
      (m.prototype._expand = function (t) {
        for (; this.length < t; ) this.words[this.length++] = 0
        return this
      }),
      (m.prototype.strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--
        return this._normSign()
      }),
      (m.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        )
      }),
      (m.prototype.inspect = function () {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>'
      })
    var bt = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000',
      ],
      qr = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
      ],
      Fr = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176,
      ]
    ;(m.prototype.toString = function (t, i) {
      ;(t = t || 10), (i = i | 0 || 1)
      var e
      if (t === 16 || t === 'hex') {
        e = ''
        for (var n = 0, o = 0, l = 0; l < this.length; l++) {
          var v = this.words[l],
            s = (((v << n) | o) & 16777215).toString(16)
          ;(o = (v >>> (24 - n)) & 16777215),
            o !== 0 || l !== this.length - 1
              ? (e = bt[6 - s.length] + s + e)
              : (e = s + e),
            (n += 2),
            n >= 26 && ((n -= 26), l--)
        }
        for (o !== 0 && (e = o.toString(16) + e); e.length % i != 0; )
          e = '0' + e
        return this.negative !== 0 && (e = '-' + e), e
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var r = qr[t],
          h = Fr[t]
        e = ''
        var g = this.clone()
        for (g.negative = 0; !g.isZero(); ) {
          var p = g.modn(h).toString(t)
          ;(g = g.idivn(h)),
            g.isZero() ? (e = p + e) : (e = bt[r - p.length] + p + e)
        }
        for (this.isZero() && (e = '0' + e); e.length % i != 0; ) e = '0' + e
        return this.negative !== 0 && (e = '-' + e), e
      }
      c(!1, 'Base should be between 2 and 36')
    }),
      (m.prototype.toNumber = function () {
        var t = this.words[0]
        return (
          this.length === 2
            ? (t += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (t += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              c(!1, 'Number can only safely store up to 53 bits'),
          this.negative !== 0 ? -t : t
        )
      }),
      (m.prototype.toJSON = function () {
        return this.toString(16)
      }),
      (m.prototype.toBuffer = function (t, i) {
        return c(typeof vt != 'undefined'), this.toArrayLike(vt, t, i)
      }),
      (m.prototype.toArray = function (t, i) {
        return this.toArrayLike(Array, t, i)
      }),
      (m.prototype.toArrayLike = function (t, i, e) {
        var n = this.byteLength(),
          o = e || Math.max(1, n)
        c(n <= o, 'byte array longer than desired length'),
          c(o > 0, 'Requested array length <= 0'),
          this.strip()
        var l = i === 'le',
          v = new t(o),
          s,
          r,
          h = this.clone()
        if (l) {
          for (r = 0; !h.isZero(); r++)
            (s = h.andln(255)), h.iushrn(8), (v[r] = s)
          for (; r < o; r++) v[r] = 0
        } else {
          for (r = 0; r < o - n; r++) v[r] = 0
          for (r = 0; !h.isZero(); r++)
            (s = h.andln(255)), h.iushrn(8), (v[o - r - 1] = s)
        }
        return v
      }),
      Math.clz32
        ? (m.prototype._countBits = function (t) {
            return 32 - Math.clz32(t)
          })
        : (m.prototype._countBits = function (t) {
            var i = t,
              e = 0
            return (
              i >= 4096 && ((e += 13), (i >>>= 13)),
              i >= 64 && ((e += 7), (i >>>= 7)),
              i >= 8 && ((e += 4), (i >>>= 4)),
              i >= 2 && ((e += 2), (i >>>= 2)),
              e + i
            )
          }),
      (m.prototype._zeroBits = function (t) {
        if (t === 0) return 26
        var i = t,
          e = 0
        return (
          (i & 8191) == 0 && ((e += 13), (i >>>= 13)),
          (i & 127) == 0 && ((e += 7), (i >>>= 7)),
          (i & 15) == 0 && ((e += 4), (i >>>= 4)),
          (i & 3) == 0 && ((e += 2), (i >>>= 2)),
          (i & 1) == 0 && e++,
          e
        )
      }),
      (m.prototype.bitLength = function () {
        var t = this.words[this.length - 1],
          i = this._countBits(t)
        return (this.length - 1) * 26 + i
      })
    function Lr(u) {
      for (var t = new Array(u.bitLength()), i = 0; i < t.length; i++) {
        var e = (i / 26) | 0,
          n = i % 26
        t[i] = (u.words[e] & (1 << n)) >>> n
      }
      return t
    }
    ;(m.prototype.zeroBits = function () {
      if (this.isZero()) return 0
      for (var t = 0, i = 0; i < this.length; i++) {
        var e = this._zeroBits(this.words[i])
        if (((t += e), e !== 26)) break
      }
      return t
    }),
      (m.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8)
      }),
      (m.prototype.toTwos = function (t) {
        return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone()
      }),
      (m.prototype.fromTwos = function (t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
      }),
      (m.prototype.isNeg = function () {
        return this.negative !== 0
      }),
      (m.prototype.neg = function () {
        return this.clone().ineg()
      }),
      (m.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this
      }),
      (m.prototype.iuor = function (t) {
        for (; this.length < t.length; ) this.words[this.length++] = 0
        for (var i = 0; i < t.length; i++)
          this.words[i] = this.words[i] | t.words[i]
        return this.strip()
      }),
      (m.prototype.ior = function (t) {
        return c((this.negative | t.negative) == 0), this.iuor(t)
      }),
      (m.prototype.or = function (t) {
        return this.length > t.length
          ? this.clone().ior(t)
          : t.clone().ior(this)
      }),
      (m.prototype.uor = function (t) {
        return this.length > t.length
          ? this.clone().iuor(t)
          : t.clone().iuor(this)
      }),
      (m.prototype.iuand = function (t) {
        var i
        this.length > t.length ? (i = t) : (i = this)
        for (var e = 0; e < i.length; e++)
          this.words[e] = this.words[e] & t.words[e]
        return (this.length = i.length), this.strip()
      }),
      (m.prototype.iand = function (t) {
        return c((this.negative | t.negative) == 0), this.iuand(t)
      }),
      (m.prototype.and = function (t) {
        return this.length > t.length
          ? this.clone().iand(t)
          : t.clone().iand(this)
      }),
      (m.prototype.uand = function (t) {
        return this.length > t.length
          ? this.clone().iuand(t)
          : t.clone().iuand(this)
      }),
      (m.prototype.iuxor = function (t) {
        var i, e
        this.length > t.length ? ((i = this), (e = t)) : ((i = t), (e = this))
        for (var n = 0; n < e.length; n++)
          this.words[n] = i.words[n] ^ e.words[n]
        if (this !== i) for (; n < i.length; n++) this.words[n] = i.words[n]
        return (this.length = i.length), this.strip()
      }),
      (m.prototype.ixor = function (t) {
        return c((this.negative | t.negative) == 0), this.iuxor(t)
      }),
      (m.prototype.xor = function (t) {
        return this.length > t.length
          ? this.clone().ixor(t)
          : t.clone().ixor(this)
      }),
      (m.prototype.uxor = function (t) {
        return this.length > t.length
          ? this.clone().iuxor(t)
          : t.clone().iuxor(this)
      }),
      (m.prototype.inotn = function (t) {
        c(typeof t == 'number' && t >= 0)
        var i = Math.ceil(t / 26) | 0,
          e = t % 26
        this._expand(i), e > 0 && i--
        for (var n = 0; n < i; n++) this.words[n] = ~this.words[n] & 67108863
        return (
          e > 0 && (this.words[n] = ~this.words[n] & (67108863 >> (26 - e))),
          this.strip()
        )
      }),
      (m.prototype.notn = function (t) {
        return this.clone().inotn(t)
      }),
      (m.prototype.setn = function (t, i) {
        c(typeof t == 'number' && t >= 0)
        var e = (t / 26) | 0,
          n = t % 26
        return (
          this._expand(e + 1),
          i
            ? (this.words[e] = this.words[e] | (1 << n))
            : (this.words[e] = this.words[e] & ~(1 << n)),
          this.strip()
        )
      }),
      (m.prototype.iadd = function (t) {
        var i
        if (this.negative !== 0 && t.negative === 0)
          return (
            (this.negative = 0),
            (i = this.isub(t)),
            (this.negative ^= 1),
            this._normSign()
          )
        if (this.negative === 0 && t.negative !== 0)
          return (
            (t.negative = 0),
            (i = this.isub(t)),
            (t.negative = 1),
            i._normSign()
          )
        var e, n
        this.length > t.length ? ((e = this), (n = t)) : ((e = t), (n = this))
        for (var o = 0, l = 0; l < n.length; l++)
          (i = (e.words[l] | 0) + (n.words[l] | 0) + o),
            (this.words[l] = i & 67108863),
            (o = i >>> 26)
        for (; o !== 0 && l < e.length; l++)
          (i = (e.words[l] | 0) + o),
            (this.words[l] = i & 67108863),
            (o = i >>> 26)
        if (((this.length = e.length), o !== 0))
          (this.words[this.length] = o), this.length++
        else if (e !== this)
          for (; l < e.length; l++) this.words[l] = e.words[l]
        return this
      }),
      (m.prototype.add = function (t) {
        var i
        return t.negative !== 0 && this.negative === 0
          ? ((t.negative = 0), (i = this.sub(t)), (t.negative ^= 1), i)
          : t.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (i = t.sub(this)), (this.negative = 1), i)
          : this.length > t.length
          ? this.clone().iadd(t)
          : t.clone().iadd(this)
      }),
      (m.prototype.isub = function (t) {
        if (t.negative !== 0) {
          t.negative = 0
          var i = this.iadd(t)
          return (t.negative = 1), i._normSign()
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(t),
            (this.negative = 1),
            this._normSign()
          )
        var e = this.cmp(t)
        if (e === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          )
        var n, o
        e > 0 ? ((n = this), (o = t)) : ((n = t), (o = this))
        for (var l = 0, v = 0; v < o.length; v++)
          (i = (n.words[v] | 0) - (o.words[v] | 0) + l),
            (l = i >> 26),
            (this.words[v] = i & 67108863)
        for (; l !== 0 && v < n.length; v++)
          (i = (n.words[v] | 0) + l),
            (l = i >> 26),
            (this.words[v] = i & 67108863)
        if (l === 0 && v < n.length && n !== this)
          for (; v < n.length; v++) this.words[v] = n.words[v]
        return (
          (this.length = Math.max(this.length, v)),
          n !== this && (this.negative = 1),
          this.strip()
        )
      }),
      (m.prototype.sub = function (t) {
        return this.clone().isub(t)
      })
    function nr(u, t, i) {
      i.negative = t.negative ^ u.negative
      var e = (u.length + t.length) | 0
      ;(i.length = e), (e = (e - 1) | 0)
      var n = u.words[0] | 0,
        o = t.words[0] | 0,
        l = n * o,
        v = l & 67108863,
        s = (l / 67108864) | 0
      i.words[0] = v
      for (var r = 1; r < e; r++) {
        for (
          var h = s >>> 26,
            g = s & 67108863,
            p = Math.min(r, t.length - 1),
            M = Math.max(0, r - u.length + 1);
          M <= p;
          M++
        ) {
          var w = (r - M) | 0
          ;(n = u.words[w] | 0),
            (o = t.words[M] | 0),
            (l = n * o + g),
            (h += (l / 67108864) | 0),
            (g = l & 67108863)
        }
        ;(i.words[r] = g | 0), (s = h | 0)
      }
      return s !== 0 ? (i.words[r] = s | 0) : i.length--, i.strip()
    }
    var sr = function (t, i, e) {
      var n = t.words,
        o = i.words,
        l = e.words,
        v = 0,
        s,
        r,
        h,
        g = n[0] | 0,
        p = g & 8191,
        M = g >>> 13,
        w = n[1] | 0,
        b = w & 8191,
        N = w >>> 13,
        yt = n[2] | 0,
        _ = yt & 8191,
        A = yt >>> 13,
        ar = n[3] | 0,
        T = ar & 8191,
        I = ar >>> 13,
        ur = n[4] | 0,
        O = ur & 8191,
        P = ur >>> 13,
        lr = n[5] | 0,
        U = lr & 8191,
        B = lr >>> 13,
        mr = n[6] | 0,
        k = mr & 8191,
        D = mr >>> 13,
        vr = n[7] | 0,
        q = vr & 8191,
        F = vr >>> 13,
        dr = n[8] | 0,
        L = dr & 8191,
        Z = dr >>> 13,
        cr = n[9] | 0,
        C = cr & 8191,
        z = cr >>> 13,
        gr = o[0] | 0,
        G = gr & 8191,
        H = gr >>> 13,
        pr = o[1] | 0,
        K = pr & 8191,
        W = pr >>> 13,
        Mr = o[2] | 0,
        X = Mr & 8191,
        $ = Mr >>> 13,
        wr = o[3] | 0,
        V = wr & 8191,
        J = wr >>> 13,
        yr = o[4] | 0,
        Q = yr & 8191,
        Y = yr >>> 13,
        xr = o[5] | 0,
        j = xr & 8191,
        tt = xr >>> 13,
        br = o[6] | 0,
        rt = br & 8191,
        it = br >>> 13,
        Er = o[7] | 0,
        et = Er & 8191,
        nt = Er >>> 13,
        Nr = o[8] | 0,
        st = Nr & 8191,
        ht = Nr >>> 13,
        _r = o[9] | 0,
        ft = _r & 8191,
        ot = _r >>> 13
      ;(e.negative = t.negative ^ i.negative),
        (e.length = 19),
        (s = Math.imul(p, G)),
        (r = Math.imul(p, H)),
        (r = (r + Math.imul(M, G)) | 0),
        (h = Math.imul(M, H))
      var Ut = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Ut >>> 26)) | 0),
        (Ut &= 67108863),
        (s = Math.imul(b, G)),
        (r = Math.imul(b, H)),
        (r = (r + Math.imul(N, G)) | 0),
        (h = Math.imul(N, H)),
        (s = (s + Math.imul(p, K)) | 0),
        (r = (r + Math.imul(p, W)) | 0),
        (r = (r + Math.imul(M, K)) | 0),
        (h = (h + Math.imul(M, W)) | 0)
      var Bt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Bt >>> 26)) | 0),
        (Bt &= 67108863),
        (s = Math.imul(_, G)),
        (r = Math.imul(_, H)),
        (r = (r + Math.imul(A, G)) | 0),
        (h = Math.imul(A, H)),
        (s = (s + Math.imul(b, K)) | 0),
        (r = (r + Math.imul(b, W)) | 0),
        (r = (r + Math.imul(N, K)) | 0),
        (h = (h + Math.imul(N, W)) | 0),
        (s = (s + Math.imul(p, X)) | 0),
        (r = (r + Math.imul(p, $)) | 0),
        (r = (r + Math.imul(M, X)) | 0),
        (h = (h + Math.imul(M, $)) | 0)
      var kt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (kt >>> 26)) | 0),
        (kt &= 67108863),
        (s = Math.imul(T, G)),
        (r = Math.imul(T, H)),
        (r = (r + Math.imul(I, G)) | 0),
        (h = Math.imul(I, H)),
        (s = (s + Math.imul(_, K)) | 0),
        (r = (r + Math.imul(_, W)) | 0),
        (r = (r + Math.imul(A, K)) | 0),
        (h = (h + Math.imul(A, W)) | 0),
        (s = (s + Math.imul(b, X)) | 0),
        (r = (r + Math.imul(b, $)) | 0),
        (r = (r + Math.imul(N, X)) | 0),
        (h = (h + Math.imul(N, $)) | 0),
        (s = (s + Math.imul(p, V)) | 0),
        (r = (r + Math.imul(p, J)) | 0),
        (r = (r + Math.imul(M, V)) | 0),
        (h = (h + Math.imul(M, J)) | 0)
      var Dt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Dt >>> 26)) | 0),
        (Dt &= 67108863),
        (s = Math.imul(O, G)),
        (r = Math.imul(O, H)),
        (r = (r + Math.imul(P, G)) | 0),
        (h = Math.imul(P, H)),
        (s = (s + Math.imul(T, K)) | 0),
        (r = (r + Math.imul(T, W)) | 0),
        (r = (r + Math.imul(I, K)) | 0),
        (h = (h + Math.imul(I, W)) | 0),
        (s = (s + Math.imul(_, X)) | 0),
        (r = (r + Math.imul(_, $)) | 0),
        (r = (r + Math.imul(A, X)) | 0),
        (h = (h + Math.imul(A, $)) | 0),
        (s = (s + Math.imul(b, V)) | 0),
        (r = (r + Math.imul(b, J)) | 0),
        (r = (r + Math.imul(N, V)) | 0),
        (h = (h + Math.imul(N, J)) | 0),
        (s = (s + Math.imul(p, Q)) | 0),
        (r = (r + Math.imul(p, Y)) | 0),
        (r = (r + Math.imul(M, Q)) | 0),
        (h = (h + Math.imul(M, Y)) | 0)
      var qt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (qt >>> 26)) | 0),
        (qt &= 67108863),
        (s = Math.imul(U, G)),
        (r = Math.imul(U, H)),
        (r = (r + Math.imul(B, G)) | 0),
        (h = Math.imul(B, H)),
        (s = (s + Math.imul(O, K)) | 0),
        (r = (r + Math.imul(O, W)) | 0),
        (r = (r + Math.imul(P, K)) | 0),
        (h = (h + Math.imul(P, W)) | 0),
        (s = (s + Math.imul(T, X)) | 0),
        (r = (r + Math.imul(T, $)) | 0),
        (r = (r + Math.imul(I, X)) | 0),
        (h = (h + Math.imul(I, $)) | 0),
        (s = (s + Math.imul(_, V)) | 0),
        (r = (r + Math.imul(_, J)) | 0),
        (r = (r + Math.imul(A, V)) | 0),
        (h = (h + Math.imul(A, J)) | 0),
        (s = (s + Math.imul(b, Q)) | 0),
        (r = (r + Math.imul(b, Y)) | 0),
        (r = (r + Math.imul(N, Q)) | 0),
        (h = (h + Math.imul(N, Y)) | 0),
        (s = (s + Math.imul(p, j)) | 0),
        (r = (r + Math.imul(p, tt)) | 0),
        (r = (r + Math.imul(M, j)) | 0),
        (h = (h + Math.imul(M, tt)) | 0)
      var Ft = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Ft >>> 26)) | 0),
        (Ft &= 67108863),
        (s = Math.imul(k, G)),
        (r = Math.imul(k, H)),
        (r = (r + Math.imul(D, G)) | 0),
        (h = Math.imul(D, H)),
        (s = (s + Math.imul(U, K)) | 0),
        (r = (r + Math.imul(U, W)) | 0),
        (r = (r + Math.imul(B, K)) | 0),
        (h = (h + Math.imul(B, W)) | 0),
        (s = (s + Math.imul(O, X)) | 0),
        (r = (r + Math.imul(O, $)) | 0),
        (r = (r + Math.imul(P, X)) | 0),
        (h = (h + Math.imul(P, $)) | 0),
        (s = (s + Math.imul(T, V)) | 0),
        (r = (r + Math.imul(T, J)) | 0),
        (r = (r + Math.imul(I, V)) | 0),
        (h = (h + Math.imul(I, J)) | 0),
        (s = (s + Math.imul(_, Q)) | 0),
        (r = (r + Math.imul(_, Y)) | 0),
        (r = (r + Math.imul(A, Q)) | 0),
        (h = (h + Math.imul(A, Y)) | 0),
        (s = (s + Math.imul(b, j)) | 0),
        (r = (r + Math.imul(b, tt)) | 0),
        (r = (r + Math.imul(N, j)) | 0),
        (h = (h + Math.imul(N, tt)) | 0),
        (s = (s + Math.imul(p, rt)) | 0),
        (r = (r + Math.imul(p, it)) | 0),
        (r = (r + Math.imul(M, rt)) | 0),
        (h = (h + Math.imul(M, it)) | 0)
      var Lt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Lt >>> 26)) | 0),
        (Lt &= 67108863),
        (s = Math.imul(q, G)),
        (r = Math.imul(q, H)),
        (r = (r + Math.imul(F, G)) | 0),
        (h = Math.imul(F, H)),
        (s = (s + Math.imul(k, K)) | 0),
        (r = (r + Math.imul(k, W)) | 0),
        (r = (r + Math.imul(D, K)) | 0),
        (h = (h + Math.imul(D, W)) | 0),
        (s = (s + Math.imul(U, X)) | 0),
        (r = (r + Math.imul(U, $)) | 0),
        (r = (r + Math.imul(B, X)) | 0),
        (h = (h + Math.imul(B, $)) | 0),
        (s = (s + Math.imul(O, V)) | 0),
        (r = (r + Math.imul(O, J)) | 0),
        (r = (r + Math.imul(P, V)) | 0),
        (h = (h + Math.imul(P, J)) | 0),
        (s = (s + Math.imul(T, Q)) | 0),
        (r = (r + Math.imul(T, Y)) | 0),
        (r = (r + Math.imul(I, Q)) | 0),
        (h = (h + Math.imul(I, Y)) | 0),
        (s = (s + Math.imul(_, j)) | 0),
        (r = (r + Math.imul(_, tt)) | 0),
        (r = (r + Math.imul(A, j)) | 0),
        (h = (h + Math.imul(A, tt)) | 0),
        (s = (s + Math.imul(b, rt)) | 0),
        (r = (r + Math.imul(b, it)) | 0),
        (r = (r + Math.imul(N, rt)) | 0),
        (h = (h + Math.imul(N, it)) | 0),
        (s = (s + Math.imul(p, et)) | 0),
        (r = (r + Math.imul(p, nt)) | 0),
        (r = (r + Math.imul(M, et)) | 0),
        (h = (h + Math.imul(M, nt)) | 0)
      var Zt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Zt >>> 26)) | 0),
        (Zt &= 67108863),
        (s = Math.imul(L, G)),
        (r = Math.imul(L, H)),
        (r = (r + Math.imul(Z, G)) | 0),
        (h = Math.imul(Z, H)),
        (s = (s + Math.imul(q, K)) | 0),
        (r = (r + Math.imul(q, W)) | 0),
        (r = (r + Math.imul(F, K)) | 0),
        (h = (h + Math.imul(F, W)) | 0),
        (s = (s + Math.imul(k, X)) | 0),
        (r = (r + Math.imul(k, $)) | 0),
        (r = (r + Math.imul(D, X)) | 0),
        (h = (h + Math.imul(D, $)) | 0),
        (s = (s + Math.imul(U, V)) | 0),
        (r = (r + Math.imul(U, J)) | 0),
        (r = (r + Math.imul(B, V)) | 0),
        (h = (h + Math.imul(B, J)) | 0),
        (s = (s + Math.imul(O, Q)) | 0),
        (r = (r + Math.imul(O, Y)) | 0),
        (r = (r + Math.imul(P, Q)) | 0),
        (h = (h + Math.imul(P, Y)) | 0),
        (s = (s + Math.imul(T, j)) | 0),
        (r = (r + Math.imul(T, tt)) | 0),
        (r = (r + Math.imul(I, j)) | 0),
        (h = (h + Math.imul(I, tt)) | 0),
        (s = (s + Math.imul(_, rt)) | 0),
        (r = (r + Math.imul(_, it)) | 0),
        (r = (r + Math.imul(A, rt)) | 0),
        (h = (h + Math.imul(A, it)) | 0),
        (s = (s + Math.imul(b, et)) | 0),
        (r = (r + Math.imul(b, nt)) | 0),
        (r = (r + Math.imul(N, et)) | 0),
        (h = (h + Math.imul(N, nt)) | 0),
        (s = (s + Math.imul(p, st)) | 0),
        (r = (r + Math.imul(p, ht)) | 0),
        (r = (r + Math.imul(M, st)) | 0),
        (h = (h + Math.imul(M, ht)) | 0)
      var Ct = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Ct >>> 26)) | 0),
        (Ct &= 67108863),
        (s = Math.imul(C, G)),
        (r = Math.imul(C, H)),
        (r = (r + Math.imul(z, G)) | 0),
        (h = Math.imul(z, H)),
        (s = (s + Math.imul(L, K)) | 0),
        (r = (r + Math.imul(L, W)) | 0),
        (r = (r + Math.imul(Z, K)) | 0),
        (h = (h + Math.imul(Z, W)) | 0),
        (s = (s + Math.imul(q, X)) | 0),
        (r = (r + Math.imul(q, $)) | 0),
        (r = (r + Math.imul(F, X)) | 0),
        (h = (h + Math.imul(F, $)) | 0),
        (s = (s + Math.imul(k, V)) | 0),
        (r = (r + Math.imul(k, J)) | 0),
        (r = (r + Math.imul(D, V)) | 0),
        (h = (h + Math.imul(D, J)) | 0),
        (s = (s + Math.imul(U, Q)) | 0),
        (r = (r + Math.imul(U, Y)) | 0),
        (r = (r + Math.imul(B, Q)) | 0),
        (h = (h + Math.imul(B, Y)) | 0),
        (s = (s + Math.imul(O, j)) | 0),
        (r = (r + Math.imul(O, tt)) | 0),
        (r = (r + Math.imul(P, j)) | 0),
        (h = (h + Math.imul(P, tt)) | 0),
        (s = (s + Math.imul(T, rt)) | 0),
        (r = (r + Math.imul(T, it)) | 0),
        (r = (r + Math.imul(I, rt)) | 0),
        (h = (h + Math.imul(I, it)) | 0),
        (s = (s + Math.imul(_, et)) | 0),
        (r = (r + Math.imul(_, nt)) | 0),
        (r = (r + Math.imul(A, et)) | 0),
        (h = (h + Math.imul(A, nt)) | 0),
        (s = (s + Math.imul(b, st)) | 0),
        (r = (r + Math.imul(b, ht)) | 0),
        (r = (r + Math.imul(N, st)) | 0),
        (h = (h + Math.imul(N, ht)) | 0),
        (s = (s + Math.imul(p, ft)) | 0),
        (r = (r + Math.imul(p, ot)) | 0),
        (r = (r + Math.imul(M, ft)) | 0),
        (h = (h + Math.imul(M, ot)) | 0)
      var zt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (zt >>> 26)) | 0),
        (zt &= 67108863),
        (s = Math.imul(C, K)),
        (r = Math.imul(C, W)),
        (r = (r + Math.imul(z, K)) | 0),
        (h = Math.imul(z, W)),
        (s = (s + Math.imul(L, X)) | 0),
        (r = (r + Math.imul(L, $)) | 0),
        (r = (r + Math.imul(Z, X)) | 0),
        (h = (h + Math.imul(Z, $)) | 0),
        (s = (s + Math.imul(q, V)) | 0),
        (r = (r + Math.imul(q, J)) | 0),
        (r = (r + Math.imul(F, V)) | 0),
        (h = (h + Math.imul(F, J)) | 0),
        (s = (s + Math.imul(k, Q)) | 0),
        (r = (r + Math.imul(k, Y)) | 0),
        (r = (r + Math.imul(D, Q)) | 0),
        (h = (h + Math.imul(D, Y)) | 0),
        (s = (s + Math.imul(U, j)) | 0),
        (r = (r + Math.imul(U, tt)) | 0),
        (r = (r + Math.imul(B, j)) | 0),
        (h = (h + Math.imul(B, tt)) | 0),
        (s = (s + Math.imul(O, rt)) | 0),
        (r = (r + Math.imul(O, it)) | 0),
        (r = (r + Math.imul(P, rt)) | 0),
        (h = (h + Math.imul(P, it)) | 0),
        (s = (s + Math.imul(T, et)) | 0),
        (r = (r + Math.imul(T, nt)) | 0),
        (r = (r + Math.imul(I, et)) | 0),
        (h = (h + Math.imul(I, nt)) | 0),
        (s = (s + Math.imul(_, st)) | 0),
        (r = (r + Math.imul(_, ht)) | 0),
        (r = (r + Math.imul(A, st)) | 0),
        (h = (h + Math.imul(A, ht)) | 0),
        (s = (s + Math.imul(b, ft)) | 0),
        (r = (r + Math.imul(b, ot)) | 0),
        (r = (r + Math.imul(N, ft)) | 0),
        (h = (h + Math.imul(N, ot)) | 0)
      var Gt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Gt >>> 26)) | 0),
        (Gt &= 67108863),
        (s = Math.imul(C, X)),
        (r = Math.imul(C, $)),
        (r = (r + Math.imul(z, X)) | 0),
        (h = Math.imul(z, $)),
        (s = (s + Math.imul(L, V)) | 0),
        (r = (r + Math.imul(L, J)) | 0),
        (r = (r + Math.imul(Z, V)) | 0),
        (h = (h + Math.imul(Z, J)) | 0),
        (s = (s + Math.imul(q, Q)) | 0),
        (r = (r + Math.imul(q, Y)) | 0),
        (r = (r + Math.imul(F, Q)) | 0),
        (h = (h + Math.imul(F, Y)) | 0),
        (s = (s + Math.imul(k, j)) | 0),
        (r = (r + Math.imul(k, tt)) | 0),
        (r = (r + Math.imul(D, j)) | 0),
        (h = (h + Math.imul(D, tt)) | 0),
        (s = (s + Math.imul(U, rt)) | 0),
        (r = (r + Math.imul(U, it)) | 0),
        (r = (r + Math.imul(B, rt)) | 0),
        (h = (h + Math.imul(B, it)) | 0),
        (s = (s + Math.imul(O, et)) | 0),
        (r = (r + Math.imul(O, nt)) | 0),
        (r = (r + Math.imul(P, et)) | 0),
        (h = (h + Math.imul(P, nt)) | 0),
        (s = (s + Math.imul(T, st)) | 0),
        (r = (r + Math.imul(T, ht)) | 0),
        (r = (r + Math.imul(I, st)) | 0),
        (h = (h + Math.imul(I, ht)) | 0),
        (s = (s + Math.imul(_, ft)) | 0),
        (r = (r + Math.imul(_, ot)) | 0),
        (r = (r + Math.imul(A, ft)) | 0),
        (h = (h + Math.imul(A, ot)) | 0)
      var Ht = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Ht >>> 26)) | 0),
        (Ht &= 67108863),
        (s = Math.imul(C, V)),
        (r = Math.imul(C, J)),
        (r = (r + Math.imul(z, V)) | 0),
        (h = Math.imul(z, J)),
        (s = (s + Math.imul(L, Q)) | 0),
        (r = (r + Math.imul(L, Y)) | 0),
        (r = (r + Math.imul(Z, Q)) | 0),
        (h = (h + Math.imul(Z, Y)) | 0),
        (s = (s + Math.imul(q, j)) | 0),
        (r = (r + Math.imul(q, tt)) | 0),
        (r = (r + Math.imul(F, j)) | 0),
        (h = (h + Math.imul(F, tt)) | 0),
        (s = (s + Math.imul(k, rt)) | 0),
        (r = (r + Math.imul(k, it)) | 0),
        (r = (r + Math.imul(D, rt)) | 0),
        (h = (h + Math.imul(D, it)) | 0),
        (s = (s + Math.imul(U, et)) | 0),
        (r = (r + Math.imul(U, nt)) | 0),
        (r = (r + Math.imul(B, et)) | 0),
        (h = (h + Math.imul(B, nt)) | 0),
        (s = (s + Math.imul(O, st)) | 0),
        (r = (r + Math.imul(O, ht)) | 0),
        (r = (r + Math.imul(P, st)) | 0),
        (h = (h + Math.imul(P, ht)) | 0),
        (s = (s + Math.imul(T, ft)) | 0),
        (r = (r + Math.imul(T, ot)) | 0),
        (r = (r + Math.imul(I, ft)) | 0),
        (h = (h + Math.imul(I, ot)) | 0)
      var Kt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Kt >>> 26)) | 0),
        (Kt &= 67108863),
        (s = Math.imul(C, Q)),
        (r = Math.imul(C, Y)),
        (r = (r + Math.imul(z, Q)) | 0),
        (h = Math.imul(z, Y)),
        (s = (s + Math.imul(L, j)) | 0),
        (r = (r + Math.imul(L, tt)) | 0),
        (r = (r + Math.imul(Z, j)) | 0),
        (h = (h + Math.imul(Z, tt)) | 0),
        (s = (s + Math.imul(q, rt)) | 0),
        (r = (r + Math.imul(q, it)) | 0),
        (r = (r + Math.imul(F, rt)) | 0),
        (h = (h + Math.imul(F, it)) | 0),
        (s = (s + Math.imul(k, et)) | 0),
        (r = (r + Math.imul(k, nt)) | 0),
        (r = (r + Math.imul(D, et)) | 0),
        (h = (h + Math.imul(D, nt)) | 0),
        (s = (s + Math.imul(U, st)) | 0),
        (r = (r + Math.imul(U, ht)) | 0),
        (r = (r + Math.imul(B, st)) | 0),
        (h = (h + Math.imul(B, ht)) | 0),
        (s = (s + Math.imul(O, ft)) | 0),
        (r = (r + Math.imul(O, ot)) | 0),
        (r = (r + Math.imul(P, ft)) | 0),
        (h = (h + Math.imul(P, ot)) | 0)
      var Wt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Wt >>> 26)) | 0),
        (Wt &= 67108863),
        (s = Math.imul(C, j)),
        (r = Math.imul(C, tt)),
        (r = (r + Math.imul(z, j)) | 0),
        (h = Math.imul(z, tt)),
        (s = (s + Math.imul(L, rt)) | 0),
        (r = (r + Math.imul(L, it)) | 0),
        (r = (r + Math.imul(Z, rt)) | 0),
        (h = (h + Math.imul(Z, it)) | 0),
        (s = (s + Math.imul(q, et)) | 0),
        (r = (r + Math.imul(q, nt)) | 0),
        (r = (r + Math.imul(F, et)) | 0),
        (h = (h + Math.imul(F, nt)) | 0),
        (s = (s + Math.imul(k, st)) | 0),
        (r = (r + Math.imul(k, ht)) | 0),
        (r = (r + Math.imul(D, st)) | 0),
        (h = (h + Math.imul(D, ht)) | 0),
        (s = (s + Math.imul(U, ft)) | 0),
        (r = (r + Math.imul(U, ot)) | 0),
        (r = (r + Math.imul(B, ft)) | 0),
        (h = (h + Math.imul(B, ot)) | 0)
      var Xt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Xt >>> 26)) | 0),
        (Xt &= 67108863),
        (s = Math.imul(C, rt)),
        (r = Math.imul(C, it)),
        (r = (r + Math.imul(z, rt)) | 0),
        (h = Math.imul(z, it)),
        (s = (s + Math.imul(L, et)) | 0),
        (r = (r + Math.imul(L, nt)) | 0),
        (r = (r + Math.imul(Z, et)) | 0),
        (h = (h + Math.imul(Z, nt)) | 0),
        (s = (s + Math.imul(q, st)) | 0),
        (r = (r + Math.imul(q, ht)) | 0),
        (r = (r + Math.imul(F, st)) | 0),
        (h = (h + Math.imul(F, ht)) | 0),
        (s = (s + Math.imul(k, ft)) | 0),
        (r = (r + Math.imul(k, ot)) | 0),
        (r = (r + Math.imul(D, ft)) | 0),
        (h = (h + Math.imul(D, ot)) | 0)
      var $t = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + ($t >>> 26)) | 0),
        ($t &= 67108863),
        (s = Math.imul(C, et)),
        (r = Math.imul(C, nt)),
        (r = (r + Math.imul(z, et)) | 0),
        (h = Math.imul(z, nt)),
        (s = (s + Math.imul(L, st)) | 0),
        (r = (r + Math.imul(L, ht)) | 0),
        (r = (r + Math.imul(Z, st)) | 0),
        (h = (h + Math.imul(Z, ht)) | 0),
        (s = (s + Math.imul(q, ft)) | 0),
        (r = (r + Math.imul(q, ot)) | 0),
        (r = (r + Math.imul(F, ft)) | 0),
        (h = (h + Math.imul(F, ot)) | 0)
      var Vt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Vt >>> 26)) | 0),
        (Vt &= 67108863),
        (s = Math.imul(C, st)),
        (r = Math.imul(C, ht)),
        (r = (r + Math.imul(z, st)) | 0),
        (h = Math.imul(z, ht)),
        (s = (s + Math.imul(L, ft)) | 0),
        (r = (r + Math.imul(L, ot)) | 0),
        (r = (r + Math.imul(Z, ft)) | 0),
        (h = (h + Math.imul(Z, ot)) | 0)
      var Jt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      ;(v = (((h + (r >>> 13)) | 0) + (Jt >>> 26)) | 0),
        (Jt &= 67108863),
        (s = Math.imul(C, ft)),
        (r = Math.imul(C, ot)),
        (r = (r + Math.imul(z, ft)) | 0),
        (h = Math.imul(z, ot))
      var Qt = (((v + s) | 0) + ((r & 8191) << 13)) | 0
      return (
        (v = (((h + (r >>> 13)) | 0) + (Qt >>> 26)) | 0),
        (Qt &= 67108863),
        (l[0] = Ut),
        (l[1] = Bt),
        (l[2] = kt),
        (l[3] = Dt),
        (l[4] = qt),
        (l[5] = Ft),
        (l[6] = Lt),
        (l[7] = Zt),
        (l[8] = Ct),
        (l[9] = zt),
        (l[10] = Gt),
        (l[11] = Ht),
        (l[12] = Kt),
        (l[13] = Wt),
        (l[14] = Xt),
        (l[15] = $t),
        (l[16] = Vt),
        (l[17] = Jt),
        (l[18] = Qt),
        v !== 0 && ((l[19] = v), e.length++),
        e
      )
    }
    Math.imul || (sr = nr)
    function Zr(u, t, i) {
      ;(i.negative = t.negative ^ u.negative), (i.length = u.length + t.length)
      for (var e = 0, n = 0, o = 0; o < i.length - 1; o++) {
        var l = n
        n = 0
        for (
          var v = e & 67108863,
            s = Math.min(o, t.length - 1),
            r = Math.max(0, o - u.length + 1);
          r <= s;
          r++
        ) {
          var h = o - r,
            g = u.words[h] | 0,
            p = t.words[r] | 0,
            M = g * p,
            w = M & 67108863
          ;(l = (l + ((M / 67108864) | 0)) | 0),
            (w = (w + v) | 0),
            (v = w & 67108863),
            (l = (l + (w >>> 26)) | 0),
            (n += l >>> 26),
            (l &= 67108863)
        }
        ;(i.words[o] = v), (e = l), (l = n)
      }
      return e !== 0 ? (i.words[o] = e) : i.length--, i.strip()
    }
    function hr(u, t, i) {
      var e = new pt()
      return e.mulp(u, t, i)
    }
    m.prototype.mulTo = function (t, i) {
      var e,
        n = this.length + t.length
      return (
        this.length === 10 && t.length === 10
          ? (e = sr(this, t, i))
          : n < 63
          ? (e = nr(this, t, i))
          : n < 1024
          ? (e = Zr(this, t, i))
          : (e = hr(this, t, i)),
        e
      )
    }
    function pt(u, t) {
      ;(this.x = u), (this.y = t)
    }
    ;(pt.prototype.makeRBT = function (t) {
      for (
        var i = new Array(t), e = m.prototype._countBits(t) - 1, n = 0;
        n < t;
        n++
      )
        i[n] = this.revBin(n, e, t)
      return i
    }),
      (pt.prototype.revBin = function (t, i, e) {
        if (t === 0 || t === e - 1) return t
        for (var n = 0, o = 0; o < i; o++)
          (n |= (t & 1) << (i - o - 1)), (t >>= 1)
        return n
      }),
      (pt.prototype.permute = function (t, i, e, n, o, l) {
        for (var v = 0; v < l; v++) (n[v] = i[t[v]]), (o[v] = e[t[v]])
      }),
      (pt.prototype.transform = function (t, i, e, n, o, l) {
        this.permute(l, t, i, e, n, o)
        for (var v = 1; v < o; v <<= 1)
          for (
            var s = v << 1,
              r = Math.cos((2 * Math.PI) / s),
              h = Math.sin((2 * Math.PI) / s),
              g = 0;
            g < o;
            g += s
          )
            for (var p = r, M = h, w = 0; w < v; w++) {
              var b = e[g + w],
                N = n[g + w],
                yt = e[g + w + v],
                _ = n[g + w + v],
                A = p * yt - M * _
              ;(_ = p * _ + M * yt),
                (yt = A),
                (e[g + w] = b + yt),
                (n[g + w] = N + _),
                (e[g + w + v] = b - yt),
                (n[g + w + v] = N - _),
                w !== s && ((A = r * p - h * M), (M = r * M + h * p), (p = A))
            }
      }),
      (pt.prototype.guessLen13b = function (t, i) {
        var e = Math.max(i, t) | 1,
          n = e & 1,
          o = 0
        for (e = (e / 2) | 0; e; e = e >>> 1) o++
        return 1 << (o + 1 + n)
      }),
      (pt.prototype.conjugate = function (t, i, e) {
        if (!(e <= 1))
          for (var n = 0; n < e / 2; n++) {
            var o = t[n]
            ;(t[n] = t[e - n - 1]),
              (t[e - n - 1] = o),
              (o = i[n]),
              (i[n] = -i[e - n - 1]),
              (i[e - n - 1] = -o)
          }
      }),
      (pt.prototype.normalize13b = function (t, i) {
        for (var e = 0, n = 0; n < i / 2; n++) {
          var o =
            Math.round(t[2 * n + 1] / i) * 8192 + Math.round(t[2 * n] / i) + e
          ;(t[n] = o & 67108863),
            o < 67108864 ? (e = 0) : (e = (o / 67108864) | 0)
        }
        return t
      }),
      (pt.prototype.convert13b = function (t, i, e, n) {
        for (var o = 0, l = 0; l < i; l++)
          (o = o + (t[l] | 0)),
            (e[2 * l] = o & 8191),
            (o = o >>> 13),
            (e[2 * l + 1] = o & 8191),
            (o = o >>> 13)
        for (l = 2 * i; l < n; ++l) e[l] = 0
        c(o === 0), c((o & ~8191) == 0)
      }),
      (pt.prototype.stub = function (t) {
        for (var i = new Array(t), e = 0; e < t; e++) i[e] = 0
        return i
      }),
      (pt.prototype.mulp = function (t, i, e) {
        var n = 2 * this.guessLen13b(t.length, i.length),
          o = this.makeRBT(n),
          l = this.stub(n),
          v = new Array(n),
          s = new Array(n),
          r = new Array(n),
          h = new Array(n),
          g = new Array(n),
          p = new Array(n),
          M = e.words
        ;(M.length = n),
          this.convert13b(t.words, t.length, v, n),
          this.convert13b(i.words, i.length, h, n),
          this.transform(v, l, s, r, n, o),
          this.transform(h, l, g, p, n, o)
        for (var w = 0; w < n; w++) {
          var b = s[w] * g[w] - r[w] * p[w]
          ;(r[w] = s[w] * p[w] + r[w] * g[w]), (s[w] = b)
        }
        return (
          this.conjugate(s, r, n),
          this.transform(s, r, M, l, n, o),
          this.conjugate(M, l, n),
          this.normalize13b(M, n),
          (e.negative = t.negative ^ i.negative),
          (e.length = t.length + i.length),
          e.strip()
        )
      }),
      (m.prototype.mul = function (t) {
        var i = new m(null)
        return (i.words = new Array(this.length + t.length)), this.mulTo(t, i)
      }),
      (m.prototype.mulf = function (t) {
        var i = new m(null)
        return (i.words = new Array(this.length + t.length)), hr(this, t, i)
      }),
      (m.prototype.imul = function (t) {
        return this.clone().mulTo(t, this)
      }),
      (m.prototype.imuln = function (t) {
        c(typeof t == 'number'), c(t < 67108864)
        for (var i = 0, e = 0; e < this.length; e++) {
          var n = (this.words[e] | 0) * t,
            o = (n & 67108863) + (i & 67108863)
          ;(i >>= 26),
            (i += (n / 67108864) | 0),
            (i += o >>> 26),
            (this.words[e] = o & 67108863)
        }
        return i !== 0 && ((this.words[e] = i), this.length++), this
      }),
      (m.prototype.muln = function (t) {
        return this.clone().imuln(t)
      }),
      (m.prototype.sqr = function () {
        return this.mul(this)
      }),
      (m.prototype.isqr = function () {
        return this.imul(this.clone())
      }),
      (m.prototype.pow = function (t) {
        var i = Lr(t)
        if (i.length === 0) return new m(1)
        for (var e = this, n = 0; n < i.length && i[n] === 0; n++, e = e.sqr());
        if (++n < i.length)
          for (var o = e.sqr(); n < i.length; n++, o = o.sqr())
            i[n] !== 0 && (e = e.mul(o))
        return e
      }),
      (m.prototype.iushln = function (t) {
        c(typeof t == 'number' && t >= 0)
        var i = t % 26,
          e = (t - i) / 26,
          n = (67108863 >>> (26 - i)) << (26 - i),
          o
        if (i !== 0) {
          var l = 0
          for (o = 0; o < this.length; o++) {
            var v = this.words[o] & n,
              s = ((this.words[o] | 0) - v) << i
            ;(this.words[o] = s | l), (l = v >>> (26 - i))
          }
          l && ((this.words[o] = l), this.length++)
        }
        if (e !== 0) {
          for (o = this.length - 1; o >= 0; o--)
            this.words[o + e] = this.words[o]
          for (o = 0; o < e; o++) this.words[o] = 0
          this.length += e
        }
        return this.strip()
      }),
      (m.prototype.ishln = function (t) {
        return c(this.negative === 0), this.iushln(t)
      }),
      (m.prototype.iushrn = function (t, i, e) {
        c(typeof t == 'number' && t >= 0)
        var n
        i ? (n = (i - (i % 26)) / 26) : (n = 0)
        var o = t % 26,
          l = Math.min((t - o) / 26, this.length),
          v = 67108863 ^ ((67108863 >>> o) << o),
          s = e
        if (((n -= l), (n = Math.max(0, n)), s)) {
          for (var r = 0; r < l; r++) s.words[r] = this.words[r]
          s.length = l
        }
        if (l !== 0)
          if (this.length > l)
            for (this.length -= l, r = 0; r < this.length; r++)
              this.words[r] = this.words[r + l]
          else (this.words[0] = 0), (this.length = 1)
        var h = 0
        for (r = this.length - 1; r >= 0 && (h !== 0 || r >= n); r--) {
          var g = this.words[r] | 0
          ;(this.words[r] = (h << (26 - o)) | (g >>> o)), (h = g & v)
        }
        return (
          s && h !== 0 && (s.words[s.length++] = h),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this.strip()
        )
      }),
      (m.prototype.ishrn = function (t, i, e) {
        return c(this.negative === 0), this.iushrn(t, i, e)
      }),
      (m.prototype.shln = function (t) {
        return this.clone().ishln(t)
      }),
      (m.prototype.ushln = function (t) {
        return this.clone().iushln(t)
      }),
      (m.prototype.shrn = function (t) {
        return this.clone().ishrn(t)
      }),
      (m.prototype.ushrn = function (t) {
        return this.clone().iushrn(t)
      }),
      (m.prototype.testn = function (t) {
        c(typeof t == 'number' && t >= 0)
        var i = t % 26,
          e = (t - i) / 26,
          n = 1 << i
        if (this.length <= e) return !1
        var o = this.words[e]
        return !!(o & n)
      }),
      (m.prototype.imaskn = function (t) {
        c(typeof t == 'number' && t >= 0)
        var i = t % 26,
          e = (t - i) / 26
        if (
          (c(this.negative === 0, 'imaskn works only with positive numbers'),
          this.length <= e)
        )
          return this
        if (
          (i !== 0 && e++, (this.length = Math.min(e, this.length)), i !== 0)
        ) {
          var n = 67108863 ^ ((67108863 >>> i) << i)
          this.words[this.length - 1] &= n
        }
        return this.strip()
      }),
      (m.prototype.maskn = function (t) {
        return this.clone().imaskn(t)
      }),
      (m.prototype.iaddn = function (t) {
        return (
          c(typeof t == 'number'),
          c(t < 67108864),
          t < 0
            ? this.isubn(-t)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) < t
              ? ((this.words[0] = t - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
            : this._iaddn(t)
        )
      }),
      (m.prototype._iaddn = function (t) {
        this.words[0] += t
        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++)
          (this.words[i] -= 67108864),
            i === this.length - 1
              ? (this.words[i + 1] = 1)
              : this.words[i + 1]++
        return (this.length = Math.max(this.length, i + 1)), this
      }),
      (m.prototype.isubn = function (t) {
        if ((c(typeof t == 'number'), c(t < 67108864), t < 0))
          return this.iaddn(-t)
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(t), (this.negative = 1), this
        if (((this.words[0] -= t), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1)
        else
          for (var i = 0; i < this.length && this.words[i] < 0; i++)
            (this.words[i] += 67108864), (this.words[i + 1] -= 1)
        return this.strip()
      }),
      (m.prototype.addn = function (t) {
        return this.clone().iaddn(t)
      }),
      (m.prototype.subn = function (t) {
        return this.clone().isubn(t)
      }),
      (m.prototype.iabs = function () {
        return (this.negative = 0), this
      }),
      (m.prototype.abs = function () {
        return this.clone().iabs()
      }),
      (m.prototype._ishlnsubmul = function (t, i, e) {
        var n = t.length + e,
          o
        this._expand(n)
        var l,
          v = 0
        for (o = 0; o < t.length; o++) {
          l = (this.words[o + e] | 0) + v
          var s = (t.words[o] | 0) * i
          ;(l -= s & 67108863),
            (v = (l >> 26) - ((s / 67108864) | 0)),
            (this.words[o + e] = l & 67108863)
        }
        for (; o < this.length - e; o++)
          (l = (this.words[o + e] | 0) + v),
            (v = l >> 26),
            (this.words[o + e] = l & 67108863)
        if (v === 0) return this.strip()
        for (c(v === -1), v = 0, o = 0; o < this.length; o++)
          (l = -(this.words[o] | 0) + v),
            (v = l >> 26),
            (this.words[o] = l & 67108863)
        return (this.negative = 1), this.strip()
      }),
      (m.prototype._wordDiv = function (t, i) {
        var e = this.length - t.length,
          n = this.clone(),
          o = t,
          l = o.words[o.length - 1] | 0,
          v = this._countBits(l)
        ;(e = 26 - v),
          e !== 0 &&
            ((o = o.ushln(e)), n.iushln(e), (l = o.words[o.length - 1] | 0))
        var s = n.length - o.length,
          r
        if (i !== 'mod') {
          ;(r = new m(null)),
            (r.length = s + 1),
            (r.words = new Array(r.length))
          for (var h = 0; h < r.length; h++) r.words[h] = 0
        }
        var g = n.clone()._ishlnsubmul(o, 1, s)
        g.negative === 0 && ((n = g), r && (r.words[s] = 1))
        for (var p = s - 1; p >= 0; p--) {
          var M =
            (n.words[o.length + p] | 0) * 67108864 +
            (n.words[o.length + p - 1] | 0)
          for (
            M = Math.min((M / l) | 0, 67108863), n._ishlnsubmul(o, M, p);
            n.negative !== 0;

          )
            M--,
              (n.negative = 0),
              n._ishlnsubmul(o, 1, p),
              n.isZero() || (n.negative ^= 1)
          r && (r.words[p] = M)
        }
        return (
          r && r.strip(),
          n.strip(),
          i !== 'div' && e !== 0 && n.iushrn(e),
          { div: r || null, mod: n }
        )
      }),
      (m.prototype.divmod = function (t, i, e) {
        if ((c(!t.isZero()), this.isZero()))
          return { div: new m(0), mod: new m(0) }
        var n, o, l
        return this.negative !== 0 && t.negative === 0
          ? ((l = this.neg().divmod(t, i)),
            i !== 'mod' && (n = l.div.neg()),
            i !== 'div' &&
              ((o = l.mod.neg()), e && o.negative !== 0 && o.iadd(t)),
            { div: n, mod: o })
          : this.negative === 0 && t.negative !== 0
          ? ((l = this.divmod(t.neg(), i)),
            i !== 'mod' && (n = l.div.neg()),
            { div: n, mod: l.mod })
          : (this.negative & t.negative) != 0
          ? ((l = this.neg().divmod(t.neg(), i)),
            i !== 'div' &&
              ((o = l.mod.neg()), e && o.negative !== 0 && o.isub(t)),
            { div: l.div, mod: o })
          : t.length > this.length || this.cmp(t) < 0
          ? { div: new m(0), mod: this }
          : t.length === 1
          ? i === 'div'
            ? { div: this.divn(t.words[0]), mod: null }
            : i === 'mod'
            ? { div: null, mod: new m(this.modn(t.words[0])) }
            : { div: this.divn(t.words[0]), mod: new m(this.modn(t.words[0])) }
          : this._wordDiv(t, i)
      }),
      (m.prototype.div = function (t) {
        return this.divmod(t, 'div', !1).div
      }),
      (m.prototype.mod = function (t) {
        return this.divmod(t, 'mod', !1).mod
      }),
      (m.prototype.umod = function (t) {
        return this.divmod(t, 'mod', !0).mod
      }),
      (m.prototype.divRound = function (t) {
        var i = this.divmod(t)
        if (i.mod.isZero()) return i.div
        var e = i.div.negative !== 0 ? i.mod.isub(t) : i.mod,
          n = t.ushrn(1),
          o = t.andln(1),
          l = e.cmp(n)
        return l < 0 || (o === 1 && l === 0)
          ? i.div
          : i.div.negative !== 0
          ? i.div.isubn(1)
          : i.div.iaddn(1)
      }),
      (m.prototype.modn = function (t) {
        c(t <= 67108863)
        for (var i = (1 << 26) % t, e = 0, n = this.length - 1; n >= 0; n--)
          e = (i * e + (this.words[n] | 0)) % t
        return e
      }),
      (m.prototype.idivn = function (t) {
        c(t <= 67108863)
        for (var i = 0, e = this.length - 1; e >= 0; e--) {
          var n = (this.words[e] | 0) + i * 67108864
          ;(this.words[e] = (n / t) | 0), (i = n % t)
        }
        return this.strip()
      }),
      (m.prototype.divn = function (t) {
        return this.clone().idivn(t)
      }),
      (m.prototype.egcd = function (t) {
        c(t.negative === 0), c(!t.isZero())
        var i = this,
          e = t.clone()
        i.negative !== 0 ? (i = i.umod(t)) : (i = i.clone())
        for (
          var n = new m(1), o = new m(0), l = new m(0), v = new m(1), s = 0;
          i.isEven() && e.isEven();

        )
          i.iushrn(1), e.iushrn(1), ++s
        for (var r = e.clone(), h = i.clone(); !i.isZero(); ) {
          for (var g = 0, p = 1; (i.words[0] & p) == 0 && g < 26; ++g, p <<= 1);
          if (g > 0)
            for (i.iushrn(g); g-- > 0; )
              (n.isOdd() || o.isOdd()) && (n.iadd(r), o.isub(h)),
                n.iushrn(1),
                o.iushrn(1)
          for (var M = 0, w = 1; (e.words[0] & w) == 0 && M < 26; ++M, w <<= 1);
          if (M > 0)
            for (e.iushrn(M); M-- > 0; )
              (l.isOdd() || v.isOdd()) && (l.iadd(r), v.isub(h)),
                l.iushrn(1),
                v.iushrn(1)
          i.cmp(e) >= 0
            ? (i.isub(e), n.isub(l), o.isub(v))
            : (e.isub(i), l.isub(n), v.isub(o))
        }
        return { a: l, b: v, gcd: e.iushln(s) }
      }),
      (m.prototype._invmp = function (t) {
        c(t.negative === 0), c(!t.isZero())
        var i = this,
          e = t.clone()
        i.negative !== 0 ? (i = i.umod(t)) : (i = i.clone())
        for (
          var n = new m(1), o = new m(0), l = e.clone();
          i.cmpn(1) > 0 && e.cmpn(1) > 0;

        ) {
          for (var v = 0, s = 1; (i.words[0] & s) == 0 && v < 26; ++v, s <<= 1);
          if (v > 0)
            for (i.iushrn(v); v-- > 0; ) n.isOdd() && n.iadd(l), n.iushrn(1)
          for (var r = 0, h = 1; (e.words[0] & h) == 0 && r < 26; ++r, h <<= 1);
          if (r > 0)
            for (e.iushrn(r); r-- > 0; ) o.isOdd() && o.iadd(l), o.iushrn(1)
          i.cmp(e) >= 0 ? (i.isub(e), n.isub(o)) : (e.isub(i), o.isub(n))
        }
        var g
        return (
          i.cmpn(1) === 0 ? (g = n) : (g = o), g.cmpn(0) < 0 && g.iadd(t), g
        )
      }),
      (m.prototype.gcd = function (t) {
        if (this.isZero()) return t.abs()
        if (t.isZero()) return this.abs()
        var i = this.clone(),
          e = t.clone()
        ;(i.negative = 0), (e.negative = 0)
        for (var n = 0; i.isEven() && e.isEven(); n++) i.iushrn(1), e.iushrn(1)
        do {
          for (; i.isEven(); ) i.iushrn(1)
          for (; e.isEven(); ) e.iushrn(1)
          var o = i.cmp(e)
          if (o < 0) {
            var l = i
            ;(i = e), (e = l)
          } else if (o === 0 || e.cmpn(1) === 0) break
          i.isub(e)
        } while (!0)
        return e.iushln(n)
      }),
      (m.prototype.invm = function (t) {
        return this.egcd(t).a.umod(t)
      }),
      (m.prototype.isEven = function () {
        return (this.words[0] & 1) == 0
      }),
      (m.prototype.isOdd = function () {
        return (this.words[0] & 1) == 1
      }),
      (m.prototype.andln = function (t) {
        return this.words[0] & t
      }),
      (m.prototype.bincn = function (t) {
        c(typeof t == 'number')
        var i = t % 26,
          e = (t - i) / 26,
          n = 1 << i
        if (this.length <= e)
          return this._expand(e + 1), (this.words[e] |= n), this
        for (var o = n, l = e; o !== 0 && l < this.length; l++) {
          var v = this.words[l] | 0
          ;(v += o), (o = v >>> 26), (v &= 67108863), (this.words[l] = v)
        }
        return o !== 0 && ((this.words[l] = o), this.length++), this
      }),
      (m.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0
      }),
      (m.prototype.cmpn = function (t) {
        var i = t < 0
        if (this.negative !== 0 && !i) return -1
        if (this.negative === 0 && i) return 1
        this.strip()
        var e
        if (this.length > 1) e = 1
        else {
          i && (t = -t), c(t <= 67108863, 'Number is too big')
          var n = this.words[0] | 0
          e = n === t ? 0 : n < t ? -1 : 1
        }
        return this.negative !== 0 ? -e | 0 : e
      }),
      (m.prototype.cmp = function (t) {
        if (this.negative !== 0 && t.negative === 0) return -1
        if (this.negative === 0 && t.negative !== 0) return 1
        var i = this.ucmp(t)
        return this.negative !== 0 ? -i | 0 : i
      }),
      (m.prototype.ucmp = function (t) {
        if (this.length > t.length) return 1
        if (this.length < t.length) return -1
        for (var i = 0, e = this.length - 1; e >= 0; e--) {
          var n = this.words[e] | 0,
            o = t.words[e] | 0
          if (n !== o) {
            n < o ? (i = -1) : n > o && (i = 1)
            break
          }
        }
        return i
      }),
      (m.prototype.gtn = function (t) {
        return this.cmpn(t) === 1
      }),
      (m.prototype.gt = function (t) {
        return this.cmp(t) === 1
      }),
      (m.prototype.gten = function (t) {
        return this.cmpn(t) >= 0
      }),
      (m.prototype.gte = function (t) {
        return this.cmp(t) >= 0
      }),
      (m.prototype.ltn = function (t) {
        return this.cmpn(t) === -1
      }),
      (m.prototype.lt = function (t) {
        return this.cmp(t) === -1
      }),
      (m.prototype.lten = function (t) {
        return this.cmpn(t) <= 0
      }),
      (m.prototype.lte = function (t) {
        return this.cmp(t) <= 0
      }),
      (m.prototype.eqn = function (t) {
        return this.cmpn(t) === 0
      }),
      (m.prototype.eq = function (t) {
        return this.cmp(t) === 0
      }),
      (m.red = function (t) {
        return new S(t)
      }),
      (m.prototype.toRed = function (t) {
        return (
          c(!this.red, 'Already a number in reduction context'),
          c(this.negative === 0, 'red works only with positives'),
          t.convertTo(this)._forceRed(t)
        )
      }),
      (m.prototype.fromRed = function () {
        return (
          c(this.red, 'fromRed works only with numbers in reduction context'),
          this.red.convertFrom(this)
        )
      }),
      (m.prototype._forceRed = function (t) {
        return (this.red = t), this
      }),
      (m.prototype.forceRed = function (t) {
        return (
          c(!this.red, 'Already a number in reduction context'),
          this._forceRed(t)
        )
      }),
      (m.prototype.redAdd = function (t) {
        return (
          c(this.red, 'redAdd works only with red numbers'),
          this.red.add(this, t)
        )
      }),
      (m.prototype.redIAdd = function (t) {
        return (
          c(this.red, 'redIAdd works only with red numbers'),
          this.red.iadd(this, t)
        )
      }),
      (m.prototype.redSub = function (t) {
        return (
          c(this.red, 'redSub works only with red numbers'),
          this.red.sub(this, t)
        )
      }),
      (m.prototype.redISub = function (t) {
        return (
          c(this.red, 'redISub works only with red numbers'),
          this.red.isub(this, t)
        )
      }),
      (m.prototype.redShl = function (t) {
        return (
          c(this.red, 'redShl works only with red numbers'),
          this.red.shl(this, t)
        )
      }),
      (m.prototype.redMul = function (t) {
        return (
          c(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, t),
          this.red.mul(this, t)
        )
      }),
      (m.prototype.redIMul = function (t) {
        return (
          c(this.red, 'redMul works only with red numbers'),
          this.red._verify2(this, t),
          this.red.imul(this, t)
        )
      }),
      (m.prototype.redSqr = function () {
        return (
          c(this.red, 'redSqr works only with red numbers'),
          this.red._verify1(this),
          this.red.sqr(this)
        )
      }),
      (m.prototype.redISqr = function () {
        return (
          c(this.red, 'redISqr works only with red numbers'),
          this.red._verify1(this),
          this.red.isqr(this)
        )
      }),
      (m.prototype.redSqrt = function () {
        return (
          c(this.red, 'redSqrt works only with red numbers'),
          this.red._verify1(this),
          this.red.sqrt(this)
        )
      }),
      (m.prototype.redInvm = function () {
        return (
          c(this.red, 'redInvm works only with red numbers'),
          this.red._verify1(this),
          this.red.invm(this)
        )
      }),
      (m.prototype.redNeg = function () {
        return (
          c(this.red, 'redNeg works only with red numbers'),
          this.red._verify1(this),
          this.red.neg(this)
        )
      }),
      (m.prototype.redPow = function (t) {
        return (
          c(this.red && !t.red, 'redPow(normalNum)'),
          this.red._verify1(this),
          this.red.pow(this, t)
        )
      })
    var Ot = { k256: null, p224: null, p192: null, p25519: null }
    function dt(u, t) {
      ;(this.name = u),
        (this.p = new m(t, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new m(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp())
    }
    ;(dt.prototype._tmp = function () {
      var t = new m(null)
      return (t.words = new Array(Math.ceil(this.n / 13))), t
    }),
      (dt.prototype.ireduce = function (t) {
        var i = t,
          e
        do
          this.split(i, this.tmp),
            (i = this.imulK(i)),
            (i = i.iadd(this.tmp)),
            (e = i.bitLength())
        while (e > this.n)
        var n = e < this.n ? -1 : i.ucmp(this.p)
        return (
          n === 0
            ? ((i.words[0] = 0), (i.length = 1))
            : n > 0
            ? i.isub(this.p)
            : i.strip !== void 0
            ? i.strip()
            : i._strip(),
          i
        )
      }),
      (dt.prototype.split = function (t, i) {
        t.iushrn(this.n, 0, i)
      }),
      (dt.prototype.imulK = function (t) {
        return t.imul(this.k)
      })
    function St() {
      dt.call(
        this,
        'k256',
        'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
      )
    }
    y(St, dt),
      (St.prototype.split = function (t, i) {
        for (var e = 4194303, n = Math.min(t.length, 9), o = 0; o < n; o++)
          i.words[o] = t.words[o]
        if (((i.length = n), t.length <= 9)) {
          ;(t.words[0] = 0), (t.length = 1)
          return
        }
        var l = t.words[9]
        for (i.words[i.length++] = l & e, o = 10; o < t.length; o++) {
          var v = t.words[o] | 0
          ;(t.words[o - 10] = ((v & e) << 4) | (l >>> 22)), (l = v)
        }
        ;(l >>>= 22),
          (t.words[o - 10] = l),
          l === 0 && t.length > 10 ? (t.length -= 10) : (t.length -= 9)
      }),
      (St.prototype.imulK = function (t) {
        ;(t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2)
        for (var i = 0, e = 0; e < t.length; e++) {
          var n = t.words[e] | 0
          ;(i += n * 977),
            (t.words[e] = i & 67108863),
            (i = n * 64 + ((i / 67108864) | 0))
        }
        return (
          t.words[t.length - 1] === 0 &&
            (t.length--, t.words[t.length - 1] === 0 && t.length--),
          t
        )
      })
    function fr() {
      dt.call(
        this,
        'p224',
        'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
      )
    }
    y(fr, dt)
    function or() {
      dt.call(
        this,
        'p192',
        'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
      )
    }
    y(or, dt)
    function Pt() {
      dt.call(
        this,
        '25519',
        '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
      )
    }
    y(Pt, dt),
      (Pt.prototype.imulK = function (t) {
        for (var i = 0, e = 0; e < t.length; e++) {
          var n = (t.words[e] | 0) * 19 + i,
            o = n & 67108863
          ;(n >>>= 26), (t.words[e] = o), (i = n)
        }
        return i !== 0 && (t.words[t.length++] = i), t
      }),
      (m._prime = function (t) {
        if (Ot[t]) return Ot[t]
        var i
        if (t === 'k256') i = new St()
        else if (t === 'p224') i = new fr()
        else if (t === 'p192') i = new or()
        else if (t === 'p25519') i = new Pt()
        else throw new Error('Unknown prime ' + t)
        return (Ot[t] = i), i
      })
    function S(u) {
      if (typeof u == 'string') {
        var t = m._prime(u)
        ;(this.m = t.p), (this.prime = t)
      } else
        c(u.gtn(1), 'modulus must be greater than 1'),
          (this.m = u),
          (this.prime = null)
    }
    ;(S.prototype._verify1 = function (t) {
      c(t.negative === 0, 'red works only with positives'),
        c(t.red, 'red works only with red numbers')
    }),
      (S.prototype._verify2 = function (t, i) {
        c((t.negative | i.negative) == 0, 'red works only with positives'),
          c(t.red && t.red === i.red, 'red works only with red numbers')
      }),
      (S.prototype.imod = function (t) {
        return this.prime
          ? this.prime.ireduce(t)._forceRed(this)
          : t.umod(this.m)._forceRed(this)
      }),
      (S.prototype.neg = function (t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
      }),
      (S.prototype.add = function (t, i) {
        this._verify2(t, i)
        var e = t.add(i)
        return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
      }),
      (S.prototype.iadd = function (t, i) {
        this._verify2(t, i)
        var e = t.iadd(i)
        return e.cmp(this.m) >= 0 && e.isub(this.m), e
      }),
      (S.prototype.sub = function (t, i) {
        this._verify2(t, i)
        var e = t.sub(i)
        return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
      }),
      (S.prototype.isub = function (t, i) {
        this._verify2(t, i)
        var e = t.isub(i)
        return e.cmpn(0) < 0 && e.iadd(this.m), e
      }),
      (S.prototype.shl = function (t, i) {
        return this._verify1(t), this.imod(t.ushln(i))
      }),
      (S.prototype.imul = function (t, i) {
        return this._verify2(t, i), this.imod(t.imul(i))
      }),
      (S.prototype.mul = function (t, i) {
        return this._verify2(t, i), this.imod(t.mul(i))
      }),
      (S.prototype.isqr = function (t) {
        return this.imul(t, t.clone())
      }),
      (S.prototype.sqr = function (t) {
        return this.mul(t, t)
      }),
      (S.prototype.sqrt = function (t) {
        if (t.isZero()) return t.clone()
        var i = this.m.andln(3)
        if ((c(i % 2 == 1), i === 3)) {
          var e = this.m.add(new m(1)).iushrn(2)
          return this.pow(t, e)
        }
        for (var n = this.m.subn(1), o = 0; !n.isZero() && n.andln(1) === 0; )
          o++, n.iushrn(1)
        c(!n.isZero())
        var l = new m(1).toRed(this),
          v = l.redNeg(),
          s = this.m.subn(1).iushrn(1),
          r = this.m.bitLength()
        for (r = new m(2 * r * r).toRed(this); this.pow(r, s).cmp(v) !== 0; )
          r.redIAdd(v)
        for (
          var h = this.pow(r, n),
            g = this.pow(t, n.addn(1).iushrn(1)),
            p = this.pow(t, n),
            M = o;
          p.cmp(l) !== 0;

        ) {
          for (var w = p, b = 0; w.cmp(l) !== 0; b++) w = w.redSqr()
          c(b < M)
          var N = this.pow(h, new m(1).iushln(M - b - 1))
          ;(g = g.redMul(N)), (h = N.redSqr()), (p = p.redMul(h)), (M = b)
        }
        return g
      }),
      (S.prototype.invm = function (t) {
        var i = t._invmp(this.m)
        return i.negative !== 0
          ? ((i.negative = 0), this.imod(i).redNeg())
          : this.imod(i)
      }),
      (S.prototype.pow = function (t, i) {
        if (i.isZero()) return new m(1).toRed(this)
        if (i.cmpn(1) === 0) return t.clone()
        var e = 4,
          n = new Array(1 << e)
        ;(n[0] = new m(1).toRed(this)), (n[1] = t)
        for (var o = 2; o < n.length; o++) n[o] = this.mul(n[o - 1], t)
        var l = n[0],
          v = 0,
          s = 0,
          r = i.bitLength() % 26
        for (r === 0 && (r = 26), o = i.length - 1; o >= 0; o--) {
          for (var h = i.words[o], g = r - 1; g >= 0; g--) {
            var p = (h >> g) & 1
            if ((l !== n[0] && (l = this.sqr(l)), p === 0 && v === 0)) {
              s = 0
              continue
            }
            ;(v <<= 1),
              (v |= p),
              s++,
              !(s !== e && (o !== 0 || g !== 0)) &&
                ((l = this.mul(l, n[v])), (s = 0), (v = 0))
          }
          r = 26
        }
        return l
      }),
      (S.prototype.convertTo = function (t) {
        var i = t.umod(this.m)
        return i === t ? i.clone() : i
      }),
      (S.prototype.convertFrom = function (t) {
        var i = t.clone()
        return (i.red = null), i
      }),
      (m.mont = function (t) {
        return new Et(t)
      })
    function Et(u) {
      S.call(this, u),
        (this.shift = this.m.bitLength()),
        this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new m(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv))
    }
    y(Et, S),
      (Et.prototype.convertTo = function (t) {
        return this.imod(t.ushln(this.shift))
      }),
      (Et.prototype.convertFrom = function (t) {
        var i = this.imod(t.mul(this.rinv))
        return (i.red = null), i
      }),
      (Et.prototype.imul = function (t, i) {
        if (t.isZero() || i.isZero()) return (t.words[0] = 0), (t.length = 1), t
        var e = t.imul(i),
          n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          o = e.isub(n).iushrn(this.shift),
          l = o
        return (
          o.cmp(this.m) >= 0
            ? (l = o.isub(this.m))
            : o.cmpn(0) < 0 && (l = o.iadd(this.m)),
          l._forceRed(this)
        )
      }),
      (Et.prototype.mul = function (t, i) {
        if (t.isZero() || i.isZero()) return new m(0)._forceRed(this)
        var e = t.mul(i),
          n = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          o = e.isub(n).iushrn(this.shift),
          l = o
        return (
          o.cmp(this.m) >= 0
            ? (l = o.isub(this.m))
            : o.cmpn(0) < 0 && (l = o.iadd(this.m)),
          l._forceRed(this)
        )
      }),
      (Et.prototype.invm = function (t) {
        var i = this.imod(t._invmp(this.m).mul(this.r2))
        return i._forceRed(this)
      })
  })(a, Cr)
})(Ar)
var zr = Ar.exports
const Gr = 'logger/5.5.0'
let Rr = !1,
  Sr = !1
const Tt = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 }
let Tr = Tt.default,
  Yt = null
function Hr() {
  try {
    const a = []
    if (
      (['NFD', 'NFC', 'NFKD', 'NFKC'].forEach((f) => {
        try {
          if ('test'.normalize(f) !== 'test') throw new Error('bad normalize')
        } catch {
          a.push(f)
        }
      }),
      a.length)
    )
      throw new Error('missing ' + a.join(', '))
    if (
      String.fromCharCode(233).normalize('NFD') !==
      String.fromCharCode(101, 769)
    )
      throw new Error('broken implementation')
  } catch (a) {
    return a.message
  }
  return null
}
const Ir = Hr()
var jt
;(function (a) {
  ;(a.DEBUG = 'DEBUG'),
    (a.INFO = 'INFO'),
    (a.WARNING = 'WARNING'),
    (a.ERROR = 'ERROR'),
    (a.OFF = 'OFF')
})(jt || (jt = {}))
var tr
;(function (a) {
  ;(a.UNKNOWN_ERROR = 'UNKNOWN_ERROR'),
    (a.NOT_IMPLEMENTED = 'NOT_IMPLEMENTED'),
    (a.UNSUPPORTED_OPERATION = 'UNSUPPORTED_OPERATION'),
    (a.NETWORK_ERROR = 'NETWORK_ERROR'),
    (a.SERVER_ERROR = 'SERVER_ERROR'),
    (a.TIMEOUT = 'TIMEOUT'),
    (a.BUFFER_OVERRUN = 'BUFFER_OVERRUN'),
    (a.NUMERIC_FAULT = 'NUMERIC_FAULT'),
    (a.MISSING_NEW = 'MISSING_NEW'),
    (a.INVALID_ARGUMENT = 'INVALID_ARGUMENT'),
    (a.MISSING_ARGUMENT = 'MISSING_ARGUMENT'),
    (a.UNEXPECTED_ARGUMENT = 'UNEXPECTED_ARGUMENT'),
    (a.CALL_EXCEPTION = 'CALL_EXCEPTION'),
    (a.INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS'),
    (a.NONCE_EXPIRED = 'NONCE_EXPIRED'),
    (a.REPLACEMENT_UNDERPRICED = 'REPLACEMENT_UNDERPRICED'),
    (a.UNPREDICTABLE_GAS_LIMIT = 'UNPREDICTABLE_GAS_LIMIT'),
    (a.TRANSACTION_REPLACED = 'TRANSACTION_REPLACED')
})(tr || (tr = {}))
const Or = '0123456789abcdef'
class E {
  constructor(f) {
    Object.defineProperty(this, 'version', {
      enumerable: !0,
      value: f,
      writable: !1,
    })
  }
  _log(f, d) {
    const c = f.toLowerCase()
    Tt[c] == null &&
      this.throwArgumentError('invalid log level name', 'logLevel', f),
      !(Tr > Tt[c]) && console.log.apply(console, d)
  }
  debug(...f) {
    this._log(E.levels.DEBUG, f)
  }
  info(...f) {
    this._log(E.levels.INFO, f)
  }
  warn(...f) {
    this._log(E.levels.WARNING, f)
  }
  makeError(f, d, c) {
    if (Sr) return this.makeError('censored error', d, {})
    d || (d = E.errors.UNKNOWN_ERROR), c || (c = {})
    const y = []
    Object.keys(c).forEach((gt) => {
      const wt = c[gt]
      try {
        if (wt instanceof Uint8Array) {
          let xt = ''
          for (let bt = 0; bt < wt.length; bt++)
            (xt += Or[wt[bt] >> 4]), (xt += Or[wt[bt] & 15])
          y.push(gt + '=Uint8Array(0x' + xt + ')')
        } else y.push(gt + '=' + JSON.stringify(wt))
      } catch {
        y.push(gt + '=' + JSON.stringify(c[gt].toString()))
      }
    }),
      y.push(`code=${d}`),
      y.push(`version=${this.version}`)
    const m = f
    y.length && (f += ' (' + y.join(', ') + ')')
    const vt = new Error(f)
    return (
      (vt.reason = m),
      (vt.code = d),
      Object.keys(c).forEach(function (gt) {
        vt[gt] = c[gt]
      }),
      vt
    )
  }
  throwError(f, d, c) {
    throw this.makeError(f, d, c)
  }
  throwArgumentError(f, d, c) {
    return this.throwError(f, E.errors.INVALID_ARGUMENT, {
      argument: d,
      value: c,
    })
  }
  assert(f, d, c, y) {
    f || this.throwError(d, c, y)
  }
  assertArgument(f, d, c, y) {
    f || this.throwArgumentError(d, c, y)
  }
  checkNormalize(f) {
    Ir &&
      this.throwError(
        'platform missing String.prototype.normalize',
        E.errors.UNSUPPORTED_OPERATION,
        { operation: 'String.prototype.normalize', form: Ir },
      )
  }
  checkSafeUint53(f, d) {
    typeof f == 'number' &&
      (d == null && (d = 'value not safe'),
      (f < 0 || f >= 9007199254740991) &&
        this.throwError(d, E.errors.NUMERIC_FAULT, {
          operation: 'checkSafeInteger',
          fault: 'out-of-safe-range',
          value: f,
        }),
      f % 1 &&
        this.throwError(d, E.errors.NUMERIC_FAULT, {
          operation: 'checkSafeInteger',
          fault: 'non-integer',
          value: f,
        }))
  }
  checkArgumentCount(f, d, c) {
    c ? (c = ': ' + c) : (c = ''),
      f < d &&
        this.throwError('missing argument' + c, E.errors.MISSING_ARGUMENT, {
          count: f,
          expectedCount: d,
        }),
      f > d &&
        this.throwError(
          'too many arguments' + c,
          E.errors.UNEXPECTED_ARGUMENT,
          { count: f, expectedCount: d },
        )
  }
  checkNew(f, d) {
    ;(f === Object || f == null) &&
      this.throwError('missing new', E.errors.MISSING_NEW, { name: d.name })
  }
  checkAbstract(f, d) {
    f === d
      ? this.throwError(
          'cannot instantiate abstract class ' +
            JSON.stringify(d.name) +
            ' directly; use a sub-class',
          E.errors.UNSUPPORTED_OPERATION,
          { name: f.name, operation: 'new' },
        )
      : (f === Object || f == null) &&
        this.throwError('missing new', E.errors.MISSING_NEW, { name: d.name })
  }
  static globalLogger() {
    return Yt || (Yt = new E(Gr)), Yt
  }
  static setCensorship(f, d) {
    if (
      (!f &&
        d &&
        this.globalLogger().throwError(
          'cannot permanently disable censorship',
          E.errors.UNSUPPORTED_OPERATION,
          { operation: 'setCensorship' },
        ),
      Rr)
    ) {
      if (!f) return
      this.globalLogger().throwError(
        'error censorship permanent',
        E.errors.UNSUPPORTED_OPERATION,
        { operation: 'setCensorship' },
      )
    }
    ;(Sr = !!f), (Rr = !!d)
  }
  static setLogLevel(f) {
    const d = Tt[f.toLowerCase()]
    if (d == null) {
      E.globalLogger().warn('invalid log level - ' + f)
      return
    }
    Tr = d
  }
  static from(f) {
    return new E(f)
  }
}
E.errors = tr
E.levels = jt
const Kr = 'bytes/5.5.0',
  R = new E(Kr)
function Pr(a) {
  return !!a.toHexString
}
function Nt(a) {
  return (
    a.slice ||
      (a.slice = function () {
        const f = Array.prototype.slice.call(arguments)
        return Nt(new Uint8Array(Array.prototype.slice.apply(a, f)))
      }),
    a
  )
}
function Wr(a) {
  return (lt(a) && !(a.length % 2)) || At(a)
}
function Ur(a) {
  return typeof a == 'number' && a == a && a % 1 == 0
}
function At(a) {
  if (a == null) return !1
  if (a.constructor === Uint8Array) return !0
  if (typeof a == 'string' || !Ur(a.length) || a.length < 0) return !1
  for (let f = 0; f < a.length; f++) {
    const d = a[f]
    if (!Ur(d) || d < 0 || d >= 256) return !1
  }
  return !0
}
function _t(a, f) {
  if ((f || (f = {}), typeof a == 'number')) {
    R.checkSafeUint53(a, 'invalid arrayify value')
    const d = []
    for (; a; ) d.unshift(a & 255), (a = parseInt(String(a / 256)))
    return d.length === 0 && d.push(0), Nt(new Uint8Array(d))
  }
  if (
    (f.allowMissingPrefix &&
      typeof a == 'string' &&
      a.substring(0, 2) !== '0x' &&
      (a = '0x' + a),
    Pr(a) && (a = a.toHexString()),
    lt(a))
  ) {
    let d = a.substring(2)
    d.length % 2 &&
      (f.hexPad === 'left'
        ? (d = '0x0' + d.substring(2))
        : f.hexPad === 'right'
        ? (d += '0')
        : R.throwArgumentError('hex data is odd-length', 'value', a))
    const c = []
    for (let y = 0; y < d.length; y += 2)
      c.push(parseInt(d.substring(y, y + 2), 16))
    return Nt(new Uint8Array(c))
  }
  return At(a)
    ? Nt(new Uint8Array(a))
    : R.throwArgumentError('invalid arrayify value', 'value', a)
}
function Qr(a) {
  const f = a.map((y) => _t(y)),
    d = f.reduce((y, m) => y + m.length, 0),
    c = new Uint8Array(d)
  return f.reduce((y, m) => (c.set(m, y), y + m.length), 0), Nt(c)
}
function Yr(a) {
  let f = _t(a)
  if (f.length === 0) return f
  let d = 0
  for (; d < f.length && f[d] === 0; ) d++
  return d && (f = f.slice(d)), f
}
function Xr(a, f) {
  ;(a = _t(a)),
    a.length > f &&
      R.throwArgumentError('value out of range', 'value', arguments[0])
  const d = new Uint8Array(f)
  return d.set(a, f - a.length), Nt(d)
}
function lt(a, f) {
  return !(
    typeof a != 'string' ||
    !a.match(/^0x[0-9A-Fa-f]*$/) ||
    (f && a.length !== 2 + 2 * f)
  )
}
const rr = '0123456789abcdef'
function mt(a, f) {
  if ((f || (f = {}), typeof a == 'number')) {
    R.checkSafeUint53(a, 'invalid hexlify value')
    let d = ''
    for (; a; ) (d = rr[a & 15] + d), (a = Math.floor(a / 16))
    return d.length ? (d.length % 2 && (d = '0' + d), '0x' + d) : '0x00'
  }
  if (typeof a == 'bigint')
    return (a = a.toString(16)), a.length % 2 ? '0x0' + a : '0x' + a
  if (
    (f.allowMissingPrefix &&
      typeof a == 'string' &&
      a.substring(0, 2) !== '0x' &&
      (a = '0x' + a),
    Pr(a))
  )
    return a.toHexString()
  if (lt(a))
    return (
      a.length % 2 &&
        (f.hexPad === 'left'
          ? (a = '0x0' + a.substring(2))
          : f.hexPad === 'right'
          ? (a += '0')
          : R.throwArgumentError('hex data is odd-length', 'value', a)),
      a.toLowerCase()
    )
  if (At(a)) {
    let d = '0x'
    for (let c = 0; c < a.length; c++) {
      let y = a[c]
      d += rr[(y & 240) >> 4] + rr[y & 15]
    }
    return d
  }
  return R.throwArgumentError('invalid hexlify value', 'value', a)
}
function jr(a) {
  if (typeof a != 'string') a = mt(a)
  else if (!lt(a) || a.length % 2) return null
  return (a.length - 2) / 2
}
function ti(a, f, d) {
  return (
    typeof a != 'string'
      ? (a = mt(a))
      : (!lt(a) || a.length % 2) &&
        R.throwArgumentError('invalid hexData', 'value', a),
    (f = 2 + 2 * f),
    d != null ? '0x' + a.substring(f, 2 + 2 * d) : '0x' + a.substring(f)
  )
}
function ri(a) {
  let f = '0x'
  return (
    a.forEach((d) => {
      f += mt(d).substring(2)
    }),
    f
  )
}
function ii(a) {
  const f = $r(mt(a, { hexPad: 'left' }))
  return f === '0x' ? '0x0' : f
}
function $r(a) {
  typeof a != 'string' && (a = mt(a)),
    lt(a) || R.throwArgumentError('invalid hex string', 'value', a),
    (a = a.substring(2))
  let f = 0
  for (; f < a.length && a[f] === '0'; ) f++
  return '0x' + a.substring(f)
}
function ir(a, f) {
  for (
    typeof a != 'string'
      ? (a = mt(a))
      : lt(a) || R.throwArgumentError('invalid hex string', 'value', a),
      a.length > 2 * f + 2 &&
        R.throwArgumentError('value out of range', 'value', arguments[1]);
    a.length < 2 * f + 2;

  )
    a = '0x0' + a.substring(2)
  return a
}
function ei(a) {
  const f = { r: '0x', s: '0x', _vs: '0x', recoveryParam: 0, v: 0 }
  if (Wr(a)) {
    const d = _t(a)
    d.length !== 65 &&
      R.throwArgumentError(
        'invalid signature string; must be 65 bytes',
        'signature',
        a,
      ),
      (f.r = mt(d.slice(0, 32))),
      (f.s = mt(d.slice(32, 64))),
      (f.v = d[64]),
      f.v < 27 &&
        (f.v === 0 || f.v === 1
          ? (f.v += 27)
          : R.throwArgumentError('signature invalid v byte', 'signature', a)),
      (f.recoveryParam = 1 - (f.v % 2)),
      f.recoveryParam && (d[32] |= 128),
      (f._vs = mt(d.slice(32, 64)))
  } else {
    if (
      ((f.r = a.r),
      (f.s = a.s),
      (f.v = a.v),
      (f.recoveryParam = a.recoveryParam),
      (f._vs = a._vs),
      f._vs != null)
    ) {
      const y = Xr(_t(f._vs), 32)
      f._vs = mt(y)
      const m = y[0] >= 128 ? 1 : 0
      f.recoveryParam == null
        ? (f.recoveryParam = m)
        : f.recoveryParam !== m &&
          R.throwArgumentError(
            'signature recoveryParam mismatch _vs',
            'signature',
            a,
          ),
        (y[0] &= 127)
      const vt = mt(y)
      f.s == null
        ? (f.s = vt)
        : f.s !== vt &&
          R.throwArgumentError('signature v mismatch _vs', 'signature', a)
    }
    if (f.recoveryParam == null)
      f.v == null
        ? R.throwArgumentError(
            'signature missing v and recoveryParam',
            'signature',
            a,
          )
        : f.v === 0 || f.v === 1
        ? (f.recoveryParam = f.v)
        : (f.recoveryParam = 1 - (f.v % 2))
    else if (f.v == null) f.v = 27 + f.recoveryParam
    else {
      const y = f.v === 0 || f.v === 1 ? f.v : 1 - (f.v % 2)
      f.recoveryParam !== y &&
        R.throwArgumentError(
          'signature recoveryParam mismatch v',
          'signature',
          a,
        )
    }
    f.r == null || !lt(f.r)
      ? R.throwArgumentError('signature missing or invalid r', 'signature', a)
      : (f.r = ir(f.r, 32)),
      f.s == null || !lt(f.s)
        ? R.throwArgumentError('signature missing or invalid s', 'signature', a)
        : (f.s = ir(f.s, 32))
    const d = _t(f.s)
    d[0] >= 128 &&
      R.throwArgumentError('signature s out of range', 'signature', a),
      f.recoveryParam && (d[0] |= 128)
    const c = mt(d)
    f._vs &&
      (lt(f._vs) ||
        R.throwArgumentError('signature invalid _vs', 'signature', a),
      (f._vs = ir(f._vs, 32))),
      f._vs == null
        ? (f._vs = c)
        : f._vs !== c &&
          R.throwArgumentError('signature _vs mismatch v and s', 'signature', a)
  }
  return f
}
const Vr = 'bignumber/5.5.0'
var It = zr.BN
const Mt = new E(Vr),
  er = {},
  Br = 9007199254740991
function ni(a) {
  return (
    a != null &&
    (at.isBigNumber(a) ||
      (typeof a == 'number' && a % 1 == 0) ||
      (typeof a == 'string' && !!a.match(/^-?[0-9]+$/)) ||
      lt(a) ||
      typeof a == 'bigint' ||
      At(a))
  )
}
let kr = !1
class at {
  constructor(f, d) {
    Mt.checkNew(new.target, at),
      f !== er &&
        Mt.throwError(
          'cannot call constructor directly; use BigNumber.from',
          E.errors.UNSUPPORTED_OPERATION,
          { operation: 'new (BigNumber)' },
        ),
      (this._hex = d),
      (this._isBigNumber = !0),
      Object.freeze(this)
  }
  fromTwos(f) {
    return ut(x(this).fromTwos(f))
  }
  toTwos(f) {
    return ut(x(this).toTwos(f))
  }
  abs() {
    return this._hex[0] === '-' ? at.from(this._hex.substring(1)) : this
  }
  add(f) {
    return ut(x(this).add(x(f)))
  }
  sub(f) {
    return ut(x(this).sub(x(f)))
  }
  div(f) {
    return (
      at.from(f).isZero() && ct('division by zero', 'div'),
      ut(x(this).div(x(f)))
    )
  }
  mul(f) {
    return ut(x(this).mul(x(f)))
  }
  mod(f) {
    const d = x(f)
    return (
      d.isNeg() && ct('cannot modulo negative values', 'mod'),
      ut(x(this).umod(d))
    )
  }
  pow(f) {
    const d = x(f)
    return (
      d.isNeg() && ct('cannot raise to negative values', 'pow'),
      ut(x(this).pow(d))
    )
  }
  and(f) {
    const d = x(f)
    return (
      (this.isNegative() || d.isNeg()) &&
        ct("cannot 'and' negative values", 'and'),
      ut(x(this).and(d))
    )
  }
  or(f) {
    const d = x(f)
    return (
      (this.isNegative() || d.isNeg()) &&
        ct("cannot 'or' negative values", 'or'),
      ut(x(this).or(d))
    )
  }
  xor(f) {
    const d = x(f)
    return (
      (this.isNegative() || d.isNeg()) &&
        ct("cannot 'xor' negative values", 'xor'),
      ut(x(this).xor(d))
    )
  }
  mask(f) {
    return (
      (this.isNegative() || f < 0) && ct('cannot mask negative values', 'mask'),
      ut(x(this).maskn(f))
    )
  }
  shl(f) {
    return (
      (this.isNegative() || f < 0) && ct('cannot shift negative values', 'shl'),
      ut(x(this).shln(f))
    )
  }
  shr(f) {
    return (
      (this.isNegative() || f < 0) && ct('cannot shift negative values', 'shr'),
      ut(x(this).shrn(f))
    )
  }
  eq(f) {
    return x(this).eq(x(f))
  }
  lt(f) {
    return x(this).lt(x(f))
  }
  lte(f) {
    return x(this).lte(x(f))
  }
  gt(f) {
    return x(this).gt(x(f))
  }
  gte(f) {
    return x(this).gte(x(f))
  }
  isNegative() {
    return this._hex[0] === '-'
  }
  isZero() {
    return x(this).isZero()
  }
  toNumber() {
    try {
      return x(this).toNumber()
    } catch {
      ct('overflow', 'toNumber', this.toString())
    }
    return null
  }
  toBigInt() {
    try {
      return BigInt(this.toString())
    } catch {}
    return Mt.throwError(
      'this platform does not support BigInt',
      E.errors.UNSUPPORTED_OPERATION,
      { value: this.toString() },
    )
  }
  toString() {
    return (
      arguments.length > 0 &&
        (arguments[0] === 10
          ? kr ||
            ((kr = !0),
            Mt.warn(
              'BigNumber.toString does not accept any parameters; base-10 is assumed',
            ))
          : arguments[0] === 16
          ? Mt.throwError(
              'BigNumber.toString does not accept any parameters; use bigNumber.toHexString()',
              E.errors.UNEXPECTED_ARGUMENT,
              {},
            )
          : Mt.throwError(
              'BigNumber.toString does not accept parameters',
              E.errors.UNEXPECTED_ARGUMENT,
              {},
            )),
      x(this).toString(10)
    )
  }
  toHexString() {
    return this._hex
  }
  toJSON(f) {
    return { type: 'BigNumber', hex: this.toHexString() }
  }
  static from(f) {
    if (f instanceof at) return f
    if (typeof f == 'string')
      return f.match(/^-?0x[0-9a-f]+$/i)
        ? new at(er, Rt(f))
        : f.match(/^-?[0-9]+$/)
        ? new at(er, Rt(new It(f)))
        : Mt.throwArgumentError('invalid BigNumber string', 'value', f)
    if (typeof f == 'number')
      return (
        f % 1 && ct('underflow', 'BigNumber.from', f),
        (f >= Br || f <= -Br) && ct('overflow', 'BigNumber.from', f),
        at.from(String(f))
      )
    const d = f
    if (typeof d == 'bigint') return at.from(d.toString())
    if (At(d)) return at.from(mt(d))
    if (d)
      if (d.toHexString) {
        const c = d.toHexString()
        if (typeof c == 'string') return at.from(c)
      } else {
        let c = d._hex
        if (
          (c == null && d.type === 'BigNumber' && (c = d.hex),
          typeof c == 'string' &&
            (lt(c) || (c[0] === '-' && lt(c.substring(1)))))
        )
          return at.from(c)
      }
    return Mt.throwArgumentError('invalid BigNumber value', 'value', f)
  }
  static isBigNumber(f) {
    return !!(f && f._isBigNumber)
  }
}
function Rt(a) {
  if (typeof a != 'string') return Rt(a.toString(16))
  if (a[0] === '-')
    return (
      (a = a.substring(1)),
      a[0] === '-' && Mt.throwArgumentError('invalid hex', 'value', a),
      (a = Rt(a)),
      a === '0x00' ? a : '-' + a
    )
  if ((a.substring(0, 2) !== '0x' && (a = '0x' + a), a === '0x')) return '0x00'
  for (
    a.length % 2 && (a = '0x0' + a.substring(2));
    a.length > 4 && a.substring(0, 4) === '0x00';

  )
    a = '0x' + a.substring(4)
  return a
}
function ut(a) {
  return at.from(Rt(a))
}
function x(a) {
  const f = at.from(a).toHexString()
  return f[0] === '-'
    ? new It('-' + f.substring(3), 16)
    : new It(f.substring(2), 16)
}
function ct(a, f, d) {
  const c = { fault: a, operation: f }
  return d != null && (c.value = d), Mt.throwError(a, E.errors.NUMERIC_FAULT, c)
}
function si(a) {
  return new It(a, 36).toString(16)
}
const Dr = 18,
  hi = (a) => at.from(a).mul(at.from(10).pow(Dr)),
  fi = (a) => {
    if (at.isBigNumber(a)) return a.div(at.from(10).pow(Dr)).toNumber()
  }
export {
  at as B,
  E as L,
  si as _,
  _t as a,
  At as b,
  mt as c,
  Qr as d,
  ri as e,
  lt as f,
  Wr as g,
  ir as h,
  ni as i,
  ti as j,
  ii as k,
  jr as l,
  zr as m,
  hi as n,
  ei as o,
  Yr as s,
  fi as t,
  Vr as v,
}
