!function () {
  try {
    var e = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      n = (new Error()).stack;
    n &&
      (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "39b37193-e056-4889-8408-8407d69564e0",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-39b37193-e056-4889-8408-8407d69564e0");
  } catch (e) {}
}();
var _global = "undefined" !== typeof window
  ? window
  : "undefined" !== typeof global
  ? global
  : "undefined" !== typeof self
  ? self
  : {};
_global.SENTRY_RELEASE = { id: "line-chrome@3.5.1" },
  (globalThis.webpackChunkline_chrome = globalThis.webpackChunkline_chrome ||
    []).push([[496], {
      11496: (e, n, t) => {
        t.r(n),
          t.d(n, {
            CLSThresholds: () => P,
            FCPThresholds: () => S,
            FIDThresholds: () => R,
            INPThresholds: () => z,
            LCPThresholds: () => W,
            TTFBThresholds: () => $,
            getCLS: () => F,
            getFCP: () => I,
            getFID: () => N,
            getINP: () => V,
            getLCP: () => Z,
            getTTFB: () => ne,
            onCLS: () => F,
            onFCP: () => I,
            onFID: () => N,
            onINP: () => V,
            onLCP: () => Z,
            onTTFB: () => ne,
          });
        var r,
          i,
          o,
          a,
          c,
          u = -1,
          s = function (e) {
            addEventListener("pageshow", function (n) {
              n.persisted && (u = n.timeStamp, e(n));
            }, !0);
          },
          f = function () {
            return window.performance && performance.getEntriesByType &&
              performance.getEntriesByType("navigation")[0];
          },
          d = function () {
            var e = f();
            return e && e.activationStart || 0;
          },
          l = function (e, n) {
            var t = f(), r = "navigate";
            return u >= 0
              ? r = "back-forward-cache"
              : t && (r = document.prerendering || d() > 0
                ? "prerender"
                : document.wasDiscarded
                ? "restore"
                : t.type.replace(/_/g, "-")),
              {
                name: e,
                value: void 0 === n ? -1 : n,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(
                  Math.floor(8999999999999 * Math.random()) + 1e12,
                ),
                navigationType: r,
              };
          },
          p = function (e, n, t) {
            try {
              if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var r = new PerformanceObserver(function (e) {
                  Promise.resolve().then(function () {
                    n(e.getEntries());
                  });
                });
                return r.observe(
                  Object.assign({ type: e, buffered: !0 }, t || {}),
                ),
                  r;
              }
            } catch (e) {}
          },
          v = function (e, n, t, r) {
            var i, o;
            return function (a) {
              n.value >= 0 && (a || r) &&
                ((o = n.value - (i || 0)) || void 0 === i) &&
                (i = n.value,
                  n.delta = o,
                  n.rating = function (e, n) {
                    return e > n[1]
                      ? "poor"
                      : e > n[0]
                      ? "needs-improvement"
                      : "good";
                  }(n.value, t),
                  e(n));
            };
          },
          h = function (e) {
            requestAnimationFrame(function () {
              return requestAnimationFrame(function () {
                return e();
              });
            });
          },
          m = function (e) {
            var n = function (n) {
              "pagehide" !== n.type && "hidden" !== document.visibilityState ||
                e(n);
            };
            addEventListener("visibilitychange", n, !0),
              addEventListener("pagehide", n, !0);
          },
          g = function (e) {
            var n = !1;
            return function (t) {
              n || (e(t), n = !0);
            };
          },
          y = -1,
          T = function () {
            return "hidden" !== document.visibilityState ||
                document.prerendering
              ? 1 / 0
              : 0;
          },
          b = function (e) {
            "hidden" === document.visibilityState && y > -1 &&
              (y = "visibilitychange" === e.type ? e.timeStamp : 0, C());
          },
          E = function () {
            addEventListener("visibilitychange", b, !0),
              addEventListener("prerenderingchange", b, !0);
          },
          C = function () {
            removeEventListener("visibilitychange", b, !0),
              removeEventListener("prerenderingchange", b, !0);
          },
          w = function () {
            return y < 0 && (y = T(),
              E(),
              s(function () {
                setTimeout(function () {
                  y = T(), E();
                }, 0);
              })),
              {
                get firstHiddenTime() {
                  return y;
                },
              };
          },
          L = function (e) {
            document.prerendering
              ? addEventListener("prerenderingchange", function () {
                return e();
              }, !0)
              : e();
          },
          S = [1800, 3e3],
          I = function (e, n) {
            n = n || {},
              L(function () {
                var t,
                  r = w(),
                  i = l("FCP"),
                  o = p("paint", function (e) {
                    e.forEach(function (e) {
                      "first-contentful-paint" === e.name &&
                        (o.disconnect(),
                          e.startTime < r.firstHiddenTime &&
                          (i.value = Math.max(e.startTime - d(), 0),
                            i.entries.push(e),
                            t(!0)));
                    });
                  });
                o && (t = v(e, i, S, n.reportAllChanges),
                  s(function (r) {
                    i = l("FCP"),
                      t = v(e, i, S, n.reportAllChanges),
                      h(function () {
                        i.value = performance.now() - r.timeStamp, t(!0);
                      });
                  }));
              });
          },
          P = [.1, .25],
          F = function (e, n) {
            n = n || {},
              I(g(function () {
                var t,
                  r = l("CLS", 0),
                  i = 0,
                  o = [],
                  a = function (e) {
                    e.forEach(function (e) {
                      if (!e.hadRecentInput) {
                        var n = o[0], t = o[o.length - 1];
                        i && e.startTime - t.startTime < 1e3 &&
                          e.startTime - n.startTime < 5e3
                          ? (i += e.value, o.push(e))
                          : (i = e.value, o = [e]);
                      }
                    }), i > r.value && (r.value = i, r.entries = o, t());
                  },
                  c = p("layout-shift", a);
                c && (t = v(e, r, P, n.reportAllChanges),
                  m(function () {
                    a(c.takeRecords()), t(!0);
                  }),
                  s(function () {
                    i = 0,
                      r = l("CLS", 0),
                      t = v(e, r, P, n.reportAllChanges),
                      h(function () {
                        return t();
                      });
                  }),
                  setTimeout(t, 0));
              }));
          },
          A = { passive: !0, capture: !0 },
          D = new Date(),
          k = function (e, n) {
            r || (r = n, i = e, o = new Date(), B(removeEventListener), M());
          },
          M = function () {
            if (i >= 0 && i < o - D) {
              var e = {
                entryType: "first-input",
                name: r.type,
                target: r.target,
                cancelable: r.cancelable,
                startTime: r.timeStamp,
                processingStart: r.timeStamp + i,
              };
              a.forEach(function (n) {
                n(e);
              }), a = [];
            }
          },
          _ = function (e) {
            if (e.cancelable) {
              var n = (e.timeStamp > 1e12 ? new Date() : performance.now()) -
                e.timeStamp;
              "pointerdown" == e.type
                ? function (e, n) {
                  var t = function () {
                      k(e, n), i();
                    },
                    r = function () {
                      i();
                    },
                    i = function () {
                      removeEventListener("pointerup", t, A),
                        removeEventListener("pointercancel", r, A);
                    };
                  addEventListener("pointerup", t, A),
                    addEventListener("pointercancel", r, A);
                }(n, e)
                : k(n, e);
            }
          },
          B = function (e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(
              function (n) {
                return e(n, _, A);
              },
            );
          },
          R = [100, 300],
          N = function (e, n) {
            n = n || {},
              L(function () {
                var t,
                  o = w(),
                  c = l("FID"),
                  u = function (e) {
                    e.startTime < o.firstHiddenTime &&
                      (c.value = e.processingStart - e.startTime,
                        c.entries.push(e),
                        t(!0));
                  },
                  f = function (e) {
                    e.forEach(u);
                  },
                  d = p("first-input", f);
                t = v(e, c, R, n.reportAllChanges),
                  d && m(g(function () {
                    f(d.takeRecords()), d.disconnect();
                  })),
                  d && s(function () {
                    var o;
                    c = l("FID"),
                      t = v(e, c, R, n.reportAllChanges),
                      a = [],
                      i = -1,
                      r = null,
                      B(addEventListener),
                      o = u,
                      a.push(o),
                      M();
                  });
              });
          },
          x = 0,
          H = 1 / 0,
          O = 0,
          q = function (e) {
            e.forEach(function (e) {
              e.interactionId &&
                (H = Math.min(H, e.interactionId),
                  O = Math.max(O, e.interactionId),
                  x = O ? (O - H) / 7 + 1 : 0);
            });
          },
          j = function () {
            return c ? x : performance.interactionCount || 0;
          },
          Y = function () {
            "interactionCount" in performance || c ||
              (c = p("event", q, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
              }));
          },
          z = [200, 500],
          G = 0,
          J = function () {
            return j() - G;
          },
          K = [],
          Q = {},
          U = function (e) {
            var n = K[K.length - 1], t = Q[e.interactionId];
            if (t || K.length < 10 || e.duration > n.latency) {
              if (t) {
                t.entries.push(e), t.latency = Math.max(t.latency, e.duration);
              } else {
                var r = {
                  id: e.interactionId,
                  latency: e.duration,
                  entries: [e],
                };
                Q[r.id] = r, K.push(r);
              }
              K.sort(function (e, n) {
                return n.latency - e.latency;
              }),
                K.splice(10).forEach(function (e) {
                  delete Q[e.id];
                });
            }
          },
          V = function (e, n) {
            n = n || {},
              L(function () {
                Y();
                var t,
                  r = l("INP"),
                  i = function (e) {
                    e.forEach(function (e) {
                      e.interactionId && U(e),
                        "first-input" === e.entryType && !K.some(function (n) {
                          return n.entries.some(function (n) {
                            return e.duration === n.duration &&
                              e.startTime === n.startTime;
                          });
                        }) && U(e);
                    });
                    var n,
                      i =
                        (n = Math.min(K.length - 1, Math.floor(J() / 50)),
                          K[n]);
                    i && i.latency !== r.value &&
                      (r.value = i.latency, r.entries = i.entries, t());
                  },
                  o = p("event", i, {
                    durationThreshold: n.durationThreshold || 40,
                  });
                t = v(e, r, z, n.reportAllChanges),
                  o &&
                  (o.observe({ type: "first-input", buffered: !0 }),
                    m(function () {
                      i(o.takeRecords()),
                        r.value < 0 && J() > 0 && (r.value = 0, r.entries = []),
                        t(!0);
                    }),
                    s(function () {
                      K = [],
                        G = j(),
                        r = l("INP"),
                        t = v(e, r, z, n.reportAllChanges);
                    }));
              });
          },
          W = [2500, 4e3],
          X = {},
          Z = function (e, n) {
            n = n || {},
              L(function () {
                var t,
                  r = w(),
                  i = l("LCP"),
                  o = function (e) {
                    var n = e[e.length - 1];
                    n && n.startTime < r.firstHiddenTime &&
                      (i.value = Math.max(n.startTime - d(), 0),
                        i.entries = [n],
                        t());
                  },
                  a = p("largest-contentful-paint", o);
                if (a) {
                  t = v(e, i, W, n.reportAllChanges);
                  var c = g(function () {
                    X[i.id] ||
                      (o(a.takeRecords()), a.disconnect(), X[i.id] = !0, t(!0));
                  });
                  ["keydown", "click"].forEach(function (e) {
                    addEventListener(e, c, !0);
                  }),
                    m(c),
                    s(function (r) {
                      i = l("LCP"),
                        t = v(e, i, W, n.reportAllChanges),
                        h(function () {
                          i.value = performance.now() - r.timeStamp,
                            X[i.id] = !0,
                            t(!0);
                        });
                    });
                }
              });
          },
          $ = [800, 1800],
          ee = function e(n) {
            document.prerendering
              ? L(function () {
                return e(n);
              })
              : "complete" !== document.readyState
              ? addEventListener("load", function () {
                return e(n);
              }, !0)
              : setTimeout(n, 0);
          },
          ne = function (e, n) {
            n = n || {};
            var t = l("TTFB"), r = v(e, t, $, n.reportAllChanges);
            ee(function () {
              var i = f();
              if (i) {
                var o = i.responseStart;
                if (o <= 0 || o > performance.now()) return;
                t.value = Math.max(o - d(), 0),
                  t.entries = [i],
                  r(!0),
                  s(function () {
                    t = l("TTFB", 0), (r = v(e, t, $, n.reportAllChanges))(!0);
                  });
              }
            });
          };
      },
    }]);
