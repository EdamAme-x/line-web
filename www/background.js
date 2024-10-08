import "./cache.js";
const mainWindowId = {
    get: async () =>
      (await chrome.storage.local.get("mainWindow"))?.mainWindow ?? null,
    set: async (e) => await chrome.storage.local.set({ mainWindow: e }),
    remove: async () => await chrome.storage.local.remove("mainWindow"),
  },
  checkAndDeleteLegacyData = async () => {
    if (!(await chrome.storage.local.get("isOpenedBefore"))?.isOpenedBefore) {
      await chrome.storage.local.clear();
      const e = await indexedDB.databases();
      for (const o of e) await removeDatabase(o);
      await chrome.storage.local.set({ isOpenedBefore: !0 });
    }
  },
  removeDatabase = (e) =>
    new Promise((o, a) => {
      const n = indexedDB.deleteDatabase(e.name);
      n.onsuccess = () => o(),
        n.onerror = (e) => a(e),
        n.onblocked = () => a(new Error("deleteDatabase blocked"));
    });
chrome.action.onClicked.addListener(async () => {
  const e = await mainWindowId.get();
  if (e) {
    if (
      await new Promise((o) => {
        chrome.windows.update(e, { focused: !0 }, (e) => {
          e ? o(!0) : (mainWindowId.remove(), o(!1));
        });
      })
    ) return;
  }
  await checkAndDeleteLegacyData().catch((e) => {
    console.warn("Failed to delete legacy data", e);
  });
  const o = await chrome.system.display.getInfo(),
    { bounds: a } = o[0],
    n = { left: a.left + a.width / 2 - 400, top: a.top + a.height / 2 - 290 },
    t = await chrome.windows.create({
      url: chrome.runtime.getURL("index.html"),
      focused: !0,
      left: Math.floor(n.left),
      top: Math.floor(n.top),
      width: 800,
      height: 580,
      type: "panel",
    });
  mainWindowId.set(t.id),
    chrome.action.setIcon({
      path: {
        32: "../../line_logo_32x32_on.png",
        48: "../../line_logo_48x48_on.png",
        64: "../../line_logo_64x64_on.png",
        96: "../../line_logo_96x96_on.png",
        128: "../../line_logo_128x128_on.png",
      },
    }),
    chrome.action.setBadgeBackgroundColor({ color: "#df4d0f" });
}),
  chrome.windows.onRemoved.addListener(async (e) => {
    await mainWindowId.get() === e && (chrome.action.setIcon({
      path: {
        32: "../../line_logo_32x32_off.png",
        48: "../../line_logo_48x48_off.png",
        64: "../../line_logo_64x64_off.png",
        96: "../../line_logo_96x96_off.png",
        128: "../../line_logo_128x128_off.png",
      },
    }),
      chrome.action.setBadgeText({ text: "" }),
      mainWindowId.remove());
  });
