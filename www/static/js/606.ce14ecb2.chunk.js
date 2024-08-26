!function () {
  try {
    var a = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      e = (new Error()).stack;
    e &&
      (a._sentryDebugIds = a._sentryDebugIds || {},
        a._sentryDebugIds[e] = "54e5e596-6a5b-4880-987b-4685e8c984c3",
        a._sentryDebugIdIdentifier =
          "sentry-dbid-54e5e596-6a5b-4880-987b-4685e8c984c3");
  } catch (a) {}
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
    []).push([[606], {
      6606: (a, e, n) => {
        n.r(e), n.d(e, { default: () => i });
        const i = {
          "abuse.report.sent.data.notice.chat_selected":
            "Pesan yang dilaporkan, hingga 9 pesan yang dikirim sebelum dan sesudahnya, informasi pengguna dari terlapor (termasuk nama tampilan, ikon profil, dan pesan status), serta informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil).",
          "abuse.report.sent.data.notice.direct_chat":
            "10 pesan terbaru di obrolan ini, informasi pengguna dari terlapor (termasuk nama tampilan, ikon profil, dan pesan status), serta informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil).",
          "abuse.report.sent.data.notice.direct_invitation":
            "10 pesan terbaru di obrolan ini, informasi pengguna dari terlapor (termasuk nama tampilan, ikon profil, dan pesan status), serta informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil).",
          "abuse.report.sent.data.notice.friend_profile":
            "Informasi pengguna dari terlapor (termasuk nama tampilan, ikon profil, dan pesan status), serta informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil).",
          "abuse.report.sent.data.notice.group_chat":
            "10 pesan terbaru di grup ini, informasi grup (termasuk nama grup, ikon profil grup, dan informasi dari pengguna yang mengundang Anda ke grup), serta informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil).",
          "abuse.report.sent.data.notice.group_chat_selected":
            "Pesan yang dilaporkan, hingga 9 pesan yang dikirim sebelum dan sesudahnya, informasi grup (termasuk nama grup, ikon profil grup, dan informasi dari pengguna yang mengundang Anda ke grup), serta informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil).",
          "abuse.report.sent.data.notice.group_invitation":
            "10 pesan terbaru di grup ini, informasi grup (termasuk nama grup, ikon profil grup, dan informasi dari pengguna yang mengundang Anda ke grup), serta informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil).",
          "abuse.report.sent.data.notice.note_comment":
            "Komentar yang dilaporkan, Note di mana komentar tersebut berada, informasi pengguna terlapor (termasuk nama tampilannya), serta informasi Anda sebagai pelapor (termasuk nama tampilan Anda).",
          "abuse.report.sent.data.notice.note_post":
            "Note yang dilaporkan, komentar pada Note tersebut, informasi pengguna terlapor (termasuk nama tampilannya), serta informasi Anda sebagai pelapor (termasuk nama tampilan Anda).",
          "abuse.report.sent.data.notice.room_chat":
            "10 pesan terbaru di obrolan ini, informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil), serta informasi obrolan (termasuk informasi dari pengguna yang mengundang Anda ke obrolan).",
          "abuse.report.sent.data.notice.room_chat_selected":
            "Pesan yang dilaporkan, hingga 9 pesan yang dikirim sebelum dan sesudahnya, informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil), serta informasi obrolan (termasuk informasi dari pengguna yang mengundang Anda ke obrolan).",
          "abuse.report.sent.data.notice.room_invitation":
            "10 pesan terbaru di obrolan ini, informasi Anda sebagai pelapor (termasuk nama tampilan dan ikon profil), serta informasi obrolan (termasuk informasi dari pengguna yang mengundang Anda ke obrolan).",
          "abuse.report.sent.data.notice.square.chat.selected":
            "Informasi terkait OpenChat yang dilaporkan (nama ruang obrolan, foto sampul, jumlah anggota, dan pengidentifikasi OpenChat) bersama dengan 100 pesan terakhir di ruang obrolan, dan informasi Anda sebagai pelapor serta informasi admin OpenChat yang dilaporkan (nama panggilan yang digunakan di ruang obrolan dan pengidentifikasi pengguna).",
          "abuse.report.sent.data.notice.square.member.selected":
            "Informasi terkait OpenChat yang dilaporkan (nama ruang obrolan, foto sampul, dan jumlah anggota) bersamaan dengan 100 pesan terakhir di ruang obrolan, dan informasi Anda sebagai pelapor serta detail terkait pengguna yang dilaporkan (ikon profil pengguna, nama panggilan, dan pengidentifikasi pengguna).",
          "abuse.report.sent.data.notice.square.message.selected":
            "Informasi terkait ruang obrolan yang dilaporkan (pengidentifikasi ruang obrolan) dan OpenChat yang dilaporkan (nama ruang obrolan, foto sampul, jumlah anggota, dan pengidentifikasi OpenChat) bersama dengan 10 pesan terakhir dari pesan yang dilaporkan di ruang obrolan, dan informasi Anda sebagai pelapor serta detail terkait pengguna yang dilaporkan (ikon profil pengguna, nama panggilan yang digunakan di ruang obrolan, dan pengidentifikasi pengguna).",
          "abuse.report.sent.data.notice.square.note.selected":
            "Konten dari Note yang dilaporkan (teks, gambar, video, emotikon, dan pengidentifikasi pos), informasi terkait OpenChat (nama ruang obrolan, foto sampul, jumlah anggota, dan pengidentifikasi OpenChat), dan informasi Anda sebagai pelapor serta detail terkait pengguna yang dilaporkan (termasuk ikon profil pengguna, status keanggotaan, nama panggilan yang digunakan di ruang obrolan, dan pengidentifikasi pengguna).",
          "abuse.report.sent.data.notice.square.notecomment.selected":
            "Detail dari komentar yang dilaporkan (teks, gambar, emotikon, dan pengidentifikasi komentar), informasi terkait OpenChat (nama, foto sampul, jumlah anggota, dan pengidentifikasi OpenChat), dan informasi Anda sebagai pelapor serta detail terkait pengguna yang dilaporkan (termasuk ikon profil pengguna, status keanggotaan, nama panggilan yang digunakan di ruang obrolan, dan pengidentifikasi pengguna).",
          "abuse.report.sent.data.notice.square.setting.selected":
            "Informasi terkait ruang obrolan yang dilaporkan (nama ruang obrolan, foto sampul, jumlah anggota, dan pengidentifikasi ruang obrolan) bersama dengan 50 pesan terakhir di ruang obrolan, informasi OpenChat yang dilaporkan (pengidentifikasi OpenChat), dan informasi Anda sebagai pelapor serta detail terkait admin ruang obrolan yang dilaporkan (nama panggilan yang digunakan di ruang obrolan dan pengidentifikasi pengguna).",
          "abuse.report.sent.data.notice.template":
            "Saat laporan dibuat, informasi berikut akan dikirimkan ke LY Corporation. Informasi yang kami terima digunakan untuk memverifikasi konten laporan, mengambil tindakan yang sesuai, dan untuk mencegah penyalahgunaan layanan kami di masa yang akan datang. Hal ini termasuk menggunakan informasi yang diterima untuk mengembangkan alat pencegahan penyalahgunaan.\nSehubungan dengan hal ini, informasi yang Anda berikan mungkin akan dibagikan dengan dasar pemberitahuan kepada perusahaan lain dalam grup yang sama dengan kami serta kontraktor pihak ketiga terkait.\n\nInformasi yang dikirim bersama dengan laporan Anda: \n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "informasi dari komentar pada Note yang dilaporkan (seperti pengidentifikasi komentar, teks, gambar, dan emotikon), informasi pengguna yang dilaporkan (seperti pengidentifikasi pengguna dan nama tampilan pengguna tersebut), informasi obrolan (seperti pengidentifikasi obrolan), dan informasi Anda (seperti pengidentifikasi pengguna Anda dan nama tampilan Anda).",
          "note.reportnote.desc.reportnotefrommenu":
            "informasi dari Note yang dilaporkan (seperti pengidentifikasi Note, teks, gambar, emotikon, dan video), informasi pengguna yang dilaporkan (seperti pengidentifikasi pengguna dan nama tampilan pengguna tersebut), informasi obrolan (seperti pengidentifikasi obrolan), dan informasi Anda (seperti pengidentifikasi pengguna Anda dan nama tampilan Anda).",
          "openchat.abusereport.desc.threadmessage":
            "pesan yang dilaporkan serta 10 pesan sebelumnya pada Utas, informasi pengguna yang dilaporkan (seperti nama panggilan terlapor dan ikon profil terlapor), informasi OpenChat (seperti pengidentifikasi OpenChat, nama OpenChat, foto sampul, dan jumlah anggota), informasi obrolan (seperti pengidentifikasi obrolan), informasi Utas (seperti pengidentifikasi Utas), dan informasi Anda (seperti pengidentifikasi pengguna Anda dan nama panggilan pelapor).",
          "openchat.abusereport.desc.threaduser":
            "sebanyak 50 pesan terakhir yang dikirimkan ke Utas oleh pengguna yang dilaporkan, informasi pengguna yang dilaporkan (seperti pengidentifikasi pengguna, nama panggilan terlapor, dan ikon profil terlapor), informasi OpenChat (seperti nama OpenChat, foto sampul, dan jumlah anggota), informasi obrolan (seperti pengidentifikasi obrolan), informasi Utas (seperti pengidentifikasi Utas dan sebanyak 100 pesan terakhir yang dikirimkan ke Utas), dan informasi Anda (seperti pengidentifikasi pengguna Anda dan nama panggilan pelapor).",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "Ruang penyimpanan tidak cukup.\nSediakan ruang penyimpanan\nsetidaknya 30MB di hard disk Anda sebelum mencoba lagi.",
          ImageViewerLabelNoImage:
            "Tak ada foto yang dibagikan di obrolan ini.",
          "Keep.info.from.keepmemo": "Memo Keep",
          LoginErrorNaverLoginForbbide:
            "Harap masukkan alamat email dengan benar.",
          Poll_Message_btn: "Lihat detail",
          Poll_Title: "Polling",
          "Setting.Alert.Remove.History":
            "Setelah Anda menghapus riwayat obrolan, Anda tidak dapat mengembalikannya.\nYakin ingin menghapus? ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "Silakan mulai ulang LINE untuk mengganti rasio aspek.\nIngin mulai ulang sekarang?",
          "Setting.label.alarm.sound.1": "Default",
          "Setting.label.alarm.sound.2": "Fun LINE",
          "Setting.label.alarm.sound.3": "Calm LINE",
          "Setting.label.alarm.sound.4": "Bel",
          "Setting.label.alarm.sound.5": "Dorongan",
          "Setting.label.alarm.sound.6": "Marimba",
          "Setting.label.alarm.sound.7": "Peluit",
          "Setting.label.alarm.sound.8": "Bel Pintu",
          "Setting.label.alarm.sound.9": "Kristal",
          "access.chat.search.calendar": "Kalender",
          "access.openchat.chatmenu.button.addyourthreads":
            "Tambahkan ke Utas Favorit",
          "access.openchat.chatmenu.button.removeyourthreads":
            "Hapus dari Utas Favorit",
          "access.openchat.chatmenu.button.yourthreads": "Utas Favorit",
          "access.square.chat.button.more": "Buka Menu Opsi Iklan",
          "ad.alert.popup.cantplayduringcall":
            "Tidak dapat diputar saat melakukan panggilan.",
          "ad.desc.playinginviewer": "Diputar di penampil media",
          "ad.menu.admute.hideContent": "Sembunyikan Banner Ini",
          "ad.menu.admute.hideadvertiser": "Sembunyikan konten pengiklan ini",
          "ad.menu.admute.hidethisad": "Sembunyikan iklan ini",
          "ad.menu.videoEnlarge": "Bentangkan & Putar di Penampil",
          "addFriends.error.crossregion":
            "Silakan pindai kode QR pengguna ini untuk menambahkannya sebagai teman.",
          "addfriends.label.norecommendation.description":
            "Tidak ada rekomendasi teman.",
          "addfriends.menu.chatandgroup": "Buat Grup",
          "addfriends.search.captcha.fail":
            "Angka yang dimasukkan tidak sesuai dengan gambar. Silakan coba lagi agar bisa menambahkan teman.\n",
          "album.add.photo.drag": "Seret dan jatuhkan foto ke sini.",
          "album.addphotos.desc.limitexceeded":
            "Tambahkan maks. 1000 item per album.",
          "album.addpopup.desc.e2eeabletoretry":
            "Item tidak dapat ditambahkan. Silakan coba lagi.",
          "album.addpopup.desc.retry":
            "Beberapa item tidak dapat ditambahkan. Silakan coba lagi.",
          "album.addpopup.desc.unabletoretry":
            "Beberapa item tidak dapat ditambahkan karena tidak didukung di album.",
          "album.createalbum.tooltip.originalresolution.jp":
            "Pilih opsi ini untuk menambahkan foto dalam kualitas asli.",
          "album.deletepopup.desc.deletealbum":
            "Semua item dalam album ini akan dihapus secara permanen. Yakin ingin menghapus album?",
          "album.label.download": "Unduh",
          "album.main.desc.albumvideos.other": "%n video",
          "album.main.toast.encodingerror":
            "Video ini tidak dapat diputar karena eror pada pengodean.",
          "album.main.toast.encodinginprogress":
            "Pengodean sedang berlangsung. Coba lagi nanti.",
          "album.main.tooltip.paidplan":
            "Video hanya tersedia dalam paket berbayar, dan akan dihapus jika paket dibatalkan.",
          "album.mainpopup.button.no": "Tidak",
          "album.mainpopup.button.yes": "Ya",
          "album.mainpopup.desc.deletedvideo": "Video ini telah dihapus.",
          "album.mainpopup.desc.stopadding":
            "Berhenti menambahkan item berikut?",
          "album.msg.cancel.upload": "Ingin membatalkan penambahan foto ini?",
          "album.picker.toast.20videomax.jp":
            "Tambahkan maks. 20 video sekaligus.",
          "album.picker.toast.5minutesvideomax.jp":
            "Tambah video berdurasi 5 menit atau kurang.",
          "album.picker.toast.max300": "Tambahkan maks. 300 video sekaligus.",
          "album.picker.toast.originalresolution.jp":
            "Foto yang dipilih akan ditambahkan dalam kualitas asli.",
          "album.picker.toast.over20mb.jp":
            "Video, foto berukuran besar atau dengan format yang tidak didukung, serta foto yang diedit di LINE akan ditambahkan dalam kualitas standar.",
          "album.picker.toast.somestandard.jp":
            "Foto yang dipilih akan ditambahkan dalam kualitas aslinya. Video, foto berukuran besar atau dengan format yang tidak didukung, serta foto yang diedit di LINE akan ditambahkan dalam kualitas standar.",
          "album.picker.toast.videomax.jp.other":
            "Tambahkan maks. %n video ke album ini.",
          "album.share.toast.addvideomax.jp":
            "Tambahkan maks. 100 video per album.",
          "album.updatepopup.button.dontshow": "Jangan Tampilkan Lagi",
          "album.updatepopup.button.later": "Nanti",
          "album.updatepopup.button.updatenow": "Update Sekarang",
          "album.updatepopup.desc.notavailable":
            "Sebagian isi album mungkin tidak muncul pada versi yang saat ini digunakan. Update LINE ke versi terbaru.",
          "album.viewer.button.additems": "Tambahkan Item",
          "alert.album.blocked.user":
            "Anda tidak dapat menggunakan album dengan pengguna yang diblokir.",
          "alert.note.blocked.user":
            "Anda tidak dapat menggunakan Note dengan pengguna yang diblokir.",
          "announce.donotshowagain": "Jangan tampilkan lagi",
          "announce.donotshowagain.mouseover": "Jangan tampilkan lagi",
          "announce.error": "Pesan pemberitahuan tidak dapat ditemukan.",
          "announce.minimize": "Perkecil",
          "announce.unannounce": "Batalkan pemberitahuan",
          "announcement.message.album": "Album: %1",
          "announcement.message.annoucement": "Pemberitahuan",
          "announcement.message.error.description":
            "Pesan pemberitahuan tidak dapat ditemukan.",
          "announcement.message.note.no.text": "Note dibagikan di %1",
          "announcement.message.note.text": "Note: %1",
          "announcement.system.message":
            "<![CDATA[%1 membuat <u>Pemberitahuan</u>.]]>",
          "app.title": "Pembaruan LINE",
          "att.prepopup.description":
            "Tindakan ini akan mengizinkan kami untuk menyesuaikan konten LINE serta iklan dengan minat pengguna.",
          "authorize.content.desc1":
            "Sebagai penanganan keamanan,\nAnda harus memverifikasi akun Anda ketika login dari PC untuk pertama kalinya.\n",
          "authorize.content.desc2":
            "Masukkan kode berikut ini di ponsel cerdas Anda.\n",
          "authorize.e2ee.about.letterSealing": "Apakah Letter Sealing itu?",
          "authorize.e2ee.app.update":
            "LINE kini menawarkan keamanan yang ditingkatkan.\nSilakan perbarui LINE ke versi terkini.",
          "authorize.e2ee.desc1":
            "Anda perlu memverifikasi akun Anda\nagar dapat menggunakan Letter Sealing.",
          "authorize.e2ee.desc2":
            "Masukkan kode berikut ini di ponsel cerdas Anda.\n",
          "authorize.e2ee.primary.cancel":
            "Verifikasi di perangkat Anda dibatalkan. Silakan coba lagi.",
          "authorize.msg.closing.alert":
            "Anda tidak dapat login jika jendela ini ditutup. Tetap lanjutkan?",
          "authorize.msg.timeout.alert":
            "Login Anda telah kadaluarsa.\nSilakan coba lagi.",
          "authorize.msg.useage.alert":
            'Buka Pengaturan > Akun pada ponsel lalu nyalakan opsi "Izinkan Login" untuk login.',
          "authorize.remained.time": "Sisa waktu",
          "authorize.window.title": "Verifikasi PC",
          "autoSuggest.add.language": "Tambah Bahasa",
          "autoSuggest.enable": 'Nyalakan "Tampilkan Rekomendasi"',
          "autoSuggest.enabled.language": "Bahasa",
          "autoSuggest.msg.desc": "Berdasarkan teks yang dimasukkan.",
          "autoSuggest.msg.desc.downloadFailed":
            "Gagal mengunduh.\nSilakan coba lagi.",
          "autoSuggest.msg.download.all.emoji": "Unduh semua emotikon?",
          "autoSuggest.msg.download.all.sticker":
            "Anda perlu mengunduh stiker untuk mempratinjaunya.\nUnduh semua stiker Anda?\n",
          "autoSuggest.title": "Tampilkan Rekomendasi Stiker",
          "buddy.alert.common.failed.add.contact":
            "Tidak dapat menambah teman.",
          "buddy.alert.not.allowed.add.contact":
            "Maaf, Anda tidak dapat menambah teman lagi karena jumlah teman di akun ini sudah maksimal.",
          "buddy.btn.addBuddy": "Tambah Teman",
          "buddy.btn.blockBuddy": "Blokir",
          "buddy.btn.chat": "Obrolan",
          "buddy.btn.home": "Beranda",
          "buddy.btn.setting.profile": "Edit Profil",
          "buddy.btn.unblockBuddy": "Buka Blokir",
          "buddy.btn.voip": "Panggilan Suara",
          "buddy.label.edit.title": "Ubah Nama Tampilan",
          "buddy.label.info.title": "Profil",
          "buddylist.chooseFriend.empty.btn": "Obrolan",
          "buddylist.chooseFriend.empty.desc": "Mulai percakapan baru!",
          "buddylist.chooseGroup.emty.desc":
            "Anda tidak memiliki riwayat obrolan\ndi %1.\nAyo Mulai percakapan!",
          "buddylist.chooseMe.empty.desc": "Mulai percakapan baru!",
          "buddylist.plusMenu.chat": "Obrolan",
          "budy.label.unregisterUser":
            "Pengguna ini belum ditambahkan sebagai teman. ",
          "call.callsettingspreview.desc.nocamera":
            "Periksa pengaturan panggilan Anda sebelum bergabung. Gambar Anda tidak akan terlihat karena kamera tidak terdeteksi.",
          "call.callsettingspreview.desc.nocameradetected":
            "Kamera Anda tidak terdeteksi.",
          "call.callsettingspreview.desc.nomic":
            "Periksa pengaturan panggilan Anda sebelum bergabung. Suara Anda tidak akan terdengar karena mikrofon tidak terdeteksi.",
          "call.callsettingspreview.desc.nomicdetected":
            "Mikrofon Anda tidak terdeteksi.",
          "call.callsettingspreview.desc.nomicorcamera":
            "Periksa pengaturan panggilan Anda sebelum bergabung. Gambar dan suara Anda tidak akan muncul karena kamera dan mikrofon tidak terdeteksi.",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "Kamera dan mikrofon Anda tidak terdeteksi.",
          "call.cameraoff.friend": "Kamera teman mati.",
          "call.cameraoff.me": "Kamera mati.",
          "call.chat.confirm.popup.start": "Mulai Panggilan?",
          "call.chat.confirm.popup.start.btn.video": "Mulai Panggilan Video",
          "call.chat.confirm.popup.start.btn.voice": "Mulai Panggilan Suara",
          "call.chatscreen.popup.alreadyinacall":
            "Anda sedang dalam panggilan.",
          "call.doodling.popup.viewerupdaterequired":
            "Pengguna lain harus mengupdate aplikasi LINE ke versi terbaru terlebih dahulu agar fitur ini dapat digunakan bersama-sama.",
          "call.doodling.toast.doodlepaused":
            "Coretan tidak dapat dibuat saat fitur Berbagi Layar dijeda.",
          "call.doodling.toast.noiosdoodle":
            "Fitur Coretan tidak tersedia untuk layar yang dibagikan pada iOS.",
          "call.doodling.toast.sharepaused": "Berbagi Layar sedang dijeda.",
          "call.doodling.toast.sharerupdaterequired":
            "Pengguna yang membagikan layarnya harus mengupdate aplikasi LINE ke versi terbaru terlebih dahulu agar seluruh partisipan dapat menggunakan fitur ini.",
          "call.effects.menu.stickers": "Stiker",
          "call.effects.popup.graphiccardproblem":
            "Gangguan dapat terjadi selama panggilan berlangsung karena kartu grafis perangkat tidak memenuhi persyaratan minimum untuk fitur Panggilan Video LINE.\nTetap lakukan panggilan?",
          "call.effects.popup.removebgeffect":
            "Jika latar yang saat ini digunakan dihapus, pengaturan video akan kembali menjadi Tanpa Latar. Yakin ingin menghapus latar?",
          "call.effects.toast.stickersonetime":
            "Beberapa stiker mungkin tidak tersedia selama panggilan.",
          "call.error.popupdesc.featureunavailableondevice":
            "Fitur yang digunakan oleh pengguna di Panggilan tidak tersedia di perangkat Anda. Gabung ke Panggilan dengan versi terbaru LINE untuk perangkat seluler untuk menggunakan fitur ini.",
          "call.error.popupdesc.groupcallunavailable":
            "Panggilan Grup saat ini tidak tersedia. Fitur ini sedang dalam proses pemulihan.",
          "call.error.popupdesc.livetalkunavailable":
            "Obrolan Langsung saat ini tidak tersedia. Fitur ini sedang dalam proses pemulihan.",
          "call.error.popupdesc.oacallunavailable":
            "Panggilan saat ini tidak bisa dilakukan. Fitur ini sedang dalam proses pemulihan.",
          "call.error.popupdesc.outdatedapp":
            "Fitur yang digunakan oleh pengguna di Panggilan tidak didukung oleh versi LINE ini. Update ke versi terbaru LINE untuk menggunakan fitur ini.",
          "call.error.popupdesc.videocallunavailable":
            "Panggilan Video saat ini tidak tersedia. Silakan lakukan Panggilan Suara sebagai gantinya.",
          "call.error.tooltip.audionosrc":
            "Periksa dan pastikan mikrofon berfungsi dengan baik.",
          "call.error.unsupporteddevice":
            "Panggilan LINE tidak didukung di perangkat ini.",
          "call.groupcall.leavebutton": "Tinggalkan Panggilan",
          "call.participants.desc.noresults": "Tidak ada hasil.",
          "call.screen.toast.updaterequired":
            "Stiker tidak dapat dilihat oleh teman yang menggunakan LINE versi lama.",
          "call.screenshare.taskbar.screenshare": "Pilih Layar untuk Dibagikan",
          "call.screenshare.taskbar.ytsearch": "Cari Video YouTube",
          "call.screenshare.toast.shareerror":
            "Fitur untuk berbagi layar sedang digunakan oleh %1.",
          "call.screenshare.toast.unsupportedos":
            "Untuk melihat layar yang dibagikan, update OS ke Windows 10 atau gunakan LINE untuk perangkat seluler.",
          "call.screenshare.youtube.popup.startvideo":
            "Bagikan layar dengan peserta panggilan?",
          "call.sharedcontent.desc.newdatatype":
            "%1 mulai menampilkan konten yang tidak didukung pada LINE versi lama Anda. Harap update LINE ke versi terbaru.",
          "call.toast.cpuheavyload":
            "Komputer Anda mengalami beban berlebih yang dapat memengaruhi kualitas panggilan. Silakan tutup aplikasi lain.",
          "call.toast.handsfreebt.mic":
            'Beralih ke mikrofon "%1". Silakan atur speaker ke perangkat yang sama.',
          "call.toast.handsfreebt.speaker":
            'Beralih ke speaker "%1". Silakan atur mikrofon ke perangkat yang sama.',
          "call.video.filter.clear": "Clear",
          "call.video.filter.original": "Original",
          "call.viewmode.desc.focusview": "Tampilan fokus",
          "call.viewmode.desc.focusviewcenter": "Tampilan fokus (tengah)",
          "call.viewmode.desc.focusviewleft": "Tampilan fokus (kiri)",
          "call.viewmode.desc.focusviewright": "Tampilan fokus (kanan)",
          "call.viewmode.desc.gridview": "Tampilan grid",
          "call.viewmode.desc.separateview": "Tampilan layar terpisah",
          "call.watchtogethermenu.desc.100kviewsth": "%1",
          "call.watchtogethermenu.desc.100kwatchingth": "%1",
          "call.watchtogethermenu.desc.10kviewsth": "%1",
          "call.watchtogethermenu.desc.10kwatchingth": "%1",
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1 M Menonton",
          "call.watchtogethermenu.desc.1bviews": "%1\xa0M Kali Ditonton",
          "call.watchtogethermenu.desc.1eokpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1eokviews": "%1",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1 RB Menonton",
          "call.watchtogethermenu.desc.1kviews": "%1\xa0RB Kali Ditonton",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1manviews": "%1",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1 JT Menonton",
          "call.watchtogethermenu.desc.1mviews": "%1\xa0JT Kali Ditonton",
          "call.watchtogethermenu.desc.1mviewsth": "%1",
          "call.watchtogethermenu.desc.1mwatchingth": "%1",
          "call.watchtogethermenu.desc.daysago.other": "%n hari lalu",
          "call.watchtogethermenu.desc.hoursago.other": "%n jam lalu",
          "call.watchtogethermenu.desc.justnow": "Baru saja",
          "call.watchtogethermenu.desc.lessthan1kviewsth": "%1",
          "call.watchtogethermenu.desc.lessthan1kwatchingth": "%1",
          "call.watchtogethermenu.desc.minutesago.other": "%n menit lalu",
          "call.watchtogethermenu.desc.monthsago.other": "%n bulan lalu",
          "call.watchtogethermenu.desc.peoplewatchingen": "%1 Menonton",
          "call.watchtogethermenu.desc.userswatchinglivevideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideoen.other":
            "%n Kali Ditonton",
          "call.watchtogethermenu.desc.yearsago.other": "%n tahun lalu",
          "call.youtube.desc.headphones":
            "Harap gunakan headphone untuk mencegah gema.",
          "call.youtube.desc.noresults": "Tidak ada hasil.",
          "call.youtube.paste.descforonetoone":
            "Cari video yang ingin dibagikan kepada teman. (Disarankan menggunakan headphone.)",
          "call.youtube.popup.shareerror":
            "Video YouTube tidak dapat dibagikan karena eror sementara. Silakan coba lagi.",
          "call.youtube.popupbutton.allow": "Izinkan",
          "call.youtube.popupbutton.disallow": "Jangan Izinkan",
          "call.youtube.popupdesc.clipboard":
            "Dengan opsi ini, tautan video YouTube yang Anda salin akan otomatis ditempelkan ke browser.",
          "call.youtube.popuptitle.clipboard":
            "Izinkan LINE Mengakses Papan Klip Anda",
          "call.youtube.statusbadge.premiering": "Sedang Tayang",
          "call.youtube.title.trendingvideos": "Video Trending",
          "call.youtube.videodesc.date": "Tayang perdana pada %1",
          "call.youtube.videodesc.datevariable": "dd MMM, yyyy HH:mm",
          "capture.command.close": "Tutup",
          "capture.command.copy": "Salin",
          "capture.command.done": "Selesai",
          "capture.command.draw": "Gambar",
          "capture.command.gif": "Tangkap GIF",
          "capture.command.gif.cancel":
            "GIF akan dibuang jika layar tangkapan ditutup. Lanjutkan?",
          "capture.command.gif.create": "Membuat GIF",
          "capture.command.gif.error.maxFileSize":
            "Berkas GIF yang Anda buat lebih besar dari 20 MB.\n(saat ini %1 MB)\nSilakan coba lagi.",
          "capture.command.gif.error.maxSize":
            "Tidak dapat mengambil GIF karena area yang dipilih terlalu luas.\nPilih area lagi.",
          "capture.command.gif.error.size":
            "Area pilihan terlalu kecil untuk mengambil GIF.\nPilih ulang area.",
          "capture.command.gif.stop": "Stop",
          "capture.command.gif.tooltip":
            "Tangkap bagian dari layar dan simpan dalam format GIF.",
          "capture.command.quit": "Akhiri",
          "capture.command.redo": "Ulangi",
          "capture.command.save": "Simpan",
          "capture.command.share": "Bagikan",
          "capture.command.undo": "Batal",
          "capture.desc.need.os.recordscreen":
            "Screenshot tidak dapat diambil. Berikan LINE izin akses ke fitur Perekaman Layar.",
          "capture.msg.onEditing":
            "Perubahan akan dibuang jika layar tangkapan ditutup. Lanjutkan?",
          "capture.scan.error.maxFileSize":
            "Ukuran gambar yang ingin diambil terlalu besar. Harap sesuaikan ukuran gambar dan coba lagi.",
          "capture.scan.error.resolution":
            "Gambar tidak dapat diambil karena resolusinya tidak didukung. Harap sesuaikan resolusi gambar dan coba lagi.",
          "capture.tool.eclipse": "Bundar",
          "capture.tool.line": "Garis",
          "capture.tool.lineColor": "Warna Garis",
          "capture.tool.mosaic": "Pixelate",
          "capture.tool.penwidth": "Lebar",
          "capture.tool.rectangle": "Kotak",
          "capture.tool.select": "Pilih",
          "capture.tool.shape": "Bentuk",
          "capture.tool.text": "Teks",
          "capture.tool.textColor": "Warna Fon",
          "capture.tool.textSize": "Ukuran Fon",
          "capture.tool.textSize.big": "Besar",
          "capture.tool.textSize.medium": "Sedang",
          "capture.tool.textSize.small": "Kecil",
          "chat.action.leaveChat.confirm":
            "Jika Anda meninggalkan obrolan ini, semua riwayat obrolan akan dihapus.\nIngin meninggalkan obrolan ini?",
          "chat.alert.clipboard.largedata":
            "Ukuran item yang disalin terlalu besar untuk ditempelkan ke obrolan.",
          "chat.alert.file.open.fromNotbuddy":
            "File yang dikirim oleh pengguna yang tidak ada di daftar teman mungkin tidak aman.\nBuka file?",
          "chat.alert.file.open.fromSquare":
            "File yang dikirim oleh pengguna yang tidak dikenal mungkin tidak aman.\nBuka file?",
          "chat.alert.file.open.frombuddy":
            "Pastikan keamanan dari file sebelum membukanya.\nYakin ingin membuka file?",
          "chat.alert.file.open.notSupport":
            "File yang dipilih tidak dapat dibuka karena format file tidak didukung.",
          "chat.alert.file.unsupported.all.other":
            "Format file yang dipilih tidak didukung. Kompres dan kirimkan file?",
          "chat.alert.file.unsupported.some.other":
            "Format %n file tidak didukung. Kompres dan kirimkan file?",
          "chat.alert.invite.alreadyinvited": "%1\nsudah diundang.  ",
          "chat.alert.invite.alreadyjoined":
            "%1\nsudah menjadi anggota grup ini.  ",
          "chat.alert.invite.blockedbuddy":
            "Anda tidak dapat mengundang akun yang diblokir.",
          "chat.alert.invite.confirm": "Undang %1\nke obrolan ini?",
          "chat.alert.invite.notbuddy":
            "Tambahkan %1 sebagai teman\nuntuk mengundangnya ke obrolan ini. ",
          "chat.alert.invite.verificationrequired":
            "Untuk bergabung ke grup melalui kode QR atau tautan undangan, Anda harus memverifikasi bahwa Anda berusia setidaknya 18 tahun.",
          "chat.alert.sharePost": "Berbagi note dan album\ndengan %1?",
          "chat.alert.unavailable.file":
            "File ini tidak dapat dibagikan karena masa penyimpanannya telah berakhir.",
          "chat.alert.unsend.fail.error":
            "Tidak dapat mengurungkan pengiriman pesan. Silakan coba lagi.",
          "chat.alert.unsend.fail.time":
            "Pesan tidak dapat diurungkan pengirimannya jika sudah terlalu lama terkirim.",
          "chat.alert.unsend.old.version":
            "Pesan mungkin akan tetap ditampilkan pada layar obrolan teman Anda, tergantung dari versi LINE yang digunakan oleh teman Anda. Yakin ingin mengurungkan pengiriman pesan?",
          "chat.audio.tooltip": "Audio",
          "chat.btn.capture.tooltip": "Tangkap Layar",
          "chat.btn.close.tooltip": "Tutup",
          "chat.btn.emoji": "Emotikon",
          "chat.btn.facemark": "Emotikon",
          "chat.btn.file": "Kirim Berkas",
          "chat.btn.keepmemo.tooltip": "Memo Keep",
          "chat.btn.max.tooltip": "Perbesar",
          "chat.btn.menu.tooltip": "Menu",
          "chat.btn.min.tooltip": "Perkecil",
          "chat.btn.reset.tooltip": "Ke Semula",
          "chat.btn.sticker": "Stiker",
          "chat.btn.sticker.tooltip": "Stiker",
          "chat.btn.voip": "Panggilan Gratis",
          "chat.contact.label": "Kontak",
          "chat.context.menu.search.name": "Cari nama",
          "chat.context.menu.send.contact": "Bagikan Kontak",
          "chat.context.menu.talk": "Mengobrol 1:1",
          "chat.desc.quit.uploading":
            "Saat ini Anda sedang mengirim satu atau lebih berkas di obrolan.\nMenutup LINE sekarang akan menyebabkan berkas tidak terkirim dengan baik.",
          "chat.edit.alert.unavailable.picture":
            "Tidak dapat memuat foto karena sudah tidak tersedia lagi.",
          "chat.emoji.label.animation.unavailable":
            "Lihat animasi stiker di ponsel cerdas Anda.",
          "chat.emoji.label.recentIconDesc1":
            "Emotikon yang digunakan baru-baru ini ditampilkan di sini.",
          "chat.emoji.label.recentIconDesc2": "Coba kirim emotikon ke teman.",
          "chat.emoji.label.recentLetterDesc1":
            "Emotikon yang digunakan baru-baru ini ditampilkan di sini.",
          "chat.emoji.label.recentLetterDesc2": "Coba kirim emotikon ke teman.",
          "chat.emoji.label.recentStickerDesc1":
            "Stiker yang digunakan baru-baru ini ditampilkan di sini.",
          "chat.emoji.label.recentStickerDesc2": "Coba kirim stiker ke teman.",
          "chat.err.file.broken":
            "Tidak dapat menyimpan berkas.\nSilakan cek ruang penyimpanan yang tersedia di PC.",
          "chat.err.file.download.failed": "Gagal menyimpan berkas.",
          "chat.err.file.download.localError":
            "Gagal menyimpan berkas. Silakan coba lagi nanti.",
          "chat.err.file.exceed.capacity":
            "Maaf, Anda hanya dapat mengirim hingga %1 berkas dalam satu waktu.",
          "chat.err.file.exceed.dailyCapacity":
            "Maaf, Anda hanya dapat mengirim hingga %1 berkas dalam satu hari.",
          "chat.err.file.folderPermission":
            "Tidak dapat menyimpan berkas ke folder yang dipilih.\nSilakan pilih lokasi lainnya dan coba lagi.",
          "chat.err.file.need.space":
            "Ruang penyimpanan Anda tidak cukup. Silakan periksa ruang kosong yang tersisa dan coba lagi.",
          "chat.err.file.open":
            "Berkas ini sedang digunakan. Silakan coba kirim lagi setelah menutupnya.",
          "chat.err.file.some.unpardoned":
            "Format berkas ini tidak dapat dikirim.\nSemua berkas lainnya yang telah dipilih akan dikirim.\n",
          "chat.err.file.unpardoned": "Format berkas ini tidak dapat dikirim.",
          "chat.err.media.copyFailed":
            "Pengodean sedang berlangsung.\nSilakan coba lagi nanti.",
          "chat.err.media.infoLoadFailed":
            "Permintaan Anda belum diproses karena eror koneksi jaringan.\nSilakan coba lagi.",
          "chat.error.badwords":
            "Tidak dapat mengirim menggunakan info ini.\nSilakan coba gunakan info lainnya.",
          "chat.error.popup.noauth":
            "File tidak dapat dibuka karena LINE tidak memiliki izin untuk membuka file dari folder ini.",
          "chat.file.audio.sizeExceeds":
            "Anda hanya dapat mengirim berkas audio berukuran hingga 30MB.",
          "chat.file.cancel.tooltip": "Batal",
          "chat.file.cantFindFile": "Berkas tidak dapat ditemukan.",
          "chat.file.closeConfirm":
            "Proses transfer berkas yang sedang berlangsung akan dibatalkan jika Anda menutup jendela ini.\nYakin ingin menutupnya?",
          "chat.file.countExceeds":
            "Anda dapat mengirim hingga %1 file dalam satu waktu.",
          "chat.file.label.expired": "Kedaluwarsa",
          "chat.file.video.sizeExceeds":
            "Anda hanya dapat mengirim berkas video berukuran hingga 200MB.",
          "chat.flex.btn.send": "Selesai",
          "chat.flex.date.select": "Pilih tanggal",
          "chat.flex.datetime.select": "Pilih tanggal dan waktu",
          "chat.flex.error.unknown":
            "Fitur ini tidak tersedia pada versi LINE yang Anda gunakan.",
          "chat.flex.time.select": "Pilih waktu",
          "chat.group.msg.e2ee.guide":
            "Obrolan ini dilindungi\noleh Letter Sealing",
          "chat.group.noMember.placeholder": "Ruang obrolan ini kosong.",
          "chat.grouphome.label.enjoySns.title":
            "Berbagi note dan album dengan teman di jejaring sosial yang menyenangkan ini!\n",
          "chat.image.tooltip": "Foto",
          "chat.input.placeholder": "Masukkan pesan",
          "chat.inputbar.msg.album": "Album",
          "chat.inputbar.msg.albumcontents": "Item Album",
          "chat.label.del": "Hapus",
          "chat.label.makeAlbum": 'Membuat album "%1".',
          "chat.label.open": "Buka",
          "chat.label.openFile": "Buka File",
          "chat.label.openFolder": "Buka Folder",
          "chat.label.playback": "Putar",
          "chat.label.retry": "Kirim Ulang",
          "chat.label.save": "Simpan",
          "chat.label.saveAs": "Simpan Sebagai\u2026",
          "chat.label.saveOpen": "Simpan dan Buka",
          "chat.label.sendFail": "Tidak Dapat Mengirim",
          "chat.label.share": "Bagikan",
          "chat.label.showAlbum": "Lihat Album",
          "chat.label.showPost": "Tampilkan Note",
          "chat.label.showPrev": "Lihat Obrolan Sebelumnya",
          "chat.label.totalMediaCount": "Total %1",
          "chat.linemusic.shared": "Anda membagikan musik.",
          "chat.linemusic.shared.other": "%1 membagikan musik.",
          "chat.list.call":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Waktu Panggilan]]>',
          "chat.list.call.canceled":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Panggilan Dibatalkan]]>',
          "chat.list.call.icon":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\">]]>',
          "chat.list.call.missedCall":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Tak Terjawab]]>',
          "chat.list.call.rejected":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Tak Dijawab]]>',
          "chat.list.desc.read.unread.all":
            "Semua pesan kini dalam kondisi telah dibaca.",
          "chat.list.group.createdby": "Grup dibuat oleh:",
          "chat.list.group.invite": "%1 mengundang Anda ke grup.",
          "chat.list.group.layer": "Anda telah diundang ke grup ini.",
          "chat.list.group.nogroupcreator":
            "Saat ini pembuat grup bukan anggota dari grup ini.",
          "chat.list.linecall": "[LINE Out]",
          "chat.list.mention": "Anda disebut.",
          "chat.list.menu.clear.all.unreadmessage":
            "Jadikan Semua Telah Dibaca",
          "chat.list.menu.sort.favorites": "Favorit",
          "chat.list.menu.sort.time": "Waktu Diterima",
          "chat.list.menu.sort.unreadcount": "Pesan Belum Dibaca",
          "chat.list.menu.tooltip": "Pilah per",
          "chat.list.sortBtn.tooltip": "Pesan Belum Dibaca",
          "chat.list.sortByUnread.desc":
            "Pesan belum dibaca telah dipindahkan ke bagian teratas. ",
          "chat.menu.Image.download": "Pengunduhan selesai.",
          "chat.menu.Image.download.fail":
            "File tidak dapat disimpan.\nSilakan coba lagi.",
          "chat.menu.alarmOff": "Matikan",
          "chat.menu.alarmOn": "Nyalakan",
          "chat.menu.albums": "Album",
          "chat.menu.alwaysTop": "Tampilkan di Layar Terdepan",
          "chat.menu.backgroundSetting": "Pengaturan Latar",
          "chat.menu.backgroundSetting.apply": "Terapkan",
          "chat.menu.backgroundSetting.cancel": "Batal",
          "chat.menu.backgroundSetting.file": "Pilih Berkas",
          "chat.menu.backgroundSetting.image.failed":
            "Foto yang Anda pilih tidak tersedia.",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "Anda hanya dapat mengunggah gambar berukuran %MB ke bawah.",
          "chat.menu.backgroundSetting.option": "Opsi Tampilan",
          "chat.menu.backgroundSetting.option.detail": "Petak",
          "chat.menu.backgroundSetting.option.fill": "Penuhi",
          "chat.menu.backgroundSetting.photo.save.failed":
            "Gagal menyimpan foto.",
          "chat.menu.backgroundSetting.photo.transparency": "Transparansi",
          "chat.menu.backgroundSetting.photoGuide":
            "Kustomisasi latar obrolan Anda.",
          "chat.menu.backgroundSetting.reset": "Atur Ulang",
          "chat.menu.backgroundSetting.select": "Pilih Latar",
          "chat.menu.backgroundSetting.tab.color": "Warna",
          "chat.menu.backgroundSetting.tab.illustration": "Ilustrasi",
          "chat.menu.backgroundSetting.tab.photo": "Foto",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "Tidak tersedia dalam mode gelap.",
          "chat.menu.copy": "Salin",
          "chat.menu.delete": "Hapus Semua Riwayat Obrolan",
          "chat.menu.group.noMember": "Tak Ada Anggota",
          "chat.menu.invite": "Undang",
          "chat.menu.invite.group": "Anggota/Undang",
          "chat.menu.leave": "Tinggalkan Obrolan",
          "chat.menu.make": "Buat Grup",
          "chat.menu.msg.announce": "Pemberitahuan",
          "chat.menu.msg.unsend": "Urung Kirim",
          "chat.menu.openAlbum": "Lihat Semua Gambar",
          "chat.menu.openAlbum.download": "Selesai mengunduh.",
          "chat.menu.openAlbum.download.fail": "Tidak dapat mengunduh item.",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "Tidak dapat menyelesaikan pengunduhan ke folder yang dipilih.\nUbah lokasi pengunduhan Anda dan coba lagi.",
          "chat.menu.openAlbum.download.open": "Buka Folder",
          "chat.menu.openAlbum.downloading": "Mengunduh...",
          "chat.menu.openAlbum.retry": "Coba Lagi",
          "chat.menu.openAlbum.saveKeep": "Tersimpan di Keep.",
          "chat.menu.openAlbum.saveKeep.open": "Buka Keep",
          "chat.menu.openAlbum.savingKeep": "Menyimpan di Keep...",
          "chat.menu.openAlbum.savingKeep.fail":
            "Tidak dapat menyimpan di Keep.",
          "chat.menu.openAlbum.selected": "%1 item dipilih",
          "chat.menu.openLink": "Lihat Semua URL",
          "chat.menu.openLink.noURL":
            "Tak ada URL yang dibagikan di obrolan ini.",
          "chat.menu.paste": "Tempel",
          "chat.menu.recommend": "Rekomendasi",
          "chat.menu.save": "Simpan Obrolan",
          "chat.menu.save.note": "Simpan ke Note",
          "chat.menu.searchMsgs": "Cari Obrolan",
          "chat.menu.selectAll": "Pilih semua",
          "chat.menu.selectedCopy": "Salin Teks yang Dipilih",
          "chat.menu.settings": "Pengaturan",
          "chat.menu.showAllContents": "Lihat semua konten",
          "chat.menu.sticker.openWebStore": "Toko Stiker",
          "chat.menu.sticker.showDetail": "Buka",
          "chat.menu.translation": "Terjemahkan",
          "chat.message.present.emoji.receive": "Menghadiahkan emotikon!",
          "chat.message.present.receive.confirm": "Lihat!",
          "chat.message.present.sticker.receive": "Menghadiahkan stiker!",
          "chat.message.present.theme.receive":
            "Menghadiahkan tema!\nAnda dapat memeriksanya di LINE\nponsel cerdas Anda.",
          "chat.message.sharealbum": "Album telah dibagikan.",
          "chat.message.sharenote": "Note dibagikan.",
          "chat.msg.album.addphoto.other": "%n item ditambahkan ke album.",
          "chat.msg.album.create": 'Album "%1" dibuat.',
          "chat.msg.album.delete": '%1 menghapus album "%2".',
          "chat.msg.album.removephoto":
            '%1 menghapus satu atau beberapa item dari album "%2".',
          "chat.msg.album.rename": '%1 mengubah nama album dari "%2" ke "%3".',
          "chat.msg.album.viewPhoto": "Lihat Album",
          "chat.msg.applink.app.recv": "Cek %1 di ponsel cerdas Anda!",
          "chat.msg.applink.app.sent":
            "Anda memperkenalkan %1. Silakan cek di ponsel cerdas Anda.",
          "chat.msg.applink.friend.recv":
            "Anda mendapat permintaan berteman dari %1. Silakan periksa di ponsel cerdas Anda.",
          "chat.msg.applink.friend.sent":
            "Permintaan berteman Anda telah dikirim di %1!",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "Dibatalkan",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[Ini adalah panggilan yang menerapkan Letter Sealing.\nIkon<img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11">akan ditampilkan pada panggilan dengan keamanan yang ditingkatkan.]]>',
          "chat.msg.call.missedCall": "Tak Terjawab",
          "chat.msg.call.rejected": "Tak Dijawab",
          "chat.msg.changeGroupImage": "%1 mengubah gambar grup.",
          "chat.msg.changeGroupName": "%1 mengubah nama grup menjadi %2.",
          "chat.msg.chatevent.unknown":
            "Pemberitahuan ini tidak tersedia di LINE untuk desktop.\nSilakan cek di ponsel cerdas Anda!",
          "chat.msg.e2ee.decryptingMsg": "Mendekripsi...",
          "chat.msg.e2ee.guide": "Obrolan ini dilindungi\noleh Letter Sealing",
          "chat.msg.e2ee.needKeyExchange":
            "Pesan ini telah dienkripsi.\nVerifikasi identitas Anda untuk membaca pesan.",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\nTidak dapat menampilkan pesan karena tidak dapat didekripsi. Mintalah teman Anda untuk mengirim ulang pesan.",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "Pesan ini tidak dapat didekripsi.\nPesan ini tidak dapat ditampilkan di perangkat yang saat ini digunakan karena pesan tidak dicadangkan dan dipulihkan dari perangkat sebelumnya.",
          "chat.msg.e2ee.setting.disabled":
            "Pesan ini dienkripsi. Silakan lihat pesan ini di ponsel.",
          "chat.msg.file.change.type.audio":
            "Pesan suara ini mungkin tidak dapat diputar di perangkat tertentu karena ukurannya yang besar.",
          "chat.msg.file.change.type.video":
            "Video ini mungkin tidak dapat diputar di perangkat tertentu karena ukurannya yang besar.",
          "chat.msg.file.ext": "Ekstensi Berkas",
          "chat.msg.file.period": "Sampai: ~",
          "chat.msg.file.received": "%1 mengirim berkas.",
          "chat.msg.file.sent": "Berkas telah dikirim.",
          "chat.msg.file.size": "Ukuran: %1",
          "chat.msg.file.waiting": "Menunggu\u2026",
          "chat.msg.groupInvite": "%1 mengundang %2 ke grup.",
          "chat.msg.groupboard.updated":
            "Papan grup telah diperbarui. Cek pembaruan tersebut di ponsel cerdas Anda.",
          "chat.msg.home.shared": "Berbagi pos %1.",
          "chat.msg.inviteCancel": "%1 membatalkan undangan %2 ke grup.",
          "chat.msg.joinGroup": "%1 bergabung dengan grup.",
          "chat.msg.kickout": "%1 menghapus %2 dari grup.",
          "chat.msg.leave": "%1 meninggalkan obrolan.",
          "chat.msg.leaveGroup": "%1 meninggalkan grup.",
          "chat.msg.leavegroup.1.n.confirm":
            "Jika Anda meninggalkan ruang obrolan ini, riwayat obrolan akan dihapus. Yakin ingin meninggalkan ruang obrolan ini?",
          "chat.msg.nomember": "Ruang Kosong",
          "chat.msg.preview.default": "Ketuk di sini untuk membuka tautan ini.",
          "chat.msg.read": "Baca",
          "chat.msg.search.cancelSearch": "Batal",
          "chat.msg.search.hint.fromName": "Masukkan nama pengirim.",
          "chat.msg.search.hint.message": "Masukkan teks untuk mencari.",
          "chat.msg.search.hint.roomName": "Cari Obrolan dan Pesan",
          "chat.msg.search.result.hint.addOption":
            "Coba tambahkan ruang obrolan atau pengirim lebih banyak ke pencarian Anda.",
          "chat.msg.search.result.hint.noResultReason1":
            "Anda mungkin tidak akan memperoleh hasil pencarian jika Anda menggunakan PC yang berbeda. ",
          "chat.msg.search.result.hint.noResultReason2":
            "Anda mungkin tidak akan memperoleh hasil pencarian jika Anda tidak menggunakan LINE untuk PC selama lebih dari 2 minggu. ",
          "chat.msg.search.result.noResult": "Tidak ada hasil.",
          "chat.msg.search.title.date": "Tanggal",
          "chat.msg.search.title.fromName": "Pengirim",
          "chat.msg.search.title.message": "Pesan",
          "chat.msg.search.title.roomName": "Obrolan",
          "chat.msg.smartphone": "Silakan cek di ponsel cerdas Anda.",
          "chat.msg.start.unreadMessage": "Pesan yang belum dibaca",
          "chat.msg.sticker.gift.from.buddy":
            "Anda menerima hadiah! Unduh sekarang.",
          "chat.msg.sticker.gift.from.me": "Hadiah telah dikirim!",
          "chat.msg.sticker.period.expired":
            "Masa berlaku telah berakhir.\nSilakan beli %1 lagi dari ponsel Anda.",
          "chat.msg.sticon.period.expired":
            "%1 telah kedaluwarsa. Silakan lakukan pembelian ulang melalui Toko Stiker di LINE versi seluler.",
          "chat.msg.sync": "Menyinkronisasi pesan...",
          "chat.msg.text.seeAll": "Lihat lainnya",
          "chat.msg.theme.gift.from.me": "Hadiah telah dikirim!",
          "chat.msg.unknown.message":
            "Maaf, pesan ini tidak dapat ditampilkan.",
          "chat.msg.unread": "Belum Baca",
          "chat.msgbox.alarmoff.description":
            "Pemberitahuan pesan baru tidak tersedia untuk obrolan ini.",
          "chat.msgbox.bannedWord":
            "Pesan ini berisi kata-kata yang dilarang dan tidak dapat dikirimkan.",
          "chat.msgbox.save.description":
            "Hanya dialog yang ditampilkan di layar ini yang disimpan dalam format teks.\n",
          "chat.msgbox.save.dontShow": "Jangan tampilkan lagi.",
          "chat.msgbox.save.empty": "Tak ada pesan untuk disimpan.",
          "chat.noMember.group.error.noAuth":
            "Fitur ini hanya dapat digunakan oleh anggota grup.",
          "chat.noMember.singleRoom.error.album":
            "Item dan album sudah tidak dapat ditambahkan atau dibuat pada obrolan ini.",
          "chat.noMember.singleRoom.error.note":
            "Note sudah tidak dapat ditambahkan ke obrolan ini.",
          "chat.noinput.group.invitation": "Bergabung ke grup untuk mengobrol.",
          "chat.notes.notification.sharenote": "Note dibagikan.",
          "chat.notimessage.sharealbum": "Album telah dibagikan.",
          "chat.poll.message.btn": "Lihat detail",
          "chat.poll.title": "Polling",
          "chat.popup.btn.pasteAsImage": "Gambar",
          "chat.popup.btn.pasteAsText": "Teks",
          "chat.popup.clipboard.withImage":
            "Pilih cara untuk menempelkan konten papan klip.",
          "chat.popup.desc.grouplimit":
            "Jumlah maksimum grup LINE telah terlampaui. Untuk bergabung dengan grup baru, silakan keluar dari grup lama dan coba lagi.",
          "chat.popup.title.grouplimit": "Batus Jumlah Grup Terlampaui",
          "chat.popupbutton.delete": "Tidak",
          "chat.popupbutton.resend": "Kirim Ulang",
          "chat.popupdesc.serveroutage1":
            "Pesan ini tidak dapat dilihat oleh pengguna lain karena eror pada server. Kirim ulang sebagai pesan baru?",
          "chat.popupdesc.serveroutagegroup":
            "Pesan ini tidak dapat dilihat oleh sebagian anggota grup karena eror pada server. Kirim ulang sebagai pesan baru?",
          "chat.popuptitle.serveroutage": "Kirim Ulang Pesan?",
          "chat.profile.menu.displayName.search": "Cari Pesan dengan Nama",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_icon.png",
          "chat.reply.album": "Album: %1",
          "chat.reply.jump": "Kembali ke pesan balasan.",
          "chat.reply.jump.delete": "Pesan telah diurungkan.",
          "chat.reply.no.original.message": "Pesan tidak tersedia.",
          "chat.reply.note.no.text": "Note dibagikan pada %1",
          "chat.reply.note.text": "Note: %1",
          "chat.room.msg.invitorNotBuddy":
            "Anda diundang ke grup oleh %1 yang tidak terdaftar sebagai teman.",
          "chat.save.location": "Lokasi",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_icon.png",
          "chat.setting.theme.snow.disable": "Matikan Efek Salju",
          "chat.setting.theme.snow.enable": "Nyalakan Efek Salju",
          "chat.share.notexist":
            "Akun LINE pengguna ini telah dihapus atau tidak ada.",
          "chat.sharing.notification.sharealbum": "Album telah dibagikan.",
          "chat.sharing.notification.sharenote": "Note dibagikan.",
          "chat.status.block":
            "Anda tidak dapat mengirim pesan obrolan ke akun yang diblokir.",
          "chat.status.disconn":
            "Tidak dapat mengirim pesan untuk sementara waktu.",
          "chat.status.e2ee.verification.fail":
            "Verifikasi akun Letter Sealing telah dibatalkan.\n\nAnda hanya dapat melihat pesan yang dienkripsi setelah memverifikasi akun Anda.\n",
          "chat.status.keyExchangeBtn": "Verifikasi Identitas",
          "chat.status.leave":
            "Anda tidak dapat mengirim pesan lagi setelah meninggalkan obrolan.",
          "chat.status.needKeyExchange":
            "Verifikasi identitas diperlukan untuk menggunakan enkripsi Letter Sealing di LINE untuk PC.",
          "chat.system.inviteeoverlimit":
            "Calon anggota berikut tidak dapat bergabung karena batas jumlah grup LINE dari pengguna tersebut telah terlampaui.\n%1",
          "chat.system.msg.a.unsend": "%1 mengurungkan pengiriman pesan.",
          "chat.system.msg.unsend": "Pengiriman pesan diurungkan.",
          "chat.systemmessage.upgradegroup":
            "Pengaturan grup telah diubah. Calon anggota grup ini sekarang harus menerima undangan untuk dapat bergabung ke grup.",
          "chat.title.chatMember": "Anggota",
          "chat.toast.notifications.mute":
            "Pemberitahuan di obrolan ini dimatikan.",
          "chat.toast.notifications.unmute":
            "Pemberitahuan di obrolan ini dinyalakan.",
          "chat.trans.tooltip": "Transparansi",
          "chat.video.play": "Putar",
          "chat.video.replay": "Putar Ulang",
          "chat.video.tooltip": "Video",
          "chatapp.giphy.forward":
            "File GIF yang dikirim menggunakan GIPHY tidak dapat diteruskan.",
          "chatapp.giphy.forward.next":
            "File GIF yang dikirim menggunakan GIPHY tidak dapat diteruskan. Teruskan file lainnya?",
          "chatapp.giphy.keep":
            "File GIF yang dikirim menggunakan GIPHY tidak dapat disimpan di Keep.",
          "chatapp.giphy.keep.next":
            "File GIF yang dikirim menggunakan GIPHY tidak dapat disimpan di Keep. Simpan file lainnya?",
          "chatl.share.alert.error":
            "Pesan ini tidak dapat dibagikan karena pengiriman pesan telah diurungkan.",
          "chatl.share.alert.max":
            "Anda hanya dapat memilih hingga %1 obrolan.",
          "chatl.share.toast.multiple.other": "Pesan dibagikan ke %n obrolan.",
          "chatl.share.toast.single": "Berbagi dengan %1.",
          "chatl.sharetotalk.title": "Berbagi dengan\u2026",
          "chatlist.allinone.close.btn": "Tutup obrolan",
          "chatlist.allinone.open.btn": "Bentangkan obrolan",
          "chatlist.btn.startchat": "Obrolan Baru",
          "chatlist.chooseChat.empty.btn": "Tampilkan Di Sini",
          "chatlist.chooseChat.empty.desc":
            "Obrolan ini terbuka di jendela lain.\nTampilkan obrolan di sini?",
          "chatlist.context.menu.seperateChat.label": "Buka di Jendela lain",
          "chatlist.guide.allinone.text":
            "Bentangkan jendela untuk membuka obrolan dalam panel baru.",
          "chatlist.guide.chatStart.text": "Mulai mengobrol!",
          "chatlist.hide.confirm":
            "Menyembunyikan obrolan tidak akan menghapus pesan yang ada di dalam obrolan. ",
          "chatlist.keepmemo.desc.msg":
            "Kirim teks, foto, video, dan tautan yang ingin disimpan untuk diri sendiri.",
          "chatlist.keepmemo.desc.title": "Memo Keep",
          "chatlist.search.hint.chatList": "Cari Daftar Obrolan",
          "chatlist.sort.unreadRoom":
            "Tampilkan obrolan dengan pesan belum dibaca.",
          "chatlive.end.popup.done": "Akhiri",
          "chatlive.error.notavailable":
            "Panggilan telah dimulai oleh anggota yang lain.",
          "chatlive.maximum": "Jumlah maksimum peserta tercapai.",
          "chatlive.msg.over.traffic":
            "Saat ini lalu lintas streaming sangat sibuk.\nSilakan coba lagi nanti.",
          "chatlive.screen.share.ongoing.body": "Layar Anda sedang dibagikan.",
          "chatlive.screen.share.ongoing.stop": "Stop",
          "chatlive.screen.share.ongoing.top": "Membagikan layar",
          "chatlive.screen.share.select.body":
            "Anda akan membagikan layar PC Anda. Pilih layar yang ingin dibagikan.",
          "chatlive.screen.share.select.done": "Bagikan",
          "chatlive.screen.share.select.item": "Layar %1",
          "chatlive.screen.share.select.title": "Pilih Layar untuk Dibagikan",
          "chatlive.viewer.list.title.other": "%n penonton",
          "chatlive.viewer.list.title.plurals.other": "%n penonton",
          "chatroom.guide.sticker.text":
            "Obrolan jadi lebih seru dengan beragam stiker menarik!",
          "chatsettings.desc.membersjoinautomatically":
            "Anggota bergabung segera setelah diundang. Matikan pengaturan ini untuk mengharuskan calon anggota menyetujui undangan sebelum bergabung ke grup.",
          "chatsettings.popup.desc.onewaywarning":
            "Pengaturan ini tidak dapat dikembalikan ke opsi sebelumnya. Yakin ingin mematikan opsi ini?",
          "chatsettings.popup.title.onewaywarning":
            "Tindakan Ini Tidak Dapat Diurungkan",
          "chatsettings.title.membersjoinautomatically":
            "Anggota Otomatis Bergabung",
          "choosefriends.button.createGroup": "Buat Grup",
          "choosefriends.button.gotochatsingle": "Obrolan 1:1",
          "choosefriends.button.invite": "Undang",
          "choosefriends.title.default": "Pilih Teman",
          "choosefriends.title.numselected": "%1 Dipilih",
          "chrome.common.toast.unabletocopy":
            "Tidak dapat disalin. Silakan coba lagi.",
          "chrome.setting.desc.notiforsp":
            "Matikan Pemberitahuan di ponsel saat login pada LINE untuk Chrome.",
          "chrome.time.desc.outofrangetime": "HH:mm",
          "chrome.time.toast.outofrange":
            "Waktu harus diatur lebih awal dari %1.",
          "chrome.time.toast.outofrange2":
            "Waktu harus diatur pada %1 atau sesudahnya.",
          "chrome.user.error.failedToBlock":
            "Saat ini akun tidak dapat diblokir. Silakan coba lagi nanti.",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "Tidak dapat menolak undangan.",
          "chrome.user.error.failedToHide":
            "Saat ini akun tidak dapat disembunyikan. Silakan coba lagi nanti.",
          "chrome.user.error.failedToJoinGroup":
            "Saat ini Anda tidak dapat bergabung ke grup. Silakan coba lagi nanti.",
          "chrome.user.error.failedToLeaveGroup":
            "Tidak dapat meninggalkan grup.",
          "chrome.user.error.failedToMarkFavorite":
            "Tidak dapat menambahkan ke Favorit.",
          "chrome.user.error.failedToShowUser":
            "Saat ini akun tidak dapat ditampilkan. Silakan coba lagi nanti.",
          "chrome.user.error.failedToUnblock": "Tidak dapat membuka blokir.",
          "common.album.empty.desc":
            "Gunakan album untuk berbagi momen penuh kenangan.",
          "common.alert.errorcode": "kode eror: %1",
          "common.alert.notsupported":
            "Fungsi ini tidak tersedia di LINE versi ini.\nSilakan perbarui aplikasi LINE Anda ke versi terbaru.",
          "common.alert.unsend.content":
            "Pengirim telah mengurungkan pengiriman konten ini.",
          "common.alert.unsend.multi.contents":
            "Item yang pengirimannya diurungkan tidak akan disertakan.",
          "common.alert.unsupported.osversion":
            "Fitur ini tidak dapat digunakan pada versi OS yang Anda gunakan. Silakan update OS Anda ke versi terbaru.",
          "common.alert.update.title": "Perbarui",
          "common.alert.version.other":
            "LINE versi lain dari LINE sedang digunakan.",
          "common.am": "AM",
          "common.btn.back": "Kembali",
          "common.btn.cancel": "Batal",
          "common.btn.capture.option":
            "Sembunyikan jendela saat mengambil screenshot.",
          "common.btn.capture.option.tooltip": "Opsi Tangkap Layar",
          "common.btn.delete": "Hapus",
          "common.btn.discard": "Tinggalkan",
          "common.btn.forward": "Bagikan",
          "common.btn.hide": "Sembunyikan",
          "common.btn.next": "Berikutnya",
          "common.btn.quit": "Tutup LINE",
          "common.btn.retry": "Coba Lagi",
          "common.btn.run": "Kunci",
          "common.btn.save": "Simpan",
          "common.btn.seemore": "Lihat Lainnya",
          "common.btn.submit": "OK",
          "common.btn.unhide": "Tampilkan",
          "common.cancel": "Batal",
          "common.cancelalert.desc":
            "Teks yang dimasukkan tidak akan disimpan jika Anda meninggalkan halaman ini. Yakin ingin meninggalkan halaman ini?",
          "common.code.tooltip": "Kode QR yang ada di gambar dapat dipindai.",
          "common.content.address.share.from.buddy": "%1 membagikan kontak.",
          "common.content.address.share.from.me": "Anda mengirim kontak",
          "common.content.applink.app.recv": "Memperkenalkan %1.",
          "common.content.applink.app.sent": "Anda memperkenalkan %1.",
          "common.content.applink.friend.recv":
            "Anda menerima permintaan berteman dari %1.",
          "common.content.applink.friend.sent":
            "Permintaan berteman Anda telah dikirim di %1!",
          "common.content.audio": "%1 mengirim berkas audio.",
          "common.content.audio.mine": "Anda mengirim berkas audio.",
          "common.content.coupon.message.postfix":
            "Silakan cek di ponsel cerdas Anda. ",
          "common.content.group.note.updated": "Menambahkan note baru.",
          "common.content.group.note.updated.myself": "Menambahkan note baru.",
          "common.content.groupboard.from.buddy": "%1 memperbarui papan grup.",
          "common.content.groupboard.from.me": "Papan grup telah diperbarui.",
          "common.content.home.shared": "Berbagi pos %1.",
          "common.content.home.shared.myself": "Berbagi pos %1.",
          "common.content.image": "%1 mengirim foto.",
          "common.content.image.mine": "Anda mengirim foto.",
          "common.content.invite": 'Anda diundang ke "%1".',
          "common.content.location.from.buddy": "%1 mengirim lokasi.",
          "common.content.location.from.me": "Anda mengirim lokasi.",
          "common.content.mantoman.note.newpost": "Menambahkan note baru.",
          "common.content.mantoman.note.newpost.myself":
            "Menambahkan note baru.",
          "common.content.normal": "mengirim pesan.",
          "common.content.pdf": "%1 mengirim berkas PDF.",
          "common.content.pdf.mine": "Anda mengirim berkas PDF.",
          "common.content.presence.join": "%1 bergabung dengan obrolan.",
          "common.content.presence.join.multiple.plurals.few":
            "%1 dan %n lainnya bergabung di obrolan.",
          "common.content.presence.join.multiple.plurals.many":
            "%1 dan %n lainnya bergabung di obrolan.",
          "common.content.presence.join.multiple.plurals.one":
            "%1 dan %n lainnya bergabung di obrolan.",
          "common.content.presence.join.multiple.plurals.other":
            "%1 dan %n lainnya bergabung di obrolan.",
          "common.content.presence.join.multiple.plurals.two":
            "%1 dan %n lainnya bergabung di obrolan.",
          "common.content.presence.join.multiple.plurals.zero":
            "%1 dan %n lainnya bergabung di obrolan.",
          "common.content.presence.leave": "%1 meninggalkan obrolan.",
          "common.content.sticker": "%1 mengirim stiker.",
          "common.content.sticker.gift.from.buddy": "%1 mengirim hadiah!",
          "common.content.sticker.gift.from.me": "Hadiah telah dikirim!",
          "common.content.sticker.mine": "Anda mengirim stiker.",
          "common.content.theme.gift.from.buddy": "%1 mengirim hadiah!",
          "common.content.theme.gift.from.me": "Hadiah telah dikirim!",
          "common.content.timeline.post": "Klik untuk membuka pos di browser.",
          "common.content.video": "%1 mengirim berkas video.",
          "common.content.video.mine": "Anda mengirim berkas video.",
          "common.continue": "Lanjutkan",
          "common.country.name.ae": "Uni Emirat Arab",
          "common.country.name.at": "Austria",
          "common.country.name.au": "Australia",
          "common.country.name.bd": "Bangladesh",
          "common.country.name.be": "Belgia",
          "common.country.name.bg": "Bulgaria",
          "common.country.name.br": "Brazil",
          "common.country.name.ca": "Kanada",
          "common.country.name.ch": "Swiss",
          "common.country.name.cn": "Tiongkok",
          "common.country.name.cy": "Siprus",
          "common.country.name.cz": "Republik Ceko",
          "common.country.name.de": "Jerman",
          "common.country.name.dk": "Denmark",
          "common.country.name.ee": "Estonia",
          "common.country.name.es": "Spanyol",
          "common.country.name.fi": "Finlandia",
          "common.country.name.fr": "Perancis",
          "common.country.name.gb": "Britania Raya",
          "common.country.name.gr": "Yunani",
          "common.country.name.hk": "Hong Kong",
          "common.country.name.hr": "Kroasia",
          "common.country.name.ht": "Haiti",
          "common.country.name.hu": "Hungaria",
          "common.country.name.id": "Indonesia",
          "common.country.name.ie": "Irlandia",
          "common.country.name.il": "Israel",
          "common.country.name.in": "India",
          "common.country.name.ir": "Iran",
          "common.country.name.is": "Islandia",
          "common.country.name.it": "Italia",
          "common.country.name.jp": "Jepang",
          "common.country.name.kg": "Kirgizstan",
          "common.country.name.kh": "Kamboja",
          "common.country.name.kr": "Korea Selatan",
          "common.country.name.kz": "Kazakhstan",
          "common.country.name.la": "Laos",
          "common.country.name.li": "Liechtenstein",
          "common.country.name.lk": "Sri Lanka",
          "common.country.name.lt": "Lithuania",
          "common.country.name.lu": "Luksemburg",
          "common.country.name.lv": "Latvia",
          "common.country.name.ma": "Maroko",
          "common.country.name.mm": "Myanmar",
          "common.country.name.mt": "Malta",
          "common.country.name.mx": "Meksiko",
          "common.country.name.my": "Malaysia",
          "common.country.name.ng": "Nigeria",
          "common.country.name.nl": "Belanda",
          "common.country.name.no": "Norwegia",
          "common.country.name.nz": "Selandia Baru",
          "common.country.name.om": "Oman",
          "common.country.name.ph": "Filipina",
          "common.country.name.pl": "Polandia",
          "common.country.name.pt": "Portugal",
          "common.country.name.qa": "Qatar",
          "common.country.name.ro": "Rumania",
          "common.country.name.ru": "Rusia",
          "common.country.name.sa": "Arab Saudi",
          "common.country.name.se": "Sweden",
          "common.country.name.sg": "Singapura",
          "common.country.name.si": "Slovenia",
          "common.country.name.sk": "Slovakia",
          "common.country.name.th": "Thailand",
          "common.country.name.tr": "Turki",
          "common.country.name.tt": "Trinidad dan Tobago",
          "common.country.name.tw": "Taiwan",
          "common.country.name.ua": "Ukraina",
          "common.country.name.us": "Amerika Serikat",
          "common.country.name.vn": "Vietnam",
          "common.country.name.za": "Afrika Selatan",
          "common.country.other": "Lainnya",
          "common.countryregion": "Wilayah/Negara",
          "common.date.format.short": "d/M",
          "common.delete": "Hapus",
          "common.desc.macupdate":
            "Silakan perbarui OS Mac Anda sebelum menggunakan.",
          "common.desc.temporary.error":
            "Permintaan Anda belum diproses karena eror sementara.",
          "common.error.image.scan":
            "Gambar yang sudah kedaluwarsa tidak dapat dipindai.",
          "common.error.ocr.failed":
            "Teks tidak dapat dipindai. Silakan pilih bahasa lain dan coba lagi.",
          "common.error.ocr.unknown": "Gambar tidak dapat dikonversi.",
          "common.error.translation.failed":
            "Teks tidak dapat diterjemahkan. Silakan edit teks atau atur ke bahasa lain lalu coba lagi.",
          "common.friday": "Jumat",
          "common.friday.short": "Jum",
          "common.label.auto.slang": "Deteksi Bahasa",
          "common.label.code": "Pindai kode QR",
          "common.label.copy": "Salin",
          "common.label.cut": "Potong",
          "common.label.date": "Tanggal",
          "common.label.delete": "Hapus",
          "common.label.file": "File",
          "common.label.lang.ar": "Bahasa Arab",
          "common.label.lang.de": "Bahasa Jerman",
          "common.label.lang.en": "Bahasa Inggris",
          "common.label.lang.es": "Bahasa Spanyol",
          "common.label.lang.fa": "Bahasa Persia",
          "common.label.lang.hi": "Bahasa Hindi",
          "common.label.lang.id": "Bahasa Indonesia",
          "common.label.lang.ja": "Bahasa Jepang",
          "common.label.lang.ko": "Bahasa Korea",
          "common.label.lang.my": "Bahasa Myanmar",
          "common.label.lang.pt": "Bahasa Portugis",
          "common.label.lang.ru": "Bahasa Rusia",
          "common.label.lang.th": "Bahasa Thailand",
          "common.label.lang.vi": "Bahasa Vietnam",
          "common.label.lang.zhcn": "Bahasa Mandarin (Sederhana)",
          "common.label.lang.zhtw": "Bahasa Mandarin (Tradisional)",
          "common.label.moveURL": "Kunjungi URL",
          "common.label.ocr": "Pindai Teks",
          "common.label.ocrlang": "Dikonversi",
          "common.label.paste": "Tempel",
          "common.label.redo": "Ulangi",
          "common.label.selectAll": "Pilih semua",
          "common.label.slang": "Asli",
          "common.label.text.placeholder":
            "Masukkan angka yang tertera di atas",
          "common.label.time": "Waktu",
          "common.label.tlang": "Diterjemahkan",
          "common.label.undo": "Batal",
          "common.license.disagree": "Tidak Setuju",
          "common.license.filename": "chrome://license/English.rtf",
          "common.license.title": "Syarat dan Ketentuan Penggunaan",
          "common.lineUrltoQR.alert.desc1":
            "Fitur tersedia di LINE untuk perangkat seluler",
          "common.lineUrltoQR.alert.desc2":
            "Untuk menggunakan fitur ini, pindai kode QR di bawah ini melalui aplikasi LINE untuk perangkat seluler.",
          "common.loading": "Memuat\u2026",
          "common.loading.splash": "Membuka LINE...",
          "common.mac.upgrader.title": "Tersedia Pembaruan LINE Terbaru",
          "common.menu.copyToClipboard": "Salin ke papan klip",
          "common.menu.delete": "Hapus",
          "common.menu.forward": "Bagikan",
          "common.menu.reply": "Balas",
          "common.menu.saveAs": "Simpan sebagai\u2026",
          "common.monday": "Senin",
          "common.monday.short": "Sen",
          "common.msg.already.new.version":
            "Anda telah menggunakan versi terbaru.",
          "common.msg.bot.openapi":
            "%1 dikelola oleh %2.\nSilakan lihat tautan di bawah ini untuk selengkapnya tentang penanganan info pribadi yang disediakan oleh LY Corporation dan info pribadi lainnya yang Anda berikan ke admin.",
          "common.msg.bot.openapi.agree": "Setuju",
          "common.msg.bot.openapi.link": "http://me2.do/FYc54WAQ",
          "common.msg.bot.openapi.title":
            "Setuju untuk Memberikan Info Pribadi",
          "common.msg.checking.version": "Memeriksa untuk pembaruan...",
          "common.msg.db.optimize":
            "Mengoptimalkan aplikasi LINE\nuntuk kinerja yang lebih baik...\nMohon tunggu.",
          "common.msg.db.optimize.complete": "Pengoptimalan selesai.",
          "common.msg.db.optimize.error":
            "Tidak dapat menyelesaikan pengoptimalan\nkarena eror sementara.\nLINE akan dimulai ulang.",
          "common.msg.favorite.exceeded":
            "Anda bisa memiliki maks. 100 favorit.",
          "common.msg.has.new.version": "Tersedia versi terbaru.",
          "common.msg.has.new.version.alert":
            "Tersedia versi terbaru.\nIngin memperbarui? ",
          "common.msg.invitation.overflow":
            "Anda hanya dapat mengundang hingga %1 orang.",
          "common.msg.license.opensource": "Pemberitahuan hukum",
          "common.msg.sticker.need.mobile.download":
            "Unduh stiker gratis ke perangkat seluler terlebih dahulu untuk menggunakannya.\nBuka Pengaturan > Stiker > Stiker Saya atau Toko Stiker > GRATIS untuk mengunduh stiker.",
          "common.msg.terms": "Syarat dan Ketentuan Penggunaan",
          "common.msg.update.button.label": "Update Sekarang",
          "common.msg.update.button.label.mac": "Buka App Store",
          "common.msg.warning.autoLogin":
            "Anda akan login secara otomatis ketika membuka aplikasi.\nSilakan gunakan ini hanya di PC sendiri untuk melindungi info pribadi Anda.",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "Pantau informasi penting dan bagikan menggunakan Note.",
          "common.notice.dontremind": "Jangan tampilkan lagi.",
          "common.notice.label.close": "Tutup",
          "common.notice.meta.url": "line_desktop_notice/EN/1135",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/EN/1136",
          "common.notice.title": "Pengumuman",
          "common.ocr.agree.desc":
            "Foto akan dikirimkan ke server kami saat menggunakan fitur ini. Setuju untuk memberikan foto kepada LY Corporation untuk fitur ini?",
          "common.ocr.agree.title": "Setuju untuk memberikan foto",
          "common.ocr.mlstatus.off":
            "Anda belum memberikan persetujuan untuk memberikan foto demi kepentingan peningkatan layanan. Anda dapat mengubah status persetujuan di LINE untuk perangkat seluler.",
          "common.ocr.mlstatus.on":
            "Ikon ini akan berwarna terang jika Anda sudah memberikan persetujuan untuk memberikan foto demi kepentingan peningkatan layanan. Anda dapat mengubah status persetujuan di LINE untuk perangkat seluler.",
          "common.ocr.tooltip": "Coba fitur terjemahan instan!",
          "common.ocrlang.tooltip": "Atur bahasa target pengubahan gambar.",
          "common.off": "Mati",
          "common.on": "Nyala",
          "common.picture.popup.saveImageError": "Tidak dapat menyimpan foto.",
          "common.picture.popup.showImageError": "Tidak dapat memuat gambar.",
          "common.pm": "PM",
          "common.popup.force.update":
            "LINE perlu diperbarui.\nSilakan perbarui dan mulai ulang aplikasi.",
          "common.popup.force.update.confirm":
            "Anda dapat menggunakan LINE setelah diperbarui.",
          "common.popup.force.update.inapp":
            "LINE perlu diperbarui.\nSilakan perbarui dan mulai ulang aplikasi.",
          "common.popup.force.update.later":
            "Anda akan diberitahu lagi dalam 1 jam.",
          "common.popup.queryUpgrade":
            "Tersedia versi terbaru.\nPerbarui sekarang? ",
          "common.popup.sendkey.msg.mac": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.sendkey.msg.win": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.serverAPI.error.update":
            "LINE perlu diperbarui.\nPerbarui sekarang?",
          "common.prepare.service":
            "Jika Anda telah menggunakan versi terkini,\nhal itu berarti versi baru untuk OS Anda sedang dipersiapkan saat ini!",
          "common.push.mac.versionUpdate":
            "Harap update aplikasi LINE ke versi terbaru.",
          "common.report.done": "Laporan terkirim!",
          "common.report.reason.desc":
            "Jelaskan alasan Anda mengirimkan laporan ini kepada kami.",
          "common.request.error":
            "Terjadi eror yang tidak diketahui.\nSilakan coba lagi nanti.",
          "common.saturday": "Sabtu",
          "common.saturday.short": "Sab",
          "common.search.error.length": "Masukkan minimum 2 karakter.",
          "common.search.invalidtext":
            "Kata kunci tidak dapat berisi karakter khusus. Harap masukkan kata kunci lain.",
          "common.seeall": "Lihat semua",
          "common.share.url.copied": "Telah Disalin",
          "common.sunday": "Minggu",
          "common.sunday.short": "Min",
          "common.thursday": "Kamis",
          "common.thursday.short": "Kam",
          "common.time.format": "h:mm %1",
          "common.toast.album.delete": "Album telah dihapus.",
          "common.toast.album.rename": "Nama album telah diganti.",
          "common.toast.albumCreated": "Album baru dibuat. ",
          "common.toast.audio": "Pesan suara terkirim.",
          "common.toast.chatevent.unknown": "Pemberitahuan ini tidak tersedia.",
          "common.toast.contact": "Kontak telah dibagikan.",
          "common.toast.file": "Berkas terkirim.",
          "common.toast.gift": "Hadiah terkirim.",
          "common.toast.image": "Gambar terkirim.",
          "common.toast.inviteGroup": "Anda diundang ke grup.",
          "common.toast.label.newMessage": "Pesan baru telah diterima.",
          "common.toast.linemusic": "Musik dibagikan.",
          "common.toast.location": "",
          "common.toast.note": "Menambahkan note baru.",
          "common.toast.receiverequest": "Pending money request.",
          "common.toast.sticker": "Stiker terkirim.",
          "common.toast.timeline.group.invite": "Anda telah diundang ke grup.",
          "common.toast.timeline.new.comment": "Cek sekarang juga.",
          "common.toast.timeline.new.mention": "Menyebut Anda di komentar.",
          "common.toast.timeline.new.post": "Menambahkan note baru.",
          "common.toast.timeline.new.sticker": "Cek sekarang juga.",
          "common.toast.timeline.title.comment": "Komentar dari %1",
          "common.toast.timeline.title.like": "Suka dari %1",
          "common.toast.timeline.title.recomment": "Komentar Balasan dari %1",
          "common.toast.video": "Video terkirim.",
          "common.toast.voip.call": "Jawab",
          "common.toast.voip.call.msg": "Panggilan masuk...",
          "common.toast.voip.refuse": "Tolak",
          "common.today": "Hari Ini",
          "common.translation.apply.alert":
            "Anda dapat menerjemahkan hingga 5.000 karakter dari teks asli. ",
          "common.translation.apply.imagedirect": "Terjemahkan Langsung",
          "common.translation.imagedirect.failed":
            "Terjadi eror sementara. Silakan ubah pilihan bahasa atau coba lagi nanti.",
          "common.translation.imagedirect.tooltip":
            "Aktifkan fitur ini untuk menerjemahkan teks dan menampilkan hasilnya secara langsung di foto.",
          "common.tuesday": "Selasa",
          "common.tuesday.short": "Sel",
          "common.unsupported.version.message":
            "Fungsi ini tidak tersedia di LINE versi ini. \nSilakan update aplikasi LINE Anda ke versi terbaru.",
          "common.update.popup.win10": "Silakan update LINE ke versi terbaru.",
          "common.updater": "Perbarui sekarang",
          "common.updater.autoUpdate": "Perbarui secara Otomatis",
          "common.updater.autoUpdate.apply":
            "<![CDATA[Update LINE ke versi terbaru?\n<font color='#9e9e9e'>LINE akan dimuat ulang jika update dilakukan .\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "Versi LINE yang lebih baru telah tersedia.\nLINE akan dimulai ulang jika Anda memilih OK.",
          "common.updater.newVersion.confirm":
            "Anda sudah menggunakan LINE versi terbaru.",
          "common.updater.newVersion.download.apply":
            "<![CDATA[Pengunduhan selesai.\nInstal sekarang?\n<font color='#9e9e9e'>LINE akan dimulai ulang jika Anda memilih OK.</font>]]>",
          "common.updater.newVersion.downloading":
            "Mengunduh LINE versi terbaru...\nMohon tunggu.",
          "common.updater.newVersion.incompleted":
            "Pembaruan terputus.\nSilakan coba lagi nanti.",
          "common.updater.newVersion.low.hardDisk":
            "Ruang penyimpanan tidak cukup.\nKosongkan beberapa ruang\ndan coba lagi.",
          "common.updater.notice.description":
            "Apa yang Baru dalam Pembaruan Ini?",
          "common.updater.notice.history": "Riwayat Pembaruan",
          "common.updater.notice.title": "Perbarui",
          "common.updater.notice.updated":
            "LINE telah diperbarui ke versi terbaru.",
          "common.wednesday": "Rabu",
          "common.wednesday.short": "Rab",
          "common.yearMonth.format": "MMMM yyyy",
          "common.yesterday": "Kemarin",
          "creategroup.button.create": "Buat",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "Anggota bergabung segera setelah diundang. Matikan pengaturan ini untuk memastikan anggota harus menyetujui undangan sebelum bergabung ke grup.",
          "creategroup.checkbox.title.membersjoinautomatically":
            "Anggota Otomatis Bergabung",
          "creategroup.label.membercount": "Anggota",
          "creategroup.placeholder.entergroupname": "Masukkan nama grup",
          "creategroup.placerholder.defaultname.autojoinoff": "Grup %1",
          "creategroup.popup.desc.100memberswarning":
            "Calon anggota tidak dapat bergabung secara otomatis pada grup yang berisi lebih dari 100 anggota. Anggota baru harus terlebih dahulu menyetujui undangan untuk bergabung grup.\nUntuk mengizinkan anggota bergabung secara otomatis, batasi jumlah anggota agar tidak melebihi 100 pengguna.",
          "creategroup.popup.desc.invitelocked":
            "Atur agar jumlah anggota tidak melebihi 100 anggota agar fitur ini tidak dinyalakan.",
          "creategroup.popup.desc.inviteonwarning":
            "Pada grup dengan lebih dari 100 anggota, calon anggota harus menerima undangan terlebih dahulu untuk dapat bergabung ke grup.\nAtur agar jumlah anggota tidak melebihi 100 anggota agar fitur ini tidak dinyalakan.",
          "creategroup.popup.desc.toomanygroups":
            "Jumlah maksimum grup LINE telah terlampaui. Untuk membuat grup baru, silakan keluar dari grup lama dan coba lagi.",
          "creategroup.popup.title.100memberswarning":
            "Calon Anggota Tidak Otomatis Bergabung",
          "creategroup.popup.title.invitelocked": "Pengaturan Undangan Dikunci",
          "creategroup.popup.title.inviteonwarning":
            "Calon Anggota Harus Menerima Undangan untuk Bergabung",
          "creategroup.popup.title.toomanygroups":
            "Batus Jumlah Grup Terlampaui",
          "creategroup.popup.title.toomanymembers":
            "Kurangi Jumlah Anggota Grup",
          "creategroup.title.setupProfile": "Atur Profil Grup",
          "creategroup.toggle.desc.requireinvite":
            "Calon anggota harus menerima undangan untuk dapat bergabung ke grup. Pengaturan ini tidak dapat diubah lagi setelah grup dibuat.",
          "creategroup.toggle.title.requireinvite":
            "Calon Anggota Harus Menerima Undangan",
          "creategroup.tooltip.groupname":
            "Pilih nama grup yang mudah dipahami dan menjelaskan tujuan grup.",
          "creategrouppopup.desc.toomanymembers":
            "Untuk mengizinkan anggota bergabung secara otomatis, batasi jumlah anggota grup agar tidak melebihi 100 pengguna.",
          "deletedata.chatHisotry.all.desc.confirm":
            "Hapus semua riwayat obrolan dari semua perangkat? Riwayat obrolan yang telah dihapus tidak dapat dipulihkan.",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "Hapus semua riwayat obrolan dari perangkat ini? Riwayat obrolan yang telah dihapus tidak dapat dipulihkan. ",
          "desktop.addchatfolder.button.add": "Buat",
          "desktop.addchatfolder.placeholder.entername": "Masukkan nama folder",
          "desktop.addchatfolder.title.addnewfolder": "Buat Folder Baru",
          "desktop.addchatpopup.button.add": "Tambahkan",
          "desktop.addchatpopup.button.cancel": "Batal",
          "desktop.addchatpopup.desc.allchats": "Semua Obrolan",
          "desktop.addchatpopup.desc.selected": "%1\xa0dipilih",
          "desktop.addchatpopup.placeholder.search": "Cari",
          "desktop.addchatpopup.title.addchats":
            "Tambahkan Obrolan ke Folder Ini",
          "desktop.addfriends.desc.recommendedai": "Rekomendasi akun AI",
          "desktop.addtoalbum.button.cancel": "Batal",
          "desktop.addtoalbum.button.createalbum": "Buat Album",
          "desktop.addtoalbum.title.selectalbum": "Pilih album",
          "desktop.album.allalbums.button.albums": "Album",
          "desktop.album.allalbums.button.photos": "Foto",
          "desktop.album.allalbums.desc.albumsempty":
            "Album yang dibuat di semua obrolan yang diikuti akan ditampilkan di sini.",
          "desktop.album.allalbums.desc.dateformat": "MMMM yyyy",
          "desktop.album.allalbums.desc.photosempty":
            "Item yang ditambahkan ke album akan ditampilkan di sini.",
          "desktop.album.allalbums.menu.lastcreated": "Terakhir Dibuat",
          "desktop.album.allalbums.menu.lastupdated": "Pembaruan Terakhir",
          "desktop.album.allalbums.title.allalbums": "Semua Album",
          "desktop.album.allalbums.title.photosempty": "Belum Ada Item.",
          "desktop.album.allalbums.title.unableshow":
            "Album tidak dapat ditampilkan.\nSilakan coba lagi.",
          "desktop.album.allalbums.tooltip.allalbums":
            "Album dari semua obrolan akan ditampilkan di sini, termasuk album dari obrolan yang disembunyikan atau dihapus dari Daftar Obrolan.",
          "desktop.album.button.add": "Tambah",
          "desktop.album.button.cancel": "Batal",
          "desktop.album.button.create": "Buat",
          "desktop.album.button.namechangedone": "Simpan",
          "desktop.album.button.share": "Bagikan",
          "desktop.album.button.sharealbum": "Bagikan Album",
          "desktop.album.commonkey.button.tryagain": "Coba Lagi",
          "desktop.album.desc.albumphotos.other": "%n foto",
          "desktop.album.desc.draganddrop": "Seret dan jatuhkan item di sini.",
          "desktop.album.error.sharealbum":
            "Terlalu banyak album yang dibagikan dalam waktu singkat.",
          "desktop.album.main.tooltip.albumsallchats":
            "Lihat album dari semua obrolan di satu tempat.",
          "desktop.album.max.media.alert":
            "Anda hanya dapat mengirim hingga maksimum %1 item.",
          "desktop.album.photos.button.seealbum": "Lihat Album",
          "desktop.album.popupdesc.sharealbum":
            "Bagikan album ini di ruang obrolan?",
          "desktop.album.tooltip.nowsharealbum":
            "Kini album dapat dibagikan di obrolan!",
          "desktop.album.viewer.button.seealbum": "Lihat Album",
          "desktop.album.viewer.title.unableshow":
            "Item Tidak Dapat Ditampilkan.\nSilakan Coba Lagi.",
          "desktop.backgroundsetting.button.deletecover": "Hapus Sampul Profil",
          "desktop.backgroundsetting.button.selectphoto": "Pilih Foto",
          "desktop.blankchatfolder.button.addchat": "Tambahkan Obrolan",
          "desktop.blankchatfolder.desc.nochats":
            "Belum ada Obrolan yang ditambahkan ke folder ini.",
          "desktop.blankchatfolder.desc.nochats1":
            "Klik tombol di bawah untuk menambahkan Obrolan atau seret Obrolan ke sini.",
          "desktop.calendar.button.recent": "Terkini",
          "desktop.calendar.desc.month": "MMM",
          "desktop.calendar.desc.year": "yyyy",
          "desktop.callsettings.desc.showmessagealerts":
            "Tampilkan Pemberitahuan untuk Pesan Obrolan Baru\nSelama Panggilan Berlangsung",
          "desktop.chat.choose.empty":
            "Anda tidak memiliki obrolan untuk dipilih.",
          "desktop.chat.popup.blockeduser.button.close": "Jangan Laporkan",
          "desktop.chat.popup.blockeduser.button.report": "Kirim Laporan",
          "desktop.chat.popup.blockeduser.desc":
            "Jika curiga akun ini adalah bot atau pengguna dengan niat buruk, kirim laporan untuk membantu LINE tetap aman dan nyaman.",
          "desktop.chat.popup.blockeduser.title": "Laporkan %1?",
          "desktop.chat.toast.chatunhidden":
            "Obrolan ini sudah tidak disembunyikan.",
          "desktop.chat.warning.btn.addfriend": "Tambah Teman",
          "desktop.chat.warning.btn.blockfriend": "Blokir",
          "desktop.chat.warning.btn.decline": "Tolak",
          "desktop.chat.warning.btn.join": "Bergabung",
          "desktop.chat.warning.btn.leave": "Tinggalkan",
          "desktop.chat.warning.btn.report": "Laporkan",
          "desktop.chat.warning.btn.unblockfriend": "Buka Blokir",
          "desktop.chatfolder.tab.all": "Semua",
          "desktop.chatfolder.tab.friends": "Teman",
          "desktop.chatfolder.tab.groups": "Grup",
          "desktop.chatfolder.tab.newfolder": "Folder %1",
          "desktop.chatfolder.tab.officialaccounts": "Akun Resmi",
          "desktop.chatfolder.tab.openchats": "OpenChat",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "%1 Obrolan ditambahkan ke Folder.",
          "desktop.chatfolder.toast.addedtofolderone":
            "1 Obrolan ditambahkan ke Folder.",
          "desktop.chatfolder.toast.nameinuse":
            "Folder dengan nama ini telah dibuat. Harap masukkan nama yang berbeda.",
          "desktop.chatfolder.toast.removedchatmulti":
            "%1 Obrolan dipindahkan ke folder defaultnya.",
          "desktop.chatfolder.toast.removedchatone":
            "1 Obrolan dipindahkan ke folder default.",
          "desktop.chatfolder.toast.uptohund":
            "Anda hanya dapat menambahkan maks. 100 obrolan per folder.",
          "desktop.chatfolderguide.button.learnmore": "Selengkapnya",
          "desktop.chatfolderguide.desc.desc1":
            "Klik ikon Edit di sudut kanan atas untuk menambahkan folder",
          "desktop.chatfolderguide.desc.desc2":
            "Klik kanan di folder untuk mengubah pengaturan",
          "desktop.chatfolderguide.desc.desc3":
            "Seret obrolan untuk mengubah urutannya",
          "desktop.chatfolderguide.desc.editdragchange":
            "Seret folder untuk mengubah urutan folder. Klik ikon + untuk membuat folder baru.",
          "desktop.chatfolderguide.desc.title":
            "Semudah Membalikkan Telapak Tangan! Kelola Obrolan dengan Folder Obrolan",
          "desktop.chatfoldermenu.button.addchat": "Tambahkan Obrolan",
          "desktop.chatfoldermenu.button.changefoldername": "Ubah Nama Folder",
          "desktop.chatfoldermenu.button.deletefolder": "Hapus Folder",
          "desktop.chatfoldermenu.button.mutefolder": "Bisukan Obrolan",
          "desktop.chatfoldermenu.button.readall": "Baca semua",
          "desktop.chatfoldermenu.button.removechat": "Hapus Obrolan",
          "desktop.chatfoldermenu.button.unmutefolder":
            "Nyalakan Pemberitahuan",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "Tidak semua obrolan dapat dipindahkan ke satu folder.",
          "desktop.chatfoldermenu.toast.uptoten":
            "Jumlah folder yang dapat dibuat maks. 10 folder.",
          "desktop.chatfolderpopup.button.ok": "OK",
          "desktop.chatfolderpopup.desc.chatfolder":
            "Gunakan Folder Obrolan untuk mengelompokkan Obrolan sesuai keinginan agar obrolan lebih mudah ditemukan. Klik ikon + pada bar di bagian atas tab Obrolan untuk melakukannya.",
          "desktop.chatfolderpopup.desc.folderlineup":
            "Ubah susunan Folder Obrolan dengan menyeret folder ke tempat yang diinginkan.",
          "desktop.chatfolderpopup.desc.managefolder":
            "Klik kanan pada folder untuk mengubah pengaturan.",
          "desktop.chatfolderpopup.desc.unabletosync":
            "Obrolan tidak dapat disinkronisasi karena eror sementara. Klik ikon Sinkronisasi di sudut kanan atas dan coba lagi.",
          "desktop.chatfolderpopup.title.chatfolder":
            "Organisir Obrolan di Folder Obrolan",
          "desktop.chatfolderpopup.title.folderlineup":
            "Menyusun Ulang Daftar Folder Obrolan",
          "desktop.chatfolderpopup.title.managefolder":
            "Mengelola Folder Obrolan dengan Mudah",
          "desktop.chatfoldersetting.button.cancel": "Batal",
          "desktop.chatfoldersetting.button.disable": "Matikan",
          "desktop.chatfoldersetting.desc.disable":
            "Seluruh pengaturan folder akan dihapus jika fitur Folder Obrolan dimatikan. Yakin ingin mematikan Folder Obrolan?",
          "desktop.chatfoldertooltip.desc.createchatfolder":
            "Buat Folder Obrolan untuk mengorganisir obrolan.",
          "desktop.chatlist.button.hide": "Lebih Sedikit",
          "desktop.chatmenu.button.addtoalbum": "Tambah ke Album",
          "desktop.chatssettings.desc.chateffects":
            "Menampilkan animasi latar di ruang obrolan.",
          "desktop.chatssettings.subtitle.chateffects": "Animasi Latar",
          "desktop.codecerror.desc.unabletoplay":
            "File ini tidak dapat diputar karena kodek video eror.",
          "desktop.common.go.to.settings": "Buka Pengaturan",
          "desktop.common.index.chats": "Obrolan",
          "desktop.common.index.favorites": "Favorit",
          "desktop.common.index.friends": "Teman",
          "desktop.common.index.groups": "Grup",
          "desktop.common.index.recentlyshared": "Terakhir berbagi dengan",
          "desktop.common.report": "Laporkan",
          "desktop.defaultprofile.button.cancel": "Batal",
          "desktop.defaultprofile.button.save": "Simpan",
          "desktop.defaultprofile.title.selectdefault": "Pilih dari Default",
          "desktop.deletefolderpopup.button.cancel": "Batal",
          "desktop.deletefolderpopup.button.delete": "Hapus",
          "desktop.deletefolderpopup.desc.deletefolder":
            'Hapus folder "%1"? Semua obrolan yang terdapat di folder ini akan dipindahkan kembali ke folder default.',
          "desktop.download.popup.call": "Mengunduh plugin Panggilan...",
          "desktop.download.popup.calldone":
            "Pengunduhan selesai. Anda kini dapat melakukan dan menerima panggilan.",
          "desktop.download.popup.plugin": "Mengunduh plugin Penangkap GIF...",
          "desktop.download.popup.plugindone":
            "Pengunduhan selesai. Anda kini dapat menangkap GIF.",
          "desktop.download.popup.pluginnetworkerror":
            "Plugin gagal diunduh. Cek koneksi jaringan Anda dan coba lagi.",
          "desktop.download.popup.pluginnospace":
            "Ruang penyimpanan di perangkat tidak mencukupi. Kosongkan sebagian ruang penyimpanan dan coba lagi.",
          "desktop.download.popup.pluginunexpectederror":
            "Tidak dapat mengunduh plug-in.\nSilakan coba lagi.",
          "desktop.download.popup.viewer": "Mengunduh plugin Penampil...",
          "desktop.download.popup.viewerdone":
            "Pengunduhan selesai. Pilih file untuk dibuka di Penampil Media.",
          "desktop.dragndrop.button.addfiles": "Tambah File",
          "desktop.dragndrop.button.cancelcompress": "Batal",
          "desktop.dragndrop.button.send": 'Kirim "%1"',
          "desktop.dragndrop.button.sendcompressed": "Kirim",
          "desktop.dragndrop.checkbox.alwayscompress":
            "Selalu Kompres File sebelum Dikirim",
          "desktop.dragndrop.title.sendfile": "Kirim File",
          "desktop.dragndrop.toast.upto50":
            "Kirim hingga 50 file dalam satu waktu.",
          "desktop.error.popup.noverification":
            "Verifikasi gagal dilakukan di versi seluler LINE. Silakan coba lagi.",
          "desktop.errorpopup.desc.downloadback":
            "Proses pengunduhan plugin mungkin memerlukan waktu yang lebih lama. Tutup jendela ini dan lanjutkan mengunduh di latar?",
          "desktop.errorpopup.desc.downloadno": "Tetap di Jendela",
          "desktop.errorpopup.desc.downloadyes": "Tutup dan Lanjut",
          "desktop.errorpopup.desc.expired":
            "File ini tidak dapat dikirim ulang karena telah kedaluwarsa.",
          "desktop.errorpopup.desc.remobile":
            "Pesan tidak dapat dikirim karena eror pada server. Silakan coba lagi di LINE untuk perangkat seluler.",
          "desktop.errorpopup.desc.remobiles":
            "Pesan tidak dapat dikirim ke grup karena eror pada server. Silakan coba lagi di LINE untuk perangkat seluler.",
          "desktop.errorpopup.desc.renewmembership":
            "Item tidak dapat ditambahkan karena status keanggotaan LYP Premium Anda berubah. Cek status keanggotaan dan coba lagi.",
          "desktop.errorpopup.desc.revisedtermsofuse":
            'Item tidak dapat ditambahkan karena Anda belum menyetujui "Persetujuan Mengenai Penggunaan Informasi" yang direvisi. Coba tambahkan foto dalam kualitas asli atau video ke album di perangkat seluler Anda dan setujui kebijakan individu yang telah direvisi.',
          "desktop.errorpopup.title.resend": "Kirim Ulang Pesan Ini",
          "desktop.favoritethreads.desc.nothreads":
            "Tambahkan utas yang diminati ke daftar Favorit dengan mengetuk ikon bintang di sudut kanan atas dari utas terkait.",
          "desktop.fileshare.button.cancel": "Batal",
          "desktop.fileshare.button.open": "Bagikan",
          "desktop.fileshare.desc.unsafefile":
            "Anda diminta untuk membagikan file berikut dengan pengguna lain. Bagikan file?\n\n%1",
          "desktop.foldermenu.button.moveto": "Pindahkan ke",
          "desktop.friends.choose.empty": "Tak ada teman untuk dipilih.",
          "desktop.friendssearch.title.friendssearch": "Cari Teman",
          "desktop.gprofilesetting.button.capturescreen": "Tangkap Layar",
          "desktop.gprofilesetting.button.createtext": "Buat Profil Teks",
          "desktop.gprofilesetting.button.deleteprofile": "Hapus Foto Profil",
          "desktop.gprofilesetting.button.selectdefault": "Pilih dari Default",
          "desktop.gprofilesetting.button.selectphoto": "Pilih Foto",
          "desktop.group.choose.empty": "Tak ada grup yang dapat dipilih.",
          "desktop.hevcerror.desc.unabletoplay":
            "Format file ini tidak dapat diputar. Unduh file?",
          "desktop.installer.button.install": "Instal",
          "desktop.installer.checkbox.iagree":
            "Saya setuju dengan [Syarat Umum Penggunaan LY Corporation|https://terms.line.me/line_terms?lang=id].",
          "desktop.installer.desc.installingline":
            "Menginstal LINE. Mohon tunggu.",
          "desktop.installer.desc.readandagree":
            "Baca dan setujui Syarat dan Ketentuan Penggunaan untuk menginstal LINE.",
          "desktop.installercancel.button.no": "Tidak",
          "desktop.installercancel.button.yes": "Ya",
          "desktop.installercancel.desc.stopinstalling":
            "Berhenti menginstal LINE?",
          "desktop.installerror.button.download": "Unduh",
          "desktop.installerror.desc.badfile":
            "LINE tidak terinstal dengan benar. Silakan unduh file instalasi dan coba lagi.",
          "desktop.leavescreenpopup.button.cancel": "Batal",
          "desktop.leavescreenpopup.button.leave": "Keluar",
          "desktop.line.albums.desc.photosnotyet":
            "Tampilan untuk semua foto akan segera tersedia.",
          "desktop.line.chatmenu.title.albumsempty": "Belum ada album.",
          "desktop.login.button.gotoemailwithPhoneNumber":
            "Login dengan Alamat Email",
          "desktop.login.button.gotosmartphone": "Login melalui Ponsel",
          "desktop.login.button.loginwithsmartphone": "Login dengan Ponsel",
          "desktop.login.desc.transferring": "Memindahkan akun LINE",
          "desktop.login.desc.verification":
            "Jika Anda mengalami masalah saat mengakses LINE di Ponsel, silakan pindahkan akun LINE Anda.",
          "desktop.login.popup.scanqr":
            "Pindai kode QR berikut dengan ponsel, lalu ketuk Kata Sandi untuk mengatur ulang kata sandi.",
          "desktop.login.popup.seeonmobile": "Atur Ulang Kata Sandi di Ponsel",
          "desktop.login.popupbutton.gotit": "Tampilkan Kode Verifikasi",
          "desktop.login.popupdesc.cancelverification":
            "Jangan verifikasi identitas saya",
          "desktop.login.popupdesc.loggingin":
            "Verifikasi identitas melalui ponsel.",
          "desktop.login.popupdesc.pairingverificationcode":
            'Buka LINE melalui ponsel lalu masukkan 6 digit kode melalui Pengaturan > Akun > "Pasangkan Perangkat Baru".',
          "desktop.login.popupdesc.pairingverificationcodeguide":
            'Menautkan akun perangkat Anda untuk pertama kali\n\n1. Buka LINE melalui ponsel\n2. Buka Pengaturan > Akun > "Pasangkan Perangkat Baru"\n3. Masukkan 6 digit kode verifikasi\nKetuk "Tampilkan Kode Verifikasi" untuk melanjutkan.',
          "desktop.login.popupdesc.pairsecondarydevice":
            "Pasangkan Perangkat Baru",
          "desktop.login.popuptitle.loggingin": "Login",
          "desktop.login.popuptitle.pairingverificationcode":
            "Pasangkan dengan Akun di Ponsel",
          "desktop.main.popup.newversion":
            "Versi baru aplikasi LINE telah tersedia. Update sekarang?",
          "desktop.movetomenu.button.all": "Semua",
          "desktop.movetomenu.button.customfolder": "%1",
          "desktop.movetomenu.button.friends": "Teman",
          "desktop.movetomenu.button.groups": "Grup",
          "desktop.movetomenu.button.oas": "Akun Resmi",
          "desktop.movetomenu.button.openchats": "OpenChat",
          "desktop.mypsticker.button.stickershop": "Sticker shop",
          "desktop.mypsticker.button.upgrade": "Beralih ke Paket Plus",
          "desktop.mypsticker.desc.getmore":
            "Cari lebih banyak stiker Premium!",
          "desktop.mypsticker.desc.maximum":
            "Simpan hingga %1 stiker Premium dalam satu waktu.",
          "desktop.mypsticker.desc.nosticker":
            "Stiker Premium yang dimiliki akan ditampilkan di sini.",
          "desktop.mypsticker.desc.upgradetodeluxe":
            "Simpan hingga 1.000 set stiker atau emotikon dengan paket Plus. Beralih ke paket Plus melalui perangkat seluler.",
          "desktop.mysticker.button.cancel": "Batal",
          "desktop.mysticker.button.cancelshow": "Batal",
          "desktop.mysticker.button.showall": "Lihat semua",
          "desktop.mysticker.button.stop": "Stop",
          "desktop.mysticker.button.stopshow": "Stop",
          "desktop.mysticker.desc.downloadstopemoji":
            "Berhenti mengunduh emotikon?",
          "desktop.mysticker.desc.downloadstopsticker":
            "Ingin membatalkan pengunduhan?",
          "desktop.mysticker.desc.stopshowemoji":
            "Berhenti mengunduh semua emotikon?",
          "desktop.mysticker.desc.stopshowsticker":
            "Ingin membatalkan pengunduhan semua stiker?",
          "desktop.mystickers.desc.noexpire": "Tak ada tanggal kadaluarsa.",
          "desktop.mystickers.desc.nolongerp":
            "Sudah tidak tersedia di Premium",
          "desktop.mystickers.desc.passedtime": "Kadaluarsa",
          "desktop.mystickers.desc.until": "Berlaku sampai %1",
          "desktop.mystickers.tooltip.hide": "Sembunyikan",
          "desktop.mystickers.tooltip.show": "Tampilkan",
          "desktop.noin87notice.button.download": "Unduh",
          "desktop.noin87notice.desc.supportend":
            "LINE tidak lagi mendukung Windows 7 dan 8. Silakan klik tombol di bawah ini untuk mengunduh versi terbaru yang masih didukung.",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "Pesan mungkin akan tetap terlihat oleh sebagian operator akun resmi, tergantung dari konfigurasi sistem yang digunakan oleh operator tersebut. Yakin ingin mengurungkan pengiriman pesan?",
          "desktop.ocr.popup.toobig":
            "Gambar tidak dapat diproses karena lebih besar dari 5 MB. Ubah ukuran gambar dan coba lagi.",
          "desktop.openchatsetting.popup.onmobile":
            "Pengaturan ini dapat diubah di LINE untuk perangkat seluler.",
          "desktop.premiumhistory.desc.history":
            "Berikut adalah daftar stiker Premium yang tidak digunakan pada satu tahun ke belakang.",
          "desktop.premiumpopup.button.canceleold": "Batal",
          "desktop.premiumpopup.button.deleteold": "Hapus",
          "desktop.premiumpopup.button.edit": "Edit Stiker",
          "desktop.premiumpopup.desc.downloadlimit":
            "Batas maksimum stiker Premium yang ada di koleksi (%1 set) telah terlampaui. Hapus salah satu set stiker yang ada di koleksi dan coba lagi.",
          "desktop.premiumpopup.desc.notavailablee":
            "Emotikon ini sudah tidak tersedia di Stiker LINE Premium. Hapus dari daftar?",
          "desktop.premiumpopup.desc.notavailables":
            "Stiker ini sudah tidak tersedia di Stiker LINE Premium. Hapus dari daftar?",
          "desktop.premiumpopup.title.downloadlimit": "Batas Pengunduhan",
          "desktop.profile.desc.video15secs":
            "Sampul video profil harus berdurasi kurang 15 detik.",
          "desktop.profile.desc.video6secs":
            "Video profil harus berdurasi kurang dari 6 detik.",
          "desktop.profileselectphoto.button.cancel": "Batal",
          "desktop.profileselectphoto.button.save": "Simpan",
          "desktop.profilesetting.button.capturescreen": "Tangkap Layar",
          "desktop.profilesetting.button.createtext": "Buat Profil Teks",
          "desktop.profilesetting.button.deleteprofile": "Hapus Foto Profil",
          "desktop.profilesetting.button.selectdefault": "Pilih dari Default",
          "desktop.profilesetting.button.selectphoto": "Pilih Foto",
          "desktop.profilesetting.popup.500savechat":
            "Sebanyak 500 pesan terakhir yang dikirim dalam obrolan akan disimpan sebagai file teks.",
          "desktop.quickreply.popup.notonpc":
            "Fitur ini tidak tersedia di LINE untuk PC.",
          "desktop.reaction.button.ok": "OK",
          "desktop.reaction.button.seemore": "Selengkapnya",
          "desktop.reaction.desc.error":
            "Tanggapan tidak dapat diberikan karena eror sementara. Silakan coba lagi.",
          "desktop.reaction.desc.plurals.other": "%1 tanggapan",
          "desktop.reaction.desc.reaction1":
            "Letakkan kursor di atas pesan\ndan klik ikon senyum untuk memberikan tanggapan.",
          "desktop.reaction.desc.reaction2":
            "Klik ikon di bawah pesan untuk melihat\ntanggapan dari teman.",
          "desktop.reaction.desc.unsent":
            "Pesan ini sudah tidak dapat ditanggapi.",
          "desktop.reaction.title.reaction":
            "Satu tanggapan sama nilainya\ndengan seribu pesan!",
          "desktop.reaction.toast.expired":
            "Item tidak dapat ditanggapi karena item telah kedaluwarsa.",
          "desktop.reaction.toast.unsent":
            "Foto sudah tidak dapat ditanggapi karena diurungkan pengirimannya.",
          "desktop.reaction.tooltip.smile":
            "Klik ikon senyum untuk memberi tanggapan pada foto.",
          "desktop.removechatpopup.button.cancel": "Batal",
          "desktop.removechatpopup.button.remove": "Hilangkan",
          "desktop.removechatpopup.desc.allchats.other": "%1 Obrolan di Folder",
          "desktop.removechatpopup.desc.selected": "%1 dipilih",
          "desktop.removechatpopup.placeholder.search": "Cari",
          "desktop.removechatpopup.title.removechats":
            "Hilangkan Obrolan dari Folder Ini",
          "desktop.restorepopup.button.ignore": "Tolak",
          "desktop.restorepopup.button.restore": "Pulihkan",
          "desktop.restorepopup.desc.restoreline":
            "Terdapat aplikasi LINE lain yang dipasang melalui jalur yang berbeda. Pulihkan riwayat obrolan dari aplikasi lain?",
          "desktop.setting.desc.enablechatfolders":
            "Nyalakan fitur Folder Obrolan",
          "desktop.setting.desc.windows": "Windows",
          "desktop.setting.title.chatfolder": "Folder Obrolan",
          "desktop.settings.desc.cantgetnotifocusassist":
            "Pemberitahuan dari LINE tidak dapat diterima karena Focus Assist Dinyalakan. Silakan ubah pengaturan Focus Assist di perangkat.",
          "desktop.settings.desc.cantgetnotiline":
            "Pemberitahuan dari LINE belum dinyalakan. Silakan nyalakan di pengaturan perangkat.",
          "desktop.settings.desc.cantgetnotios":
            "Pemberitahuan belum dinyalakan. Silakan nyalakan di pengaturan perangkat.",
          "desktop.settings.desc.osnotification":
            "Pilih Windows untuk menerima pemberitahuan yang sesuai dengan sistem pengaturan Windows.",
          "desktop.settings.desc.safeguard":
            "Tampilkan pratinjau sebelum file dikirim, saat file diseret dan dilepas ke ruang obrolan.",
          "desktop.settings.notification.description":
            "Penutupan aplikasi dengan paksa dapat menyebabkan pemberitahuan terlambat atau tidak dapat diterima.",
          "desktop.settings.notifications.turnonm":
            "Pemberitahuan dari LINE belum dinyalakan. Silakan nyalakan di pengaturan perangkat.",
          "desktop.settings.notifications.turnonw":
            'Opsi Pemberitahuan dari LINE belum dinyalakan. Untuk menerima pemberitahuan dari LINE, buka Pengaturan > Sistem > "Pemberitahuan & tindakan" pada perangkat, lalu nyalakan  opsi pemberitahuan untuk LINE.',
          "desktop.settings.title.safeguard": "Pratinjau File",
          "desktop.shortcuts.desc.tilechats": "Jajarkan Obrolan",
          "desktop.shortcuts.desc.undotiling": "Urungkan Penjajaran Obrolan",
          "desktop.smode.popup.nogif":
            "Fitur panggilan, penampil media, dan tangkap GIF tidak bisa digunakan di Windows 10 dalam mode S karena kebijakan keamanan.",
          "desktop.sticker.button.deletedstickers":
            "Riwayat Pengunduhan Premium",
          "desktop.sticker.button.mystickers": "Stiker Saya",
          "desktop.sticker.button.premium": "Stiker Premium Saya",
          "desktop.sticker.tooltip.switch":
            "Ubah urutan stiker untuk mengorganisir stiker yang dimiliki. Daftar akan otomatis disinkronisasikan dengan daftar perangkat selular Anda.",
          "desktop.stickers.desc.recentlyusede":
            "Emotikon yang terakhir digunakan",
          "desktop.stickers.desc.recentlyuseds":
            "Stiker yang terakhir digunakan",
          "desktop.stickers.tooltip.synced":
            "Urutan stiker dan emotikon telah disinkronisasi dengan aplikasi di perangkat seluler.",
          "desktop.stickertab.button.seemore": "Lihat lainnya",
          "desktop.stickertab.desc.latestemoji": "Emotikon Terbaru %1",
          "desktop.stickertab.desc.lateststicker": "Stiker Terbaru %1",
          "desktop.tab.button.ai": "AI",
          "desktop.textprofile.button.cancel": "Batal",
          "desktop.textprofile.button.save": "Simpan",
          "desktop.textprofile.desc.defaultfont": "Fon Default",
          "desktop.textprofile.placeholder.entertext": "Masukkan teks",
          "desktop.textprofile.title.createtextprofile": "Buat Profil Teks",
          "desktop.thread.desc.sendfiletothread": "Kirim file ke obrolan",
          "desktop.thread.tooltip.taphere":
            "Ketuk ikon ini untuk menambahkan atau menghapus utas dari daftar Favorit.",
          "desktop.updatepopup.button.later": "Nanti",
          "desktop.updatepopup.button.update": "Update",
          "desktop.updatepopup.desc.update1":
            "LINE %1 tidak dapat digunakan lagi. Update ke versi terbaru. LINE akan dimuat ulang saat diupdate.",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1 tidak dapat digunakan lagi. Update ke versi terbaru melalui App Store.",
          "desktop.viewer.desc.gifby": "GIF dari %1",
          "desktop.viewer.desc.gifmagazine": "GIFMAGAZINE",
          "desktop.viewer.popup.cantsave":
            "GIF dari %1 tidak dapat disimpan di Keep.",
          "desktop.viewer.popup.cantsaves":
            "GIF dari %1 tidak dapat disimpan di Keep. Simpan file yang tersisa?",
          "desktop.viewer.popup.cantshare":
            "GIF dari %1 tidak dapat dibagikan.",
          "desktop.viewer.popup.cantshares":
            "GIF dari %1 tidak dapat dibagikan. Bagikan file yang tersisa?",
          "desktop.wallpaper.popup.delete":
            "Hapus latar ini? Latar default akan diterapkan pada obrolan yang menggunakan latar ini.",
          "dialog.download.font": "Tahoma",
          "dialog.download.message": "Memperbarui\u2026",
          "dialog.download.messagesub": "Mohon tunggu.",
          "displayname.error.badwords":
            "Tidak dapat menggunakan nama ini.\nSilakan coba nama lainnya. ",
          "duplicategroup.popup.button.gotochatmultiple": "Buka Grup",
          "duplicategroup.popup.createnewgroup": "Buat Grup Baru",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "Grup dengan anggota ini telah dibuat (%1). Buka grup tersebut?",
          "duplicategroup.popup.desc.selfchatexists":
            "Grup dengan anggota diri Anda sendiri telah dibuat (%1). Buka grup tersebut?",
          "duplicategroup.popup.title.groupexists": "Grup Telah Dibuat",
          "e2ee.auth.pincode.timeout":
            "Terjadi eror yang tidak diketahui.\nSilakan coba lagi nanti.",
          "e2ee.message.title": "Pesan ini tidak dapat didekripsi",
          "e2ee.popupbutton.ok": "OK",
          "e2ee.popupdesc.pleaseresend":
            "Pesan ini tidak dapat ditampilkan karena alasan keamanan. Minta pengirim untuk mengirim ulang pesan.",
          "e2ee.popupdesc.securityerror":
            "File ini tidak dapat dibuka karena alasan keamanan.",
          "e2ee.popuptitle.securityerror": "Eror Keamanan",
          "emoji.downloadAll.confirm": "Unduh semua emotikon?",
          "friend.msg.block":
            'Yakin ingin memblokir %1? Pesan dari akun ini tidak akan diterima lagi. Buka blokir akun melalui Pengaturan > Teman > "Akun yang Diblokir".',
          "friend.msg.hide":
            "Yakin ingin menyembunyikan %1 dari daftar teman? Tampilkan kembali akun di daftar teman melalui Pengaturan > Teman > Akun Tersembunyi.",
          "gallery.picker.original.btn": "Asli",
          "gnb.guide.allNotification.text":
            "Matikan semua pemberitahuan dengan sekali klik saat butuh ketenangan dan kedamaian.",
          "group.btn.add.title": "Tambah",
          "group.btn.cancel.title": "Batal",
          "group.btn.cancelinvite.title": "Batal",
          "group.btn.invite.title": "Tambah Teman ke Obrolan",
          "group.btn.removeMember.title": "Hapus",
          "group.button.invitefrineds": "Undang Teman",
          "group.label.addprofile.title": "Edit",
          "group.label.create.title": "Buat Grup",
          "group.label.groupname.title": "Nama Grup",
          "group.label.invitee.title": "Tertunda",
          "group.label.member.title": "Anggota",
          "group.label.modify.title": "Edit Grup",
          "group.label.modifyprofile.title": "Edit",
          "group.label.nobuddy.title": "Tak Ada Anggota",
          "group.label.nobuddytoselect.title": "Tak ada teman untuk dipilih.",
          "group.label.nosearchresult.title": "Tidak ada hasil.",
          "group.label.nothing.title": "Tak ada teman yang telah dipilih.",
          "group.label.selectmember.title": "Undang anggota",
          "group.label.unauthorized":
            "Anda tidak memiliki izin untuk grup ini.",
          "group.menu.delete": "Hapus",
          "group.menu.leave": "Tinggalkan",
          "group.msg.cancelInvite.confirm":
            "%1 belum bergabung di grup. Yakin ingin membatalkan undangan?",
          "group.msg.cancelinvite.failed": "Gagal membatalkan undangan.",
          "group.msg.empty.name": "Silakan masukkan nama grup.",
          "group.msg.kickoutmember.confirm": "Ingin menghapus %1?",
          "group.msg.kickoutmember.failed": "Gagal menghapus anggota.",
          "group.msg.leavegroup.confirm":
            "Jika Anda meninggalkan grup ini, daftar anggota dan riwayat obrolan grup tidak akan dapat dlihat lagi. Tinggalkan grup ini?",
          "group.msg.makegroup.failed": "Gagal membuat grup.",
          "group.msg.overflow.name":
            "Anda dapat memasukkan hingga 20 karakter. Silakan cek jumlah karakter.",
          "group.msg.uploadimge.failed": "Gagal mengunggah foto.",
          "group.profile.delete": "Hapus Profil",
          "group.profile.select.default": "Pilih dari Profil",
          "group.profile.select.local": "Pilih dari PC",
          "group.text.placerholder.title": "Nama Grup",
          "group.title.members": "Anggota",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "Fitur Meeting sementara ini belum tersedia bagi pengguna di bawah umur.",
          "groupcall.alert.popup.error.nowcalling":
            "Anda tidak dapat melakukan dua panggilan sekaligus.\nAkhiri panggilan saat ini dan coba lagi.",
          "groupcall.call.change.to.video": "Alihkan ke panggilan video?",
          "groupcall.call.change.to.video.noCamera":
            "Video Anda tidak akan ditampilkan karena tidak ada kamera terdeteksi. Masih ingin beralih ke panggilan video?",
          "groupcall.call.endwatchtogether.button": "Berhenti Berbagi",
          "groupcall.call.invite.complete": "Undangan terkirim.",
          "groupcall.call.invite.tooltip":
            "Tekan tombol ini untuk mengundang yang lain di obrolan ke panggilan grup.",
          "groupcall.call.popupbutton.cancel": "Nanti",
          "groupcall.call.popupbutton.switch": "Alihkan",
          "groupcall.call.popupdesc.newcam": 'Beralih ke "%1" sekarang?',
          "groupcall.call.popupdesc.newmic": 'Beralih ke "%1" sekarang?',
          "groupcall.call.popupdesc.newspeaker": 'Beralih ke "%1" sekarang?',
          "groupcall.call.popuptitle.newcam": "Kamera Baru Ditemukan",
          "groupcall.call.popuptitle.newmic": "Mikrofon Baru Ditemukan",
          "groupcall.call.popuptitle.newspeaker": "Speaker Baru Ditemukan",
          "groupcall.call.speaker.many.few": "%1 dan %2 lainnya",
          "groupcall.call.speaker.many.many": "%1 dan %2 lainnya",
          "groupcall.call.speaker.many.one": "%1 dan %2 lainnya",
          "groupcall.call.speaker.many.other": "%1 dan %2 lainnya",
          "groupcall.call.speaker.many.two": "%1 dan %2 lainnya",
          "groupcall.call.speaker.many.zero": "%1 dan %2 lainnya",
          "groupcall.call.toast.loadingyoutube": "Memuat...",
          "groupcall.call.toast.someoneelsepreparingwatchtogether":
            "%1 bersiap untuk berbagi layar.",
          "groupcall.call.toast.usersjoinedgroupcall.other":
            "%1 dan %n lainnya bergabung dalam panggilan grup.",
          "groupcall.call.toast.usersleftgroupcall.other":
            "%1 dan %n lainnya meninggalkan panggilan grup.",
          "groupcall.call.waiting.msg":
            "Menunggu yang lain bergabung dengan panggilan...",
          "groupcall.call.watchtogether.button": "Bagikan\nLayar",
          "groupcall.callsettings.button.numberofparticipants": "Peserta (%1)",
          "groupcall.callsettings.tooltip.handsfreebt":
            "%1 harus diatur sebagai mikrofon sekaligus speaker.",
          "groupcall.callsettingspreview.desc.nocamera":
            "Periksa pengaturan panggilan Anda sebelum bergabung. Gambar Anda tidak akan terlihat karena kamera tidak terdeteksi.",
          "groupcall.callsettingspreview.desc.nomic":
            "Periksa pengaturan panggilan Anda sebelum bergabung. Suara Anda tidak akan terdengar karena mikrofon tidak terdeteksi.",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "Periksa pengaturan panggilan Anda sebelum bergabung. Gambar dan suara Anda tidak akan muncul karena kamera dan mikrofon tidak terdeteksi.",
          "groupcall.chat.alert.popup.error.overflow":
            "Tidak dapat memulai panggilan grup karena volume panggilan yang besar.\nSilakan coba lagi nanti.",
          "groupcall.chat.confirm.popup.cant":
            "Tidak dapat bergabung dengan panggilan grup ini karena Anda bukan anggota grup ini.",
          "groupcall.chat.confirm.popup.join.few":
            "Ada %n peserta di panggilan grup ini. Ingin bergabung dengan panggilan ini?",
          "groupcall.chat.confirm.popup.join.many":
            "Ada %n peserta di panggilan grup ini. Ingin bergabung dengan panggilan ini?",
          "groupcall.chat.confirm.popup.join.one":
            "Ada %n peserta di panggilan grup ini. Ingin bergabung dengan panggilan ini?",
          "groupcall.chat.confirm.popup.join.other":
            "Ada %n peserta di panggilan grup ini. Ingin bergabung dengan panggilan ini?",
          "groupcall.chat.confirm.popup.join.two":
            "Ada %n peserta di panggilan grup ini. Ingin bergabung dengan panggilan ini?",
          "groupcall.chat.confirm.popup.join.zero":
            "Ada %n peserta di panggilan grup ini. Ingin bergabung dengan panggilan ini?",
          "groupcall.chat.confirm.popup.start":
            "Tak ada panggilan grup yang sedang aktif.\nIngin memulai panggilan?",
          "groupcall.chat.confirm.popup.start.btn.video":
            "Mulai panggilan video",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "Mulai panggilan suara grup?",
          "groupcall.chat.layer.join.btn": "Bergabung",
          "groupcall.chat.layer.numofmembers.few":
            '<![CDATA[<font color=\\"#527fdc\\">%n orang</font> di panggilan. ]]>',
          "groupcall.chat.layer.numofmembers.many":
            '<![CDATA[<font color=\\"#527fdc\\">%n orang</font> di panggilan. ]]>',
          "groupcall.chat.layer.numofmembers.one":
            '<![CDATA[<font color=\\"#527fdc\\">%n orang</font> di panggilan. ]]>',
          "groupcall.chat.layer.numofmembers.other":
            '<![CDATA[<font color=\\"#527fdc\\">%n orang</font> di panggilan. ]]>',
          "groupcall.chat.layer.numofmembers.two":
            '<![CDATA[<font color=\\"#527fdc\\">%n orang</font> di panggilan. ]]>',
          "groupcall.chat.layer.numofmembers.zero":
            '<![CDATA[<font color=\\"#527fdc\\">%n orang</font> di panggilan. ]]>',
          "groupcall.chat.layer.start.btn": "Mulai",
          "groupcall.chat.layer.start.dscr": "Mulai panggilan grup",
          "groupcall.chat.layer.start.msg": "%1 memulai panggilan grup.",
          "groupcall.chat.message.end": "Panggilan grup berakhir.",
          "groupcall.chat.message.invite":
            "Anda diundang ke panggilan grup:\n%1",
          "groupcall.chat.message.start": "Panggilan grup dimulai.",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            'Anda diundang untuk bergabung ke LINE Meeting "%1". Buka tautan di bawah untuk bergabung ke panggilan ini.\n%2',
          "groupcall.chatlink.popupdesc.invalidlink": "Tautan tidak valid.",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "Buat meeting berbasis tautan dan bagikan ke teman untuk memulai panggilan.",
          "groupcall.createchat.button.createmeeting": "Meeting",
          "groupcall.deletemeeting.popupdesc.delete": "Hapus",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "Hapus pertemuan ini?",
          "groupcall.editmeetingname.popuptitle.edit": "Edit Nama Meeting",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "Jumlah pengguna dalam panggilan grup tidak boleh melebihi %1pengguna.",
          "groupcall.groupcallsettings.title.participants": "Peserta",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "%1 dikeluarkan dari Meeting.",
          "groupcall.invite.index.not.join": "Tertunda",
          "groupcall.invite.selectall": "Pilih semua",
          "groupcall.invite.title": "Undang",
          "groupcall.kickout.popup":
            "Panggilan telah berakhir karena batas waktu koneksi habis.",
          "groupcall.leavemeeting.popupbutton.leave": "Tinggalkan",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "Jika Anda meninggalkan Meeting ini, daftar peserta atau riwayat obrolan Meeting tidak akan dapat dilihat lagi. Yakin ingin meninggalkan Meeting?",
          "groupcall.meetingintroguide.button.start": "Buat Meeting",
          "groupcall.meetingintroguide.desc.disclaimers":
            "Perhatikan bahwa tautan Meeting hanya berlaku selama 90 hari setelah dibuat. Nama tampilan LINE dan foto profil Anda akan dapat dilihat oleh peserta lain Saat Anda bergabung ke Meeting atau mengirim pesan dalam obrolan di Meeting.",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "Perhatikan bahwa tautan Meeting hanya berlaku selama 90 hari setelah dibuat, dan hanya dapat diakses oleh peserta yang memenuhi batas usia.Nama tampilan LINE dan foto profil Anda akan dapat dilihat oleh peserta lain Saat Anda bergabung ke Meeting atau mengirim pesan dalam obrolan di Meeting.",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "Mulai pertemuan melalui video dengan siapa pun cukup dengan membagikan tautan.",
          "groupcall.meetingintroguide.header.connect":
            "Mudah terhubung\ndengan 1 tautan",
          "groupcall.meetingintroguide.title.meetings": "Meeting",
          "groupcall.meetingnameedit.popupbutton.save": "Simpan",
          "groupcall.meetingparticipantlist.button.remove": "Keluarkan",
          "groupcall.meetingparticipants.button.next": "Berikutnya",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "Cari dengan Nama",
          "groupcall.meetingparticipants.title.reportuser": "Laporkan",
          "groupcall.meetings.button.copymeetinglink": "Salin Tautan",
          "groupcall.meetings.button.createmeeting": "Buat Meeting",
          "groupcall.meetings.button.shareinvite": "Undang",
          "groupcall.meetings.button.startmeeting": "Mulai",
          "groupcall.meetings.desc.createdjustnow": "Baru saja",
          "groupcall.meetings.desc.usersmeeting": "Meeting %1",
          "groupcall.meetings.popup.policyblock":
            "LINE Meeting tidak dapat digunakan karena akun Anda diduga melanggar ketentuan kami.",
          "groupcall.meetings.popupdesc.networkerror":
            "Halaman gagal dimuat karena terjadi eror jaringan. Silakan coba lagi.",
          "groupcall.meetings.toast.meetingcreated": "Meeting dibuat.",
          "groupcall.meetingscreen.tooltip.invitemorepeople":
            "Tambahkan teman ke Meeting.",
          "groupcall.participantlist.desc.cameraturnedoff": "Kamera nonaktif",
          "groupcall.participantlist.desc.gridview": "Beralih ke tampilan kisi",
          "groupcall.participantlist.desc.muted": "Mati",
          "groupcall.participantlist.desc.participantview":
            "Pin orang ini ke layar fokus",
          "groupcall.participantlist.placeholder.searchbyname":
            "Cari berdasarkan nama",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "Nama tampilan LINE dan foto profil Anda akan terlihat.",
          "groupcall.removefrommeeting.popupbutton.remove": "Keluarkan",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "Keluarkan %1 dari Meeting?",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "Partisipan ini tidak dapat dikeluarkan karena terjadi eror sementara. Silakan coba lagi.",
          "groupcall.report.button.content": "Konten Tidak Pantas",
          "groupcall.report.button.harrassment": "Pelecehan/Cari Jodoh",
          "groupcall.report.button.impersonation": "Peniruan Identitas",
          "groupcall.report.button.impersonation.inquirypopup":
            "Mohon pertimbangkan untuk memberikan informasi mendetail untuk membantu kami menyelidiki kasus peniruan identitas dengan melanjutkan proses di Form Pengaduan kami dan mengisi poin yang diminta.",
          "groupcall.report.button.impersonation.inquirypopup.decline":
            "Lewati",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "Proses",
          "groupcall.report.button.other": "Lainnya",
          "groupcall.report.button.report": "Laporkan",
          "groupcall.report.button.scam": "Penipuan",
          "groupcall.report.button.spam": "Spam/Iklan",
          "groupcall.report.desc.reportreason":
            "Kami juga akan menerima informasi tentang pengguna ini dan screenshot Meeting untuk membantu kami memoderasi laporan.",
          "groupcall.report.popupbutton.donotremove": "Jangan Keluarkan",
          "groupcall.report.popupbutton.remove": "Keluarkan",
          "groupcall.report.popupdesc.removeuser":
            "Laporan terkirim.\nKeluarkan pengguna ini dari Meeting?",
          "groupcall.report.subtitle.reportreason":
            "Beri tahu kami alasannya dan apa yang terjadi.",
          "groupcall.screenshare.receiver.failreceive":
            "Layar sedang dimuat...",
          "groupcall.screenshare.receiver.senderdesc":
            "%1 sedang membagikan layar.",
          "groupcall.screenshare.receiver.viewscreen":
            "Kembali ke Layar yang Dibagikan",
          "groupcall.screenshare.sender.btn.stop": "Berhenti Berbagi",
          "groupcall.screenshare.sender.desc": "Anda sedang membagikan layar.",
          "groupcall.settings.menu.report": "Laporkan",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "Anda hanya dapat membuat maks. 30 pertemuan. Hapus pertemuan yang tidak lagi digunakan dan coba lagi.",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "Anda hanya dapat mengundang peserta ke Meeting dengan membagikan undangan Meeting. Salin tautan dan bagikan di obrolan untuk mengundang teman.",
          "groupcall.title": "Panggilan Grup",
          "groupcall.toast.deviceerror.camera":
            "Kamera ini sedang digunakan oleh aplikasi lain. Silakan pilih kamera lain.",
          "groupcall.toast.newdevice.camera": 'Beralih ke kamera "%1".',
          "groupcall.toast.newdevice.mic": 'Beralih ke mikrofon "%1".',
          "groupcall.toast.newdevice.speaker": 'Beralih ke speaker "%1".',
          "groupcall.verifyage.desc.verifyageinmobileversion":
            "Harap verifikasikan usia Anda untuk menggunakan fitur ini.\nUntuk memverifikasi usia, buka Pengaturan > Verifikasi Usia pada aplikasi LINE untuk perangkat seluler.",
          "groupcall.video.alert.member.join":
            "%1 bergabung ke panggilan grup.",
          "groupcall.video.alert.member.leave":
            "%1 meninggalkan panggilan grup.",
          "groupcall.video.alert.streaming.off.member":
            "Anda mematikan video pengguna ini.\nNyalakan kembali untuk menampilkan video.",
          "groupcall.video.chat.error.without.camera.body":
            "Kamera tidak terdeteksi. Gabung ke panggilan grup ini tanpa menampilkan video Anda?",
          "groupcall.video.chat.error.without.camera.btn.video":
            "Gabung ke Panggilan Video",
          "groupcall.video.chat.error.without.camera.btn.voice":
            "Gabung ke Panggilan Suara",
          "groupcall.video.chat.layer.start.dscr":
            "Mulai panggilan video grup.",
          "groupcall.video.chat.layer.start.msg":
            "%1 memulai panggilan video grup.",
          "groupcall.video.chat.layer.start.shortmsg":
            "Panggilan video dimulai",
          "groupcall.video.chat.message.invite":
            'Anda diundang ke panggilan video grup:\n"%1"',
          "groupcall.video.chat.message.start": "Panggilan video grup dimulai.",
          "groupcall.video.desc.guide.tryCall":
            "Sekarang Anda dapat berpartisipasi dalam panggilan video grup menggunakan LINE pada PC Anda. ",
          "groupcall.video.error.change.to.voice":
            "Diubah ke panggilan suara karena jaringan tidak stabil atau sibuk.",
          "groupcall.video.error.not.video.member":
            "Tidak dapat menampilkan video pengguna ini karena pengguna bergabung di panggilan ini tanpa video.",
          "groupcall.video.fullview.streaming.fail.body":
            "Tidak dapat memuat video %1.\nSilakan coba lagi.",
          "groupcall.video.fullview.streaming.fail.button": "Coba lagi",
          "groupcall.video.fullview.streaming.off.body":
            "Anda mematikan video %1.\nHidupkan kembali untuk melihatnya.",
          "groupcall.video.menu.streaming.off": "Matikan Video",
          "groupcall.video.menu.streaming.on": "Nyalakan Video",
          "groupcall.video.title": "Panggilan video grup",
          "groupcall.video.toast.cameraoff":
            "Kamera Anda telah dimatikan dan jendela Efek telah ditutup.",
          "groupcall.video.tooltip.focusview": "Beralih ke tampilan fokus",
          "groupcall.video.tooltip.gridview": "Beralih ke tampilan kisi",
          "groupcall.video.tooltip.profilelist": "Lihat partisipan",
          "groupcall.video.tooltip.videolayout": "Ubah tata letak video",
          "groupcall.viewmode.desc.focusviewcenter": "Tampilan fokus (tengah)",
          "groupcall.viewmode.desc.focusviewleft": "Tampilan fokus (kiri)",
          "groupcall.viewmode.desc.focusviewright": "Tampilan fokus (kanan)",
          "groupcall.viewmode.desc.gridview": "Tampilan grid",
          "groupcall.voice.chat.confirm.popup.join":
            "Panggilan suara grup sedang berlangsung.\xa0Bergabung ke panggilan?",
          "groupcall.voice.chat.layer.start.dscr":
            "Mulai panggilan suara grup.",
          "groupcall.voice.chat.layer.start.msg":
            "%1 memulai panggilan suara grup.",
          "groupcall.voice.chat.layer.start.shortmsg":
            "Panggilan suara dimulai",
          "groupcall.voice.chat.message.invite":
            'Anda diundang ke panggilan suara grup:\n"%1"',
          "groupcall.voice.chat.message.start":
            "Panggilan suara grup dimulai. ",
          "groupcall.voice.title": "Panggilan suara grup",
          "groupcall.watchtogethercall.popupbutton.start": "Mulai",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "Tonton video bersama teman-teman?",
          "groupcall.watchtogethercall.toast.currentlyinsession":
            "%1 sedang membagikan layar.",
          "groupcall.watchtogethercall.toast.userendedwatchtogether":
            "%1 berhenti berbagi layar.",
          "groupcall.watchtogethercall.toast.userstartedwatchtogether":
            "%1 mulai berbagi layar.",
          "groupcall.watchtogethermenu.button.screenshare": "Layar Saya",
          "groupcall.watchtogethermenu.button.youtube": "YouTube",
          "groupcall.watchtogethermenu.desc.policy": "Kebijakan Privasi",
          "groupcall.watchtogethermenu.desc.searchonyoutube":
            "Cari tautan YouTube, kata kunci",
          "groupcall.watchtogethermenu.desc.terms": "Persyaratan Layanan",
          "groupcall.youtube.edge.popup.btn.install": "Lanjutkan",
          "groupcall.youtube.edge.popup.desc":
            "Anda perlu menginstal Microsoft Edge Chromium untuk membagikan video YouTube. Lanjutkan ke situs web Microsoft?",
          "groupcall.youtube.endduetoerror":
            "Berbagi video YouTube berakhir karena eror sementara. Silakan coba lagi.",
          "groupcall.youtube.error.reinstall":
            "Video tidak dapat diputar karena eror sementara. Silakan coba lagi, atau instal ulang browser jika masalah berlanjut.",
          "groupcall.youtube.paste": "Bagikan video YouTube",
          "groupcall.youtube.paste.btn.play": "Putar",
          "groupcall.youtube.paste.btn.search": "Pratinjau",
          "groupcall.youtube.paste.desc":
            "Cari video yang ingin dibagikan kepada teman-teman. (Disarankan menggunakan headphone.)",
          "groupcall.youtube.paste.noresult":
            "Video gagal dimuat. Silakan periksa tautan dan coba lagi.",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "Putar",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "Jeda video ini dan putar yang baru?",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1 sedang membagikan video YouTube.",
          "groupcall.youtube.paste.toast.error":
            "Video tidak dapat dibagikan karena eror sementara.",
          "groupcall.youtube.paste.unknownerror":
            "Video gagal dimuat karena eror sementara. Silakan coba lagi.",
          "groupcall.youtube.receiver.newvideo":
            "%1 sedang menyiapkan video baru.",
          "groupcall.youtube.receiver.playvideo": "Kembali ke Video",
          "groupcall.youtube.receiver.senderdesc": "%1 sedang memutar video.",
          "groupcall.youtube.receiver.tooltip.mute": "Bisukan",
          "groupcall.youtube.receiver.tooltip.unmute": "Nyalakan",
          "groupcall.youtube.receiver.videopaused": "%1 menjeda video.",
          "groupcall.youtube.sender.btn.stop": "Berhenti Berbagi",
          "groupcall.youtube.sender.desc": "Video sedang dibagikan.",
          "groupcall.youtube.stop.popup.btn.confirm": "Berhenti Berbagi",
          "groupcall.youtube.stop.popup.desc":
            "Berhenti membagikan video YouTube ini?",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "Fitur Berbagi video YouTube saat ini tidak tersedia untuk PC Windows.",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1 membatalkan undangan %2 ke grup.",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1 menambahkan %2 ke grup. <a href="line://nv/group/settings/groupname/chatId=%3">Ubah nama grup</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1 bergabung ke grup. <a href="line://nv/group/settings/groupname/chatId=%2">Ubah nama grup</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1 menghapus %2 dari grup.",
          "groupchat.linkqr.error.block":
            "Grup ini tidak mengizinkan undangan\nlewat tautan atau kode QR.",
          "groupchat.linkqr.error.renew": "Grup ini tidak ada.",
          "groupchat.push.invitedtojoingroup":
            "%1 mengundang untuk bergabung ke grup.",
          "groupchat.push.someonejoinsgroup": "%1 bergabung ke grup.",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1 mengizinkan pengguna bergabung melalui tautan atau kode QR.",
          "groupchat.systemmsg.cancelinvite":
            "%1 membatalkan undangan %2 ke grup.",
          "groupchat.systemmsg.cancelinvite.updatename":
            '<![CDATA[%1 membatalkan undangan untuk %2 ke grup. Nama grup tidak akan berubah secara otomatis.<a href="line://nv/group/settings/groupname/chatId=%3">Ubah nama grup</a>]]>',
          "groupchat.systemmsg.changegroupname":
            '%1 mengubah nama grup menjadi "%2".',
          "groupchat.systemmsg.changegroupphoto":
            "%1 mengubah foto profil grup.",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1 mematikan opsi untuk bergabung melalui tautan atau kode QR.",
          "groupchat.systemmsg.inviteuser":
            "%1 mengundang %2 ke grup. Tunggu hingga penguna tersebut bergabung sebelum memulai obrolan.",
          "groupchat.systemmsg.inviteuser1n": "%1 menambahkan %2 ke grup.",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%1 menambahkan %2 ke grup. <a href="line://nv/group/settings/groupname/chatId=%3">Ubah nama grup</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%1 menambahkan %2 ke grup. Nama grup tidak akan berubah secara otomatis.<a href="line://nv/group/settings/groupname/chatId=%3">Ubah nama grup</a>]]>',
          "groupchat.systemmsg.kickoutuser": "%1 menghapus %2 dari grup.",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%1 mengeluarkan %2 dari grup. Nama grup tidak akan berubah secara otomatis.<a href="line://nv/group/settings/groupname/chatId=%3">Ubah nama grup</a>]]>',
          "groupchat.systemmsg.userjoin": "%1 bergabung ke grup.",
          "groupchat.systemmsg.userjoin.updatename": "%1 bergabung ke grup.",
          "groupchat.systemmsg.userleave": "%1 meninggalkan grup.",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1 meninggalkan grup. Nama grup tidak akan berubah secara otomatis.<a href="line://nv/group/settings/groupname/chatId=%2">Ubah nama grup</a>]]>',
          "groupchat.systemmsg.youareinvited":
            "%1 mengundang untuk bergabung ke grup.",
          "grouphome.album.alert.inprogress":
            "Anda tidak dapat menambahkan item atau menghapus album saat item sedang diunggah.\nSilakan coba lagi nanti.",
          "grouphome.album.alert.reupload": "Unggah Kembali Item?",
          "grouphome.album.alert.save.failed": "Item Tidak Dapat Disimpan.",
          "grouphome.album.alert.stopUpload": "Berhenti Mengunggah",
          "grouphome.album.alert.unregistereduser":
            "Anda tidak dapat menggunakan Album dengan pengguna yang akunnya telah dihapus.",
          "grouphome.album.label.reupload": "Lanjutkan Pengunggahan",
          "grouphome.albumdetail.addPhoto": "Tambah foto",
          "grouphome.albumdetail.alert.changeAlbum":
            "Album tidak dapat dipulihkan setelah dihapus,\ndan semua foto di dalam album juga akan ikut terhapus selamanya.\nYakin ingin menghapus album ini?",
          "grouphome.albumdetail.changeName": "Ubah Nama Album",
          "grouphome.albumdetail.delete": "Hapus Album",
          "grouphome.albumdetail.empty.desc":
            "Buat album berisi momen kenangan berharga dan menyenangkan bersama!",
          "grouphome.albumdetail.empty.title":
            "Tidak Ada Item yang Ditambahkan.",
          "grouphome.albumdetail.error":
            "Maaf, tidak dapat memuat info.\nSilakan coba lagi.",
          "grouphome.albumdetail.saveComplete": "Berhasil disimpan.",
          "grouphome.albumdetail.saveall": "Simpan Semua",
          "grouphome.albumdetail.savingPhoto": "Menyimpan Item...",
          "grouphome.albumdetail.selectCount.plurals.few": "%n foto dipilih",
          "grouphome.albumdetail.selectCount.plurals.many": "%n foto dipilih",
          "grouphome.albumdetail.selectCount.plurals.one": "%n foto dipilih",
          "grouphome.albumdetail.selectCount.plurals.other": "%n foto dipilih",
          "grouphome.albumdetail.selectCount.plurals.two": "%n foto dipilih",
          "grouphome.albumdetail.selectCount.plurals.zero": "%n foto dipilih",
          "grouphome.albumdetail.title.changeAlbum": "Ubah Nama Album",
          "grouphome.albumdetail.uploader": "by %1",
          "grouphome.alert.addphoto":
            "Yakin ingin membatalkan?\nItem yang dilampirkan tidak akan disimpan.",
          "grouphome.alert.albumLimitCount":
            "Anda tidak dapat membuat album lagi.\nAnda dapat membuat hingga %n album.",
          "grouphome.alert.alreadyDeleteAlbum": "Album ini telah dihapus.",
          "grouphome.alert.alreadyDeletePhoto": "Item ini telah dihapus.",
          "grouphome.alert.makealbum":
            "Album belum selesai dibuat. Keluar tanpa menyelesaikan album?",
          "grouphome.alert.photoLimitCount":
            "Anda tidak dapat menambahkan foto lagi.\nAnda dapat menambahkan hingga %1 foto ke setiap album.",
          "grouphome.label.album": "Album",
          "grouphome.label.album.addPhoto": "Tambah foto",
          "grouphome.label.album.changeName": "Ubah Nama Album",
          "grouphome.label.album.delete": "Hapus Album",
          "grouphome.label.album.empty": "Belum ada album yang didaftarkan.",
          "grouphome.label.album.make": "Buat Album",
          "grouphome.label.albumName": "Nama Album",
          "grouphome.label.post": "Note",
          "grouphome.label.post.empty": "Belum ada note yang ditambahkan.",
          "grouphome.label.showAllPost": "Semua Note",
          "grouphome.label.showUserHome": "Beranda %1",
          "grouphome.label.showallalbum": "Semua Album",
          "grouphome.label.writepost": "Note baru",
          "grouphome.member.alert.joinGroup":
            "Anda telah bergabung dengan grup.",
          "grouphome.member.label.showGroup": "Lihat Grup",
          "grouphome.post.alert.unregistereduser":
            "Anda tidak dapat menggunakan Note dengan pengguna yang akunnya telah dihapus.",
          "gruopchat.dynamic.group.title.memberleft.updatename":
            "%1 meninggalkan grup.",
          "hub.menubar.tooltip": "Check out LINE services in LINE HUB.",
          "hub.menubar.tooltip.renew":
            "LINE HUB\u5168\u65b0\u5716\u793a\uff0c\u638c\u63e1\u6240\u6709LINE\u7cbe\u9078\u5167\u5bb9\uff01",
          "image.viewer.btn.edit.tooltip": "Buka editor gambar...",
          "image.viewer.btn.minimizesize.tooltip": "Sesuaikan ke Jendela",
          "image.viewer.cancel": "Batal",
          "image.viewer.copy": "Salin",
          "image.viewer.crop": "Pangkas",
          "image.viewer.download.error": "Terjadi eror sementara.",
          "image.viewer.loading.error":
            "Permintaan tidak dapat diproses\nakibat eror sementara.\nSilakan coba lagi.",
          "image.viewer.ok": "OK",
          "image.viewer.save": "Unduh",
          "image.viewer.share.chat": "Bagikan di obrolan",
          "imageEditor.btn.doNotSave": "Jangan Simpan",
          "imageEditor.msg.onEditing": "Simpan perubahan gambar ke PC Anda?",
          "imageEditor.msg.onModified":
            "Ada perubahan pada gambar yang belum disimpan.",
          "imageEditor.msg.toobig":
            "Tidak dapat mengedit gambar ini karena resolusinya terlalu tinggi.",
          "invite.btn.cancel.title": "Batal",
          "invite.btn.invite.title": "OK",
          "invite.label.create.title": "Tambah Teman ke Obrolan",
          "invite.label.invitee.title": "Undang",
          "invite.label.nobuddytoselect.title": "Belum ada teman yang dipilih.",
          "invite.label.nosearchresult.title": "Pengguna tidak ditemukan.",
          "invite.label.nothing.title": "Tak ada teman untuk dipilih.",
          "invite.label.person.title.plurals.few": "%n orang",
          "invite.label.person.title.plurals.many": "%n orang",
          "invite.label.person.title.plurals.one": "%n orang",
          "invite.label.person.title.plurals.other": "%n orang",
          "invite.label.person.title.plurals.two": "%n orang",
          "invite.label.person.title.plurals.zero": "%n orang",
          "keep.alert.sendtochat.unsupported.all.other":
            "File yang dipilih tidak dapat dikirim karena format file tidak didukung.",
          "keep.alert.sendtochat.unsupported.file.multi": "",
          "keep.alert.sendtochat.unsupported.some.other":
            "%n file tidak dapat dikirim karena format file tidak didukung. Kirim file yang tersisa?",
          "keep.btn.retry": "Coba Lagi",
          "keep.category.all": "Semua",
          "keep.category.files": "Berkas",
          "keep.category.links": "Tautan",
          "keep.category.memos": "Memo",
          "keep.category.newtext": "Teks",
          "keep.category.photos": "Foto",
          "keep.category.photosvideos": "Foto & Video",
          "keep.category.text": "Teks",
          "keep.category.videos": "Video",
          "keep.common.error.503":
            "Keep saat ini sedang dalam pemeliharaan.\nWaktu Pemeliharaan: d MMM, HH:mm \u2013 d MMM, HH:mm (UTC+9)",
          "keep.date.format": "d/M/yyyy",
          "keep.desc.PR.title": "Ingin tahu kegunaan Keep?",
          "keep.desc.alreadyDeleted": "Konten ini telah dihapus.",
          "keep.desc.copied": "Tersalin",
          "keep.desc.count.others.plurals.few": "dan %1 lainnya",
          "keep.desc.count.others.plurals.many": "dan %1 lainnya",
          "keep.desc.count.others.plurals.one": "dan %1 lainnya",
          "keep.desc.count.others.plurals.other": "dan %1 lainnya",
          "keep.desc.count.others.plurals.two": "dan %1 lainnya",
          "keep.desc.count.others.plurals.zero": "dan %1 lainnya",
          "keep.desc.delete.other": "Hapus item yang dipilih?",
          "keep.desc.discard":
            "Perubahan Anda belum disimpan. Buang Perubahan?",
          "keep.desc.downloadError":
            "Tugas tidak dapat diselesaikan karena terjadi eror saat mengunduh berkas.",
          "keep.desc.downloading": "Mengunduh...",
          "keep.desc.drag":
            "Seret dan jatuhkan berkas Anda di sini,\natau klik Unggah.",
          "keep.desc.dragHere": "Seret dan jatuhkan berkas Anda di sini.",
          "keep.desc.error.reason.exceedPhotoResolution":
            "Lebih besar dari 10.000 px.",
          "keep.desc.error.reason.exceedPhotoSize":
            "Foto lebih besar dari 20MB.",
          "keep.desc.error.reason.expired":
            "Tidak dapat memuat konten karena sudah tidak tersedia lagi.",
          "keep.desc.error.reason.lackOfStorage":
            "Ruang penyimpanan tidak cukup.",
          "keep.desc.error.reason.networkError": "Terjadi eror jaringan.",
          "keep.desc.error.reason.notFoundFile":
            "Tidak dapat menemukan berkas.",
          "keep.desc.error.reason.unknown": "Tidak dapat mengunggah item ini.",
          "keep.desc.error.reason.unknownFileType":
            "Tidak dapat menggunggah jenis berkas ini.",
          "keep.desc.exceedCharacter":
            "Anda dapat memasukkan hingga 10.000 karakter. ",
          "keep.desc.expiredContent.askDelete":
            "Anda tidak dapat lagi melihat konten item ini\nkarena masa penyimpanannya telah berakhir.\nHapus item yang kadaluarsa?",
          "keep.desc.expiredContent.couldNotConfirmed":
            "Anda tidak dapat lagi melihat konten item ini karena masa penyimpanannya telah berakhir.",
          "keep.desc.expiredContent.storagePeriod":
            "Masa penyimpanan telah berakhir.",
          "keep.desc.fileCountExceeds":
            "Anda dapat menyimpan hingga 20 berkas.",
          "keep.desc.guide.tryKeep": "Simpan Berkas Anda\nCoba Keep sekarang!",
          "keep.desc.itemsavedinkeepexpired":
            "Item ini sudah tidak tersedia lagi.",
          "keep.desc.loadFailed":
            "Maaf, gagal memuat.\nSilakan cek koneksi jaringan Anda dan coba lagi. ",
          "keep.desc.loadFromKeep": "Buka Berkas di Keep",
          "keep.desc.loadingData": "Memuat data. Mohon tunggu sebentar.",
          "keep.desc.maximumUploadableSize.plurals.few":
            "Anda hanya dapat mengunggah hingga %1MB dalam satu waktu.",
          "keep.desc.maximumUploadableSize.plurals.many":
            "Anda hanya dapat mengunggah hingga %1MB dalam satu waktu.",
          "keep.desc.maximumUploadableSize.plurals.one":
            "Anda hanya dapat mengunggah hingga %1MB dalam satu waktu.",
          "keep.desc.maximumUploadableSize.plurals.other":
            "Anda hanya dapat mengunggah hingga %1MB dalam satu waktu.",
          "keep.desc.maximumUploadableSize.plurals.two":
            "Anda hanya dapat mengunggah hingga %1MB dalam satu waktu.",
          "keep.desc.maximumUploadableSize.plurals.zero":
            "Anda hanya dapat mengunggah hingga %1MB dalam satu waktu.",
          "keep.desc.noSearchResult": "Tidak ada hasil.",
          "keep.desc.noSelectableItem":
            "Anda tidak memiliki item apa pun yang dapat dipilih.",
          "keep.desc.notSupportType": "Tidak dapat membuka jenis berkas ini. ",
          "keep.desc.notifyPeriod":
            "Berkas berukuran lebih dari %1MB akan disimpan selama 30 hari. ",
          "keep.desc.photoLoadFailed":
            "Tidak dapat memuat foto.\nSilakan cek koneksi jaringan Anda dan coba lagi. ",
          "keep.desc.quit.uploading":
            "Saat ini Anda sedang menggunggah berkas ke Keep.\nMenutup LINE sekarang akan membatalkan pengunggahan.",
          "keep.desc.requesturl.failed.error":
            "Tidak dapat memuat info URL. Silakan coba lagi.",
          "keep.desc.retry": "Silakan coba lagi.",
          "keep.desc.saved": "Tersimpan. ",
          "keep.desc.savedInKeep": "Tersimpan di Keep.",
          "keep.desc.saving": "Menyimpan\u2026",
          "keep.desc.storageFull": "Ruang penyimpanan di Keep tidak cukup.",
          "keep.desc.storageFull.freeUpSpace":
            "Ruang penyimpanan di Keep tidak cukup. Silakan kosongkan beberapa ruang dan coba lagi. ",
          "keep.desc.storageFull.unable":
            "Tidak dapat menambahkan item karena ruang penyimpanan di Keep tidak cukup.",
          "keep.desc.storageFull.unableToSelect":
            "Tidak dapat memilih item karena ruang penyimpanan di Keep tidak cukup. ",
          "keep.desc.temporaryError":
            "Tidak dapat menyelesaikan tugas\nyang diminta karena eror sementara.\nSilakan coba lagi.",
          "keep.desc.totalSpace": "Total Ruang: %1",
          "keep.desc.unexpectedErrorOccured": "Terjadi eror yang tak terduga.",
          "keep.desc.upload.error.maxFileSize":
            "Tidak dapat mengunggah berkas dengan ukuran lebih dari %1 GB.\nPeriksa ukuran berkas dan coba lagi.",
          "keep.desc.upload.inProgress": "Mengunggah ke Keep...",
          "keep.desc.upload.notifyIncompleteUpload":
            "Sedang mengunggah berkas.\nJika Anda menutup LINE, mungkin hanya sebagian berkas yang terunggah.",
          "keep.desc.uploadFail.storage.plurals.few":
            "Tidak dapat mengunggah %1 item karena ruang penyimpanan tidak cukup.",
          "keep.desc.uploadFail.storage.plurals.many":
            "Tidak dapat mengunggah %1 item karena ruang penyimpanan tidak cukup.",
          "keep.desc.uploadFail.storage.plurals.one":
            "Tidak dapat mengunggah %1 item karena ruang penyimpanan tidak cukup.",
          "keep.desc.uploadFail.storage.plurals.other":
            "Tidak dapat mengunggah %1 item karena ruang penyimpanan tidak cukup.",
          "keep.desc.uploadFail.storage.plurals.two":
            "Tidak dapat mengunggah %1 item karena ruang penyimpanan tidak cukup.",
          "keep.desc.uploadFail.storage.plurals.zero":
            "Tidak dapat mengunggah %1 item karena ruang penyimpanan tidak cukup.",
          "keep.desc.uploadFailed": "Tidak dapat mengunggah.",
          "keep.desc.uploadPending": "Menunggu pengunggahan...",
          "keep.desc.uploading": "Mengunggah...",
          "keep.desc.usableSpace": "%1 Digunakan",
          "keep.desc.videoLoadFailed":
            "Tidak dapat memuat video.\nSilakan cek koneksi jaringan Anda dan coba lagi. ",
          "keep.desc.wait": "Mohon tunggu sebentar.",
          "keep.desc.warning.deleteAll":
            "Hapus semua berkas?\nBerkas Anda tidak dapat dipulihkan setelah dihapus.",
          "keep.desc.warning.deleteAll.chromeUser":
            "Hapus semua berkas?\nMemo Chrome juga akan dihapus jika Anda memilih hapus.\nBerkas Anda tidak dapat dipulihkan setelah dihapus.",
          "keep.download.btn": "Buka Folder",
          "keep.download.success": "Pengunduhan selesai.",
          "keep.emptytitle.title": "Simpan di Keep",
          "keep.full.sync.working": "Menyinkronisasi\u2026 %1%",
          "keep.home.bannerdesc.endofkeep":
            "Cadangkan item penting yang disimpan di Keep hingga %1.",
          "keep.home.bannertitle.endofkeep": "Akhir dari Keep",
          "keep.home.desc.timeformat": "d MMM yyyy",
          "keep.home.emptydesc.descforplaces":
            "Tempat yang Anda simpan dari akun resmi, LINE PLACE, dan lainnya akan ditampilkan di sini.",
          "keep.home.popupbutton.close": "Tutup",
          "keep.home.popupbutton.dontshowagain": "Jangan Tampilkan Lagi",
          "keep.home.popupbutton.learnmore": "Selengkapnya",
          "keep.home.popupdesc.endofkeep":
            "Keep tidak akan lagi tersedia mulai %1. Harap cadangkan item penting ke perangkat Anda.\n*Memo Keep akan tetap tersedia setelah fitur Keep dihentikan.",
          "keep.home.popuptitle.endofkeep":
            "Akhir dari Keep dan Panduan Pencadangan",
          "keep.home.tab.places": "Tempat",
          "keep.home.toast.pinneditems": "Disematkan",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "Anda dapat membagikan hingga maksimum 20 item sekaligus.",
          "keep.keepitem.itemsenttokeepmemoexpired":
            "Item yang disimpan di Memo Keep ini telah kedaluwarsa.",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "Konten apa pun yang dikirim ke\nMemo Keep akan ditampilkan di\nKeep agar dapat dikelola dan diedit.",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "Ada item yang ingin mudah diakses?\nCoba sematkan agar item tetap ditampilkan di bagian atas.",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "Simpan, sematkan, edit, atau tambah item ke koleksi di Keep untuk menyimpan permanen di Memo Keep.",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            'Memperkenalkan "Memo Keep"',
          "keep.keepmemoguide.popuptitle.keepitemsforever":
            "Menyimpan Item Tanpa Batas Waktu",
          "keep.keepmemoguide.popuptitle.pinningitems": "Menyematkan Item",
          "keep.label.add": "Tambah",
          "keep.label.addText": "Tambah",
          "keep.label.capture": "Tangkap Layar",
          "keep.label.chromeMemo": "Memo Chrome",
          "keep.label.copy": "Salin",
          "keep.label.createdTime": "Waktu Diambil",
          "keep.label.delete": "Hapus",
          "keep.label.deleteAll": "Hapus Semua",
          "keep.label.deleting": "Menghapus\u2026",
          "keep.label.details": "Detail",
          "keep.label.download": "Unduh",
          "keep.label.edit": "Edit",
          "keep.label.emptyText": "Tak Ada Konten",
          "keep.label.expired": "Kadaluarsa",
          "keep.label.fileSize": "Ukuran Berkas",
          "keep.label.from": "Dari",
          "keep.label.goToKeep": "Buka Keep",
          "keep.label.hitocoto": "Status",
          "keep.label.justNow": "Baru saja",
          "keep.label.learnMore": "Cari tahu sekarang",
          "keep.label.modifiedTime": "Perubahan Terakhir",
          "keep.label.more": "Lainnya",
          "keep.label.newMemo": "Memo",
          "keep.label.open": "Buka",
          "keep.label.openkeepmemo": "Buka Memo Keep",
          "keep.label.order.stored": "Tanggal Tersimpan",
          "keep.label.order.updated": "Pembaruan Terakhir",
          "keep.label.paste": "Tempel",
          "keep.label.pause": "Jeda",
          "keep.label.period": "Masa Penyimpanan",
          "keep.label.pin": "Sematkan",
          "keep.label.play": "Putar",
          "keep.label.playTime": "Waktu Pemutaran",
          "keep.label.refresh": "Segarkan",
          "keep.label.resolution": "Resolusi",
          "keep.label.save": "Simpan",
          "keep.label.saveInKeep": "Simpan di Keep",
          "keep.label.savedTime": "Waktu Disimpan",
          "keep.label.search": "Cari Semua",
          "keep.label.searchResult": "Hasil pencarian",
          "keep.label.send": "Kirim",
          "keep.label.settings": "Pengaturan",
          "keep.label.shareToChat": "Kirim ke obrolan",
          "keep.label.sortByDate": "Pilah per Tanggal",
          "keep.label.sortByName": "Pilah per Nama",
          "keep.label.sortBySize": "Pilah per Ukuran",
          "keep.label.terminate": "Tutup LINE",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "Lepas Sematan",
          "keep.label.upload": "Unggah",
          "keep.label.uploadFile": "Unggah Berkas",
          "keep.label.viewinkeepmemo": "Lihat di Memo Keep",
          "keep.label.voiceMessage": "Pesan Suara",
          "keep.label.volume": "Ruang yang Dipakai",
          "keep.label.writememo.title": "Memo",
          "keep.label.writetext.title": "Teks",
          "keep.main.desc.keepfadeout":
            "Keep tidak tersedia lagi. Update LINE Anda ke versi terbaru.",
          "keep.title": "Keep",
          "keep.toast.itempinned": "Berhasil disematkan.",
          "keep.toast.itemunpinned": "Berhasil dilepas.",
          "keepmemo.alert.deletemessage":
            "Pesan\xa0yang\xa0dipilih hanya akan\xa0dihapus\xa0dari perangkat ini. Lanjutkan?",
          "keepmemo.alert.unsendmessage":
            "Pesan\xa0yang\xa0dipilih\xa0akan dihapus dari semua perangkat. Lanjutkan?",
          "keepmemo.category.all": "Semua",
          "keepmemo.category.files": "File",
          "keepmemo.category.links": "Tautan",
          "keepmemo.category.photos": "Foto",
          "keepmemo.category.text": "Teks",
          "keepmemo.category.videos": "Video",
          "keepmemo.desc.noSelectableItem": "Tidak ada item yang bisa dipilih.",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "Hanya dapat membagikan hingga maksimum 20 item sekaligus.",
          "keepmemo.label.goToKeepMemo": "Buka Memo Keep",
          "keepmemo.label.search": "Cari",
          "keepmemo.label.sendToKeepMemo": "Kirim ke Memo Keep",
          "keepmemo.label.share": "Bagikan",
          "keepmemo.label.tooltip": "Memo Keep",
          "keepmemo.msg.desc.systemmsg":
            "Kirim teks, foto, video, dan tautan yang ingin disimpan untuk diri sendiri.",
          "keepmemo.title": "Kirim ke Memo Keep",
          "keyword.notice.btn": "Tambahkan Kata Kunci",
          "keyword.notice.desc":
            "Tambahkan kata kunci untuk menerima pemberitahuan segala pesan yang mengandung kata kunci tersebut.",
          "keyword.notice.title": "Pemberitahuan Kata Kunci",
          "keyword.notification.desc": "Ada pemberitahuan kata kunci.",
          "kickout.all.v3":
            "Anda telah logout secara otomatis. Silakan login lagi.",
          "kickout.dormant.account":
            "Harap login dengan alamat email yang Anda daftarkan pada LINE untuk perangkat seluler, lalu verifikasi akun Anda.",
          "kickout.email.account.modified":
            "Anda sudah logout karena telah mendaftarkan alamat email baru atau mengganti kata sandi.",
          "kickout.expired": "Logout setelah\ndiam untuk waktu yang lama.",
          "kickout.networkError":
            "Logout karena terjadi eror pada jaringan. Silakan login sekali lagi.",
          "kickout.noAllowedSecondaryDevice":
            "Logout setelah akses diblokir dari ponsel.\n",
          "kickout.notAuthorizedDevice":
            "Logout setelah login dengan PC lainnya.   ",
          "kickout.notAvailableUser":
            "Anda telah logout dari LINE karena akun dihapus di perangkat lain.",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "Logout karena terjadi eror pada server. Silakan login sekali lagi.",
          "kickout.serverMaintenance":
            "Server ini sedang dalam pemeliharaan. Silakan login lagi nanti.",
          "kickout.serviceMaintenance":
            "Logout karena terjadi eror sementara. Silakan login sekali lagi.",
          "kickout.square.server.fail":
            "Logout karena eror pada verifikasi OpenChat. Silakan login lagi.",
          "line.keepmemoguide.popupdesc.page1":
            "Kirim memo, foto, dan item lain dengan bebas ke Memo Keep seperti di ruang obrolan lainnya.",
          "line.keepmemoguide.popuptitle.page1": 'Memperkenalkan "Memo Keep"',
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "Harap update LINE dan coba lagi.",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "Eror",
          "line.updatepopup.button.leave": "Keluar",
          "linechrome.chat.desc.unsupportedmessage":
            "Pesan ini tidak bisa dilihat di LINE Chrome. Silakan cek di LINE untuk ponsel.",
          "linechrome.chat.desc.unsupportedstickers":
            "Stiker ini tidak tersedia di LINE Chrome. \nSilakan cek di LINE untuk ponsel.",
          "linechrome.chat.toast.nofolders": "Folder tidak dapat dibagikan.",
          "linechrome.chat.toast.supportedlanguage":
            "LINE Chrome mendukung bahasa terjemahan. Ubah bahasa di Pengaturan.",
          "linechrome.end.desc.endline": "Akhiri LINE Chrome?",
          "linechrome.main.button.mute1": "Heningkan Selama 1 Jam",
          "linechrome.main.button.mute2": "Heningkan Selama 2 Jam",
          "linechrome.main.button.mute24": "Heningkan Selama 24 Jam",
          "linechrome.main.button.mute30": "Heningkan Selama 30 Menit",
          "linechrome.main.desc.unmutehour": "Nyalakan dalam %1 jam",
          "linechrome.main.desc.unmuteminute": "Nyalakan dalam %1 menit",
          "linechrome.main.desc.unmutesecond.other": "Nyalakan dalam %1 detik",
          "linemusic.playlist": "Daftar Putar",
          "linemusic.title": "LINE MUSIC",
          "linemusic.topic": "Topik",
          "lockscreen.kickout.accountError":
            "Tidak dapat membuka LINE karena kata sandi yang dimasukkan salah berturut-turut.",
          "lockscreen.lockscreen.text": "LINE Anda saat ini terkunci. ",
          "lockscreen.msg.alert.oncalling":
            "Kunci LINE?\nPanggilan yang sedang berlangsung akan terputus.",
          "lockscreen.msg.unlock.description":
            "Kunci LINE?\nKata sandi akan dibutuhkan untuk membuka LINE.",
          "lockscreen.msg.unlockAuto.description":
            "Kunci LINE saat komputer tidak digunakan?\nKata sandi akan dibutuhkan untuk membuka LINE.",
          "lockscreen.password.fail":
            "Kata sandi tidak valid. Silakan coba lagi.",
          "lockscreen.password.text":
            "Masukkan kata sandi LINE Anda untuk membuka.",
          "lockscreen.password.unlock.btn": "Buka",
          "login.btn.emailQRcode.login": "Login dengan Email/Kode QR >",
          "login.btn.login": "Login",
          "login.btn.signUp": "Pendaftaran",
          "login.emailLogin.identity.credential.error":
            "Alamat email tidak valid.\nSilakan masukkan alamat email dengan benar.",
          "login.emailLogin.label.error.accountError":
            "Alamat email atau kata sandi tidak benar atau belum terdaftar di LINE.",
          "login.emailLogin.label.error.inputError":
            "Silakan masukkan alamat email dan kata sandi Anda.",
          "login.emailLogin.link.changeToNaverLogin": "NAVER ID Sign In",
          "login.emailLogin.link.findPassword": "Lupa kata sandi Anda?",
          "login.emailLogin.placeHolder.email": "Alamat Email",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "Email atau nomor telepon",
          "login.emailLogin.placeHolder.password": "Kata Sandi",
          "login.emailLogin.popup.findPassword":
            "Anda dapat mengubah alamat email dan kata sandi dari\nPengaturan > Akun > Pendaftaran Email\n\n\n\ndi aplikasi LINE ponsel Anda.",
          "login.error.auth.failed":
            "Unable to automatically log in because you're already logged in from another PC or your login has expired.\n\n ",
          "login.label.certificate.not.vaild":
            "Tidak dapat memverifikasi sertifikat keamanan.\nSilakan atur tanggal yang benar di PC Anda.",
          "login.label.doingLogin": "Sedang Login\u2026",
          "login.label.error.auth.failed.anotherPC":
            "Tidak dapat login secara otomatis karena Anda telah login melalui PC lain.",
          "login.label.error.auth.failed.loginExpired":
            "Tidak dapat login secara otomatis karena sesi login telah berakhir.",
          "login.label.error.dberror":
            "Eror terdeteksi dan telah diperbaiki.\nSilakan login kembali.",
          "login.label.error.dormant.account":
            "Login dengan alamat email yang Anda daftarkan pada LINE untuk perangkat seluler, lalu verifikasi akun Anda.",
          "login.label.error.extraError":
            "Saat ini tidak dapat login. Coba lagi nanti.",
          "login.label.error.keyboardError":
            "Silakan ubah papan ketik Anda ke Bahasa Inggris.",
          "login.label.error.networkError":
            "Tidak dapat login karena masalah jaringan.\nPeriksa koneksi Anda dan coba lagi.",
          "login.label.error.pinCode":
            "Kode verifikasi tidak valid. Coba lagi dengan kode yang benar.",
          "login.label.error.schemeError":
            "Silakan login ke LINE dan coba lagi.",
          "login.label.error.serverError":
            "Terjadi eror pada server. Coba lagi nanti.",
          "login.label.error.serverMaintenance":
            "Server sedang dalam pemeliharaan. Coba lagi nanti.",
          "login.label.error.verification.timeout":
            "Kode verifikasi Anda telah kadaluarsa.\nSilakan minta kode yang lain.",
          "login.label.searching.network":
            "Mencari koneksi jaringan yang optimal.",
          "login.loginwithsmartphone.tooltip":
            "Login tanpa kata sandi dengan verifikasi di ponsel.",
          "login.naverLogin.checkbox.keepLoginStatus": "Login Otomatis",
          "login.naverLogin.checkbox.startUpWin":
            "Buka LINE ketika Windows dinyalakan",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "Tidak dapat login.\nPeriksa pengaturan server proksi Anda dan coba lagi.",
          "login.naverLogin.link.changeToEmailLogin":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.naverLogin.link.findIDPassword1":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.link.findIDPassword2":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.placeHolder.naverID": "ID Naver",
          "login.naverLogin.placeHolder.password": "Kata Sandi",
          "login.naverLogin.url.ID":
            "https://nid.naver.com/user/help.nhn?todo=idinquiry",
          "login.naverLogin.url.pass":
            "https://nid.naver.com/user/help.nhn?todo=pwinquiry",
          "login.otp.link.title": "OTP \ub3c4\uc6c0\ub9d0",
          "login.otp.link.url":
            "https://help.naver.com/support/contents/contents.nhn?serviceNo=532&categoryNo=1533",
          "login.password.ascii.error":
            "Harap ubah bahasa papan ketik Anda ke bahasa Inggris.",
          "login.phoneNumberLogin.alert.info":
            "Hanya pengguna yang mendaftar lewat LINE untuk PC yang dapat login dengan nomor telepon.",
          "login.phoneNumberLogin.alert.networkerror":
            "Permintaan Anda belum diproses karena eror koneksi jaringan.\nSilakan coba lagi.",
          "login.phoneNumberLogin.identity.credential.error":
            "Nomor telepon ini tidak valid. Masukkan nomor telepon yang valid.",
          "login.phoneNumberLogin.label.country": "Pilih Negara",
          "login.phoneNumberLogin.label.error.accountError":
            "Nomor telepon atau kata sandi yang Anda masukkan tidak ada atau tidak valid.",
          "login.phoneNumberLogin.label.error.inputError":
            "Masukkan alamat email dan kata sandi Anda.",
          "login.phoneNumberLogin.placeHolder.password": "Kata Sandi",
          "login.phoneNumberLogin.placeHolder.phone": "No. Telepon",
          "login.phoneNumberLogin.placeHolder.search": "Cari",
          "login.phoneNumberLogin.verification.desc":
            "Sebagai penanganan keamanan, Anda harus memverifikasi akun Anda ketika login dari PC untuk pertama kalinya.\nSilakan masukkan kode verifikasi yang dikirim via SMS. Jika SMS tidak sampai, silakan coba cara di bawah ini.",
          "login.popup.abuse":
            "LINE dikunci karena percobaan login yang berulang kali gagal. Silakan login dengan kode QR.",
          "login.popup.error.diskFull":
            "Sisa kapasitas penyimpanan kurang dari 1 GB.\nBeberapa fitur LINE mungkin tidak akan berfungsi.",
          "login.popup.kickout.r0": "login dari PC lain",
          "login.popup.kickout.r1": "mendiamkan LINE selama waktu tertentu",
          "login.popup.kickout.r2": "logout dari ponsel cerdas",
          "login.popup.kickout.r3": "menghapus akun LINE Anda",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5":
            "Tidak dapat menggunakan aplikasi karena sedang dalam pemeliharaan.",
          "login.popup.kickout.subtitle": "Anda\xa0akan\xa0logout\xa0jika:",
          "login.popup.kickout.title": "Anda telah logout dari LINE.",
          "login.qrLogin.desc.error.expired":
            "Kode QR sudah kedaluwarsa.\nKlik ikon Segarkan untuk memperbarui kode.",
          "login.qrLogin.desc.error.network":
            "Kode QR gagal dimuat karena terjadi eror jaringan.\nSilakan cek koneksi dan coba lagi.",
          "login.qrLogin.desc.howto":
            "Untuk memindai kode QR, buka LINE di perangkat seluler, lalu ketuk ikon kode QR di kotak pencarian.",
          "login.qrLogin.title": "Login Kode QR",
          "login.register.already": "Login Pengguna LINE",
          "login.register.downloadLink": "Unduh aplikasi LINE Ponsel>>",
          "login.register.help.desc":
            "Daftarkan email Anda ke LINE untuk menggunakan LINE untuk PC.\n",
          "login.register.help.desc1":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 PC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.help.desc2":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c \ub77c\uc778\uc571 \uc124\uce58 \ud6c4 \ub124\uc774\ubc84 \uc544\uc774\ub514 \ub4f1\ub85d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
          "login.register.help.desc3":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 MAC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.link.android":
            "https://play.google.com/store/apps/details?id=jp.naver.line.android&hl=en",
          "login.register.link.iphone":
            "http://itunes.apple.com/en/app/line/id443904275?ls=1&mt=8",
          "login.register.link.wphone":
            "http://www.windowsphone.com/en-US/store/app/line/a18daaa9-9a1c-4064-91dd-794644cd88e7",
          "login.register.newmember": "Daftar Baru",
          "login.registration.password.reset": "Atur ulang kata sandi",
          "login.simpleLogin.btn.updateQrCode": "Perbarui Kode QR",
          "login.simpleLogin.label.desc.normal":
            "Buka aplikasi LINE di ponsel Anda, masuk ke Tambah Teman > Kode QR, lalu pindai kode QR untuk login.\n*Kode QR ini hanya dapat digunakan untuk login",
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "Setelah kode QR diperbarui, Anda tidak dapat\nmemperbaruinya lagi untuk sementara waktu.",
          "login.simpleLogin.label.error.qrcodeExpired":
            "Kode QR ini sudah tidak valid. Silakan perbarui kode QR.",
          "login.simpleLogin.link.howto": "Cara login dengan kode QR",
          "login.tab.emailLogin": "Login Email",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin": "Login dengan No.Telepon >",
          "login.tab.phoneNumberLogin.title": "Login dengan No.Telepon",
          "login.tab.simpleLogin": "Login Kode QR",
          "loginHelp.email.image.0": "images/id/01_main.png",
          "loginHelp.email.image.1": "images/id/02_email.png",
          "loginHelp.email.image.registration": "image://login/id/03_email.png",
          "loginHelp.emailLogin.label.step1": "Buka Pengaturan > Akun di LINE.",
          "loginHelp.emailLogin.label.step2":
            "Daftarkan email dengan melalui opsi Alamat Email di menu Akun.",
          "loginHelp.emailLogin.label.tab.mobile":
            "Terdaftar di LINE untuk telepon seluler",
          "loginHelp.emailLogin.label.tab.pc": "Terdaftar di LINE untuk PC",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "Login dengan email hanya dapat dilakukan jika Anda belum mendaftarkan alamat email.\nUntuk mendaftarkan email Anda, buka Pengaturan > Dasar.",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "Login dengan nomor telepon dan login dengan email akan memiliki kata sandi yang sama.\nMasukkan alamat email Anda, kemudian kata sandi untuk login dengan nomor telepon.",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "Jika Anda belum mendaftarkan alamat email Anda",
          "loginHelp.emailLogin.label.tab.pc.title2":
            "Jika Anda telah mendaftarkan alamat email",
          "loginHelp.emailLogin.label.title": "Bantuan Login Email",
          "loginHelp.emailLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.emailLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.email.tab0.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.email.tab1.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.qrcode.tab0.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.qrcode.tab1.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.wap.email.image.0": "images/ja-JP/03_jp_main.png",
          "loginHelp.jp.wap.email.image.1": "images/ja-JP/04_jp_setting.png",
          "loginHelp.jp.wap.qrcode.image.0": "images/ja-JP/07_wap_qr01.png",
          "loginHelp.jp.wap.qrcode.image.1": "images/ja-JP/08_wap_qr02.png",
          "loginHelp.naver.image.0": "images/ko-KR/01_main.png",
          "loginHelp.naver.image.1": "images/ko-KR/03_naver.png",
          "loginHelp.naverLogin.label.step1":
            "\ub77c\uc778 \uc571\uc758 [\uc124\uc815 > \uacc4\uc815]\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",
          "loginHelp.naverLogin.label.step2":
            '"\uacc4\uc815\uad00\ub9ac"\uc5d0\uc11c "\ub124\uc774\ubc84 \uc544\uc774\ub514 \ub4f1\ub85d" \uc5d0\uc11c \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \ub4f1\ub85d\ud558\uba74 \ub4f1\ub85d\ud55c \ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
          "loginHelp.naverLogin.label.title":
            "\ub124\uc774\ubc84 \uc544\uc774\ub514 \ub4f1\ub85d",
          "loginHelp.qrcode.image.0": "images/id/03_qr01.png",
          "loginHelp.qrcode.image.1": "images/id/04_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            "Buka Lainnya > Tambah Teman > Kode QR di aplikasi LINE dan pindai kode QR.",
          "loginHelp.qrcodeLogin.label.step2":
            "Setelah memindai, ketuk Login di aplikasi LINE ponsel Anda untuk login ke LINE untuk PC.",
          "loginHelp.qrcodeLogin.label.title": "Cara login dengan kode QR",
          "loginHelp.qrcodeLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.qrcodeLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "markdown.input.context.menu.bold": "Cetak Tebal",
          "markdown.input.context.menu.codeblock": "Blok Teks",
          "markdown.input.context.menu.italic": "Cetak Miring",
          "markdown.input.context.menu.strikethrough": "Garis coret",
          "markdown.input.context.menu.wordblock": "Blok Baris",
          "markdown.input.guideline.bold": "*Cetak Tebal*",
          "markdown.input.guideline.codeblock": "```Code block```",
          "markdown.input.guideline.italic": "_Cetak Miring_",
          "markdown.input.guideline.strikethrough": "~Garis coret~",
          "markdown.input.guideline.wordblock": "`Kode inline`",
          "markdown.input.menu.help": "Tentang pengaturan format teks",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "Anda perlu menginstal DirectX 9.0c untuk memutar video ini.\nInstal sekarang? ",
          "media.msg.err.expired":
            "Video tidak dapat diputar lagi karena periode penyimpanan telah habis.",
          "media.msg.err.network":
            "Tidak dapat memutar karena eror jaringan atau server.\nSilakan coba lagi.",
          "media.msg.err.transient":
            "Tidak dapat memutar karena eror sementara.\nSilakan coba lagi.",
          "media.msg.tooltip.close": "Tutup",
          "media.msg.tooltip.minimize": "Perkecil",
          "media.msg.tooltip.pause": "Jeda",
          "media.msg.tooltip.play": "Putar",
          "media.msg.tooltip.playspeed": "Kecepatan",
          "media.msg.tooltip.stop": "Stop",
          "media.msg.tooltip.volume": "Volume",
          "media.msg.tooltip.volume1": "Volume",
          "media.video.full.screen.out":
            "Tekan Esc untuk meninggalkan layar penuh.",
          "media.video.replay": "Putar Ulang",
          "meeting.popup.end.body": "Tinggalkan Meeting ini?",
          "meeting.popup.end.button": "Tinggalkan",
          "meeting.tooltip.end.call": "Tinggalkan Meeting",
          "menu.menubar.allNotification.off": "Matikan Semua Pemberitahuan",
          "menu.menubar.allNotification.on": "Nyalakan Semua Pemberitahuan",
          "menu.menubar.friend.addFriend": "Tambah teman",
          "menu.menubar.friend.makeGroup": "Buat Grup",
          "menu.menubar.friend.title": "Teman",
          "menu.menubar.help.lineHelp": "Bantuan LINE",
          "menu.menubar.help.title": "Bantuan",
          "menu.menubar.keepmemo": "Memo Keep",
          "menu.menubar.line.about": "Tentang LINE",
          "menu.menubar.line.exit": "Akhiri",
          "menu.menubar.line.hideLine": "Sembunyikan LINE",
          "menu.menubar.line.hideOthers": "Sembunyikan Lainnya",
          "menu.menubar.line.setting": "Pengaturan",
          "menu.menubar.line.showAll": "Lihat semua",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "Obrolan",
          "menu.menubar.view.friend": "Teman",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "Profil saya",
          "menu.menubar.view.myhome": "Beranda",
          "menu.menubar.view.openchat": "OpenChat",
          "menu.menubar.view.services": "Layanan",
          "menu.menubar.view.title": "Lihat",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll": "Pindahkan Semua ke Depan",
          "menu.menubar.window.maximize": "Perbesar",
          "menu.menubar.window.minimize": "Perkecil",
          "menu.menubar.window.title": "Jendela",
          "menu.setting.lockscreen": "Mode kunci",
          "menu.toast.allNotification.off": "Nyala",
          "menu.toast.allNotification.on": "Mati",
          "menu.tray.about": "Tentang LINE",
          "menu.tray.balloon.login": "Anda telah login ke LINE",
          "menu.tray.balloon.logout": "Anda telah logout dari LINE.",
          "menu.tray.check.update": "Cek pembaruan",
          "menu.tray.exit": "Akhiri",
          "menu.tray.keepmemo": "Memo Keep",
          "menu.tray.login": "Login",
          "menu.tray.logout": "Logout",
          "menu.tray.setting": "Pengaturan",
          "menu.tray.showBuddyList": "Teman",
          "message.context.background": "Atur sebagai latar obrolan",
          "message.context.cancel.imageselect": "Batal pilih foto",
          "message.context.imageselect": "Pilih foto",
          "message.delete.confirm":
            "Pesan yang dipilih hanya akan dihapus dari perangkat ini. Pesan yang tersimpan pada perangkat teman Anda tidak akan terhapus.",
          "message.error.invalidfile":
            "Berkas pembaruan yang telah diunduh rusak.",
          "message.error.opensetup":
            "Berkas pembaruan yang telah diunduh tidak dapat dibuka.",
          "message.error.opensetup.codesign":
            "Berkas pembaruan ini rusak dan tidak dapat digunakan.",
          "message.error.update": "Pembaruan terputus.",
          "message.error.updateurl":
            "Tidak dapat memperoleh URL untuk pembaruan.",
          "msgbox.alert.font.exist": "Fon ini telah digunakan.",
          "msgbox.alert.nospace":
            "Ruang penyimpanan di perangkat Anda tidak cukup. Kosongkan sebagian ruang dengan menghapus aplikasi, foto, atau video yang tidak diperlukan.",
          "msgbox.alert.resolution.apply":
            "LINE harus dimulai ulang untuk menyesuaikan tampilan dengan resolusi layar yang baru. Mulai ulang LINE?",
          "msgbox.btn.block": "Blokir",
          "msgbox.btn.buddy.title": "Lihat Teman yang Ditambahkan",
          "msgbox.btn.cancel.title": "Batal",
          "msgbox.btn.cancelInvite.no": "Tidak",
          "msgbox.btn.cancelInvite.yes": "Ya",
          "msgbox.btn.close.title": "Tutup",
          "msgbox.btn.delete": "Hapus",
          "msgbox.btn.download.title": "Unduh",
          "msgbox.btn.fileOpen": "Buka File",
          "msgbox.btn.gotosettings": "Pengaturan",
          "msgbox.btn.hide": "Sembunyikan",
          "msgbox.btn.install.title": "Unduh",
          "msgbox.btn.later.title": "Nanti Saja",
          "msgbox.btn.leave.1.n": "Tinggalkan",
          "msgbox.btn.leave.group": "Tinggalkan",
          "msgbox.btn.lock.enable": "Kunci",
          "msgbox.btn.lock.start": "Kunci",
          "msgbox.btn.no.title": "Batal",
          "msgbox.btn.nocancel.title": "Batal",
          "msgbox.btn.ok.title": "OK",
          "msgbox.btn.post.title": "Posting",
          "msgbox.btn.qrcode.title": "Cara login dengan kode QR",
          "msgbox.btn.quit.title": "Akhiri",
          "msgbox.btn.remove": "Hapus",
          "msgbox.btn.restart": "Mulai Ulang",
          "msgbox.btn.retry.title": "Coba Lagi",
          "msgbox.btn.send": "Kirim",
          "msgbox.btn.sendkey.title": "Ubah",
          "msgbox.btn.sendshare": "Kirim",
          "msgbox.btn.unsend": "Urung Kirim",
          "msgbox.btn.update.title": "Update sekarang",
          "msgbox.btn.use": "Setuju",
          "msgbox.btn.yes.title": "OK",
          "msgbox.btn.yescontinue.title": "Lanjutkan",
          "msgbox.btn.yesleave.title": "Tinggalkan",
          "msgbox.desc.seemore": "Selengkapnya",
          "msgbox.error.request.popup.desc":
            "Terjadi eror sementara. Silakan coba lagi nanti.",
          "needqr.login.button.label": "Login Kode QR",
          "needqr.title.content1":
            "Untuk mencegah akses tanpa izin,\nAnda perlu menggunakan Login Kode QR untuk login pertama kali di PC.",
          "needqr.title.label": "Silakan login dengan Kode QR",
          "note.save.comfirm.desc": "Simpan ke note [%1]?",
          "notificationcenter.timeslot.earlier": "Terdahulu",
          "notificationcenter.timeslot.recent": "Terkini",
          "notificationcenter.title": "Pemberitahuan",
          "nx.textbox.copy": "Salin",
          "nx.textbox.paste": "Tempel",
          "nx.textbox.selectall": "Pilih semua",
          "oa.profile.desc.region.notselected": "Belum Diverifikasi",
          "oa.profile.investmentfraud": "Waspada penipuan di LINE.",
          "ocr.policy.agree.btn": "Setuju",
          "ocr.policy.disagree.btn": "Tolak",
          "ocr.progress.desc.scan": "Membaca teks...",
          "ocr.progress.desc.translate": "Menerjemahkan...",
          "openchat.allthreads.desc.nothreads":
            "Semua utas yang dibuat pada OpenChat ini akan ditampilkan di sini.",
          "openchat.allthreads.title.nothreads":
            "Belum Ada Utas di OpenChat ini",
          "openchat.chatlist.popup.deletechat":
            "Hapus obrolan ini dari Daftar Obrolan? Obrolan tidak akan dihapus dari Daftar OpenChat Anda.",
          "openchat.chatlist.popup.hidechat":
            "Sembunyikan obrolan ini dari Daftar Obrolan? Obrolan tetap akan ditampilkan di Daftar OpenChat Anda.",
          "openchat.favoritethreads.title.nothreads": "Belum Ada Utas Favorit",
          "openchat.hidemessages.desc.hidethismember":
            "Sembunyikan pesan anggota ini? Pesannya tidak akan lagi muncul di OpenChat ini dan sub-obrolannya, tapi pesan lama akan tetap ada.",
          "openchat.hidemessages.desc.maximumhide":
            "Batas maks. anggota yang pesannya disembunyikan terlampaui. Tampilkan pesan salah satu anggota melalui profilnya lalu coba lagi.",
          "openchat.hidemessages.desc.messageshidden":
            "Pesan dari anggota ini telah disembunyikan. Pesan dapat ditampilkan kembali melalui Profil anggota.",
          "openchat.join.button.requestjoin": "Permintaan Bergabung",
          "openchat.linkpopup.desc.donotshowformonth":
            "Jangan tampilkan selama sebulan",
          "openchat.readallthreads.desc.markallasread":
            'Ubah semua pesan utas menjadi "Baca"?',
          "openchat.settings.desc.mentioneveryone":
            "Menyebut Semua Pengguna (@All)",
          "openchat.thread.desc.fewerthan10": "Kurang dari 10 pesan",
          "openchat.thread.desc.sendafiletothread": "Kirim file ke utas ini",
          "openchat.thread.desc.updateline":
            "Update LINE untuk melihat pesan ini.",
          "openchat.thread.placeholder.expired":
            "Tak bisa mengirim pesan di utas kedaluwarsa.",
          "openchat.thread.tooltip.yourthreadicon":
            "Lihat semua utas di OpenChat ini, termasuk utas favorit Anda.",
          "openchat.threadpopup.desc.expired":
            "Utas ini tidak dapat ditambahkan atau dihapus karena telah kedaluwarsa.",
          "openchat.threadpopup.desc.expirederror":
            "Thread ini telah kedaluwarsa.",
          "openchat.threadpopup.desc.unsupported":
            "Terdapat file dengan format yang tidak didukung di Utas.",
          "openchat.threads.button.readall": "Baca Semua",
          "openchat.threads.button.seemessages": "Lihat Pesan",
          "openchat.threads.tab.all": "Semua",
          "openchat.threads.tab.favorites": "Favorit",
          "openchat.threads.title.threads": "Utas",
          "openchat.threads.tooltip.messagewontsend":
            "Pesan di dalam Utas tidak akan dikirim ke Ruang Obrolan.",
          "openchat.threadspopup.button.cancel": "Batal",
          "openchat.threadspopup.button.delete": "Hapus",
          "openchat.threadspopup.button.unsend": "Urung Kirim",
          "openchat.threadspopup.desc.deleterootmessage":
            "Jika pesan ini dihapus, utas juga akan terhapus dari riwayat obrolan semua anggota.",
          "openchat.threadspopup.desc.unsendrootmessage":
            "Jika pengiriman pesan diurungkan, utas juga akan terhapus dari riwayat obrolan semua anggota.",
          "openchat.threadspopup.title.deleterootmessage": "Hapus Pesan Ini?",
          "openchat.threadspopup.title.unsendrootmessage":
            "Urungkan Pengiriman Pesan?",
          "openchat.unhidemessages.desc.unhidden":
            "Pesan dari anggota ini akan kembali ditampilkan.",
          "openchat.unhidemessages.desc.unhide":
            "Mulai tampilkan kembali pesan dari anggota ini? Pesan yang telah disembunyikan tidak akan ditampilkan.",
          "openchat.userprofile.button.hidemessages": "Sembunyikan Pesan",
          "openchat.userprofile.button.unhidemessages": "Tampilkan Pesan",
          "openchat.yourthread.button.seemessages": "Lihat Pesan",
          "openchat.yourthread.desc.fewerthan10": "Kurang dari 10 pesan",
          "openchat.yourthreads.button.readmore":
            "Baca Selengkapnya tentang Utas",
          "openchat.yourthreads.desc.newthreadmessages": "Pesan utas baru",
          "openchat.yourthreads.desc.photosent": "Foto terkirim.",
          "openchat.yourthreads.desc.stickersent": "Stiker terkirim.",
          "openchat.yourthreads.desc.videosent": "Video terkirim.",
          "openchat.yourthreads.desc.vmsent": "Pesan suara terkirim.",
          "openchat.yourthreads.title.messageunavailable":
            "Pesan Tidak Tersedia",
          "openchat.yourthreadspopup.button.ok": "OK",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "Utas ini telah dihapus.",
          "os.msgbox.btn.gotosettings": "Preferensi Sistem",
          "pl.square.setting.tooltip":
            "Anda dapat mengatur siapa yang dapat membuat dan menghapus polling di Square.",
          "poll.create.title": "Buat polling",
          "poll.edit.title": "Edit polling",
          "poll.main.title": "Polling",
          "poll.ongoing.title": "Voting",
          "poll.result.title": "Hasil",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry": "Pengunduhan gagal. Silakan coba lagi.",
          "power.label.tootip": "Tutup LINE",
          "profile.btn.chat.tooltip": "Obrolan",
          "profile.btn.home.tooltip": "Beranda",
          "profile.btn.recommend.tooltip": "Rekomendasi",
          "profile.button.investmentfraudwarning": "Waspada penipuan di LINE.",
          "profile.delete": "Hapus Profil",
          "profile.desc.birthday": "d MMM",
          "profile.desc.onediting":
            "Keluar dari layar ini? Perubahan yang belum disimpan akan terhapus.",
          "profile.desc.timelineposts": "Pos LINE VOOM",
          "profile.edit.background.color": "Pilih warna latar",
          "profile.edit.font.color": "Pilih warna fon",
          "profile.edit.placeholder": "Masukkan teks",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "Nama yang diatur oleh teman: %1",
          "profile.popup.report": "Laporkan",
          "profile.seemoremenu.button.block": "Blokir",
          "profile.select.capture": "Tangkap layar",
          "profile.select.default": "Pilih dari Profil",
          "profile.select.local": "Pilih dari PC",
          "profile.select.text": "Profil teks",
          "profile.socialprofile.menutitle.editprofile": "Pengaturan Profil",
          "registration.btn.label.resendPin": "Kirim ulang kode verifikasi",
          "registration.btn.message.resendPin":
            "Kode verifikasi dikirim ulang.",
          "registration.check.age.ageVerification.body":
            "Anda harus melakukan verifikasi usia untuk menggunakan fitur ini.\nUntuk memverifikasi usia, buka Pengaturan > Verifikasi Usia melalui aplikasi LINE untuk perangkat seluler.",
          "registration.check.age.ageVerification.title": "Verifikasi Usia",
          "registration.check.age.ageunder.body":
            "Fungsi ini hanya dapat digunakan oleh pengguna yang dipastikan telah berusia 18 tahun ke atas.",
          "registration.check.age.error.loadUrl":
            "Koneksi eror. Periksa koneksi internet Anda dan coba lagi.",
          "registration.check.age.error.retrieveRequest":
            "Terjadi eror saat verifikasi usia dilakukan. Silakan coba lagi.",
          "registration.check.age.underAge":
            "Verifikasi usia diperlukan untuk memastikan Anda berusia 18 tahun ke atas agar dapat menggunakan fitur Tambah Teman melalui Pencarian di aplikasi LINE untuk seluler. Teman masih bisa ditambahkan dengan memindai kode QR pengguna melalui ponsel.",
          "registration.code.phone.call": "Verifikasi Lewat Panggilan",
          "registration.code.phone.guide":
            "Kami akan menghubungi Anda untuk memberitahu kode verifikasi.\nMohon perhatikan ada kalanya nomor pemanggil tidak ditampilkan, dan Anda dapat\ndikenakan biaya panggilan masuk tergantung paket seluler yang Anda ambil.\n",
          "registration.code.sms.resent.guide":
            "Anda dapat meminta kode baru dalam %1 menit %2 detik.\n",
          "registration.common.next": "Berikutnya",
          "registration.common.underIE8.alert":
            "Untuk melakukan pendaftaran, diperlukan Internet Explorer 8 ke atas.\nSilakan perbarui Internet Explorer Anda atau daftar menggunakan perangkat seluler.",
          "reply.doubleclick.toast": "Klik pesan dua kali untuk membalas. ",
          "reply.error.toast": "Pesan asal tidak dapat ditemukan.",
          "reply.goto.replied": "Kembali ke pesan asal.",
          "reply.no.original.message": "(Pesan asal tidak tersedia)",
          "reply.unknown.user": "Pengguna tidak diketahui",
          "report.btn.agreeandsend": "Setuju dan Kirim",
          "report.btn.agreeandsend.thpdpa": "Mengakui dan Kirim",
          "report.confirm.groupinvitation":
            "Dengan melaporkan pengguna yang mengundang Anda ke sebuah obrolan grup, maka data dari obrolan grup tersebut juga akan dibagikan kepada LINE.",
          "report.desc.reason":
            "Beri tahu kami alasannya dan apa yang terjadi.",
          "report.desc.title": "Laporkan",
          "report.done": "Laporan terkirim!",
          "report.done.suggestBlock": "Laporan dikirim.\nBlokir pengguna ini?",
          "report.done.suggestBlock.groupinvitation": "Blokir %1?",
          "report.note.subTitle": "Laporkan pos ini.\n(Pembuat: %1)",
          "report.popupbutton.impersonation.decline": "Lewati",
          "report.popupbutton.impersonation.proceed": "Proses",
          "report.reason.Other": "Lainnya",
          "report.reason.gender": "Pelecehan/Cari Jodoh",
          "report.reason.harrassment": "Perbuatan Tidak Menyenangkan",
          "report.reason.impersonation": "Peniruan Identitas",
          "report.reason.impersonation.inquirypopup":
            "Mohon pertimbangkan untuk memberikan informasi mendetail untuk membantu kami menyelidiki kasus peniruan identitas dengan melanjutkan proses di Form Pengaduan kami dan mengisi poin yang diminta.",
          "report.reason.scam": "Penipuan",
          "report.reason.spam": "Spam/Iklan",
          "requireinvite.popup.button.cancel": "Tidak",
          "requireinvite.popup.button.confirmon": "Matikan",
          "requireinvite.popup.desc.onewaywarning":
            "Pengaturan ini tidak dapat dimatikan.",
          "requireinvite.popup.title.onewaywarning":
            "Atur agar calon anggota harus menerima undangan?",
          "requireinvite.toggle.desc":
            "Calon anggota harus menerima undangan untuk dapat bergabung ke grup.",
          "requireinvite.toggle.title": "Calon Anggota Harus Menerima Undangan",
          "screen.desc.need.os.recordscreen":
            "Berikan LINE izin akses ke fitur Perekaman Layar untuk mengambil tangkapan layar dan berbagi layar selama panggilan video.",
          "screenshare.desc.need.os.recordscreen":
            "Layar tidak dapat dibagikan. Berikan LINE izin akses ke fitur Perekaman Layar.",
          "screenshare.ongoing.error":
            "Fitur ini tidak tersedia saat layar dibagikan.",
          "screenshare.ongoing.user": "Sedang berbagi layar.",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "Hapus semua pencarian terkini?",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "Nyalakan fitur Pencarian Terkini?",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "Matikan fitur Pencarian Terkini?",
          "search.defaultView.offSaveSearchKeyword": "Matikan Simpan Otomatis",
          "search.defaultView.onSaveSearchKeyword": "Nyalakan Simpan Otomatis",
          "search.defaultView.recentSearchKeyword": "Pencarian terbaru",
          "search.defaultView.recentSearchKeywordEmpty":
            "Anda tidak memiliki riwayat pencarian terkini.",
          "search.defaultView.removeAllRecentSearchKeywords": "Hapus Semua",
          "search.defaultView.saveSearchKeywordOff":
            "Fitur Pencarian Terkini dimatikan.",
          "select.video.error.ratio":
            "Rasio aspek ini tidak dapat digunakan untuk video profil.",
          "service.download.done.popup.desc": "Pengunduhan selesai.",
          "service.download.inprogress.popup.desc": "Mengunduh\n%1...",
          "service.install.device.done.popup.desc": "Penginstalan selesai.",
          "service.install.device.popup.desc": "Menginstal\n%1...",
          "service.install.popup.desc":
            "%2 perlu diinstal agar fitur %1 dapat digunakan. Unduh file instalasi?",
          "setting.advancedSetting": "Pengaturan Detail",
          "setting.advancedSetting.proxy.apply": "Terapkan",
          "setting.advancedSetting.proxy.apply.disabled":
            "Pengaturan proksi dinonaktifkan.",
          "setting.advancedSetting.proxy.apply.enabled":
            "Pengaturan proksi diaktifkan.",
          "setting.advancedSetting.proxy.check": "Cek Proksi",
          "setting.advancedSetting.proxy.complete": "Server proksi tersedia.",
          "setting.advancedSetting.proxy.connect.check":
            "Menguji koneksi via server proksi...",
          "setting.advancedSetting.proxy.fail":
            "Gagal terhubung via proksi.\nPeriksa pengaturan proksi Anda dan coba lagi.",
          "setting.advancedSetting.proxy.fail.protocol":
            "Eror protokol proksi: %1",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "Tidak dapat memverifikasi pengguna.",
          "setting.advancedSetting.proxy.host": "Host",
          "setting.advancedSetting.proxy.port": "Port",
          "setting.advancedSetting.proxy.protocol": "Protokol",
          "setting.advancedSetting.proxy.protocol.check":
            "Mengecek protokol...",
          "setting.advancedSetting.proxy.responseTime": "(Latency: %1 ms)",
          "setting.advancedSetting.proxy.server": "Server",
          "setting.advancedSetting.proxy.server.check":
            "Mengecek server proksi...",
          "setting.advancedSetting.proxy.title": "Proksi",
          "setting.advancedSetting.proxy.use": "Aktifkan server proksi",
          "setting.advancedSetting.proxy.verification":
            "Aktifkan verifikasi proksi",
          "setting.advancedSetting.proxy.verification.id": "Nama Pengguna",
          "setting.advancedSetting.proxy.verification.pw": "Kata Sandi",
          "setting.advancedSetting.sync": "Sinkronisasi",
          "setting.advancedSetting.sync.completed": "Sinkronisasi selesai.",
          "setting.advancedSetting.sync.desc":
            "Sinkronisasi untuk memastikan daftar teman dan obrolan selalu update.",
          "setting.advancedSetting.sync.error.interval":
            "LINE akan menyinkronisasi data Anda setiap %1 minutes.\nSilakan coba lagi nanti.",
          "setting.advancedSetting.sync.error.network":
            "Tidak dapat menyinkronisasi karena jaringan eror.\nSilakan cek koneksi jaringan Anda.",
          "setting.advancedSetting.sync.inprogress":
            "Menyinkronisasi...\nSilakan tunggu.",
          "setting.advancedSetting.sync.time": "d/M/yyyy h:mm %1",
          "setting.advancedSetting.sync.title": "Sinkronisasi Data",
          "setting.alarm.name": "Nada Pemberitahuan %1",
          "setting.basic.font.apply.alert":
            "Perubahan fon akan diterapkan setelah LINE dimulai ulang. Mulai ulang sekarang?",
          "setting.basic.heading.language": "Bahasa",
          "setting.basic.language.apply.alert":
            "Mulai ulang LINE untuk mengganti pengaturan bahasa. Mulai ulang sekarang?",
          "setting.basic.language.apply.desc":
            "Perubahan akan diterapkan saat mulai ulang.",
          "setting.basic.language.apply.no": "Mulai ulang nanti",
          "setting.basic.language.apply.yes": "Mulai ulang sekarang",
          "setting.btn.select.folder": "Pilih",
          "setting.btn.submit": "OK",
          "setting.call.blur": "Efek Latar",
          "setting.call.call.incomingnoti":
            "Tampilkan Pemberitahuan untuk Panggilan Masuk",
          "setting.call.camera": "Kamera",
          "setting.call.defaultMike": "Gunakan Pengaturan Sistem",
          "setting.call.defaultSpeaker": "Gunakan Pengaturan Sistem",
          "setting.call.desc.deviceloading": "Memuat perangkat...",
          "setting.call.ducking": "Kurangi Suara Aplikasi Lain",
          "setting.call.grouphd": "Panggilan Video Grup HD",
          "setting.call.grouphd.desc":
            "Lakukan panggilan video grup HD dengan kualitas gambar yang lebih baik dengan konsekuensi penggunaan CPU dan RAM yang lebih tinggi.",
          "setting.call.grouphd.desc.forwin":
            "Lakukan panggilan video grup HD dengan video codec perangkat. Kualitas gambar yang dihasilkan lebih baik, tetapi penggunaan CPU dan RAM lebih tinggi.",
          "setting.call.handsfreebtinfo.desc":
            "Jika Anda mengalami masalah dengan perangkat Bluetooth yang dikenali sebagai speaker dan mikrofon, coba atur mikrofon dan speaker ke perangkat yang sama.",
          "setting.call.label.duckingGuide":
            "Kurangi suara dari aplikasi lain saat panggilan berlangsung dengan menyesuaikan posisi slider. Jika slider diatur ke 100%, suara dari aplikasi lain akan dimatikan.",
          "setting.call.mic.desc.noisecancelinglight":
            "Meredam kebisingan seperti suara kipas komputer, musik latar, dan lain-lain.",
          "setting.call.mic.desc.noisecancelingstrong":
            "Meredam kebisingan seperti suara gonggongan anjing, papan ketik, dan lain-lain.",
          "setting.call.mic.echocancelling": "Peredaman Gema",
          "setting.call.mic.echocancelling.desc":
            "Opsi ini akan meredam gema yang ditimbulkan oleh perangkat audio sehingga pengguna lain di Panggilan dapat mendengar suara Anda dengan jelas. Matikan opsi ini saat membagikan bunyi dari komputer.",
          "setting.call.mic.echocancelling.mouseovertooltip":
            "Pilih Optimal untuk tingkat peredaman yang disarankan. Pilih Maksimal untuk menghilangkan echo secara lebih efektif, namun perhatikan bahwa audio Anda mungkin terpotong saat pengguna lain berbicara pada saat yang bersamaan.",
          "setting.call.mic.echocancelling.option1": "Optimal",
          "setting.call.mic.echocancelling.option2": "Maksimal",
          "setting.call.mic.menu.noisecancelinglight": "Ringan",
          "setting.call.mic.menu.noisecancelingstrong": "Kuat",
          "setting.call.mic.noisecanceling": "Peredaman Bising",
          "setting.call.mic.noisecanceling.checkbox":
            "Nyalakan Peredaman Bising",
          "setting.call.mic.noisecanceling.desc":
            "Minimalkan bising di latar belakang agar partisipan lain dapat mendengar suara Anda dengan lebih jelas.",
          "setting.call.mike": "Mikrofon",
          "setting.call.mike.autoVolume": "Atur Volume Otomatis",
          "setting.call.msg.noCamera":
            "Tak ada kamera yang tersambung.\nSilakan cek sambungan perangkat Anda dan coba lagi.",
          "setting.call.msg.noMike":
            "Tak ada mikrofon yang tersambung.\nSilakan cek sambungan perangkat Anda dan coba lagi.",
          "setting.call.msg.noSpeaker":
            "Tak ada speaker yang tersambung.\nSilakan cek sambungan perangkat Anda dan coba lagi.",
          "setting.call.noDevice": "Tak ada perangkat",
          "setting.call.speaker": "Speaker",
          "setting.call.videocall": "Video",
          "setting.call.videocall.HWvideocodec":
            "Gunakan Video Codec Perangkat",
          "setting.call.videocall.HWvideocodec.desc":
            "Gunakan video codec internal perangkat untuk mencegah panas berlebih dan baterai cepat terkuras. Matikan opsi ini jika terdapat masalah pada panggilan video, karena fitur ini tidak didukung di beberapa perangkat.",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "Perubahan Anda akan diterapkan pada panggilan berikutnya. Untuk menerapkan perubahan sekarang, mulai ulang panggilan.",
          "setting.call.videocall.dynamicspeaking":
            "Selalu Tampilkan Pembicara Saat Ini",
          "setting.call.videocall.dynamicspeaking.desc":
            "Secara otomatis menampilkan video peserta yang sedang berbicara di layar fokus yang lebih besar pada tampilan fokus, atau menampilkan video gambar mini di halaman depan pada tampilan kisi.",
          "setting.call.videocall.gridviewmaxdisplay":
            "Tampilkan hingga 49 partisipan dalam tampilan kisi",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "Menunjukkan hingga 49 gambar mini partisipan sekaligus dalam tampilan kisi.",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[Perangkat ini mendukung hingga 25 gambar mini. Lihat <a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">Bantuan</a> untuk detail selengkapnya. ]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "Matikan Pemberitahuan Saat Layar Dibagikan secara Penuh",
          "setting.call.videocall.showpreview":
            "Tampilkan Pratinjau Kamera Sebelum Bergabung ke Panggilan Video",
          "setting.call.voicesettings": "Suara",
          "setting.call.youtube.clipboard":
            "Tempelkan tautan dari papan klip untuk membagikan video YouTube",
          "setting.call.youtube.clipboard.checkbox": "Izinkan akses papan klip",
          "setting.call.youtube.clipboard.desc":
            "Dengan opsi ini, tautan video YouTube yang Anda salin akan otomatis ditempelkan ke browser saat Anda memilih video YouTube yang ingin dibagikan.",
          "setting.chats.deletedata.chatHisotry.btn.all": "Semua Perangkat",
          "setting.chats.deletedata.chatHisotry.btn.onlypc":
            "Perangkat Ini Saja",
          "setting.chats.deletedata.chatHisotry.desc":
            "Pilih perangkat yang ingin dihapus riwayat obrolannya. Tindakan ini tidak dapat dibatalkan.",
          "setting.chats.deletedata.chatHisotry.title": "Riwayat Obrolan ",
          "setting.default.font.label": "Default",
          "setting.desc.removeLocalChat":
            "Riwayat obrolan Anda akan dihapus secara permanen.",
          "setting.hiddenchat.empty": "Tidak ada obrolan yang disembunyikan.",
          "setting.hiddenchat.title": "Obrolan Tersembunyi",
          "setting.keep.alert.deleteAll":
            "Hapus semua dari Keep? Tindakan ini tidak akan memengaruhi Memo Keep.",
          "setting.keep.btn.deleteAll": "Hapus Semua Item Tersimpan",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "Tindakan ini hanya mencakup ruang penyimpanan yang digunakan untuk Keep. Memo Keep tidak termasuk.",
          "setting.keep.desc.photos": "Foto",
          "setting.keep.desc.text": "Teks",
          "setting.keep.desc.videos": "Video",
          "setting.keyword.add.error.character":
            "<![CDATA[Kata kunci tidak boleh terdiri dari: >, <, atau spasi.]]>",
          "setting.keyword.add.error.characterDup":
            "Kata kunci ini sudah Anda tambahkan sebelumnya.",
          "setting.keyword.add.error.characterSize":
            "Kata kunci harus terdiri dari setidaknya 2 karakter.",
          "setting.keyword.added": "Kata Kunci yang Ditambahkan",
          "setting.keyword.btn.add": "Tambahkan Kata Kunci",
          "setting.keyword.desc":
            "Dapatkan pemberitahuan untuk pesan yang belum dibaca dengan kata kunci ini.",
          "setting.keyword.title": "Pemberitahuan Kata Kunci",
          "setting.label.basic.alarmMode": "Metode Pemberitahuan",
          "setting.label.basic.alarmMode.showAlarm": "Dengan Sembulan",
          "setting.label.basic.alarmMode.soundAlarm": "Dengan Suara",
          "setting.label.basic.alarmRule": "Aturan Pemberitahuan",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "Kirim pemberitahuan untuk undangan grup dan anggota baru yang bergabung ke grup.",
          "setting.label.basic.alarmRule.mention":
            "Kirim pemberitahuan setiap kali saya disebut",
          "setting.label.basic.alarmRule.newChatAlarm":
            "Pemberitahuan untuk Pesan Baru",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "Matikan pemberitahuan ketika ditampilkan dalam layar penuh",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "Matikan pemberitahuan seluler saat login ke LINE untuk desktop.\n(Pemberitahuan akan dikirim saat LINE terkunci atau tidak aktif selama 3 menit.)",
          "setting.label.basic.alarmRule.note": "Pemberitahuan untuk Note",
          "setting.label.basic.alarmRule.videocal":
            "Matikan suara pemberitahuan selama panggilan suara dan video",
          "setting.label.basic.alarmSound": "Nada Pemberitahuan",
          "setting.label.basic.alarmtype": "Jenis pemberitahuan",
          "setting.label.basic.alarmtype.basic": "Default",
          "setting.label.basic.font": "Pengaturan Fon",
          "setting.label.basic.font.desc":
            "Pengaturan fon hanya diterapkan di ruang obrolan.",
          "setting.label.basic.font.extraLarge": "Sangat Besar",
          "setting.label.basic.font.extraLarge.size": "16",
          "setting.label.basic.font.large": "Besar",
          "setting.label.basic.font.large.size": "14",
          "setting.label.basic.font.name": "Fon",
          "setting.label.basic.font.normal": "Normal",
          "setting.label.basic.font.normal.size": "12",
          "setting.label.basic.font.normal.size.mac": "13",
          "setting.label.basic.font.size": "Ukuran",
          "setting.label.basic.font.small": "Kecil",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key": "Metode Pengiriman",
          "setting.label.private.profile.propertyName.id":
            "(ID Anda tidak akan ditampilkan ke publik)",
          "setting.label.title": "Pengaturan",
          "setting.lockscreen": "Mode kunci",
          "setting.lockscreen.time.15minutes": "15 menit",
          "setting.lockscreen.time.1hour": "1 jam",
          "setting.lockscreen.time.30minutes": "30 menit",
          "setting.lockscreen.time.3hours": "3 jam",
          "setting.lockscreen.time.3minutes": "3 menit",
          "setting.lockscreen.time.5minutes": "5 menit",
          "setting.lockscreen.turn.on":
            "Kunci LINE saat tidak digunakan selama lebih dari",
          "setting.maintab.alarm": "Pemberitahuan",
          "setting.maintab.basicSetting": "Pengaturan Dasar",
          "setting.maintab.call": "Panggilan",
          "setting.maintab.chat": "Obrolan",
          "setting.maintab.contact": "Teman",
          "setting.maintab.privacy": "Privasi",
          "setting.maintab.profile": "Profil",
          "setting.maintab.talk": "Obrolan & Panggilan Suara",
          "setting.messengerView.allinone.desc": "Tampilkan di sebelah kanan.",
          "setting.messengerView.allinone.label": "Satu Bagian",
          "setting.messengerView.apply.alert":
            "Jika Anda mengubah tampilan obrolan Anda , semua jendela obrolan yang terbuka akan ditutup.\nLanjutkan?\n",
          "setting.messengerView.label": "Opsi Tampilan Obrolan",
          "setting.messengerView.seperate.desc":
            "Obrolan ditampilkan di jendelah terpisah.",
          "setting.messengerView.seperate.label": "Jendela Terpisah",
          "setting.popup.private.emptyName": "Masukkan minimum 1 karakter.",
          "setting.popup.private.tooLongName":
            "Masukkan nama hingga 20 karakter.",
          "setting.shorcut.chatfolder.move": "Pindahkan Folder",
          "setting.shorcut.desc.chatfolder": "Folder Obrolan",
          "setting.shorcut.list.previous.chat": "Buka obrolan sebelumnya",
          "setting.shorcut.list.search": "Cari",
          "setting.shortcut.array.window": "Pilah obrolan",
          "setting.shortcut.callnlive.audio": "Nyalakan/Matikan Mikrofon",
          "setting.shortcut.callnlive.video": "Nyalakan/Matikan Kamera",
          "setting.shortcut.cancel.array.window": "Hapus pemilahan obrolan",
          "setting.shortcut.capture.copy": "Salin",
          "setting.shortcut.capture.draw.straight":
            "Gambar garis lurus, segi empat, lingkaran",
          "setting.shortcut.capture.fix": "Atur kembali posisi tangkapan layar",
          "setting.shortcut.capture.redo": "Ulangi",
          "setting.shortcut.capture.save": "Simpan",
          "setting.shortcut.capture.undo": "Batal",
          "setting.shortcut.chat.newline": "Baris baru",
          "setting.shortcut.chat.open.keep": "Buka Keep",
          "setting.shortcut.chat.screen.capture": "Tangkap layar",
          "setting.shortcut.close.window": "Tutup jendela",
          "setting.shortcut.lable": "Pintasan papan ketik",
          "setting.shortcut.list.basic": "Dasar",
          "setting.shortcut.list.callnlive": "Panggilan",
          "setting.shortcut.list.chat": "Obrolan",
          "setting.shortcut.list.friend.chat": "Teman, daftar obrolan",
          "setting.shortcut.list.viewer": "Penampil Media",
          "setting.shortcut.markdown.bold": "Cetak Tebal",
          "setting.shortcut.markdown.codeblock": "Blok Teks",
          "setting.shortcut.markdown.italic": "Cetak Miring",
          "setting.shortcut.markdown.strikethrough": "Garis coret",
          "setting.shortcut.markdown.title": "Pengaturan Format Teks",
          "setting.shortcut.markdown.wordblock": "Blok Baris",
          "setting.shortcut.min.window": "Perkecil jendela",
          "setting.shortcut.move.add.friend": "Buka tab Tambah teman",
          "setting.shortcut.move.bottom": "Menuju ke akhir obrolan",
          "setting.shortcut.move.chat.list": "Buka tab Obrolan",
          "setting.shortcut.move.friend.list": "Buka tab Teman",
          "setting.shortcut.move.top": "Menuju ke awal obrolan",
          "setting.shortcut.on.lock": "Nyalakan mode kunci",
          "setting.shortcut.open.keep": "Buka Keep",
          "setting.shortcut.open.note": "Buka Note",
          "setting.shortcut.open.sticker": "Buka jendela stiker",
          "setting.shortcut.open.tip": "Tampilkan tooltip pintasan",
          "setting.shortcut.open.window": "Buka di jendela baru",
          "setting.shortcut.photo.copy": "Salin berkas",
          "setting.shortcut.photo.save": "Simpan berkas",
          "setting.shortcut.screen.chapture": "Tangkap layar",
          "setting.shortcut.search": "Cari",
          "setting.shortcut.send.file": "Kirim berkas",
          "setting.shortcut.timeline.comment": "Tulis komentar",
          "setting.shortcut.timeline.like": "Suka",
          "setting.shortcut.timeline.like.pick": "Pilih ekspresi",
          "setting.shortcut.tip":
            "Pintasan papan ketik untuk mempermudah penggunaan LINE.",
          "setting.shortcut.video.jump": "Putar Maju/Mundur Video 5 Detik",
          "setting.shortcut.videongif.stop": "Putar/Jeda",
          "setting.shortcut.viewer.fullscreen": "Lihat dalam Layar Penuh",
          "setting.shortcut.volume.control": "Naikkan/Turunkan Volume Video",
          "setting.shortcut.zoominout": "Perbesar/perkecil gambar",
          "setting.tab.download.folder": "Folder Pengunduhan",
          "setting.tab.file.trans": "Berkas",
          "setting.tab.login": "Login",
          "setting.tab.url.preview": "Pratinjau URL",
          "setting.tab.voip": "Panggilan",
          "setting.talk.animation.gif": "GIF Animasi",
          "setting.talk.animation.gif.play":
            "Putar GIF animasi secara otomatis di obrolan",
          "setting.talk.backgroundSetting.apply":
            "Latar yang dipilih akan diterapkan ke semua ruang obrolan.\nLanjutkan?",
          "setting.talk.backgroundSetting.apply.allChats":
            "Terapkan ke semua obrolan",
          "setting.talk.backgroundSetting.detail":
            "Pilih latar yang ingin diterapkan pada obrolan Anda(tidak termasuk OpenChat).",
          "setting.talk.backgroundSetting.selected": "Pilih Latar",
          "setting.talk.backgroundSetting.title": "Latar Obrolan",
          "setting.talk.heading.talk": "Obrolan",
          "setting.talk.photo.resolution.detail":
            "Foto yang lebih besar dari 20MB tidak dapat dikirim dengan resolusi asli.",
          "setting.talk.photo.resolution.option.default": "Default",
          "setting.talk.photo.resolution.option.original": "Asli  ",
          "setting.talk.photo.resolution.option.standard": "Standar",
          "setting.talk.photo.resolution.title": "Resolusi Foto",
          "setting.talk.theme.check.seasonal": "Efek Salju",
          "setting.talk.theme.desc.seasonal": "Tema",
          "setting.theme.desc.darkmode.limitation":
            "Mode gelap tidak didukung di beberapa layar.",
          "setting.theme.mode.dark": "Mode Gelap",
          "setting.theme.mode.light": "Mode Terang",
          "setting.theme.systemSetting": "Gunakan pengaturan sistem",
          "setting.theme.title": "Mode Tampilan",
          "setting.url.preview.desc":
            "Menampilkan gambar mini dan pratinjau dari tautan yang dibagikan di obrolan.",
          "setting.window.scaleRatio": "Ukuran Layar",
          "setting.window.scaleRatio.default": "Tampilan Default",
          "settingAlarm.label.duration": "Durasi",
          "settingAlarm.label.lucid": "Transparan",
          "settingAlarm.label.opacity": "Transparansi",
          "settingAlarm.label.opaque": "Tidak Transparan",
          "settingAlarm.label.setAlarmWindow": "Pengaturan Peringatan",
          "settingAlarm.label.toastContent": "Detail",
          "settingAlarm.label.toastPreview": "Pratinjau Pesan",
          "settingAlarm.label.unitSecond": "dtk",
          "settingLogin.alert.autoLogin":
            "Login otomatis dinyalakan. Fitur ini dapat dimatikan di Pengaturan.",
          "settingLogin.check.autoLogin": "Login Otomatis",
          "settingLogin.check.autoRunWin":
            "Buka LINE ketika Windows dinyalakan",
          "settingPrivacy.btn.ublockBuddy": "Buka Blokir",
          "settingPrivacy.call.blur.desc":
            "Seret slider untuk menyesuaikan intensitas efek blur selama panggilan video.",
          "settingPrivacy.cleardata.cache.desc":
            "Data cache Anda akan dihapus. Foto, video, pesan suara, atau file tidak akan dihapus.",
          "settingPrivacy.cleardata.cache.error":
            "Sebagian data cache Anda tidak dapat dihapus. Silakan coba lagi nanti.",
          "settingPrivacy.cleardata.cache.popup":
            "Data cache Anda akan dihapus. Lanjutkan?",
          "settingPrivacy.label.allowCallAlarm.desc":
            "Pengaturan ini juga akan dinyalakan untuk aplikasi LINE ponsel Anda.",
          "settingPrivacy.label.allowCallAlarmPC": "Izinkan Panggilan Masuk",
          "settingPrivacy.label.blockAndDelete.desc":
            'Hapus akun ini dari daftar "Akun yang Diblokir"? Perhatikan bahwa akun ini akan tetap terblokir. Untuk menambahkan kembali akun sebagai teman, cari akun dengan ID atau nomor ponsel.',
          "settingPrivacy.label.blockBuddyList": "Akun yang Diblokir",
          "settingPrivacy.label.blockBuddyListEmpty":
            "Tak ada akun yang diblokir.",
          "settingPrivacy.label.blocksquarememberlist":
            "Anggota OpenChat yang Diblokir",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "Tak ada anggota yang diblokir.",
          "settingPrivacy.label.buddySearchAllow":
            "Izinkan Teman untuk Mencari",
          "settingPrivacy.label.clearRecords": "Hapus Semua Riwayat Obrolan",
          "settingPrivacy.label.cleardata": "Hapus Data",
          "settingPrivacy.label.cleardata.cache": "Data Cache",
          "settingPrivacy.label.filterMessages":
            "Tolak semua pesan yang dikirim oleh orang yang bukan teman. ",
          "settingPrivacy.label.filterMessages.title":
            "Blokir Pesan dari yang Bukan Teman",
          "settingPrivacy.label.hiddenBuddyList": "Akun Tersembunyi",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "Tak ada akun yang disembunyikan.",
          "settingPrivacy.label.hideAndDelete.desc":
            "Hapus akun ini dari daftar Akun Tersembunyi? Perhatikan bahwa akun ini masih dapat mengirim pesan kepada Anda. Untuk menambahkan kembali akun sebagai teman, cari akun dengan ID atau nomor ponsel.",
          "settingPrivacy.label.idSearchAllowYes": "Izinkan Cari ID",
          "settingPrivacy.label.title": "Privasi",
          "settingProfile.error.invalidData": "Nama ini tidak dapat digunakan.",
          "settingProfile.error.network":
            "Permintaan tidak dapat diproses\nakibat eror sementara.\nSilakan coba lagi.",
          "settingProfile.error.server":
            "Permintaan tidak dapat diproses akibat eror sementara.\nSilakan coba lagi.",
          "settingProfile.label.emailEmpty": "Belum Diatur",
          "settingProfile.label.modifyprofile": "Edit",
          "settingProfile.label.myInfo": "Info Saya",
          "settingProfile.label.nickName": "Nama",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "Alamat email yang Anda coba daftarkan terlalu mirip dengan kata sandi saat ini.\nSilakan daftarkan alamat email yang lain.",
          "settingProfile.label.registerAcoount.mailAddress": "Email",
          "settingProfile.label.statusEmpty": "Belum Diatur",
          "settingProfile.label.statusMessage": "Pesan status",
          "settingProfile.label.userID": "ID Pengguna",
          "settingProfile.link.registerAcoount.mailAddress":
            "Pendaftaran Email >",
          "settingProfile.statusMessage.edit": "Masukkan pesan status",
          "settingProfile.statusMessage.edit.failed":
            "Pesan status Anda tidak dapat disimpan.",
          "settings.basic.number.edit": "Ubah nomor telepon",
          "settings.delete.account": "Hapus Akun",
          "settings.delete.account.btn": "Hapus akun",
          "settings.deleteAccount.confirm.desc":
            "Jika akun LINE dihapus, daftar teman dan riwayat obrolan Anda akan dihapus secara permanen. Yakin ingin menghapus akun LINE Anda?",
          "settings.deleteAccount.confirm.title":
            "Yakin ingin menghapus akun LINE Anda?",
          "settings.deleteAccount.success":
            "Anda telah logout dari LINE karena akun dihapus.",
          "settings.label.tooltip": "Pengaturan",
          "settings.privacy.publicUserID": "Izinkan Tambah dengan ID",
          "settings.privacy.publicUserID.description":
            "Orang dapat menambahkan Anda sebagai teman dengan mencari ID Anda.",
          "settings.privacy.rejectStrangeMessages": "Filter Pesan",
          "settings.privacy.rejectStrangeMessages.description":
            "Ketika diaktifkan, semua pesan yang dikirim oleh orang yang bukan teman akan ditolak.",
          "settings.privacy.title": "Privasi",
          "settings.profile.myInfo.birthday": "Tanggal Lahir",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "Jika tanggal ulang tahun dipilih untuk ditampilkan, animasi spesial khusus yang hanya dapat dilihat oleh Anda akan dikirim di hari ulang tahun Anda. Tanggal ulang tahun juga dapat dilihat oleh teman melalui Profil Anda, tab Beranda serta Obrolan, dan lokasi lainnya.",
          "settings.profile.myInfo.birthday.showMonthday":
            "Tampilkan Tanggal Lahir Saya",
          "showAllContents.File": "Berkas",
          "showAllContents.Iink": "Tautan",
          "showAllContents.ImageVideo": "Foto & video",
          "showAllContents.file.noFile":
            "Tak ada berkas yang dibagikan di ruang obrolan ini.",
          "showAllContents.moveMessage": "Lihat di ruang obrolan",
          "showAllContents.moveMessage.lastMessage": "Lihat pesan terbaru",
          "showAllContents.uploadMember": "Diunggah oleh %1 ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "Permintaan dihapus\n\n(Beberapa permintaan sudah ditangani admin yang lain.)",
          "square.abuse.textinput":
            "Akun Anda dibatasi berkaitan dengan tindakan yang telah melanggar ketentuan penggunaan.",
          "square.access.changephoto":
            "Ubah foto profil Anda untuk OpenChat ini",
          "square.access.chat": "Buat Obrolan Baru",
          "square.access.chat.image": "Ubah Foto Profil Dari Obrolan Ini",
          "square.access.chatroomtohome": "Buka Beranda SQUARE",
          "square.access.cover.image": "Ubah Sampul OpenChat Ini",
          "square.access.create": "Membuat OpenChat",
          "square.access.hide": "Sembunyikan deskripsi OpenChat",
          "square.access.invite": "Undang Teman",
          "square.access.join": "Bergabung ke OpenChat",
          "square.access.joinrequest": "Minta Bergabung ke OpenChat",
          "square.access.postoption": "Lihat Lebih Banyak Opsi Note",
          "square.access.profile.image":
            "Ubah foto profil Anda untuk OpenChat ini",
          "square.access.profile.nickname":
            "Ubah nama panggilan untuk OpenChat ini",
          "square.access.qrcode": "Kode QR OpenChat",
          "square.access.search": "Cari OpenChat",
          "square.access.show": "Tampilkan Deskripsi OpenChat",
          "square.access.square": "OpenChat",
          "square.access.squareoption": "Lihat lebih banyak opsi OpenChat",
          "square.access.timelinetosquare": "Buka OpenChat",
          "square.access.write": "Tulis Note",
          "square.ageconfirmation.popupbutton.cancel": "Batal",
          "square.ageconfirmation.popupbutton.yes":
            "Ya, saya berusia 18 tahun ke atas",
          "square.ageconfirmation.popupdesc.atleast18tosetrestriction":
            "Anda harus berusia setidaknya 18 tahun untuk dapat mengatur batas usia di OpenChat. Sebagai admin OpenChat ini, pastikan topik percakapan dewasa di antara anggota hanya terbatas seputar rokok dan alkohol. Perhatikan bahwa opsi ini tidak dapat diubah setelah diatur.",
          "square.ageconfirmation.popuptitle.ageconfirmationrequired":
            "Konfirmasi Usia Diperlukan",
          "square.ageconfirmationrequired.popupbutton.cancel": "Batal",
          "square.ageconfirmationrequired.popupbutton.yes":
            "Konfirmasi dan Bergabung",
          "square.ageconfirmationrequired.popupdesc.onlyusersoverlegalageallowedtojoin":
            "OpenChat ini hanya tersedia untuk pengguna berusia 18 tahun ke atas. Untuk menjaga keamanan semua pengguna, patuhi Syarat Penggunaan dan Panduan OpenChat.",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "Hanya untuk usia 18 tahun ke atas",
          "square.announcement.donotshowagain": "Jangan tampilkan lagi",
          "square.announcement.donotshowagain.mouseover":
            "Jangan\ntampilkan lagi",
          "square.announcement.error":
            "Pesan pemberitahuan tidak dapat ditemukan.",
          "square.announcement.message.annouce": "Pemberitahuan",
          "square.announcement.minimize": "Perkecil",
          "square.announcement.unannounce": "Batalkan Pemberitahuan",
          "square.answer.guide":
            "Jawab pertanyaan di atas untuk mengajukan permintaan bergabung ke obrolan ini.",
          "square.answer.send.done": "Permintaan terkirim.",
          "square.answer.title": "Jawab Pertanyaan",
          "square.banreportuser.popupbutton.cancel": "Batal",
          "square.banuser.popupdesc.banafterleaving":
            "Pengguna ini telah meninggalkan OpenChat. Anda dapat  melaporkan akun atau mencegah pengguna tersebut untuk kembali bergabung.",
          "square.chat.button.threadmessages":
            "<![CDATA[<b><font color='%1'>%2+</font></b> Pesan]]>",
          "square.chat.button.threadmessages999":
            "<![CDATA[Lihat <b><font color='%1'>%2+</font></b> Pesan]]>",
          "square.chat.button.threadmessagesfew": "Lihat Pesan di dalam Utas",
          "square.chat.button.threadmessagesmany": "%1+ Pesan",
          "square.chat.desc.sent": "Terkirim",
          "square.chat.err.file.exceed.capacity":
            "Tidak dapat mengirim berkas karena ukuran berkas melampaui batas.",
          "square.chat.menu.aboutchatroom": "Kelola OpenChat",
          "square.chat.more.leaveroom": "Tinggalkan Ruang Obrolan",
          "square.chat.placeholder.qna": "Jawab Pertanyaan",
          "square.chat.reply.notification": "Balasan: %1",
          "square.chat.reply.notification2": "Balasan %1: %2",
          "square.chat.setting": "Pengaturan Lanjutan",
          "square.chat.settings.bg.apply.square.image":
            "Terap Foto OpenChat ke Latar Belakang",
          "square.chat.settings.export.title": "Obrolan di %1",
          "square.chat.system.msg.invite.a.b": "%1 Mengundang %2 Ke Obrolan.",
          "square.chat.system.msg.join.chat": "%1 bergabung dengan obrolan.",
          "square.chat.system.msg.leave.chat": "%1 telah meninggalkan obrolan.",
          "square.chat.text.input.nickname": "Mengobrol Sebagai %1",
          "square.chatcontent.button.seemoreqna": "Lihat Lainnya",
          "square.chatcontent.tab.qna": "Pesan T&J",
          "square.chatlist.alert.deletedchat":
            "Obrolan ini tidak ada. Silakan coba bergabung ke obrolan lain.",
          "square.chatlist.alert.max":
            "Anda tidak dapat bergabung ke dalam obrolan ini karena jumlah maksimum anggota sudah tercapai.",
          "square.chatlist.join.guide":
            "Pilih obrolan untuk bergabung. Untuk melihat seluruh daftar sub-obrolan di OpenChat ini, masuk ke obrolan mana pun dan ketuk opsi Obrolan dari menu di ruang obrolan.",
          "square.chatlist.joined.title": "Obrolan saat ini ",
          "square.chatlist.joined.zero":
            "Anda belum bergabung dalam obrolan Square mana pun.",
          "square.chatlist.max.member.desc": "Obrolan ini sudah penuh",
          "square.chatlist.public.join.alert":
            "Obrolan ini juga akan muncul di daftar obrolan utama Anda.\n",
          "square.chatlist.public.join.btn": "Bergabung ",
          "square.chatlist.public.max.btn": "Penuh",
          "square.chatlist.public.no.msg": "Tidak ada pesan.",
          "square.chatlist.public.title": "Obrolan yang tersedia ",
          "square.chatlist.public.zero": "Obrolan tidak tersedia.",
          "square.chatlist.reply.alert": "Anda mendapat balasan.",
          "square.chatlist.square.button": "OpenChat",
          "square.chatlist.title": "Obrolan",
          "square.chatmenu.button.qna": "Pesan T&J",
          "square.chatmenu.button.thread": "Utas",
          "square.chatmenu.button.yourthreads": "Utas Saya",
          "square.chatroom.alert.open.url":
            "Tautan ini mungkin tidak aman.\nAnda yakin ingin membukanya?",
          "square.chatroom.block.inputarea.deletedchat":
            "Obrolan telah dihapus",
          "square.chatroom.block.inputarea.deletedgroup": "OpenChat dihapus",
          "square.chatroom.block.inputarea.kickoutgroup":
            "Dikeluarkan dari OpenChat",
          "square.chatroom.chatlilst.guide.des":
            "Anda dapat melihat dan bergabung dengan OpenChat ini.",
          "square.chatroom.chatlist.title": "Obrolan",
          "square.chatroom.confirm.desc.kickout":
            "Anggota ini akan diblokir dari OpenChat. Lanjutkan?",
          "square.chatroom.create.image": "Pilih foto",
          "square.chatroom.default.announce.content": 'Selamat datang di "%1"!',
          "square.chatroom.deletefromall.alert":
            "Pesan yang dipilih akan dihapus dari riwayat obrolan semua anggota. Lanjutkan?",
          "square.chatroom.desc.botadded": "%1 menambahkan %2 ke obrolan.",
          "square.chatroom.desc.botremoved":
            "%1 rmengeluarkan %2 dari obrolan.",
          "square.chatroom.error.alert.deletedchatroom":
            "Obrolan ini tidak ada. Silakan coba bergabung ke obrolan lain.",
          "square.chatroom.input.deletedgroup": "Hapus OpenChat",
          "square.chatroom.input.join.btn": 'Bergabung ke "%1"',
          "square.chatroom.invite.layer.des":
            "Undang teman yang ingin diajak mengobrol di OpenChat ini.",
          "square.chatroom.layer.upperloading": "Memuat riwayat obrolan...",
          "square.chatroom.longpress.deleteformall": "Hapus",
          "square.chatroom.longpress.deletefromall.title": "Hapus dari Obrolan",
          "square.chatroom.longpress.kickout": "Hapus",
          "square.chatroom.longpress.squarepost": "Note",
          "square.chatroom.memberlist.guest": "Tamu",
          "square.chatroom.setting.deletechat": "Hapus Sub-Obrolan",
          "square.chatroom.setting.deletechat.description":
            "Menghapus sub-obrolan akan membuat sub-obrolan tersebut tidak akan tersedia lagi untuk semua anggota. Yakin ingin menghapus sub-obrolan ini?",
          "square.chatroom.setting.report": "Laporkan",
          "square.chatroom.settings.change.title": "Nama obrolan",
          "square.chatroom.settings.leave.no.message": "Tinggalkan diam-diam",
          "square.chatroom.system.alert.notfriend":
            '%2 dari OpenChat "%1" belum ditambahkan sebagai teman. \nBerhati-hatilah saat berkirim pesan dengan pengguna tersebut.',
          "square.chatroom.system.message.change.bg":
            "Seorang admin telah mengubah foto OpenChat.",
          "square.chatroom.system.message.change.maxparticipants":
            "%1 mengatur batas anggota obrolan menjadi %2.",
          "square.chatroom.system.message.change.name":
            '%1 mengubah nama obrolan menjadi "%2".',
          "square.chatroom.system.message.change.picture":
            "%1 mengubah foto profil obrolan.",
          "square.chatroom.system.message.kickout":
            "%1 diblokir dari OpenChat.",
          "square.chatroom.system.msg.alert.private":
            'Perhatian! Anda memasuki obrolan pribadi untuk Square "%1". Ketuk dan tahan pesan (termasuk foto, video, dan tautan) untuk melaporkan pesan.',
          "square.chatroom.system.msg.alert.public":
            'Halo! Sekarang Anda tergabung di OpenChat "%1".',
          "square.chatroom.system.msg.guide.loading":
            "Pesan sebelumnya akan dimuat setiap kali Anda menggeser layar ke bawah.",
          "square.chatroom.system.msg.guide.report":
            "Klik kanan pada pesan (termasuk foto, video, dan tautan) untuk melaporkan pesan.",
          "square.chatroom.system.msg.tooltip.private":
            'Anda memasuki ruang obrolan pribadi untuk square "%1".',
          "square.chatroom.system.msg.tooltip.public":
            'Anda memasukin OpenChat "%1"',
          "square.chatroom.systemmsg.deletedchat":
            "Obrolan ini telah dihapus. ",
          "square.chatroom.systemmsg.deletedgroup":
            "OpenChat ini telah dihapus.",
          "square.chatroom.systemmsg.emptycommunity": "OpenChat tidak tersedia",
          "square.chatroom.systemmsg.emptyroom": "Obrolan tidak tersedia",
          "square.chatroom.systemmsg.kickout":
            "Anda telah dihapus dari obrolan ini oleh seorang admin. ",
          "square.chatroom.vmenu.chatlist": "Obrolan",
          "square.chatroom.vmenu.groupchatlist": "Beranda Square",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "Beri tahu bahwa\nAnda telah meninggalkan ruang obrolan.",
          "square.coadmin.alert": "Atur sebagai ko-admin?",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\uc5b5",
          "square.common.desc.usercount1k": "%1 RB",
          "square.common.desc.usercount1m": "%1 JT",
          "square.common.desc.usercount1man": "%1\ub9cc",
          "square.common.share": "Bagikan",
          "square.community.home.alert.invited.chat":
            "Terima undangan dan bergabung ke obrolan?",
          "square.community.home.chat.button.start": "Mulai",
          "square.community.home.invite.button": "Undang",
          "square.community.home.msg.chat.onlymember":
            "Anda dapat berpartisipasi dalam obrolan setelah bergabung di Square.\nBergabung sekarang?",
          "square.community.home.msg.onlymember":
            "Anda dapat berpartisipasi di Square\nbegitu permintaan bergabung disetujui.",
          "square.content.home.shared": "Note dibagikan.",
          "square.cover.chat.btn": "Obrolan",
          "square.cover.investmentscams": "Waspada penipuan di LINE.",
          "square.cover.post.btn": "Note",
          "square.create.btn": "",
          "square.create.category": "Kategori ",
          "square.create.category.desc":
            "Pilih kategori yang akan membuat OpenChat dapat ditampilkan di Rekomendasi.",
          "square.create.default.category": "Tidak Ada",
          "square.create.description": "Deskripsi",
          "square.create.description.desc": "Deskripsikan OpenChat Anda",
          "square.create.description.input": "Deskripsi",
          "square.create.description2": "Gunakan #hashtag untuk kata kunci",
          "square.create.error.no.name": "Harap masukkan nama OpenChat.",
          "square.create.error.popup.input.description.info":
            "Masukkan deskripsi OpenChat",
          "square.create.error.popup.input.info":
            "Masukkan semua informasi yang diperlukan",
          "square.create.groupname": "Nama OpenChat",
          "square.create.image": "Pilih Foto",
          "square.create.over.text.num.alert":
            "Telah mencapai panjang maksimum ",
          "square.create.search": "Izinkan Pencarian",
          "square.create.search.desc":
            "Pengguna lain dapat mencari OpenChat ini berdasarkan nama atau deskripsinya.",
          "square.create.setting.desc":
            "OpenChat Anda dapat dicari oleh pengguna lain.",
          "square.create.sgroup.approval.desc":
            "Persetujuan admin dibutuhkan untuk bergabung dengan OpenChat ini.",
          "square.create.sgroup.closedtype":
            "Perlu persetujuan untuk bergabung",
          "square.create.sgroup.opentype": "Segera bergabung",
          "square.create.subchat.guide.des":
            "Pengaturan privasi dan izin admin di OpenChat akan diterapkan ke semua sub-obrolan.",
          "square.create.subchat.title": "Buat Sub-Obrolan",
          "square.create.title": "Buat OpenChat",
          "square.create.welcome": "Pesan selamat datang",
          "square.createchat.error.no.auth.public":
            "Opsi untuk membuat sub-obrolan telah dimatikan oleh admin.",
          "square.createchat.inputtitle": "Masukkan nama sub-obrolan",
          "square.createchat.title": "Buat Obrolan Baru",
          "square.createchat.type.maximum.option": "Jumlah Maksimum Anggota",
          "square.createchat.type.maximum.option.desc":
            "Tentukan jumlah maksimum anggota yang dapat bergabung dalam obrolan.",
          "square.createchat.type.private": "Pribadi ",
          "square.createchat.type.private.desc":
            "Hanya anggota yang diundang yang dapat bergabung ke dalam obrolan ini.",
          "square.createchat.type.public": "Publik",
          "square.createchat.type.public.desc":
            "Siapa pun dapat bergabung ke dalam obrolan ini.",
          "square.createchat.type.public.option": "Terbuka untuk semua anggota",
          "square.createopenchat.button.setagerestriction": "Atur Batas Usia",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "Izinkan hanya pengguna yang berusia 18 tahun atau lebih bergabung dalam OpenChat ini.",
          "square.createopenchat.desc.search":
            "Beberapa pesan OpenChat dapat dipratinjau dan dicari oleh pengguna lain. Opsi ini dapat diubah di pengaturan OpenChat setelah OpenChat dibuat.",
          "square.createopenchat.placeholder.enterdescription":
            "Masukkan deskripsi",
          "square.createsubchat.toggle.notifyinopenchat":
            "Pemberitahuan Sub-Obrolan Baru di OpenChat",
          "square.default.name.title": "Nama OpenChat",
          "square.error.cannot.forward.contact":
            "Info kontak tidak dapat dikirimkan ke OpenChat.",
          "square.error.fail.upload.profile.image":
            "Tidak dapat mengedit profil Anda. ",
          "square.error.not.normal":
            "Terjadi eror yang tidak diketahui.\nSilakan coba lagi nanti.",
          "square.error.noti.kickout": "Anda diblokir dari OpenChat.",
          "square.error.popup.cannot.invite":
            "Admin Square telah mematikan fitur ini.",
          "square.error.popup.cannot.join":
            "Tidak dapat bergabung ke OpenChat untuk saat ini. Coba lagi lain kali.",
          "square.error.popup.deletedgroup":
            "OpenChat ini sudah tidak ada lagi.",
          "square.error.popup.network":
            "Tidak dapat terhubung.\nPeriksa koneksi Anda dan coba lagi.",
          "square.error.popup.noauth":
            "Anda tidak memiliki izin untuk mengakses bagian ini.\nAnda akan diarahkan ulang ke Pengaturan OpenChat.",
          "square.error.popup.noauth.alert":
            "Anda tidak memiliki izin untuk mengakses bagian ini. ",
          "square.error.popup.usingbyotheruser":
            "Pengaturan ini sedang dimodifikasi oleh pengguna lain.\nSilakan coba lagi nanti.",
          "square.filtering.keyword.error.alert": "This word can't be used.",
          "square.fraudpopup.button.cancel": "Batal",
          "square.fraudpopup.button.continue": "Lanjutkan",
          "square.fraudpopup.button.learnmore": "Selengkapnya",
          "square.fraudpopup.desc.investmentscams":
            "Penipuan investasi melibatkan iklan scam (penipuan) di media sosial dengan berkedok sebagai pesohor sedang meningkat. Harap berhati-hati saat mengirim maupun menerima pesan dan laporkan setiap aktivitas mencurigakan.",
          "square.fraudpopup.title.investmentscams":
            "Penipuan Investasi sedang Meningkat",
          "square.friendslist.join.requests": "Kelola permintaan bergabung",
          "square.friendstab.newrequest": "Permintaan bergabung ke OpenChat",
          "square.friendstab.request.count": "Permintaan Bergabung",
          "square.friendstab.request.counts.2.other": "%n Permintaan Bergabung",
          "square.friendstab.request.counts.2.plurals.other":
            "%n Permintaan Bergabung",
          "square.friendstab.request.counts.other": "%n Permintaan Bergabung ",
          "square.friendstab.request.counts.plurals.other":
            "%n Permintaan Bergabung",
          "square.group.create.change.image": "Ubah Foto",
          "square.group.name": "Openchat",
          "square.group.settings.basic": "Pengaturan Dasar OpenChat",
          "square.group.settings.change.groupname": "Nama OpenChat",
          "square.group.settings.change.myname": "Nama Tampilan",
          "square.group.settings.delete.alert":
            "Menghapus sebuah OpenChat akan menghapus semua data, termasuk riwayat obrolannya. Yakin ingin menghapus OpenChat ini?",
          "square.group.settings.editmember.kickout": "Hapus Anggota",
          "square.group.settings.editmember.kickout.alert.done":
            "Anggota telah dihapus",
          "square.group.settings.group.profile": "Edit Profil OpenChat",
          "square.group.settings.groupset": "Pengaturan OpenChat",
          "square.group.settings.leave": "Tinggalkan OpenChat",
          "square.group.settings.leave.alert":
            "Jika Anda meninggalkan sebuah OpenChat, maka semua data terkait, termasuk riwayat obrolan akan terhapus. Yakin ingin meninggalkan OpenChat ini?",
          "square.group.settings.leave.error.alert.admin":
            "Alihkan izin admin Anda ke anggota lain\nsebelum meninggalkan OpenChat.",
          "square.group.settings.manageauth.additional": "Atur Izin",
          "square.group.settings.manageauth.additionalchatfeatures":
            "Fitur Obrolan Lainnya",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "Buat Polling",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "Hapus Polling",
          "square.group.settings.manageauth.chatapp": "Fitur Obrolan Lainnya",
          "square.group.settings.manageauth.setmaxparticipants":
            "Ubah jumlah maksimum peserta obrolan",
          "square.group.settings.managegroup": "Kelola OpenChat",
          "square.group.settings.managegroup.allowtojoin": "Perlu Persetujuan",
          "square.group.settings.managegroup.allowtojoin.desc":
            "Persetujuan admin dibutuhkan untuk bergabung dengan OpenChat ini.",
          "square.group.settings.managegroup.allowtosearch":
            "Tampilkan OpenChat di Hasil Pencarian",
          "square.group.settings.managegroup.allowtosearch.desc":
            "Pengguna lain dapat mencari OpenChat ini berdasarkan kata kunci.",
          "square.group.settings.managegroup.autotag": "Tag Saran-Otomatis ",
          "square.group.settings.managegroup.autotag.decs":
            "Tag disarankan secara otomatis saat menulis pos.",
          "square.group.settings.managegroup.deletegroup": "Hapus OpenChat",
          "square.group.settings.managegroup.invite": "Undang Anggota Baru",
          "square.group.settings.managegroup.invite.desc":
            "Jika dinonaktifkan, anggota lain tidak dapat diundang. Selain itu, tautan dan kode QR yang sebelumnya dibagikan tidak akan berfungsi lagi.",
          "square.group.settings.managegroup.updateurl":
            "Update Tautan Undangan",
          "square.group.settings.managegroup.updateurl.desc":
            "Anda tidak dapat menggunakan tautan undangan saat ini setelah memperbaruinya.\nLanjutkan?",
          "square.group.settings.managemember": "Kelola Undangan",
          "square.group.settings.managemembers.alert.cannot.select":
            "Anda hanya dapat memilih hingga %n pengguna.",
          "square.group.settings.managemembers.allowrejoin": "Buka Blokir",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "Izinkan anggota ini untuk kembali bergabung ke OpenChat?",
          "square.group.settings.managemembers.blocktojoin":
            "Anggota yang Diblokir",
          "square.group.settings.managemembers.blocktojoin.alert":
            "Pengguna ini dapat bergabung kembali ke OpenChat jika blokirnya dibuka. Yakin ingin membuka blokir?",
          "square.group.settings.managemembers.manageadmin": "Kelola Admin",
          "square.group.settings.managemembers.manageadmin.added":
            "Ditambahkan ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "Batalkan izin ko-admin anggota ini?",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "Hapus",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "Ko-admin ",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "Alihkan Izin Admin",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "Alihkan izin admin ke anggota ini?\nAnda akan secara otomatis menjadi ko-admin. ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            'Berikan izin ko-admin kepada anggota yang hendak diajak mengelola Square bersama.\nAnda dapat menetapkan peran ko-admin di "Kelola Izin." ',
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "Jika Anda memindahkan izin admin ke ko-admin, Anda akan secara otomatis menjadi seorang ko-admin.",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "Berikan izin ko-admin",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            'Berikan izin ko-admin kepada anggota yang hendak diajak mengelola OpenChat bersama.\nAnda dapat menetapkan peran ko-admin di "Kelola Izin."',
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "Belum ada anggota",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "Anda belum menambahkan ko-admin.",
          "square.group.settings.managemembers.manageadmin.select": "Pilih",
          "square.group.settings.managemembers.manageauth": "Kelola Izin ",
          "square.group.settings.managemembers.manageauth.acceptrequest":
            "Setujui Permintaan Bergabung",
          "square.group.settings.managemembers.manageauth.admincoadmin":
            "Admin dan ko-admin",
          "square.group.settings.managemembers.manageauth.adminonly": "Admin",
          "square.group.settings.managemembers.manageauth.all":
            "Semua anggota ",
          "square.group.settings.managemembers.manageauth.createpost":
            "Tulis Note",
          "square.group.settings.managemembers.manageauth.createpublicchat":
            "Buat Sub-Obrolan",
          "square.group.settings.managemembers.manageauth.deletecontents":
            "Hapus Obrolan dan Pos",
          "square.group.settings.managemembers.manageauth.description":
            "Sesuaikan izin untuk menentukan siapa saja yang bisa melakukan perubahan di OpenChat.",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "Undang Anggota",
          "square.group.settings.managemembers.manageauth.kickout":
            "Hapus Anggota",
          "square.group.settings.managemembers.managepost": "Tulis Note",
          "square.group.settings.managemembers.request": "Permintaan Bergabung",
          "square.group.settings.managemembers.request.accept": "Setujui",
          "square.group.settings.managemembers.request.accept.alert.done":
            "Permintaan telah disetujui",
          "square.group.settings.managemembers.request.accept.alert.notall.done":
            "Permintaan disetujui. Perhatikan bahwa beberapa permintaan mungkin telah ditangani oleh admin atau ko-admin, atau ditolak jika kapasitas obrolan sudah penuh.",
          "square.group.settings.managemembers.request.acceptall":
            "Setujui Semua",
          "square.group.settings.managemembers.request.acceptall.alert":
            "Setujui semua permintaan bergabung?",
          "square.group.settings.managemembers.request.delete.alert":
            "Hapus permintaan bergabung ini?",
          "square.group.settings.managemembers.request.delete.alert.done":
            "Permintaan telah dihapus",
          "square.group.settings.managemembers.request.delete.alert.notall.done":
            "Permintaan telah dihapus.\n(Beberapa permintaan sudah ditangani admin lain.)",
          "square.group.settings.managemembers.request.noti.tooltip":
            "Pilih untuk menerima atau tidak menerima pemberitahuan ketika pengguna lain meminta untuk bergabung. ",
          "square.group.settings.managemembers.request.select100":
            "Pilih %1 terkini",
          "square.group.settings.managemembers.request.selectall":
            "Pilih semua",
          "square.group.settings.managemembers.request.zero":
            "Tidak ada permintaan bergabung",
          "square.group.settings.memberlist": "Lihat atau undang anggota",
          "square.group.settings.myprofile.title": "Profil Saya",
          "square.group.settings.nickname": "Nama Panggilan",
          "square.group.settings.noti.post": "Pemberitahuan pos",
          "square.group.settings.noti.post.dec":
            "Anda dapat menerima pemberitahuan pos.",
          "square.group.settings.policy": "Ketentuan Penggunaan OpenChat",
          "square.group.settings.profile.title": "",
          "square.group.settings.recieve.chat": "Merima undangan obrolan",
          "square.group.settings.recieve.friendsrequest":
            "Menerima permintaan berteman ",
          "square.group.settings.report": "Laporkan OpenChat",
          "square.group.settings.reportpage.agreeandsend": "Setuju dan Kirim",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "Mengakui dan Kirim",
          "square.group.settings.reportpage.desc":
            "Pilih alasan Anda melaporkan konten ini.",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "Mohon pertimbangkan untuk memberikan informasi mendetail untuk membantu kami menyelidiki kasus peniruan identitas dengan melanjutkan proses di Form Pengaduan kami dan mengisi poin yang diminta.",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "Lewati",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "Proses",
          "square.group.settings.reportpage.reason1": "Spam/Iklan",
          "square.group.settings.reportpage.reason2": "Pelecehan/Cari Jodoh",
          "square.group.settings.reportpage.reason3":
            "Perbuatan Tidak Menyenangkan",
          "square.group.settings.reportpage.reason4": "Lainnya",
          "square.group.settings.reportpage.reason5": "Konten di Luar Topik",
          "square.group.settings.reportpage.reason6": "Peniruan Identitas",
          "square.group.settings.reportpage.reason7": "Penipuan",
          "square.group.settings.reportpage.report.btn": "Laporkan",
          "square.group.settings.reportpage.reportdone":
            "Laporan telah dikirim!",
          "square.grouppopup.alert.alreadyjoin":
            "Anda sudah menjadi anggota OpenChat ini. Coba tutup layar dan masuk kembali.",
          "square.grouppopup.alert.blocked":
            "Anda tidak dapat bergabung dengan OpenChat ini. Coba lagi lain kali.",
          "square.grouppopup.alert.join.ing":
            "Menunggu persetujuan admin.\n Anda akan ditambahkan ke OpenChat begitu admin menyetujui permintaan Anda.",
          "square.grouppopup.alert.requestdone":
            "Permintaan untuk bergabung telah diajukan. Anda akan ditambahkan ke OpenChat begitu admin menyetujui permintaan Anda.",
          "square.grouppopup.button.join.ing": "Menunggu Persetujuan...",
          "square.grouppopup.chat.count.plurals.other": "%1 obrolan",
          "square.grouppopup.invite.tooltip":
            "Undang teman dengan LINE atau dengan membagikan tautan maupun kode QR undangan.",
          "square.grouppopup.invitefriend": "Undang Teman",
          "square.grouppopup.member.count.plurals.other": "%1 anggota",
          "square.grouppopup.post.count.plurals.other": "%1 Note",
          "square.grouppopup.qrcode": "Undang dengan Kode QR",
          "square.grouppopup.qrcode.desc":
            "Tampilkan Kode QR ke pengguna lain atau bagikan melalui pos.",
          "square.grouppopup.qrcode.save": "Simpan Kode QR",
          "square.grouppopup.qrcode.saved": "Kode QR telah disimpan. ",
          "square.grouppopup.sendrequest": "Minta Bergabung",
          "square.grouppopup.url": "Undang melalui tautan",
          "square.grouppopup.url.app": "Bagikan melalui aplikasi lain",
          "square.grouppopup.url.line": "Bagikan di LINE",
          "square.home.addfavorite": "Tambahkan ke Favorit",
          "square.home.cancelfavorite": "Hapus dari Favorit",
          "square.home.chat.section.invited": "Diundang ke obrolan",
          "square.home.favorite.tooltip":
            "Klik tombol ini untuk menambahkan OpenChat\nke daftar Favorit di Daftar Teman Anda.",
          "square.home.invite.copy.link": "Salin tautan",
          "square.home.invite.save.qr": "Simpan kode QR",
          "square.home.invite.share.link": "Bagi tautan",
          "square.home.invite.share.qr": "Bagikan kode QR",
          "square.home.menu.photo": "Foto",
          "square.home.menu.write": "Tulis",
          "square.home.nickname": "%1",
          "square.home.setting": "Pengaturan",
          "square.home.tab.chat": "Obrolan",
          "square.home.tab.post": "Pos",
          "square.home.toast.addfavorite": "Ditambahkan ke Favorit.",
          "square.home.toast.cancelfavorite": "Dihapus dari Favorit.",
          "square.invite.complete.other":
            "Anda mengirim pesan undangan ke %n anggota.",
          "square.invite.complete.plurals.other":
            "Anda mengirim pesan undangan ke %n anggota.",
          "square.invite.friend": "Undang teman",
          "square.invite.urlscheme.chatroom.chatname": 'Undang ke "%1"',
          "square.invitemember.confirm.donotshowagain": "Jangan tampilkan lagi",
          "square.invitemember.confirm.invite":
            "Pengguna yang diundang dapat melihat pesan sebelumnya.",
          "square.invitemember.desc":
            "Anda hanya dapat mengundang anggota Square ke dalam obrolan ini. Undang teman ke Square untuk mengobrol dengan mereka.",
          "square.invitemember.desc.urlscheme.chatroom":
            'Klik "Undang ke Obrolan" untuk mengundang pengguna yang belum bergabung ke OpenChat.',
          "square.invitemember.invitetogroup": "Undang ke OpenChat",
          "square.invitemember.invitetogroup.urlscheme.chatroom":
            "Undang ke obrolan",
          "square.invitemember.memberlist.title": '"%1" Anggota %n',
          "square.invitemember.title": "Pilih kontak yang ingin diundang",
          "square.invitetoopenchat.button.share": "Bagikan",
          "square.invitetoopenchat.desc.sharelinktoinvitemembers":
            "Bagikan tautan OpenChat untuk mengundang teman.",
          "square.join.precaution":
            'Selamat datang di "%1"! Harap tidak mengirimkan pesan yang melanggar Kebijakan Privasi OpenChat. Setiap pelanggaran akan menyebabkan pembatasan pada penggunaan layanan.',
          "square.join.question.guide": "Masukkan 5-50 karakter",
          "square.joincode.error": "Kode salah. Harap coba lagi.",
          "square.joincode.guide":
            "Bergabunglah ke obrolan dengan memasukkan kode yang ditentukan oleh admin.",
          "square.joincode.guide.description":
            "Masukkan kode yang terdiri dari 4-8 karakter alfanumerik yang diperlukan untuk bergabung ke OpenChat.",
          "square.joincode.input.guide": "Masukkan kode",
          "square.joincode.title": "Masukkan kode obrolan",
          "square.joinscreen.placeholder.enteranswerhere": "Masukkan jawaban",
          "square.keyboardmenu.button.qna": "Pesan T&J",
          "square.kickout.alert.done":
            'Anggota ini diblokir dari OpenChat. Anda dapat membuka blokir anggota tersebut melalui Kelola Anggota > "Anggota yang Diblokir" di pengaturan OpenChat.',
          "square.kickout.blockoption": "Diblokir dari OpenChat",
          "square.kickout.error.alert.admin":
            "Admin atau ko-admin tidak dapat diblokir.",
          "square.kickout.reason1": "Iklan atau spam",
          "square.kickout.reason2": "Ekspresi kasar atau cabul",
          "square.kickout.reason3": "Pelanggaran terhadap aturan lainnya",
          "square.leave.last.person.alert": "",
          "square.leftuser.kickout.btn": "Blokir",
          "square.main.create.block.alert":
            "Anda tidak dapat membuat Square selama periode tes beta. ",
          "square.main.create.guide":
            "Buat OpenChat dan\ntemukan banyak teman baru!",
          "square.main.mylist": "OpenChat Anda",
          "square.main.mylist.sortbyname": "Berdasarkan nama",
          "square.main.mylist.sortbyupdate": "Update Terakhir",
          "square.main.mylist.sortbyvisit": "Kunjungan Terakhir",
          "square.main.mylist.viewall": "Lihat semua",
          "square.main.mylist.zero":
            "Buat atau gabung ke OpenChat untuk mengobrol dengan pengguna berminat sama!",
          "square.main.search.block.alert":
            "Fitur pencarian tidak tersedia selama periode tes beta. ",
          "square.main.search.default.msg": "Nama OpenChat, Deskripsi",
          "square.managemembers.button.seewholeft": "Lihat yang Keluar",
          "square.managemembers.desc.seewholeft":
            "Lihat pengguna yang meninggalkan OpenChat dalam 24 jam terakhir.",
          "square.manageopenchat.desc.setjoincode":
            "Masukkan kode yang diperlukan untuk bergabung ke obrolan.",
          "square.members": "Anggota",
          "square.members.addmembers": "Undang Anggota",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "Anggota Diblokir dari Obrolan",
          "square.membershipsystemmessages.button.userjoinsthechat":
            "Anggota Gabung ke Obrolan",
          "square.membershipsystemmessages.button.userleavesthechat":
            "Anggota Keluar dari Obrolan",
          "square.membershipsystemmessages.desc.managesystemmessages":
            "Tampilkan atau sembunyikan pesan sistem yang ditampilkan di OpenChat ketika terdapat anggota yang bergabung, keluar, atau diblokir dari obrolan.",
          "square.menu.invite": "Undang",
          "square.mythreads.button.seemessages.other":
            "<![CDATA[Lihat\xa0<b><font color='%1'>%n</font></b>\xa0Pesan]]>",
          "square.noti.admin": 'Sekarang Anda adalah admin dari OpenChat "%1".',
          "square.noti.coadmin":
            'Sekarang Anda adalah ko-admin dari OpenChat "%1".',
          "square.noti.delete.chat": 'Obrolan "%1" telah dihapus oleh admin',
          "square.noti.deleted.coadmin":
            'Anda bukan lagi ko-admin dari OpenChat "%1".',
          "square.noti.deleted.gorup": 'Openchat "%1" sudah dihapus.',
          "square.noti.join.done": 'Anda bergabung dengan OpenChat "%1".',
          "square.noti.joinrequest": '%1 ingin bergabung dengan OpenChat "%2".',
          "square.noti.kickout": 'Anda diblokir dari OpenChat "%1".',
          "square.notification.desc.userjoinedopenchat":
            'Anggota baru bergabung dengan OpenChat "%1".',
          "square.notification.setting":
            "Pemberitahuan Note OpenChat\nAgar pemberitahuan dapat diterima melalui OpenChat untuk PC, Pemberitahuan pos OpenChat harus dinyalakan di perangkat seluler Anda.",
          "square.openchat.desc.adminaddedbottochat":
            "[0] menambahkan [1] ke obrolan.",
          "square.openchat.desc.adminremovedbotfromchat":
            "[0] rmengeluarkan [1] dari obrolan.",
          "square.openchat.desc.messageremovedforsharinginappropriatecontent":
            "Pesan %1 dihapus karena diduga melanggar kebijakan layanan OpenChat.",
          "square.openchat.desc.userbannedbysomeoneelse":
            "%2 diblokir dari OpenChat oleh %1.",
          "square.openchat.popup.dontshow":
            "Jangan tampilkan lagi pesan ini di OpenChat ini",
          "square.openchat.popupbutton.close": "Tutup",
          "square.openchat.popupbutton.deleteforall":
            "Semua Pengguna di Obrolan",
          "square.openchat.popupbutton.deleteforyou": "Hanya Saya",
          "square.openchat.popupbutton.ok": "OK",
          "square.openchat.popupbutton.seemore": "Selengkapnya",
          "square.openchat.popupdesc.deletemessagesfor":
            "Pilih jenis penghapusan yang ingin dilakukan.\nSeret mouse untuk memilih maks. 50 pesan yang ingin dihapus.",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            "Pesan baru dalam obrolan akan ditampilkan dengan ikon N di daftar obrolan.",
          "square.openchat.popupdesc.unsendmessage":
            "Pesan mungkin akan tetap ditampilkan pada layar obrolan beberapa anggota, tergantung dari versi LINE yang digunakan oleh anggota tersebut. Yakin ingin mengurungkan pengiriman pesan?",
          "square.openchat.popuptitle.deletemessages": "Hapus Pesan",
          "square.openchatannouncements.title.announcements": "Pemberitahuan",
          "square.openchatcharacterprofiles.button.cancel": "Batal",
          "square.openchatcharacterprofiles.button.save": "Simpan",
          "square.openchatcharacterprofiles.title.selectcharacter":
            "Pilih Karakter",
          "square.openchatentry.button.confirm": "OK",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[Jangan mengirim <font color=\\'#07B53B\\'>pesan bernada kasar</font> atau melakukan tindakan yang dapat <font color=\\'#07B53B\\'>menyinggung.</font>]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[Ikuti <font color=\\'#07B53B\\'>peraturan sederhana</font> ini untuk terus menikmati OpenChat.]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[OpenChat adalah ruang yang terbuka untuk semua. Perlakukan semua anggota dengan <font color=\\'#07B53B\\'>hormat.</font>]]>",
          "square.openchatentry.header.dontsendrudemessages":
            "2. Jaga kesopanan",
          "square.openchatentry.header.followopenchatrules":
            "3. Selamat bersenang-senang",
          "square.openchatentry.header.treatmemberswithrespect":
            "1. H-O-R-M-A-T-I!",
          "square.openchatentry.title.openchatuserules":
            "Petunjuk Penting Penggunaan OpenChat",
          "square.openchatinvite.desc.userinvitedtojoinchat":
            'Anda diundang untuk bergabung ke "%1".',
          "square.openchatinvite.desc.userinvitedtojoinsquare":
            'Anda diundang untuk bergabung ke "%1".',
          "square.openchatlist.desc.viewchatandaddtofavorites": "",
          "square.openchatlist.header.yourchats": "Obrolan Anda %1",
          "square.openchatliveinvite.popupdesc.usefeatureonmobileapp":
            "Fitur ini hanya tersedia di LINE untuk perangkat seluler.",
          "square.openchatmember.button.default": "Default",
          "square.openchatmember.button.oldjoin": "Terlama hingga Terbaru",
          "square.openchatmember.button.recentjoin": "Terbaru hingga Terlama",
          "square.openchatmember.desc.days.other": "%d hari lalu",
          "square.openchatmember.desc.hours.other": "%d jam lalu",
          "square.openchatmember.desc.justnow": "Baru Saja",
          "square.openchatmember.desc.lastvisited": "Kunjungan Terakhir",
          "square.openchatmember.desc.minutes.other": "%d menit lalu",
          "square.openchatmembers.desc.hundredthousandmembersth": "%1",
          "square.openchatmembers.desc.membersen": "%1",
          "square.openchatmembers.desc.memberskoja": "%1",
          "square.openchatmembers.desc.membersth": "%1",
          "square.openchatmembers.desc.tenthousandmemberskoja": "%1",
          "square.openchatmembers.desc.tenthousandmembersth": "%1",
          "square.openchatmembers.desc.thousandmembersen": "%1 RB",
          "square.openchatmembers.desc.thousandmembersth": "%1",
          "square.openchatmenu.button.hidemessagecount":
            'Sembunyikan Jumlah Pesan\nPesan baru dalam OpenChat akan ditanda oleh ikon "N".',
          "square.openchatmenu.button.showmessagecount":
            "Tampilkan Jumlah Pesan",
          "square.openchatmenu.desc.joindate": "Bergabung pada dd/mm/yyyy",
          "square.openchatmenu.desc.messagereplies":
            "Dapatkan pemberitahuan ketika ada pengguna yang membalas pesan Anda.",
          "square.openchatmenu.desc.onlyadmin":
            "Hanya admin dan ko-admin yang dapat melihat waktu bergabung atau kunjungan terakhir setiap anggota di OpenChat.",
          "square.openchatmenu.desc.visitdays.other": "Berkunjung %1 hari lalu",
          "square.openchatmenu.desc.visitmonths.other":
            "Berkunjung %1 bulan lalu",
          "square.openchatmenu.desc.visittoday": "Berkunjung hari ini",
          "square.openchatmenu.desc.visityester": "Berkunjung kemarin",
          "square.openchatmenu.toggle.messagereplies": "Balasan Pesan",
          "square.openchatmessage.desc.noreactions": "Belum ada tanggapan.",
          "square.openchatmessagefield.desc.readonlymode":
            "Obrolan ini diatur sebagai Hanya Baca.",
          "square.openchatnotes.desc.subchatmemberscanseenotes":
            "Anggota dari tiap sub-obrolan juga dapat melihat Note yang dibagikan di OpenChat.",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "OpenChat",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "Verifikasi nomor telepon saat menggunakan OpenChat demi keamanan layanan yang lebih baik untuk semua. Verifikasi no. telepon juga dapat dilakukan melalui aplikasi untuk ponsel.",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "Verifikasi Diperlukan",
          "square.openchatpopup.button.cancel": "Batal",
          "square.openchatpopup.button.confirm": "Konfirmasi",
          "square.openchatpopup.desc.changesetting":
            "Perubahan pengaturan juga akan diterapkan di OpenChat dan sub-obrolan lainnya. Lanjutkan?",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "OpenChat ini hanya terbuka bagi pengguna yang berusia 18 tahun ke atas.",
          "square.openchatprivacysettings.desc.opentoallages":
            "OpenChat ini terbuka untuk segala usia.",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "Masukkan kode yang diperlukan untuk bergabung ke OpenChat. Harap perhatikan bahwa jika pengaturan privasi OpenChat diubah sehingga mengharuskan pengguna memasukkan kode untuk bergabung, pengguna di bawah umur atau pengguna yang belum melakukan verifikasi usia tidak dapat bergabung.",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "Masukkan pertanyaan yang harus dijawab untuk bergabung ke obrolan. Admin atau ko-admin akan memeriksa pendaftar dan memberikan persetujuan untuk menjadi anggota. Harap perhatikan bahwa jika pengaturan privasi OpenChat diubah sehingga persetujuan admin diperlukan, pengguna di bawah umur atau pengguna yang belum melakukan verifikasi usia tidak dapat bergabung.",
          "square.openchatprofile.button.join": "Gabung dengan Profil Baru",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "OpenChat ini diatur pada negara/wilayah berbeda.",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "OpenChat ini diatur sebagai Hanya Baca",
          "square.openchatprofile.desc.tooltip":
            "Gabung ke OpenChat ini dengan nama panggilan dan foto profil baru.",
          "square.openchatsetting.desc.maxpeople":
            "Pengaturan ini tidak dapat diubah untuk MegaChat.",
          "square.openchatsetting.desc.mentionnoti":
            "Dapatkan pemberitahuan setiap kali Anda disebut dalam obrolan walaupun pemberitahuan obrolan dinonaktifkan.",
          "square.openchatsetting.desc.mentions": "Penyebutan",
          "square.openchatsetting.desc.onlyopen":
            "Opsi ini hanya tersedia saat OpenChat terbuka untuk semua umur.",
          "square.openchatsetting.desc.visibility":
            "Izin Pratinjau & Pencarian Pesan",
          "square.openchatsetting.desc.visibilityallowed": "Diizinkan",
          "square.openchatsetting.desc.visibilitynotallowed": "Tidak Diizinkan",
          "square.openchatsetting.desc.visiforco":
            "Pesan di obrolan ini dapat dicari. Opsi ini menyala karena opsi yang sama dinyalakan di pengaturan OpenChat dan hanya dapat diubah oleh Admin.",
          "square.openchatsettings.button.allowmessagesfrom":
            "Izinkan Pesan Dari",
          "square.openchatsettings.button.continue": "Lanjutkan",
          "square.openchatsettings.button.leavemainchat":
            "Tinggalkan Obrolan Utama",
          "square.openchatsettings.button.leavesubchat":
            "Tinggalkan Sub-Obrolan",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "Atur Pesan Sistem Keanggotaan",
          "square.openchatsettings.button.settoreadonlymode":
            "Atur Ke Hanya Baca",
          "square.openchatsettings.desc.addopenchatdescription":
            "Masukkan deskripsi",
          "square.openchatsettings.desc.coverphotosetasprofilephotoandbackground":
            "Foto sampul OpenChat ini juga diatur sebagai foto profil dan latar belakang.",
          "square.openchatsettings.desc.getnotifiedwhensomeonejoins":
            "Dapatkan pemberitahuan saat pengguna baru bergabung ke obrolan.",
          "square.openchatsettings.desc.readonlymodeformembers":
            "Hanya admin atau ko-admin yang diizinkan mengirim pesan ke obrolan.",
          "square.openchatsettings.header.chatsettings": "",
          "square.openchatsettings.header.details": "",
          "square.openchatsettings.header.editsubchatprofile":
            "Edit Profil Sub-Obrolan",
          "square.openchatsettings.header.openchatsettings": "",
          "square.openchatsettings.header.subchatsettings": "",
          "square.openchatsettings.placeholder.enterhashtags":
            "Masukkan deskripsi",
          "square.openchatsettings.popup.searchoff":
            "Semua pesan tidak akan dapat dicari lagi dan tidak akan ditampilkan di profil obrolan. Tetap lanjutkan?",
          "square.openchatsettings.popup.searchon":
            "Pesan baru akan dapat dicari dan ditampilkan di profil obrolan. Tetap lanjutkan?",
          "square.openchatsettings.popupdesc.selectacoadmin":
            "Pilih setidaknya 1 anggota sebagai ko-admin sebelum meninggalkan sub-obrolan.",
          "square.openchatsettings.toggle.newmembernotification":
            "Pemberitahuan Anggota Baru",
          "square.openchatsettingstatus.desc.readonlymodedisabled":
            "Semua Pengguna di Obrolan dapat mengirim pesan.",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "Pesan hanya dapat dikirim oleh admin.",
          "square.openchatsettingv.desc.allmessages": "Semua Pesan",
          "square.openchatsettingv.desc.dontallow": "Jangan izinkan",
          "square.openchatsettingv.desc.off":
            "Opsi ini hanya tersedia jika OpenChat diizinkan untuk ditampilkan dalam pencarian.",
          "square.openchatsettingv.desc.on":
            "Pesan dari OpenChat akan ditampilkan dalam profil dan hasil pencarian.",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "Undang teman ke OpenChat ini dan ajak mereka bergabung ke obrolan.",
          "square.openchatsharelink.title.sharelink":
            "Bagikan tautan OpenChat ini",
          "square.openchatsubchat.title.subchatname": "Nama Sub-Obrolan",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "Latar yang Anda pilih hanya akan terlihat oleh Anda.",
          "square.pdpa.policy.agree.btn": "Lanjutkan",
          "square.personaloption.alert.error.name":
            "Nama ini telah digunakan. Masukkan nama lain.",
          "square.personaloption.chat": "Menerima undangan obrolan",
          "square.personaloption.chat.desc":
            "Menerima pesan undangan dari anggota OpenChat",
          "square.personaloption.copy": "Tautan disalin. ",
          "square.personaloption.friendrequest": "Menerima permintaan berteman",
          "square.personaloption.friendrequest.desc":
            "Anggota dapat mengirimi Anda permintaan berteman.",
          "square.personaloption.greetingmessage": "Pesan untuk admin",
          "square.personaloption.greetingmessage.default":
            "Masukkan pesan untuk admin.",
          "square.personaloption.guide": "Masukkan nama panggilan",
          "square.personaloption.join.btn": "Bergabung",
          "square.personaloption.joincode.btn": "Bergabung dengan Kode",
          "square.personaloption.profile.title": "Profil OpenChat",
          "square.personaloption.profile.title.tooltip.desc":
            "Atur nama panggilan dan foto profil untuk OpenChat ini. Profil LINE tidak akan ditampilkan.",
          "square.personaloption.sendrequest.btn": "Permintaan Bergabung",
          "square.personaloption.welcomemsg": "Pesan Selamat Datang",
          "square.policy.agree.btn": "Setuju",
          "square.policy.title": "Syarat Penggunaan dan Kebijakan",
          "square.policy.viewall":
            "Baca versi lengkap Syarat Penggunaan OpenChat",
          "square.popup.button.grantpermission": "Tetapkan",
          "square.popup.button.setaspublic": "Lanjutkan",
          "square.post.announcement.announce": "Tandai",
          "square.post.announcement.delete": "Hapus Note",
          "square.post.announcement.delete.desc":
            "Note ini juga akan dihapus dari daftar Note penting. Hapus Note?",
          "square.post.announcement.guide":
            "Tandai sebagai Note penting agar tak terlewat.",
          "square.post.announcement.list.title": "Note Penting",
          "square.post.announcement.list.zero": "Belum ada Note.",
          "square.post.announcement.mark": "Tandai sebagai Note Penting",
          "square.post.announcement.mark.desc":
            "Pemberitahuan hanya akan dikirim ke anggota OpenChat untuk Note penting pertama di setiap harinya.",
          "square.post.announcement.postui": "Penting",
          "square.post.announcement.postui2": "<b>Note Penting</b>",
          "square.post.announcement.push": "Note penting baru ditandai di %1.",
          "square.post.announcement.remove": "Hilangkan tanda Note Penting",
          "square.post.announcement.seeall.plural.other": "%1 Note penting",
          "square.post.endpage.squarename": "%1",
          "square.post.error.deletedcomment": "Komentar ini telah dihapus.",
          "square.post.error.deletedjoined": "Pos telah dihapus. ",
          "square.post.error.deletedpost": "Note ini telah dihapus.",
          "square.post.error.write":
            "Opsi untuk menulis pos dimatikan oleh Admin. ",
          "square.post.hashtag.title": "%2 dalam %1",
          "square.post.join": "Bergabung",
          "square.post.joinguide":
            'Jangan lewatkan! Ayo bergabung dengan "%1" sekarang untuk berbagi obrolan dan pos dengan anggota yang lain.',
          "square.post.linktype.chatlist": "membagikan Note OpenChat.",
          "square.post.linktype.scroll": "membagikan Note OpenChat.",
          "square.post.linktype.title": "Tampilkan Note",
          "square.post.share.chatlist": "Berbagi dengan",
          "square.post.share.popup": "Berbagi Note OpenChat",
          "square.post.title": "Note",
          "square.post.write.guide":
            "Anggota lain dapat melihat Note Anda di OpenChat.",
          "square.post.write.guidecountryspecific":
            "Berbagi dengan anggota lain di OpenChat.",
          "square.post.write.hashtag":
            "Coba tambahkan tag pada posting Anda di Square. Tag mempermudah\nanggota grup untuk menemukan posting dan obrolan mengenai topik tertentu.",
          "square.post.zeropage.newpost": "Tulis",
          "square.post.zeropage.welcome":
            "Jadilah yang pertama kali menulis Note di OpenChat ini!",
          "square.postpopup.join":
            "Hanya anggota Square yang bisa menggunakan fitur ini. Bergabung dengan Square?",
          "square.privacy.setting.approval": "Perlu persetujuan admin",
          "square.privacy.setting.guide":
            "Hanya pengguna yang telah mendapatkan persetujuan dari Admin atau memasukkan kode dengan benar yang dapat bergabung ke OpenChat serta sub-obrolan di dalamnya jika ada.",
          "square.privacy.setting.joincode": "Perlu kode untuk bergabung",
          "square.privacy.setting.off": "Publik",
          "square.privacy.setting.off.guide":
            "Siapa pun dapat bergabung ke OpenChat, termasuk ke dalam sub-obrolannya jika ada.",
          "square.privacy.setting.title": "Pengaturan privasi",
          "square.privacy.turnoff.alert":
            "Siapa pun dapat bergabung ke obrolan ini. Lanjutkan?",
          "square.privcay.setting.off.guide":
            "Siapa pun dapat bergabung ke ruang ini dan obrolan di dalamnya.",
          "square.qrcode.save.failed": "Kode QR tidak dapat disimpan.",
          "square.readonlyopenchat.popupbutton.ok": "OK",
          "square.repairdata.button.repairdata": "Perbaiki",
          "square.repairdata.desc.syncrepairdata":
            "Lakukan sinkronisasi dan perbaiki data OpenChat.\nData yang diperbaiki: data OpenChat dan pengaturan terkait.",
          "square.repairdata.popupdesc.repairinginprogress":
            "Data sedang diperbaiki.\nJangan tutup layar ini saat sinkronisasi sedang berlangsung.",
          "square.repairdata.popupdesc.synccomplete":
            "Sinkronisasi selesai. Data OpenChat telah diperbaiki.",
          "square.repairdata.title.repairdata": "Perbaiki Data OpenChat",
          "square.report.page.reason01": "",
          "square.report.page.reason02": "",
          "square.report.page.reason03": "",
          "square.report.page.reason04": "",
          "square.report.policy.desc":
            "Laporan akan ditinjau dan diproses sesuai dengan kebijakan OpenChat.",
          "square.report.policy.desc01": "",
          "square.report.policy.desc02": "",
          "square.report.policy.message": "",
          "square.report.subTitle": "Laporkan Note ini.\n(Pembuat: %1)",
          "square.reportopenchat.desc.reportchatfromprofile":
            "Informasi terkait OpenChat yang dilaporkan (nama ruang obrolan, foto sampul, dan jumlah anggota) bersamaan dengan 100 pesan terakhir di ruang obrolan, dan informasi Anda sebagai pelapor serta informasi admin OpenChat yang dilaporkan (nama panggilan dan identitas internal akun).",
          "square.reportopenchat.desc.reportchatfromsettings":
            "Informasi terkait OpenChat yang dilaporkan (nama ruang obrolan, foto sampul, dan jumlah anggota) bersamaan dengan 50 pesan terakhir di ruang obrolan, dan informasi Anda sebagai pelapor serta informasi admin OpenChat yang dilaporkan (nama panggilan dan identitas internal akun).",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "Konten dari komentar yang dilaporkan (teks, gambar, atau emotikon), informasi terkait OpenChat (nama ruang obrolan, foto sampul, dan jumlah anggota), dan informasi Anda sebagai pelapor serta detail terkait pengguna yang dilaporkan (termasuk ikon profil, status keanggotaan, nama panggilan yang digunakan di ruang obrolan, serta informasi pengidentifikasi dari pengguna yang dilaporkan lainnya).",
          "square.reportopenchat.desc.reportopenchatmember":
            "Informasi terkait OpenChat yang dilaporkan (nama ruang obrolan, foto sampul, dan jumlah anggota) bersamaan dengan 100 pesan terakhir di ruang obrolan, dan informasi Anda sebagai pelapor serta informasi pengguna yang dilaporkan (termasuk ikon profil pengguna, nama panggilan dan identitas internal akun).",
          "square.reportopenchat.desc.reportopenchatmessage":
            "Informasi terkait OpenChat yang dilaporkan (nama ruang obrolan, foto sampul, dan jumlah anggota) bersamaan dengan 10 pesan terakhir di ruang obrolan, dan informasi Anda sebagai pelapor serta informasi pengguna yang dilaporkan (termasuk ikon profil pengguna, nama panggilan dan identitas internal akun).",
          "square.reportopenchat.desc.reportopenchatnote":
            "Konten dari Note yang dilaporkan (teks, gambar, video, atau emotikon), informasi terkait OpenChat (nama ruang obrolan, foto sampul, dan jumlah anggota), dan informasi Anda sebagai pelapor serta detail terkait pengguna yang dilaporkan (termasuk ikon profil, status keanggotaan, nama panggilan yang digunakan di ruang obrolan, serta informasi pengidentifikasi pengguna yang dilaporkan ).",
          "square.requesttojoin.button.submit": "Kirim",
          "square.set.joincode.input.guide": "Masukkan kode",
          "square.set.question.input.guide":
            "Masukkan pertanyaan yang wajib dijawab untuk bergabung ke obrolan. Admin dan ko-admin akan meninjau pemohon dan menyetujui anggota baru.",
          "square.setopenchatprofile.button.characterprofile":
            "Profil Karakter",
          "square.setting.auth.announcement": "Atur pemberitahuan",
          "square.setting.auth.message.post": "Hapus pesan dan note",
          "square.settings.deleteaccount.desc":
            "Izin admin OpenChat akan dialihkan ke anggota lain secara otomatis.",
          "square.settings.managesquare.defaultchatroom.desc":
            "Obrolan bawaan tidak dapat dihapus.",
          "square.settings.managesquare.defaultchatroom.title":
            'Ruang obrolan bawaan untuk Square "%1"',
          "square.settings.managesquare.privatechat": "Izinkan obrolan pribadi",
          "square.settings.managesquare.privatechat.desc":
            "Anggota dapat membuat obrolan atau pesan pribadi antara satu sama lain secara langsung.",
          "square.settings.memberlist.members.subtitle": "Anggota",
          "square.settings.members": "Anggota (%n)",
          "square.settings.myprofile.leavesquare": "Tinggalkan OpenChat",
          "square.sub.name.title": "Nama Sub-Obrolan",
          "square.thread.desc.nochat":
            "Pesan di dalam Utas tidak akan dikirim ke Ruang Obrolan.",
          "square.thread.desc.startofthread": "Lihat pesan di obrolan",
          "square.thread.placeholder.replytothread": "Balas ke Utas",
          "square.thread.title.thread": "Utas",
          "square.thread.toast.nolongerwatching": "Dihapus dari Utas Favorit.",
          "square.thread.toast.nowwatching": "Ditambahkan ke Utas Favorit.",
          "square.timeline.button.tooltip":
            "Mulai obrolan tentang berbagai hal menarik \ndengan orang baru!",
          "square.tooltip.chatroom.settings.changename":
            "Atur nama dan profil kustom untuk ruang obrolan bawaan.",
          "square.unsupported.version.message":
            "Fungsi ini tidak tersedia di LINE versi ini. \nSilakan update aplikasi LINE Anda ke versi terbaru.",
          "square.urlscheme.alert.linkjoin.function.off":
            "Tidak dapat bergabung melalui tautan undangan.\nMinta anggota OpenChat untuk mengundang Anda.",
          "square.urlscheme.desc2":
            "Anda hanya dapat bergabung dengan Square ini dari perangkat iOS atau Android. ",
          "square.urlscheme.error.notexist": "OpenChat ini tidak ada.",
          "square.urlscheme.invite.msg":
            "Anda diundang untuk bergabung ke OpenChat.",
          "square.urlscheme.package":
            "[%1] Anda telah diundang untuk bergabung ke OpenChat. \n%3 \n%2",
          "square.urlscheme.package.chatroom":
            'Anda telah diundang untuk bergabung ke "%1". Kunjungi tautan di bawah ini untuk bergabung ke OpenChat.\n%2',
          "square.urlscheme.package.chatroom2": "",
          "square.user.admin": "Admin",
          "square.user.coadmin": "Ko-admin",
          "square.userpopup.blockinvite": "Blokir undangan",
          "square.userpopup.error.alert.notmember":
            "Bukan lagi anggota OpenChat ini.",
          "square.userpopup.friendsinfo.btn": "Info ",
          "square.userpopup.friendsrequest.btn": "Permintaan Berteman",
          "square.userpopup.kickout.ban.btn": "Blokir",
          "square.userpopup.kickout.btn": "Blokir",
          "square.userpopup.kickout.cancel.btn": "Batal",
          "square.userpopup.post.count.btn": "Pos",
          "square.yourthreads.title.yourthreads": "Utas Saya",
          "sticion.msg.desc.expired": "Emotikon ini telah kedaluwarsa.",
          "sticker.btn.deleteThisSticker": "Hapus Set Stiker",
          "sticker.btn.openWebStore": "Toko Stiker",
          "sticker.customsticker.btn.edit": "Edit Teks",
          "sticker.customsticker.cancelalert.desc":
            "Teks yang dimasukkan tidak akan disimpan jika Anda meninggalkan halaman ini. Yakin ingin meninggalkan halaman ini?",
          "sticker.customsticker.discard.alert": "Tinggalkan",
          "sticker.customsticker.edit.overflow":
            "Teks yang dimasukkan terlalu panjang.",
          "sticker.customsticker.error.updatename.desc":
            "Teks tidak dapat diupdate.",
          "sticker.customsticker.invalidwordupdate.desc":
            "Stiker ini tidak dapat digunakan karena terdapat kata yang tidak valid pada teks stiker. Edit teks agar tetap bisa menggunakan stiker ini.",
          "sticker.customsticker.sync.alert":
            "Teks stiker yang dibuat melalui PC mungkin tidak dapat langsung ditampilkan di ponsel. Update stiker di ponsel dengan mengunduh stiker melalui Pengaturan > Stiker > Stiker Saya.",
          "sticker.customsticker.tooltip": "Buat teks orisinal di stiker!",
          "sticker.download.btn": "Unduh",
          "sticker.download.fail": "Gagal mengunduh.\nSilakan coba lagi.",
          "sticker.downloadAll.confirm": "Unduh semua stiker?",
          "sticker.downloadAll.desc": "Unduh semua stiker sekaligus.",
          "sticker.downloadAll.downloading": "Mengunduh stiker...",
          "sticker.downloading.desc":
            "Sedang mengunduh stiker.\nMohon tunggu sebentar.",
          "sticker.edit.hint.default": 'Masukkan teks untuk "****"',
          "sticker.edit.invalidword.desc": "Terdapat kata yang tidak valid.",
          "sticker.error.downloadlfailed.desc": "Stiker tidak dapat diunduh",
          "sticker.expired.desc":
            "%1 telah kedaluwarsa. Stiker ini akan dihapus.",
          "sticker.msg.desc.delete": "Hapus",
          "sticker.msg.desc.expired": "Masa berlaku stiker ini telah berakhir.",
          "sticker.msgsticker.button.back": "Kembali",
          "sticker.msgsticker.button.cancel": "Batal",
          "sticker.msgsticker.button.edit": "Edit Teks",
          "sticker.msgsticker.button.save": "Simpan",
          "sticker.msgsticker.desc.howtoedit":
            "Klik stiker untuk mengedit teks dalam stiker.",
          "sticker.msgsticker.desc.prompt":
            "Pesan yang dimasukkan akan ditampilkan pada stiker yang akan dikirim.",
          "sticker.msgsticker.validation.errorrefresh":
            "Pesan tidak dapat ditampilkan. Klik stiker untuk memuat ulang gambar.",
          "sticker.msgsticker.validation.toolong":
            "Buat pesan yang lebih pendek",
          "sticker.nearlyExpired.desc.other":
            "Stiker ini akan kedaluwarsa dalam %n hari.",
          "sticker.recommendedSticker.label": "Rekomendasi Stiker",
          "sticker.search.hint": "Cari",
          "sticker.search.nosearchresult": "Tidak ada hasil.",
          "sticker.stickerspremium.deletsticker.popup":
            "Hapus stiker ini dari koleksi Premium?",
          "sticker.stickerspremium.dropped.desc":
            "Silakan beli stiker ini untuk tetap dapat menggunakannya.",
          "sticker.stickerspremium.dropped.title":
            "Stiker ini sudah tidak tersedia lagi di Stiker LINE Premium",
          "sticker.stickerspremium.emojidropped.desc":
            "Silakan beli emotikon ini untuk tetap dapat menyimpannya.",
          "sticker.stickerspremium.emojidropped.title":
            "Emotikon ini sudah tidak tersedia lagi di\nStiker LINE Premium",
          "sticker.stickerspremium.emojiexpired.desc":
            "Untuk tetap dapat menggunakan emotikon ini, silakan perbarui langganan paket Plus Stiker LINE Premium Anda.",
          "sticker.stickerspremium.expired.desc":
            "Agar tetap dapat menggunakan stiker ini, silakan perbarui keanggotaan Stiker LINE Premium Anda.",
          "sticker.stickerspremium.expired.title":
            "Keanggotaan Premium Anda telah kedaluwarsa",
          "sticker.unpurchased.purchase.btn": "Beli",
          "sticker.unpurchased.recommended.title": "Direkomendasikan",
          "sticon.downloadAll.desc": "Unduh semua emotikon sekaligus.",
          "sticon.downloadAll.downloading": "Mengunduh emotikon\u2026",
          "sticon.downloading.desc":
            "Emotikon sedang diunduh.\nMohon tunggu sebentar.",
          "sticon.expired.desc":
            "%1 telah kedaluwarsa. Emotikon ini akan dihapus.",
          "sticon.nearlyExpired.desc.other":
            "Emotikon ini akan kedaluwarsa dalam %n hari.",
          "sticon.recommendedEmoji.label": "Rekomendasi Emotikon",
          "sticon.stickerspremium.deletemoji.popup":
            "Hapus emotikon ini dari koleksi Premium?",
          "subprofile.common.button.cancel": "Batal",
          "subprofile.common.popupbutton.continue": "Lanjutkan",
          "subprofile.common.toast.settingupdated":
            "Pengaturan profil telah diupdate.",
          "subprofile.editfriends.button.done": "Selesai",
          "subprofile.editfriends.popupdesc.dontshowagain":
            "Jangan tampilkan lagi",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "Sebagian teman tidak dapat dipilih untuk profil ini. Silakan coba lagi.",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "Sebagian teman tidak dapat dipilih untuk profil ini.",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "Batas jumlah teman yang dapat diatur untuk profil telah tercapai.",
          "subprofile.editfriends.popuptitle.networkerror":
            "Terjadi eror pada jaringan. Periksa koneksi Anda dan coba lagi.",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "Fitur ini hanya tersedia di aplikasi LINE untuk ponsel cerdas.",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "Profil yang berbeda akan ditampilkan ke teman ini. Lanjutkan?",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "Teman yang dipilih akan melihat profil ini. Lanjutkan?",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "Terjadi eror sementara. Silakan coba lagi nanti.",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "Daftar teman tidak dapat dimuat. Silakan coba lagi.",
          "subprofile.editfriends.subtitle.addfriend": "Tambah Teman",
          "subprofile.editfriends.title.onlyonmobileapp":
            "Subprofil dapat dibuat atau dihapus di LINE untuk perangkat seluler.",
          "subprofile.editfriends.title.selectprofile": "Pilih Profil",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "Profil diupdate untuk %n teman.",
          "subprofile.friendsprofile.title.setyourprofile":
            "Atur Tampilan Profil",
          "subprofile.friendsprofile.tooltip.subprofile":
            "Atur profil untuk ditampilkan ke teman ini.",
          "subprofile.groupchatmenu.group.profile": "",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "Ubah profil yang ingin ditampilkan kepada teman di obrolan grup.",
          "subprofile.groupprofile.tooltip.subprofile":
            "Atur profil untuk digunakan di grup ini.",
          "subprofile.groupsettings.button.edit": "Edit",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "%n Profil Ditampilkan",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "Subprofil dapat diatur setelah dibuat di LINE untuk perangkat seluler.",
          "subprofile.selectfriends.button.deselectall": "Batal Pilih",
          "subprofile.selectfriends.button.selectall": "Pilih Semua",
          "subprofile.selectfriends.button.selectprofile": "Pilih Profil",
          "subprofile.selectfriends.desc.selectfriends":
            "Subprofil hanya dapat diatur untuk teman. Anggota grup yang bukan teman akan melihat profil utama.",
          "subprofile.settings.button.edit": "Profil Saya",
          "subprofile.settings.desc.aboutsubprofile":
            "Subprofil yang sudah ada hanya dapat diedit di LINE untuk PC. Gunakan LINE untuk perangkat seluler untuk membuat atau menghapus subprofil.",
          "subprofile.settings.desc.zerocase":
            "Belum ada teman yang diatur. Klik Tambah Teman dan pilih teman yang akan melihat profil ini.",
          "subprofile.settings.title.app": "Aplikasi",
          "subprofile.yourprofile.bannerdesc.cantsetsubprofile": "",
          "subprofile.yourprofile.bannerdesc.shownfor30days": "",
          "subprofile.yourprofile.bannertitle.expired": "",
          "subprofile.yourprofile.bannertitle.temporaryerror": "",
          "subprofile.yourprofile.button.editfriends": "Edit Teman",
          "subprofile.yourprofile.desc.amountoffriend.other":
            "%n teman melihat profil ini",
          "subprofile.yourprofile.subtitle.mainprofile": "Profil Utama",
          "subprofile.yourprofile.subtitle.subprofile": "Subprofil",
          "subprofile.yourprofile.title.editfriends": "Edit Teman",
          "subprofile.yourprofile.title.yourprofile": "Profil Saya",
          "talk.addFriend.recommend.reason.group": "Anggota Grup yang Sama",
          "talk.addFriend.recommend.reason.group.name": 'Anggota Grup "%1"',
          "talk.addFriend.recommend.reason.lineid":
            "Anda ditambahkan sebagai teman dengan ID LINE.",
          "talk.addFriend.recommend.reason.phone":
            "Anda ditambahkan sebagai teman dengan no. telepon.",
          "talk.addFriend.recommend.reason.qrcode":
            "Anda ditambahkan sebagai teman dengan kode QR.",
          "talk.btn.addbuddy.title": "Tambah",
          "talk.btn.cancel.title": "Batal",
          "talk.btn.join.title": "Bergabung",
          "talk.chatlist.chatheader.title": "Obrolan",
          "talk.chatlist.floating.button.chat": "Obrolan",
          "talk.chatlist.floating.button.chatandgroup": "Grup/Obrolan",
          "talk.chatlist.floating.button.group": "Grup",
          "talk.chatlist.floating.button.square": "OpenChat",
          "talk.chatlist.floating.createChat": "Buat Obrolan Baru",
          "talk.chatlist.floating.menu.chatandgroup": "Buat Obrolan atau Grup",
          "talk.chatlist.groupheader.title": "Grup dengan anggota bernama %1",
          "talk.chatlist.menu.hide": "Sembunyikan",
          "talk.chatlist.menu.pin.off": "Cabut Pin dari Obrolan",
          "talk.chatlist.menu.pin.on": "Pasang Pin ke Obrolan",
          "talk.chatlist.menu.readAll": "Jadikan Semua Telah Dibaca",
          "talk.chatlist.msgsSearchCount.few": "%n pesan",
          "talk.chatlist.msgsSearchCount.many": "%n pesan",
          "talk.chatlist.msgsSearchCount.one": "%n pesan",
          "talk.chatlist.msgsSearchCount.other": "%n pesan",
          "talk.chatlist.msgsSearchCount.plurals.other": "%n pesan",
          "talk.chatlist.msgsSearchCount.two": "%n pesan",
          "talk.chatlist.msgsSearchCount.zero": "%n pesan",
          "talk.chatlist.msgsSearchHeader.title": "Pesan",
          "talk.chatlist.search.placeholder": "Cari Obrolan",
          "talk.label.addbuddy.title": "Tambah",
          "talk.label.alreadycontact.title":
            "Pengguna ini sudah menjadi teman Anda.",
          "talk.label.blocked.buddy.title":
            "Akun ini telah diblokir. Silakan cek Pengaturan untuk membuka blokir.",
          "talk.label.buddies.title": "Teman",
          "talk.label.buddylist.title": "Teman",
          "talk.label.chatlist.title": "Obrolan",
          "talk.label.empty.description.1":
            "Tambah teman menggunakan pencarian ID,\natau dari daftar Rekomendasi Teman.",
          "talk.label.empty.description.3":
            "Anda dapat menambah teman dengan mencari\nID mereka di kotak pencarian.",
          "talk.label.empty.title.1": "Ayo tambah beberapa teman!",
          "talk.label.empty.title.2": "Ayo mulai mengobrol!",
          "talk.label.empty.title.3": "Temukan teman Anda!",
          "talk.label.failed.title": "Daftar Teman tidak dapat ditampilkan.",
          "talk.label.failedsearch.rejected.title":
            "Batas maksimum pencarian telah terlampaui.\nPencarian ID/No.Telepon tidak tersedia sementara waktu.",
          "talk.label.failedsearch.title": "Pengguna tidak ditemukan.\n",
          "talk.label.favorite.title": "Favorit",
          "talk.label.groups.title": "Grup",
          "talk.label.invited.title": "Undangan Grup",
          "talk.label.newfriend.title": "Teman baru",
          "talk.label.nosearchresult.title": "Tidak ada hasil.",
          "talk.label.placehodler.title": "Cari dengan Nama",
          "talk.label.recentFriends.title": "Obrolan Terkini",
          "talk.label.recommendbuddyplacehodler.title": "Cari dengan ID",
          "talk.label.recommended.addFriend": "Tambah sebagai Teman",
          "talk.label.recommended.officialAccount.title":
            "Rekomendasi Akun Resmi",
          "talk.label.recommended.title": "Rekomendasi Teman",
          "talk.label.search.friends": "Cari teman",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "Pengguna tidak ditemukan.",
          "talk.label.search.friends.phoneNumber.error":
            "Nomor telepon tidak ada\natau tidak dapat dicari.",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "Pencarian pengguna lain menggunakan nomor ponsel hanya dapat dilakukan setelah nomor ponsel Anda didaftarkan ke LINE.\nBuka Pengaturan > Profil pada LINE untuk ponsel cerdas untuk mendaftarkan nomor ponsel Anda.",
          "talk.label.square.title": "OpenChat",
          "talk.label.thatisyou.title":
            "Anda tidak dapat menambahkan diri sendiri sebagai teman.",
          "talk.menu.aboutgroup": "Edit Grup",
          "talk.menu.addfavorite": "Tambahkan ke Favorit",
          "talk.menu.addgroup": "Buat Grup",
          "talk.menu.block": "Blokir",
          "talk.menu.call": "Panggil",
          "talk.menu.call.video": "Panggilan video",
          "talk.menu.call.voice": "Panggilan Suara",
          "talk.menu.editname": "Ubah Nama Tampilan",
          "talk.menu.exit": "Akhiri",
          "talk.menu.group.call": "Mulai panggilan",
          "talk.menu.help": "Bantuan",
          "talk.menu.hide": "Sembunyikan",
          "talk.menu.leavegroup": "Tinggalkan Grup",
          "talk.menu.logout": "Logout",
          "talk.menu.myProfile": "Profil",
          "talk.menu.notes": "Note",
          "talk.menu.posts": "Pos",
          "talk.menu.rejectbuddy": "Blokir",
          "talk.menu.rejectgroup": "Tolak",
          "talk.menu.removeFavorite": "Hapus dari Favorit",
          "talk.menu.removetalkitem": "Hapus",
          "talk.menu.sendContact": "Bagikan Kontak",
          "talk.menu.setting": "Pengaturan",
          "talk.menu.showProfile": "Profil",
          "talk.menu.starttalk": "Mulai Obrolan",
          "talk.menu.talk": "Obrolan",
          "talk.menu.talkbuddy": "Obrolan",
          "talk.menu.talkgroup": "Obrolan",
          "talk.menu.voip": "Panggilan Suara",
          "talk.msg.addbuddy.failed": "Gagal menambah teman.",
          "talk.msg.addrecommended.failed": "Gagal menambah teman.",
          "talk.msg.block.failed": "Teman tidak dapat diblokir.",
          "talk.msg.blockrecommended.failed": "Teman tidak dapat diblokir.",
          "talk.msg.del.1.n":
            "Jika ruang obrolan ini dihapus dari daftar obrolan, Anda tidak dapat lagi melihat riwayat obrolan atau tergabung di dalam ruang obrolan ini. Yakin ingin menghapus ruang obrolan ini?",
          "talk.msg.del.room":
            "Jika ruang obrolan ini dihapus dari daftar obrolan, riwayat obrolan yang ada tidak akan dapat dipulihkan. Yakin ingin menghapus ruang obrolan ini?",
          "talk.msg.favorite.failed": "Gagal menambahkan ke Favorit.",
          "talk.msg.favorite.overflow.failed":
            "Anda dapat menambahkan hingga 100 pengguna ke Favorit.",
          "talk.msg.hide.failed": "Akun tidak dapat disembunyikan.",
          "talk.msg.joininvitedgroup.failed": "Gagal bergabung dengan grup.",
          "talk.msg.leavegroup.failed": "Gagal meninggalkan grup.",
          "talk.msg.no.room": "Ruang obrolan ini telah dihapus.",
          "talk.msg.rejectinvitedgroup.failed": "Gagal menolak undangan.",
          "talk.network.unreachable": "Koneksi jaringan tidak stabil.",
          "talk.search.hint": "Cari pesan, nama",
          "talk.search.label.chatMember": "Cari nama",
          "talk.search.label.displayName": "Cari dengan Nama",
          "talk.search.label.member.all": "Members (%1)",
          "talk.search.label.member.selected": "%1 anggota dipilih",
          "talk.search.label.reSearch": "Cari dalam hasil ini",
          "talk.search.label.reSearch.noResult": "Tidak dapat mencari lagi ",
          "talk.search.label.textMessage": "Cari pesan",
          "talk.tooltip.delete": "Hapus",
          "theme.mode.guide.dark.desc":
            "Mode Tampilan Anda telah diatur ke Mode Gelap. Buka Pengaturan > Pengaturan Dasar > Mode Tampilan untuk opsi lainnya.",
          "theme.mode.guide.desc":
            "Mode tampilan diterapkan secara otomatis sesuai dengan pengaturan sistem. Buka Pengaturan > Pengaturan Dasar untuk mengganti mode tampilan.",
          "theme.mode.guide.light.desc":
            "Anda kini dapat mengatur Mode Tampilan di LINE ke Mode Gelap. Ubah Mode Tampilan melalui Pengaturan > Pengaturan Dasar > Mode Tampilan.",
          "theme.mode.guide.title": "Coba Mode Tampilan baru!",
          "timeline.alert.attach": "Anda dapat menambahkan hingga 1 lampiran.",
          "timeline.alert.attach.unavailable":
            "Lampiran Anda berisi berkas yang tidak dapat ditambahkan ke pos. ",
          "timeline.alert.attachphoto": "Anda dapat melampirkan hingga 9 foto.",
          "timeline.alert.commentmaxcount":
            "Komentar harus kurang dari 1.000 karakter.",
          "timeline.alert.confirm.close":
            "Note belum selesai. Keluar tanpa menyimpan?",
          "timeline.alert.confirm.deletecomment":
            "Ingin menghapus komentar ini?",
          "timeline.alert.confirm.deletepost":
            "Jika Anda menghapus ini, komentar juga akan ikut terhapus.\nLanjutkan?",
          "timeline.alert.confirm.deletethumb": "Ingin menghapus foto?",
          "timeline.alert.confirm.replacepost":
            "Anda sedang membuat pos saat ini. Ingin membuangnya dan membuat yang baru?",
          "timeline.alert.deletedpost": "Pos ini telah dihapus.",
          "timeline.alert.discard": "Buang",
          "timeline.alert.error.group.delete":
            "The selected Public List has been deleted.\nPlease select again.",
          "timeline.alert.error.group.rights":
            "Anda tidak memiliki izin untuk grup yang dipilih.\nSilakan pilih lagi.",
          "timeline.alert.fileMaxcount":
            "Anda dapat melampirkan maksimum %n foto atau video.",
          "timeline.alert.fileMaxcount.plurals.other":
            "Anda dapat melampirkan hingga maksimum %n foto atau video.",
          "timeline.alert.invalidcoverimage": "Berkas ini tidak dapat dikirim.",
          "timeline.alert.mediaMaxcount":
            "Anda dapat melampirkan hingga 20 stiker, foto, atau video.",
          "timeline.alert.official.addfriend":
            "Jika Anda menambahkan akun resmi ini sebagai teman,\nAnda dapat meninggalkan stiker dan komentar.\nIngin menambahkan akun ini? ",
          "timeline.alert.official.addfriend.share":
            "Jika menambahkan akun resmi ini sebagai teman, Anda dapat membagikan posnya ke teman. Tambahkan akun ini?",
          "timeline.alert.official.unblockfriend":
            "Akun resmi ini diblokir.Buka blokir akun ini agar Anda dapat meninggalkan stiker dan komentar.Yakin ingin membuka blokir akun ini?",
          "timeline.alert.official.unblockfriend.share":
            "Akun resmi ini diblokir. Jika blokir dari akun ini dibuka, Anda dapat membagikan pos dari akun ini. Yakin ingin membuka blokir akun ini?",
          "timeline.alert.photoMaxsize":
            "Anda dapat melampirkan foto\nberukuran hingga 20 MB.",
          "timeline.alert.photolimit": "Hingga 20MB per foto",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount":
            "Anda dapat melampirkan hingga maksimum %1 foto.",
          "timeline.alert.stickerMaxcount":
            "Anda dapat melampirkan hingga maksimum %n stiker.",
          "timeline.alert.stickerMaxcount.plurals.other":
            "Anda dapat melampirkan hingga maksimum %n stiker.",
          "timeline.alert.stickerUploadRule":
            "Hanya dapat melampirkan satu stiker suara atau stiker animasi per pos. Stiker tersebut juga tidak dapat dilampirkan bersama stiker biasa.",
          "timeline.alert.textmaxcount": "Maksimum jumlah karakter 10.000.",
          "timeline.alert.unblockfriend":
            "Akun ini diblokir. Jika blokir dari akun ini dibuka, maka Anda dapat menyukai serta mengomentari pos akun ini. Yakin ingin membuka blokir akun?",
          "timeline.alert.unblockfriend.share":
            "Akun ini diblokir. Jika blokir akun dibuka, Anda dapat membagikan pos dari akun ini. Yakin ingin membuka blokir akun ini?",
          "timeline.alert.urlUploadRule": "Anda hanya dapat melampirkan 1 URL.",
          "timeline.alert.videoMaxLength":
            "Anda dapat melampirkan berkas video\nberdurasi hingga 5 menit.",
          "timeline.alert.videoMaxsize":
            "Anda dapat melampirkan berkas video\nberukuran hingga 200 MB.",
          "timeline.alert.videolength":
            "Video berdurasi lebih dari 5 menit tidak dapat dilampirkan.",
          "timeline.alert.videolimit": "Hingga 200MB atau 5 menit per video.",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "Video berukuran lebih dari 200MB tidak dapat dilampirkan.\n",
          "timeline.alert.waitcommentdone": "Silakan coba lagi nanti.",
          "timeline.already.remove.comment": "Komentar ini telah dihapus.",
          "timeline.attachlink.delete": "Hapus",
          "timeline.attachlink.hint": "Silakan masukkan URL tautan.",
          "timeline.attachlink.title": "Masukkan Tautan",
          "timeline.comment.approval":
            "Komentar akan ditampilkan setelah disetujui oleh admin Beranda Resmi.",
          "timeline.comment.blinddbyadmin":
            "Komentar ini telah dihapus oleh admin layanan.",
          "timeline.comment.delete": "Hapus",
          "timeline.comment.hint": "Masukkan komentar.",
          "timeline.comment.like": "Suka",
          "timeline.comment.like.cancel": "Tidak Suka",
          "timeline.comment.loadprevious": "Muat Komentar Terdahulu",
          "timeline.comment.photo.retry":
            "Gagal memuat foto.\nSilakan coba lagi.",
          "timeline.comment.reply": "Balas",
          "timeline.comment.stickerorphoto":
            "Tidak dapat mencantumkan lebih dari satu stiker atau foto di komentar.",
          "timeline.comment.write": "Posting",
          "timeline.common.cancel": "Batal",
          "timeline.common.ok": "OK",
          "timeline.common.share": "Bagikan",
          "timeline.date.beforeHour.plurals.few": "%n jam lalu",
          "timeline.date.beforeHour.plurals.many": "%n jam lalu",
          "timeline.date.beforeHour.plurals.one": "%n jam lalu",
          "timeline.date.beforeHour.plurals.other": "%n jam lalu",
          "timeline.date.beforeHour.plurals.two": "%n jam lalu",
          "timeline.date.beforeHour.plurals.zero": "%n jam lalu",
          "timeline.date.beforeMinute.plurals.few": "%n menit lalu",
          "timeline.date.beforeMinute.plurals.many": "%n menit lalu",
          "timeline.date.beforeMinute.plurals.one": "%n menit lalu",
          "timeline.date.beforeMinute.plurals.other": "%n menit lalu",
          "timeline.date.beforeMinute.plurals.two": "%n menit lalu",
          "timeline.date.beforeMinute.plurals.zero": "%n menit lalu",
          "timeline.date.beforeYesterday": "2 hari lalu %1",
          "timeline.date.justNow": "Baru saja",
          "timeline.date.yesterday": "Kemarin %1",
          "timeline.emptypost.networkerror":
            "Permintaan Anda belum diproses karena eror koneksi jaringan.\nSilakan coba lagi.",
          "timeline.emptypost.other": "Belum ada pos.",
          "timeline.emptypost.unsupported":
            "Akun resmi ini hanya mengirimkan pesan obrolan.",
          "timeline.error.and.retry":
            "Permintaan tidak dapat diproses akibat eror sementara.\nSilakan coba lagi.",
          "timeline.error.attach.popupSticker":
            "Stiker ini akan ditambahkan sebagai stiker diam tanpa animasi dan suara.",
          "timeline.error.cannot.access.file":
            "Beberapa foto tidak dapat diunggah karena\nfoto asli dihapus dari PC \natau batas unggah maksimum (20 MB) telah tercapai.",
          "timeline.error.list.load.retry":
            "Maaf, tidak dapat memuat info.\nSilakan coba lagi.",
          "timeline.footer.comment": "Komentar",
          "timeline.footer.like": "Suka",
          "timeline.groupPanel.startgroup": "Buat Grup!",
          "timeline.groupPanel.startgroup.desc":
            "Anda dapat menulis note dan membuat album.",
          "timeline.label.nosearchresult.title": "Tidak ada hasil.",
          "timeline.like.count.other": "%1 suka",
          "timeline.loading.examine.time": "Jadwal Pemeliharaan",
          "timeline.loading.examine.timeline": "%1 sedang dalam pemeliharaan.",
          "timeline.loading.neednewversion":
            "Anda dapat melihat ini di LINE versi terbaru.",
          "timeline.loading.networkerror":
            "Permintaan Anda belum diproses karena eror koneksi jaringan.\nSilakan coba lagi.",
          "timeline.loading.retry": "Muat Ulang",
          "timeline.menu.sharetotalk": "Bagikan di Obrolan",
          "timeline.mergedposts.detail": "Detail",
          "timeline.no": "Tidak",
          "timeline.note.popupdesc.sharenote":
            "Bagikan Note ini di ruang obrolan?",
          "timeline.noti.content.NC_1001_1": "%1 menambahkan note baru.",
          "timeline.noti.content.NC_1001_2": "%1 dan %2 menambahkan note baru.",
          "timeline.noti.content.NC_1001_3":
            "%1, %2, dan %3 lainnya menambahkan note baru.",
          "timeline.noti.content.NC_1002_1": "%1 mengomentari pos Anda.",
          "timeline.noti.content.NC_1002_2": "%1 dan %2 mengomentari pos Anda.",
          "timeline.noti.content.NC_1002_3":
            "%1, %2, dan %3 lainnya mengomentari pos Anda.",
          "timeline.noti.content.NC_1003_1": "%1 menyebut Anda di komentar.",
          "timeline.noti.content.NC_1003_2":
            "%1 dan %2 menyebut Anda di komentar.",
          "timeline.noti.content.NC_1003_3":
            "%1, %2, dan %3 lainnya menyebut Anda di komentar.",
          "timeline.noti.content.NC_1004_1": "%1 menyukai pos Anda.",
          "timeline.noti.content.NC_1004_2": "%1 dan %2 menyukai pos Anda.",
          "timeline.noti.content.NC_1004_3":
            "%1, %2, dan %3 lainnya menyukai pos Anda.",
          "timeline.noti.content.NC_2001_1": "%1 membuat album baru.",
          "timeline.noti.content.NC_2001_2": "%1, %2 membuat album baru.",
          "timeline.noti.content.NC_2001_3":
            "%1, %2, dan %3 lainnya membuat album baru.",
          "timeline.noti.content.NC_2002_1": "%1 menambahkan foto ke album.",
          "timeline.noti.content.NC_2002_2":
            "%1 dan %2 menambahkan foto ke album.",
          "timeline.noti.content.NC_2002_3":
            "%1, %2, dan %3 lainnya menambahkan foto ke album.",
          "timeline.noti.content.NC_3001_1": "%1 mengomentari pos Anda.",
          "timeline.noti.content.NC_3001_2": "%1 dan %2 mengomentari pos Anda.",
          "timeline.noti.content.NC_3001_3":
            "%1, %2, dan %3 lainnya mengomentari pos Anda.",
          "timeline.noti.content.NC_3002_1": "%1 menyebut Anda di komentar.",
          "timeline.noti.content.NC_3002_2":
            "%1 dan %2 menyebut Anda di komentar.",
          "timeline.noti.content.NC_3002_3":
            "%1, %2, dan %3 lainnya menyebut Anda di komentar.",
          "timeline.noti.content.NC_3003_1": "%1 menyukai pos Anda.",
          "timeline.noti.content.NC_3003_2": "%1 dan %2 menyukai pos Anda.",
          "timeline.noti.content.NC_3003_3":
            "%1, %2, dan %3 lainnya menyukai pos Anda.",
          "timeline.noti.content.NC_4001_1": "%1 bergabung dengan grup Anda.",
          "timeline.noti.content.NC_4002_1": "%1 berbagi pos saya.",
          "timeline.noti.content.NC_UPDATE":
            "Perbarui LINE untuk melihat pemberitahuan ini.",
          "timeline.noti.empty": "Tak ada pemberitahuan baru.",
          "timeline.noti.error":
            "Tidak dapat memuat pemberitahuan.\nSilakan coba lagi nanti. ",
          "timeline.noti.home": "Beranda",
          "timeline.oamerge.feed.title": "Akun resmi Anda",
          "timeline.oamerge.title": "Akun resmi Anda",
          "timeline.officialprofile.networkerror":
            "Permintaan Anda belum diproses karena eror koneksi jaringan.\nSilakan coba lagi.",
          "timeline.officialprofile.title": "Profil",
          "timeline.original.open": "Lihat Halaman Asli",
          "timeline.poppost.counttime.hour.other": "%n jam tersisa",
          "timeline.poppost.counttime.hour.plurals.few": "%n jam tersisa",
          "timeline.poppost.counttime.hour.plurals.many": "%n jam tersisa",
          "timeline.poppost.counttime.hour.plurals.one": "%n jam tersisa",
          "timeline.poppost.counttime.hour.plurals.other": "%n jam tersisa",
          "timeline.poppost.counttime.hour.plurals.two": "%n jam tersisa",
          "timeline.poppost.counttime.hour.plurals.zero": "%n jam tersisa",
          "timeline.poppost.counttime.min.other": "%n menit tersisa",
          "timeline.poppost.counttime.min.plurals.few": "%n menit tersisa",
          "timeline.poppost.counttime.min.plurals.many": "%n menit tersisa",
          "timeline.poppost.counttime.min.plurals.one": "%n menit tersisa",
          "timeline.poppost.counttime.min.plurals.other": "%n menit tersisa",
          "timeline.poppost.counttime.min.plurals.two": "%n menit tersisa",
          "timeline.poppost.counttime.min.plurals.zero": "%n menit tersisa",
          "timeline.poppost.counttime.soon": "1 menit tersisa",
          "timeline.poppost.tooltip.hour.other":
            "Pos ini akan dihapus setelah %n jam.",
          "timeline.poppost.tooltip.hour.plurals.few":
            "Pos ini akan dihapus setelah %n jam.",
          "timeline.poppost.tooltip.hour.plurals.many":
            "Pos ini akan dihapus setelah %n jam.",
          "timeline.poppost.tooltip.hour.plurals.one":
            "Pos ini akan dihapus setelah %n jam.",
          "timeline.poppost.tooltip.hour.plurals.other":
            "Pos ini akan dihapus setelah %n jam.",
          "timeline.poppost.tooltip.hour.plurals.two":
            "Pos ini akan dihapus setelah %n jam.",
          "timeline.poppost.tooltip.hour.plurals.zero":
            "Pos ini akan dihapus setelah %n jam.",
          "timeline.poppost.tooltip.min.other":
            "Pos ini akan dihapus setelah %n menit.",
          "timeline.poppost.tooltip.min.plurals.few":
            "Pos ini akan dihapus setelah %n menit.",
          "timeline.poppost.tooltip.min.plurals.many":
            "Pos ini akan dihapus setelah %n menit.",
          "timeline.poppost.tooltip.min.plurals.one":
            "Pos ini akan dihapus setelah %n menit.",
          "timeline.poppost.tooltip.min.plurals.other":
            "Pos ini akan dihapus setelah %n menit.",
          "timeline.poppost.tooltip.min.plurals.two":
            "Pos ini akan dihapus setelah %n menit.",
          "timeline.poppost.tooltip.min.plurals.zero":
            "Pos ini akan dihapus setelah %n menit.",
          "timeline.poppost.tooltip.soon":
            "Pos ini akan dihapus dalam waktu 1 menit.",
          "timeline.post.attach.drag.guide":
            "Foto/video juga dapat ditambahkan dengan menyeret dan menjatuhkannya.",
          "timeline.post.attach.drag.guide.premium":
            "Foto juga dapat ditambahkan dengan menyeret dan menjatuhkannya.",
          "timeline.post.attach.draghere":
            "Seret dan jatuhkan foto/video yang ingin ditambahkan di sini.",
          "timeline.post.attach.draghere.premium":
            "Seret dan jatuhkan foto yang ingin ditambahkan di sini.",
          "timeline.post.delete": "Hapus",
          "timeline.post.deleted": "Pos ini telah dihapus.",
          "timeline.post.deletedbyadmin":
            "Pos ini telah dihapus oleh admin layanan.",
          "timeline.post.done": "Selesai",
          "timeline.post.edit": "Edit",
          "timeline.post.edit.desc":
            "Perubahan Note belum disimpan. Keluar tanpa menyimpan?",
          "timeline.post.friends": "Teman LINE %1",
          "timeline.post.friends.detail":
            "Pos ini hanya dapat dibaca oleh teman LINE %1.\n",
          "timeline.post.grid.more": "+%n",
          "timeline.post.hashtag": "Hashtag",
          "timeline.post.hashtag.guide.title": "Coba Tambahkan #tags!",
          "timeline.post.hashtag.results.related": "Terkait",
          "timeline.post.hint": "Apa yang baru?",
          "timeline.post.keep": "Lanjutkan",
          "timeline.post.likeshare.cancel": "Batalkan Berbagi",
          "timeline.post.likeshare.canceled":
            "Batal untuk berbagi pos tersebut.",
          "timeline.post.likeshare.done": "Telah disukai dan dibagikan. ",
          "timeline.post.mention.alert":
            "Anda dapat menyebut maksimum 20 orang.",
          "timeline.post.mention.empty.description":
            "\"<![CDATA[Ketik <font color='#4166b1'>@nama teman</font> untuk menyebut teman Anda.\nTeman tersebut akan langsung menerima pemberitahuan dan melihat pos Anda.]]>\"",
          "timeline.post.mention.empty.title": "Sebut teman dengan simbol @!",
          "timeline.post.mention.setting.edit.alert":
            "Jika Anda mengubah pengaturan privasi untuk pos ini, pengguna berikut ini tidak akan dapat melihatnya. Lanjutkan?",
          "timeline.post.newpost": "Pos Baru",
          "timeline.post.onlyme": "Hanya Saya",
          "timeline.post.public": "Publik",
          "timeline.post.public.desc": "Pos publik dapat dilihat semua orang.",
          "timeline.post.public.sharetotimeline": "Bagikan di Timeline",
          "timeline.post.scope.group":
            "Hanya anggota grup ini yang dapat melihat note ini.",
          "timeline.post.scope.manToMan":
            "Hanya Anda dan %1 yang dapat melihat note ini.",
          "timeline.post.seemore": "Lihat lainnya",
          "timeline.post.share": "Bagikan",
          "timeline.post.sharedchanged":
            "Pengaturan privasi untuk pos asli telah diubah sehingga pos ini tidak dapat ditampilkan.",
          "timeline.post.shareddeleted":
            "Pos ini telah dihapus atau pengirim pos sudah tidak menggunakan LINE.",
          "timeline.post.sorting.option.ranking": "Sort by ranking",
          "timeline.post.sorting.option.time": "Sort by time received",
          "timeline.post.write": "Posting",
          "timeline.publicgroup.emptymember":
            "Tak ada teman yang telah ditambahkan.",
          "timeline.publicgroup.group": "Grup",
          "timeline.publicgroup.group.empty": "Tak ada daftar grup.",
          "timeline.publicgroup.linefriends": "Teman",
          "timeline.publicgroup.linefriends.desc":
            "Tampilkan kepada teman yang dapat melihat Beranda Anda.",
          "timeline.publicgroup.nobodysee":
            "Pos ini tidak dapat dilihat orang lain.",
          "timeline.publicgroup.sharelist": "Daftar Berbagi",
          "timeline.publicgroup.title.detail":
            "Siapa yang dapat melihat pos ini?",
          "timeline.publicgroup.title.post": "Pengaturan Privasi untuk Pos",
          "timeline.recommend": "Rekomendasi",
          "timeline.report.desc":
            "Pengajuan laporan akan mengirimkan rincian pengguna terkait, 100 pesan obrolan terbaru Anda dengan pengguna tersebut, atau pos yang dipermasalahkan.",
          "timeline.report.done": "Laporan terkirim!",
          "timeline.report.reason.advertising": "Spam/Iklan",
          "timeline.report.reason.genderHarassment": "Pelecehan/Cari Jodoh",
          "timeline.report.reason.harassment": "Perbuatan Tidak Menyenangkan",
          "timeline.report.reason.other": "Lainnya",
          "timeline.report.selectReason":
            "Ceritakanlah mengapa Anda mengirimkan laporan ini kepada kami.",
          "timeline.report.title": "Laporkan",
          "timeline.request.failed.likeshare.status":
            "Tidak dapat memuat status berbagi.",
          "timeline.request.failed.timeline": "Tidak dapat memuat pos ini.",
          "timeline.request.failed.url":
            "Tidak dapat memuat info URL.\nSilakan coba lagi.",
          "timeline.request.failed.user":
            "Tak ada pengguna yang sesuai dengan informasi ini.",
          "timeline.retry": "Coba Lagi",
          "timeline.setting.autoopen": "Bagikan secara otomatis ke teman baru.",
          "timeline.setting.buddylist.empty":
            "Anda belum mempunyai teman LINE.",
          "timeline.setting.desc": "Pengaturan Privasi",
          "timeline.setting.desc2":
            "Atur apakah ingin berbagi di Beranda Anda.",
          "timeline.setting.feed.ranking": "Susunan Pos",
          "timeline.setting.feed.ranking.option":
            "Tampilkan pos populer terlebih dahulu",
          "timeline.setting.label.blocked": "Sembunyikan",
          "timeline.setting.label.unblocked": "Tampilkan",
          "timeline.setting.usetoast":
            "Kirim pemberitahuan untuk setiap update di LINE VOOM",
          "timeline.share.copyUrl": "Salin tautan",
          "timeline.share.copyUrl.toast": "Tautan disalin ke clipboard.",
          "timeline.sharetohome.hint": "Masukkan komentar tambahan.",
          "timeline.sharetotalk.comfirm.desc": 'Kirim ke "%1"?',
          "timeline.sharetotalk.empty.chat":
            "Tak ada obrolan yang dapat dipilih.",
          "timeline.sharetotalk.empty.friend": "Tak ada teman untuk diundang.",
          "timeline.sharetotalk.empty.group":
            "Tak ada grup yang dapat dipilih.",
          "timeline.sharetotalk.tab.chat": "Obrolan",
          "timeline.sharetotalk.tab.friend": "Teman",
          "timeline.sharetotalk.tab.group": "Grup",
          "timeline.sharetotalk.title": "Bagikan di Obrolan",
          "timeline.system.check.wait":
            "Maaf, fitur ini sedang dalam pemeliharaan.\nSilakan coba lagi nanti.",
          "timeline.time.afternoon": "PM",
          "timeline.time.morning": "AM",
          "timeline.video.popup.waiting":
            "Pengodean sedang berlangsung.\nSilakan coba lagi nanti.",
          "timeline.yes": "Ya",
          "timline.report.policy.desc":
            "Dengan melaporkan obrolan atau pos, Anda akan mengirimkan info pengguna terkait beserta 20 pesan obrolan terkini Anda dengan pengguna tersebut atau pos yang dipermasalahkan.",
          "unsupported.file.checkbox": "Selalu kompres dan\xa0kirim",
          "unsupported.file.common":
            "File dengan format yang tidak didukung akan dikirim dalam format zip.",
          "unsupported.file.compress.fail":
            "File gagal dikonversi. Silakan coba lagi.",
          "unsupported.file.compressing": "Membuat file zip... ",
          "unsupported.file.dontshow": "Jangan tampilkan lagi",
          "unsupported.file.multi":
            "Format beberapa file tidak didukung. Konversi file ke zip dan kirimkan?",
          "unsupported.file.single":
            "Format file tidak didukung. Konversi file ke zip dan kirimkan?",
          "update.msg.check.security1": "Sedang memeriksa keamanan...",
          "update.msg.check.security2": "Mohon tunggu.",
          "update.summary.url":
            "http://openapis.jboard.naver.jp/mobile/document/line_desktop/EN/997",
          "upgradegroupinvite.button.requireinvites": "Undangan Diperlukan",
          "upgradegroupinvite.popup.desc.toomanyfriends":
            "Pada grup dengan lebih dari 100 anggota, calon anggota harus menerima undangan terlebih dahulu untuk dapat bergabung ke grup.\nAtur agar jumlah anggota tidak melebihi 100 anggota agar fitur ini tidak dinyalakan.",
          "upgradegroupinvite.popup.title.toomanyfriends":
            "Atur agar calon anggota harus menerima undangan untuk bergabung?",
          "upic.btn.cancel.title": "Batal",
          "upic.btn.find.title": "Cari",
          "upic.btn.ok.title": "OK",
          "upic.label.desc.title":
            "Hanya berkas jpg, jpeg, png, gif, dan bmp\nyang dapat diunggah.",
          "upic.label.upic.title": "Edit Foto Profil",
          "upic.msg.cantFindFile": "Berkas tidak dapat ditemukan.",
          "upic.msg.not.image": "Hanya berkas gambar yang dapat dikirim.",
          "upic.msg.select": "Pilih foto profil Anda.",
          "upic.msg.sizeExceeds": "Ukuran gambar maks. 20MB.",
          "user.report.error":
            "Pesan tidak dapat dilaporkan karena pesan sudah tidak ada.",
          "user.report.policy.desc":
            "Dengan melaporkan obrolan atau pos, Anda akan mengirimkan info pengguna terkait beserta 10 pesan obrolan terkini Anda dengan pengguna tersebut atau pos yang dipermasalahkan.",
          "user.report.question": "Blokir pengguna ini?",
          "user.search.placeholder": "Cari dengan Nama",
          "user.warning.investmentfraud": "Waspada penipuan di LINE.",
          "user.warning.invitedtogroup":
            "<![CDATA[Anda diundang ke grup oleh <b><font color='%1'>%2</font></b>.\n<font color='#FF3A44'>Akun dari pengguna yang tidak dikenal dapat diblokir dan dilaporkan.</font>]]>",
          "user.warning.spammer":
            "Pengguna ini belum ditambahkan sebagai teman.",
          "user.warning.spammer.group":
            "Anda diundang ke ruang grup oleh %1. Klik tombol Laporkan jika Anda merasa pengguna ini mencurigakan.",
          "videoProfile.error.fileType":
            "Format file ini tidak dapat digunakan. Silakan coba lagi.",
          "videoProfile.error.lessThenOneSec":
            "Tidak dapat menggunakan video kurang dari 1 detik. Silakan coba lagi.",
          "viewer.alert.desc.delete": "Hapus ini?",
          "viewer.alert.desc.fullsize":
            "Tekan Esc untuk meninggalkan layar penuh.",
          "viewer.alert.desc.mustinstallplugin":
            "Plugin diperlukan untuk melihat foto, video, dan GIF di Penampil Media. Unduh plugin sekarang?",
          "viewer.alert.image.expired.previewinstead":
            "Hanya gambar mini file yang dapat dilihat karena file sudah tidak tersedia lagi.",
          "viewer.alert.video.expired":
            "Video tidak dapat diputar lagi karena periode penyimpanan telah habis.",
          "viewer.contextmenu.copy": "Salin",
          "viewer.contextmenu.forward": "Bagikan",
          "viewer.contextmenu.keep": "Simpan di Keep",
          "viewer.contextmenu.keepmemo": "Kirim ke Memo Keep",
          "viewer.contextmenu.saveas": "Simpan sebagai\u2026",
          "viewer.contextmenu.scanqr": "Pindai kode QR",
          "viewer.contextmenu.scantext": "Pindai Teks",
          "viewer.copy.toast.copied": "Disalin ke papan klip",
          "viewer.error.media.download.fail":
            "File tidak dapat disimpan.\nSilakan coba lagi.",
          "viewer.error.video.common":
            "Tidak dapat diputar akibat eror sementara.",
          "viewer.error.video.network":
            "Tidak dapat memutar karena eror jaringan atau server.\nSilakan coba lagi.",
          "viewer.error.video.transient":
            "Tidak dapat memutar karena eror sementara.\nSilakan coba lagi.",
          "viewer.keep.toast.saved": "Tersimpan di Keep.",
          "viewer.menu.edit": "Edit",
          "viewer.menu.forward": "Bagikan",
          "viewer.menu.info.name": "Nama File",
          "viewer.menu.keep": "Simpan di Keep",
          "viewer.menu.keepmemo": "Kirim ke Memo Keep",
          "viewer.menu.more.delete": "Hapus",
          "viewer.menu.more.info": "Detail File",
          "viewer.menu.more.speed": "Kecepatan",
          "viewer.menu.openfolder": "Buka Folder",
          "viewer.menu.originalsize": "Ukuran Aktual",
          "viewer.menu.rotate": "Rotasi",
          "viewer.menu.saveas": "Simpan sebagai\u2026",
          "viewer.menu.scanqr": "Pindai kode QR",
          "viewer.menu.scantext": "Pindai Teks",
          "viewer.menu.showalbums": "Tampilkan Semua Item",
          "viewer.menu.showallcontents": "Tampilkan Semua Item",
          "viewer.menu.thumbnail.expand": "Tampilkan gambar mini",
          "viewer.menu.thumbnail.fold": "Sembunyikan gambar mini",
          "viewer.menu.video.pause": "Jeda",
          "viewer.menu.video.play": "Putar",
          "viewer.menu.video.replay": "Putar Ulang",
          "viewer.menu.video.stop": "Stop",
          "viewer.menu.video.volume": "Volume",
          "viewer.menu.zoomin": "Perbesar",
          "viewer.menu.zoomout": "Perkecil",
          "viewer.play.toast.speaker.beingconnected":
            "Beralih ke speaker baru. Mohon tunggu sejenak.",
          "viewer.popup.info.created": "Waktu Diambil",
          "viewer.popup.info.filesize": "Ukuran Berkas",
          "viewer.popup.info.from": "Dari",
          "viewer.popup.info.resolution": "Resolusi",
          "viewer.popup.info.saved": "Waktu Disimpan",
          "viewer.saveas.toast.saved": "Pengunduhan selesai.",
          "viewer.tooltip.window.close": "Tutup",
          "viewer.tooltip.window.maximize": "Perbesar",
          "viewer.tooltip.window.minimize": "Perkecil",
          "viewer.tooltip.window.restore": "Ke Semula",
          "voip.beautyfeature.button.clearall": "Hapus Semua",
          "voip.beautyfeature.popupbutton.cancel": "Batal",
          "voip.beautyfeature.popupbutton.clearall": "Hapus Semua",
          "voip.beautyfeature.popupdesc.clearfaceeffects":
            "Semua efek wajah harus dihapus agar fitur kecantikan dapat digunakan. Hapus semua efek?",
          "voip.beautyfeature.toggle.darkeneyebrows": "Warnai Alis",
          "voip.beautyfeature.toggle.fillinlips": "Isi Bibir",
          "voip.beautyfeature.toggle.resizeeyes": "Perbesar Mata",
          "voip.beautyfeature.toggle.revert": "Atur ke Default",
          "voip.beautyfeature.toggle.slimjawline": "Rampingkan Rahang",
          "voip.beautyfeature.toggle.slimnose": "Rampingkan Hidung",
          "voip.beautyfeature.toggle.smoothcomplexion": "Haluskan Kulit",
          "voip.button.label.call": "Jawab",
          "voip.button.label.disconnect": "Akhiri",
          "voip.button.label.voiceonly": "Jawab Hanya dengan Suara",
          "voip.call.tooltip.cameraunavailable": "Kamera tidak tersedia",
          "voip.call.tooltip.microphoneunavailable": "Mikrofon tidak tersedia",
          "voip.connect.camera.alert":
            "Kamera terdeteksi. Nyalakan kamera sekarang?",
          "voip.connect.mic.alert":
            "Mikrofon terdeteksi. Nyalakan mikrofon sekarang?",
          "voip.desc.calling": "Memanggil...",
          "voip.desc.calling.failed":
            "Tidak dapat memanggil %1. Silakan coba lagi nanti.(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "Anda sedang melakukan panggilan di perangkat lainnya.",
          "voip.desc.calling.failed.contact.busy":
            "%1 sedang dalam panggilan.\nSilakan coba lagi nanti.",
          "voip.desc.calling.failed.maintance":
            "Fitur Panggilan Suara di LINE untuk PC tidak tersedia untuk sementara waktu.\nSilakan coba lagi nanti.\nMohon maaf atas ketidaknyamanan ini.",
          "voip.desc.calling.failed.need.audio":
            "Kartu suara tidak terdeteksi.\nSilakan cek dan coba lagi.",
          "voip.desc.calling.failed.need.device":
            "Mikrofon/speaker tidak terdeteksi.\nSilakan sambung dan coba lagi.",
          "voip.desc.calling.failed.need.devicesetting":
            "Your microphone or speaker is turned off. Please check your settings and try calling again.",
          "voip.desc.calling.failed.need.mic":
            "Mikrofon tidak terdeteksi.\nSilakan cek dan coba lagi.",
          "voip.desc.calling.failed.need.oscamera":
            "Kamera tidak dapat digunakan. Berikan izin akses perangkat ke kamera.",
          "voip.desc.calling.failed.need.osmic":
            "Mikrofon tidak dapat digunakan. Berikan perangkat Anda akses ke mikrofon.",
          "voip.desc.calling.failed.need.ospeaker":
            "Unable to use speaker. Please enable your microphone in the Control Panel.",
          "voip.desc.calling.failed.need.spk":
            "Speaker tidak terdeteksi.\nSilakan cek dan coba lagi.",
          "voip.desc.calling.failed.need.update":
            "Anda dapat menggunakan fitur Panggilan Suara di LINE untuk PC\ndengan memperbarui aplikasi LINE di ponsel cerdas Anda.\n",
          "voip.desc.calling.failed.no.accept":
            "Tak ada jawaban.\nSilakan coba lagi nanti.",
          "voip.desc.calling.failed.other.device.use":
            "Anda sedang melakukan panggilan di perangkat lainnya.",
          "voip.desc.calling.failed.peer":
            "Panggilan gagal\n%1 tidak dapat menerima panggilan Anda\nkarena belum menggunakan versi LINE yang mendukung panggilan.",
          "voip.desc.calling.video": "Sedang dalam Panggilan Video",
          "voip.desc.camerausage":
            "LINE memerlukan akses ke kamera untuk memulai panggilan video.",
          "voip.desc.camerausage.maconly":
            'LINE memerlukan akses ke kamera di Preferensi Sistem > "Keamanan & Privasi" > Privasi untuk memulai panggilan video.',
          "voip.desc.connecting": "Menyambung...",
          "voip.desc.makeCall.Failed.network":
            "Panggilan gagal karena jaringan tidak stabil.\nSilakan coba lagi nanti.",
          "voip.desc.mic.failed":
            "Sepertinya terdapat masalah pada mikrofon Anda. Cek mikrofon Anda jika suara Anda tidak terdengar oleh siapa pun di Panggilan.",
          "voip.desc.microphoneusage":
            "LINE memerlukan akses ke mikrofon untuk memulai panggilan suara dan panggilan video.",
          "voip.desc.microphoneusage.maconly":
            'LINE memerlukan akses ke mikrofon di Preferensi Sistem > "Keamanan & Privasi" > Privasi untuk memulai panggilan video.',
          "voip.desc.ringing": "Panggilan masuk...",
          "voip.desc.ringing.video": "Panggilan video masuk...",
          "voip.desc.speaker.failed":
            "Sepertinya terdapat masalah pada speaker Anda. Cek speaker Anda jika suara tidak terdengar sama sekali.",
          "voip.disconnect.camera.entry.alert":
            "Bergabung ke panggilan video? Video Anda tidak akan terlihat karena kamera tidak terdeteksi.",
          "voip.disconnect.camera.error":
            "Fitur ini tidak tersedia karena kamera tidak terdeteksi.",
          "voip.disconnect.mic.entry.alert":
            "Bergabung ke panggilan video? Suara Anda tidak akan terdengar karena mikrofon tidak terdeteksi.",
          "voip.disconnect.mic.entry.alert.audio":
            "Bergabung ke panggilan video? Suara tidak akan terdengar karena mikrofon tidak terdeteksi.",
          "voip.disconnect.mic.error":
            "Fitur ini tidak tersedia karena mikrofon tidak terdeteksi.",
          "voip.disconnect.micncam.entry.alert":
            "Bergabung ke panggilan video? Suara dan video Anda tidak dapat dibagikan karena mikrofon dan kamera tidak terdeteksi.",
          "voip.effect.guide.adjust.effect": "Atur efek Beauty",
          "voip.effect.guide.detect.face":
            "Pastikan wajah Anda terlihat jelas.",
          "voip.effect.guide.extra.001": "Coba efek ini bersama teman-teman.",
          "voip.effect.guide.extra.006": "Goyangkan kepala ke kiri dan kanan.",
          "voip.effect.guide.extra.011": "Tersenyumlah.",
          "voip.effect.guide.extra.012":
            "Seret slider untuk menyesuaikan intensitas efek.",
          "voip.effect.guide.eye.blink": "Kedipkan mata",
          "voip.effect.guide.mouth.open": "Buka bibir.",
          "voip.error.init.failed.callee":
            "[Panggilan masuk dari %1]\nMelakukan panggilan saat ini dapat menyebabkan\naplikasi ditutup secara paksa karena kondisi lingkungan PC Anda.",
          "voip.error.init.failed.caller":
            "Melakukan panggilan saat ini dapat menyebabkan\naplikasi ditutup secara paksa karena kondisi lingkungan PC Anda.",
          "voip.label.create.title": "Panggilan Suara",
          "voip.label.mic": "Mikrofon",
          "voip.label.speaker": "Speaker",
          "voip.label.video": "Panggilan video",
          "voip.label.video.cameraon": "Nyalakan",
          "voip.label.video.local.cameraOff": "Anda telah mematikan kamera.",
          "voip.label.video.local.cameraOn": "Anda telah menyalakan kamera.",
          "voip.label.video.local.noCamera":
            "Kamera tidak ditemukan.\nTeman tidak akan dapat melihat Anda.",
          "voip.label.video.low.quality": "Koneksi tidak stabil.",
          "voip.label.video.remote.cameraOff":
            "Teman Anda telah mematikan kameranya.",
          "voip.label.video.remote.cameraOn":
            "Teman Anda telah menyalakan kameranya.",
          "voip.label.video.remote.noCamera":
            "Teman tidak memiliki kamera,\natau video mereka tidak dapat diterima dengan baik.",
          "voip.label.video.ringing": "Nyalakan kamera Anda?",
          "voip.label.video.title": "Panggilan video dengan %1",
          "voip.media.unsupported.alert.update":
            "%1 mulai berbagi layar. Update LINE ke versi terbaru untuk melihat layar yang dibagikan.",
          "voip.msg.already.during.call":
            "Anda sedang dalam panggilan di obrolan lain.",
          "voip.msg.bad.connection": "Koneksi tidak stabil.",
          "voip.msg.bad.connection.failover": "Menyambung...",
          "voip.msg.error.no.audio.source":
            "Panggilan berakhir karena masalah pada mikrofon. Silakan coba panggil lagi nanti.",
          "voip.msg.error.no.audio.tx.stream":
            "Terjadi eror yang tidak diketahui.\nSilakan coba lagi nanti.",
          "voip.msg.network.unstable": "Koneksi jaringan tidak stabil.",
          "voip.msg.not.avalable.during.call":
            "Fitur ini tidak tersedia saat panggilan berlangsung.",
          "voip.msg.peer.no.audio.source":
            "Panggilan berakhir karena masalah pada mikrofon peserta lainnya. Silakan coba panggil lagi nanti.",
          "voip.msg.send.freeCall": "Lakukan panggilan suara dengan %1?",
          "voip.msg.send.videoCall": "Lakukan panggilan video dengan %1?",
          "voip.msg.switch.to.video.noCamera":
            "Video Anda tidak akan ditampilkan karena kamera tidak terdeteksi. Terima panggilan video?",
          "voip.msg.video.camera.unavailable":
            "Kamera tidak mendukung.\nPilih kamera lain di Pengaturan > Panggilan > Pengaturan Kamera. Anda tetap dapat melakukan atau menerima panggilan meskipun kamera Anda tidak mendukung tetapi teman tidak dapat melihat Anda.",
          "voip.msg.video.term.device.control":
            "Panggilan video telah terputus.\nKembali ke mode panggilan suara.",
          "voip.msg.video.term.device.interrupted":
            "Kamera teman Anda terhenti.",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "Panggilan video tidak tersedia saat ini karena eror sementara.\nSilakan coba panggilan suara, atau coba lagi nanti.",
          "voip.msg.video.term.overload.video.changing.failed":
            "Panggilan video tidak tersedia saat ini karena eror sementara.\nSilakan coba lagi nanti.",
          "voip.msg.video.term.unknown":
            "Terjadi eror.\nSilakan coba lagi nanti.",
          "voip.msg.video.term.unstable":
            "Tidak dapat memulai panggilan video karena jaringan tidak stabil.",
          "voip.msg.video.term.unsupported.device.video":
            "Tidak dapat melakukan panggilan video.\nPastikan teman Anda menggunakan LINE versi terbaru\ndi perangkat yang mendukung panggilan video.",
          "voip.msg.video.term.unsupported.device.voice":
            "Tersambung ke panggilan suara.\nPastikan teman Anda menggunakan LINE versi terbaru\ndi perangkat yang mendukung panggilan video.",
          "voip.msg.warning.close": "Akhiri panggilan ini?",
          "voip.msg.warning.groupclose": "Tinggalkan panggilan ini?",
          "voip.noisecanceling.desc.guide":
            "Peredaman bising diaktifkan untuk mengurangi bising di latar belakang.",
          "voip.noisecanceling.popup.desc":
            "Perubahan Anda akan diterapkan pada panggilan berikutnya. Untuk menerapkan perubahan sekarang, mulai ulang panggilan.",
          "voip.noisecanceling.tooltip.off": "Aktifkan Peredaman Bising",
          "voip.noisecanceling.tooltip.on": "Matikan Peredaman Bising",
          "voip.popup.end": "Akhiri Panggilan",
          "voip.popup.start": "Mulai",
          "voip.screen.share.remove.monitor":
            "Panggilan berakhir karena monitor terputus.",
          "voip.screenshare.button.zoomin": "Perbesar",
          "voip.screenshare.button.zoomout": "Perkecil",
          "voip.screenshare.button.zoomreset": "Reset Zoom",
          "voip.screenshare.desc.pause": "Berbagi layar dijeda.",
          "voip.screenshare.desc.pause.tooltip":
            "Fitur Berbagi Layar akan dijeda saat jendela diperkecil, diubah ukurannya, atau dipindahkan ke jendela yang dibagikan.",
          "voip.screenshare.error.closeapp":
            "Layar yang sudah ditutup tidak dapat dibagikan.",
          "voip.screenshare.index.screen": "Layar",
          "voip.screenshare.index.window": "Jendela",
          "voip.screenshare.option.optimizevideoclips":
            "Optimalkan untuk Klip Video",
          "voip.screenshare.tooltip.fullscreen": "PC %1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "Optimalkan berbagi layar untuk klip video yang lebih lancar.",
          "voip.tooltip.callsetting": "Pengaturan Panggilan",
          "voip.tooltip.camera.off": "Matikan\nKamera",
          "voip.tooltip.camera.on": "Nyalakan\nKamera",
          "voip.tooltip.chat": "Obrolan",
          "voip.tooltip.echocanceloff": "Matikan Peredaman Gema",
          "voip.tooltip.echocancelon": "Nyalakan Peredaman Gema",
          "voip.tooltip.end.call": "Akhiri",
          "voip.tooltip.end.groupmeetingcall": "Tinggalkan",
          "voip.tooltip.fullhd":
            'Nikmati suara yang lebih jernih di panggilan suara saat "Full HD voice" menjadi hijau.',
          "voip.tooltip.mic.off": "Matikan\nmikrofon",
          "voip.tooltip.mic.off.muteronguide":
            "Mikrofon dimatikan. Nyalakan mikrofon untuk mulai berbicara.",
          "voip.tooltip.mic.off.spacebartoast":
            "Mikrofon dimatikan. Tekan dan tahan tombol spasi untuk menyalakan mikrofon sementara.",
          "voip.tooltip.mic.on": "Nyalakan\nmikrofon",
          "voip.tooltip.microphone.autovolume": "Atur Volume Otomatis",
          "voip.tooltip.onscreentool.clearall": "Hapus semua",
          "voip.tooltip.onscreentool.eraser": "Penghapus",
          "voip.tooltip.onscreentool.off": "Tutup alat gambar",
          "voip.tooltip.onscreentool.on": "Buka alat gambar",
          "voip.tooltip.onscreentool.pen": "Pena",
          "voip.tooltip.onscreentool.pointer": "Penunjuk",
          "voip.tooltip.onscreentool.redo": "Ulangi",
          "voip.tooltip.onscreentool.select": "Geser",
          "voip.tooltip.onscreentool.stamp": "Stempel",
          "voip.tooltip.onscreentool.undo": "Urungkan",
          "voip.tooltip.screen.share": "Bagikan Layar",
          "voip.tooltip.screen.share.off": "Berhenti Berbagi Layar",
          "voip.tooltip.screen.share.start":
            "Bagikan layar Anda selama panggilan video.",
          "voip.tooltip.screen.share.stop":
            "Layar Anda sedang dibagikan. Klik ikon sekali lagi untuk mengakhirinya.",
          "voip.tooltip.speaker.off": "Matikan Suara",
          "voip.tooltip.speaker.on": "Nyalakan Suara",
          "voip.tooltip.switch.to.video":
            "Klik untuk beralih ke panggilan video",
          "voip.tooltip.video.camera": "Nyala/Matikan Kamera",
          "voip.tooltip.video.camera.select": "Pilih Kamera",
          "voip.tooltip.video.fullscreen": "Masuk ke layar penuh",
          "voip.tooltip.video.fullscreen.restore":
            "Kembalikan jendela ke ukuran sebelumnya",
          "voip.tooltip.video.pin": "Tampilkan di layar terdepan",
          "voip.tooltip.video.pinoff":
            'Matikan opsi "Tampilkan di layar terdepan".',
          "voip.tooltip.video.speaker": "Nyala/Matikan Speaker",
          "voip.tooltip.video.transform": "Mulai Panggilan\nVideo",
          "voip.tooltip.volumezero":
            "Volume speaker Anda diatur ke nol. Naikkan volume untuk mendengar pengguna lain.",
          "voip.video.calling.failed.cameraSwitch":
            "Tidak dapat mengalihkan kamera.\nSilakan coba lagi.",
          "voip.video.calling.failed.noCamera":
            "Tidak dapat menyalakan kamera.\nSilakan cek apakah kamera Anda telah tersambung.",
          "voip.video.desc.makeCall.Failed":
            "Tidak dapat tersambung. Silakan coba lagi nanti.",
          "voip.video.dynamicspeaking.pinoff": "Lepas Sematan",
          "voip.video.dynamicspeaking.pinoff.desc":
            "Video disematkan. Klik Lepas Sematan di pojok kanan atas video untuk melepas sematan.",
          "voip.video.effect.popup.downloadfail":
            "Efek tidak dapat diunduh. Coba lagi?",
          "voip.video.effect.toast.cameraoff":
            "Aktifkan kamera perangkat terlebih dahulu.",
          "voip.video.effect.toast.detectionfail":
            "Pastikan wajah Anda terlihat dengan jelas.",
          "voip.video.effect.toast.downloadfail":
            "Tidak dapat diunduh. Silakan coba lagi.",
          "voip.video.effect.toast.nospace":
            "Ruang penyimpanan di perangkat tidak mencukupi. Kosongkan sebagian ruang penyimpanan dan coba lagi.",
          "voip.video.effect.toast.xpccrash":
            "Efek kamera telah dimatikan karena eror sementara.\nSilakan atur kembali.",
          "voip.video.menu.bg": "Latar",
          "voip.video.menu.bg.alert.addbg":
            "File tidak dapat dimuat. Pilih file lain untuk digunakan sebagai latar.",
          "voip.video.menu.bg.alert.addbg.button": "Pilih",
          "voip.video.menu.bg.alert.maxbg":
            "Latar baru tidak dapat ditambahkan. Hapus latar yang sudah tidak terpakai lalu coba lagi.",
          "voip.video.menu.bgsettings": "Efek",
          "voip.video.menu.blur": "Latar Blur",
          "voip.video.menu.effect": "Efek Wajah",
          "voip.video.menu.filter": "Filter",
          "voip.video.popupbutton.close": "Tutup",
          "voip.video.popupbutton.dontshow": "Jangan Tampilkan",
          "voip.video.popupbutton.opensettings": "Buka Pengaturan",
          "voip.video.popupbutton.show": "Tampilkan",
          "voip.video.popupdesc.dontshowpreview":
            "Dengan mematikan opsi ini, Anda dapat bergabung ke panggilan video tanpa melihat pratinjau kamera.",
          "voip.video.popuptitle.dontshowpreview":
            "Ubah Pengaturan Pratinjau Kamera Anda",
          "voip.video.preview.blur.off": "Tidak Ada",
          "voip.video.preview.blur.on": "Latar Blur",
          "voip.video.preview.cameraoff": "Matikan kamera",
          "voip.video.preview.desc":
            "Periksa kamera sebelum bergabung ke panggilan video.",
          "voip.video.preview.join": "Bergabung",
          "voip.video.preview.title": "Pratinjau Kamera",
          "voip.video.title.videocallwith": "Panggilan Video dengan %1",
          "voip.video.tooltip.filternblur": "Coba filter dan efek latar blur.",
          "voip.video.tooltip.startvideocall":
            "Klik untuk memulai panggilan video.",
          "voip.video.tooltip.videomirroring": "Ubah perspektif video",
          "voip.video.tooltip.videomirroringoff": "Matikan mode cermin video",
          "voip.video.tooltip.videomirroringon": "Nyalakan mode cermin video",
          "voip.videocall.button.beautyfeature": "Kecantikan",
          "voip.videocall.popup.start": "Mulai",
          "voip.videocall.popup.turnon": "Nyalakan",
          "win10.notification.reply.guide": "Balas di sini",
        };
      },
    }]);
