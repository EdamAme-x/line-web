!function () {
  try {
    var e = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      a = (new Error()).stack;
    a &&
      (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[a] = "2d41aeda-77d5-4806-9179-8788121441a7",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-2d41aeda-77d5-4806-9179-8788121441a7");
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
    []).push([[615], {
      74615: (e, a, o) => {
        o.r(a), o.d(a, { default: () => t });
        const t = {
          "abuse.report.sent.data.notice.chat_selected":
            "El mensaje reportado, los 9 mensajes anteriores o posteriores al reporte, los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.direct_chat":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.direct_invitation":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.friend_profile":
            "Los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.group_chat":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre del grupo, imagen del grupo, del grupo usuario que te invit\xf3 al grupo, etc.) del grupo reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.group_chat_selected":
            "El mensaje reportado, los 9 mensajes anteriores o posteriores al reporte, los datos (Nombre del grupo, imagen del grupo, datos del usuario que te invit\xf3 al grupo, etc.) del grupo reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.group_invitation":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre del grupo, imagen del grupo, del grupo usuario que te invit\xf3 al grupo, etc.) del grupo reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.note_comment":
            "El comentario reportado, la Nota que incluye el comentario y los datos (Nombre y otros datos) tanto del usuario reportado como los tuyos.",
          "abuse.report.sent.data.notice.note_post":
            "La Nota reportada y sus comentarios, as\xed como los datos (Nombre y otros datos) tanto del usuario reportado como los tuyos.",
          "abuse.report.sent.data.notice.room_chat":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos del chat (por ejemplo, los datos del usuario que te invit\xf3 al chat   y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.room_chat_selected":
            "El mensaje reportado, los 9 mensajes anteriores o posteriores al reporte, los datos del chat (por ejemplo, los datos del usuario que te invit\xf3 al chat) y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.room_invitation":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos del chat (por ejemplo, los datos del usuario que te invit\xf3 al chat   y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.square.chat.selected":
            "La informaci\xf3n (nombre del chat, foto de portada, n\xfamero de miembros e identificar del OpenChat) del OpenChat reportado, los \xfaltimos 100 mensajes enviados en el chat y la informaci\xf3n (nicknames usados en los chats e identificadores de usuarios) tanto del administrador del chat como la tuya.",
          "abuse.report.sent.data.notice.square.member.selected":
            "La informaci\xf3n (nombre del chat, foto del perfil y el n\xfamero de miembros) del OpenChat reportado, los \xfaltimos 100 mensajes enviados en el chat y la informaci\xf3n (nicknames de los chats, perfil del icono e identificadores de los usuarios) tanto del reportante en cuesti\xf3n como la tuya.",
          "abuse.report.sent.data.notice.square.message.selected":
            "La informaci\xf3n (identificador del chat) del chat reportado y el OpenChat reportado (nombre del chat, foto de portada, n\xfamero de miembros y el identificador del OpenChat), as\xed como los \xfaltimos 10 mensajes del mensaje reportado del chat y la informaci\xf3n (icono del perfil, nicknames usados en los chats e identificadores de usuarios) tanto del usuario reportado como la tuya.",
          "abuse.report.sent.data.notice.square.note.selected":
            "El contenido de la nota reportada (como texto, im\xe1genes, emoticones y el identificador del post), informaci\xf3n del OpenChat en cuesti\xf3n (nombre del chat, foto de portada, n\xfamero de miembros y el identificador del OpenChat), la informaci\xf3n del usuario reportado (iconos de perfil, estado de membres\xeda, nicknames usados en los chats y los identificadores de los usuarios), as\xed como la tuya.",
          "abuse.report.sent.data.notice.square.notecomment.selected":
            "Detalles del comentario reportado (como texto, im\xe1genes, emoticones y el identificador del comentario), informaci\xf3n del OpenChat en cuesti\xf3n (nombre, foto de portada, n\xfamero de miembros y el identificador del OpenChat), la informaci\xf3n del usuario reportado (iconos de perfil, estado de membres\xeda, nicknames usados en los chats y los identificadores de los usuarios), as\xed como la tuya.",
          "abuse.report.sent.data.notice.square.setting.selected":
            "La informaci\xf3n (nombre del chat, foto de portada, n\xfamero de miembros e identificador del chat) del chat reportado, los \xfaltimos 50 mensajes enviados en el chat, informaci\xf3n del OpenChat reportado (como el identificador del OpenChat) y la informaci\xf3n (nicknames usados en los chats e identificadores de usuarios) tanto del administrador del chat como la tuya.",
          "abuse.report.sent.data.notice.template":
            "Se enviar\xe1 cierta informaci\xf3n a LY Corporation para comprobar los hechos reportados, tomar las medidas pertinentes y considerar medidas de prevenci\xf3n futuras.\nRecuerda que es posible que se comparta esta informaci\xf3n con diversos contratistas.\n\nInformaci\xf3n recopilada: \n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "la informaci\xf3n del comentario de la Nota reportada (como el identificador de comentario, el texto, las im\xe1genes y los emoticones), la informaci\xf3n del usuario reportado (como su identificador de usuario y su nombre), la informaci\xf3n del chat (como el identificador del chat) y tu informaci\xf3n (como tu identificador de usuario y tu nombre).",
          "note.reportnote.desc.reportnotefrommenu":
            "la informaci\xf3n de la Nota reportada (como el identificador de Nota, el texto, las im\xe1genes, los emoticones y los v\xeddeos), la informaci\xf3n del usuario reportado (como su identificador de usuario y su nombre), la informaci\xf3n del chat (como el identificador del chat) y tu informaci\xf3n (como tu identificador de usuario y tu nombre).",
          "openchat.abusereport.desc.threadmessage":
            "el mensaje reportado y los \xfaltimos 10 mensajes previos al reporte en el hilo, la informaci\xf3n del usuario reportado (como su nickname y su icono de perfil), la informaci\xf3n del OpenChat (como el identificador de OpenChat, el nombre del OpenChat, la foto de portada y el n\xfamero de miembros), la informaci\xf3n del chat (como el identificador del chat), la informaci\xf3n del hilo (como el identificador del hilo) y tu informaci\xf3n (como tu identificador de usuario y tu nickname).",
          "openchat.abusereport.desc.threaduser":
            "los \xfaltimos 50 mensajes enviados al hilo por el usuario reportado, la informaci\xf3n del usuario reportado (como su identificador de usuario, su nickname y su icono de perfil), la informaci\xf3n del OpenChat (como el nombre del OpenChat, la foto de portada y el n\xfamero de miembros), la informaci\xf3n del chat (como el identificador del chat), la informaci\xf3n del hilo (como el identificador del hilo y los \xfaltimos 100 mensajes del hilo) y tu informaci\xf3n (como tu identificador de usuario y tu nickname).",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "No hay espacio suficiente en el disco.\nLibera al menos 30 MB\nen tu disco duro antes de intentarlo de nuevo.",
          ImageViewerLabelNoImage: "No se enviaron fotos en este chat.",
          "Keep.info.from.keepmemo": "Keep Memo",
          LoginErrorNaverLoginForbbide: "Introduce un correo v\xe1lido.",
          Poll_Message_btn: "M\xe1s",
          Poll_Title: "Encuesta",
          "Setting.Alert.Remove.History":
            "No podr\xe1s recuperarlo.\n\xbfLo eliminas? ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "Se reiniciar\xe1 LINE para aplicar los cambios.\n\xbfReinicias ahora?",
          "Setting.label.alarm.sound.1": "Predeterminado",
          "Setting.label.alarm.sound.2": "Juntos con LINE\u266a",
          "Setting.label.alarm.sound.3": "LINE mel\xf3dico",
          "Setting.label.alarm.sound.4": "Campana",
          "Setting.label.alarm.sound.5": "Codazo",
          "Setting.label.alarm.sound.6": "Xil\xf3fono",
          "Setting.label.alarm.sound.7": "Silbido",
          "Setting.label.alarm.sound.8": "Timbre",
          "Setting.label.alarm.sound.9": "Destellos",
          "access.chat.search.calendar": "Calendario",
          "access.openchat.chatmenu.button.addyourthreads":
            "A\xf1adir a Hilos favoritos",
          "access.openchat.chatmenu.button.removeyourthreads":
            "Quitar de Hilos favoritos",
          "access.openchat.chatmenu.button.yourthreads": "Hilos favoritos",
          "access.square.chat.button.more": "Abrir men\xfa opciones anuncios",
          "ad.alert.popup.cantplayduringcall":
            "No se puede reproducir durante una llamada.",
          "ad.desc.playinginviewer": "En reproductor",
          "ad.menu.admute.hideContent": "Ocultar este banner",
          "ad.menu.admute.hideadvertiser": "Ocultar todos sus anuncios",
          "ad.menu.admute.hidethisad": "Ocultar este anuncio",
          "ad.menu.videoEnlarge": "Expandir y ver en reproductor",
          "addFriends.error.crossregion":
            "Para a\xf1adir este usuario como amigo, escanea su c\xf3digo QR.",
          "addfriends.label.norecommendation.description":
            "A\xfan no tenemos nuevas recomendaciones.",
          "addfriends.menu.chatandgroup": "Crear un grupo",
          "addfriends.search.captcha.fail":
            "\xa1No coincide! Venga, que no es tan dif\xedcil.\n",
          "album.add.photo.drag": "\xa1Arrastra aqu\xed tus fotos!",
          "album.addphotos.desc.limitexceeded":
            "Solo puedes a\xf1adir 1000 \xedtems por \xc1lbum.",
          "album.addpopup.desc.e2eeabletoretry":
            "No se pudo a\xf1adir. Int\xe9ntalo de nuevo.",
          "album.addpopup.desc.retry": "No se pudo a\xf1adir algunos \xedtems",
          "album.addpopup.desc.unabletoretry":
            "Algunos de los \xedtems no son compatibles con los \xc1lbumes.",
          "album.createalbum.tooltip.originalresolution.jp":
            "Selecciona esta opci\xf3n para a\xf1adir fotos en calidad original.",
          "album.deletepopup.desc.deletealbum":
            "\xbfEliminas este \xc1lbum y su contenido?",
          "album.label.download": "Descargar",
          "album.main.desc.albumvideos.one": "%n v\xeddeo",
          "album.main.desc.albumvideos.other": "%n v\xeddeos",
          "album.main.toast.encodingerror":
            "No se puede reproducir debido a un error en la codificaci\xf3n.",
          "album.main.toast.encodinginprogress": "Codificando...",
          "album.main.tooltip.paidplan":
            "A\xf1ade v\xeddeos con un plan de pago. Los v\xeddeos se eliminan al cancelar el plan.",
          "album.mainpopup.button.no": "No",
          "album.mainpopup.button.yes": "S\xed",
          "album.mainpopup.desc.deletedvideo": "Se elimin\xf3 este v\xeddeo.",
          "album.mainpopup.desc.stopadding":
            "\xbfDejas de a\xf1adir los \xedtems?",
          "album.msg.cancel.upload": "\xbfYa no subes las fotos?",
          "album.picker.toast.20videomax.jp":
            "M\xe1ximo 20 v\xeddeos a la vez.",
          "album.picker.toast.5minutesvideomax.jp":
            "Solo v\xeddeos de 5 minutos o menos.",
          "album.picker.toast.max300": "M\xe1ximo 300 \xedtems a la vez.",
          "album.picker.toast.originalresolution.jp":
            "Las fotos seleccionadas se a\xf1adir\xe1n en calidad original.",
          "album.picker.toast.over20mb.jp":
            "Los v\xeddeos, las fotos grandes, as\xed como las fotos en formatos no compatibles o las editadas en LINE se a\xf1adir\xe1n en calidad normal.",
          "album.picker.toast.somestandard.jp":
            "Las fotos seleccionadas se a\xf1adir\xe1n en la calidad original. Los v\xeddeos, las fotos grandes, as\xed como las fotos en formatos no compatibles o las editadas en LINE se a\xf1adir\xe1n en calidad normal.",
          "album.picker.toast.videomax.jp.one":
            "Solo puedes a\xf1adir %n v\xeddeo m\xe1s en este \xc1lbum.",
          "album.picker.toast.videomax.jp.other":
            "Solo puedes a\xf1adir %n v\xeddeos m\xe1s en este \xc1lbum.",
          "album.share.toast.addvideomax.jp":
            "M\xe1ximo 100 v\xeddeos por \xc1lbum.",
          "album.updatepopup.button.dontshow": "No mostrar m\xe1s",
          "album.updatepopup.button.later": "M\xe1s tarde",
          "album.updatepopup.button.updatenow": "Actualizar",
          "album.updatepopup.desc.notavailable":
            "Actualiza tu LINE para ver todo el contenido del \xe1lbum.",
          "album.viewer.button.additems": "A\xf1adir \xedtems",
          "alert.album.blocked.user":
            "No puedes usar el \xe1lbum con los usuarios bloqueados.",
          "alert.note.blocked.user":
            "No puedes usar Notas con los usuarios que has bloqueado.",
          "announce.donotshowagain": "No mostrar m\xe1s",
          "announce.donotshowagain.mouseover": "No mostrar m\xe1s",
          "announce.error":
            "Vaya, no encontramos el mensaje para este anunciante.",
          "announce.minimize": "Minimizar",
          "announce.unannounce": "No recordar",
          "announcement.message.album": "\xc1lbum: %1",
          "announcement.message.annoucement": "Recordar",
          "announcement.message.error.description":
            "Vaya, no encontramos el mensaje para este anunciante.",
          "announcement.message.note.no.text": "Nota compartida en %1",
          "announcement.message.note.text": "Nota: %1",
          "announcement.system.message":
            "<![CDATA[%1 puso un <u>Recordatorio</u>.]]>",
          "app.title": "Actualizaci\xf3n de LINE",
          "att.prepopup.description":
            "Activando los permisos se te mostrar\xe1n anuncios de tu inter\xe9s.",
          "authorize.content.desc1":
            "Por seguridad, verifica tu cuenta\nal iniciar sesi\xf3n en un ordenador por primera vez.",
          "authorize.content.desc2": "Pon este c\xf3digo en tu m\xf3vil.\n",
          "authorize.e2ee.about.letterSealing": "\xbfQu\xe9 es Letter Sealing?",
          "authorize.e2ee.app.update":
            "LINE te ofrece m\xe1s seguridad.\nActualiza tu LINE.",
          "authorize.e2ee.desc1":
            "Debes verificar tu cuenta para habilitar Letter Sealing\nen la versi\xf3n de LINE para ordenador.",
          "authorize.e2ee.desc2": "Pon este c\xf3digo en tu m\xf3vil.\n",
          "authorize.e2ee.primary.cancel":
            "Se cancel\xf3 la verificaci\xf3n en tu dispositivo m\xf3vil. Mejor si lo intentas de nuevo.",
          "authorize.msg.closing.alert":
            "Si cierras esta ventana, no iniciar\xe1s sesi\xf3n.",
          "authorize.msg.timeout.alert":
            "Tu sesi\xf3n ha expirado. Int\xe9ntalo de nuevo.",
          "authorize.msg.useage.alert":
            'En tu LINE activa "Sesi\xf3n m\xfaltiple" en Configuraci\xf3n > Cuenta.',
          "authorize.remained.time": "Tiempo restante",
          "authorize.window.title": "Verificaci\xf3n en el PC",
          "autoSuggest.add.language": "A\xf1adir idioma",
          "autoSuggest.enable": "Habilitar sugerencias",
          "autoSuggest.enabled.language": "Idioma",
          "autoSuggest.msg.desc":
            "Se muestran emoticones y stickers relacionados con lo que escribas.",
          "autoSuggest.msg.desc.downloadFailed":
            "No se pudo bajar.\nInt\xe9ntalo de nuevo.",
          "autoSuggest.msg.download.all.emoji":
            "\xbfDescargas todos los emoticones?",
          "autoSuggest.msg.download.all.sticker":
            "Desc\xe1rgate los stickers para tener una vista preliminar.\n\xbfDescargas todos tus stickers?\n",
          "autoSuggest.title": "Sugerencias",
          "buddy.alert.common.failed.add.contact":
            "No se pudo a\xf1adir a tus Amigos.",
          "buddy.alert.not.allowed.add.contact":
            "Esta cuenta no acepta m\xe1s Amigos.",
          "buddy.btn.addBuddy": "A\xf1adir Amigos",
          "buddy.btn.blockBuddy": "Bloquear",
          "buddy.btn.chat": "Chatear",
          "buddy.btn.home": "Inicio",
          "buddy.btn.setting.profile": "Editar perfil",
          "buddy.btn.unblockBuddy": "Desbloquear",
          "buddy.btn.voip": "Llamada",
          "buddy.label.edit.title": "Ponerle otro nombre",
          "buddy.label.info.title": "Perfil",
          "buddylist.chooseFriend.empty.btn": "Chatear",
          "buddylist.chooseFriend.empty.desc": "Venga, empieza un chat.",
          "buddylist.chooseGroup.emty.desc":
            "A\xfan no has chateado\nen %1.\n\xa1An\xedmate!",
          "buddylist.chooseMe.empty.desc": "Venga, empieza un chat.",
          "buddylist.plusMenu.chat": "Chatear",
          "budy.label.unregisterUser": "No est\xe1 en tu lista de Amigos. ",
          "call.callsettingspreview.desc.nocamera":
            "No se te ver\xe1 porque parece que no tienes una c\xe1mara. \xbfTe unes de todas formas a la llamada?",
          "call.callsettingspreview.desc.nocameradetected":
            "No se pudo detectar tu c\xe1mara.",
          "call.callsettingspreview.desc.nomic":
            "No se te oir\xe1 porque parece que no tienes micr\xf3fono. \xbfTe unes de todas formas a la llamada?",
          "call.callsettingspreview.desc.nomicdetected":
            "No se pudo detectar tu micr\xf3fono.",
          "call.callsettingspreview.desc.nomicorcamera":
            "No se te oir\xe1 ni ver\xe1 porque parece que no tienes micr\xf3fono ni c\xe1mara. \xbfTe unes de todas formas a la llamada?",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "No se pudo detectar tu micr\xf3fono ni tu c\xe1mara.",
          "call.cameraoff.friend": "Tiene la c\xe1mara apagada.",
          "call.cameraoff.me": "Tienes la c\xe1mara apagada.",
          "call.chat.confirm.popup.start": "\xbfEmpiezas una llamada?",
          "call.chat.confirm.popup.start.btn.video": "Videollamada",
          "call.chat.confirm.popup.start.btn.voice": "Llamada por voz",
          "call.chatscreen.popup.alreadyinacall": "Est\xe1s en una llamada.",
          "call.doodling.popup.viewerupdaterequired":
            "Para poder usar esta funci\xf3n juntos, la otra persona debe actualizar su LINE.",
          "call.doodling.toast.doodlepaused":
            "Las anotaciones no se pueden usar mientras el v\xeddeo est\xe1 pausado.",
          "call.doodling.toast.noiosdoodle":
            "La funci\xf3n de garabatos no se puede usar en las pantallas compartidas de iOS.",
          "call.doodling.toast.sharepaused":
            "Compartir v\xeddeo est\xe1 pausado.",
          "call.doodling.toast.sharerupdaterequired":
            "Para que todos puedan usar esta funci\xf3n, el que est\xe1 compartiendo la pantalla debe actualizar su LINE.",
          "call.effects.menu.stickers": "Stickers",
          "call.effects.popup.graphiccardproblem":
            "Tu tarjeta gr\xe1fica no es compatible del todo con las videollamadas de LINE y es posible que experimentes problemas durante la llamada.",
          "call.effects.popup.removebgeffect":
            "Al borrar este fondo, el v\xeddeo pasar\xe1 a no tener fondo.",
          "call.effects.toast.stickersonetime":
            "Algunos Stickers no se pueden usar en las llamadas.",
          "call.error.popupdesc.featureunavailableondevice":
            "Alguien en esta llamada est\xe1 usando una funci\xf3n incompatible con tu dispositivo. \xdanete a la llamada con al app LINE para usar esta funci\xf3n.",
          "call.error.popupdesc.groupcallunavailable":
            "Las videollamadas en grupo no est\xe1n disponibles ahora.",
          "call.error.popupdesc.livetalkunavailable":
            "Los chat en directo no est\xe1n disponibles ahora.",
          "call.error.popupdesc.oacallunavailable":
            "Estamos trabajando para que puedas llamar cuanto antes.",
          "call.error.popupdesc.outdatedapp":
            "Alguien en esta llamada est\xe1 usando una funci\xf3n incompatible con tu versi\xf3n de LINE. Actualiza tu LINE para poder usarla.",
          "call.error.popupdesc.videocallunavailable":
            "Las videollamadas no est\xe1n disponibles ahora. Prueba con una llamada de voz.",
          "call.error.tooltip.audionosrc":
            "Comprueba que el micr\xf3fono funcione.",
          "call.error.unsupporteddevice":
            "No puedes hacer llamadas con LINE en este dispositivo.",
          "call.groupcall.leavebutton": "Salir",
          "call.participants.desc.noresults": "No encontramos nada.",
          "call.screen.toast.updaterequired":
            "Para poder ver los Stickers tiene que actualizar LINE.",
          "call.screenshare.taskbar.screenshare": "Pantalla para compartir",
          "call.screenshare.taskbar.ytsearch": "Buscar v\xeddeos YouTube",
          "call.screenshare.toast.shareerror":
            "%1 est\xe1 usando una funci\xf3n que comparte pantalla.",
          "call.screenshare.toast.unsupportedos":
            "Actualiza a Windows 10 o usa la app de LINE para ver la pantalla compartida.",
          "call.screenshare.youtube.popup.startvideo":
            "\xbfCompartes tu pantalla con los participantes de esta llamada?",
          "call.sharedcontent.desc.newdatatype":
            "Actualiza tu LINE para ver el contenido compartido por %1.",
          "call.toast.cpuheavyload":
            "Tu ordenador est\xe1 usando muchos recursos y la llamada se ver\xe1 afectada. Cierra otras aplicaciones primero.",
          "call.toast.handsfreebt.mic":
            'Cambiado al micr\xf3fono "%1". Conecta el altavoz al mismo dispositivo.',
          "call.toast.handsfreebt.speaker":
            'Cambiado al altavoz "%1". Conecta el micr\xf3fono al mismo dispositivo.',
          "call.video.filter.clear": "Clear",
          "call.video.filter.original": "Original",
          "call.viewmode.desc.focusview": "Enfoque",
          "call.viewmode.desc.focusviewcenter": "Enfoque (medio)",
          "call.viewmode.desc.focusviewleft": "Enfoque (izquierda)",
          "call.viewmode.desc.focusviewright": "Enfoque (derecha)",
          "call.viewmode.desc.gridview": "Galer\xeda",
          "call.viewmode.desc.separateview": "Vista compartida",
          "call.watchtogethermenu.desc.100kviewsth": "%1",
          "call.watchtogethermenu.desc.100kwatchingth": "%1",
          "call.watchtogethermenu.desc.10kviewsth": "%1",
          "call.watchtogethermenu.desc.10kwatchingth": "%1",
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1B mirando",
          "call.watchtogethermenu.desc.1bviews": "%1B vistas",
          "call.watchtogethermenu.desc.1eokpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1eokviews": "%1",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1K mirando",
          "call.watchtogethermenu.desc.1kviews": "%1K vistas",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1manviews": "%1",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1M mirando",
          "call.watchtogethermenu.desc.1mviews": "%1M vistas",
          "call.watchtogethermenu.desc.1mviewsth": "%1",
          "call.watchtogethermenu.desc.1mwatchingth": "%1",
          "call.watchtogethermenu.desc.daysago.one": "Hace %n d\xeda",
          "call.watchtogethermenu.desc.daysago.other": "Hace %n d\xedas",
          "call.watchtogethermenu.desc.hoursago.one": "Hace %n hora",
          "call.watchtogethermenu.desc.hoursago.other": "Hace %n horas",
          "call.watchtogethermenu.desc.justnow": "Justo ahora",
          "call.watchtogethermenu.desc.lessthan1kviewsth": "%1",
          "call.watchtogethermenu.desc.lessthan1kwatchingth": "%1",
          "call.watchtogethermenu.desc.minutesago.one": "Hace %n minuto",
          "call.watchtogethermenu.desc.minutesago.other": "Hace %n minutos",
          "call.watchtogethermenu.desc.monthsago.one": "Hace %n mes",
          "call.watchtogethermenu.desc.monthsago.other": "Hace %n meses",
          "call.watchtogethermenu.desc.peoplewatchingen": "%1 mirando",
          "call.watchtogethermenu.desc.userswatchinglivevideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideoen.one": "%n vistas",
          "call.watchtogethermenu.desc.userswatchingvideoen.other": "%n vistas",
          "call.watchtogethermenu.desc.yearsago.one": "Hace %n a\xf1o",
          "call.watchtogethermenu.desc.yearsago.other": "Hace %n a\xf1os",
          "call.youtube.desc.headphones": "Usa auriculares para evitar el eco.",
          "call.youtube.desc.noresults": "No encontramos nada.",
          "call.youtube.paste.descforonetoone":
            "Buscar v\xeddeos para ver con los dem\xe1s. Mejor con auriculares.",
          "call.youtube.popup.shareerror":
            "No se puede compartir este v\xeddeo de YouTube debido a un error. Prueba m\xe1s tarde.",
          "call.youtube.popupbutton.allow": "Permitir",
          "call.youtube.popupbutton.disallow": "No permitir",
          "call.youtube.popupdesc.clipboard":
            "Se pegar\xe1 autom\xe1ticamente el enlace del v\xeddeo de YouTube del navegador.",
          "call.youtube.popuptitle.clipboard":
            "Permite a LINE acceder al portapapeles",
          "call.youtube.statusbadge.premiering": "Estreno ahora",
          "call.youtube.title.trendingvideos": "V\xeddeos destacados",
          "call.youtube.videodesc.date": "Se estrena el %1",
          "call.youtube.videodesc.datevariable": "dd/mm/yyyy HH:mm",
          "capture.command.close": "Cerrar",
          "capture.command.copy": "Copiar",
          "capture.command.done": "Listo",
          "capture.command.draw": "Dibujar",
          "capture.command.gif": "Capturar GIF",
          "capture.command.gif.cancel": "\xbfCancelas los cambios realizados?",
          "capture.command.gif.create": "Creando GIF",
          "capture.command.gif.error.maxFileSize":
            "El archivo GIF que capturaste es de.\n(%1 MB)\nUsa archivos de menos de 20 MB.",
          "capture.command.gif.error.maxSize":
            "Elige una zona m\xe1s peque\xf1a para poder crear el GIF.\n",
          "capture.command.gif.error.size":
            "Selecciona un \xe1rea m\xe1s grande para hacer un GIF.\n",
          "capture.command.gif.stop": "Parar",
          "capture.command.gif.tooltip":
            "Capta partes de la pantalla y gu\xe1rdalas en GIF.",
          "capture.command.quit": "Salir",
          "capture.command.redo": "Rehacer",
          "capture.command.save": "Guardar",
          "capture.command.share": "Compartir",
          "capture.command.undo": "Deshacer",
          "capture.desc.need.os.recordscreen":
            "LINE necesita acceder a la funcio\u0301n de grabacio\u0301n de pantalla.",
          "capture.msg.onEditing": "\xbfCancelas los cambios realizados?",
          "capture.scan.error.maxFileSize":
            "\xa1Demasiado grande! Ajusta el tama\xf1o e int\xe9ntalo de nuevo.",
          "capture.scan.error.resolution":
            "Ajusta la resoluci\xf3n para capturar esta imagen.",
          "capture.tool.eclipse": "Redondo",
          "capture.tool.line": "L\xednea",
          "capture.tool.lineColor": "Color l\xednea",
          "capture.tool.mosaic": "Pixelar",
          "capture.tool.penwidth": "Ancho",
          "capture.tool.rectangle": "Cuadrado",
          "capture.tool.select": "Elegir",
          "capture.tool.shape": "Forma",
          "capture.tool.text": "Texto",
          "capture.tool.textColor": "Color de letra",
          "capture.tool.textSize": "Tama\xf1o de fuente",
          "capture.tool.textSize.big": "Grande",
          "capture.tool.textSize.medium": "Mediano",
          "capture.tool.textSize.small": "Peque\xf1o",
          "chat.action.leaveChat.confirm":
            "Al dejar este chat se eliminar\xe1 el historial.\n\xbfQuieres continuar?",
          "chat.alert.clipboard.largedata":
            "Es demasiado grande para copiarlo en el chat.",
          "chat.alert.file.open.fromNotbuddy":
            "Ten cuidado con los archivos de usuarios desconocidos.",
          "chat.alert.file.open.fromSquare":
            "Ten cuidado con los archivos de usuarios desconocidos.",
          "chat.alert.file.open.frombuddy":
            "Antes de abrirlo, asegu\u0301rate de que es seguro.",
          "chat.alert.file.open.notSupport": "Este archivo no es compatible.",
          "chat.alert.file.unsupported.all.one":
            "Este archivo no es compatible. \xbfLo comprimes y env\xedas?",
          "chat.alert.file.unsupported.all.other":
            "Estos archivos no son compatibles. \xbfLos comprimes y env\xedas?",
          "chat.alert.file.unsupported.some.one":
            "Uno de los archivos no es compatible. \xbfLo comprimes y env\xedas?",
          "chat.alert.file.unsupported.some.other":
            "%n archivos contienen un formato no compatible. \xbfLos comprimes y env\xedas?",
          "chat.alert.invite.alreadyinvited": "Ya se invit\xf3\na %1.  ",
          "chat.alert.invite.alreadyjoined": "%1 ya est\xe1\nen este grupo.  ",
          "chat.alert.invite.blockedbuddy":
            "No puedes invitar a los que est\xe9n bloqueados.",
          "chat.alert.invite.confirm": "\xbfInvitas a %1\nal chat?",
          "chat.alert.invite.notbuddy":
            "A\xf1ade a 1% como amigo\npara invitarlo al chat. ",
          "chat.alert.invite.verificationrequired":
            "Para unirte a un grupo con un c\xf3digo QR o con una invitaci\xf3n, tienes que verificar que tienes m\xe1s de 18 a\xf1os.",
          "chat.alert.sharePost": "\xbfCompartes notas\ny \xe1lbumes con %1?",
          "chat.alert.unavailable.file":
            "El per\xedodo de almacenamiento expir\xf3 y ya no se puede compartir este archivo.",
          "chat.alert.unsend.fail.error":
            "No se pudo anular el mensaje. Int\xe9ntalo de nuevo.",
          "chat.alert.unsend.fail.time":
            "No puedes cancelar el env\xedo de un mensaje si ha transcurrido demasiado tiempo desde que se envi\xf3.",
          "chat.alert.unsend.old.version":
            "Recuerda que no se anular\xe1 seg\xfan la versi\xf3n de LINE que use.",
          "chat.audio.tooltip": "Audio",
          "chat.btn.capture.tooltip": "Capturar pantalla",
          "chat.btn.close.tooltip": "Cerrar",
          "chat.btn.emoji": "Emoticones",
          "chat.btn.facemark": "Emoticonos",
          "chat.btn.file": "Enviar archivo",
          "chat.btn.keepmemo.tooltip": "Keep Memo",
          "chat.btn.max.tooltip": "M\xe1x.",
          "chat.btn.menu.tooltip": "Men\xfa",
          "chat.btn.min.tooltip": "M\xedn.",
          "chat.btn.reset.tooltip": "Recuperar",
          "chat.btn.sticker": "Stickers",
          "chat.btn.sticker.tooltip": "Stickers",
          "chat.btn.voip": "Llamar gratis",
          "chat.contact.label": "Contacto",
          "chat.context.menu.search.name": "Buscar nombres",
          "chat.context.menu.send.contact": "Enviar contacto",
          "chat.context.menu.talk": "Chatear en privado",
          "chat.desc.quit.uploading":
            "Est\xe1s mandando archivos en un chat.\nSi cierras LINE, no se mandar\xe1n.",
          "chat.edit.alert.unavailable.picture": "Ya no est\xe1 disponible.",
          "chat.emoji.label.animation.unavailable":
            "Las animaciones de los stickers en tu m\xf3vil.",
          "chat.emoji.label.recentIconDesc1":
            "Aqu\xed, los \xfaltimos emoticones usados.",
          "chat.emoji.label.recentIconDesc2":
            "\xbfY si env\xedas alg\xfan emotic\xf3n?",
          "chat.emoji.label.recentLetterDesc1":
            "Aqu\xed, los \xfaltimos stickers usados.",
          "chat.emoji.label.recentLetterDesc2": "\xa1D\xedselo con un sticker!",
          "chat.emoji.label.recentStickerDesc1":
            "Aqu\xed, los \xfaltimos emoticonos usados.",
          "chat.emoji.label.recentStickerDesc2":
            "\xa1D\xedselo con un sticker!",
          "chat.err.file.broken":
            "Error al guardar el archivo.\nAseg\xfarate de que tienes suficiente espacio libre en tu ordenador.",
          "chat.err.file.download.failed": "No se pudo guardar el archivo.",
          "chat.err.file.download.localError":
            "No se pudo guardar el archivo. Mejor si lo intentas luego.",
          "chat.err.file.exceed.capacity":
            "\xa1Vaya! No m\xe1s de %1 archivos a la vez.",
          "chat.err.file.exceed.dailyCapacity":
            "\xa1Vaya! Solo puedes enviar %1 archivos al d\xeda.",
          "chat.err.file.folderPermission":
            "Error al guardar el archivo en la carpeta seleccionada.\nElige otra ubicaci\xf3n.",
          "chat.err.file.need.space":
            "No tienes espacio en tu dispositivo. Libera algo de espacio e int\xe9ntalo de nuevo.",
          "chat.err.file.open":
            "Se est\xe1 usando el archivo. Ci\xe9rralo y m\xe1ndalo de nuevo.",
          "chat.err.file.some.unpardoned":
            "Este formato no es compatible.\nSe enviar\xe1n los dem\xe1s archivos.\n",
          "chat.err.file.unpardoned":
            "Va a ser que no. Este formato no es compatible.",
          "chat.err.media.copyFailed":
            "Codificando...\nMejor si lo intentas luego.",
          "chat.err.media.infoLoadFailed":
            "Hubo un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "chat.error.badwords":
            "No puedes enviar este tipo de contenidos.\nElige otro e int\xe9ntalo de nuevo.",
          "chat.error.popup.noauth":
            "LINE no tiene permiso para abrir archivos de esta carpeta.",
          "chat.file.audio.sizeExceeds":
            "El m\xe1ximo es de 30 MB para tus archivos de audio.",
          "chat.file.cancel.tooltip": "Cancelar",
          "chat.file.cantFindFile": "No se encontr\xf3 el archivo.",
          "chat.file.closeConfirm":
            "Si cierras esta ventana, cancelar\xe1s las transferencias.\n\xbfLa cierras?",
          "chat.file.countExceeds": "Solo %1 archivos a la vez.",
          "chat.file.label.expired": "Expir\xf3",
          "chat.file.video.sizeExceeds":
            "El m\xe1ximo es de 200 MB para tus v\xeddeos.",
          "chat.flex.btn.send": "Listo",
          "chat.flex.date.select": "Fecha",
          "chat.flex.datetime.select": "Fecha y hora",
          "chat.flex.error.unknown":
            "Vaya, no lo puedes usar con esta versi\xf3n de LINE.",
          "chat.flex.time.select": "Hora",
          "chat.group.msg.e2ee.guide": "Chat protegido\ncon Letter Sealing.",
          "chat.group.noMember.placeholder":
            "No hay usuarios con los que chatear.",
          "chat.grouphome.label.enjoySns.title":
            "Notas y \xe1lbumes, todo al alcance de tu mano.\n",
          "chat.image.tooltip": "Fotos",
          "chat.input.placeholder": "Tu mensaje",
          "chat.inputbar.msg.album": "\xc1lbum",
          "chat.inputbar.msg.albumcontents": "\xcdtems \xc1lbum",
          "chat.label.del": "Borrar",
          "chat.label.makeAlbum": "Se cre\xf3 el \xe1lbum %1.",
          "chat.label.open": "Abrir",
          "chat.label.openFile": "Abrir archivo",
          "chat.label.openFolder": "Abrir carpeta",
          "chat.label.playback": "Reproducir",
          "chat.label.retry": "Reenviar",
          "chat.label.save": "Guardar",
          "chat.label.saveAs": "Guardar como...",
          "chat.label.saveOpen": "Guardar y abrir",
          "chat.label.sendFail": "\xa1No se pudo enviar!",
          "chat.label.share": "Compartir",
          "chat.label.showAlbum": "Ver \xe1lbum\xa0",
          "chat.label.showPost": "Ver nota",
          "chat.label.showPrev": "Mostrar otros chats",
          "chat.label.totalMediaCount": "%1 en total",
          "chat.linemusic.shared": "Compartiste m\xfasica.",
          "chat.linemusic.shared.other": "%1 te mand\xf3 m\xfasica.",
          "chat.list.call":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Duraci\xf3n]]>',
          "chat.list.call.canceled":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Colgaste]]>',
          "chat.list.call.icon":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\">]]>',
          "chat.list.call.missedCall":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Te llam\xe9]]>',
          "chat.list.call.rejected":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> No responde]]>',
          "chat.list.desc.read.unread.all":
            "Todos los mensajes se marcaron como le\xeddos.",
          "chat.list.group.createdby": "Creado por:",
          "chat.list.group.invite": "%1 te invit\xf3 a este grupo.",
          "chat.list.group.layer": "Te invitaron a este grupo.",
          "chat.list.group.nogroupcreator": "Ya no est\xe1 en este grupo.",
          "chat.list.linecall": "LINE Out",
          "chat.list.mention": "Te mencionaron.",
          "chat.list.menu.clear.all.unreadmessage": "Ya lo le\xed",
          "chat.list.menu.sort.favorites": "Favoritos",
          "chat.list.menu.sort.time": "Hora recibido",
          "chat.list.menu.sort.unreadcount": "Mensajes sin leer",
          "chat.list.menu.tooltip": "Ordenar por",
          "chat.list.sortBtn.tooltip": "Mensajes sin leer",
          "chat.list.sortByUnread.desc": "Arriba, los mensajes sin leer. ",
          "chat.menu.Image.download": "Se complet\xf3 la descarga.",
          "chat.menu.Image.download.fail": "Vaya, no se pudo guardar.\n",
          "chat.menu.alarmOff": "No molestar",
          "chat.menu.alarmOn": "Av\xedsame",
          "chat.menu.albums": "\xc1lbum",
          "chat.menu.alwaysTop": "Siempre visible",
          "chat.menu.backgroundSetting": "Fondo",
          "chat.menu.backgroundSetting.apply": "Aplicar",
          "chat.menu.backgroundSetting.cancel": "Cancelar",
          "chat.menu.backgroundSetting.file": "Elegir archivo",
          "chat.menu.backgroundSetting.image.failed":
            "No puedes usar la imagen designada.",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "Solo im\xe1genes de % MB o menos.",
          "chat.menu.backgroundSetting.option": "Mostrar",
          "chat.menu.backgroundSetting.option.detail": "Mosaico",
          "chat.menu.backgroundSetting.option.fill": "Rellenar",
          "chat.menu.backgroundSetting.photo.save.failed":
            "No se pudo guardar la imagen.",
          "chat.menu.backgroundSetting.photo.transparency": "Transparencia",
          "chat.menu.backgroundSetting.photoGuide":
            "Personaliza el fondo de tus chats.",
          "chat.menu.backgroundSetting.reset": "Resetear",
          "chat.menu.backgroundSetting.select": "Elegir fondo",
          "chat.menu.backgroundSetting.tab.color": "Color",
          "chat.menu.backgroundSetting.tab.illustration": "Ilustraci\xf3n",
          "chat.menu.backgroundSetting.tab.photo": "Im\xe1genes",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "No disponible en modo oscuro.",
          "chat.menu.copy": "Copiar",
          "chat.menu.delete": "Borrar historial",
          "chat.menu.group.noMember": "No hay nadie aqu\xed.",
          "chat.menu.invite": "Invitar",
          "chat.menu.invite.group": "Miembros",
          "chat.menu.leave": "Dejar chat",
          "chat.menu.make": "Crea un grupo",
          "chat.menu.msg.announce": "Recordar",
          "chat.menu.msg.unsend": "Anular",
          "chat.menu.openAlbum": "Ver todas las fotos",
          "chat.menu.openAlbum.download": "Se complet\xf3 la descarga.",
          "chat.menu.openAlbum.download.fail": "Error al descargar.",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "No se pudo descargar a esta carpeta.\nElige otro lugar para descargar.",
          "chat.menu.openAlbum.download.open": "Abrir carpeta",
          "chat.menu.openAlbum.downloading": "Descargando...",
          "chat.menu.openAlbum.retry": "Reintentar",
          "chat.menu.openAlbum.saveKeep": "Se guard\xf3 en Keep.",
          "chat.menu.openAlbum.saveKeep.open": "Abrir Keep",
          "chat.menu.openAlbum.savingKeep": "Guardando en Keep...",
          "chat.menu.openAlbum.savingKeep.fail": "No se pudo guardar en Keep.",
          "chat.menu.openAlbum.selected": "%1 elementos elegidos",
          "chat.menu.openLink": "Ver enlaces",
          "chat.menu.openLink.noURL": "No se enviaron enlaces aqu\xed.",
          "chat.menu.paste": "Pegar",
          "chat.menu.recommend": "Para ti",
          "chat.menu.save": "Guardar chat",
          "chat.menu.save.note": "Guardar en Notas",
          "chat.menu.searchMsgs": "Buscar chats",
          "chat.menu.selectAll": "Elegir todo",
          "chat.menu.selectedCopy": "Copia el texto seleccionado",
          "chat.menu.settings": "Configuraci\xf3n",
          "chat.menu.showAllContents": "Ver todo",
          "chat.menu.sticker.openWebStore": "Tienda de stickers",
          "chat.menu.sticker.showDetail": "Abrir",
          "chat.menu.translation": "Traducir",
          "chat.message.present.emoji.receive": "\xa1Te regalaron emoticones!",
          "chat.message.present.receive.confirm": "Aceptar",
          "chat.message.present.sticker.receive": "\xa1Te regalaron stickers!",
          "chat.message.present.theme.receive":
            "\xa1Te regalaron un tema!\n\xc1brelo con el LINE de tu m\xf3vil.",
          "chat.message.sharealbum": "Comparti\xf3 un \xc1lbum.",
          "chat.message.sharenote": "Comparti\xf3 una Nota.",
          "chat.msg.album.addphoto.one": "%n \xedtems a\xf1adido al \xe1lbum.",
          "chat.msg.album.addphoto.other":
            "%n \xedtems a\xf1adidos al \xe1lbum.",
          "chat.msg.album.create": "Se cre\xf3 el \xe1lbum %1.",
          "chat.msg.album.delete": "%1 borr\xf3 el \xe1lbum %2.",
          "chat.msg.album.removephoto":
            '%1 elimin\xf3 \xedtems del \xe1lbum "%2".',
          "chat.msg.album.rename":
            "%1 cambi\xf3 el nombre del \xe1lbum %2 a %3.",
          "chat.msg.album.viewPhoto": "Ver \xe1lbum\xa0",
          "chat.msg.applink.app.recv":
            "\xa1\xc9chale un vistazo a %1 en tu m\xf3vil!",
          "chat.msg.applink.app.sent": "Presentaste a %1.",
          "chat.msg.applink.friend.recv":
            "%1 quiere que se\xe1is amigos. M\xe1s en tu m\xf3vil.",
          "chat.msg.applink.friend.sent":
            "Mandaste una solicitud de amistad a %1.",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "Colgaste",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[Llamada con Letter Sealing.\nVer\xe1s un<img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11">en las llamadas seguras.]]>',
          "chat.msg.call.missedCall": "Te llam\xe9",
          "chat.msg.call.rejected": "No responde",
          "chat.msg.changeGroupImage": "%1 cambi\xf3 la foto del grupo.",
          "chat.msg.changeGroupName": "%1 cambi\xf3 el nombre del grupo a %2.",
          "chat.msg.chatevent.unknown":
            "No est\xe1 disponible en la versi\xf3n de ordenador de LINE.\n\xa1\xc1brelo con tu m\xf3vil!",
          "chat.msg.e2ee.decryptingMsg": "Descifrando...",
          "chat.msg.e2ee.guide": "Chat protegido\ncon Letter Sealing.",
          "chat.msg.e2ee.needKeyExchange":
            "Mensaje cifrado.\nVerifica tu identidad para poder comprobarlo.",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\nNo se muestra el mensaje, porque no se pudo desencriptar. Dile a tu Amigo que te lo mande de nuevo.",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "Este mensaje no est\xe1 disponible.\nNo se puede comprobar la transferencia del mensaje de tu dispositivo anterior.",
          "chat.msg.e2ee.setting.disabled":
            "Mensaje encriptado. \xc1brelo con tu tel\xe9fono.",
          "chat.msg.file.change.type.audio":
            "Es muy grande y algunos dispositivos no lo podr\xe1n reproducir.",
          "chat.msg.file.change.type.video":
            "Es muy grande y algunos dispositivos no lo podr\xe1n reproducir.",
          "chat.msg.file.ext": "Extensi\xf3n",
          "chat.msg.file.period": "Hasta:",
          "chat.msg.file.received": "%1 envi\xf3 un archivo.",
          "chat.msg.file.sent": "Se envi\xf3 el archivo.",
          "chat.msg.file.size": "Tama\xf1o: %1",
          "chat.msg.file.waiting": "En espera\u2026",
          "chat.msg.groupInvite": "%1 invit\xf3 a %2 al grupo.",
          "chat.msg.groupboard.updated":
            "Actualizaron el muro del grupo. M\xe1s en tu m\xf3vil.",
          "chat.msg.home.shared": "Se comparti\xf3 el post de %1.",
          "chat.msg.inviteCancel":
            "%1 cancel\xf3 la invitaci\xf3n de %2 al grupo.",
          "chat.msg.joinGroup": "%1 se uni\xf3 al grupo.",
          "chat.msg.kickout": "%1 quit\xf3 a %2 del grupo.",
          "chat.msg.leave": "%1 dej\xf3 el chat.",
          "chat.msg.leaveGroup": "%1 dej\xf3 el grupo.",
          "chat.msg.leavegroup.1.n.confirm":
            "Si sales, no tendr\xe1s acceso al historial de chat.",
          "chat.msg.nomember": "Aqu\xed no hay nadie",
          "chat.msg.preview.default": "Abrir enlace",
          "chat.msg.read": "Le\xeddo",
          "chat.msg.search.cancelSearch": "Cancelar",
          "chat.msg.search.hint.fromName": "\xbfQu\xe9 nombre vas a poner?",
          "chat.msg.search.hint.message": "\xbfQu\xe9 buscas?",
          "chat.msg.search.hint.roomName": "Buscar chats y mensajes",
          "chat.msg.search.result.hint.addOption":
            "Cambia los t\xe9rminos de b\xfasqueda.",
          "chat.msg.search.result.hint.noResultReason1":
            "Si has cambiado de ordenador puede que no encuentres nada. ",
          "chat.msg.search.result.hint.noResultReason2":
            "Igual llevas m\xe1s de 2 semanas sin usar LINE y por eso no te sale nada. ",
          "chat.msg.search.result.noResult": "No encontramos nada.",
          "chat.msg.search.title.date": "Fecha",
          "chat.msg.search.title.fromName": "Remitente",
          "chat.msg.search.title.message": "Mensaje",
          "chat.msg.search.title.roomName": "Chat",
          "chat.msg.smartphone": "M\xe1s en tu m\xf3vil.",
          "chat.msg.start.unreadMessage": "Mensajes sin leer",
          "chat.msg.sticker.gift.from.buddy": "Tienes un regalo : ) ",
          "chat.msg.sticker.gift.from.me": "\xa1Enviaste el regalo!",
          "chat.msg.sticker.period.expired":
            "Ya no est\xe1 disponible.\nCompra de nuevo %1 con tu m\xf3vil.",
          "chat.msg.sticon.period.expired":
            "%1 expir\xf3. C\xf3mpralo de nuevo en la tienda de stickers de tu LINE.",
          "chat.msg.sync": "Sincronizando mensajes...",
          "chat.msg.text.seeAll": "M\xe1s",
          "chat.msg.theme.gift.from.me": "\xa1Enviaste el regalo!",
          "chat.msg.unknown.message": "\xa1Vaya! No puedes ver este mensaje.",
          "chat.msg.unread": "Sin leer",
          "chat.msgbox.alarmoff.description":
            "No se te notificar\xe1 cuando haya mensajes nuevos.",
          "chat.msgbox.bannedWord":
            "Contiene palabras prohibidas y no puede enviarse.",
          "chat.msgbox.save.description":
            "Este chat se guardar\xe1 en formato de texto.\n",
          "chat.msgbox.save.dontShow": "No mostrar m\xe1s",
          "chat.msgbox.save.empty": "No tienes mensajes para guardar.",
          "chat.noMember.group.error.noAuth":
            "Solo lo pueden usar los miembros de este grupo.",
          "chat.noMember.singleRoom.error.album":
            "No puedes a\xf1adir m\xe1s \xedtems o crear m\xe1s \xe1lbumes en este chat.",
          "chat.noMember.singleRoom.error.note":
            "No puedes a\xf1adir m\xe1s Notas en este chat.",
          "chat.noinput.group.invitation": "\xbfA qu\xe9 esperas?",
          "chat.notes.notification.sharenote": "Comparti\xf3 una Nota.",
          "chat.notimessage.sharealbum": "\xc1lbum compartido",
          "chat.poll.message.btn": "M\xe1s",
          "chat.poll.title": "Encuesta",
          "chat.popup.btn.pasteAsImage": "Imagen",
          "chat.popup.btn.pasteAsText": "Texto",
          "chat.popup.clipboard.withImage": "C\xf3mo copias el contenido.",
          "chat.popup.desc.grouplimit":
            "Excediste el m\xe1ximo. Para unirte a otro grupo, deja alg\xfan grupo que ya no uses.",
          "chat.popup.title.grouplimit": "L\xedmite excedido",
          "chat.popupbutton.delete": "Eliminar mensaje",
          "chat.popupbutton.resend": "Reenviar",
          "chat.popupdesc.serveroutage1":
            "Debido a un error, no pueden ver este mensaje. \xbfLo env\xedas de nuevo?",
          "chat.popupdesc.serveroutagegroup":
            "Debido a un error, algunos miembros del grupo no pueden ver este mensaje. \xbfLo env\xedas de nuevo?",
          "chat.popuptitle.serveroutage": "Reenviar",
          "chat.profile.menu.displayName.search": "Buscar mensajes por nombre",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_icon.png",
          "chat.reply.album": "\xc1lbum: %1",
          "chat.reply.jump": "Volver al mensaje",
          "chat.reply.jump.delete": "Mensaje anulado",
          "chat.reply.no.original.message": "Mensaje no disponible.",
          "chat.reply.note.no.text": "Nota compartida en %1",
          "chat.reply.note.text": "Nota: %1",
          "chat.room.msg.invitorNotBuddy":
            "%1 no es tu amigo y te acaba de invitar a un grupo.",
          "chat.save.location": "Mi ubicaci\xf3n",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_icon.png",
          "chat.setting.theme.snow.disable": "Desactivar efecto nieve",
          "chat.setting.theme.snow.enable": "Activar efecto nieve",
          "chat.share.notexist":
            "No anda por aqu\xed o borr\xf3 su cuenta de LINE.",
          "chat.sharing.notification.sharealbum": "Comparti\xf3 un \xc1lbum.",
          "chat.sharing.notification.sharenote": "Comparti\xf3 una Nota.",
          "chat.status.block":
            "No puedes enviar mensajes a los que est\xe9n bloqueados.",
          "chat.status.disconn":
            "El env\xedo de mensajes se ha suspendido temporalmente.",
          "chat.status.e2ee.verification.fail":
            "Se cancel\xf3 la cuenta de verificaci\xf3n de Letter Sealing.\n\nVerif\xedcala para ver los mensajes cifrados.\n",
          "chat.status.keyExchangeBtn": "Verificar mi identidad",
          "chat.status.leave": "No puedes enviar mensajes si dejas el chat.",
          "chat.status.needKeyExchange":
            "Para usar Letter Sealing en la versi\xf3n de LINE para PC tienes que verificar tu identidad.",
          "chat.system.inviteeoverlimit":
            "No pueden unirse porque excedieron el l\xedmite de grupos.\n%1",
          "chat.system.msg.a.unsend": "%1 anul\xf3 un mensaje enviado.",
          "chat.system.msg.unsend": "Mensaje anulado.",
          "chat.systemmessage.upgradegroup":
            "Configuraci\xf3n de grupo modificada. Los que quieran unirse ahora tienen que aceptar la invitaci\xf3n.",
          "chat.title.chatMember": "Miembros",
          "chat.toast.notifications.mute":
            "Desactivaste las notificaciones de este chat.",
          "chat.toast.notifications.unmute":
            "Activaste las notificaciones de este chat.",
          "chat.trans.tooltip": "Transparencia",
          "chat.video.play": "Reproducir",
          "chat.video.replay": "Repetir",
          "chat.video.tooltip": "V\xeddeos",
          "chatapp.giphy.forward":
            "No se puede reenviar archivos GIF con GIPHY.",
          "chatapp.giphy.forward.next":
            "No se puede reenviar archivos GIF con GIPHY. \xbfReenv\xedas otros archivos?",
          "chatapp.giphy.keep":
            "No se puede guardar archivos GIF con GIPHY en Keep.",
          "chatapp.giphy.keep.next":
            "No se puede guardar archivos GIF con GIPHY en Keep. \xbfGuardas otros archivos?",
          "chatl.share.alert.error":
            "No se puede compartir porque se ha cancelado el env\xedo.",
          "chatl.share.alert.max": "Solo puede seleccionar hasta %1 chats.",
          "chatl.share.toast.multiple.one": "Mensaje compartido en %n chat.",
          "chatl.share.toast.multiple.other": "Mensaje compartido en %n chats.",
          "chatl.share.toast.single": "Compartido con %1.",
          "chatl.sharetotalk.title": "Compartir con...",
          "chatlist.allinone.close.btn": "Cerrar chats",
          "chatlist.allinone.open.btn": "Expandir chats",
          "chatlist.btn.startchat": "Chat nuevo",
          "chatlist.chooseChat.empty.btn": "Mostrar aqu\xed",
          "chatlist.chooseChat.empty.desc":
            "Tienes el chat en otra ventana.\n\xbfLo muestras aqu\xed?",
          "chatlist.context.menu.seperateChat.label": "Abrir en otra ventana",
          "chatlist.guide.allinone.text":
            "Agranda esta ventana para abrir los chats en otra.",
          "chatlist.guide.chatStart.text": "\xbfChateamos?",
          "chatlist.hide.confirm":
            "Si ocultas los chats, no se eliminan los mensajes. ",
          "chatlist.keepmemo.desc.msg":
            "Guarda esos textos, fotos, v\xeddeos y enlaces.",
          "chatlist.keepmemo.desc.title": "Keep Memo",
          "chatlist.search.hint.chatList": "Buscar chats",
          "chatlist.sort.unreadRoom": "Ver chats con mensajes sin leer",
          "chatlive.end.popup.done": "Finalizar",
          "chatlive.error.notavailable": "Ya empezaron una llamada.",
          "chatlive.maximum":
            "Se super\xf3 el n\xfamero m\xe1ximo de participantes.",
          "chatlive.msg.over.traffic":
            "Hay demasiadas transmisiones en este momento.\nInt\xe9ntalo m\xe1s tarde.",
          "chatlive.screen.share.ongoing.body":
            "Se est\xe1 compartiendo tu pantalla.",
          "chatlive.screen.share.ongoing.stop": "Parar",
          "chatlive.screen.share.ongoing.top": "Compartiendo pantalla...",
          "chatlive.screen.share.select.body":
            "Elige qu\xe9 pantalla de PC vas a compartir.",
          "chatlive.screen.share.select.done": "Compartir",
          "chatlive.screen.share.select.item": "Pantalla %1",
          "chatlive.screen.share.select.title": "Pantalla para compartir",
          "chatlive.viewer.list.title.other": "%n espectadores",
          "chatlive.viewer.list.title.plurals.one": "%n espectador",
          "chatlive.viewer.list.title.plurals.other": "%n espectadores",
          "chatroom.guide.sticker.text":
            "Dale vida a tus chats con los stickers.",
          "chatsettings.desc.membersjoinautomatically":
            "Se podr\xe1n unir autom\xe1ticamente en cuanto se les invite. Desactiva esta opci\xf3n para solicitar que acepten la invitaci\xf3n antes de unirse.",
          "chatsettings.popup.desc.onewaywarning":
            "Recuerda que no podr\xe1s deshacer esta acci\xf3n.",
          "chatsettings.popup.title.onewaywarning": "No se puede deshacer",
          "chatsettings.title.membersjoinautomatically":
            "Unirse autom\xe1ticamente",
          "choosefriends.button.createGroup": "Crear un grupo",
          "choosefriends.button.gotochatsingle": "Chat privado",
          "choosefriends.button.invite": "Invitar",
          "choosefriends.title.default": "Miembros",
          "choosefriends.title.numselected": "%1 elegidos",
          "chrome.common.toast.unabletocopy":
            "No se pudo copiar. Prueba de nuevo.",
          "chrome.setting.desc.notiforsp":
            "Apaga las notificaciones cuando inicies sesi\xf3n en la versi\xf3n Chrome.",
          "chrome.time.desc.outofrangetime": "HH:mm",
          "chrome.time.toast.outofrange": "La hora debe ser anterior a %1.",
          "chrome.time.toast.outofrange2": "La hora debe ser %1 o anterior.",
          "chrome.user.error.failedToBlock":
            "Prueba de nuevo a bloquear esta cuenta m\xe1s tarde.",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "No se pudo rechazar la invitaci\xf3n.",
          "chrome.user.error.failedToHide":
            "Prueba de nuevo a ocultar esta cuenta m\xe1s tarde.",
          "chrome.user.error.failedToJoinGroup":
            "Prueba de nuevo a unirte a este grupo m\xe1s tarde.",
          "chrome.user.error.failedToLeaveGroup": "No se pudo dejar el grupo.",
          "chrome.user.error.failedToMarkFavorite":
            "No se pudo a\xf1adir a favoritos.",
          "chrome.user.error.failedToShowUser":
            "Prueba de nuevo a mostrar esta cuenta m\xe1s tarde.",
          "chrome.user.error.failedToUnblock": "No se pudo desbloquear.",
          "common.album.empty.desc": "Tus momentos, tu gente.",
          "common.alert.errorcode": "C\xf3digo de error: %1",
          "common.alert.notsupported":
            "No es compatible con esta versi\xf3n.\nEs hora de actualizar tu LINE.",
          "common.alert.unsend.content":
            "El env\xedo de este contenido lo anul\xf3 el que lo envi\xf3.",
          "common.alert.unsend.multi.contents":
            "Se excluir\xe1n los art\xedculos sin enviar.",
          "common.alert.unsupported.osversion":
            "La versi\xf3n de tu OS actual no es compatible con esta funci\xf3n. Actualiza tu OS para poder usar esta funci\xf3n.",
          "common.alert.update.title": "Actualizar",
          "common.alert.version.other":
            "Una versi\xf3n diferente de LINE ya est\xe1 abierta.",
          "common.am": "a.m.",
          "common.btn.back": "Volver",
          "common.btn.cancel": "Cancelar",
          "common.btn.capture.option": "Ocultar ventana al hacer captura.",
          "common.btn.capture.option.tooltip":
            "Opciones de captura de pantalla",
          "common.btn.delete": "Eliminar",
          "common.btn.discard": "Salir",
          "common.btn.forward": "Compartir",
          "common.btn.hide": "Ocultar",
          "common.btn.next": "Siguiente",
          "common.btn.quit": "Cerrar LINE",
          "common.btn.retry": "Reintentar",
          "common.btn.run": "Bloquear",
          "common.btn.save": "Guardar",
          "common.btn.seemore": "M\xe1s",
          "common.btn.submit": "Vale",
          "common.btn.unhide": "Mostrar",
          "common.cancel": "Cancelar",
          "common.cancelalert.desc":
            "Perder\xe1s el texto que has puesto si sales de esta p\xe1gina.",
          "common.code.tooltip":
            "No puedes escanear la imagen del c\xf3digo QR.",
          "common.content.address.share.from.buddy":
            "%1 comparti\xf3 la info de un contacto.",
          "common.content.address.share.from.me": "Enviaste un contacto.",
          "common.content.applink.app.recv": "\xbfConoces a %1?",
          "common.content.applink.app.sent": "Presentaste a %1.",
          "common.content.applink.friend.recv":
            "%1 quiere que se\xe1is amigos.",
          "common.content.applink.friend.sent":
            "Mandaste una solicitud de amistad a %1.",
          "common.content.audio": "%1 envi\xf3 un archivo de audio.",
          "common.content.audio.mine": "Enviaste un archivo de audio.",
          "common.content.coupon.message.postfix": "M\xe1s en tu m\xf3vil. ",
          "common.content.group.note.updated": "\xa1Nota nueva!",
          "common.content.group.note.updated.myself": "Nota nueva",
          "common.content.groupboard.from.buddy":
            "%1 actualiz\xf3 el muro del grupo.",
          "common.content.groupboard.from.me":
            "Actualizaron el muro del grupo.",
          "common.content.home.shared": "Se comparti\xf3 el post de %1.",
          "common.content.home.shared.myself": "Se comparti\xf3 el post de %1.",
          "common.content.image": "%1 mand\xf3 una foto.",
          "common.content.image.mine": "Mandaste una foto.",
          "common.content.invite": "Te invitaron a %1.",
          "common.content.location.from.buddy": "%1 mand\xf3 su ubicaci\xf3n.",
          "common.content.location.from.me": "Mandaste tu ubicaci\xf3n.",
          "common.content.mantoman.note.newpost": "Nota nueva",
          "common.content.mantoman.note.newpost.myself": "Nota nueva",
          "common.content.normal": "te envi\xf3 un mensaje.",
          "common.content.pdf": "%1 envi\xf3 un archivo PDF.",
          "common.content.pdf.mine": "Enviaste un archivo PDF.",
          "common.content.presence.join": "%1 se ha unido.",
          "common.content.presence.join.multiple.plurals.few":
            "%1 y %n m\xe1s est\xe1n en el chat.",
          "common.content.presence.join.multiple.plurals.many":
            "%1 y %n m\xe1s est\xe1n en el chat.",
          "common.content.presence.join.multiple.plurals.one":
            "%1 y %n m\xe1s est\xe1n en el chat.",
          "common.content.presence.join.multiple.plurals.other":
            "%1 y %n m\xe1s est\xe1n en el chat.",
          "common.content.presence.join.multiple.plurals.two":
            "%1 y %n m\xe1s est\xe1n en el chat.",
          "common.content.presence.join.multiple.plurals.zero":
            "%1 y %n m\xe1s est\xe1n en el chat.",
          "common.content.presence.leave": "%1 dej\xf3 el chat.",
          "common.content.sticker": "%1 envi\xf3 un sticker.",
          "common.content.sticker.gift.from.buddy":
            "\xa1%1 te mand\xf3 un regalo!",
          "common.content.sticker.gift.from.me": "\xa1Enviaste el regalo!",
          "common.content.sticker.mine": "Mandaste un sticker.",
          "common.content.theme.gift.from.buddy":
            "\xa1Lleg\xf3 un regalo de %1!",
          "common.content.theme.gift.from.me": "\xa1Enviaste el regalo!",
          "common.content.timeline.post":
            "Haz clic para ver el post en el navegador.",
          "common.content.video": "%1 envi\xf3 un v\xeddeo.",
          "common.content.video.mine": "Enviaste un v\xeddeo.",
          "common.continue": "Continuar",
          "common.country.name.ae": "United Arab Emirates",
          "common.country.name.at": "Austria",
          "common.country.name.au": "Australia",
          "common.country.name.bd": "Bangladesh",
          "common.country.name.be": "Belgium",
          "common.country.name.bg": "Bulgaria",
          "common.country.name.br": "Brazil",
          "common.country.name.ca": "Canada",
          "common.country.name.ch": "Switzerland",
          "common.country.name.cn": "China",
          "common.country.name.cy": "Cyprus",
          "common.country.name.cz": "Czech Republic",
          "common.country.name.de": "Germany",
          "common.country.name.dk": "Denmark",
          "common.country.name.ee": "Estonia",
          "common.country.name.es": "Spain",
          "common.country.name.fi": "Finland",
          "common.country.name.fr": "France",
          "common.country.name.gb": "United Kingdom",
          "common.country.name.gr": "Greece",
          "common.country.name.hk": "Hong Kong",
          "common.country.name.hr": "Croatia",
          "common.country.name.ht": "Haiti",
          "common.country.name.hu": "Hungary",
          "common.country.name.id": "Indonesia",
          "common.country.name.ie": "Ireland",
          "common.country.name.il": "Israel",
          "common.country.name.in": "India",
          "common.country.name.ir": "Iran",
          "common.country.name.is": "Iceland",
          "common.country.name.it": "Italy",
          "common.country.name.jp": "Japan",
          "common.country.name.kg": "Kyrgyzstan",
          "common.country.name.kh": "Cambodia",
          "common.country.name.kr": "South Korea",
          "common.country.name.kz": "Kazakhstan",
          "common.country.name.la": "Laos",
          "common.country.name.li": "Liechtenstein",
          "common.country.name.lk": "Sri Lanka",
          "common.country.name.lt": "Lithuania",
          "common.country.name.lu": "Luxembourg",
          "common.country.name.lv": "Latvia",
          "common.country.name.ma": "Morocco",
          "common.country.name.mm": "Myanmar",
          "common.country.name.mt": "Malta",
          "common.country.name.mx": "Mexico",
          "common.country.name.my": "Malaysia",
          "common.country.name.ng": "Nigeria",
          "common.country.name.nl": "Netherlands",
          "common.country.name.no": "Norway",
          "common.country.name.nz": "New Zealand",
          "common.country.name.om": "Oman",
          "common.country.name.ph": "Philippines",
          "common.country.name.pl": "Poland",
          "common.country.name.pt": "Portugal",
          "common.country.name.qa": "Qatar",
          "common.country.name.ro": "Romania",
          "common.country.name.ru": "Russia",
          "common.country.name.sa": "Saudi Arabia",
          "common.country.name.se": "Sweden",
          "common.country.name.sg": "Singapore",
          "common.country.name.si": "Slovenia",
          "common.country.name.sk": "Slovakia",
          "common.country.name.th": "Thailand",
          "common.country.name.tr": "Turkey",
          "common.country.name.tt": "Trinidad and Tobago",
          "common.country.name.tw": "Taiwan",
          "common.country.name.ua": "Ukraine",
          "common.country.name.us": "United States",
          "common.country.name.vn": "Vietnam",
          "common.country.name.za": "South Africa",
          "common.country.other": "Other",
          "common.countryregion": "Country or region",
          "common.date.format.short": "d.M",
          "common.delete": "Eliminar",
          "common.desc.macupdate": "Primero, actualiza tu OS.",
          "common.desc.temporary.error":
            "No se pudo procesar por un error temporal.",
          "common.error.image.scan":
            "No puedes escanear im\xe1genes que hayan expirado.",
          "common.error.ocr.failed":
            "No se pudo escanear el texto. Elige otro idioma e int\xe9ntalo de nuevo.",
          "common.error.ocr.unknown": "No se puede convertir esta imagen.",
          "common.error.translation.failed":
            "No se puede traducir el texto. Ed\xedtalo o configura otro idioma.",
          "common.friday": "Viernes",
          "common.friday.short": "v",
          "common.label.auto.slang": "Detectar idioma",
          "common.label.code": "Escanear c\xf3digo QR",
          "common.label.copy": "Copiar",
          "common.label.cut": "Cortar",
          "common.label.date": "Fecha",
          "common.label.delete": "Borrar",
          "common.label.file": "Archivo",
          "common.label.lang.ar": "\xc1rabe",
          "common.label.lang.de": "Alem\xe1n",
          "common.label.lang.en": "Ingl\xe9s",
          "common.label.lang.es": "Espa\xf1ol",
          "common.label.lang.fa": "Persa",
          "common.label.lang.hi": "Hindi",
          "common.label.lang.id": "Indonesio",
          "common.label.lang.ja": "Japon\xe9s",
          "common.label.lang.ko": "Coreano",
          "common.label.lang.my": "Birmano",
          "common.label.lang.pt": "Portugu\xe9s",
          "common.label.lang.ru": "Ruso",
          "common.label.lang.th": "Tailand\xe9s",
          "common.label.lang.vi": "Vietnamita",
          "common.label.lang.zhcn": "Chino (simplificado)",
          "common.label.lang.zhtw": "Chino (tradicional)",
          "common.label.moveURL": "Ir al enlace",
          "common.label.ocr": "Scan text",
          "common.label.ocrlang": "Convertido",
          "common.label.paste": "Pegar",
          "common.label.redo": "Rehacer",
          "common.label.selectAll": "Elegir todo",
          "common.label.slang": "Original",
          "common.label.text.placeholder": "Introduce este n\xfamero.",
          "common.label.time": "Hora",
          "common.label.tlang": "Traducido",
          "common.label.undo": "Deshacer",
          "common.license.disagree": "No acepto",
          "common.license.filename": "chrome://license/English.rtf",
          "common.license.title": "T\xe9rminos de uso",
          "common.lineUrltoQR.alert.desc1":
            "Disponible en la versi\xf3n m\xf3vil de LINE",
          "common.lineUrltoQR.alert.desc2":
            "Para usar esta funci\xf3n tienes que escanear este c\xf3digo QR con la app.",
          "common.loading": "Cargando\u2026",
          "common.loading.splash": "Cargando...",
          "common.mac.upgrader.title": "Tenemos una versi\xf3n nueva de LINE",
          "common.menu.copyToClipboard": "Copiar al portapapeles",
          "common.menu.delete": "Eliminar",
          "common.menu.forward": "Compartir",
          "common.menu.reply": "Enviar",
          "common.menu.saveAs": "Guardar como",
          "common.monday": "Lunes",
          "common.monday.short": "l",
          "common.msg.already.new.version":
            "Ya tienes la versi\xf3n m\xe1s reciente.",
          "common.msg.bot.openapi":
            "%2. administra %1\nEn este enlace tienes m\xe1s informaci\xf3n del uso que LY Corporation le da a tu informaci\xf3n personal enviada al administrador o cualquier informaci\xf3n personal que env\xedes al administrador.",
          "common.msg.bot.openapi.agree": "Acepto",
          "common.msg.bot.openapi.link": "http://me2.do/FYc54WAQ",
          "common.msg.bot.openapi.title": "Acepto enviar informaci\xf3n",
          "common.msg.checking.version": "Buscando actualizaciones...",
          "common.msg.db.optimize":
            "Optimizando LINE para ofrecerte\nel mejor rendimiento...\nAcabamos enseguida.",
          "common.msg.db.optimize.complete":
            "Se complet\xf3 la optimizaci\xf3n.",
          "common.msg.db.optimize.error":
            "No pudimos completar la optimizaci\xf3n\ndebido a un error temporal.\nLINE se reiniciar\xe1.",
          "common.msg.favorite.exceeded": "No m\xe1s de 100 favoritos.",
          "common.msg.has.new.version": "Hay una nueva versi\xf3n.",
          "common.msg.has.new.version.alert":
            "Hay disponible una nueva versi\xf3n.\n\xbfActualizas? ",
          "common.msg.invitation.overflow": "No m\xe1s de %1.",
          "common.msg.license.opensource": "Avisos legales",
          "common.msg.sticker.need.mobile.download":
            "Desca\u0301rgatelos primero en tu dispositivo mo\u0301vil.\nPuedes descargarlos desde Configuracio\u0301n > Stickers > Mis stickers; o desde la tienda de Stickers.",
          "common.msg.terms": "T\xe9rminos de uso",
          "common.msg.update.button.label": "Actualizar",
          "common.msg.update.button.label.mac": "Ir a App Store",
          "common.msg.warning.autoLogin":
            "Se iniciar\xe1 sesi\xf3n autom\xe1ticamente al abrir la aplicaci\xf3n.\n\xdasalo solo en tu ordenador. \xa1Protege tu privacidad!",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "Toda la informaci\xf3n siempre a mano con las Notas.",
          "common.notice.dontremind": "No mostrar m\xe1s",
          "common.notice.label.close": "Cerrar",
          "common.notice.meta.url": "line_desktop_notice/EN/1135",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/EN/1136",
          "common.notice.title": "Avisos",
          "common.ocr.agree.desc":
            "Se enviar\xe1n tus fotos a nuestros servidores cuando uses esta funci\xf3n.",
          "common.ocr.agree.title": "Enviar fotos",
          "common.ocr.mlstatus.off":
            "Parece que no quieres enviar tus im\xe1genes para mejorar el servicio. Recuerda que puedes cambiar de idea en cualquier momento desde la app LINE de tu m\xf3vil.",
          "common.ocr.mlstatus.on":
            "Este icono aparecer\xe1 si env\xedas tus im\xe1genes para mejorar el servicio. Recuerda que puedes cambiar de idea en cualquier momento desde la app LINE de tu m\xf3vil.",
          "common.ocr.tooltip": "\xa1Prueba la traducci\xf3n instant\xe1nea!",
          "common.ocrlang.tooltip":
            "Elige el idioma al que vas a convertir la imagen.",
          "common.off": "No",
          "common.on": "S\xed",
          "common.picture.popup.saveImageError":
            "No se pudo guardar la imagen.",
          "common.picture.popup.showImageError": "Error al cargar la imagen.",
          "common.pm": "p.m.",
          "common.popup.force.update":
            "Debes actualizar LINE.\nActualiza y reinicia la aplicaci\xf3n.",
          "common.popup.force.update.confirm": "Actualiza para usar LINE.",
          "common.popup.force.update.inapp":
            "No te quedes atr\xe1s y actualiza tu LINE.\nActualiza y reinicia la aplicaci\xf3n.",
          "common.popup.force.update.later": "Te lo recordaremos en una hora.",
          "common.popup.queryUpgrade":
            "\xa1Hay una versi\xf3n nueva!\n\xbfActualizas ahora? ",
          "common.popup.sendkey.msg.mac": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.sendkey.msg.win": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.serverAPI.error.update":
            "Parece que tienes que actualizar tu LINE.\n\xbfLo hacemos ahora?",
          "common.prepare.service":
            "\xbfYa tienes la \xfaltima versi\xf3n?\nEntonces estamos trabajando para la versi\xf3n OS.",
          "common.push.mac.versionUpdate": "Actualiza tu LINE.",
          "common.report.done": "Se envi\xf3 tu informe.",
          "common.report.reason.desc": "\xbfPor qu\xe9 env\xedas este informe?",
          "common.request.error":
            "Hubo un error.\nMejor si lo intentas de nuevo m\xe1s tarde",
          "common.saturday": "S\xe1bado",
          "common.saturday.short": "s",
          "common.search.error.length": "M\xednimo 2 caracteres.",
          "common.search.invalidtext":
            "No incluyas caracteres especiales en las palabras clave.",
          "common.seeall": "Ver todo",
          "common.share.url.copied": "Se copi\xf3.",
          "common.sunday": "Domingo",
          "common.sunday.short": "d",
          "common.thursday": "Jueves",
          "common.thursday.short": "j",
          "common.time.format": "H:mm",
          "common.toast.album.delete": "Se elimin\xf3 este \xe1lbum.",
          "common.toast.album.rename": "Se cambi\xf3 el nombre del \xe1lbum.",
          "common.toast.albumCreated": "\xa1\xc1lbum nuevo! ",
          "common.toast.audio": "Se envi\xf3 el mensaje de voz.",
          "common.toast.chatevent.unknown": "No est\xe1 disponible.",
          "common.toast.contact": "Comparti\xf3 la info de un contacto.",
          "common.toast.file": "Se envi\xf3 el archivo.",
          "common.toast.gift": "Se envi\xf3 el regalo.",
          "common.toast.image": "envi\xf3 una foto.",
          "common.toast.inviteGroup": "Te invitaron a un grupo.",
          "common.toast.label.newMessage": "\xa1Mensaje nuevo!",
          "common.toast.linemusic": "Se comparti\xf3 m\xfasica.",
          "common.toast.location": "",
          "common.toast.note": "Nota nueva.",
          "common.toast.receiverequest": "Pending money request.",
          "common.toast.sticker": "Sticker enviado.",
          "common.toast.timeline.group.invite": "Te invitaron a un grupo.",
          "common.toast.timeline.new.comment": "No te lo pierdas.",
          "common.toast.timeline.new.mention": "Te mencionaron.",
          "common.toast.timeline.new.post": "Nota nueva.",
          "common.toast.timeline.new.sticker": "No te lo pierdas.",
          "common.toast.timeline.title.comment": "Comentario de %1",
          "common.toast.timeline.title.like": "Me Gusta de %1",
          "common.toast.timeline.title.recomment": "Respuesta de %1",
          "common.toast.video": "Se envi\xf3 el v\xeddeo.",
          "common.toast.voip.call": "Contestar",
          "common.toast.voip.call.msg": "Te est\xe1n llamando\u2026",
          "common.toast.voip.refuse": "Colgar",
          "common.today": "Hoy",
          "common.translation.apply.alert":
            "Puedes traducir hasta 5000 caracteres del texto original. ",
          "common.translation.apply.imagedirect": "Sobreponer traducci\xf3n",
          "common.translation.imagedirect.failed":
            "Vaya, algo no sali\xf3 bien. Cambia de idioma o prueba m\xe1s tarde.",
          "common.translation.imagedirect.tooltip":
            "Act\xedvalo para traducir texto instant\xe1neamente y mostrarlo en la foto.",
          "common.tuesday": "Martes",
          "common.tuesday.short": "m",
          "common.unsupported.version.message":
            "Actualiza tu LINE para poder usar esta funci\xf3n.",
          "common.update.popup.win10": "Actualiza tu LINE.",
          "common.updater": "Actualizar ahora",
          "common.updater.autoUpdate": "Actualizar autom\xe1ticamente",
          "common.updater.autoUpdate.apply":
            "<![CDATA[\xbfActualizas tu LINE?\n<font color='#9e9e9e'>Se restaurar\xe1 LINE.\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "Hay una versi\xf3n nueva de LINE.\nLINE se reiniciar\xe1 si aceptas.",
          "common.updater.newVersion.confirm":
            "Tienes la \xfaltima versi\xf3n de LINE.",
          "common.updater.newVersion.download.apply":
            "<![CDATA[Se complet\xf3 la descarga.\n\xbfLo instalas ahora?\n<font color='#9e9e9e'>LINE se reiniciar\xe1 si aceptas</font>]]>",
          "common.updater.newVersion.downloading": "Actualizando tu LINE...\n",
          "common.updater.newVersion.incompleted":
            "Actualizaci\xf3n incompleta.\nPrueba de nuevo.",
          "common.updater.newVersion.low.hardDisk":
            "No te queda espacio en el disco.\nLibera algo\ne int\xe9ntalo de nuevo.",
          "common.updater.notice.description": "Novedades",
          "common.updater.notice.history": "Historial de actualizaci\xf3n",
          "common.updater.notice.title": "Actualizar",
          "common.updater.notice.updated": "Se actualiz\xf3 tu LINE.",
          "common.wednesday": "Mi\xe9rcoles",
          "common.wednesday.short": "x",
          "common.yearMonth.format": "yyyy MMMM",
          "common.yesterday": "Ayer",
          "creategroup.button.create": "Crear",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "Se unir\xe1n en cuanto les invites. Tambi\xe9n puedes modificar estos ajustes para solicitar que acepten antes de unirse. ",
          "creategroup.checkbox.title.membersjoinautomatically":
            "Unirse autom\xe1ticamente",
          "creategroup.label.membercount": "Miembros",
          "creategroup.placeholder.entergroupname": "Nombre del grupo",
          "creategroup.placerholder.defaultname.autojoinoff": "Grupo de %1",
          "creategroup.popup.desc.100memberswarning":
            "Tienen que aceptar una invitaci\xf3n para unirse a grupos con m\xe1s de 100 participantes.\nLimita el grupo a menos de 100 para que puedan unirse autom\xe1ticamente.",
          "creategroup.popup.desc.invitelocked":
            "Para apagar esta opci\xf3n, limita el grupo a menos de 100 miembros.",
          "creategroup.popup.desc.inviteonwarning":
            "En los grupos con m\xe1s de 100 participantes, los nuevos tienen que aceptar una invitaci\xf3n para poder unirse.\nSi no quieres usar esta funci\xf3n, mant\xe9n el l\xedmite de participantes inferior a 100.",
          "creategroup.popup.desc.toomanygroups":
            "Excediste el m\xe1ximo. Para crear otro grupo, deja alg\xfan grupo que ya no uses.",
          "creategroup.popup.title.100memberswarning":
            "No se unir\xe1n autom\xe1ticamente",
          "creategroup.popup.title.invitelocked":
            "Ajuste invitaci\xf3n bloqueado",
          "creategroup.popup.title.inviteonwarning":
            "Los miembros tienen que aceptar las invitaciones",
          "creategroup.popup.title.toomanygroups": "L\xedmite excedido",
          "creategroup.popup.title.toomanymembers": "Reducir participantes",
          "creategroup.title.setupProfile": "Perfil grupo",
          "creategroup.toggle.desc.requireinvite":
            "Los usuarios invitados tienen que aceptar la invitaci\xf3n para unirse al grupo. Esta opci\xf3n no se puede deshabilitar una vez creado el grupo.",
          "creategroup.toggle.title.requireinvite":
            "Unirse a trav\xe9s de invitaciones",
          "creategroup.tooltip.groupname":
            "Elige un nombre que defina este grupo.",
          "creategrouppopup.desc.toomanymembers":
            "Limita el grupo a menos de 100 participantes para que puedan unirse autom\xe1ticamente.",
          "deletedata.chatHisotry.all.desc.confirm":
            "\xbfEliminas los historiales de chat de todos los dispositivos? Recuerda que no se podr\xe1n recuperar.",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "\xbfEliminas los historiales de chat de este dispositivo? Recuerda que no se podr\xe1n recuperar. ",
          "desktop.addchatfolder.button.add": "Crear",
          "desktop.addchatfolder.placeholder.entername": "Nombre carpeta",
          "desktop.addchatfolder.title.addnewfolder": "Crear carpeta",
          "desktop.addchatpopup.button.add": "A\xf1adir",
          "desktop.addchatpopup.button.cancel": "Cancelar",
          "desktop.addchatpopup.desc.allchats": "Todos los chats",
          "desktop.addchatpopup.desc.selected": "%1\xa0elegido",
          "desktop.addchatpopup.placeholder.search": "Buscar",
          "desktop.addchatpopup.title.addchats":
            "A\xf1adir chats a esta carpeta",
          "desktop.addfriends.desc.recommendedai": "Cuentas AI para ti",
          "desktop.addtoalbum.button.cancel": "Cancelar",
          "desktop.addtoalbum.button.createalbum": "Crear \xe1lbum",
          "desktop.addtoalbum.title.selectalbum": "Elegir \xe1lbum",
          "desktop.album.allalbums.button.albums": "\xc1lbumes",
          "desktop.album.allalbums.button.photos": "Fotos",
          "desktop.album.allalbums.desc.albumsempty":
            "Aqu\xed se muestran todos los \xe1lbumes creados en tus chats.",
          "desktop.album.allalbums.desc.dateformat": "MMMM yyyy",
          "desktop.album.allalbums.desc.photosempty":
            "Los \xedtems de tus \xe1lbumes se mostrar\xe1n aqu\xed.",
          "desktop.album.allalbums.menu.lastcreated": "\xdaltima creaci\xf3n",
          "desktop.album.allalbums.menu.lastupdated":
            "\xdaltima actualizaci\xf3n",
          "desktop.album.allalbums.title.allalbums": "Todos los \xe1lbumes",
          "desktop.album.allalbums.title.photosempty": "Nada por aqu\xed.",
          "desktop.album.allalbums.title.unableshow":
            "No se pueden mostrar los \xe1lbumes.\nInt\xe9ntalo de nuevo.",
          "desktop.album.allalbums.tooltip.allalbums":
            "Aqu\xed se muestran todos los \xe1lbumes de tus chats. Tambi\xe9n se incluyen los de los chats ocultos y eliminados de tu lista.",
          "desktop.album.button.add": "A\xf1adir",
          "desktop.album.button.cancel": "Cancelar",
          "desktop.album.button.create": "Crear",
          "desktop.album.button.namechangedone": "Guardar",
          "desktop.album.button.share": "Compartir",
          "desktop.album.button.sharealbum": "Compartir \xc1lbum",
          "desktop.album.commonkey.button.tryagain": "Reintentar",
          "desktop.album.desc.albumphotos.one": "%n foto",
          "desktop.album.desc.albumphotos.other": "%n fotos",
          "desktop.album.desc.draganddrop": "Arrastra y suelta aqu\xed.",
          "desktop.album.error.sharealbum":
            "Ya compartiste mucho en poco tiempo.",
          "desktop.album.main.tooltip.albumsallchats":
            "Mira todos los \xe1lbumes de tus chats en el mismo sitio.",
          "desktop.album.max.media.alert": "%1 \xedtems como m\xe1ximo.",
          "desktop.album.photos.button.seealbum": "Ver \xe1lbum",
          "desktop.album.popupdesc.sharealbum":
            "\xbfCompartes este \xc1lbum en el chat?",
          "desktop.album.tooltip.nowsharealbum": "Comparte \xc1lbumes",
          "desktop.album.viewer.button.seealbum": "Ver \xe1lbum",
          "desktop.album.viewer.title.unableshow":
            "No se puede mostrar el \xedtem.\nInt\xe9ntalo de nuevo.",
          "desktop.backgroundsetting.button.deletecover":
            "Eliminar portada perfil",
          "desktop.backgroundsetting.button.selectphoto": "Elegir foto",
          "desktop.blankchatfolder.button.addchat": "A\xf1adir chat",
          "desktop.blankchatfolder.desc.nochats":
            "Esta carpeta a\xfan no tienen chats.",
          "desktop.blankchatfolder.desc.nochats1":
            "Arrastra un chat o a\xf1\xe1delo directamente.",
          "desktop.calendar.button.recent": "Recientes",
          "desktop.calendar.desc.month": "MMM",
          "desktop.calendar.desc.year": "yyyy",
          "desktop.callsettings.desc.showmessagealerts":
            "Mostrar notificaciones de mensajes nuevos durante las llamadas",
          "desktop.chat.choose.empty": "No tienes chats para elegir.",
          "desktop.chat.popup.blockeduser.button.close": "No reportar",
          "desktop.chat.popup.blockeduser.button.report": "Reportar",
          "desktop.chat.popup.blockeduser.desc":
            "Si crees que es est\xe1n enviando spam o es un usuario con intenciones sospechosas, no dudes en reportarlo. Nos ayudar\xe1s a incrementar la seguridad en LINE.",
          "desktop.chat.popup.blockeduser.title": "\xbfReportas a %1?",
          "desktop.chat.toast.chatunhidden": "Este chat ya no est\xe1 oculto.",
          "desktop.chat.warning.btn.addfriend": "A\xf1adir Amigos",
          "desktop.chat.warning.btn.blockfriend": "Bloquear",
          "desktop.chat.warning.btn.decline": "Rechazar",
          "desktop.chat.warning.btn.join": "Unirse",
          "desktop.chat.warning.btn.leave": "Salir",
          "desktop.chat.warning.btn.report": "Denunciar",
          "desktop.chat.warning.btn.unblockfriend": "Desbloquear",
          "desktop.chatfolder.tab.all": "Todo",
          "desktop.chatfolder.tab.friends": "Amigos",
          "desktop.chatfolder.tab.groups": "Grupos",
          "desktop.chatfolder.tab.newfolder": "Carpeta %1",
          "desktop.chatfolder.tab.officialaccounts": "Cuentas oficiales",
          "desktop.chatfolder.tab.openchats": "OpenChats",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "%1  chats a\xf1adidos a la carpeta.",
          "desktop.chatfolder.toast.addedtofolderone":
            "1 chat a\xf1adido a la carpeta.",
          "desktop.chatfolder.toast.nameinuse":
            "Ya hay una carpeta con este nombre.",
          "desktop.chatfolder.toast.removedchatmulti":
            "%1 chats movidos a sus carpetas predeterminadas.",
          "desktop.chatfolder.toast.removedchatone":
            "1 chat movido a su carpeta predeterminada.",
          "desktop.chatfolder.toast.uptohund":
            "M\xe1ximo 100 chats por carpeta.",
          "desktop.chatfolderguide.button.learnmore": "M\xe1s",
          "desktop.chatfolderguide.desc.desc1":
            "A\xf1ade una carpeta con el icono en la esquina derecha.",
          "desktop.chatfolderguide.desc.desc2":
            "Haz clic derecho en una carpeta para los ajustes.",
          "desktop.chatfolderguide.desc.desc3":
            "Arrastra una carpeta para cambiar de orden.",
          "desktop.chatfolderguide.desc.editdragchange":
            "Arrastra una carpeta para cambiar de orden. Crea una nueva con +.",
          "desktop.chatfolderguide.desc.title":
            "Organiza tus chats en las Categor\xedas chats.",
          "desktop.chatfoldermenu.button.addchat": "A\xf1adir chat",
          "desktop.chatfoldermenu.button.changefoldername":
            "Cambiar nombre carpeta",
          "desktop.chatfoldermenu.button.deletefolder": "Eliminar carpeta",
          "desktop.chatfoldermenu.button.mutefolder": "Silenciar carpeta",
          "desktop.chatfoldermenu.button.readall": "Ya los le\xed",
          "desktop.chatfoldermenu.button.removechat": "Quitar chat",
          "desktop.chatfoldermenu.button.unmutefolder": "Notificar carpeta",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "No puedes a\xf1adir todos tus chats a una carpeta.",
          "desktop.chatfoldermenu.toast.uptoten":
            "M\xe1ximo 10 categor\xedas chats.",
          "desktop.chatfolderpopup.button.ok": "Aceptar",
          "desktop.chatfolderpopup.desc.chatfolder":
            'Haz clic en "+" en la parte superior de las Categor\xedas chats y organiza tus chats como quieras.',
          "desktop.chatfolderpopup.desc.folderlineup":
            "Arrastra las carpetas y ponlas en el orden que quieras.",
          "desktop.chatfolderpopup.desc.managefolder":
            "Clic derecho para los ajustes.",
          "desktop.chatfolderpopup.desc.unabletosync":
            "No se pudieron sincronizar las carpetas. Prueba con el icono de sincronizaci\xf3n arriba a la derecha.",
          "desktop.chatfolderpopup.title.chatfolder":
            "Organiza tus chats en las Categor\xedas chats.",
          "desktop.chatfolderpopup.title.folderlineup":
            "Reorganiza la disposici\xf3n de las Categor\xedas chats",
          "desktop.chatfolderpopup.title.managefolder":
            "Organiza f\xe1cilmente las Categor\xedas chats",
          "desktop.chatfoldersetting.button.cancel": "Cancelar",
          "desktop.chatfoldersetting.button.disable": "Desactivar",
          "desktop.chatfoldersetting.desc.disable":
            "\xbfDesactivas las Categor\xedas chats y eliminas todos los ajustes de las carpetas?",
          "desktop.chatfoldertooltip.desc.createchatfolder":
            "Organiza tus chats con las Categor\xedas chats.",
          "desktop.chatlist.button.hide": "Menos",
          "desktop.chatmenu.button.addtoalbum": "A\xf1adir a un \xc1lbum",
          "desktop.chatssettings.desc.chateffects":
            "Reproduce fondos animados en los chats.",
          "desktop.chatssettings.subtitle.chateffects": "Fondos animados",
          "desktop.codecerror.desc.unabletoplay":
            "No se puede reproducir el archivo por un error en el c\xf3dec del v\xeddeo.",
          "desktop.common.go.to.settings": "Ir a configuraci\xf3n",
          "desktop.common.index.chats": "Chats",
          "desktop.common.index.favorites": "Mis favoritos",
          "desktop.common.index.friends": "Amigos",
          "desktop.common.index.groups": "Grupos",
          "desktop.common.index.recentlyshared": "Recientes",
          "desktop.common.report": "Denunciar",
          "desktop.defaultprofile.button.cancel": "Cancelar",
          "desktop.defaultprofile.button.save": "Guardar",
          "desktop.defaultprofile.title.selectdefault":
            "Elegir de las plantillas",
          "desktop.deletefolderpopup.button.cancel": "Cancelar",
          "desktop.deletefolderpopup.button.delete": "Eliminar",
          "desktop.deletefolderpopup.desc.deletefolder":
            '\xbfEliminas la carpeta "%1" moviendo todos sus chats a sus carpetas predeterminadas?',
          "desktop.download.popup.call": "Descargando plug-in llamada...",
          "desktop.download.popup.calldone":
            "Descarga completa. Ya puedes hacer y recibir llamadas.",
          "desktop.download.popup.plugin":
            "Descargando plugin para crear GIF...",
          "desktop.download.popup.plugindone":
            "Descarga completa. Ya puedes hacer capturas GIF.",
          "desktop.download.popup.pluginnetworkerror":
            "Comprueba tu conexi\xf3n.",
          "desktop.download.popup.pluginnospace":
            "No tienes espacio libre en tu dispositivo. Libera espacio e int\xe9ntalo de nuevo.",
          "desktop.download.popup.pluginunexpectederror":
            "Error al descargar los plugin.\nInt\xe9ntalo de nuevo.",
          "desktop.download.popup.viewer": "Descargando plugin visor...",
          "desktop.download.popup.viewerdone":
            "Descarga completa. Selecciona un archivo multimedia para abrir en el visor.",
          "desktop.dragndrop.button.addfiles": "A\xf1adir archivos",
          "desktop.dragndrop.button.cancelcompress": "Cancelar",
          "desktop.dragndrop.button.send": "Enviar (%1)",
          "desktop.dragndrop.button.sendcompressed": "Enviar",
          "desktop.dragndrop.checkbox.alwayscompress": "Comprimir y enviar",
          "desktop.dragndrop.title.sendfile": "Enviar archivos",
          "desktop.dragndrop.toast.upto50": "M\xe1ximo 50 archivos.",
          "desktop.error.popup.noverification":
            "No se pudo verificar tu identidad en la versi\xf3n m\xf3vil de LINE.",
          "desktop.errorpopup.desc.downloadback":
            "La descarga de este plug-in puede requerir de algo de tiempo. \xbfQuieres cerrar esta ventana y continuar con la descarga en segundo plano?",
          "desktop.errorpopup.desc.downloadno": "Mantener ventana",
          "desktop.errorpopup.desc.downloadyes": "Cerrar y continuar",
          "desktop.errorpopup.desc.expired":
            "No se puede reenviar este archivo porque expir\xf3.",
          "desktop.errorpopup.desc.remobile":
            "No se pudo enviar este mensaje debido a un error del servidor. Int\xe9ntalo de nuevo en la versi\xf3n para m\xf3viles de LINE.",
          "desktop.errorpopup.desc.remobiles":
            "No se pudo enviar este mensaje al grupo debido a un error del servidor. Int\xe9ntalo de nuevo en la versi\xf3n para m\xf3viles de LINE.",
          "desktop.errorpopup.desc.renewmembership":
            "Cambi\xf3 el estado de tu membres\xeda LYP Premium. Comprueba tu membres\xeda e int\xe9ntalo de nuevo.",
          "desktop.errorpopup.desc.revisedtermsofuse":
            "No se pudo a\xf1adir los \xedtems porque no aceptaste la revisi\xf3n de las cl\xe1usulas del uso de informaci\xf3n. En tu dispositivo m\xf3vil, a\xf1ade v\xeddeos o fotos en su calidad original y acepta las pol\xedticas actualizadas.",
          "desktop.errorpopup.title.resend": "Reenviar este mensaje",
          "desktop.favoritethreads.desc.nothreads":
            "Pulsa el icono de estrella en la esquina superior derecha de los Hilos correspondientes para a\xf1adirlos a tus favoritos.",
          "desktop.fileshare.button.cancel": "Cancelar",
          "desktop.fileshare.button.open": "Compartir",
          "desktop.fileshare.desc.unsafefile":
            "\xbfCompartes este archivo con otro usuario?\n\n%1",
          "desktop.foldermenu.button.moveto": "Mover a",
          "desktop.friends.choose.empty": "No tienes Amigos para elegir.",
          "desktop.friendssearch.title.friendssearch": "A\xf1ade a tu gente",
          "desktop.gprofilesetting.button.capturescreen": "Capturar pantalla",
          "desktop.gprofilesetting.button.createtext": "Crear texto perfil",
          "desktop.gprofilesetting.button.deleteprofile":
            "Borrar foto del perfil",
          "desktop.gprofilesetting.button.selectdefault":
            "Elegir de las plantillas",
          "desktop.gprofilesetting.button.selectphoto": "Elegir foto",
          "desktop.group.choose.empty": "No tienes grupos para elegir.",
          "desktop.hevcerror.desc.unabletoplay":
            "No se puede reproducir el formato del archivo. \xbfDescargas el archivo?",
          "desktop.installer.button.install": "Instalar",
          "desktop.installer.checkbox.iagree":
            "Acepto los [T\xe9rminos de Uso Comunes de LY Corporation|https://terms.line.me/line_terms?lang=en].",
          "desktop.installer.desc.installingline": "Instalando LINE...",
          "desktop.installer.desc.readandagree":
            "Para poder instalar LINE, tienes que leer y aceptar los t\xe9rminos de uso.",
          "desktop.installercancel.button.no": "No",
          "desktop.installercancel.button.yes": "S\xed",
          "desktop.installercancel.desc.stopinstalling":
            "\xbfCancelas la instalaci\xf3n?",
          "desktop.installerror.button.download": "Descargar",
          "desktop.installerror.desc.badfile":
            "LINE no se instal\xf3. Descarga el archivo de instalaci\xf3n y prueba de nuevo.",
          "desktop.leavescreenpopup.button.cancel": "Cancelar",
          "desktop.leavescreenpopup.button.leave": "Salir",
          "desktop.line.albums.desc.photosnotyet":
            "La funci\xf3n para ver todas las fotos estar\xe1 disponible pronto.",
          "desktop.line.chatmenu.title.albumsempty": "No hay \xe1lbumes.",
          "desktop.login.button.gotoemailwithPhoneNumber":
            "Iniciar sesi\xf3n con mi correo",
          "desktop.login.button.gotosmartphone":
            "Entrar con tel\xe9fono inteligente",
          "desktop.login.button.loginwithsmartphone": "Entrar con tel\xe9fono",
          "desktop.login.desc.transferring": "Transfiriendo tu cuenta de LINE",
          "desktop.login.desc.verification":
            "Si no puedes acceder a LINE con tu m\xf3vil, transfiere tu cuenta de LINE.",
          "desktop.login.popup.scanqr":
            "Escanea este c\xf3digo QR con tu m\xf3vil y elige Contrase\xf1a para configurar una nueva.",
          "desktop.login.popup.seeonmobile":
            "Resetea tu contrase\xf1a en el m\xf3vil",
          "desktop.login.popupbutton.gotit": "C\xf3digo de verificaci\xf3n",
          "desktop.login.popupdesc.cancelverification":
            "No verificar mi identidad",
          "desktop.login.popupdesc.loggingin":
            "Verifica tu identidad con tu tel\xe9fono.",
          "desktop.login.popupdesc.pairingverificationcode":
            "Abre LINE con tu tel\xe9fono e introduce el c\xf3digo de 6 d\xedgitos en Configuraci\xf3n > Cuenta > Emparejar.",
          "desktop.login.popupdesc.pairingverificationcodeguide":
            "Vincula la cuenta de tu tel\xe9fono\n\n1. Abre LINE con tu tel\xe9fono.\n2. Ve a Configuraci\xf3n > Cuenta > Emparejar.\n3. Introduce el c\xf3digo de verificaci\xf3n de 6 d\xedgitos.\nSelecciona \u201cC\xf3digo de verificaci\xf3n\u201d para continuar.",
          "desktop.login.popupdesc.pairsecondarydevice": "Emparejar",
          "desktop.login.popuptitle.loggingin": "Iniciando sesi\xf3n...",
          "desktop.login.popuptitle.pairingverificationcode":
            "Emparejar con tu cuenta",
          "desktop.main.popup.newversion":
            "Nueva versi\xf3n de LINE disponible.",
          "desktop.movetomenu.button.all": "Todo",
          "desktop.movetomenu.button.customfolder": "%1",
          "desktop.movetomenu.button.friends": "Amigos",
          "desktop.movetomenu.button.groups": "Grupos",
          "desktop.movetomenu.button.oas": "Cuentas oficiales",
          "desktop.movetomenu.button.openchats": "OpenChats",
          "desktop.mypsticker.button.stickershop": "Sticker shop",
          "desktop.mypsticker.button.upgrade": "Actualizar a Deluxe",
          "desktop.mypsticker.desc.getmore": "Ma\u0301s stickers Premium",
          "desktop.mypsticker.desc.maximum":
            "Puedes guardar hasta %1 sets de stickers Premium a la vez.",
          "desktop.mypsticker.desc.nosticker":
            "Tus stickers Premium saldra\u0301n aqui\u0301.",
          "desktop.mypsticker.desc.upgradetodeluxe":
            "M\xe1s de 1000 stickers o emoticones con un plan Deluxe. Actualiza tu plan desde la versi\xf3n m\xf3vil.",
          "desktop.mysticker.button.cancel": "Cancelar",
          "desktop.mysticker.button.cancelshow": "Cancelar",
          "desktop.mysticker.button.showall": "Mostrar todo",
          "desktop.mysticker.button.stop": "Detener",
          "desktop.mysticker.button.stopshow": "Detener",
          "desktop.mysticker.desc.downloadstopemoji":
            "\xbfDetienes la descarga?",
          "desktop.mysticker.desc.downloadstopsticker":
            "\xbfQuieres cancelar la descarga?",
          "desktop.mysticker.desc.stopshowemoji": "\xbfCancelas la descarga?",
          "desktop.mysticker.desc.stopshowsticker":
            "\xbfDeseas cancelar la descarga de todos los stickers?",
          "desktop.mystickers.desc.noexpire": "Sin fecha de expiraci\xf3n",
          "desktop.mystickers.desc.nolongerp": "Ya no esta\u0301 en Premium",
          "desktop.mystickers.desc.passedtime": "Ya no est\xe1n disponibles.",
          "desktop.mystickers.desc.until": "V\xe1lido hasta el %1",
          "desktop.mystickers.tooltip.hide": "Ocultar",
          "desktop.mystickers.tooltip.show": "Mostrar",
          "desktop.noin87notice.button.download": "Descargar",
          "desktop.noin87notice.desc.supportend":
            "LINE ya no est\xe1 disponible para las versiones Windows 7 y 8. Desc\xe1rgate la versi\xf3n compatible m\xe1s actualizada con este bot\xf3n.",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "En ciertos casos, es posible que tus mensajes anulados se sigan mostrando al receptor, dependiendo de los ajustes de sistema de la administraci\xf3n de las cuentas oficiales. \xbfAnulas este mensaje?",
          "desktop.ocr.popup.toobig": "M\xe1ximo 5 MB.",
          "desktop.openchatsetting.popup.onmobile":
            "Cambia esta configuraci\xf3n con el LINE de tu m\xf3vil.",
          "desktop.premiumhistory.desc.history":
            "Estos Premium stickers no los has usado durante el \xfaltimo a\xf1o.",
          "desktop.premiumpopup.button.canceleold": "Cancelar",
          "desktop.premiumpopup.button.deleteold": "Borrar",
          "desktop.premiumpopup.button.edit": "Editar stickers",
          "desktop.premiumpopup.desc.downloadlimit":
            "Tienes %1 sets Premium stickers en tu colecci\xf3n. Para descarg\xe1rtelo elimina alg\xfan set de tu colecci\xf3n primero.",
          "desktop.premiumpopup.desc.notavailablee":
            "Ya no est\xe1 disponible en LINE Stickers Premium. \xbfLo quitas de tu lista?",
          "desktop.premiumpopup.desc.notavailables":
            "Ya no est\xe1 disponible en LINE Stickers Premium. \xbfLo quitas de tu lista?",
          "desktop.premiumpopup.title.downloadlimit": "L\xedmite descarga",
          "desktop.profile.desc.video15secs":
            "Los v\xeddeos de portada deben de ser de menos de 15 segundos.",
          "desktop.profile.desc.video6secs":
            "Los v\xeddeos de perfil deben de ser de menos de 6 segundos.",
          "desktop.profileselectphoto.button.cancel": "Cancelar",
          "desktop.profileselectphoto.button.save": "Guardar",
          "desktop.profilesetting.button.capturescreen": "Capturar pantalla",
          "desktop.profilesetting.button.createtext": "Crear texto perfil",
          "desktop.profilesetting.button.deleteprofile":
            "Borrar foto del perfil",
          "desktop.profilesetting.button.selectdefault":
            "Elegir de las plantillas",
          "desktop.profilesetting.button.selectphoto": "Elegir foto",
          "desktop.profilesetting.popup.500savechat":
            "Los \xfaltimos 500 mensajes enviados al chat se guardar\xe1n en un archivo de texto.",
          "desktop.quickreply.popup.notonpc":
            "No est\xe1 disponible en la versi\xf3n de ordenador de LINE.",
          "desktop.reaction.button.ok": "Aceptar",
          "desktop.reaction.button.seemore": "M\xe1s",
          "desktop.reaction.desc.error":
            "Vaya, prueba a mandar tu reacci\xf3n de nuevo.",
          "desktop.reaction.desc.plurals.one": "%1 reacci\xf3n",
          "desktop.reaction.desc.plurals.other": "%1 reacciones",
          "desktop.reaction.desc.reaction1":
            "Pasa el cursor sobre un mensaje\ny haz clic en el icono de sonrisa para dejar una reacci\xf3n.",
          "desktop.reaction.desc.reaction2":
            "Haz clic en el icono debajo del mensaje\ny ver\xe1s las reacciones de los dem\xe1s.",
          "desktop.reaction.desc.unsent":
            "Ya no puedes reaccionar a este mensaje.",
          "desktop.reaction.title.reaction":
            "Una reacci\xf3n\nvale m\xe1s que mil palabras",
          "desktop.reaction.toast.expired": "Expir\xf3.",
          "desktop.reaction.toast.unsent":
            "Se cancel\xf3 el env\xedo de la foto.",
          "desktop.reaction.tooltip.smile":
            "Haz clic en el icono de sonrisa y reacciona a la foto.",
          "desktop.removechatpopup.button.cancel": "Cancelar",
          "desktop.removechatpopup.button.remove": "Quitar",
          "desktop.removechatpopup.desc.allchats.one": "%1 chat en la carpeta",
          "desktop.removechatpopup.desc.allchats.other":
            "%1 chats en la carpeta",
          "desktop.removechatpopup.desc.selected": "%1\xa0elegido",
          "desktop.removechatpopup.placeholder.search": "Buscar",
          "desktop.removechatpopup.title.removechats":
            "Quitar chats de esta carpeta.",
          "desktop.restorepopup.button.ignore": "Ignorar",
          "desktop.restorepopup.button.restore": "Restaurar",
          "desktop.restorepopup.desc.restoreline":
            "Ya hay otra app LINE instalada por otros medios. \xbfRestauras el historial de chat de la otra app?",
          "desktop.setting.desc.enablechatfolders":
            "Activar Categor\xedas chats",
          "desktop.setting.desc.windows": "Windows",
          "desktop.setting.title.chatfolder": "Categor\xedas chats",
          "desktop.settings.desc.cantgetnotifocusassist":
            "No puedes recibir notificaciones de LINE con la funci\xf3n Focus Assist activa. Modifica los ajustes de dicha funci\xf3n en tu dispositivo.",
          "desktop.settings.desc.cantgetnotiline":
            "Activa las notificaciones de LINE en los ajustes de tu dispositivo.",
          "desktop.settings.desc.cantgetnotios":
            "Activa las notificaciones en los ajustes de tu dispositivo.",
          "desktop.settings.desc.osnotification":
            "Elige recibir notificaciones en los ajustes del sistema de Windows.",
          "desktop.settings.desc.safeguard":
            "Previsualizar archivos antes de enviarlos a un chat.",
          "desktop.settings.notification.description":
            "Si cierras la aplicaci\xf3n, puede que las notificaciones tarden en llegar o no las recibas.",
          "desktop.settings.notifications.turnonm":
            "Activa las notificaciones de LINE en los ajustes de tu dispositivo.",
          "desktop.settings.notifications.turnonw":
            "Activa las notificaciones de LINE desde los ajustes de tu dispositivo en Ajustes > Sistema > Notificaciones y acciones.",
          "desktop.settings.title.safeguard": "Previsualizar archivos",
          "desktop.shortcuts.desc.tilechats": "Chats mosaico",
          "desktop.shortcuts.desc.undotiling": "Deshacer chats mosaico",
          "desktop.smode.popup.nogif":
            "Por motivos de seguridad, no puedes usar las funciones de llamadas, visor multimedia ni la captura de gifs en el modo Windows 10 S.",
          "desktop.sticker.button.deletedstickers":
            "Historial descargas Premium\xa0",
          "desktop.sticker.button.mystickers": "Mis stickers",
          "desktop.sticker.button.premium": "Mis stickers Premium",
          "desktop.sticker.tooltip.switch":
            "Ordena tus Stickers. Esta lista se actualizar\xe1 con el LINE de tu m\xf3vil.",
          "desktop.stickers.desc.recentlyusede":
            "Emoticones usados recientemente",
          "desktop.stickers.desc.recentlyuseds":
            "Stickers usados recientemente",
          "desktop.stickers.tooltip.synced":
            "El pedido de tus stickers y emoticones se ha sincronizado con la versi\xf3n m\xf3vil de la aplicaci\xf3n.",
          "desktop.stickertab.button.seemore": "M\xe1s",
          "desktop.stickertab.desc.latestemoji": "\xdaltimos Emoticones de %1",
          "desktop.stickertab.desc.lateststicker": "Lo \xfaltimo de %1",
          "desktop.tab.button.ai": "AI",
          "desktop.textprofile.button.cancel": "Cancelar",
          "desktop.textprofile.button.save": "Guardar",
          "desktop.textprofile.desc.defaultfont": "Predeterminada",
          "desktop.textprofile.placeholder.entertext": "Pon un texto",
          "desktop.textprofile.title.createtextprofile": "Crear texto perfil",
          "desktop.thread.desc.sendfiletothread": "Enviar archivos al chat",
          "desktop.thread.tooltip.taphere":
            "Pulsa aqu\xed y a\xf1ade o quita el Hilo de favoritos.",
          "desktop.updatepopup.button.later": "Luego",
          "desktop.updatepopup.button.update": "Actualizar",
          "desktop.updatepopup.desc.update1":
            "LINE %1 ya no se puede usar. Actualiza tu LINE (se reiniciar\xe1 LINE)",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1 ya no se puede usar. Actualiza tu LINE en App Store.",
          "desktop.viewer.desc.gifby": "Gif de %1",
          "desktop.viewer.desc.gifmagazine": "GIFMAGAZINE",
          "desktop.viewer.popup.cantsave":
            "No se pueden guardar gifs de %1 en Keep.",
          "desktop.viewer.popup.cantsaves":
            "No se pueden guardar gifs de %1 en Keep. \xbfGuardas los otros archivos?",
          "desktop.viewer.popup.cantshare":
            "No se pueden compartir gifs de %1.",
          "desktop.viewer.popup.cantshares":
            "No se pueden compartir gifs de %1. \xbfCompartes los otros archivos?",
          "desktop.wallpaper.popup.delete":
            "\xbfEliminas este fondo? Los chats que lo usen se cambiar\xe1n por un fondo predeterminado.",
          "dialog.download.font": "tahoma",
          "dialog.download.message": "Actualizando...",
          "dialog.download.messagesub": "Espera.",
          "displayname.error.badwords": "Va a ser que no.\nPrueba con otro. ",
          "duplicategroup.popup.button.gotochatmultiple": "Abrir grupo",
          "duplicategroup.popup.createnewgroup": "Crear grupo",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "Ya tienes un grupo con estos participantes (%1). \xbfAbres este grupo?",
          "duplicategroup.popup.desc.selfchatexists":
            "Ya tienes un grupo contigo como \xfanico participante\xa0(%1). \xbfAbres este grupo?",
          "duplicategroup.popup.title.groupexists": "Ya existe",
          "e2ee.auth.pincode.timeout":
            "Se produjo un error.\nMejor si lo intentas de nuevo m\xe1s tarde.",
          "e2ee.message.title": "No se puede descifrar el mensaje",
          "e2ee.popupbutton.ok": "Aceptar",
          "e2ee.popupdesc.pleaseresend":
            "No se puede mostrar por motivos de seguridad. Pide que te lo manden de nuevo.",
          "e2ee.popupdesc.securityerror":
            "No se puede abrir por motivos de seguridad.",
          "e2ee.popuptitle.securityerror": "Error de seguridad",
          "emoji.downloadAll.confirm": "\xbfDescargas todos los Emoticones?",
          "friend.msg.block":
            "\xbfBloqueas a %1? Esta cuenta no te mandar\xe1 m\xe1s mensajes. Puedes desbloquearla desde Configuraci\xf3n > Amigos > Cuentas bloqueadas.",
          "friend.msg.hide":
            "\xbfOcultas a %1? Puedes revertir el proceso desde Configuraci\xf3n > Amigos > Cuentas ocultas.",
          "gallery.picker.original.btn": "Original",
          "gnb.guide.allNotification.text":
            "Silencia todas las notificaciones y que no te molesten.",
          "group.btn.add.title": "A\xf1adir",
          "group.btn.cancel.title": "Cancelar",
          "group.btn.cancelinvite.title": "Cancelar",
          "group.btn.invite.title": "Invitar al chat",
          "group.btn.removeMember.title": "Borrar",
          "group.button.invitefrineds": "Invitar",
          "group.label.addprofile.title": "Editar",
          "group.label.create.title": "Crear grupo",
          "group.label.groupname.title": "Nombre del grupo",
          "group.label.invitee.title": "Invitaciones pendientes",
          "group.label.member.title": "Miembros",
          "group.label.modify.title": "Editar grupo",
          "group.label.modifyprofile.title": "Editar",
          "group.label.nobuddy.title": "No hay miembros",
          "group.label.nobuddytoselect.title": "Venga, elige a alguien.",
          "group.label.nosearchresult.title": "No encontramos nada.",
          "group.label.nothing.title": "Elige a alg\xfan Amigo.",
          "group.label.selectmember.title": "Invitar",
          "group.label.unauthorized": "No tienes autorizaciones en este grupo.",
          "group.menu.delete": "Quitar",
          "group.menu.leave": "Salir",
          "group.msg.cancelInvite.confirm":
            "%1 parece que no se une. \xbfCancelas su invitaci\xf3n?",
          "group.msg.cancelinvite.failed":
            "No se pudo cancelar la invitaci\xf3n.",
          "group.msg.empty.name": "\xbfQu\xe9 nombre vas a poner?",
          "group.msg.kickoutmember.confirm": "\xbfQuitas a %1 del grupo?",
          "group.msg.kickoutmember.failed": "No se pudo eliminar.",
          "group.msg.leavegroup.confirm":
            "Si sales, no tendr\xe1s acceso a la lista de participantes ni al historial de chat.",
          "group.msg.makegroup.failed": "No se pudo crear el grupo.",
          "group.msg.overflow.name":
            "M\xe1ximo 20 caracteres. Tendr\xe1s que ajustarte a ese l\xedmite.",
          "group.msg.uploadimge.failed": "No se pudo subir la foto.",
          "group.profile.delete": "Borrar foto del perfil",
          "group.profile.select.default": "Predeterminados",
          "group.profile.select.local": "De mi ordenador",
          "group.text.placerholder.title": "Nombre del grupo",
          "group.title.members": "Miembros",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "Esta funci\xf3n solo est\xe1 disponible a los mayores de edad.",
          "groupcall.alert.popup.error.nowcalling":
            "No puedes hacer 2 llamadas a la vez.\nLlama cuando acabes una.",
          "groupcall.call.change.to.video": "\xbfCambias a videollamada?",
          "groupcall.call.change.to.video.noCamera":
            "No se mostrar\xe1 tu v\xeddeo porque no se detect\xf3 una c\xe1mara. \xbfQuieres cambiar a videollamada?",
          "groupcall.call.endwatchtogether.button": "Dejar de compartir",
          "groupcall.call.invite.complete": "\xa1Ah\xed va la invitaci\xf3n!",
          "groupcall.call.invite.tooltip":
            "Pulsa este bot\xf3n para invitar a los dem\xe1s.",
          "groupcall.call.popupbutton.cancel": "Ahora no",
          "groupcall.call.popupbutton.switch": "Cambiar",
          "groupcall.call.popupdesc.newcam": '\xbfCambias a "%1"?',
          "groupcall.call.popupdesc.newmic": '\xbfCambias a "%1"?',
          "groupcall.call.popupdesc.newspeaker": '\xbfCambias a "%1"?',
          "groupcall.call.popuptitle.newcam": "C\xe1mara detectada",
          "groupcall.call.popuptitle.newmic": "Micr\xf3fono detectado",
          "groupcall.call.popuptitle.newspeaker": "Altavoz detectado",
          "groupcall.call.speaker.many.few": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.many": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.one": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.other": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.two": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.zero": "%1 y %2 m\xe1s",
          "groupcall.call.toast.loadingyoutube": "Cargando\u2026",
          "groupcall.call.toast.someoneelsepreparingwatchtogether":
            "%1 va a compartir su pantalla.",
          "groupcall.call.toast.usersjoinedgroupcall.one":
            "%1 y %n m\xe1s se unieron a la llamada grupal.",
          "groupcall.call.toast.usersjoinedgroupcall.other":
            "%1 y %n m\xe1s se unieron a la llamada grupal.",
          "groupcall.call.toast.usersleftgroupcall.one":
            "%1 y %n m\xe1s salieron de la llamada grupal.",
          "groupcall.call.toast.usersleftgroupcall.other":
            "%1 y %n m\xe1s salieron de la llamada grupal.",
          "groupcall.call.waiting.msg": "Esperando a los dem\xe1s...",
          "groupcall.call.watchtogether.button": "Compartir\npantalla",
          "groupcall.callsettings.button.numberofparticipants":
            "Participantes (%1)",
          "groupcall.callsettings.tooltip.handsfreebt":
            "Configura %1 como micr\xf3fono y altavoz.",
          "groupcall.callsettingspreview.desc.nocamera":
            "No se te ver\xe1 porque parece que no tienes una c\xe1mara. \xbfTe unes de todas formas a la llamada?",
          "groupcall.callsettingspreview.desc.nomic":
            "No se te oir\xe1 porque parece que no tienes micr\xf3fono. \xbfTe unes de todas formas a la llamada?",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "No se te oir\xe1 ni ver\xe1 porque parece que no tienes micr\xf3fono ni c\xe1mara. \xbfTe unes de todas formas a la llamada?",
          "groupcall.chat.alert.popup.error.overflow":
            "Uf, demasiada gente llamando ahora.\nMejor si lo intentas de nuevo m\xe1s tarde.",
          "groupcall.chat.confirm.popup.cant":
            "Si no eres miembro, olv\xeddate.",
          "groupcall.chat.confirm.popup.join.few":
            "Hay %n usuarios en esta llamada. \xbfTe unes?",
          "groupcall.chat.confirm.popup.join.many":
            "Hay %n usuarios en esta llamada. \xbfTe unes?",
          "groupcall.chat.confirm.popup.join.one":
            "Hay %n usuario en esta llamada. \xbfTe unes?",
          "groupcall.chat.confirm.popup.join.other":
            "Hay %n usuarios en esta llamada. \xbfTe unes?",
          "groupcall.chat.confirm.popup.join.two":
            "Hay %n usuarios en esta llamada. \xbfTe unes?",
          "groupcall.chat.confirm.popup.join.zero":
            "Hay %n usuarios en esta llamada. \xbfTe unes?",
          "groupcall.chat.confirm.popup.start":
            "No hay llamadas grupales ahora.\n\xbfEmpiezas t\xfa una?",
          "groupcall.chat.confirm.popup.start.btn.video":
            "Empezar videollamada",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "\xbfEmpiezas una llamada grupal?",
          "groupcall.chat.layer.join.btn": "Unirse",
          "groupcall.chat.layer.numofmembers.few":
            '<![CDATA[<font color=\\"#527fdc\\">%n usuarios</font> en la llamada.]]>',
          "groupcall.chat.layer.numofmembers.many":
            '<![CDATA[<font color=\\"#527fdc\\">%n usuarios</font> en la llamada.]]>',
          "groupcall.chat.layer.numofmembers.one":
            '<![CDATA[<font color=\\"#527fdc\\">%n usuario</font> en la llamada.]]>',
          "groupcall.chat.layer.numofmembers.other":
            '<![CDATA[<font color=\\"#527fdc\\">%n usuarios</font> en la llamada.]]>',
          "groupcall.chat.layer.numofmembers.two":
            '<![CDATA[<font color=\\"#527fdc\\">%n usuarios</font> en la llamada.]]>',
          "groupcall.chat.layer.numofmembers.zero":
            '<![CDATA[<font color=\\"#527fdc\\">%n usuarios</font> en la llamada.]]>',
          "groupcall.chat.layer.start.btn": "Empezar",
          "groupcall.chat.layer.start.dscr": "Iniciar llamada grupal",
          "groupcall.chat.layer.start.msg": "%1 inici\xf3 una llamada grupal.",
          "groupcall.chat.message.end": "Se termin\xf3 la llamada grupal.",
          "groupcall.chat.message.invite":
            "Te invitaron a la llamada grupal:\n%1",
          "groupcall.chat.message.start": "Empez\xf3 la llamada grupal.",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            'Te invitaron a la conferencia de LINE "%1". \xdanete con este enlace:\n%2',
          "groupcall.chatlink.popupdesc.invalidlink": "Enlace no v\xe1lido.",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "Crea un enlace para compartir con otros y empezar una llamada.",
          "groupcall.createchat.button.createmeeting": "Conferencia",
          "groupcall.deletemeeting.popupdesc.delete": "Eliminar",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "\xbfEliminas esta conferencia?",
          "groupcall.editmeetingname.popuptitle.edit": "Editar nombre",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "M\xe1ximo %1 en la llamada grupal.",
          "groupcall.groupcallsettings.title.participants": "Participantes ",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "Se quit\xf3 a %1 de la conferencia.",
          "groupcall.invite.index.not.join": "Invitaciones pendientes",
          "groupcall.invite.selectall": "Elegir a todos",
          "groupcall.invite.title": "Invitar",
          "groupcall.kickout.popup":
            "Se termin\xf3 la llamada por exceder el tiempo de espera.",
          "groupcall.leavemeeting.popupbutton.leave": "Salir",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "Si sales, no podr\xe1s ver la lista de participantes ni el historial de chat. ",
          "groupcall.meetingintroguide.button.start": "Crear conferencia",
          "groupcall.meetingintroguide.desc.disclaimers":
            "Este enlace tiene una validez de 90 d\xedas y \xfanicamente para mayores de edad. Recuerda que el nombre y la foto del perfil de tu LINE se mostrar\xe1 cuando te unas o env\xedes un mensaje en el chat de la conferencia.",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "Este enlace tiene una validez de 90 d\xedas y \xfanicamente para mayores de edad. Recuerda que el nombre y la foto del perfil de tu LINE se mostrar\xe1 cuando te unas o env\xedes un mensaje en el chat de la conferencia.",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "Comparte el enlace y empieza la videoconferencia.",
          "groupcall.meetingintroguide.header.connect":
            "Conecta\ncon un enlace",
          "groupcall.meetingintroguide.title.meetings": "Conferencias",
          "groupcall.meetingnameedit.popupbutton.save": "Guardar",
          "groupcall.meetingparticipantlist.button.remove": "Quitar",
          "groupcall.meetingparticipants.button.next": "Siguiente",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "Buscar por nombre",
          "groupcall.meetingparticipants.title.reportuser": "Denunciar",
          "groupcall.meetings.button.copymeetinglink": "Copiar enlace",
          "groupcall.meetings.button.createmeeting": "Crear conferencia",
          "groupcall.meetings.button.shareinvite": "Invitar",
          "groupcall.meetings.button.startmeeting": "Empezar",
          "groupcall.meetings.desc.createdjustnow": "Justo ahora",
          "groupcall.meetings.desc.usersmeeting": "Conferencia de %1",
          "groupcall.meetings.popup.policyblock":
            "Tu cuenta se ha suspendido por violaci\xf3n de los t\xe9rminos de uso de LINE Meeting.",
          "groupcall.meetings.popupdesc.networkerror":
            "No se pudo cargar debido a un error temporal. Int\xe9ntalo m\xe1s tarde.",
          "groupcall.meetings.toast.meetingcreated": "Conferencia creada.",
          "groupcall.meetingscreen.tooltip.invitemorepeople": "Invitar",
          "groupcall.participantlist.desc.cameraturnedoff": "C\xe1mara apagada",
          "groupcall.participantlist.desc.gridview":
            "Cambiar a vista galer\xeda",
          "groupcall.participantlist.desc.muted": "Silenciado",
          "groupcall.participantlist.desc.participantview":
            "Anclar a la pantalla enfoque",
          "groupcall.participantlist.placeholder.searchbyname":
            "Buscar por nombre",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "Se mostrar\xe1 el nombre y\nla foto de perfil de tu LINE.",
          "groupcall.removefrommeeting.popupbutton.remove": "Quitar",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "\xbfQuitas a %1 de la conferencia?",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "No se pudo realizar la acci\xf3n debido a un error temporal. Int\xe9ntalo m\xe1s tarde.",
          "groupcall.report.button.content": "Contenido inapropiado",
          "groupcall.report.button.harrassment": "Acoso sexual",
          "groupcall.report.button.impersonation": "Robo de indentidad",
          "groupcall.report.button.impersonation.inquirypopup":
            "Para poder analizar el caso, necesitamos que nos proporciones informaci\xf3n detallada.",
          "groupcall.report.button.impersonation.inquirypopup.decline":
            "Omitir",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "Proceder",
          "groupcall.report.button.other": "Otros",
          "groupcall.report.button.report": "Denunciar",
          "groupcall.report.button.scam": "Estafa",
          "groupcall.report.button.spam": "Publicidad",
          "groupcall.report.desc.reportreason":
            "Para analizar el caso, se enviar\xe1 la informaci\xf3n de este usuario y capturas de pantalla de la reuni\xf3n.",
          "groupcall.report.popupbutton.donotremove": "No",
          "groupcall.report.popupbutton.remove": "Expulsar",
          "groupcall.report.popupdesc.removeuser":
            "Denuncia enviada.\n\xbfLo expulsas de la reuni\xf3n?",
          "groupcall.report.subtitle.reportreason":
            "Ind\xedcanos qu\xe9 ocurre.",
          "groupcall.screenshare.receiver.failreceive": "Cargando pantalla...",
          "groupcall.screenshare.receiver.senderdesc":
            "%1 est\xe1 compartiendo su pantalla.",
          "groupcall.screenshare.receiver.viewscreen":
            "Volver a pantalla compartida",
          "groupcall.screenshare.sender.btn.stop": "Dejar de compartir",
          "groupcall.screenshare.sender.desc":
            "Est\xe1s compartiendo tu pantalla.",
          "groupcall.settings.menu.report": "Denunciar",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "M\xe1ximo 30 conferencias. Elimina alguna que no uses y prueba de nuevo.",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "Solo puedes agregar a otros compartiendo la invitaci\xf3n. ",
          "groupcall.title": "Llamada grupal",
          "groupcall.toast.deviceerror.camera":
            "Esta c\xe1mara se est\xe1 usando en otra aplicaci\xf3n.",
          "groupcall.toast.newdevice.camera":
            'Se cambi\xf3 a la c\xe1mara "%1".',
          "groupcall.toast.newdevice.mic": 'Se cambi\xf3 al micr\xf3fono "%1".',
          "groupcall.toast.newdevice.speaker": 'Se cambi\xf3 al altavoz "%1".',
          "groupcall.verifyage.desc.verifyageinmobileversion":
            "Primero tienes que verificar tu edad.\nPuedes hacerlo desde tu LINE en Configuraci\xf3n > Verificaci\xf3n de la edad.",
          "groupcall.video.alert.member.join":
            "%1 se uni\xf3 a la llamada grupal.",
          "groupcall.video.alert.member.leave": "%1 colg\xf3.",
          "groupcall.video.alert.streaming.off.member":
            "Apagaste su v\xeddeo.\nEnci\xe9ndelo para veros.",
          "groupcall.video.chat.error.without.camera.body":
            "No encontramos tu c\xe1mara. \xbfTe unes pero sin que te vean?",
          "groupcall.video.chat.error.without.camera.btn.video": "Unirme",
          "groupcall.video.chat.error.without.camera.btn.voice": "Unirme",
          "groupcall.video.chat.layer.start.dscr": "Empezar videollamada.",
          "groupcall.video.chat.layer.start.msg":
            "%1 empez\xf3 una videollamada.",
          "groupcall.video.chat.layer.start.shortmsg":
            "Empez\xf3 la videollamada",
          "groupcall.video.chat.message.invite":
            'Te invitaron a la videollamada:\n"%1"',
          "groupcall.video.chat.message.start": "Empez\xf3 la videollamada.",
          "groupcall.video.desc.guide.tryCall":
            "Participa en videollamadas grupales con LINE en tu ordenador. ",
          "groupcall.video.error.change.to.voice":
            "Mucha gente us\xe1ndolo o problemas de conexi\xf3n. Pasamos al modo llamada.",
          "groupcall.video.error.not.video.member":
            "Se uni\xf3 sin poner su c\xe1mara.",
          "groupcall.video.fullview.streaming.fail.body":
            "No se pudo cargar el v\xeddeo de %1.\nInt\xe9ntalo m\xe1s tarde.",
          "groupcall.video.fullview.streaming.fail.button": "Reintentar",
          "groupcall.video.fullview.streaming.off.body":
            "Apagaste el v\xeddeo de %1.\nEnci\xe9ndelo para veros.",
          "groupcall.video.menu.streaming.off": "Apagar v\xeddeo",
          "groupcall.video.menu.streaming.on": "Encender v\xeddeo",
          "groupcall.video.title": "Videollamada grupal",
          "groupcall.video.toast.cameraoff":
            "Tu c\xe1mara est\xe1 apagada y la ventana de los efectos cerrada.",
          "groupcall.video.tooltip.focusview": "Cambiar a vista enfoque",
          "groupcall.video.tooltip.gridview": "Cambiar a vista galer\xeda",
          "groupcall.video.tooltip.profilelist": "Participantes",
          "groupcall.video.tooltip.videolayout": "Distribuci\xf3n v\xeddeo",
          "groupcall.viewmode.desc.focusviewcenter": "Enfoque (medio)",
          "groupcall.viewmode.desc.focusviewleft": "Enfoque (izquierda)",
          "groupcall.viewmode.desc.focusviewright": "Enfoque (derecha)",
          "groupcall.viewmode.desc.gridview": "Galer\xeda",
          "groupcall.voice.chat.confirm.popup.join":
            "Hay una llamada grupal activa.\xa0\xbfTe unes?",
          "groupcall.voice.chat.layer.start.dscr": "Empezar llamada grupal.",
          "groupcall.voice.chat.layer.start.msg":
            "%1 empez\xf3 una llamada grupal.",
          "groupcall.voice.chat.layer.start.shortmsg": "Empez\xf3 la llamada",
          "groupcall.voice.chat.message.invite":
            'Te invitaron a la llamada grupal:\n"%1"',
          "groupcall.voice.chat.message.start": "Empez\xf3 la llamada grupal. ",
          "groupcall.voice.title": "Llamada grupal",
          "groupcall.watchtogethercall.popupbutton.start": "Empezar",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "\xbfMiras este v\xeddeo con los dem\xe1s?",
          "groupcall.watchtogethercall.toast.currentlyinsession":
            "%1 est\xe1 compartiendo su pantalla.",
          "groupcall.watchtogethercall.toast.userendedwatchtogether":
            "%1 dej\xf3 de compartir su pantalla.",
          "groupcall.watchtogethercall.toast.userstartedwatchtogether":
            "%1 est\xe1 compartiendo su pantalla.",
          "groupcall.watchtogethermenu.button.screenshare": "Tu pantalla",
          "groupcall.watchtogethermenu.button.youtube": "YouTube",
          "groupcall.watchtogethermenu.desc.policy":
            "Pol\xedtica de privacidad",
          "groupcall.watchtogethermenu.desc.searchonyoutube":
            "Buscar link YouTube, keyword",
          "groupcall.watchtogethermenu.desc.terms": "T\xe9rminos del servicio",
          "groupcall.youtube.edge.popup.btn.install": "Continuar",
          "groupcall.youtube.edge.popup.desc":
            "Instala Microsoft Edge Chromium para compartir v\xeddeos de YouTube. \xbfSigues en la p\xe1gina de Microsoft?",
          "groupcall.youtube.endduetoerror":
            "No se puede usar la funci\xf3n de compartir v\xeddeos de YouTube debido a un error. Prueba m\xe1s tarde.",
          "groupcall.youtube.error.reinstall":
            "No se puede reproducir el v\xeddeo. Prueba m\xe1s tarde o reinstala el navegador.",
          "groupcall.youtube.paste": "Compartir v\xeddeo YouTube ",
          "groupcall.youtube.paste.btn.play": "Reproducir",
          "groupcall.youtube.paste.btn.search": "Vista previa",
          "groupcall.youtube.paste.desc":
            "Buscar v\xeddeos para ver con los dem\xe1s. Mejor con auriculares.",
          "groupcall.youtube.paste.noresult":
            "No se puede reproducir el v\xeddeo. Comprueba el enlace.",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "Reproducir",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "\xbfPausas este v\xeddeo y reproduces otro?",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1 ya est\xe1 compartiendo un v\xeddeo de YouTube.",
          "groupcall.youtube.paste.toast.error":
            "Vaya, no se pudo compartir por un error.",
          "groupcall.youtube.paste.unknownerror":
            "No se puede cargar el v\xeddeo. Prueba m\xe1s tarde.",
          "groupcall.youtube.receiver.newvideo":
            "%1 est\xe1 preparando un v\xeddeo.",
          "groupcall.youtube.receiver.playvideo": "Volver al v\xeddeo",
          "groupcall.youtube.receiver.senderdesc":
            "%1 est\xe1 reproduciendo un v\xeddeo.",
          "groupcall.youtube.receiver.tooltip.mute": "Silenciar",
          "groupcall.youtube.receiver.tooltip.unmute": "Av\xedsame",
          "groupcall.youtube.receiver.videopaused": "%1 paus\xf3 el v\xeddeo.",
          "groupcall.youtube.sender.btn.stop": "Dejar de compartir",
          "groupcall.youtube.sender.desc": "Est\xe1s compartiendo un v\xeddeo.",
          "groupcall.youtube.stop.popup.btn.confirm": "Dejar de compartir",
          "groupcall.youtube.stop.popup.desc":
            "\xbfDejas de compartir este v\xeddeo de YouTube?",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "La funci\xf3n de compartir v\xeddeos de YouTube no est\xe1 disponible a\xfan en Windows.",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1 cancel\xf3 la invitaci\xf3n de %2 al grupo.",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1 a\xf1adi\xf3 a %2 al grupo. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre del grupo</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1 se uni\xf3 al grupo. <a href="line://nv/group/settings/groupname/chatId=%2">Cambiar nombre del grupo</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1 quit\xf3 a %2 del grupo.",
          "groupchat.linkqr.error.block":
            "Este grupo no permite \ninvitaciones por enlaces o c\xf3digo QR.",
          "groupchat.linkqr.error.renew": "Este grupo no existe.",
          "groupchat.push.invitedtojoingroup": "%1 te invit\xf3 a este grupo.",
          "groupchat.push.someonejoinsgroup": "%1 se uni\xf3 al grupo.",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1: ya pod\xe9is uniros con enlace o C\xf3digo QR.",
          "groupchat.systemmsg.cancelinvite":
            "%1 cancel\xf3 la invitaci\xf3n de %2.",
          "groupchat.systemmsg.cancelinvite.updatename":
            '<![CDATA[%1 cancel\xf3 la invitaci\xf3n de %2 al grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.changegroupname":
            '%1 cambi\xf3 el nombre del grupo a "%2".',
          "groupchat.systemmsg.changegroupphoto":
            "%1 cambi\xf3 la foto de perfil del grupo.",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1: ya no pod\xe9is uniros con enlace o C\xf3digo QR.",
          "groupchat.systemmsg.inviteuser":
            "%1 invit\xf3 a %2 al grupo. Esperando a que se una.",
          "groupchat.systemmsg.inviteuser1n": "%1 a\xf1adi\xf3 a %2 al grupo.",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%1 a\xf1adi\xf3 a %2 al grupo. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%1 a\xf1adi\xf3 a %2 al grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.kickoutuser": "%1 quit\xf3 a %2 del grupo.",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%1 quit\xf3 a %2 del grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.userjoin": "%1 se uni\xf3 al grupo.",
          "groupchat.systemmsg.userjoin.updatename": "%1 se uni\xf3 al grupo.",
          "groupchat.systemmsg.userleave": "%1 dej\xf3 el grupo.",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1 dej\xf3 el grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%2">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.youareinvited": "%1 te invit\xf3 al grupo.",
          "grouphome.album.alert.inprogress":
            "No puedes a\xf1adir m\xe1s \xedtems o eliminar \xe1lbumes mientras se est\xe1n subiendo otros. \nInt\xe9ntalo de nuevo.",
          "grouphome.album.alert.reupload": "\xbfSubir \xedtem de nuevo?",
          "grouphome.album.alert.save.failed":
            "No se puede guardar el \xedtem.",
          "grouphome.album.alert.stopUpload": "Detener",
          "grouphome.album.alert.unregistereduser":
            "No puedes usar los \xe1lbumes con los usuarios con cuentas eliminadas.",
          "grouphome.album.label.reupload": "Reintentar",
          "grouphome.albumdetail.addPhoto": "A\xf1adir fotos",
          "grouphome.albumdetail.alert.changeAlbum":
            "Se borrar\xe1n todas las fotos del \xe1lbum\ny no se podr\xe1n recuperar.\n\xbfLo borras?",
          "grouphome.albumdetail.changeName": "Poner otro nombre",
          "grouphome.albumdetail.delete": "Borrar \xe1lbum",
          "grouphome.albumdetail.empty.desc":
            "\xc1lbumes, para que guardes tus mejores momentos. Tu gente, tus \xe1lbumes.",
          "grouphome.albumdetail.empty.title": "Sin \xedtems a\xf1adidos.",
          "grouphome.albumdetail.error":
            "\xa1Vaya! No pudimos cargar la informaci\xf3n.\nInt\xe9ntalo de nuevo.",
          "grouphome.albumdetail.saveComplete": "\xa1Listo!",
          "grouphome.albumdetail.saveall": "Guardar todo",
          "grouphome.albumdetail.savingPhoto": "Guardando \xedtems...",
          "grouphome.albumdetail.selectCount.plurals.few": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.many": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.one": "%n foto",
          "grouphome.albumdetail.selectCount.plurals.other": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.two": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.zero": "%n fotos",
          "grouphome.albumdetail.title.changeAlbum": "Poner otro nombre",
          "grouphome.albumdetail.uploader": "por %1",
          "grouphome.alert.addphoto":
            "\xbfVas a cancelar?\nNo se guardar\xe1 el \xedtem adjunto.",
          "grouphome.alert.albumLimitCount": "M\xe1ximo %n \xe1lbumes.\n",
          "grouphome.alert.alreadyDeleteAlbum": "Ya no est\xe1 disponible.",
          "grouphome.alert.alreadyDeletePhoto":
            "Ya se elimin\xf3 este \xedtem.",
          "grouphome.alert.makealbum":
            "\xbfSales sin terminar de crear el \xe1lbum?",
          "grouphome.alert.photoLimitCount":
            "No puedes a\xf1adir m\xe1s fotos.\nM\xe1ximo de %1 fotos para cada \xe1lbum.",
          "grouphome.label.album": "\xc1lbum",
          "grouphome.label.album.addPhoto": "A\xf1adir fotos",
          "grouphome.label.album.changeName": "Poner otro nombre",
          "grouphome.label.album.delete": "Borrar \xe1lbum",
          "grouphome.label.album.empty": "No hay \xe1lbumes.",
          "grouphome.label.album.make": "Crear \xe1lbum",
          "grouphome.label.albumName": "Nombre del \xe1lbum",
          "grouphome.label.post": "Notas",
          "grouphome.label.post.empty": "A\xfan no hay notas.",
          "grouphome.label.showAllPost": "Todas las notas",
          "grouphome.label.showUserHome": "Inicio de %1",
          "grouphome.label.showallalbum": "Todos los \xe1lbumes",
          "grouphome.label.writepost": "Crear nota",
          "grouphome.member.alert.joinGroup": "Te uniste al grupo.",
          "grouphome.member.label.showGroup": "Ver grupo",
          "grouphome.post.alert.unregistereduser":
            "No puedes usar notas con usuarios cuyas cuentas se eliminaron.",
          "gruopchat.dynamic.group.title.memberleft.updatename":
            "%1 dej\xf3 el grupo.",
          "hub.menubar.tooltip": "Check out LINE services in LINE HUB.",
          "hub.menubar.tooltip.renew":
            "LINE HUB\u5168\u65b0\u5716\u793a\uff0c\u638c\u63e1\u6240\u6709LINE\u7cbe\u9078\u5167\u5bb9\uff01",
          "image.viewer.btn.edit.tooltip": "Abriendo editor de im\xe1genes...",
          "image.viewer.btn.minimizesize.tooltip": "Ajustar a la ventana",
          "image.viewer.cancel": "Cancelar",
          "image.viewer.copy": "Copiar",
          "image.viewer.crop": "Recortar",
          "image.viewer.download.error": "Hubo un error temporal.",
          "image.viewer.loading.error":
            "\xa1Vaya! No se pudo procesar\ndebido a un error temporal.\nMejor si lo intentas luego.",
          "image.viewer.ok": "Vale",
          "image.viewer.save": "Bajar",
          "image.viewer.share.chat": "Mandar por chat",
          "imageEditor.btn.doNotSave": "No guardar",
          "imageEditor.msg.onEditing":
            "\xbfGuardas las fotos editadas en tu ordenador?",
          "imageEditor.msg.onModified":
            "Esta foto contiene cambios sin guardar.",
          "imageEditor.msg.toobig":
            "\xa1No se puede editar! Su resoluci\xf3n es muy alta.",
          "invite.btn.cancel.title": "Cancelar",
          "invite.btn.invite.title": "Vale",
          "invite.label.create.title": "Invitar al chat",
          "invite.label.invitee.title": "Invitar",
          "invite.label.nobuddytoselect.title": "\xbfA qui\xe9n invitas?",
          "invite.label.nosearchresult.title": "No anda por aqu\xed.",
          "invite.label.nothing.title": "Venga, elige a alguien.",
          "invite.label.person.title.plurals.few": "%n",
          "invite.label.person.title.plurals.many": "%n",
          "invite.label.person.title.plurals.one": "%n",
          "invite.label.person.title.plurals.other": "%n",
          "invite.label.person.title.plurals.two": "%n",
          "invite.label.person.title.plurals.zero": "%n",
          "keep.alert.sendtochat.unsupported.all.one":
            "Este archivo no es compatible.",
          "keep.alert.sendtochat.unsupported.all.other":
            "Estos archivos no son compatibles.",
          "keep.alert.sendtochat.unsupported.file.multi": "",
          "keep.alert.sendtochat.unsupported.some.one":
            "Uno de los archivos no es compatible. \xbfEnv\xedas el resto?",
          "keep.alert.sendtochat.unsupported.some.other":
            "%n archivos no son compatibles. \xbfEnv\xedas el resto?",
          "keep.btn.retry": "Reintentar",
          "keep.category.all": "Todo",
          "keep.category.files": "Archivos",
          "keep.category.links": "Enlaces",
          "keep.category.memos": "Notas",
          "keep.category.newtext": "Texto",
          "keep.category.photos": "Fotos",
          "keep.category.photosvideos": "Multimedia",
          "keep.category.text": "Texto",
          "keep.category.videos": "V\xeddeos",
          "keep.common.error.503":
            "Estamos realizando unas mejoras en Keep.\nPeriodo: dd MMM, HH:mm \u2013 dd MMM, HH:mm (UTC+9)",
          "keep.date.format": "d.M.yyyy",
          "keep.desc.PR.title": "\xbfQu\xe9 es Keep?",
          "keep.desc.alreadyDeleted": "Ya se elimin\xf3.",
          "keep.desc.copied": "Copiado",
          "keep.desc.count.others.plurals.few": "y %1 m\xe1s",
          "keep.desc.count.others.plurals.many": "y %1 m\xe1s",
          "keep.desc.count.others.plurals.one": "y %1 m\xe1s",
          "keep.desc.count.others.plurals.other": "y %1 m\xe1s",
          "keep.desc.count.others.plurals.two": "y %1 m\xe1s",
          "keep.desc.count.others.plurals.zero": "y %1 m\xe1s",
          "keep.desc.delete.one": "\xbfEliminas la selecci\xf3n?",
          "keep.desc.delete.other": "\xbfEliminas la selecci\xf3n?",
          "keep.desc.discard":
            "No se guardaron tus cambios. \xbfLos descartas?",
          "keep.desc.downloadError": "\xa1Vaya! Algo no fue bien.",
          "keep.desc.downloading": "Bajando\u2026",
          "keep.desc.drag":
            'Arrastra y su\xe9ltalo aqu\xed\no haz clic en "Subir".',
          "keep.desc.dragHere": "Arrastra y su\xe9ltalo aqu\xed.",
          "keep.desc.error.reason.exceedPhotoResolution":
            "Tiene m\xe1s de 10 000 px.",
          "keep.desc.error.reason.exceedPhotoSize": "Tiene m\xe1s de 20 MB.",
          "keep.desc.error.reason.expired": "Ya no est\xe1 disponible.",
          "keep.desc.error.reason.lackOfStorage":
            "No tienes espacio suficiente.",
          "keep.desc.error.reason.networkError":
            "Vaya, hay problemas de conexi\xf3n.",
          "keep.desc.error.reason.notFoundFile":
            "Nada, este archivo no anda aqu\xed.",
          "keep.desc.error.reason.unknown": "No se puede subir.",
          "keep.desc.error.reason.unknownFileType":
            "No se puede subir este archivo.",
          "keep.desc.exceedCharacter": "No m\xe1s de 10000 caracteres. ",
          "keep.desc.expiredContent.askDelete":
            "Ya no est\xe1 disponible.\n\xbfEliminar la lista de \xedtems expirados?\n",
          "keep.desc.expiredContent.couldNotConfirmed":
            "Ya no est\xe1 disponible.",
          "keep.desc.expiredContent.storagePeriod":
            "El periodo de almacenamiento expir\xf3.",
          "keep.desc.fileCountExceeds": "Guarda hasta 20 archivos.",
          "keep.desc.guide.tryKeep": "Todo organizado\ncon Keep.",
          "keep.desc.itemsavedinkeepexpired": "Ya no est\xe1 disponible.",
          "keep.desc.loadFailed":
            "No se pudo cargar.\n\xbfTienes conexi\xf3n a internet? ",
          "keep.desc.loadFromKeep": "Abrir archivos en Keep",
          "keep.desc.loadingData":
            "Cargando informaci\xf3n... Espera un momento.",
          "keep.desc.maximumUploadableSize.plurals.few":
            "No m\xe1s de %1 MB cada vez.",
          "keep.desc.maximumUploadableSize.plurals.many":
            "No m\xe1s de %1 MB cada vez.",
          "keep.desc.maximumUploadableSize.plurals.one":
            "No m\xe1s de %1 MB cada vez.",
          "keep.desc.maximumUploadableSize.plurals.other":
            "No m\xe1s de %1 MB cada vez.",
          "keep.desc.maximumUploadableSize.plurals.two":
            "No m\xe1s de %1 MB cada vez.",
          "keep.desc.maximumUploadableSize.plurals.zero":
            "No m\xe1s de %1 MB cada vez.",
          "keep.desc.noSearchResult": "No encontramos nada.",
          "keep.desc.noSelectableItem":
            "No tienes art\xedculos para seleccionar.",
          "keep.desc.notSupportType":
            "No se puede abrir este tipo de archivo. ",
          "keep.desc.notifyPeriod":
            "Los archivos de m\xe1s de %1 MB se guardan 30 d\xedas. ",
          "keep.desc.photoLoadFailed":
            "No se pudo cargar la foto.\n\xbfTienes conexi\xf3n a internet? ",
          "keep.desc.quit.uploading":
            "\xa1Espera! Est\xe1s subiendo archivos a Keep.\nSi cierras LINE, lo cancelar\xe1s.",
          "keep.desc.requesturl.failed.error":
            "No se puede cargar este enlace. Prueba con otro.",
          "keep.desc.retry": "Int\xe9ntalo de nuevo.",
          "keep.desc.saved": "Guardado. ",
          "keep.desc.savedInKeep": "\xa1Se guard\xf3 en Keep!",
          "keep.desc.saving": "Guardando...",
          "keep.desc.storageFull": "No te queda espacio libre en Keep.",
          "keep.desc.storageFull.freeUpSpace":
            "No te queda espacio libre en Keep. \xbfY si borras archivos que no uses? ",
          "keep.desc.storageFull.unable":
            "\xa1Uy! No te queda espacio libre en Keep.",
          "keep.desc.storageFull.unableToSelect":
            "No te queda espacio libre en Keep. ",
          "keep.desc.temporaryError":
            "No pudimos procesar tu solicitud por un error temporal.\nInt\xe9ntalo de nuevo.\n",
          "keep.desc.totalSpace": "Total: %1",
          "keep.desc.unexpectedErrorOccured": "\xa1Vaya! Algo no va bien.",
          "keep.desc.upload.error.maxFileSize":
            "No puedes subir archivos de m\xe1s de %1 GB.\n",
          "keep.desc.upload.inProgress": "Subiendo a Keep...",
          "keep.desc.upload.notifyIncompleteUpload":
            "\xa1Est\xe1s subiendo un archivo!\nSi cierras LINE, el archivo solo se subir\xe1 parcialmente.",
          "keep.desc.uploadFail.storage.plurals.few":
            "No puedes subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.many":
            "No puedes subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.one":
            "No puedes subir %1 \xedtem por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.other":
            "No puedes subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.two":
            "No puedes subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.zero":
            "No puedes subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFailed": "Error al cargar.",
          "keep.desc.uploadPending": "Esperando para cargar...",
          "keep.desc.uploading": "Cargando...",
          "keep.desc.usableSpace": "En uso: %1",
          "keep.desc.videoLoadFailed":
            "\xa1Vaya! No se pudo cargar este v\xeddeo.\nComprueba tu conexi\xf3n e int\xe9ntalo de nuevo. ",
          "keep.desc.wait": "Espera un momento.",
          "keep.desc.warning.deleteAll":
            "\xbfBorras todo?\nNo podr\xe1s recuperarlos si los eliminas.",
          "keep.desc.warning.deleteAll.chromeUser":
            "\xbfBorras todo?\nTambi\xe9n se borrar\xe1n las notas de Chrome.\nNo podr\xe1s recuperarlos si los eliminas.",
          "keep.download.btn": "Abrir carpeta",
          "keep.download.success": "Se complet\xf3 la descarga.",
          "keep.emptytitle.title": "Todo a mano",
          "keep.full.sync.working": "Sincronizando...%1%",
          "keep.home.bannerdesc.endofkeep":
            "Haz una copia de tus archivos guardados en Keep antes del %1.",
          "keep.home.bannertitle.endofkeep": "Keep cierra sus puertas",
          "keep.home.desc.timeformat": "d.M.yyyy",
          "keep.home.emptydesc.descforplaces":
            "Aqu\xed te saldr\xe1 lo que guardes de las cuentas oficiales, LINE PLACE y dem\xe1s.",
          "keep.home.popupbutton.close": "Cerrar",
          "keep.home.popupbutton.dontshowagain": "No mostrar m\xe1s",
          "keep.home.popupbutton.learnmore": "M\xe1s",
          "keep.home.popupdesc.endofkeep":
            "Keep deja de estar disponible a partir del %1. Aseg\xfarate de hacer una copia de los \xedtems que tengas guardados.\nRecuerda que Keep Memo seguir\xe1 disponible despu\xe9s de que Keep cierre sus puertas.",
          "keep.home.popuptitle.endofkeep":
            "Keep cierra sus puertas (c\xf3mo hacer una copia)",
          "keep.home.tab.places": "Lugares",
          "keep.home.toast.pinneditems": "Anclados",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "M\xe1ximo 20 \xedtems a la vez.",
          "keep.keepitem.itemsenttokeepmemoexpired": "Expir\xf3",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "Todo lo que mandes a Keep Memo se mostrar\xe1 en tu Keep.",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "Tenlo siempre presente\nancl\xe1ndolo.",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "Guarda tus cosas en Keep Memo anclando o edit\xe1ndolas en Keep.",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            'Te presentamos "Keep Memo"',
          "keep.keepmemoguide.popuptitle.keepitemsforever": "Tus cosas contigo",
          "keep.keepmemoguide.popuptitle.pinningitems": "\xcdtems anclados",
          "keep.label.add": "A\xf1adir",
          "keep.label.addText": "A\xf1adir",
          "keep.label.capture": "Captura de pantalla",
          "keep.label.chromeMemo": "Memos de Chrome",
          "keep.label.copy": "Copiar",
          "keep.label.createdTime": "Se cre\xf3 el:",
          "keep.label.delete": "Borrar",
          "keep.label.deleteAll": "Eliminar todo",
          "keep.label.deleting": "Borrando...",
          "keep.label.details": "M\xe1s",
          "keep.label.download": "Bajar",
          "keep.label.edit": "Editar",
          "keep.label.emptyText": "No hay nada",
          "keep.label.expired": "Ya no est\xe1n disponibles.",
          "keep.label.fileSize": "Tama\xf1o:",
          "keep.label.from": "De:",
          "keep.label.goToKeep": "Abrir Keep",
          "keep.label.hitocoto": "\xbfC\xf3mo est\xe1s hoy?",
          "keep.label.justNow": "Justo ahora",
          "keep.label.learnMore": "Aver\xedgualo ahora",
          "keep.label.modifiedTime": "\xdaltima modificaci\xf3n:",
          "keep.label.more": "M\xe1s",
          "keep.label.newMemo": "Nota",
          "keep.label.open": "Abrir",
          "keep.label.openkeepmemo": "Abrir Keep Memo",
          "keep.label.order.stored": "Fecha de guardado",
          "keep.label.order.updated": "\xdaltima actualizaci\xf3n:",
          "keep.label.paste": "Pegar",
          "keep.label.pause": "Detener",
          "keep.label.period": "Per\xedodo de almacenamiento:",
          "keep.label.pin": "Anclar",
          "keep.label.play": "Reproducir",
          "keep.label.playTime": "Duraci\xf3n:",
          "keep.label.refresh": "Actualizar",
          "keep.label.resolution": "Resoluci\xf3n:",
          "keep.label.save": "Guardar",
          "keep.label.saveInKeep": "Guardar en Keep",
          "keep.label.savedTime": "Se guard\xf3 el:",
          "keep.label.search": "Buscar en Keep",
          "keep.label.searchResult": "Resultados",
          "keep.label.send": "Enviar",
          "keep.label.settings": "Configuraci\xf3n",
          "keep.label.shareToChat": "Enviar a un chat",
          "keep.label.sortByDate": "Por fecha",
          "keep.label.sortByName": "Por nombre",
          "keep.label.sortBySize": "Por tama\xf1o",
          "keep.label.terminate": "Cerrar LINE",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "Desanclar",
          "keep.label.upload": "Subir",
          "keep.label.uploadFile": "Subir archivos",
          "keep.label.viewinkeepmemo": "Ver en Keep Memo",
          "keep.label.voiceMessage": "Mensaje de voz",
          "keep.label.volume": "Tu espacio",
          "keep.label.writememo.title": "Nota",
          "keep.label.writetext.title": "Texto",
          "keep.main.desc.keepfadeout":
            'La funci\xf3n "Keep" ya no est\xe1 disponible. Actualiza tu LINE.',
          "keep.title": "Keep",
          "keep.toast.itempinned": "Anclado",
          "keep.toast.itemunpinned": "Desanclado",
          "keepmemo.alert.deletemessage":
            "Solo se eliminar\xe1n los mensajes de este dispositivo.",
          "keepmemo.alert.unsendmessage":
            "Se eliminar\xe1n estos mensajes de todos tus dispositivos.",
          "keepmemo.category.all": "Todo",
          "keepmemo.category.files": "Archivos",
          "keepmemo.category.links": "Enlaces",
          "keepmemo.category.photos": "Fotos",
          "keepmemo.category.text": "Texto",
          "keepmemo.category.videos": "V\xeddeos",
          "keepmemo.desc.noSelectableItem":
            "No tienes \xedtems para seleccionar.",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "Solo puedes compartir hasta 20 items a la vez.",
          "keepmemo.label.goToKeepMemo": "Abrir Keep Memo",
          "keepmemo.label.search": "Buscar",
          "keepmemo.label.sendToKeepMemo": "Enviar a Keep Memo",
          "keepmemo.label.share": "Compartir",
          "keepmemo.label.tooltip": "Keep Memo",
          "keepmemo.msg.desc.systemmsg":
            "Guarda esos textos, fotos, v\xeddeos y enlaces.",
          "keepmemo.title": "Enviar a Keep Memo",
          "keyword.notice.btn": "A\xf1adir palabras clave",
          "keyword.notice.desc":
            "Te avisamos si hay mensajes con las palabras o nombres de los Amigos que hayas configurado.",
          "keyword.notice.title": "Notificaci\xf3n de palabras clave",
          "keyword.notification.desc": "Palabra clave mencionada",
          "kickout.all.v3":
            "Se cerr\xf3 la sesi\xf3n. Inicia sesi\xf3n de nuevo.",
          "kickout.dormant.account":
            "Inicia sesi\xf3n con el correo que registraste en el LINE de tu m\xf3vil y verifica tu cuenta.",
          "kickout.email.account.modified":
            "Se cerr\xf3 sesi\xf3n porque registraste un correo nuevo o cambiaste la contrase\xf1a.",
          "kickout.expired":
            "Se cerr\xf3 sesi\xf3n\npor no usarlo durante un tiempo.",
          "kickout.networkError":
            "Vaya, algo no fue bien. Tendr\xe1s que iniciar sesi\xf3n de nuevo.",
          "kickout.noAllowedSecondaryDevice":
            "Cerraste sesi\xf3n con tu m\xf3vil.\n",
          "kickout.notAuthorizedDevice":
            "Se cerr\xf3 sesi\xf3n porque entraste con otro ordenador.   ",
          "kickout.notAvailableUser":
            "Se cerr\xf3 sesi\xf3n porque tu cuenta de LINE se elimin\xf3 desde otro dispositivo.",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "Vaya, algo no fue bien. Tendr\xe1s que iniciar sesi\xf3n de nuevo.",
          "kickout.serverMaintenance":
            "Estamos haciendo unas mejoras. Vuelve pronto si eso.",
          "kickout.serviceMaintenance":
            "Vaya, algo no fue bien. Por favor, vuelve a iniciar sesi\xf3n.",
          "kickout.square.server.fail":
            "Se cerr\xf3 sesi\xf3n debido a un error en la verificaci\xf3n de OpenChat. Por favor, inicia sesi\xf3n de nuevo.",
          "line.keepmemoguide.popupdesc.page1":
            "Puedes enviar libremente fotos, memos u otros items a Keep Memo como en otro chat.",
          "line.keepmemoguide.popuptitle.page1": 'Te presentamos "Keep Memo"',
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "Prueba actualizando LINE primero.",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "Error",
          "line.updatepopup.button.leave": "Salir",
          "linechrome.chat.desc.unsupportedmessage":
            "No disponible en LINE Chrome. \xc1brelo en tu tel\xe9fono.",
          "linechrome.chat.desc.unsupportedstickers":
            "No disponible en LINE Chrome. \nM\xedralo en tu m\xf3vil.",
          "linechrome.chat.toast.nofolders": "No se pudo compartir la carpeta.",
          "linechrome.chat.toast.supportedlanguage":
            "LINE Chrome es compatible con el idioma traducido. Cambia tu idioma en Configuraci\xf3n.",
          "linechrome.end.desc.endline": "\xbfCierras LINE Chrome?",
          "linechrome.main.button.mute1": "Silenciar 1 hora",
          "linechrome.main.button.mute2": "Silenciar 2 horas",
          "linechrome.main.button.mute24": "Silenciar 24 horas",
          "linechrome.main.button.mute30": "Silenciar 30 minutos",
          "linechrome.main.desc.unmutehour": "Activa el sonido en %1 horas",
          "linechrome.main.desc.unmuteminute": "Activa el sonido en %1 minutos",
          "linechrome.main.desc.unmutesecond.one":
            "Activa el sonido en %1 segundo",
          "linechrome.main.desc.unmutesecond.other":
            "Activa el sonido en %1 segundos",
          "linemusic.playlist": "Playlist",
          "linemusic.title": "LINE MUSIC",
          "linemusic.topic": "Tema",
          "lockscreen.kickout.accountError":
            "\xa1Demasiados intentos fallidos!",
          "lockscreen.lockscreen.text": "Tienes LINE bloqueado. ",
          "lockscreen.msg.alert.oncalling":
            "\xbfBloqueas tu LINE?\nSe cortar\xe1 esta llamada.",
          "lockscreen.msg.unlock.description":
            "\xbfBloqueas tu LINE?\nNecesitar\xe1s tu contrase\xf1a para desbloquear.",
          "lockscreen.msg.unlockAuto.description":
            "\xbfBloqueas tu LINE cuando no se detecte actividad?\nNecesitar\xe1s tu contrase\xf1a para desbloquear.",
          "lockscreen.password.fail": "\xa1Contrase\xf1a incorrecta!",
          "lockscreen.password.text":
            "Usa la contrase\xf1a de LINE para desbloquear.",
          "lockscreen.password.unlock.btn": "Desbloquear",
          "login.btn.emailQRcode.login": "Entrar con c\xf3digo QR/correo >",
          "login.btn.login": "Iniciar sesi\xf3n",
          "login.btn.signUp": "Registro",
          "login.emailLogin.identity.credential.error":
            "El correo no es v\xe1lido.\nIntrod\xfacelo correctamente.",
          "login.emailLogin.label.error.accountError":
            "Los datos introducidos no son v\xe1lidos o no los has registrado en LINE.",
          "login.emailLogin.label.error.inputError":
            "Tienes que escribir tu correo y la contrase\xf1a.",
          "login.emailLogin.link.changeToNaverLogin": "NAVER ID Sign In",
          "login.emailLogin.link.findPassword": "Olvid\xe9 la contrase\xf1a",
          "login.emailLogin.placeHolder.email": "Tu correo",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "Correo o n\xfamero tel\xe9fono",
          "login.emailLogin.placeHolder.password": "Contrase\xf1a",
          "login.emailLogin.popup.findPassword":
            "Cambia tu correo y contrase\xf1a de LINE en Configuraci\xf3n > Cuenta > Cambiar tu correo.\n\n\n\n\n",
          "login.error.auth.failed":
            "No se pudo iniciar sesi\xf3n autom\xe1ticamente\nporque iniciaste sesi\xf3n desde otro ordenador\no tu sesi\xf3n expir\xf3. ",
          "login.label.certificate.not.vaild":
            "No se pudo verificar un certificado seguro. Configura una fecha correcta en tu ordenador.",
          "login.label.doingLogin": "Iniciando sesi\xf3n\u2026",
          "login.label.error.auth.failed.anotherPC":
            "Iniciaste sesi\xf3n desde otro PC.",
          "login.label.error.auth.failed.loginExpired":
            "Tu sesi\xf3n ya expir\xf3.",
          "login.label.error.dberror":
            "Se detect\xf3 un error pero ya est\xe1 resuelto. Vuelve a iniciar sesi\xf3n.",
          "login.label.error.dormant.account":
            "Entra con el correo que registraste en el LINE de tu m\xf3vil y verifica tu cuenta.",
          "login.label.error.extraError":
            "Prueba a iniciar sesi\xf3n en otro momento.",
          "login.label.error.keyboardError": "Cambia a teclado internacional.",
          "login.label.error.networkError":
            "Error de conexi\xf3n.\n\xbfTienes conexi\xf3n a internet?",
          "login.label.error.pinCode":
            "Este c\xf3digo de verificaci\xf3n no es correcto.",
          "login.label.error.schemeError":
            "Tienes que iniciar sesi\xf3n para usarlo.",
          "login.label.error.serverError":
            "Se produjo un error. Int\xe9ntalo de nuevo m\xe1s tarde.",
          "login.label.error.serverMaintenance":
            "Estamos haciendo unas mejoras. Vuelve pronto si eso.",
          "login.label.error.verification.timeout":
            "Tu c\xf3digo de verificaci\xf3n expir\xf3.\nPor favor, solicita otro.",
          "login.label.searching.network":
            "Buscando una conexi\xf3n \xf3ptima.",
          "login.loginwithsmartphone.tooltip":
            "Verifica tu tel\xe9fono y entra sin contrase\xf1as.",
          "login.naverLogin.checkbox.keepLoginStatus":
            "Iniciar sesi\xf3n autom\xe1ticamente",
          "login.naverLogin.checkbox.startUpWin": "Abrir LINE con Windows",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "No se pudo iniciar sesi\xf3n. Revisa los ajustes del proxy e int\xe9ntalo de nuevo.",
          "login.naverLogin.link.changeToEmailLogin":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.naverLogin.link.findIDPassword1":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.link.findIDPassword2":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.placeHolder.naverID": "ID de Naver",
          "login.naverLogin.placeHolder.password": "Contrase\xf1a",
          "login.naverLogin.url.ID":
            "https://nid.naver.com/user/help.nhn?todo=idinquiry",
          "login.naverLogin.url.pass":
            "https://nid.naver.com/user/help.nhn?todo=pwinquiry",
          "login.otp.link.title": "OTP \ub3c4\uc6c0\ub9d0",
          "login.otp.link.url":
            "https://help.naver.com/support/contents/contents.nhn?serviceNo=532&categoryNo=1533",
          "login.password.ascii.error":
            "Cambia a espa\xf1ol el idioma de tu teclado.",
          "login.phoneNumberLogin.alert.info":
            "Registra tu n\xfamero para poder utilizar esta opci\xf3n.",
          "login.phoneNumberLogin.alert.networkerror":
            "Hubo un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "login.phoneNumberLogin.identity.credential.error":
            "Este n\xfamero de tel\xe9fono no es v\xe1lido.",
          "login.phoneNumberLogin.label.country": "Selecciona un pa\xeds",
          "login.phoneNumberLogin.label.error.accountError":
            "El n\xfamero de tel\xe9fono o la contrase\xf1a no est\xe1 bien.",
          "login.phoneNumberLogin.label.error.inputError":
            "Pon tu n\xfamero de tel\xe9fono y contrase\xf1a.",
          "login.phoneNumberLogin.placeHolder.password": "Contrase\xf1a",
          "login.phoneNumberLogin.placeHolder.phone":
            "N\xfamero de tel\xe9fono",
          "login.phoneNumberLogin.placeHolder.search": "Buscar",
          "login.phoneNumberLogin.verification.desc":
            "Por seguridad, debes verificar tu cuenta la primera vez que inicies sesi\xf3n en tu ordenador.\nEscribe el c\xf3digo que te enviamos por SMS. Si no te llega, intenta lo siguiente:",
          "login.popup.abuse":
            "Demasiados intentos fallidos. Entra con el c\xf3digo QR.",
          "login.popup.error.diskFull":
            "Tienes menos de 1 GB de espacio.\nAlgunas funciones de LINE pueden no funcionar.",
          "login.popup.kickout.r0": "- te conectas con otro ordenador,",
          "login.popup.kickout.r1": "- no usas LINE durante un tiempo,",
          "login.popup.kickout.r2":
            "- cierras sesi\xf3n con el LINE de tu m\xf3vil,",
          "login.popup.kickout.r3": "- eliminas tu cuenta de LINE.",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5":
            "- La aplicaci\xf3n no se puede usar por mantenimiento.",
          "login.popup.kickout.subtitle":
            "Se cerrar\xe1 autom\xe1ticamente si:",
          "login.popup.kickout.title": "Tu sesi\xf3n de LINE se ha cerrado.",
          "login.qrLogin.desc.error.expired": "Prueba con otro c\xf3digo QR.\n",
          "login.qrLogin.desc.error.network":
            "Comprueba tu conexi\xf3n e int\xe9ntalo de nuevo.\n",
          "login.qrLogin.desc.howto":
            "Abre LINE con tu tel\xe9fono y pulsa el icono del c\xf3digo QR en la casilla de b\xfasqueda para escanear.",
          "login.qrLogin.title": "C\xf3digo QR",
          "login.register.already": "\xbfC\xf3mo registro mi correo?",
          "login.register.downloadLink":
            "Descargar la aplicaci\xf3n m\xf3vil de LINE>>",
          "login.register.help.desc":
            "Para usar la versi\xf3n de ordenador tienes que registrar un correo en el LINE de tu m\xf3vil.\n",
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
          "login.register.newmember": "Registrarse",
          "login.registration.password.reset": "Resetear contrase\xf1a",
          "login.simpleLogin.btn.updateQrCode": "Actualizar c\xf3digo QR",
          "login.simpleLogin.label.desc.normal":
            "En el LINE de tu m\xf3vil, ve a A\xf1adir Amigos > C\xf3digo QR, y escanea el c\xf3digo QR.\n",
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "Espera un poco antes de actualizar el c\xf3digo QR.\n",
          "login.simpleLogin.label.error.qrcodeExpired":
            "Este c\xf3digo QR ya no es v\xe1lido. \xa1Actual\xedzalo!",
          "login.simpleLogin.link.howto":
            "C\xf3mo iniciar sesi\xf3n con c\xf3digo QR",
          "login.tab.emailLogin": "Correo",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin": "Entrar con mi n\xfamero >",
          "login.tab.phoneNumberLogin.title": "Entrar con mi n\xfamero",
          "login.tab.simpleLogin": "C\xf3digo QR",
          "loginHelp.email.image.0": "images/es_es/01_main.png",
          "loginHelp.email.image.1": "images/es_es/02_email.png",
          "loginHelp.email.image.registration":
            "image://login/es_es/03_email.png",
          "loginHelp.emailLogin.label.step1":
            "En tu LINE, ve a Configuraci\xf3n > Cuenta.",
          "loginHelp.emailLogin.label.step2":
            'Registra tu correo electr\xf3nico desde la secci\xf3n "Tu correo".',
          "loginHelp.emailLogin.label.tab.mobile":
            "Me registr\xe9 en la aplicaci\xf3n para m\xf3vil",
          "loginHelp.emailLogin.label.tab.pc":
            "Me registr\xe9 en la versi\xf3n para PC",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "Solo se puede iniciar sesi\xf3n con correo si has registrado uno.\nPuedes registrar el tuyo en Configuraci\xf3n > B\xe1sica.",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "La contrase\xf1a para iniciar sesi\xf3n con el n\xfamero de tel\xe9fono y el e-mail es la misma.\nIngresa tu e-mail junto con la contrase\xf1a que usas para iniciar sesi\xf3n con tu n\xfamero.",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "No registr\xe9 mi correo",
          "loginHelp.emailLogin.label.tab.pc.title2": "Registr\xe9 mi correo",
          "loginHelp.emailLogin.label.title":
            "Ayuda inicio sesi\xf3n con correo",
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
          "loginHelp.qrcode.image.0": "images/es_es/03_qr01.png",
          "loginHelp.qrcode.image.1": "images/es_es/04_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            "En tu LINE, ve a M\xe1s > A\xf1adir amigos > C\xf3digo QR, y escan\xe9alo.",
          "loginHelp.qrcodeLogin.label.step2":
            'Pulsa "Iniciar sesi\xf3n" en el LINE de tu m\xf3vil.',
          "loginHelp.qrcodeLogin.label.title":
            "\xbfC\xf3mo inicio sesi\xf3n con el c\xf3digo QR?",
          "loginHelp.qrcodeLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.qrcodeLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "markdown.input.context.menu.bold": "Negrita",
          "markdown.input.context.menu.codeblock": "Bloque de c\xf3digo",
          "markdown.input.context.menu.italic": "Cursiva",
          "markdown.input.context.menu.strikethrough": "Tachado",
          "markdown.input.context.menu.wordblock": "C\xf3digos",
          "markdown.input.guideline.bold": "*Negrita*",
          "markdown.input.guideline.codeblock": "```Code block```",
          "markdown.input.guideline.italic": "_Cursiva_",
          "markdown.input.guideline.strikethrough": "~Strikethrough~",
          "markdown.input.guideline.wordblock": "`Inline code`",
          "markdown.input.menu.help": "Formato texto",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "Necesitas DirectX 9.0c para reproducir este v\xeddeo.\n\xbfInstalas DirectX 9.0c? ",
          "media.msg.err.expired":
            "No se puede reproducir el v\xeddeo porque excedi\xf3 el per\xedodo de almacenamiento.",
          "media.msg.err.network":
            "Un error de conexi\xf3n o servidor impidi\xf3 la reproducci\xf3n.\nInt\xe9ntalo de nuevo.",
          "media.msg.err.transient":
            "Un error temporal impidi\xf3 la reproducci\xf3n.\nInt\xe9ntalo de nuevo.",
          "media.msg.tooltip.close": "Cerrar",
          "media.msg.tooltip.minimize": "Minimizar",
          "media.msg.tooltip.pause": "Detener",
          "media.msg.tooltip.play": "Reproducir",
          "media.msg.tooltip.playspeed": "Velocidad",
          "media.msg.tooltip.stop": "Parar",
          "media.msg.tooltip.volume": "Volumen",
          "media.msg.tooltip.volume1": "Volumen",
          "media.video.full.screen.out":
            "Pulsa Esc para salir de pantalla completa.",
          "media.video.replay": "Repetir",
          "meeting.popup.end.body": "\xbfSales de esta reuni\xf3n?",
          "meeting.popup.end.button": "Salir",
          "meeting.tooltip.end.call": "Salir",
          "menu.menubar.allNotification.off": "Silenciar notificaciones",
          "menu.menubar.allNotification.on": "Activar notificaciones",
          "menu.menubar.friend.addFriend": "A\xf1adir",
          "menu.menubar.friend.makeGroup": "Crear grupo",
          "menu.menubar.friend.title": "Amigos",
          "menu.menubar.help.lineHelp": "Ayuda de LINE",
          "menu.menubar.help.title": "Ayuda",
          "menu.menubar.keepmemo": "Keep Memo",
          "menu.menubar.line.about": "Versi\xf3n de LINE",
          "menu.menubar.line.exit": "Salir",
          "menu.menubar.line.hideLine": "Ocultar LINE",
          "menu.menubar.line.hideOthers": "Ocultar otros",
          "menu.menubar.line.setting": "Configuraci\xf3n",
          "menu.menubar.line.showAll": "Mostrar todos",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "Chats",
          "menu.menubar.view.friend": "Amigos",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "Perfil",
          "menu.menubar.view.myhome": "Mi Inicio",
          "menu.menubar.view.openchat": "OpenChat",
          "menu.menubar.view.services": "Apps",
          "menu.menubar.view.title": "Mostrar",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll": "Poner todo arriba",
          "menu.menubar.window.maximize": "Expandir",
          "menu.menubar.window.minimize": "Minimizar",
          "menu.menubar.window.title": "Ventanas",
          "menu.setting.lockscreen": "Modo bloqueo",
          "menu.toast.allNotification.off": "Activadas",
          "menu.toast.allNotification.on": "Silenciadas",
          "menu.tray.about": "Versi\xf3n de LINE",
          "menu.tray.balloon.login": "Tu sesi\xf3n de LINE se ha cerrado.",
          "menu.tray.balloon.logout": "Tu sesi\xf3n de LINE se ha cerrado.",
          "menu.tray.check.update": "\xdaltima versi\xf3n",
          "menu.tray.exit": "Salir",
          "menu.tray.keepmemo": "Keep Memo",
          "menu.tray.login": "Iniciar sesi\xf3n",
          "menu.tray.logout": "Cerrar sesi\xf3n",
          "menu.tray.setting": "Configuraci\xf3n",
          "menu.tray.showBuddyList": "Amigos",
          "message.context.background": "Establecer como fondo del chat",
          "message.context.cancel.imageselect": "Deseleccionar foto",
          "message.context.imageselect": "Elegir foto",
          "message.delete.confirm":
            "Los mensajes seleccionados solo se eliminar\xe1n en tu ordenador y no en los ordenadores de tus Amigos.",
          "message.error.invalidfile":
            "El archivo de actualizaci\xf3n est\xe1 da\xf1ado.",
          "message.error.opensetup":
            "No se pudo abrir el archivo de actualizaci\xf3n.",
          "message.error.opensetup.codesign":
            "El archivo de actualizaci\xf3n est\xe1 da\xf1ado y no se puede usar.",
          "message.error.update": "Actualizaci\xf3n incompleta.",
          "message.error.updateurl":
            "No se pudo acceder al enlace de actualizaci\xf3n.",
          "msgbox.alert.font.exist": "Esta fuente ya se est\xe1 usando.",
          "msgbox.alert.nospace":
            "\xa1Tach\xe1n! No te queda espacio. Fijo que tienes aplicaciones, fotos o v\xeddeos que no usas.",
          "msgbox.alert.resolution.apply":
            "Inicia tu LINE de nuevo para usar esta resoluci\xf3n de pantalla.",
          "msgbox.btn.block": "Bloquear",
          "msgbox.btn.buddy.title": "Amigos que a\xf1ad\xed",
          "msgbox.btn.cancel.title": "Cancelar",
          "msgbox.btn.cancelInvite.no": "No",
          "msgbox.btn.cancelInvite.yes": "S\xed",
          "msgbox.btn.close.title": "Cerrar",
          "msgbox.btn.delete": "Eliminar",
          "msgbox.btn.download.title": "Descargar",
          "msgbox.btn.fileOpen": "Abrir archivo",
          "msgbox.btn.gotosettings": "Configuraci\xf3n",
          "msgbox.btn.hide": "Ocultar",
          "msgbox.btn.install.title": "Descargar",
          "msgbox.btn.later.title": "Luego si eso",
          "msgbox.btn.leave.1.n": "Salir",
          "msgbox.btn.leave.group": "Salir",
          "msgbox.btn.lock.enable": "Bloquear",
          "msgbox.btn.lock.start": "Bloquear",
          "msgbox.btn.no.title": "No",
          "msgbox.btn.nocancel.title": "Cancelar",
          "msgbox.btn.ok.title": "Vale",
          "msgbox.btn.post.title": "Postear",
          "msgbox.btn.qrcode.title":
            "C\xf3mo iniciar sesi\xf3n con el c\xf3digo QR",
          "msgbox.btn.quit.title": "Salir",
          "msgbox.btn.remove": "Quitar",
          "msgbox.btn.restart": "Reiniciar",
          "msgbox.btn.retry.title": "Reintentar",
          "msgbox.btn.send": "Enviar",
          "msgbox.btn.sendkey.title": "Cambiar",
          "msgbox.btn.sendshare": "Enviar",
          "msgbox.btn.unsend": "Anular",
          "msgbox.btn.update.title": "Actualizar ahora",
          "msgbox.btn.use": "Acepto",
          "msgbox.btn.yes.title": "S\xed",
          "msgbox.btn.yescontinue.title": "Siguiente",
          "msgbox.btn.yesleave.title": "Salir",
          "msgbox.desc.seemore": "M\xe1s",
          "msgbox.error.request.popup.desc":
            "Se produjo un error temporal. Int\xe9ntalo luego.",
          "needqr.login.button.label": "C\xf3digo QR",
          "needqr.title.content1":
            "Por seguridad, al iniciar sesi\xf3n por primera vez en el ordenador\ntendr\xe1s que hacerlo con el c\xf3digo QR.",
          "needqr.title.label": "Inicia sesi\xf3n con el c\xf3digo QR.",
          "note.save.comfirm.desc": "\xbfLo guardas en la nota de %1?",
          "notificationcenter.timeslot.earlier": "Anteriores",
          "notificationcenter.timeslot.recent": "Recientes",
          "notificationcenter.title": "Notificaciones",
          "nx.textbox.copy": "Copiar",
          "nx.textbox.paste": "Pegar",
          "nx.textbox.selectall": "Elegir todo",
          "oa.profile.desc.region.notselected": "Unspecified",
          "oa.profile.investmentfraud":
            "Cuidado con los fraudes que usan LINE.",
          "ocr.policy.agree.btn": "Acepto",
          "ocr.policy.disagree.btn": "Rechazar",
          "ocr.progress.desc.scan": "Leyendo texto...",
          "ocr.progress.desc.translate": "Traduciendo...",
          "openchat.allthreads.desc.nothreads":
            "Los Hilos creados en este OpenChat se mostrar\xe1n aqu\xed.",
          "openchat.allthreads.title.nothreads":
            "Sin Hilos a\xfan en este OpenChat.",
          "openchat.chatlist.popup.deletechat":
            "\xbfEliminas este chat de tu lista Lo que quiero? No se eliminar\xe1 de tu lista de OpenChat.",
          "openchat.chatlist.popup.hidechat":
            "\xbfOcultas este chat de tu lista de chats? Se seguir\xe1 mostrando en tu lista de OpenChat.",
          "openchat.favoritethreads.title.nothreads": "Sin favoritos a\xfan.",
          "openchat.hidemessages.desc.hidethismember":
            "\xbfOcultas sus mensajes? Se ocultar\xe1n en este OpenChat y sus subchats, pero los mensajes anteriores se seguir\xe1n mostrando.",
          "openchat.hidemessages.desc.maximumhide":
            "Ya no puedes ocultar mensajes de m\xe1s miembros. Muestra mensajes de alg\xfan miembro y prueba de nuevo.",
          "openchat.hidemessages.desc.messageshidden":
            "Los mensajes de este miembro est\xe1n ocultos. Los puedes volver a mostrar desde su perfil.",
          "openchat.join.button.requestjoin": "Solicitar unirse",
          "openchat.linkpopup.desc.donotshowformonth": "No mostrar en un mes",
          "openchat.readallthreads.desc.markallasread":
            "\xbfMarcas todos los mensajes como le\xeddos?",
          "openchat.settings.desc.mentioneveryone": "Mencionar a todos (@All)",
          "openchat.thread.desc.fewerthan10": "Menos de 10 mensajes",
          "openchat.thread.desc.sendafiletothread":
            "Enviar archivos a este Hilo",
          "openchat.thread.desc.updateline":
            "Actualiza tu LINE para ver este mensaje.",
          "openchat.thread.placeholder.expired":
            "No se pueden a\xf1adir mensajes a un Hilo expirado.",
          "openchat.thread.tooltip.yourthreadicon":
            "Todos los Hilos de este OpenChat y los favoritos.",
          "openchat.threadpopup.desc.expired": "Este Hilo expir\xf3.",
          "openchat.threadpopup.desc.expirederror": "Este Hilo expir\xf3.",
          "openchat.threadpopup.desc.unsupported":
            "Has incluido un formato de archivo no v\xe1lido en los hilos.",
          "openchat.threads.button.readall": "Ya los le\xed",
          "openchat.threads.button.seemessages": "Ver mensajes",
          "openchat.threads.tab.all": "Todo",
          "openchat.threads.tab.favorites": "Mis favoritos",
          "openchat.threads.title.threads": "Hilos",
          "openchat.threads.tooltip.messagewontsend":
            "Los mensajes del hilo no se env\xedan al chat.",
          "openchat.threadspopup.button.cancel": "Cancelar",
          "openchat.threadspopup.button.delete": "Eliminar",
          "openchat.threadspopup.button.unsend": "Anular",
          "openchat.threadspopup.desc.deleterootmessage":
            "Tambi\xe9n se eliminar\xe1 el Hilo a todos los miembros.",
          "openchat.threadspopup.desc.unsendrootmessage":
            "Tambi\xe9n se eliminar\xe1 el Hilo a todos los miembros.",
          "openchat.threadspopup.title.deleterootmessage":
            "\xbfEliminas este mensaje?",
          "openchat.threadspopup.title.unsendrootmessage":
            "\xbfAnulas el env\xedo de este mensaje?",
          "openchat.unhidemessages.desc.unhidden":
            "Los mensajes que manden ser\xe1n visibles.",
          "openchat.unhidemessages.desc.unhide":
            "\xbfMuestras los mensajes de este miembro? Los mensajes ocultos anteriores no se mostrar\xe1n.",
          "openchat.userprofile.button.hidemessages": "Ocultar mensajes",
          "openchat.userprofile.button.unhidemessages": "Mostrar mensajes",
          "openchat.yourthread.button.seemessages": "Ver mensajes",
          "openchat.yourthread.desc.fewerthan10": "Menos de 10 mensajes",
          "openchat.yourthreads.button.readmore": "M\xe1s sobre Hilos",
          "openchat.yourthreads.desc.newthreadmessages":
            "Nuevos mensajes del Hilo",
          "openchat.yourthreads.desc.photosent": "Se envi\xf3 la foto.",
          "openchat.yourthreads.desc.stickersent": "Sticker enviado.",
          "openchat.yourthreads.desc.videosent": "Se envi\xf3 el v\xeddeo.",
          "openchat.yourthreads.desc.vmsent": "Se envi\xf3 el mensaje de voz.",
          "openchat.yourthreads.title.messageunavailable":
            "Mensaje no disponible",
          "openchat.yourthreadspopup.button.ok": "Aceptar",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "Este Hilo se ha eliminado.",
          "os.msgbox.btn.gotosettings": "Preferencias del sistema",
          "pl.square.setting.tooltip":
            "Determina qui\xe9n crea o elimina encuestas en el Square.",
          "poll.create.title": "Crear",
          "poll.edit.title": "Editar",
          "poll.main.title": "Encuesta",
          "poll.ongoing.title": "Votar",
          "poll.result.title": "Resultados",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry":
            "No se pudo cargar. Int\xe9ntalo de nuevo.",
          "power.label.tootip": "Cerrar LINE",
          "profile.btn.chat.tooltip": "Chat",
          "profile.btn.home.tooltip": "Inicio",
          "profile.btn.recommend.tooltip": "Para ti",
          "profile.button.investmentfraudwarning":
            "Cuidado con los fraudes que usan LINE.",
          "profile.delete": "Borrar foto del perfil",
          "profile.desc.birthday": "d/M",
          "profile.desc.onediting":
            "\xbfSales de esta pantalla? Perder\xe1s los cambios sin guardar.",
          "profile.desc.timelineposts": "Posts LINE VOOM",
          "profile.edit.background.color": "Elegir color fondo",
          "profile.edit.font.color": "Elegir color letra",
          "profile.edit.placeholder": "Pon un texto",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "Nombre por Amigo: %1",
          "profile.popup.report": "Denunciar",
          "profile.seemoremenu.button.block": "Bloquear",
          "profile.select.capture": "Capturar pantalla",
          "profile.select.default": "Predeterminados",
          "profile.select.local": "De mi ordenador",
          "profile.select.text": "Texto de perfil",
          "profile.socialprofile.menutitle.editprofile": "Ajustes perfil",
          "registration.btn.label.resendPin": "Reenviar c\xf3digo",
          "registration.btn.message.resendPin": "Te enviamos un c\xf3digo.",
          "registration.check.age.ageVerification.body":
            "Primero tienes que verificar tu edad.\nPuedes hacerlo desde tu LINE en Configuraci\xf3n > Verificaci\xf3n de la edad.",
          "registration.check.age.ageVerification.title":
            "Verificaci\xf3n de la edad",
          "registration.check.age.ageunder.body":
            "Tienes que verificar que eres mayor de edad.",
          "registration.check.age.error.loadUrl":
            "Comprueba tu conexio\u0301n.",
          "registration.check.age.error.retrieveRequest":
            "Hubo un error durante la verificacio\u0301n. Por favor, inte\u0301ntalo de nuevo.",
          "registration.check.age.underAge":
            "Verifica que eres mayor de edad para usar la funci\xf3n de b\xfasqueda en tu LINE. Tambi\xe9n puedes a\xf1adir amigos con el c\xf3digo QR.",
          "registration.code.phone.call": "Llamar",
          "registration.code.phone.guide":
            "Te llamamos para darte el c\xf3digo de verificaci\xf3n.\nPuede que el n\xfamero salga como desconocido o que, seg\xfan tu plan, se incurra en costes.\n\n",
          "registration.code.sms.resent.guide":
            "Puedes solicitar otro c\xf3digo en %1 min y %2 s.\n",
          "registration.common.next": "Siguiente",
          "registration.common.underIE8.alert":
            "Para registrarte necesitas Internet Explorer 8 o una versi\xf3n superior.\nActualiza tu versi\xf3n de Internet Explorer o usa tu dispositivo m\xf3vil para registrarte.",
          "reply.doubleclick.toast": "Doble clic para responder ",
          "reply.error.toast": "Vaya, el mensaje original ya no est\xe1.",
          "reply.goto.replied": "Volver al mensaje",
          "reply.no.original.message":
            "(Vaya, el mensaje original ya no est\xe1)",
          "reply.unknown.user": "No anda por aqu\xed",
          "report.btn.agreeandsend": "Aceptar y enviar",
          "report.btn.agreeandsend.thpdpa": "Confirmar y enviar",
          "report.confirm.groupinvitation":
            "Si denuncias a un usuario que te haya invitado a un chat grupal, se compartir\xe1 la informaci\xf3n del chat con LINE.",
          "report.desc.reason": "Ind\xedcanos qu\xe9 ocurre.",
          "report.desc.title": "Denunciar",
          "report.done": "Se envi\xf3 tu informe.",
          "report.done.suggestBlock": "Reporte enviado.\n\xbfLe bloqueas?",
          "report.done.suggestBlock.groupinvitation": "\xbfBloqueas a %1?",
          "report.note.subTitle": "Denunciar este post.\n(Creador: %1)",
          "report.popupbutton.impersonation.decline": "Omitir",
          "report.popupbutton.impersonation.proceed": "Proceder",
          "report.reason.Other": "Otras conductas",
          "report.reason.gender": "Acoso sexual",
          "report.reason.harrassment": "Hostigamiento",
          "report.reason.impersonation": "Robo de indentidad",
          "report.reason.impersonation.inquirypopup":
            "Para poder analizar el caso, necesitamos que nos proporciones informaci\xf3n detallada.",
          "report.reason.scam": "Estafa",
          "report.reason.spam": "Publicidad",
          "requireinvite.popup.button.cancel": "Continuar",
          "requireinvite.popup.button.confirmon": "Desactivar",
          "requireinvite.popup.desc.onewaywarning":
            "No se puede desactivar de nuevo.",
          "requireinvite.popup.title.onewaywarning":
            "\xbfSolicitas a los miembros aceptar invitaciones para unirse?",
          "requireinvite.toggle.desc":
            "Los nuevos miembros tienen que aceptar la invitaci\xf3n para unirse al grupo.",
          "requireinvite.toggle.title": "Unirse a trav\xe9s de invitaciones",
          "screen.desc.need.os.recordscreen":
            "LINE requiere permiso a las funciones de grabaci\xf3n de pantalla para usar capturas de pantalla y compartir la pantalla durante las videollamadas.",
          "screenshare.desc.need.os.recordscreen":
            "LINE necesita acceder a la funcio\u0301n de grabacio\u0301n de pantalla.",
          "screenshare.ongoing.error":
            "No se puede usar mientras se comparte la pantalla.",
          "screenshare.ongoing.user": "Compartiendo pantalla...",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "\xbfEliminas todas tus b\xfasquedas recientes?",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "\xbfActivas las b\xfasquedas recientes?",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "\xbfDesactivas las b\xfasquedas recientes?",
          "search.defaultView.offSaveSearchKeyword":
            "Desactivar guardado autom\xe1tico",
          "search.defaultView.onSaveSearchKeyword":
            "Activar guardado autom\xe1tico",
          "search.defaultView.recentSearchKeyword": "B\xfasquedas recientes",
          "search.defaultView.recentSearchKeywordEmpty": "No has buscado nada.",
          "search.defaultView.removeAllRecentSearchKeywords": "Eliminar todo",
          "search.defaultView.saveSearchKeywordOff":
            "Las b\xfasquedas recientes est\xe1n desactivadas.",
          "select.video.error.ratio":
            "No puedes usar este ratio en los videoperfiles.",
          "service.download.done.popup.desc": "Se complet\xf3 la descarga.",
          "service.download.inprogress.popup.desc": "Descargando\n%1...",
          "service.install.device.done.popup.desc":
            "Instalaci\xf3n completada.",
          "service.install.device.popup.desc": "Instalando\n%1...",
          "service.install.popup.desc":
            "Para usar %1 tienes que instalar %2. \xbfDescargas el archivo de instalaci\xf3n?",
          "setting.advancedSetting": "Ajustes avanzados",
          "setting.advancedSetting.proxy.apply": "Aplicar",
          "setting.advancedSetting.proxy.apply.disabled":
            "Configuraci\xf3n de proxy desactivada.",
          "setting.advancedSetting.proxy.apply.enabled":
            "Configuraci\xf3n de proxy activada.",
          "setting.advancedSetting.proxy.check": "Proxy",
          "setting.advancedSetting.proxy.complete":
            "Servidor proxy disponible.",
          "setting.advancedSetting.proxy.connect.check":
            "Probando la conexi\xf3n por el servidor proxy...",
          "setting.advancedSetting.proxy.fail":
            "No se pudo conectar con proxy.\nRevisa los ajustes del proxy e int\xe9ntalo de nuevo.",
          "setting.advancedSetting.proxy.fail.protocol":
            "Error de protocolo de proxy: %1",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "Error al verificar usuario.",
          "setting.advancedSetting.proxy.host": "Host",
          "setting.advancedSetting.proxy.port": "Puerto",
          "setting.advancedSetting.proxy.protocol": "Protocolo",
          "setting.advancedSetting.proxy.protocol.check":
            "Comprobando protocolos...",
          "setting.advancedSetting.proxy.responseTime": "(Latencia: %1 ms)",
          "setting.advancedSetting.proxy.server": "Servidor",
          "setting.advancedSetting.proxy.server.check":
            "Comprobando servidor proxy...",
          "setting.advancedSetting.proxy.title": "Proxy",
          "setting.advancedSetting.proxy.use": "Activar servidor proxy",
          "setting.advancedSetting.proxy.verification":
            "Activar verificaci\xf3n proxy",
          "setting.advancedSetting.proxy.verification.id": "Nombre de usuario",
          "setting.advancedSetting.proxy.verification.pw": "Contrase\xf1a",
          "setting.advancedSetting.sync": "Sincronizar",
          "setting.advancedSetting.sync.completed": "Se sincroniz\xf3.",
          "setting.advancedSetting.sync.desc":
            "Sincroniza las listas de amigos y chats para no perderos nada.",
          "setting.advancedSetting.sync.error.interval":
            "LINE sincronizar\xe1 tus datos cada %1 minutos.\nInt\xe9ntalo m\xe1s tarde.",
          "setting.advancedSetting.sync.error.network":
            "No se puede sincronzar por un error en la red.\nComprueba tu conexi\xf3n.",
          "setting.advancedSetting.sync.inprogress":
            "Sincronizando...\nAcabamos enseguida.",
          "setting.advancedSetting.sync.time": "d.M.yyyy h:mm %1",
          "setting.advancedSetting.sync.title": "Sincronizar datos",
          "setting.alarm.name": "Tono de notificaci\xf3n %1",
          "setting.basic.font.apply.alert":
            "Se aplicar\xe1n la fuentes cuando reinicies tu LINE.",
          "setting.basic.heading.language": "Idioma",
          "setting.basic.language.apply.alert":
            "Tenemos que reiniciar para cambiar el idioma. \xbfReinicias ahora?",
          "setting.basic.language.apply.desc":
            "Los cambios se aplicar\xe1n al reiniciar.",
          "setting.basic.language.apply.no": "M\xe1s tarde",
          "setting.basic.language.apply.yes": "Reiniciar",
          "setting.btn.select.folder": "Otro sitio",
          "setting.btn.submit": "Vale",
          "setting.call.blur": "Efecto de fondo",
          "setting.call.call.incomingnoti":
            "Mostrar notificaciones de llamadas",
          "setting.call.camera": "C\xe1mara",
          "setting.call.defaultMike": "Ajustes sistema",
          "setting.call.defaultSpeaker": "Ajustes sistema",
          "setting.call.desc.deviceloading": "Cargando dispositivos...",
          "setting.call.ducking": "Bajar el volumen de otras apps",
          "setting.call.grouphd": "Videollamada grupal HD",
          "setting.call.grouphd.desc":
            "Videollamadas grupales con la mejor calidad de imagen con un uso mayor de la CPU y RAM.",
          "setting.call.grouphd.desc.forwin":
            "Videollamadas grupales con la mejor calidad de imagen con los c\xf3dec de v\xeddeo de tu dispositivo, a costa de un uso mayor de la CPU y RAM.",
          "setting.call.handsfreebtinfo.desc":
            "Si tu dispositivo Bluetooth es reconocido como micr\xf3fono y altavoz por separado, config\xfaralo en cada una de la opciones.",
          "setting.call.label.duckingGuide":
            "Reduce el volumen del sonido de otras aplicaciones. Al poner la barra en 100 %, se silenciar\xe1n otras apps.",
          "setting.call.mic.desc.noisecancelinglight":
            "Elimina los ruidos de los ventiladores de pc y m\xfasica de fondo.",
          "setting.call.mic.desc.noisecancelingstrong":
            "Elimina los ruidos de ladridos y de teclados de pc.",
          "setting.call.mic.echocancelling": "Cancelaci\xf3n eco",
          "setting.call.mic.echocancelling.desc":
            "Elimina el eco producido por otros dispositivos. Desactiva esta funci\xf3n al compartir sonidos de tu ordenador.",
          "setting.call.mic.echocancelling.mouseovertooltip":
            "Selecciona Optimizado para un nivel recomendado de cancelaci\xf3n. La opci\xf3n de Maximizado eliminar\xe1 de forma m\xe1s efectiva el eco, pero tu audio se puede ver cortado cuando otros hablan al mismo tiempo que t\xfa.",
          "setting.call.mic.echocancelling.option1": "Optimizado",
          "setting.call.mic.echocancelling.option2": "Maximizado",
          "setting.call.mic.menu.noisecancelinglight": "Suave",
          "setting.call.mic.menu.noisecancelingstrong": "Fuerte",
          "setting.call.mic.noisecanceling": "Cancelaci\xf3n de ruido",
          "setting.call.mic.noisecanceling.checkbox":
            "Activar cancelaci\xf3n de ruido",
          "setting.call.mic.noisecanceling.desc":
            "Elimina el ruido de fondo cuando llamas, as\xed te oir\xe1n mejor.",
          "setting.call.mike": "Micr\xf3fono",
          "setting.call.mike.autoVolume": "Ajuste autom\xe1tico ",
          "setting.call.msg.noCamera":
            "\xbfY la c\xe1mara?\n\xbfLa tienes conectada?",
          "setting.call.msg.noMike":
            "\xbfY tu micr\xf3fono?\n\xbfEst\xe1 conectado?",
          "setting.call.msg.noSpeaker":
            "\xbfY los altavoces?\n\xbfEst\xe1n conectados?",
          "setting.call.noDevice": "No hay dispositivos",
          "setting.call.speaker": "Altavoz",
          "setting.call.videocall": "V\xeddeo",
          "setting.call.videocall.HWvideocodec": "Usar c\xf3decs video del PC",
          "setting.call.videocall.HWvideocodec.desc":
            "Usa los c\xf3decs de video del PC para evitar un excesivo uso de la bater\xeda, as\xed como sobrecalentamientos. Desactiva esta opci\xf3n si tu PC no es compatible con esta opci\xf3n.",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "Se aplicar\xe1 en la siguiente llamada. Para aplicarlo en esta, reinicia la llamada.",
          "setting.call.videocall.dynamicspeaking": "Mostrar hablante",
          "setting.call.videocall.dynamicspeaking.desc":
            "Muestra autom\xe1ticamente un enfoque de los que est\xe9n hablando en un recuadro m\xe1s grande o muestra su vista previa del v\xeddeo en la primera p\xe1gina de la vista galer\xeda.",
          "setting.call.videocall.gridviewmaxdisplay":
            "Vista galer\xeda 49 participantes ",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "Muestra a la vez hasta 49 miniaturas de los participantes en vista galer\xeda.",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[M\xe1ximo 25 vistas previas en este dispositivo. Tienes m\xe1s info en <a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">Ayuda</a>.]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "Silencia notificaciones cuando compartir pantalla est\xe1 en pantalla completa",
          "setting.call.videocall.showpreview":
            "Vista previa c\xe1mara antes de unirse a videollamada",
          "setting.call.voicesettings": "Voz",
          "setting.call.youtube.clipboard":
            "Pega enlaces del portapapeles de los v\xeddeos compartidos de YouTube",
          "setting.call.youtube.clipboard.checkbox":
            "Permitir acceso al portapapeles",
          "setting.call.youtube.clipboard.desc":
            "Al seleccionar un v\xeddeo de YouTube para compartir, se pegar\xe1 autom\xe1ticamente el enlace del v\xeddeo que copiaste del navegador.",
          "setting.chats.deletedata.chatHisotry.btn.all":
            "Todos los dispositivos",
          "setting.chats.deletedata.chatHisotry.btn.onlypc":
            "Solo en este dispositivo",
          "setting.chats.deletedata.chatHisotry.desc":
            "\xbfD\xf3nde eliminas los historiales de chat? Recuerda que esta acci\xf3n es irreversible.",
          "setting.chats.deletedata.chatHisotry.title": "Historial de chat ",
          "setting.default.font.label": "Predeterminada",
          "setting.desc.removeLocalChat":
            "Se eliminar\xe1 el historial de chat.",
          "setting.hiddenchat.empty": "No tienes chats ocultos.",
          "setting.hiddenchat.title": "Chats ocultos",
          "setting.keep.alert.deleteAll":
            "\xbfEliminas todo de tu Keep? No afectar\xe1 a Keep Memo.",
          "setting.keep.btn.deleteAll": "Eliminar \xedtems guardados",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "Solo incluye el almacenamiento que est\xe1s usando en Keep, pero no en Keep Memo.",
          "setting.keep.desc.photos": "Fotos",
          "setting.keep.desc.text": "Texto",
          "setting.keep.desc.videos": "V\xeddeos",
          "setting.keyword.add.error.character":
            '<![CDATA[No uses espacios o los s\xedmbolos ">" y "<" en las palabras clave.]]>',
          "setting.keyword.add.error.characterDup": "Ya la has puesto.",
          "setting.keyword.add.error.characterSize":
            "\xa1Muy corta! Pon m\xe1s de 2 caracteres.",
          "setting.keyword.added": "A\xf1adir palabras clave",
          "setting.keyword.btn.add": "A\xf1adir",
          "setting.keyword.desc":
            "Te avisamos de los mensajes sin leer que incluyan estas palabras clave.",
          "setting.keyword.title": "Notificaci\xf3n de palabras clave",
          "setting.label.basic.alarmMode": "\xbfC\xf3mo las quieres?",
          "setting.label.basic.alarmMode.showAlarm": "Ventanas emergentes",
          "setting.label.basic.alarmMode.soundAlarm": "Con sonido",
          "setting.label.basic.alarmRule": "\xbfQu\xe9 notificaciones quieres?",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "Env\xeda notificaciones de invitaciones a chats y grupos.",
          "setting.label.basic.alarmRule.mention":
            "Notificarme cuando me mencionen",
          "setting.label.basic.alarmRule.newChatAlarm": "Mensajes nuevos.",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "Desactivar alertas en pantalla completa",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "Apagar las notificaciones del m\xf3vil al usar LINE en el ordenador.\n(Se reanudar\xe1n si se bloquea LINE o tras 3 minutos de inactividad).",
          "setting.label.basic.alarmRule.note": "Notificar Notas",
          "setting.label.basic.alarmRule.videocal":
            "Desactivar las notificaciones sonoras durante las videollamadas y llamadas de voz",
          "setting.label.basic.alarmSound": "Tono de notificaci\xf3n",
          "setting.label.basic.alarmtype": "Estilo notificaciones",
          "setting.label.basic.alarmtype.basic": "Predeterminado",
          "setting.label.basic.font": "Fuente de los chats",
          "setting.label.basic.font.desc": "Solo se aplica en los chats.",
          "setting.label.basic.font.extraLarge": "Muy grande",
          "setting.label.basic.font.extraLarge.size": "16",
          "setting.label.basic.font.large": "Grande",
          "setting.label.basic.font.large.size": "14",
          "setting.label.basic.font.name": "Fuente",
          "setting.label.basic.font.normal": "Normal",
          "setting.label.basic.font.normal.size": "12",
          "setting.label.basic.font.normal.size.mac": "13",
          "setting.label.basic.font.size": "Tama\xf1o",
          "setting.label.basic.font.small": "Peque\xf1o",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key": "Enviar con",
          "setting.label.private.profile.propertyName.id":
            "(No se mostrar\xe1 tu ID.)",
          "setting.label.title": "Configuraci\xf3n",
          "setting.lockscreen": "Modo bloqueo",
          "setting.lockscreen.time.15minutes": "15 minutos",
          "setting.lockscreen.time.1hour": "1 hora",
          "setting.lockscreen.time.30minutes": "30 minutos",
          "setting.lockscreen.time.3hours": "3 horas",
          "setting.lockscreen.time.3minutes": "3 minutos",
          "setting.lockscreen.time.5minutes": "5 minutos",
          "setting.lockscreen.turn.on":
            "Bloquear cuando no haya actividad por m\xe1s de",
          "setting.maintab.alarm": "Notificaciones",
          "setting.maintab.basicSetting": "B\xe1sica",
          "setting.maintab.call": "Llamadas",
          "setting.maintab.chat": "Chats",
          "setting.maintab.contact": "Amigos",
          "setting.maintab.privacy": "Privacidad",
          "setting.maintab.profile": "Perfil",
          "setting.maintab.talk": "Chats y llamadas de voz",
          "setting.messengerView.allinone.desc": "Mostrar a la derecha.",
          "setting.messengerView.allinone.label": "Unificado",
          "setting.messengerView.apply.alert":
            "Al cambiar de dise\xf1o para los chats se cerrar\xe1n todas las ventanas abiertas de los chasts.\n\xbfContin\xfaas?\n",
          "setting.messengerView.label": "Cambio de vista",
          "setting.messengerView.seperate.desc":
            "Los chats se muestran en ventanas separadas.",
          "setting.messengerView.seperate.label": "Ventanas separadas",
          "setting.popup.private.emptyName": "Escribe al menos 1 car\xe1cter.",
          "setting.popup.private.tooLongName": "No m\xe1s de 20 caracteres.",
          "setting.shorcut.chatfolder.move": "Mover carpeta",
          "setting.shorcut.desc.chatfolder": "Categor\xedas chats",
          "setting.shorcut.list.previous.chat": "Chat anterior",
          "setting.shorcut.list.search": "Buscar",
          "setting.shortcut.array.window": "Ordenar chats",
          "setting.shortcut.callnlive.audio": "Cambiar micr\xf3fono",
          "setting.shortcut.callnlive.video": "Cambiar c\xe1mara",
          "setting.shortcut.cancel.array.window": "Quitar atajo chat",
          "setting.shortcut.capture.copy": "Copiar",
          "setting.shortcut.capture.draw.straight":
            "Dibujar l\xedneas rectas, cuadrados, c\xedrculos",
          "setting.shortcut.capture.fix": "Reposicionar la captura de pantalla",
          "setting.shortcut.capture.redo": "Rehacer",
          "setting.shortcut.capture.save": "Guardar",
          "setting.shortcut.capture.undo": "Deshacer",
          "setting.shortcut.chat.newline": "Nueva l\xednea",
          "setting.shortcut.chat.open.keep": "Abrir Keep",
          "setting.shortcut.chat.screen.capture": "Capturar pantalla",
          "setting.shortcut.close.window": "Cerrar ventana",
          "setting.shortcut.lable": "Atajos teclado",
          "setting.shortcut.list.basic": "B\xe1sico",
          "setting.shortcut.list.callnlive": "Llamadas",
          "setting.shortcut.list.chat": "Chat",
          "setting.shortcut.list.friend.chat": "Amigos, lista chat",
          "setting.shortcut.list.viewer": "Visor multimedia",
          "setting.shortcut.markdown.bold": "Negrita",
          "setting.shortcut.markdown.codeblock": "Bloque de c\xf3digo",
          "setting.shortcut.markdown.italic": "Cursiva",
          "setting.shortcut.markdown.strikethrough": "Tachado",
          "setting.shortcut.markdown.title": "Formato texto",
          "setting.shortcut.markdown.wordblock": "C\xf3digos",
          "setting.shortcut.min.window": "Minimizar ventana",
          "setting.shortcut.move.add.friend": "Ir a Amigos",
          "setting.shortcut.move.bottom": "Ir al final del chat",
          "setting.shortcut.move.chat.list": "Ir a chats",
          "setting.shortcut.move.friend.list": "Ir a Amigos",
          "setting.shortcut.move.top": "Ir arriba del chat",
          "setting.shortcut.on.lock": "Activar modo bloqueo",
          "setting.shortcut.open.keep": "Abrir Keep",
          "setting.shortcut.open.note": "Abrir notas",
          "setting.shortcut.open.sticker": "Abrir ventana sticker",
          "setting.shortcut.open.tip": "Mostrar consejos de accesos directos",
          "setting.shortcut.open.window": "Abrir en una ventana nueva",
          "setting.shortcut.photo.copy": "Copiar archivo",
          "setting.shortcut.photo.save": "Guardar archivo",
          "setting.shortcut.screen.chapture": "Capturar pantalla",
          "setting.shortcut.search": "Buscar",
          "setting.shortcut.send.file": "Enviar archivo",
          "setting.shortcut.timeline.comment": "Comentar",
          "setting.shortcut.timeline.like": "Me gusta",
          "setting.shortcut.timeline.like.pick": "Elegir expresi\xf3n",
          "setting.shortcut.tip": "Tus atajos para LINE.",
          "setting.shortcut.video.jump": "Mover 5 segundos los v\xeddeos",
          "setting.shortcut.videongif.stop": "Reproducir/Pausar",
          "setting.shortcut.viewer.fullscreen": "Pantalla completa",
          "setting.shortcut.volume.control": "Volumen v\xeddeos",
          "setting.shortcut.zoominout": "Alargar/Reducir imagen",
          "setting.tab.download.folder": "Tus descargas van aqu\xed",
          "setting.tab.file.trans": "Archivo",
          "setting.tab.login": "Iniciar sesi\xf3n",
          "setting.tab.url.preview": "Vista previa enlaces",
          "setting.tab.voip": "Llamadas",
          "setting.talk.animation.gif": "Animaciones GIF",
          "setting.talk.animation.gif.play":
            "Reproducir autom\xe1ticamente GIF en los chats.",
          "setting.talk.backgroundSetting.apply":
            "Se usar\xe1 en todos los chats.\n\xbfContin\xfaas?",
          "setting.talk.backgroundSetting.apply.allChats":
            "Usar en todos los chats",
          "setting.talk.backgroundSetting.detail":
            "Elige un dise\xf1o para usar en los chats (menos en los de OpenChat).",
          "setting.talk.backgroundSetting.selected": "Elegir fondo",
          "setting.talk.backgroundSetting.title": "Fondo del chat",
          "setting.talk.heading.talk": "Chats",
          "setting.talk.photo.resolution.detail":
            "Las fotos de m\xe1s de 20 MB no se pueden mandar con la resoluci\xf3n original.",
          "setting.talk.photo.resolution.option.default": "Preestablecida",
          "setting.talk.photo.resolution.option.original": "Original  ",
          "setting.talk.photo.resolution.option.standard": "Normal",
          "setting.talk.photo.resolution.title": "Resoluci\xf3n de las fotos",
          "setting.talk.theme.check.seasonal": "Efecto nieve",
          "setting.talk.theme.desc.seasonal": "Temas",
          "setting.theme.desc.darkmode.limitation":
            "Algunas pantallas no est\xe1n disponibles en el modo oscuro.",
          "setting.theme.mode.dark": "Modo oscuro",
          "setting.theme.mode.light": "Modo claro",
          "setting.theme.systemSetting": "Usar ajustes sistema",
          "setting.theme.title": "Mostrar modo",
          "setting.url.preview.desc":
            "Ver\xe1s informaci\xf3n y miniaturas de los enlaces enviados por chats.",
          "setting.window.scaleRatio": "Tama\xf1o de LINE",
          "setting.window.scaleRatio.default": "Predeterminado",
          "settingAlarm.label.duration": "Duraci\xf3n",
          "settingAlarm.label.lucid": "Transparente",
          "settingAlarm.label.opacity": "Transparencia",
          "settingAlarm.label.opaque": "Opaco",
          "settingAlarm.label.setAlarmWindow": "Alertas",
          "settingAlarm.label.toastContent": "M\xe1s",
          "settingAlarm.label.toastPreview": "Vista previa",
          "settingAlarm.label.unitSecond": "s",
          "settingLogin.alert.autoLogin":
            "Inicio de sesi\xf3n autom\xe1tico est\xe1 activado. Puedes desactivarlo en cualquier momento desde configuraci\xf3n.",
          "settingLogin.check.autoLogin":
            "Iniciar sesi\xf3n autom\xe1ticamente",
          "settingLogin.check.autoRunWin": "Abrir LINE con Windows",
          "settingPrivacy.btn.ublockBuddy": "Desbloquear",
          "settingPrivacy.call.blur.desc":
            "Ajusta la intensidad del efecto de desenfoque en las videollamadas.",
          "settingPrivacy.cleardata.cache.desc":
            "Solo se eliminara\u0301n los datos cache\u0301. Tus preciadas fotos, videos, mensajes de voz o archivos no se tocara\u0301n.",
          "settingPrivacy.cleardata.cache.error":
            "Algunos datos no se eliminaron. Inte\u0301ntalo ma\u0301s tarde.",
          "settingPrivacy.cleardata.cache.popup":
            "\xbfEliminas los datos cache\u0301?",
          "settingPrivacy.label.allowCallAlarm.desc":
            "Tambi\xe9n se aplicar\xe1 en tu aplicaci\xf3n LINE.",
          "settingPrivacy.label.allowCallAlarmPC": "Recibir llamadas",
          "settingPrivacy.label.blockAndDelete.desc":
            "\xbfQuitas a esta cuenta de los bloqueados? Recuerda que la cuenta seguir\xe1 bloqueada. Para agregarla de nuevo a tus Amigos busca su ID o n\xfamero de tel\xe9fono.",
          "settingPrivacy.label.blockBuddyList": "Cuentas bloqueadas",
          "settingPrivacy.label.blockBuddyListEmpty":
            "No has bloqueado a nadie.",
          "settingPrivacy.label.blocksquarememberlist":
            "Bloqueados en OpenChat",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "No has bloqueado a nadie.",
          "settingPrivacy.label.buddySearchAllow": "Me pueden buscar",
          "settingPrivacy.label.clearRecords": "Borrar chats",
          "settingPrivacy.label.cleardata": "Eliminar datos",
          "settingPrivacy.label.cleardata.cache": "Cach\xe9",
          "settingPrivacy.label.filterMessages":
            "Rechaza los mensajes que no sean de tus Amigos.",
          "settingPrivacy.label.filterMessages.title":
            "Recibir mensajes solo de tu lista de Amigos",
          "settingPrivacy.label.hiddenBuddyList": "Cuentas ocultas",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "No has ocultado a nadie.",
          "settingPrivacy.label.hideAndDelete.desc":
            "\xbfQuitas a esta cuenta de los ocultos? Recuerda que la cuenta seguir\xe1 envi\xe1ndote mensajes. Para agregarla de nuevo a tus Amigos busca su ID o n\xfamero de tel\xe9fono.",
          "settingPrivacy.label.idSearchAllowYes": "ID p\xfablico",
          "settingPrivacy.label.title": "Privacidad",
          "settingProfile.error.invalidData": "Va a ser que no.",
          "settingProfile.error.network":
            "No se pudo procesar tu solicitud debido a un error temporal.\nInt\xe9ntalo de nuevo.\n",
          "settingProfile.error.server":
            "No se pudo procesar por un error temporal.\nInt\xe9ntalo de nuevo.",
          "settingProfile.label.emailEmpty": "Pendiente",
          "settingProfile.label.modifyprofile": "Editar",
          "settingProfile.label.myInfo": "Mis sitios",
          "settingProfile.label.nickName": "Nombre",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "El correo que quieres registrar y tu contrase\xf1a son muy parecidos.\nRegistra otra direcci\xf3n de correo electr\xf3nico.",
          "settingProfile.label.registerAcoount.mailAddress": "Correo",
          "settingProfile.label.statusEmpty": "Pendiente",
          "settingProfile.label.statusMessage": "Estado",
          "settingProfile.label.userID": "ID de usuario",
          "settingProfile.link.registerAcoount.mailAddress":
            "Registrar correo >",
          "settingProfile.statusMessage.edit": "\xbfC\xf3mo va?",
          "settingProfile.statusMessage.edit.failed":
            "No se pudo guardar tu estado.",
          "settings.basic.number.edit": "Cambiar n\xfamero de m\xf3vil",
          "settings.delete.account": "Eliminar mi cuenta",
          "settings.delete.account.btn": "Eliminar mi cuenta",
          "settings.deleteAccount.confirm.desc":
            "Si eliminas tu cuenta de LINE, tambi\xe9n se eliminar\xe1 tu lista de Amigos y el historial de chat. \xbfEliminas tu cuenta de LINE?",
          "settings.deleteAccount.confirm.title":
            "Entonces, \xbfeliminas tu cuenta?",
          "settings.deleteAccount.success":
            "Se cerr\xf3 sesi\xf3n porque tu cuenta de LINE se elimin\xf3.",
          "settings.label.tooltip": "Configuraci\xf3n",
          "settings.privacy.publicUserID": "Permitir",
          "settings.privacy.publicUserID.description":
            "Te pueden a\xf1adir como Amigo al buscar tu ID.",
          "settings.privacy.rejectStrangeMessages": "Filtrar mensajes",
          "settings.privacy.rejectStrangeMessages.description":
            "Solo recibes mensajes de tus Amigos.",
          "settings.privacy.title": "Privacidad",
          "settings.profile.myInfo.birthday": "Mi cumplea\xf1os",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "Si muestras la fecha de tu cumple, te mandaremos una animaci\xf3n especial que solo t\xfa puedes ver cuando cumplas a\xf1os. Tus Amigos podr\xe1n ver el d\xeda de tu cumple en tu perfil, las pesta\xf1as de Inicio y Chat, as\xed como en otros sitios.",
          "settings.profile.myInfo.birthday.showMonthday":
            "Mostrar mi cumplea\xf1os",
          "showAllContents.File": "Archivos",
          "showAllContents.Iink": "Enlaces",
          "showAllContents.ImageVideo": "Fotos y v\xeddeos",
          "showAllContents.file.noFile": "No se enviaron archivos aqu\xed.",
          "showAllContents.moveMessage": "Ver en chat",
          "showAllContents.moveMessage.lastMessage": "Ver mensajes nuevos",
          "showAllContents.uploadMember": "Subido por %1 ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "Borradas.\n\n(Otros administradores ya se encargaron de algunas solicitudes.)",
          "square.abuse.textinput":
            "Tu cuenta se ha restringido por cometer acciones abusivas.",
          "square.access.changephoto":
            "Cambiar tu foto de perfil para este OpenChat",
          "square.access.chat": "Crear chat",
          "square.access.chat.image": "Cambiar la foto de perfil de este chat",
          "square.access.chatroomtohome": "Ir a inicio de Square",
          "square.access.cover.image": "Cambiar foto portada de este OpenChat",
          "square.access.create": "Crear OpenChat",
          "square.access.hide": "Ocultar la descripci\xf3n del OpenChat",
          "square.access.invite": "Invitar amigos",
          "square.access.join": "Unirse al OpenChat",
          "square.access.joinrequest": "Unirse al OpenChat",
          "square.access.postoption": "M\xe1s opciones de notas",
          "square.access.profile.image":
            "Cambiar tu foto de perfil para este OpenChat",
          "square.access.profile.nickname":
            "Cambiar tu alias para este OpenChat",
          "square.access.qrcode": "Co\u0301digo QR de OpenChat",
          "square.access.search": "Buscar OpenChats",
          "square.access.show": "Mostrar la descripci\xf3n del OpenChat",
          "square.access.square": "OpenChat",
          "square.access.squareoption": "M\xe1s opciones de OpenChat",
          "square.access.timelinetosquare": "Ir a OpenChat",
          "square.access.write": "Escribir nota",
          "square.ageconfirmation.popupbutton.cancel": "Cancelar",
          "square.ageconfirmation.popupbutton.yes":
            "Tengo m\xe1s de 18 a\xf1os.",
          "square.ageconfirmation.popupdesc.atleast18tosetrestriction":
            "Debes tener m\xe1s de 18 a\xf1os para configurar un l\xedmite de edad. Como admin de este OpenChat, aseg\xfarate de que las conversaciones de adultos se limitan al tabaco y al alcohol. Recuerda que esta opci\xf3n no se puede cambiar una vez configurada.",
          "square.ageconfirmation.popuptitle.ageconfirmationrequired":
            "Se requiere verificaci\xf3n edad",
          "square.ageconfirmationrequired.popupbutton.cancel": "Cancelar",
          "square.ageconfirmationrequired.popupbutton.yes": "Soy mayor de edad",
          "square.ageconfirmationrequired.popupdesc.onlyusersoverlegalageallowedtojoin":
            "OpenChat en directo solo para mayores de edad. Para ofrecer un entorno seguro, por favor acepta los t\xe9rminos de uso y las directrices de OpenChat.",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "Solo mayores de edad",
          "square.announcement.donotshowagain": "No mostrar m\xe1s",
          "square.announcement.donotshowagain.mouseover": "Ya no\nmostrar",
          "square.announcement.error":
            "Vaya, no encontramos el mensaje para este anunciante.",
          "square.announcement.message.annouce": "Recordar",
          "square.announcement.minimize": "Minimizar",
          "square.announcement.unannounce": "No recordar",
          "square.answer.guide":
            "Responde a la pregunta para unirte a este chat.",
          "square.answer.send.done": "Solicitud enviada.",
          "square.answer.title": "Tu respuesta",
          "square.banreportuser.popupbutton.cancel": "Cancelar",
          "square.banuser.popupdesc.banafterleaving":
            "Este usuario dej\xf3 el OpenChat. Puedes banearle y evitar que se una de nuevo o reportar su cuenta.",
          "square.chat.button.threadmessages":
            "<![CDATA[<b><font color='%1'>%2+</font></b> mensajes]]>",
          "square.chat.button.threadmessages999":
            "<![CDATA[Ver <b><font color='%1'>%2+</font></b> mensajes]]>",
          "square.chat.button.threadmessagesfew": "Ver mensajes en el hilo.",
          "square.chat.button.threadmessagesmany": "%1+ mensajes",
          "square.chat.desc.sent": "Se envi\xf3.",
          "square.chat.err.file.exceed.capacity": "Uf, demasiado grande.",
          "square.chat.menu.aboutchatroom": "Administrar OpenChat",
          "square.chat.more.leaveroom": "Dejar chat",
          "square.chat.placeholder.qna": "Responder",
          "square.chat.reply.notification": "Respuesta: %1",
          "square.chat.reply.notification2": "Respuesta de %1: %2",
          "square.chat.setting": "M\xe1s ajustes",
          "square.chat.settings.bg.apply.square.image":
            "Cambiar foto de portada de este OpenChat",
          "square.chat.settings.export.title": "Chat en %1",
          "square.chat.system.msg.invite.a.b": "%1 invit\xf3 a %2.",
          "square.chat.system.msg.join.chat": "%1 se uni\xf3 al grupo.",
          "square.chat.system.msg.leave.chat": "%1 sali\xf3 del chat.",
          "square.chat.text.input.nickname": "Chateas como %1",
          "square.chatcontent.button.seemoreqna": "M\xe1s",
          "square.chatcontent.tab.qna": "Mensajes Q&A",
          "square.chatlist.alert.deletedchat":
            "Este chat no existe. Prueba con otro.",
          "square.chatlist.alert.max": "Demasiada gente.",
          "square.chatlist.join.guide":
            "Elige un chat. Puedes ver la lista de subchats de este OpenChat meti\xe9ndote en un chat y pulsando Chats en el men\xfa.",
          "square.chatlist.joined.title": "Chats en los que est\xe1s: ",
          "square.chatlist.joined.zero":
            "A\xfan no est\xe1s en ning\xfan chat de Square.",
          "square.chatlist.max.member.desc": "Chat lleno.",
          "square.chatlist.public.join.alert":
            "El chat tambi\xe9n saldr\xe1 en tu lista de chats.\n",
          "square.chatlist.public.join.btn": "\xa1Me uno! ",
          "square.chatlist.public.max.btn": "Lleno",
          "square.chatlist.public.no.msg": "No hay mensajes.",
          "square.chatlist.public.title": "Chats disponibles: ",
          "square.chatlist.public.zero": "Parece que no hay chats.",
          "square.chatlist.reply.alert": "Te respondieron",
          "square.chatlist.square.button": "OpenChat",
          "square.chatlist.title": "Chats",
          "square.chatmenu.button.qna": "Mensajes Q&A",
          "square.chatmenu.button.thread": "Hilo",
          "square.chatmenu.button.yourthreads": "Tus hilos",
          "square.chatroom.alert.open.url": "Enlace sospechoso.\n\xbfLo abres?",
          "square.chatroom.block.inputarea.deletedchat":
            "Se elimin\xf3 el chat.",
          "square.chatroom.block.inputarea.deletedgroup": "OpenChat eliminado",
          "square.chatroom.block.inputarea.kickoutgroup":
            "Te quitaron del OpenChat.",
          "square.chatroom.chatlilst.guide.des":
            "Puedes ver y unirte a este OpenChat.",
          "square.chatroom.chatlist.title": "Chats",
          "square.chatroom.confirm.desc.kickout":
            "Se le banear\xe1 de este OpenChat.",
          "square.chatroom.create.image": "Elegir foto",
          "square.chatroom.default.announce.content":
            'Te est\xe1bamos esperando en "%1".',
          "square.chatroom.deletefromall.alert":
            "Se eliminar\xe1 este mensaje.",
          "square.chatroom.desc.botadded": "%1 a\xf1adi\xf3 a %2 al chat.",
          "square.chatroom.desc.botremoved": "%1 quit\xf3 a %2 del chat.",
          "square.chatroom.error.alert.deletedchatroom":
            "Este chat no existe. Prueba con otro.",
          "square.chatroom.input.deletedgroup": "OpenChat eliminado",
          "square.chatroom.input.join.btn": 'Unirse a "%1"',
          "square.chatroom.invite.layer.des":
            "Invita a tu gente y comparte este espacio OpenChat.",
          "square.chatroom.layer.upperloading": "Cargando historial...",
          "square.chatroom.longpress.deleteformall": "Borrar",
          "square.chatroom.longpress.deletefromall.title": "Eliminar del chat",
          "square.chatroom.longpress.kickout": "Quitar",
          "square.chatroom.longpress.squarepost": "Nota",
          "square.chatroom.memberlist.guest": "Espectadores",
          "square.chatroom.setting.deletechat": "Eliminar chat secundario",
          "square.chatroom.setting.deletechat.description":
            "Si lo eliminas, el chat secundario dejara\u0301 de estar disponible para todos los miembros.",
          "square.chatroom.setting.report": "Denunciar",
          "square.chatroom.settings.change.title":
            "\xbfQu\xe9 nombre pones al chat?",
          "square.chatroom.settings.leave.no.message": "Dejar discretamente",
          "square.chatroom.system.alert.notfriend":
            '%2, del OpenChat "%1", no est\xe1 en tus Amigos.\nCuidado con sus mensajes.',
          "square.chatroom.system.message.change.bg":
            "Un administrador cambi\xf3 la foto del OpenChat.",
          "square.chatroom.system.message.change.maxparticipants":
            "%1 puso como m\xe1ximo %2 miembros.",
          "square.chatroom.system.message.change.name":
            "%1 cambi\xf3 el nombre del chat a \u201c%2\u201d.",
          "square.chatroom.system.message.change.picture":
            "%1 puso otra foto del chat.",
          "square.chatroom.system.message.kickout":
            "Banearon a %1 del OpenChat.",
          "square.chatroom.system.msg.alert.private":
            '\xa1Ojo! Est\xe1s en un chat privado para el Square "%1".',
          "square.chatroom.system.msg.alert.public":
            'Esta\u0301s en el OpenChat "%1".',
          "square.chatroom.system.msg.guide.loading":
            "Cada vez que desplaces se cargan los mensajes anteriores.",
          "square.chatroom.system.msg.guide.report":
            "Haz clic derecho en un mensaje, foto, v\xeddeo o enlace para reportarlo.",
          "square.chatroom.system.msg.tooltip.private":
            '\xa1Ojo! Est\xe1s en un chat privado para el Square "%1".',
          "square.chatroom.system.msg.tooltip.public":
            'Esta\u0301s en el OpenChat "%1".',
          "square.chatroom.systemmsg.deletedchat": "Eliminaron este chat. ",
          "square.chatroom.systemmsg.deletedgroup":
            "Se elimin\xf3 este OpenChat.",
          "square.chatroom.systemmsg.emptycommunity": "Chat no disponible",
          "square.chatroom.systemmsg.emptyroom": "Chat no disponible",
          "square.chatroom.systemmsg.kickout":
            "El administrador te expuls\xf3 de este chat. ",
          "square.chatroom.vmenu.chatlist": "Chats",
          "square.chatroom.vmenu.groupchatlist": "Inicio Square",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "Avisa cu\xe1ndo\ndejas el chat.",
          "square.coadmin.alert": "\xbfLe pones como subadministrador?",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\uc5b5",
          "square.common.desc.usercount1k": "%1K",
          "square.common.desc.usercount1m": "%1M",
          "square.common.desc.usercount1man": "%1\ub9cc",
          "square.common.share": "Compartir",
          "square.community.home.alert.invited.chat":
            "\xbfAceptas la invitaci\xf3n y te unes?",
          "square.community.home.chat.button.start": "Empezar",
          "square.community.home.invite.button": "Invitar",
          "square.community.home.msg.chat.onlymember":
            "Tienes que unirte primero,\n\xbfte animas?",
          "square.community.home.msg.onlymember":
            "Podr\xe1s participar una vez que\nhaya sido aceptada tu solicitud.",
          "square.content.home.shared": "Comparti\xf3 una Nota.",
          "square.cover.chat.btn": "Chat",
          "square.cover.investmentscams":
            "Cuidado con los fraudes que usan LINE.",
          "square.cover.post.btn": "Notas",
          "square.create.btn": "",
          "square.create.category": "Categor\xeda ",
          "square.create.category.desc":
            "Si eliges una categori\u0301a, el OpenChat aparecera\u0301 en las recomendaciones.",
          "square.create.default.category": "Nada",
          "square.create.description": "Descripci\xf3n",
          "square.create.description.desc": "Describe el OpenChat",
          "square.create.description.input": "Descripci\xf3n",
          "square.create.description2":
            "Introduce palabras clave usando #hashtags",
          "square.create.error.no.name": "Pon un nombre al OpenChat.",
          "square.create.error.popup.input.description.info":
            "Pon una descripci\xf3n.",
          "square.create.error.popup.input.info": "Te faltan algunos datos.",
          "square.create.groupname": "Nombre OpenChat",
          "square.create.image": "Elegir foto",
          "square.create.over.text.num.alert": "Uf, muy largo. ",
          "square.create.search": "B\xfasqueda abierta",
          "square.create.search.desc":
            "Este OpenChat se puede buscar por su nombre y descripcio\u0301n.",
          "square.create.setting.desc": "Podra\u0301n buscar tu OpenChat.",
          "square.create.sgroup.approval.desc":
            "El administrador tramita las solicitudes para unirse al OpenChat.",
          "square.create.sgroup.closedtype": "Privado",
          "square.create.sgroup.opentype": "Abierto",
          "square.create.subchat.guide.des":
            "Los ajustes de privacidad del chat y los permisos de administrador se aplicara\u0301n a todos los chats secundarios.",
          "square.create.subchat.title": "Crear chat secundario",
          "square.create.title": "Crear OpenChat",
          "square.create.welcome": "Primer mensaje",
          "square.createchat.error.no.auth.public":
            "El administrador deshabilito\u0301 la opcio\u0301n para crear chats secundarios.",
          "square.createchat.inputtitle": "Ponle un nombre",
          "square.createchat.title": "Crear chat",
          "square.createchat.type.maximum.option": "M\xe1x. de participantes",
          "square.createchat.type.maximum.option.desc":
            "Establece el n\xfamero m\xe1ximo de miembros que se pueden unir al chat.",
          "square.createchat.type.private": "Privado ",
          "square.createchat.type.private.desc":
            "Necesitas una invitaci\xf3n para unirte.",
          "square.createchat.type.public": "P\xfablico a todos",
          "square.createchat.type.public.desc": "Cualquiera puede unirse.",
          "square.createchat.type.public.option": "Abierto",
          "square.createopenchat.button.setagerestriction": "L\xedmite de edad",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "Solo se pueden unir mayores de edad.",
          "square.createopenchat.desc.search":
            "Algunos de los mensajes de los OpenChat se pueden buscar y hacer vistas previas. Puedes modificar estos ajustes despu\xe9s de crear un Openchat.",
          "square.createopenchat.placeholder.enterdescription":
            "De qu\xe9 va este OpenChat.",
          "square.createsubchat.toggle.notifyinopenchat":
            "Notificar OpenChat del nuevo subchat",
          "square.default.name.title": "Nombre OpenChat",
          "square.error.cannot.forward.contact":
            "No puedes enviar contactos en los chats de OpenChat.",
          "square.error.fail.upload.profile.image":
            "No se pudo actualizar el perfil. ",
          "square.error.not.normal":
            "Se produjo un error.\nInt\xe9ntalo m\xe1s tarde.",
          "square.error.noti.kickout": "Te banearon del OpenChat.",
          "square.error.popup.cannot.invite":
            "El admin de este Square deshabilit\xf3 esta funci\xf3n.",
          "square.error.popup.cannot.join":
            "Vaya, no te puedes unir a este OpenChat. Prueba luego.",
          "square.error.popup.deletedgroup": "Este OpenChat ya no existe.",
          "square.error.popup.network":
            "No se pudo establecer la conexi\xf3n.\n\xbfTienes bien la conexi\xf3n?",
          "square.error.popup.noauth":
            "No tienes permiso para acceder.\nSe te redirigira\u0301 a los ajustes de OpenChat.",
          "square.error.popup.noauth.alert": "No tienes permiso para acceder. ",
          "square.error.popup.usingbyotheruser":
            "Esta configuraci\xf3n est\xe1 siendo modificada por otro usuario.\n",
          "square.filtering.keyword.error.alert":
            "No la vas a usar, \xbfverdad?",
          "square.fraudpopup.button.cancel": "Cancelar",
          "square.fraudpopup.button.continue": "Continuar",
          "square.fraudpopup.button.learnmore": "M\xe1s",
          "square.fraudpopup.desc.investmentscams":
            "Est\xe1n aumentando los fraudes burs\xe1tiles a trav\xe9s de anuncios estafas en redes sociales, donde fingen ser celebridades. Ten cuidado con los mensajes y denuncia cualquier actividad sospechosa.",
          "square.fraudpopup.title.investmentscams":
            "Aumento de los fraudes burs\xe1tiles",
          "square.friendslist.join.requests": "Solicitudes",
          "square.friendstab.newrequest": "Solicitudes OpenChat",
          "square.friendstab.request.count": "Solicitudes ",
          "square.friendstab.request.counts.2.one": "Solicitud %n",
          "square.friendstab.request.counts.2.other": "Solicitudes %n",
          "square.friendstab.request.counts.2.plurals.one": "%n solicitud",
          "square.friendstab.request.counts.2.plurals.other": "%n solicitudes",
          "square.friendstab.request.counts.one": "%n solicitud ",
          "square.friendstab.request.counts.other": "%n solicitudes ",
          "square.friendstab.request.counts.plurals.one": "%n solicitud",
          "square.friendstab.request.counts.plurals.other": "%n solicitudes",
          "square.group.create.change.image": "Cambiar foto",
          "square.group.name": "OpenChat",
          "square.group.settings.basic": "Ajustes b\xe1sicos OpenChat",
          "square.group.settings.change.groupname": "Nombre OpenChat",
          "square.group.settings.change.myname": "Nombre",
          "square.group.settings.delete.alert":
            "Se eliminara\u0301n todos los datos del OpenChat.",
          "square.group.settings.editmember.kickout": "Quitar miembros",
          "square.group.settings.editmember.kickout.alert.done":
            "Se quit\xf3 a este miembro.",
          "square.group.settings.group.profile": "Editar perfil OpenChat",
          "square.group.settings.groupset": "Ajustes OpenChat",
          "square.group.settings.leave": "Dejar OpenChat",
          "square.group.settings.leave.alert":
            "Si dejas este OpenChat, se eliminara\u0301 toda la informacio\u0301n.",
          "square.group.settings.leave.error.alert.admin":
            "Antes de dejar el OpenChat,\ntransfiere tus permisos de administrador.",
          "square.group.settings.manageauth.additional": "Permisos",
          "square.group.settings.manageauth.additionalchatfeatures":
            "Funciones de chat adicionales",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "Crear encuestas",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "Eliminar encuestas",
          "square.group.settings.manageauth.chatapp":
            "Funciones de chat adicionales",
          "square.group.settings.manageauth.setmaxparticipants":
            "Cambiar participantes m\xe1x. del chat",
          "square.group.settings.managegroup": "Administrar OpenChat",
          "square.group.settings.managegroup.allowtojoin":
            "Permiso para unirse",
          "square.group.settings.managegroup.allowtojoin.desc":
            "El administrador tramita las solicitudes para unirse al OpenChat.",
          "square.group.settings.managegroup.allowtosearch":
            "Mostrar OpenChat en bu\u0301squedas",
          "square.group.settings.managegroup.allowtosearch.desc":
            "Se puede buscar este OpenChat por palabras clave.",
          "square.group.settings.managegroup.autotag": "Sugerir tags ",
          "square.group.settings.managegroup.autotag.decs":
            "Al escribir posts, se recomiendan tags autom\xe1ticamente.",
          "square.group.settings.managegroup.deletegroup": "Eliminar OpenChat",
          "square.group.settings.managegroup.invite": "Invitar",
          "square.group.settings.managegroup.invite.desc":
            "No se puede invitar a m\xe1s miembros cuando est\xe1 deshabilitado y tanto enlaces como c\xf3digos QR compartidos dejan de funcionar.",
          "square.group.settings.managegroup.updateurl":
            "Actualizar link de invitaci\xf3n",
          "square.group.settings.managegroup.updateurl.desc":
            "No podr\xe1s usar este link si lo actualizas.\n\xbfContin\xfaas?",
          "square.group.settings.managemember": "Administrar miembros",
          "square.group.settings.managemembers.alert.cannot.select":
            "Solo puedes elegir hasta %n usuarios.",
          "square.group.settings.managemembers.allowrejoin": "Desbanear",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "\xbfLe permites unirse de nuevo?",
          "square.group.settings.managemembers.blocktojoin": "Baneados",
          "square.group.settings.managemembers.blocktojoin.alert":
            "Si le desbaneas, se podr\xe1 unir de nuevo al OpenChat.",
          "square.group.settings.managemembers.manageadmin": "Gestionar admin",
          "square.group.settings.managemembers.manageadmin.added":
            "Se a\xf1adi\xf3 ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "\xbfLe quitas los permisos de subadministrador?",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "Quitar",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "Subadministrador ",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "Transferir permisos administrador",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "Si transfieres tus permisos de administrador a un subadministrador,\npasar\xe1s a ser un subadministrador. ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            'Elige con qui\xe9n quieres administrar el Square.\nConfigura un subadministrador en "Gestionar permisos". ',
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "Si transfieres tus permisos de administrador a un subadministrador, pasar\xe1s a ser un subadministrador.",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "A\xf1adir subadministrador",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            'Elige con qui\xe9n quieres administrar el OpenChat.\nConfigura un subadministrador en "Gestionar permisos".',
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "No hay nadie para elegir.",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "A\xfan no has a\xf1adido subadministradores.",
          "square.group.settings.managemembers.manageadmin.select": "Elegir",
          "square.group.settings.managemembers.manageauth":
            "Gestionar permisos ",
          "square.group.settings.managemembers.manageauth.acceptrequest":
            "Aprobar solicitudes",
          "square.group.settings.managemembers.manageauth.admincoadmin":
            "Administrador y subadministradores",
          "square.group.settings.managemembers.manageauth.adminonly": "Admin",
          "square.group.settings.managemembers.manageauth.all": "Todos ",
          "square.group.settings.managemembers.manageauth.createpost":
            "Postear ",
          "square.group.settings.managemembers.manageauth.createpublicchat":
            "Crear chat secundario",
          "square.group.settings.managemembers.manageauth.deletecontents":
            "Eliminar chats y posts",
          "square.group.settings.managemembers.manageauth.description":
            "Selecciona quie\u0301n puede realizar modificaciones a OpenChat.",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "Invitar ",
          "square.group.settings.managemembers.manageauth.kickout":
            "Quitar miembros",
          "square.group.settings.managemembers.managepost": "Escribir nota",
          "square.group.settings.managemembers.request": "Solicitudes",
          "square.group.settings.managemembers.request.accept": "Aprobar",
          "square.group.settings.managemembers.request.accept.alert.done":
            "Solicitud aceptada.",
          "square.group.settings.managemembers.request.accept.alert.notall.done":
            "Se aprobaron las solicitudes. Recuerda que algunas podr\xedan haber sido procesadas por el administrador o subadministrador, o rechazadas en caso de que el chat est\xe9 lleno.",
          "square.group.settings.managemembers.request.acceptall":
            "Aprobar todo ",
          "square.group.settings.managemembers.request.acceptall.alert":
            "\xbfApruebas todas las solicitudes?",
          "square.group.settings.managemembers.request.delete.alert":
            "\xbfRechazas su solicitud?",
          "square.group.settings.managemembers.request.delete.alert.done":
            "Se rechaz\xf3 la solicitud.",
          "square.group.settings.managemembers.request.delete.alert.notall.done":
            "Borradas.\n(Otros administradores ya se encargaron de algunas solicitudes.)",
          "square.group.settings.managemembers.request.noti.tooltip":
            "Elige aqu\xed si te notificamos cuando soliciten unirse. ",
          "square.group.settings.managemembers.request.select100":
            "Las %1 m\xe1s recientes",
          "square.group.settings.managemembers.request.selectall":
            "Elegir todo",
          "square.group.settings.managemembers.request.zero":
            "No hay solicitudes para unirse.",
          "square.group.settings.memberlist": "Ver o invitar miembros",
          "square.group.settings.myprofile.title": "Mi perfil",
          "square.group.settings.nickname": "Apodo",
          "square.group.settings.noti.post": "Notificar posts",
          "square.group.settings.noti.post.dec":
            "Puedes recibir notificaciones de posts.",
          "square.group.settings.policy":
            "T\xe9rminos y condiciones de uso\nOpenChat",
          "square.group.settings.profile.title": "",
          "square.group.settings.recieve.chat": "Invitaciones de chat",
          "square.group.settings.recieve.friendsrequest":
            "Solicitudes de amistad ",
          "square.group.settings.report": "Denunciar OpenChat",
          "square.group.settings.reportpage.agreeandsend": "Aceptar y enviar",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "Confirmar y enviar",
          "square.group.settings.reportpage.desc": "Por qu\xe9 lo reportas:",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "Para poder analizar el caso, necesitamos que nos proporciones informaci\xf3n detallada.",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "Omitir",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "Proceder",
          "square.group.settings.reportpage.reason1": "Publicidad",
          "square.group.settings.reportpage.reason2": "Acoso sexual",
          "square.group.settings.reportpage.reason3": "Hostigamiento",
          "square.group.settings.reportpage.reason4": "Otras conductas",
          "square.group.settings.reportpage.reason5": "Contenido off-topic",
          "square.group.settings.reportpage.reason6": "Robo de indentidad",
          "square.group.settings.reportpage.reason7": "Estafa",
          "square.group.settings.reportpage.report.btn": "Denunciar",
          "square.group.settings.reportpage.reportdone":
            "Se envi\xf3 tu informe.",
          "square.grouppopup.alert.alreadyjoin":
            "Ya est\xe1s en este OpenChat. Cierra esta ventana para acceder.",
          "square.grouppopup.alert.blocked":
            "No puedes unirte a este OpenChat. Int\xe9ntalo m\xe1s tarde.",
          "square.grouppopup.alert.join.ing":
            "Podr\xe1s unirte cuando el administrador la acepte.\n",
          "square.grouppopup.alert.requestdone":
            "Podr\xe1s unirte cuando el administrador la acepte.",
          "square.grouppopup.button.join.ing": "Procesando...",
          "square.grouppopup.chat.count.plurals.one": "%1 chat",
          "square.grouppopup.chat.count.plurals.other": "%1 chats",
          "square.grouppopup.invite.tooltip":
            "Invita amigos a trav\xe9s de LINE o comparte invitaciones mediante un enlace o c\xf3digo QR.",
          "square.grouppopup.invitefriend": "Invitar amigos",
          "square.grouppopup.member.count.plurals.one": "%1 miembro",
          "square.grouppopup.member.count.plurals.other": "%1 miembros",
          "square.grouppopup.post.count.plurals.one": "%1 nota",
          "square.grouppopup.post.count.plurals.other": "%1 notas",
          "square.grouppopup.qrcode": "C\xf3digo QR",
          "square.grouppopup.qrcode.desc":
            "Muestra el c\xf3digo QR o comp\xe1rtelo en tus posts.",
          "square.grouppopup.qrcode.save": "Guardar QR",
          "square.grouppopup.qrcode.saved": "Se guard\xf3 el c\xf3digo QR. ",
          "square.grouppopup.sendrequest": "Solicitar unirse",
          "square.grouppopup.url": "Invitaci\xf3n link",
          "square.grouppopup.url.app": "Mandar por otra app",
          "square.grouppopup.url.line": "Mandar por LINE",
          "square.home.addfavorite": "\xa1A mis favoritos!",
          "square.home.cancelfavorite": "Quitar de favoritos.",
          "square.home.chat.section.invited": "Te invitaron",
          "square.home.favorite.tooltip":
            "A\xf1ade OpenChat a tus\nfavoritos en Amigos.",
          "square.home.invite.copy.link": "Copiar link",
          "square.home.invite.save.qr": "Guardar c\xf3digo QR",
          "square.home.invite.share.link": "Compartir enlace",
          "square.home.invite.share.qr": "Compartir QR",
          "square.home.menu.photo": "Fotos",
          "square.home.menu.write": "Publicar",
          "square.home.nickname": "%1",
          "square.home.setting": "Ajustes",
          "square.home.tab.chat": "Chats",
          "square.home.tab.post": "Posts",
          "square.home.toast.addfavorite": "\xa1A mis favoritos!",
          "square.home.toast.cancelfavorite": "Se quit\xf3 de tus favoritos.",
          "square.invite.complete.one":
            "Enviaste mensajes de invitaci\xf3n a %n miembro.",
          "square.invite.complete.other":
            "Enviaste mensajes de invitaci\xf3n a %n miembros.",
          "square.invite.complete.plurals.one":
            "Enviaste mensajes de invitaci\xf3n a %n miembro.",
          "square.invite.complete.plurals.other":
            "Enviaste mensajes de invitaci\xf3n a %n miembros.",
          "square.invite.friend": "Invitar amigos",
          "square.invite.urlscheme.chatroom.chatname": 'Invitar a "%1"',
          "square.invitemember.confirm.donotshowagain": "No mostrar m\xe1s",
          "square.invitemember.confirm.invite":
            "Los invitados pueden ver los mensajes anteriores.",
          "square.invitemember.desc":
            "Solo puedes invitar a los de este Square.",
          "square.invitemember.desc.urlscheme.chatroom":
            "Invita a los que no est\xe9n todav\xeda en OpenChat.",
          "square.invitemember.invitetogroup": "Invitar a OpenChat",
          "square.invitemember.invitetogroup.urlscheme.chatroom":
            "Invitar al chat",
          "square.invitemember.memberlist.title": "%1 (%n)",
          "square.invitemember.title": "Elige a alguien",
          "square.invitetoopenchat.button.share": "Compartir",
          "square.invitetoopenchat.desc.sharelinktoinvitemembers":
            "Invita a m\xe1s gente con el link de OpenChat.",
          "square.join.precaution":
            '\xa1Ya est\xe1s en "%1"! Juega limpio y no env\xedes mensajes que vayan en contra de los t\xe9rminos de uso de OpenChat.',
          "square.join.question.guide": "De 5 a 20 caracteres",
          "square.joincode.error": "C\xf3digo incorrecto",
          "square.joincode.guide":
            "Introduce el co\u0301digo que puso el administrador.",
          "square.joincode.guide.description":
            "Introduce el c\xf3digo de 4 a 8 caracteres alfanum\xe9ricos para unirte al OpenChat.",
          "square.joincode.input.guide": "C\xf3digo",
          "square.joincode.title": "C\xf3digo",
          "square.joinscreen.placeholder.enteranswerhere": "Respuesta",
          "square.keyboardmenu.button.qna": "Mensaje Q&A ",
          "square.kickout.alert.done":
            "Le banearon de este OpenChat. Puedes desbanearle desde el men\xfa de miembros en los ajustes OpenChat.",
          "square.kickout.blockoption": "Te quitaron del OpenChat.",
          "square.kickout.error.alert.admin":
            "No puedes banear a un administrador o subadministrador.",
          "square.kickout.reason1": "Spam",
          "square.kickout.reason2": "Lenguaje inapropiado",
          "square.kickout.reason3": "Otras conductas",
          "square.leave.last.person.alert": "",
          "square.leftuser.kickout.btn": "Banear",
          "square.main.create.block.alert":
            "No puedes crear Squares durante el per\xedodo beta. ",
          "square.main.create.guide":
            "Crea tu OpenChat y\nconoce a muchos ma\u0301s.",
          "square.main.mylist": "Tus OpenChats",
          "square.main.mylist.sortbyname": "Por nombre",
          "square.main.mylist.sortbyupdate": "\xdaltima actualizaci\xf3n",
          "square.main.mylist.sortbyvisit": "\xdaltima visita",
          "square.main.mylist.viewall": "Todo",
          "square.main.mylist.zero":
            "\xdanete o crea un OpenChat y comparte aficiones con gente af\xedn.",
          "square.main.search.block.alert":
            "Las funciones de b\xfasqueda no est\xe1n disponibles durante la beta. ",
          "square.main.search.default.msg": "Nombre y descripci\xf3n OpenChat",
          "square.managemembers.button.seewholeft": "Qui\xe9n se fue",
          "square.managemembers.desc.seewholeft":
            "Lista con los que se dejaron el OpenChat en las \xfaltimas 24 horas.",
          "square.manageopenchat.desc.setjoincode":
            "Introduce el c\xf3digo para unirte.",
          "square.members": "Miembros",
          "square.members.addmembers": "Invitar",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "Se banea a alguien",
          "square.membershipsystemmessages.button.userjoinsthechat":
            "Se unen al chat",
          "square.membershipsystemmessages.button.userleavesthechat":
            "Dejan el chat",
          "square.membershipsystemmessages.desc.managesystemmessages":
            "Controla los mensajes que aparecen en OpenChat cuando alguien se une, deja o se le banea de un chat.",
          "square.menu.invite": "Invitar",
          "square.mythreads.button.seemessages.one":
            "<![CDATA[Ver\xa0<b><font color='%1'>%n</font></b>\xa0mensaje]]>",
          "square.mythreads.button.seemessages.other":
            "<![CDATA[Ver\xa0<b><font color='%1'>%n</font></b>\xa0mensajes]]>",
          "square.noti.admin": 'Eres administrador del OpenChat "%1".',
          "square.noti.coadmin": 'Eres subadministrador del OpenChat "%1".',
          "square.noti.delete.chat":
            'El chat "%1" ha sido eliminado por el administrador.',
          "square.noti.deleted.coadmin":
            'Ya no eres subadministrador del OpenChat "%1".',
          "square.noti.deleted.gorup": 'Se elimin\xf3 el OpenChat "%1".',
          "square.noti.join.done": 'Te uniste al OpenChat "%1"',
          "square.noti.joinrequest": '%1 quiere unirse al OpenChat "%2".',
          "square.noti.kickout": 'Te banearon del OpenChat "%1".',
          "square.notification.desc.userjoinedopenchat":
            'Un miembro nuevo se uni\xf3 al OpenChat "%1".',
          "square.notification.setting":
            "Notificaciones para notas de OpenChat\nActiva las notificaciones para las notas de OpenChat.",
          "square.openchat.desc.adminaddedbottochat":
            "[0] a\xf1adi\xf3 a [1] al chat.",
          "square.openchat.desc.adminremovedbotfromchat":
            "[0] quit\xf3 a [1] del chat.",
          "square.openchat.desc.messageremovedforsharinginappropriatecontent":
            "El mensaje de %1 se elimin\xf3 por infringir los t\xe9rminos de uso de OpenChat.",
          "square.openchat.desc.userbannedbysomeoneelse":
            "%1 bane\xf3 de este OpenChat a %2.",
          "square.openchat.popup.dontshow":
            "No mostrar m\xe1s en este OpenChat.",
          "square.openchat.popupbutton.close": "Cerrar",
          "square.openchat.popupbutton.deleteforall": "Del historial de todos",
          "square.openchat.popupbutton.deleteforyou": "Solo de mi historial",
          "square.openchat.popupbutton.ok": "Aceptar",
          "square.openchat.popupbutton.seemore": "M\xe1s",
          "square.openchat.popupdesc.deletemessagesfor":
            "\xbfQu\xe9 mensajes eliminas?\nArrastra el rat\xf3n para eliminar hasta 50 mensajes.",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            'Los mensajes nuevos se muestran con "N".',
          "square.openchat.popupdesc.unsendmessage":
            "Recuerda que no se anular\xe1 en versiones anteriores de LINE. ",
          "square.openchat.popuptitle.deletemessages": "Eliminar mensajes",
          "square.openchatannouncements.title.announcements": "Recordatorio",
          "square.openchatcharacterprofiles.button.cancel": "No, gracias",
          "square.openchatcharacterprofiles.button.save": "Guardar",
          "square.openchatcharacterprofiles.title.selectcharacter": "Elige uno",
          "square.openchatentry.button.confirm": "Aceptar",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[<font color=\\'#07B53B\\'>Trata a los dem\xe1s</font> <font color=\\'#07B53B\\'>como te gustar\xeda que te trataran</font>.]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[Sigue estas <font color=\\'#07B53B\\'>normas de sentido com\xfan</font> para seguir disfrutando de OpenChat.]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[OpenChat es un espacio abierto a todo el mundo. Mu\xe9strales tu <font color=\\'#07B53B\\'>respeto</font>.]]>",
          "square.openchatentry.header.dontsendrudemessages":
            "2. Mant\xe9n el rollo",
          "square.openchatentry.header.followopenchatrules": "3. Divi\xe9rtete",
          "square.openchatentry.header.treatmemberswithrespect":
            "1. Muestra tu respeto",
          "square.openchatentry.title.openchatuserules":
            "A tener en cuenta al usar OpenChat",
          "square.openchatinvite.desc.userinvitedtojoinchat":
            'Te invitaron a "%1".',
          "square.openchatinvite.desc.userinvitedtojoinsquare":
            'Te invitaron a "%1".',
          "square.openchatlist.desc.viewchatandaddtofavorites": "",
          "square.openchatlist.header.yourchats": "Tus chats %1",
          "square.openchatliveinvite.popupdesc.usefeatureonmobileapp":
            "Disponible en la versi\xf3n m\xf3vil de LINE.",
          "square.openchatmember.button.default": "Preestablecida",
          "square.openchatmember.button.oldjoin": "Antiguos",
          "square.openchatmember.button.recentjoin": "Recientes",
          "square.openchatmember.desc.days.one": "Hace %d d\xeda",
          "square.openchatmember.desc.days.other": "Hace %d d\xedas",
          "square.openchatmember.desc.hours.one": "Hace %d hora",
          "square.openchatmember.desc.hours.other": "Hace %d horas",
          "square.openchatmember.desc.justnow": "Justo ahora",
          "square.openchatmember.desc.lastvisited": "\xdaltima visita",
          "square.openchatmember.desc.minutes.one": "Hace %d minuto",
          "square.openchatmember.desc.minutes.other": "Hace %d minutos",
          "square.openchatmembers.desc.hundredthousandmembersth": "%1",
          "square.openchatmembers.desc.membersen": "%1",
          "square.openchatmembers.desc.memberskoja": "%1",
          "square.openchatmembers.desc.membersth": "%1",
          "square.openchatmembers.desc.tenthousandmemberskoja": "%1",
          "square.openchatmembers.desc.tenthousandmembersth": "%1",
          "square.openchatmembers.desc.thousandmembersen": "%1K",
          "square.openchatmembers.desc.thousandmembersth": "%1",
          "square.openchatmenu.button.hidemessagecount":
            'Ocultar estado\nLos mensajes nuevos se muestran con el icono "N".',
          "square.openchatmenu.button.showmessagecount": "Ver estado",
          "square.openchatmenu.desc.joindate": "Se uni\xf3 el dd/mm/yyyy",
          "square.openchatmenu.desc.messagereplies":
            "Se te avisa cuando responden a tus mensajes",
          "square.openchatmenu.desc.onlyadmin":
            "Solo los administradores y subadministradores pueden ver cu\xe1ndo se unen los miembros o visitaron por \xfaltima vez OpenChat.",
          "square.openchatmenu.desc.visitdays.one": "Estuvo hace %1 d\xeda",
          "square.openchatmenu.desc.visitdays.other": "Estuvo hace %1 d\xedas",
          "square.openchatmenu.desc.visitmonths.one": "Estuvo hace %1 mes",
          "square.openchatmenu.desc.visitmonths.other": "Estuvo hace %1 meses",
          "square.openchatmenu.desc.visittoday": "Estuvo hoy",
          "square.openchatmenu.desc.visityester": "Estuvo ayer",
          "square.openchatmenu.toggle.messagereplies": "Respuesta mensajes",
          "square.openchatmessage.desc.noreactions": "Sin reacciones.",
          "square.openchatmessagefield.desc.readonlymode":
            "Chat solo de lectura.",
          "square.openchatnotes.desc.subchatmemberscanseenotes":
            "Los miembros de los chat secundarios pueden ver las Notas compartidas en el OpenChat.",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "OpenChat",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "Para ofrecerte un entorno seguro en OpenChat tienes que verificar tu n\xfamero de tel\xe9fono. Puedes hacerlo desde la app.",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "Verificaci\xf3n identidad",
          "square.openchatpopup.button.cancel": "Cancelar",
          "square.openchatpopup.button.confirm": "Aceptar",
          "square.openchatpopup.desc.changesetting":
            "Tambi\xe9n se aplicar\xe1n estos cambios a OpenChat y otros subchats.",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "Este OpenChat es para mayores de 18 a\xf1os.",
          "square.openchatprivacysettings.desc.opentoallages":
            "Este OpenChat es para todos.",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "Introduce el c\xf3digo para entrar en OpenChat. Con el c\xf3digo, te aseguras que solo entran usuarios que hayan verificado su edad.",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "Ingresa la pregunta para entrar en OpenChat. Los administradores o subadministradores revisar\xe1n las solicitudes y aprobar\xe1n a los miembros. Con esta medida, te aseguras que solo entran usuarios que hayan verificado su edad.",
          "square.openchatprofile.button.join": "Unirse",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "La configuraci\xf3n de este OpenChat es de otro pa\xeds o regi\xf3n.",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "OpenChat solo de lectura.",
          "square.openchatprofile.desc.tooltip":
            "Unirse a este OpenChat con un nombre nuevo y una foto de perfil.",
          "square.openchatsetting.desc.maxpeople":
            "Este ajuste no se puede cambiar en los MegaChats.",
          "square.openchatsetting.desc.mentionnoti":
            "Te avisaremos si te mencionan en chats aunque tengas las notificaciones del chat apagadas.",
          "square.openchatsetting.desc.mentions": "Menci\xf3name",
          "square.openchatsetting.desc.onlyopen":
            "Solo disponible cuando el OpenChat est\xe1 configurado para todas las edades.",
          "square.openchatsetting.desc.visibility":
            "Permitir b\xfasqueda y vista previa de mensajes",
          "square.openchatsetting.desc.visibilityallowed": "Permitir ",
          "square.openchatsetting.desc.visibilitynotallowed": "No permitir",
          "square.openchatsetting.desc.visiforco":
            "Estos mensajes se pueden buscar. Opci\xf3n disponible si la misma est\xe1 activada en OpenChat (solo los administradores pueden cambiarla).",
          "square.openchatsettings.button.allowmessagesfrom":
            "Permitir mensajes",
          "square.openchatsettings.button.continue": "Siguiente",
          "square.openchatsettings.button.leavemainchat":
            "Dejar chat principal",
          "square.openchatsettings.button.leavesubchat": "Dejar subchat",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "Mensajes del sistema",
          "square.openchatsettings.button.settoreadonlymode": "Solo leer",
          "square.openchatsettings.desc.addopenchatdescription":
            "De qu\xe9 va este OpenChat.",
          "square.openchatsettings.desc.coverphotosetasprofilephotoandbackground":
            "La foto de este OpenChat se usar\xe1 como la foto de perfil y como fondo.",
          "square.openchatsettings.desc.getnotifiedwhensomeonejoins":
            "Cuando se unan al OpenChat recibir\xe1s un aviso.",
          "square.openchatsettings.desc.readonlymodeformembers":
            "\xdanicamente los administradores y subadministradores pueden enviar mensajes.",
          "square.openchatsettings.header.chatsettings": "",
          "square.openchatsettings.header.details": "",
          "square.openchatsettings.header.editsubchatprofile":
            "Editar perfil subchat",
          "square.openchatsettings.header.openchatsettings": "",
          "square.openchatsettings.header.subchatsettings": "",
          "square.openchatsettings.placeholder.enterhashtags": "Descripci\xf3n",
          "square.openchatsettings.popup.searchoff":
            "Los mensajes nuevos no se podr\xe1n buscar y no aparecer\xe1n en el perfil del chat.",
          "square.openchatsettings.popup.searchon":
            "Los mensajes nuevos se podr\xe1n buscar y aparecer\xe1n en el perfil del chat.",
          "square.openchatsettings.popupdesc.selectacoadmin":
            "Elige al menos un miembro como administrador antes de dejar el chat.",
          "square.openchatsettings.toggle.newmembernotification":
            "Notificarme miembros nuevos",
          "square.openchatsettingstatus.desc.readonlymodedisabled":
            "Todos pod\xe9is enviar mensajes.",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "Solo el administrador puede enviar mensajes.",
          "square.openchatsettingv.desc.allmessages": "Todos los mensajes",
          "square.openchatsettingv.desc.dontallow": "No permitir",
          "square.openchatsettingv.desc.off":
            "Solo se muestra cuando el OpenChat sale en la b\xfasqueda.",
          "square.openchatsettingv.desc.on":
            "Los mensajes del OpenChat se mostrar\xe1n en la b\xfasqueda y en su perfil.",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "Invita a tu gente a este OpenChat.",
          "square.openchatsharelink.title.sharelink":
            "Compartir este link OpenChat",
          "square.openchatsubchat.title.subchatname": "Nombre subchat ",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "Este fondo solo lo puedes ver t\xfa.",
          "square.pdpa.policy.agree.btn": "Continuar",
          "square.personaloption.alert.error.name":
            "Alguien fue m\xe1s r\xe1pido. Prueba con otro.",
          "square.personaloption.chat": "Invitaciones de chat",
          "square.personaloption.chat.desc":
            "Recibir invitaciones de otros miembros de OpenChat.",
          "square.personaloption.copy": "Se copi\xf3 el link. ",
          "square.personaloption.friendrequest":
            "Recibir solicitudes de amistad",
          "square.personaloption.friendrequest.desc":
            "Te pueden mandar solicitudes amistad.",
          "square.personaloption.greetingmessage": "Dile algo al admin",
          "square.personaloption.greetingmessage.default":
            "Pon un mensaje para el administrador.",
          "square.personaloption.guide": "Ponte un alias",
          "square.personaloption.join.btn": "Unirse",
          "square.personaloption.joincode.btn": "Unirse con c\xf3digo",
          "square.personaloption.profile.title": "Perfil OpenChat",
          "square.personaloption.profile.title.tooltip.desc":
            "Elige una foto y un nombre para este OpenChat. Recuerda que no se muestra tu perfil de LINE.",
          "square.personaloption.sendrequest.btn": "Solicitar unirse",
          "square.personaloption.welcomemsg": "Primer mensaje ",
          "square.policy.agree.btn": "Acepto ",
          "square.policy.title": "T\xe9rminos de uso",
          "square.policy.viewall":
            "Aseg\xfarate de leer los t\xe9rminos de uso OpenChat",
          "square.popup.button.grantpermission": "S\xed",
          "square.popup.button.setaspublic": "Hacelo p\xfablico",
          "square.post.announcement.announce": "",
          "square.post.announcement.delete": "Eliminar nota",
          "square.post.announcement.delete.desc":
            "Esta nota tambi\xe9n se quitar\xe1 de los posts importantes. \xbfLa eliminas?",
          "square.post.announcement.guide":
            "Notas importantes, para que nadie se las pierda.",
          "square.post.announcement.list.title": "Notas importantes",
          "square.post.announcement.list.zero": "Todav\xeda no hay notas.",
          "square.post.announcement.mark": "Nota importante",
          "square.post.announcement.mark.desc":
            "Solo se enviar\xe1n notificaciones a los miembros del OpenChat del primer post importante de cada d\xeda.",
          "square.post.announcement.postui": "IMPORTANTE",
          "square.post.announcement.postui2": "<b>Notas importante</b>",
          "square.post.announcement.push": "Nota importante en %1.",
          "square.post.announcement.remove": "Quitar ajustes importantes",
          "square.post.announcement.seeall.plural.one": "%1 notas importantes",
          "square.post.announcement.seeall.plural.other":
            "%1 notas importantes",
          "square.post.endpage.squarename": "%1",
          "square.post.error.deletedcomment": "Ya se borr\xf3.",
          "square.post.error.deletedjoined": "Este post ya se borr\xf3. ",
          "square.post.error.deletedpost": "Se elimin\xf3 esta nota.",
          "square.post.error.write":
            "El administrador deshabilit\xf3 la opci\xf3n para escribir posts. ",
          "square.post.hashtag.title": "%2 en %1",
          "square.post.join": "Unirse",
          "square.post.joinguide":
            '\xa1No te quedes atr\xe1s! \xdanete a "%1 y comparte chats y posts con lo dem\xe1s.',
          "square.post.linktype.chatlist": "comparti\xf3 una nota de OpenChat.",
          "square.post.linktype.scroll": "comparti\xf3 una nota de OpenChat.",
          "square.post.linktype.title": "Ver nota",
          "square.post.share.chatlist": "Compartir con\u2026",
          "square.post.share.popup": "Compartiendo notas OpenChat",
          "square.post.title": "Notas",
          "square.post.write.guide":
            "Otros podra\u0301n ver tu Nota en OpenChat.",
          "square.post.write.guidecountryspecific": "Compatir en OpenChat.",
          "square.post.write.hashtag":
            "\xa1A\xf1ade tags! As\xed encontrar\xe1n a la primera\nchats y posts de Square de temas espec\xedficos.",
          "square.post.zeropage.newpost": "Publicar",
          "square.post.zeropage.welcome": "\xa1Estrena las Notas de OpenChat!",
          "square.postpopup.join":
            "Tienes que ser miembro para usar esta funci\xf3n. \xbfTe unes?",
          "square.privacy.setting.approval":
            "Aprobacio\u0301n del administrador",
          "square.privacy.setting.guide":
            "Solo los aprobados por el administrador o los que ingresen el co\u0301digo pueden unirse al OpenChat y sus chats secundarios, si esta\u0301n disponibles.",
          "square.privacy.setting.joincode": "Co\u0301digo para unirse",
          "square.privacy.setting.off": "P\xfablico",
          "square.privacy.setting.off.guide":
            "Cualquiera puede unirse al OpenChat y sus chats secundarios si esta\u0301n disponibles.",
          "square.privacy.setting.title": "Ajustes privacidad",
          "square.privacy.turnoff.alert":
            "Vas a hacer este chat Pu\u0301blico y cualquiera se podra\u0301 unir.",
          "square.privcay.setting.off.guide":
            "Cualquiera puede unirse al espacio y sus chats.",
          "square.qrcode.save.failed": "Error al guardar el c\xf3digo QR.",
          "square.readonlyopenchat.popupbutton.ok": "Aceptar",
          "square.repairdata.button.repairdata": "Sincronizar",
          "square.repairdata.desc.syncrepairdata":
            "Sincroniza los datos de OpenChat.\nDatos sincronizados: los datos de OpenChat\xa0y los ajustes relacionados",
          "square.repairdata.popupdesc.repairinginprogress":
            "Sincronizando datos\nNo cierres esta ventana mientras est\xe1 activa la acci\xf3n.",
          "square.repairdata.popupdesc.synccomplete":
            "Se sincronizaron los datos de OpenChat.",
          "square.repairdata.title.repairdata":
            "Sincronizaci\xf3n datos OpenChat",
          "square.report.page.reason01": "",
          "square.report.page.reason02": "",
          "square.report.page.reason03": "",
          "square.report.page.reason04": "",
          "square.report.policy.desc":
            "Las denuncias se revisan y procesan siguiendo la pol\xedtica de privacidad de OpenChat.",
          "square.report.policy.desc01": "",
          "square.report.policy.desc02": "",
          "square.report.policy.message": "",
          "square.report.subTitle": "Denunciar esta nota.\n(Creador: %1)",
          "square.reportopenchat.desc.reportchatfromprofile":
            "La informaci\xf3n relevante del OpenChat reportado (como el nombre de usuario, la foto de perfil y la cuenta de miembro), as\xed como los \xfaltimos 100 mensajes enviados en el chat, tu informaci\xf3n y los detalles relacionados con los administradores del chat, incluyendo los nicknames usados en el chat y la informaci\xf3n de identificaci\xf3n.",
          "square.reportopenchat.desc.reportchatfromsettings":
            "La informaci\xf3n relevante del OpenChat reportado (como el nombre de usuario, la foto de perfil y la cuenta de miembro), as\xed como los \xfaltimos 50 mensajes enviados en el chat, tu informaci\xf3n y los detalles relacionados con los administradores del chat, incluyendo los nicknames usados en el chat y la informaci\xf3n de identificaci\xf3n.",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "El contenido (texto, im\xe1genes y emoticones) del comentario reportado, la informaci\xf3n (nombre del chat, foto de perfil y n\xfamero de miembros) del OpenChat, la informaci\xf3n (nickname, foto de perfil, identificador interno y estado de cuenta) del usuario reportado, y la informaci\xf3n (nickname, foto e identificador interno) del reportante en cuesti\xf3n.",
          "square.reportopenchat.desc.reportopenchatmember":
            "La informaci\xf3n (nombre del chat, foto del perfil y el n\xfamero de miembros) del OpenChat reportado, los \xfaltimos 100 mensajes enviados en el chat y la informaci\xf3n (nicknames de los chats, perfil del icono e identificador interno) tanto del reportante como la tuya.",
          "square.reportopenchat.desc.reportopenchatmessage":
            "La informaci\xf3n (nombre del chat, foto del perfil y el n\xfamero de miembros) del OpenChat reportado, los \xfaltimos 10 mensajes enviados en el chat y la informaci\xf3n (nicknames de los chats, perfil del icono e identificador interno) tanto del reportante como la tuya.",
          "square.reportopenchat.desc.reportopenchatnote":
            "El contenido (texto, im\xe1genes, v\xeddeos y emoticones) de la Nota reportada, la informaci\xf3n (nombre del chat, foto de perfil y n\xfamero de miembros) del OpenChat, tu informaci\xf3n y la informaci\xf3n (perfil de icono, estado de cuenta, el nickname del chat e identificador interno) del reportante en cuesti\xf3n.",
          "square.requesttojoin.button.submit": "Enviar",
          "square.set.joincode.input.guide": "C\xf3digo",
          "square.set.question.input.guide":
            "Pregunta para poder unirse al chat. Solo el administrador y los subadministradores pueden revisar las solicitudes y aprobar quie\u0301n entra.",
          "square.setopenchatprofile.button.characterprofile":
            "Perfil personaje",
          "square.setting.auth.announcement": "Recordatorios",
          "square.setting.auth.message.post": "Eliminar mensajes y notas",
          "square.settings.deleteaccount.desc":
            "Los derechos de administrador se transferira\u0301n automa\u0301ticamente a otro miembro.",
          "square.settings.managesquare.defaultchatroom.desc":
            "No se puede borrar el chat predeterminado.",
          "square.settings.managesquare.defaultchatroom.title":
            'Chat predeterminado para el Square "%1"',
          "square.settings.managesquare.privatechat": "Permitir chats privados",
          "square.settings.managesquare.privatechat.desc":
            "Los miembros pueden crear chats privados o enviarse mensajes directamente.",
          "square.settings.memberlist.members.subtitle": "Miembros",
          "square.settings.members": "Miembros (%n)",
          "square.settings.myprofile.leavesquare": "Dejar OpenChat",
          "square.sub.name.title": "Nombre chat secundario",
          "square.thread.desc.nochat":
            "Los mensajes del hilo no se env\xedan al chat.",
          "square.thread.desc.startofthread": "Ver mensaje en el chat",
          "square.thread.placeholder.replytothread": "Responder al hilo.",
          "square.thread.title.thread": "Hilo",
          "square.thread.toast.nolongerwatching":
            "Se quit\xf3 de tus Hilos favoritos.",
          "square.thread.toast.nowwatching":
            "Se agreg\xf3 a tus Hilos favoritos.",
          "square.timeline.button.tooltip":
            "Chatea con emoci\xf3n\ny gente nueva",
          "square.tooltip.chatroom.settings.changename":
            "A\xf1ade un nombre y un perfil al chat por defecto.",
          "square.unsupported.version.message":
            "Actualiza tu LINE para poder usar esta funci\xf3n.\n",
          "square.urlscheme.alert.linkjoin.function.off":
            "No puedes unirte con este link.\nDile a un miembro que te invite.",
          "square.urlscheme.desc2":
            "Solo puedes unirte a este Square con dispositivos iOS o Android. ",
          "square.urlscheme.error.notexist": "Este OpenChat no existe.",
          "square.urlscheme.invite.msg": "Te invitaron a un OpenChat.",
          "square.urlscheme.package":
            "[%1] Te invitaron a un OpenChat.\n%3\n%2",
          "square.urlscheme.package.chatroom":
            'Te invitaron a "%1". \xdanete al OpenChat con este enlace.\n%2',
          "square.urlscheme.package.chatroom2": "",
          "square.user.admin": "Admin",
          "square.user.coadmin": "Subadmin",
          "square.userpopup.blockinvite": "Bloquear invitaciones",
          "square.userpopup.error.alert.notmember":
            "Ya no est\xe1 en este OpenChat.",
          "square.userpopup.friendsinfo.btn": "C\xf3mo se usa ",
          "square.userpopup.friendsrequest.btn": "Solicitudes amistad",
          "square.userpopup.kickout.ban.btn": "Banear",
          "square.userpopup.kickout.btn": "Banear",
          "square.userpopup.kickout.cancel.btn": "Cancelar",
          "square.userpopup.post.count.btn": "Posts",
          "square.yourthreads.title.yourthreads": "Tus hilos",
          "sticion.msg.desc.expired": "Ya no est\xe1n disponibles.",
          "sticker.btn.deleteThisSticker": "Eliminar stickers",
          "sticker.btn.openWebStore": "Tienda Stickers",
          "sticker.customsticker.btn.edit": "Editar texto",
          "sticker.customsticker.cancelalert.desc":
            "Perder\xe1s el texto que has puesto si sales de esta p\xe1gina.",
          "sticker.customsticker.discard.alert": "Salir",
          "sticker.customsticker.edit.overflow": "El texto es muy largo.",
          "sticker.customsticker.error.updatename.desc":
            "Vaya, no se pudo cambiar el texto.",
          "sticker.customsticker.invalidwordupdate.desc":
            "Va a ser que no con las palabras que elegiste. S\xe9 m\xe1s original y prueba con otras.",
          "sticker.customsticker.sync.alert":
            "Desc\xe1rgatelos en tu tel\xe9fono desde Configuraci\xf3n > Stickers > Mis stickers.",
          "sticker.customsticker.tooltip":
            "\xa1Personaliza tus stickers con texto!",
          "sticker.download.btn": "Bajar",
          "sticker.download.fail": "No se pudo bajar.\nInt\xe9ntalo de nuevo.",
          "sticker.downloadAll.confirm": "\xbfDescargas todos tus Stickers?",
          "sticker.downloadAll.desc": "Descarga todos tus stickers a la vez.",
          "sticker.downloadAll.downloading": "Descargando...",
          "sticker.downloading.desc":
            "Descargando...\nLos tendr\xe1s listos enseguida.",
          "sticker.edit.hint.default": 'Texto para "****"',
          "sticker.edit.invalidword.desc": "No se puede usar.",
          "sticker.error.downloadlfailed.desc":
            "Vaya, hubo un error al descargarlos.",
          "sticker.expired.desc":
            "%1 expir\xf3. Se quitar\xe1n estos Stickers.",
          "sticker.msg.desc.delete": "Borrar",
          "sticker.msg.desc.expired": "Estos stickers ya expiraron.",
          "sticker.msgsticker.button.back": "Atr\xe1s",
          "sticker.msgsticker.button.cancel": "Cancelar",
          "sticker.msgsticker.button.edit": "Editar",
          "sticker.msgsticker.button.save": "Guardar",
          "sticker.msgsticker.desc.howtoedit":
            "Elige un sticker para editar el texto.",
          "sticker.msgsticker.desc.prompt":
            "Gu\xe1rdalo y saldr\xe1 en los stickers que mandes.",
          "sticker.msgsticker.validation.errorrefresh":
            "\xa1Vaya! Haz clic en el sticker para cargar la imagen.",
          "sticker.msgsticker.validation.toolong": "\xa1Muy largo!",
          "sticker.nearlyExpired.desc.one": "Expiran en %n d\xeda.",
          "sticker.nearlyExpired.desc.other": "Expiran en %n d\xedas.",
          "sticker.recommendedSticker.label": "Stickers recomendados",
          "sticker.search.hint": "Buscar",
          "sticker.search.nosearchresult": "No encontramos nada.",
          "sticker.stickerspremium.deletsticker.popup":
            "\xbfLo quitas de tu coleci\xf3n Premium?",
          "sticker.stickerspremium.dropped.desc":
            "Puedes comprarlos y sera\u0301n tuyos.",
          "sticker.stickerspremium.dropped.title":
            "Vaya, ya no esta\u0301n en LINE Stickers Premium",
          "sticker.stickerspremium.emojidropped.desc":
            "Puedes comprarlos y sera\u0301n tuyos.",
          "sticker.stickerspremium.emojidropped.title":
            "Vaya, ya no esta\u0301n en\nLINE Stickers Premium",
          "sticker.stickerspremium.emojiexpired.desc":
            "\xbfQuieres seguir usa\u0301ndolos? Renueva tu suscripcio\u0301n LINE Stickers Deluxe.",
          "sticker.stickerspremium.expired.desc":
            "\xbfQuieres seguir usa\u0301ndolos? Renueva tu suscripcio\u0301n LINE Stickers Premium.",
          "sticker.stickerspremium.expired.title":
            "Expiro\u0301 tu membresi\u0301a Premium",
          "sticker.unpurchased.purchase.btn": "Comprar",
          "sticker.unpurchased.recommended.title": "Para ti",
          "sticon.downloadAll.desc": "Descargar todos los emoticones a la vez.",
          "sticon.downloadAll.downloading": "Descargando...",
          "sticon.downloading.desc":
            "Descargando...\nLos tendr\xe1s listos enseguida.",
          "sticon.expired.desc":
            "%1 expir\xf3. Estos Emoticones se quitar\xe1n.",
          "sticon.nearlyExpired.desc.one": "Expiran en %n d\xeda.",
          "sticon.nearlyExpired.desc.other": "Expiran en %n d\xedas.",
          "sticon.recommendedEmoji.label": "Emoticones para ti",
          "sticon.stickerspremium.deletemoji.popup":
            "\xbfLo quitas de tu colecci\xf3n Premium?",
          "subprofile.common.button.cancel": "Cancelar",
          "subprofile.common.popupbutton.continue": "Continuar",
          "subprofile.common.toast.settingupdated":
            "Ajustes del perfil actualizados",
          "subprofile.editfriends.button.done": "Listo",
          "subprofile.editfriends.popupdesc.dontshowagain": "No mostrar m\xe1s",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "No se han podido elegir algunos amigos para este perfil. Int\xe9ntalo de nuevo.",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "No se han podido elegir algunos amigos para este perfil.",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "Has alcanzado el l\xedmite de amigos para un perfil.",
          "subprofile.editfriends.popuptitle.networkerror":
            "Ha ocurrido un error. Comprueba tu conexi\xf3n e int\xe9ntalo de nuevo.",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "Disponible solo en la app LINE de tu tel\xe9fono inteligente.",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "Se mostrar\xe1 un perfil diferente a este amigo. \xbfContinuar?",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "Los amigos que has seleccionado ver\xe1n este perfil. \xbfContinuar?",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "Se produjo un error temporal. Int\xe9ntalo luego.",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "No se ha podido cargar la lista de tus amigos. Int\xe9ntalo de nuevo.",
          "subprofile.editfriends.subtitle.addfriend": "A\xf1adir Amigos",
          "subprofile.editfriends.title.onlyonmobileapp":
            "Crea o elimina un subperfil en la versi\xf3n m\xf3vil.",
          "subprofile.editfriends.title.selectprofile": "Elegir perfil",
          "subprofile.editfriends.toast.profileupdatedplural.one":
            "Perfil actualizado para %n amigo.",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "Perfil actualizado para %n amigos.",
          "subprofile.friendsprofile.title.setyourprofile": "Establecer perfil",
          "subprofile.friendsprofile.tooltip.subprofile":
            "Elige el perfil para mostrar a este amigo.",
          "subprofile.groupchatmenu.group.profile": "",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "Cambia qu\xe9 perfil mostrar a amigos en chats de grupo.",
          "subprofile.groupprofile.tooltip.subprofile":
            "Elige el perfil para usar en este grupo.",
          "subprofile.groupsettings.button.edit": "Editar",
          "subprofile.groupsettings.subtitle.amountofprofile.one":
            "%n perfil mostrado",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "%n perfiles mostrados",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "Establece un subperfil luego de crearlo en la versi\xf3n m\xf3vil.",
          "subprofile.selectfriends.button.deselectall": "Quitar todo",
          "subprofile.selectfriends.button.selectall": "Todo",
          "subprofile.selectfriends.button.selectprofile": "Elegir perfil",
          "subprofile.selectfriends.desc.selectfriends":
            "Solo puedes mostrar un subperfil a amigos. Miembros del grupo que no sean amigos ver\xe1n el perfil principal.",
          "subprofile.settings.button.edit": "Tus perfiles",
          "subprofile.settings.desc.aboutsubprofile":
            "Solo puedes editar un subperfil existente en la versi\xf3n de escritorio. Crea o elimina un subperfil en la versi\xf3n m\xf3vil.",
          "subprofile.settings.desc.zerocase":
            'A\xfan no tienes Amigos establecidos. Haz clic en "Agregar amigos" y selecciona qui\xe9n ver\xe1 este perfil.',
          "subprofile.settings.title.app": "App",
          "subprofile.yourprofile.bannerdesc.cantsetsubprofile": "",
          "subprofile.yourprofile.bannerdesc.shownfor30days": "",
          "subprofile.yourprofile.bannertitle.expired": "",
          "subprofile.yourprofile.bannertitle.temporaryerror": "",
          "subprofile.yourprofile.button.editfriends": "Editar amigos",
          "subprofile.yourprofile.desc.amountoffriend.one":
            "%n amigo ve este perfil",
          "subprofile.yourprofile.desc.amountoffriend.other":
            "%n amigos ven este perfil",
          "subprofile.yourprofile.subtitle.mainprofile": "Perfil principal",
          "subprofile.yourprofile.subtitle.subprofile": "Subperfil",
          "subprofile.yourprofile.title.editfriends": "Editar amigos",
          "subprofile.yourprofile.title.yourprofile": "Tus perfiles",
          "talk.addFriend.recommend.reason.group": "Mismo grupo",
          "talk.addFriend.recommend.reason.group.name": "Grupo %1",
          "talk.addFriend.recommend.reason.lineid":
            "Te a\xf1adi\xf3 por el ID de LINE",
          "talk.addFriend.recommend.reason.phone":
            "Te a\xf1adi\xf3 por n\xfamero de tel\xe9fono",
          "talk.addFriend.recommend.reason.qrcode":
            "Te a\xf1adi\xf3 por c\xf3digo QR",
          "talk.btn.addbuddy.title": "A\xf1adir",
          "talk.btn.cancel.title": "Cancelar",
          "talk.btn.join.title": "Unirse",
          "talk.chatlist.chatheader.title": "Chat",
          "talk.chatlist.floating.button.chat": "Chat",
          "talk.chatlist.floating.button.chatandgroup": "Grupo o chat",
          "talk.chatlist.floating.button.group": "Grupo",
          "talk.chatlist.floating.button.square": "OpenChat",
          "talk.chatlist.floating.createChat": "Crear chat",
          "talk.chatlist.floating.menu.chatandgroup": "Crea un grupo o chat",
          "talk.chatlist.groupheader.title":
            'Grupos con miembros de nombre "%1"',
          "talk.chatlist.menu.hide": "Ocultar",
          "talk.chatlist.menu.pin.off": "Desanclar chat",
          "talk.chatlist.menu.pin.on": "Anclar chat",
          "talk.chatlist.menu.readAll": "Ya lo le\xed",
          "talk.chatlist.msgsSearchCount.few": "%n mensajes",
          "talk.chatlist.msgsSearchCount.many": "%n mensajes",
          "talk.chatlist.msgsSearchCount.one": "%n mensaje",
          "talk.chatlist.msgsSearchCount.other": "%n mensajes",
          "talk.chatlist.msgsSearchCount.plurals.one": "%n mensaje",
          "talk.chatlist.msgsSearchCount.plurals.other": "%n mensajes",
          "talk.chatlist.msgsSearchCount.two": "%n mensajes",
          "talk.chatlist.msgsSearchCount.zero": "%n mensajes",
          "talk.chatlist.msgsSearchHeader.title": "Mensajes",
          "talk.chatlist.search.placeholder": "Buscar chats",
          "talk.label.addbuddy.title": "A\xf1adir",
          "talk.label.alreadycontact.title": "Ya sois Amigos.",
          "talk.label.blocked.buddy.title":
            "Est\xe1 bloqueado. Comprueba tu Configuraci\xf3n.",
          "talk.label.buddies.title": "Amigos",
          "talk.label.buddylist.title": "Amigos",
          "talk.label.chatlist.title": "Chats",
          "talk.label.empty.description.1":
            'A\xf1ade a tu gente con la b\xfasqueda de ID\no en tu lista de "\xbfLos conoces?".',
          "talk.label.empty.description.3": "Pon el ID y b\xfascalo.\n",
          "talk.label.empty.title.1": "\xa1A\xf1ade a tu gente!",
          "talk.label.empty.title.2": "\xbfChateamos?",
          "talk.label.empty.title.3": "Venga, busca a los tuyos.",
          "talk.label.failed.title": "Error al mostrar tu lista de Amigos.",
          "talk.label.failedsearch.rejected.title":
            "\xa1Demasiadas b\xfasquedas!\nNo podr\xe1s buscar n\xfameros de tel\xe9fono o ID temporalmente.",
          "talk.label.failedsearch.title": "No anda por aqu\xed.\n",
          "talk.label.favorite.title": "Mis favoritos",
          "talk.label.groups.title": "Grupos",
          "talk.label.invited.title": "Invitaciones de grupo",
          "talk.label.newfriend.title": "Amigos nuevos",
          "talk.label.nosearchresult.title": "No encontramos nada.",
          "talk.label.placehodler.title": "\xbfA qui\xe9n buscas?",
          "talk.label.recentFriends.title": "\xdaltimos chats",
          "talk.label.recommendbuddyplacehodler.title": "Buscar por ID",
          "talk.label.recommended.addFriend": "A\xf1adir",
          "talk.label.recommended.officialAccount.title":
            "Cuentas oficiales sugeridas",
          "talk.label.recommended.title": "\xbfTe suenan?",
          "talk.label.search.friends": "\xbfA qui\xe9n buscas?",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "Este usuario no anda por aqu\xed.",
          "talk.label.search.friends.phoneNumber.error":
            "Este n\xfamero no existe\no no se puede buscar.",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "A\xf1ade usuarios por su n\xfamero de tel\xe9fono registrando el tuyo primero.\n Abre LINE en tu m\xf3vil, ve a Configuraci\xf3n > Perfil, y registra tu n\xfamero.",
          "talk.label.square.title": "OpenChat",
          "talk.label.thatisyou.title": "\xbfPara qu\xe9 te vas a a\xf1adir?",
          "talk.menu.aboutgroup": "Editar grupo",
          "talk.menu.addfavorite": "\xa1A mis favoritos!",
          "talk.menu.addgroup": "Crear grupo",
          "talk.menu.block": "Bloquear",
          "talk.menu.call": "Llamar",
          "talk.menu.call.video": "Videollamada",
          "talk.menu.call.voice": "Llamada",
          "talk.menu.editname": "Cambiar nombre",
          "talk.menu.exit": "Salir",
          "talk.menu.group.call": "Llamar",
          "talk.menu.help": "Ayuda",
          "talk.menu.hide": "No mostrar",
          "talk.menu.leavegroup": "Salir",
          "talk.menu.logout": "Cerrar sesi\xf3n",
          "talk.menu.myProfile": "Perfil",
          "talk.menu.notes": "Notas",
          "talk.menu.posts": "Posts",
          "talk.menu.rejectbuddy": "Bloquear",
          "talk.menu.rejectgroup": "Rechazar",
          "talk.menu.removeFavorite": "Quitar de favoritos",
          "talk.menu.removetalkitem": "Borrar",
          "talk.menu.sendContact": "Enviar contacto",
          "talk.menu.setting": "Configuraci\xf3n",
          "talk.menu.showProfile": "Perfil",
          "talk.menu.starttalk": "Chat nuevo",
          "talk.menu.talk": "Chat",
          "talk.menu.talkbuddy": "Chat",
          "talk.menu.talkgroup": "Chats",
          "talk.menu.voip": "Llamada",
          "talk.msg.addbuddy.failed": "No se puedo a\xf1adir.",
          "talk.msg.addrecommended.failed": "No se puedo a\xf1adir.",
          "talk.msg.block.failed": "No se pudo bloquear.",
          "talk.msg.blockrecommended.failed": "No se pudo bloquear.",
          "talk.msg.del.1.n":
            "Si eliminas este chat, no tendr\xe1s acceso al historial de chat.",
          "talk.msg.del.room":
            "Si eliminas este chat, no podr\xe1s restaurar el historial de chat.",
          "talk.msg.favorite.failed": "No se pudo a\xf1adir a favoritos.",
          "talk.msg.favorite.overflow.failed":
            "Puedes a\xf1adir hasta 100 usuarios a tus favoritos.",
          "talk.msg.hide.failed": "No se pudo ocultar.",
          "talk.msg.joininvitedgroup.failed":
            "Parece que no puedes unirte al grupo.",
          "talk.msg.leavegroup.failed": "Parece que no puedes dejar el grupo.",
          "talk.msg.no.room": "Este chat ya se elimin\xf3.",
          "talk.msg.rejectinvitedgroup.failed":
            "No se pudo rechazar la invitaci\xf3n.",
          "talk.network.unreachable": "La conexi\xf3n es inestable.",
          "talk.search.hint": "Buscar mensajes, nombres",
          "talk.search.label.chatMember": "Buscar nombres",
          "talk.search.label.displayName": "Buscar por nombre",
          "talk.search.label.member.all": "\uba64\ubc84(%1)",
          "talk.search.label.member.selected": "Elegiste a %1",
          "talk.search.label.reSearch": "Buscar con estos resultados",
          "talk.search.label.reSearch.noResult": "No se puede buscar m\xe1s. ",
          "talk.search.label.textMessage": "Buscar mensajes",
          "talk.tooltip.delete": "Borrar",
          "theme.mode.guide.dark.desc":
            "Tienes activado el modo oscuro. M\xe1s opciones en Configuraci\xf3n > B\xe1sica.",
          "theme.mode.guide.desc":
            "La apariencia de tu LINE se ajust\xf3 seg\xfan la configuraci\xf3n de tu sistema. Puedes modificarlo en Configuraci\xf3n > B\xe1sica.",
          "theme.mode.guide.light.desc":
            "Ya puedes usar el modo oscuro en Configuraci\xf3n > B\xe1sica > Visualizaci\xf3n.",
          "theme.mode.guide.title": "Elige c\xf3mo ver tu LINE",
          "timeline.alert.attach": "Solo puedes adjuntar 1 archivo.",
          "timeline.alert.attach.unavailable":
            "Uno de los archivos no se puede postear. ",
          "timeline.alert.attachphoto": "Puedes adjuntar hasta 9 fotos.",
          "timeline.alert.commentmaxcount":
            "No m\xe1s de 1000 caracteres en los comentarios.",
          "timeline.alert.confirm.close": "\xbfSales sin terminar la Nota?",
          "timeline.alert.confirm.deletecomment": "\xbfBorras este comentario?",
          "timeline.alert.confirm.deletepost":
            "Tambi\xe9n se borrar\xe1n los comentarios.\n\xbfContin\xfaas?",
          "timeline.alert.confirm.deletethumb": "\xbfLa borras?",
          "timeline.alert.confirm.replacepost":
            "Est\xe1s creando un post. \xbfLo eliminas y empiezas con otro?",
          "timeline.alert.deletedpost": "Se elimin\xf3 este post.",
          "timeline.alert.discard": "Cancelar",
          "timeline.alert.error.group.delete":
            "Se descart\xf3 este p\xfablico.\nElige otro.",
          "timeline.alert.error.group.rights":
            "No tienes permisos en este grupo.\nElige otro.",
          "timeline.alert.fileMaxcount": "M\xe1ximo %n fotos o v\xeddeos.",
          "timeline.alert.fileMaxcount.plurals.one":
            "M\xe1ximo %n foto o v\xeddeo.",
          "timeline.alert.fileMaxcount.plurals.other":
            "M\xe1ximo %n fotos o v\xeddeos.",
          "timeline.alert.invalidcoverimage":
            "Va a ser que no. Este formato no es compatible.",
          "timeline.alert.mediaMaxcount":
            "Adjunta hasta 20 stickers, fotos o v\xeddeos.",
          "timeline.alert.official.addfriend":
            "A\xf1\xe1dela como Amigo para compartir sus posts. \xbfLa a\xf1ades?\n\n ",
          "timeline.alert.official.addfriend.share":
            "A\xf1\xe1dela como Amigo para compartir sus posts. \xbfLa a\xf1ades?",
          "timeline.alert.official.unblockfriend":
            "Esta cuenta oficial est\xe1 bloqueada.\nDesbloqu\xe9ala para ponercomentarios y stickers.\n\xbfLa desbloqueas?",
          "timeline.alert.official.unblockfriend.share":
            "Esta cuenta oficial est\xe1 bloqueada.\nDesbloquea la cuenta para compartir sus posts con tus Amigos.\n\xbfDesbloquear esta cuenta?",
          "timeline.alert.photoMaxsize": "Solo fotos\nhasta 20 MB.",
          "timeline.alert.photolimit": "Hasta 20 MB por foto.",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount": "M\xe1ximo %1 fotos.",
          "timeline.alert.stickerMaxcount": "No m\xe1s de %n stickers.",
          "timeline.alert.stickerMaxcount.plurals.one":
            "No m\xe1s de %n sticker.",
          "timeline.alert.stickerMaxcount.plurals.other":
            "No m\xe1s de %n stickers.",
          "timeline.alert.stickerUploadRule":
            "Solo puedes adjuntar un sticker animado o sonoro en cada post. No puedes adjuntarlos al mismo tiempo que uno normal.",
          "timeline.alert.textmaxcount": "M\xe1ximo 10 000 caracteres.",
          "timeline.alert.unblockfriend":
            "Bloqueaste esta cuenta. \xbfLa desbloqueas para compartir sus posts?",
          "timeline.alert.unblockfriend.share":
            "Bloqueaste esta cuenta. \xbfLa desbloqueas para compartir sus posts?",
          "timeline.alert.urlUploadRule": "Solo 1 enlace.",
          "timeline.alert.videoMaxLength": "Solo v\xeddeos\nde 5 minutos.",
          "timeline.alert.videoMaxsize":
            "M\xe1ximo de 200 MB\npara cada archivo de v\xeddeo.",
          "timeline.alert.videolength":
            "No puedes adjuntar v\xeddeos de m\xe1s de 5 minutos.",
          "timeline.alert.videolimit":
            "Hasta 200 MB por v\xeddeo o 5 min de duraci\xf3n.",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "No puedes adjuntar v\xeddeos de m\xe1s de 200 MB.\n",
          "timeline.alert.waitcommentdone": "Prueba de nuevo.",
          "timeline.already.remove.comment": "Ya se borr\xf3.",
          "timeline.attachlink.delete": "Borrar",
          "timeline.attachlink.hint": "Pon un enlace.",
          "timeline.attachlink.title": "Enlace",
          "timeline.comment.approval":
            "Los comentarios se mostrar\xe1n cuando se aprueben.",
          "timeline.comment.blinddbyadmin":
            "El administrador borr\xf3 este comentario.",
          "timeline.comment.delete": "Borrar",
          "timeline.comment.hint": "\xbfQu\xe9 vas a poner?",
          "timeline.comment.like": "Me gusta",
          "timeline.comment.like.cancel": "Ya no me gusta",
          "timeline.comment.loadprevious": "M\xe1s comentarios",
          "timeline.comment.photo.retry":
            "Error al cargar.\nMejor si lo intentas luego.",
          "timeline.comment.reply": "Enviar",
          "timeline.comment.stickerorphoto":
            "Los comentarios no pueden incluir m\xe1s de un sticker o foto.",
          "timeline.comment.write": "Postear",
          "timeline.common.cancel": "Cancelar",
          "timeline.common.ok": "Vale",
          "timeline.common.share": "Compartir",
          "timeline.date.beforeHour.plurals.few": "Hace %n horas",
          "timeline.date.beforeHour.plurals.many": "Hace %n horas",
          "timeline.date.beforeHour.plurals.one": "Hace %n hora",
          "timeline.date.beforeHour.plurals.other": "Hace %n horas",
          "timeline.date.beforeHour.plurals.two": "Hace %n horas",
          "timeline.date.beforeHour.plurals.zero": "Hace %n horas",
          "timeline.date.beforeMinute.plurals.few": "Hace %n minutos",
          "timeline.date.beforeMinute.plurals.many": "Hace %n minutos",
          "timeline.date.beforeMinute.plurals.one": "Hace %n minuto",
          "timeline.date.beforeMinute.plurals.other": "Hace %n minutos",
          "timeline.date.beforeMinute.plurals.two": "Hace %n minutos",
          "timeline.date.beforeMinute.plurals.zero": "Hace %n minutos",
          "timeline.date.beforeYesterday": "Anteayer a las %1",
          "timeline.date.justNow": "Justo ahora",
          "timeline.date.yesterday": "Ayer a las %1",
          "timeline.emptypost.networkerror":
            "Hubo un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "timeline.emptypost.other": "No hay posts.",
          "timeline.emptypost.unsupported":
            "Esta cuenta oficial solo te env\xeda mensajes de chat.",
          "timeline.error.and.retry":
            "No se pudo procesar por un error temporal.\nInt\xe9ntalo de nuevo.",
          "timeline.error.attach.popupSticker":
            "El sticker saldr\xe1 sin animaci\xf3n ni sonido.",
          "timeline.error.cannot.access.file":
            "Algunas fotos no se pudieron cargar porque\nlas originales se eliminaron del PC\no sobrepasan los 20 MB.",
          "timeline.error.list.load.retry":
            "\xa1Vaya! No se pudo cargar.\nInt\xe9ntalo de nuevo.",
          "timeline.footer.comment": "Comentar",
          "timeline.footer.like": "Me gusta",
          "timeline.groupPanel.startgroup": "\xa1Crea tus propios grupos!",
          "timeline.groupPanel.startgroup.desc": "Pon notas y crea \xe1lbumes.",
          "timeline.label.nosearchresult.title": "No encontramos nada.",
          "timeline.like.count.one": "%1 Me gusta",
          "timeline.like.count.other": "%1 Me gusta",
          "timeline.loading.examine.time": "Planificaci\xf3n de mantenimiento",
          "timeline.loading.examine.timeline":
            "Estamos mejorando la funci\xf3n de %1.",
          "timeline.loading.neednewversion": "Actualiza LINE para verlo.",
          "timeline.loading.networkerror":
            "Hubo un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "timeline.loading.retry": "Cargar",
          "timeline.menu.sharetotalk": "Mandar por chat",
          "timeline.mergedposts.detail": "M\xe1s",
          "timeline.no": "No",
          "timeline.note.popupdesc.sharenote":
            "\xbfCompartes esta Nota en el chat?",
          "timeline.noti.content.NC_1001_1": "%1 puso una nota.",
          "timeline.noti.content.NC_1001_2": "%1 y %2 pusieron notas.",
          "timeline.noti.content.NC_1001_3":
            "%1, %2 y %3 m\xe1s pusieron notas.",
          "timeline.noti.content.NC_1002_1": "%1 coment\xf3 tu post.",
          "timeline.noti.content.NC_1002_2": "%1 y %2 comentaron tu post.",
          "timeline.noti.content.NC_1002_3":
            "%1, %2 y %3 m\xe1s comentaron tu post.",
          "timeline.noti.content.NC_1003_1": "%1 te mencion\xf3.",
          "timeline.noti.content.NC_1003_2": "%1 y %2 te mencionaron.",
          "timeline.noti.content.NC_1003_3":
            "%1, %2 y %3 m\xe1s te mencionaron.",
          "timeline.noti.content.NC_1004_1": "A %1 le gust\xf3 tu post.",
          "timeline.noti.content.NC_1004_2": "A %1 y %2 les gust\xf3 tu post.",
          "timeline.noti.content.NC_1004_3":
            "A %1, %2 y %3 m\xe1s les gust\xf3 tu post.",
          "timeline.noti.content.NC_2001_1": "%1 cre\xf3 un \xe1lbum.",
          "timeline.noti.content.NC_2001_2": "%1 y %2 crearon \xe1lbumes.",
          "timeline.noti.content.NC_2001_3":
            "%1, %2 y %3 m\xe1s crearon \xe1lbumes.",
          "timeline.noti.content.NC_2002_1": "%1 puso fotos al \xe1lbum.",
          "timeline.noti.content.NC_2002_2":
            "%1 y %2 pusieron fotos al \xe1lbum.",
          "timeline.noti.content.NC_2002_3":
            "%1, %2 y %3 m\xe1s pusieron fotos al \xe1lbum.",
          "timeline.noti.content.NC_3001_1": "%1 coment\xf3 tu post.",
          "timeline.noti.content.NC_3001_2": "%1 y %2 comentaron tu post.",
          "timeline.noti.content.NC_3001_3":
            "%1, %2 y %3 m\xe1s comentaron tu post.",
          "timeline.noti.content.NC_3002_1": "%1 te mencion\xf3.",
          "timeline.noti.content.NC_3002_2": "%1 y %2 te mencionaron.",
          "timeline.noti.content.NC_3002_3":
            "%1, %2 y %3 m\xe1s te mencionaron.",
          "timeline.noti.content.NC_3003_1": "A %1 le gust\xf3 tu post.",
          "timeline.noti.content.NC_3003_2": "A %1 y %2 les gust\xf3 tu post.",
          "timeline.noti.content.NC_3003_3":
            "A %1, %2 y %3 m\xe1s les gust\xf3 tu post.",
          "timeline.noti.content.NC_4001_1": "%1 se uni\xf3 al grupo.",
          "timeline.noti.content.NC_4002_1": "%1 comparti\xf3 tu post.",
          "timeline.noti.content.NC_UPDATE": "Actualiza tu LINE primero.",
          "timeline.noti.empty": "Sin notificaciones nuevas.",
          "timeline.noti.error":
            "No se cargaron las notificaciones.\nInt\xe9ntalo luego. ",
          "timeline.noti.home": "Inicio",
          "timeline.oamerge.feed.title": "Tus cuentas oficiales",
          "timeline.oamerge.title": "Tus cuentas oficiales",
          "timeline.officialprofile.networkerror":
            "Hubo un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "timeline.officialprofile.title": "Perfil",
          "timeline.original.open": "Ver p\xe1gina original",
          "timeline.poppost.counttime.hour.one": "en %n hora",
          "timeline.poppost.counttime.hour.other": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.few": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.many": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.one": "en %n hora",
          "timeline.poppost.counttime.hour.plurals.other": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.two": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.zero": "en %n horas",
          "timeline.poppost.counttime.min.one": "en %n minuto",
          "timeline.poppost.counttime.min.other": "en %n minutos",
          "timeline.poppost.counttime.min.plurals.few": "en %n minutos",
          "timeline.poppost.counttime.min.plurals.many": "en %n minutos",
          "timeline.poppost.counttime.min.plurals.one": "en %n minuto",
          "timeline.poppost.counttime.min.plurals.other": "en %n minutos",
          "timeline.poppost.counttime.min.plurals.two": "en %n minutos",
          "timeline.poppost.counttime.min.plurals.zero": "en %n minutos",
          "timeline.poppost.counttime.soon": "En 1 minuto",
          "timeline.poppost.tooltip.hour.one":
            "Este post se eliminar\xe1 en %n hora.",
          "timeline.poppost.tooltip.hour.other":
            "Este post se eliminar\xe1 en %n horas.",
          "timeline.poppost.tooltip.hour.plurals.few":
            "Este post se eliminar\xe1 en %n horas.",
          "timeline.poppost.tooltip.hour.plurals.many":
            "Este post se eliminar\xe1 en %d horas.",
          "timeline.poppost.tooltip.hour.plurals.one":
            "Este post se eliminar\xe1 en %n hora.",
          "timeline.poppost.tooltip.hour.plurals.other":
            "Este post se eliminar\xe1 en %n horas.",
          "timeline.poppost.tooltip.hour.plurals.two":
            "Este post se eliminar\xe1 en %n horas.",
          "timeline.poppost.tooltip.hour.plurals.zero":
            "Este post se eliminar\xe1 en %n horas.",
          "timeline.poppost.tooltip.min.one":
            "Este post se eliminar\xe1 en %n minuto.",
          "timeline.poppost.tooltip.min.other":
            "Este post se eliminar\xe1 en %n minutos.",
          "timeline.poppost.tooltip.min.plurals.few":
            "Este post se eliminar\xe1 en %n minutos.",
          "timeline.poppost.tooltip.min.plurals.many":
            "Este post se eliminar\xe1 en %n minutos.",
          "timeline.poppost.tooltip.min.plurals.one":
            "Este post se eliminar\xe1 en %n minuto.",
          "timeline.poppost.tooltip.min.plurals.other":
            "Este post se eliminar\xe1 en %n minutos.",
          "timeline.poppost.tooltip.min.plurals.two":
            "Este post se eliminar\xe1 en %n minutos.",
          "timeline.poppost.tooltip.min.plurals.zero":
            "Este post se eliminar\xe1 en %n minutos.",
          "timeline.poppost.tooltip.soon":
            "Este post se eliminar\xe1 en 1 minuto.",
          "timeline.post.attach.drag.guide":
            "Tambi\xe9n puedes arrastrar y soltar para a\xf1adir fotos y v\xeddeos.",
          "timeline.post.attach.drag.guide.premium":
            "Tambi\xe9n puedes arrastrar y soltar para a\xf1adir fotos.",
          "timeline.post.attach.draghere":
            "Arrastrar y suelta para a\xf1adir fotos y v\xeddeos.",
          "timeline.post.attach.draghere.premium":
            "Arrastrar y suelta para a\xf1adir fotos.",
          "timeline.post.delete": "Borrar",
          "timeline.post.deleted": "Este post se elimin\xf3.",
          "timeline.post.deletedbyadmin":
            "El administrador elimin\xf3 este post.",
          "timeline.post.done": "Listo",
          "timeline.post.edit": "Editar",
          "timeline.post.edit.desc": "\xbfSales sin guardar los cambios?",
          "timeline.post.friends": "Mis Amigos",
          "timeline.post.friends.detail":
            "Solo los Amigos de %1 pueden verlo.\n",
          "timeline.post.grid.more": "+%n",
          "timeline.post.hashtag": "Hashtags",
          "timeline.post.hashtag.guide.title": "A\xf1ade #etiquetas",
          "timeline.post.hashtag.results.related": "Similar",
          "timeline.post.hint": "\xbfQu\xe9 hay de nuevo?",
          "timeline.post.keep": "Keep",
          "timeline.post.likeshare.cancel": "No compartirlo",
          "timeline.post.likeshare.canceled":
            "El post dej\xf3 de ser compartido.",
          "timeline.post.likeshare.done":
            "Ya tiene Me gusta y est\xe1 compartido.\xa0 ",
          "timeline.post.mention.alert":
            "Se puede mencionar a un m\xe1ximo de 20 personas.",
          "timeline.post.mention.empty.description":
            "\"<![CDATA[Pon <font color='#4166b1'>@nombre de tu Amigo</font> para mencionar a tus Amigos.\nAs\xed recibir\xe1n una notificaci\xf3n instant\xe1nea y ver\xe1n tu post.]]>\"",
          "timeline.post.mention.empty.title":
            'Menciona a los tuyos con una arroba "@".',
          "timeline.post.mention.setting.edit.alert":
            "Si cambias los ajustes de privacidad de este post, estos usuarios ya no podr\xe1n verlo. \xbfContin\xfaas?",
          "timeline.post.newpost": "Posts nuevos",
          "timeline.post.onlyme": "Solo yo",
          "timeline.post.public": "P\xfablico a todos",
          "timeline.post.public.desc": "Cualquiera puede ver los posts.",
          "timeline.post.public.sharetotimeline": "En Timeline",
          "timeline.post.scope.group": "Solos los de este grupo pueden verla.",
          "timeline.post.scope.manToMan": "Solo %1 y t\xfa pod\xe9is verla.",
          "timeline.post.seemore": "M\xe1s",
          "timeline.post.share": "Compartir",
          "timeline.post.sharedchanged":
            "Cambiaron la privacidad de este post por lo que no se puede mostrar.",
          "timeline.post.shareddeleted":
            "Este post se elimin\xf3 o quien lo public\xf3 ya no usa LINE.",
          "timeline.post.sorting.option.ranking": "\ub7ad\ud0b9\uc21c",
          "timeline.post.sorting.option.time": "\uc2dc\uac04\uc21c",
          "timeline.post.write": "Postear",
          "timeline.publicgroup.emptymember": "No se han a\xf1adido Amigos.",
          "timeline.publicgroup.group": "P\xfablicos",
          "timeline.publicgroup.group.empty": "No tienes p\xfablicos.",
          "timeline.publicgroup.linefriends": "Amigos",
          "timeline.publicgroup.linefriends.desc":
            "Los Amigos que pueden ver mi Inicio",
          "timeline.publicgroup.nobodysee": "Nadie puede verlo.",
          "timeline.publicgroup.sharelist": "Mis P\xfablicos",
          "timeline.publicgroup.title.detail": "\xbfQui\xe9n puede verlo?",
          "timeline.publicgroup.title.post": "Privacidad de los posts",
          "timeline.recommend": "Sugerencias",
          "timeline.report.desc":
            "Se enviar\xe1n los detalles del usuario pertinente, los 100 mensajes de chat m\xe1s recientes o el post indicado.",
          "timeline.report.done": "Se envi\xf3 tu informe.",
          "timeline.report.reason.advertising": "Publicidad",
          "timeline.report.reason.genderHarassment": "Acoso sexual",
          "timeline.report.reason.harassment": "Hostigamiento",
          "timeline.report.reason.other": "Otros motivos",
          "timeline.report.selectReason":
            "\xbfPor qu\xe9 env\xedas este informe?",
          "timeline.report.title": "Denunciar",
          "timeline.request.failed.likeshare.status":
            "Error al cargar el contenido.",
          "timeline.request.failed.timeline": "Error al cargar este post.",
          "timeline.request.failed.url":
            "No se puede cargar este enlace.\nPrueba con otro.",
          "timeline.request.failed.user": "Parece que no anda por aqu\xed.",
          "timeline.retry": "Reintentar",
          "timeline.setting.autoopen":
            "Comp\xe1rtelo siempre con los amigos nuevos.",
          "timeline.setting.buddylist.empty": "No tienes Amigos en LINE.",
          "timeline.setting.desc": "Mis p\xfablicos.",
          "timeline.setting.desc2": "\xbfA qui\xe9n muestras tu Inicio?",
          "timeline.setting.feed.ranking": "Ordenar posts",
          "timeline.setting.feed.ranking.option": "Priorizar posts",
          "timeline.setting.label.blocked": "A este no",
          "timeline.setting.label.unblocked": "A este s\xed",
          "timeline.setting.usetoast": "Notificar actualizaciones de LINE VOOM",
          "timeline.share.copyUrl": "Copiar link",
          "timeline.share.copyUrl.toast": "Se copi\xf3 al portapapeles.",
          "timeline.sharetohome.hint": "Escribe tu mensaje.",
          "timeline.sharetotalk.comfirm.desc": '\xbfLo env\xedas a "%1"?',
          "timeline.sharetotalk.empty.chat": "No hay chats para elegir.",
          "timeline.sharetotalk.empty.friend": "No hay Amigos para elegir",
          "timeline.sharetotalk.empty.group": "No hay grupos para elegir.",
          "timeline.sharetotalk.tab.chat": "Chats",
          "timeline.sharetotalk.tab.friend": "Amigos",
          "timeline.sharetotalk.tab.group": "Grupos",
          "timeline.sharetotalk.title": "Mandar por chat",
          "timeline.system.check.wait":
            "Estamos haciendo unas mejoras.\nInt\xe9ntalo luego.",
          "timeline.time.afternoon": "p. m.",
          "timeline.time.morning": "a. m.",
          "timeline.video.popup.waiting":
            "Codificando...\nMejor si lo intentas luego.",
          "timeline.yes": "S\xed",
          "timline.report.policy.desc":
            "Se enviar\xe1n los detalles del usuario pertinente, los 20 mensajes de chat m\xe1s recientes o el post indicado.",
          "unsupported.file.checkbox": "Comprimir y enviar",
          "unsupported.file.common":
            "Los archivos con formatos no compatibles se comprimir\xe1n y enviar\xe1n en formato zip.",
          "unsupported.file.compress.fail": "No se pudo comprimir el archivo.",
          "unsupported.file.compressing": "Comprimiendo... ",
          "unsupported.file.dontshow": "No mostrar m\xe1s",
          "unsupported.file.multi":
            "Algunos archivos contienen un formato no compatible. \xbfLos comprimes y env\xedas?",
          "unsupported.file.single":
            "El archivo contiene un formato no compatible. \xbfLo comprimes y env\xedas?",
          "update.msg.check.security1":
            "Actualizando protocolos de seguridad...",
          "update.msg.check.security2": "Espera.",
          "update.summary.url":
            "http://openapis.jboard.naver.jp/mobile/document/line_desktop/EN/997",
          "upgradegroupinvite.button.requireinvites": "Solicitar invitaci\xf3n",
          "upgradegroupinvite.popup.desc.toomanyfriends":
            "En los grupos con m\xe1s de 100 participantes, los nuevos tienen que aceptar una invitaci\xf3n para poder unirse.\nSi no quieres usar esta funci\xf3n, mant\xe9n el l\xedmite de participantes inferior a 100.",
          "upgradegroupinvite.popup.title.toomanyfriends":
            "\xbfSolicitas a los miembros aceptar invitaciones para unirse?",
          "upic.btn.cancel.title": "Cancelar",
          "upic.btn.find.title": "Examinar",
          "upic.btn.ok.title": "Vale",
          "upic.label.desc.title":
            "Solo archivos JPG, JPEG, PNG, GIF y BMP. \n",
          "upic.label.upic.title": "Registrar imagen de perfil",
          "upic.msg.cantFindFile": "No se encontr\xf3 el archivo.",
          "upic.msg.not.image": "Solo puedes enviar im\xe1genes.",
          "upic.msg.select": "Selecciona tu foto del perfil.",
          "upic.msg.sizeExceeds": "No m\xe1s de 20 MB.",
          "user.report.error":
            "Ya no existe este mensaje, no se puede reportar.",
          "user.report.policy.desc":
            "Se enviar\xe1n los detalles del usuario pertinente, los 10 mensajes de chat m\xe1s recientes o el post indicado.Reporting a chat or post will send the relevant user's info along with your 10 most recent chat messages with them or the post in question.",
          "user.report.question": "\xbfQuieres bloquear a este usuario?",
          "user.search.placeholder": "Buscar por nombre",
          "user.warning.investmentfraud":
            "Cuidado con los fraudes que usan LINE.",
          "user.warning.invitedtogroup":
            "<![CDATA[<b><font color='%1'>%2</font></b> te invit\xf3 a un grupo.\n<font color='#FF3A44'>Si te parece una invitaci\xf3n sospechosa, bloquea y reporta dicha cuenta.</font>]]>",
          "user.warning.spammer": "No est\xe1 en tu lista de Amigos.",
          "user.warning.spammer.group":
            '%1 te invit\xf3 a este grupo. Si crees que puede causar problemas, pulsa "Denunciar".',
          "videoProfile.error.fileType":
            "Este formato es incompatible. Prueba con otro.",
          "videoProfile.error.lessThenOneSec":
            "Tienes que grabar m\xe1s de 1 segundo.",
          "viewer.alert.desc.delete": "\xbfLo eliminas?",
          "viewer.alert.desc.fullsize":
            "Pulsa Esc para salir de pantalla completa.",
          "viewer.alert.desc.mustinstallplugin":
            "Necesitas un plugin para ver fotos, v\xeddeos y GIFs en el visor multimedia. \xbfDescargar ahora?",
          "viewer.alert.image.expired.previewinstead":
            "El archivo ya no est\xe1 disponible. Solo puedes ver una miniatura del mismo.",
          "viewer.alert.video.expired":
            "No se puede reproducir el v\xeddeo porque excedi\xf3 el per\xedodo de almacenamiento.",
          "viewer.contextmenu.copy": "Copiar",
          "viewer.contextmenu.forward": "Compartir",
          "viewer.contextmenu.keep": "Guardar en Keep",
          "viewer.contextmenu.keepmemo": "Enviar a Keep Memo",
          "viewer.contextmenu.saveas": "Guardar como",
          "viewer.contextmenu.scanqr": "Escanear c\xf3digo QR",
          "viewer.contextmenu.scantext": "Scan text",
          "viewer.copy.toast.copied": "Se copi\xf3 al portapapeles.",
          "viewer.error.media.download.fail": "Vaya, no se pudo guardar.\n",
          "viewer.error.video.common":
            "Vaya, no se pudo reproducir por un error.",
          "viewer.error.video.network":
            "Un error de conexi\xf3n o servidor impidi\xf3 la reproducci\xf3n.\nInt\xe9ntalo de nuevo.",
          "viewer.error.video.transient":
            "Un error temporal impidi\xf3 la reproducci\xf3n.\nInt\xe9ntalo de nuevo.",
          "viewer.keep.toast.saved": "\xa1Se guard\xf3 en Keep!",
          "viewer.menu.edit": "Editar",
          "viewer.menu.forward": "Compartir",
          "viewer.menu.info.name": "Nombre archivo",
          "viewer.menu.keep": "Guardar en Keep",
          "viewer.menu.keepmemo": "Enviar a Keep Memo",
          "viewer.menu.more.delete": "Borrar",
          "viewer.menu.more.info": "Info archivo",
          "viewer.menu.more.speed": "Velocidad",
          "viewer.menu.openfolder": "Abrir carpeta",
          "viewer.menu.originalsize": "Tama\xf1o real",
          "viewer.menu.rotate": "Girar",
          "viewer.menu.saveas": "Guardar como",
          "viewer.menu.scanqr": "Escanear c\xf3digo QR",
          "viewer.menu.scantext": "Scan text",
          "viewer.menu.showalbums": "Mostrar todo",
          "viewer.menu.showallcontents": "Mostrar todo",
          "viewer.menu.thumbnail.expand": "Mostrar miniaturas",
          "viewer.menu.thumbnail.fold": "Ocultar miniaturas",
          "viewer.menu.video.pause": "Detener",
          "viewer.menu.video.play": "Reproducir",
          "viewer.menu.video.replay": "Repetir",
          "viewer.menu.video.stop": "Parar",
          "viewer.menu.video.volume": "Volumen",
          "viewer.menu.zoomin": "Acercar",
          "viewer.menu.zoomout": "Alejar",
          "viewer.play.toast.speaker.beingconnected": "Cambiando de altavoz.",
          "viewer.popup.info.created": "Se cre\xf3 el:",
          "viewer.popup.info.filesize": "Tama\xf1o:",
          "viewer.popup.info.from": "De:",
          "viewer.popup.info.resolution": "Resoluci\xf3n:",
          "viewer.popup.info.saved": "Se guard\xf3 el:",
          "viewer.saveas.toast.saved": "Se complet\xf3 la descarga.",
          "viewer.tooltip.window.close": "Cerrar",
          "viewer.tooltip.window.maximize": "M\xe1x.",
          "viewer.tooltip.window.minimize": "Minimizar",
          "viewer.tooltip.window.restore": "Recuperar",
          "voip.beautyfeature.button.clearall": "Resetear",
          "voip.beautyfeature.popupbutton.cancel": "Cancelar",
          "voip.beautyfeature.popupbutton.clearall": "Resetear",
          "voip.beautyfeature.popupdesc.clearfaceeffects":
            "Resetea todos los efectos faciales para usar las funciones de belleza.",
          "voip.beautyfeature.toggle.darkeneyebrows": "Cejas tonalidad",
          "voip.beautyfeature.toggle.fillinlips": "Relleno labios",
          "voip.beautyfeature.toggle.resizeeyes": "Tama\xf1o ojos",
          "voip.beautyfeature.toggle.revert": "Predeterminado",
          "voip.beautyfeature.toggle.slimjawline": "L\xednea mand\xedbula",
          "voip.beautyfeature.toggle.slimnose": "Retoque nariz",
          "voip.beautyfeature.toggle.smoothcomplexion": "Complexi\xf3n",
          "voip.button.label.call": "Contestar",
          "voip.button.label.disconnect": "Colgar",
          "voip.button.label.voiceonly": "Contestar solo con voz",
          "voip.call.tooltip.cameraunavailable": "C\xe1mara no disponible",
          "voip.call.tooltip.microphoneunavailable":
            "Micr\xf3fono no disponible",
          "voip.connect.camera.alert": "C\xe1mara detectada. \xbfLa activas?",
          "voip.connect.mic.alert": "Micr\xf3fono detectado. \xbfLo activas?",
          "voip.desc.calling": "Llamando\u2026",
          "voip.desc.calling.failed":
            "No se pudo llamar a %1. Ll\xe1male m\xe1s tarde.(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "Est\xe1s llamando con otro dispositivo.",
          "voip.desc.calling.failed.contact.busy":
            "%1 est\xe1 en una llamada.\nInt\xe9ntalo luego.",
          "voip.desc.calling.failed.maintance":
            "Las llamadas de voz para la versi\xf3n de ordenador de LINEno funcionan temporalmente.\nMejor si lo intentas de nuevo m\xe1s tarde.\nAgradecemos tu comprensi\xf3n.",
          "voip.desc.calling.failed.need.audio":
            "\xbfY la tarjeta de sonido?\nAseg\xfarate de que est\xe1 bien.",
          "voip.desc.calling.failed.need.device":
            "No se detect\xf3 ni tu micr\xf3fono ni los altavoces.\nCon\xe9ctalos y vuelve a intentarlo.",
          "voip.desc.calling.failed.need.devicesetting":
            "Your microphone or speaker is turned off. Please check your settings and try calling again.",
          "voip.desc.calling.failed.need.mic":
            "\xbfY tu micr\xf3fono?\nAseg\xfarate de que lo tienes bien.",
          "voip.desc.calling.failed.need.oscamera":
            "No se puede usar la c\xe1mara. Permite el acceso a la c\xe1mara de tu dispositivo.",
          "voip.desc.calling.failed.need.osmic":
            "No se puede usar el micr\xf3fono. Permite el acceso al micr\xf3fono de tu dispositivo.",
          "voip.desc.calling.failed.need.ospeaker":
            "Unable to use speaker. Please enable your microphone in the Control Panel.",
          "voip.desc.calling.failed.need.spk":
            "\xbfY los altavoces?\nAseg\xfarate de que est\xe1n conectados.",
          "voip.desc.calling.failed.need.update":
            "Actualiza LINE en tu m\xf3vil\npara usar la funci\xf3n de llamadas de voz.\n",
          "voip.desc.calling.failed.no.accept":
            "No responde.\nMejor si lo intentas m\xe1s tarde.",
          "voip.desc.calling.failed.other.device.use":
            "Est\xe1s llamando con otro dispositivo.",
          "voip.desc.calling.failed.peer":
            "%1 no recibe tu llamada porque\nsu versi\xf3n de LINE no es compatible.\n",
          "voip.desc.calling.video": "Contectando...",
          "voip.desc.camerausage":
            "Para hacer videollamadas dale acceso a LINE a tu c\xe1mara.",
          "voip.desc.camerausage.maconly":
            "Para usar las videollamadas, LINE necesita acceso a tu c\xe1mara desde Ajustes > Seguridad y privacidad > Privacidad.",
          "voip.desc.connecting": "Conectando\u2026",
          "voip.desc.makeCall.Failed.network":
            "No se puede llamar porque la conexi\xf3n es inestable.\nPor favor, int\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.desc.mic.failed":
            "Parece que hay un problema con tu micr\xf3fono.",
          "voip.desc.microphoneusage":
            "Para hacer videollamadas dale acceso a LINE a tu micr\xf3fono.",
          "voip.desc.microphoneusage.maconly":
            "Para usar las llamadas y videollamadas, LINE necesita acceso a tu micr\xf3fono desde Ajustes > Seguridad y privacidad > Privacidad.",
          "voip.desc.ringing": "Te est\xe1n llamando\u2026",
          "voip.desc.ringing.video": "Recibiendo videollamada...",
          "voip.desc.speaker.failed":
            "Parece que hay un problema con tu altavoz.",
          "voip.disconnect.camera.entry.alert":
            "\xbfTe unes a la videollamada? No se te ver\xe1 porque parece que no tienes una c\xe1mara.",
          "voip.disconnect.camera.error": "No se encontr\xf3 tu c\xe1mara.",
          "voip.disconnect.mic.entry.alert":
            "\xbfTe unes a la videollamada? No se te oir\xe1 porque parece que no tienes micr\xf3fono.",
          "voip.disconnect.mic.entry.alert.audio":
            "No se te oir\xe1 porque parece que no tienes micr\xf3fono. \xbfTe unes de todas formas a la llamada?",
          "voip.disconnect.mic.error": "No se encontr\xf3 tu micr\xf3fono.",
          "voip.disconnect.micncam.entry.alert":
            "\xbfTe unes a la videollamada? No se te oir\xe1 ni ver\xe1 porque parece que no tienes micr\xf3fono ni c\xe1mara.",
          "voip.effect.guide.adjust.effect": "Ajusta el efecto de belleza.",
          "voip.effect.guide.detect.face": "Que se vea bien tu rostro.",
          "voip.effect.guide.extra.001": "Prueba este efecto con tu gente.",
          "voip.effect.guide.extra.006":
            "Mueve tu cabeza de izquierda a derecha.",
          "voip.effect.guide.extra.011": "Sonr\xede.",
          "voip.effect.guide.extra.012":
            "Ajusta la intensidad de los efectos con la barra.",
          "voip.effect.guide.eye.blink": "Parpadea.",
          "voip.effect.guide.mouth.open": "Abre la boca.",
          "voip.error.init.failed.callee":
            "%1 te est\xe1 llamando.\nDebido al estado de tu ordenador,\nse puede cerrar esta aplicaci\xf3n si se hace una llamada.",
          "voip.error.init.failed.caller":
            "Debido al estado de tu ordenador, se puede cerrar esta aplicaci\xf3n\nsi llamas.",
          "voip.label.create.title": "Llamada",
          "voip.label.mic": "Micr\xf3fono",
          "voip.label.speaker": "Altavoz",
          "voip.label.video": "Videollamada",
          "voip.label.video.cameraon": "Activar",
          "voip.label.video.local.cameraOff": "Apagaste la c\xe1mara.",
          "voip.label.video.local.cameraOn": "Encendiste la c\xe1mara.",
          "voip.label.video.local.noCamera":
            "\xbfY la c\xe1mara? \nNo podr\xe1n verte.",
          "voip.label.video.low.quality": "La conexi\xf3n es inestable.",
          "voip.label.video.remote.cameraOff":
            "Tu amigo apag\xf3 su c\xe1mara.",
          "voip.label.video.remote.cameraOn": "Apagaron la c\xe1mara.",
          "voip.label.video.remote.noCamera":
            "No tiene una c\xe1mara,\no hay problemas para recibir su v\xeddeo.",
          "voip.label.video.ringing": "\xbfNos vemos?",
          "voip.label.video.title": "Videollamada con %1",
          "voip.media.unsupported.alert.update":
            "%1 est\xe1 compartiendo su pantalla. Actualiza tu LINE para ver su pantalla.",
          "voip.msg.already.during.call": "Est\xe1s llamando desde otro chat.",
          "voip.msg.bad.connection": "La conexi\xf3n es inestable.",
          "voip.msg.bad.connection.failover": "Conectando de nuevo...",
          "voip.msg.error.no.audio.source":
            "La llamada se cort\xf3 por un problema con el micr\xf3fono. Intenta llamar de nuevo m\xe1s tarde.",
          "voip.msg.error.no.audio.tx.stream":
            "Se produjo un error.\nMejor si lo intentas de nuevo m\xe1s tarde.",
          "voip.msg.network.unstable": "La conexi\xf3n es inestable.",
          "voip.msg.not.avalable.during.call":
            "No se puede usar en una llamada.",
          "voip.msg.peer.no.audio.source":
            "Ten\xe9is problemas con el micr\xf3fono y la llamada se cort\xf3. Intenta llamar de nuevo m\xe1s tarde.",
          "voip.msg.send.freeCall": "Entonces llamas a %1, \xbfverdad?",
          "voip.msg.send.videoCall": "\xbfQuieres verte con %1?",
          "voip.msg.switch.to.video.noCamera":
            "No se mostrar\xe1 tu v\xeddeo porque no se detect\xf3 una c\xe1mara. \xbfAceptas la videollamada?",
          "voip.msg.video.camera.unavailable":
            "Tu ca\u0301mara no es compatible.\nSelecciona otra en Configuracio\u0301n > Llamadas. Puedes llamar y recibir llamadas aunque no tengas una ca\u0301mara.",
          "voip.msg.video.term.device.control":
            "Se cort\xf3 la videollamada.\nCambiando a llamada de voz.",
          "voip.msg.video.term.device.interrupted":
            "Tu Amigo tiene la c\xe1mara apagada.",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "No puedes hacer videollamadas por un error temporal.\nInt\xe9ntalo luego o haz una llamada de voz.",
          "voip.msg.video.term.overload.video.changing.failed":
            "No puedes hacer videollamadas debido a un error temporal.\nMejor si lo intentas de nuevo m\xe1s tarde.",
          "voip.msg.video.term.unknown":
            "Se produjo un error.\nInt\xe9ntalo luego.",
          "voip.msg.video.term.unstable": "La conexi\xf3n no es buena.",
          "voip.msg.video.term.unsupported.device.video":
            "No se pudo hacer la videollamada.\nTu Amigo no tiene la \xfaltima versi\xf3n de LINE\no su dispositivo no es compatible con las videollamadas.",
          "voip.msg.video.term.unsupported.device.voice":
            "Est\xe1s en llamada de voz.\n\xbfTu Amigo tiene la \xfaltima versi\xf3n de LINE\ny su m\xf3vil es compatible con las videollamadas?",
          "voip.msg.warning.close": "\xbfCuelgas?",
          "voip.msg.warning.groupclose": "\xbfSales de esta llamada?",
          "voip.noisecanceling.desc.guide":
            "La cancelaci\xf3n de ruido est\xe1 activada para eliminar el ruido de fondo.",
          "voip.noisecanceling.popup.desc":
            "Se aplicar\xe1 en la siguiente llamada. Para aplicarlo en esta, reinicia la llamada.",
          "voip.noisecanceling.tooltip.off": "Activar cancelaci\xf3n de ruido",
          "voip.noisecanceling.tooltip.on":
            "Desactivar cancelaci\xf3n de ruido",
          "voip.popup.end": "Colgar",
          "voip.popup.start": "Empezar",
          "voip.screen.share.remove.monitor":
            "Se termin\xf3 la llamada al descontectarse el monitor.",
          "voip.screenshare.button.zoomin": "Acercar",
          "voip.screenshare.button.zoomout": "Alejar",
          "voip.screenshare.button.zoomreset": "Resetear zoom",
          "voip.screenshare.desc.pause": "Se par\xf3 compartir v\xeddeo.",
          "voip.screenshare.desc.pause.tooltip":
            "Compartir v\xeddeo se para cuando minimizas, cambias el tama\xf1o o mueves la pantalla compartida.",
          "voip.screenshare.error.closeapp": "Ya se cerr\xf3 esta pantalla.",
          "voip.screenshare.index.screen": "Pantalla",
          "voip.screenshare.index.window": "Window",
          "voip.screenshare.option.optimizevideoclips":
            "Optimizar para videoclips",
          "voip.screenshare.tooltip.fullscreen": "Pantalla %1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "Optimiza la funci\xf3n compartir pantalla para videoclips m\xe1s fluidos.",
          "voip.tooltip.callsetting": "Ajustes llamada",
          "voip.tooltip.camera.off": "Apagar\nc\xe1mara",
          "voip.tooltip.camera.on": "Encender\nc\xe1mara",
          "voip.tooltip.chat": "Chat",
          "voip.tooltip.echocanceloff": "Desactiva Cancelaci\xf3n de eco",
          "voip.tooltip.echocancelon": "Activa Cancelaci\xf3n de eco",
          "voip.tooltip.end.call": "Colgar",
          "voip.tooltip.end.groupmeetingcall": "Salir",
          "voip.tooltip.fullhd":
            'Calidad de audio m\xe1xima con "Full HD voice" en verde.',
          "voip.tooltip.mic.off": "Silenciar",
          "voip.tooltip.mic.off.muteronguide": "Activa tu micr\xf3fono.",
          "voip.tooltip.mic.off.spacebartoast":
            "Tienes el micr\xf3fono apagado. Deja pulsado en la barra espaciadora para activarlo.",
          "voip.tooltip.mic.on": "Av\xedsame",
          "voip.tooltip.microphone.autovolume": "Volumen ajuste autom\xe1tico",
          "voip.tooltip.onscreentool.clearall": "Borrar todo",
          "voip.tooltip.onscreentool.eraser": "Goma",
          "voip.tooltip.onscreentool.off": "Cerrar herramientas",
          "voip.tooltip.onscreentool.on": "Abrir herramientas",
          "voip.tooltip.onscreentool.pen": "L\xe1piz",
          "voip.tooltip.onscreentool.pointer": "Puntero",
          "voip.tooltip.onscreentool.redo": "Rehacer",
          "voip.tooltip.onscreentool.select": "Mover",
          "voip.tooltip.onscreentool.stamp": "Stamp",
          "voip.tooltip.onscreentool.undo": "Deshacer",
          "voip.tooltip.screen.share": "Compartir pantalla",
          "voip.tooltip.screen.share.off": "Dejar de compartir",
          "voip.tooltip.screen.share.start":
            "Comparte tu pantalla en las videollamadas.",
          "voip.tooltip.screen.share.stop":
            "Se est\xe1 compartiendo tu pantalla. Haz clic en el icono para dejar de compartirla.",
          "voip.tooltip.speaker.off": "Apagar sonido ",
          "voip.tooltip.speaker.on": "Encender sonido",
          "voip.tooltip.switch.to.video": "Cambiar a videollamada",
          "voip.tooltip.video.camera": "Cambiar c\xe1mara",
          "voip.tooltip.video.camera.select": "Elegir c\xe1mara",
          "voip.tooltip.video.fullscreen": "Pantalla completa",
          "voip.tooltip.video.fullscreen.restore":
            "Restaurar ventana al tama\xf1o previo",
          "voip.tooltip.video.pin": "Ventana arriba",
          "voip.tooltip.video.pinoff": "Quitar ventana siempre arriba",
          "voip.tooltip.video.speaker": "Cambiar altavoz",
          "voip.tooltip.video.transform": "Videollamada",
          "voip.tooltip.volumezero":
            "Sube el volumen para o\xedr a los dem\xe1s.",
          "voip.video.calling.failed.cameraSwitch":
            "Error al cambiar de c\xe1mara.\nInt\xe9ntalo de nuevo.",
          "voip.video.calling.failed.noCamera":
            "Error al activar la c\xe1mara.\n\xbfEst\xe1 conectada?",
          "voip.video.desc.makeCall.Failed":
            "No se pudo conectar. Mejor si lo intentas luego.",
          "voip.video.dynamicspeaking.pinoff": "Desanclar",
          "voip.video.dynamicspeaking.pinoff.desc":
            "V\xeddeo anclado. Puedes desanclarlo en cualquier momento.",
          "voip.video.effect.popup.downloadfail":
            "Vaya, algo no fue bien. \xbfTe descargas este efecto de nuevo?",
          "voip.video.effect.toast.cameraoff": "Enciende tu c\xe1mara",
          "voip.video.effect.toast.detectionfail": "Que se vea bien tu rostro.",
          "voip.video.effect.toast.downloadfail":
            "No se pudo descargar. Int\xe9ntalo de nuevo.",
          "voip.video.effect.toast.nospace":
            "No tienes espacio libre en tu dispositivo. Libera espacio e int\xe9ntalo de nuevo.",
          "voip.video.effect.toast.xpccrash":
            "Se resetearon los efectos de la c\xe1mara debido a un error.\nModifica los ajustes de nuevo.",
          "voip.video.menu.bg": "Fondos",
          "voip.video.menu.bg.alert.addbg": "Usa otro archivo como fondo.",
          "voip.video.menu.bg.alert.addbg.button": "Elegir",
          "voip.video.menu.bg.alert.maxbg":
            "Quita alg\xfan fondo para a\xf1adir m\xe1s.",
          "voip.video.menu.bgsettings": "Efectos",
          "voip.video.menu.blur": "Desenfoque",
          "voip.video.menu.effect": "Efectos faciales",
          "voip.video.menu.filter": "Filtros",
          "voip.video.popupbutton.close": "Cerrar",
          "voip.video.popupbutton.dontshow": "No mostrar",
          "voip.video.popupbutton.opensettings": "Abrir ajustes",
          "voip.video.popupbutton.show": "Mostrar",
          "voip.video.popupdesc.dontshowpreview":
            "Deshabilita esta opci\xf3n para unirte a videollamadas sin hacer una vista previa de tu c\xe1mara.",
          "voip.video.popuptitle.dontshowpreview":
            "Cambia los ajustes de previsualizaci\xf3n de la c\xe1mara",
          "voip.video.preview.blur.off": "Nada",
          "voip.video.preview.blur.on": "Fondo\ndesenfocado",
          "voip.video.preview.cameraoff": "Desactivar c\xe1mara",
          "voip.video.preview.desc":
            "Aseg\xfarate de que todo est\xe1 bien antes de unirte a la videollamada.",
          "voip.video.preview.join": "\xa1Me uno!",
          "voip.video.preview.title": "Vista previa c\xe1mara",
          "voip.video.title.videocallwith": "Videollamada con %1",
          "voip.video.tooltip.filternblur":
            "Prueba los filtros y el efecto de desenfoque.",
          "voip.video.tooltip.startvideocall":
            "Clic para empezar la videollamada.",
          "voip.video.tooltip.videomirroring": "Desactivar duplicar v\xeddeo",
          "voip.video.tooltip.videomirroringoff": "Desactivar video mirroring",
          "voip.video.tooltip.videomirroringon": "Activar video mirroring",
          "voip.videocall.button.beautyfeature": "Belleza",
          "voip.videocall.popup.start": "Empezar",
          "voip.videocall.popup.turnon": "Activar",
          "win10.notification.reply.guide": "Responder aqu\xed",
        };
      },
    }]);
