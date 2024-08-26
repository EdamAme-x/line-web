/*! For license information please see popup.js.LICENSE.txt */
!function () {
  try {
    var t = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      e = (new Error()).stack;
    e &&
      (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[e] = "be30347f-a4e0-4715-8b66-0ea0cb538c4c",
        t._sentryDebugIdIdentifier =
          "sentry-dbid-be30347f-a4e0-4715-8b66-0ea0cb538c4c");
  } catch (t) {}
}();
var _global = "undefined" !== typeof window
  ? window
  : "undefined" !== typeof global
  ? global
  : "undefined" !== typeof self
  ? self
  : {};
_global.SENTRY_RELEASE = { id: "line-chrome@3.5.1" },
  (() => {
    "use strict";
    var t = {
        18760: (t, e, r) => {
          var i = Object.defineProperty,
            o = Object.defineProperties,
            n = Object.getOwnPropertyDescriptors,
            a = Object.getOwnPropertySymbols,
            s = Object.getPrototypeOf,
            l = Object.prototype.hasOwnProperty,
            c = Object.prototype.propertyIsEnumerable,
            u = Reflect.get,
            d = (t, e, r) =>
              e in t
                ? i(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
                : t[e] = r,
            h = (t, e) => {
              for (var r in e || (e = {})) l.call(e, r) && d(t, r, e[r]);
              if (a) { for (var r of a(e)) c.call(e, r) && d(t, r, e[r]); }
              return t;
            },
            p = (t, e, r) =>
              new Promise((i, o) => {
                var n = (t) => {
                    try {
                      s(r.next(t));
                    } catch (e) {
                      o(e);
                    }
                  },
                  a = (t) => {
                    try {
                      s(r.throw(t));
                    } catch (e) {
                      o(e);
                    }
                  },
                  s = (t) =>
                    t.done ? i(t.value) : Promise.resolve(t.value).then(n, a);
                s((r = r.apply(t, e)).next());
              });
          const f = r(3135),
            m = r(86024),
            g = r(94538),
            x = (t) => {
              try {
                return "string" == typeof t ? JSON.parse(t) : t;
              } catch (e) {
                return;
              }
            },
            b = "application/textarea-ex",
            v = [57344, 63743];
          class y extends CustomEvent {}
          var R = "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof r.g
            ? r.g
            : "undefined" != typeof self
            ? self
            : {};
          var A,
            E = {},
            _ = {},
            w = {
              get exports() {
                return _;
              },
              set exports(t) {
                _ = t;
              },
            };
          A = w,
            function (t) {
              function e(t, n) {
                return this instanceof e
                  ? (this._low = 0,
                    this._high = 0,
                    this.remainder = null,
                    "undefined" == typeof n
                      ? i.call(this, t)
                      : "string" == typeof t
                      ? o.call(this, t, n)
                      : void r.call(this, t, n))
                  : new e(t, n);
              }
              function r(t, e) {
                return this._low = 0 | t, this._high = 0 | e, this;
              }
              function i(t) {
                return this._low = 65535 & t, this._high = t >>> 16, this;
              }
              function o(t, e) {
                var r = parseInt(t, e || 10);
                return this._low = 65535 & r, this._high = r >>> 16, this;
              }
              e(Math.pow(36, 5)),
                e(Math.pow(16, 7)),
                e(Math.pow(10, 9)),
                e(Math.pow(2, 30)),
                e(36),
                e(16),
                e(10),
                e(2),
                e.prototype.fromBits = r,
                e.prototype.fromNumber = i,
                e.prototype.fromString = o,
                e.prototype.toNumber = function () {
                  return 65536 * this._high + this._low;
                },
                e.prototype.toString = function (t) {
                  return this.toNumber().toString(t || 10);
                },
                e.prototype.add = function (t) {
                  var e = this._low + t._low, r = e >>> 16;
                  return r += this._high + t._high,
                    this._low = 65535 & e,
                    this._high = 65535 & r,
                    this;
                },
                e.prototype.subtract = function (t) {
                  return this.add(t.clone().negate());
                },
                e.prototype.multiply = function (t) {
                  var e,
                    r,
                    i = this._high,
                    o = this._low,
                    n = t._high,
                    a = t._low;
                  return e = (r = o * a) >>> 16,
                    e += i * a,
                    e &= 65535,
                    e += o * n,
                    this._low = 65535 & r,
                    this._high = 65535 & e,
                    this;
                },
                e.prototype.div = function (t) {
                  if (0 == t._low && 0 == t._high) {
                    throw Error("division by zero");
                  }
                  if (0 == t._high && 1 == t._low) {
                    return this.remainder = new e(0), this;
                  }
                  if (t.gt(this)) {
                    return this.remainder = this.clone(),
                      this._low = 0,
                      this._high = 0,
                      this;
                  }
                  if (this.eq(t)) {
                    return this.remainder = new e(0),
                      this._low = 1,
                      this._high = 0,
                      this;
                  }
                  for (var r = t.clone(), i = -1; !this.lt(r);) {
                    r.shiftLeft(1, !0), i++;
                  }
                  for (
                    this.remainder = this.clone(),
                      this._low = 0,
                      this._high = 0;
                    i >= 0;
                    i--
                  ) {
                    r.shiftRight(1),
                      this.remainder.lt(r) ||
                      (this.remainder.subtract(r),
                        i >= 16
                          ? this._high |= 1 << i - 16
                          : this._low |= 1 << i);
                  }
                  return this;
                },
                e.prototype.negate = function () {
                  var t = 1 + (65535 & ~this._low);
                  return this._low = 65535 & t,
                    this._high = ~this._high + (t >>> 16) & 65535,
                    this;
                },
                e.prototype.equals = e.prototype.eq = function (t) {
                  return this._low == t._low && this._high == t._high;
                },
                e.prototype.greaterThan = e.prototype.gt = function (t) {
                  return this._high > t._high ||
                    !(this._high < t._high) && this._low > t._low;
                },
                e.prototype.lessThan = e.prototype.lt = function (t) {
                  return this._high < t._high ||
                    !(this._high > t._high) && this._low < t._low;
                },
                e.prototype.or = function (t) {
                  return this._low |= t._low, this._high |= t._high, this;
                },
                e.prototype.and = function (t) {
                  return this._low &= t._low, this._high &= t._high, this;
                },
                e.prototype.not = function () {
                  return this._low = 65535 & ~this._low,
                    this._high = 65535 & ~this._high,
                    this;
                },
                e.prototype.xor = function (t) {
                  return this._low ^= t._low, this._high ^= t._high, this;
                },
                e.prototype.shiftRight = e.prototype.shiftr = function (t) {
                  return t > 16
                    ? (this._low = this._high >> t - 16, this._high = 0)
                    : 16 == t
                    ? (this._low = this._high, this._high = 0)
                    : (this._low = this._low >> t |
                      this._high << 16 - t & 65535,
                      this._high >>= t),
                    this;
                },
                e.prototype.shiftLeft = e.prototype.shiftl = function (t, e) {
                  return t > 16
                    ? (this._high = this._low << t - 16,
                      this._low = 0,
                      e || (this._high &= 65535))
                    : 16 == t
                    ? (this._high = this._low, this._low = 0)
                    : (this._high = this._high << t | this._low >> 16 - t,
                      this._low = this._low << t & 65535,
                      e || (this._high &= 65535)),
                    this;
                },
                e.prototype.rotateLeft = e.prototype.rotl = function (t) {
                  var e = this._high << 16 | this._low;
                  return e = e << t | e >>> 32 - t,
                    this._low = 65535 & e,
                    this._high = e >>> 16,
                    this;
                },
                e.prototype.rotateRight = e.prototype.rotr = function (t) {
                  var e = this._high << 16 | this._low;
                  return e = e >>> t | e << 32 - t,
                    this._low = 65535 & e,
                    this._high = e >>> 16,
                    this;
                },
                e.prototype.clone = function () {
                  return new e(this._low, this._high);
                },
                A.exports ? A.exports = e : t.UINT32 = e;
            }(R);
          var q = {},
            U = {
              get exports() {
                return q;
              },
              set exports(t) {
                q = t;
              },
            };
          !function (t) {
            !function (e) {
              var r = {
                  16: o(Math.pow(16, 5)),
                  10: o(Math.pow(10, 5)),
                  2: o(Math.pow(2, 5)),
                },
                i = { 16: o(16), 10: o(10), 2: o(2) };
              function o(t, e, r, i) {
                return this instanceof o
                  ? (this.remainder = null,
                    "string" == typeof t
                      ? s.call(this, t, e)
                      : "undefined" == typeof e
                      ? a.call(this, t)
                      : void n.apply(this, arguments))
                  : new o(t, e, r, i);
              }
              function n(t, e, r, i) {
                return "undefined" == typeof r
                  ? (this._a00 = 65535 & t,
                    this._a16 = t >>> 16,
                    this._a32 = 65535 & e,
                    this._a48 = e >>> 16,
                    this)
                  : (this._a00 = 0 | t,
                    this._a16 = 0 | e,
                    this._a32 = 0 | r,
                    this._a48 = 0 | i,
                    this);
              }
              function a(t) {
                return this._a00 = 65535 & t,
                  this._a16 = t >>> 16,
                  this._a32 = 0,
                  this._a48 = 0,
                  this;
              }
              function s(t, e) {
                e = e || 10,
                  this._a00 = 0,
                  this._a16 = 0,
                  this._a32 = 0,
                  this._a48 = 0;
                for (
                  var i = r[e] || new o(Math.pow(e, 5)), n = 0, a = t.length;
                  n < a;
                  n += 5
                ) {
                  var s = Math.min(5, a - n),
                    l = parseInt(t.slice(n, n + s), e);
                  this.multiply(s < 5 ? new o(Math.pow(e, s)) : i).add(
                    new o(l),
                  );
                }
                return this;
              }
              o.prototype.fromBits = n,
                o.prototype.fromNumber = a,
                o.prototype.fromString = s,
                o.prototype.toNumber = function () {
                  return 65536 * this._a16 + this._a00;
                },
                o.prototype.toString = function (t) {
                  var e = i[t = t || 10] || new o(t);
                  if (!this.gt(e)) return this.toNumber().toString(t);
                  for (
                    var r = this.clone(), n = new Array(64), a = 63;
                    a >= 0 &&
                    (r.div(e),
                      n[a] = r.remainder.toNumber().toString(t),
                      r.gt(e));
                    a--
                  );
                  return n[a - 1] = r.toNumber().toString(t), n.join("");
                },
                o.prototype.add = function (t) {
                  var e = this._a00 + t._a00,
                    r = e >>> 16,
                    i = (r += this._a16 + t._a16) >>> 16,
                    o = (i += this._a32 + t._a32) >>> 16;
                  return o += this._a48 + t._a48,
                    this._a00 = 65535 & e,
                    this._a16 = 65535 & r,
                    this._a32 = 65535 & i,
                    this._a48 = 65535 & o,
                    this;
                },
                o.prototype.subtract = function (t) {
                  return this.add(t.clone().negate());
                },
                o.prototype.multiply = function (t) {
                  var e = this._a00,
                    r = this._a16,
                    i = this._a32,
                    o = this._a48,
                    n = t._a00,
                    a = t._a16,
                    s = t._a32,
                    l = e * n,
                    c = l >>> 16,
                    u = (c += e * a) >>> 16;
                  c &= 65535, u += (c += r * n) >>> 16;
                  var d = (u += e * s) >>> 16;
                  return u &= 65535,
                    d += (u += r * a) >>> 16,
                    u &= 65535,
                    d += (u += i * n) >>> 16,
                    d += e * t._a48,
                    d &= 65535,
                    d += r * s,
                    d &= 65535,
                    d += i * a,
                    d &= 65535,
                    d += o * n,
                    this._a00 = 65535 & l,
                    this._a16 = 65535 & c,
                    this._a32 = 65535 & u,
                    this._a48 = 65535 & d,
                    this;
                },
                o.prototype.div = function (t) {
                  if (0 == t._a16 && 0 == t._a32 && 0 == t._a48) {
                    if (0 == t._a00) throw Error("division by zero");
                    if (1 == t._a00) return this.remainder = new o(0), this;
                  }
                  if (t.gt(this)) {
                    return this.remainder = this.clone(),
                      this._a00 = 0,
                      this._a16 = 0,
                      this._a32 = 0,
                      this._a48 = 0,
                      this;
                  }
                  if (this.eq(t)) {
                    return this.remainder = new o(0),
                      this._a00 = 1,
                      this._a16 = 0,
                      this._a32 = 0,
                      this._a48 = 0,
                      this;
                  }
                  for (var e = t.clone(), r = -1; !this.lt(e);) {
                    e.shiftLeft(1, !0), r++;
                  }
                  for (
                    this.remainder = this.clone(),
                      this._a00 = 0,
                      this._a16 = 0,
                      this._a32 = 0,
                      this._a48 = 0;
                    r >= 0;
                    r--
                  ) {
                    e.shiftRight(1),
                      this.remainder.lt(e) ||
                      (this.remainder.subtract(e),
                        r >= 48
                          ? this._a48 |= 1 << r - 48
                          : r >= 32
                          ? this._a32 |= 1 << r - 32
                          : r >= 16
                          ? this._a16 |= 1 << r - 16
                          : this._a00 |= 1 << r);
                  }
                  return this;
                },
                o.prototype.negate = function () {
                  var t = 1 + (65535 & ~this._a00);
                  return this._a00 = 65535 & t,
                    t = (65535 & ~this._a16) + (t >>> 16),
                    this._a16 = 65535 & t,
                    t = (65535 & ~this._a32) + (t >>> 16),
                    this._a32 = 65535 & t,
                    this._a48 = ~this._a48 + (t >>> 16) & 65535,
                    this;
                },
                o.prototype.equals = o.prototype.eq = function (t) {
                  return this._a48 == t._a48 && this._a00 == t._a00 &&
                    this._a32 == t._a32 && this._a16 == t._a16;
                },
                o.prototype.greaterThan = o.prototype.gt = function (t) {
                  return this._a48 > t._a48 ||
                    !(this._a48 < t._a48) &&
                      (this._a32 > t._a32 ||
                        !(this._a32 < t._a32) &&
                          (this._a16 > t._a16 ||
                            !(this._a16 < t._a16) && this._a00 > t._a00));
                },
                o.prototype.lessThan = o.prototype.lt = function (t) {
                  return this._a48 < t._a48 ||
                    !(this._a48 > t._a48) &&
                      (this._a32 < t._a32 ||
                        !(this._a32 > t._a32) &&
                          (this._a16 < t._a16 ||
                            !(this._a16 > t._a16) && this._a00 < t._a00));
                },
                o.prototype.or = function (t) {
                  return this._a00 |= t._a00,
                    this._a16 |= t._a16,
                    this._a32 |= t._a32,
                    this._a48 |= t._a48,
                    this;
                },
                o.prototype.and = function (t) {
                  return this._a00 &= t._a00,
                    this._a16 &= t._a16,
                    this._a32 &= t._a32,
                    this._a48 &= t._a48,
                    this;
                },
                o.prototype.xor = function (t) {
                  return this._a00 ^= t._a00,
                    this._a16 ^= t._a16,
                    this._a32 ^= t._a32,
                    this._a48 ^= t._a48,
                    this;
                },
                o.prototype.not = function () {
                  return this._a00 = 65535 & ~this._a00,
                    this._a16 = 65535 & ~this._a16,
                    this._a32 = 65535 & ~this._a32,
                    this._a48 = 65535 & ~this._a48,
                    this;
                },
                o.prototype.shiftRight = o.prototype.shiftr = function (t) {
                  return (t %= 64) >= 48
                    ? (this._a00 = this._a48 >> t - 48,
                      this._a16 = 0,
                      this._a32 = 0,
                      this._a48 = 0)
                    : t >= 32
                    ? (t -= 32,
                      this._a00 = 65535 &
                        (this._a32 >> t | this._a48 << 16 - t),
                      this._a16 = this._a48 >> t & 65535,
                      this._a32 = 0,
                      this._a48 = 0)
                    : t >= 16
                    ? (t -= 16,
                      this._a00 = 65535 &
                        (this._a16 >> t | this._a32 << 16 - t),
                      this._a16 = 65535 &
                        (this._a32 >> t | this._a48 << 16 - t),
                      this._a32 = this._a48 >> t & 65535,
                      this._a48 = 0)
                    : (this._a00 = 65535 &
                      (this._a00 >> t | this._a16 << 16 - t),
                      this._a16 = 65535 &
                        (this._a16 >> t | this._a32 << 16 - t),
                      this._a32 = 65535 &
                        (this._a32 >> t | this._a48 << 16 - t),
                      this._a48 = this._a48 >> t & 65535),
                    this;
                },
                o.prototype.shiftLeft = o.prototype.shiftl = function (t, e) {
                  return (t %= 64) >= 48
                    ? (this._a48 = this._a00 << t - 48,
                      this._a32 = 0,
                      this._a16 = 0,
                      this._a00 = 0)
                    : t >= 32
                    ? (t -= 32,
                      this._a48 = this._a16 << t | this._a00 >> 16 - t,
                      this._a32 = this._a00 << t & 65535,
                      this._a16 = 0,
                      this._a00 = 0)
                    : t >= 16
                    ? (t -= 16,
                      this._a48 = this._a32 << t | this._a16 >> 16 - t,
                      this._a32 = 65535 &
                        (this._a16 << t | this._a00 >> 16 - t),
                      this._a16 = this._a00 << t & 65535,
                      this._a00 = 0)
                    : (this._a48 = this._a48 << t | this._a32 >> 16 - t,
                      this._a32 = 65535 &
                        (this._a32 << t | this._a16 >> 16 - t),
                      this._a16 = 65535 &
                        (this._a16 << t | this._a00 >> 16 - t),
                      this._a00 = this._a00 << t & 65535),
                    e || (this._a48 &= 65535),
                    this;
                },
                o.prototype.rotateLeft = o.prototype.rotl = function (t) {
                  if (0 == (t %= 64)) return this;
                  if (t >= 32) {
                    var e = this._a00;
                    if (
                      this._a00 = this._a32,
                        this._a32 = e,
                        e = this._a48,
                        this._a48 = this._a16,
                        this._a16 = e,
                        32 == t
                    ) return this;
                    t -= 32;
                  }
                  var r = this._a48 << 16 | this._a32,
                    i = this._a16 << 16 | this._a00,
                    o = r << t | i >>> 32 - t,
                    n = i << t | r >>> 32 - t;
                  return this._a00 = 65535 & n,
                    this._a16 = n >>> 16,
                    this._a32 = 65535 & o,
                    this._a48 = o >>> 16,
                    this;
                },
                o.prototype.rotateRight = o.prototype.rotr = function (t) {
                  if (0 == (t %= 64)) return this;
                  if (t >= 32) {
                    var e = this._a00;
                    if (
                      this._a00 = this._a32,
                        this._a32 = e,
                        e = this._a48,
                        this._a48 = this._a16,
                        this._a16 = e,
                        32 == t
                    ) return this;
                    t -= 32;
                  }
                  var r = this._a48 << 16 | this._a32,
                    i = this._a16 << 16 | this._a00,
                    o = r >>> t | i << 32 - t,
                    n = i >>> t | r << 32 - t;
                  return this._a00 = 65535 & n,
                    this._a16 = n >>> 16,
                    this._a32 = 65535 & o,
                    this._a48 = o >>> 16,
                    this;
                },
                o.prototype.clone = function () {
                  return new o(this._a00, this._a16, this._a32, this._a48);
                },
                t.exports ? t.exports = o : e.UINT64 = o;
            }(R);
          }(U),
            E.UINT32 = _,
            E.UINT64 = q;
          var L = E.UINT32;
          L.prototype.xxh_update = function (t, e) {
            var r, i, o = T._low, n = T._high;
            r = (i = t * o) >>> 16, r += e * o, r &= 65535, r += t * n;
            var a = this._low + (65535 & i),
              s = a >>> 16,
              l = (s += this._high + (65535 & r)) << 16 | 65535 & a;
            s = (l = l << 13 | l >>> 19) >>> 16,
              r = (i = (a = 65535 & l) * (o = F._low)) >>> 16,
              r += s * o,
              r &= 65535,
              r += a * (n = F._high),
              this._low = 65535 & i,
              this._high = 65535 & r;
          };
          var F = L("2654435761"),
            T = L("2246822519"),
            S = L("3266489917"),
            O = L("668265263"),
            C = L("374761393");
          function H() {
            return 2 == arguments.length
              ? new H(arguments[1]).update(arguments[0]).digest()
              : this instanceof H
              ? void V.call(this, arguments[0])
              : new H(arguments[0]);
          }
          function V(t) {
            return this.seed = t instanceof L ? t.clone() : L(t),
              this.v1 = this.seed.clone().add(F).add(T),
              this.v2 = this.seed.clone().add(T),
              this.v3 = this.seed.clone(),
              this.v4 = this.seed.clone().subtract(F),
              this.total_len = 0,
              this.memsize = 0,
              this.memory = null,
              this;
          }
          H.prototype.init = V,
            H.prototype.update = function (t) {
              var e, r = "string" == typeof t;
              r && (t = function (t) {
                for (var e = [], r = 0, i = t.length; r < i; r++) {
                  var o = t.charCodeAt(r);
                  o < 128
                    ? e.push(o)
                    : o < 2048
                    ? e.push(192 | o >> 6, 128 | 63 & o)
                    : o < 55296 || o >= 57344
                    ? e.push(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o)
                    : (r++,
                      o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(r)),
                      e.push(
                        240 | o >> 18,
                        128 | o >> 12 & 63,
                        128 | o >> 6 & 63,
                        128 | 63 & o,
                      ));
                }
                return new Uint8Array(e);
              }(t),
                r = !1,
                e = !0),
                "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer &&
                (e = !0, t = new Uint8Array(t));
              var i = 0, o = t.length, n = i + o;
              if (0 == o) return this;
              if (
                this.total_len += o,
                  0 == this.memsize && (this.memory = r
                    ? ""
                    : e
                    ? new Uint8Array(16)
                    : new Buffer(16)),
                  this.memsize + o < 16
              ) {
                return r
                  ? this.memory += t
                  : e
                  ? this.memory.set(t.subarray(0, o), this.memsize)
                  : t.copy(this.memory, this.memsize, 0, o),
                  this.memsize += o,
                  this;
              }
              if (this.memsize > 0) {
                r
                  ? this.memory += t.slice(0, 16 - this.memsize)
                  : e
                  ? this.memory.set(
                    t.subarray(0, 16 - this.memsize),
                    this.memsize,
                  )
                  : t.copy(this.memory, this.memsize, 0, 16 - this.memsize);
                var a = 0;
                r
                  ? (this.v1.xxh_update(
                    this.memory.charCodeAt(a + 1) << 8 |
                      this.memory.charCodeAt(a),
                    this.memory.charCodeAt(a + 3) << 8 |
                      this.memory.charCodeAt(a + 2),
                  ),
                    a += 4,
                    this.v2.xxh_update(
                      this.memory.charCodeAt(a + 1) << 8 |
                        this.memory.charCodeAt(a),
                      this.memory.charCodeAt(a + 3) << 8 |
                        this.memory.charCodeAt(a + 2),
                    ),
                    a += 4,
                    this.v3.xxh_update(
                      this.memory.charCodeAt(a + 1) << 8 |
                        this.memory.charCodeAt(a),
                      this.memory.charCodeAt(a + 3) << 8 |
                        this.memory.charCodeAt(a + 2),
                    ),
                    a += 4,
                    this.v4.xxh_update(
                      this.memory.charCodeAt(a + 1) << 8 |
                        this.memory.charCodeAt(a),
                      this.memory.charCodeAt(a + 3) << 8 |
                        this.memory.charCodeAt(a + 2),
                    ))
                  : (this.v1.xxh_update(
                    this.memory[a + 1] << 8 | this.memory[a],
                    this.memory[a + 3] << 8 | this.memory[a + 2],
                  ),
                    a += 4,
                    this.v2.xxh_update(
                      this.memory[a + 1] << 8 | this.memory[a],
                      this.memory[a + 3] << 8 | this.memory[a + 2],
                    ),
                    a += 4,
                    this.v3.xxh_update(
                      this.memory[a + 1] << 8 | this.memory[a],
                      this.memory[a + 3] << 8 | this.memory[a + 2],
                    ),
                    a += 4,
                    this.v4.xxh_update(
                      this.memory[a + 1] << 8 | this.memory[a],
                      this.memory[a + 3] << 8 | this.memory[a + 2],
                    )),
                  i += 16 - this.memsize,
                  this.memsize = 0,
                  r && (this.memory = "");
              }
              if (i <= n - 16) {
                var s = n - 16;
                do {
                  r
                    ? (this.v1.xxh_update(
                      t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                      t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                    ),
                      i += 4,
                      this.v2.xxh_update(
                        t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                        t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                      ),
                      i += 4,
                      this.v3.xxh_update(
                        t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                        t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                      ),
                      i += 4,
                      this.v4.xxh_update(
                        t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                        t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                      ))
                    : (this.v1.xxh_update(
                      t[i + 1] << 8 | t[i],
                      t[i + 3] << 8 | t[i + 2],
                    ),
                      i += 4,
                      this.v2.xxh_update(
                        t[i + 1] << 8 | t[i],
                        t[i + 3] << 8 | t[i + 2],
                      ),
                      i += 4,
                      this.v3.xxh_update(
                        t[i + 1] << 8 | t[i],
                        t[i + 3] << 8 | t[i + 2],
                      ),
                      i += 4,
                      this.v4.xxh_update(
                        t[i + 1] << 8 | t[i],
                        t[i + 3] << 8 | t[i + 2],
                      )), i += 4;
                } while (i <= s);
              }
              return i < n &&
                (r
                  ? this.memory += t.slice(i)
                  : e
                  ? this.memory.set(t.subarray(i, n), this.memsize)
                  : t.copy(this.memory, this.memsize, i, n),
                  this.memsize = n - i),
                this;
            },
            H.prototype.digest = function () {
              var t,
                e,
                r = this.memory,
                i = "string" == typeof r,
                o = 0,
                n = this.memsize,
                a = new L();
              for (
                (t = this.total_len >= 16
                  ? this.v1.rotl(1).add(
                    this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18))),
                  )
                  : this.seed.clone().add(C)).add(a.fromNumber(this.total_len));
                o <= n - 4;
              ) {
                i
                  ? a.fromBits(
                    r.charCodeAt(o + 1) << 8 | r.charCodeAt(o),
                    r.charCodeAt(o + 3) << 8 | r.charCodeAt(o + 2),
                  )
                  : a.fromBits(r[o + 1] << 8 | r[o], r[o + 3] << 8 | r[o + 2]),
                  t.add(a.multiply(S)).rotl(17).multiply(O),
                  o += 4;
              }
              for (; o < n;) {
                a.fromBits(i ? r.charCodeAt(o++) : r[o++], 0),
                  t.add(a.multiply(C)).rotl(11).multiply(F);
              }
              return e = t.clone().shiftRight(15),
                t.xor(e).multiply(T),
                e = t.clone().shiftRight(13),
                t.xor(e).multiply(S),
                e = t.clone().shiftRight(16),
                t.xor(e),
                this.init(this.seed),
                t;
            };
          var P = H,
            D = E.UINT64,
            j = D("11400714785074694791"),
            k = D("14029467366897019727"),
            $ = D("1609587929392839161"),
            z = D("9650029242287828579"),
            N = D("2870177450012600261");
          function X() {
            return 2 == arguments.length
              ? new X(arguments[1]).update(arguments[0]).digest()
              : this instanceof X
              ? void I.call(this, arguments[0])
              : new X(arguments[0]);
          }
          function I(t) {
            return this.seed = t instanceof D ? t.clone() : D(t),
              this.v1 = this.seed.clone().add(j).add(k),
              this.v2 = this.seed.clone().add(k),
              this.v3 = this.seed.clone(),
              this.v4 = this.seed.clone().subtract(j),
              this.total_len = 0,
              this.memsize = 0,
              this.memory = null,
              this;
          }
          X.prototype.init = I,
            X.prototype.update = function (t) {
              var e, r = "string" == typeof t;
              r && (t = function (t) {
                for (var e = [], r = 0, i = t.length; r < i; r++) {
                  var o = t.charCodeAt(r);
                  o < 128
                    ? e.push(o)
                    : o < 2048
                    ? e.push(192 | o >> 6, 128 | 63 & o)
                    : o < 55296 || o >= 57344
                    ? e.push(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o)
                    : (r++,
                      o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(r)),
                      e.push(
                        240 | o >> 18,
                        128 | o >> 12 & 63,
                        128 | o >> 6 & 63,
                        128 | 63 & o,
                      ));
                }
                return new Uint8Array(e);
              }(t),
                r = !1,
                e = !0),
                "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer &&
                (e = !0, t = new Uint8Array(t));
              var i = 0, o = t.length, n = i + o;
              if (0 == o) return this;
              if (
                this.total_len += o,
                  0 == this.memsize && (this.memory = r
                    ? ""
                    : e
                    ? new Uint8Array(32)
                    : new Buffer(32)),
                  this.memsize + o < 32
              ) {
                return r
                  ? this.memory += t
                  : e
                  ? this.memory.set(t.subarray(0, o), this.memsize)
                  : t.copy(this.memory, this.memsize, 0, o),
                  this.memsize += o,
                  this;
              }
              if (this.memsize > 0) {
                r
                  ? this.memory += t.slice(0, 32 - this.memsize)
                  : e
                  ? this.memory.set(
                    t.subarray(0, 32 - this.memsize),
                    this.memsize,
                  )
                  : t.copy(this.memory, this.memsize, 0, 32 - this.memsize);
                var a = 0;
                if (r) {
                  l = D(
                    this.memory.charCodeAt(a + 1) << 8 |
                      this.memory.charCodeAt(a),
                    this.memory.charCodeAt(a + 3) << 8 |
                      this.memory.charCodeAt(a + 2),
                    this.memory.charCodeAt(a + 5) << 8 |
                      this.memory.charCodeAt(a + 4),
                    this.memory.charCodeAt(a + 7) << 8 |
                      this.memory.charCodeAt(a + 6),
                  ),
                    this.v1.add(l.multiply(k)).rotl(31).multiply(j),
                    a += 8,
                    l = D(
                      this.memory.charCodeAt(a + 1) << 8 |
                        this.memory.charCodeAt(a),
                      this.memory.charCodeAt(a + 3) << 8 |
                        this.memory.charCodeAt(a + 2),
                      this.memory.charCodeAt(a + 5) << 8 |
                        this.memory.charCodeAt(a + 4),
                      this.memory.charCodeAt(a + 7) << 8 |
                        this.memory.charCodeAt(a + 6),
                    ),
                    this.v2.add(l.multiply(k)).rotl(31).multiply(j),
                    a += 8,
                    l = D(
                      this.memory.charCodeAt(a + 1) << 8 |
                        this.memory.charCodeAt(a),
                      this.memory.charCodeAt(a + 3) << 8 |
                        this.memory.charCodeAt(a + 2),
                      this.memory.charCodeAt(a + 5) << 8 |
                        this.memory.charCodeAt(a + 4),
                      this.memory.charCodeAt(a + 7) << 8 |
                        this.memory.charCodeAt(a + 6),
                    ),
                    this.v3.add(l.multiply(k)).rotl(31).multiply(j),
                    a += 8,
                    l = D(
                      this.memory.charCodeAt(a + 1) << 8 |
                        this.memory.charCodeAt(a),
                      this.memory.charCodeAt(a + 3) << 8 |
                        this.memory.charCodeAt(a + 2),
                      this.memory.charCodeAt(a + 5) << 8 |
                        this.memory.charCodeAt(a + 4),
                      this.memory.charCodeAt(a + 7) << 8 |
                        this.memory.charCodeAt(a + 6),
                    ),
                    this.v4.add(l.multiply(k)).rotl(31).multiply(j);
                } else {l = D(
                    this.memory[a + 1] << 8 | this.memory[a],
                    this.memory[a + 3] << 8 | this.memory[a + 2],
                    this.memory[a + 5] << 8 | this.memory[a + 4],
                    this.memory[a + 7] << 8 | this.memory[a + 6],
                  ),
                    this.v1.add(l.multiply(k)).rotl(31).multiply(j),
                    a += 8,
                    l = D(
                      this.memory[a + 1] << 8 | this.memory[a],
                      this.memory[a + 3] << 8 | this.memory[a + 2],
                      this.memory[a + 5] << 8 | this.memory[a + 4],
                      this.memory[a + 7] << 8 | this.memory[a + 6],
                    ),
                    this.v2.add(l.multiply(k)).rotl(31).multiply(j),
                    a += 8,
                    l = D(
                      this.memory[a + 1] << 8 | this.memory[a],
                      this.memory[a + 3] << 8 | this.memory[a + 2],
                      this.memory[a + 5] << 8 | this.memory[a + 4],
                      this.memory[a + 7] << 8 | this.memory[a + 6],
                    ),
                    this.v3.add(l.multiply(k)).rotl(31).multiply(j),
                    a += 8,
                    l = D(
                      this.memory[a + 1] << 8 | this.memory[a],
                      this.memory[a + 3] << 8 | this.memory[a + 2],
                      this.memory[a + 5] << 8 | this.memory[a + 4],
                      this.memory[a + 7] << 8 | this.memory[a + 6],
                    ),
                    this.v4.add(l.multiply(k)).rotl(31).multiply(j);}
                i += 32 - this.memsize,
                  this.memsize = 0,
                  r && (this.memory = "");
              }
              if (i <= n - 32) {
                var s = n - 32;
                do {
                  var l;
                  if (r) {
                    l = D(
                      t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                      t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                      t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4),
                      t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6),
                    ),
                      this.v1.add(l.multiply(k)).rotl(31).multiply(j),
                      i += 8,
                      l = D(
                        t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                        t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                        t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4),
                        t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6),
                      ),
                      this.v2.add(l.multiply(k)).rotl(31).multiply(j),
                      i += 8,
                      l = D(
                        t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                        t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                        t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4),
                        t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6),
                      ),
                      this.v3.add(l.multiply(k)).rotl(31).multiply(j),
                      i += 8,
                      l = D(
                        t.charCodeAt(i + 1) << 8 | t.charCodeAt(i),
                        t.charCodeAt(i + 3) << 8 | t.charCodeAt(i + 2),
                        t.charCodeAt(i + 5) << 8 | t.charCodeAt(i + 4),
                        t.charCodeAt(i + 7) << 8 | t.charCodeAt(i + 6),
                      ),
                      this.v4.add(l.multiply(k)).rotl(31).multiply(j);
                  } else {l = D(
                      t[i + 1] << 8 | t[i],
                      t[i + 3] << 8 | t[i + 2],
                      t[i + 5] << 8 | t[i + 4],
                      t[i + 7] << 8 | t[i + 6],
                    ),
                      this.v1.add(l.multiply(k)).rotl(31).multiply(j),
                      l = D(
                        t[(i += 8) + 1] << 8 | t[i],
                        t[i + 3] << 8 | t[i + 2],
                        t[i + 5] << 8 | t[i + 4],
                        t[i + 7] << 8 | t[i + 6],
                      ),
                      this.v2.add(l.multiply(k)).rotl(31).multiply(j),
                      l = D(
                        t[(i += 8) + 1] << 8 | t[i],
                        t[i + 3] << 8 | t[i + 2],
                        t[i + 5] << 8 | t[i + 4],
                        t[i + 7] << 8 | t[i + 6],
                      ),
                      this.v3.add(l.multiply(k)).rotl(31).multiply(j),
                      l = D(
                        t[(i += 8) + 1] << 8 | t[i],
                        t[i + 3] << 8 | t[i + 2],
                        t[i + 5] << 8 | t[i + 4],
                        t[i + 7] << 8 | t[i + 6],
                      ),
                      this.v4.add(l.multiply(k)).rotl(31).multiply(j);}
                  i += 8;
                } while (i <= s);
              }
              return i < n &&
                (r
                  ? this.memory += t.slice(i)
                  : e
                  ? this.memory.set(t.subarray(i, n), this.memsize)
                  : t.copy(this.memory, this.memsize, i, n),
                  this.memsize = n - i),
                this;
            },
            X.prototype.digest = function () {
              var t,
                e,
                r = this.memory,
                i = "string" == typeof r,
                o = 0,
                n = this.memsize,
                a = new D();
              for (
                this.total_len >= 32
                  ? ((t = this.v1.clone().rotl(1)).add(this.v2.clone().rotl(7)),
                    t.add(this.v3.clone().rotl(12)),
                    t.add(this.v4.clone().rotl(18)),
                    t.xor(this.v1.multiply(k).rotl(31).multiply(j)),
                    t.multiply(j).add(z),
                    t.xor(this.v2.multiply(k).rotl(31).multiply(j)),
                    t.multiply(j).add(z),
                    t.xor(this.v3.multiply(k).rotl(31).multiply(j)),
                    t.multiply(j).add(z),
                    t.xor(this.v4.multiply(k).rotl(31).multiply(j)),
                    t.multiply(j).add(z))
                  : t = this.seed.clone().add(N),
                  t.add(a.fromNumber(this.total_len));
                o <= n - 8;
              ) {
                i
                  ? a.fromBits(
                    r.charCodeAt(o + 1) << 8 | r.charCodeAt(o),
                    r.charCodeAt(o + 3) << 8 | r.charCodeAt(o + 2),
                    r.charCodeAt(o + 5) << 8 | r.charCodeAt(o + 4),
                    r.charCodeAt(o + 7) << 8 | r.charCodeAt(o + 6),
                  )
                  : a.fromBits(
                    r[o + 1] << 8 | r[o],
                    r[o + 3] << 8 | r[o + 2],
                    r[o + 5] << 8 | r[o + 4],
                    r[o + 7] << 8 | r[o + 6],
                  ),
                  a.multiply(k).rotl(31).multiply(j),
                  t.xor(a).rotl(27).multiply(j).add(z),
                  o += 8;
              }
              for (
                o + 4 <= n && (i
                  ? a.fromBits(
                    r.charCodeAt(o + 1) << 8 | r.charCodeAt(o),
                    r.charCodeAt(o + 3) << 8 | r.charCodeAt(o + 2),
                    0,
                    0,
                  )
                  : a.fromBits(
                    r[o + 1] << 8 | r[o],
                    r[o + 3] << 8 | r[o + 2],
                    0,
                    0,
                  ),
                  t.xor(a.multiply(j)).rotl(23).multiply(k).add($),
                  o += 4);
                o < n;
              ) {
                a.fromBits(i ? r.charCodeAt(o++) : r[o++], 0, 0, 0),
                  t.xor(a.multiply(N)).rotl(11).multiply(j);
              }
              return e = t.clone().shiftRight(33),
                t.xor(e).multiply(k),
                e = t.clone().shiftRight(29),
                t.xor(e).multiply($),
                e = t.clone().shiftRight(32),
                t.xor(e),
                this.init(this.seed),
                t;
            };
          var K = { h32: P, h64: X }, B = {}, J = {};
          Object.defineProperty(J, "__esModule", { value: !0 }),
            J.bodyRegExps = {
              xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
              html4:
                /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
              html5:
                /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
            },
            J.namedReferences = {
              xml: {
                entities: {
                  "&lt;": "<",
                  "&gt;": ">",
                  "&quot;": '"',
                  "&apos;": "'",
                  "&amp;": "&",
                },
                characters: {
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&apos;",
                  "&": "&amp;",
                },
              },
              html4: {
                entities: {
                  "&apos;": "'",
                  "&nbsp": "\xa0",
                  "&nbsp;": "\xa0",
                  "&iexcl": "\xa1",
                  "&iexcl;": "\xa1",
                  "&cent": "\xa2",
                  "&cent;": "\xa2",
                  "&pound": "\xa3",
                  "&pound;": "\xa3",
                  "&curren": "\xa4",
                  "&curren;": "\xa4",
                  "&yen": "\xa5",
                  "&yen;": "\xa5",
                  "&brvbar": "\xa6",
                  "&brvbar;": "\xa6",
                  "&sect": "\xa7",
                  "&sect;": "\xa7",
                  "&uml": "\xa8",
                  "&uml;": "\xa8",
                  "&copy": "\xa9",
                  "&copy;": "\xa9",
                  "&ordf": "\xaa",
                  "&ordf;": "\xaa",
                  "&laquo": "\xab",
                  "&laquo;": "\xab",
                  "&not": "\xac",
                  "&not;": "\xac",
                  "&shy": "\xad",
                  "&shy;": "\xad",
                  "&reg": "\xae",
                  "&reg;": "\xae",
                  "&macr": "\xaf",
                  "&macr;": "\xaf",
                  "&deg": "\xb0",
                  "&deg;": "\xb0",
                  "&plusmn": "\xb1",
                  "&plusmn;": "\xb1",
                  "&sup2": "\xb2",
                  "&sup2;": "\xb2",
                  "&sup3": "\xb3",
                  "&sup3;": "\xb3",
                  "&acute": "\xb4",
                  "&acute;": "\xb4",
                  "&micro": "\xb5",
                  "&micro;": "\xb5",
                  "&para": "\xb6",
                  "&para;": "\xb6",
                  "&middot": "\xb7",
                  "&middot;": "\xb7",
                  "&cedil": "\xb8",
                  "&cedil;": "\xb8",
                  "&sup1": "\xb9",
                  "&sup1;": "\xb9",
                  "&ordm": "\xba",
                  "&ordm;": "\xba",
                  "&raquo": "\xbb",
                  "&raquo;": "\xbb",
                  "&frac14": "\xbc",
                  "&frac14;": "\xbc",
                  "&frac12": "\xbd",
                  "&frac12;": "\xbd",
                  "&frac34": "\xbe",
                  "&frac34;": "\xbe",
                  "&iquest": "\xbf",
                  "&iquest;": "\xbf",
                  "&Agrave": "\xc0",
                  "&Agrave;": "\xc0",
                  "&Aacute": "\xc1",
                  "&Aacute;": "\xc1",
                  "&Acirc": "\xc2",
                  "&Acirc;": "\xc2",
                  "&Atilde": "\xc3",
                  "&Atilde;": "\xc3",
                  "&Auml": "\xc4",
                  "&Auml;": "\xc4",
                  "&Aring": "\xc5",
                  "&Aring;": "\xc5",
                  "&AElig": "\xc6",
                  "&AElig;": "\xc6",
                  "&Ccedil": "\xc7",
                  "&Ccedil;": "\xc7",
                  "&Egrave": "\xc8",
                  "&Egrave;": "\xc8",
                  "&Eacute": "\xc9",
                  "&Eacute;": "\xc9",
                  "&Ecirc": "\xca",
                  "&Ecirc;": "\xca",
                  "&Euml": "\xcb",
                  "&Euml;": "\xcb",
                  "&Igrave": "\xcc",
                  "&Igrave;": "\xcc",
                  "&Iacute": "\xcd",
                  "&Iacute;": "\xcd",
                  "&Icirc": "\xce",
                  "&Icirc;": "\xce",
                  "&Iuml": "\xcf",
                  "&Iuml;": "\xcf",
                  "&ETH": "\xd0",
                  "&ETH;": "\xd0",
                  "&Ntilde": "\xd1",
                  "&Ntilde;": "\xd1",
                  "&Ograve": "\xd2",
                  "&Ograve;": "\xd2",
                  "&Oacute": "\xd3",
                  "&Oacute;": "\xd3",
                  "&Ocirc": "\xd4",
                  "&Ocirc;": "\xd4",
                  "&Otilde": "\xd5",
                  "&Otilde;": "\xd5",
                  "&Ouml": "\xd6",
                  "&Ouml;": "\xd6",
                  "&times": "\xd7",
                  "&times;": "\xd7",
                  "&Oslash": "\xd8",
                  "&Oslash;": "\xd8",
                  "&Ugrave": "\xd9",
                  "&Ugrave;": "\xd9",
                  "&Uacute": "\xda",
                  "&Uacute;": "\xda",
                  "&Ucirc": "\xdb",
                  "&Ucirc;": "\xdb",
                  "&Uuml": "\xdc",
                  "&Uuml;": "\xdc",
                  "&Yacute": "\xdd",
                  "&Yacute;": "\xdd",
                  "&THORN": "\xde",
                  "&THORN;": "\xde",
                  "&szlig": "\xdf",
                  "&szlig;": "\xdf",
                  "&agrave": "\xe0",
                  "&agrave;": "\xe0",
                  "&aacute": "\xe1",
                  "&aacute;": "\xe1",
                  "&acirc": "\xe2",
                  "&acirc;": "\xe2",
                  "&atilde": "\xe3",
                  "&atilde;": "\xe3",
                  "&auml": "\xe4",
                  "&auml;": "\xe4",
                  "&aring": "\xe5",
                  "&aring;": "\xe5",
                  "&aelig": "\xe6",
                  "&aelig;": "\xe6",
                  "&ccedil": "\xe7",
                  "&ccedil;": "\xe7",
                  "&egrave": "\xe8",
                  "&egrave;": "\xe8",
                  "&eacute": "\xe9",
                  "&eacute;": "\xe9",
                  "&ecirc": "\xea",
                  "&ecirc;": "\xea",
                  "&euml": "\xeb",
                  "&euml;": "\xeb",
                  "&igrave": "\xec",
                  "&igrave;": "\xec",
                  "&iacute": "\xed",
                  "&iacute;": "\xed",
                  "&icirc": "\xee",
                  "&icirc;": "\xee",
                  "&iuml": "\xef",
                  "&iuml;": "\xef",
                  "&eth": "\xf0",
                  "&eth;": "\xf0",
                  "&ntilde": "\xf1",
                  "&ntilde;": "\xf1",
                  "&ograve": "\xf2",
                  "&ograve;": "\xf2",
                  "&oacute": "\xf3",
                  "&oacute;": "\xf3",
                  "&ocirc": "\xf4",
                  "&ocirc;": "\xf4",
                  "&otilde": "\xf5",
                  "&otilde;": "\xf5",
                  "&ouml": "\xf6",
                  "&ouml;": "\xf6",
                  "&divide": "\xf7",
                  "&divide;": "\xf7",
                  "&oslash": "\xf8",
                  "&oslash;": "\xf8",
                  "&ugrave": "\xf9",
                  "&ugrave;": "\xf9",
                  "&uacute": "\xfa",
                  "&uacute;": "\xfa",
                  "&ucirc": "\xfb",
                  "&ucirc;": "\xfb",
                  "&uuml": "\xfc",
                  "&uuml;": "\xfc",
                  "&yacute": "\xfd",
                  "&yacute;": "\xfd",
                  "&thorn": "\xfe",
                  "&thorn;": "\xfe",
                  "&yuml": "\xff",
                  "&yuml;": "\xff",
                  "&quot": '"',
                  "&quot;": '"',
                  "&amp": "&",
                  "&amp;": "&",
                  "&lt": "<",
                  "&lt;": "<",
                  "&gt": ">",
                  "&gt;": ">",
                  "&OElig;": "\u0152",
                  "&oelig;": "\u0153",
                  "&Scaron;": "\u0160",
                  "&scaron;": "\u0161",
                  "&Yuml;": "\u0178",
                  "&circ;": "\u02c6",
                  "&tilde;": "\u02dc",
                  "&ensp;": "\u2002",
                  "&emsp;": "\u2003",
                  "&thinsp;": "\u2009",
                  "&zwnj;": "\u200c",
                  "&zwj;": "\u200d",
                  "&lrm;": "\u200e",
                  "&rlm;": "\u200f",
                  "&ndash;": "\u2013",
                  "&mdash;": "\u2014",
                  "&lsquo;": "\u2018",
                  "&rsquo;": "\u2019",
                  "&sbquo;": "\u201a",
                  "&ldquo;": "\u201c",
                  "&rdquo;": "\u201d",
                  "&bdquo;": "\u201e",
                  "&dagger;": "\u2020",
                  "&Dagger;": "\u2021",
                  "&permil;": "\u2030",
                  "&lsaquo;": "\u2039",
                  "&rsaquo;": "\u203a",
                  "&euro;": "\u20ac",
                  "&fnof;": "\u0192",
                  "&Alpha;": "\u0391",
                  "&Beta;": "\u0392",
                  "&Gamma;": "\u0393",
                  "&Delta;": "\u0394",
                  "&Epsilon;": "\u0395",
                  "&Zeta;": "\u0396",
                  "&Eta;": "\u0397",
                  "&Theta;": "\u0398",
                  "&Iota;": "\u0399",
                  "&Kappa;": "\u039a",
                  "&Lambda;": "\u039b",
                  "&Mu;": "\u039c",
                  "&Nu;": "\u039d",
                  "&Xi;": "\u039e",
                  "&Omicron;": "\u039f",
                  "&Pi;": "\u03a0",
                  "&Rho;": "\u03a1",
                  "&Sigma;": "\u03a3",
                  "&Tau;": "\u03a4",
                  "&Upsilon;": "\u03a5",
                  "&Phi;": "\u03a6",
                  "&Chi;": "\u03a7",
                  "&Psi;": "\u03a8",
                  "&Omega;": "\u03a9",
                  "&alpha;": "\u03b1",
                  "&beta;": "\u03b2",
                  "&gamma;": "\u03b3",
                  "&delta;": "\u03b4",
                  "&epsilon;": "\u03b5",
                  "&zeta;": "\u03b6",
                  "&eta;": "\u03b7",
                  "&theta;": "\u03b8",
                  "&iota;": "\u03b9",
                  "&kappa;": "\u03ba",
                  "&lambda;": "\u03bb",
                  "&mu;": "\u03bc",
                  "&nu;": "\u03bd",
                  "&xi;": "\u03be",
                  "&omicron;": "\u03bf",
                  "&pi;": "\u03c0",
                  "&rho;": "\u03c1",
                  "&sigmaf;": "\u03c2",
                  "&sigma;": "\u03c3",
                  "&tau;": "\u03c4",
                  "&upsilon;": "\u03c5",
                  "&phi;": "\u03c6",
                  "&chi;": "\u03c7",
                  "&psi;": "\u03c8",
                  "&omega;": "\u03c9",
                  "&thetasym;": "\u03d1",
                  "&upsih;": "\u03d2",
                  "&piv;": "\u03d6",
                  "&bull;": "\u2022",
                  "&hellip;": "\u2026",
                  "&prime;": "\u2032",
                  "&Prime;": "\u2033",
                  "&oline;": "\u203e",
                  "&frasl;": "\u2044",
                  "&weierp;": "\u2118",
                  "&image;": "\u2111",
                  "&real;": "\u211c",
                  "&trade;": "\u2122",
                  "&alefsym;": "\u2135",
                  "&larr;": "\u2190",
                  "&uarr;": "\u2191",
                  "&rarr;": "\u2192",
                  "&darr;": "\u2193",
                  "&harr;": "\u2194",
                  "&crarr;": "\u21b5",
                  "&lArr;": "\u21d0",
                  "&uArr;": "\u21d1",
                  "&rArr;": "\u21d2",
                  "&dArr;": "\u21d3",
                  "&hArr;": "\u21d4",
                  "&forall;": "\u2200",
                  "&part;": "\u2202",
                  "&exist;": "\u2203",
                  "&empty;": "\u2205",
                  "&nabla;": "\u2207",
                  "&isin;": "\u2208",
                  "&notin;": "\u2209",
                  "&ni;": "\u220b",
                  "&prod;": "\u220f",
                  "&sum;": "\u2211",
                  "&minus;": "\u2212",
                  "&lowast;": "\u2217",
                  "&radic;": "\u221a",
                  "&prop;": "\u221d",
                  "&infin;": "\u221e",
                  "&ang;": "\u2220",
                  "&and;": "\u2227",
                  "&or;": "\u2228",
                  "&cap;": "\u2229",
                  "&cup;": "\u222a",
                  "&int;": "\u222b",
                  "&there4;": "\u2234",
                  "&sim;": "\u223c",
                  "&cong;": "\u2245",
                  "&asymp;": "\u2248",
                  "&ne;": "\u2260",
                  "&equiv;": "\u2261",
                  "&le;": "\u2264",
                  "&ge;": "\u2265",
                  "&sub;": "\u2282",
                  "&sup;": "\u2283",
                  "&nsub;": "\u2284",
                  "&sube;": "\u2286",
                  "&supe;": "\u2287",
                  "&oplus;": "\u2295",
                  "&otimes;": "\u2297",
                  "&perp;": "\u22a5",
                  "&sdot;": "\u22c5",
                  "&lceil;": "\u2308",
                  "&rceil;": "\u2309",
                  "&lfloor;": "\u230a",
                  "&rfloor;": "\u230b",
                  "&lang;": "\u2329",
                  "&rang;": "\u232a",
                  "&loz;": "\u25ca",
                  "&spades;": "\u2660",
                  "&clubs;": "\u2663",
                  "&hearts;": "\u2665",
                  "&diams;": "\u2666",
                },
                characters: {
                  "'": "&apos;",
                  "\xa0": "&nbsp;",
                  "\xa1": "&iexcl;",
                  "\xa2": "&cent;",
                  "\xa3": "&pound;",
                  "\xa4": "&curren;",
                  "\xa5": "&yen;",
                  "\xa6": "&brvbar;",
                  "\xa7": "&sect;",
                  "\xa8": "&uml;",
                  "\xa9": "&copy;",
                  "\xaa": "&ordf;",
                  "\xab": "&laquo;",
                  "\xac": "&not;",
                  "\xad": "&shy;",
                  "\xae": "&reg;",
                  "\xaf": "&macr;",
                  "\xb0": "&deg;",
                  "\xb1": "&plusmn;",
                  "\xb2": "&sup2;",
                  "\xb3": "&sup3;",
                  "\xb4": "&acute;",
                  "\xb5": "&micro;",
                  "\xb6": "&para;",
                  "\xb7": "&middot;",
                  "\xb8": "&cedil;",
                  "\xb9": "&sup1;",
                  "\xba": "&ordm;",
                  "\xbb": "&raquo;",
                  "\xbc": "&frac14;",
                  "\xbd": "&frac12;",
                  "\xbe": "&frac34;",
                  "\xbf": "&iquest;",
                  "\xc0": "&Agrave;",
                  "\xc1": "&Aacute;",
                  "\xc2": "&Acirc;",
                  "\xc3": "&Atilde;",
                  "\xc4": "&Auml;",
                  "\xc5": "&Aring;",
                  "\xc6": "&AElig;",
                  "\xc7": "&Ccedil;",
                  "\xc8": "&Egrave;",
                  "\xc9": "&Eacute;",
                  "\xca": "&Ecirc;",
                  "\xcb": "&Euml;",
                  "\xcc": "&Igrave;",
                  "\xcd": "&Iacute;",
                  "\xce": "&Icirc;",
                  "\xcf": "&Iuml;",
                  "\xd0": "&ETH;",
                  "\xd1": "&Ntilde;",
                  "\xd2": "&Ograve;",
                  "\xd3": "&Oacute;",
                  "\xd4": "&Ocirc;",
                  "\xd5": "&Otilde;",
                  "\xd6": "&Ouml;",
                  "\xd7": "&times;",
                  "\xd8": "&Oslash;",
                  "\xd9": "&Ugrave;",
                  "\xda": "&Uacute;",
                  "\xdb": "&Ucirc;",
                  "\xdc": "&Uuml;",
                  "\xdd": "&Yacute;",
                  "\xde": "&THORN;",
                  "\xdf": "&szlig;",
                  "\xe0": "&agrave;",
                  "\xe1": "&aacute;",
                  "\xe2": "&acirc;",
                  "\xe3": "&atilde;",
                  "\xe4": "&auml;",
                  "\xe5": "&aring;",
                  "\xe6": "&aelig;",
                  "\xe7": "&ccedil;",
                  "\xe8": "&egrave;",
                  "\xe9": "&eacute;",
                  "\xea": "&ecirc;",
                  "\xeb": "&euml;",
                  "\xec": "&igrave;",
                  "\xed": "&iacute;",
                  "\xee": "&icirc;",
                  "\xef": "&iuml;",
                  "\xf0": "&eth;",
                  "\xf1": "&ntilde;",
                  "\xf2": "&ograve;",
                  "\xf3": "&oacute;",
                  "\xf4": "&ocirc;",
                  "\xf5": "&otilde;",
                  "\xf6": "&ouml;",
                  "\xf7": "&divide;",
                  "\xf8": "&oslash;",
                  "\xf9": "&ugrave;",
                  "\xfa": "&uacute;",
                  "\xfb": "&ucirc;",
                  "\xfc": "&uuml;",
                  "\xfd": "&yacute;",
                  "\xfe": "&thorn;",
                  "\xff": "&yuml;",
                  '"': "&quot;",
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  "\u0152": "&OElig;",
                  "\u0153": "&oelig;",
                  "\u0160": "&Scaron;",
                  "\u0161": "&scaron;",
                  "\u0178": "&Yuml;",
                  "\u02c6": "&circ;",
                  "\u02dc": "&tilde;",
                  "\u2002": "&ensp;",
                  "\u2003": "&emsp;",
                  "\u2009": "&thinsp;",
                  "\u200c": "&zwnj;",
                  "\u200d": "&zwj;",
                  "\u200e": "&lrm;",
                  "\u200f": "&rlm;",
                  "\u2013": "&ndash;",
                  "\u2014": "&mdash;",
                  "\u2018": "&lsquo;",
                  "\u2019": "&rsquo;",
                  "\u201a": "&sbquo;",
                  "\u201c": "&ldquo;",
                  "\u201d": "&rdquo;",
                  "\u201e": "&bdquo;",
                  "\u2020": "&dagger;",
                  "\u2021": "&Dagger;",
                  "\u2030": "&permil;",
                  "\u2039": "&lsaquo;",
                  "\u203a": "&rsaquo;",
                  "\u20ac": "&euro;",
                  "\u0192": "&fnof;",
                  "\u0391": "&Alpha;",
                  "\u0392": "&Beta;",
                  "\u0393": "&Gamma;",
                  "\u0394": "&Delta;",
                  "\u0395": "&Epsilon;",
                  "\u0396": "&Zeta;",
                  "\u0397": "&Eta;",
                  "\u0398": "&Theta;",
                  "\u0399": "&Iota;",
                  "\u039a": "&Kappa;",
                  "\u039b": "&Lambda;",
                  "\u039c": "&Mu;",
                  "\u039d": "&Nu;",
                  "\u039e": "&Xi;",
                  "\u039f": "&Omicron;",
                  "\u03a0": "&Pi;",
                  "\u03a1": "&Rho;",
                  "\u03a3": "&Sigma;",
                  "\u03a4": "&Tau;",
                  "\u03a5": "&Upsilon;",
                  "\u03a6": "&Phi;",
                  "\u03a7": "&Chi;",
                  "\u03a8": "&Psi;",
                  "\u03a9": "&Omega;",
                  "\u03b1": "&alpha;",
                  "\u03b2": "&beta;",
                  "\u03b3": "&gamma;",
                  "\u03b4": "&delta;",
                  "\u03b5": "&epsilon;",
                  "\u03b6": "&zeta;",
                  "\u03b7": "&eta;",
                  "\u03b8": "&theta;",
                  "\u03b9": "&iota;",
                  "\u03ba": "&kappa;",
                  "\u03bb": "&lambda;",
                  "\u03bc": "&mu;",
                  "\u03bd": "&nu;",
                  "\u03be": "&xi;",
                  "\u03bf": "&omicron;",
                  "\u03c0": "&pi;",
                  "\u03c1": "&rho;",
                  "\u03c2": "&sigmaf;",
                  "\u03c3": "&sigma;",
                  "\u03c4": "&tau;",
                  "\u03c5": "&upsilon;",
                  "\u03c6": "&phi;",
                  "\u03c7": "&chi;",
                  "\u03c8": "&psi;",
                  "\u03c9": "&omega;",
                  "\u03d1": "&thetasym;",
                  "\u03d2": "&upsih;",
                  "\u03d6": "&piv;",
                  "\u2022": "&bull;",
                  "\u2026": "&hellip;",
                  "\u2032": "&prime;",
                  "\u2033": "&Prime;",
                  "\u203e": "&oline;",
                  "\u2044": "&frasl;",
                  "\u2118": "&weierp;",
                  "\u2111": "&image;",
                  "\u211c": "&real;",
                  "\u2122": "&trade;",
                  "\u2135": "&alefsym;",
                  "\u2190": "&larr;",
                  "\u2191": "&uarr;",
                  "\u2192": "&rarr;",
                  "\u2193": "&darr;",
                  "\u2194": "&harr;",
                  "\u21b5": "&crarr;",
                  "\u21d0": "&lArr;",
                  "\u21d1": "&uArr;",
                  "\u21d2": "&rArr;",
                  "\u21d3": "&dArr;",
                  "\u21d4": "&hArr;",
                  "\u2200": "&forall;",
                  "\u2202": "&part;",
                  "\u2203": "&exist;",
                  "\u2205": "&empty;",
                  "\u2207": "&nabla;",
                  "\u2208": "&isin;",
                  "\u2209": "&notin;",
                  "\u220b": "&ni;",
                  "\u220f": "&prod;",
                  "\u2211": "&sum;",
                  "\u2212": "&minus;",
                  "\u2217": "&lowast;",
                  "\u221a": "&radic;",
                  "\u221d": "&prop;",
                  "\u221e": "&infin;",
                  "\u2220": "&ang;",
                  "\u2227": "&and;",
                  "\u2228": "&or;",
                  "\u2229": "&cap;",
                  "\u222a": "&cup;",
                  "\u222b": "&int;",
                  "\u2234": "&there4;",
                  "\u223c": "&sim;",
                  "\u2245": "&cong;",
                  "\u2248": "&asymp;",
                  "\u2260": "&ne;",
                  "\u2261": "&equiv;",
                  "\u2264": "&le;",
                  "\u2265": "&ge;",
                  "\u2282": "&sub;",
                  "\u2283": "&sup;",
                  "\u2284": "&nsub;",
                  "\u2286": "&sube;",
                  "\u2287": "&supe;",
                  "\u2295": "&oplus;",
                  "\u2297": "&otimes;",
                  "\u22a5": "&perp;",
                  "\u22c5": "&sdot;",
                  "\u2308": "&lceil;",
                  "\u2309": "&rceil;",
                  "\u230a": "&lfloor;",
                  "\u230b": "&rfloor;",
                  "\u2329": "&lang;",
                  "\u232a": "&rang;",
                  "\u25ca": "&loz;",
                  "\u2660": "&spades;",
                  "\u2663": "&clubs;",
                  "\u2665": "&hearts;",
                  "\u2666": "&diams;",
                },
              },
              html5: {
                entities: {
                  "&AElig": "\xc6",
                  "&AElig;": "\xc6",
                  "&AMP": "&",
                  "&AMP;": "&",
                  "&Aacute": "\xc1",
                  "&Aacute;": "\xc1",
                  "&Abreve;": "\u0102",
                  "&Acirc": "\xc2",
                  "&Acirc;": "\xc2",
                  "&Acy;": "\u0410",
                  "&Afr;": "\ud835\udd04",
                  "&Agrave": "\xc0",
                  "&Agrave;": "\xc0",
                  "&Alpha;": "\u0391",
                  "&Amacr;": "\u0100",
                  "&And;": "\u2a53",
                  "&Aogon;": "\u0104",
                  "&Aopf;": "\ud835\udd38",
                  "&ApplyFunction;": "\u2061",
                  "&Aring": "\xc5",
                  "&Aring;": "\xc5",
                  "&Ascr;": "\ud835\udc9c",
                  "&Assign;": "\u2254",
                  "&Atilde": "\xc3",
                  "&Atilde;": "\xc3",
                  "&Auml": "\xc4",
                  "&Auml;": "\xc4",
                  "&Backslash;": "\u2216",
                  "&Barv;": "\u2ae7",
                  "&Barwed;": "\u2306",
                  "&Bcy;": "\u0411",
                  "&Because;": "\u2235",
                  "&Bernoullis;": "\u212c",
                  "&Beta;": "\u0392",
                  "&Bfr;": "\ud835\udd05",
                  "&Bopf;": "\ud835\udd39",
                  "&Breve;": "\u02d8",
                  "&Bscr;": "\u212c",
                  "&Bumpeq;": "\u224e",
                  "&CHcy;": "\u0427",
                  "&COPY": "\xa9",
                  "&COPY;": "\xa9",
                  "&Cacute;": "\u0106",
                  "&Cap;": "\u22d2",
                  "&CapitalDifferentialD;": "\u2145",
                  "&Cayleys;": "\u212d",
                  "&Ccaron;": "\u010c",
                  "&Ccedil": "\xc7",
                  "&Ccedil;": "\xc7",
                  "&Ccirc;": "\u0108",
                  "&Cconint;": "\u2230",
                  "&Cdot;": "\u010a",
                  "&Cedilla;": "\xb8",
                  "&CenterDot;": "\xb7",
                  "&Cfr;": "\u212d",
                  "&Chi;": "\u03a7",
                  "&CircleDot;": "\u2299",
                  "&CircleMinus;": "\u2296",
                  "&CirclePlus;": "\u2295",
                  "&CircleTimes;": "\u2297",
                  "&ClockwiseContourIntegral;": "\u2232",
                  "&CloseCurlyDoubleQuote;": "\u201d",
                  "&CloseCurlyQuote;": "\u2019",
                  "&Colon;": "\u2237",
                  "&Colone;": "\u2a74",
                  "&Congruent;": "\u2261",
                  "&Conint;": "\u222f",
                  "&ContourIntegral;": "\u222e",
                  "&Copf;": "\u2102",
                  "&Coproduct;": "\u2210",
                  "&CounterClockwiseContourIntegral;": "\u2233",
                  "&Cross;": "\u2a2f",
                  "&Cscr;": "\ud835\udc9e",
                  "&Cup;": "\u22d3",
                  "&CupCap;": "\u224d",
                  "&DD;": "\u2145",
                  "&DDotrahd;": "\u2911",
                  "&DJcy;": "\u0402",
                  "&DScy;": "\u0405",
                  "&DZcy;": "\u040f",
                  "&Dagger;": "\u2021",
                  "&Darr;": "\u21a1",
                  "&Dashv;": "\u2ae4",
                  "&Dcaron;": "\u010e",
                  "&Dcy;": "\u0414",
                  "&Del;": "\u2207",
                  "&Delta;": "\u0394",
                  "&Dfr;": "\ud835\udd07",
                  "&DiacriticalAcute;": "\xb4",
                  "&DiacriticalDot;": "\u02d9",
                  "&DiacriticalDoubleAcute;": "\u02dd",
                  "&DiacriticalGrave;": "`",
                  "&DiacriticalTilde;": "\u02dc",
                  "&Diamond;": "\u22c4",
                  "&DifferentialD;": "\u2146",
                  "&Dopf;": "\ud835\udd3b",
                  "&Dot;": "\xa8",
                  "&DotDot;": "\u20dc",
                  "&DotEqual;": "\u2250",
                  "&DoubleContourIntegral;": "\u222f",
                  "&DoubleDot;": "\xa8",
                  "&DoubleDownArrow;": "\u21d3",
                  "&DoubleLeftArrow;": "\u21d0",
                  "&DoubleLeftRightArrow;": "\u21d4",
                  "&DoubleLeftTee;": "\u2ae4",
                  "&DoubleLongLeftArrow;": "\u27f8",
                  "&DoubleLongLeftRightArrow;": "\u27fa",
                  "&DoubleLongRightArrow;": "\u27f9",
                  "&DoubleRightArrow;": "\u21d2",
                  "&DoubleRightTee;": "\u22a8",
                  "&DoubleUpArrow;": "\u21d1",
                  "&DoubleUpDownArrow;": "\u21d5",
                  "&DoubleVerticalBar;": "\u2225",
                  "&DownArrow;": "\u2193",
                  "&DownArrowBar;": "\u2913",
                  "&DownArrowUpArrow;": "\u21f5",
                  "&DownBreve;": "\u0311",
                  "&DownLeftRightVector;": "\u2950",
                  "&DownLeftTeeVector;": "\u295e",
                  "&DownLeftVector;": "\u21bd",
                  "&DownLeftVectorBar;": "\u2956",
                  "&DownRightTeeVector;": "\u295f",
                  "&DownRightVector;": "\u21c1",
                  "&DownRightVectorBar;": "\u2957",
                  "&DownTee;": "\u22a4",
                  "&DownTeeArrow;": "\u21a7",
                  "&Downarrow;": "\u21d3",
                  "&Dscr;": "\ud835\udc9f",
                  "&Dstrok;": "\u0110",
                  "&ENG;": "\u014a",
                  "&ETH": "\xd0",
                  "&ETH;": "\xd0",
                  "&Eacute": "\xc9",
                  "&Eacute;": "\xc9",
                  "&Ecaron;": "\u011a",
                  "&Ecirc": "\xca",
                  "&Ecirc;": "\xca",
                  "&Ecy;": "\u042d",
                  "&Edot;": "\u0116",
                  "&Efr;": "\ud835\udd08",
                  "&Egrave": "\xc8",
                  "&Egrave;": "\xc8",
                  "&Element;": "\u2208",
                  "&Emacr;": "\u0112",
                  "&EmptySmallSquare;": "\u25fb",
                  "&EmptyVerySmallSquare;": "\u25ab",
                  "&Eogon;": "\u0118",
                  "&Eopf;": "\ud835\udd3c",
                  "&Epsilon;": "\u0395",
                  "&Equal;": "\u2a75",
                  "&EqualTilde;": "\u2242",
                  "&Equilibrium;": "\u21cc",
                  "&Escr;": "\u2130",
                  "&Esim;": "\u2a73",
                  "&Eta;": "\u0397",
                  "&Euml": "\xcb",
                  "&Euml;": "\xcb",
                  "&Exists;": "\u2203",
                  "&ExponentialE;": "\u2147",
                  "&Fcy;": "\u0424",
                  "&Ffr;": "\ud835\udd09",
                  "&FilledSmallSquare;": "\u25fc",
                  "&FilledVerySmallSquare;": "\u25aa",
                  "&Fopf;": "\ud835\udd3d",
                  "&ForAll;": "\u2200",
                  "&Fouriertrf;": "\u2131",
                  "&Fscr;": "\u2131",
                  "&GJcy;": "\u0403",
                  "&GT": ">",
                  "&GT;": ">",
                  "&Gamma;": "\u0393",
                  "&Gammad;": "\u03dc",
                  "&Gbreve;": "\u011e",
                  "&Gcedil;": "\u0122",
                  "&Gcirc;": "\u011c",
                  "&Gcy;": "\u0413",
                  "&Gdot;": "\u0120",
                  "&Gfr;": "\ud835\udd0a",
                  "&Gg;": "\u22d9",
                  "&Gopf;": "\ud835\udd3e",
                  "&GreaterEqual;": "\u2265",
                  "&GreaterEqualLess;": "\u22db",
                  "&GreaterFullEqual;": "\u2267",
                  "&GreaterGreater;": "\u2aa2",
                  "&GreaterLess;": "\u2277",
                  "&GreaterSlantEqual;": "\u2a7e",
                  "&GreaterTilde;": "\u2273",
                  "&Gscr;": "\ud835\udca2",
                  "&Gt;": "\u226b",
                  "&HARDcy;": "\u042a",
                  "&Hacek;": "\u02c7",
                  "&Hat;": "^",
                  "&Hcirc;": "\u0124",
                  "&Hfr;": "\u210c",
                  "&HilbertSpace;": "\u210b",
                  "&Hopf;": "\u210d",
                  "&HorizontalLine;": "\u2500",
                  "&Hscr;": "\u210b",
                  "&Hstrok;": "\u0126",
                  "&HumpDownHump;": "\u224e",
                  "&HumpEqual;": "\u224f",
                  "&IEcy;": "\u0415",
                  "&IJlig;": "\u0132",
                  "&IOcy;": "\u0401",
                  "&Iacute": "\xcd",
                  "&Iacute;": "\xcd",
                  "&Icirc": "\xce",
                  "&Icirc;": "\xce",
                  "&Icy;": "\u0418",
                  "&Idot;": "\u0130",
                  "&Ifr;": "\u2111",
                  "&Igrave": "\xcc",
                  "&Igrave;": "\xcc",
                  "&Im;": "\u2111",
                  "&Imacr;": "\u012a",
                  "&ImaginaryI;": "\u2148",
                  "&Implies;": "\u21d2",
                  "&Int;": "\u222c",
                  "&Integral;": "\u222b",
                  "&Intersection;": "\u22c2",
                  "&InvisibleComma;": "\u2063",
                  "&InvisibleTimes;": "\u2062",
                  "&Iogon;": "\u012e",
                  "&Iopf;": "\ud835\udd40",
                  "&Iota;": "\u0399",
                  "&Iscr;": "\u2110",
                  "&Itilde;": "\u0128",
                  "&Iukcy;": "\u0406",
                  "&Iuml": "\xcf",
                  "&Iuml;": "\xcf",
                  "&Jcirc;": "\u0134",
                  "&Jcy;": "\u0419",
                  "&Jfr;": "\ud835\udd0d",
                  "&Jopf;": "\ud835\udd41",
                  "&Jscr;": "\ud835\udca5",
                  "&Jsercy;": "\u0408",
                  "&Jukcy;": "\u0404",
                  "&KHcy;": "\u0425",
                  "&KJcy;": "\u040c",
                  "&Kappa;": "\u039a",
                  "&Kcedil;": "\u0136",
                  "&Kcy;": "\u041a",
                  "&Kfr;": "\ud835\udd0e",
                  "&Kopf;": "\ud835\udd42",
                  "&Kscr;": "\ud835\udca6",
                  "&LJcy;": "\u0409",
                  "&LT": "<",
                  "&LT;": "<",
                  "&Lacute;": "\u0139",
                  "&Lambda;": "\u039b",
                  "&Lang;": "\u27ea",
                  "&Laplacetrf;": "\u2112",
                  "&Larr;": "\u219e",
                  "&Lcaron;": "\u013d",
                  "&Lcedil;": "\u013b",
                  "&Lcy;": "\u041b",
                  "&LeftAngleBracket;": "\u27e8",
                  "&LeftArrow;": "\u2190",
                  "&LeftArrowBar;": "\u21e4",
                  "&LeftArrowRightArrow;": "\u21c6",
                  "&LeftCeiling;": "\u2308",
                  "&LeftDoubleBracket;": "\u27e6",
                  "&LeftDownTeeVector;": "\u2961",
                  "&LeftDownVector;": "\u21c3",
                  "&LeftDownVectorBar;": "\u2959",
                  "&LeftFloor;": "\u230a",
                  "&LeftRightArrow;": "\u2194",
                  "&LeftRightVector;": "\u294e",
                  "&LeftTee;": "\u22a3",
                  "&LeftTeeArrow;": "\u21a4",
                  "&LeftTeeVector;": "\u295a",
                  "&LeftTriangle;": "\u22b2",
                  "&LeftTriangleBar;": "\u29cf",
                  "&LeftTriangleEqual;": "\u22b4",
                  "&LeftUpDownVector;": "\u2951",
                  "&LeftUpTeeVector;": "\u2960",
                  "&LeftUpVector;": "\u21bf",
                  "&LeftUpVectorBar;": "\u2958",
                  "&LeftVector;": "\u21bc",
                  "&LeftVectorBar;": "\u2952",
                  "&Leftarrow;": "\u21d0",
                  "&Leftrightarrow;": "\u21d4",
                  "&LessEqualGreater;": "\u22da",
                  "&LessFullEqual;": "\u2266",
                  "&LessGreater;": "\u2276",
                  "&LessLess;": "\u2aa1",
                  "&LessSlantEqual;": "\u2a7d",
                  "&LessTilde;": "\u2272",
                  "&Lfr;": "\ud835\udd0f",
                  "&Ll;": "\u22d8",
                  "&Lleftarrow;": "\u21da",
                  "&Lmidot;": "\u013f",
                  "&LongLeftArrow;": "\u27f5",
                  "&LongLeftRightArrow;": "\u27f7",
                  "&LongRightArrow;": "\u27f6",
                  "&Longleftarrow;": "\u27f8",
                  "&Longleftrightarrow;": "\u27fa",
                  "&Longrightarrow;": "\u27f9",
                  "&Lopf;": "\ud835\udd43",
                  "&LowerLeftArrow;": "\u2199",
                  "&LowerRightArrow;": "\u2198",
                  "&Lscr;": "\u2112",
                  "&Lsh;": "\u21b0",
                  "&Lstrok;": "\u0141",
                  "&Lt;": "\u226a",
                  "&Map;": "\u2905",
                  "&Mcy;": "\u041c",
                  "&MediumSpace;": "\u205f",
                  "&Mellintrf;": "\u2133",
                  "&Mfr;": "\ud835\udd10",
                  "&MinusPlus;": "\u2213",
                  "&Mopf;": "\ud835\udd44",
                  "&Mscr;": "\u2133",
                  "&Mu;": "\u039c",
                  "&NJcy;": "\u040a",
                  "&Nacute;": "\u0143",
                  "&Ncaron;": "\u0147",
                  "&Ncedil;": "\u0145",
                  "&Ncy;": "\u041d",
                  "&NegativeMediumSpace;": "\u200b",
                  "&NegativeThickSpace;": "\u200b",
                  "&NegativeThinSpace;": "\u200b",
                  "&NegativeVeryThinSpace;": "\u200b",
                  "&NestedGreaterGreater;": "\u226b",
                  "&NestedLessLess;": "\u226a",
                  "&NewLine;": "\n",
                  "&Nfr;": "\ud835\udd11",
                  "&NoBreak;": "\u2060",
                  "&NonBreakingSpace;": "\xa0",
                  "&Nopf;": "\u2115",
                  "&Not;": "\u2aec",
                  "&NotCongruent;": "\u2262",
                  "&NotCupCap;": "\u226d",
                  "&NotDoubleVerticalBar;": "\u2226",
                  "&NotElement;": "\u2209",
                  "&NotEqual;": "\u2260",
                  "&NotEqualTilde;": "\u2242\u0338",
                  "&NotExists;": "\u2204",
                  "&NotGreater;": "\u226f",
                  "&NotGreaterEqual;": "\u2271",
                  "&NotGreaterFullEqual;": "\u2267\u0338",
                  "&NotGreaterGreater;": "\u226b\u0338",
                  "&NotGreaterLess;": "\u2279",
                  "&NotGreaterSlantEqual;": "\u2a7e\u0338",
                  "&NotGreaterTilde;": "\u2275",
                  "&NotHumpDownHump;": "\u224e\u0338",
                  "&NotHumpEqual;": "\u224f\u0338",
                  "&NotLeftTriangle;": "\u22ea",
                  "&NotLeftTriangleBar;": "\u29cf\u0338",
                  "&NotLeftTriangleEqual;": "\u22ec",
                  "&NotLess;": "\u226e",
                  "&NotLessEqual;": "\u2270",
                  "&NotLessGreater;": "\u2278",
                  "&NotLessLess;": "\u226a\u0338",
                  "&NotLessSlantEqual;": "\u2a7d\u0338",
                  "&NotLessTilde;": "\u2274",
                  "&NotNestedGreaterGreater;": "\u2aa2\u0338",
                  "&NotNestedLessLess;": "\u2aa1\u0338",
                  "&NotPrecedes;": "\u2280",
                  "&NotPrecedesEqual;": "\u2aaf\u0338",
                  "&NotPrecedesSlantEqual;": "\u22e0",
                  "&NotReverseElement;": "\u220c",
                  "&NotRightTriangle;": "\u22eb",
                  "&NotRightTriangleBar;": "\u29d0\u0338",
                  "&NotRightTriangleEqual;": "\u22ed",
                  "&NotSquareSubset;": "\u228f\u0338",
                  "&NotSquareSubsetEqual;": "\u22e2",
                  "&NotSquareSuperset;": "\u2290\u0338",
                  "&NotSquareSupersetEqual;": "\u22e3",
                  "&NotSubset;": "\u2282\u20d2",
                  "&NotSubsetEqual;": "\u2288",
                  "&NotSucceeds;": "\u2281",
                  "&NotSucceedsEqual;": "\u2ab0\u0338",
                  "&NotSucceedsSlantEqual;": "\u22e1",
                  "&NotSucceedsTilde;": "\u227f\u0338",
                  "&NotSuperset;": "\u2283\u20d2",
                  "&NotSupersetEqual;": "\u2289",
                  "&NotTilde;": "\u2241",
                  "&NotTildeEqual;": "\u2244",
                  "&NotTildeFullEqual;": "\u2247",
                  "&NotTildeTilde;": "\u2249",
                  "&NotVerticalBar;": "\u2224",
                  "&Nscr;": "\ud835\udca9",
                  "&Ntilde": "\xd1",
                  "&Ntilde;": "\xd1",
                  "&Nu;": "\u039d",
                  "&OElig;": "\u0152",
                  "&Oacute": "\xd3",
                  "&Oacute;": "\xd3",
                  "&Ocirc": "\xd4",
                  "&Ocirc;": "\xd4",
                  "&Ocy;": "\u041e",
                  "&Odblac;": "\u0150",
                  "&Ofr;": "\ud835\udd12",
                  "&Ograve": "\xd2",
                  "&Ograve;": "\xd2",
                  "&Omacr;": "\u014c",
                  "&Omega;": "\u03a9",
                  "&Omicron;": "\u039f",
                  "&Oopf;": "\ud835\udd46",
                  "&OpenCurlyDoubleQuote;": "\u201c",
                  "&OpenCurlyQuote;": "\u2018",
                  "&Or;": "\u2a54",
                  "&Oscr;": "\ud835\udcaa",
                  "&Oslash": "\xd8",
                  "&Oslash;": "\xd8",
                  "&Otilde": "\xd5",
                  "&Otilde;": "\xd5",
                  "&Otimes;": "\u2a37",
                  "&Ouml": "\xd6",
                  "&Ouml;": "\xd6",
                  "&OverBar;": "\u203e",
                  "&OverBrace;": "\u23de",
                  "&OverBracket;": "\u23b4",
                  "&OverParenthesis;": "\u23dc",
                  "&PartialD;": "\u2202",
                  "&Pcy;": "\u041f",
                  "&Pfr;": "\ud835\udd13",
                  "&Phi;": "\u03a6",
                  "&Pi;": "\u03a0",
                  "&PlusMinus;": "\xb1",
                  "&Poincareplane;": "\u210c",
                  "&Popf;": "\u2119",
                  "&Pr;": "\u2abb",
                  "&Precedes;": "\u227a",
                  "&PrecedesEqual;": "\u2aaf",
                  "&PrecedesSlantEqual;": "\u227c",
                  "&PrecedesTilde;": "\u227e",
                  "&Prime;": "\u2033",
                  "&Product;": "\u220f",
                  "&Proportion;": "\u2237",
                  "&Proportional;": "\u221d",
                  "&Pscr;": "\ud835\udcab",
                  "&Psi;": "\u03a8",
                  "&QUOT": '"',
                  "&QUOT;": '"',
                  "&Qfr;": "\ud835\udd14",
                  "&Qopf;": "\u211a",
                  "&Qscr;": "\ud835\udcac",
                  "&RBarr;": "\u2910",
                  "&REG": "\xae",
                  "&REG;": "\xae",
                  "&Racute;": "\u0154",
                  "&Rang;": "\u27eb",
                  "&Rarr;": "\u21a0",
                  "&Rarrtl;": "\u2916",
                  "&Rcaron;": "\u0158",
                  "&Rcedil;": "\u0156",
                  "&Rcy;": "\u0420",
                  "&Re;": "\u211c",
                  "&ReverseElement;": "\u220b",
                  "&ReverseEquilibrium;": "\u21cb",
                  "&ReverseUpEquilibrium;": "\u296f",
                  "&Rfr;": "\u211c",
                  "&Rho;": "\u03a1",
                  "&RightAngleBracket;": "\u27e9",
                  "&RightArrow;": "\u2192",
                  "&RightArrowBar;": "\u21e5",
                  "&RightArrowLeftArrow;": "\u21c4",
                  "&RightCeiling;": "\u2309",
                  "&RightDoubleBracket;": "\u27e7",
                  "&RightDownTeeVector;": "\u295d",
                  "&RightDownVector;": "\u21c2",
                  "&RightDownVectorBar;": "\u2955",
                  "&RightFloor;": "\u230b",
                  "&RightTee;": "\u22a2",
                  "&RightTeeArrow;": "\u21a6",
                  "&RightTeeVector;": "\u295b",
                  "&RightTriangle;": "\u22b3",
                  "&RightTriangleBar;": "\u29d0",
                  "&RightTriangleEqual;": "\u22b5",
                  "&RightUpDownVector;": "\u294f",
                  "&RightUpTeeVector;": "\u295c",
                  "&RightUpVector;": "\u21be",
                  "&RightUpVectorBar;": "\u2954",
                  "&RightVector;": "\u21c0",
                  "&RightVectorBar;": "\u2953",
                  "&Rightarrow;": "\u21d2",
                  "&Ropf;": "\u211d",
                  "&RoundImplies;": "\u2970",
                  "&Rrightarrow;": "\u21db",
                  "&Rscr;": "\u211b",
                  "&Rsh;": "\u21b1",
                  "&RuleDelayed;": "\u29f4",
                  "&SHCHcy;": "\u0429",
                  "&SHcy;": "\u0428",
                  "&SOFTcy;": "\u042c",
                  "&Sacute;": "\u015a",
                  "&Sc;": "\u2abc",
                  "&Scaron;": "\u0160",
                  "&Scedil;": "\u015e",
                  "&Scirc;": "\u015c",
                  "&Scy;": "\u0421",
                  "&Sfr;": "\ud835\udd16",
                  "&ShortDownArrow;": "\u2193",
                  "&ShortLeftArrow;": "\u2190",
                  "&ShortRightArrow;": "\u2192",
                  "&ShortUpArrow;": "\u2191",
                  "&Sigma;": "\u03a3",
                  "&SmallCircle;": "\u2218",
                  "&Sopf;": "\ud835\udd4a",
                  "&Sqrt;": "\u221a",
                  "&Square;": "\u25a1",
                  "&SquareIntersection;": "\u2293",
                  "&SquareSubset;": "\u228f",
                  "&SquareSubsetEqual;": "\u2291",
                  "&SquareSuperset;": "\u2290",
                  "&SquareSupersetEqual;": "\u2292",
                  "&SquareUnion;": "\u2294",
                  "&Sscr;": "\ud835\udcae",
                  "&Star;": "\u22c6",
                  "&Sub;": "\u22d0",
                  "&Subset;": "\u22d0",
                  "&SubsetEqual;": "\u2286",
                  "&Succeeds;": "\u227b",
                  "&SucceedsEqual;": "\u2ab0",
                  "&SucceedsSlantEqual;": "\u227d",
                  "&SucceedsTilde;": "\u227f",
                  "&SuchThat;": "\u220b",
                  "&Sum;": "\u2211",
                  "&Sup;": "\u22d1",
                  "&Superset;": "\u2283",
                  "&SupersetEqual;": "\u2287",
                  "&Supset;": "\u22d1",
                  "&THORN": "\xde",
                  "&THORN;": "\xde",
                  "&TRADE;": "\u2122",
                  "&TSHcy;": "\u040b",
                  "&TScy;": "\u0426",
                  "&Tab;": "\t",
                  "&Tau;": "\u03a4",
                  "&Tcaron;": "\u0164",
                  "&Tcedil;": "\u0162",
                  "&Tcy;": "\u0422",
                  "&Tfr;": "\ud835\udd17",
                  "&Therefore;": "\u2234",
                  "&Theta;": "\u0398",
                  "&ThickSpace;": "\u205f\u200a",
                  "&ThinSpace;": "\u2009",
                  "&Tilde;": "\u223c",
                  "&TildeEqual;": "\u2243",
                  "&TildeFullEqual;": "\u2245",
                  "&TildeTilde;": "\u2248",
                  "&Topf;": "\ud835\udd4b",
                  "&TripleDot;": "\u20db",
                  "&Tscr;": "\ud835\udcaf",
                  "&Tstrok;": "\u0166",
                  "&Uacute": "\xda",
                  "&Uacute;": "\xda",
                  "&Uarr;": "\u219f",
                  "&Uarrocir;": "\u2949",
                  "&Ubrcy;": "\u040e",
                  "&Ubreve;": "\u016c",
                  "&Ucirc": "\xdb",
                  "&Ucirc;": "\xdb",
                  "&Ucy;": "\u0423",
                  "&Udblac;": "\u0170",
                  "&Ufr;": "\ud835\udd18",
                  "&Ugrave": "\xd9",
                  "&Ugrave;": "\xd9",
                  "&Umacr;": "\u016a",
                  "&UnderBar;": "_",
                  "&UnderBrace;": "\u23df",
                  "&UnderBracket;": "\u23b5",
                  "&UnderParenthesis;": "\u23dd",
                  "&Union;": "\u22c3",
                  "&UnionPlus;": "\u228e",
                  "&Uogon;": "\u0172",
                  "&Uopf;": "\ud835\udd4c",
                  "&UpArrow;": "\u2191",
                  "&UpArrowBar;": "\u2912",
                  "&UpArrowDownArrow;": "\u21c5",
                  "&UpDownArrow;": "\u2195",
                  "&UpEquilibrium;": "\u296e",
                  "&UpTee;": "\u22a5",
                  "&UpTeeArrow;": "\u21a5",
                  "&Uparrow;": "\u21d1",
                  "&Updownarrow;": "\u21d5",
                  "&UpperLeftArrow;": "\u2196",
                  "&UpperRightArrow;": "\u2197",
                  "&Upsi;": "\u03d2",
                  "&Upsilon;": "\u03a5",
                  "&Uring;": "\u016e",
                  "&Uscr;": "\ud835\udcb0",
                  "&Utilde;": "\u0168",
                  "&Uuml": "\xdc",
                  "&Uuml;": "\xdc",
                  "&VDash;": "\u22ab",
                  "&Vbar;": "\u2aeb",
                  "&Vcy;": "\u0412",
                  "&Vdash;": "\u22a9",
                  "&Vdashl;": "\u2ae6",
                  "&Vee;": "\u22c1",
                  "&Verbar;": "\u2016",
                  "&Vert;": "\u2016",
                  "&VerticalBar;": "\u2223",
                  "&VerticalLine;": "|",
                  "&VerticalSeparator;": "\u2758",
                  "&VerticalTilde;": "\u2240",
                  "&VeryThinSpace;": "\u200a",
                  "&Vfr;": "\ud835\udd19",
                  "&Vopf;": "\ud835\udd4d",
                  "&Vscr;": "\ud835\udcb1",
                  "&Vvdash;": "\u22aa",
                  "&Wcirc;": "\u0174",
                  "&Wedge;": "\u22c0",
                  "&Wfr;": "\ud835\udd1a",
                  "&Wopf;": "\ud835\udd4e",
                  "&Wscr;": "\ud835\udcb2",
                  "&Xfr;": "\ud835\udd1b",
                  "&Xi;": "\u039e",
                  "&Xopf;": "\ud835\udd4f",
                  "&Xscr;": "\ud835\udcb3",
                  "&YAcy;": "\u042f",
                  "&YIcy;": "\u0407",
                  "&YUcy;": "\u042e",
                  "&Yacute": "\xdd",
                  "&Yacute;": "\xdd",
                  "&Ycirc;": "\u0176",
                  "&Ycy;": "\u042b",
                  "&Yfr;": "\ud835\udd1c",
                  "&Yopf;": "\ud835\udd50",
                  "&Yscr;": "\ud835\udcb4",
                  "&Yuml;": "\u0178",
                  "&ZHcy;": "\u0416",
                  "&Zacute;": "\u0179",
                  "&Zcaron;": "\u017d",
                  "&Zcy;": "\u0417",
                  "&Zdot;": "\u017b",
                  "&ZeroWidthSpace;": "\u200b",
                  "&Zeta;": "\u0396",
                  "&Zfr;": "\u2128",
                  "&Zopf;": "\u2124",
                  "&Zscr;": "\ud835\udcb5",
                  "&aacute": "\xe1",
                  "&aacute;": "\xe1",
                  "&abreve;": "\u0103",
                  "&ac;": "\u223e",
                  "&acE;": "\u223e\u0333",
                  "&acd;": "\u223f",
                  "&acirc": "\xe2",
                  "&acirc;": "\xe2",
                  "&acute": "\xb4",
                  "&acute;": "\xb4",
                  "&acy;": "\u0430",
                  "&aelig": "\xe6",
                  "&aelig;": "\xe6",
                  "&af;": "\u2061",
                  "&afr;": "\ud835\udd1e",
                  "&agrave": "\xe0",
                  "&agrave;": "\xe0",
                  "&alefsym;": "\u2135",
                  "&aleph;": "\u2135",
                  "&alpha;": "\u03b1",
                  "&amacr;": "\u0101",
                  "&amalg;": "\u2a3f",
                  "&amp": "&",
                  "&amp;": "&",
                  "&and;": "\u2227",
                  "&andand;": "\u2a55",
                  "&andd;": "\u2a5c",
                  "&andslope;": "\u2a58",
                  "&andv;": "\u2a5a",
                  "&ang;": "\u2220",
                  "&ange;": "\u29a4",
                  "&angle;": "\u2220",
                  "&angmsd;": "\u2221",
                  "&angmsdaa;": "\u29a8",
                  "&angmsdab;": "\u29a9",
                  "&angmsdac;": "\u29aa",
                  "&angmsdad;": "\u29ab",
                  "&angmsdae;": "\u29ac",
                  "&angmsdaf;": "\u29ad",
                  "&angmsdag;": "\u29ae",
                  "&angmsdah;": "\u29af",
                  "&angrt;": "\u221f",
                  "&angrtvb;": "\u22be",
                  "&angrtvbd;": "\u299d",
                  "&angsph;": "\u2222",
                  "&angst;": "\xc5",
                  "&angzarr;": "\u237c",
                  "&aogon;": "\u0105",
                  "&aopf;": "\ud835\udd52",
                  "&ap;": "\u2248",
                  "&apE;": "\u2a70",
                  "&apacir;": "\u2a6f",
                  "&ape;": "\u224a",
                  "&apid;": "\u224b",
                  "&apos;": "'",
                  "&approx;": "\u2248",
                  "&approxeq;": "\u224a",
                  "&aring": "\xe5",
                  "&aring;": "\xe5",
                  "&ascr;": "\ud835\udcb6",
                  "&ast;": "*",
                  "&asymp;": "\u2248",
                  "&asympeq;": "\u224d",
                  "&atilde": "\xe3",
                  "&atilde;": "\xe3",
                  "&auml": "\xe4",
                  "&auml;": "\xe4",
                  "&awconint;": "\u2233",
                  "&awint;": "\u2a11",
                  "&bNot;": "\u2aed",
                  "&backcong;": "\u224c",
                  "&backepsilon;": "\u03f6",
                  "&backprime;": "\u2035",
                  "&backsim;": "\u223d",
                  "&backsimeq;": "\u22cd",
                  "&barvee;": "\u22bd",
                  "&barwed;": "\u2305",
                  "&barwedge;": "\u2305",
                  "&bbrk;": "\u23b5",
                  "&bbrktbrk;": "\u23b6",
                  "&bcong;": "\u224c",
                  "&bcy;": "\u0431",
                  "&bdquo;": "\u201e",
                  "&becaus;": "\u2235",
                  "&because;": "\u2235",
                  "&bemptyv;": "\u29b0",
                  "&bepsi;": "\u03f6",
                  "&bernou;": "\u212c",
                  "&beta;": "\u03b2",
                  "&beth;": "\u2136",
                  "&between;": "\u226c",
                  "&bfr;": "\ud835\udd1f",
                  "&bigcap;": "\u22c2",
                  "&bigcirc;": "\u25ef",
                  "&bigcup;": "\u22c3",
                  "&bigodot;": "\u2a00",
                  "&bigoplus;": "\u2a01",
                  "&bigotimes;": "\u2a02",
                  "&bigsqcup;": "\u2a06",
                  "&bigstar;": "\u2605",
                  "&bigtriangledown;": "\u25bd",
                  "&bigtriangleup;": "\u25b3",
                  "&biguplus;": "\u2a04",
                  "&bigvee;": "\u22c1",
                  "&bigwedge;": "\u22c0",
                  "&bkarow;": "\u290d",
                  "&blacklozenge;": "\u29eb",
                  "&blacksquare;": "\u25aa",
                  "&blacktriangle;": "\u25b4",
                  "&blacktriangledown;": "\u25be",
                  "&blacktriangleleft;": "\u25c2",
                  "&blacktriangleright;": "\u25b8",
                  "&blank;": "\u2423",
                  "&blk12;": "\u2592",
                  "&blk14;": "\u2591",
                  "&blk34;": "\u2593",
                  "&block;": "\u2588",
                  "&bne;": "=\u20e5",
                  "&bnequiv;": "\u2261\u20e5",
                  "&bnot;": "\u2310",
                  "&bopf;": "\ud835\udd53",
                  "&bot;": "\u22a5",
                  "&bottom;": "\u22a5",
                  "&bowtie;": "\u22c8",
                  "&boxDL;": "\u2557",
                  "&boxDR;": "\u2554",
                  "&boxDl;": "\u2556",
                  "&boxDr;": "\u2553",
                  "&boxH;": "\u2550",
                  "&boxHD;": "\u2566",
                  "&boxHU;": "\u2569",
                  "&boxHd;": "\u2564",
                  "&boxHu;": "\u2567",
                  "&boxUL;": "\u255d",
                  "&boxUR;": "\u255a",
                  "&boxUl;": "\u255c",
                  "&boxUr;": "\u2559",
                  "&boxV;": "\u2551",
                  "&boxVH;": "\u256c",
                  "&boxVL;": "\u2563",
                  "&boxVR;": "\u2560",
                  "&boxVh;": "\u256b",
                  "&boxVl;": "\u2562",
                  "&boxVr;": "\u255f",
                  "&boxbox;": "\u29c9",
                  "&boxdL;": "\u2555",
                  "&boxdR;": "\u2552",
                  "&boxdl;": "\u2510",
                  "&boxdr;": "\u250c",
                  "&boxh;": "\u2500",
                  "&boxhD;": "\u2565",
                  "&boxhU;": "\u2568",
                  "&boxhd;": "\u252c",
                  "&boxhu;": "\u2534",
                  "&boxminus;": "\u229f",
                  "&boxplus;": "\u229e",
                  "&boxtimes;": "\u22a0",
                  "&boxuL;": "\u255b",
                  "&boxuR;": "\u2558",
                  "&boxul;": "\u2518",
                  "&boxur;": "\u2514",
                  "&boxv;": "\u2502",
                  "&boxvH;": "\u256a",
                  "&boxvL;": "\u2561",
                  "&boxvR;": "\u255e",
                  "&boxvh;": "\u253c",
                  "&boxvl;": "\u2524",
                  "&boxvr;": "\u251c",
                  "&bprime;": "\u2035",
                  "&breve;": "\u02d8",
                  "&brvbar": "\xa6",
                  "&brvbar;": "\xa6",
                  "&bscr;": "\ud835\udcb7",
                  "&bsemi;": "\u204f",
                  "&bsim;": "\u223d",
                  "&bsime;": "\u22cd",
                  "&bsol;": "\\",
                  "&bsolb;": "\u29c5",
                  "&bsolhsub;": "\u27c8",
                  "&bull;": "\u2022",
                  "&bullet;": "\u2022",
                  "&bump;": "\u224e",
                  "&bumpE;": "\u2aae",
                  "&bumpe;": "\u224f",
                  "&bumpeq;": "\u224f",
                  "&cacute;": "\u0107",
                  "&cap;": "\u2229",
                  "&capand;": "\u2a44",
                  "&capbrcup;": "\u2a49",
                  "&capcap;": "\u2a4b",
                  "&capcup;": "\u2a47",
                  "&capdot;": "\u2a40",
                  "&caps;": "\u2229\ufe00",
                  "&caret;": "\u2041",
                  "&caron;": "\u02c7",
                  "&ccaps;": "\u2a4d",
                  "&ccaron;": "\u010d",
                  "&ccedil": "\xe7",
                  "&ccedil;": "\xe7",
                  "&ccirc;": "\u0109",
                  "&ccups;": "\u2a4c",
                  "&ccupssm;": "\u2a50",
                  "&cdot;": "\u010b",
                  "&cedil": "\xb8",
                  "&cedil;": "\xb8",
                  "&cemptyv;": "\u29b2",
                  "&cent": "\xa2",
                  "&cent;": "\xa2",
                  "&centerdot;": "\xb7",
                  "&cfr;": "\ud835\udd20",
                  "&chcy;": "\u0447",
                  "&check;": "\u2713",
                  "&checkmark;": "\u2713",
                  "&chi;": "\u03c7",
                  "&cir;": "\u25cb",
                  "&cirE;": "\u29c3",
                  "&circ;": "\u02c6",
                  "&circeq;": "\u2257",
                  "&circlearrowleft;": "\u21ba",
                  "&circlearrowright;": "\u21bb",
                  "&circledR;": "\xae",
                  "&circledS;": "\u24c8",
                  "&circledast;": "\u229b",
                  "&circledcirc;": "\u229a",
                  "&circleddash;": "\u229d",
                  "&cire;": "\u2257",
                  "&cirfnint;": "\u2a10",
                  "&cirmid;": "\u2aef",
                  "&cirscir;": "\u29c2",
                  "&clubs;": "\u2663",
                  "&clubsuit;": "\u2663",
                  "&colon;": ":",
                  "&colone;": "\u2254",
                  "&coloneq;": "\u2254",
                  "&comma;": ",",
                  "&commat;": "@",
                  "&comp;": "\u2201",
                  "&compfn;": "\u2218",
                  "&complement;": "\u2201",
                  "&complexes;": "\u2102",
                  "&cong;": "\u2245",
                  "&congdot;": "\u2a6d",
                  "&conint;": "\u222e",
                  "&copf;": "\ud835\udd54",
                  "&coprod;": "\u2210",
                  "&copy": "\xa9",
                  "&copy;": "\xa9",
                  "&copysr;": "\u2117",
                  "&crarr;": "\u21b5",
                  "&cross;": "\u2717",
                  "&cscr;": "\ud835\udcb8",
                  "&csub;": "\u2acf",
                  "&csube;": "\u2ad1",
                  "&csup;": "\u2ad0",
                  "&csupe;": "\u2ad2",
                  "&ctdot;": "\u22ef",
                  "&cudarrl;": "\u2938",
                  "&cudarrr;": "\u2935",
                  "&cuepr;": "\u22de",
                  "&cuesc;": "\u22df",
                  "&cularr;": "\u21b6",
                  "&cularrp;": "\u293d",
                  "&cup;": "\u222a",
                  "&cupbrcap;": "\u2a48",
                  "&cupcap;": "\u2a46",
                  "&cupcup;": "\u2a4a",
                  "&cupdot;": "\u228d",
                  "&cupor;": "\u2a45",
                  "&cups;": "\u222a\ufe00",
                  "&curarr;": "\u21b7",
                  "&curarrm;": "\u293c",
                  "&curlyeqprec;": "\u22de",
                  "&curlyeqsucc;": "\u22df",
                  "&curlyvee;": "\u22ce",
                  "&curlywedge;": "\u22cf",
                  "&curren": "\xa4",
                  "&curren;": "\xa4",
                  "&curvearrowleft;": "\u21b6",
                  "&curvearrowright;": "\u21b7",
                  "&cuvee;": "\u22ce",
                  "&cuwed;": "\u22cf",
                  "&cwconint;": "\u2232",
                  "&cwint;": "\u2231",
                  "&cylcty;": "\u232d",
                  "&dArr;": "\u21d3",
                  "&dHar;": "\u2965",
                  "&dagger;": "\u2020",
                  "&daleth;": "\u2138",
                  "&darr;": "\u2193",
                  "&dash;": "\u2010",
                  "&dashv;": "\u22a3",
                  "&dbkarow;": "\u290f",
                  "&dblac;": "\u02dd",
                  "&dcaron;": "\u010f",
                  "&dcy;": "\u0434",
                  "&dd;": "\u2146",
                  "&ddagger;": "\u2021",
                  "&ddarr;": "\u21ca",
                  "&ddotseq;": "\u2a77",
                  "&deg": "\xb0",
                  "&deg;": "\xb0",
                  "&delta;": "\u03b4",
                  "&demptyv;": "\u29b1",
                  "&dfisht;": "\u297f",
                  "&dfr;": "\ud835\udd21",
                  "&dharl;": "\u21c3",
                  "&dharr;": "\u21c2",
                  "&diam;": "\u22c4",
                  "&diamond;": "\u22c4",
                  "&diamondsuit;": "\u2666",
                  "&diams;": "\u2666",
                  "&die;": "\xa8",
                  "&digamma;": "\u03dd",
                  "&disin;": "\u22f2",
                  "&div;": "\xf7",
                  "&divide": "\xf7",
                  "&divide;": "\xf7",
                  "&divideontimes;": "\u22c7",
                  "&divonx;": "\u22c7",
                  "&djcy;": "\u0452",
                  "&dlcorn;": "\u231e",
                  "&dlcrop;": "\u230d",
                  "&dollar;": "$",
                  "&dopf;": "\ud835\udd55",
                  "&dot;": "\u02d9",
                  "&doteq;": "\u2250",
                  "&doteqdot;": "\u2251",
                  "&dotminus;": "\u2238",
                  "&dotplus;": "\u2214",
                  "&dotsquare;": "\u22a1",
                  "&doublebarwedge;": "\u2306",
                  "&downarrow;": "\u2193",
                  "&downdownarrows;": "\u21ca",
                  "&downharpoonleft;": "\u21c3",
                  "&downharpoonright;": "\u21c2",
                  "&drbkarow;": "\u2910",
                  "&drcorn;": "\u231f",
                  "&drcrop;": "\u230c",
                  "&dscr;": "\ud835\udcb9",
                  "&dscy;": "\u0455",
                  "&dsol;": "\u29f6",
                  "&dstrok;": "\u0111",
                  "&dtdot;": "\u22f1",
                  "&dtri;": "\u25bf",
                  "&dtrif;": "\u25be",
                  "&duarr;": "\u21f5",
                  "&duhar;": "\u296f",
                  "&dwangle;": "\u29a6",
                  "&dzcy;": "\u045f",
                  "&dzigrarr;": "\u27ff",
                  "&eDDot;": "\u2a77",
                  "&eDot;": "\u2251",
                  "&eacute": "\xe9",
                  "&eacute;": "\xe9",
                  "&easter;": "\u2a6e",
                  "&ecaron;": "\u011b",
                  "&ecir;": "\u2256",
                  "&ecirc": "\xea",
                  "&ecirc;": "\xea",
                  "&ecolon;": "\u2255",
                  "&ecy;": "\u044d",
                  "&edot;": "\u0117",
                  "&ee;": "\u2147",
                  "&efDot;": "\u2252",
                  "&efr;": "\ud835\udd22",
                  "&eg;": "\u2a9a",
                  "&egrave": "\xe8",
                  "&egrave;": "\xe8",
                  "&egs;": "\u2a96",
                  "&egsdot;": "\u2a98",
                  "&el;": "\u2a99",
                  "&elinters;": "\u23e7",
                  "&ell;": "\u2113",
                  "&els;": "\u2a95",
                  "&elsdot;": "\u2a97",
                  "&emacr;": "\u0113",
                  "&empty;": "\u2205",
                  "&emptyset;": "\u2205",
                  "&emptyv;": "\u2205",
                  "&emsp13;": "\u2004",
                  "&emsp14;": "\u2005",
                  "&emsp;": "\u2003",
                  "&eng;": "\u014b",
                  "&ensp;": "\u2002",
                  "&eogon;": "\u0119",
                  "&eopf;": "\ud835\udd56",
                  "&epar;": "\u22d5",
                  "&eparsl;": "\u29e3",
                  "&eplus;": "\u2a71",
                  "&epsi;": "\u03b5",
                  "&epsilon;": "\u03b5",
                  "&epsiv;": "\u03f5",
                  "&eqcirc;": "\u2256",
                  "&eqcolon;": "\u2255",
                  "&eqsim;": "\u2242",
                  "&eqslantgtr;": "\u2a96",
                  "&eqslantless;": "\u2a95",
                  "&equals;": "=",
                  "&equest;": "\u225f",
                  "&equiv;": "\u2261",
                  "&equivDD;": "\u2a78",
                  "&eqvparsl;": "\u29e5",
                  "&erDot;": "\u2253",
                  "&erarr;": "\u2971",
                  "&escr;": "\u212f",
                  "&esdot;": "\u2250",
                  "&esim;": "\u2242",
                  "&eta;": "\u03b7",
                  "&eth": "\xf0",
                  "&eth;": "\xf0",
                  "&euml": "\xeb",
                  "&euml;": "\xeb",
                  "&euro;": "\u20ac",
                  "&excl;": "!",
                  "&exist;": "\u2203",
                  "&expectation;": "\u2130",
                  "&exponentiale;": "\u2147",
                  "&fallingdotseq;": "\u2252",
                  "&fcy;": "\u0444",
                  "&female;": "\u2640",
                  "&ffilig;": "\ufb03",
                  "&fflig;": "\ufb00",
                  "&ffllig;": "\ufb04",
                  "&ffr;": "\ud835\udd23",
                  "&filig;": "\ufb01",
                  "&fjlig;": "fj",
                  "&flat;": "\u266d",
                  "&fllig;": "\ufb02",
                  "&fltns;": "\u25b1",
                  "&fnof;": "\u0192",
                  "&fopf;": "\ud835\udd57",
                  "&forall;": "\u2200",
                  "&fork;": "\u22d4",
                  "&forkv;": "\u2ad9",
                  "&fpartint;": "\u2a0d",
                  "&frac12": "\xbd",
                  "&frac12;": "\xbd",
                  "&frac13;": "\u2153",
                  "&frac14": "\xbc",
                  "&frac14;": "\xbc",
                  "&frac15;": "\u2155",
                  "&frac16;": "\u2159",
                  "&frac18;": "\u215b",
                  "&frac23;": "\u2154",
                  "&frac25;": "\u2156",
                  "&frac34": "\xbe",
                  "&frac34;": "\xbe",
                  "&frac35;": "\u2157",
                  "&frac38;": "\u215c",
                  "&frac45;": "\u2158",
                  "&frac56;": "\u215a",
                  "&frac58;": "\u215d",
                  "&frac78;": "\u215e",
                  "&frasl;": "\u2044",
                  "&frown;": "\u2322",
                  "&fscr;": "\ud835\udcbb",
                  "&gE;": "\u2267",
                  "&gEl;": "\u2a8c",
                  "&gacute;": "\u01f5",
                  "&gamma;": "\u03b3",
                  "&gammad;": "\u03dd",
                  "&gap;": "\u2a86",
                  "&gbreve;": "\u011f",
                  "&gcirc;": "\u011d",
                  "&gcy;": "\u0433",
                  "&gdot;": "\u0121",
                  "&ge;": "\u2265",
                  "&gel;": "\u22db",
                  "&geq;": "\u2265",
                  "&geqq;": "\u2267",
                  "&geqslant;": "\u2a7e",
                  "&ges;": "\u2a7e",
                  "&gescc;": "\u2aa9",
                  "&gesdot;": "\u2a80",
                  "&gesdoto;": "\u2a82",
                  "&gesdotol;": "\u2a84",
                  "&gesl;": "\u22db\ufe00",
                  "&gesles;": "\u2a94",
                  "&gfr;": "\ud835\udd24",
                  "&gg;": "\u226b",
                  "&ggg;": "\u22d9",
                  "&gimel;": "\u2137",
                  "&gjcy;": "\u0453",
                  "&gl;": "\u2277",
                  "&glE;": "\u2a92",
                  "&gla;": "\u2aa5",
                  "&glj;": "\u2aa4",
                  "&gnE;": "\u2269",
                  "&gnap;": "\u2a8a",
                  "&gnapprox;": "\u2a8a",
                  "&gne;": "\u2a88",
                  "&gneq;": "\u2a88",
                  "&gneqq;": "\u2269",
                  "&gnsim;": "\u22e7",
                  "&gopf;": "\ud835\udd58",
                  "&grave;": "`",
                  "&gscr;": "\u210a",
                  "&gsim;": "\u2273",
                  "&gsime;": "\u2a8e",
                  "&gsiml;": "\u2a90",
                  "&gt": ">",
                  "&gt;": ">",
                  "&gtcc;": "\u2aa7",
                  "&gtcir;": "\u2a7a",
                  "&gtdot;": "\u22d7",
                  "&gtlPar;": "\u2995",
                  "&gtquest;": "\u2a7c",
                  "&gtrapprox;": "\u2a86",
                  "&gtrarr;": "\u2978",
                  "&gtrdot;": "\u22d7",
                  "&gtreqless;": "\u22db",
                  "&gtreqqless;": "\u2a8c",
                  "&gtrless;": "\u2277",
                  "&gtrsim;": "\u2273",
                  "&gvertneqq;": "\u2269\ufe00",
                  "&gvnE;": "\u2269\ufe00",
                  "&hArr;": "\u21d4",
                  "&hairsp;": "\u200a",
                  "&half;": "\xbd",
                  "&hamilt;": "\u210b",
                  "&hardcy;": "\u044a",
                  "&harr;": "\u2194",
                  "&harrcir;": "\u2948",
                  "&harrw;": "\u21ad",
                  "&hbar;": "\u210f",
                  "&hcirc;": "\u0125",
                  "&hearts;": "\u2665",
                  "&heartsuit;": "\u2665",
                  "&hellip;": "\u2026",
                  "&hercon;": "\u22b9",
                  "&hfr;": "\ud835\udd25",
                  "&hksearow;": "\u2925",
                  "&hkswarow;": "\u2926",
                  "&hoarr;": "\u21ff",
                  "&homtht;": "\u223b",
                  "&hookleftarrow;": "\u21a9",
                  "&hookrightarrow;": "\u21aa",
                  "&hopf;": "\ud835\udd59",
                  "&horbar;": "\u2015",
                  "&hscr;": "\ud835\udcbd",
                  "&hslash;": "\u210f",
                  "&hstrok;": "\u0127",
                  "&hybull;": "\u2043",
                  "&hyphen;": "\u2010",
                  "&iacute": "\xed",
                  "&iacute;": "\xed",
                  "&ic;": "\u2063",
                  "&icirc": "\xee",
                  "&icirc;": "\xee",
                  "&icy;": "\u0438",
                  "&iecy;": "\u0435",
                  "&iexcl": "\xa1",
                  "&iexcl;": "\xa1",
                  "&iff;": "\u21d4",
                  "&ifr;": "\ud835\udd26",
                  "&igrave": "\xec",
                  "&igrave;": "\xec",
                  "&ii;": "\u2148",
                  "&iiiint;": "\u2a0c",
                  "&iiint;": "\u222d",
                  "&iinfin;": "\u29dc",
                  "&iiota;": "\u2129",
                  "&ijlig;": "\u0133",
                  "&imacr;": "\u012b",
                  "&image;": "\u2111",
                  "&imagline;": "\u2110",
                  "&imagpart;": "\u2111",
                  "&imath;": "\u0131",
                  "&imof;": "\u22b7",
                  "&imped;": "\u01b5",
                  "&in;": "\u2208",
                  "&incare;": "\u2105",
                  "&infin;": "\u221e",
                  "&infintie;": "\u29dd",
                  "&inodot;": "\u0131",
                  "&int;": "\u222b",
                  "&intcal;": "\u22ba",
                  "&integers;": "\u2124",
                  "&intercal;": "\u22ba",
                  "&intlarhk;": "\u2a17",
                  "&intprod;": "\u2a3c",
                  "&iocy;": "\u0451",
                  "&iogon;": "\u012f",
                  "&iopf;": "\ud835\udd5a",
                  "&iota;": "\u03b9",
                  "&iprod;": "\u2a3c",
                  "&iquest": "\xbf",
                  "&iquest;": "\xbf",
                  "&iscr;": "\ud835\udcbe",
                  "&isin;": "\u2208",
                  "&isinE;": "\u22f9",
                  "&isindot;": "\u22f5",
                  "&isins;": "\u22f4",
                  "&isinsv;": "\u22f3",
                  "&isinv;": "\u2208",
                  "&it;": "\u2062",
                  "&itilde;": "\u0129",
                  "&iukcy;": "\u0456",
                  "&iuml": "\xef",
                  "&iuml;": "\xef",
                  "&jcirc;": "\u0135",
                  "&jcy;": "\u0439",
                  "&jfr;": "\ud835\udd27",
                  "&jmath;": "\u0237",
                  "&jopf;": "\ud835\udd5b",
                  "&jscr;": "\ud835\udcbf",
                  "&jsercy;": "\u0458",
                  "&jukcy;": "\u0454",
                  "&kappa;": "\u03ba",
                  "&kappav;": "\u03f0",
                  "&kcedil;": "\u0137",
                  "&kcy;": "\u043a",
                  "&kfr;": "\ud835\udd28",
                  "&kgreen;": "\u0138",
                  "&khcy;": "\u0445",
                  "&kjcy;": "\u045c",
                  "&kopf;": "\ud835\udd5c",
                  "&kscr;": "\ud835\udcc0",
                  "&lAarr;": "\u21da",
                  "&lArr;": "\u21d0",
                  "&lAtail;": "\u291b",
                  "&lBarr;": "\u290e",
                  "&lE;": "\u2266",
                  "&lEg;": "\u2a8b",
                  "&lHar;": "\u2962",
                  "&lacute;": "\u013a",
                  "&laemptyv;": "\u29b4",
                  "&lagran;": "\u2112",
                  "&lambda;": "\u03bb",
                  "&lang;": "\u27e8",
                  "&langd;": "\u2991",
                  "&langle;": "\u27e8",
                  "&lap;": "\u2a85",
                  "&laquo": "\xab",
                  "&laquo;": "\xab",
                  "&larr;": "\u2190",
                  "&larrb;": "\u21e4",
                  "&larrbfs;": "\u291f",
                  "&larrfs;": "\u291d",
                  "&larrhk;": "\u21a9",
                  "&larrlp;": "\u21ab",
                  "&larrpl;": "\u2939",
                  "&larrsim;": "\u2973",
                  "&larrtl;": "\u21a2",
                  "&lat;": "\u2aab",
                  "&latail;": "\u2919",
                  "&late;": "\u2aad",
                  "&lates;": "\u2aad\ufe00",
                  "&lbarr;": "\u290c",
                  "&lbbrk;": "\u2772",
                  "&lbrace;": "{",
                  "&lbrack;": "[",
                  "&lbrke;": "\u298b",
                  "&lbrksld;": "\u298f",
                  "&lbrkslu;": "\u298d",
                  "&lcaron;": "\u013e",
                  "&lcedil;": "\u013c",
                  "&lceil;": "\u2308",
                  "&lcub;": "{",
                  "&lcy;": "\u043b",
                  "&ldca;": "\u2936",
                  "&ldquo;": "\u201c",
                  "&ldquor;": "\u201e",
                  "&ldrdhar;": "\u2967",
                  "&ldrushar;": "\u294b",
                  "&ldsh;": "\u21b2",
                  "&le;": "\u2264",
                  "&leftarrow;": "\u2190",
                  "&leftarrowtail;": "\u21a2",
                  "&leftharpoondown;": "\u21bd",
                  "&leftharpoonup;": "\u21bc",
                  "&leftleftarrows;": "\u21c7",
                  "&leftrightarrow;": "\u2194",
                  "&leftrightarrows;": "\u21c6",
                  "&leftrightharpoons;": "\u21cb",
                  "&leftrightsquigarrow;": "\u21ad",
                  "&leftthreetimes;": "\u22cb",
                  "&leg;": "\u22da",
                  "&leq;": "\u2264",
                  "&leqq;": "\u2266",
                  "&leqslant;": "\u2a7d",
                  "&les;": "\u2a7d",
                  "&lescc;": "\u2aa8",
                  "&lesdot;": "\u2a7f",
                  "&lesdoto;": "\u2a81",
                  "&lesdotor;": "\u2a83",
                  "&lesg;": "\u22da\ufe00",
                  "&lesges;": "\u2a93",
                  "&lessapprox;": "\u2a85",
                  "&lessdot;": "\u22d6",
                  "&lesseqgtr;": "\u22da",
                  "&lesseqqgtr;": "\u2a8b",
                  "&lessgtr;": "\u2276",
                  "&lesssim;": "\u2272",
                  "&lfisht;": "\u297c",
                  "&lfloor;": "\u230a",
                  "&lfr;": "\ud835\udd29",
                  "&lg;": "\u2276",
                  "&lgE;": "\u2a91",
                  "&lhard;": "\u21bd",
                  "&lharu;": "\u21bc",
                  "&lharul;": "\u296a",
                  "&lhblk;": "\u2584",
                  "&ljcy;": "\u0459",
                  "&ll;": "\u226a",
                  "&llarr;": "\u21c7",
                  "&llcorner;": "\u231e",
                  "&llhard;": "\u296b",
                  "&lltri;": "\u25fa",
                  "&lmidot;": "\u0140",
                  "&lmoust;": "\u23b0",
                  "&lmoustache;": "\u23b0",
                  "&lnE;": "\u2268",
                  "&lnap;": "\u2a89",
                  "&lnapprox;": "\u2a89",
                  "&lne;": "\u2a87",
                  "&lneq;": "\u2a87",
                  "&lneqq;": "\u2268",
                  "&lnsim;": "\u22e6",
                  "&loang;": "\u27ec",
                  "&loarr;": "\u21fd",
                  "&lobrk;": "\u27e6",
                  "&longleftarrow;": "\u27f5",
                  "&longleftrightarrow;": "\u27f7",
                  "&longmapsto;": "\u27fc",
                  "&longrightarrow;": "\u27f6",
                  "&looparrowleft;": "\u21ab",
                  "&looparrowright;": "\u21ac",
                  "&lopar;": "\u2985",
                  "&lopf;": "\ud835\udd5d",
                  "&loplus;": "\u2a2d",
                  "&lotimes;": "\u2a34",
                  "&lowast;": "\u2217",
                  "&lowbar;": "_",
                  "&loz;": "\u25ca",
                  "&lozenge;": "\u25ca",
                  "&lozf;": "\u29eb",
                  "&lpar;": "(",
                  "&lparlt;": "\u2993",
                  "&lrarr;": "\u21c6",
                  "&lrcorner;": "\u231f",
                  "&lrhar;": "\u21cb",
                  "&lrhard;": "\u296d",
                  "&lrm;": "\u200e",
                  "&lrtri;": "\u22bf",
                  "&lsaquo;": "\u2039",
                  "&lscr;": "\ud835\udcc1",
                  "&lsh;": "\u21b0",
                  "&lsim;": "\u2272",
                  "&lsime;": "\u2a8d",
                  "&lsimg;": "\u2a8f",
                  "&lsqb;": "[",
                  "&lsquo;": "\u2018",
                  "&lsquor;": "\u201a",
                  "&lstrok;": "\u0142",
                  "&lt": "<",
                  "&lt;": "<",
                  "&ltcc;": "\u2aa6",
                  "&ltcir;": "\u2a79",
                  "&ltdot;": "\u22d6",
                  "&lthree;": "\u22cb",
                  "&ltimes;": "\u22c9",
                  "&ltlarr;": "\u2976",
                  "&ltquest;": "\u2a7b",
                  "&ltrPar;": "\u2996",
                  "&ltri;": "\u25c3",
                  "&ltrie;": "\u22b4",
                  "&ltrif;": "\u25c2",
                  "&lurdshar;": "\u294a",
                  "&luruhar;": "\u2966",
                  "&lvertneqq;": "\u2268\ufe00",
                  "&lvnE;": "\u2268\ufe00",
                  "&mDDot;": "\u223a",
                  "&macr": "\xaf",
                  "&macr;": "\xaf",
                  "&male;": "\u2642",
                  "&malt;": "\u2720",
                  "&maltese;": "\u2720",
                  "&map;": "\u21a6",
                  "&mapsto;": "\u21a6",
                  "&mapstodown;": "\u21a7",
                  "&mapstoleft;": "\u21a4",
                  "&mapstoup;": "\u21a5",
                  "&marker;": "\u25ae",
                  "&mcomma;": "\u2a29",
                  "&mcy;": "\u043c",
                  "&mdash;": "\u2014",
                  "&measuredangle;": "\u2221",
                  "&mfr;": "\ud835\udd2a",
                  "&mho;": "\u2127",
                  "&micro": "\xb5",
                  "&micro;": "\xb5",
                  "&mid;": "\u2223",
                  "&midast;": "*",
                  "&midcir;": "\u2af0",
                  "&middot": "\xb7",
                  "&middot;": "\xb7",
                  "&minus;": "\u2212",
                  "&minusb;": "\u229f",
                  "&minusd;": "\u2238",
                  "&minusdu;": "\u2a2a",
                  "&mlcp;": "\u2adb",
                  "&mldr;": "\u2026",
                  "&mnplus;": "\u2213",
                  "&models;": "\u22a7",
                  "&mopf;": "\ud835\udd5e",
                  "&mp;": "\u2213",
                  "&mscr;": "\ud835\udcc2",
                  "&mstpos;": "\u223e",
                  "&mu;": "\u03bc",
                  "&multimap;": "\u22b8",
                  "&mumap;": "\u22b8",
                  "&nGg;": "\u22d9\u0338",
                  "&nGt;": "\u226b\u20d2",
                  "&nGtv;": "\u226b\u0338",
                  "&nLeftarrow;": "\u21cd",
                  "&nLeftrightarrow;": "\u21ce",
                  "&nLl;": "\u22d8\u0338",
                  "&nLt;": "\u226a\u20d2",
                  "&nLtv;": "\u226a\u0338",
                  "&nRightarrow;": "\u21cf",
                  "&nVDash;": "\u22af",
                  "&nVdash;": "\u22ae",
                  "&nabla;": "\u2207",
                  "&nacute;": "\u0144",
                  "&nang;": "\u2220\u20d2",
                  "&nap;": "\u2249",
                  "&napE;": "\u2a70\u0338",
                  "&napid;": "\u224b\u0338",
                  "&napos;": "\u0149",
                  "&napprox;": "\u2249",
                  "&natur;": "\u266e",
                  "&natural;": "\u266e",
                  "&naturals;": "\u2115",
                  "&nbsp": "\xa0",
                  "&nbsp;": "\xa0",
                  "&nbump;": "\u224e\u0338",
                  "&nbumpe;": "\u224f\u0338",
                  "&ncap;": "\u2a43",
                  "&ncaron;": "\u0148",
                  "&ncedil;": "\u0146",
                  "&ncong;": "\u2247",
                  "&ncongdot;": "\u2a6d\u0338",
                  "&ncup;": "\u2a42",
                  "&ncy;": "\u043d",
                  "&ndash;": "\u2013",
                  "&ne;": "\u2260",
                  "&neArr;": "\u21d7",
                  "&nearhk;": "\u2924",
                  "&nearr;": "\u2197",
                  "&nearrow;": "\u2197",
                  "&nedot;": "\u2250\u0338",
                  "&nequiv;": "\u2262",
                  "&nesear;": "\u2928",
                  "&nesim;": "\u2242\u0338",
                  "&nexist;": "\u2204",
                  "&nexists;": "\u2204",
                  "&nfr;": "\ud835\udd2b",
                  "&ngE;": "\u2267\u0338",
                  "&nge;": "\u2271",
                  "&ngeq;": "\u2271",
                  "&ngeqq;": "\u2267\u0338",
                  "&ngeqslant;": "\u2a7e\u0338",
                  "&nges;": "\u2a7e\u0338",
                  "&ngsim;": "\u2275",
                  "&ngt;": "\u226f",
                  "&ngtr;": "\u226f",
                  "&nhArr;": "\u21ce",
                  "&nharr;": "\u21ae",
                  "&nhpar;": "\u2af2",
                  "&ni;": "\u220b",
                  "&nis;": "\u22fc",
                  "&nisd;": "\u22fa",
                  "&niv;": "\u220b",
                  "&njcy;": "\u045a",
                  "&nlArr;": "\u21cd",
                  "&nlE;": "\u2266\u0338",
                  "&nlarr;": "\u219a",
                  "&nldr;": "\u2025",
                  "&nle;": "\u2270",
                  "&nleftarrow;": "\u219a",
                  "&nleftrightarrow;": "\u21ae",
                  "&nleq;": "\u2270",
                  "&nleqq;": "\u2266\u0338",
                  "&nleqslant;": "\u2a7d\u0338",
                  "&nles;": "\u2a7d\u0338",
                  "&nless;": "\u226e",
                  "&nlsim;": "\u2274",
                  "&nlt;": "\u226e",
                  "&nltri;": "\u22ea",
                  "&nltrie;": "\u22ec",
                  "&nmid;": "\u2224",
                  "&nopf;": "\ud835\udd5f",
                  "&not": "\xac",
                  "&not;": "\xac",
                  "&notin;": "\u2209",
                  "&notinE;": "\u22f9\u0338",
                  "&notindot;": "\u22f5\u0338",
                  "&notinva;": "\u2209",
                  "&notinvb;": "\u22f7",
                  "&notinvc;": "\u22f6",
                  "&notni;": "\u220c",
                  "&notniva;": "\u220c",
                  "&notnivb;": "\u22fe",
                  "&notnivc;": "\u22fd",
                  "&npar;": "\u2226",
                  "&nparallel;": "\u2226",
                  "&nparsl;": "\u2afd\u20e5",
                  "&npart;": "\u2202\u0338",
                  "&npolint;": "\u2a14",
                  "&npr;": "\u2280",
                  "&nprcue;": "\u22e0",
                  "&npre;": "\u2aaf\u0338",
                  "&nprec;": "\u2280",
                  "&npreceq;": "\u2aaf\u0338",
                  "&nrArr;": "\u21cf",
                  "&nrarr;": "\u219b",
                  "&nrarrc;": "\u2933\u0338",
                  "&nrarrw;": "\u219d\u0338",
                  "&nrightarrow;": "\u219b",
                  "&nrtri;": "\u22eb",
                  "&nrtrie;": "\u22ed",
                  "&nsc;": "\u2281",
                  "&nsccue;": "\u22e1",
                  "&nsce;": "\u2ab0\u0338",
                  "&nscr;": "\ud835\udcc3",
                  "&nshortmid;": "\u2224",
                  "&nshortparallel;": "\u2226",
                  "&nsim;": "\u2241",
                  "&nsime;": "\u2244",
                  "&nsimeq;": "\u2244",
                  "&nsmid;": "\u2224",
                  "&nspar;": "\u2226",
                  "&nsqsube;": "\u22e2",
                  "&nsqsupe;": "\u22e3",
                  "&nsub;": "\u2284",
                  "&nsubE;": "\u2ac5\u0338",
                  "&nsube;": "\u2288",
                  "&nsubset;": "\u2282\u20d2",
                  "&nsubseteq;": "\u2288",
                  "&nsubseteqq;": "\u2ac5\u0338",
                  "&nsucc;": "\u2281",
                  "&nsucceq;": "\u2ab0\u0338",
                  "&nsup;": "\u2285",
                  "&nsupE;": "\u2ac6\u0338",
                  "&nsupe;": "\u2289",
                  "&nsupset;": "\u2283\u20d2",
                  "&nsupseteq;": "\u2289",
                  "&nsupseteqq;": "\u2ac6\u0338",
                  "&ntgl;": "\u2279",
                  "&ntilde": "\xf1",
                  "&ntilde;": "\xf1",
                  "&ntlg;": "\u2278",
                  "&ntriangleleft;": "\u22ea",
                  "&ntrianglelefteq;": "\u22ec",
                  "&ntriangleright;": "\u22eb",
                  "&ntrianglerighteq;": "\u22ed",
                  "&nu;": "\u03bd",
                  "&num;": "#",
                  "&numero;": "\u2116",
                  "&numsp;": "\u2007",
                  "&nvDash;": "\u22ad",
                  "&nvHarr;": "\u2904",
                  "&nvap;": "\u224d\u20d2",
                  "&nvdash;": "\u22ac",
                  "&nvge;": "\u2265\u20d2",
                  "&nvgt;": ">\u20d2",
                  "&nvinfin;": "\u29de",
                  "&nvlArr;": "\u2902",
                  "&nvle;": "\u2264\u20d2",
                  "&nvlt;": "<\u20d2",
                  "&nvltrie;": "\u22b4\u20d2",
                  "&nvrArr;": "\u2903",
                  "&nvrtrie;": "\u22b5\u20d2",
                  "&nvsim;": "\u223c\u20d2",
                  "&nwArr;": "\u21d6",
                  "&nwarhk;": "\u2923",
                  "&nwarr;": "\u2196",
                  "&nwarrow;": "\u2196",
                  "&nwnear;": "\u2927",
                  "&oS;": "\u24c8",
                  "&oacute": "\xf3",
                  "&oacute;": "\xf3",
                  "&oast;": "\u229b",
                  "&ocir;": "\u229a",
                  "&ocirc": "\xf4",
                  "&ocirc;": "\xf4",
                  "&ocy;": "\u043e",
                  "&odash;": "\u229d",
                  "&odblac;": "\u0151",
                  "&odiv;": "\u2a38",
                  "&odot;": "\u2299",
                  "&odsold;": "\u29bc",
                  "&oelig;": "\u0153",
                  "&ofcir;": "\u29bf",
                  "&ofr;": "\ud835\udd2c",
                  "&ogon;": "\u02db",
                  "&ograve": "\xf2",
                  "&ograve;": "\xf2",
                  "&ogt;": "\u29c1",
                  "&ohbar;": "\u29b5",
                  "&ohm;": "\u03a9",
                  "&oint;": "\u222e",
                  "&olarr;": "\u21ba",
                  "&olcir;": "\u29be",
                  "&olcross;": "\u29bb",
                  "&oline;": "\u203e",
                  "&olt;": "\u29c0",
                  "&omacr;": "\u014d",
                  "&omega;": "\u03c9",
                  "&omicron;": "\u03bf",
                  "&omid;": "\u29b6",
                  "&ominus;": "\u2296",
                  "&oopf;": "\ud835\udd60",
                  "&opar;": "\u29b7",
                  "&operp;": "\u29b9",
                  "&oplus;": "\u2295",
                  "&or;": "\u2228",
                  "&orarr;": "\u21bb",
                  "&ord;": "\u2a5d",
                  "&order;": "\u2134",
                  "&orderof;": "\u2134",
                  "&ordf": "\xaa",
                  "&ordf;": "\xaa",
                  "&ordm": "\xba",
                  "&ordm;": "\xba",
                  "&origof;": "\u22b6",
                  "&oror;": "\u2a56",
                  "&orslope;": "\u2a57",
                  "&orv;": "\u2a5b",
                  "&oscr;": "\u2134",
                  "&oslash": "\xf8",
                  "&oslash;": "\xf8",
                  "&osol;": "\u2298",
                  "&otilde": "\xf5",
                  "&otilde;": "\xf5",
                  "&otimes;": "\u2297",
                  "&otimesas;": "\u2a36",
                  "&ouml": "\xf6",
                  "&ouml;": "\xf6",
                  "&ovbar;": "\u233d",
                  "&par;": "\u2225",
                  "&para": "\xb6",
                  "&para;": "\xb6",
                  "&parallel;": "\u2225",
                  "&parsim;": "\u2af3",
                  "&parsl;": "\u2afd",
                  "&part;": "\u2202",
                  "&pcy;": "\u043f",
                  "&percnt;": "%",
                  "&period;": ".",
                  "&permil;": "\u2030",
                  "&perp;": "\u22a5",
                  "&pertenk;": "\u2031",
                  "&pfr;": "\ud835\udd2d",
                  "&phi;": "\u03c6",
                  "&phiv;": "\u03d5",
                  "&phmmat;": "\u2133",
                  "&phone;": "\u260e",
                  "&pi;": "\u03c0",
                  "&pitchfork;": "\u22d4",
                  "&piv;": "\u03d6",
                  "&planck;": "\u210f",
                  "&planckh;": "\u210e",
                  "&plankv;": "\u210f",
                  "&plus;": "+",
                  "&plusacir;": "\u2a23",
                  "&plusb;": "\u229e",
                  "&pluscir;": "\u2a22",
                  "&plusdo;": "\u2214",
                  "&plusdu;": "\u2a25",
                  "&pluse;": "\u2a72",
                  "&plusmn": "\xb1",
                  "&plusmn;": "\xb1",
                  "&plussim;": "\u2a26",
                  "&plustwo;": "\u2a27",
                  "&pm;": "\xb1",
                  "&pointint;": "\u2a15",
                  "&popf;": "\ud835\udd61",
                  "&pound": "\xa3",
                  "&pound;": "\xa3",
                  "&pr;": "\u227a",
                  "&prE;": "\u2ab3",
                  "&prap;": "\u2ab7",
                  "&prcue;": "\u227c",
                  "&pre;": "\u2aaf",
                  "&prec;": "\u227a",
                  "&precapprox;": "\u2ab7",
                  "&preccurlyeq;": "\u227c",
                  "&preceq;": "\u2aaf",
                  "&precnapprox;": "\u2ab9",
                  "&precneqq;": "\u2ab5",
                  "&precnsim;": "\u22e8",
                  "&precsim;": "\u227e",
                  "&prime;": "\u2032",
                  "&primes;": "\u2119",
                  "&prnE;": "\u2ab5",
                  "&prnap;": "\u2ab9",
                  "&prnsim;": "\u22e8",
                  "&prod;": "\u220f",
                  "&profalar;": "\u232e",
                  "&profline;": "\u2312",
                  "&profsurf;": "\u2313",
                  "&prop;": "\u221d",
                  "&propto;": "\u221d",
                  "&prsim;": "\u227e",
                  "&prurel;": "\u22b0",
                  "&pscr;": "\ud835\udcc5",
                  "&psi;": "\u03c8",
                  "&puncsp;": "\u2008",
                  "&qfr;": "\ud835\udd2e",
                  "&qint;": "\u2a0c",
                  "&qopf;": "\ud835\udd62",
                  "&qprime;": "\u2057",
                  "&qscr;": "\ud835\udcc6",
                  "&quaternions;": "\u210d",
                  "&quatint;": "\u2a16",
                  "&quest;": "?",
                  "&questeq;": "\u225f",
                  "&quot": '"',
                  "&quot;": '"',
                  "&rAarr;": "\u21db",
                  "&rArr;": "\u21d2",
                  "&rAtail;": "\u291c",
                  "&rBarr;": "\u290f",
                  "&rHar;": "\u2964",
                  "&race;": "\u223d\u0331",
                  "&racute;": "\u0155",
                  "&radic;": "\u221a",
                  "&raemptyv;": "\u29b3",
                  "&rang;": "\u27e9",
                  "&rangd;": "\u2992",
                  "&range;": "\u29a5",
                  "&rangle;": "\u27e9",
                  "&raquo": "\xbb",
                  "&raquo;": "\xbb",
                  "&rarr;": "\u2192",
                  "&rarrap;": "\u2975",
                  "&rarrb;": "\u21e5",
                  "&rarrbfs;": "\u2920",
                  "&rarrc;": "\u2933",
                  "&rarrfs;": "\u291e",
                  "&rarrhk;": "\u21aa",
                  "&rarrlp;": "\u21ac",
                  "&rarrpl;": "\u2945",
                  "&rarrsim;": "\u2974",
                  "&rarrtl;": "\u21a3",
                  "&rarrw;": "\u219d",
                  "&ratail;": "\u291a",
                  "&ratio;": "\u2236",
                  "&rationals;": "\u211a",
                  "&rbarr;": "\u290d",
                  "&rbbrk;": "\u2773",
                  "&rbrace;": "}",
                  "&rbrack;": "]",
                  "&rbrke;": "\u298c",
                  "&rbrksld;": "\u298e",
                  "&rbrkslu;": "\u2990",
                  "&rcaron;": "\u0159",
                  "&rcedil;": "\u0157",
                  "&rceil;": "\u2309",
                  "&rcub;": "}",
                  "&rcy;": "\u0440",
                  "&rdca;": "\u2937",
                  "&rdldhar;": "\u2969",
                  "&rdquo;": "\u201d",
                  "&rdquor;": "\u201d",
                  "&rdsh;": "\u21b3",
                  "&real;": "\u211c",
                  "&realine;": "\u211b",
                  "&realpart;": "\u211c",
                  "&reals;": "\u211d",
                  "&rect;": "\u25ad",
                  "&reg": "\xae",
                  "&reg;": "\xae",
                  "&rfisht;": "\u297d",
                  "&rfloor;": "\u230b",
                  "&rfr;": "\ud835\udd2f",
                  "&rhard;": "\u21c1",
                  "&rharu;": "\u21c0",
                  "&rharul;": "\u296c",
                  "&rho;": "\u03c1",
                  "&rhov;": "\u03f1",
                  "&rightarrow;": "\u2192",
                  "&rightarrowtail;": "\u21a3",
                  "&rightharpoondown;": "\u21c1",
                  "&rightharpoonup;": "\u21c0",
                  "&rightleftarrows;": "\u21c4",
                  "&rightleftharpoons;": "\u21cc",
                  "&rightrightarrows;": "\u21c9",
                  "&rightsquigarrow;": "\u219d",
                  "&rightthreetimes;": "\u22cc",
                  "&ring;": "\u02da",
                  "&risingdotseq;": "\u2253",
                  "&rlarr;": "\u21c4",
                  "&rlhar;": "\u21cc",
                  "&rlm;": "\u200f",
                  "&rmoust;": "\u23b1",
                  "&rmoustache;": "\u23b1",
                  "&rnmid;": "\u2aee",
                  "&roang;": "\u27ed",
                  "&roarr;": "\u21fe",
                  "&robrk;": "\u27e7",
                  "&ropar;": "\u2986",
                  "&ropf;": "\ud835\udd63",
                  "&roplus;": "\u2a2e",
                  "&rotimes;": "\u2a35",
                  "&rpar;": ")",
                  "&rpargt;": "\u2994",
                  "&rppolint;": "\u2a12",
                  "&rrarr;": "\u21c9",
                  "&rsaquo;": "\u203a",
                  "&rscr;": "\ud835\udcc7",
                  "&rsh;": "\u21b1",
                  "&rsqb;": "]",
                  "&rsquo;": "\u2019",
                  "&rsquor;": "\u2019",
                  "&rthree;": "\u22cc",
                  "&rtimes;": "\u22ca",
                  "&rtri;": "\u25b9",
                  "&rtrie;": "\u22b5",
                  "&rtrif;": "\u25b8",
                  "&rtriltri;": "\u29ce",
                  "&ruluhar;": "\u2968",
                  "&rx;": "\u211e",
                  "&sacute;": "\u015b",
                  "&sbquo;": "\u201a",
                  "&sc;": "\u227b",
                  "&scE;": "\u2ab4",
                  "&scap;": "\u2ab8",
                  "&scaron;": "\u0161",
                  "&sccue;": "\u227d",
                  "&sce;": "\u2ab0",
                  "&scedil;": "\u015f",
                  "&scirc;": "\u015d",
                  "&scnE;": "\u2ab6",
                  "&scnap;": "\u2aba",
                  "&scnsim;": "\u22e9",
                  "&scpolint;": "\u2a13",
                  "&scsim;": "\u227f",
                  "&scy;": "\u0441",
                  "&sdot;": "\u22c5",
                  "&sdotb;": "\u22a1",
                  "&sdote;": "\u2a66",
                  "&seArr;": "\u21d8",
                  "&searhk;": "\u2925",
                  "&searr;": "\u2198",
                  "&searrow;": "\u2198",
                  "&sect": "\xa7",
                  "&sect;": "\xa7",
                  "&semi;": ";",
                  "&seswar;": "\u2929",
                  "&setminus;": "\u2216",
                  "&setmn;": "\u2216",
                  "&sext;": "\u2736",
                  "&sfr;": "\ud835\udd30",
                  "&sfrown;": "\u2322",
                  "&sharp;": "\u266f",
                  "&shchcy;": "\u0449",
                  "&shcy;": "\u0448",
                  "&shortmid;": "\u2223",
                  "&shortparallel;": "\u2225",
                  "&shy": "\xad",
                  "&shy;": "\xad",
                  "&sigma;": "\u03c3",
                  "&sigmaf;": "\u03c2",
                  "&sigmav;": "\u03c2",
                  "&sim;": "\u223c",
                  "&simdot;": "\u2a6a",
                  "&sime;": "\u2243",
                  "&simeq;": "\u2243",
                  "&simg;": "\u2a9e",
                  "&simgE;": "\u2aa0",
                  "&siml;": "\u2a9d",
                  "&simlE;": "\u2a9f",
                  "&simne;": "\u2246",
                  "&simplus;": "\u2a24",
                  "&simrarr;": "\u2972",
                  "&slarr;": "\u2190",
                  "&smallsetminus;": "\u2216",
                  "&smashp;": "\u2a33",
                  "&smeparsl;": "\u29e4",
                  "&smid;": "\u2223",
                  "&smile;": "\u2323",
                  "&smt;": "\u2aaa",
                  "&smte;": "\u2aac",
                  "&smtes;": "\u2aac\ufe00",
                  "&softcy;": "\u044c",
                  "&sol;": "/",
                  "&solb;": "\u29c4",
                  "&solbar;": "\u233f",
                  "&sopf;": "\ud835\udd64",
                  "&spades;": "\u2660",
                  "&spadesuit;": "\u2660",
                  "&spar;": "\u2225",
                  "&sqcap;": "\u2293",
                  "&sqcaps;": "\u2293\ufe00",
                  "&sqcup;": "\u2294",
                  "&sqcups;": "\u2294\ufe00",
                  "&sqsub;": "\u228f",
                  "&sqsube;": "\u2291",
                  "&sqsubset;": "\u228f",
                  "&sqsubseteq;": "\u2291",
                  "&sqsup;": "\u2290",
                  "&sqsupe;": "\u2292",
                  "&sqsupset;": "\u2290",
                  "&sqsupseteq;": "\u2292",
                  "&squ;": "\u25a1",
                  "&square;": "\u25a1",
                  "&squarf;": "\u25aa",
                  "&squf;": "\u25aa",
                  "&srarr;": "\u2192",
                  "&sscr;": "\ud835\udcc8",
                  "&ssetmn;": "\u2216",
                  "&ssmile;": "\u2323",
                  "&sstarf;": "\u22c6",
                  "&star;": "\u2606",
                  "&starf;": "\u2605",
                  "&straightepsilon;": "\u03f5",
                  "&straightphi;": "\u03d5",
                  "&strns;": "\xaf",
                  "&sub;": "\u2282",
                  "&subE;": "\u2ac5",
                  "&subdot;": "\u2abd",
                  "&sube;": "\u2286",
                  "&subedot;": "\u2ac3",
                  "&submult;": "\u2ac1",
                  "&subnE;": "\u2acb",
                  "&subne;": "\u228a",
                  "&subplus;": "\u2abf",
                  "&subrarr;": "\u2979",
                  "&subset;": "\u2282",
                  "&subseteq;": "\u2286",
                  "&subseteqq;": "\u2ac5",
                  "&subsetneq;": "\u228a",
                  "&subsetneqq;": "\u2acb",
                  "&subsim;": "\u2ac7",
                  "&subsub;": "\u2ad5",
                  "&subsup;": "\u2ad3",
                  "&succ;": "\u227b",
                  "&succapprox;": "\u2ab8",
                  "&succcurlyeq;": "\u227d",
                  "&succeq;": "\u2ab0",
                  "&succnapprox;": "\u2aba",
                  "&succneqq;": "\u2ab6",
                  "&succnsim;": "\u22e9",
                  "&succsim;": "\u227f",
                  "&sum;": "\u2211",
                  "&sung;": "\u266a",
                  "&sup1": "\xb9",
                  "&sup1;": "\xb9",
                  "&sup2": "\xb2",
                  "&sup2;": "\xb2",
                  "&sup3": "\xb3",
                  "&sup3;": "\xb3",
                  "&sup;": "\u2283",
                  "&supE;": "\u2ac6",
                  "&supdot;": "\u2abe",
                  "&supdsub;": "\u2ad8",
                  "&supe;": "\u2287",
                  "&supedot;": "\u2ac4",
                  "&suphsol;": "\u27c9",
                  "&suphsub;": "\u2ad7",
                  "&suplarr;": "\u297b",
                  "&supmult;": "\u2ac2",
                  "&supnE;": "\u2acc",
                  "&supne;": "\u228b",
                  "&supplus;": "\u2ac0",
                  "&supset;": "\u2283",
                  "&supseteq;": "\u2287",
                  "&supseteqq;": "\u2ac6",
                  "&supsetneq;": "\u228b",
                  "&supsetneqq;": "\u2acc",
                  "&supsim;": "\u2ac8",
                  "&supsub;": "\u2ad4",
                  "&supsup;": "\u2ad6",
                  "&swArr;": "\u21d9",
                  "&swarhk;": "\u2926",
                  "&swarr;": "\u2199",
                  "&swarrow;": "\u2199",
                  "&swnwar;": "\u292a",
                  "&szlig": "\xdf",
                  "&szlig;": "\xdf",
                  "&target;": "\u2316",
                  "&tau;": "\u03c4",
                  "&tbrk;": "\u23b4",
                  "&tcaron;": "\u0165",
                  "&tcedil;": "\u0163",
                  "&tcy;": "\u0442",
                  "&tdot;": "\u20db",
                  "&telrec;": "\u2315",
                  "&tfr;": "\ud835\udd31",
                  "&there4;": "\u2234",
                  "&therefore;": "\u2234",
                  "&theta;": "\u03b8",
                  "&thetasym;": "\u03d1",
                  "&thetav;": "\u03d1",
                  "&thickapprox;": "\u2248",
                  "&thicksim;": "\u223c",
                  "&thinsp;": "\u2009",
                  "&thkap;": "\u2248",
                  "&thksim;": "\u223c",
                  "&thorn": "\xfe",
                  "&thorn;": "\xfe",
                  "&tilde;": "\u02dc",
                  "&times": "\xd7",
                  "&times;": "\xd7",
                  "&timesb;": "\u22a0",
                  "&timesbar;": "\u2a31",
                  "&timesd;": "\u2a30",
                  "&tint;": "\u222d",
                  "&toea;": "\u2928",
                  "&top;": "\u22a4",
                  "&topbot;": "\u2336",
                  "&topcir;": "\u2af1",
                  "&topf;": "\ud835\udd65",
                  "&topfork;": "\u2ada",
                  "&tosa;": "\u2929",
                  "&tprime;": "\u2034",
                  "&trade;": "\u2122",
                  "&triangle;": "\u25b5",
                  "&triangledown;": "\u25bf",
                  "&triangleleft;": "\u25c3",
                  "&trianglelefteq;": "\u22b4",
                  "&triangleq;": "\u225c",
                  "&triangleright;": "\u25b9",
                  "&trianglerighteq;": "\u22b5",
                  "&tridot;": "\u25ec",
                  "&trie;": "\u225c",
                  "&triminus;": "\u2a3a",
                  "&triplus;": "\u2a39",
                  "&trisb;": "\u29cd",
                  "&tritime;": "\u2a3b",
                  "&trpezium;": "\u23e2",
                  "&tscr;": "\ud835\udcc9",
                  "&tscy;": "\u0446",
                  "&tshcy;": "\u045b",
                  "&tstrok;": "\u0167",
                  "&twixt;": "\u226c",
                  "&twoheadleftarrow;": "\u219e",
                  "&twoheadrightarrow;": "\u21a0",
                  "&uArr;": "\u21d1",
                  "&uHar;": "\u2963",
                  "&uacute": "\xfa",
                  "&uacute;": "\xfa",
                  "&uarr;": "\u2191",
                  "&ubrcy;": "\u045e",
                  "&ubreve;": "\u016d",
                  "&ucirc": "\xfb",
                  "&ucirc;": "\xfb",
                  "&ucy;": "\u0443",
                  "&udarr;": "\u21c5",
                  "&udblac;": "\u0171",
                  "&udhar;": "\u296e",
                  "&ufisht;": "\u297e",
                  "&ufr;": "\ud835\udd32",
                  "&ugrave": "\xf9",
                  "&ugrave;": "\xf9",
                  "&uharl;": "\u21bf",
                  "&uharr;": "\u21be",
                  "&uhblk;": "\u2580",
                  "&ulcorn;": "\u231c",
                  "&ulcorner;": "\u231c",
                  "&ulcrop;": "\u230f",
                  "&ultri;": "\u25f8",
                  "&umacr;": "\u016b",
                  "&uml": "\xa8",
                  "&uml;": "\xa8",
                  "&uogon;": "\u0173",
                  "&uopf;": "\ud835\udd66",
                  "&uparrow;": "\u2191",
                  "&updownarrow;": "\u2195",
                  "&upharpoonleft;": "\u21bf",
                  "&upharpoonright;": "\u21be",
                  "&uplus;": "\u228e",
                  "&upsi;": "\u03c5",
                  "&upsih;": "\u03d2",
                  "&upsilon;": "\u03c5",
                  "&upuparrows;": "\u21c8",
                  "&urcorn;": "\u231d",
                  "&urcorner;": "\u231d",
                  "&urcrop;": "\u230e",
                  "&uring;": "\u016f",
                  "&urtri;": "\u25f9",
                  "&uscr;": "\ud835\udcca",
                  "&utdot;": "\u22f0",
                  "&utilde;": "\u0169",
                  "&utri;": "\u25b5",
                  "&utrif;": "\u25b4",
                  "&uuarr;": "\u21c8",
                  "&uuml": "\xfc",
                  "&uuml;": "\xfc",
                  "&uwangle;": "\u29a7",
                  "&vArr;": "\u21d5",
                  "&vBar;": "\u2ae8",
                  "&vBarv;": "\u2ae9",
                  "&vDash;": "\u22a8",
                  "&vangrt;": "\u299c",
                  "&varepsilon;": "\u03f5",
                  "&varkappa;": "\u03f0",
                  "&varnothing;": "\u2205",
                  "&varphi;": "\u03d5",
                  "&varpi;": "\u03d6",
                  "&varpropto;": "\u221d",
                  "&varr;": "\u2195",
                  "&varrho;": "\u03f1",
                  "&varsigma;": "\u03c2",
                  "&varsubsetneq;": "\u228a\ufe00",
                  "&varsubsetneqq;": "\u2acb\ufe00",
                  "&varsupsetneq;": "\u228b\ufe00",
                  "&varsupsetneqq;": "\u2acc\ufe00",
                  "&vartheta;": "\u03d1",
                  "&vartriangleleft;": "\u22b2",
                  "&vartriangleright;": "\u22b3",
                  "&vcy;": "\u0432",
                  "&vdash;": "\u22a2",
                  "&vee;": "\u2228",
                  "&veebar;": "\u22bb",
                  "&veeeq;": "\u225a",
                  "&vellip;": "\u22ee",
                  "&verbar;": "|",
                  "&vert;": "|",
                  "&vfr;": "\ud835\udd33",
                  "&vltri;": "\u22b2",
                  "&vnsub;": "\u2282\u20d2",
                  "&vnsup;": "\u2283\u20d2",
                  "&vopf;": "\ud835\udd67",
                  "&vprop;": "\u221d",
                  "&vrtri;": "\u22b3",
                  "&vscr;": "\ud835\udccb",
                  "&vsubnE;": "\u2acb\ufe00",
                  "&vsubne;": "\u228a\ufe00",
                  "&vsupnE;": "\u2acc\ufe00",
                  "&vsupne;": "\u228b\ufe00",
                  "&vzigzag;": "\u299a",
                  "&wcirc;": "\u0175",
                  "&wedbar;": "\u2a5f",
                  "&wedge;": "\u2227",
                  "&wedgeq;": "\u2259",
                  "&weierp;": "\u2118",
                  "&wfr;": "\ud835\udd34",
                  "&wopf;": "\ud835\udd68",
                  "&wp;": "\u2118",
                  "&wr;": "\u2240",
                  "&wreath;": "\u2240",
                  "&wscr;": "\ud835\udccc",
                  "&xcap;": "\u22c2",
                  "&xcirc;": "\u25ef",
                  "&xcup;": "\u22c3",
                  "&xdtri;": "\u25bd",
                  "&xfr;": "\ud835\udd35",
                  "&xhArr;": "\u27fa",
                  "&xharr;": "\u27f7",
                  "&xi;": "\u03be",
                  "&xlArr;": "\u27f8",
                  "&xlarr;": "\u27f5",
                  "&xmap;": "\u27fc",
                  "&xnis;": "\u22fb",
                  "&xodot;": "\u2a00",
                  "&xopf;": "\ud835\udd69",
                  "&xoplus;": "\u2a01",
                  "&xotime;": "\u2a02",
                  "&xrArr;": "\u27f9",
                  "&xrarr;": "\u27f6",
                  "&xscr;": "\ud835\udccd",
                  "&xsqcup;": "\u2a06",
                  "&xuplus;": "\u2a04",
                  "&xutri;": "\u25b3",
                  "&xvee;": "\u22c1",
                  "&xwedge;": "\u22c0",
                  "&yacute": "\xfd",
                  "&yacute;": "\xfd",
                  "&yacy;": "\u044f",
                  "&ycirc;": "\u0177",
                  "&ycy;": "\u044b",
                  "&yen": "\xa5",
                  "&yen;": "\xa5",
                  "&yfr;": "\ud835\udd36",
                  "&yicy;": "\u0457",
                  "&yopf;": "\ud835\udd6a",
                  "&yscr;": "\ud835\udcce",
                  "&yucy;": "\u044e",
                  "&yuml": "\xff",
                  "&yuml;": "\xff",
                  "&zacute;": "\u017a",
                  "&zcaron;": "\u017e",
                  "&zcy;": "\u0437",
                  "&zdot;": "\u017c",
                  "&zeetrf;": "\u2128",
                  "&zeta;": "\u03b6",
                  "&zfr;": "\ud835\udd37",
                  "&zhcy;": "\u0436",
                  "&zigrarr;": "\u21dd",
                  "&zopf;": "\ud835\udd6b",
                  "&zscr;": "\ud835\udccf",
                  "&zwj;": "\u200d",
                  "&zwnj;": "\u200c",
                },
                characters: {
                  "\xc6": "&AElig;",
                  "&": "&amp;",
                  "\xc1": "&Aacute;",
                  "\u0102": "&Abreve;",
                  "\xc2": "&Acirc;",
                  "\u0410": "&Acy;",
                  "\ud835\udd04": "&Afr;",
                  "\xc0": "&Agrave;",
                  "\u0391": "&Alpha;",
                  "\u0100": "&Amacr;",
                  "\u2a53": "&And;",
                  "\u0104": "&Aogon;",
                  "\ud835\udd38": "&Aopf;",
                  "\u2061": "&af;",
                  "\xc5": "&angst;",
                  "\ud835\udc9c": "&Ascr;",
                  "\u2254": "&coloneq;",
                  "\xc3": "&Atilde;",
                  "\xc4": "&Auml;",
                  "\u2216": "&ssetmn;",
                  "\u2ae7": "&Barv;",
                  "\u2306": "&doublebarwedge;",
                  "\u0411": "&Bcy;",
                  "\u2235": "&because;",
                  "\u212c": "&bernou;",
                  "\u0392": "&Beta;",
                  "\ud835\udd05": "&Bfr;",
                  "\ud835\udd39": "&Bopf;",
                  "\u02d8": "&breve;",
                  "\u224e": "&bump;",
                  "\u0427": "&CHcy;",
                  "\xa9": "&copy;",
                  "\u0106": "&Cacute;",
                  "\u22d2": "&Cap;",
                  "\u2145": "&DD;",
                  "\u212d": "&Cfr;",
                  "\u010c": "&Ccaron;",
                  "\xc7": "&Ccedil;",
                  "\u0108": "&Ccirc;",
                  "\u2230": "&Cconint;",
                  "\u010a": "&Cdot;",
                  "\xb8": "&cedil;",
                  "\xb7": "&middot;",
                  "\u03a7": "&Chi;",
                  "\u2299": "&odot;",
                  "\u2296": "&ominus;",
                  "\u2295": "&oplus;",
                  "\u2297": "&otimes;",
                  "\u2232": "&cwconint;",
                  "\u201d": "&rdquor;",
                  "\u2019": "&rsquor;",
                  "\u2237": "&Proportion;",
                  "\u2a74": "&Colone;",
                  "\u2261": "&equiv;",
                  "\u222f": "&DoubleContourIntegral;",
                  "\u222e": "&oint;",
                  "\u2102": "&complexes;",
                  "\u2210": "&coprod;",
                  "\u2233": "&awconint;",
                  "\u2a2f": "&Cross;",
                  "\ud835\udc9e": "&Cscr;",
                  "\u22d3": "&Cup;",
                  "\u224d": "&asympeq;",
                  "\u2911": "&DDotrahd;",
                  "\u0402": "&DJcy;",
                  "\u0405": "&DScy;",
                  "\u040f": "&DZcy;",
                  "\u2021": "&ddagger;",
                  "\u21a1": "&Darr;",
                  "\u2ae4": "&DoubleLeftTee;",
                  "\u010e": "&Dcaron;",
                  "\u0414": "&Dcy;",
                  "\u2207": "&nabla;",
                  "\u0394": "&Delta;",
                  "\ud835\udd07": "&Dfr;",
                  "\xb4": "&acute;",
                  "\u02d9": "&dot;",
                  "\u02dd": "&dblac;",
                  "`": "&grave;",
                  "\u02dc": "&tilde;",
                  "\u22c4": "&diamond;",
                  "\u2146": "&dd;",
                  "\ud835\udd3b": "&Dopf;",
                  "\xa8": "&uml;",
                  "\u20dc": "&DotDot;",
                  "\u2250": "&esdot;",
                  "\u21d3": "&dArr;",
                  "\u21d0": "&lArr;",
                  "\u21d4": "&iff;",
                  "\u27f8": "&xlArr;",
                  "\u27fa": "&xhArr;",
                  "\u27f9": "&xrArr;",
                  "\u21d2": "&rArr;",
                  "\u22a8": "&vDash;",
                  "\u21d1": "&uArr;",
                  "\u21d5": "&vArr;",
                  "\u2225": "&spar;",
                  "\u2193": "&downarrow;",
                  "\u2913": "&DownArrowBar;",
                  "\u21f5": "&duarr;",
                  "\u0311": "&DownBreve;",
                  "\u2950": "&DownLeftRightVector;",
                  "\u295e": "&DownLeftTeeVector;",
                  "\u21bd": "&lhard;",
                  "\u2956": "&DownLeftVectorBar;",
                  "\u295f": "&DownRightTeeVector;",
                  "\u21c1": "&rightharpoondown;",
                  "\u2957": "&DownRightVectorBar;",
                  "\u22a4": "&top;",
                  "\u21a7": "&mapstodown;",
                  "\ud835\udc9f": "&Dscr;",
                  "\u0110": "&Dstrok;",
                  "\u014a": "&ENG;",
                  "\xd0": "&ETH;",
                  "\xc9": "&Eacute;",
                  "\u011a": "&Ecaron;",
                  "\xca": "&Ecirc;",
                  "\u042d": "&Ecy;",
                  "\u0116": "&Edot;",
                  "\ud835\udd08": "&Efr;",
                  "\xc8": "&Egrave;",
                  "\u2208": "&isinv;",
                  "\u0112": "&Emacr;",
                  "\u25fb": "&EmptySmallSquare;",
                  "\u25ab": "&EmptyVerySmallSquare;",
                  "\u0118": "&Eogon;",
                  "\ud835\udd3c": "&Eopf;",
                  "\u0395": "&Epsilon;",
                  "\u2a75": "&Equal;",
                  "\u2242": "&esim;",
                  "\u21cc": "&rlhar;",
                  "\u2130": "&expectation;",
                  "\u2a73": "&Esim;",
                  "\u0397": "&Eta;",
                  "\xcb": "&Euml;",
                  "\u2203": "&exist;",
                  "\u2147": "&exponentiale;",
                  "\u0424": "&Fcy;",
                  "\ud835\udd09": "&Ffr;",
                  "\u25fc": "&FilledSmallSquare;",
                  "\u25aa": "&squf;",
                  "\ud835\udd3d": "&Fopf;",
                  "\u2200": "&forall;",
                  "\u2131": "&Fscr;",
                  "\u0403": "&GJcy;",
                  ">": "&gt;",
                  "\u0393": "&Gamma;",
                  "\u03dc": "&Gammad;",
                  "\u011e": "&Gbreve;",
                  "\u0122": "&Gcedil;",
                  "\u011c": "&Gcirc;",
                  "\u0413": "&Gcy;",
                  "\u0120": "&Gdot;",
                  "\ud835\udd0a": "&Gfr;",
                  "\u22d9": "&ggg;",
                  "\ud835\udd3e": "&Gopf;",
                  "\u2265": "&geq;",
                  "\u22db": "&gtreqless;",
                  "\u2267": "&geqq;",
                  "\u2aa2": "&GreaterGreater;",
                  "\u2277": "&gtrless;",
                  "\u2a7e": "&ges;",
                  "\u2273": "&gtrsim;",
                  "\ud835\udca2": "&Gscr;",
                  "\u226b": "&gg;",
                  "\u042a": "&HARDcy;",
                  "\u02c7": "&caron;",
                  "^": "&Hat;",
                  "\u0124": "&Hcirc;",
                  "\u210c": "&Poincareplane;",
                  "\u210b": "&hamilt;",
                  "\u210d": "&quaternions;",
                  "\u2500": "&boxh;",
                  "\u0126": "&Hstrok;",
                  "\u224f": "&bumpeq;",
                  "\u0415": "&IEcy;",
                  "\u0132": "&IJlig;",
                  "\u0401": "&IOcy;",
                  "\xcd": "&Iacute;",
                  "\xce": "&Icirc;",
                  "\u0418": "&Icy;",
                  "\u0130": "&Idot;",
                  "\u2111": "&imagpart;",
                  "\xcc": "&Igrave;",
                  "\u012a": "&Imacr;",
                  "\u2148": "&ii;",
                  "\u222c": "&Int;",
                  "\u222b": "&int;",
                  "\u22c2": "&xcap;",
                  "\u2063": "&ic;",
                  "\u2062": "&it;",
                  "\u012e": "&Iogon;",
                  "\ud835\udd40": "&Iopf;",
                  "\u0399": "&Iota;",
                  "\u2110": "&imagline;",
                  "\u0128": "&Itilde;",
                  "\u0406": "&Iukcy;",
                  "\xcf": "&Iuml;",
                  "\u0134": "&Jcirc;",
                  "\u0419": "&Jcy;",
                  "\ud835\udd0d": "&Jfr;",
                  "\ud835\udd41": "&Jopf;",
                  "\ud835\udca5": "&Jscr;",
                  "\u0408": "&Jsercy;",
                  "\u0404": "&Jukcy;",
                  "\u0425": "&KHcy;",
                  "\u040c": "&KJcy;",
                  "\u039a": "&Kappa;",
                  "\u0136": "&Kcedil;",
                  "\u041a": "&Kcy;",
                  "\ud835\udd0e": "&Kfr;",
                  "\ud835\udd42": "&Kopf;",
                  "\ud835\udca6": "&Kscr;",
                  "\u0409": "&LJcy;",
                  "<": "&lt;",
                  "\u0139": "&Lacute;",
                  "\u039b": "&Lambda;",
                  "\u27ea": "&Lang;",
                  "\u2112": "&lagran;",
                  "\u219e": "&twoheadleftarrow;",
                  "\u013d": "&Lcaron;",
                  "\u013b": "&Lcedil;",
                  "\u041b": "&Lcy;",
                  "\u27e8": "&langle;",
                  "\u2190": "&slarr;",
                  "\u21e4": "&larrb;",
                  "\u21c6": "&lrarr;",
                  "\u2308": "&lceil;",
                  "\u27e6": "&lobrk;",
                  "\u2961": "&LeftDownTeeVector;",
                  "\u21c3": "&downharpoonleft;",
                  "\u2959": "&LeftDownVectorBar;",
                  "\u230a": "&lfloor;",
                  "\u2194": "&leftrightarrow;",
                  "\u294e": "&LeftRightVector;",
                  "\u22a3": "&dashv;",
                  "\u21a4": "&mapstoleft;",
                  "\u295a": "&LeftTeeVector;",
                  "\u22b2": "&vltri;",
                  "\u29cf": "&LeftTriangleBar;",
                  "\u22b4": "&trianglelefteq;",
                  "\u2951": "&LeftUpDownVector;",
                  "\u2960": "&LeftUpTeeVector;",
                  "\u21bf": "&upharpoonleft;",
                  "\u2958": "&LeftUpVectorBar;",
                  "\u21bc": "&lharu;",
                  "\u2952": "&LeftVectorBar;",
                  "\u22da": "&lesseqgtr;",
                  "\u2266": "&leqq;",
                  "\u2276": "&lg;",
                  "\u2aa1": "&LessLess;",
                  "\u2a7d": "&les;",
                  "\u2272": "&lsim;",
                  "\ud835\udd0f": "&Lfr;",
                  "\u22d8": "&Ll;",
                  "\u21da": "&lAarr;",
                  "\u013f": "&Lmidot;",
                  "\u27f5": "&xlarr;",
                  "\u27f7": "&xharr;",
                  "\u27f6": "&xrarr;",
                  "\ud835\udd43": "&Lopf;",
                  "\u2199": "&swarrow;",
                  "\u2198": "&searrow;",
                  "\u21b0": "&lsh;",
                  "\u0141": "&Lstrok;",
                  "\u226a": "&ll;",
                  "\u2905": "&Map;",
                  "\u041c": "&Mcy;",
                  "\u205f": "&MediumSpace;",
                  "\u2133": "&phmmat;",
                  "\ud835\udd10": "&Mfr;",
                  "\u2213": "&mp;",
                  "\ud835\udd44": "&Mopf;",
                  "\u039c": "&Mu;",
                  "\u040a": "&NJcy;",
                  "\u0143": "&Nacute;",
                  "\u0147": "&Ncaron;",
                  "\u0145": "&Ncedil;",
                  "\u041d": "&Ncy;",
                  "\u200b": "&ZeroWidthSpace;",
                  "\n": "&NewLine;",
                  "\ud835\udd11": "&Nfr;",
                  "\u2060": "&NoBreak;",
                  "\xa0": "&nbsp;",
                  "\u2115": "&naturals;",
                  "\u2aec": "&Not;",
                  "\u2262": "&nequiv;",
                  "\u226d": "&NotCupCap;",
                  "\u2226": "&nspar;",
                  "\u2209": "&notinva;",
                  "\u2260": "&ne;",
                  "\u2242\u0338": "&nesim;",
                  "\u2204": "&nexists;",
                  "\u226f": "&ngtr;",
                  "\u2271": "&ngeq;",
                  "\u2267\u0338": "&ngeqq;",
                  "\u226b\u0338": "&nGtv;",
                  "\u2279": "&ntgl;",
                  "\u2a7e\u0338": "&nges;",
                  "\u2275": "&ngsim;",
                  "\u224e\u0338": "&nbump;",
                  "\u224f\u0338": "&nbumpe;",
                  "\u22ea": "&ntriangleleft;",
                  "\u29cf\u0338": "&NotLeftTriangleBar;",
                  "\u22ec": "&ntrianglelefteq;",
                  "\u226e": "&nlt;",
                  "\u2270": "&nleq;",
                  "\u2278": "&ntlg;",
                  "\u226a\u0338": "&nLtv;",
                  "\u2a7d\u0338": "&nles;",
                  "\u2274": "&nlsim;",
                  "\u2aa2\u0338": "&NotNestedGreaterGreater;",
                  "\u2aa1\u0338": "&NotNestedLessLess;",
                  "\u2280": "&nprec;",
                  "\u2aaf\u0338": "&npreceq;",
                  "\u22e0": "&nprcue;",
                  "\u220c": "&notniva;",
                  "\u22eb": "&ntriangleright;",
                  "\u29d0\u0338": "&NotRightTriangleBar;",
                  "\u22ed": "&ntrianglerighteq;",
                  "\u228f\u0338": "&NotSquareSubset;",
                  "\u22e2": "&nsqsube;",
                  "\u2290\u0338": "&NotSquareSuperset;",
                  "\u22e3": "&nsqsupe;",
                  "\u2282\u20d2": "&vnsub;",
                  "\u2288": "&nsubseteq;",
                  "\u2281": "&nsucc;",
                  "\u2ab0\u0338": "&nsucceq;",
                  "\u22e1": "&nsccue;",
                  "\u227f\u0338": "&NotSucceedsTilde;",
                  "\u2283\u20d2": "&vnsup;",
                  "\u2289": "&nsupseteq;",
                  "\u2241": "&nsim;",
                  "\u2244": "&nsimeq;",
                  "\u2247": "&ncong;",
                  "\u2249": "&napprox;",
                  "\u2224": "&nsmid;",
                  "\ud835\udca9": "&Nscr;",
                  "\xd1": "&Ntilde;",
                  "\u039d": "&Nu;",
                  "\u0152": "&OElig;",
                  "\xd3": "&Oacute;",
                  "\xd4": "&Ocirc;",
                  "\u041e": "&Ocy;",
                  "\u0150": "&Odblac;",
                  "\ud835\udd12": "&Ofr;",
                  "\xd2": "&Ograve;",
                  "\u014c": "&Omacr;",
                  "\u03a9": "&ohm;",
                  "\u039f": "&Omicron;",
                  "\ud835\udd46": "&Oopf;",
                  "\u201c": "&ldquo;",
                  "\u2018": "&lsquo;",
                  "\u2a54": "&Or;",
                  "\ud835\udcaa": "&Oscr;",
                  "\xd8": "&Oslash;",
                  "\xd5": "&Otilde;",
                  "\u2a37": "&Otimes;",
                  "\xd6": "&Ouml;",
                  "\u203e": "&oline;",
                  "\u23de": "&OverBrace;",
                  "\u23b4": "&tbrk;",
                  "\u23dc": "&OverParenthesis;",
                  "\u2202": "&part;",
                  "\u041f": "&Pcy;",
                  "\ud835\udd13": "&Pfr;",
                  "\u03a6": "&Phi;",
                  "\u03a0": "&Pi;",
                  "\xb1": "&pm;",
                  "\u2119": "&primes;",
                  "\u2abb": "&Pr;",
                  "\u227a": "&prec;",
                  "\u2aaf": "&preceq;",
                  "\u227c": "&preccurlyeq;",
                  "\u227e": "&prsim;",
                  "\u2033": "&Prime;",
                  "\u220f": "&prod;",
                  "\u221d": "&vprop;",
                  "\ud835\udcab": "&Pscr;",
                  "\u03a8": "&Psi;",
                  '"': "&quot;",
                  "\ud835\udd14": "&Qfr;",
                  "\u211a": "&rationals;",
                  "\ud835\udcac": "&Qscr;",
                  "\u2910": "&drbkarow;",
                  "\xae": "&reg;",
                  "\u0154": "&Racute;",
                  "\u27eb": "&Rang;",
                  "\u21a0": "&twoheadrightarrow;",
                  "\u2916": "&Rarrtl;",
                  "\u0158": "&Rcaron;",
                  "\u0156": "&Rcedil;",
                  "\u0420": "&Rcy;",
                  "\u211c": "&realpart;",
                  "\u220b": "&niv;",
                  "\u21cb": "&lrhar;",
                  "\u296f": "&duhar;",
                  "\u03a1": "&Rho;",
                  "\u27e9": "&rangle;",
                  "\u2192": "&srarr;",
                  "\u21e5": "&rarrb;",
                  "\u21c4": "&rlarr;",
                  "\u2309": "&rceil;",
                  "\u27e7": "&robrk;",
                  "\u295d": "&RightDownTeeVector;",
                  "\u21c2": "&downharpoonright;",
                  "\u2955": "&RightDownVectorBar;",
                  "\u230b": "&rfloor;",
                  "\u22a2": "&vdash;",
                  "\u21a6": "&mapsto;",
                  "\u295b": "&RightTeeVector;",
                  "\u22b3": "&vrtri;",
                  "\u29d0": "&RightTriangleBar;",
                  "\u22b5": "&trianglerighteq;",
                  "\u294f": "&RightUpDownVector;",
                  "\u295c": "&RightUpTeeVector;",
                  "\u21be": "&upharpoonright;",
                  "\u2954": "&RightUpVectorBar;",
                  "\u21c0": "&rightharpoonup;",
                  "\u2953": "&RightVectorBar;",
                  "\u211d": "&reals;",
                  "\u2970": "&RoundImplies;",
                  "\u21db": "&rAarr;",
                  "\u211b": "&realine;",
                  "\u21b1": "&rsh;",
                  "\u29f4": "&RuleDelayed;",
                  "\u0429": "&SHCHcy;",
                  "\u0428": "&SHcy;",
                  "\u042c": "&SOFTcy;",
                  "\u015a": "&Sacute;",
                  "\u2abc": "&Sc;",
                  "\u0160": "&Scaron;",
                  "\u015e": "&Scedil;",
                  "\u015c": "&Scirc;",
                  "\u0421": "&Scy;",
                  "\ud835\udd16": "&Sfr;",
                  "\u2191": "&uparrow;",
                  "\u03a3": "&Sigma;",
                  "\u2218": "&compfn;",
                  "\ud835\udd4a": "&Sopf;",
                  "\u221a": "&radic;",
                  "\u25a1": "&square;",
                  "\u2293": "&sqcap;",
                  "\u228f": "&sqsubset;",
                  "\u2291": "&sqsubseteq;",
                  "\u2290": "&sqsupset;",
                  "\u2292": "&sqsupseteq;",
                  "\u2294": "&sqcup;",
                  "\ud835\udcae": "&Sscr;",
                  "\u22c6": "&sstarf;",
                  "\u22d0": "&Subset;",
                  "\u2286": "&subseteq;",
                  "\u227b": "&succ;",
                  "\u2ab0": "&succeq;",
                  "\u227d": "&succcurlyeq;",
                  "\u227f": "&succsim;",
                  "\u2211": "&sum;",
                  "\u22d1": "&Supset;",
                  "\u2283": "&supset;",
                  "\u2287": "&supseteq;",
                  "\xde": "&THORN;",
                  "\u2122": "&trade;",
                  "\u040b": "&TSHcy;",
                  "\u0426": "&TScy;",
                  "\t": "&Tab;",
                  "\u03a4": "&Tau;",
                  "\u0164": "&Tcaron;",
                  "\u0162": "&Tcedil;",
                  "\u0422": "&Tcy;",
                  "\ud835\udd17": "&Tfr;",
                  "\u2234": "&therefore;",
                  "\u0398": "&Theta;",
                  "\u205f\u200a": "&ThickSpace;",
                  "\u2009": "&thinsp;",
                  "\u223c": "&thksim;",
                  "\u2243": "&simeq;",
                  "\u2245": "&cong;",
                  "\u2248": "&thkap;",
                  "\ud835\udd4b": "&Topf;",
                  "\u20db": "&tdot;",
                  "\ud835\udcaf": "&Tscr;",
                  "\u0166": "&Tstrok;",
                  "\xda": "&Uacute;",
                  "\u219f": "&Uarr;",
                  "\u2949": "&Uarrocir;",
                  "\u040e": "&Ubrcy;",
                  "\u016c": "&Ubreve;",
                  "\xdb": "&Ucirc;",
                  "\u0423": "&Ucy;",
                  "\u0170": "&Udblac;",
                  "\ud835\udd18": "&Ufr;",
                  "\xd9": "&Ugrave;",
                  "\u016a": "&Umacr;",
                  _: "&lowbar;",
                  "\u23df": "&UnderBrace;",
                  "\u23b5": "&bbrk;",
                  "\u23dd": "&UnderParenthesis;",
                  "\u22c3": "&xcup;",
                  "\u228e": "&uplus;",
                  "\u0172": "&Uogon;",
                  "\ud835\udd4c": "&Uopf;",
                  "\u2912": "&UpArrowBar;",
                  "\u21c5": "&udarr;",
                  "\u2195": "&varr;",
                  "\u296e": "&udhar;",
                  "\u22a5": "&perp;",
                  "\u21a5": "&mapstoup;",
                  "\u2196": "&nwarrow;",
                  "\u2197": "&nearrow;",
                  "\u03d2": "&upsih;",
                  "\u03a5": "&Upsilon;",
                  "\u016e": "&Uring;",
                  "\ud835\udcb0": "&Uscr;",
                  "\u0168": "&Utilde;",
                  "\xdc": "&Uuml;",
                  "\u22ab": "&VDash;",
                  "\u2aeb": "&Vbar;",
                  "\u0412": "&Vcy;",
                  "\u22a9": "&Vdash;",
                  "\u2ae6": "&Vdashl;",
                  "\u22c1": "&xvee;",
                  "\u2016": "&Vert;",
                  "\u2223": "&smid;",
                  "|": "&vert;",
                  "\u2758": "&VerticalSeparator;",
                  "\u2240": "&wreath;",
                  "\u200a": "&hairsp;",
                  "\ud835\udd19": "&Vfr;",
                  "\ud835\udd4d": "&Vopf;",
                  "\ud835\udcb1": "&Vscr;",
                  "\u22aa": "&Vvdash;",
                  "\u0174": "&Wcirc;",
                  "\u22c0": "&xwedge;",
                  "\ud835\udd1a": "&Wfr;",
                  "\ud835\udd4e": "&Wopf;",
                  "\ud835\udcb2": "&Wscr;",
                  "\ud835\udd1b": "&Xfr;",
                  "\u039e": "&Xi;",
                  "\ud835\udd4f": "&Xopf;",
                  "\ud835\udcb3": "&Xscr;",
                  "\u042f": "&YAcy;",
                  "\u0407": "&YIcy;",
                  "\u042e": "&YUcy;",
                  "\xdd": "&Yacute;",
                  "\u0176": "&Ycirc;",
                  "\u042b": "&Ycy;",
                  "\ud835\udd1c": "&Yfr;",
                  "\ud835\udd50": "&Yopf;",
                  "\ud835\udcb4": "&Yscr;",
                  "\u0178": "&Yuml;",
                  "\u0416": "&ZHcy;",
                  "\u0179": "&Zacute;",
                  "\u017d": "&Zcaron;",
                  "\u0417": "&Zcy;",
                  "\u017b": "&Zdot;",
                  "\u0396": "&Zeta;",
                  "\u2128": "&zeetrf;",
                  "\u2124": "&integers;",
                  "\ud835\udcb5": "&Zscr;",
                  "\xe1": "&aacute;",
                  "\u0103": "&abreve;",
                  "\u223e": "&mstpos;",
                  "\u223e\u0333": "&acE;",
                  "\u223f": "&acd;",
                  "\xe2": "&acirc;",
                  "\u0430": "&acy;",
                  "\xe6": "&aelig;",
                  "\ud835\udd1e": "&afr;",
                  "\xe0": "&agrave;",
                  "\u2135": "&aleph;",
                  "\u03b1": "&alpha;",
                  "\u0101": "&amacr;",
                  "\u2a3f": "&amalg;",
                  "\u2227": "&wedge;",
                  "\u2a55": "&andand;",
                  "\u2a5c": "&andd;",
                  "\u2a58": "&andslope;",
                  "\u2a5a": "&andv;",
                  "\u2220": "&angle;",
                  "\u29a4": "&ange;",
                  "\u2221": "&measuredangle;",
                  "\u29a8": "&angmsdaa;",
                  "\u29a9": "&angmsdab;",
                  "\u29aa": "&angmsdac;",
                  "\u29ab": "&angmsdad;",
                  "\u29ac": "&angmsdae;",
                  "\u29ad": "&angmsdaf;",
                  "\u29ae": "&angmsdag;",
                  "\u29af": "&angmsdah;",
                  "\u221f": "&angrt;",
                  "\u22be": "&angrtvb;",
                  "\u299d": "&angrtvbd;",
                  "\u2222": "&angsph;",
                  "\u237c": "&angzarr;",
                  "\u0105": "&aogon;",
                  "\ud835\udd52": "&aopf;",
                  "\u2a70": "&apE;",
                  "\u2a6f": "&apacir;",
                  "\u224a": "&approxeq;",
                  "\u224b": "&apid;",
                  "'": "&apos;",
                  "\xe5": "&aring;",
                  "\ud835\udcb6": "&ascr;",
                  "*": "&midast;",
                  "\xe3": "&atilde;",
                  "\xe4": "&auml;",
                  "\u2a11": "&awint;",
                  "\u2aed": "&bNot;",
                  "\u224c": "&bcong;",
                  "\u03f6": "&bepsi;",
                  "\u2035": "&bprime;",
                  "\u223d": "&bsim;",
                  "\u22cd": "&bsime;",
                  "\u22bd": "&barvee;",
                  "\u2305": "&barwedge;",
                  "\u23b6": "&bbrktbrk;",
                  "\u0431": "&bcy;",
                  "\u201e": "&ldquor;",
                  "\u29b0": "&bemptyv;",
                  "\u03b2": "&beta;",
                  "\u2136": "&beth;",
                  "\u226c": "&twixt;",
                  "\ud835\udd1f": "&bfr;",
                  "\u25ef": "&xcirc;",
                  "\u2a00": "&xodot;",
                  "\u2a01": "&xoplus;",
                  "\u2a02": "&xotime;",
                  "\u2a06": "&xsqcup;",
                  "\u2605": "&starf;",
                  "\u25bd": "&xdtri;",
                  "\u25b3": "&xutri;",
                  "\u2a04": "&xuplus;",
                  "\u290d": "&rbarr;",
                  "\u29eb": "&lozf;",
                  "\u25b4": "&utrif;",
                  "\u25be": "&dtrif;",
                  "\u25c2": "&ltrif;",
                  "\u25b8": "&rtrif;",
                  "\u2423": "&blank;",
                  "\u2592": "&blk12;",
                  "\u2591": "&blk14;",
                  "\u2593": "&blk34;",
                  "\u2588": "&block;",
                  "=\u20e5": "&bne;",
                  "\u2261\u20e5": "&bnequiv;",
                  "\u2310": "&bnot;",
                  "\ud835\udd53": "&bopf;",
                  "\u22c8": "&bowtie;",
                  "\u2557": "&boxDL;",
                  "\u2554": "&boxDR;",
                  "\u2556": "&boxDl;",
                  "\u2553": "&boxDr;",
                  "\u2550": "&boxH;",
                  "\u2566": "&boxHD;",
                  "\u2569": "&boxHU;",
                  "\u2564": "&boxHd;",
                  "\u2567": "&boxHu;",
                  "\u255d": "&boxUL;",
                  "\u255a": "&boxUR;",
                  "\u255c": "&boxUl;",
                  "\u2559": "&boxUr;",
                  "\u2551": "&boxV;",
                  "\u256c": "&boxVH;",
                  "\u2563": "&boxVL;",
                  "\u2560": "&boxVR;",
                  "\u256b": "&boxVh;",
                  "\u2562": "&boxVl;",
                  "\u255f": "&boxVr;",
                  "\u29c9": "&boxbox;",
                  "\u2555": "&boxdL;",
                  "\u2552": "&boxdR;",
                  "\u2510": "&boxdl;",
                  "\u250c": "&boxdr;",
                  "\u2565": "&boxhD;",
                  "\u2568": "&boxhU;",
                  "\u252c": "&boxhd;",
                  "\u2534": "&boxhu;",
                  "\u229f": "&minusb;",
                  "\u229e": "&plusb;",
                  "\u22a0": "&timesb;",
                  "\u255b": "&boxuL;",
                  "\u2558": "&boxuR;",
                  "\u2518": "&boxul;",
                  "\u2514": "&boxur;",
                  "\u2502": "&boxv;",
                  "\u256a": "&boxvH;",
                  "\u2561": "&boxvL;",
                  "\u255e": "&boxvR;",
                  "\u253c": "&boxvh;",
                  "\u2524": "&boxvl;",
                  "\u251c": "&boxvr;",
                  "\xa6": "&brvbar;",
                  "\ud835\udcb7": "&bscr;",
                  "\u204f": "&bsemi;",
                  "\\": "&bsol;",
                  "\u29c5": "&bsolb;",
                  "\u27c8": "&bsolhsub;",
                  "\u2022": "&bullet;",
                  "\u2aae": "&bumpE;",
                  "\u0107": "&cacute;",
                  "\u2229": "&cap;",
                  "\u2a44": "&capand;",
                  "\u2a49": "&capbrcup;",
                  "\u2a4b": "&capcap;",
                  "\u2a47": "&capcup;",
                  "\u2a40": "&capdot;",
                  "\u2229\ufe00": "&caps;",
                  "\u2041": "&caret;",
                  "\u2a4d": "&ccaps;",
                  "\u010d": "&ccaron;",
                  "\xe7": "&ccedil;",
                  "\u0109": "&ccirc;",
                  "\u2a4c": "&ccups;",
                  "\u2a50": "&ccupssm;",
                  "\u010b": "&cdot;",
                  "\u29b2": "&cemptyv;",
                  "\xa2": "&cent;",
                  "\ud835\udd20": "&cfr;",
                  "\u0447": "&chcy;",
                  "\u2713": "&checkmark;",
                  "\u03c7": "&chi;",
                  "\u25cb": "&cir;",
                  "\u29c3": "&cirE;",
                  "\u02c6": "&circ;",
                  "\u2257": "&cire;",
                  "\u21ba": "&olarr;",
                  "\u21bb": "&orarr;",
                  "\u24c8": "&oS;",
                  "\u229b": "&oast;",
                  "\u229a": "&ocir;",
                  "\u229d": "&odash;",
                  "\u2a10": "&cirfnint;",
                  "\u2aef": "&cirmid;",
                  "\u29c2": "&cirscir;",
                  "\u2663": "&clubsuit;",
                  ":": "&colon;",
                  ",": "&comma;",
                  "@": "&commat;",
                  "\u2201": "&complement;",
                  "\u2a6d": "&congdot;",
                  "\ud835\udd54": "&copf;",
                  "\u2117": "&copysr;",
                  "\u21b5": "&crarr;",
                  "\u2717": "&cross;",
                  "\ud835\udcb8": "&cscr;",
                  "\u2acf": "&csub;",
                  "\u2ad1": "&csube;",
                  "\u2ad0": "&csup;",
                  "\u2ad2": "&csupe;",
                  "\u22ef": "&ctdot;",
                  "\u2938": "&cudarrl;",
                  "\u2935": "&cudarrr;",
                  "\u22de": "&curlyeqprec;",
                  "\u22df": "&curlyeqsucc;",
                  "\u21b6": "&curvearrowleft;",
                  "\u293d": "&cularrp;",
                  "\u222a": "&cup;",
                  "\u2a48": "&cupbrcap;",
                  "\u2a46": "&cupcap;",
                  "\u2a4a": "&cupcup;",
                  "\u228d": "&cupdot;",
                  "\u2a45": "&cupor;",
                  "\u222a\ufe00": "&cups;",
                  "\u21b7": "&curvearrowright;",
                  "\u293c": "&curarrm;",
                  "\u22ce": "&cuvee;",
                  "\u22cf": "&cuwed;",
                  "\xa4": "&curren;",
                  "\u2231": "&cwint;",
                  "\u232d": "&cylcty;",
                  "\u2965": "&dHar;",
                  "\u2020": "&dagger;",
                  "\u2138": "&daleth;",
                  "\u2010": "&hyphen;",
                  "\u290f": "&rBarr;",
                  "\u010f": "&dcaron;",
                  "\u0434": "&dcy;",
                  "\u21ca": "&downdownarrows;",
                  "\u2a77": "&eDDot;",
                  "\xb0": "&deg;",
                  "\u03b4": "&delta;",
                  "\u29b1": "&demptyv;",
                  "\u297f": "&dfisht;",
                  "\ud835\udd21": "&dfr;",
                  "\u2666": "&diams;",
                  "\u03dd": "&gammad;",
                  "\u22f2": "&disin;",
                  "\xf7": "&divide;",
                  "\u22c7": "&divonx;",
                  "\u0452": "&djcy;",
                  "\u231e": "&llcorner;",
                  "\u230d": "&dlcrop;",
                  $: "&dollar;",
                  "\ud835\udd55": "&dopf;",
                  "\u2251": "&eDot;",
                  "\u2238": "&minusd;",
                  "\u2214": "&plusdo;",
                  "\u22a1": "&sdotb;",
                  "\u231f": "&lrcorner;",
                  "\u230c": "&drcrop;",
                  "\ud835\udcb9": "&dscr;",
                  "\u0455": "&dscy;",
                  "\u29f6": "&dsol;",
                  "\u0111": "&dstrok;",
                  "\u22f1": "&dtdot;",
                  "\u25bf": "&triangledown;",
                  "\u29a6": "&dwangle;",
                  "\u045f": "&dzcy;",
                  "\u27ff": "&dzigrarr;",
                  "\xe9": "&eacute;",
                  "\u2a6e": "&easter;",
                  "\u011b": "&ecaron;",
                  "\u2256": "&eqcirc;",
                  "\xea": "&ecirc;",
                  "\u2255": "&eqcolon;",
                  "\u044d": "&ecy;",
                  "\u0117": "&edot;",
                  "\u2252": "&fallingdotseq;",
                  "\ud835\udd22": "&efr;",
                  "\u2a9a": "&eg;",
                  "\xe8": "&egrave;",
                  "\u2a96": "&eqslantgtr;",
                  "\u2a98": "&egsdot;",
                  "\u2a99": "&el;",
                  "\u23e7": "&elinters;",
                  "\u2113": "&ell;",
                  "\u2a95": "&eqslantless;",
                  "\u2a97": "&elsdot;",
                  "\u0113": "&emacr;",
                  "\u2205": "&varnothing;",
                  "\u2004": "&emsp13;",
                  "\u2005": "&emsp14;",
                  "\u2003": "&emsp;",
                  "\u014b": "&eng;",
                  "\u2002": "&ensp;",
                  "\u0119": "&eogon;",
                  "\ud835\udd56": "&eopf;",
                  "\u22d5": "&epar;",
                  "\u29e3": "&eparsl;",
                  "\u2a71": "&eplus;",
                  "\u03b5": "&epsilon;",
                  "\u03f5": "&varepsilon;",
                  "=": "&equals;",
                  "\u225f": "&questeq;",
                  "\u2a78": "&equivDD;",
                  "\u29e5": "&eqvparsl;",
                  "\u2253": "&risingdotseq;",
                  "\u2971": "&erarr;",
                  "\u212f": "&escr;",
                  "\u03b7": "&eta;",
                  "\xf0": "&eth;",
                  "\xeb": "&euml;",
                  "\u20ac": "&euro;",
                  "!": "&excl;",
                  "\u0444": "&fcy;",
                  "\u2640": "&female;",
                  "\ufb03": "&ffilig;",
                  "\ufb00": "&fflig;",
                  "\ufb04": "&ffllig;",
                  "\ud835\udd23": "&ffr;",
                  "\ufb01": "&filig;",
                  fj: "&fjlig;",
                  "\u266d": "&flat;",
                  "\ufb02": "&fllig;",
                  "\u25b1": "&fltns;",
                  "\u0192": "&fnof;",
                  "\ud835\udd57": "&fopf;",
                  "\u22d4": "&pitchfork;",
                  "\u2ad9": "&forkv;",
                  "\u2a0d": "&fpartint;",
                  "\xbd": "&half;",
                  "\u2153": "&frac13;",
                  "\xbc": "&frac14;",
                  "\u2155": "&frac15;",
                  "\u2159": "&frac16;",
                  "\u215b": "&frac18;",
                  "\u2154": "&frac23;",
                  "\u2156": "&frac25;",
                  "\xbe": "&frac34;",
                  "\u2157": "&frac35;",
                  "\u215c": "&frac38;",
                  "\u2158": "&frac45;",
                  "\u215a": "&frac56;",
                  "\u215d": "&frac58;",
                  "\u215e": "&frac78;",
                  "\u2044": "&frasl;",
                  "\u2322": "&sfrown;",
                  "\ud835\udcbb": "&fscr;",
                  "\u2a8c": "&gtreqqless;",
                  "\u01f5": "&gacute;",
                  "\u03b3": "&gamma;",
                  "\u2a86": "&gtrapprox;",
                  "\u011f": "&gbreve;",
                  "\u011d": "&gcirc;",
                  "\u0433": "&gcy;",
                  "\u0121": "&gdot;",
                  "\u2aa9": "&gescc;",
                  "\u2a80": "&gesdot;",
                  "\u2a82": "&gesdoto;",
                  "\u2a84": "&gesdotol;",
                  "\u22db\ufe00": "&gesl;",
                  "\u2a94": "&gesles;",
                  "\ud835\udd24": "&gfr;",
                  "\u2137": "&gimel;",
                  "\u0453": "&gjcy;",
                  "\u2a92": "&glE;",
                  "\u2aa5": "&gla;",
                  "\u2aa4": "&glj;",
                  "\u2269": "&gneqq;",
                  "\u2a8a": "&gnapprox;",
                  "\u2a88": "&gneq;",
                  "\u22e7": "&gnsim;",
                  "\ud835\udd58": "&gopf;",
                  "\u210a": "&gscr;",
                  "\u2a8e": "&gsime;",
                  "\u2a90": "&gsiml;",
                  "\u2aa7": "&gtcc;",
                  "\u2a7a": "&gtcir;",
                  "\u22d7": "&gtrdot;",
                  "\u2995": "&gtlPar;",
                  "\u2a7c": "&gtquest;",
                  "\u2978": "&gtrarr;",
                  "\u2269\ufe00": "&gvnE;",
                  "\u044a": "&hardcy;",
                  "\u2948": "&harrcir;",
                  "\u21ad": "&leftrightsquigarrow;",
                  "\u210f": "&plankv;",
                  "\u0125": "&hcirc;",
                  "\u2665": "&heartsuit;",
                  "\u2026": "&mldr;",
                  "\u22b9": "&hercon;",
                  "\ud835\udd25": "&hfr;",
                  "\u2925": "&searhk;",
                  "\u2926": "&swarhk;",
                  "\u21ff": "&hoarr;",
                  "\u223b": "&homtht;",
                  "\u21a9": "&larrhk;",
                  "\u21aa": "&rarrhk;",
                  "\ud835\udd59": "&hopf;",
                  "\u2015": "&horbar;",
                  "\ud835\udcbd": "&hscr;",
                  "\u0127": "&hstrok;",
                  "\u2043": "&hybull;",
                  "\xed": "&iacute;",
                  "\xee": "&icirc;",
                  "\u0438": "&icy;",
                  "\u0435": "&iecy;",
                  "\xa1": "&iexcl;",
                  "\ud835\udd26": "&ifr;",
                  "\xec": "&igrave;",
                  "\u2a0c": "&qint;",
                  "\u222d": "&tint;",
                  "\u29dc": "&iinfin;",
                  "\u2129": "&iiota;",
                  "\u0133": "&ijlig;",
                  "\u012b": "&imacr;",
                  "\u0131": "&inodot;",
                  "\u22b7": "&imof;",
                  "\u01b5": "&imped;",
                  "\u2105": "&incare;",
                  "\u221e": "&infin;",
                  "\u29dd": "&infintie;",
                  "\u22ba": "&intercal;",
                  "\u2a17": "&intlarhk;",
                  "\u2a3c": "&iprod;",
                  "\u0451": "&iocy;",
                  "\u012f": "&iogon;",
                  "\ud835\udd5a": "&iopf;",
                  "\u03b9": "&iota;",
                  "\xbf": "&iquest;",
                  "\ud835\udcbe": "&iscr;",
                  "\u22f9": "&isinE;",
                  "\u22f5": "&isindot;",
                  "\u22f4": "&isins;",
                  "\u22f3": "&isinsv;",
                  "\u0129": "&itilde;",
                  "\u0456": "&iukcy;",
                  "\xef": "&iuml;",
                  "\u0135": "&jcirc;",
                  "\u0439": "&jcy;",
                  "\ud835\udd27": "&jfr;",
                  "\u0237": "&jmath;",
                  "\ud835\udd5b": "&jopf;",
                  "\ud835\udcbf": "&jscr;",
                  "\u0458": "&jsercy;",
                  "\u0454": "&jukcy;",
                  "\u03ba": "&kappa;",
                  "\u03f0": "&varkappa;",
                  "\u0137": "&kcedil;",
                  "\u043a": "&kcy;",
                  "\ud835\udd28": "&kfr;",
                  "\u0138": "&kgreen;",
                  "\u0445": "&khcy;",
                  "\u045c": "&kjcy;",
                  "\ud835\udd5c": "&kopf;",
                  "\ud835\udcc0": "&kscr;",
                  "\u291b": "&lAtail;",
                  "\u290e": "&lBarr;",
                  "\u2a8b": "&lesseqqgtr;",
                  "\u2962": "&lHar;",
                  "\u013a": "&lacute;",
                  "\u29b4": "&laemptyv;",
                  "\u03bb": "&lambda;",
                  "\u2991": "&langd;",
                  "\u2a85": "&lessapprox;",
                  "\xab": "&laquo;",
                  "\u291f": "&larrbfs;",
                  "\u291d": "&larrfs;",
                  "\u21ab": "&looparrowleft;",
                  "\u2939": "&larrpl;",
                  "\u2973": "&larrsim;",
                  "\u21a2": "&leftarrowtail;",
                  "\u2aab": "&lat;",
                  "\u2919": "&latail;",
                  "\u2aad": "&late;",
                  "\u2aad\ufe00": "&lates;",
                  "\u290c": "&lbarr;",
                  "\u2772": "&lbbrk;",
                  "{": "&lcub;",
                  "[": "&lsqb;",
                  "\u298b": "&lbrke;",
                  "\u298f": "&lbrksld;",
                  "\u298d": "&lbrkslu;",
                  "\u013e": "&lcaron;",
                  "\u013c": "&lcedil;",
                  "\u043b": "&lcy;",
                  "\u2936": "&ldca;",
                  "\u2967": "&ldrdhar;",
                  "\u294b": "&ldrushar;",
                  "\u21b2": "&ldsh;",
                  "\u2264": "&leq;",
                  "\u21c7": "&llarr;",
                  "\u22cb": "&lthree;",
                  "\u2aa8": "&lescc;",
                  "\u2a7f": "&lesdot;",
                  "\u2a81": "&lesdoto;",
                  "\u2a83": "&lesdotor;",
                  "\u22da\ufe00": "&lesg;",
                  "\u2a93": "&lesges;",
                  "\u22d6": "&ltdot;",
                  "\u297c": "&lfisht;",
                  "\ud835\udd29": "&lfr;",
                  "\u2a91": "&lgE;",
                  "\u296a": "&lharul;",
                  "\u2584": "&lhblk;",
                  "\u0459": "&ljcy;",
                  "\u296b": "&llhard;",
                  "\u25fa": "&lltri;",
                  "\u0140": "&lmidot;",
                  "\u23b0": "&lmoustache;",
                  "\u2268": "&lneqq;",
                  "\u2a89": "&lnapprox;",
                  "\u2a87": "&lneq;",
                  "\u22e6": "&lnsim;",
                  "\u27ec": "&loang;",
                  "\u21fd": "&loarr;",
                  "\u27fc": "&xmap;",
                  "\u21ac": "&rarrlp;",
                  "\u2985": "&lopar;",
                  "\ud835\udd5d": "&lopf;",
                  "\u2a2d": "&loplus;",
                  "\u2a34": "&lotimes;",
                  "\u2217": "&lowast;",
                  "\u25ca": "&lozenge;",
                  "(": "&lpar;",
                  "\u2993": "&lparlt;",
                  "\u296d": "&lrhard;",
                  "\u200e": "&lrm;",
                  "\u22bf": "&lrtri;",
                  "\u2039": "&lsaquo;",
                  "\ud835\udcc1": "&lscr;",
                  "\u2a8d": "&lsime;",
                  "\u2a8f": "&lsimg;",
                  "\u201a": "&sbquo;",
                  "\u0142": "&lstrok;",
                  "\u2aa6": "&ltcc;",
                  "\u2a79": "&ltcir;",
                  "\u22c9": "&ltimes;",
                  "\u2976": "&ltlarr;",
                  "\u2a7b": "&ltquest;",
                  "\u2996": "&ltrPar;",
                  "\u25c3": "&triangleleft;",
                  "\u294a": "&lurdshar;",
                  "\u2966": "&luruhar;",
                  "\u2268\ufe00": "&lvnE;",
                  "\u223a": "&mDDot;",
                  "\xaf": "&strns;",
                  "\u2642": "&male;",
                  "\u2720": "&maltese;",
                  "\u25ae": "&marker;",
                  "\u2a29": "&mcomma;",
                  "\u043c": "&mcy;",
                  "\u2014": "&mdash;",
                  "\ud835\udd2a": "&mfr;",
                  "\u2127": "&mho;",
                  "\xb5": "&micro;",
                  "\u2af0": "&midcir;",
                  "\u2212": "&minus;",
                  "\u2a2a": "&minusdu;",
                  "\u2adb": "&mlcp;",
                  "\u22a7": "&models;",
                  "\ud835\udd5e": "&mopf;",
                  "\ud835\udcc2": "&mscr;",
                  "\u03bc": "&mu;",
                  "\u22b8": "&mumap;",
                  "\u22d9\u0338": "&nGg;",
                  "\u226b\u20d2": "&nGt;",
                  "\u21cd": "&nlArr;",
                  "\u21ce": "&nhArr;",
                  "\u22d8\u0338": "&nLl;",
                  "\u226a\u20d2": "&nLt;",
                  "\u21cf": "&nrArr;",
                  "\u22af": "&nVDash;",
                  "\u22ae": "&nVdash;",
                  "\u0144": "&nacute;",
                  "\u2220\u20d2": "&nang;",
                  "\u2a70\u0338": "&napE;",
                  "\u224b\u0338": "&napid;",
                  "\u0149": "&napos;",
                  "\u266e": "&natural;",
                  "\u2a43": "&ncap;",
                  "\u0148": "&ncaron;",
                  "\u0146": "&ncedil;",
                  "\u2a6d\u0338": "&ncongdot;",
                  "\u2a42": "&ncup;",
                  "\u043d": "&ncy;",
                  "\u2013": "&ndash;",
                  "\u21d7": "&neArr;",
                  "\u2924": "&nearhk;",
                  "\u2250\u0338": "&nedot;",
                  "\u2928": "&toea;",
                  "\ud835\udd2b": "&nfr;",
                  "\u21ae": "&nleftrightarrow;",
                  "\u2af2": "&nhpar;",
                  "\u22fc": "&nis;",
                  "\u22fa": "&nisd;",
                  "\u045a": "&njcy;",
                  "\u2266\u0338": "&nleqq;",
                  "\u219a": "&nleftarrow;",
                  "\u2025": "&nldr;",
                  "\ud835\udd5f": "&nopf;",
                  "\xac": "&not;",
                  "\u22f9\u0338": "&notinE;",
                  "\u22f5\u0338": "&notindot;",
                  "\u22f7": "&notinvb;",
                  "\u22f6": "&notinvc;",
                  "\u22fe": "&notnivb;",
                  "\u22fd": "&notnivc;",
                  "\u2afd\u20e5": "&nparsl;",
                  "\u2202\u0338": "&npart;",
                  "\u2a14": "&npolint;",
                  "\u219b": "&nrightarrow;",
                  "\u2933\u0338": "&nrarrc;",
                  "\u219d\u0338": "&nrarrw;",
                  "\ud835\udcc3": "&nscr;",
                  "\u2284": "&nsub;",
                  "\u2ac5\u0338": "&nsubseteqq;",
                  "\u2285": "&nsup;",
                  "\u2ac6\u0338": "&nsupseteqq;",
                  "\xf1": "&ntilde;",
                  "\u03bd": "&nu;",
                  "#": "&num;",
                  "\u2116": "&numero;",
                  "\u2007": "&numsp;",
                  "\u22ad": "&nvDash;",
                  "\u2904": "&nvHarr;",
                  "\u224d\u20d2": "&nvap;",
                  "\u22ac": "&nvdash;",
                  "\u2265\u20d2": "&nvge;",
                  ">\u20d2": "&nvgt;",
                  "\u29de": "&nvinfin;",
                  "\u2902": "&nvlArr;",
                  "\u2264\u20d2": "&nvle;",
                  "<\u20d2": "&nvlt;",
                  "\u22b4\u20d2": "&nvltrie;",
                  "\u2903": "&nvrArr;",
                  "\u22b5\u20d2": "&nvrtrie;",
                  "\u223c\u20d2": "&nvsim;",
                  "\u21d6": "&nwArr;",
                  "\u2923": "&nwarhk;",
                  "\u2927": "&nwnear;",
                  "\xf3": "&oacute;",
                  "\xf4": "&ocirc;",
                  "\u043e": "&ocy;",
                  "\u0151": "&odblac;",
                  "\u2a38": "&odiv;",
                  "\u29bc": "&odsold;",
                  "\u0153": "&oelig;",
                  "\u29bf": "&ofcir;",
                  "\ud835\udd2c": "&ofr;",
                  "\u02db": "&ogon;",
                  "\xf2": "&ograve;",
                  "\u29c1": "&ogt;",
                  "\u29b5": "&ohbar;",
                  "\u29be": "&olcir;",
                  "\u29bb": "&olcross;",
                  "\u29c0": "&olt;",
                  "\u014d": "&omacr;",
                  "\u03c9": "&omega;",
                  "\u03bf": "&omicron;",
                  "\u29b6": "&omid;",
                  "\ud835\udd60": "&oopf;",
                  "\u29b7": "&opar;",
                  "\u29b9": "&operp;",
                  "\u2228": "&vee;",
                  "\u2a5d": "&ord;",
                  "\u2134": "&oscr;",
                  "\xaa": "&ordf;",
                  "\xba": "&ordm;",
                  "\u22b6": "&origof;",
                  "\u2a56": "&oror;",
                  "\u2a57": "&orslope;",
                  "\u2a5b": "&orv;",
                  "\xf8": "&oslash;",
                  "\u2298": "&osol;",
                  "\xf5": "&otilde;",
                  "\u2a36": "&otimesas;",
                  "\xf6": "&ouml;",
                  "\u233d": "&ovbar;",
                  "\xb6": "&para;",
                  "\u2af3": "&parsim;",
                  "\u2afd": "&parsl;",
                  "\u043f": "&pcy;",
                  "%": "&percnt;",
                  ".": "&period;",
                  "\u2030": "&permil;",
                  "\u2031": "&pertenk;",
                  "\ud835\udd2d": "&pfr;",
                  "\u03c6": "&phi;",
                  "\u03d5": "&varphi;",
                  "\u260e": "&phone;",
                  "\u03c0": "&pi;",
                  "\u03d6": "&varpi;",
                  "\u210e": "&planckh;",
                  "+": "&plus;",
                  "\u2a23": "&plusacir;",
                  "\u2a22": "&pluscir;",
                  "\u2a25": "&plusdu;",
                  "\u2a72": "&pluse;",
                  "\u2a26": "&plussim;",
                  "\u2a27": "&plustwo;",
                  "\u2a15": "&pointint;",
                  "\ud835\udd61": "&popf;",
                  "\xa3": "&pound;",
                  "\u2ab3": "&prE;",
                  "\u2ab7": "&precapprox;",
                  "\u2ab9": "&prnap;",
                  "\u2ab5": "&prnE;",
                  "\u22e8": "&prnsim;",
                  "\u2032": "&prime;",
                  "\u232e": "&profalar;",
                  "\u2312": "&profline;",
                  "\u2313": "&profsurf;",
                  "\u22b0": "&prurel;",
                  "\ud835\udcc5": "&pscr;",
                  "\u03c8": "&psi;",
                  "\u2008": "&puncsp;",
                  "\ud835\udd2e": "&qfr;",
                  "\ud835\udd62": "&qopf;",
                  "\u2057": "&qprime;",
                  "\ud835\udcc6": "&qscr;",
                  "\u2a16": "&quatint;",
                  "?": "&quest;",
                  "\u291c": "&rAtail;",
                  "\u2964": "&rHar;",
                  "\u223d\u0331": "&race;",
                  "\u0155": "&racute;",
                  "\u29b3": "&raemptyv;",
                  "\u2992": "&rangd;",
                  "\u29a5": "&range;",
                  "\xbb": "&raquo;",
                  "\u2975": "&rarrap;",
                  "\u2920": "&rarrbfs;",
                  "\u2933": "&rarrc;",
                  "\u291e": "&rarrfs;",
                  "\u2945": "&rarrpl;",
                  "\u2974": "&rarrsim;",
                  "\u21a3": "&rightarrowtail;",
                  "\u219d": "&rightsquigarrow;",
                  "\u291a": "&ratail;",
                  "\u2236": "&ratio;",
                  "\u2773": "&rbbrk;",
                  "}": "&rcub;",
                  "]": "&rsqb;",
                  "\u298c": "&rbrke;",
                  "\u298e": "&rbrksld;",
                  "\u2990": "&rbrkslu;",
                  "\u0159": "&rcaron;",
                  "\u0157": "&rcedil;",
                  "\u0440": "&rcy;",
                  "\u2937": "&rdca;",
                  "\u2969": "&rdldhar;",
                  "\u21b3": "&rdsh;",
                  "\u25ad": "&rect;",
                  "\u297d": "&rfisht;",
                  "\ud835\udd2f": "&rfr;",
                  "\u296c": "&rharul;",
                  "\u03c1": "&rho;",
                  "\u03f1": "&varrho;",
                  "\u21c9": "&rrarr;",
                  "\u22cc": "&rthree;",
                  "\u02da": "&ring;",
                  "\u200f": "&rlm;",
                  "\u23b1": "&rmoustache;",
                  "\u2aee": "&rnmid;",
                  "\u27ed": "&roang;",
                  "\u21fe": "&roarr;",
                  "\u2986": "&ropar;",
                  "\ud835\udd63": "&ropf;",
                  "\u2a2e": "&roplus;",
                  "\u2a35": "&rotimes;",
                  ")": "&rpar;",
                  "\u2994": "&rpargt;",
                  "\u2a12": "&rppolint;",
                  "\u203a": "&rsaquo;",
                  "\ud835\udcc7": "&rscr;",
                  "\u22ca": "&rtimes;",
                  "\u25b9": "&triangleright;",
                  "\u29ce": "&rtriltri;",
                  "\u2968": "&ruluhar;",
                  "\u211e": "&rx;",
                  "\u015b": "&sacute;",
                  "\u2ab4": "&scE;",
                  "\u2ab8": "&succapprox;",
                  "\u0161": "&scaron;",
                  "\u015f": "&scedil;",
                  "\u015d": "&scirc;",
                  "\u2ab6": "&succneqq;",
                  "\u2aba": "&succnapprox;",
                  "\u22e9": "&succnsim;",
                  "\u2a13": "&scpolint;",
                  "\u0441": "&scy;",
                  "\u22c5": "&sdot;",
                  "\u2a66": "&sdote;",
                  "\u21d8": "&seArr;",
                  "\xa7": "&sect;",
                  ";": "&semi;",
                  "\u2929": "&tosa;",
                  "\u2736": "&sext;",
                  "\ud835\udd30": "&sfr;",
                  "\u266f": "&sharp;",
                  "\u0449": "&shchcy;",
                  "\u0448": "&shcy;",
                  "\xad": "&shy;",
                  "\u03c3": "&sigma;",
                  "\u03c2": "&varsigma;",
                  "\u2a6a": "&simdot;",
                  "\u2a9e": "&simg;",
                  "\u2aa0": "&simgE;",
                  "\u2a9d": "&siml;",
                  "\u2a9f": "&simlE;",
                  "\u2246": "&simne;",
                  "\u2a24": "&simplus;",
                  "\u2972": "&simrarr;",
                  "\u2a33": "&smashp;",
                  "\u29e4": "&smeparsl;",
                  "\u2323": "&ssmile;",
                  "\u2aaa": "&smt;",
                  "\u2aac": "&smte;",
                  "\u2aac\ufe00": "&smtes;",
                  "\u044c": "&softcy;",
                  "/": "&sol;",
                  "\u29c4": "&solb;",
                  "\u233f": "&solbar;",
                  "\ud835\udd64": "&sopf;",
                  "\u2660": "&spadesuit;",
                  "\u2293\ufe00": "&sqcaps;",
                  "\u2294\ufe00": "&sqcups;",
                  "\ud835\udcc8": "&sscr;",
                  "\u2606": "&star;",
                  "\u2282": "&subset;",
                  "\u2ac5": "&subseteqq;",
                  "\u2abd": "&subdot;",
                  "\u2ac3": "&subedot;",
                  "\u2ac1": "&submult;",
                  "\u2acb": "&subsetneqq;",
                  "\u228a": "&subsetneq;",
                  "\u2abf": "&subplus;",
                  "\u2979": "&subrarr;",
                  "\u2ac7": "&subsim;",
                  "\u2ad5": "&subsub;",
                  "\u2ad3": "&subsup;",
                  "\u266a": "&sung;",
                  "\xb9": "&sup1;",
                  "\xb2": "&sup2;",
                  "\xb3": "&sup3;",
                  "\u2ac6": "&supseteqq;",
                  "\u2abe": "&supdot;",
                  "\u2ad8": "&supdsub;",
                  "\u2ac4": "&supedot;",
                  "\u27c9": "&suphsol;",
                  "\u2ad7": "&suphsub;",
                  "\u297b": "&suplarr;",
                  "\u2ac2": "&supmult;",
                  "\u2acc": "&supsetneqq;",
                  "\u228b": "&supsetneq;",
                  "\u2ac0": "&supplus;",
                  "\u2ac8": "&supsim;",
                  "\u2ad4": "&supsub;",
                  "\u2ad6": "&supsup;",
                  "\u21d9": "&swArr;",
                  "\u292a": "&swnwar;",
                  "\xdf": "&szlig;",
                  "\u2316": "&target;",
                  "\u03c4": "&tau;",
                  "\u0165": "&tcaron;",
                  "\u0163": "&tcedil;",
                  "\u0442": "&tcy;",
                  "\u2315": "&telrec;",
                  "\ud835\udd31": "&tfr;",
                  "\u03b8": "&theta;",
                  "\u03d1": "&vartheta;",
                  "\xfe": "&thorn;",
                  "\xd7": "&times;",
                  "\u2a31": "&timesbar;",
                  "\u2a30": "&timesd;",
                  "\u2336": "&topbot;",
                  "\u2af1": "&topcir;",
                  "\ud835\udd65": "&topf;",
                  "\u2ada": "&topfork;",
                  "\u2034": "&tprime;",
                  "\u25b5": "&utri;",
                  "\u225c": "&trie;",
                  "\u25ec": "&tridot;",
                  "\u2a3a": "&triminus;",
                  "\u2a39": "&triplus;",
                  "\u29cd": "&trisb;",
                  "\u2a3b": "&tritime;",
                  "\u23e2": "&trpezium;",
                  "\ud835\udcc9": "&tscr;",
                  "\u0446": "&tscy;",
                  "\u045b": "&tshcy;",
                  "\u0167": "&tstrok;",
                  "\u2963": "&uHar;",
                  "\xfa": "&uacute;",
                  "\u045e": "&ubrcy;",
                  "\u016d": "&ubreve;",
                  "\xfb": "&ucirc;",
                  "\u0443": "&ucy;",
                  "\u0171": "&udblac;",
                  "\u297e": "&ufisht;",
                  "\ud835\udd32": "&ufr;",
                  "\xf9": "&ugrave;",
                  "\u2580": "&uhblk;",
                  "\u231c": "&ulcorner;",
                  "\u230f": "&ulcrop;",
                  "\u25f8": "&ultri;",
                  "\u016b": "&umacr;",
                  "\u0173": "&uogon;",
                  "\ud835\udd66": "&uopf;",
                  "\u03c5": "&upsilon;",
                  "\u21c8": "&uuarr;",
                  "\u231d": "&urcorner;",
                  "\u230e": "&urcrop;",
                  "\u016f": "&uring;",
                  "\u25f9": "&urtri;",
                  "\ud835\udcca": "&uscr;",
                  "\u22f0": "&utdot;",
                  "\u0169": "&utilde;",
                  "\xfc": "&uuml;",
                  "\u29a7": "&uwangle;",
                  "\u2ae8": "&vBar;",
                  "\u2ae9": "&vBarv;",
                  "\u299c": "&vangrt;",
                  "\u228a\ufe00": "&vsubne;",
                  "\u2acb\ufe00": "&vsubnE;",
                  "\u228b\ufe00": "&vsupne;",
                  "\u2acc\ufe00": "&vsupnE;",
                  "\u0432": "&vcy;",
                  "\u22bb": "&veebar;",
                  "\u225a": "&veeeq;",
                  "\u22ee": "&vellip;",
                  "\ud835\udd33": "&vfr;",
                  "\ud835\udd67": "&vopf;",
                  "\ud835\udccb": "&vscr;",
                  "\u299a": "&vzigzag;",
                  "\u0175": "&wcirc;",
                  "\u2a5f": "&wedbar;",
                  "\u2259": "&wedgeq;",
                  "\u2118": "&wp;",
                  "\ud835\udd34": "&wfr;",
                  "\ud835\udd68": "&wopf;",
                  "\ud835\udccc": "&wscr;",
                  "\ud835\udd35": "&xfr;",
                  "\u03be": "&xi;",
                  "\u22fb": "&xnis;",
                  "\ud835\udd69": "&xopf;",
                  "\ud835\udccd": "&xscr;",
                  "\xfd": "&yacute;",
                  "\u044f": "&yacy;",
                  "\u0177": "&ycirc;",
                  "\u044b": "&ycy;",
                  "\xa5": "&yen;",
                  "\ud835\udd36": "&yfr;",
                  "\u0457": "&yicy;",
                  "\ud835\udd6a": "&yopf;",
                  "\ud835\udcce": "&yscr;",
                  "\u044e": "&yucy;",
                  "\xff": "&yuml;",
                  "\u017a": "&zacute;",
                  "\u017e": "&zcaron;",
                  "\u0437": "&zcy;",
                  "\u017c": "&zdot;",
                  "\u03b6": "&zeta;",
                  "\ud835\udd37": "&zfr;",
                  "\u0436": "&zhcy;",
                  "\u21dd": "&zigrarr;",
                  "\ud835\udd6b": "&zopf;",
                  "\ud835\udccf": "&zscr;",
                  "\u200d": "&zwj;",
                  "\u200c": "&zwnj;",
                },
              },
            };
          var Q = {};
          Object.defineProperty(Q, "__esModule", { value: !0 }),
            Q.numericUnicodeMap = {
              0: 65533,
              128: 8364,
              130: 8218,
              131: 402,
              132: 8222,
              133: 8230,
              134: 8224,
              135: 8225,
              136: 710,
              137: 8240,
              138: 352,
              139: 8249,
              140: 338,
              142: 381,
              145: 8216,
              146: 8217,
              147: 8220,
              148: 8221,
              149: 8226,
              150: 8211,
              151: 8212,
              152: 732,
              153: 8482,
              154: 353,
              155: 8250,
              156: 339,
              158: 382,
              159: 376,
            };
          var G = {};
          Object.defineProperty(G, "__esModule", { value: !0 }),
            G.fromCodePoint = String.fromCodePoint || function (t) {
              return String.fromCharCode(
                Math.floor((t - 65536) / 1024) + 55296,
                (t - 65536) % 1024 + 56320,
              );
            },
            G.getCodePoint = String.prototype.codePointAt
              ? function (t, e) {
                return t.codePointAt(e);
              }
              : function (t, e) {
                return 1024 * (t.charCodeAt(e) - 55296) + t.charCodeAt(e + 1) -
                  56320 + 65536;
              },
            G.highSurrogateFrom = 55296,
            G.highSurrogateTo = 56319;
          var M = R && R.__assign || function () {
            return M = Object.assign || function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) {
                for (var o in e = arguments[r]) {
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                }
              }
              return t;
            },
              M.apply(this, arguments);
          };
          Object.defineProperty(B, "__esModule", { value: !0 });
          var W = J,
            Z = Q,
            Y = G,
            tt = M(M({}, W.namedReferences), { all: W.namedReferences.html5 }),
            et = {
              specialChars: /[<>'"&]/g,
              nonAscii:
                /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
              nonAsciiPrintable:
                /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
              extensive:
                /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
            },
            rt = { mode: "specialChars", level: "all", numeric: "decimal" };
          var it = B.encode = function (t, e) {
              var r = void 0 === (a = (n = void 0 === e ? rt : e).mode)
                  ? "specialChars"
                  : a,
                i = void 0 === (u = n.numeric) ? "decimal" : u,
                o = void 0 === (d = n.level) ? "all" : d;
              if (!t) return "";
              var n,
                a,
                s = et[r],
                l = tt[o].characters,
                c = "hexadecimal" === i;
              if (s.lastIndex = 0, n = s.exec(t)) {
                a = "";
                var u = 0;
                do {
                  u !== n.index && (a += t.substring(u, n.index));
                  var d, h = l[d = n[0]];
                  if (!h) {
                    var p = d.length > 1
                      ? Y.getCodePoint(d, 0)
                      : d.charCodeAt(0);
                    h = (c ? "&#x" + p.toString(16) : "&#" + p) + ";";
                  }
                  a += h, u = n.index + d.length;
                } while (n = s.exec(t));
                u !== t.length && (a += t.substring(u));
              } else a = t;
              return a;
            },
            ot = { scope: "body", level: "all" },
            nt = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,
            at = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,
            st = {
              xml: { strict: nt, attribute: at, body: W.bodyRegExps.xml },
              html4: { strict: nt, attribute: at, body: W.bodyRegExps.html4 },
              html5: { strict: nt, attribute: at, body: W.bodyRegExps.html5 },
            },
            lt = M(M({}, st), { all: st.html5 }),
            ct = String.fromCharCode,
            ut = ct(65533),
            dt = { level: "all" };
          B.decodeEntity = function (t, e) {
            var r = void 0 === (i = (void 0 === e ? dt : e).level) ? "all" : i;
            if (!t) return "";
            var i = t;
            t[t.length - 1];
            var o = tt[r].entities[t];
            if (o) i = o;
            else if ("&" === t[0] && "#" === t[1]) {
              var n = t[2],
                a = "x" == n || "X" == n
                  ? parseInt(t.substr(3), 16)
                  : parseInt(t.substr(2));
              i = a >= 1114111
                ? ut
                : a > 65535
                ? Y.fromCodePoint(a)
                : ct(Z.numericUnicodeMap[a] || a);
            }
            return i;
          },
            B.decode = function (t, e) {
              var r = void 0 === e ? ot : e,
                i = r.level,
                o = void 0 === i ? "all" : i,
                n = r.scope,
                a = void 0 === n ? "xml" === o ? "strict" : "body" : n;
              if (!t) return "";
              var s = lt[o][a],
                l = tt[o].entities,
                c = "attribute" === a,
                u = "strict" === a;
              s.lastIndex = 0;
              var d, h = s.exec(t);
              if (h) {
                d = "";
                var p = 0;
                do {
                  p !== h.index && (d += t.substring(p, h.index));
                  var f = h[0], m = f, g = f[f.length - 1];
                  if (c && "=" === g) m = f;
                  else if (u && ";" !== g) m = f;
                  else {
                    var x = l[f];
                    if (x) m = x;
                    else if ("&" === f[0] && "#" === f[1]) {
                      var b = f[2],
                        v = "x" == b || "X" == b
                          ? parseInt(f.substr(3), 16)
                          : parseInt(f.substr(2));
                      m = v >= 1114111
                        ? ut
                        : v > 65535
                        ? Y.fromCodePoint(v)
                        : ct(Z.numericUnicodeMap[v] || v);
                    }
                  }
                  d += m, p = h.index + f.length;
                } while (h = s.exec(t));
                p !== t.length && (d += t.substring(p));
              } else d = t;
              return d;
            };
          const ht = K.h32(Date.now()),
            pt = new Map(),
            ft = (t, e = window.document) => {
              pt.set(
                t,
                window.setTimeout(() => {
                  const r = Array.from(e.fonts.values()).find(
                    (e) => e.family === t,
                  );
                  r && e.fonts.delete(r), pt.delete(t);
                }, 5e3),
              );
            },
            mt = (t, e = v) => {
              if ("counts" in t) {
                const { default: r, counts: i } = t,
                  o = Object.entries(i).map(([t, e]) => [Number(t), e]).sort(
                    ([t], [e]) => t - e,
                  );
                if (!o.some(([t]) => t === r)) {
                  throw new Error("The count of default em is not exists");
                }
                const n = o.reduce((t, [, e]) => t + e, 0);
                let a = e[1] - e[0] + 1 - n;
                if (a < 0) throw new Error("Not enought vacant count");
                const s = a / o.length;
                let l = e[0];
                return o.map(([t, e]) => {
                  try {
                    return [t, Math.floor(l)];
                  } finally {
                    l += e + s;
                  }
                });
              }
              const r = t.default,
                i = [r, ...t.list.filter((t) => t !== r)],
                o = (e[1] - e[0] + 1) / i.length;
              let n = e[0];
              return Array.from(
                i.sort((t, e) => t === r ? -1 : e === r ? 1 : 0).reduce(
                  (t, e) => {
                    var r;
                    return t.set(e, null != (r = t.get(e)) ? r : Math.floor(n)),
                      n += o,
                      t;
                  },
                  new Map(),
                ),
              );
            },
            gt = (t, e) => {
              var r, i;
              return Math.min(
                ...e.filter(([e]) => e >= t).map(([t]) => t),
                null != (i = null == (r = e.at(-1)) ? void 0 : r[0])
                  ? i
                  : 1 / 0,
              );
            };
          var xt = {},
            bt = {
              get exports() {
                return xt;
              },
              set exports(t) {
                xt = t;
              },
            };
          !function (t, e) {
            var r = 200,
              i = "Expected a function",
              o = "__lodash_hash_undefined__",
              n = 1,
              a = 2,
              s = 1 / 0,
              l = 9007199254740991,
              c = 17976931348623157e292,
              u = NaN,
              d = "[object Arguments]",
              h = "[object Array]",
              p = "[object Boolean]",
              f = "[object Date]",
              m = "[object Error]",
              g = "[object Function]",
              x = "[object GeneratorFunction]",
              b = "[object Map]",
              v = "[object Number]",
              y = "[object Object]",
              A = "[object Promise]",
              E = "[object RegExp]",
              _ = "[object Set]",
              w = "[object String]",
              q = "[object Symbol]",
              U = "[object WeakMap]",
              L = "[object ArrayBuffer]",
              F = "[object DataView]",
              T = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              S = /^\w*$/,
              O = /^\./,
              C =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              H = /^\s+|\s+$/g,
              V = /\\(\\)?/g,
              P = /^[-+]0x[0-9a-f]+$/i,
              D = /^0b[01]+$/i,
              j = /^\[object .+?Constructor\]$/,
              k = /^0o[0-7]+$/i,
              $ = /^(?:0|[1-9]\d*)$/,
              z = {};
            z["[object Float32Array]"] =
              z["[object Float64Array]"] =
              z["[object Int8Array]"] =
              z["[object Int16Array]"] =
              z["[object Int32Array]"] =
              z["[object Uint8Array]"] =
              z["[object Uint8ClampedArray]"] =
              z["[object Uint16Array]"] =
              z["[object Uint32Array]"] =
                !0,
              z[d] =
                z[h] =
                z[L] =
                z[p] =
                z[F] =
                z[f] =
                z[m] =
                z[g] =
                z[b] =
                z[v] =
                z[y] =
                z[E] =
                z[_] =
                z[w] =
                z[U] =
                  !1;
            var N = parseInt,
              X = "object" == typeof R && R && R.Object === Object && R,
              I = "object" == typeof self && self && self.Object === Object &&
                self,
              K = X || I || Function("return this")(),
              B = e && !e.nodeType && e,
              J = B && t && !t.nodeType && t,
              Q = J && J.exports === B && X.process,
              G = function () {
                try {
                  return Q && Q.binding("util");
                } catch (et) {}
              }(),
              M = G && G.isTypedArray;
            function W(t, e) {
              for (var r = -1, i = t ? t.length : 0; ++r < i;) {
                if (e(t[r], r, t)) return !0;
              }
              return !1;
            }
            function Z(t) {
              var e = !1;
              if (null != t && "function" != typeof t.toString) {
                try {
                  e = !!(t + "");
                } catch (r) {}
              }
              return e;
            }
            function Y(t) {
              var e = -1, r = Array(t.size);
              return t.forEach(function (t, i) {
                r[++e] = [i, t];
              }),
                r;
            }
            function tt(t) {
              var e = -1, r = Array(t.size);
              return t.forEach(function (t) {
                r[++e] = t;
              }),
                r;
            }
            var et,
              rt,
              it = Array.prototype,
              ot = Function.prototype,
              nt = Object.prototype,
              at = K["__core-js_shared__"],
              st = function () {
                var t = /[^.]+$/.exec(at && at.keys && at.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : "";
              }(),
              lt = ot.toString,
              ct = nt.hasOwnProperty,
              ut = nt.toString,
              dt = RegExp(
                "^" +
                  lt.call(ct).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?",
                  ) + "$",
              ),
              ht = K.Symbol,
              pt = K.Uint8Array,
              ft = nt.propertyIsEnumerable,
              mt = it.splice,
              gt = (et = Object.keys, rt = Object, function (t) {
                return et(rt(t));
              }),
              xt = Math.max,
              bt = Math.min,
              vt = Gt(K, "DataView"),
              yt = Gt(K, "Map"),
              Rt = Gt(K, "Promise"),
              At = Gt(K, "Set"),
              Et = Gt(K, "WeakMap"),
              _t = Gt(Object, "create"),
              wt = ie(vt),
              qt = ie(yt),
              Ut = ie(Rt),
              Lt = ie(At),
              Ft = ie(Et),
              Tt = ht ? ht.prototype : void 0,
              St = Tt ? Tt.valueOf : void 0,
              Ot = Tt ? Tt.toString : void 0;
            function Ct(t) {
              var e = -1, r = t ? t.length : 0;
              for (this.clear(); ++e < r;) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function Ht(t) {
              var e = -1, r = t ? t.length : 0;
              for (this.clear(); ++e < r;) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function Vt(t) {
              var e = -1, r = t ? t.length : 0;
              for (this.clear(); ++e < r;) {
                var i = t[e];
                this.set(i[0], i[1]);
              }
            }
            function Pt(t) {
              var e = -1, r = t ? t.length : 0;
              for (this.__data__ = new Vt(); ++e < r;) this.add(t[e]);
            }
            function Dt(t) {
              this.__data__ = new Ht(t);
            }
            function jt(t, e) {
              var r = se(t) || ae(t)
                  ? function (t, e) {
                    for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
                    return i;
                  }(t.length, String)
                  : [],
                i = r.length,
                o = !!i;
              for (var n in t) {
                (e || ct.call(t, n)) && (!o || "length" != n && !Wt(n, i)) &&
                  r.push(n);
              }
              return r;
            }
            function kt(t, e) {
              for (var r = t.length; r--;) if (ne(t[r][0], e)) return r;
              return -1;
            }
            function $t(t, e) {
              for (
                var r = 0, i = (e = Zt(e, t) ? [e] : Bt(e)).length;
                null != t && r < i;
              ) t = t[re(e[r++])];
              return r && r == i ? t : void 0;
            }
            function zt(t, e) {
              return null != t && e in Object(t);
            }
            function Nt(t, e, r, i, o) {
              return t === e ||
                (null == t || null == e || !de(t) && !he(e)
                  ? t !== t && e !== e
                  : function (t, e, r, i, o, s) {
                    var l = se(t), c = se(e), u = h, g = h;
                    l || (u = Mt(t), u = u == d ? y : u),
                      c || (g = Mt(e), g = g == d ? y : g);
                    var x = u == y && !Z(t), R = g == y && !Z(e), A = u == g;
                    if (A && !x) {
                      return s || (s = new Dt()),
                        l || fe(t)
                          ? Jt(t, e, r, i, o, s)
                          : function (t, e, r, i, o, s, l) {
                            switch (r) {
                              case F:
                                if (
                                  t.byteLength != e.byteLength ||
                                  t.byteOffset != e.byteOffset
                                ) return !1;
                                t = t.buffer, e = e.buffer;
                              case L:
                                return !(t.byteLength != e.byteLength ||
                                  !i(new pt(t), new pt(e)));
                              case p:
                              case f:
                              case v:
                                return ne(+t, +e);
                              case m:
                                return t.name == e.name &&
                                  t.message == e.message;
                              case E:
                              case w:
                                return t == e + "";
                              case b:
                                var c = Y;
                              case _:
                                var u = s & a;
                                if (
                                  c || (c = tt), t.size != e.size && !u
                                ) return !1;
                                var d = l.get(t);
                                if (d) return d == e;
                                s |= n, l.set(t, e);
                                var h = Jt(c(t), c(e), i, o, s, l);
                                return l.delete(t), h;
                              case q:
                                if (St) return St.call(t) == St.call(e);
                            }
                            return !1;
                          }(t, e, u, r, i, o, s);
                    }
                    if (!(o & a)) {
                      var U = x && ct.call(t, "__wrapped__"),
                        T = R && ct.call(e, "__wrapped__");
                      if (U || T) {
                        var S = U ? t.value() : t, O = T ? e.value() : e;
                        return s || (s = new Dt()), r(S, O, i, o, s);
                      }
                    }
                    return !!A &&
                      (s || (s = new Dt()),
                        function (t, e, r, i, o, n) {
                          var s = o & a,
                            l = me(t),
                            c = l.length,
                            u = me(e),
                            d = u.length;
                          if (c != d && !s) return !1;
                          for (var h = c; h--;) {
                            var p = l[h];
                            if (!(s ? p in e : ct.call(e, p))) return !1;
                          }
                          var f = n.get(t);
                          if (f && n.get(e)) return f == e;
                          var m = !0;
                          n.set(t, e), n.set(e, t);
                          for (var g = s; ++h < c;) {
                            var x = t[p = l[h]], b = e[p];
                            if (i) {
                              var v = s
                                ? i(b, x, p, e, t, n)
                                : i(x, b, p, t, e, n);
                            }
                            if (
                              !(void 0 === v ? x === b || r(x, b, i, o, n) : v)
                            ) {
                              m = !1;
                              break;
                            }
                            g || (g = "constructor" == p);
                          }
                          if (m && !g) {
                            var y = t.constructor, R = e.constructor;
                            y != R && "constructor" in t &&
                              "constructor" in e &&
                              !("function" == typeof y && y instanceof y &&
                                "function" == typeof R && R instanceof R) &&
                              (m = !1);
                          }
                          return n.delete(t), n.delete(e), m;
                        }(t, e, r, i, o, s));
                  }(t, e, Nt, r, i, o));
            }
            function Xt(t) {
              return !(!de(t) || function (t) {
                return !!st && st in t;
              }(t)) && (ce(t) || Z(t) ? dt : j).test(ie(t));
            }
            function It(t) {
              return "function" == typeof t
                ? t
                : null == t
                ? ge
                : "object" == typeof t
                ? se(t)
                  ? function (t, e) {
                    return Zt(t) && Yt(e) ? te(re(t), e) : function (r) {
                      var i = function (t, e, r) {
                        var i = null == t ? void 0 : $t(t, e);
                        return void 0 === i ? r : i;
                      }(r, t);
                      return void 0 === i && i === e
                        ? function (t, e) {
                          return null != t && function (t, e, r) {
                            e = Zt(e, t) ? [e] : Bt(e);
                            for (var i, o = -1, n = e.length; ++o < n;) {
                              var a = re(e[o]);
                              if (!(i = null != t && r(t, a))) break;
                              t = t[a];
                            }
                            if (i) return i;
                            n = t ? t.length : 0;
                            return !!n && ue(n) && Wt(a, n) && (se(t) || ae(t));
                          }(t, e, zt);
                        }(r, t)
                        : Nt(e, i, void 0, n | a);
                    };
                  }(t[0], t[1])
                  : function (t) {
                    var e = function (t) {
                      for (var e = me(t), r = e.length; r--;) {
                        var i = e[r], o = t[i];
                        e[r] = [i, o, Yt(o)];
                      }
                      return e;
                    }(t);
                    return 1 == e.length && e[0][2]
                      ? te(e[0][0], e[0][1])
                      : function (r) {
                        return r === t || function (t, e, r, i) {
                          var o = r.length, s = o, l = !i;
                          if (null == t) return !s;
                          for (t = Object(t); o--;) {
                            var c = r[o];
                            if (
                              l && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)
                            ) return !1;
                          }
                          for (; ++o < s;) {
                            var u = (c = r[o])[0], d = t[u], h = c[1];
                            if (l && c[2]) {
                              if (void 0 === d && !(u in t)) return !1;
                            } else {
                              var p = new Dt();
                              if (i) { var f = i(d, h, u, t, e, p); }
                              if (
                                !(void 0 === f ? Nt(h, d, i, n | a, p) : f)
                              ) return !1;
                            }
                          }
                          return !0;
                        }(r, t, e);
                      };
                  }(t)
                : function (t) {
                  return Zt(t)
                    ? function (t) {
                      return function (e) {
                        return null == e ? void 0 : e[t];
                      };
                    }(re(t))
                    : function (t) {
                      return function (e) {
                        return $t(e, t);
                      };
                    }(t);
                }(t);
            }
            function Kt(t) {
              if (
                !function (t) {
                  var e = t && t.constructor,
                    r = "function" == typeof e && e.prototype || nt;
                  return t === r;
                }(t)
              ) return gt(t);
              var e = [];
              for (var r in Object(t)) {
                ct.call(t, r) && "constructor" != r && e.push(r);
              }
              return e;
            }
            function Bt(t) {
              return se(t) ? t : ee(t);
            }
            function Jt(t, e, r, i, o, s) {
              var l = o & a, c = t.length, u = e.length;
              if (c != u && !(l && u > c)) return !1;
              var d = s.get(t);
              if (d && s.get(e)) return d == e;
              var h = -1, p = !0, f = o & n ? new Pt() : void 0;
              for (s.set(t, e), s.set(e, t); ++h < c;) {
                var m = t[h], g = e[h];
                if (i) {
                  var x = l ? i(g, m, h, e, t, s) : i(m, g, h, t, e, s);
                }
                if (void 0 !== x) {
                  if (x) continue;
                  p = !1;
                  break;
                }
                if (f) {
                  if (
                    !W(e, function (t, e) {
                      if (!f.has(e) && (m === t || r(m, t, i, o, s))) {
                        return f.add(e);
                      }
                    })
                  ) {
                    p = !1;
                    break;
                  }
                } else if (m !== g && !r(m, g, i, o, s)) {
                  p = !1;
                  break;
                }
              }
              return s.delete(t), s.delete(e), p;
            }
            function Qt(t, e) {
              var r = t.__data__;
              return (function (t) {
                  var e = typeof t;
                  return "string" == e || "number" == e || "symbol" == e ||
                      "boolean" == e
                    ? "__proto__" !== t
                    : null === t;
                })(e)
                ? r["string" == typeof e ? "string" : "hash"]
                : r.map;
            }
            function Gt(t, e) {
              var r = function (t, e) {
                return null == t ? void 0 : t[e];
              }(t, e);
              return Xt(r) ? r : void 0;
            }
            Ct.prototype.clear = function () {
              this.__data__ = _t ? _t(null) : {};
            },
              Ct.prototype.delete = function (t) {
                return this.has(t) && delete this.__data__[t];
              },
              Ct.prototype.get = function (t) {
                var e = this.__data__;
                if (_t) {
                  var r = e[t];
                  return r === o ? void 0 : r;
                }
                return ct.call(e, t) ? e[t] : void 0;
              },
              Ct.prototype.has = function (t) {
                var e = this.__data__;
                return _t ? void 0 !== e[t] : ct.call(e, t);
              },
              Ct.prototype.set = function (t, e) {
                return this.__data__[t] = _t && void 0 === e ? o : e, this;
              },
              Ht.prototype.clear = function () {
                this.__data__ = [];
              },
              Ht.prototype.delete = function (t) {
                var e = this.__data__, r = kt(e, t);
                return !(r < 0) &&
                  (r == e.length - 1 ? e.pop() : mt.call(e, r, 1), !0);
              },
              Ht.prototype.get = function (t) {
                var e = this.__data__, r = kt(e, t);
                return r < 0 ? void 0 : e[r][1];
              },
              Ht.prototype.has = function (t) {
                return kt(this.__data__, t) > -1;
              },
              Ht.prototype.set = function (t, e) {
                var r = this.__data__, i = kt(r, t);
                return i < 0 ? r.push([t, e]) : r[i][1] = e, this;
              },
              Vt.prototype.clear = function () {
                this.__data__ = {
                  hash: new Ct(),
                  map: new (yt || Ht)(),
                  string: new Ct(),
                };
              },
              Vt.prototype.delete = function (t) {
                return Qt(this, t).delete(t);
              },
              Vt.prototype.get = function (t) {
                return Qt(this, t).get(t);
              },
              Vt.prototype.has = function (t) {
                return Qt(this, t).has(t);
              },
              Vt.prototype.set = function (t, e) {
                return Qt(this, t).set(t, e), this;
              },
              Pt.prototype.add = Pt.prototype.push = function (t) {
                return this.__data__.set(t, o), this;
              },
              Pt.prototype.has = function (t) {
                return this.__data__.has(t);
              },
              Dt.prototype.clear = function () {
                this.__data__ = new Ht();
              },
              Dt.prototype.delete = function (t) {
                return this.__data__.delete(t);
              },
              Dt.prototype.get = function (t) {
                return this.__data__.get(t);
              },
              Dt.prototype.has = function (t) {
                return this.__data__.has(t);
              },
              Dt.prototype.set = function (t, e) {
                var i = this.__data__;
                if (i instanceof Ht) {
                  var o = i.__data__;
                  if (!yt || o.length < r - 1) return o.push([t, e]), this;
                  i = this.__data__ = new Vt(o);
                }
                return i.set(t, e), this;
              };
            var Mt = function (t) {
              return ut.call(t);
            };
            function Wt(t, e) {
              return !!(e = null == e ? l : e) &&
                ("number" == typeof t || $.test(t)) && t > -1 && t % 1 == 0 &&
                t < e;
            }
            function Zt(t, e) {
              if (se(t)) return !1;
              var r = typeof t;
              return !("number" != r && "symbol" != r && "boolean" != r &&
                null != t && !pe(t)) ||
                (S.test(t) || !T.test(t) || null != e && t in Object(e));
            }
            function Yt(t) {
              return t === t && !de(t);
            }
            function te(t, e) {
              return function (r) {
                return null != r &&
                  (r[t] === e && (void 0 !== e || t in Object(r)));
              };
            }
            (vt && Mt(new vt(new ArrayBuffer(1))) != F ||
              yt && Mt(new yt()) != b || Rt && Mt(Rt.resolve()) != A ||
              At && Mt(new At()) != _ || Et && Mt(new Et()) != U) &&
              (Mt = function (t) {
                var e = ut.call(t),
                  r = e == y ? t.constructor : void 0,
                  i = r ? ie(r) : void 0;
                if (i) {
                  switch (i) {
                    case wt:
                      return F;
                    case qt:
                      return b;
                    case Ut:
                      return A;
                    case Lt:
                      return _;
                    case Ft:
                      return U;
                  }
                }
                return e;
              });
            var ee = oe(function (t) {
              t = function (t) {
                return null == t ? "" : function (t) {
                  if ("string" == typeof t) return t;
                  if (pe(t)) return Ot ? Ot.call(t) : "";
                  var e = t + "";
                  return "0" == e && 1 / t == -s ? "-0" : e;
                }(t);
              }(t);
              var e = [];
              return O.test(t) && e.push(""),
                t.replace(C, function (t, r, i, o) {
                  e.push(i ? o.replace(V, "$1") : r || t);
                }),
                e;
            });
            function re(t) {
              if ("string" == typeof t || pe(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -s ? "-0" : e;
            }
            function ie(t) {
              if (null != t) {
                try {
                  return lt.call(t);
                } catch (rt) {}
                try {
                  return t + "";
                } catch (rt) {}
              }
              return "";
            }
            function oe(t, e) {
              if ("function" != typeof t || e && "function" != typeof e) {
                throw new TypeError(i);
              }
              var r = function () {
                var i = arguments, o = e ? e.apply(this, i) : i[0], n = r.cache;
                if (n.has(o)) return n.get(o);
                var a = t.apply(this, i);
                return r.cache = n.set(o, a), a;
              };
              return r.cache = new (oe.Cache || Vt)(), r;
            }
            function ne(t, e) {
              return t === e || t !== t && e !== e;
            }
            function ae(t) {
              return function (t) {
                return he(t) && le(t);
              }(t) && ct.call(t, "callee") &&
                (!ft.call(t, "callee") || ut.call(t) == d);
            }
            oe.Cache = Vt;
            var se = Array.isArray;
            function le(t) {
              return null != t && ue(t.length) && !ce(t);
            }
            function ce(t) {
              var e = de(t) ? ut.call(t) : "";
              return e == g || e == x;
            }
            function ue(t) {
              return "number" == typeof t && t > -1 && t % 1 == 0 && t <= l;
            }
            function de(t) {
              var e = typeof t;
              return !!t && ("object" == e || "function" == e);
            }
            function he(t) {
              return !!t && "object" == typeof t;
            }
            function pe(t) {
              return "symbol" == typeof t || he(t) && ut.call(t) == q;
            }
            var fe = M
              ? function (t) {
                return function (e) {
                  return t(e);
                };
              }(M)
              : function (t) {
                return he(t) && ue(t.length) && !!z[ut.call(t)];
              };
            function me(t) {
              return le(t) ? jt(t) : Kt(t);
            }
            function ge(t) {
              return t;
            }
            t.exports = function (t, e, r) {
              var i = t ? t.length : 0;
              if (!i) return -1;
              var o = i - 1;
              return void 0 !== r && (o = function (t) {
                var e = function (t) {
                    if (!t) return 0 === t ? t : 0;
                    if (
                      t = function (t) {
                        if ("number" == typeof t) return t;
                        if (pe(t)) return u;
                        if (de(t)) {
                          var e = "function" == typeof t.valueOf
                            ? t.valueOf()
                            : t;
                          t = de(e) ? e + "" : e;
                        }
                        if ("string" != typeof t) return 0 === t ? t : +t;
                        t = t.replace(H, "");
                        var r = D.test(t);
                        return r || k.test(t)
                          ? N(t.slice(2), r ? 2 : 8)
                          : P.test(t)
                          ? u
                          : +t;
                      }(t), t === s || t === -s
                    ) return (t < 0 ? -1 : 1) * c;
                    return t === t ? t : 0;
                  }(t),
                  r = e % 1;
                return e === e ? r ? e - r : e : 0;
              }(r),
                o = r < 0 ? xt(i + o, 0) : bt(o, i - 1)),
                function (t, e, r, i) {
                  for (
                    var o = t.length, n = r + (i ? 1 : -1);
                    i ? n-- : ++n < o;
                  ) if (e(t[n], n, t)) return n;
                  return -1;
                }(t, It(e), o, !0);
            };
          }(bt, xt);
          const vt = xt,
            yt = new RegExp(
              `([\\u{${v[0].toString(16).toUpperCase().padStart(4, "0")}}-\\u{${
                v[1].toString(16).toUpperCase().padStart(4, "0")
              }}])`,
              "gu",
            ),
            Rt = (t) => Boolean("object" == typeof t && t && "altText" in t),
            At = (t) => "image" in t,
            Et = (t) => !At(t),
            _t = (t) => {
              const e = t.findIndex(
                (t) => Rt(t) || Boolean("string" == typeof t && t.trim()),
              );
              return -1 === e ? [] : t.slice(e);
            },
            wt = (t) => {
              const e = vt(
                t,
                (t) => Rt(t) || Boolean("string" == typeof t && t.trim()),
              );
              return -1 === e ? [] : t.slice(0, e + 1);
            },
            qt = {
              fontFamily: "serif",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 50,
              color: "#000000",
              backgroundColor: "transparent",
              textAlign: "left",
              scale: 1,
              padding: 0,
            };
          var Ut, Lt, Ft, Tt, St, Ot = {};
          function Ct() {
            if (Lt) return Ut;
            Lt = 1;
            var t,
              e,
              r,
              i = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t",
              };
            function o(e) {
              throw { name: "SyntaxError", message: e, at: t, text: r };
            }
            function n(i) {
              return i && i !== e &&
                o("Expected '" + i + "' instead of '" + e + "'"),
                e = r.charAt(t),
                t += 1,
                e;
            }
            function a() {
              var t, r = "";
              for ("-" === e && (r = "-", n("-")); e >= "0" && e <= "9";) {
                r += e, n();
              }
              if ("." === e) {
                for (r += "."; n() && e >= "0" && e <= "9";) r += e;
              }
              if ("e" === e || "E" === e) {
                for (
                  r += e, n(), ("-" === e || "+" === e) && (r += e, n());
                  e >= "0" && e <= "9";
                ) r += e, n();
              }
              return t = Number(r), isFinite(t) || o("Bad number"), t;
            }
            function s() {
              var t, r, a, s = "";
              if ('"' === e) {
                for (; n();) {
                  if ('"' === e) return n(), s;
                  if ("\\" === e) {
                    if (n(), "u" === e) {
                      for (
                        a = 0, r = 0;
                        r < 4 && (t = parseInt(n(), 16), isFinite(t));
                        r += 1
                      ) a = 16 * a + t;
                      s += String.fromCharCode(a);
                    } else {
                      if ("string" != typeof i[e]) break;
                      s += i[e];
                    }
                  } else s += e;
                }
              }
              o("Bad string");
            }
            function l() {
              for (; e && e <= " ";) n();
            }
            function c() {
              switch (l(), e) {
                case "{":
                  return function () {
                    var t, r = {};
                    if ("{" === e) {
                      if (n("{"), l(), "}" === e) return n("}"), r;
                      for (; e;) {
                        if (
                          t = s(),
                            l(),
                            n(":"),
                            Object.prototype.hasOwnProperty.call(r, t) &&
                            o('Duplicate key "' + t + '"'),
                            r[t] = c(),
                            l(),
                            "}" === e
                        ) return n("}"), r;
                        n(","), l();
                      }
                    }
                    o("Bad object");
                  }();
                case "[":
                  return function () {
                    var t = [];
                    if ("[" === e) {
                      if (n("["), l(), "]" === e) return n("]"), t;
                      for (; e;) {
                        if (t.push(c()), l(), "]" === e) return n("]"), t;
                        n(","), l();
                      }
                    }
                    o("Bad array");
                  }();
                case '"':
                  return s();
                case "-":
                  return a();
                default:
                  return e >= "0" && e <= "9" ? a() : function () {
                    switch (e) {
                      case "t":
                        return n("t"), n("r"), n("u"), n("e"), !0;
                      case "f":
                        return n("f"), n("a"), n("l"), n("s"), n("e"), !1;
                      case "n":
                        return n("n"), n("u"), n("l"), n("l"), null;
                      default:
                        o("Unexpected '" + e + "'");
                    }
                  }();
              }
            }
            return Ut = function (i, n) {
              var a;
              return r = i,
                t = 0,
                e = " ",
                a = c(),
                l(),
                e && o("Syntax error"),
                "function" == typeof n
                  ? function t(e, r) {
                    var i, o, a = e[r];
                    if (a && "object" == typeof a) {
                      for (i in c) {
                        Object.prototype.hasOwnProperty.call(a, i) &&
                          ("undefined" == typeof (o = t(a, i))
                            ? delete a[i]
                            : a[i] = o);
                      }
                    }
                    return n.call(e, r, a);
                  }({ "": a }, "")
                  : a;
            };
          }
          function Ht() {
            if (Tt) return Ft;
            Tt = 1;
            var t,
              e,
              r,
              i =
                /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              o = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\",
              };
            function n(t) {
              return i.lastIndex = 0,
                i.test(t)
                  ? '"' + t.replace(i, function (t) {
                    var e = o[t];
                    return "string" == typeof e ? e : "\\u" +
                      ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                  }) + '"'
                  : '"' + t + '"';
            }
            function a(i, o) {
              var s, l, c, u, d, h = t, p = o[i];
              switch (
                p && "object" == typeof p && "function" == typeof p.toJSON &&
                (p = p.toJSON(i)),
                  "function" == typeof r && (p = r.call(o, i, p)),
                  typeof p
              ) {
                case "string":
                  return n(p);
                case "number":
                  return isFinite(p) ? String(p) : "null";
                case "boolean":
                case "null":
                  return String(p);
                case "object":
                  if (!p) return "null";
                  if (
                    t += e,
                      d = [],
                      "[object Array]" === Object.prototype.toString.apply(p)
                  ) {
                    for (u = p.length, s = 0; s < u; s += 1) {
                      d[s] = a(s, p) || "null";
                    }
                    return c = 0 === d.length
                      ? "[]"
                      : t
                      ? "[\n" + t + d.join(",\n" + t) + "\n" + h + "]"
                      : "[" + d.join(",") + "]",
                      t = h,
                      c;
                  }
                  if (r && "object" == typeof r) {
                    for (u = r.length, s = 0; s < u; s += 1) {
                      "string" == typeof (l = r[s]) &&
                        ((c = a(l, p)) && d.push(n(l) + (t ? ": " : ":") + c));
                    }
                  } else {for (l in p) {
                      Object.prototype.hasOwnProperty.call(p, l) &&
                        ((c = a(l, p)) && d.push(n(l) + (t ? ": " : ":") + c));
                    }}
                  return c = 0 === d.length
                    ? "{}"
                    : t
                    ? "{\n" + t + d.join(",\n" + t) + "\n" + h + "}"
                    : "{" + d.join(",") + "}",
                    t = h,
                    c;
              }
            }
            return Ft = function (i, o, n) {
              var s;
              if (t = "", e = "", "number" == typeof n) {
                for (s = 0; s < n; s += 1) {
                  e += " ";
                }
              } else "string" == typeof n && (e = n);
              if (
                r = o,
                  o && "function" != typeof o &&
                  ("object" != typeof o || "number" != typeof o.length)
              ) throw new Error("JSON.stringify");
              return a("", { "": i });
            };
          }
          var Vt = "undefined" != typeof JSON
              ? JSON
              : (St || (St = 1, Ot.parse = Ct(), Ot.stringify = Ht()), Ot),
            Pt = Array.isArray || function (t) {
              return "[object Array]" === {}.toString.call(t);
            },
            Dt = Object.keys || function (t) {
              var e = Object.prototype.hasOwnProperty || function () {
                  return !0;
                },
                r = [];
              for (var i in t) e.call(t, i) && r.push(i);
              return r;
            },
            jt = function (t, e) {
              e || (e = {}), "function" == typeof e && (e = { cmp: e });
              var r = e.space || "";
              "number" == typeof r && (r = Array(r + 1).join(" "));
              var i,
                o = "boolean" == typeof e.cycles && e.cycles,
                n = e.replacer || function (t, e) {
                  return e;
                },
                a = e.cmp && (i = e.cmp, function (t) {
                  return function (e, r) {
                    var o = { key: e, value: t[e] },
                      n = { key: r, value: t[r] };
                    return i(o, n);
                  };
                }),
                s = [];
              return function t(e, i, l, c) {
                var u = r ? "\n" + new Array(c + 1).join(r) : "",
                  d = r ? ": " : ":";
                if (
                  l && l.toJSON && "function" == typeof l.toJSON &&
                  (l = l.toJSON()), void 0 !== (l = n.call(e, i, l))
                ) {
                  if ("object" != typeof l || null === l) {
                    return Vt.stringify(l);
                  }
                  if (Pt(l)) {
                    for (var h = [], p = 0; p < l.length; p++) {
                      var f = t(l, p, l[p], c + 1) || Vt.stringify(null);
                      h.push(u + r + f);
                    }
                    return "[" + h.join(",") + u + "]";
                  }
                  if (-1 !== s.indexOf(l)) {
                    if (o) return Vt.stringify("__cycle__");
                    throw new TypeError(
                      "Converting circular structure to JSON",
                    );
                  }
                  s.push(l);
                  var m = Dt(l).sort(a && a(l));
                  for (h = [], p = 0; p < m.length; p++) {
                    var g = t(l, i = m[p], l[i], c + 1);
                    if (g) {
                      var x = Vt.stringify(i) + d + g;
                      h.push(u + r + x);
                    }
                  }
                  return s.splice(s.indexOf(l), 1), "{" + h.join(",") + u + "}";
                }
              }({ "": t }, "", t, 0);
            };
          class kt {
            constructor(t) {
              this.occupied = new Set(), this.range = [...t];
            }
            acquire(t) {
              const e = [
                Math.max(t[0], this.range[0]),
                Math.min(t[1], this.range[1]),
              ];
              for (let r = e[0]; r <= e[1]; r++) {
                if (!this.occupied.has(r)) return this.occupied.add(r), r;
              }
            }
            release(t) {
              return this.occupied.delete(t);
            }
          }
          class $t {
            constructor(t) {
              this.emCodePairList = t,
                this.codePool = new kt(v),
                this.keyCharMap = new Map(),
                this.charBlockMap = new Map();
            }
            getCharacter(t, e) {
              const r = gt(
                  null != e ? e : this.emCodePairList[0][0],
                  this.emCodePairList,
                ),
                i = jt(t);
              if (!this.keyCharMap.has(i)) {
                const e = ((t, e) => {
                  const r = gt(t, e), i = e.findIndex(([t]) => t === r);
                  if (-1 === i) return;
                  const [, o] = e[i];
                  return [o, e[i + 1] ? e[i + 1][1] - 1 : 63743];
                })(r, this.emCodePairList);
                if (!e) return;
                const o = this.codePool.acquire(e);
                if (!o) return;
                const n = String.fromCharCode(o);
                this.keyCharMap.set(i, n), this.charBlockMap.set(n, t);
              }
              return this.keyCharMap.get(i);
            }
            getBlock(t) {
              return this.charBlockMap.get(t);
            }
            cleanUp(...t) {
              const e = new Set(t);
              for (const [r, i] of this.keyCharMap.entries()) {
                if (e.has(i)) continue;
                const t = i.charCodeAt(0);
                this.codePool.release(t),
                  this.keyCharMap.delete(r),
                  this.charBlockMap.delete(i);
              }
            }
          }
          var zt = /({MAGICKEY-\d+?})/g,
            Nt = function () {
              var t = Date.now();
              return function () {
                return "{MAGICKEY-" + ++t + "}";
              };
            }();
          const Xt = {
            default: 1,
            stretch: 1.2,
            counts: {
              "1.0": 100,
              1.5: 100,
              "2.0": 100,
              2.5: 100,
              "3.0": 100,
              3.5: 100,
              "4.0": 100,
              4.5: 100,
              "5.0": 100,
              5.5: 100,
              "6.0": 100,
              6.5: 100,
              "7.0": 100,
              7.5: 100,
              "8.0": 100,
              8.5: 100,
              "9.0": 100,
              9.5: 100,
              "10.0": 100,
              10.5: 100,
              "11.0": 100,
              11.5: 100,
              "12.0": 100,
              12.5: 100,
              "13.0": 100,
              13.5: 100,
              "14.0": 100,
              14.5: 100,
              "15.0": 100,
            },
          };
          var It = /["'&<>]/,
            Kt = function (t) {
              var e = "" + t, r = It.exec(e);
              if (!r) return e;
              var i, o = "", n = 0, a = 0;
              for (n = r.index; n < e.length; n++) {
                switch (e.charCodeAt(n)) {
                  case 34:
                    i = "&quot;";
                    break;
                  case 38:
                    i = "&amp;";
                    break;
                  case 39:
                    i = "&#39;";
                    break;
                  case 60:
                    i = "&lt;";
                    break;
                  case 62:
                    i = "&gt;";
                    break;
                  default:
                    continue;
                }
                a !== n && (o += e.substring(a, n)), a = n + 1, o += i;
              }
              return a !== n ? o + e.substring(a, n) : o;
            };
          var Bt = Object.defineProperty,
            Jt = Object.getOwnPropertyDescriptor,
            Qt = (t, e, r, i) => {
              for (
                var o, n = i > 1 ? void 0 : i ? Jt(e, r) : e, a = t.length - 1;
                a >= 0;
                a--
              ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
              return i && n && Bt(e, r, n), n;
            };
          const Gt = {
              path: {
                woff:
                  "data:font/woff;base64,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",
              },
              em: Xt,
            },
            Mt = new DOMParser();
          e.HTMLTextAreaExElement = class t extends f.LitElement {
            constructor() {
              var t, e, r;
              super(...arguments),
                this.maxBlockCounts = {},
                this.readOnly = !1,
                this.disabled = !1,
                this.required = !1,
                this.spellCheck = !0,
                this.autoFocus = !1,
                this._rawValue = "",
                this._webFontFamily = "",
                this._transformStyle = "",
                this._computedMaxLength = Math.min(
                  null != (t = this.maxLength) ? t : 1 / 0,
                  null != (e = this.maxRawLength) ? e : 1 / 0,
                ),
                this._hasScrollbar = !1,
                this._xxhash = K.h32(Date.now()),
                this._resizeObserver = new ResizeObserver(
                  () => this._updateHasScrollbar(),
                ),
                this._emCodePairList = mt(
                  (null != (r = this.fontConfig) ? r : Gt).em,
                ),
                this._characterPool = new $t(this._emCodePairList),
                this._inheritedStyle = void 0,
                this._textImageCache = new Map();
            }
            get inputEl() {
              return this._inputEl;
            }
            get value() {
              return this._getValueFrom(this._rawValue);
            }
            set value(t) {
              this._rawValue = this._getRawValueFrom(null != t ? t : []),
                this._updateComputedMaxLength();
            }
            get rawValue() {
              return this._rawValue;
            }
            get selectionStart() {
              var t, e;
              return null !=
                  (e = null == (t = this._inputEl) ? void 0 : t.selectionStart)
                ? e
                : 0;
            }
            set selectionStart(t) {
              this._inputEl && (this._inputEl.selectionStart = t);
            }
            get selectionEnd() {
              var t, e;
              return null !=
                  (e = null == (t = this._inputEl) ? void 0 : t.selectionEnd)
                ? e
                : 0;
            }
            set selectionEnd(t) {
              this._inputEl && (this._inputEl.selectionEnd = t);
            }
            connectedCallback() {
              return p(this, null, function* () {
                var e;
                ((t, e, r) => u(s(t), r, e))(
                  t.prototype,
                  this,
                  "connectedCallback",
                ).call(this),
                  this._rawValue = this._getRawValueFrom(this.value),
                  this._host = 11 === this.renderRoot.nodeType
                    ? this.renderRoot.host
                    : this.renderRoot.parentElement,
                  this._inheritedStyle =
                    null == (e = this._host.ownerDocument.defaultView)
                      ? void 0
                      : e.getComputedStyle(this._host);
                this._blockInfoCacheGc = window.setInterval(() => {
                  this._cleanUpUnusedRange();
                }, 6e4),
                  this._updateComputedMaxLength(),
                  this._updateFont(),
                  this._updateHasScrollbar();
              });
            }
            firstUpdated() {
              this._inputEl &&
                (this._resizeObserver.observe(this._inputEl),
                  this.autoFocus && this._inputEl.focus());
            }
            updated(t) {
              (t.has("maxLength") || t.has("value")) &&
              this._updateComputedMaxLength(),
                t.has("fontConfig") && this._updateFont(),
                (t.has("textImageCallback") ||
                  t.has("textImageOptionsCallback")) &&
                this._textImageCache.clear(),
                t.has("rawValue") && this._updateHasScrollbar();
            }
            _updateFont() {
              return p(this, null, function* () {
                var t;
                this._characterPool && this._characterPool.cleanUp();
                const r = null != (t = this.fontConfig) ? t : Gt;
                this._emCodePairList = mt(r.em),
                  this._characterPool = new $t(this._emCodePairList);
                const i = this._webFontFamily;
                this._webFontFamily = yield ((t, ...r) =>
                  p(e, [t, ...r], function* (t, e = window.document) {
                    const r = Object.entries(t).map(([t, e]) =>
                        `url('${it(e)}') format('${it(t)}')`
                      ).join(","),
                      i = "F" + ht.update(r).digest(),
                      o = Array.from(e.fonts.values()).find((t) =>
                        t.family === i
                      );
                    if (pt.has(i)) {
                      const t = pt.get(i);
                      window.clearTimeout(t), pt.delete(i);
                    }
                    if (!o) {
                      const t = yield new FontFace(i, r, {
                        unicodeRange: `U+${
                          v.map((t) => t.toString(16).toUpperCase()).join("-")
                        }`,
                        display: "block",
                      }).load();
                      e.fonts.add(t);
                    }
                    return i;
                  }))(r.path, this._host.ownerDocument),
                  this._textImageCache.clear(),
                  ft(i, this._host.ownerDocument);
              });
            }
            render() {
              var t, e, r;
              return f.html`
      <textarea
        class="input ${this._hasScrollbar ? "has-scrollbar" : ""}"
        part="input"
        .value=${this._rawValue}
        placeholder=${this.placeholder}
        maxlength=${
                Math.min(
                  this._computedMaxLength,
                  null != (t = this.maxRawLength) ? t : 1 / 0,
                )
              }
        ?required=${this.required}
        ?readonly=${this.readOnly}
        ?disabled=${this.disabled}
        ?spellcheck=${this.spellCheck}
        ?autofocus=${this.autoFocus}
        style=${
                g.styleMap({
                  "--inherited-font-family": null == (e = this._inheritedStyle)
                    ? void 0
                    : e.fontFamily,
                  "--webfont-family": this._webFontFamily,
                })
              }
        @scroll="${this._handleScroll}"
        @input="${this._handleInput}"
        @copy="${this._handleCopy}"
        @cut="${this._handleCut}"
        @paste="${this._handlePaste}"
      ></textarea>
      <div
        class="cover"
        part="cover"
        style=${
                g.styleMap({
                  transform: this._transformStyle,
                  "--inherited-font-family": null == (r = this._inheritedStyle)
                    ? void 0
                    : r.fontFamily,
                  "--webfont-family": this._webFontFamily,
                })
              }
        @pointerdown=${this._handleClickBlock}
        .innerHTML=${this._getCoverHTML()}
      ></div>
    `;
            }
            disconnectedCallback() {
              ft(this._webFontFamily, this._host.ownerDocument),
                window.clearTimeout(this._blockInfoCacheGc),
                this._characterPool.cleanUp(),
                this._resizeObserver.disconnect();
            }
            _updateComputedMaxLength() {
              if (this.maxLength) {
                const t = this._getValueFrom(this._rawValue),
                  e = this._getValueLength(t);
                this._computedMaxLength = this.maxLength -
                  (e - this._rawValue.length);
              } else this._computedMaxLength = 1 / 0;
            }
            _updateHasScrollbar() {
              requestAnimationFrame(() => {
                var t, e;
                return this._hasScrollbar =
                  (null == (t = this._inputEl) ? void 0 : t.clientWidth) !==
                    (null == (e = this._inputEl) ? void 0 : e.offsetWidth);
              });
            }
            _getCoverHTML() {
              return Kt(this._rawValue).replace(yt, (t) => {
                var e, r, i, o;
                const n = this._characterPool.getBlock(t);
                if ("undefined" == typeof n) return t;
                const { em: a = 1, image: s } = Et(n)
                  ? this._getTextImage(n)
                  : n;
                return `<span\n        part="block ${
                  null != (e = it(n.part)) ? e : ""
                }"\n        data-em="${a}"\n        data-block-length="${
                  null != (r = n.length) ? r : 1
                }"\n        class="block"\n        style="background-image: url('${
                  it(
                    null != (o = null == (i = this.imageSrcCallback)
                        ? void 0
                        : i.call(this, s, n))
                      ? o
                      : s,
                  )
                }')"\n      >${t}</span>`;
              });
            }
            _getRawValueFrom(t) {
              return t.map((t) => {
                if ("string" == typeof t) return t;
                const e = t, { em: r = 1 } = Et(e) ? this._getTextImage(e) : e;
                let i = this._characterPool.getCharacter(e, r);
                return i ||
                    (this._cleanUpUnusedRange(),
                      i = this._characterPool.getCharacter(e, r),
                      i)
                  ? i
                  : e.altText;
              }).join("");
            }
            _getValueFrom(t) {
              return t.split(yt).map((t) => {
                var e;
                return t.match(yt)
                  ? null != (e = this._characterPool.getBlock(t)) ? e : ""
                  : t;
              }).filter((t) => t);
            }
            _cleanUpUnusedRange() {
              var t;
              const e = [...new Set(this._rawValue.match(yt))];
              null == (t = this._characterPool) || t.cleanUp(...e);
            }
            _handleScroll({ currentTarget: t }) {
              t instanceof HTMLTextAreaElement &&
                (this._transformStyle = `translate(${-t.scrollLeft}px, ${-t
                  .scrollTop}px)`);
            }
            _handleInput({ currentTarget: t }) {
              t instanceof HTMLTextAreaElement &&
                (this._rawValue = t.value, this._updateComputedMaxLength());
            }
            _handleCopy(t) {
              return p(this, null, function* () {
                var e, r, i, o, n;
                if (!this._inputEl) return;
                const a = null !=
                      (i =
                        null == (r = null == (e = this._inputEl.ownerDocument)
                            ? void 0
                            : e.getSelection())
                          ? void 0
                          : r.toString())
                    ? i
                    : "",
                  s = this._getValueFrom(a);
                null == (o = t.clipboardData) ||
                o.setData(
                  "text/plain",
                  s.map((t) => "string" == typeof t ? t : t.altText).join(""),
                ),
                  null == (n = t.clipboardData) ||
                  n.setData(
                    b,
                    JSON.stringify(
                      s.map((t) => Rt(t) && t.isCopyBlocked ? t.altText : t),
                    ),
                  ),
                  t.preventDefault();
              });
            }
            _handleCut(t) {
              this._inputEl &&
                (this._handleCopy(t),
                  this._inputEl.ownerDocument.execCommand("delete"));
            }
            _handlePaste(t) {
              var e, r, i;
              const o = null == (e = t.clipboardData) ? void 0 : e.getData(b);
              let n = x(o);
              n && (this.insertValue(n), t.preventDefault());
              const a = null == (r = t.clipboardData)
                ? void 0
                : r.getData("text/html");
              if (a) {
                const e = Mt.parseFromString(a, "text/html").body,
                  r = Array.from(
                    e.querySelectorAll("[data-textarea-ex-block]"),
                  );
                if (!r.length) return;
                const o = function () {
                  var t = {};
                  return {
                    create: function (e) {
                      var r = Nt();
                      return t[r] = e, r;
                    },
                    restore: function (t, e) {
                      var r = this, i = 0;
                      return t.replace(zt, function (t, o, n) {
                        var a = n + i, s = r.get(o);
                        r.delete(o);
                        var l = s ? e(s, a) : t;
                        return i += l.length - t.length, l;
                      });
                    },
                    has: function (e) {
                      return e in t;
                    },
                    get: function (e) {
                      return t[e];
                    },
                    delete: function (e) {
                      return !!this.get(e) && (delete t[e], !0);
                    },
                    clear: function () {
                      t = {};
                    },
                  };
                }();
                for (const t of r) {
                  const e = x(t.dataset.textareaExBlock);
                  if (!e) continue;
                  const r = document.createTextNode(o.create(e));
                  t.replaceWith(r);
                }
                const s = Array.from(e.querySelectorAll("img"));
                for (const t of s) {
                  const e = document.createTextNode(
                    null != (i = t.alt) ? i : "",
                  );
                  t.replaceWith(e);
                }
                n = e.innerText.trim().split(zt).map((t) => {
                  var e;
                  return null != (e = o.get(t)) ? e : t;
                }),
                  this.insertValue(n),
                  t.preventDefault();
              }
            }
            _handleClickBlock({ target: t }) {
              var e, r;
              if (this._inputEl && t instanceof HTMLElement) {
                let i = 0;
                for (let o = t.previousSibling; o; o = o.previousSibling) {
                  i += null !=
                      (r = null == (e = o.textContent) ? void 0 : e.length)
                    ? r
                    : 0;
                }
                this._inputEl.selectionStart = i,
                  this._inputEl.selectionEnd = i + 1;
              }
            }
            _getValueLength(t) {
              return t.reduce((t, e) => {
                var r;
                return t + (Rt(e) ? null != (r = e.length) ? r : 1 : e.length);
              }, 0);
            }
            _getCountByType(t, e = {}) {
              var r, i, o;
              for (const n of null != (r = t.match(yt)) ? r : []) {
                const t = null == (i = this._characterPool.getBlock(n))
                  ? void 0
                  : i.type;
                "undefined" != typeof t &&
                  (e[t] = (null != (o = e[t]) ? o : 0) + 1);
              }
              return e;
            }
            _cutOfValue(t, e) {
              if ("undefined" == typeof this._computedMaxLength) return t;
              let r = this._rawValue.length, i = 0;
              for (const o of t) {
                const n = this._getValueLength([o]),
                  a = r + n - (this._computedMaxLength + e);
                if (a > 0) {
                  if (Rt(o)) break;
                  return t.slice(0, i).concat(o.substring(0, n - a));
                }
                r += n, i++;
              }
              return t.slice(0, i);
            }
            _getTextImage(t) {
              var e, r, i, o, n, a, s, l;
              const c = String(this._xxhash.update(jt(t)).digest());
              if (!this._textImageCache.has(c)) {
                const u = (t) => gt(t, this._emCodePairList),
                  { text: d, style: p } =
                    null != (o = null == (e = this.textImageCallback)
                        ? void 0
                        : e.call(this, t))
                      ? o
                      : {
                        text: null != (r = t.text)
                          ? r
                          : "`textImageCallback` is required",
                        style: null == (i = this.textImageOptionsCallback)
                          ? void 0
                          : i.call(this, t),
                      };
                this._textImageCache.set(
                  c,
                  ((t, e, r) => {
                    const {
                        fontFamily: i,
                        fontStyle: o,
                        fontWeight: n,
                        fontSize: a,
                        color: s,
                        backgroundColor: l,
                        scale: c,
                        padding: u,
                        textAlign: d,
                      } = h(h({}, qt), r),
                      p = document.createElement("canvas"),
                      f = p.getContext("2d");
                    f.font = `${o} normal ${n} ${a}px ${i}`;
                    const m = f.measureText(t),
                      g = m.actualBoundingBoxRight + m.actualBoundingBoxLeft,
                      x = m.fontBoundingBoxDescent + m.fontBoundingBoxAscent,
                      b = e(g * c / x + u * c * 2),
                      v = b * x,
                      y = u * c * x,
                      R = "left" === d
                        ? m.actualBoundingBoxLeft + y
                        : "right" === d
                        ? v - y
                        : v / 2;
                    return p.width = v,
                      p.height = x,
                      f.fillStyle = l,
                      f.fillRect(0, 0, v, x),
                      f.font = `${o} normal ${n} ${a * c}px ${i}`,
                      f.textAlign = d,
                      f.fillStyle = s,
                      f.fillText(t, R, m.fontBoundingBoxAscent),
                      { image: p.toDataURL("image/png"), em: b };
                  })(
                    d,
                    u,
                    h({
                      fontFamily: null == (n = this._inheritedStyle)
                        ? void 0
                        : n.fontFamily,
                      fontWeight: null == (a = this._inheritedStyle)
                        ? void 0
                        : a.fontWeight,
                      fontStyle: null == (s = this._inheritedStyle)
                        ? void 0
                        : s.fontStyle,
                      color: null == (l = this._inheritedStyle)
                        ? void 0
                        : l.color,
                    }, p),
                  ),
                );
              }
              return this._textImageCache.get(c);
            }
            insertValue(t) {
              if (!this._inputEl) return [];
              const e = this._rawValue.substring(
                  0,
                  this._inputEl.selectionStart,
                ),
                r = this._rawValue.substring(this._inputEl.selectionEnd),
                i = this._rawValue.substring(
                  this._inputEl.selectionStart,
                  this._inputEl.selectionEnd,
                ),
                o = this._getValueLength(this._getValueFrom(i)),
                n = h({}, this._getCountByType(r, this._getCountByType(e))),
                a = t.map((t) => {
                  var e;
                  if (!Rt(t)) return t;
                  const r = t, i = null == r ? void 0 : r.type;
                  if (
                    "undefined" == typeof i ||
                    "undefined" == typeof this.maxBlockCounts[i]
                  ) return r;
                  const o = (null != (e = n[i]) ? e : 0) + 1;
                  return o <= this.maxBlockCounts[i]
                    ? (n[i] = o, r)
                    : r.altText;
                }),
                s = this._cutOfValue(a, o),
                l = this._getRawValueFrom(s);
              return this.dispatchEvent(new y("insertvalue", { detail: s })),
                document.execCommand("insertText", !1, l) ? s : [];
            }
          },
            e.HTMLTextAreaExElement.shadowRootOptions = ((t, e) => o(t, n(e)))(
              h({}, f.LitElement.shadowRootOptions),
              { delegatesFocus: !0 },
            ),
            e.HTMLTextAreaExElement.styles = f.unsafeCSS(
              '@charset "UTF-8";:host{display:block;position:relative;overflow:hidden;resize:vertical;border:1px solid ButtonBorder;line-height:normal}:host:not(:defined){display:none}:host .input,:host .cover{display:block;white-space:pre-wrap;overflow-wrap:break-word;line-break:anywhere;font:inherit;font-family:var(--webfont-family, var(--inherited-font-family, serif)),var(--inherited-font-family, serif);max-width:inherit;max-height:inherit;line-height:inherit;text-align:inherit;text-rendering:inherit;-webkit-text-size-adjust:100%;margin:0;border:0;outline:0;resize:none}:host .input{position:absolute;inset:0;padding:inherit;background:transparent;color:inherit}:host .input::placeholder{font:inherit}:host .input:disabled{color:#aaa}:host .cover{position:relative;padding:0;pointer-events:none;overflow:hidden;min-height:none;max-height:none;visibility:hidden;user-select:none}:host .cover:after{content:"\\200b"}:host .cover .block{display:inline;visibility:visible;overflow:hidden;background-size:contain;background-position:center;background-repeat:no-repeat}:host .input.has-scrollbar+.cover{overflow:hidden scroll}\n',
            ),
            Qt(
              [m.query("textarea.input")],
              e.HTMLTextAreaExElement.prototype,
              "_inputEl",
              2,
            ),
            Qt(
              [m.property({ type: Object })],
              e.HTMLTextAreaExElement.prototype,
              "inputEl",
              1,
            ),
            Qt(
              [m.property({ type: Object })],
              e.HTMLTextAreaExElement.prototype,
              "fontConfig",
              2,
            ),
            Qt(
              [m.property({ type: Object })],
              e.HTMLTextAreaExElement.prototype,
              "maxBlockCounts",
              2,
            ),
            Qt(
              [m.property({ type: Object })],
              e.HTMLTextAreaExElement.prototype,
              "imageSrcCallback",
              2,
            ),
            Qt(
              [m.property({ type: Object })],
              e.HTMLTextAreaExElement.prototype,
              "textImageOptionsCallback",
              2,
            ),
            Qt(
              [m.property({ type: Object })],
              e.HTMLTextAreaExElement.prototype,
              "textImageCallback",
              2,
            ),
            Qt(
              [m.property({ type: Object })],
              e.HTMLTextAreaExElement.prototype,
              "value",
              1,
            ),
            Qt(
              [m.property({ type: String })],
              e.HTMLTextAreaExElement.prototype,
              "rawValue",
              1,
            ),
            Qt(
              [m.property({ type: Number })],
              e.HTMLTextAreaExElement.prototype,
              "selectionStart",
              1,
            ),
            Qt(
              [m.property({ type: Number })],
              e.HTMLTextAreaExElement.prototype,
              "selectionEnd",
              1,
            ),
            Qt(
              [m.property({
                attribute: "placeholder",
                reflect: !0,
                type: String,
              })],
              e.HTMLTextAreaExElement.prototype,
              "placeholder",
              2,
            ),
            Qt(
              [m.property({
                attribute: "maxlength",
                reflect: !0,
                type: Number,
              })],
              e.HTMLTextAreaExElement.prototype,
              "maxLength",
              2,
            ),
            Qt(
              [m.property({
                attribute: "maxrawlength",
                reflect: !0,
                type: Number,
              })],
              e.HTMLTextAreaExElement.prototype,
              "maxRawLength",
              2,
            ),
            Qt(
              [m.property({
                attribute: "readonly",
                reflect: !0,
                type: Boolean,
              })],
              e.HTMLTextAreaExElement.prototype,
              "readOnly",
              2,
            ),
            Qt(
              [m.property({
                attribute: "disabled",
                reflect: !0,
                type: Boolean,
              })],
              e.HTMLTextAreaExElement.prototype,
              "disabled",
              2,
            ),
            Qt(
              [m.property({
                attribute: "required",
                reflect: !0,
                type: Boolean,
              })],
              e.HTMLTextAreaExElement.prototype,
              "required",
              2,
            ),
            Qt(
              [m.property({
                attribute: "spellcheck",
                reflect: !0,
                converter: {
                  fromAttribute: (t) => "false" !== t && "FALSE" !== t,
                  toAttribute: (t) => t,
                },
              })],
              e.HTMLTextAreaExElement.prototype,
              "spellCheck",
              2,
            ),
            Qt(
              [m.property({
                attribute: "autofocus",
                reflect: !0,
                type: Boolean,
              })],
              e.HTMLTextAreaExElement.prototype,
              "autoFocus",
              2,
            ),
            Qt([m.state()], e.HTMLTextAreaExElement.prototype, "_rawValue", 2),
            Qt(
              [m.state()],
              e.HTMLTextAreaExElement.prototype,
              "_webFontFamily",
              2,
            ),
            Qt(
              [m.state()],
              e.HTMLTextAreaExElement.prototype,
              "_transformStyle",
              2,
            ),
            Qt(
              [m.state()],
              e.HTMLTextAreaExElement.prototype,
              "_computedMaxLength",
              2,
            ),
            Qt(
              [m.state()],
              e.HTMLTextAreaExElement.prototype,
              "_hasScrollbar",
              2,
            ),
            Qt(
              [m.eventOptions({ passive: !0 })],
              e.HTMLTextAreaExElement.prototype,
              "_handleScroll",
              1,
            ),
            e.HTMLTextAreaExElement = Qt(
              [m.customElement("textarea-ex")],
              e.HTMLTextAreaExElement,
            ),
            globalThis.HTMLTextAreaExElement = e.HTMLTextAreaExElement,
            e.BLOCK_CHARACTER_REGEXP = yt,
            e.CLIPBOARD_CONTENT_TYPE = b,
            e.InputValueEvent = y,
            e.PRIVATE_CODE_RANGE = v,
            e.divideFromValue = (t, e) => {
              let r = "";
              const i = [];
              for (const o of t) {
                if (Rt(o)) {
                  const t = e(o, r.length);
                  i.push(t.replacedBlock), r += t.text;
                } else r += o;
              }
              return [r, i];
            },
            e.getDefaultExportFromCjs = function (t) {
              return t && t.__esModule &&
                  Object.prototype.hasOwnProperty.call(t, "default")
                ? t.default
                : t;
            },
            e.isBlock = Rt,
            e.isEmptyValue = (t) => t.every((t) => "" === t),
            e.isImageBlock = At,
            e.isTextBlock = Et,
            e.trimEndValue = wt,
            e.trimStartValue = _t,
            e.trimValue = (t) => _t(wt(t)),
            e.uniteToValue = ([t, e], r) => {
              const i = [], o = e.map(r).sort((t, e) => t.start - e.start);
              let n = 0;
              for (const s of o) {
                const e = t.substring(n, s.start);
                e && i.push(e), i.push(s.block), n += e.length + s.length;
              }
              const a = t.substring(n);
              return a && i.push(a), i;
            };
        },
        25156: (t, e, r) => {
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
          const i = r(18760);
          r(3135),
            r(86024),
            r(94538),
            e.BLOCK_CHARACTER_REGEXP = i.BLOCK_CHARACTER_REGEXP,
            e.CLIPBOARD_CONTENT_TYPE = i.CLIPBOARD_CONTENT_TYPE,
            Object.defineProperty(e, "HTMLTextAreaExElement", {
              enumerable: !0,
              get: () => i.HTMLTextAreaExElement,
            }),
            e.InputValueEvent = i.InputValueEvent,
            e.PRIVATE_CODE_RANGE = i.PRIVATE_CODE_RANGE,
            e.divideFromValue = i.divideFromValue,
            e.isBlock = i.isBlock,
            e.isEmptyValue = i.isEmptyValue,
            e.isImageBlock = i.isImageBlock,
            e.isTextBlock = i.isTextBlock,
            e.trimEndValue = i.trimEndValue,
            e.trimStartValue = i.trimStartValue,
            e.trimValue = i.trimValue,
            e.uniteToValue = i.uniteToValue;
        },
        48556: (t, e, r) => {
          var i;
          r.d(e, {
            Al: () => $,
            Jb: () => w,
            Ld: () => q,
            YP: () => _,
            dy: () => E,
            sY: () => N,
          });
          const o = window,
            n = o.trustedTypes,
            a = n
              ? n.createPolicy("lit-html", { createHTML: (t) => t })
              : void 0,
            s = `lit$${(Math.random() + "").slice(9)}$`,
            l = "?" + s,
            c = `<${l}>`,
            u = document,
            d = (t = "") => u.createComment(t),
            h = (t) =>
              null === t || "object" != typeof t && "function" != typeof t,
            p = Array.isArray,
            f = (t) => p(t) ||
              "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
            m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
            g = /-->/g,
            x = />/g,
            b = RegExp(
              ">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
              "g",
            ),
            v = /'/g,
            y = /"/g,
            R = /^(?:script|style|textarea|title)$/i,
            A = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }),
            E = A(1),
            _ = A(2),
            w = Symbol.for("lit-noChange"),
            q = Symbol.for("lit-nothing"),
            U = new WeakMap(),
            L = u.createTreeWalker(u, 129, null, !1),
            F = (t, e) => {
              const r = t.length - 1, i = [];
              let o, n = 2 === e ? "<svg>" : "", l = m;
              for (let a = 0; a < r; a++) {
                const e = t[a];
                let r, u, d = -1, h = 0;
                for (
                  ;
                  h < e.length && (l.lastIndex = h, u = l.exec(e), null !== u);
                ) {
                  h = l.lastIndex,
                    l === m
                      ? "!--" === u[1]
                        ? l = g
                        : void 0 !== u[1]
                        ? l = x
                        : void 0 !== u[2]
                        ? (R.test(u[2]) && (o = RegExp("</" + u[2], "g")),
                          l = b)
                        : void 0 !== u[3] && (l = b)
                      : l === b
                      ? ">" === u[0]
                        ? (l = null != o ? o : m, d = -1)
                        : void 0 === u[1]
                        ? d = -2
                        : (d = l.lastIndex - u[2].length,
                          r = u[1],
                          l = void 0 === u[3] ? b : '"' === u[3] ? y : v)
                      : l === y || l === v
                      ? l = b
                      : l === g || l === x
                      ? l = m
                      : (l = b, o = void 0);
                }
                const p = l === b && t[a + 1].startsWith("/>") ? " " : "";
                n += l === m
                  ? e + c
                  : d >= 0
                  ? (i.push(r), e.slice(0, d) + "$lit$" + e.slice(d) + s + p)
                  : e + s + (-2 === d ? (i.push(void 0), a) : p);
              }
              const u = n + (t[r] || "<?>") + (2 === e ? "</svg>" : "");
              if (!Array.isArray(t) || !t.hasOwnProperty("raw")) {
                throw Error("invalid template strings array");
              }
              return [void 0 !== a ? a.createHTML(u) : u, i];
            };
          class T {
            constructor({ strings: t, _$litType$: e }, r) {
              let i;
              this.parts = [];
              let o = 0, a = 0;
              const c = t.length - 1, u = this.parts, [h, p] = F(t, e);
              if (
                this.el = T.createElement(h, r),
                  L.currentNode = this.el.content,
                  2 === e
              ) {
                const t = this.el.content, e = t.firstChild;
                e.remove(), t.append(...e.childNodes);
              }
              for (; null !== (i = L.nextNode()) && u.length < c;) {
                if (1 === i.nodeType) {
                  if (i.hasAttributes()) {
                    const t = [];
                    for (const e of i.getAttributeNames()) {
                      if (e.endsWith("$lit$") || e.startsWith(s)) {
                        const r = p[a++];
                        if (t.push(e), void 0 !== r) {
                          const t = i.getAttribute(r.toLowerCase() + "$lit$")
                              .split(s),
                            e = /([.?@])?(.*)/.exec(r);
                          u.push({
                            type: 1,
                            index: o,
                            name: e[2],
                            strings: t,
                            ctor: "." === e[1]
                              ? V
                              : "?" === e[1]
                              ? D
                              : "@" === e[1]
                              ? j
                              : H,
                          });
                        } else u.push({ type: 6, index: o });
                      }
                    }
                    for (const e of t) i.removeAttribute(e);
                  }
                  if (R.test(i.tagName)) {
                    const t = i.textContent.split(s), e = t.length - 1;
                    if (e > 0) {
                      i.textContent = n ? n.emptyScript : "";
                      for (let r = 0; r < e; r++) {
                        i.append(t[r], d()),
                          L.nextNode(),
                          u.push({ type: 2, index: ++o });
                      }
                      i.append(t[e], d());
                    }
                  }
                } else if (8 === i.nodeType) {
                  if (i.data === l) u.push({ type: 2, index: o });
                  else {
                    let t = -1;
                    for (; -1 !== (t = i.data.indexOf(s, t + 1));) {
                      u.push({ type: 7, index: o }), t += s.length - 1;
                    }
                  }
                }
                o++;
              }
            }
            static createElement(t, e) {
              const r = u.createElement("template");
              return r.innerHTML = t, r;
            }
          }
          function S(t, e, r = t, i) {
            var o, n, a, s;
            if (e === w) return e;
            let l = void 0 !== i
              ? null === (o = r._$Co) || void 0 === o ? void 0 : o[i]
              : r._$Cl;
            const c = h(e) ? void 0 : e._$litDirective$;
            return (null == l ? void 0 : l.constructor) !== c &&
              (null === (n = null == l ? void 0 : l._$AO) || void 0 === n ||
                n.call(l, !1),
                void 0 === c ? l = void 0 : (l = new c(t), l._$AT(t, r, i)),
                void 0 !== i
                  ? (null !== (a = (s = r)._$Co) && void 0 !== a
                    ? a
                    : s._$Co = [])[i] = l
                  : r._$Cl = l),
              void 0 !== l && (e = S(t, l._$AS(t, e.values), l, i)),
              e;
          }
          class O {
            constructor(t, e) {
              this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
            }
            get parentNode() {
              return this._$AM.parentNode;
            }
            get _$AU() {
              return this._$AM._$AU;
            }
            v(t) {
              var e;
              const { el: { content: r }, parts: i } = this._$AD,
                o = (null !== (e = null == t ? void 0 : t.creationScope) &&
                    void 0 !== e
                  ? e
                  : u).importNode(r, !0);
              L.currentNode = o;
              let n = L.nextNode(), a = 0, s = 0, l = i[0];
              for (; void 0 !== l;) {
                if (a === l.index) {
                  let e;
                  2 === l.type
                    ? e = new C(n, n.nextSibling, this, t)
                    : 1 === l.type
                    ? e = new l.ctor(n, l.name, l.strings, this, t)
                    : 6 === l.type && (e = new k(n, this, t)),
                    this.u.push(e),
                    l = i[++s];
                }
                a !== (null == l ? void 0 : l.index) && (n = L.nextNode(), a++);
              }
              return o;
            }
            p(t) {
              let e = 0;
              for (const r of this.u) {
                void 0 !== r &&
                (void 0 !== r.strings
                  ? (r._$AI(t, r, e), e += r.strings.length - 2)
                  : r._$AI(t[e])), e++;
              }
            }
          }
          class C {
            constructor(t, e, r, i) {
              var o;
              this.type = 2,
                this._$AH = q,
                this._$AN = void 0,
                this._$AA = t,
                this._$AB = e,
                this._$AM = r,
                this.options = i,
                this._$Cm = null === (o = null == i ? void 0 : i.isConnected) ||
                  void 0 === o || o;
            }
            get _$AU() {
              var t, e;
              return null !==
                    (e = null === (t = this._$AM) || void 0 === t
                      ? void 0
                      : t._$AU) && void 0 !== e
                ? e
                : this._$Cm;
            }
            get parentNode() {
              let t = this._$AA.parentNode;
              const e = this._$AM;
              return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
            }
            get startNode() {
              return this._$AA;
            }
            get endNode() {
              return this._$AB;
            }
            _$AI(t, e = this) {
              t = S(this, t, e),
                h(t)
                  ? t === q || null == t || "" === t
                    ? (this._$AH !== q && this._$AR(), this._$AH = q)
                    : t !== this._$AH && t !== w && this.g(t)
                  : void 0 !== t._$litType$
                  ? this.$(t)
                  : void 0 !== t.nodeType
                  ? this.T(t)
                  : f(t)
                  ? this.k(t)
                  : this.g(t);
            }
            O(t, e = this._$AB) {
              return this._$AA.parentNode.insertBefore(t, e);
            }
            T(t) {
              this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
            }
            g(t) {
              this._$AH !== q && h(this._$AH)
                ? this._$AA.nextSibling.data = t
                : this.T(u.createTextNode(t)), this._$AH = t;
            }
            $(t) {
              var e;
              const { values: r, _$litType$: i } = t,
                o = "number" == typeof i ? this._$AC(t) : (void 0 === i.el &&
                  (i.el = T.createElement(i.h, this.options)),
                  i);
              if (
                (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) ===
                  o
              ) this._$AH.p(r);
              else {
                const t = new O(o, this), e = t.v(this.options);
                t.p(r), this.T(e), this._$AH = t;
              }
            }
            _$AC(t) {
              let e = U.get(t.strings);
              return void 0 === e && U.set(t.strings, e = new T(t)), e;
            }
            k(t) {
              p(this._$AH) || (this._$AH = [], this._$AR());
              const e = this._$AH;
              let r, i = 0;
              for (const o of t) {
                i === e.length
                  ? e.push(
                    r = new C(this.O(d()), this.O(d()), this, this.options),
                  )
                  : r = e[i],
                  r._$AI(o),
                  i++;
              }
              i < e.length &&
                (this._$AR(r && r._$AB.nextSibling, i), e.length = i);
            }
            _$AR(t = this._$AA.nextSibling, e) {
              var r;
              for (
                null === (r = this._$AP) || void 0 === r ||
                r.call(this, !1, !0, e);
                t && t !== this._$AB;
              ) {
                const e = t.nextSibling;
                t.remove(), t = e;
              }
            }
            setConnected(t) {
              var e;
              void 0 === this._$AM &&
                (this._$Cm = t,
                  null === (e = this._$AP) || void 0 === e || e.call(this, t));
            }
          }
          class H {
            constructor(t, e, r, i, o) {
              this.type = 1,
                this._$AH = q,
                this._$AN = void 0,
                this.element = t,
                this.name = e,
                this._$AM = i,
                this.options = o,
                r.length > 2 || "" !== r[0] || "" !== r[1]
                  ? (this._$AH = Array(r.length - 1).fill(new String()),
                    this.strings = r)
                  : this._$AH = q;
            }
            get tagName() {
              return this.element.tagName;
            }
            get _$AU() {
              return this._$AM._$AU;
            }
            _$AI(t, e = this, r, i) {
              const o = this.strings;
              let n = !1;
              if (void 0 === o) {
                t = S(this, t, e, 0),
                  n = !h(t) || t !== this._$AH && t !== w,
                  n && (this._$AH = t);
              } else {
                const i = t;
                let a, s;
                for (t = o[0], a = 0; a < o.length - 1; a++) {
                  s = S(this, i[r + a], e, a),
                    s === w && (s = this._$AH[a]),
                    n || (n = !h(s) || s !== this._$AH[a]),
                    s === q
                      ? t = q
                      : t !== q && (t += (null != s ? s : "") + o[a + 1]),
                    this._$AH[a] = s;
                }
              }
              n && !i && this.j(t);
            }
            j(t) {
              t === q
                ? this.element.removeAttribute(this.name)
                : this.element.setAttribute(this.name, null != t ? t : "");
            }
          }
          class V extends H {
            constructor() {
              super(...arguments), this.type = 3;
            }
            j(t) {
              this.element[this.name] = t === q ? void 0 : t;
            }
          }
          const P = n ? n.emptyScript : "";
          class D extends H {
            constructor() {
              super(...arguments), this.type = 4;
            }
            j(t) {
              t && t !== q
                ? this.element.setAttribute(this.name, P)
                : this.element.removeAttribute(this.name);
            }
          }
          class j extends H {
            constructor(t, e, r, i, o) {
              super(t, e, r, i, o), this.type = 5;
            }
            _$AI(t, e = this) {
              var r;
              if (
                (t = null !== (r = S(this, t, e, 0)) && void 0 !== r
                  ? r
                  : q) === w
              ) return;
              const i = this._$AH,
                o = t === q && i !== q || t.capture !== i.capture ||
                  t.once !== i.once || t.passive !== i.passive,
                n = t !== q && (i === q || o);
              o && this.element.removeEventListener(this.name, this, i),
                n && this.element.addEventListener(this.name, this, t),
                this._$AH = t;
            }
            handleEvent(t) {
              var e, r;
              "function" == typeof this._$AH
                ? this._$AH.call(
                  null !== (r = null === (e = this.options) || void 0 === e
                        ? void 0
                        : e.host) && void 0 !== r
                    ? r
                    : this.element,
                  t,
                )
                : this._$AH.handleEvent(t);
            }
          }
          class k {
            constructor(t, e, r) {
              this.element = t,
                this.type = 6,
                this._$AN = void 0,
                this._$AM = e,
                this.options = r;
            }
            get _$AU() {
              return this._$AM._$AU;
            }
            _$AI(t) {
              S(this, t);
            }
          }
          const $ = {
              P: "$lit$",
              A: s,
              M: l,
              C: 1,
              L: F,
              R: O,
              D: f,
              V: S,
              I: C,
              H: H,
              N: D,
              U: j,
              B: V,
              F: k,
            },
            z = o.litHtmlPolyfillSupport;
          null == z || z(T, C),
            (null !== (i = o.litHtmlVersions) && void 0 !== i
              ? i
              : o.litHtmlVersions = []).push("2.6.1");
          const N = (t, e, r) => {
            var i, o;
            const n =
              null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i
                ? i
                : e;
            let a = n._$litPart$;
            if (void 0 === a) {
              const t = null !== (o = null == r ? void 0 : r.renderBefore) &&
                  void 0 !== o
                ? o
                : null;
              n._$litPart$ = a = new C(
                e.insertBefore(d(), t),
                t,
                void 0,
                null != r ? r : {},
              );
            }
            return a._$AI(t), a;
          };
        },
        86024: (t, e, r) => {
          r.r(e),
            r.d(e, {
              customElement: () => i,
              eventOptions: () => l,
              property: () => n,
              query: () => c,
              queryAll: () => u,
              queryAssignedElements: () => f,
              queryAssignedNodes: () => m,
              queryAsync: () => d,
              state: () => a,
            });
          const i = (t) => (e) => "function" == typeof e
              ? ((t, e) => (customElements.define(t, e), e))(t, e)
              : ((t, e) => {
                const { kind: r, elements: i } = e;
                return {
                  kind: r,
                  elements: i,
                  finisher(e) {
                    customElements.define(t, e);
                  },
                };
              })(t, e),
            o = (t, e) =>
              "method" === e.kind && e.descriptor && !("value" in e.descriptor)
                ? {
                  ...e,
                  finisher(r) {
                    r.createProperty(e.key, t);
                  },
                }
                : {
                  kind: "field",
                  key: Symbol(),
                  placement: "own",
                  descriptor: {},
                  originalKey: e.key,
                  initializer() {
                    "function" == typeof e.initializer &&
                      (this[e.key] = e.initializer.call(this));
                  },
                  finisher(r) {
                    r.createProperty(e.key, t);
                  },
                };
          function n(t) {
            return (e, r) => void 0 !== r
              ? ((t, e, r) => {
                e.constructor.createProperty(r, t);
              })(t, e, r)
              : o(t, e);
          }
          function a(t) {
            return n({ ...t, state: !0 });
          }
          const s = ({ finisher: t, descriptor: e }) => (r, i) => {
            var o;
            if (void 0 === i) {
              const i = null !== (o = r.originalKey) && void 0 !== o
                  ? o
                  : r.key,
                n = null != e
                  ? {
                    kind: "method",
                    placement: "prototype",
                    key: i,
                    descriptor: e(r.key),
                  }
                  : { ...r, key: i };
              return null != t && (n.finisher = function (e) {
                t(e, i);
              }),
                n;
            }
            {
              const o = r.constructor;
              void 0 !== e && Object.defineProperty(r, i, e(i)),
                null == t || t(o, i);
            }
          };
          function l(t) {
            return s({
              finisher: (e, r) => {
                Object.assign(e.prototype[r], t);
              },
            });
          }
          function c(t, e) {
            return s({
              descriptor: (r) => {
                const i = {
                  get() {
                    var e, r;
                    return null !==
                          (r = null === (e = this.renderRoot) || void 0 === e
                            ? void 0
                            : e.querySelector(t)) && void 0 !== r
                      ? r
                      : null;
                  },
                  enumerable: !0,
                  configurable: !0,
                };
                if (e) {
                  const e = "symbol" == typeof r ? Symbol() : "__" + r;
                  i.get = function () {
                    var r, i;
                    return void 0 === this[e] &&
                      (this[e] = null !==
                            (i = null === (r = this.renderRoot) || void 0 === r
                              ? void 0
                              : r.querySelector(t)) && void 0 !== i
                        ? i
                        : null),
                      this[e];
                  };
                }
                return i;
              },
            });
          }
          function u(t) {
            return s({
              descriptor: (e) => ({
                get() {
                  var e, r;
                  return null !==
                        (r = null === (e = this.renderRoot) || void 0 === e
                          ? void 0
                          : e.querySelectorAll(t)) && void 0 !== r
                    ? r
                    : [];
                },
                enumerable: !0,
                configurable: !0,
              }),
            });
          }
          function d(t) {
            return s({
              descriptor: (e) => ({
                async get() {
                  var e;
                  return await this.updateComplete,
                    null === (e = this.renderRoot) || void 0 === e
                      ? void 0
                      : e.querySelector(t);
                },
                enumerable: !0,
                configurable: !0,
              }),
            });
          }
          var h;
          const p = null !=
              (null === (h = window.HTMLSlotElement) || void 0 === h
                ? void 0
                : h.prototype.assignedElements)
            ? (t, e) => t.assignedElements(e)
            : (t, e) => t.assignedNodes(e).filter(
              (t) => t.nodeType === Node.ELEMENT_NODE,
            );
          function f(t) {
            const { slot: e, selector: r } = null != t ? t : {};
            return s({
              descriptor: (i) => ({
                get() {
                  var i;
                  const o = "slot" + (e ? `[name=${e}]` : ":not([name])"),
                    n = null === (i = this.renderRoot) || void 0 === i
                      ? void 0
                      : i.querySelector(o),
                    a = null != n ? p(n, t) : [];
                  return r ? a.filter((t) => t.matches(r)) : a;
                },
                enumerable: !0,
                configurable: !0,
              }),
            });
          }
          function m(t, e, r) {
            let i, o = t;
            return "object" == typeof t
              ? (o = t.slot, i = t)
              : i = { flatten: e },
              r ? f({ slot: o, flatten: e, selector: r }) : s({
                descriptor: (t) => ({
                  get() {
                    var t, e;
                    const r = "slot" + (o ? `[name=${o}]` : ":not([name])"),
                      n = null === (t = this.renderRoot) || void 0 === t
                        ? void 0
                        : t.querySelector(r);
                    return null !==
                          (e = null == n ? void 0 : n.assignedNodes(i)) &&
                        void 0 !== e
                      ? e
                      : [];
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
              });
          }
        },
        94538: (t, e, r) => {
          r.r(e), r.d(e, { styleMap: () => a });
          var i = r(48556);
          const o = 1;
          class n {
            constructor(t) {}
            get _$AU() {
              return this._$AM._$AU;
            }
            _$AT(t, e, r) {
              this._$Ct = t, this._$AM = e, this._$Ci = r;
            }
            _$AS(t, e) {
              return this.update(t, e);
            }
            update(t, e) {
              return this.render(...e);
            }
          }
          const a = (s = class extends n {
            constructor(t) {
              var e;
              if (
                super(t),
                  t.type !== o || "style" !== t.name ||
                  (null === (e = t.strings) || void 0 === e
                      ? void 0
                      : e.length) > 2
              ) {
                throw Error(
                  "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.",
                );
              }
            }
            render(t) {
              return Object.keys(t).reduce((e, r) => {
                const i = t[r];
                return null == i ? e : e +
                  `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                    .toLowerCase()}:${i};`;
              }, "");
            }
            update(t, [e]) {
              const { style: r } = t.element;
              if (void 0 === this.vt) {
                this.vt = new Set();
                for (const t in e) this.vt.add(t);
                return this.render(e);
              }
              this.vt.forEach((t) => {
                null == e[t] &&
                  (this.vt.delete(t),
                    t.includes("-") ? r.removeProperty(t) : r[t] = "");
              });
              for (const i in e) {
                const t = e[i];
                null != t &&
                  (this.vt.add(i),
                    i.includes("-") ? r.setProperty(i, t) : r[i] = t);
              }
              return i.Jb;
            }
          },
            (...t) => ({ _$litDirective$: s, values: t }));
          var s;
        },
        3135: (t, e, r) => {
          r.r(e),
            r.d(e, {
              CSSResult: () => s,
              LitElement: () => w,
              ReactiveElement: () => y,
              UpdatingElement: () => _,
              _$LE: () => U,
              _$LH: () => E.Al,
              adoptStyles: () => u,
              css: () => c,
              defaultConverter: () => x,
              getCompatibleStyle: () => d,
              html: () => E.dy,
              isServer: () => L,
              noChange: () => E.Jb,
              notEqual: () => b,
              nothing: () => E.Ld,
              render: () => E.sY,
              supportsAdoptingStyleSheets: () => o,
              svg: () => E.YP,
              unsafeCSS: () => l,
            });
          const i = window,
            o = i.ShadowRoot &&
              (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) &&
              "adoptedStyleSheets" in Document.prototype &&
              "replace" in CSSStyleSheet.prototype,
            n = Symbol(),
            a = new WeakMap();
          class s {
            constructor(t, e, r) {
              if (this._$cssResult$ = !0, r !== n) {
                throw Error(
                  "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
                );
              }
              this.cssText = t, this.t = e;
            }
            get styleSheet() {
              let t = this.o;
              const e = this.t;
              if (o && void 0 === t) {
                const r = void 0 !== e && 1 === e.length;
                r && (t = a.get(e)),
                  void 0 === t &&
                  ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
                    r && a.set(e, t));
              }
              return t;
            }
            toString() {
              return this.cssText;
            }
          }
          const l = (t) => new s("string" == typeof t ? t : t + "", void 0, n),
            c = (t, ...e) => {
              const r = 1 === t.length
                ? t[0]
                : e.reduce((e, r, i) =>
                  e + ((t) => {
                    if (!0 === t._$cssResult$) return t.cssText;
                    if ("number" == typeof t) return t;
                    throw Error(
                      "Value passed to 'css' function must be a 'css' function result: " +
                        t +
                        ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.",
                    );
                  })(r) + t[i + 1], t[0]);
              return new s(r, t, n);
            },
            u = (t, e) => {
              o
                ? t.adoptedStyleSheets = e.map(
                  (t) => t instanceof CSSStyleSheet ? t : t.styleSheet,
                )
                : e.forEach((e) => {
                  const r = document.createElement("style"), o = i.litNonce;
                  void 0 !== o && r.setAttribute("nonce", o),
                    r.textContent = e.cssText,
                    t.appendChild(r);
                });
            },
            d = o ? (t) => t : (t) => t instanceof CSSStyleSheet
              ? ((t) => {
                let e = "";
                for (const r of t.cssRules) e += r.cssText;
                return l(e);
              })(t)
              : t;
          var h;
          const p = window,
            f = p.trustedTypes,
            m = f ? f.emptyScript : "",
            g = p.reactiveElementPolyfillSupport,
            x = {
              toAttribute(t, e) {
                switch (e) {
                  case Boolean:
                    t = t ? m : null;
                    break;
                  case Object:
                  case Array:
                    t = null == t ? t : JSON.stringify(t);
                }
                return t;
              },
              fromAttribute(t, e) {
                let r = t;
                switch (e) {
                  case Boolean:
                    r = null !== t;
                    break;
                  case Number:
                    r = null === t ? null : Number(t);
                    break;
                  case Object:
                  case Array:
                    try {
                      r = JSON.parse(t);
                    } catch (t) {
                      r = null;
                    }
                }
                return r;
              },
            },
            b = (t, e) => e !== t && (e == e || t == t),
            v = {
              attribute: !0,
              type: String,
              converter: x,
              reflect: !1,
              hasChanged: b,
            };
          class y extends HTMLElement {
            constructor() {
              super(),
                this._$Ei = new Map(),
                this.isUpdatePending = !1,
                this.hasUpdated = !1,
                this._$El = null,
                this.u();
            }
            static addInitializer(t) {
              var e;
              this.finalize(),
                (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(
                  t,
                );
            }
            static get observedAttributes() {
              this.finalize();
              const t = [];
              return this.elementProperties.forEach((e, r) => {
                const i = this._$Ep(r, e);
                void 0 !== i && (this._$Ev.set(i, r), t.push(i));
              }),
                t;
            }
            static createProperty(t, e = v) {
              if (
                e.state && (e.attribute = !1),
                  this.finalize(),
                  this.elementProperties.set(t, e),
                  !e.noAccessor && !this.prototype.hasOwnProperty(t)
              ) {
                const r = "symbol" == typeof t ? Symbol() : "__" + t,
                  i = this.getPropertyDescriptor(t, r, e);
                void 0 !== i && Object.defineProperty(this.prototype, t, i);
              }
            }
            static getPropertyDescriptor(t, e, r) {
              return {
                get() {
                  return this[e];
                },
                set(i) {
                  const o = this[t];
                  this[e] = i, this.requestUpdate(t, o, r);
                },
                configurable: !0,
                enumerable: !0,
              };
            }
            static getPropertyOptions(t) {
              return this.elementProperties.get(t) || v;
            }
            static finalize() {
              if (this.hasOwnProperty("finalized")) return !1;
              this.finalized = !0;
              const t = Object.getPrototypeOf(this);
              if (
                t.finalize(),
                  void 0 !== t.h && (this.h = [...t.h]),
                  this.elementProperties = new Map(t.elementProperties),
                  this._$Ev = new Map(),
                  this.hasOwnProperty("properties")
              ) {
                const t = this.properties,
                  e = [
                    ...Object.getOwnPropertyNames(t),
                    ...Object.getOwnPropertySymbols(t),
                  ];
                for (const r of e) this.createProperty(r, t[r]);
              }
              return this.elementStyles = this.finalizeStyles(this.styles), !0;
            }
            static finalizeStyles(t) {
              const e = [];
              if (Array.isArray(t)) {
                const r = new Set(t.flat(1 / 0).reverse());
                for (const t of r) e.unshift(d(t));
              } else void 0 !== t && e.push(d(t));
              return e;
            }
            static _$Ep(t, e) {
              const r = e.attribute;
              return !1 === r
                ? void 0
                : "string" == typeof r
                ? r
                : "string" == typeof t
                ? t.toLowerCase()
                : void 0;
            }
            u() {
              var t;
              this._$E_ = new Promise((t) => this.enableUpdating = t),
                this._$AL = new Map(),
                this._$Eg(),
                this.requestUpdate(),
                null === (t = this.constructor.h) || void 0 === t ||
                t.forEach((t) => t(this));
            }
            addController(t) {
              var e, r;
              (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = [])
                .push(t),
                void 0 !== this.renderRoot && this.isConnected &&
                (null === (r = t.hostConnected) || void 0 === r || r.call(t));
            }
            removeController(t) {
              var e;
              null === (e = this._$ES) || void 0 === e ||
                e.splice(this._$ES.indexOf(t) >>> 0, 1);
            }
            _$Eg() {
              this.constructor.elementProperties.forEach((t, e) => {
                this.hasOwnProperty(e) &&
                  (this._$Ei.set(e, this[e]), delete this[e]);
              });
            }
            createRenderRoot() {
              var t;
              const e = null !== (t = this.shadowRoot) && void 0 !== t
                ? t
                : this.attachShadow(this.constructor.shadowRootOptions);
              return u(e, this.constructor.elementStyles), e;
            }
            connectedCallback() {
              var t;
              void 0 === this.renderRoot &&
              (this.renderRoot = this.createRenderRoot()),
                this.enableUpdating(!0),
                null === (t = this._$ES) || void 0 === t || t.forEach((t) => {
                  var e;
                  return null === (e = t.hostConnected) || void 0 === e
                    ? void 0
                    : e.call(t);
                });
            }
            enableUpdating(t) {}
            disconnectedCallback() {
              var t;
              null === (t = this._$ES) || void 0 === t || t.forEach((t) => {
                var e;
                return null === (e = t.hostDisconnected) || void 0 === e
                  ? void 0
                  : e.call(t);
              });
            }
            attributeChangedCallback(t, e, r) {
              this._$AK(t, r);
            }
            _$EO(t, e, r = v) {
              var i;
              const o = this.constructor._$Ep(t, r);
              if (void 0 !== o && !0 === r.reflect) {
                const n =
                  (void 0 !== (null === (i = r.converter) || void 0 === i
                      ? void 0
                      : i.toAttribute)
                    ? r.converter
                    : x).toAttribute(e, r.type);
                this._$El = t,
                  null == n ? this.removeAttribute(o) : this.setAttribute(o, n),
                  this._$El = null;
              }
            }
            _$AK(t, e) {
              var r;
              const i = this.constructor, o = i._$Ev.get(t);
              if (void 0 !== o && this._$El !== o) {
                const t = i.getPropertyOptions(o),
                  n = "function" == typeof t.converter
                    ? { fromAttribute: t.converter }
                    : void 0 !==
                        (null === (r = t.converter) || void 0 === r
                          ? void 0
                          : r.fromAttribute)
                    ? t.converter
                    : x;
                this._$El = o,
                  this[o] = n.fromAttribute(e, t.type),
                  this._$El = null;
              }
            }
            requestUpdate(t, e, r) {
              let i = !0;
              void 0 !== t &&
              (((r = r || this.constructor.getPropertyOptions(t)).hasChanged ||
                  b)(this[t], e)
                ? (this._$AL.has(t) || this._$AL.set(t, e),
                  !0 === r.reflect && this._$El !== t &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                    this._$EC.set(t, r)))
                : i = !1),
                !this.isUpdatePending && i && (this._$E_ = this._$Ej());
            }
            async _$Ej() {
              this.isUpdatePending = !0;
              try {
                await this._$E_;
              } catch (t) {
                Promise.reject(t);
              }
              const t = this.scheduleUpdate();
              return null != t && await t, !this.isUpdatePending;
            }
            scheduleUpdate() {
              return this.performUpdate();
            }
            performUpdate() {
              var t;
              if (!this.isUpdatePending) return;
              this.hasUpdated,
                this._$Ei &&
                (this._$Ei.forEach((t, e) => this[e] = t), this._$Ei = void 0);
              let e = !1;
              const r = this._$AL;
              try {
                e = this.shouldUpdate(r),
                  e
                    ? (this.willUpdate(r),
                      null === (t = this._$ES) || void 0 === t ||
                      t.forEach((t) => {
                        var e;
                        return null === (e = t.hostUpdate) || void 0 === e
                          ? void 0
                          : e.call(t);
                      }),
                      this.update(r))
                    : this._$Ek();
              } catch (t) {
                throw e = !1, this._$Ek(), t;
              }
              e && this._$AE(r);
            }
            willUpdate(t) {}
            _$AE(t) {
              var e;
              null === (e = this._$ES) || void 0 === e || e.forEach((t) => {
                var e;
                return null === (e = t.hostUpdated) || void 0 === e
                  ? void 0
                  : e.call(t);
              }),
                this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)),
                this.updated(t);
            }
            _$Ek() {
              this._$AL = new Map(), this.isUpdatePending = !1;
            }
            get updateComplete() {
              return this.getUpdateComplete();
            }
            getUpdateComplete() {
              return this._$E_;
            }
            shouldUpdate(t) {
              return !0;
            }
            update(t) {
              void 0 !== this._$EC &&
              (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
                this._$EC = void 0), this._$Ek();
            }
            updated(t) {}
            firstUpdated(t) {}
          }
          y.finalized = !0,
            y.elementProperties = new Map(),
            y.elementStyles = [],
            y.shadowRootOptions = { mode: "open" },
            null == g || g({ ReactiveElement: y }),
            (null !== (h = p.reactiveElementVersions) && void 0 !== h
              ? h
              : p.reactiveElementVersions = []).push("1.6.1");
          var R, A, E = r(48556);
          const _ = y;
          class w extends y {
            constructor() {
              super(...arguments),
                this.renderOptions = { host: this },
                this._$Do = void 0;
            }
            createRenderRoot() {
              var t, e;
              const r = super.createRenderRoot();
              return null !== (t = (e = this.renderOptions).renderBefore) &&
                  void 0 !== t || (e.renderBefore = r.firstChild),
                r;
            }
            update(t) {
              const e = this.render();
              this.hasUpdated ||
              (this.renderOptions.isConnected = this.isConnected),
                super.update(t),
                this._$Do = (0, E.sY)(e, this.renderRoot, this.renderOptions);
            }
            connectedCallback() {
              var t;
              super.connectedCallback(),
                null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
            }
            disconnectedCallback() {
              var t;
              super.disconnectedCallback(),
                null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
            }
            render() {
              return E.Jb;
            }
          }
          w.finalized = !0,
            w._$litElement$ = !0,
            null === (R = globalThis.litElementHydrateSupport) ||
            void 0 === R || R.call(globalThis, { LitElement: w });
          const q = globalThis.litElementPolyfillSupport;
          null == q || q({ LitElement: w });
          const U = {
            _$AK: (t, e, r) => {
              t._$AK(e, r);
            },
            _$AL: (t) => t._$AL,
          };
          (null !== (A = globalThis.litElementVersions) && void 0 !== A
            ? A
            : globalThis.litElementVersions = []).push("3.2.2");
          const L = !1;
        },
      },
      e = {};
    function r(i) {
      var o = e[i];
      if (void 0 !== o) return o.exports;
      var n = e[i] = { exports: {} };
      return t[i](n, n.exports, r), n.exports;
    }
    r.d = (t, e) => {
      for (var i in e) {
        r.o(e, i) && !r.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      }
    },
      r.g = function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      }(),
      r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r.r = (t) => {
        "undefined" !== typeof Symbol && Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
      (() => {
        const t = globalThis,
          e = t.ShadowRoot &&
            (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) &&
            "adoptedStyleSheets" in Document.prototype &&
            "replace" in CSSStyleSheet.prototype,
          i = Symbol(),
          o = new WeakMap();
        const n = (t) =>
            new class {
              constructor(t, e, r) {
                if (this._$cssResult$ = !0, r !== i) {
                  throw Error(
                    "CSSResult is not constructable. Use `unsafeCSS` or `css` instead.",
                  );
                }
                this.cssText = t, this.t = e;
              }
              get styleSheet() {
                let t = this.o;
                const r = this.t;
                if (e && void 0 === t) {
                  const e = void 0 !== r && 1 === r.length;
                  e && (t = o.get(r)),
                    void 0 === t &&
                    ((this.o = t = new CSSStyleSheet()).replaceSync(
                      this.cssText,
                    ),
                      e && o.set(r, t));
                }
                return t;
              }
              toString() {
                return this.cssText;
              }
            }("string" == typeof t ? t : t + "", void 0, i),
          a = e ? (t) => t : (t) =>
            t instanceof CSSStyleSheet
              ? ((t) => {
                let e = "";
                for (const r of t.cssRules) e += r.cssText;
                return n(e);
              })(t)
              : t,
          {
            is: s,
            defineProperty: l,
            getOwnPropertyDescriptor: c,
            getOwnPropertyNames: u,
            getOwnPropertySymbols: d,
            getPrototypeOf: h,
          } = Object,
          p = globalThis,
          f = p.trustedTypes,
          m = f ? f.emptyScript : "",
          g = p.reactiveElementPolyfillSupport,
          x = (t, e) => t,
          b = {
            toAttribute(t, e) {
              switch (e) {
                case Boolean:
                  t = t ? m : null;
                  break;
                case Object:
                case Array:
                  t = null == t ? t : JSON.stringify(t);
              }
              return t;
            },
            fromAttribute(t, e) {
              let r = t;
              switch (e) {
                case Boolean:
                  r = null !== t;
                  break;
                case Number:
                  r = null === t ? null : Number(t);
                  break;
                case Object:
                case Array:
                  try {
                    r = JSON.parse(t);
                  } catch {
                    r = null;
                  }
              }
              return r;
            },
          },
          v = (t, e) => !s(t, e),
          y = {
            attribute: !0,
            type: String,
            converter: b,
            reflect: !1,
            hasChanged: v,
          };
        Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")),
          p.litPropertyMetadata ?? (p.litPropertyMetadata = new WeakMap());
        class R extends HTMLElement {
          static addInitializer(t) {
            this._$Ei(), (this.l ?? (this.l = [])).push(t);
          }
          static get observedAttributes() {
            return this.finalize(), this._$Eh && [...this._$Eh.keys()];
          }
          static createProperty(t, e = y) {
            if (
              e.state && (e.attribute = !1),
                this._$Ei(),
                this.elementProperties.set(t, e),
                !e.noAccessor
            ) {
              const r = Symbol(), i = this.getPropertyDescriptor(t, r, e);
              void 0 !== i && l(this.prototype, t, i);
            }
          }
          static getPropertyDescriptor(t, e, r) {
            const { get: i, set: o } = c(this.prototype, t) ?? {
              get() {
                return this[e];
              },
              set(t) {
                this[e] = t;
              },
            };
            return {
              get() {
                return null == i ? void 0 : i.call(this);
              },
              set(e) {
                const n = null == i ? void 0 : i.call(this);
                o.call(this, e), this.requestUpdate(t, n, r);
              },
              configurable: !0,
              enumerable: !0,
            };
          }
          static getPropertyOptions(t) {
            return this.elementProperties.get(t) ?? y;
          }
          static _$Ei() {
            if (this.hasOwnProperty(x("elementProperties"))) return;
            const t = h(this);
            t.finalize(),
              void 0 !== t.l && (this.l = [...t.l]),
              this.elementProperties = new Map(t.elementProperties);
          }
          static finalize() {
            if (this.hasOwnProperty(x("finalized"))) return;
            if (
              this.finalized = !0,
                this._$Ei(),
                this.hasOwnProperty(x("properties"))
            ) {
              const t = this.properties, e = [...u(t), ...d(t)];
              for (const r of e) this.createProperty(r, t[r]);
            }
            const t = this[Symbol.metadata];
            if (null !== t) {
              const e = litPropertyMetadata.get(t);
              if (void 0 !== e) {
                for (const [t, r] of e) this.elementProperties.set(t, r);
              }
            }
            this._$Eh = new Map();
            for (const [e, r] of this.elementProperties) {
              const t = this._$Eu(e, r);
              void 0 !== t && this._$Eh.set(t, e);
            }
            this.elementStyles = this.finalizeStyles(this.styles);
          }
          static finalizeStyles(t) {
            const e = [];
            if (Array.isArray(t)) {
              const r = new Set(t.flat(1 / 0).reverse());
              for (const t of r) e.unshift(a(t));
            } else void 0 !== t && e.push(a(t));
            return e;
          }
          static _$Eu(t, e) {
            const r = e.attribute;
            return !1 === r
              ? void 0
              : "string" == typeof r
              ? r
              : "string" == typeof t
              ? t.toLowerCase()
              : void 0;
          }
          constructor() {
            super(),
              this._$Ep = void 0,
              this.isUpdatePending = !1,
              this.hasUpdated = !1,
              this._$Em = null,
              this._$Ev();
          }
          _$Ev() {
            var t;
            this._$Eg = new Promise((t) => this.enableUpdating = t),
              this._$AL = new Map(),
              this._$ES(),
              this.requestUpdate(),
              null == (t = this.constructor.l) || t.forEach((t) => t(this));
          }
          addController(t) {
            var e;
            (this._$E_ ?? (this._$E_ = new Set())).add(t),
              void 0 !== this.renderRoot && this.isConnected &&
              (null == (e = t.hostConnected) || e.call(t));
          }
          removeController(t) {
            var e;
            null == (e = this._$E_) || e.delete(t);
          }
          _$ES() {
            const t = new Map(), e = this.constructor.elementProperties;
            for (const r of e.keys()) {
              this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
            }
            t.size > 0 && (this._$Ep = t);
          }
          createRenderRoot() {
            const r = this.shadowRoot ??
              this.attachShadow(this.constructor.shadowRootOptions);
            return ((r, i) => {
              if (e) {
                r.adoptedStyleSheets = i.map(
                  (t) => t instanceof CSSStyleSheet ? t : t.styleSheet,
                );
              } else {for (const e of i) {
                  const i = document.createElement("style"), o = t.litNonce;
                  void 0 !== o && i.setAttribute("nonce", o),
                    i.textContent = e.cssText,
                    r.appendChild(i);
                }}
            })(r, this.constructor.elementStyles),
              r;
          }
          connectedCallback() {
            var t;
            this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
              this.enableUpdating(!0),
              null == (t = this._$E_) || t.forEach((t) => {
                var e;
                return null == (e = t.hostConnected) ? void 0 : e.call(t);
              });
          }
          enableUpdating(t) {}
          disconnectedCallback() {
            var t;
            null == (t = this._$E_) || t.forEach((t) => {
              var e;
              return null == (e = t.hostDisconnected) ? void 0 : e.call(t);
            });
          }
          attributeChangedCallback(t, e, r) {
            this._$AK(t, r);
          }
          _$EO(t, e) {
            var r;
            const i = this.constructor.elementProperties.get(t),
              o = this.constructor._$Eu(t, i);
            if (void 0 !== o && !0 === i.reflect) {
              const n =
                (void 0 !== (null == (r = i.converter) ? void 0 : r.toAttribute)
                  ? i.converter
                  : b).toAttribute(e, i.type);
              this._$Em = t,
                null == n ? this.removeAttribute(o) : this.setAttribute(o, n),
                this._$Em = null;
            }
          }
          _$AK(t, e) {
            var r;
            const i = this.constructor, o = i._$Eh.get(t);
            if (void 0 !== o && this._$Em !== o) {
              const t = i.getPropertyOptions(o),
                n = "function" == typeof t.converter
                  ? { fromAttribute: t.converter }
                  : void 0 !==
                      (null == (r = t.converter) ? void 0 : r.fromAttribute)
                  ? t.converter
                  : b;
              this._$Em = o,
                this[o] = n.fromAttribute(e, t.type),
                this._$Em = null;
            }
          }
          requestUpdate(t, e, r) {
            if (void 0 !== t) {
              if (
                r ?? (r = this.constructor.getPropertyOptions(t)),
                  !(r.hasChanged ?? v)(this[t], e)
              ) return;
              this.C(t, e, r);
            }
            !1 === this.isUpdatePending && (this._$Eg = this._$EP());
          }
          C(t, e, r) {
            this._$AL.has(t) || this._$AL.set(t, e),
              !0 === r.reflect && this._$Em !== t &&
              (this._$ET ?? (this._$ET = new Set())).add(t);
          }
          async _$EP() {
            this.isUpdatePending = !0;
            try {
              await this._$Eg;
            } catch (e) {
              Promise.reject(e);
            }
            const t = this.scheduleUpdate();
            return null != t && await t, !this.isUpdatePending;
          }
          scheduleUpdate() {
            return this.performUpdate();
          }
          performUpdate() {
            var t;
            if (!this.isUpdatePending) return;
            if (!this.hasUpdated) {
              if (
                this.renderRoot ?? (this.renderRoot = this.createRenderRoot()),
                  this._$Ep
              ) {
                for (const [t, e] of this._$Ep) this[t] = e;
                this._$Ep = void 0;
              }
              const t = this.constructor.elementProperties;
              if (t.size > 0) {
                for (const [e, r] of t) {
                  !0 !== r.wrapped || this._$AL.has(e) || void 0 === this[e] ||
                    this.C(e, this[e], r);
                }
              }
            }
            let e = !1;
            const r = this._$AL;
            try {
              e = this.shouldUpdate(r),
                e
                  ? (this.willUpdate(r),
                    null == (t = this._$E_) || t.forEach((t) => {
                      var e;
                      return null == (e = t.hostUpdate) ? void 0 : e.call(t);
                    }),
                    this.update(r))
                  : this._$Ej();
            } catch (i) {
              throw e = !1, this._$Ej(), i;
            }
            e && this._$AE(r);
          }
          willUpdate(t) {}
          _$AE(t) {
            var e;
            null == (e = this._$E_) || e.forEach((t) => {
              var e;
              return null == (e = t.hostUpdated) ? void 0 : e.call(t);
            }),
              this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)),
              this.updated(t);
          }
          _$Ej() {
            this._$AL = new Map(), this.isUpdatePending = !1;
          }
          get updateComplete() {
            return this.getUpdateComplete();
          }
          getUpdateComplete() {
            return this._$Eg;
          }
          shouldUpdate(t) {
            return !0;
          }
          update(t) {
            this._$ET &&
            (this._$ET = this._$ET.forEach((t) => this._$EO(t, this[t]))),
              this._$Ej();
          }
          updated(t) {}
          firstUpdated(t) {}
        }
        R.elementStyles = [],
          R.shadowRootOptions = { mode: "open" },
          R[x("elementProperties")] = new Map(),
          R[x("finalized")] = new Map(),
          null == g || g({ ReactiveElement: R }),
          (p.reactiveElementVersions ?? (p.reactiveElementVersions = [])).push(
            "2.0.3",
          );
        const A = globalThis,
          E = A.trustedTypes,
          _ = E ? E.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
          w = "$lit$",
          q = `lit$${(Math.random() + "").slice(9)}$`,
          U = "?" + q,
          L = `<${U}>`,
          F = document,
          T = () => F.createComment(""),
          S = (t) =>
            null === t || "object" != typeof t && "function" != typeof t,
          O = Array.isArray,
          C = "[ \t\n\f\r]",
          H = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
          V = /-->/g,
          P = />/g,
          D = RegExp(
            `>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
            "g",
          ),
          j = /'/g,
          k = /"/g,
          $ = /^(?:script|style|textarea|title)$/i,
          z = (B = 1, (t, ...e) => ({ _$litType$: B, strings: t, values: e })),
          N = Symbol.for("lit-noChange"),
          X = Symbol.for("lit-nothing"),
          I = new WeakMap(),
          K = F.createTreeWalker(F, 129);
        var B;
        function J(t, e) {
          if (!Array.isArray(t) || !t.hasOwnProperty("raw")) {
            throw Error("invalid template strings array");
          }
          return void 0 !== _ ? _.createHTML(e) : e;
        }
        class Q {
          constructor({ strings: t, _$litType$: e }, r) {
            let i;
            this.parts = [];
            let o = 0, n = 0;
            const a = t.length - 1,
              s = this.parts,
              [l, c] = ((t, e) => {
                const r = t.length - 1, i = [];
                let o, n = 2 === e ? "<svg>" : "", a = H;
                for (let s = 0; s < r; s++) {
                  const e = t[s];
                  let r, l, c = -1, u = 0;
                  for (
                    ;
                    u < e.length &&
                    (a.lastIndex = u, l = a.exec(e), null !== l);
                  ) {
                    u = a.lastIndex,
                      a === H
                        ? "!--" === l[1]
                          ? a = V
                          : void 0 !== l[1]
                          ? a = P
                          : void 0 !== l[2]
                          ? ($.test(l[2]) && (o = RegExp("</" + l[2], "g")),
                            a = D)
                          : void 0 !== l[3] && (a = D)
                        : a === D
                        ? ">" === l[0]
                          ? (a = o ?? H, c = -1)
                          : void 0 === l[1]
                          ? c = -2
                          : (c = a.lastIndex - l[2].length,
                            r = l[1],
                            a = void 0 === l[3] ? D : '"' === l[3] ? k : j)
                        : a === k || a === j
                        ? a = D
                        : a === V || a === P
                        ? a = H
                        : (a = D, o = void 0);
                  }
                  const d = a === D && t[s + 1].startsWith("/>") ? " " : "";
                  n += a === H
                    ? e + L
                    : c >= 0
                    ? (i.push(r), e.slice(0, c) + w + e.slice(c) + q + d)
                    : e + q + (-2 === c ? s : d);
                }
                return [
                  J(t, n + (t[r] || "<?>") + (2 === e ? "</svg>" : "")),
                  i,
                ];
              })(t, e);
            if (
              this.el = Q.createElement(l, r),
                K.currentNode = this.el.content,
                2 === e
            ) {
              const t = this.el.content.firstChild;
              t.replaceWith(...t.childNodes);
            }
            for (; null !== (i = K.nextNode()) && s.length < a;) {
              if (1 === i.nodeType) {
                if (i.hasAttributes()) {
                  for (const t of i.getAttributeNames()) {
                    if (t.endsWith(w)) {
                      const e = c[n++],
                        r = i.getAttribute(t).split(q),
                        a = /([.?@])?(.*)/.exec(e);
                      s.push({
                        type: 1,
                        index: o,
                        name: a[2],
                        strings: r,
                        ctor: "." === a[1]
                          ? Y
                          : "?" === a[1]
                          ? tt
                          : "@" === a[1]
                          ? et
                          : Z,
                      }), i.removeAttribute(t);
                    } else {t.startsWith(q) &&
                        (s.push({ type: 6, index: o }), i.removeAttribute(t));}
                  }
                }
                if ($.test(i.tagName)) {
                  const t = i.textContent.split(q), e = t.length - 1;
                  if (e > 0) {
                    i.textContent = E ? E.emptyScript : "";
                    for (let r = 0; r < e; r++) {
                      i.append(t[r], T()),
                        K.nextNode(),
                        s.push({ type: 2, index: ++o });
                    }
                    i.append(t[e], T());
                  }
                }
              } else if (8 === i.nodeType) {
                if (i.data === U) s.push({ type: 2, index: o });
                else {
                  let t = -1;
                  for (; -1 !== (t = i.data.indexOf(q, t + 1));) {
                    s.push({ type: 7, index: o }), t += q.length - 1;
                  }
                }
              }
              o++;
            }
          }
          static createElement(t, e) {
            const r = F.createElement("template");
            return r.innerHTML = t, r;
          }
        }
        function G(t, e, r = t, i) {
          var o, n;
          if (e === N) return e;
          let a = void 0 !== i ? null == (o = r._$Co) ? void 0 : o[i] : r._$Cl;
          const s = S(e) ? void 0 : e._$litDirective$;
          return (null == a ? void 0 : a.constructor) !== s &&
            (null == (n = null == a ? void 0 : a._$AO) || n.call(a, !1),
              void 0 === s ? a = void 0 : (a = new s(t), a._$AT(t, r, i)),
              void 0 !== i ? (r._$Co ?? (r._$Co = []))[i] = a : r._$Cl = a),
            void 0 !== a && (e = G(t, a._$AS(t, e.values), a, i)),
            e;
        }
        class M {
          constructor(t, e) {
            this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
          }
          get parentNode() {
            return this._$AM.parentNode;
          }
          get _$AU() {
            return this._$AM._$AU;
          }
          u(t) {
            const { el: { content: e }, parts: r } = this._$AD,
              i = ((null == t ? void 0 : t.creationScope) ?? F).importNode(
                e,
                !0,
              );
            K.currentNode = i;
            let o = K.nextNode(), n = 0, a = 0, s = r[0];
            for (; void 0 !== s;) {
              if (n === s.index) {
                let e;
                2 === s.type
                  ? e = new W(o, o.nextSibling, this, t)
                  : 1 === s.type
                  ? e = new s.ctor(o, s.name, s.strings, this, t)
                  : 6 === s.type && (e = new rt(o, this, t)),
                  this._$AV.push(e),
                  s = r[++a];
              }
              n !== (null == s ? void 0 : s.index) && (o = K.nextNode(), n++);
            }
            return K.currentNode = F, i;
          }
          p(t) {
            let e = 0;
            for (const r of this._$AV) {
              void 0 !== r &&
              (void 0 !== r.strings
                ? (r._$AI(t, r, e), e += r.strings.length - 2)
                : r._$AI(t[e])), e++;
            }
          }
        }
        class W {
          get _$AU() {
            var t;
            return (null == (t = this._$AM) ? void 0 : t._$AU) ?? this._$Cv;
          }
          constructor(t, e, r, i) {
            this.type = 2,
              this._$AH = X,
              this._$AN = void 0,
              this._$AA = t,
              this._$AB = e,
              this._$AM = r,
              this.options = i,
              this._$Cv = (null == i ? void 0 : i.isConnected) ?? !0;
          }
          get parentNode() {
            let t = this._$AA.parentNode;
            const e = this._$AM;
            return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) &&
              (t = e.parentNode),
              t;
          }
          get startNode() {
            return this._$AA;
          }
          get endNode() {
            return this._$AB;
          }
          _$AI(t, e = this) {
            t = G(this, t, e),
              S(t)
                ? t === X || null == t || "" === t
                  ? (this._$AH !== X && this._$AR(), this._$AH = X)
                  : t !== this._$AH && t !== N && this._(t)
                : void 0 !== t._$litType$
                ? this.g(t)
                : void 0 !== t.nodeType
                ? this.$(t)
                : ((t) =>
                    O(t) ||
                    "function" ==
                      typeof (null == t ? void 0 : t[Symbol.iterator]))(t)
                ? this.T(t)
                : this._(t);
          }
          k(t) {
            return this._$AA.parentNode.insertBefore(t, this._$AB);
          }
          $(t) {
            this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
          }
          _(t) {
            this._$AH !== X && S(this._$AH)
              ? this._$AA.nextSibling.data = t
              : this.$(F.createTextNode(t)), this._$AH = t;
          }
          g(t) {
            var e;
            const { values: r, _$litType$: i } = t,
              o = "number" == typeof i ? this._$AC(t) : (void 0 === i.el &&
                (i.el = Q.createElement(J(i.h, i.h[0]), this.options)),
                i);
            if ((null == (e = this._$AH) ? void 0 : e._$AD) === o) {
              this._$AH.p(r);
            } else {
              const t = new M(o, this), e = t.u(this.options);
              t.p(r), this.$(e), this._$AH = t;
            }
          }
          _$AC(t) {
            let e = I.get(t.strings);
            return void 0 === e && I.set(t.strings, e = new Q(t)), e;
          }
          T(t) {
            O(this._$AH) || (this._$AH = [], this._$AR());
            const e = this._$AH;
            let r, i = 0;
            for (const o of t) {
              i === e.length
                ? e.push(
                  r = new W(this.k(T()), this.k(T()), this, this.options),
                )
                : r = e[i],
                r._$AI(o),
                i++;
            }
            i < e.length &&
              (this._$AR(r && r._$AB.nextSibling, i), e.length = i);
          }
          _$AR(t = this._$AA.nextSibling, e) {
            var r;
            for (
              null == (r = this._$AP) || r.call(this, !1, !0, e);
              t && t !== this._$AB;
            ) {
              const e = t.nextSibling;
              t.remove(), t = e;
            }
          }
          setConnected(t) {
            var e;
            void 0 === this._$AM &&
              (this._$Cv = t, null == (e = this._$AP) || e.call(this, t));
          }
        }
        class Z {
          get tagName() {
            return this.element.tagName;
          }
          get _$AU() {
            return this._$AM._$AU;
          }
          constructor(t, e, r, i, o) {
            this.type = 1,
              this._$AH = X,
              this._$AN = void 0,
              this.element = t,
              this.name = e,
              this._$AM = i,
              this.options = o,
              r.length > 2 || "" !== r[0] || "" !== r[1]
                ? (this._$AH = Array(r.length - 1).fill(new String()),
                  this.strings = r)
                : this._$AH = X;
          }
          _$AI(t, e = this, r, i) {
            const o = this.strings;
            let n = !1;
            if (void 0 === o) {
              t = G(this, t, e, 0),
                n = !S(t) || t !== this._$AH && t !== N,
                n && (this._$AH = t);
            } else {
              const i = t;
              let a, s;
              for (t = o[0], a = 0; a < o.length - 1; a++) {
                s = G(this, i[r + a], e, a),
                  s === N && (s = this._$AH[a]),
                  n || (n = !S(s) || s !== this._$AH[a]),
                  s === X ? t = X : t !== X && (t += (s ?? "") + o[a + 1]),
                  this._$AH[a] = s;
              }
            }
            n && !i && this.O(t);
          }
          O(t) {
            t === X
              ? this.element.removeAttribute(this.name)
              : this.element.setAttribute(this.name, t ?? "");
          }
        }
        class Y extends Z {
          constructor() {
            super(...arguments), this.type = 3;
          }
          O(t) {
            this.element[this.name] = t === X ? void 0 : t;
          }
        }
        class tt extends Z {
          constructor() {
            super(...arguments), this.type = 4;
          }
          O(t) {
            this.element.toggleAttribute(this.name, !!t && t !== X);
          }
        }
        class et extends Z {
          constructor(t, e, r, i, o) {
            super(t, e, r, i, o), this.type = 5;
          }
          _$AI(t, e = this) {
            if ((t = G(this, t, e, 0) ?? X) === N) return;
            const r = this._$AH,
              i = t === X && r !== X || t.capture !== r.capture ||
                t.once !== r.once || t.passive !== r.passive,
              o = t !== X && (r === X || i);
            i && this.element.removeEventListener(this.name, this, r),
              o && this.element.addEventListener(this.name, this, t),
              this._$AH = t;
          }
          handleEvent(t) {
            var e;
            "function" == typeof this._$AH
              ? this._$AH.call(
                (null == (e = this.options) ? void 0 : e.host) ?? this.element,
                t,
              )
              : this._$AH.handleEvent(t);
          }
        }
        class rt {
          constructor(t, e, r) {
            this.element = t,
              this.type = 6,
              this._$AN = void 0,
              this._$AM = e,
              this.options = r;
          }
          get _$AU() {
            return this._$AM._$AU;
          }
          _$AI(t) {
            G(this, t);
          }
        }
        const it = A.litHtmlPolyfillSupport;
        null == it || it(Q, W),
          (A.litHtmlVersions ?? (A.litHtmlVersions = [])).push("3.1.1");
        let ot = class extends R {
          constructor() {
            super(...arguments),
              this.renderOptions = { host: this },
              this._$Do = void 0;
          }
          createRenderRoot() {
            var t;
            const e = super.createRenderRoot();
            return (t = this.renderOptions).renderBefore ??
              (t.renderBefore = e.firstChild),
              e;
          }
          update(t) {
            const e = this.render();
            this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
              super.update(t),
              this._$Do = ((t, e, r) => {
                const i = (null == r ? void 0 : r.renderBefore) ?? e;
                let o = i._$litPart$;
                if (void 0 === o) {
                  const t = (null == r ? void 0 : r.renderBefore) ?? null;
                  i._$litPart$ = o = new W(
                    e.insertBefore(T(), t),
                    t,
                    void 0,
                    r ?? {},
                  );
                }
                return o._$AI(t), o;
              })(e, this.renderRoot, this.renderOptions);
          }
          connectedCallback() {
            var t;
            super.connectedCallback(),
              null == (t = this._$Do) || t.setConnected(!0);
          }
          disconnectedCallback() {
            var t;
            super.disconnectedCallback(),
              null == (t = this._$Do) || t.setConnected(!1);
          }
          render() {
            return N;
          }
        };
        var nt;
        ot._$litElement$ = !0,
          ot.finalized = !0,
          null == (nt = globalThis.litElementHydrateSupport) ||
          nt.call(globalThis, { LitElement: ot });
        const at = globalThis.litElementPolyfillSupport;
        null == at || at({ LitElement: ot }),
          (globalThis.litElementVersions ??
            (globalThis.litElementVersions = [])).push("4.0.3");
        const st = (t) => (e, r) => {
            void 0 !== r
              ? r.addInitializer(() => {
                customElements.define(t, e);
              })
              : customElements.define(t, e);
          },
          lt = {
            attribute: !0,
            type: String,
            converter: b,
            reflect: !1,
            hasChanged: v,
          },
          ct = (t = lt, e, r) => {
            const { kind: i, metadata: o } = r;
            let n = globalThis.litPropertyMetadata.get(o);
            if (
              void 0 === n &&
              globalThis.litPropertyMetadata.set(o, n = new Map()),
                n.set(r.name, t),
                "accessor" === i
            ) {
              const { name: i } = r;
              return {
                set(r) {
                  const o = e.get.call(this);
                  e.set.call(this, r), this.requestUpdate(i, o, t);
                },
                init(e) {
                  return void 0 !== e && this.C(i, void 0, t), e;
                },
              };
            }
            if ("setter" === i) {
              const { name: i } = r;
              return function (r) {
                const o = this[i];
                e.call(this, r), this.requestUpdate(i, o, t);
              };
            }
            throw Error("Unsupported decorator location: " + i);
          };
        function ut(t) {
          return (e, r) =>
            "object" == typeof r ? ct(t, e, r) : ((t, e, r) => {
              const i = e.hasOwnProperty(r);
              return e.constructor.createProperty(
                r,
                i ? { ...t, wrapped: !0 } : t,
              ),
                i ? Object.getOwnPropertyDescriptor(e, r) : void 0;
            })(t, e, r);
        }
        function dt(t) {
          return ut({ ...t, state: !0, attribute: !1 });
        }
        const ht = (
          t,
          e,
          r,
        ) => (r.configurable = !0,
          r.enumerable = !0,
          Reflect.decorate && "object" != typeof e &&
          Object.defineProperty(t, e, r),
          r);
        function pt(t, e) {
          return (r, i, o) => {
            const n = (e) => {
              var r;
              return (null == (r = e.renderRoot)
                ? void 0
                : r.querySelector(t)) ?? null;
            };
            if (e) {
              const { get: t, set: e } = "object" == typeof i
                ? r
                : o ?? (() => {
                  const t = Symbol();
                  return {
                    get() {
                      return this[t];
                    },
                    set(e) {
                      this[t] = e;
                    },
                  };
                })();
              return ht(r, i, {
                get() {
                  let r = t.call(this);
                  return void 0 === r &&
                    (r = n(this),
                      (null !== r || this.hasUpdated) && e.call(this, r)),
                    r;
                },
              });
            }
            return ht(r, i, {
              get() {
                return n(this);
              },
            });
          };
        }
        const ft = Symbol.for(""),
          mt = (t) => {
            if ((null == t ? void 0 : t.r) === ft) {
              return null == t ? void 0 : t._$litStatic$;
            }
          },
          gt = (t) => ({ _$litStatic$: t, r: ft }),
          xt = new Map(),
          bt = ((t) => (e, ...r) => {
            const i = r.length;
            let o, n;
            const a = [], s = [];
            let l, c = 0, u = !1;
            for (; c < i;) {
              for (l = e[c]; c < i && (n = r[c], void 0 !== (o = mt(n)));) {
                l += o + e[++c], u = !0;
              }
              c !== i && s.push(n), a.push(l), c++;
            }
            if (c === i && a.push(e[i]), u) {
              const t = a.join("$$lit$$");
              void 0 === (e = xt.get(t)) && (a.raw = a, xt.set(t, e = a)),
                r = s;
            }
            return t(e, ...r);
          })(z);
        var vt = typeof globalThis < "u"
          ? globalThis
          : typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {};
        function yt(t) {
          return t && t.__esModule &&
              Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
        }
        var Rt = 1 / 0,
          At = "[object Symbol]",
          Et = /[&<>"'`]/g,
          _t = RegExp(Et.source),
          wt = "object" == typeof vt && vt && vt.Object === Object && vt,
          qt = "object" == typeof self && self && self.Object === Object &&
            self,
          Ut = wt || qt || Function("return this")();
        var Lt = function (t) {
            return function (e) {
              return null == t ? void 0 : t[e];
            };
          }({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;",
          }),
          Ft = Object.prototype.toString,
          Tt = Ut.Symbol,
          St = Tt ? Tt.prototype : void 0,
          Ot = St ? St.toString : void 0;
        function Ct(t) {
          if ("string" == typeof t) return t;
          if (
            function (t) {
              return "symbol" == typeof t || function (t) {
                    return !!t && "object" == typeof t;
                  }(t) && Ft.call(t) == At;
            }(t)
          ) return Ot ? Ot.call(t) : "";
          var e = t + "";
          return "0" == e && 1 / t == -Rt ? "-0" : e;
        }
        var Ht = function (t) {
          return (t = function (t) {
              return null == t ? "" : Ct(t);
            }(t)) && _t.test(t)
            ? t.replace(Et, Lt)
            : t;
        };
        const Vt = yt(Ht), Pt = 1;
        let Dt = class {
          constructor(t) {}
          get _$AU() {
            return this._$AM._$AU;
          }
          _$AT(t, e, r) {
            this._$Ct = t, this._$AM = e, this._$Ci = r;
          }
          _$AS(t, e) {
            return this.update(t, e);
          }
          update(t, e) {
            return this.render(...e);
          }
        };
        const jt = "important",
          kt = " !" + jt,
          $t = ((t) => (...e) => ({ _$litDirective$: t, values: e }))(
            class extends Dt {
              constructor(t) {
                var e;
                if (
                  super(t),
                    t.type !== Pt || "style" !== t.name ||
                    (null == (e = t.strings) ? void 0 : e.length) > 2
                ) {
                  throw Error(
                    "The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.",
                  );
                }
              }
              render(t) {
                return Object.keys(t).reduce((e, r) => {
                  const i = t[r];
                  return null == i
                    ? e
                    : e + `${r = r.includes("-")
                      ? r
                      : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&")
                        .toLowerCase()}:${i};`;
                }, "");
              }
              update(t, [e]) {
                const { style: r } = t.element;
                if (void 0 === this.ut) {
                  return this.ut = new Set(Object.keys(e)), this.render(e);
                }
                for (const i of this.ut) {
                  null == e[i] &&
                    (this.ut.delete(i),
                      i.includes("-") ? r.removeProperty(i) : r[i] = null);
                }
                for (const i in e) {
                  const t = e[i];
                  if (null != t) {
                    this.ut.add(i);
                    const e = "string" == typeof t && t.endsWith(kt);
                    i.includes("-") || e
                      ? r.setProperty(i, e ? t.slice(0, -11) : t, e ? jt : "")
                      : r[i] = t;
                  }
                }
                return N;
              }
            },
          ),
          zt = /^#([0-9A-F]{6})([0-9A-F]{2})?$/i,
          Nt = (t) => "string" == typeof t && /^-?[0-9]+(\.[0-9]+)?px$/.test(t),
          Xt = (t) => "string" == typeof t && zt.test(t),
          It = (t) => "string" == typeof t &&
            /^[0-9]+(\.[0-9]+)?:[0-9]+(\.[0-9]+)?$/.test(t),
          Kt = (t) => "string" == typeof t &&
            (t.startsWith("https://") || /^blob:https?/.test(t) ||
              /^data:image\/\D+;base64,/.test(t)),
          Bt = (t) => {
            if (!Xt(t)) return;
            const e = t.match(zt);
            if (!e) return;
            if (!e[2]) return t;
            const [r, i, o, n] = [
              parseInt(e[1].slice(0, 2), 16),
              parseInt(e[1].slice(2, 4), 16),
              parseInt(e[1].slice(4, 6), 16),
              ee(parseInt(e[2], 16) / 255),
            ];
            return `rgba(${r},${i},${o},${n})`;
          },
          Jt = (t) => {
            if (!It(t)) return;
            const [e, r] = t.split(":").map((t) => parseFloat(t));
            return ee(e / r);
          },
          Qt = (t) => Kt(t) ? `url('${t}')` : void 0,
          Gt = (t) => {
            const e = { ...t };
            for (const [r, i] of Object.entries(t)) {
              const t = r;
              It(i)
                ? e[t] = Jt(i)
                : Kt(i)
                ? e[t] = Qt(i)
                : Xt(i) && (e[t] = Bt(i));
            }
            return e;
          },
          Mt = (t) => {
            if (!Zt(t)) {
              if ("object" == typeof t) return t;
              if ("string" == typeof t) {
                try {
                  return JSON.parse(t);
                } catch {}
              }
            }
          },
          Wt = (t) => $t(Gt(t)),
          Zt = (t) => null == t,
          Yt = (t) => t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`),
          te = (t, e) => {
            const { type: r } = t,
              i = gt(`flex-${r}`),
              o = Object.entries(t).map(([t, e]) => {
                const r = Yt(t);
                return !/^[a-z-]+$/.test(r) || Zt(e) ||
                    Array.isArray(e) && 0 === e.length || !1 === e
                  ? ""
                  : "object" == typeof e || !0 === e
                  ? `data-${r}`
                  : `data-${r}="${Vt(String(e).substring(0, 50))}"`;
              });
            return bt`<${i} ${gt(o.join(" "))} .source=${t} style=${
              e ? Wt(e) : void 0
            }></${i}>`;
          },
          ee = (t, e) => {
            const { method: r = "round", precision: i = 5 } = e ?? {},
              o = 10 ** i;
            return Math[r](t * o) / o;
          },
          re = async (t, { source: e, descriptor: r, expiredAt: i }, o) => {
            if (("line" === e || "linecdn" === e) && r) {
              const n = await (null == t
                ? void 0
                : t({ source: e, descriptor: r, expiredAt: i }));
              if (!n) {
                return o;
              }
              try {
                const t = await fetch(n.url, { headers: n.headers }).then(
                  (t) => {
                    if (2 !== Math.floor(t.status / 100)) throw new Error();
                    return t.blob();
                  },
                );
                return URL.createObjectURL(t);
              } catch {
                return;
              }
            }
            return o;
          },
          ie = (t) => {
            t && /^blob:/.test(t) && URL.revokeObjectURL(t);
          };
        var oe = Object.defineProperty,
          ne = Object.getOwnPropertyDescriptor,
          ae = (t, e, r, i) => {
            for (
              var o, n = i > 1 ? void 0 : i ? ne(e, r) : e, a = t.length - 1;
              a >= 0;
              a--
            ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
            return i && n && oe(e, r, n), n;
          };
        class se extends ot {
          applyStyles(t) {
            this.style.cssText = Object.entries(Gt(t)).map(
              ([t, e]) => e ? `${Yt(t)}: ${e};` : "",
            ).join("");
          }
          firstUpdated() {
            if (
              this.source && "video" !== this.source.type &&
              "action" in this.source
            ) {
              const t = this.source.action;
              this.addEventListener("click", (e) => {
                var r;
                null == (r = e.target) ||
                  r.dispatchEvent(
                    new CustomEvent("action", {
                      detail: t,
                      bubbles: !1,
                      cancelable: !1,
                      composed: !0,
                    }),
                  );
              });
            }
          }
          updated() {
            const t = this.source;
            t && "adjustMode" in t && "shrink-to-fit" === t.adjustMode &&
              !this.closest("[data-wrap]") && this.updateComplete.then(() => {
                if (!this.div || !this.span) return;
                this.div.style.whiteSpace = "nowrap";
                const t = Math.min(
                  1,
                  Math.max(
                    0,
                    ee(this.div.offsetWidth / this.span.offsetWidth, {
                      method: "floor",
                      precision: 2,
                    }),
                  ),
                );
                this.div.style.cssText = `${this.div.style.cssText}; zoom:${t}`,
                  this.div.style.whiteSpace = "initial";
              });
          }
          createRenderRoot() {
            return this;
          }
        }
        ae([pt("div.wrap-for-shrink-to-fit")], se.prototype, "div", 2),
          ae([pt("span.content-for-shrink-to-fit")], se.prototype, "span", 2),
          ae([ut({ converter: Mt })], se.prototype, "source", 2);
        var le = Object.defineProperty, ce = Object.getOwnPropertyDescriptor;
        let ue = class extends se {
          getBackground() {
            var t;
            const e = this.source;
            if (
              "linearGradient" ===
                (null == (t = null == e ? void 0 : e.background)
                  ? void 0
                  : t.type) && e.background.startColor && e.background.endColor
            ) {
              const {
                startColor: t,
                endColor: r,
                centerColor: i,
                centerPosition: o,
                angle: n,
              } = e.background;
              return `linear-gradient(\n        ${
                n ?? "0deg"
              },\n        ${t} 0%,\n        ${
                i ? `${i} ${o ?? "50%"},` : ""
              }\n        ${r} 100%\n      ) ${e.backgroundColor ?? ""}`;
            }
          }
          render() {
            var t;
            const e = this.source;
            if (!e) return X;
            this.applyStyles({
              width: e.width,
              height: e.height,
              maxWidth: e.maxWidth,
              maxHeight: e.maxHeight,
              top: e.offsetTop,
              bottom: e.offsetBottom,
              insetInlineStart: e.offsetStart,
              insetInlineEnd: e.offsetEnd,
              padding: e.paddingAll,
              paddingInlineStart: e.paddingStart,
              paddingInlineEnd: e.paddingEnd,
              paddingTop: e.paddingTop,
              paddingBottom: e.paddingBottom,
              borderRadius: e.cornerRadius,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              "--flex-margin": Nt(e.margin) ? e.margin : void 0,
              backgroundColor: e.backgroundColor,
              background: this.getBackground(),
              "--flex-flex": e.flex,
            });
            const r = (null == (t = e.contents)
              ? void 0
              : t.map((t, r) =>
                te({ ...0 !== r ? { margin: e.spacing } : {}, ...t })
              )) ?? [];
            return z`${r}`;
          }
        };
        ue = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? ce(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && le(e, r, n), n;
        })([st("flex-box")], ue);
        var de = Object.defineProperty, he = Object.getOwnPropertyDescriptor;
        let pe = class extends se {
          renderSeparator(t) {
            var e;
            if ("header" === t) return X;
            const r = this.source,
              i = null == (e = null == r ? void 0 : r.styles) ? void 0 : e[t];
            if (
              null == i || !i.separator ||
              {
                hero: ["header"],
                body: ["header", "hero"],
                footer: ["header", "hero", "body"],
              }[t].every((t) => !(null != r && r[t]))
            ) return X;
            const o = { borderColor: i.separatorColor };
            return z`<flex-separator style=${Wt(o)}></flex-separator>`;
          }
          renderPart(t, e, r) {
            var i, o;
            if (!e) return X;
            const n =
              null == (o = null == (i = this.source) ? void 0 : i.styles)
                ? void 0
                : o[t];
            return z`${this.renderSeparator(t)}<div
      class=${`flex-${t}`}
      style=${
              Wt({
                backgroundColor: "backgroundColor" in e
                  ? e.backgroundColor
                  : null == n
                  ? void 0
                  : n.backgroundColor,
                ...r,
              })
            }
    >${te(e)}</div>`;
          }
          render() {
            const t = this.source;
            if (!t) return X;
            const e = this.renderPart("header", t.header),
              r = this.renderPart("hero", t.hero),
              i = this.renderPart("body", t.body, { flexDirection: "column" }),
              o = this.renderPart("footer", t.footer);
            return z`<div class="flex-bubble-content">${e}${r}${i}${o}</div>`;
          }
        };
        pe = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? he(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && de(e, r, n), n;
        })([st("flex-bubble")], pe);
        var fe = Object.defineProperty, me = Object.getOwnPropertyDescriptor;
        let ge = class extends se {
          render() {
            const t = this.source;
            if (!t) return X;
            this.applyStyles({
              "--flex-base-runtime-text-size": t.scaling
                ? "var(--flex-base-scaling-text-size)"
                : "var(--flex-base-text-size)",
              top: t.offsetTop,
              bottom: t.offsetBottom,
              insetInlineStart: t.offsetStart,
              insetInlineEnd: t.offsetEnd,
              margin: t.margin,
              "--flex-flex": t.flex,
            });
            const e = t.action
              ? t.action.label
              : "\xf8 no action provided \xf8";
            return z`<button style=${
              Wt(
                "primary" === t.style || "secondary" === t.style
                  ? { backgroundColor: t.color }
                  : { color: t.color },
              )
            }>
      <div class="wrap-for-shrink-to-fit"><span class="content-for-shrink-to-fit">${e}</span></div>
    </button>`;
          }
        };
        ge = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? me(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && fe(e, r, n), n;
        })([st("flex-button")], ge);
        var xe = Object.defineProperty, be = Object.getOwnPropertyDescriptor;
        let ve = class extends se {
          render() {
            const t = this.source;
            return null != t && t.contents ? t.contents.map((t) => te(t)) : X;
          }
        };
        ve = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? be(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && xe(e, r, n), n;
        })([st("flex-carousel")], ve);
        var ye = Object.defineProperty, Re = Object.getOwnPropertyDescriptor;
        let Ae = class extends se {
          render() {
            const t = this.source;
            return t ? (this.applyStyles({ "--flex-flex": t.flex }), z``) : X;
          }
        };
        Ae = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? Re(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ye(e, r, n), n;
        })([st("flex-filler")], Ae);
        var Ee = Object.defineProperty, _e = Object.getOwnPropertyDescriptor;
        let we = class extends se {
          render() {
            const t = this.source;
            if (!t || !Kt(t.url)) return X;
            const e = Jt(t.aspectRatio) ?? 1;
            return this.applyStyles({
              "--flex-base-runtime-text-size": t.scaling
                ? "var(--flex-base-scaling-text-size)"
                : "var(--flex-base-text-size)",
              "--flex-aspect-ratio": e,
              "--flex-margin": Nt(t.margin) ? t.margin : void 0,
              top: t.offsetTop,
              bottom: t.offsetBottom,
              insetInlineStart: t.offsetStart,
              insetInlineEnd: t.offsetEnd,
              fontSize: t.size,
            }),
              z`<span style=${Wt({ backgroundImage: t.url })}></span>`;
          }
        };
        we = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? _e(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && Ee(e, r, n), n;
        })([st("flex-icon")], we);
        let qe = class extends Event {
            constructor(t, e, r) {
              super("context-request", { bubbles: !0, composed: !0 }),
                this.context = t,
                this.callback = e,
                this.subscribe = r ?? !1;
            }
          },
          Ue = class {
            constructor(t, e, r, i) {
              if (
                this.subscribe = !1,
                  this.provided = !1,
                  this.value = void 0,
                  this.t = (t, e) => {
                    this.unsubscribe &&
                    (this.unsubscribe !== e &&
                      (this.provided = !1, this.unsubscribe()),
                      this.subscribe || this.unsubscribe()),
                      this.value = t,
                      this.host.requestUpdate(),
                      this.provided && !this.subscribe ||
                      (this.provided = !0,
                        this.callback && this.callback(t, e)),
                      this.unsubscribe = e;
                  },
                  this.host = t,
                  void 0 !== e.context
              ) {
                const t = e;
                this.context = t.context,
                  this.callback = t.callback,
                  this.subscribe = t.subscribe ?? !1;
              } else {this.context = e,
                  this.callback = r,
                  this.subscribe = i ?? !1;}
              this.host.addController(this);
            }
            hostConnected() {
              this.dispatchRequest();
            }
            hostDisconnected() {
              this.unsubscribe &&
                (this.unsubscribe(), this.unsubscribe = void 0);
            }
            dispatchRequest() {
              this.host.dispatchEvent(
                new qe(this.context, this.t, this.subscribe),
              );
            }
          };
        class Le {
          get value() {
            return this.o;
          }
          set value(t) {
            this.setValue(t);
          }
          setValue(t, e = !1) {
            const r = e || !Object.is(t, this.o);
            this.o = t, r && this.updateObservers();
          }
          constructor(t) {
            this.subscriptions = new Map(),
              this.updateObservers = () => {
                for (const [t, { disposer: e }] of this.subscriptions) {
                  t(
                    this.o,
                    e,
                  );
                }
              },
              void 0 !== t && (this.value = t);
          }
          addCallback(t, e, r) {
            if (!r) return void t(this.value);
            this.subscriptions.has(t) ||
              this.subscriptions.set(t, {
                disposer: () => {
                  this.subscriptions.delete(t);
                },
                consumerHost: e,
              });
            const { disposer: i } = this.subscriptions.get(t);
            t(this.value, i);
          }
          clearCallbacks() {
            this.subscriptions.clear();
          }
        }
        let Fe = class extends Event {
          constructor(t) {
            super("context-provider", { bubbles: !0, composed: !0 }),
              this.context = t;
          }
        };
        class Te extends Le {
          constructor(t, e, r) {
            var i, o;
            super(void 0 !== e.context ? e.initialValue : r),
              this.onContextRequest = (t) => {
                const e = t.composedPath()[0];
                t.context === this.context && e !== this.host &&
                  (t.stopPropagation(),
                    this.addCallback(t.callback, e, t.subscribe));
              },
              this.onProviderRequest = (t) => {
                const e = t.composedPath()[0];
                if (t.context !== this.context || e === this.host) return;
                const r = new Set();
                for (const [i, { consumerHost: o }] of this.subscriptions) {
                  r.has(i) ||
                    (r.add(i), o.dispatchEvent(new qe(this.context, i, !0)));
                }
                t.stopPropagation();
              },
              this.host = t,
              void 0 !== e.context
                ? this.context = e.context
                : this.context = e,
              this.attachListeners(),
              null == (o = (i = this.host).addController) || o.call(i, this);
          }
          attachListeners() {
            this.host.addEventListener(
              "context-request",
              this.onContextRequest,
            ),
              this.host.addEventListener(
                "context-provider",
                this.onProviderRequest,
              );
          }
          hostConnected() {
            this.host.dispatchEvent(new Fe(this.context));
          }
        }
        function Se({ context: t, subscribe: e }) {
          return (r, i) => {
            "object" == typeof i
              ? i.addInitializer(function () {
                new Ue(this, {
                  context: t,
                  callback: (t) => {
                    this[i.name] = t;
                  },
                  subscribe: e,
                });
              })
              : r.constructor.addInitializer((r) => {
                new Ue(r, {
                  context: t,
                  callback: (t) => {
                    r[i] = t;
                  },
                  subscribe: e,
                });
              });
          };
        }
        const Oe = "contentInfosProvider";
        var Ce = Object.defineProperty,
          He = Object.getOwnPropertyDescriptor,
          Ve = (t, e, r, i) => {
            for (
              var o, n = i > 1 ? void 0 : i ? He(e, r) : e, a = t.length - 1;
              a >= 0;
              a--
            ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
            return i && n && Ce(e, r, n), n;
          };
        let Pe = class extends se {
          handleCompleteImage() {
            ie(this.url);
          }
          render() {
            const t = this.source;
            if (!t) return X;
            this.applyStyles({
              "--flex-margin": Nt(t.margin) ? t.margin : void 0,
              top: t.offsetTop,
              bottom: t.offsetBottom,
              insetInlineStart: t.offsetStart,
              insetInlineEnd: t.offsetEnd,
              "--flex-flex": t.flex,
            });
            const e = !0 === t.animated
              ? this.url
                ? z`<img src=${this.url} @load=${this.handleCompleteImage} @error=${this.handleCompleteImage} />`
                : X
              : z`<canvas />`;
            return z`<div style=${
              Wt({
                width: t.size,
                aspectRatio: t.aspectRatio ?? 1,
                backgroundColor: t.backgroundColor,
              })
            }>
      ${e}
    </div>`;
          }
          async updated() {
            var t, e, r, i;
            super.updated(),
              !this.url && (this.url = await re(this.contentInfosProvider, {
                source: null == (t = this.source) ? void 0 : t.contentSource,
                descriptor: null == (e = this.source)
                  ? void 0
                  : e.contentDescriptor,
                expiredAt: null == (r = this.source)
                  ? void 0
                  : r.contentExpiredAt,
              }, null == (i = this.source) ? void 0 : i.url),
                this.canvas && this.url && (await (async (t, e) => {
                  const r = new Image();
                  try {
                    await new Promise((t, i) => {
                      const o = () => {
                          r.removeEventListener("load", n),
                            r.removeEventListener("error", a);
                        },
                        n = () => {
                          o(), t();
                        },
                        a = () => {
                          o(), i();
                        };
                      r.addEventListener("load", n),
                        r.addEventListener("error", a),
                        r.src = e;
                    });
                  } catch {
                    return;
                  }
                  const { naturalWidth: i, naturalHeight: o } = r;
                  t.width = i, t.height = o;
                  const n = t.getContext("2d");
                  n && n.drawImage(r, 0, 0, i, o);
                })(this.canvas, this.url),
                  this.handleCompleteImage()));
          }
          disconnectedCallback() {
            super.disconnectedCallback(), ie(this.url);
          }
        };
        Ve([pt("canvas")], Pe.prototype, "canvas", 2),
          Ve(
            [ut({ attribute: !1 }), Se({ context: Oe })],
            Pe.prototype,
            "contentInfosProvider",
            2,
          ),
          Ve([dt()], Pe.prototype, "url", 2),
          Pe = Ve([st("flex-image")], Pe);
        var De = "Expected a function",
          je = NaN,
          ke = "[object Symbol]",
          $e = /^\s+|\s+$/g,
          ze = /^[-+]0x[0-9a-f]+$/i,
          Ne = /^0b[01]+$/i,
          Xe = /^0o[0-7]+$/i,
          Ie = parseInt,
          Ke = "object" == typeof vt && vt && vt.Object === Object && vt,
          Be = "object" == typeof self && self && self.Object === Object &&
            self,
          Je = Ke || Be || Function("return this")(),
          Qe = Object.prototype.toString,
          Ge = Math.max,
          Me = Math.min,
          We = function () {
            return Je.Date.now();
          };
        function Ze(t, e, r) {
          var i, o, n, a, s, l, c = 0, u = !1, d = !1, h = !0;
          if ("function" != typeof t) throw new TypeError(De);
          function p(e) {
            var r = i, n = o;
            return i = o = void 0, c = e, a = t.apply(n, r);
          }
          function f(t) {
            var r = t - l;
            return void 0 === l || r >= e || r < 0 || d && t - c >= n;
          }
          function m() {
            var t = We();
            if (f(t)) return g(t);
            s = setTimeout(
              m,
              function (t) {
                var r = e - (t - l);
                return d ? Me(r, n - (t - c)) : r;
              }(t),
            );
          }
          function g(t) {
            return s = void 0, h && i ? p(t) : (i = o = void 0, a);
          }
          function x() {
            var t = We(), r = f(t);
            if (i = arguments, o = this, l = t, r) {
              if (void 0 === s) {
                return function (t) {
                  return c = t, s = setTimeout(m, e), u ? p(t) : a;
                }(l);
              }
              if (d) return s = setTimeout(m, e), p(l);
            }
            return void 0 === s && (s = setTimeout(m, e)), a;
          }
          return e = tr(e) || 0,
            Ye(r) &&
            (u = !!r.leading,
              n = (d = "maxWait" in r) ? Ge(tr(r.maxWait) || 0, e) : n,
              h = "trailing" in r ? !!r.trailing : h),
            x.cancel = function () {
              void 0 !== s && clearTimeout(s),
                c = 0,
                i =
                  l =
                  o =
                  s =
                    void 0;
            },
            x.flush = function () {
              return void 0 === s ? a : g(We());
            },
            x;
        }
        function Ye(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function tr(t) {
          if ("number" == typeof t) return t;
          if (
            function (t) {
              return "symbol" == typeof t || function (t) {
                    return !!t && "object" == typeof t;
                  }(t) && Qe.call(t) == ke;
            }(t)
          ) return je;
          if (Ye(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Ye(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace($e, "");
          var r = Ne.test(t);
          return r || Xe.test(t)
            ? Ie(t.slice(2), r ? 2 : 8)
            : ze.test(t)
            ? je
            : +t;
        }
        var er = function (t, e, r) {
          var i = !0, o = !0;
          if ("function" != typeof t) throw new TypeError(De);
          return Ye(r) &&
            (i = "leading" in r ? !!r.leading : i,
              o = "trailing" in r ? !!r.trailing : o),
            Ze(t, e, { leading: i, maxWait: e, trailing: o });
        };
        const rr = yt(er);
        var ir = Object.defineProperty,
          or = Object.getOwnPropertyDescriptor,
          nr = (t, e, r, i) => {
            for (
              var o, n = i > 1 ? void 0 : i ? or(e, r) : e, a = t.length - 1;
              a >= 0;
              a--
            ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
            return i && n && ir(e, r, n), n;
          };
        let ar = class extends ot {
          constructor() {
            super(...arguments),
              this.updateButtons = () => {
                var t, e;
                if (!this.content) return;
                const { scrollLeft: r, scrollWidth: i, clientWidth: o } =
                  this.content;
                null == (t = this.prevButtonWrap) ||
                t.classList.toggle("is-hidden", 0 === r),
                  null == (e = this.nextButtonWrap) ||
                  e.classList.toggle("is-hidden", r === i - o);
              },
              this.throttleUpdateButtons = rr(this.updateButtons, 100),
              this.resizeObserver = new ResizeObserver(
                this.throttleUpdateButtons,
              ),
              this.handleClickPrev = () => {
                this.content &&
                  this.content.scrollBy({
                    left: -this.content.clientWidth,
                    behavior: "smooth",
                  });
              },
              this.handleClickNext = () => {
                this.content &&
                  this.content.scrollBy({
                    left: this.content.clientWidth,
                    behavior: "smooth",
                  });
              };
          }
          get innerWidth() {
            var t;
            return (null == (t = this.contentElement)
              ? void 0
              : t.offsetWidth) ?? 0;
          }
          render() {
            if (!this.source) return X;
            const t = z`
      <svg xmlns="http://www.w3.org/2000/svg" data-laicon-version="15.0" viewBox="0 0 20 20">
        <g transform="translate(-2 -2)"><path d="M15.2929 20.707 6.5859 12l8.707-8.707 1.414 1.414L9.4139 12l7.293 7.293-1.414 1.414Z"/></g>
      </svg>
    `;
            return z`
      <div>
        <div class="button-wrap prev">
          <button part="arrow-button" @click=${this.handleClickPrev}>${t}</button>
        </div>
        <div class="content" part="content">
          ${
              te(this.source, {
                "--flex-display-for-sender": "receiver" === this.pov
                  ? "none"
                  : "flex",
                "--flex-display-for-receiver": "sender" === this.pov
                  ? "none"
                  : "flex",
              })
            }
        </div>
        <div class="button-wrap next">
          <button part="arrow-button" class="next" @click=${this.handleClickNext}>${t}</button>
        </div>
      </div>
    `;
          }
          firstUpdated() {
            var t;
            this.addEventListener("mouseenter", this.updateButtons),
              null == (t = this.content) ||
              t.addEventListener("scroll", this.throttleUpdateButtons);
          }
          updated() {
            this.updateButtons(),
              this.updateComplete.then(() => {
                this.dispatchEvent(
                  new UIEvent("update", {
                    bubbles: !1,
                    cancelable: !1,
                    composed: !0,
                  }),
                );
              });
          }
          connectedCallback() {
            super.connectedCallback(), this.resizeObserver.observe(this);
          }
          disconnectedCallback() {
            super.disconnectedCallback(), this.resizeObserver.disconnect();
          }
        };
        ar.styles = n(
          ':host{--flex-base-text-size: 16px;--flex-base-scaling-text-size: 16px;--flex-line-height: 1.4;--flex-bubble-border: 1px solid rgb(0 0 0 / 20%);--flex-content-padding: 0;line-height:var(--flex-line-height);display:block;overflow:hidden}:host *{box-sizing:border-box}:host *[data-position=absolute]{position:absolute}:host *[data-direction=rtl]{direction:rtl}:host *[data-direction=ltr]{direction:ltr}:host *[data-offset-top=none]{top:0}:host *[data-offset-top=xs]{top:2px}:host *[data-offset-top=sm]{top:4px}:host *[data-offset-top=md]{top:8px}:host *[data-offset-top=lg]{top:12px}:host *[data-offset-top=xl]{top:16px}:host *[data-offset-top=xxl]{top:20px}:host *[data-offset-bottom=none]{bottom:0}:host *[data-offset-bottom=xs]{bottom:2px}:host *[data-offset-bottom=sm]{bottom:4px}:host *[data-offset-bottom=md]{bottom:8px}:host *[data-offset-bottom=lg]{bottom:12px}:host *[data-offset-bottom=xl]{bottom:16px}:host *[data-offset-bottom=xxl]{bottom:20px}:host *[data-offset-start=none]{inset-inline-start:0px}:host *[data-offset-start=xs]{inset-inline-start:2px}:host *[data-offset-start=sm]{inset-inline-start:4px}:host *[data-offset-start=md]{inset-inline-start:8px}:host *[data-offset-start=lg]{inset-inline-start:12px}:host *[data-offset-start=xl]{inset-inline-start:16px}:host *[data-offset-start=xxl]{inset-inline-start:20px}:host *[data-offset-end=none]{inset-inline-end:0px}:host *[data-offset-end=xs]{inset-inline-end:2px}:host *[data-offset-end=sm]{inset-inline-end:4px}:host *[data-offset-end=md]{inset-inline-end:8px}:host *[data-offset-end=lg]{inset-inline-end:12px}:host *[data-offset-end=xl]{inset-inline-end:16px}:host *[data-offset-end=xxl]{inset-inline-end:20px}:host *[data-action]{cursor:pointer}:host *[data-position=absolute]{margin:0!important}:host>div{position:relative}:host>div>div.content{overflow:auto;padding:var(--flex-content-padding)}:host>div>div.button-wrap{position:absolute;top:0;bottom:0;z-index:1;display:flex;pointer-events:none;align-items:center;justify-content:center}:host>div>div.button-wrap.is-hidden{display:none}:host>div>div.button-wrap button{display:flex;background:#fffc;padding:0;border:1px solid rgba(0,0,0,.2);border-radius:50%;width:30px;height:30px;align-items:center;justify-content:center;cursor:pointer;margin:10px;opacity:0;transition:opacity .3s ease,filter .1s ease;pointer-events:none}:host>div>div.button-wrap.prev{left:0}:host>div>div.button-wrap.next{right:0}:host>div>div.button-wrap.next button{transform:rotate(180deg)}:host>div>div.button-wrap svg{width:50%;margin-left:-1px;fill:#00000080;stroke:#00000080}:host>div>div.button-wrap:hover svg{fill:#52d77c;stroke:#52d77c}:host>div>div.button-wrap:active{filter:brightness(.95)}:host>div:hover>div.button-wrap>button{opacity:1;pointer-events:auto}flex-box{flex:1 0 0;position:relative;display:flex;border:0 solid transparent;overflow:hidden;min-width:0;max-height:100%;--flex-margin: 0;margin-top:var(--flex-margin)}flex-box[data-layout=baseline]{align-items:baseline}flex-box[data-layout=vertical]>*{flex:0 0 auto;margin-inline-end:unset!important;margin-bottom:unset!important;margin-inline-start:unset!important}flex-box[data-layout=horizontal]>*{flex:1 0 0}flex-box>[data-flex]{flex-grow:var(--flex-flex)!important}flex-box>[data-width],flex-box>[data-flex="0"],flex-box>flex-icon,flex-box>flex-separator{flex:0 0 auto!important}flex-box[data-layout=baseline][data-position=absolute],flex-box[data-layout=horizontal][data-position=absolute]{width:auto}flex-box[data-layout=baseline]>*,flex-box[data-layout=horizontal]>*{overflow:hidden;margin-top:unset!important;margin-inline-end:unset!important;margin-bottom:unset!important}flex-box[data-layout=baseline]>flex-box:not([data-width],[data-flex="0"]),flex-box[data-layout=horizontal]>flex-box:not([data-width],[data-flex="0"]){width:0}flex-box[data-layout=baseline]>flex-box,flex-box[data-layout=baseline]>flex-image,flex-box[data-layout=baseline]>flex-button,flex-box[data-layout=baseline]>flex-text,flex-box[data-layout=baseline]>flex-separator,flex-box[data-layout=horizontal]>flex-box,flex-box[data-layout=horizontal]>flex-image,flex-box[data-layout=horizontal]>flex-button,flex-box[data-layout=horizontal]>flex-text,flex-box[data-layout=horizontal]>flex-separator{margin-inline-start:var(--flex-margin)}flex-box[data-layout=baseline]>flex-image:not([data-position=absolute]),flex-box[data-layout=baseline]>flex-button:not([data-position=absolute]),flex-box[data-layout=horizontal]>flex-image:not([data-position=absolute]),flex-box[data-layout=horizontal]>flex-button:not([data-position=absolute]){width:0}flex-box[data-layout=baseline]>flex-text,flex-box[data-layout=horizontal]>flex-text{width:auto}flex-box[data-layout=baseline]>flex-separator,flex-box[data-layout=horizontal]>flex-separator{width:auto;overflow:visible}flex-box[data-layout=baseline]>flex-separator:before,flex-box[data-layout=horizontal]>flex-separator:before{width:1px;height:100%;border-top-width:0;border-inline-start-width:1px;transform:scaleX(.5)}flex-box[data-position=absolute]{margin:0!important;width:auto}flex-box[data-padding-all=none]{padding:0!important}flex-box[data-padding-start=none]{padding-inline-start:0!important}flex-box[data-padding-end=none]{padding-inline-end:0!important}flex-box[data-padding-top=none]{padding-top:0!important}flex-box[data-padding-bottom=none]{padding-bottom:0!important}flex-box[data-visible-on=receiver]{display:var(--flex-display-for-receiver)}flex-box[data-visible-on=sender]{display:var(--flex-display-for-sender)}flex-box[data-layout=baseline]{flex-direction:row}flex-box[data-layout=vertical]{flex-direction:column}flex-box[data-layout=horizontal]{flex-direction:row}flex-box[data-margin=none]{--flex-margin: 0px}flex-box[data-margin=xs]{--flex-margin: 2px}flex-box[data-margin=sm]{--flex-margin: 4px}flex-box[data-margin=md]{--flex-margin: 8px}flex-box[data-margin=lg]{--flex-margin: 12px}flex-box[data-margin=xl]{--flex-margin: 16px}flex-box[data-margin=xxl]{--flex-margin: 20px}flex-box[data-border-width=none]{border-width:0px}flex-box[data-border-width=light]{border-width:.5px}flex-box[data-border-width=normal]{border-width:1px}flex-box[data-border-width=medium]{border-width:2px}flex-box[data-border-width=semi-bold]{border-width:3px}flex-box[data-border-width=bold]{border-width:4px}flex-box[data-corner-radius=none]{border-radius:0}flex-box[data-corner-radius=xs]{border-radius:2px}flex-box[data-corner-radius=sm]{border-radius:4px}flex-box[data-corner-radius=md]{border-radius:8px}flex-box[data-corner-radius=lg]{border-radius:12px}flex-box[data-corner-radius=xl]{border-radius:16px}flex-box[data-corner-radius=xxl]{border-radius:20px}flex-box[data-justify-content=center]{justify-content:center}flex-box[data-justify-content=flex-start]{justify-content:flex-start}flex-box[data-justify-content=flex-end]{justify-content:flex-end}flex-box[data-justify-content=space-between]{justify-content:space-between}flex-box[data-justify-content=space-around]{justify-content:space-around}flex-box[data-justify-content=space-evenly]{justify-content:space-evenly}flex-box[data-align-items=flex-start]:not([data-layout=baseline]){align-items:flex-start}flex-box[data-align-items=center]:not([data-layout=baseline]){align-items:center}flex-box[data-align-items=flex-end]:not([data-layout=baseline]){align-items:flex-end}flex-bubble{position:relative;display:flex;flex-direction:column;border:var(--flex-bubble-border);overflow:hidden;flex:0 0 auto}flex-bubble:not([data-size]){max-width:300px;border-radius:17px}flex-bubble[data-size=nano]{max-width:120px}flex-bubble[data-size=micro]{max-width:160px}flex-bubble[data-size=deca]{max-width:220px}flex-bubble[data-size=hecto]{max-width:241px}flex-bubble[data-size=kilo]{max-width:260px}flex-bubble[data-size=mega]{max-width:300px}flex-bubble[data-size=giga]{max-width:500px}flex-bubble[data-size=nano]{border-radius:10px}flex-bubble[data-size=micro]{border-radius:10px}flex-bubble[data-size=deca]{border-radius:10px}flex-bubble[data-size=hecto]{border-radius:10px}flex-bubble[data-size=kilo]{border-radius:10px}flex-bubble[data-size=mega]{border-radius:17px}flex-bubble[data-size=giga]{border-radius:5px}flex-bubble[data-size=nano]>.flex-bubble-content>.flex-header>flex-box[data-contents]{padding:10px}flex-bubble[data-size=micro]>.flex-bubble-content>.flex-header>flex-box[data-contents]{padding:10px}flex-bubble[data-size=deca]>.flex-bubble-content>.flex-header>flex-box[data-contents]{padding:11px 14px 13px}flex-bubble[data-size=hecto]>.flex-bubble-content>.flex-header>flex-box[data-contents]{padding:11px 14px 13px}flex-bubble[data-size=kilo]>.flex-bubble-content>.flex-header>flex-box[data-contents]{padding:13px}flex-bubble[data-size=mega]>.flex-bubble-content>.flex-header>flex-box[data-contents]{padding:19px 20px 20px}flex-bubble[data-size=giga]>.flex-bubble-content>.flex-header>flex-box[data-contents]{padding:19px 20px 20px}flex-bubble[data-size=nano]>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:10px}flex-bubble[data-size=micro]>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:10px}flex-bubble[data-size=deca]>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:11px 14px 13px}flex-bubble[data-size=hecto]>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:11px 14px 13px}flex-bubble[data-size=kilo]>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:13px}flex-bubble[data-size=mega]>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:19px 20px 20px}flex-bubble[data-size=giga]>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:19px 20px 20px}flex-bubble>.flex-bubble-content{position:relative;display:flex;flex-direction:column;background:#fff}flex-bubble>.flex-bubble-content>*>*{flex-basis:auto}flex-bubble>.flex-bubble-content>.flex-body{display:flex}flex-bubble>.flex-bubble-content>.flex-body:has(~.flex-footer)>flex-box[data-contents]{padding-bottom:10px}flex-bubble>.flex-bubble-content>.flex-footer>flex-box[data-contents]{padding:10px}flex-bubble>.flex-bubble-content>.flex-header>flex-box[data-contents],flex-bubble>.flex-bubble-content>.flex-body>flex-box[data-contents]{padding:20px}flex-bubble>.flex-bubble-content flex-box>flex-filler{flex:1 0 0}flex-bubble>.flex-bubble-content:not(:empty)+.flex-footer:not(:empty){padding-top:0!important}flex-button{flex:1 0 0;position:relative;display:flex;min-width:0;max-width:100%;flex-direction:column;align-items:center;--flex-margin: 0;margin-top:var(--flex-margin)}flex-button[data-position=absolute]{margin:0;width:auto}flex-button[data-flex="0"]{width:auto!important}flex-button>button{width:100%;height:52px;border:none;border-radius:8px;padding:0 16px;cursor:pointer;outline:none;line-height:inherit;font-size:var(--flex-base-runtime-text-size);font-family:-apple-system,BlinkMacSystemFont,Helvetica,Roboto,sans-serif}flex-button>button>div{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:100%}flex-button[data-gravity=top]{justify-content:flex-start}flex-button[data-gravity=center]{justify-content:center}flex-button[data-gravity=bottom]{justify-content:flex-end}flex-button[data-margin=none]{--flex-margin: 0px}flex-button[data-margin=xs]{--flex-margin: 2px}flex-button[data-margin=sm]{--flex-margin: 4px}flex-button[data-margin=md]{--flex-margin: 8px}flex-button[data-margin=lg]{--flex-margin: 12px}flex-button[data-margin=xl]{--flex-margin: 16px}flex-button[data-margin=xxl]{--flex-margin: 20px}flex-button>button{background:transparent;color:#42659a}flex-button[data-style=primary]>button{background:#17c950}flex-button[data-style=secondary]>button{background:#dcdfe5}flex-button[data-style=primary]>button{color:#fff}flex-button[data-style=secondary]>button{color:#111}flex-button[data-height=sm]>button{height:40px}flex-button[data-height=md]>button{height:52px}flex-carousel{display:flex;flex-direction:row}flex-carousel flex-bubble{margin:0 4px;width:80%}flex-carousel flex-bubble:first-child{margin-left:0}flex-carousel flex-bubble:last-child{margin-right:0}flex-carousel flex-bubble>.flex-bubble-content{flex:1 0 0}flex-carousel flex-bubble>.flex-bubble-content>.flex-header,flex-carousel flex-bubble>.flex-bubble-content>.flex-hero{flex:0 0 auto}flex-carousel flex-bubble>.flex-bubble-content>.flex-body{flex:1 0 auto}flex-carousel flex-bubble>.flex-bubble-content>.flex-body>flex-box[data-layout=vertical]{flex:1 0 auto}flex-filler{position:relative;margin:0!important}flex-icon{flex:1 0 0;position:relative;display:block;font-size:var(--flex-base-runtime-text-size);width:calc(1em * var(--flex-aspect-ratio, 1));line-height:0;--flex-margin: 0;margin-inline-start:var(--flex-margin)}flex-icon[data-margin=none]{--flex-margin: 0px}flex-icon[data-margin=xs]{--flex-margin: 2px}flex-icon[data-margin=sm]{--flex-margin: 4px}flex-icon[data-margin=md]{--flex-margin: 8px}flex-icon[data-margin=lg]{--flex-margin: 12px}flex-icon[data-margin=xl]{--flex-margin: 16px}flex-icon[data-margin=xxl]{--flex-margin: 20px}flex-icon:not([data-size]){font-size:var(--flex-base-runtime-text-size)}flex-icon[data-size=none]{font-size:calc(0 * var(--flex-base-runtime-text-size))}flex-icon[data-size=xxs]{font-size:calc(.6875 * var(--flex-base-runtime-text-size))}flex-icon[data-size=xs]{font-size:calc(.8125 * var(--flex-base-runtime-text-size))}flex-icon[data-size=sm]{font-size:calc(.875 * var(--flex-base-runtime-text-size))}flex-icon[data-size=md]{font-size:calc(1 * var(--flex-base-runtime-text-size))}flex-icon[data-size=lg]{font-size:calc(1.1875 * var(--flex-base-runtime-text-size))}flex-icon[data-size=xl]{font-size:calc(1.375 * var(--flex-base-runtime-text-size))}flex-icon[data-size=xxl]{font-size:calc(1.8125 * var(--flex-base-runtime-text-size))}flex-icon[data-size="3xl"]{font-size:calc(2.125 * var(--flex-base-runtime-text-size))}flex-icon[data-size="4xl"]{font-size:calc(3 * var(--flex-base-runtime-text-size))}flex-icon[data-size="5xl"]{font-size:calc(4.625 * var(--flex-base-runtime-text-size))}flex-icon>span{display:inline-block;width:100%;height:1em;background-repeat:no-repeat;background-position:center center;background-size:contain}flex-image{flex:1 0 0;position:relative;display:flex;min-width:0;flex-direction:column;align-items:center;line-height:0;overflow:hidden;--flex-margin: 0;margin-top:var(--flex-margin)}flex-image[data-position=absolute]{width:auto}flex-image[data-position=absolute][data-size=full]{width:100%}flex-image[data-flex="0"]{width:auto!important}flex-image>div{position:relative;max-width:100%;flex:0 0 auto}flex-image[data-size=full]{width:100%}flex-image:not([data-size])>div{width:100px}flex-image[data-size=xxs]>div{width:40px}flex-image[data-size=xs]>div{width:60px}flex-image[data-size=sm]>div{width:80px}flex-image[data-size=md]>div{width:100px}flex-image[data-size=lg]>div{width:120px}flex-image[data-size=xl]>div{width:140px}flex-image[data-size=xxl]>div{width:160px}flex-image[data-size="3xl"]>div{width:180px}flex-image[data-size="4xl"]>div{width:200px}flex-image[data-size="5xl"]>div{width:220px}flex-image[data-size=full]>div{width:100%}flex-image img,flex-image canvas{position:absolute;right:0;bottom:0;left:0;top:0;width:100%;height:100%}flex-image[data-gravity=top]{justify-content:flex-start}flex-image[data-gravity=center]{justify-content:center}flex-image[data-gravity=bottom]{justify-content:flex-end}flex-image[data-align=start]{align-items:flex-start}flex-image[data-align=center]{align-items:center}flex-image[data-align=end]{align-items:flex-end}flex-image:not([data-aspect-mode]) img,flex-image:not([data-aspect-mode]) canvas{object-fit:contain}flex-image[data-aspect-mode=cover] img,flex-image[data-aspect-mode=cover] canvas{object-fit:cover}flex-image[data-aspect-mode=fit] img,flex-image[data-aspect-mode=fit] canvas{object-fit:contain}flex-image[data-margin=none]{--flex-margin: 0px}flex-image[data-margin=xs]{--flex-margin: 2px}flex-image[data-margin=sm]{--flex-margin: 4px}flex-image[data-margin=md]{--flex-margin: 8px}flex-image[data-margin=lg]{--flex-margin: 12px}flex-image[data-margin=xl]{--flex-margin: 16px}flex-image[data-margin=xxl]{--flex-margin: 20px}flex-separator{flex:0 0 auto;position:relative;width:100%;box-sizing:content-box;border:0 solid #d4d6da;--flex-margin: 0;margin-top:var(--flex-margin)}flex-separator:before{box-sizing:content-box;content:"";display:block;position:absolute;z-index:1;width:100%;height:1px;border:inherit;border-top-width:1px;transform-origin:left top;transform:scaleY(.5)}flex-separator:last-child:before{margin-top:-1px;border-top-width:0;border-bottom-width:1px}flex-separator[data-margin=none]{--flex-margin: 0px}flex-separator[data-margin=xs]{--flex-margin: 2px}flex-separator[data-margin=sm]{--flex-margin: 4px}flex-separator[data-margin=md]{--flex-margin: 8px}flex-separator[data-margin=lg]{--flex-margin: 12px}flex-separator[data-margin=xl]{--flex-margin: 16px}flex-separator[data-margin=xxl]{--flex-margin: 20px}flex-spacer{flex:0 0 auto;width:1px;height:8px}flex-spacer[data-size=none]{height:0px}flex-spacer[data-size=xs]{height:2px}flex-spacer[data-size=sm]{height:4px}flex-spacer[data-size=md]{height:8px}flex-spacer[data-size=lg]{height:12px}flex-spacer[data-size=xl]{height:16px}flex-spacer[data-size=xxl]{height:20px}flex-span{font-style:inherit;font-weight:inherit;text-decoration:inherit}flex-span:not([data-size]){font-size:var(--flex-base-runtime-text-size)}flex-span[data-size=none]{font-size:calc(0 * var(--flex-base-runtime-text-size))}flex-span[data-size=xxs]{font-size:calc(.6875 * var(--flex-base-runtime-text-size))}flex-span[data-size=xs]{font-size:calc(.8125 * var(--flex-base-runtime-text-size))}flex-span[data-size=sm]{font-size:calc(.875 * var(--flex-base-runtime-text-size))}flex-span[data-size=md]{font-size:calc(1 * var(--flex-base-runtime-text-size))}flex-span[data-size=lg]{font-size:calc(1.1875 * var(--flex-base-runtime-text-size))}flex-span[data-size=xl]{font-size:calc(1.375 * var(--flex-base-runtime-text-size))}flex-span[data-size=xxl]{font-size:calc(1.8125 * var(--flex-base-runtime-text-size))}flex-span[data-size="3xl"]{font-size:calc(2.125 * var(--flex-base-runtime-text-size))}flex-span[data-size="4xl"]{font-size:calc(3 * var(--flex-base-runtime-text-size))}flex-span[data-size="5xl"]{font-size:calc(4.625 * var(--flex-base-runtime-text-size))}flex-span[data-style=normal]{font-style:normal}flex-span[data-style=italic]{font-style:italic}flex-span[data-weight=regular]{font-weight:400}flex-span[data-weight=bold]{font-weight:700}flex-span[data-decoration=none]{text-decoration:none}flex-span[data-decoration=underline]{text-decoration:underline}flex-span[data-decoration=line-through]{text-decoration:line-through}flex-span:not([data-size]){font-size:1em}flex-text{flex:1 0 0;position:relative;display:flex;flex-direction:column;min-width:0;max-width:100%;color:#444;--flex-margin: 0;margin-top:var(--flex-margin)}flex-text *{line-height:calc(1em * var(--flex-line-height, 1) + var(--flex-line-spacing, 0px))}flex-text>div{font-family:-apple-system,BlinkMacSystemFont,Helvetica,Roboto,sans-serif;overflow:hidden;text-overflow:ellipsis;font-size:var(--flex-base-runtime-text-size);margin:calc(-.5 * var(--flex-line-spacing, 0px)) 0;white-space:pre}flex-text:not([data-size])>div{font-size:var(--flex-base-runtime-text-size)}flex-text[data-size=none]>div{font-size:calc(0 * var(--flex-base-runtime-text-size))}flex-text[data-size=xxs]>div{font-size:calc(.6875 * var(--flex-base-runtime-text-size))}flex-text[data-size=xs]>div{font-size:calc(.8125 * var(--flex-base-runtime-text-size))}flex-text[data-size=sm]>div{font-size:calc(.875 * var(--flex-base-runtime-text-size))}flex-text[data-size=md]>div{font-size:calc(1 * var(--flex-base-runtime-text-size))}flex-text[data-size=lg]>div{font-size:calc(1.1875 * var(--flex-base-runtime-text-size))}flex-text[data-size=xl]>div{font-size:calc(1.375 * var(--flex-base-runtime-text-size))}flex-text[data-size=xxl]>div{font-size:calc(1.8125 * var(--flex-base-runtime-text-size))}flex-text[data-size="3xl"]>div{font-size:calc(2.125 * var(--flex-base-runtime-text-size))}flex-text[data-size="4xl"]>div{font-size:calc(3 * var(--flex-base-runtime-text-size))}flex-text[data-size="5xl"]>div{font-size:calc(4.625 * var(--flex-base-runtime-text-size))}flex-text[data-contents]>div{white-space:nowrap}flex-text[data-wrap]>div{text-overflow:clip;white-space:pre-wrap;overflow-wrap:break-word}flex-text[data-wrap][data-max-lines]>div{display:-webkit-box;-webkit-line-clamp:var(--flex-max-lines, initial);-webkit-box-orient:vertical}flex-text[data-gravity=top]{justify-content:flex-start}flex-text[data-gravity=center]{justify-content:center}flex-text[data-gravity=bottom]{justify-content:flex-end}flex-text[data-style=normal]{font-style:normal}flex-text[data-style=italic]{font-style:italic}flex-text[data-weight=regular]{font-weight:400}flex-text[data-weight=bold]{font-weight:700}flex-text[data-decoration=none]{text-decoration:none}flex-text[data-decoration=underline]{text-decoration:underline}flex-text[data-decoration=line-through]{text-decoration:line-through}flex-text[data-align=start]{text-align:start}flex-text[data-align=center]{text-align:center}flex-text[data-align=end]{text-align:end}flex-text[data-margin=none]{--flex-margin: 0px}flex-text[data-margin=xs]{--flex-margin: 2px}flex-text[data-margin=sm]{--flex-margin: 4px}flex-text[data-margin=md]{--flex-margin: 8px}flex-text[data-margin=lg]{--flex-margin: 12px}flex-text[data-margin=xl]{--flex-margin: 16px}flex-text[data-margin=xxl]{--flex-margin: 20px}flex-video{flex:1 0 0;position:relative;display:flex;min-width:0;max-width:100%;flex-direction:column;line-height:0}flex-video>div{position:relative}flex-video video{position:absolute;right:0;bottom:0;left:0;top:0;width:100%;height:100%;background-color:#fff}flex-video button{position:absolute;cursor:pointer;pointer-events:auto;background-color:#00000080;color:#fff;border:0;font-size:var(--flex-base-text-size)}flex-video button.play{display:flex;align-items:center;justify-content:center;top:0;right:0;bottom:0;left:0;width:100%;height:100%}flex-video button.play:before{content:"";background:url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbGFpY29uLXZlcnNpb249IjE1LjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iI2ZmZmZmZiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIj48cGF0aCBkPSJNMTguMTA0OSAxMS40Mzc0Yy40MTQ2LjI2MDcuNDE0Ni44NjUxIDAgMS4xMjU4TDcuNDExNyAxOS4yODk2Yy0uNDQyOC4yNzg2LTEuMDE5MS0uMDM5OC0xLjAxOTEtLjU2M1Y1LjI3NGMwLS41MjMyLjU3NjMtLjg0MTYgMS4wMTkxLS41NjNsMTAuNjkzMiA2LjcyNjRaIi8+PC9nPjwvc3ZnPg==) no-repeat center/50%;border:.1em solid #fff;width:2.5em;height:2.5em;overflow:hidden;color:transparent;border-radius:100%}flex-video button.link{inset-inline-end:0;top:0;border-radius:1em;padding:.5em .75em;gap:.25em;margin:10px}:host flex-video[data-action]{cursor:default}',
        ),
          nr([ut({ converter: Mt })], ar.prototype, "source", 2),
          nr([ut({ type: String })], ar.prototype, "pov", 2),
          nr(
            [
              ut({ type: Function }),
              function ({ context: t }) {
                return (e, r) => {
                  const i = new WeakMap();
                  if ("object" == typeof r) {
                    return r.addInitializer(function () {
                      i.set(this, new Te(this, { context: t }));
                    }),
                      {
                        get() {
                          return e.get.call(this);
                        },
                        set(t) {
                          var r;
                          return null == (r = i.get(this)) || r.setValue(t),
                            e.set.call(this, t);
                        },
                        init(t) {
                          var e;
                          return null == (e = i.get(this)) || e.setValue(t), t;
                        },
                      };
                  }
                  {
                    e.constructor.addInitializer((e) => {
                      i.set(e, new Te(e, { context: t }));
                    });
                    const o = Object.getOwnPropertyDescriptor(e, r);
                    let n;
                    if (void 0 === o) {
                      const t = new WeakMap();
                      n = {
                        get: function () {
                          return t.get(this);
                        },
                        set: function (e) {
                          i.get(this).setValue(e), t.set(this, e);
                        },
                        configurable: !0,
                        enumerable: !0,
                      };
                    } else {
                      const t = o.set;
                      n = {
                        ...o,
                        set: function (e) {
                          i.get(this).setValue(e), null == t || t.call(this, e);
                        },
                      };
                    }
                    return void Object.defineProperty(e, r, n);
                  }
                };
              }({ context: Oe }),
            ],
            ar.prototype,
            "contentInfosProvider",
            2,
          ),
          nr([ut({ type: Number })], ar.prototype, "innerWidth", 1),
          nr([pt("div.content")], ar.prototype, "content", 2),
          nr([pt("div.content > *")], ar.prototype, "contentElement", 2),
          nr([pt("div.button-wrap.prev")], ar.prototype, "prevButtonWrap", 2),
          nr([pt("div.button-wrap.next")], ar.prototype, "nextButtonWrap", 2),
          ar = nr([st("flex-renderer")], ar);
        var sr = Object.defineProperty, lr = Object.getOwnPropertyDescriptor;
        let cr = class extends se {
          render() {
            const t = this.source;
            return t
              ? (this.applyStyles({
                "flex-margin": Nt(t.margin) ? t.margin : void 0,
                borderColor: t.color,
              }),
                z``)
              : X;
          }
        };
        cr = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? lr(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && sr(e, r, n), n;
        })([st("flex-separator")], cr);
        var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor;
        let hr = class extends se {
          render() {
            return z``;
          }
        };
        hr = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? dr(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && ur(e, r, n), n;
        })([st("flex-spacer")], hr);
        var pr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor;
        let mr = class extends se {
          render() {
            const t = this.source;
            return t
              ? (this.applyStyles({ color: t.color, fontSize: t.size }),
                z`${t.text}`)
              : X;
          }
        };
        mr = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? fr(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && pr(e, r, n), n;
        })([st("flex-span")], mr);
        var gr = Object.defineProperty, xr = Object.getOwnPropertyDescriptor;
        let br = class extends se {
          render() {
            var t;
            const e = this.source;
            if (!e) return X;
            this.applyStyles({
              "--flex-base-runtime-text-size": e.scaling
                ? "var(--flex-base-scaling-text-size)"
                : "var(--flex-base-text-size)",
              "--flex-line-spacing": e.lineSpacing,
              "--flex-max-lines": e.maxLines,
              "--flex-margin": Nt(e.margin) ? e.margin : void 0,
              color: e.color,
              top: e.offsetTop,
              bottom: e.offsetBottom,
              insetInlineStart: e.offsetStart,
              insetInlineEnd: e.offsetEnd,
              "--flex-flex": e.flex,
            });
            const r = null != (t = e.contents) && t.length
              ? e.contents.map((t) => te(t))
              : "string" != typeof e.text || e.wrap
              ? e.text
              : ((t) => t.split(/[\r\n]+/).join(" "))(e.text);
            return z`<div class="wrap-for-shrink-to-fit" style=${
              Wt({ fontSize: e.size })
            }><span class="content-for-shrink-to-fit">${r}</span></div>`;
          }
        };
        br = ((t, e, r, i) => {
          for (
            var o, n = i > 1 ? void 0 : i ? xr(e, r) : e, a = t.length - 1;
            a >= 0;
            a--
          ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
          return i && n && gr(e, r, n), n;
        })([st("flex-text")], br);
        var vr = Object.defineProperty,
          yr = Object.getOwnPropertyDescriptor,
          Rr = (t, e, r, i) => {
            for (
              var o, n = i > 1 ? void 0 : i ? yr(e, r) : e, a = t.length - 1;
              a >= 0;
              a--
            ) (o = t[a]) && (n = (i ? o(e, r, n) : o(n)) || n);
            return i && n && vr(e, r, n), n;
          };
        let Ar = class extends se {
          constructor() {
            super(...arguments),
              this.hasError = !1,
              this.isPlayButtonShown = !0;
          }
          handleErrorVideo() {
            ie(this.url), this.hasError = !0;
          }
          handleClickPlay(t) {
            var e;
            !this.video || !this.url || null == (e = t.target) ||
              !e.dispatchEvent(
                new CustomEvent("beforeplay", {
                  detail: { type: "video", element: this.video, url: this.url },
                  bubbles: !0,
                  cancelable: !0,
                  composed: !0,
                }),
              ) || this.video.play();
          }
          handleClickLink(t) {
            var e;
            const r = this.source;
            if (!r) return;
            const i = r.action;
            "uri" === (null == i ? void 0 : i.type) &&
              (null == (e = t.target) ||
                e.dispatchEvent(
                  new CustomEvent("action", {
                    detail: i,
                    bubbles: !1,
                    cancelable: !0,
                    composed: !0,
                  }),
                ));
          }
          checkPlayingState(t) {
            const { currentTarget: e } = t;
            if (!e) return;
            const r = e;
            this.isPlayButtonShown = r.paused && 0 === r.currentTime || r.ended;
          }
          render() {
            const t = this.source;
            if (!t) return X;
            const e = this.url
              ? z`<video
          .poster=${this.previewUrl}
          .src=${this.url}
          .controls=${!this.isPlayButtonShown}
          @error=${this.handleErrorVideo}
          @play=${this.checkPlayingState}
          @pause=${this.checkPlayingState}
        />`
              : X;
            return this.hasError
              ? (this.style.display = "contents", te(t.altContent))
              : z`<div style=${Wt({ aspectRatio: t.aspectRatio ?? 1 })}>
      ${e}
      ${
                this.isPlayButtonShown
                  ? z`<button class="play" @click=${this.handleClickPlay}></button>`
                  : t.action
                  ? z`<button
                class="link"
                @click=${this.handleClickLink}
              >${t.action.label}</button>`
                  : X
              }
    </div>`;
          }
          async updated() {
            var t, e, r, i, o, n, a, s;
            super.updated(),
              this.previewUrl ||
              (this.previewUrl = await re(this.contentInfosProvider, {
                source: null == (t = this.source)
                  ? void 0
                  : t.previewContentSource,
                descriptor: null == (e = this.source)
                  ? void 0
                  : e.previewContentDescriptor,
                expiredAt: null == (r = this.source)
                  ? void 0
                  : r.previewContentExpiredAt,
              }, null == (i = this.source) ? void 0 : i.previewUrl)),
              this.url || (this.url = await re(this.contentInfosProvider, {
                source: null == (o = this.source) ? void 0 : o.contentSource,
                descriptor: null == (n = this.source)
                  ? void 0
                  : n.contentDescriptor,
                expiredAt: null == (a = this.source)
                  ? void 0
                  : a.contentExpiredAt,
              }, null == (s = this.source) ? void 0 : s.url));
          }
          disconnectedCallback() {
            super.disconnectedCallback(), ie(this.previewUrl), ie(this.url);
          }
        };
        Rr([pt("video")], Ar.prototype, "video", 2),
          Rr(
            [ut({ attribute: !1 }), Se({ context: Oe })],
            Ar.prototype,
            "contentInfosProvider",
            2,
          ),
          Rr([dt()], Ar.prototype, "hasError", 2),
          Rr([dt()], Ar.prototype, "previewUrl", 2),
          Rr([dt()], Ar.prototype, "url", 2),
          Rr([dt()], Ar.prototype, "isPlayButtonShown", 2),
          Ar = Rr([st("flex-video")], Ar);
        r(25156);
      })();
  })();
