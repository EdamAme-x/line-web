let urlAlphabet =
    "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
  customAlphabet = (t, e = 21) => (a = e) => {
    let l = "", o = a;
    for (; o--;) l += t[Math.random() * t.length | 0];
    return l;
  },
  nanoid = (t = 21) => {
    let e = "", a = t;
    for (; a--;) e += urlAlphabet[64 * Math.random() | 0];
    return e;
  };
module.exports = { nanoid: nanoid, customAlphabet: customAlphabet };
