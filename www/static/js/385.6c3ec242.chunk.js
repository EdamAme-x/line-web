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
        e._sentryDebugIds[a] = "490e8bc3-44ec-4a8f-9e48-2244ef89047b",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-490e8bc3-44ec-4a8f-9e48-2244ef89047b");
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
    []).push([[385], {
      20385: (e, a, o) => {
        o.r(a), o.d(a, { default: () => t });
        const t = {
          "abuse.report.sent.data.notice.chat_selected":
            "El mensaje reportado, los 9 mensajes anteriores o posteriores al reporte, los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.direct_chat":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.direct_invitation":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.) .",
          "abuse.report.sent.data.notice.friend_profile":
            "Los datos (Nombre, imagen del perfil, mensaje de Estado, etc.) del usuario reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.group_chat":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre del grupo, imagen del grupo, del grupo usuario que te invit\xf3 al grupo, etc.) del grupo reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.group_chat_selected":
            "El mensaje reportado, los 9 mensajes anteriores o posteriores al reporte, los datos (Nombre del grupo, imagen del grupo, datos del usuario que te invit\xf3 al grupo, etc.) del grupo reportado y tus datos (Nombre, imagen del perfil, etc.).",
          "abuse.report.sent.data.notice.group_invitation":
            "Los 10 mensajes intercambiados m\xe1s recientes, los datos (Nombre del grupo, imagen del grupo, datos del usuario que te invit\xf3 al grupo, etc.) del grupo reportado y tus datos (Nombre, imagen del perfil, etc.).",
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
            "Al enviar un reporte, cierta informaci\xf3n ser\xe1 recopilada por LY Corporation para comprobar los hechos reportados, tomar las medidas pertinentes y considerar medidas de prevenci\xf3n futuras.\nRecuerda que es posible que esta informaci\xf3n sea compartida con diversos contratistas.\n\nInformaci\xf3n recopilada: \n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "la informaci\xf3n del comentario de la Nota reportada (ej.: el identificador de comentario, el texto, las im\xe1genes y los emoticones), la informaci\xf3n del usuario reportado (ej.: su identificador de usuario y su nombre), la informaci\xf3n del chat (ej.: el identificador del chat) y tu informaci\xf3n (ej.: tu identificador de usuario y tu nombre).",
          "note.reportnote.desc.reportnotefrommenu":
            "la informaci\xf3n de la Nota reportada (ej.: el identificador de Nota, el texto, las im\xe1genes, los emoticones y los videos), la informaci\xf3n del usuario reportado (ej.: su identificador de usuario y su nombre), la informaci\xf3n del chat (ej.: el identificador del chat) y tu informaci\xf3n (ej.: tu identificador de usuario y tu nombre).",
          "openchat.abusereport.desc.threadmessage":
            "el mensaje reportado y los \xfaltimos 10 mensajes previos al reporte en el hilo, la informaci\xf3n del usuario reportado (ej.: su nickname y su icono de perfil), la informaci\xf3n del OpenChat (ej.: el identificador de OpenChat, el nombre del OpenChat, la foto de portada y el n\xfamero de miembros), la informaci\xf3n del chat (ej.: el identificador del chat), la informaci\xf3n del hilo (ej.: el identificador del hilo) y tu informaci\xf3n (ej.: tu identificador de usuario y tu nickname).",
          "openchat.abusereport.desc.threaduser":
            "los \xfaltimos 50 mensajes enviados al hilo por el usuario reportado, la informaci\xf3n del usuario reportado (ej.: su identificador de usuario, su nickname y su icono de perfil), la informaci\xf3n del OpenChat (ej.: el nombre del OpenChat, la foto de portada y el n\xfamero de miembros), la informaci\xf3n del chat (ej.: el identificador del chat), la informaci\xf3n del hilo (ej.: el identificador del hilo y los \xfaltimos 100 mensajes enviados al hilo) y tu informaci\xf3n (ej.: tu identificador de usuario y tu nickname).",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "No hay espacio suficiente.\nLibera al menos 30 MB\nen tu disco duro antes de intentarlo de nuevo.",
          ImageViewerLabelNoImage: "No se han compartido fotos en este chat.",
          "Keep.info.from.keepmemo": "Keep Memo",
          LoginErrorNaverLoginForbbide: "Ingresa una direcci\xf3n v\xe1lida.",
          Poll_Message_btn: "M\xe1s",
          Poll_Title: "Encuesta",
          "Setting.Alert.Remove.History":
            "Una vez que elimines el historial de chat no podr\xe1s recuperarlo.\n\xbfLo eliminas? ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "Reinicia LINE para que los cambios surjan efecto.\n\xbfReinicias ahora?",
          "Setting.label.alarm.sound.1": "Tono predeterminado",
          "Setting.label.alarm.sound.2": "LINE ardillas",
          "Setting.label.alarm.sound.3": "LINE mel\xf3dico",
          "Setting.label.alarm.sound.4": "Tri\xe1ngulo",
          "Setting.label.alarm.sound.5": "Hey",
          "Setting.label.alarm.sound.6": "Xil\xf3fono",
          "Setting.label.alarm.sound.7": "Chiflado",
          "Setting.label.alarm.sound.8": "Timbre",
          "Setting.label.alarm.sound.9": "Destellos",
          "access.chat.search.calendar": "Calendario",
          "access.openchat.chatmenu.button.addyourthreads":
            "Agregar a Hilos favoritos",
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
            "Para a\xf1adir a este usuario como amigo, escanea su c\xf3digo QR.",
          "addfriends.label.norecommendation.description":
            "A\xfan no tenemos nuevas recomendaciones.",
          "addfriends.menu.chatandgroup": "Crear grupo",
          "addfriends.search.captcha.fail":
            "\xa1No coincide! Venga, que no es tan dif\xedcil.\n",
          "album.add.photo.drag": "\xa1Arrastra aqu\xed tus fotos!",
          "album.addphotos.desc.limitexceeded":
            "M\xe1ximo 1000 \xedtems por \xc1lbum.",
          "album.addpopup.desc.e2eeabletoretry":
            "No se pudo agregar. Int\xe9ntalo de nuevo.",
          "album.addpopup.desc.retry": "No se pudo agregar ciertos \xedtems.",
          "album.addpopup.desc.unabletoretry":
            "Algunos de los \xedtems no son compatibles con los \xc1lbumes.",
          "album.createalbum.tooltip.originalresolution.jp":
            "Selecciona para agregar fotos en calidad original.",
          "album.deletepopup.desc.deletealbum":
            "\xbfEliminas este \xc1lbum y su contenido?",
          "album.label.download": "Descargar",
          "album.main.desc.albumvideos.one": "%n video",
          "album.main.desc.albumvideos.other": "%n videos",
          "album.main.toast.encodingerror":
            "No se puede reproducir por un error en la codificaci\xf3n.",
          "album.main.toast.encodinginprogress": "Procesando...",
          "album.main.tooltip.paidplan":
            "Necesitas un plan de pago para agregar videos. Si cancelas tu plan, se eliminar\xe1n los videos.",
          "album.mainpopup.button.no": "No",
          "album.mainpopup.button.yes": "S\xed",
          "album.mainpopup.desc.deletedvideo": "Se elimin\xf3 este video.",
          "album.mainpopup.desc.stopadding":
            "\xbfDejas de agregar estos \xedtems?",
          "album.msg.cancel.upload": "\xbfYa no quieres agregar estas fotos?",
          "album.picker.toast.20videomax.jp": "M\xe1ximo 20 videos a la vez.",
          "album.picker.toast.5minutesvideomax.jp":
            "Solo videos de 5 minutos o menos.",
          "album.picker.toast.max300": "M\xe1ximo 300 \xedtems a la vez.",
          "album.picker.toast.originalresolution.jp":
            "Estas fotos se agregar\xe1n con la calidad original.",
          "album.picker.toast.over20mb.jp":
            "Los videos, las fotos grandes, as\xed como las fotos en formatos no compatibles o las editadas en LINE se agregar\xe1n en calidad normal.",
          "album.picker.toast.somestandard.jp":
            "Las fotos seleccionadas se agregar\xe1n en la calidad original. Los videos, las fotos grandes, as\xed como las fotos en formatos no compatibles o las editadas en LINE se agregar\xe1n en calidad normal.",
          "album.picker.toast.videomax.jp.one":
            "Solo puedes agregar %n video m\xe1s en este \xc1lbum.",
          "album.picker.toast.videomax.jp.other":
            "Solo puedes agregar %n videos m\xe1s en este \xc1lbum.",
          "album.share.toast.addvideomax.jp":
            "M\xe1ximo 100 videos por \xc1lbum.",
          "album.updatepopup.button.dontshow": "Ya no mostrar",
          "album.updatepopup.button.later": "M\xe1s tarde",
          "album.updatepopup.button.updatenow": "Actualizar",
          "album.updatepopup.desc.notavailable":
            "Actualiza tu LINE para ver todo el contenido del \xe1lbum.",
          "album.viewer.button.additems": "Agregar",
          "alert.album.blocked.user":
            "No puedes compartir el \xe1lbum con usuarios bloqueados.",
          "alert.note.blocked.user":
            "No puedes poner notas con los usuarios que has bloqueado.",
          "announce.donotshowagain": "Ya no mostrar",
          "announce.donotshowagain.mouseover": "Ya no mostrar",
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
            "<![CDATA[%1 hizo un <u>Recordatorio</u>.]]>",
          "app.title": "Actualizar LINE",
          "att.prepopup.description":
            "Activando los permisos solo se mostrar\xe1n anuncios que te interesen.",
          "authorize.content.desc1":
            "Por seguridad, debes verificar tu cuenta la primera vez\nque inicies sesi\xf3n en tu PC.",
          "authorize.content.desc2": "Escribe el c\xf3digo en tu celular.\n",
          "authorize.e2ee.about.letterSealing": "\xbfQu\xe9 es Letter Sealing?",
          "authorize.e2ee.app.update":
            "Ahora LINE ofrece mayor seguridad.\nActualiza tu LINE.",
          "authorize.e2ee.desc1":
            "Verifica tu cuenta\npara poder usar Letter Sealing.",
          "authorize.e2ee.desc2": "Escribe el c\xf3digo en tu celular.\n",
          "authorize.e2ee.primary.cancel":
            "Se cancel\xf3 la verificaci\xf3n en tu dispositivo m\xf3vil. Mejor si lo intentas luego.",
          "authorize.msg.closing.alert":
            "Si cierras esta ventana, no se iniciar\xe1 sesi\xf3n.",
          "authorize.msg.timeout.alert":
            "Tu sesi\xf3n ha expirado. Int\xe9ntalo de nuevo.",
          "authorize.msg.useage.alert":
            'En tu LINE activa "Habilitar otros dispositivos" en Configuraci\xf3n > Cuenta.',
          "authorize.remained.time": "Tiempo restante",
          "authorize.window.title": "Verificaci\xf3n de PC",
          "autoSuggest.add.language": "Agregar idiomas",
          "autoSuggest.enable": "Habilitar sugerencias",
          "autoSuggest.enabled.language": "Idioma",
          "autoSuggest.msg.desc":
            "Se muestran emoticones y stickers relacionados con lo que escribas.",
          "autoSuggest.msg.desc.downloadFailed":
            "Error en la descarga.\nInt\xe9ntalo de nuevo.",
          "autoSuggest.msg.download.all.emoji":
            "\xbfDescargas todos los emoticones?",
          "autoSuggest.msg.download.all.sticker":
            "Desc\xe1rgate los stickers para tener una vista preliminar.\n\xbfDescargas todos tus stickers?\n",
          "autoSuggest.title": "Sugerencias",
          "buddy.alert.common.failed.add.contact":
            "No se pudo agregar como Amigo.",
          "buddy.alert.not.allowed.add.contact":
            "Disculpa. La cuenta que est\xe1s tratando de agregar ya no acepta m\xe1s Amigos.",
          "buddy.btn.addBuddy": "Agregar Amigo",
          "buddy.btn.blockBuddy": "Bloquear",
          "buddy.btn.chat": "Chat",
          "buddy.btn.home": "Inicio",
          "buddy.btn.setting.profile": "Editar perfil",
          "buddy.btn.unblockBuddy": "Desbloquear",
          "buddy.btn.voip": "Llamada",
          "buddy.label.edit.title": "Cambiar nombre",
          "buddy.label.info.title": "Perfil",
          "buddylist.chooseFriend.empty.btn": "Chatear",
          "buddylist.chooseFriend.empty.desc": "Venga, empieza un chat.",
          "buddylist.chooseGroup.emty.desc":
            "A\xfan no has chateado\nen %1.\n\xa1An\xedmate!",
          "buddylist.chooseMe.empty.desc": "Venga, empieza un chat.",
          "buddylist.plusMenu.chat": "Chat",
          "budy.label.unregisterUser": "No agregaste a este usuario. ",
          "call.callsettingspreview.desc.nocamera":
            "No se te ver\xe1 porque parece que no tienes c\xe1mara. \xbfTe unes de todas formas?",
          "call.callsettingspreview.desc.nocameradetected":
            "No se pudo detectar tu c\xe1mara.",
          "call.callsettingspreview.desc.nomic":
            "No se te oir\xe1 porque parece que no tienes micr\xf3fono. \xbfTe unes de todas formas?",
          "call.callsettingspreview.desc.nomicdetected":
            "No se pudo detectar tu micr\xf3fono.",
          "call.callsettingspreview.desc.nomicorcamera":
            "No se te oir\xe1 porque parece que no tienes micr\xf3fono. \xbfTe unes de todas formas?",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "No se pudo detectar tu micr\xf3fono ni tu c\xe1mara.",
          "call.cameraoff.friend": "Tiene la c\xe1mara apagada.",
          "call.cameraoff.me": "Tienes la c\xe1mara apagada.",
          "call.chat.confirm.popup.start": "\xbfEmpiezas una llamada?",
          "call.chat.confirm.popup.start.btn.video": "Videollamada",
          "call.chat.confirm.popup.start.btn.voice": "Llamada de voz",
          "call.chatscreen.popup.alreadyinacall": "Est\xe1s en una llamada.",
          "call.doodling.popup.viewerupdaterequired":
            "Para que puedan usar esta funci\xf3n, la otra persona debe actualizar su LINE.",
          "call.doodling.toast.doodlepaused":
            "Las anotaciones no est\xe1n disponibles cuando el video est\xe1 en pausa.",
          "call.doodling.toast.noiosdoodle":
            "La funci\xf3n de garabatos no se puede usar en las pantallas compartidas de iOS.",
          "call.doodling.toast.sharepaused":
            "Compartir video est\xe1 en pausa.",
          "call.doodling.toast.sharerupdaterequired":
            "Para que todos puedan usar esta funci\xf3n, el que est\xe1 compartiendo la pantalla debe actualizar su LINE.",
          "call.effects.menu.stickers": "Stickers",
          "call.effects.popup.graphiccardproblem":
            "Tu tarjeta gr\xe1fica no es compatible del todo con las videollamadas de LINE y es posible que experimentes problemas durante la llamada.",
          "call.effects.popup.removebgeffect":
            "Al borrar este fondo, el video pasar\xe1 a no tener fondo.",
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
          "call.participants.desc.noresults": "Sin resultados.",
          "call.screen.toast.updaterequired":
            "Para poder ver los Stickers tiene que actualizar LINE.",
          "call.screenshare.taskbar.screenshare": "Pantalla para compartir",
          "call.screenshare.taskbar.ytsearch": "Buscar videos YouTube",
          "call.screenshare.toast.shareerror":
            "%1 est\xe1 usando una funci\xf3n que comparte pantalla.",
          "call.screenshare.toast.unsupportedos":
            "Actualiza a Windows 10 o usa la app de LINE para ver la pantalla compartida.",
          "call.screenshare.youtube.popup.startvideo":
            "\xbfCompartes tu pantalla con los participantes de esta llamada?",
          "call.sharedcontent.desc.newdatatype":
            "Actualiza tu LINE para ver el contenido compartido por %1.",
          "call.toast.cpuheavyload":
            "Tu PC est\xe1 usando muchos recursos y la llamada se ver\xe1 afectada. Cierra otras aplicaciones primero.",
          "call.toast.handsfreebt.mic":
            'Se cambi\xf3 al micr\xf3fono "%1". Configura tu altavoz con el mismo dispositivo.',
          "call.toast.handsfreebt.speaker":
            'Se cambi\xf3 al altavoz "%1". Configura tu micr\xf3fono con el mismo dispositivo.',
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
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1B viendo",
          "call.watchtogethermenu.desc.1bviews": "%1B vistas",
          "call.watchtogethermenu.desc.1eokpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1eokviews": "%1",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1K viendo",
          "call.watchtogethermenu.desc.1kviews": "%1K vistas",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1manviews": "%1",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1M viendo",
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
          "call.watchtogethermenu.desc.peoplewatchingen": "%1 viendo",
          "call.watchtogethermenu.desc.userswatchinglivevideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideoen.one": "%n vista",
          "call.watchtogethermenu.desc.userswatchingvideoen.other": "%n vistas",
          "call.watchtogethermenu.desc.yearsago.one": "Hace %n a\xf1o",
          "call.watchtogethermenu.desc.yearsago.other": "Hace %n a\xf1os",
          "call.youtube.desc.headphones":
            "Usa aud\xedfonos para evitar el eco.",
          "call.youtube.desc.noresults": "Sin resultados.",
          "call.youtube.paste.descforonetoone":
            "Busca videos para compartir. Mejor si tienes aud\xedfonos.",
          "call.youtube.popup.shareerror":
            "No se puede compartir este video de YouTube debido a un error. Prueba m\xe1s tarde.",
          "call.youtube.popupbutton.allow": "Permitir",
          "call.youtube.popupbutton.disallow": "No permitir",
          "call.youtube.popupdesc.clipboard":
            "Se pegar\xe1 autom\xe1ticamente el link del video de YouTube en tu navegador.",
          "call.youtube.popuptitle.clipboard":
            "Permite acceder a LINE al portapapeles",
          "call.youtube.statusbadge.premiering": "En estreno",
          "call.youtube.title.trendingvideos": "Videos destacados",
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
            "LINE necesita acceder a la funci\xf3n de grabaci\xf3n de pantalla.",
          "capture.msg.onEditing": "\xbfCancelas los cambios realizados?",
          "capture.scan.error.maxFileSize":
            "\xa1Demasiado grande! Ajusta el tama\xf1o e int\xe9ntalo de nuevo.",
          "capture.scan.error.resolution":
            "Ajusta la resoluci\xf3n para capturar esta imagen.",
          "capture.tool.eclipse": "Redondo",
          "capture.tool.line": "L\xednea",
          "capture.tool.lineColor": "Color de l\xednea",
          "capture.tool.mosaic": "Pixelar",
          "capture.tool.penwidth": "Ancho",
          "capture.tool.rectangle": "Cuadrado",
          "capture.tool.select": "Elegir",
          "capture.tool.shape": "Forma",
          "capture.tool.text": "Texto",
          "capture.tool.textColor": "Color de fuente",
          "capture.tool.textSize": "Tama\xf1o de fuente",
          "capture.tool.textSize.big": "Grande",
          "capture.tool.textSize.medium": "Mediana",
          "capture.tool.textSize.small": "Peque\xf1a",
          "chat.action.leaveChat.confirm":
            "Si dejas el chat, todo el historial del chat se borrar\xe1.\n\xbfQuieres dejarlo?",
          "chat.alert.clipboard.largedata":
            "Es demasiado grande para copiarlo en el chat.",
          "chat.alert.file.open.fromNotbuddy":
            "Ten cuidado con los archivos de usuarios desconocidos.",
          "chat.alert.file.open.fromSquare":
            "Ten cuidado con los archivos de usuarios desconocidos.",
          "chat.alert.file.open.frombuddy":
            "Antes de abrirlo, aseg\xfarate de que el archivo es seguro.",
          "chat.alert.file.open.notSupport": "Formato incompatible.",
          "chat.alert.file.unsupported.all.one":
            "Tiene un formato incompatible. \xbfLo comprimes y env\xedas?",
          "chat.alert.file.unsupported.all.other":
            "Estos archivos tienen un formato incompatible. \xbfLos comprimes y env\xedas?",
          "chat.alert.file.unsupported.some.one":
            "Uno de los archivos tiene un formato incompatible. \xbfLo comprime y env\xedas?",
          "chat.alert.file.unsupported.some.other":
            "%n archivos tienen un formato incompatible. \xbfLos comprimes y env\xedas?",
          "chat.alert.invite.alreadyinvited": "Ya se invit\xf3\na %1.  ",
          "chat.alert.invite.alreadyjoined": "%1 ya\nes miembro del grupo.  ",
          "chat.alert.invite.blockedbuddy":
            "No puedes invitar usuarios bloqueados.",
          "chat.alert.invite.confirm": "\xbfInvitas a\n%1 al chat?",
          "chat.alert.invite.notbuddy":
            "Agrega a %1 como amigo\npara invitarlo al chat. ",
          "chat.alert.invite.verificationrequired":
            "Las invitaciones por URL o c\xf3digo QR solo est\xe1n disponibles para usuarios mayores de 18 a\xf1os.",
          "chat.alert.sharePost": "\xbfCompartir notas y \xe1lbumes\ncon %1?",
          "chat.alert.unavailable.file":
            "El periodo de almacenamiento expir\xf3 y ya no se puede compartir este archivo.",
          "chat.alert.unsend.fail.error":
            "No se pudo anular el mensaje. Por favor, int\xe9ntalo de nuevo.",
          "chat.alert.unsend.fail.time":
            "No es posible anular un mensaje despu\xe9s de un cierto periodo de haber sido enviado.",
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
          "chat.btn.reset.tooltip": "Restaurar",
          "chat.btn.sticker": "Stickers",
          "chat.btn.sticker.tooltip": "Stickers",
          "chat.btn.voip": "Llamada gratis",
          "chat.contact.label": "Contacto",
          "chat.context.menu.search.name": "Buscar nombres",
          "chat.context.menu.send.contact": "Enviar contacto",
          "chat.context.menu.talk": "Chatear en privado",
          "chat.desc.quit.uploading":
            "Est\xe1s mandando archivos en un chat.\nSi cierras LINE, no se mandar\xe1n.",
          "chat.edit.alert.unavailable.picture":
            "No puedes ver esta foto porque ya no est\xe1 disponible.",
          "chat.emoji.label.animation.unavailable":
            "Puedes ver las animaciones de los stickers en tu celular.",
          "chat.emoji.label.recentIconDesc1":
            "Aqu\xed salen los \xfaltimos emoticones que usaste.",
          "chat.emoji.label.recentIconDesc2": "\xa1An\xedmate a mandarlos!",
          "chat.emoji.label.recentLetterDesc1":
            "Aqu\xed salen los \xfaltimos emoticonos que usaste.",
          "chat.emoji.label.recentLetterDesc2": "\xa1An\xedmate a mandarlos!",
          "chat.emoji.label.recentStickerDesc1":
            "Aqu\xed salen los \xfaltimos stickers que usaste.",
          "chat.emoji.label.recentStickerDesc2": "\xa1An\xedmate a mandarlos!",
          "chat.err.file.broken":
            "Error al guardar el archivo.\nComprueba el espacio disponible en tu PC.",
          "chat.err.file.download.failed": "Error al guardar el archivo.",
          "chat.err.file.download.localError":
            "Error al guardar el archivo. Int\xe9ntalo de nuevo m\xe1s tarde.",
          "chat.err.file.exceed.capacity":
            "\xa1Vaya! Solo puedes enviar hasta %1 a la vez.",
          "chat.err.file.exceed.dailyCapacity":
            "\xa1Vaya! Solo puedes enviar hasta %1 archivos en un d\xeda.",
          "chat.err.file.folderPermission":
            "No se pudo guardar el archivo en la carpeta seleccionada.\nElige una ubicaci\xf3n diferente e int\xe9ntalo de nuevo.",
          "chat.err.file.need.space":
            "No queda espacio en tu dispositivo. Comprueba el espacio libre e int\xe9ntalo de nuevo.",
          "chat.err.file.open":
            "El archivo est\xe1 en uso. Ci\xe9rralo y m\xe1ndalo de nuevo.",
          "chat.err.file.some.unpardoned":
            "No puedes enviar un archivo con este formato.\nSe enviar\xe1n todos los dem\xe1s archivos.\n",
          "chat.err.file.unpardoned":
            "No puedes enviar un archivo con este formato.",
          "chat.err.media.copyFailed":
            "Codificaci\xf3n en proceso.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "chat.err.media.infoLoadFailed":
            "No se pudo procesar tu solicitud debido a un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "chat.error.badwords":
            "No puedes enviar este tipo de contenidos.\nElige otro e int\xe9ntalo de nuevo.",
          "chat.error.popup.noauth":
            "LINE no tiene permiso para abrir archivos de esta carpeta.",
          "chat.file.audio.sizeExceeds":
            "Puedes mandar archivos de audio de hasta 30 MB.",
          "chat.file.cancel.tooltip": "Cancelar",
          "chat.file.cantFindFile": "No se pudo encontrar el archivo.",
          "chat.file.closeConfirm":
            "Si cierras esta ventana, se cancelar\xe1 cualquier transferencia de archivos en curso.\n\xbfLa cierras?",
          "chat.file.countExceeds": "No m\xe1s de %1 archivos a la vez.",
          "chat.file.label.expired": "Expir\xf3",
          "chat.file.video.sizeExceeds":
            "Puedes mandar archivos de video de hasta 200 MB.",
          "chat.flex.btn.send": "Listo",
          "chat.flex.date.select": "Fecha",
          "chat.flex.datetime.select": "Fecha y hora",
          "chat.flex.error.unknown":
            "Vaya, no lo puedes usar con esta versi\xf3n de LINE.",
          "chat.flex.time.select": "Hora",
          "chat.group.msg.e2ee.guide": "Chat protegido\ncon Letter Sealing.",
          "chat.group.noMember.placeholder": "Este chat est\xe1 vac\xedo.",
          "chat.grouphome.label.enjoySns.title":
            "\xa1Comparte notas y \xe1lbumes con amigos en esta divertida red social!\n",
          "chat.image.tooltip": "Fotos",
          "chat.input.placeholder": "Tu mensaje",
          "chat.inputbar.msg.album": "\xc1lbum",
          "chat.inputbar.msg.albumcontents": "\xcdtems del \xc1lbum",
          "chat.label.del": "Eliminar",
          "chat.label.makeAlbum": 'Se cre\xf3 el \xe1lbum "%1".',
          "chat.label.open": "Abrir",
          "chat.label.openFile": "Abrir archivo",
          "chat.label.openFolder": "Abrir carpeta",
          "chat.label.playback": "Reproducir",
          "chat.label.retry": "Reenviar",
          "chat.label.save": "Guardar",
          "chat.label.saveAs": "Guardar como...",
          "chat.label.saveOpen": "Guardar y abrir",
          "chat.label.sendFail": "No se pudo enviar",
          "chat.label.share": "Compartir",
          "chat.label.showAlbum": "Ver \xe1lbum\xa0",
          "chat.label.showPost": "Ver nota",
          "chat.label.showPrev": "Mostrar chats anteriores",
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
          "chat.list.group.nogroupcreator":
            "La persona creadora del grupo ya no participa.",
          "chat.list.linecall": "LINE Out",
          "chat.list.mention": "Te mencionaron.",
          "chat.list.menu.clear.all.unreadmessage":
            "Marcar todos como le\xeddos",
          "chat.list.menu.sort.favorites": "Favoritos",
          "chat.list.menu.sort.time": "Hora recibido",
          "chat.list.menu.sort.unreadcount": "Mensajes sin leer",
          "chat.list.menu.tooltip": "Ordenar por",
          "chat.list.sortBtn.tooltip": "Mensajes sin leer",
          "chat.list.sortByUnread.desc":
            "Los mensajes no le\xeddos se movieron al principio. ",
          "chat.menu.Image.download": "Finaliz\xf3 la descarga.",
          "chat.menu.Image.download.fail": "Vaya, no se pudo guardar.\n",
          "chat.menu.alarmOff": "Silenciar",
          "chat.menu.alarmOn": "Notificar",
          "chat.menu.albums": "\xc1lbumes",
          "chat.menu.alwaysTop": "Siempre visible",
          "chat.menu.backgroundSetting": "Configuraci\xf3n del fondo",
          "chat.menu.backgroundSetting.apply": "Aplicar",
          "chat.menu.backgroundSetting.cancel": "Cancelar",
          "chat.menu.backgroundSetting.file": "Elegir archivo",
          "chat.menu.backgroundSetting.image.failed":
            "No puedes usar la imagen que elegiste.",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "Solo puedes subir im\xe1genes de % MB o menos.",
          "chat.menu.backgroundSetting.option": "Mostrar",
          "chat.menu.backgroundSetting.option.detail": "Ventana",
          "chat.menu.backgroundSetting.option.fill": "Rellenar",
          "chat.menu.backgroundSetting.photo.save.failed":
            "No se pudo guardar la imagen.",
          "chat.menu.backgroundSetting.photo.transparency": "Transparencia",
          "chat.menu.backgroundSetting.photoGuide":
            "Personaliza el fondo de tu chat.",
          "chat.menu.backgroundSetting.reset": "Restablecer",
          "chat.menu.backgroundSetting.select": "Elegir fondo",
          "chat.menu.backgroundSetting.tab.color": "Color",
          "chat.menu.backgroundSetting.tab.illustration": "Ilustraci\xf3n",
          "chat.menu.backgroundSetting.tab.photo": "Im\xe1genes",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "No disponible en modo oscuro.",
          "chat.menu.copy": "Copiar",
          "chat.menu.delete": "Borrar historial de los chats",
          "chat.menu.group.noMember": "No hay miembros",
          "chat.menu.invite": "Invitar",
          "chat.menu.invite.group": "Miembros",
          "chat.menu.leave": "Salirse",
          "chat.menu.make": "Crea un grupo",
          "chat.menu.msg.announce": "Recordar",
          "chat.menu.msg.unsend": "Anular",
          "chat.menu.openAlbum": "Mostrar todas las im\xe1genes",
          "chat.menu.openAlbum.download": "Finaliz\xf3 la descarga.",
          "chat.menu.openAlbum.download.fail": "No se pudo descargar.",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "No se pudo descargar a esta carpeta.\nElige otro lugar para descargar.",
          "chat.menu.openAlbum.download.open": "Abrir carpeta",
          "chat.menu.openAlbum.downloading": "Descargando...",
          "chat.menu.openAlbum.retry": "Reintentar",
          "chat.menu.openAlbum.saveKeep": "Se guard\xf3 en Keep.",
          "chat.menu.openAlbum.saveKeep.open": "Abrir Keep",
          "chat.menu.openAlbum.savingKeep": "Guardando en Keep...",
          "chat.menu.openAlbum.savingKeep.fail": "No se pudo guardar en Keep.",
          "chat.menu.openAlbum.selected": "%1 elementos seleccionados",
          "chat.menu.openLink": "Ver todos los links",
          "chat.menu.openLink.noURL": "No hay links compartidos.",
          "chat.menu.paste": "Pegar",
          "chat.menu.recommend": "Sugerencias",
          "chat.menu.save": "Guardar chat",
          "chat.menu.save.note": "Guardar en Notas",
          "chat.menu.searchMsgs": "Buscar chats",
          "chat.menu.selectAll": "Seleccionar todo",
          "chat.menu.selectedCopy": "Copia el texto seleccionado",
          "chat.menu.settings": "Configuraci\xf3n",
          "chat.menu.showAllContents": "Ver todo",
          "chat.menu.sticker.openWebStore": "Tienda de stickers",
          "chat.menu.sticker.showDetail": "Abrir",
          "chat.menu.translation": "Traducir",
          "chat.message.present.emoji.receive": "Emoticones de regalo",
          "chat.message.present.receive.confirm": "Abrirlo",
          "chat.message.present.sticker.receive": "Stickers de regalo",
          "chat.message.present.theme.receive":
            "Tema de regalo\n\xc1brelo con el LINEde tu m\xf3vil.",
          "chat.message.sharealbum": "Comparti\xf3 un \xc1lbum.",
          "chat.message.sharenote": "Comparti\xf3 una Nota",
          "chat.msg.album.addphoto.one": "%n item agregado al \xe1lbum.",
          "chat.msg.album.addphoto.other": "%n items agregados al \xe1lbum.",
          "chat.msg.album.create": 'Se cre\xf3 el \xe1lbum "%1".',
          "chat.msg.album.delete": '%1 elimin\xf3 el \xe1lbum "%2".',
          "chat.msg.album.removephoto":
            '%1 elimin\xf3 items del \xe1lbum "%2".',
          "chat.msg.album.rename":
            '%1 cambi\xf3 el nombre del \xe1lbum de "%2" a "%3".',
          "chat.msg.album.viewPhoto": "Ver \xe1lbum\xa0",
          "chat.msg.applink.app.recv":
            "\xa1\xc9chale un vistazo a %1 en tu celular!",
          "chat.msg.applink.app.sent": "Presentaste a %1.",
          "chat.msg.applink.friend.recv":
            "%1 quiere ser tu Amigo. \xc9chale un vistazo en tu celular.",
          "chat.msg.applink.friend.sent":
            "\xa1Le mandaste una solicitud de amistad a %1!",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "Colgaste",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[Llamada con Letter Sealing.\nVer\xe1s un<img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11">en las llamadas seguras.]]>',
          "chat.msg.call.missedCall": "Llamada perdida",
          "chat.msg.call.rejected": "No responde",
          "chat.msg.changeGroupImage": "%1 cambi\xf3 la foto del grupo.",
          "chat.msg.changeGroupName": "%1 cambi\xf3 el nombre del grupo a %2.",
          "chat.msg.chatevent.unknown":
            "No est\xe1 disponible en la versi\xf3n para PC de LINE.\n\xa1\xc9chale un vistazo en tu celular!",
          "chat.msg.e2ee.decryptingMsg": "Descifrando...",
          "chat.msg.e2ee.guide": "Chat protegido\ncon Letter Sealing.",
          "chat.msg.e2ee.needKeyExchange":
            "Mensaje cifrado.\nVerifica tu identidad para poder comprobarlo.",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\nNo se puede ver el mensaje porque no est\xe1 desencriptado. Dile a tu amigo que te lo env\xede de nuevo.",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "Este mensaje no est\xe1 disponible.\nNo se puede comprobar la transferencia del mensaje de tu dispositivo anterior.",
          "chat.msg.e2ee.setting.disabled":
            "Mensaje encriptado. \xc1brelo con tu tel\xe9fono.",
          "chat.msg.file.change.type.audio":
            "El mensaje de voz es muy grande y algunos dispositivos no podr\xe1n reproducirlo.",
          "chat.msg.file.change.type.video":
            "El video es muy grande y algunos dispositivos no podr\xe1n reproducirlo.",
          "chat.msg.file.ext": "Extensi\xf3n",
          "chat.msg.file.period": "Hasta:",
          "chat.msg.file.received": "%1 mand\xf3 un archivo.",
          "chat.msg.file.sent": "Mandaste un archivo.",
          "chat.msg.file.size": "Tama\xf1o: %1",
          "chat.msg.file.waiting": "En espera\u2026",
          "chat.msg.groupInvite": "%1 invit\xf3 a %2 al grupo.",
          "chat.msg.groupboard.updated":
            "Se actualiz\xf3 el muro del grupo. Revisa las actualizaciones en tu celular.",
          "chat.msg.home.shared": "Se comparti\xf3 el post de %1.",
          "chat.msg.inviteCancel":
            "%1 cancel\xf3 la invitaci\xf3n de %2 al grupo.",
          "chat.msg.joinGroup": "%1 se uni\xf3 al grupo.",
          "chat.msg.kickout": "%1 quit\xf3 a %2 del grupo.",
          "chat.msg.leave": "%1 dej\xf3 el chat.",
          "chat.msg.leaveGroup": "%1 dej\xf3 el grupo.",
          "chat.msg.leavegroup.1.n.confirm":
            "Si dejas el grupo, no tendr\xe1s acceso al historial del chat.",
          "chat.msg.nomember": "Aqu\xed no hay nadie",
          "chat.msg.preview.default": "Abrir",
          "chat.msg.read": "Le\xeddo",
          "chat.msg.search.cancelSearch": "Cancelado",
          "chat.msg.search.hint.fromName":
            "Escribe el nombre de quien lo envi\xf3.",
          "chat.msg.search.hint.message": "Escribe lo que buscas.",
          "chat.msg.search.hint.roomName": "Buscar en chats y mensajes",
          "chat.msg.search.result.hint.addOption":
            "Agrega m\xe1s chats o remitentes a ver si funciona.",
          "chat.msg.search.result.hint.noResultReason1":
            "Si est\xe1s usando una PC diferente, quiz\xe1s no encuentres nada. ",
          "chat.msg.search.result.hint.noResultReason2":
            "Si no encuentras nada, puede deberse a que llevas m\xe1s de 2 semanas sin usar la versi\xf3n para PC de LINE. ",
          "chat.msg.search.result.noResult": "Sin resultados.",
          "chat.msg.search.title.date": "Fecha",
          "chat.msg.search.title.fromName": "Remitente",
          "chat.msg.search.title.message": "Mensaje",
          "chat.msg.search.title.roomName": "Chat",
          "chat.msg.smartphone": "\xc9chale un vistazo en tu celular.",
          "chat.msg.start.unreadMessage": "Mensajes sin leer",
          "chat.msg.sticker.gift.from.buddy": "Tienes un regalo : )",
          "chat.msg.sticker.gift.from.me": "Mandaste un regalo.",
          "chat.msg.sticker.period.expired":
            "Ya no est\xe1 disponible.\nCompra %1 de nuevo con tu celular.",
          "chat.msg.sticon.period.expired":
            "%1 expir\xf3. C\xf3mpralo de nuevo en la tienda de stickers LINE de tu tel\xe9fono.",
          "chat.msg.sync": "Sincronizando mensajes...",
          "chat.msg.text.seeAll": "Ver m\xe1s",
          "chat.msg.theme.gift.from.me": "Mandaste un regalo.",
          "chat.msg.unknown.message": "Ya no puedes ver este mensaje.",
          "chat.msg.unread": "Sin leer",
          "chat.msgbox.alarmoff.description":
            "Ya no recibir\xe1s notificaciones as\xed recibas mensajes nuevos.",
          "chat.msgbox.bannedWord":
            "Este mensaje contiene palabras prohibidas y no puede enviarse.",
          "chat.msgbox.save.description":
            "Solo la conversaci\xf3n mostrada en esta pantalla se guarda como texto.\n",
          "chat.msgbox.save.dontShow": "No volver a mostrar",
          "chat.msgbox.save.empty": "No hay mensajes para guardar.",
          "chat.noMember.group.error.noAuth":
            "Solo pueden usarlo los miembros del grupo.",
          "chat.noMember.singleRoom.error.album":
            "No puedes a\xf1adir m\xe1s elementos ni crear m\xe1s \xe1lbumes en este chat.",
          "chat.noMember.singleRoom.error.note":
            "No puedes agregar m\xe1s Notas en este chat.",
          "chat.noinput.group.invitation": "\xbfA qu\xe9 esperas?",
          "chat.notes.notification.sharenote": "Comparti\xf3 una Nota",
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
            "Ocurri\xf3 un error en el servidor y no se pudo mostrar el mensaje. \xbfLo reenviamos?",
          "chat.popupdesc.serveroutagegroup":
            "Ocurri\xf3 un error en el servidor y no se pudo mostrar el mensaje a ciertos miembros. \xbfLo reenviamos?",
          "chat.popuptitle.serveroutage": "Reenv\xedo de mensaje",
          "chat.profile.menu.displayName.search": "Buscar mensajes por nombre",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_icon.png",
          "chat.reply.album": "\xc1lbum: %1",
          "chat.reply.jump": "Volver al mensaje",
          "chat.reply.jump.delete": "Mensaje anulado.",
          "chat.reply.no.original.message": "Mensaje no disponible.",
          "chat.reply.note.no.text": "Nota compartida en %1",
          "chat.reply.note.text": "Nota: %1",
          "chat.room.msg.invitorNotBuddy":
            "%1 no es tu amigo, pero te acaba de invitar a un grupo.",
          "chat.save.location": "Mi ubicaci\xf3n",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_icon.png",
          "chat.setting.theme.snow.disable": "Desactivar efecto nieve",
          "chat.setting.theme.snow.enable": "Activar efecto nieve",
          "chat.share.notexist":
            "Este usuario no existe o elimin\xf3 su cuenta de LINE.",
          "chat.sharing.notification.sharealbum": "Comparti\xf3 un \xc1lbum.",
          "chat.sharing.notification.sharenote": "Comparti\xf3 una Nota",
          "chat.status.block":
            "No puedes enviar mensajes a usuarios bloqueados.",
          "chat.status.disconn":
            "El env\xedo de mensajes se ha suspendido temporalmente.",
          "chat.status.e2ee.verification.fail":
            "Se cancel\xf3 la verificaci\xf3n de cuenta para Letter Sealing.\n\nTienes que verificar tu cuenta para ver los mensajes encriptados.\n",
          "chat.status.keyExchangeBtn": "Verificar mi identidad",
          "chat.status.leave":
            "No puedes enviar nuevos mensajes tras dejar el chat.",
          "chat.status.needKeyExchange":
            "Para usar Letter Sealing en la versi\xf3n de LINE para PC tienes que verificar tu identidad.",
          "chat.system.inviteeoverlimit":
            "No pueden unirse porque excedieron el l\xedmite de grupos.\n%1",
          "chat.system.msg.a.unsend": "%1 anul\xf3 un mensaje enviado.",
          "chat.system.msg.unsend": "Mensaje anulado.",
          "chat.systemmessage.upgradegroup":
            "Configuraci\xf3n actualizada. Los nuevos miembros ahora tienen que aceptar la invitaci\xf3n para unirse.",
          "chat.title.chatMember": "Miembros",
          "chat.toast.notifications.mute":
            "Desactivaste las notificaciones de este chat.",
          "chat.toast.notifications.unmute":
            "Activaste las notificaciones de este chat.",
          "chat.trans.tooltip": "Transparencia",
          "chat.video.play": "Reproducir",
          "chat.video.replay": "Repetir",
          "chat.video.tooltip": "Videos",
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
          "chatl.share.alert.max": "S\xf3lo puedes seleccionar hasta %1 chats.",
          "chatl.share.toast.multiple.one": "Mensaje compartido en %n chat.",
          "chatl.share.toast.multiple.other": "Mensaje compartido en %n chats.",
          "chatl.share.toast.single": "Compartido con %1.",
          "chatl.sharetotalk.title": "Compartir con\u2026",
          "chatlist.allinone.close.btn": "Compactar chats",
          "chatlist.allinone.open.btn": "Expandir chats",
          "chatlist.btn.startchat": "Chat nuevo",
          "chatlist.chooseChat.empty.btn": "Mostrar aqu\xed",
          "chatlist.chooseChat.empty.desc":
            "Este chat sale en otra ventana.\n\xbfLo muestras aqu\xed?",
          "chatlist.context.menu.seperateChat.label": "Abrir en otra ventana",
          "chatlist.guide.allinone.text":
            "Agranda esta ventana para abrir los chats en otra.",
          "chatlist.guide.chatStart.text": "\xa1Chatea ya!",
          "chatlist.hide.confirm":
            "Los mensajes en el chat no se borrar\xe1n. ",
          "chatlist.keepmemo.desc.msg":
            "Guarda esos textos, fotos, videos y enlaces.",
          "chatlist.keepmemo.desc.title": "Keep Memo",
          "chatlist.search.hint.chatList": "Buscar listas de chats",
          "chatlist.sort.unreadRoom":
            "Mostrar los chats que tienen mensajes no le\xeddos",
          "chatlive.end.popup.done": "Finalizar",
          "chatlive.error.notavailable": "Ya empezaron una llamada.",
          "chatlive.maximum": "Se super\xf3 el m\xe1ximo de participantes.",
          "chatlive.msg.over.traffic":
            "Hay muchas transmisiones en este momento.\nInt\xe9ntalo m\xe1s tarde.",
          "chatlive.screen.share.ongoing.body":
            "Se est\xe1 compartiendo tu pantalla.",
          "chatlive.screen.share.ongoing.stop": "Parar",
          "chatlive.screen.share.ongoing.top": "Compartiendo pantalla...",
          "chatlive.screen.share.select.body":
            "Vas a compartir tu pantalla de PC. Elige qu\xe9 pantalla compartir\xe1s.",
          "chatlive.screen.share.select.done": "Compartir",
          "chatlive.screen.share.select.item": "Pantalla %1",
          "chatlive.screen.share.select.title": "Pantalla para compartir",
          "chatlive.viewer.list.title.other": "%n espectadores",
          "chatlive.viewer.list.title.plurals.one": "%n espectador",
          "chatlive.viewer.list.title.plurals.other": "%n espectadores",
          "chatroom.guide.sticker.text":
            "Stickers que cobrar\xe1n vida en tus chats.",
          "chatsettings.desc.membersjoinautomatically":
            "Se podr\xe1n unir autom\xe1ticamente en cuanto se les invite. Desactiva esta opci\xf3n para solicitar que acepten la invitaci\xf3n antes de unirse.",
          "chatsettings.popup.desc.onewaywarning":
            "Recuerda que no podr\xe1s deshacer esta acci\xf3n.",
          "chatsettings.popup.title.onewaywarning": "No se puede deshacer",
          "chatsettings.title.membersjoinautomatically":
            "Unirse autom\xe1ticamente",
          "choosefriends.button.createGroup": "Crear grupo",
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
            "Prueba bloquear esta cuenta m\xe1s tarde.",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "No se pudo rechazar la invitaci\xf3n.",
          "chrome.user.error.failedToHide":
            "Prueba ocultar esta cuenta m\xe1s tarde.",
          "chrome.user.error.failedToJoinGroup":
            "Prueba unirte a este grupo m\xe1s tarde.",
          "chrome.user.error.failedToLeaveGroup": "No pudiste dejar el grupo.",
          "chrome.user.error.failedToMarkFavorite":
            "No pudimos agregarlo a Favoritos.",
          "chrome.user.error.failedToShowUser":
            "Prueba mostrar esta cuenta m\xe1s tarde.",
          "chrome.user.error.failedToUnblock": "No se pudo desbloquear.",
          "common.album.empty.desc":
            "Inmortaliza tus mejores momentos con los \xe1lbumes.",
          "common.alert.errorcode": "C\xf3digo de error: %1",
          "common.alert.notsupported":
            "No es compatible con esta versi\xf3n.\nNecesitas la \xfaltima versi\xf3n de LINE.",
          "common.alert.unsend.content": "El remitente anul\xf3 un mensaje.",
          "common.alert.unsend.multi.contents":
            "Se excluir\xe1n los art\xedculos sin enviar.",
          "common.alert.unsupported.osversion":
            "Tu versi\xf3n de OS no es compatible con esta funci\xf3n. Actual\xedzalo para poder utilizarla.",
          "common.alert.update.title": "Actualizar",
          "common.alert.version.other":
            "Una versi\xf3n diferente de LINE ya est\xe1 abierta.",
          "common.am": "a.m.",
          "common.btn.back": "Atr\xe1s",
          "common.btn.cancel": "Cancelar",
          "common.btn.capture.option": "Ocultar ventana al hacer captura",
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
          "common.btn.seemore": "Ver m\xe1s",
          "common.btn.submit": "Aceptar",
          "common.btn.unhide": "Mostrar",
          "common.cancel": "Cancelar",
          "common.cancelalert.desc":
            "Perder\xe1s el texto escrito si sales de esta p\xe1gina.",
          "common.code.tooltip":
            "No puedes escanear la imagen del c\xf3digo QR.",
          "common.content.address.share.from.buddy":
            "%1 comparti\xf3 la info de un contacto.",
          "common.content.address.share.from.me": "Enviaste un contacto.",
          "common.content.applink.app.recv": "\xbfConoces a %1?",
          "common.content.applink.app.sent": "Presentaste a %1.",
          "common.content.applink.friend.recv":
            "%1 te envi\xf3 una solicitud de amistad.",
          "common.content.applink.friend.sent":
            "\xa1Le mandaste una solicitud de amistad a %1!",
          "common.content.audio": "%1 mand\xf3 un archivo de audio.",
          "common.content.audio.mine": "Mandaste un archivo de audio.",
          "common.content.coupon.message.postfix":
            "\xc9chale un vistazo en tu celular. ",
          "common.content.group.note.updated": "Nota nueva.",
          "common.content.group.note.updated.myself": "Nota nueva",
          "common.content.groupboard.from.buddy":
            "%1 actualiz\xf3 el muro del grupo.",
          "common.content.groupboard.from.me":
            "Se actualiz\xf3 el muro del grupo.",
          "common.content.home.shared": "Se comparti\xf3 el post de %1.",
          "common.content.home.shared.myself": "Se comparti\xf3 el post de %1.",
          "common.content.image": "%1 mand\xf3 una foto.",
          "common.content.image.mine": "Mandaste una foto.",
          "common.content.invite": 'Te invitaron a "%1".',
          "common.content.location.from.buddy":
            "%1 te mand\xf3 una ubicaci\xf3n.",
          "common.content.location.from.me": "Compartiste tu ubicaci\xf3n.",
          "common.content.mantoman.note.newpost": "Nota nueva",
          "common.content.mantoman.note.newpost.myself": "Nota nueva",
          "common.content.normal": "te mand\xf3 un mensaje.",
          "common.content.pdf": "%1 mand\xf3 un archivo PDF.",
          "common.content.pdf.mine": "Mandaste un archivo PDF.",
          "common.content.presence.join": "%1 se uni\xf3 al chat.",
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
          "common.content.sticker": "%1 mand\xf3 un sticker.",
          "common.content.sticker.gift.from.buddy":
            "\xa1Te lleg\xf3 un regalo de %1!",
          "common.content.sticker.gift.from.me": "Mandaste un regalo.",
          "common.content.sticker.mine": "Mandaste un sticker.",
          "common.content.theme.gift.from.buddy":
            "\xa1Lleg\xf3 un regalo de %1!",
          "common.content.theme.gift.from.me": "Mandaste un regalo.",
          "common.content.timeline.post":
            "Haz clic para ver el post en el navegador.",
          "common.content.video": "%1 mand\xf3 un archivo de video.",
          "common.content.video.mine": "Mandaste un archivo de video.",
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
          "common.date.format.short": "d.M.",
          "common.delete": "Eliminar",
          "common.desc.macupdate": "Actualiza tu Mac OS.",
          "common.desc.temporary.error":
            "No pudimos procesar tu solicitud debido a un error temporal.",
          "common.error.image.scan":
            "No puedes escanear el texto de las im\xe1genes que hayan expirado.",
          "common.error.ocr.failed":
            "No se pudo convertir el texto. Elige otro idioma e int\xe9ntalo de nuevo.",
          "common.error.ocr.unknown": "No se puede convertir esta imagen.",
          "common.error.translation.failed":
            "No se puede traducir el texto. Edita el texto o configura otro idioma.",
          "common.friday": "Viernes",
          "common.friday.short": "vi",
          "common.label.auto.slang": "Detectar idioma",
          "common.label.code": "Escanear c\xf3digo QR",
          "common.label.copy": "Copiar",
          "common.label.cut": "Cortar",
          "common.label.date": "Fecha",
          "common.label.delete": "Eliminar",
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
          "common.label.moveURL": "Ir a la URL",
          "common.label.ocr": "Escanear texto",
          "common.label.ocrlang": "Convertido",
          "common.label.paste": "Pegar",
          "common.label.redo": "Rehacer",
          "common.label.selectAll": "Seleccionar todo",
          "common.label.slang": "Original",
          "common.label.text.placeholder": "Ingresa este n\xfamero",
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
          "common.loading": "Leyendo\u2026",
          "common.loading.splash": "Cargando...",
          "common.mac.upgrader.title": "LINE tiene una nueva actualizaci\xf3n.",
          "common.menu.copyToClipboard": "Copiar al portapapeles",
          "common.menu.delete": "Eliminar",
          "common.menu.forward": "Compartir",
          "common.menu.reply": "Responder",
          "common.menu.saveAs": "Guardar como...",
          "common.monday": "Lunes",
          "common.monday.short": "lu",
          "common.msg.already.new.version":
            "Ya tienes la versi\xf3n m\xe1s reciente.",
          "common.msg.bot.openapi":
            "%2.es el administrador de %1\n.Ve al enlace para m\xe1s informaci\xf3n acerca del uso que LY Corporation le da a tu informaci\xf3n personal enviada al administrador de cuenta o cualquier informaci\xf3n personal que env\xedes al administrador de cuenta.",
          "common.msg.bot.openapi.agree": "Acepto",
          "common.msg.bot.openapi.link": "http://me2.do/FYc54WAQ",
          "common.msg.bot.openapi.title": "Acepto enviar informaci\xf3n",
          "common.msg.checking.version": "Buscando actualizaciones...",
          "common.msg.db.optimize":
            "Optimizando tu LINE\npara mejorar el funcionamiento...\nAcabamos enseguida.",
          "common.msg.db.optimize.complete":
            "Se complet\xf3 la optimizaci\xf3n.",
          "common.msg.db.optimize.error":
            "Debido a un error temporal\nno se pudo completar la optimizaci\xf3n.\nSe reiniciar\xe1 LINE.",
          "common.msg.favorite.exceeded":
            "Solo puedes tener hasta 100 favoritos.",
          "common.msg.has.new.version": "Hay una nueva versi\xf3n disponible",
          "common.msg.has.new.version.alert":
            "\xa1Hay una nueva versi\xf3n!\n\xbfActualizas? ",
          "common.msg.invitation.overflow":
            "Solo puedes invitar hasta %1 personas.",
          "common.msg.license.opensource": "Avisos legales",
          "common.msg.sticker.need.mobile.download":
            "Desc\xe1rgatelos primero en tu dispositivo m\xf3vil.\nPuedes descargarlos desde Configuraci\xf3n > Stickers > Mis stickers; o desde la tienda de Stickers.",
          "common.msg.terms": "T\xe9rminos de uso",
          "common.msg.update.button.label": "Actualizar",
          "common.msg.update.button.label.mac": "Ir a App Store",
          "common.msg.warning.autoLogin":
            "Se iniciar\xe1 sesi\xf3n autom\xe1ticamente al abrir la aplicaci\xf3n.\nUsa esta opci\xf3n solo en tu PC para proteger tu informaci\xf3n personal.",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "Ten a la mano toda la informaci\xf3n y comp\xe1rtela con las Notas.",
          "common.notice.dontremind": "No volver a mostrar.",
          "common.notice.label.close": "Cerrar",
          "common.notice.meta.url": "line_desktop_notice/EN/1135",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/EN/1136",
          "common.notice.title": "Avisos",
          "common.ocr.agree.desc":
            "Tus fotos se enviar\xe1n a nuestros servidores mientras se usa esta funci\xf3n. \xbfAceptas enviar tus fotos a LY Corporation?",
          "common.ocr.agree.title": "Proporcionar fotos",
          "common.ocr.mlstatus.off":
            "Parece que no quieres enviar tus im\xe1genes para mejorar el servicio. Recuerda que puedes cambiar de idea en cualquier momento desde la app LINE de tu celular.",
          "common.ocr.mlstatus.on":
            "Este \xedcono aparecer\xe1 si env\xedas tus im\xe1genes para mejorar el servicio. Recuerda que puedes cambiar de idea en cualquier momento desde la app LINE de tu celular.",
          "common.ocr.tooltip":
            "\xa1Prueba la funci\xf3n de traducci\xf3n instant\xe1nea!",
          "common.ocrlang.tooltip":
            "Elige el idioma al que vas a convertir la imagen.",
          "common.off": "No",
          "common.on": "Activar",
          "common.picture.popup.saveImageError": "Error al guardar la imagen.",
          "common.picture.popup.showImageError": "Error al cargar la imagen.",
          "common.pm": "p.m.",
          "common.popup.force.update":
            "Debes actualizar LINE.\nActualiza y reinicia la aplicaci\xf3n.",
          "common.popup.force.update.confirm":
            "Actualiza para poder usar LINE.",
          "common.popup.force.update.inapp":
            "Debes actualizar LINE.\nActualiza y reinicia la aplicaci\xf3n.",
          "common.popup.force.update.later":
            "Te lo recordaremos de nuevo en una hora.",
          "common.popup.queryUpgrade":
            "\xa1Hay una nueva versi\xf3n!\n\xbfActualizas ahora? ",
          "common.popup.sendkey.msg.mac": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.sendkey.msg.win": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.serverAPI.error.update":
            "Tienes que actualizar LINE.\n\xbfQuieres actualizar ahora?",
          "common.prepare.service":
            "Si ya tienes la \xfaltima versi\xf3n de LINE,\nquiere decir que todav\xeda no est\xe1 listo tu sistema operativo.",
          "common.push.mac.versionUpdate": "Actualiza tu LINE.",
          "common.report.done": "Mandaste el reporte",
          "common.report.reason.desc":
            "\xbfPor qu\xe9 quieres enviar este reporte?",
          "common.request.error":
            "Se produjo un error desconocido.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "common.saturday": "S\xe1bado",
          "common.saturday.short": "s\xe1b",
          "common.search.error.length": "M\xednimo 2 caracteres.",
          "common.search.invalidtext":
            "No incluyas s\xedmbolos especiales en las palabras clave.",
          "common.seeall": "Ver todo",
          "common.share.url.copied": "Se copi\xf3.",
          "common.sunday": "Domingo",
          "common.sunday.short": "do",
          "common.thursday": "Jueves",
          "common.thursday.short": "ju",
          "common.time.format": "H:mm",
          "common.toast.album.delete": "Se elimin\xf3 este \xe1lbum.",
          "common.toast.album.rename": "Se cambi\xf3 el nombre del \xe1lbum.",
          "common.toast.albumCreated": "Se cre\xf3 un \xe1lbum nuevo. ",
          "common.toast.audio": "Enviaste un mensaje de voz.",
          "common.toast.chatevent.unknown":
            "Esta notificaci\xf3n no est\xe1 disponible.",
          "common.toast.contact": "Comparti\xf3 la info de un contacto.",
          "common.toast.file": "Mandaste un archivo.",
          "common.toast.gift": "Se envi\xf3 el regalo.",
          "common.toast.image": "envi\xf3 una foto.",
          "common.toast.inviteGroup": "Te invitaron a un grupo.",
          "common.toast.label.newMessage": "Tienes un mensaje nuevo.",
          "common.toast.linemusic": "M\xfasica compartida.",
          "common.toast.location": "",
          "common.toast.note": "Nota nueva.",
          "common.toast.receiverequest": "Pending money request.",
          "common.toast.sticker": "Sticker enviado.",
          "common.toast.timeline.group.invite": "Te invitaron a un grupo.",
          "common.toast.timeline.new.comment": "\xa1Rev\xedsalo!",
          "common.toast.timeline.new.mention": "Te mencionaron.",
          "common.toast.timeline.new.post": "Nota nueva.",
          "common.toast.timeline.new.sticker": "\xa1Rev\xedsalo!",
          "common.toast.timeline.title.comment": "Comentario de %1",
          "common.toast.timeline.title.like": "Me Gusta de %1",
          "common.toast.timeline.title.recomment": "Respuesta de %1",
          "common.toast.video": "Se envi\xf3 el video.",
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
            "Act\xedvalo para mostrar la traducci\xf3n en la foto instant\xe1neamente.",
          "common.tuesday": "Martes",
          "common.tuesday.short": "ma",
          "common.unsupported.version.message":
            "No es compatible con esta versi\xf3n.\nNecesitas la \xfaltima versi\xf3n de LINE.",
          "common.update.popup.win10": "Actualiza tu LINE.",
          "common.updater": "Actualizar ahora",
          "common.updater.autoUpdate": "Actualizar autom\xe1ticamente",
          "common.updater.autoUpdate.apply":
            "<![CDATA[\xbfActualizas tu LINE?\n<font color='#9e9e9e'>Se restaurar\xe1 LINE.\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "Hay una versi\xf3n nueva de LINE.\nSi aceptas, LINE se reiniciar\xe1",
          "common.updater.newVersion.confirm":
            "Tienes la \xfaltima versi\xf3n de LINE.",
          "common.updater.newVersion.download.apply":
            "<![CDATA[Finaliz\xf3 la descarga.\n\xbfInstalar ahora?\n<font color='#9e9e9e'>Si aceptas, LINE se reiniciar\xe1</font>]]>",
          "common.updater.newVersion.downloading": "Descargando...\n",
          "common.updater.newVersion.incompleted":
            "Actualizaci\xf3n incompleta.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "common.updater.newVersion.low.hardDisk":
            "No hay espacio suficiente en tu disco.\nLib\xe9ralo\ny vuelve a intentarlo.",
          "common.updater.notice.description": "Novedades",
          "common.updater.notice.history": "Historial de actualizaciones",
          "common.updater.notice.title": "Actualizar",
          "common.updater.notice.updated": "La nueva versi\xf3n est\xe1 lista.",
          "common.wednesday": "Mi\xe9rcoles",
          "common.wednesday.short": "mi",
          "common.yearMonth.format": "yyyy MMMM",
          "common.yesterday": "Ayer",
          "creategroup.button.create": "Crear",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "Se unir\xe1n en cuanto les invites. Tambi\xe9n puedes modificar estos ajustes para solicitar que acepten antes de unirse. ",
          "creategroup.checkbox.title.membersjoinautomatically":
            "Unirse autom\xe1ticamente",
          "creategroup.label.membercount": "Miembros",
          "creategroup.placeholder.entergroupname": "Nombre de Grupo",
          "creategroup.placerholder.defaultname.autojoinoff": "Grupo de %1",
          "creategroup.popup.desc.100memberswarning":
            "Tienen que aceptar una invitaci\xf3n para unirse a grupos con m\xe1s de 100 participantes. \nLimita el grupo a menos de 100 para que puedan unirse autom\xe1ticamente.",
          "creategroup.popup.desc.invitelocked":
            "Si no quieres usar esta funci\xf3n, mant\xe9n el l\xedmite de participantes inferior a 100.",
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
          "creategroup.title.setupProfile": "Perfil del grupo",
          "creategroup.toggle.desc.requireinvite":
            "Los usuarios invitados tienen que aceptar la invitaci\xf3n para unirse al grupo. Esta opci\xf3n no se puede deshabilitar luego de que se cree el grupo.",
          "creategroup.toggle.title.requireinvite":
            "Unirse a trav\xe9s de invitaciones",
          "creategroup.tooltip.groupname":
            "Ponle un nombre que sea f\xe1cil de reconocer para tus Amigos.",
          "creategrouppopup.desc.toomanymembers":
            "Limita el grupo a menos de 100 participantes para que puedan unirse autom\xe1ticamente.",
          "deletedata.chatHisotry.all.desc.confirm":
            "\xbfEliminas los historiales de chat de todos los dispositivos? Recuerda que no se podr\xe1n recuperar.",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "\xbfEliminas los historiales de chat de este dispositivo? Recuerda que no se podr\xe1n recuperar. ",
          "desktop.addchatfolder.button.add": "Crear",
          "desktop.addchatfolder.placeholder.entername": "Nombre carpeta",
          "desktop.addchatfolder.title.addnewfolder": "Crear carpeta",
          "desktop.addchatpopup.button.add": "Agregar",
          "desktop.addchatpopup.button.cancel": "Cancelar",
          "desktop.addchatpopup.desc.allchats": "Todos los chats",
          "desktop.addchatpopup.desc.selected": "%1\xa0elegido",
          "desktop.addchatpopup.placeholder.search": "Buscar",
          "desktop.addchatpopup.title.addchats": "Agregar chats a esta carpeta",
          "desktop.addfriends.desc.recommendedai": "Cuentas AI para ti",
          "desktop.addtoalbum.button.cancel": "Cancelar",
          "desktop.addtoalbum.button.createalbum": "Crear \xe1lbum",
          "desktop.addtoalbum.title.selectalbum": "Elegir \xe1lbum",
          "desktop.album.allalbums.button.albums": "\xc1lbum",
          "desktop.album.allalbums.button.photos": "Fotos",
          "desktop.album.allalbums.desc.albumsempty":
            "Aqu\xed se muestran todos los \xe1lbumes creados en tus chats.",
          "desktop.album.allalbums.desc.dateformat": "MMMM yyyy",
          "desktop.album.allalbums.desc.photosempty":
            "Los art\xedculos a\xf1adidos a los \xe1lbumes se mostrar\xe1n aqu\xed.",
          "desktop.album.allalbums.menu.lastcreated": "\xdaltima creaci\xf3n",
          "desktop.album.allalbums.menu.lastupdated":
            "\xdaltima actualizaci\xf3n",
          "desktop.album.allalbums.title.allalbums": "Todos los \xe1lbumes",
          "desktop.album.allalbums.title.photosempty": "Nada por aqu\xed.",
          "desktop.album.allalbums.title.unableshow":
            "No se pueden mostrar los \xe1lbumes.\nInt\xe9ntalo m\xe1s tarde.",
          "desktop.album.allalbums.tooltip.allalbums":
            "Aqu\xed se muestran todos los \xe1lbumes de tus chats. Tambi\xe9n se incluyen los de los chats ocultos y eliminados de tu lista.",
          "desktop.album.button.add": "Agregar",
          "desktop.album.button.cancel": "Cancelar",
          "desktop.album.button.create": "Crear",
          "desktop.album.button.namechangedone": "Guardar",
          "desktop.album.button.share": "Compartir",
          "desktop.album.button.sharealbum": "Compartir \xc1lbum",
          "desktop.album.commonkey.button.tryagain": "Reintentar",
          "desktop.album.desc.albumphotos.one": "%n foto",
          "desktop.album.desc.albumphotos.other": "%n fotos",
          "desktop.album.desc.draganddrop":
            "Arrastra y suelta los \xedtems aqu\xed.",
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
            "No se puede mostrar el art\xedculo.\nInt\xe9ntelo de nuevo.",
          "desktop.backgroundsetting.button.deletecover":
            "Eliminar portada perfil",
          "desktop.backgroundsetting.button.selectphoto": "Elegir foto",
          "desktop.blankchatfolder.button.addchat": "Agregar chat",
          "desktop.blankchatfolder.desc.nochats":
            "Esta carpeta a\xfan no tienen chats.",
          "desktop.blankchatfolder.desc.nochats1":
            "Arrastra un chat o agr\xe9galo directamente.",
          "desktop.calendar.button.recent": "Recientes",
          "desktop.calendar.desc.month": "MMM",
          "desktop.calendar.desc.year": "yyyy",
          "desktop.callsettings.desc.showmessagealerts":
            "Mostrar notificaciones de mensajes nuevos durante las llamadas",
          "desktop.chat.choose.empty": "No tienes chats para elegir.",
          "desktop.chat.popup.blockeduser.button.close": "No reportar",
          "desktop.chat.popup.blockeduser.button.report": "Reportar",
          "desktop.chat.popup.blockeduser.desc":
            "Si este usuario es sospechoso o est\xe1 enviando spam, no dudes en reportarlo. Con tu reporte, nos ayudas a incrementar la seguridad en LINE.",
          "desktop.chat.popup.blockeduser.title": "\xbfReportas a %1?",
          "desktop.chat.toast.chatunhidden": "Este chat ya no est\xe1 oculto.",
          "desktop.chat.warning.btn.addfriend": "Agregar Amigo",
          "desktop.chat.warning.btn.blockfriend": "Bloquear",
          "desktop.chat.warning.btn.decline": "Rechazar",
          "desktop.chat.warning.btn.join": "Unirse",
          "desktop.chat.warning.btn.leave": "Salir",
          "desktop.chat.warning.btn.report": "Reportar",
          "desktop.chat.warning.btn.unblockfriend": "Desbloquear",
          "desktop.chatfolder.tab.all": "Todo",
          "desktop.chatfolder.tab.friends": "Amigos",
          "desktop.chatfolder.tab.groups": "Grupos",
          "desktop.chatfolder.tab.newfolder": "Carpeta %1",
          "desktop.chatfolder.tab.officialaccounts": "Cuentas oficiales",
          "desktop.chatfolder.tab.openchats": "OpenChats",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "%1 chats agregados a la carpeta.",
          "desktop.chatfolder.toast.addedtofolderone":
            "1 chat agregado a la carpeta.",
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
            "Agrega una carpeta con el icono en la esquina derecha.",
          "desktop.chatfolderguide.desc.desc2":
            "Haz clic derecho en una carpeta para los ajustes.",
          "desktop.chatfolderguide.desc.desc3":
            "Arrastra una carpeta para cambiar de orden.",
          "desktop.chatfolderguide.desc.editdragchange":
            "Arrastra una carpeta para cambiar de orden. Crea una nueva con +.",
          "desktop.chatfolderguide.desc.title":
            "Organiza tus chats en las Categor\xedas chats.",
          "desktop.chatfoldermenu.button.addchat": "Agregar chat",
          "desktop.chatfoldermenu.button.changefoldername":
            "Cambiar nombre carpeta",
          "desktop.chatfoldermenu.button.deletefolder": "Eliminar carpeta",
          "desktop.chatfoldermenu.button.mutefolder": "Silenciar carpeta",
          "desktop.chatfoldermenu.button.readall": "Ya los le\xed",
          "desktop.chatfoldermenu.button.removechat": "Quitar chat",
          "desktop.chatfoldermenu.button.unmutefolder": "Notificar carpeta",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "No puedes agregar todos tus chats a una carpeta.",
          "desktop.chatfoldermenu.toast.uptoten":
            "M\xe1ximo 10 categor\xedas chats.",
          "desktop.chatfolderpopup.button.ok": "OK",
          "desktop.chatfolderpopup.desc.chatfolder":
            'Haz clic en "+" en la parte superior de las Categor\xedas chats y organiza tus chats como quieras.',
          "desktop.chatfolderpopup.desc.folderlineup":
            "Arrastra las carpetas y ponlas en el orden que quieras.",
          "desktop.chatfolderpopup.desc.managefolder":
            "Haz clic derecho para los ajustes.",
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
          "desktop.chatmenu.button.addtoalbum": "Agregar a un \xc1lbum",
          "desktop.chatssettings.desc.chateffects":
            "Reproduce fondos animados en los chats.",
          "desktop.chatssettings.subtitle.chateffects": "Fondos animados",
          "desktop.codecerror.desc.unabletoplay":
            "No se puede reproducir el archivo por un error en el c\xf3dec del video.",
          "desktop.common.go.to.settings": "Ir a Configuraci\xf3n",
          "desktop.common.index.chats": "Chats",
          "desktop.common.index.favorites": "Favoritos",
          "desktop.common.index.friends": "Amigos",
          "desktop.common.index.groups": "Grupos",
          "desktop.common.index.recentlyshared": "Recientes",
          "desktop.common.report": "Reportar",
          "desktop.defaultprofile.button.cancel": "Cancelar",
          "desktop.defaultprofile.button.save": "Guardar",
          "desktop.defaultprofile.title.selectdefault":
            "Elegir de las plantillas",
          "desktop.deletefolderpopup.button.cancel": "Cancelar",
          "desktop.deletefolderpopup.button.delete": "Eliminar",
          "desktop.deletefolderpopup.desc.deletefolder":
            '\xbfEliminas la carpeta "%1"? Si eliminas esta carpeta, los chats se mover\xe1n a sus carpetas predeterminadas.',
          "desktop.download.popup.call": "Descargando plugin llamada...",
          "desktop.download.popup.calldone":
            "Descarga completa. Ya puedes hacer y recibir llamadas.",
          "desktop.download.popup.plugin":
            "Descargando plugin para crear GIF...",
          "desktop.download.popup.plugindone":
            "Descarga completa. Ya puedes crear tus GIFs.",
          "desktop.download.popup.pluginnetworkerror":
            "Comprueba tu conexi\xf3n.",
          "desktop.download.popup.pluginnospace":
            "No tienes espacio libre en tu dispositivo. Libera espacio e int\xe9ntalo de nuevo.",
          "desktop.download.popup.pluginunexpectederror":
            "Error al descargar los plugin.\nInt\xe9ntalo de nuevo.",
          "desktop.download.popup.viewer": "Descargando plugin visor...",
          "desktop.download.popup.viewerdone":
            "Descarga completa. Selecciona un archivo para abrirlo en el visor.",
          "desktop.dragndrop.button.addfiles": "Agregar archivos",
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
            "No se pudo enviar el mensaje debido a un error del servidor. Prueba de nuevo en la versi\xf3n de LINE para tel\xe9fonos inteligentes.",
          "desktop.errorpopup.desc.remobiles":
            "No se pudo enviar el mensaje al grupo debido a un error del servidor. Prueba de nuevo en la versi\xf3n de LINE para tel\xe9fonos inteligentes.",
          "desktop.errorpopup.desc.renewmembership":
            "Cambi\xf3 el estado de tu membres\xeda LYP Premium. Comprueba tu membres\xeda e int\xe9ntalo de nuevo.",
          "desktop.errorpopup.desc.revisedtermsofuse":
            "No se pudo agregar los \xedtems porque no aceptaste la revisi\xf3n de las cl\xe1usulas del uso de informaci\xf3n. En tu dispositivo m\xf3vil, agrega videos o fotos en su calidad original y acepta las pol\xedticas actualizadas.",
          "desktop.errorpopup.title.resend": "Reenviar este mensaje",
          "desktop.favoritethreads.desc.nothreads":
            "Pulsa el \xedcono de estrella en la esquina superior derecha de los Hilos correspondientes para agregarlos a tus favoritos.",
          "desktop.fileshare.button.cancel": "Cancelar",
          "desktop.fileshare.button.open": "Compartir",
          "desktop.fileshare.desc.unsafefile":
            "\xbfCompartes este archivo con otro usuario?\n\n%1",
          "desktop.foldermenu.button.moveto": "Mover a",
          "desktop.friends.choose.empty": "No hay Amigos para elegir",
          "desktop.friendssearch.title.friendssearch": "Buscar amigos",
          "desktop.gprofilesetting.button.capturescreen": "Capturar pantalla",
          "desktop.gprofilesetting.button.createtext": "Crear texto perfil",
          "desktop.gprofilesetting.button.deleteprofile":
            "Eliminar foto perfil",
          "desktop.gprofilesetting.button.selectdefault":
            "Elegir de las plantillas",
          "desktop.gprofilesetting.button.selectphoto": "Elegir foto",
          "desktop.group.choose.empty": "No hay grupos para elegir.",
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
          "desktop.line.chatmenu.title.albumsempty": "Non ci sono album.",
          "desktop.login.button.gotoemailwithPhoneNumber":
            "Iniciar sesi\xf3n con mi e-mail",
          "desktop.login.button.gotosmartphone":
            "Entrar con tel\xe9fono inteligente",
          "desktop.login.button.loginwithsmartphone": "Entrar con tel\xe9fono",
          "desktop.login.desc.transferring": "Transfiriendo tu cuenta de LINE",
          "desktop.login.desc.verification":
            "Si no puedes acceder a LINE, transfiere la cuenta a tu tel\xe9fono.",
          "desktop.login.popup.scanqr":
            "Escanea este c\xf3digo QR con tu tel\xe9fono y elige Contrase\xf1a para configurar una nueva.",
          "desktop.login.popup.seeonmobile":
            "Resetea tu contrase\xf1a en tu tel\xe9fono.",
          "desktop.login.popupbutton.gotit": "C\xf3digo de verificaci\xf3n",
          "desktop.login.popupdesc.cancelverification":
            "No verificar mi identidad",
          "desktop.login.popupdesc.loggingin":
            "Verifica tu identidad con tu tel\xe9fono.",
          "desktop.login.popupdesc.pairingverificationcode":
            "Abre LINE con tu tel\xe9fono e ingresa el c\xf3digo de 6 d\xedgitos en Configuraci\xf3n > Cuenta > Emparejar.",
          "desktop.login.popupdesc.pairingverificationcodeguide":
            "Vincula la cuenta de tu tel\xe9fono\n\n1. Abre LINE con tu tel\xe9fono.\n2. Ve a Configuraci\xf3n > Cuenta > Emparejar.\n3. Ingresa el c\xf3digo de verificaci\xf3n de 6 d\xedgitos.\nSelecciona \u201cC\xf3digo de verificaci\xf3n\u201d para continuar.",
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
          "desktop.mypsticker.desc.getmore": "M\xe1s stickers Premium",
          "desktop.mypsticker.desc.maximum":
            "Puedes guardar hasta %1 sets de stickers Premium a la vez.",
          "desktop.mypsticker.desc.nosticker":
            "Tus stickers Premium saldra\u0301n aqu\xed.",
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
          "desktop.mysticker.desc.stopshowemoji":
            "\xbfQuieres cancelar la descarga de todos los emoticones?",
          "desktop.mysticker.desc.stopshowsticker":
            "\xbfQuieres cancelar la descarga de todos los stickers?",
          "desktop.mystickers.desc.noexpire": "No expiran",
          "desktop.mystickers.desc.nolongerp": "Ya no est\xe1 en Premium",
          "desktop.mystickers.desc.passedtime": "Expirados",
          "desktop.mystickers.desc.until": "V\xe1lido hasta %1",
          "desktop.mystickers.tooltip.hide": "Ocultar",
          "desktop.mystickers.tooltip.show": "Mostrar",
          "desktop.noin87notice.button.download": "Descargar",
          "desktop.noin87notice.desc.supportend":
            "LINE ya no est\xe1 disponible para las versiones Windows 7 y 8. Desc\xe1rgate la versi\xf3n compatible m\xe1s actualizada con este bot\xf3n.",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "En ciertos casos, es posible que tus mensajes anulados se sigan mostrando al receptor, dependiendo de los ajustes de sistema de la administraci\xf3n de las cuentas oficiales. \xbfAnulas este mensaje?",
          "desktop.ocr.popup.toobig": "M\xe1ximo 5 MB.",
          "desktop.openchatsetting.popup.onmobile":
            "Cambia estos ajustes con el LINE en tu tel\xe9fono.",
          "desktop.premiumhistory.desc.history":
            "Estos Premium stickers no los has usado durante el \xfaltimo a\xf1o.",
          "desktop.premiumpopup.button.canceleold": "Cancelar",
          "desktop.premiumpopup.button.deleteold": "Eliminar",
          "desktop.premiumpopup.button.edit": "Editar stickers",
          "desktop.premiumpopup.desc.downloadlimit":
            "Tienes %1 sets de Premium sticker en tu colecci\xf3n. Para descarg\xe1rtelo elimina alg\xfan set de tu colecci\xf3n primero.",
          "desktop.premiumpopup.desc.notavailablee":
            "Ya no est\xe1 disponible en LINE Stickers Premium. \xbfLo quitas de tu lista?",
          "desktop.premiumpopup.desc.notavailables":
            "Ya no est\xe1 disponible en LINE Stickers Premium. \xbfLo quitas de tu lista?",
          "desktop.premiumpopup.title.downloadlimit": "L\xedmite descarga",
          "desktop.profile.desc.video15secs":
            "Los videos de portada deben de ser de menos de 15 segundos.",
          "desktop.profile.desc.video6secs":
            "Los videos de perfil deben de ser de menos de 6 segundos.",
          "desktop.profileselectphoto.button.cancel": "Cancelar",
          "desktop.profileselectphoto.button.save": "Guardar",
          "desktop.profilesetting.button.capturescreen": "Capturar pantalla",
          "desktop.profilesetting.button.createtext": "Crear texto perfil",
          "desktop.profilesetting.button.deleteprofile": "Eliminar foto perfil",
          "desktop.profilesetting.button.selectdefault":
            "Elegir de las plantillas",
          "desktop.profilesetting.button.selectphoto": "Elegir foto",
          "desktop.profilesetting.popup.500savechat":
            "Los \xfaltimos 500 mensajes enviados al chat se guardar\xe1n en un archivo de texto.",
          "desktop.quickreply.popup.notonpc":
            "No disponible en las versiones para PC de LINE.",
          "desktop.reaction.button.ok": "OK",
          "desktop.reaction.button.seemore": "M\xe1s",
          "desktop.reaction.desc.error":
            "No se pudo reaccionar a este mensaje. Prueba luego.",
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
            "Haz clic en el icono de sonrisa y reacciona a la foto",
          "desktop.removechatpopup.button.cancel": "Cancelar",
          "desktop.removechatpopup.button.remove": "Quitar",
          "desktop.removechatpopup.desc.allchats.one": "%1 chats en la carpeta",
          "desktop.removechatpopup.desc.allchats.other":
            "%1 chats en la carpeta",
          "desktop.removechatpopup.desc.selected": "%1\xa0elegido",
          "desktop.removechatpopup.placeholder.search": "Buscar",
          "desktop.removechatpopup.title.removechats":
            "Quitar chats de esta carpeta.",
          "desktop.restorepopup.button.ignore": "Omitir",
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
            "Si cierras la aplicaci\xf3n, puede que tarden en llegar las notificaciones o que no lleguen.",
          "desktop.settings.notifications.turnonm":
            "Activa las notificaciones de LINE en los ajustes de tu dispositivo.",
          "desktop.settings.notifications.turnonw":
            "Activa las notificaciones para LINE de tu dispositivo en Ajustes > Sistema > Notificaciones y acciones.",
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
          "desktop.stickertab.button.seemore": "Ver m\xe1s",
          "desktop.stickertab.desc.latestemoji":
            "Los \xfaltimos Emoticones de %1",
          "desktop.stickertab.desc.lateststicker":
            "Los \xfaltimos Stickers de %1",
          "desktop.tab.button.ai": "AI",
          "desktop.textprofile.button.cancel": "Cancelar",
          "desktop.textprofile.button.save": "Guardar",
          "desktop.textprofile.desc.defaultfont": "Predeterminada",
          "desktop.textprofile.placeholder.entertext": "Ingresa un texto",
          "desktop.textprofile.title.createtextprofile": "Crear texto perfil",
          "desktop.thread.desc.sendfiletothread": "Enviar archivos al chat",
          "desktop.thread.tooltip.taphere":
            "Pulsa aqu\xed y agrega o quita el Hilo de favoritos.",
          "desktop.updatepopup.button.later": "M\xe1s tarde",
          "desktop.updatepopup.button.update": "Actualizar",
          "desktop.updatepopup.desc.update1":
            "LINE %1 ya no se puede usar. Actualiza tu LINE (se reiniciar\xe1 la app).",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1 ya no se puede usar. Actualiza tu LINE desde la App Store.",
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
          "dialog.download.messagesub": "Espera un momento.",
          "displayname.error.badwords":
            "No puedes usar este nombre.\nIntenta usar otro. ",
          "duplicategroup.popup.button.gotochatmultiple": "Abrir grupo",
          "duplicategroup.popup.createnewgroup": "Crear grupo",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "Ya tienes un grupo con estos participantes\xa0(%1). \xbfAbres este grupo?",
          "duplicategroup.popup.desc.selfchatexists":
            "Ya tienes un grupo contigo como \xfanico participante\xa0(%1). \xbfAbres este grupo?",
          "duplicategroup.popup.title.groupexists": "Ya existe",
          "e2ee.auth.pincode.timeout":
            "Se produjo un error.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "e2ee.message.title": "No se puede descifrar el mensaje",
          "e2ee.popupbutton.ok": "OK",
          "e2ee.popupdesc.pleaseresend":
            "Mensaje no disponible por motivos de seguridad. Pide al emisor que lo vuelva a enviar.",
          "e2ee.popupdesc.securityerror":
            "No se puede abrir por motivos de seguridad.",
          "e2ee.popuptitle.securityerror": "Error de seguridad",
          "emoji.downloadAll.confirm": "\xbfDescargas todos los Emoticones?",
          "friend.msg.block":
            "\xbfBloqueas a %1? Esta cuenta no te mandar\xe1 m\xe1s mensajes. Puedes desbloquearla desde Configuraci\xf3n > Amigos > Cuentas bloqueadas.",
          "friend.msg.hide":
            "\xbfOcultas a %1? Puedes revertir este proceso desde Configuraci\xf3n > Amigos > Cuentas ocultas.",
          "gallery.picker.original.btn": "Original",
          "gnb.guide.allNotification.text":
            "Silencia todas las notificaciones con un toque y que no te molesten.",
          "group.btn.add.title": "Invitar",
          "group.btn.cancel.title": "Cancelar",
          "group.btn.cancelinvite.title": "Cancelar",
          "group.btn.invite.title": "Invitar Amigos",
          "group.btn.removeMember.title": "Eliminar",
          "group.button.invitefrineds": "Invitar",
          "group.label.addprofile.title": "Editar",
          "group.label.create.title": "Crea un grupo",
          "group.label.groupname.title": "Nombre del grupo",
          "group.label.invitee.title": "Pendientes",
          "group.label.member.title": "Miembros",
          "group.label.modify.title": "Editar este grupo",
          "group.label.modifyprofile.title": "Editar",
          "group.label.nobuddy.title": "No hay miembros",
          "group.label.nobuddytoselect.title": "Vamos, elige a alguien.",
          "group.label.nosearchresult.title": "Sin resultados.",
          "group.label.nothing.title": "No elegiste a un Amigo.",
          "group.label.selectmember.title": "Invitar miembros",
          "group.label.unauthorized": "No tienes autoridad en este grupo.",
          "group.menu.delete": "Eliminar",
          "group.menu.leave": "Salir",
          "group.msg.cancelInvite.confirm":
            "%1 a\xfan no se une. \xbfRetiras la invitaci\xf3n?",
          "group.msg.cancelinvite.failed":
            "No se pudo cancelar la invitaci\xf3n.",
          "group.msg.empty.name": "Escribe el nombre del grupo.",
          "group.msg.kickoutmember.confirm": "\xbfEliminas %1?",
          "group.msg.kickoutmember.failed": "No se pudo eliminar.",
          "group.msg.leavegroup.confirm":
            "Si dejas el grupo, no tendr\xe1s acceso a los miembros ni al historial del chat.",
          "group.msg.makegroup.failed": "No se pudo crear el grupo.",
          "group.msg.overflow.name":
            "M\xe1ximo 20 caracteres. Tendr\xe1s que ajustarte a ese l\xedmite.",
          "group.msg.uploadimge.failed": "No se pudo subir la foto.",
          "group.profile.delete": "Eliminar perfil",
          "group.profile.select.default": "Predeterminados",
          "group.profile.select.local": "Elegir desde mi PC.",
          "group.text.placerholder.title": "Nombre del grupo",
          "group.title.members": "Miembros",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "La funci\xf3n de conferencias est\xe1 \xfanicamente disponible para mayores de edad.",
          "groupcall.alert.popup.error.nowcalling":
            "No puedes hacer dos llamadas a la vez.\nTermina la llamada e int\xe9ntalo de nuevo.",
          "groupcall.call.change.to.video": "\xbfCambias a videollamada?",
          "groupcall.call.change.to.video.noCamera":
            "No se mostrar\xe1 tu video porque no se detect\xf3 una c\xe1mara. \xbfQuieres cambiar a videollamada?",
          "groupcall.call.endwatchtogether.button": "Dejar de compartir",
          "groupcall.call.invite.complete": "Invitaci\xf3n enviada.",
          "groupcall.call.invite.tooltip":
            "Presiona este bot\xf3n para invitar a otros del chat a unirse a la llamada grupal.",
          "groupcall.call.popupbutton.cancel": "Ahora no",
          "groupcall.call.popupbutton.switch": "Cambiar",
          "groupcall.call.popupdesc.newcam": '\xbfCambias a "%1"?',
          "groupcall.call.popupdesc.newmic": '\xbfCambias a "%1"?',
          "groupcall.call.popupdesc.newspeaker": '\xbfCambias a "%1"?',
          "groupcall.call.popuptitle.newcam": "C\xe1mara detectada",
          "groupcall.call.popuptitle.newmic": "Micr\xf3fono detectado",
          "groupcall.call.popuptitle.newspeaker": "Bocina detectada",
          "groupcall.call.speaker.many.few": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.many": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.one": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.other": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.two": "%1 y %2 m\xe1s",
          "groupcall.call.speaker.many.zero": "%1 y %2 m\xe1s",
          "groupcall.call.toast.loadingyoutube": "Cargando...",
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
          "groupcall.call.waiting.msg":
            "Esperando que los dem\xe1s se unan\u2026",
          "groupcall.call.watchtogether.button": "Compartir\npantalla",
          "groupcall.callsettings.button.numberofparticipants":
            "Participantes: %1",
          "groupcall.callsettings.tooltip.handsfreebt":
            "Configura %1 como micr\xf3fono y altavoz.",
          "groupcall.callsettingspreview.desc.nocamera":
            "No se te ver\xe1 porque parece que no tienes c\xe1mara. \xbfTe unes de todas formas?",
          "groupcall.callsettingspreview.desc.nomic":
            "No se te oir\xe1 porque parece que no tienes micr\xf3fono. \xbfTe unes de todas formas?",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "No se te oir\xe1 porque parece que no tienes micr\xf3fono. \xbfTe unes de todas formas?",
          "groupcall.chat.alert.popup.error.overflow":
            "Uf, demasiada gente llamando ahora.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "groupcall.chat.confirm.popup.cant":
            "No puedes participar en esta llamada grupal porque no te has unido al grupo.",
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
            "No hay llamadas grupales en curso.\n\xbfInicias una llamada?",
          "groupcall.chat.confirm.popup.start.btn.video":
            "Empezar videollamada",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "\xbfInicias una llamada grupal?",
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
          "groupcall.chat.layer.start.btn": "Iniciar",
          "groupcall.chat.layer.start.dscr": "Hacer una llamada grupal.",
          "groupcall.chat.layer.start.msg": "%1 inici\xf3 una llamada grupal.",
          "groupcall.chat.message.end": "Llamada grupal terminada.",
          "groupcall.chat.message.invite":
            "Te invitaron a la llamada grupal:\n%1",
          "groupcall.chat.message.start": "Llamada grupal iniciada.",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            'Te invitaron a la conferencia "%1" en LINE. \xdanete con este enlace: \n%2',
          "groupcall.chatlink.popupdesc.invalidlink": "Enlace no v\xe1lido.",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "Crea un enlace y comp\xe1rtelo con otros para empezar una llamada.",
          "groupcall.createchat.button.createmeeting": "Conferencias",
          "groupcall.deletemeeting.popupdesc.delete": "Eliminar",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "\xbfEliminas esta conferencia?",
          "groupcall.editmeetingname.popuptitle.edit": "Editar nombre",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "M\xe1ximo %1 en la llamada grupal.",
          "groupcall.groupcallsettings.title.participants": "Participantes ",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "Se quit\xf3 a %1 de la conferencia.",
          "groupcall.invite.index.not.join": "Pendiente",
          "groupcall.invite.selectall": "Elegir a todos",
          "groupcall.invite.title": "Invitar",
          "groupcall.kickout.popup":
            "La llamada finaliz\xf3 por haber sobrepasado el tiempo de espera.",
          "groupcall.leavemeeting.popupbutton.leave": "Salir",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "Si sales de esta conferencia, ya no ver\xe1s la lista de participantes ni el historial de chats.",
          "groupcall.meetingintroguide.button.start": "Crear conferencia",
          "groupcall.meetingintroguide.desc.disclaimers":
            "Este enlace tiene una validez de 90 d\xedas. Recuerda que el nombre y la foto del perfil de tu LINE se mostrar\xe1 cuando te unas o env\xedes un mensaje en el chat de la conferencia.",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "Este enlace tiene una validez de 90 d\xedas y \xfanicamente para mayores de edad. Recuerda que el nombre y la foto del perfil de tu LINE se mostrar\xe1 cuando te unas o env\xedes un mensaje en el chat de la conferencia.",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "Comparte el enlace y empieza la conferencia.",
          "groupcall.meetingintroguide.header.connect":
            "Conecta con\nun enlace.",
          "groupcall.meetingintroguide.title.meetings": "Conferencias",
          "groupcall.meetingnameedit.popupbutton.save": "Guardar",
          "groupcall.meetingparticipantlist.button.remove": "Quitar",
          "groupcall.meetingparticipants.button.next": "Siguiente",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "Buscar por nombre",
          "groupcall.meetingparticipants.title.reportuser": "Reportar",
          "groupcall.meetings.button.copymeetinglink": "Copiar enlace",
          "groupcall.meetings.button.createmeeting": "Crear conferencia",
          "groupcall.meetings.button.shareinvite": "Invitar",
          "groupcall.meetings.button.startmeeting": "Iniciar",
          "groupcall.meetings.desc.createdjustnow": "Justo ahora",
          "groupcall.meetings.desc.usersmeeting": "Conferencia de %1",
          "groupcall.meetings.popup.policyblock":
            "Tu cuenta se ha suspendido por violaci\xf3n de los t\xe9rminos de uso de LINE Meeting.",
          "groupcall.meetings.popupdesc.networkerror":
            "No se pudo cargar debido a un error temporal. Int\xe9ntalo m\xe1s tarde.",
          "groupcall.meetings.toast.meetingcreated": "Conferencia creada.",
          "groupcall.meetingscreen.tooltip.invitemorepeople":
            "Invitar a m\xe1s",
          "groupcall.participantlist.desc.cameraturnedoff": "C\xe1mara apagada",
          "groupcall.participantlist.desc.gridview":
            "Cambiar a vista galer\xeda",
          "groupcall.participantlist.desc.muted": "Silenciada",
          "groupcall.participantlist.desc.participantview":
            "Anclar a la pantalla enfoque",
          "groupcall.participantlist.placeholder.searchbyname":
            "Buscar por nombre",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "Se mostrar\xe1 el nombre y\nla foto del perfil de tu LINE.",
          "groupcall.removefrommeeting.popupbutton.remove": "Quitar",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "\xbfQuitas a %1 de la conferencia?",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "No se pudo realizar la acci\xf3n debido a un error temporal. Int\xe9ntalo m\xe1s tarde.",
          "groupcall.report.button.content": "Contenido inapropiado",
          "groupcall.report.button.harrassment": "Acoso sexual",
          "groupcall.report.button.impersonation": "Robo identidad",
          "groupcall.report.button.impersonation.inquirypopup":
            "Para poder analizar el caso, necesitamos que nos brindes informaci\xf3n detallada.",
          "groupcall.report.button.impersonation.inquirypopup.decline":
            "Omitir",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "Reportar",
          "groupcall.report.button.other": "Otros",
          "groupcall.report.button.report": "Reportar",
          "groupcall.report.button.scam": "Estafa",
          "groupcall.report.button.spam": "Spam/Publicidad",
          "groupcall.report.desc.reportreason":
            "Para analizar la situaci\xf3n, se enviar\xe1 la informaci\xf3n de este usuario y capturas de pantalla de la conferencia.",
          "groupcall.report.popupbutton.donotremove": "No",
          "groupcall.report.popupbutton.remove": "Expulsar",
          "groupcall.report.popupdesc.removeuser":
            "Se envi\xf3 tu reporte.\n\xbfExpulsas a este usuario de la conferencia?",
          "groupcall.report.subtitle.reportreason":
            "Ind\xedcanos qu\xe9 ocurri\xf3.",
          "groupcall.screenshare.receiver.failreceive": "Cargando pantalla...",
          "groupcall.screenshare.receiver.senderdesc":
            "%1 est\xe1 compartiendo su pantalla.",
          "groupcall.screenshare.receiver.viewscreen":
            "Volver a pantalla compartida",
          "groupcall.screenshare.sender.btn.stop": "Dejar de compartir",
          "groupcall.screenshare.sender.desc": "Compartiendo tu pantalla.",
          "groupcall.settings.menu.report": "Reportar",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "M\xe1ximo 30 conferencias. Elimina alguna que no uses y prueba de nuevo.",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "Comparte esta invitaci\xf3n para agregar a m\xe1s. Copia el enlace y comp\xe1rtelo en el chat para invitar a otros.",
          "groupcall.title": "Llamada grupal",
          "groupcall.toast.deviceerror.camera":
            "Esta c\xe1mara se est\xe1 usando en otra app.",
          "groupcall.toast.newdevice.camera":
            'Se cambi\xf3 a la c\xe1mara "%1".',
          "groupcall.toast.newdevice.mic": 'Se cambi\xf3 al micr\xf3fono "%1".',
          "groupcall.toast.newdevice.speaker": 'Se cambi\xf3 a la bocina "%1".',
          "groupcall.verifyage.desc.verifyageinmobileversion":
            "Primero tienes que verificar tu edad.\nAbre LINE en tu tel\xe9fono inteligente y ve a Configuraci\xf3n > Verificar edad.",
          "groupcall.video.alert.member.join":
            "%1 se uni\xf3 a la llamada grupal.",
          "groupcall.video.alert.member.leave": "%1 colg\xf3.",
          "groupcall.video.alert.streaming.off.member":
            "Apagaste su video.\nEnci\xe9ndelo para verle.",
          "groupcall.video.chat.error.without.camera.body":
            "No encontramos tu c\xe1mara. \xbfTe unes aunque no te puedan ver?",
          "groupcall.video.chat.error.without.camera.btn.video": "Unirme",
          "groupcall.video.chat.error.without.camera.btn.voice": "Unirme",
          "groupcall.video.chat.layer.start.dscr":
            "Iniciar videollamada grupal.",
          "groupcall.video.chat.layer.start.msg":
            "%1 inici\xf3 una videollamada grupal.",
          "groupcall.video.chat.layer.start.shortmsg":
            "Empez\xf3 la videollamada",
          "groupcall.video.chat.message.invite":
            'Te invitaron a la videollamada grupal:\n"%1"',
          "groupcall.video.chat.message.start": "Videollamada grupal iniciada.",
          "groupcall.video.desc.guide.tryCall":
            "Ya puedes participar en videollamadas grupales con LINE en tu PC. ",
          "groupcall.video.error.change.to.voice":
            "Parece que la red est\xe1 sobrecargada. Cambiamos al modo llamada.",
          "groupcall.video.error.not.video.member":
            "Se uni\xf3 sin poner su c\xe1mara.",
          "groupcall.video.fullview.streaming.fail.body":
            "No se pudo abrir la c\xe1mara de %1.\nInt\xe9ntalo m\xe1s tarde.",
          "groupcall.video.fullview.streaming.fail.button": "Reintentar",
          "groupcall.video.fullview.streaming.off.body":
            "Apagaste la c\xe1mara de %1.\nEnci\xe9ndela para verle.",
          "groupcall.video.menu.streaming.off": "Desactivar video",
          "groupcall.video.menu.streaming.on": "Activar video",
          "groupcall.video.title": "Videollamada grupal",
          "groupcall.video.toast.cameraoff":
            "Tu c\xe1mara est\xe1 apagada y la ventana de los efectos cerrada.",
          "groupcall.video.tooltip.focusview": "Cambiar a vista enfoque",
          "groupcall.video.tooltip.gridview": "Cambiar a vista galer\xeda",
          "groupcall.video.tooltip.profilelist": "Participantes",
          "groupcall.video.tooltip.videolayout": "Layout",
          "groupcall.viewmode.desc.focusviewcenter": "Enfoque (medio)",
          "groupcall.viewmode.desc.focusviewleft": "Enfoque (izquierda)",
          "groupcall.viewmode.desc.focusviewright": "Enfoque (derecha)",
          "groupcall.viewmode.desc.gridview": "Galer\xeda",
          "groupcall.voice.chat.confirm.popup.join":
            "Hay una llamada grupal activa. \xbfTe unes?",
          "groupcall.voice.chat.layer.start.dscr": "Iniciar llamada grupal.",
          "groupcall.voice.chat.layer.start.msg":
            "%1 inici\xf3 una llamada grupal.",
          "groupcall.voice.chat.layer.start.shortmsg": "Empez\xf3 la llamada",
          "groupcall.voice.chat.message.invite":
            'Te invitaron a la llamada grupal:\n"%1"',
          "groupcall.voice.chat.message.start": "Llamada grupal iniciada. ",
          "groupcall.voice.title": "Llamada grupal",
          "groupcall.watchtogethercall.popupbutton.start": "Iniciar",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "\xbfLo ves con los dem\xe1s?",
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
            "Instala Microsoft Edge Chromium para compartir videos de YouTube. \xbfSigues en la p\xe1gina de Microsoft?",
          "groupcall.youtube.endduetoerror":
            "No se puede usar la funci\xf3n de compartir videos de YouTube debido a un error. Prueba m\xe1s tarde.",
          "groupcall.youtube.error.reinstall":
            "Hubo un error. Prueba m\xe1s tarde o instala de nuevo el navegador si te sigue saliendo el error.",
          "groupcall.youtube.paste": "Compartir video YouTube",
          "groupcall.youtube.paste.btn.play": "Reproducir",
          "groupcall.youtube.paste.btn.search": "Vista previa",
          "groupcall.youtube.paste.desc":
            "Busca videos para compartir. Mejor si tienes aud\xedfonos.",
          "groupcall.youtube.paste.noresult":
            "Vaya, no se pudo cargar el video. Comprueba el link y prueba de nuevo.",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "Reproducir",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "\xbfPausas este video y reproduces otro?",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1 ya est\xe1 compartiendo un video de YouTube.",
          "groupcall.youtube.paste.toast.error":
            "Un error temporal impidi\xf3 compartir la pantalla.",
          "groupcall.youtube.paste.unknownerror":
            "Vaya, mejor si lo intentas m\xe1s tarde.",
          "groupcall.youtube.receiver.newvideo":
            "%1 est\xe1 preparando un video nuevo.",
          "groupcall.youtube.receiver.playvideo": "Volver al video",
          "groupcall.youtube.receiver.senderdesc":
            "%1 est\xe1 reproduciendo un video.",
          "groupcall.youtube.receiver.tooltip.mute": "Silenciar",
          "groupcall.youtube.receiver.tooltip.unmute": "Av\xedsame",
          "groupcall.youtube.receiver.videopaused": "%1 paus\xf3 el video.",
          "groupcall.youtube.sender.btn.stop": "Dejar de compartir",
          "groupcall.youtube.sender.desc": "Est\xe1s compartiendo un video.",
          "groupcall.youtube.stop.popup.btn.confirm": "Dejar de compartir",
          "groupcall.youtube.stop.popup.desc":
            "\xbfDejas de compartir este video de YouTube?",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "La funci\xf3n de compartir v\xeddeos de YouTube a\xfan no est\xe1 disponible  para Windows.",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1 cancel\xf3 la invitaci\xf3n de %2 al grupo.",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1 ha agregado a %2 al Grupo. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre del grupo</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1 se uni\xf3 al Grupo. <a href="line://nv/group/settings/groupname/chatId=%2">Cambiar nombre del grupo</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1 elimin\xf3 a %2 del grupo.",
          "groupchat.linkqr.error.block":
            "Este grupo no permite invitaciones\npor link y c\xf3digo QR.",
          "groupchat.linkqr.error.renew": "Este grupo no existe.",
          "groupchat.push.invitedtojoingroup": "%1 te invit\xf3 a este grupo.",
          "groupchat.push.someonejoinsgroup": "%1 se uni\xf3 al grupo.",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1: ya pueden unirse por link o QR code.",
          "groupchat.systemmsg.cancelinvite":
            "%1 cancel\xf3 la invitaci\xf3n %2.",
          "groupchat.systemmsg.cancelinvite.updatename":
            '<![CDATA[%1 cancel\xf3 la invitaci\xf3n de %2 al grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.changegroupname":
            '%1 cambi\xf3 el nombre del grupo a "%2".',
          "groupchat.systemmsg.changegroupphoto":
            "%1 cambi\xf3 la foto del grupo.",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1: ya no pueden unirse por link o QR code.",
          "groupchat.systemmsg.inviteuser":
            "%1 invit\xf3 a %2 al grupo. Esperando a que se una.",
          "groupchat.systemmsg.inviteuser1n": "%1 agreg\xf3 a %2 al grupo.",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%1 agreg\xf3 a %2 al grupo. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%1 agreg\xf3 a %2 al grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.kickoutuser": "%1 quit\xf3 a %2 del grupo.",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%1elimin\xf3 a %2 del grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%3">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.userjoin": "%1 se uni\xf3 al grupo.",
          "groupchat.systemmsg.userjoin.updatename": "%1 se uni\xf3 al grupo.",
          "groupchat.systemmsg.userleave": "%1 dej\xf3 el grupo.",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1 dej\xf3 el grupo. El nombre del grupo no se modifica autom\xe1ticamente. <a href="line://nv/group/settings/groupname/chatId=%2">Cambiar nombre de grupo</a>]]>',
          "groupchat.systemmsg.youareinvited": "%1 te invit\xf3 al grupo.",
          "grouphome.album.alert.inprogress":
            "No puedes a\xf1adir elementos ni eliminar \xe1lbumes mientras cargas elementos.\nVuelve a intentarlo m\xe1s tarde.",
          "grouphome.album.alert.reupload": "\xbfSubir art\xedculo de nuevo?",
          "grouphome.album.alert.save.failed": "No se pudo guardar.",
          "grouphome.album.alert.stopUpload": "Detener",
          "grouphome.album.alert.unregistereduser":
            "No puedes compartir el \xe1lbum con usuarios que eliminaron sus cuentas.",
          "grouphome.album.label.reupload": "Reanudar",
          "grouphome.albumdetail.addPhoto": "Agregar fotos",
          "grouphome.albumdetail.alert.changeAlbum":
            "No podr\xe1s recuperar los \xe1lbumes que elimines\ny se eliminar\xe1n todas las fotos de forma permanente.\n\xbfEliminar este \xe1lbum?",
          "grouphome.albumdetail.changeName": "Cambiar el nombre del \xe1lbum",
          "grouphome.albumdetail.delete": "Eliminar \xe1lbum",
          "grouphome.albumdetail.empty.desc":
            "Todos tenemos recuerdos que deseamos guardar para siempre. \xa1Crea un \xe1lbum junto con tus amigos!",
          "grouphome.albumdetail.empty.title":
            "No se han a\xf1adido art\xedculos.",
          "grouphome.albumdetail.error":
            "\xa1Lo sentimos! No pudimos cargar la informaci\xf3n.\nInt\xe9ntalo de nuevo.",
          "grouphome.albumdetail.saveComplete": "Guardado",
          "grouphome.albumdetail.saveall": "Guardar todo",
          "grouphome.albumdetail.savingPhoto": "Guardando elementos...",
          "grouphome.albumdetail.selectCount.plurals.few": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.many": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.one": "%n foto",
          "grouphome.albumdetail.selectCount.plurals.other": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.two": "%n fotos",
          "grouphome.albumdetail.selectCount.plurals.zero": "%n fotos",
          "grouphome.albumdetail.title.changeAlbum":
            "Cambiar el nombre del \xe1lbum",
          "grouphome.albumdetail.uploader": "por %1",
          "grouphome.alert.addphoto":
            "\xbfSeguro que quieres cancelar?\nEl elemento adjunto no se guardar\xe1.",
          "grouphome.alert.albumLimitCount":
            "Solo puedes crear hasta %n \xe1lbumes.\n",
          "grouphome.alert.alreadyDeleteAlbum": "Ya eliminaste este \xe1lbum.",
          "grouphome.alert.alreadyDeletePhoto": "Ya se elimin\xf3.",
          "grouphome.alert.makealbum":
            "\xbfSales sin terminar de crear el \xe1lbum?",
          "grouphome.alert.photoLimitCount":
            "Solo puedes subir hasta %1 fotos por \xe1lbum.\n",
          "grouphome.label.album": "\xc1lbumes",
          "grouphome.label.album.addPhoto": "Agregar fotos",
          "grouphome.label.album.changeName": "Cambiar el nombre del \xe1lbum",
          "grouphome.label.album.delete": "Eliminar \xe1lbum",
          "grouphome.label.album.empty": "No hay \xe1lbumes.",
          "grouphome.label.album.make": "Crear \xe1lbum",
          "grouphome.label.albumName": "Nombre del \xe1lbum",
          "grouphome.label.post": "Notas",
          "grouphome.label.post.empty": "A\xfan no hay notas.",
          "grouphome.label.showAllPost": "Todas las notas",
          "grouphome.label.showUserHome": "Inicio de %1",
          "grouphome.label.showallalbum": "Todos los \xe1lbumes",
          "grouphome.label.writepost": "Nueva nota",
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
          "image.viewer.crop": "Mover y recortar",
          "image.viewer.download.error": "Se produjo un error temporal.",
          "image.viewer.loading.error":
            "Hubo un error temporal.\nNo se pudo procesar tu solicitud.\nPor favor, int\xe9ntalo de nuevo.",
          "image.viewer.ok": "Aceptar",
          "image.viewer.save": "Bajar",
          "image.viewer.share.chat": "Compartir en un chat",
          "imageEditor.btn.doNotSave": "No guardar",
          "imageEditor.msg.onEditing":
            "\xbfGuardar las im\xe1genes editadas en tu PC?",
          "imageEditor.msg.onModified":
            "Esta imagen contiene cambios sin guardar.",
          "imageEditor.msg.toobig":
            "\xa1No se puede editar! Su resoluci\xf3n es muy alta.",
          "invite.btn.cancel.title": "Cancelar",
          "invite.btn.invite.title": "Aceptar",
          "invite.label.create.title": "Invitar Amigos",
          "invite.label.invitee.title": "Invitar",
          "invite.label.nobuddytoselect.title": "No encontramos al usuario.",
          "invite.label.nosearchresult.title": "No encontramos al usuario.",
          "invite.label.nothing.title": "Vamos, elige a alguien.",
          "invite.label.person.title.plurals.few": "%n",
          "invite.label.person.title.plurals.many": "%n",
          "invite.label.person.title.plurals.one": "%n",
          "invite.label.person.title.plurals.other": "%n",
          "invite.label.person.title.plurals.two": "%n",
          "invite.label.person.title.plurals.zero": "%n",
          "keep.alert.sendtochat.unsupported.all.one": "Formato incompatible.",
          "keep.alert.sendtochat.unsupported.all.other":
            "Formato incompatible.",
          "keep.alert.sendtochat.unsupported.file.multi": "",
          "keep.alert.sendtochat.unsupported.some.one":
            "Uno de los archivos tiene un formato incompatible. \xbfEnv\xedas el resto de los archivos?",
          "keep.alert.sendtochat.unsupported.some.other":
            "%n archivos tienen un formato incompatible. \xbfEnv\xedas el resto de los archivos?",
          "keep.btn.retry": "Reintentar",
          "keep.category.all": "Todo",
          "keep.category.files": "Archivos",
          "keep.category.links": "Links",
          "keep.category.memos": "Notas",
          "keep.category.newtext": "Texto",
          "keep.category.photos": "Fotos",
          "keep.category.photosvideos": "Multimedia",
          "keep.category.text": "Texto",
          "keep.category.videos": "Videos",
          "keep.common.error.503":
            "Estamos realizando unas mejoras en Keep.\nPeriodo: dd MMM, HH:mm \u2013 dd MMM, HH:mm (UTC+9)",
          "keep.date.format": "d.M.yyyy",
          "keep.desc.PR.title": "\xbfQu\xe9 es Keep?",
          "keep.desc.alreadyDeleted": "Este contenido ya se elimin\xf3.",
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
            "No se guardaron tus cambios. \xbfDescartar los cambios?",
          "keep.desc.downloadError":
            "No se pudo completar la tarea debido a que se produjo un error durante la descarga del archivo.",
          "keep.desc.downloading": "Bajando\u2026",
          "keep.desc.drag":
            "Arrastra y suelta tu archivo aqu\xed\no haz clic en subir.",
          "keep.desc.dragHere": "Arrastra y suelta tu archivo aqu\xed.",
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
          "keep.desc.exceedCharacter":
            "Puedes escribir hasta 10 000 caracteres. ",
          "keep.desc.expiredContent.askDelete":
            "Ya no puedes ver el contenido de este elemento\nporque su periodo de almacenamiento expir\xf3.\n\xbfLo eliminas?",
          "keep.desc.expiredContent.couldNotConfirmed":
            "Ya no puedes ver el contenido de este elemento porque su periodo de almacenamiento expir\xf3.",
          "keep.desc.expiredContent.storagePeriod":
            "El periodo de almacenamiento expir\xf3.",
          "keep.desc.fileCountExceeds": "Puedes guardar hasta 20 archivos.",
          "keep.desc.guide.tryKeep": "Guardas tu cosas\n\xa1prueba Keep!",
          "keep.desc.itemsavedinkeepexpired": "Ya no est\xe1 disponible.",
          "keep.desc.loadFailed":
            "No se pudo cargar.\nComprueba tu conexi\xf3n e int\xe9ntalo de nuevo. ",
          "keep.desc.loadFromKeep": "Abrir archivos en Keep",
          "keep.desc.loadingData": "Cargando datos. Espera un momento.",
          "keep.desc.maximumUploadableSize.plurals.few":
            "Solo puedes subir hasta %1 MB de una vez.",
          "keep.desc.maximumUploadableSize.plurals.many":
            "Solo puedes subir hasta %1 MB de una vez.",
          "keep.desc.maximumUploadableSize.plurals.one":
            "Solo puedes subir hasta %1 MB de una vez.",
          "keep.desc.maximumUploadableSize.plurals.other":
            "Solo puedes subir hasta %1 MB de una vez.",
          "keep.desc.maximumUploadableSize.plurals.two":
            "Solo puedes subir hasta %1 MB de una vez.",
          "keep.desc.maximumUploadableSize.plurals.zero":
            "Solo puedes subir hasta %1 MB de una vez.",
          "keep.desc.noSearchResult": "Sin resultados.",
          "keep.desc.noSelectableItem":
            "No tienes art\xedculos para seleccionar.",
          "keep.desc.notSupportType":
            "No se puede abrir este tipo de archivo. ",
          "keep.desc.notifyPeriod":
            "Los archivos de m\xe1s de %1 MB se guardar\xe1n por 30 d\xedas. ",
          "keep.desc.photoLoadFailed":
            "No se pudo cargar la foto.\nComprueba tu conexi\xf3n, e int\xe9ntalo de nuevo. ",
          "keep.desc.quit.uploading":
            "\xa1Espera! Est\xe1s subiendo archivos a Keep.\nSi cierras LINE, lo cancelar\xe1s.",
          "keep.desc.requesturl.failed.error":
            "No se pudo cargar la informaci\xf3n del enlace. Int\xe9ntalo de nuevo.",
          "keep.desc.retry": "Int\xe9ntalo de nuevo.",
          "keep.desc.saved": "Guardado. ",
          "keep.desc.savedInKeep": "Guardado en Keep.",
          "keep.desc.saving": "Guardando...",
          "keep.desc.storageFull": "No hay suficiente espacio en Keep.",
          "keep.desc.storageFull.freeUpSpace":
            "No hay suficiente espacio en Keep. Libera un poco de espacio e int\xe9ntalo de nuevo. ",
          "keep.desc.storageFull.unable":
            "No puedes subir m\xe1s elementos porque ya no tienes espacio de almacenamiento disponible en Keep.",
          "keep.desc.storageFull.unableToSelect":
            "No puedes elegir elementos porque ya no tienes espacio de almacenamiento disponible en Keep. ",
          "keep.desc.temporaryError":
            "No pudimos completar tu tarea solicitada\ndebido a un error temporal.\nInt\xe9ntalo de nuevo.",
          "keep.desc.totalSpace": "%1 de espacio total",
          "keep.desc.unexpectedErrorOccured": "Se produjo un error inesperado.",
          "keep.desc.upload.error.maxFileSize":
            "No puedes subir archivos de m\xe1s de %1 GB.\n",
          "keep.desc.upload.inProgress": "Subiendo a Keep...",
          "keep.desc.upload.notifyIncompleteUpload":
            "\xa1Est\xe1s subiendo un archivo!\nSi cierras LINE, el archivo solo se subir\xe1 parcialmente.",
          "keep.desc.uploadFail.storage.plurals.few":
            "No se puede subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.many":
            "No se puede subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.one":
            "No se puede subir %1 \xedtem por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.other":
            "No se puede subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.two":
            "No se puede subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFail.storage.plurals.zero":
            "No se puede subir %1 \xedtems por falta de espacio.",
          "keep.desc.uploadFailed": "Error al cargar.",
          "keep.desc.uploadPending": "Esperando para cargar...",
          "keep.desc.uploading": "Cargando...",
          "keep.desc.usableSpace": "%1 en uso",
          "keep.desc.videoLoadFailed":
            "No se pudo cargar el video.\nComprueba tu conexi\xf3n, e int\xe9ntalo de nuevo. ",
          "keep.desc.wait": "Espera un momento.",
          "keep.desc.warning.deleteAll":
            "\xbfQuieres borrar todo?\nUna vez que borres los archivos, no los podr\xe1s recuperar.",
          "keep.desc.warning.deleteAll.chromeUser":
            "\xbfEliminar todos los archivos?\nSi eliges Borrar, tambi\xe9n se eliminar\xe1n tus memos de Chrome.\nUna vez que los elimines, no los podr\xe1s recuperar.",
          "keep.download.btn": "Abrir carpeta",
          "keep.download.success": "Finaliz\xf3 la descarga.",
          "keep.emptytitle.title": "Todo a la mano",
          "keep.full.sync.working": "Sincronizando... %1%",
          "keep.home.bannerdesc.endofkeep":
            "Haz una copia de tus archivos guardados en Keep antes del %1.",
          "keep.home.bannertitle.endofkeep": "Keep cierra sus puertas",
          "keep.home.desc.timeformat": "d.M.yyyy",
          "keep.home.emptydesc.descforplaces":
            "Aqu\xed te saldr\xe1 lo que guardes de las cuentas oficiales, LINE PLACE y dem\xe1s.",
          "keep.home.popupbutton.close": "Cerrar",
          "keep.home.popupbutton.dontshowagain": "Ya no mostrar",
          "keep.home.popupbutton.learnmore": "M\xe1s",
          "keep.home.popupdesc.endofkeep":
            "Keep deja de estar disponible a partir del %1. Aseg\xfarate de hacer una copia de los \xedtems que tengas guardados.\nRecuerda que Keep Memo seguir\xe1 disponible luego de que Keep cierre sus puertas.",
          "keep.home.popuptitle.endofkeep":
            "Keep cierra sus puertas (c\xf3mo hacer una copia)",
          "keep.home.tab.places": "Lugares",
          "keep.home.toast.pinneditems": "Anclados",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "M\xe1ximo 20 elementos a la vez.",
          "keep.keepitem.itemsenttokeepmemoexpired": "Expir\xf3",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "Todo lo que mandes a Keep Memo se mostrar\xe1 en tu Keep.",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "Tenlo siempre presente\nancl\xe1ndolo.",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "Todas tus cosas en Keep Memo guardando, anclando, edit\xe1ndolas o agreg\xe1ndolas a Keep.",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            'Te presentamos "Keep Memo"',
          "keep.keepmemoguide.popuptitle.keepitemsforever": "Tus cosas contigo",
          "keep.keepmemoguide.popuptitle.pinningitems": "Items anclados",
          "keep.label.add": "Agregar",
          "keep.label.addText": "Agregar",
          "keep.label.capture": "Captura de pantalla",
          "keep.label.chromeMemo": "Memos de Chrome",
          "keep.label.copy": "Copiar",
          "keep.label.createdTime": "Se cre\xf3 el:",
          "keep.label.delete": "Eliminar",
          "keep.label.deleteAll": "Eliminar todo",
          "keep.label.deleting": "Eliminando...",
          "keep.label.details": "Detalles",
          "keep.label.download": "Bajar",
          "keep.label.edit": "Editar",
          "keep.label.emptyText": "No hay contenido",
          "keep.label.expired": "Expirados",
          "keep.label.fileSize": "Tama\xf1o de archivo",
          "keep.label.from": "De",
          "keep.label.goToKeep": "Abrir Keep",
          "keep.label.hitocoto": "\xbfC\xf3mo va?",
          "keep.label.justNow": "Ahora mismo",
          "keep.label.learnMore": "Aver\xedgualo ahora",
          "keep.label.modifiedTime": "Modificado",
          "keep.label.more": "M\xe1s",
          "keep.label.newMemo": "Notas",
          "keep.label.open": "Abrir",
          "keep.label.openkeepmemo": "Abrir Keep Memo",
          "keep.label.order.stored": "Fecha de guardado",
          "keep.label.order.updated": "\xdaltima actualizaci\xf3n:",
          "keep.label.paste": "Pegar",
          "keep.label.pause": "Detener",
          "keep.label.period": "Periodo de almacenamiento",
          "keep.label.pin": "Anclar",
          "keep.label.play": "Reproducir",
          "keep.label.playTime": "Tiempo de reproducci\xf3n",
          "keep.label.refresh": "Actualizar",
          "keep.label.resolution": "Resoluci\xf3n",
          "keep.label.save": "Guardar",
          "keep.label.saveInKeep": "Guardar en Keep",
          "keep.label.savedTime": "Guardado el:",
          "keep.label.search": "Buscar todo",
          "keep.label.searchResult": "Resultados de b\xfasqueda",
          "keep.label.send": "Enviar",
          "keep.label.settings": "Configuraci\xf3n",
          "keep.label.shareToChat": "Mandar por chat",
          "keep.label.sortByDate": "Ordenar por fecha",
          "keep.label.sortByName": "Ordenar por nombre",
          "keep.label.sortBySize": "Ordenar por tama\xf1o",
          "keep.label.terminate": "Cerrar LINE",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "Desanclar",
          "keep.label.upload": "Subir",
          "keep.label.uploadFile": "Subir archivos",
          "keep.label.viewinkeepmemo": "Ver en Keep Memo",
          "keep.label.voiceMessage": "Mensaje de voz",
          "keep.label.volume": "Capacidad usada",
          "keep.label.writememo.title": "Notas",
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
          "keepmemo.category.videos": "Videos",
          "keepmemo.desc.noSelectableItem":
            "No tienes \xedtems para seleccionar.",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "Solo puede compartirse hasta un total de 20 \xedtems a la vez.",
          "keepmemo.label.goToKeepMemo": "Abrir Keep Memo",
          "keepmemo.label.search": "Buscar",
          "keepmemo.label.sendToKeepMemo": "Enviar a Keep Memo",
          "keepmemo.label.share": "Compartir",
          "keepmemo.label.tooltip": "Keep Memo",
          "keepmemo.msg.desc.systemmsg":
            "Guarda esos textos, fotos, videos y enlaces.",
          "keepmemo.title": "Enviar a Keep Memo",
          "keyword.notice.btn": "Agregar palabras clave",
          "keyword.notice.desc":
            "Agrega palabras clave para que te avisemos cuando te lleguen mensajes que las contengan.",
          "keyword.notice.title": "Notificaci\xf3n de palabras clave",
          "keyword.notification.desc": "Palabra clave mencionada",
          "kickout.all.v3":
            "Se cerr\xf3 la sesi\xf3n. Inicia sesi\xf3n de nuevo.",
          "kickout.dormant.account":
            "Inicia sesi\xf3n con el correo que registraste en el LINE de tu m\xf3vil y verifica tu cuenta.",
          "kickout.email.account.modified":
            "Se cerr\xf3 sesi\xf3n porque registraste un e-mail nuevo o cambiaste la contrase\xf1a.",
          "kickout.expired":
            "Se cerr\xf3 tu sesi\xf3n porque\nse sobrepas\xf3 el tiempo de espera.",
          "kickout.networkError":
            "Vaya, algo no fue bien. Por favor, vuelve a iniciar sesi\xf3n.",
          "kickout.noAllowedSecondaryDevice":
            "Se cerr\xf3 tu sesi\xf3n porque se bloque\xf3 el acceso a tu celular.\n",
          "kickout.notAuthorizedDevice":
            "Se cerr\xf3 tu sesi\xf3n porque entraste desde otro PC.   ",
          "kickout.notAvailableUser":
            "Se cerr\xf3 sesi\xf3n porque tu cuenta de LINE ha sido eliminada con otro dispositivo.",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "Vaya, algo no fue bien. Por favor, vuelve a iniciar sesi\xf3n.",
          "kickout.serverMaintenance":
            "Estamos haciendo unas mejoras. Vuelve pronto.",
          "kickout.serviceMaintenance":
            "Vaya, algo no fue bien. Por favor, vuelve a iniciar sesi\xf3n.",
          "kickout.square.server.fail":
            "Se cerr\xf3 sesi\xf3n debido a un error en la verificaci\xf3n de OpenChat. Por favor, inicia sesi\xf3n de nuevo.",
          "line.keepmemoguide.popupdesc.page1":
            "Pueden enviarse notas, fotos u otros \xedtems libremente a Keep Memo como cualquier otro chat.",
          "line.keepmemoguide.popuptitle.page1": 'Te presentamos "Keep Memo"',
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "Prueba actualizando LINE primero.",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "Error",
          "line.updatepopup.button.leave": "Salir",
          "linechrome.chat.desc.unsupportedmessage":
            "No disponible en LINE Chrome. \xc1brelo en tu tel\xe9fono.",
          "linechrome.chat.desc.unsupportedstickers":
            "No disponible en LINE Chrome. \nM\xedralo en tu tel\xe9fono.",
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
            "\xbfBloqueas tu LINE cuando no se detecte actividad?\nNecesitar\xe1s tu contrase\xf1a de para desbloquear.",
          "lockscreen.password.fail": "\xa1Contrase\xf1a incorrecta!",
          "lockscreen.password.text":
            "Usa la contrase\xf1a de LINE para desbloquear.",
          "lockscreen.password.unlock.btn": "Desbloquear",
          "login.btn.emailQRcode.login": "Entrar con c\xf3digo QR/E-mail >",
          "login.btn.login": "Iniciar sesi\xf3n",
          "login.btn.signUp": "Registro",
          "login.emailLogin.identity.credential.error":
            "El e-mail no es v\xe1lido.\nPor favor, ingr\xe9salo correctamente.",
          "login.emailLogin.label.error.accountError":
            "Los datos introducidos no son v\xe1lidos o no los has registrado en LINE.",
          "login.emailLogin.label.error.inputError":
            "Escribe tu e-mail y contrase\xf1a.",
          "login.emailLogin.link.changeToNaverLogin":
            "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.emailLogin.link.findPassword":
            "\xbfOlvidaste la contrase\xf1a?",
          "login.emailLogin.placeHolder.email": "Tu e-mail",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "Correo o n\xfamero tel\xe9fono",
          "login.emailLogin.placeHolder.password": "Contrase\xf1a",
          "login.emailLogin.popup.findPassword":
            "Cambia tu e-mail o contrase\xf1a en el LINE de tu celular\nen Configuraci\xf3n > Cuenta.\n\n\n\n",
          "login.error.auth.failed":
            "No se pudo iniciar sesi\xf3n autom\xe1ticamente porque\niniciaste sesi\xf3n desde otro PC\no tu sesi\xf3n expir\xf3. ",
          "login.label.certificate.not.vaild":
            "No se pudo verificar el certificado de seguridad. Configura la fecha correcta en tu PC.",
          "login.label.doingLogin": "Iniciando sesi\xf3n\u2026",
          "login.label.error.auth.failed.anotherPC":
            "Iniciaste sesi\xf3n desde otro PC.",
          "login.label.error.auth.failed.loginExpired":
            "Tu sesi\xf3n expir\xf3 ya.",
          "login.label.error.dberror":
            "Se detect\xf3 un error pera ya est\xe1 resuelto. Vuelve a iniciar sesi\xf3n.",
          "login.label.error.dormant.account":
            "Entra con el correo que registraste en el LINE de tu tel\xe9fono y verifica tu cuenta.",
          "login.label.error.extraError": "Prueba en otro momento.",
          "login.label.error.keyboardError": "Cambia a teclado internacional.",
          "login.label.error.networkError":
            "Problemas de conectividad.\nComprueba tu conexi\xf3n e int\xe9ntalo de nuevo.",
          "login.label.error.pinCode":
            "Este c\xf3digo de verificaci\xf3n no es correcto.",
          "login.label.error.schemeError": "Necesitas iniciar sesi\xf3n.",
          "login.label.error.serverError":
            "Se produjo un error. Int\xe9ntalo de nuevo m\xe1s tarde.",
          "login.label.error.serverMaintenance":
            "Estamos haciendo unas mejoras. Vuelve pronto.",
          "login.label.error.verification.timeout":
            "Tu c\xf3digo de verificaci\xf3n expir\xf3.\nPor favor, solicita otro.",
          "login.label.searching.network": "Buscando un conexi\xf3n \xf3ptima.",
          "login.loginwithsmartphone.tooltip":
            "Verifica tu tel\xe9fono y entra sin contrase\xf1as.",
          "login.naverLogin.checkbox.keepLoginStatus":
            "Iniciar sesi\xf3n autom\xe1ticamente",
          "login.naverLogin.checkbox.startUpWin":
            "Abrir LINE al iniciar Windows.",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "No se pudo iniciar sesi\xf3n. Revisa la configuraci\xf3n del servidor proxy y vuelve a intentarlo.",
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
            "No se pudo procesar tu solicitud debido a un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "login.phoneNumberLogin.identity.credential.error":
            "Este n\xfamero de tel\xe9fono no es correcto.",
          "login.phoneNumberLogin.label.country": "Elige un pa\xeds",
          "login.phoneNumberLogin.label.error.accountError":
            "El n\xfamero de tel\xe9fono o la contrase\xf1a no est\xe1 bien.",
          "login.phoneNumberLogin.label.error.inputError":
            "Pon tu n\xfamero de tel\xe9fono y contrase\xf1a.",
          "login.phoneNumberLogin.placeHolder.password": "Contrase\xf1a",
          "login.phoneNumberLogin.placeHolder.phone":
            "N\xfamero de tel\xe9fono",
          "login.phoneNumberLogin.placeHolder.search": "Buscar",
          "login.phoneNumberLogin.verification.desc":
            "Por seguridad, debes verificar tu cuenta la primera vez que inicies sesi\xf3n en tu PC.\nPor favor, escribe el c\xf3digo que te enviamos por SMS. Si no te llega el mensaje, intenta lo siguiente:",
          "login.popup.abuse":
            "Demasiados intentos fallidos. Entra con el c\xf3digo QR.",
          "login.popup.error.diskFull":
            "Te queda menos de 1 GB de espacio.\nPuede que algunas funciones de LINE no funcionen.",
          "login.popup.kickout.r0": "inicias sesi\xf3n en otra PC",
          "login.popup.kickout.r1": "sobrepasaste el tiempo de espera",
          "login.popup.kickout.r2":
            "cerraste la sesi\xf3n desde el LINE de tu celular",
          "login.popup.kickout.r3": "eliminas tu cuenta de LINE",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5":
            "La aplicaci\xf3n no se puede usar por mantenimiento.",
          "login.popup.kickout.subtitle": "Tu sesi\xf3n se cerrar\xe1 si:",
          "login.popup.kickout.title": "Tu sesi\xf3n de LINE se ha cerrado.",
          "login.qrLogin.desc.error.expired": "Prueba con otro c\xf3digo QR.\n",
          "login.qrLogin.desc.error.network":
            "Comprueba tu conexi\xf3n e int\xe9ntalo de nuevo.\n",
          "login.qrLogin.desc.howto":
            "Abre LINE con tu tel\xe9fono y pulsa el icono del c\xf3digo QR en la casilla de b\xfasqueda para escanear.",
          "login.qrLogin.title": "C\xf3digo QR",
          "login.register.already": "Iniciar sesi\xf3n en LINE",
          "login.register.downloadLink": "Bajar la aplicaci\xf3n LINE>>",
          "login.register.help.desc":
            "Para usar la versi\xf3n de PC de LINE registra tu e-mail.\n",
          "login.register.help.desc1":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 PC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.help.desc2":
            "Registra tu correo electr\xf3nico en LINE para usar la versi\xf3n de Mac.",
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
            "Abre LINE en tu celular, pulsa Agregar Amigos > C\xf3digo QR y escanea el c\xf3digo.\n",
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "Tomar\xe1 un tiempo antes de que\npuedas volver a actualizar el c\xf3digo QR.",
          "login.simpleLogin.label.error.qrcodeExpired":
            "Este c\xf3digo QR ya expir\xf3. Actual\xedzalo",
          "login.simpleLogin.link.howto":
            "C\xf3mo iniciar sesi\xf3n con el C\xf3digo QR",
          "login.tab.emailLogin": "E-mail",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin": "Entrar con mi n\xfamero >",
          "login.tab.phoneNumberLogin.title": "Entrar con mi n\xfamero",
          "login.tab.simpleLogin": "C\xf3digo QR",
          "loginHelp.email.image.0": "images/es/01_main.png",
          "loginHelp.email.image.1": "images/es/02_email.png",
          "loginHelp.email.image.registration": "image://login/es/03_email.png",
          "loginHelp.emailLogin.label.step1":
            'Abre LINE en tu celular, ve a la secci\xf3n "Configuraci\xf3n" y pulsa Cuenta.',
          "loginHelp.emailLogin.label.step2":
            'Registra tu e-mail desde la secci\xf3n "E-mail".',
          "loginHelp.emailLogin.label.tab.mobile":
            "Me registr\xe9 en la versi\xf3n para celular",
          "loginHelp.emailLogin.label.tab.pc":
            "Me registr\xe9 en la versi\xf3n para PC",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "Solo se puede iniciar sesi\xf3n con e-mail si has registrado uno.\nPara hacerlo, ve a Configuraci\xf3n > B\xe1sica.",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "La contrase\xf1a para iniciar sesi\xf3n con el n\xfamero de tel\xe9fono y el e-mail es la misma.\nIngresa tu e-mail junto con la contrase\xf1a que usas para iniciar sesi\xf3n con tu n\xfamero.",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "No registr\xe9 mi e-mail",
          "loginHelp.emailLogin.label.tab.pc.title2": "Registr\xe9 mi e-mail",
          "loginHelp.emailLogin.label.title":
            "Ayuda inicio sesi\xf3n con e-mail",
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
          "loginHelp.qrcode.image.0": "images/es/03_qr01.png",
          "loginHelp.qrcode.image.1": "images/es/04_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            "Abre LINE en tu celular, pulsa A\xf1adir Amigos > C\xf3digo QR.",
          "loginHelp.qrcodeLogin.label.step2":
            'Pulsa "Iniciar sesi\xf3n", y listo.',
          "loginHelp.qrcodeLogin.label.title":
            "C\xf3mo iniciar sesi\xf3n con el C\xf3digo QR",
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
          "markdown.input.guideline.codeblock": "```Bloque de c\xf3digo```",
          "markdown.input.guideline.italic": "_Cursiva_",
          "markdown.input.guideline.strikethrough": "~Strikethrough~",
          "markdown.input.guideline.wordblock": "`C\xf3digos`",
          "markdown.input.menu.help": "Formato del texto",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "Tienes que instalar DirectX 9.0c para poder ver videos.\n\xbfQuieres instalarlo ahora? ",
          "media.msg.err.expired":
            "Este video no se puede reproducir porque el tiempo de almacenamiento expir\xf3.",
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
          "menu.menubar.friend.addFriend": "Agregar",
          "menu.menubar.friend.makeGroup": "Crear grupo",
          "menu.menubar.friend.title": "Amigos",
          "menu.menubar.help.lineHelp": "Ayuda de LINE",
          "menu.menubar.help.title": "Ayuda",
          "menu.menubar.keepmemo": "Keep Memo",
          "menu.menubar.line.about": "Info de LINE",
          "menu.menubar.line.exit": "Salir",
          "menu.menubar.line.hideLine": "Ocultar LINE",
          "menu.menubar.line.hideOthers": "Ocultar otros",
          "menu.menubar.line.setting": "Configuraci\xf3n",
          "menu.menubar.line.showAll": "Mostrar todos",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "Chats",
          "menu.menubar.view.friend": "Amigos",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "Mi perfil",
          "menu.menubar.view.myhome": "Mi Inicio",
          "menu.menubar.view.openchat": "OpenChat",
          "menu.menubar.view.services": "Apps",
          "menu.menubar.view.title": "Mostrar",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll": "Mover todo arriba",
          "menu.menubar.window.maximize": "Maximizar",
          "menu.menubar.window.minimize": "Minimizar",
          "menu.menubar.window.title": "Ventanas",
          "menu.setting.lockscreen": "Modo bloqueo",
          "menu.toast.allNotification.off": "Activadas",
          "menu.toast.allNotification.on": "Silenciadas",
          "menu.tray.about": "Info de LINE",
          "menu.tray.balloon.login": "Iniciaste sesi\xf3n en LINE",
          "menu.tray.balloon.logout": "Tu sesi\xf3n de LINE se ha cerrado.",
          "menu.tray.check.update": "Revisar actualizaciones",
          "menu.tray.exit": "Salir",
          "menu.tray.keepmemo": "Keep Memo",
          "menu.tray.login": "Iniciar sesi\xf3n",
          "menu.tray.logout": "Cerrar sesi\xf3n",
          "menu.tray.setting": "Configuraci\xf3n",
          "menu.tray.showBuddyList": "Amigos",
          "message.context.background": "Establecer como fondo de chat",
          "message.context.cancel.imageselect": "Desmarcar foto",
          "message.context.imageselect": "Elegir foto",
          "message.delete.confirm":
            "Los mensajes que elegiste solo se borrar\xe1n de esta computadora. No se borrar\xe1n los de la computadora de tu Amigo.",
          "message.error.invalidfile":
            "El archivo de actualizaci\xf3n est\xe1 da\xf1ado.",
          "message.error.opensetup":
            "No se pudo abrir el archivo de actualizaci\xf3n.",
          "message.error.opensetup.codesign":
            "El archivo de actualizaci\xf3n est\xe1 da\xf1ado y no se puede usar.",
          "message.error.update": "Actualizaci\xf3n incompleta.",
          "message.error.updateurl":
            "No se pudo acceder al enlace de actualizaci\xf3n.",
          "msgbox.alert.font.exist": "Ya se est\xe1 usando esta fuente.",
          "msgbox.alert.nospace":
            "Parece que no te queda espacio en tu dispositivo Pero seguro que tienes aplicaciones, fotos o videos que no usas.",
          "msgbox.alert.resolution.apply":
            "Reinicia tu LINE para usar esta resoluci\xf3n de pantalla.",
          "msgbox.btn.block": "Bloquear",
          "msgbox.btn.buddy.title": "Ver el Amigo agregado",
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
          "msgbox.btn.later.title": "Ver m\xe1s tarde",
          "msgbox.btn.leave.1.n": "Salir",
          "msgbox.btn.leave.group": "Salir",
          "msgbox.btn.lock.enable": "Bloquear",
          "msgbox.btn.lock.start": "Bloquear",
          "msgbox.btn.no.title": "No",
          "msgbox.btn.nocancel.title": "Cancelar",
          "msgbox.btn.ok.title": "Aceptar",
          "msgbox.btn.post.title": "Post",
          "msgbox.btn.qrcode.title":
            "C\xf3mo iniciar sesi\xf3n con el c\xf3digo QR",
          "msgbox.btn.quit.title": "Salir",
          "msgbox.btn.remove": "Eliminar",
          "msgbox.btn.restart": "Reiniciar",
          "msgbox.btn.retry.title": "Reintentar",
          "msgbox.btn.send": "Enviar",
          "msgbox.btn.sendkey.title": "Cambiar",
          "msgbox.btn.sendshare": "Enviar",
          "msgbox.btn.unsend": "Anular",
          "msgbox.btn.update.title": "Actualizar ahora",
          "msgbox.btn.use": "Acepto",
          "msgbox.btn.yes.title": "S\xed",
          "msgbox.btn.yescontinue.title": "Continuar",
          "msgbox.btn.yesleave.title": "Salir",
          "msgbox.desc.seemore": "M\xe1s",
          "msgbox.error.request.popup.desc":
            "Se produjo un error temporal. Int\xe9ntalo luego.",
          "needqr.login.button.label": "Iniciar sesi\xf3n con c\xf3digo QR",
          "needqr.title.content1":
            "Para evitar accesos no autorizados, inicia sesi\xf3n con el c\xf3digo QR cuando uses una PC por primera vez.\n",
          "needqr.title.label": "Inicia sesi\xf3n con el c\xf3digo QR.",
          "note.save.comfirm.desc": "\xbfLo guardas en la nota de %1?",
          "notificationcenter.timeslot.earlier": "Anteriores",
          "notificationcenter.timeslot.recent": "Recientes",
          "notificationcenter.title": "Notificaciones",
          "nx.textbox.copy": "Copiar",
          "nx.textbox.paste": "Pegar",
          "nx.textbox.selectall": "Seleccionar todo",
          "oa.profile.desc.region.notselected": "Unspecified",
          "oa.profile.investmentfraud": "Cuidado con los fraudes usando LINE.",
          "ocr.policy.agree.btn": "Acepto ",
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
            "No se puede agregar un mensaje a un Hilo expirado.",
          "openchat.thread.tooltip.yourthreadicon":
            "Todos los Hilos de este OpenChat y los favoritos.",
          "openchat.threadpopup.desc.expired": "Este Hilo ha expirado.",
          "openchat.threadpopup.desc.expirederror": "Este Hilo expir\xf3.",
          "openchat.threadpopup.desc.unsupported":
            "Un formato de archivo no compatible con los hilos est\xe1 incluido.",
          "openchat.threads.button.readall": "Ya los le\xed",
          "openchat.threads.button.seemessages": "Ver mensajes",
          "openchat.threads.tab.all": "Todo",
          "openchat.threads.tab.favorites": "Favoritos",
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
          "openchat.yourthreads.desc.videosent": "Se envi\xf3 el video.",
          "openchat.yourthreads.desc.vmsent": "Mensaje de voz enviado.",
          "openchat.yourthreads.title.messageunavailable":
            "Mensaje no disponible",
          "openchat.yourthreadspopup.button.ok": "OK",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "Este Hilo se ha eliminado.",
          "os.msgbox.btn.gotosettings": "Preferencias del sistema",
          "pl.square.setting.tooltip":
            "Determina qui\xe9n crea y elimina encuestas en el Square.",
          "poll.create.title": "Crear",
          "poll.edit.title": "Editar",
          "poll.main.title": "Encuesta",
          "poll.ongoing.title": "Votar",
          "poll.result.title": "Resultados",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry":
            "No se pudo descargar. Int\xe9ntalo de nuevo.",
          "power.label.tootip": "Cerrar LINE",
          "profile.btn.chat.tooltip": "Chat",
          "profile.btn.home.tooltip": "Inicio",
          "profile.btn.recommend.tooltip": "Sugerencias",
          "profile.button.investmentfraudwarning":
            "Cuidado con los fraudes usando LINE.",
          "profile.delete": "Eliminar perfil",
          "profile.desc.birthday": "d/M",
          "profile.desc.onediting":
            "\xbfSales de esta pantalla? Perder\xe1s los cambios sin guardar.",
          "profile.desc.timelineposts": "Posts LINE VOOM",
          "profile.edit.background.color": "Elegir color fondo",
          "profile.edit.font.color": "Elegir color letra",
          "profile.edit.placeholder": "Ingresa un texto",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "Nombre por Amigo: %1",
          "profile.popup.report": "Reportar",
          "profile.seemoremenu.button.block": "Bloquear",
          "profile.select.capture": "Capturar pantalla",
          "profile.select.default": "Predeterminados",
          "profile.select.local": "Elegir desde mi PC.",
          "profile.select.text": "Texto de perfil",
          "profile.socialprofile.menutitle.editprofile": "Ajustes perfil",
          "registration.btn.label.resendPin":
            "Reenviar c\xf3digo de verificaci\xf3n",
          "registration.btn.message.resendPin": "Te enviamos un c\xf3digo.",
          "registration.check.age.ageVerification.body":
            "Primero tienes que verificar tu edad.\nAbre LINE en tu tel\xe9fono inteligente y ve a Configuraci\xf3n > Verificar edad.",
          "registration.check.age.ageVerification.title": "Verificar edad",
          "registration.check.age.ageunder.body":
            "Solo puedes usar esta funci\xf3n si has verificado que tienes 18 a\xf1os o m\xe1s.",
          "registration.check.age.error.loadUrl": "Comprueba tu conexi\xf3n.",
          "registration.check.age.error.retrieveRequest":
            "Hubo un error durante la verificaci\xf3n. Por favor, int\xe9ntalo de nuevo.",
          "registration.check.age.underAge":
            "Verifica que eres mayor de edad para usar la funci\xf3n de b\xfasqueda en tu LINE. Tambi\xe9n puedes agregar amigos con el c\xf3digo QR.",
          "registration.code.phone.call": "Llamar",
          "registration.code.phone.guide":
            "Te daremos a conocer tu c\xf3digo de verificaci\xf3n mediante una llamada.\nPuede que el n\xfamero que llama aparezca como desconocido o que, seg\xfan tu plan, se generen costos.\n\n",
          "registration.code.sms.resent.guide":
            "Puedes solicitar otro c\xf3digo en %1 min y %2 s.\n",
          "registration.common.next": "Siguiente",
          "registration.common.underIE8.alert":
            "Para registrarte necesitas Internet Explorer 8 o una versi\xf3n superior.\nActualiza tu Internet Explorer o reg\xedstrate usando tu dispositivo m\xf3vil.",
          "reply.doubleclick.toast":
            "Doble clic en un mensaje para responder. ",
          "reply.error.toast": "No se encontr\xf3 el mensaje original.",
          "reply.goto.replied": "Volver al mensaje",
          "reply.no.original.message": "(Mensaje original no disponible)",
          "reply.unknown.user": "Usuario desconocido",
          "report.btn.agreeandsend": "Aceptar y enviar",
          "report.btn.agreeandsend.thpdpa": "Confirmar y enviar",
          "report.confirm.groupinvitation":
            "Si reportas a un usuario que te haya invitado a un chat grupal, se compartir\xe1 la informaci\xf3n del chat con LINE.",
          "report.desc.reason": "Ind\xedcanos qu\xe9 ocurri\xf3.",
          "report.desc.title": "Reportar",
          "report.done": "Mandaste el reporte",
          "report.done.suggestBlock": "Reporte enviado.\n\xbfLe bloqueas?",
          "report.done.suggestBlock.groupinvitation": "\xbfBloqueas a %1?",
          "report.note.subTitle": "Reportar este post.\n(Creador: %1)",
          "report.popupbutton.impersonation.decline": "Omitir",
          "report.popupbutton.impersonation.proceed": "Reportar",
          "report.reason.Other": "Otras conductas",
          "report.reason.gender": "Acoso sexual",
          "report.reason.harrassment": "Acoso",
          "report.reason.impersonation": "Robo identidad",
          "report.reason.impersonation.inquirypopup":
            "Para poder analizar el caso, necesitamos que nos brindes informaci\xf3n detallada.",
          "report.reason.scam": "Estafa",
          "report.reason.spam": "Spam/Publicidad",
          "requireinvite.popup.button.cancel": "No",
          "requireinvite.popup.button.confirmon": "Desactivar",
          "requireinvite.popup.desc.onewaywarning":
            "No se puede volver a desactivar.",
          "requireinvite.popup.title.onewaywarning":
            "\xbfSolicitas a los miembros aceptar invitaciones para unirse?",
          "requireinvite.toggle.desc":
            "Los nuevos miembros tienen que aceptar la invitaci\xf3n para unirse al grupo.",
          "requireinvite.toggle.title": "Unirse a trav\xe9s de invitaciones",
          "screen.desc.need.os.recordscreen":
            "LINE requiere permiso a las funciones de grabaci\xf3n de pantalla para usar las funciones de capturas y para compartir pantalla durante las videollamadas.",
          "screenshare.desc.need.os.recordscreen":
            "LINE necesita acceder a la funci\xf3n de grabaci\xf3n de pantalla.",
          "screenshare.ongoing.error":
            "No se puede usar mientras se comparte la pantalla.",
          "screenshare.ongoing.user": "Compartiendo pantalla...",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "\xbfEliminas todas tus b\xfasquedas recientes?",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "\xbfHabilitas las b\xfasquedas recientes?",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "\xbfDeshabilitas las b\xfasquedas recientes?",
          "search.defaultView.offSaveSearchKeyword":
            "Deshabilitar guardado autom\xe1tico",
          "search.defaultView.onSaveSearchKeyword":
            "Habilitar guardado autom\xe1tico",
          "search.defaultView.recentSearchKeyword": "B\xfasquedas recientes",
          "search.defaultView.recentSearchKeywordEmpty": "No has buscado nada.",
          "search.defaultView.removeAllRecentSearchKeywords": "Eliminar todo",
          "search.defaultView.saveSearchKeywordOff":
            "Las b\xfasquedas recientes se han deshabilitado.",
          "select.video.error.ratio":
            "No puedes usar este ratio en los videoperfiles.",
          "service.download.done.popup.desc": "Finaliz\xf3 la descarga.",
          "service.download.inprogress.popup.desc": "Descargando\n%1...",
          "service.install.device.done.popup.desc":
            "Se complet\xf3 la instalaci\xf3n.",
          "service.install.device.popup.desc": "Instalando\n%1...",
          "service.install.popup.desc":
            "Para usar %1 tienes que instalar %2. \xbfDescargas el archivo de instalaci\xf3n?",
          "setting.advancedSetting": "Avanzada",
          "setting.advancedSetting.proxy.apply": "Aplicar",
          "setting.advancedSetting.proxy.apply.disabled":
            "Configuraci\xf3n de proxy desactivada.",
          "setting.advancedSetting.proxy.apply.enabled":
            "Configuraci\xf3n de proxy activada.",
          "setting.advancedSetting.proxy.check": "Buscar proxy",
          "setting.advancedSetting.proxy.complete":
            "Servidor proxy disponible.",
          "setting.advancedSetting.proxy.connect.check":
            "Probando conexi\xf3n a trav\xe9s del servidor proxy...",
          "setting.advancedSetting.proxy.fail":
            "No se pudo conectar con proxy.\nRevisa la configuraci\xf3n del proxy y vuelve a intentarlo.",
          "setting.advancedSetting.proxy.fail.protocol":
            "Error de protocolo de proxy: %1",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "Error al verificar usuario.",
          "setting.advancedSetting.proxy.host": "Servidor",
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
            "Activar verificaci\xf3n de proxy",
          "setting.advancedSetting.proxy.verification.id": "Nombre de usuario",
          "setting.advancedSetting.proxy.verification.pw": "Contrase\xf1a",
          "setting.advancedSetting.sync": "Sincronizar",
          "setting.advancedSetting.sync.completed": "\xa1Listo!",
          "setting.advancedSetting.sync.desc":
            "Sincroniza la lista de Amigos y chats y no te pierdas nada.",
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
            "Se aplicar\xe1n las fuentes cuando reinicies tu LINE.",
          "setting.basic.heading.language": "Idioma",
          "setting.basic.language.apply.alert":
            "Tenemos que reiniciar para cambiar el idioma. \xbfReinicias ahora?",
          "setting.basic.language.apply.desc":
            "Los cambios se aplicar\xe1n al reiniciar.",
          "setting.basic.language.apply.no": "M\xe1s tarde",
          "setting.basic.language.apply.yes": "Reiniciar",
          "setting.btn.select.folder": "Examinar",
          "setting.btn.submit": "Aceptar",
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
            "Videollamadas grupales con la mejor calidad de imagen con los c\xf3dec de video de tu dispositivo. Usa los recursos de tu CPU y RAM para una mejor calidad.",
          "setting.call.handsfreebtinfo.desc":
            "Si tu dispositivo Bluetooth es reconocido como micr\xf3fono y altavoz por separado, config\xfaralo en cada una de la opciones.",
          "setting.call.label.duckingGuide":
            "Reduce el volumen del sonido de otras aplicaciones. Al poner la barra en 100 %, se silenciar\xe1n otras apps.",
          "setting.call.mic.desc.noisecancelinglight":
            "Elimina los ruidos de los ventiladores de pc y m\xfasica de fondo.",
          "setting.call.mic.desc.noisecancelingstrong":
            "Elimina los ruidos de ladridos y teclados.",
          "setting.call.mic.echocancelling": "Cancelaci\xf3n eco",
          "setting.call.mic.echocancelling.desc":
            "Elimina el eco producido por otros dispositivos. Desactiva esta funci\xf3n al compartir sonidos de tu PC.",
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
          "setting.call.msg.noSpeaker": "\xbfY tus parlantes?\n",
          "setting.call.noDevice": "No hay dispositivos",
          "setting.call.speaker": "Altavoz",
          "setting.call.videocall": "Video",
          "setting.call.videocall.HWvideocodec": "Usar c\xf3decs video del PC",
          "setting.call.videocall.HWvideocodec.desc":
            "Usa los c\xf3decs de video del PC para evitar un excesivo uso de la bater\xeda, as\xed como sobrecalentamientos. Desactiva esta opci\xf3n si tu PC no es compatible con esta opci\xf3n.",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "Se aplicar\xe1 en la siguiente llamada. Para aplicarlo en esta, reinicia la llamada.",
          "setting.call.videocall.dynamicspeaking": "Mostrar locutor",
          "setting.call.videocall.dynamicspeaking.desc":
            "Muestra autom\xe1ticamente un enfoque de quienes est\xe9n hablando en un recuadro m\xe1s grande o muestra su vista previa del video en la primera p\xe1gina de la vista galer\xeda.",
          "setting.call.videocall.gridviewmaxdisplay":
            "Muestra hasta 49 usuarios con la vista de galer\xeda.",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "Muestra hasta 49 miniaturas con la vista de galer\xeda.",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[M\xe1ximo 25 miniaturas con este dispositivo. Tienes m\xe1s info en <a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">Ayuda</a>.]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "Silenciar notificaciones cuando compartir pantalla est\xe1 en pantalla completa",
          "setting.call.videocall.showpreview":
            "Vista previa c\xe1mara antes de unirse a videollamada",
          "setting.call.voicesettings": "Voz",
          "setting.call.youtube.clipboard":
            "Pegar links del portapapeles para los videos compartidos de YouTube",
          "setting.call.youtube.clipboard.checkbox":
            "Permitir acceso al portapapeles",
          "setting.call.youtube.clipboard.desc":
            "Al seleccionar un video de YouTube para compartir, se pegar\xe1 autom\xe1ticamente el link del video en tu navegador.",
          "setting.chats.deletedata.chatHisotry.btn.all":
            "Todos los dispositivos",
          "setting.chats.deletedata.chatHisotry.btn.onlypc":
            "Solo en este dispositivo",
          "setting.chats.deletedata.chatHisotry.desc":
            "\xbfD\xf3nde eliminas los historiales de chat? Recuerda que esta acci\xf3n es irreversible.",
          "setting.chats.deletedata.chatHisotry.title": "Historial de chat ",
          "setting.default.font.label": "Predeterminada",
          "setting.desc.removeLocalChat":
            "Se eliminar\xe1 por completo el historial de chat.",
          "setting.hiddenchat.empty": "No tienes chats ocultos.",
          "setting.hiddenchat.title": "Chats ocultos",
          "setting.keep.alert.deleteAll":
            "\xbfEliminas todo de tu Keep? No afectar\xe1 a Keep Memo.",
          "setting.keep.btn.deleteAll": "Eliminar items guardados",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "Solo incluye el almacenamiento que est\xe1s usando en Keep, pero no en Keep Memo.",
          "setting.keep.desc.photos": "Fotos",
          "setting.keep.desc.text": "Texto",
          "setting.keep.desc.videos": "Videos",
          "setting.keyword.add.error.character":
            '<![CDATA[No uses espacios o los s\xedmbolos ">" y "<" en las palabras clave.]]>',
          "setting.keyword.add.error.characterDup": "Ya la tienes agregada.",
          "setting.keyword.add.error.characterSize":
            "\xa1Muy corta! Pon m\xe1s de 2 caracteres.",
          "setting.keyword.added": "Palabras claves agregadas",
          "setting.keyword.btn.add": "Agregar palabra clave",
          "setting.keyword.desc":
            "Te avisamos de los mensajes sin leer que incluyan estas palabras clave.",
          "setting.keyword.title": "Notificaci\xf3n de palabras clave",
          "setting.label.basic.alarmMode": "C\xf3mo notificar",
          "setting.label.basic.alarmMode.showAlarm": "Ventanas emergentes",
          "setting.label.basic.alarmMode.soundAlarm": "Sonidos",
          "setting.label.basic.alarmRule": "Reglas de notificaci\xf3n",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "Env\xeda notificaciones de invitaciones a chats y grupos.",
          "setting.label.basic.alarmRule.mention":
            "Notificarme cuando me mencionen",
          "setting.label.basic.alarmRule.newChatAlarm":
            "Notificar nuevos mensajes",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "Desactivar alertas en pantalla completa",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "Desactivar notificaciones en el tel\xe9fono cuando te conectes a la versi\xf3n para PC.\nLas notificaciones se reanudar\xe1n si LINE se bloquea o tras 3 minutos de inactividad.",
          "setting.label.basic.alarmRule.note": "Notificar notas",
          "setting.label.basic.alarmRule.videocal":
            "Desactivar notificaciones sonoras durante llamadas y videollamadas",
          "setting.label.basic.alarmSound": "Tono de notificaci\xf3n",
          "setting.label.basic.alarmtype": "Estilo notificaciones",
          "setting.label.basic.alarmtype.basic": "Predeterminado",
          "setting.label.basic.font": "Estilo de fuente",
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
          "setting.label.basic.font.small": "Peque\xf1a",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key": "Tecla de env\xedo",
          "setting.label.private.profile.propertyName.id":
            "(No se mostrar\xe1 tu ID)",
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
          "setting.maintab.call": "Llamar",
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
          "setting.popup.private.emptyName": "Escribe al menos un car\xe1cter.",
          "setting.popup.private.tooLongName":
            "Escribe entre 1 y 20 caracteres.",
          "setting.shorcut.chatfolder.move": "Mover carpeta",
          "setting.shorcut.desc.chatfolder": "Categor\xedas chats",
          "setting.shorcut.list.previous.chat": "Chat anterior",
          "setting.shorcut.list.search": "Buscar",
          "setting.shortcut.array.window": "Ordenar chats",
          "setting.shortcut.callnlive.audio":
            "Activar o desactivar micr\xf3fono",
          "setting.shortcut.callnlive.video": "Activar o desactivar c\xe1mara",
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
          "setting.shortcut.list.friend.chat": "Amigos, lista chats",
          "setting.shortcut.list.viewer": "Visor multimedia",
          "setting.shortcut.markdown.bold": "Negrita",
          "setting.shortcut.markdown.codeblock": "Bloque de c\xf3digo",
          "setting.shortcut.markdown.italic": "Cursiva",
          "setting.shortcut.markdown.strikethrough": "Tachado",
          "setting.shortcut.markdown.title": "Formato del texto",
          "setting.shortcut.markdown.wordblock": "C\xf3digos",
          "setting.shortcut.min.window": "Minimizar ventana",
          "setting.shortcut.move.add.friend": "Ir a secci\xf3n Agregar Amigos",
          "setting.shortcut.move.bottom": "Ir al mensaje m\xe1s reciente",
          "setting.shortcut.move.chat.list": "Ir a Chats",
          "setting.shortcut.move.friend.list": "Ir a Amigos",
          "setting.shortcut.move.top": "Ver mensajes anteriores",
          "setting.shortcut.on.lock": "Activar modo bloqueo",
          "setting.shortcut.open.keep": "Abrir Keep",
          "setting.shortcut.open.note": "Abrir Notas",
          "setting.shortcut.open.sticker": "Abrir ventana Stickers",
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
          "setting.shortcut.tip": "Los atajos para que tu LINE fluya.",
          "setting.shortcut.video.jump": "Mueve 5 segundos en los videos",
          "setting.shortcut.videongif.stop": "Reproducir/Pausar",
          "setting.shortcut.viewer.fullscreen": "Pantalla completa",
          "setting.shortcut.volume.control":
            "Modifica el volumen de los videos",
          "setting.shortcut.zoominout": "Alargar/Reducir imagen",
          "setting.tab.download.folder": "Carpeta de descargas",
          "setting.tab.file.trans": "Archivo",
          "setting.tab.login": "Iniciar sesi\xf3n",
          "setting.tab.url.preview": "Vista previa links",
          "setting.tab.voip": "Llamadas",
          "setting.talk.animation.gif": "GIFs animados",
          "setting.talk.animation.gif.play":
            "Los GIFs se reproducir\xe1n de forma autom\xe1tica en tus chats",
          "setting.talk.backgroundSetting.apply":
            "Se aplicar\xe1 a todos los chats.\n\xbfContin\xfaas?",
          "setting.talk.backgroundSetting.apply.allChats":
            "Usar para todos los chats",
          "setting.talk.backgroundSetting.detail":
            "Elige el fondo para tus chats (no se aplica a los chats de OpenChat).",
          "setting.talk.backgroundSetting.selected": "Elegir fondo",
          "setting.talk.backgroundSetting.title": "Fondo de chat",
          "setting.talk.heading.talk": "Estilo de fuente",
          "setting.talk.photo.resolution.detail":
            "Las fotos de m\xe1s de 20 MB no se pueden mandar con la resoluci\xf3n original.",
          "setting.talk.photo.resolution.option.default": "Predeterminada",
          "setting.talk.photo.resolution.option.original": "Original  ",
          "setting.talk.photo.resolution.option.standard": "Normal",
          "setting.talk.photo.resolution.title": "Resoluci\xf3n de fotos",
          "setting.talk.theme.check.seasonal": "Efecto nieve",
          "setting.talk.theme.desc.seasonal": "Temas",
          "setting.theme.desc.darkmode.limitation":
            "Algunas pantallas no est\xe1n disponibles en el modo oscuro.",
          "setting.theme.mode.dark": "Modo oscuro",
          "setting.theme.mode.light": "Modo claro",
          "setting.theme.systemSetting": "Usar ajustes del sistema",
          "setting.theme.title": "Visualizaci\xf3n",
          "setting.url.preview.desc":
            "Ver\xe1s informaci\xf3n y miniaturas de los links enviados por chats.",
          "setting.window.scaleRatio": "Tama\xf1o de la pantalla",
          "setting.window.scaleRatio.default": "Tama\xf1o predeterminado",
          "settingAlarm.label.duration": "Duraci\xf3n",
          "settingAlarm.label.lucid": "Transparente",
          "settingAlarm.label.opacity": "Transparencia",
          "settingAlarm.label.opaque": "Opaco",
          "settingAlarm.label.setAlarmWindow": "Configuraci\xf3n de alertas",
          "settingAlarm.label.toastContent": "Detalles",
          "settingAlarm.label.toastPreview": "Vista previa",
          "settingAlarm.label.unitSecond": "s",
          "settingLogin.alert.autoLogin":
            "Inicio de sesi\xf3n activado. Puedes desactivarlo cuando quieras en configuraci\xf3n.",
          "settingLogin.check.autoLogin":
            "Iniciar sesi\xf3n autom\xe1ticamente",
          "settingLogin.check.autoRunWin": "Abrir LINE al iniciar Windows.",
          "settingPrivacy.btn.ublockBuddy": "Desbloquear",
          "settingPrivacy.call.blur.desc":
            "Ajusta la intensidad del efecto de desenfoque en las videollamadas.",
          "settingPrivacy.cleardata.cache.desc":
            "Solo se eliminar\xe1n los datos cach\xe9. Tus preciadas fotos, videos, mensajes de voz o archivos no se tocar\xe1n.",
          "settingPrivacy.cleardata.cache.error":
            "Algunos datos no se eliminaron. Int\xe9ntalo m\xe1s tarde.",
          "settingPrivacy.cleardata.cache.popup":
            "\xbfEliminas los datos cach\xe9?",
          "settingPrivacy.label.allowCallAlarm.desc":
            "Tambi\xe9n se aplicar\xe1 en tu LINE para celular.",
          "settingPrivacy.label.allowCallAlarmPC": "Recibir llamadas",
          "settingPrivacy.label.blockAndDelete.desc":
            "\xbfQuitas a esta cuenta de los bloqueados? Recuerda que la cuenta seguir\xe1 bloqueada. Para agregarla de nuevo a tus Amigos busca su ID o n\xfamero de tel\xe9fono.",
          "settingPrivacy.label.blockBuddyList": "Cuentas bloqueadas",
          "settingPrivacy.label.blockBuddyListEmpty":
            "No hay usuarios bloqueados.",
          "settingPrivacy.label.blocksquarememberlist":
            "Bloqueados en OpenChat",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "No tienes usuarios bloqueados.",
          "settingPrivacy.label.buddySearchAllow":
            "Permitir que mis Amigos me busquen",
          "settingPrivacy.label.clearRecords": "Eliminar registros de chat",
          "settingPrivacy.label.cleardata": "Eliminar datos",
          "settingPrivacy.label.cleardata.cache": "Cach\xe9",
          "settingPrivacy.label.filterMessages":
            "Rechaza los mensajes que no sean de tus Amigos.",
          "settingPrivacy.label.filterMessages.title":
            "Mensajes solo de tu lista de Amigos",
          "settingPrivacy.label.hiddenBuddyList": "Cuentas ocultas",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "No hay usuarios ocultos.",
          "settingPrivacy.label.hideAndDelete.desc":
            "\xbfQuitas a esta cuenta de los ocultos? Recuerda que la cuenta seguir\xe1 envi\xe1ndote mensajes. Para agregarla de nuevo a tus Amigos busca su ID o n\xfamero de tel\xe9fono.",
          "settingPrivacy.label.idSearchAllowYes": "ID p\xfablico",
          "settingPrivacy.label.title": "Privacidad",
          "settingProfile.error.invalidData": "No puedes usar este nombre",
          "settingProfile.error.network":
            "No pudimos procesar tu solicitud\ndebido a un error temporal.\nInt\xe9ntalo de nuevo.",
          "settingProfile.error.server":
            "No pudimos procesar tu solicitud debido a un error temporal.\nInt\xe9ntalo de nuevo.",
          "settingProfile.label.emailEmpty": "Sin configurar",
          "settingProfile.label.modifyprofile": "Editar",
          "settingProfile.label.myInfo": "Mis sitios",
          "settingProfile.label.nickName": "Nombre",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "El e-mail que quieres registrar y tu contrase\xf1a son muy parecidos.\nPrueba con otro.",
          "settingProfile.label.registerAcoount.mailAddress": "E-mail",
          "settingProfile.label.statusEmpty": "Sin configurar",
          "settingProfile.label.statusMessage": "Estado",
          "settingProfile.label.userID": "ID de usuario",
          "settingProfile.link.registerAcoount.mailAddress":
            "Registrar e-mail >",
          "settingProfile.statusMessage.edit": "\xbfQu\xe9 vas a poner?",
          "settingProfile.statusMessage.edit.failed":
            "No se pudo guardar tu estado.",
          "settings.basic.number.edit": "Cambiar n\xfamero de tel\xe9fono",
          "settings.delete.account": "Eliminar mi cuenta",
          "settings.delete.account.btn": "Eliminar cuenta",
          "settings.deleteAccount.confirm.desc":
            "Si eliminas tu cuenta de LINE, se eliminar\xe1 tambi\xe9n tu lista de Amigos y el historial de chats. \xbfQuieres eliminar tu cuenta de LINE?",
          "settings.deleteAccount.confirm.title":
            "\xbfEliminas tu cuenta de LINE?",
          "settings.deleteAccount.success":
            "Se cerr\xf3 sesi\xf3n porque tu cuenta de LINE ha sido eliminada.",
          "settings.label.tooltip": "Configuraci\xf3n",
          "settings.privacy.publicUserID": "Permitir",
          "settings.privacy.publicUserID.description":
            "Tus amigos podr\xe1n buscarte por tu ID, y agregarte.",
          "settings.privacy.rejectStrangeMessages": "Filtrar mensajes",
          "settings.privacy.rejectStrangeMessages.description":
            "Al activarlo, se bloquear\xe1n los mensajes que no sean de tus Amigos.",
          "settings.privacy.title": "Privacidad",
          "settings.profile.myInfo.birthday": "Cumplea\xf1os",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "Si eliges mostrar tu cumplea\xf1os, te enviaremos una animaci\xf3n especial que s\xf3lo t\xfa podr\xe1s ver. Tus Amigos tambi\xe9n podr\xe1n ver la info de tu cumple desde varias secciones como la de tu perfil, Inicio o Chats.",
          "settings.profile.myInfo.birthday.showMonthday":
            "Mostrar mi cumplea\xf1os",
          "showAllContents.File": "Archivos",
          "showAllContents.Iink": "Links",
          "showAllContents.ImageVideo": "Fotos y videos",
          "showAllContents.file.noFile":
            "No se compartieron archivos en este chat.",
          "showAllContents.moveMessage": "Ver en chat",
          "showAllContents.moveMessage.lastMessage": "\xdaltimos mensajes",
          "showAllContents.uploadMember": "Subido por %1 ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "Borradas.\n\n(Otros administradores ya se encargaron de algunas solicitudes.)",
          "square.abuse.textinput":
            "Tu cuenta se ha restringido por cometer acciones abusivas.",
          "square.access.changephoto":
            "Cambiar tu foto de perfil para este OpenChat",
          "square.access.chat": "Chat nuevo",
          "square.access.chat.image": "Cambiar foto de perfil de este chat",
          "square.access.chatroomtohome": "Ir a inicio de Square",
          "square.access.cover.image":
            "Cambiar foto de portada de este OpenChat",
          "square.access.create": "Crear OpenChat",
          "square.access.hide": "Ocultar la descripci\xf3n de OpenChat",
          "square.access.invite": "Invitar amigos",
          "square.access.join": "Unirse al OpenChat",
          "square.access.joinrequest": "Unirse al OpenChat",
          "square.access.postoption": "M\xe1s opciones de notas",
          "square.access.profile.image":
            "Cambiar tu foto de perfil para este OpenChat",
          "square.access.profile.nickname":
            "Cambiar tu nickname para este OpenChat",
          "square.access.qrcode": "C\xf3digo QR de OpenChat",
          "square.access.search": "Buscar OpenChats",
          "square.access.show": "Mostrar la descripci\xf3n de OpenChat",
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
            "OpenChat solo para mayores de edad. Para ofrecer un entorno seguro, por favor acepta los t\xe9rminos de uso y las directrices de OpenChat.",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "Solo mayores de edad",
          "square.announcement.donotshowagain": "Ya no mostrar",
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
          "square.chat.button.threadmessagesfew": "Ver mensajes en el hilo",
          "square.chat.button.threadmessagesmany": "%1+ mensajes",
          "square.chat.desc.sent": "Se envi\xf3.",
          "square.chat.err.file.exceed.capacity": "Uf, demasiado grande.",
          "square.chat.menu.aboutchatroom": "Administrar OpenChat",
          "square.chat.more.leaveroom": "Salirse",
          "square.chat.placeholder.qna": "Responder",
          "square.chat.reply.notification": "Respuesta: %1",
          "square.chat.reply.notification2": "Respuesta de %1: %2",
          "square.chat.setting": "Ajustes avanzados",
          "square.chat.settings.bg.apply.square.image":
            "Aplicar la foto del OpenChat como fondo.",
          "square.chat.settings.export.title": "Chats con %1",
          "square.chat.system.msg.invite.a.b": "%1 invit\xf3 a %2 al chat.",
          "square.chat.system.msg.join.chat": "%1 se uni\xf3 al chat.",
          "square.chat.system.msg.leave.chat": "%1 dej\xf3 el chat.",
          "square.chat.text.input.nickname": "Chateas como %1",
          "square.chatcontent.button.seemoreqna": "M\xe1s",
          "square.chatcontent.tab.qna": "Mensajes Q&A",
          "square.chatlist.alert.deletedchat":
            "Este chat no existe. Prueba con otro.",
          "square.chatlist.alert.max": "Demasiada gente.",
          "square.chatlist.join.guide":
            "Elige un chat. Puedes ver la lista de subchats de este OpenChat ingresando en un chat y pulsando Chats en el men\xfa.",
          "square.chatlist.joined.title": "Chats en los que est\xe1s: ",
          "square.chatlist.joined.zero":
            "A\xfan no est\xe1s en ning\xfan chat de Square.",
          "square.chatlist.max.member.desc": "El chat ya est\xe1 lleno.",
          "square.chatlist.public.join.alert":
            "El chat saldr\xe1 en tu lista de chats.\n",
          "square.chatlist.public.join.btn": "Unirse ",
          "square.chatlist.public.max.btn": "Lleno",
          "square.chatlist.public.no.msg": "No hay mensajes.",
          "square.chatlist.public.title": "Chats disponibles: ",
          "square.chatlist.public.zero": "Parece que no hay chats.",
          "square.chatlist.reply.alert": "Te respondieron.",
          "square.chatlist.square.button": "OpenChat",
          "square.chatlist.title": "Chats",
          "square.chatmenu.button.qna": "Mensajes Q&A",
          "square.chatmenu.button.thread": "Hilo",
          "square.chatmenu.button.yourthreads": "Tus hilos",
          "square.chatroom.alert.open.url":
            "Link sospechoso.\n\xbfLo vas a abrir?",
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
          "square.chatroom.create.image": "\xc1lbum",
          "square.chatroom.default.announce.content":
            'Te est\xe1bamos esperando en "%1".',
          "square.chatroom.deletefromall.alert":
            "Se eliminar\xe1n estos mensajes.",
          "square.chatroom.desc.botadded": "%1 agreg\xf3 %2 al chat.",
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
            "Si lo eliminas, el chat secundario dejar\xe1 de estar disponible para todos los miembros.",
          "square.chatroom.setting.report": "Reportar",
          "square.chatroom.settings.change.title":
            "\xbfQu\xe9 nombre le pones al chat?",
          "square.chatroom.settings.leave.no.message":
            "Salir del grupo sin que se enteren",
          "square.chatroom.system.alert.notfriend":
            '%2, del OpenChat "%1", no est\xe1 en tus Amigos.\nCuidado con sus mensajes.',
          "square.chatroom.system.message.change.bg":
            "Un administrador cambi\xf3 la foto de OpenChat.",
          "square.chatroom.system.message.change.maxparticipants":
            "%1 puso como m\xe1ximo %2 miembros.",
          "square.chatroom.system.message.change.name":
            "%1 cambi\xf3 el nombre del chat a \u201c%2\u201d.",
          "square.chatroom.system.message.change.picture":
            "%1 cambi\xf3 la foto de perfil del chat.",
          "square.chatroom.system.message.kickout":
            "Banearon a %1 de este OpenChat.",
          "square.chatroom.system.msg.alert.private":
            '\xa1Ojo! Est\xe1s en un chat privado para el Square "%1".',
          "square.chatroom.system.msg.alert.public":
            'Est\xe1s en el OpenChat "%1".',
          "square.chatroom.system.msg.guide.loading":
            "Al bajar, los mensajes anteriores se cargan.",
          "square.chatroom.system.msg.guide.report":
            "Haz clic derecho en mensajes, fotos, videos o links para reportarlos.",
          "square.chatroom.system.msg.tooltip.private":
            '\xa1Ojo! Este es un chat privado para el Square "%1".',
          "square.chatroom.system.msg.tooltip.public":
            'Vas a entrar al OpenChat "%1".',
          "square.chatroom.systemmsg.deletedchat": "Eliminaron este chat. ",
          "square.chatroom.systemmsg.deletedgroup":
            "Se elimin\xf3 el OpenChat.",
          "square.chatroom.systemmsg.emptycommunity": "OpenChat no disponible",
          "square.chatroom.systemmsg.emptyroom": "Chat no disponible",
          "square.chatroom.systemmsg.kickout":
            "El administrador te expuls\xf3 de este chat. ",
          "square.chatroom.vmenu.chatlist": "Chats",
          "square.chatroom.vmenu.groupchatlist": "Inicio Square",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "Avisa cu\xe1ndo\ndejas el chat.",
          "square.coadmin.alert": "\xbfQuieres que sea subadministrador?",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\uc5b5",
          "square.common.desc.usercount1k": "%1K",
          "square.common.desc.usercount1m": "%1M",
          "square.common.desc.usercount1man": "%1\ub9cc",
          "square.common.share": "Compartir",
          "square.community.home.alert.invited.chat":
            "\xbfAceptas la invitaci\xf3n y te unes?",
          "square.community.home.chat.button.start": "Iniciar",
          "square.community.home.invite.button": "Invitar",
          "square.community.home.msg.chat.onlymember":
            "Tienes que unirte primero al Square,\n\xbfte animas?",
          "square.community.home.msg.onlymember":
            "Puedes participar en el Square\ncuando se apruebe tu solicitud para unirte.",
          "square.content.home.shared": "Comparti\xf3 una Nota",
          "square.cover.chat.btn": "Chat",
          "square.cover.investmentscams":
            "Cuidado con los fraudes usando LINE.",
          "square.cover.post.btn": "Notas",
          "square.create.btn": "",
          "square.create.category": "Categor\xeda ",
          "square.create.category.desc":
            "Si eliges una categor\xeda, el OpenChat aparecer\xe1 en las recomendaciones.",
          "square.create.default.category": "Nada",
          "square.create.description": "Descripci\xf3n",
          "square.create.description.desc": "Describe el OpenChat",
          "square.create.description.input": "Descripci\xf3n",
          "square.create.description2":
            "Ingresa palabras clave usando #hashtags",
          "square.create.error.no.name": "Escribe el nombre del OpenChat.",
          "square.create.error.popup.input.description.info":
            "Escribe una descripci\xf3n.",
          "square.create.error.popup.input.info":
            "Te falta completar ciertos datos.",
          "square.create.groupname": "Nombre OpenChat",
          "square.create.image": "Elegir foto",
          "square.create.over.text.num.alert":
            "Es lo m\xe1ximo que puedes grabar. ",
          "square.create.search": "B\xfasqueda abierta",
          "square.create.search.desc":
            "Este OpenChat se puede buscar por su nombre y descripci\xf3n.",
          "square.create.setting.desc": "Podr\xe1n buscar tu OpenChat.",
          "square.create.sgroup.approval.desc":
            "El administrador tramita las solicitudes para unirse al OpenChat.",
          "square.create.sgroup.closedtype": "Privado",
          "square.create.sgroup.opentype": "Abierto",
          "square.create.subchat.guide.des":
            "Los ajustes de privacidad del OpenChat y los permisos de administrador se aplicar\xe1n a todos los chats secundarios.",
          "square.create.subchat.title": "Crear chat secundario",
          "square.create.title": "Crear OpenChat",
          "square.create.welcome": "Saludo",
          "square.createchat.error.no.auth.public":
            "El administrador deshabilit\xf3 la opci\xf3n para crear chats secundarios.",
          "square.createchat.inputtitle": "Ponle un nombre",
          "square.createchat.title": "Crear chat",
          "square.createchat.type.maximum.option": "Participantes m\xe1ximos",
          "square.createchat.type.maximum.option.desc":
            "Define la cantidad m\xe1xima de miembros que pueden unirse al chat.",
          "square.createchat.type.private": "Privado ",
          "square.createchat.type.private.desc":
            "Se necesita una invitaci\xf3n para unirse.",
          "square.createchat.type.public": "Abierto",
          "square.createchat.type.public.desc": "Cualquiera puede unirse.",
          "square.createchat.type.public.option": "Abierto",
          "square.createopenchat.button.setagerestriction": "L\xedmite de edad",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "Solo mayores de edad se pueden unir.",
          "square.createopenchat.desc.search":
            "Algunos de los mensajes de los OpenChat se pueden buscar y hacer vistas previas. Puedes modificar estos ajustes una vez que se haya creado el Openchat.",
          "square.createopenchat.placeholder.enterdescription":
            "Describe de qu\xe9 va este OpenChat.",
          "square.createsubchat.toggle.notifyinopenchat":
            "Notificar OpenChat del nuevo subchat",
          "square.default.name.title": "Nombre OpenChat",
          "square.error.cannot.forward.contact":
            "No puedes enviar contactos en los chats de OpenChat.",
          "square.error.fail.upload.profile.image":
            "No se pudo actualizar el perfil. ",
          "square.error.not.normal":
            "Se produjo un error.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "square.error.noti.kickout": "Te banearon del OpenChat.",
          "square.error.popup.cannot.invite":
            "El admin del Square deshabilit\xf3 esta funci\xf3n.",
          "square.error.popup.cannot.join":
            "No puedes unirte a este OpenChat. Prueba luego.",
          "square.error.popup.deletedgroup": "Este OpenChat ya no existe.",
          "square.error.popup.network": "\xbfTienes conexi\xf3n a internet?\n",
          "square.error.popup.noauth":
            "No tienes permiso para acceder.\nSe te redirigir\xe1 a los ajustes de OpenChat.",
          "square.error.popup.noauth.alert": "No tienes permiso para acceder. ",
          "square.error.popup.usingbyotheruser":
            "Esta configuraci\xf3n est\xe1 siendo modificada por otro usuario.\n",
          "square.filtering.keyword.error.alert": "This word can't be used.",
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
            "Se eliminar\xe1n todos los datos del OpenChat.",
          "square.group.settings.editmember.kickout": "Quitar miembros",
          "square.group.settings.editmember.kickout.alert.done":
            "Se quit\xf3 a este miembro.",
          "square.group.settings.group.profile": "Editar perfil OpenChat",
          "square.group.settings.groupset": "Ajustes OpenChat",
          "square.group.settings.leave": "Salirse",
          "square.group.settings.leave.alert":
            "Si dejas este OpenChat, se eliminar\xe1 toda la informaci\xf3n.",
          "square.group.settings.leave.error.alert.admin":
            "Antes de dejar el OpenChat,\ntransfiere tus permisos de administrador.",
          "square.group.settings.manageauth.additional": "Permisos",
          "square.group.settings.manageauth.additionalchatfeatures":
            "Funciones chat adicionales",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "Crear encuestas",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "Borrar encuestas",
          "square.group.settings.manageauth.chatapp":
            "Funciones chat adicionales",
          "square.group.settings.manageauth.setmaxparticipants":
            "Cambiar m\xe1x. participantes en chat",
          "square.group.settings.managegroup": "Administrar OpenChat",
          "square.group.settings.managegroup.allowtojoin":
            "Permiso para unirse",
          "square.group.settings.managegroup.allowtojoin.desc":
            "El administrador tramita las solicitudes para unirse al OpenChat.",
          "square.group.settings.managegroup.allowtosearch":
            "Mostrar OpenChat en b\xfasquedas",
          "square.group.settings.managegroup.allowtosearch.desc":
            "Se puede buscar este OpenChat por palabras clave.",
          "square.group.settings.managegroup.autotag": "Sugerir tags ",
          "square.group.settings.managegroup.autotag.decs":
            "Al escribir posts, se recomiendan tags autom\xe1ticamente.",
          "square.group.settings.managegroup.deletegroup": "Eliminar OpenChat",
          "square.group.settings.managegroup.invite": "Invitar miembros",
          "square.group.settings.managegroup.invite.desc":
            "Cuando se desactiva, no se puede invitar a otros miembros y ya no funcionan los links y c\xf3digos QR que se hab\xedan compartido.",
          "square.group.settings.managegroup.updateurl":
            "Actualizar link de invitaci\xf3n",
          "square.group.settings.managegroup.updateurl.desc":
            "No podr\xe1s usar este link si lo actualizas.\n\xbfContin\xfaas?",
          "square.group.settings.managemember": "Administrar miembros",
          "square.group.settings.managemembers.alert.cannot.select":
            "Solo puedes elegir hasta %d usuarios.",
          "square.group.settings.managemembers.allowrejoin": "Desbanear",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "\xbfLe permites unirse de nuevo?",
          "square.group.settings.managemembers.blocktojoin": "Baneados",
          "square.group.settings.managemembers.blocktojoin.alert":
            "Si le desbaneas, podr\xe1 unirse de nuevo a este OpenChat.",
          "square.group.settings.managemembers.manageadmin":
            "Gestionar administradores",
          "square.group.settings.managemembers.manageadmin.added": "Agregado. ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "\xbfLe quitas los permisos de subadministrador?",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "Quitar",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "Subadministrador ",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "Transferir permisos administrador",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "\xbfLe transfieres los permisos administrador?\nAl prescindir de tus permisos de administrador te haces subadministrador autom\xe1ticamente. ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            'Elige con qui\xe9n quieres administrar el Square.\nConfigura un subadministrador en "Gestionar permisos". ',
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "Si transfieres tus permisos de administrador a un subadministrador, pasar\xe1s a ser subadministrador.",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "Agregar subadministrador",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            'Elige con qui\xe9n quieres administrar OpenChat.\nConfigura un subadministrador en "Gestionar permisos".',
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "No hay nadie para elegir.",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "A\xfan no agregaste subadministradores.",
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
            "Selecciona qui\xe9n puede realizar modificaciones a OpenChat.",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "Invitar miembros ",
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
            "Aprobar todos ",
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
            "Seleccionar todo",
          "square.group.settings.managemembers.request.zero":
            "No hay solicitudes para unirse.",
          "square.group.settings.memberlist": "Ver o invitar miembros",
          "square.group.settings.myprofile.title": "Mi perfil",
          "square.group.settings.nickname": "Apodo",
          "square.group.settings.noti.post": "Notificar posts",
          "square.group.settings.noti.post.dec":
            "Puedes recibir notificaciones de posts.",
          "square.group.settings.policy": "T\xe9rminos de uso\nOpenChat",
          "square.group.settings.profile.title": "",
          "square.group.settings.recieve.chat": "Invitaciones de chat",
          "square.group.settings.recieve.friendsrequest":
            "Solicitudes de amistad ",
          "square.group.settings.report": "Reportar OpenChat",
          "square.group.settings.reportpage.agreeandsend": "Aceptar y enviar",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "Confirmar y enviar",
          "square.group.settings.reportpage.desc": "Por qu\xe9 lo reportas:",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "Para poder analizar el caso, necesitamos que nos brindes informaci\xf3n detallada.",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "Omitir",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "Reportar",
          "square.group.settings.reportpage.reason1": "Spam/Publicidad",
          "square.group.settings.reportpage.reason2": "Acoso sexual",
          "square.group.settings.reportpage.reason3": "Acoso",
          "square.group.settings.reportpage.reason4": "Otras conductas",
          "square.group.settings.reportpage.reason5": "Contenido off-topic",
          "square.group.settings.reportpage.reason6": "Robo identidad",
          "square.group.settings.reportpage.reason7": "Estafa",
          "square.group.settings.reportpage.report.btn": "Reportar",
          "square.group.settings.reportpage.reportdone": "Lo reportaste",
          "square.grouppopup.alert.alreadyjoin":
            "Ya est\xe1s en este OpenChat. Cierra esta ventana para acceder.",
          "square.grouppopup.alert.blocked":
            "No puedes unirte a este OpenChat. Int\xe9ntalo m\xe1s tarde.",
          "square.grouppopup.alert.join.ing":
            "Podr\xe1s unirte cuando el administrador la acepte.\n",
          "square.grouppopup.alert.requestdone":
            "Podr\xe1s unirte cuando el administrador la acepte.",
          "square.grouppopup.button.join.ing": "Procesando...",
          "square.grouppopup.chat.count.plurals.one": "%1 chat p\xfablico",
          "square.grouppopup.chat.count.plurals.other": "%1 chats p\xfablicos",
          "square.grouppopup.invite.tooltip":
            "Invita amigos desde LINE o comparte un link de invitaci\xf3n o c\xf3digo QR.",
          "square.grouppopup.invitefriend": "Invitar amigos",
          "square.grouppopup.member.count.plurals.one": "%1 miembro",
          "square.grouppopup.member.count.plurals.other": "%1 miembros",
          "square.grouppopup.post.count.plurals.one": "%1 nota",
          "square.grouppopup.post.count.plurals.other": "%1 notas",
          "square.grouppopup.qrcode": "C\xf3digo QR",
          "square.grouppopup.qrcode.desc":
            "Muestra el c\xf3digo QR o comp\xe1rtelo en tus posts.",
          "square.grouppopup.qrcode.save": "Guardar QR",
          "square.grouppopup.qrcode.saved": "Guardado. ",
          "square.grouppopup.sendrequest": "Solicitar unirse",
          "square.grouppopup.url": "Invitaci\xf3n link",
          "square.grouppopup.url.app": "Mandar por otra app",
          "square.grouppopup.url.line": "Compartir con LINE",
          "square.home.addfavorite": "\xa1A tus favoritos!",
          "square.home.cancelfavorite": "Quitar de favoritos",
          "square.home.chat.section.invited": "Te invitaron",
          "square.home.favorite.tooltip":
            "Agrega OpenChat a tus\nfavoritos en Amigos.",
          "square.home.invite.copy.link": "Copiar link",
          "square.home.invite.save.qr": "Guardar QR",
          "square.home.invite.share.link": "Compartir link",
          "square.home.invite.share.qr": "Compartir QR",
          "square.home.menu.photo": "Foto",
          "square.home.menu.write": "Postear",
          "square.home.nickname": "%1",
          "square.home.setting": "Configuraci\xf3n",
          "square.home.tab.chat": "Chats",
          "square.home.tab.post": "Posts",
          "square.home.toast.addfavorite": "Se agreg\xf3 a tus favoritos.",
          "square.home.toast.cancelfavorite": "Se quit\xf3 de tus favoritos.",
          "square.invite.complete.one": "Invitaste a %n.",
          "square.invite.complete.other": "Invitaste a %n.",
          "square.invite.complete.plurals.one": "Invitaste a %n.",
          "square.invite.complete.plurals.other": "Invitaste a %n.",
          "square.invite.friend": "Invitar amigos",
          "square.invite.urlscheme.chatroom.chatname": 'Invitar a "%1"',
          "square.invitemember.confirm.donotshowagain": "No mostrar m\xe1s",
          "square.invitemember.confirm.invite":
            "Los invitados pueden ver los mensajes anteriores.",
          "square.invitemember.desc":
            "Solo puedes invitar a los de este Square.",
          "square.invitemember.desc.urlscheme.chatroom":
            "Invita a los que no est\xe9n todav\xeda en este OpenChat.",
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
          "square.join.question.guide": "De 5 a 50 caracteres",
          "square.joincode.error": "C\xf3digo incorrecto. ",
          "square.joincode.guide":
            "Ingresa el c\xf3digo que puso el administrador.",
          "square.joincode.guide.description":
            "Ingresa el c\xf3digo de 4 a 8 caracteres alfanum\xe9ricos para unirte al OpenChat.",
          "square.joincode.input.guide": "C\xf3digo",
          "square.joincode.title": "C\xf3digo",
          "square.joinscreen.placeholder.enteranswerhere": "Respuesta",
          "square.keyboardmenu.button.qna": "Mensaje Q&A ",
          "square.kickout.alert.done":
            "Se le bane\xf3 del OpenChat. Le puedes desbanear desde el men\xfa de miembros en los ajustes de OpenChat.",
          "square.kickout.blockoption": "Te quitaron del OpenChat.",
          "square.kickout.error.alert.admin":
            "No puedes banear a un administrador o subadministrador.",
          "square.kickout.reason1": "Spam",
          "square.kickout.reason2": "Lenguaje inapropiado",
          "square.kickout.reason3": "Otras conductas",
          "square.leave.last.person.alert": "",
          "square.leftuser.kickout.btn": "Banear",
          "square.main.create.block.alert":
            "No puedes crear Squares durante el periodo beta. ",
          "square.main.create.guide":
            "Crea tu OpenChat y\nconoce a muchos m\xe1s.",
          "square.main.mylist": "Tus OpenChats",
          "square.main.mylist.sortbyname": "Por nombre",
          "square.main.mylist.sortbyupdate": "\xdaltima actualizaci\xf3n",
          "square.main.mylist.sortbyvisit": "\xdaltima visita",
          "square.main.mylist.viewall": "Ver todo",
          "square.main.mylist.zero":
            "\xdanete o crea un OpenChat y chatea con gente con tus mismos intereses.",
          "square.main.search.block.alert":
            "Las b\xfasquedas no est\xe1n disponibles en el periodo beta. ",
          "square.main.search.default.msg": "Nombre y descripci\xf3n OpenChat",
          "square.managemembers.button.seewholeft": "Qui\xe9n se fue",
          "square.managemembers.desc.seewholeft":
            "Lista con los que se dejaron el OpenChat en las \xfaltimas 24 horas.",
          "square.manageopenchat.desc.setjoincode":
            "Ingresa el c\xf3digo para unirte.",
          "square.members": "Miembros",
          "square.members.addmembers": "Invitar miembros",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "Se banea a alguien del chat",
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
            'El administrador elimin\xf3 el chat "%1".',
          "square.noti.deleted.coadmin":
            'Ya no eres subadministrador del OpenChat "%1".',
          "square.noti.deleted.gorup": 'Se elimin\xf3 el OpenChat "%1".',
          "square.noti.join.done": 'Te uniste al OpenChat "%1".',
          "square.noti.joinrequest": '%1 quiere unirse al OpenChat "%2".',
          "square.noti.kickout": 'Te banearon del OpenChat "%1".',
          "square.notification.desc.userjoinedopenchat":
            'Un miembro nuevo se uni\xf3 al OpenChat "%1".',
          "square.notification.setting":
            "Notificaciones para notas de OpenChat\nActiva las notificaciones para las notas de OpenChat.",
          "square.openchat.desc.adminaddedbottochat":
            "[0] agreg\xf3 [1] al chat.",
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
          "square.openchat.popupbutton.ok": "OK",
          "square.openchat.popupbutton.seemore": "M\xe1s",
          "square.openchat.popupdesc.deletemessagesfor":
            "\xbfQu\xe9 mensajes eliminas?\nArrastra el cursor para eliminar hasta 50 mensajes.",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            'Los mensajes nuevos se muestran con "N".',
          "square.openchat.popupdesc.unsendmessage":
            "El mensaje no se eliminar\xe1 en versiones anteriores de LINE. ",
          "square.openchat.popuptitle.deletemessages": "Eliminar mensajes",
          "square.openchatannouncements.title.announcements": "Recordatorio",
          "square.openchatcharacterprofiles.button.cancel": "No, gracias",
          "square.openchatcharacterprofiles.button.save": "Guardar",
          "square.openchatcharacterprofiles.title.selectcharacter": "Elige uno",
          "square.openchatentry.button.confirm": "Aceptar",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[<font color=\\'#07B53B\\'>Trata a los dem\xe1s</font> <font color=\\'#07B53B\\'>como te gustar\xeda que te trataran</font>.]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[Sigue estas <font color=\\'#07B53B\\'>normas de sentido com\xfan</font> para seguir usando OpenChat.]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[OpenChat es un espacio abierto a todo el mundo. Muestra tu <font color=\\'#07B53B\\'>respeto</font>.]]>",
          "square.openchatentry.header.dontsendrudemessages":
            "2. Mant\xe9n la onda",
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
            "Disponible en la versi\xf3n de LINE para tel\xe9fonos inteligentes.",
          "square.openchatmember.button.default": "Predeterminada",
          "square.openchatmember.button.oldjoin": "Antiguos ",
          "square.openchatmember.button.recentjoin": "Recientes ",
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
            "Se te avisa cuando responden a tus mensajes.",
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
            "Los miembros de cualquier chat secundario pueden ver las Notas compartidas en el OpenChat.",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "OpenChat",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "Para ofrecerte un entorno seguro en OpenChat tienes que verificar tu n\xfamero de tel\xe9fono. Puedes hacerlo desde la app.",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "Verificaci\xf3n identidad",
          "square.openchatpopup.button.cancel": "Cancelar",
          "square.openchatpopup.button.confirm": "Aceptar",
          "square.openchatpopup.desc.changesetting":
            "Tambi\xe9n se aplicar\xe1n estos cambios a OpenChat y otros subchats. ",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "Este OpenChat es para mayores de 18 a\xf1os.",
          "square.openchatprivacysettings.desc.opentoallages":
            "Este OpenChat es para todos.",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "Ingresa el c\xf3digo para entrar en OpenChat. Con el c\xf3digo, te aseguras que solo entran usuarios que hayan verificado su edad.",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "Ingresa la pregunta para entrar en OpenChat. Los administradores o subadministradores revisar\xe1n las solicitudes y aprobar\xe1n a los miembros. Con esta medida, te aseguras que solo entran usuarios que hayan verificado su edad.",
          "square.openchatprofile.button.join": "Unirse",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "La configuraci\xf3n de este OpenChat es de otro pa\xeds o regi\xf3n.",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "OpenChat solo de lectura",
          "square.openchatprofile.desc.tooltip":
            "Unirse a este OpenChat con un nombre nuevo y una foto de perfil.",
          "square.openchatsetting.desc.maxpeople":
            "Este ajuste no se puede cambiar para los MegaChats.",
          "square.openchatsetting.desc.mentionnoti":
            "Te avisaremos si te mencionan en chats aunque tengas las notificaciones del chat apagadas.",
          "square.openchatsetting.desc.mentions": "Menciones",
          "square.openchatsetting.desc.onlyopen":
            "Solo disponible cuando el OpenChat est\xe1 configurado para todas las edades.",
          "square.openchatsetting.desc.visibility":
            "Permitir b\xfasqueda y vista previa de mensajes",
          "square.openchatsetting.desc.visibilityallowed": "Permitir",
          "square.openchatsetting.desc.visibilitynotallowed": "No permitir",
          "square.openchatsetting.desc.visiforco":
            "Estos mensajes se pueden buscar. Opci\xf3n disponible si la misma est\xe1 activada en OpenChat (solo los administradores pueden cambiarla).",
          "square.openchatsettings.button.allowmessagesfrom":
            "Permitir mensajes",
          "square.openchatsettings.button.continue": "Continuar",
          "square.openchatsettings.button.leavemainchat":
            "Dejar chat principal",
          "square.openchatsettings.button.leavesubchat": "Dejar subchat",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "Mensajes del sistema ",
          "square.openchatsettings.button.settoreadonlymode": "Solo leer",
          "square.openchatsettings.desc.addopenchatdescription":
            "Describe de qu\xe9 va este OpenChat.",
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
            "Todos pueden enviar mensajes.",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "Solo el administrador puede enviar mensajes.",
          "square.openchatsettingv.desc.allmessages": "Todos los mensajes",
          "square.openchatsettingv.desc.dontallow": "No permitir",
          "square.openchatsettingv.desc.off":
            "Disponible cuando OpenChat se puede ver en la b\xfasqueda.",
          "square.openchatsettingv.desc.on":
            "Los mensajes de OpenChat ahora saldr\xe1n en el perfil y en la b\xfasqueda.",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "Invita a tu gente a este OpenChat.",
          "square.openchatsharelink.title.sharelink":
            "Compartir este link OpenChat ",
          "square.openchatsubchat.title.subchatname": "Nombre subchat",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "Este fondo solo lo puedes ver t\xfa.",
          "square.pdpa.policy.agree.btn": "Continuar",
          "square.personaloption.alert.error.name":
            "Alguien se te adelant\xf3. Prueba con otro.",
          "square.personaloption.chat": "Recibir chats otros miembros.",
          "square.personaloption.chat.desc":
            "Recibir invitaciones de otros miembros de OpenChat.",
          "square.personaloption.copy": "Se copi\xf3. ",
          "square.personaloption.friendrequest":
            "Te pueden mandar solicitudes amistad.",
          "square.personaloption.friendrequest.desc":
            "Te pueden mandar solicitudes amistad.",
          "square.personaloption.greetingmessage": "Dile algo al admin",
          "square.personaloption.greetingmessage.default":
            "Pon un mensaje para el administrador.",
          "square.personaloption.guide": "Ingresa un nickname",
          "square.personaloption.join.btn": "Me uno",
          "square.personaloption.joincode.btn": "Unirse con c\xf3digo",
          "square.personaloption.profile.title": "Perfil OpenChat",
          "square.personaloption.profile.title.tooltip.desc":
            "Elige una foto y un nombre para este OpenChat. Recuerda que no se muestra tu perfil de LINE.",
          "square.personaloption.sendrequest.btn": "Solicitar unirse",
          "square.personaloption.welcomemsg": "Saludo ",
          "square.policy.agree.btn": "Acepto ",
          "square.policy.title": "T\xe9rminos de uso",
          "square.policy.viewall":
            "Aseg\xfarate de leer los t\xe9rminos de uso OpenChat",
          "square.popup.button.grantpermission": "Configurar",
          "square.popup.button.setaspublic": "Hacerlo P\xfablico",
          "square.post.announcement.announce": "Configurar",
          "square.post.announcement.delete": "Eliminar nota",
          "square.post.announcement.delete.desc":
            "Esta nota tambi\xe9n se quitar\xe1 de las notas importantes. \xbfLa eliminas?",
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
          "square.post.error.deletedcomment": "Este comentario se elimin\xf3.",
          "square.post.error.deletedjoined": "Este post ya se borr\xf3. ",
          "square.post.error.deletedpost": "Se elimin\xf3 esta nota.",
          "square.post.error.write":
            "El admin deshabilit\xf3 la opci\xf3n para escribir posts. ",
          "square.post.hashtag.title": "%2 en %1",
          "square.post.join": "Me uno",
          "square.post.joinguide":
            '\xa1No te lo pierdas! \xdanete a "%1" y comparte chats y posts con los dem\xe1s.',
          "square.post.linktype.chatlist": "comparti\xf3 una nota de OpenChat.",
          "square.post.linktype.scroll": "comparti\xf3 una nota de OpenChat.",
          "square.post.linktype.title": "Ver nota",
          "square.post.share.chatlist": "Compartir con\u2026",
          "square.post.share.popup": "Compartiendo notas OpenChat",
          "square.post.title": "Notas",
          "square.post.write.guide": "Otros podr\xe1n ver tu Nota en OpenChat.",
          "square.post.write.guidecountryspecific": "Compatir en OpenChat.",
          "square.post.write.hashtag":
            "\xa1Agrega tags! As\xed encontrar\xe1n f\xe1cilmente\nchats y posts de Square de temas espec\xedficos.",
          "square.post.zeropage.newpost": "Postear",
          "square.post.zeropage.welcome": "\xa1Inaugura las Notas de OpenChat!",
          "square.postpopup.join":
            "Tienes que ser miembro del Square. \xbfTe unes?",
          "square.privacy.setting.approval": "Aprobaci\xf3n del administrador",
          "square.privacy.setting.guide":
            "Solo los aprobados por el administrador o los que ingresen el c\xf3digo pueden unirse al OpenChat y sus chats secundarios, si est\xe1n disponibles.",
          "square.privacy.setting.joincode": "C\xf3digo para unirse",
          "square.privacy.setting.off": "P\xfablico",
          "square.privacy.setting.off.guide":
            "Cualquiera puede unirse al OpenChat y sus chats secundarios si est\xe1n disponibles.",
          "square.privacy.setting.title": "Ajustes de privacidad",
          "square.privacy.turnoff.alert":
            "Vas a hacer este chat P\xfablico y cualquiera se podr\xe1 unir.",
          "square.privcay.setting.off.guide":
            "Cualquiera puede unirse al espacio y sus chats.",
          "square.qrcode.save.failed": "No se pudo guardar el c\xf3digo QR.",
          "square.readonlyopenchat.popupbutton.ok": "OK",
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
            "Los reportes se revisar\xe1n y procesar\xe1n siguiendo la pol\xedtica de privacidad de OpenChat.",
          "square.report.policy.desc01": "",
          "square.report.policy.desc02": "",
          "square.report.policy.message": "",
          "square.report.subTitle": "Reportar esta nota.\n(Creador: %1)",
          "square.reportopenchat.desc.reportchatfromprofile":
            "La informaci\xf3n (nombre del chat, foto del perfil y el n\xfamero de miembros) del OpenChat reportado, los \xfaltimos 100 mensajes enviados en el chat y la informaci\xf3n (nickname e identificador interno) tanto del reportante como de los administradores del chat en cuesti\xf3n.",
          "square.reportopenchat.desc.reportchatfromsettings":
            "La informaci\xf3n (nombre del chat, foto del perfil y el n\xfamero de miembros) del OpenChat reportado, los \xfaltimos 50 mensajes enviados en el chat y la informaci\xf3n (nickname e identificador interno) tanto del reportante como de los administradores del chat en cuesti\xf3n.",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "El contenido (texto, im\xe1genes y emoticones) del comentario reportado, la informaci\xf3n (nombre del chat, foto de perfil y n\xfamero de miembros) del OpenChat, la informaci\xf3n (nickname, foto de perfil, identificador interno y estado de cuenta) del usuario reportado, y la informaci\xf3n (nickname, foto e identificador interno) del reportante en cuesti\xf3n.",
          "square.reportopenchat.desc.reportopenchatmember":
            "La informaci\xf3n (nombre del chat, foto del perfil y el n\xfamero de miembros) del OpenChat reportado, los \xfaltimos 100 mensajes enviados en el chat y la informaci\xf3n (nicknames de los chats, perfil del icono e identificador interno) tanto del reportante en cuesti\xf3n.",
          "square.reportopenchat.desc.reportopenchatmessage":
            "La informaci\xf3n (nombre del chat, foto del perfil y el n\xfamero de miembros) del OpenChat reportado, los \xfaltimos 10 mensajes enviados en el chat, la informaci\xf3n (nickname, foto de perfil, identificador interno y estado de cuenta) del usuario reportado, y la informaci\xf3n (nickname, foto e identificador interno) del reportante en cuesti\xf3n.",
          "square.reportopenchat.desc.reportopenchatnote":
            "El contenido (texto, im\xe1genes, videos y emoticones) de la Nota reportada, la informaci\xf3n (nombre del chat, foto de perfil y n\xfamero de miembros) del OpenChat, la informaci\xf3n (nickname, foto de perfil, identificador interno y estado de cuenta) del usuario reportado, y la informaci\xf3n (nickname, foto e identificador interno) del reportante en cuesti\xf3n.",
          "square.requesttojoin.button.submit": "Enviar",
          "square.set.joincode.input.guide": "C\xf3digo",
          "square.set.question.input.guide":
            "Pregunta para poder unirse al chat. Solo el administrador y los subadministradores pueden revisar las solicitudes y aprobar qui\xe9n entra.",
          "square.setopenchatprofile.button.characterprofile":
            "Perfil personaje",
          "square.setting.auth.announcement": "Recordatorios",
          "square.setting.auth.message.post": "Borrar mensajes y notas",
          "square.settings.deleteaccount.desc":
            "Los derechos de administrador se transferir\xe1n autom\xe1ticamente a otro miembro.",
          "square.settings.managesquare.defaultchatroom.desc":
            "No se puede borrar el chat predeterminado.",
          "square.settings.managesquare.defaultchatroom.title":
            'Chat predeterminado del Square "%1"',
          "square.settings.managesquare.privatechat": "Permitir chats privados",
          "square.settings.managesquare.privatechat.desc":
            "Los miembros pueden crear chats privados o enviarse mensajes directamente.",
          "square.settings.memberlist.members.subtitle": "Miembros",
          "square.settings.members": "Miembros (%n)",
          "square.settings.myprofile.leavesquare": "Salirse",
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
            "Agrega un nombre y perfil para el chat predeterminado.",
          "square.unsupported.version.message":
            "No es compatible con esta versi\xf3n.\nNecesitas la \xfaltima versi\xf3n de LINE.",
          "square.urlscheme.alert.linkjoin.function.off":
            "No puedes unirte con este link.\nPide a un miembro que te invite.",
          "square.urlscheme.desc2":
            "Solo puedes unirte con dispositivos iOS o Android. ",
          "square.urlscheme.error.notexist": "Este OpenChat ya no existe.",
          "square.urlscheme.invite.msg": "Te invitaron a un OpenChat.",
          "square.urlscheme.package":
            "[%1] Te invitaron a un OpenChat.\n%3\n%2",
          "square.urlscheme.package.chatroom":
            'Te invitaron a "%1". \xdanete al OpenChat con este link.\n%2',
          "square.urlscheme.package.chatroom2": "",
          "square.user.admin": "Admin",
          "square.user.coadmin": "Subadmin",
          "square.userpopup.blockinvite": "Bloquear invitaciones",
          "square.userpopup.error.alert.notmember":
            "Ya no est\xe1 en este OpenChat.",
          "square.userpopup.friendsinfo.btn": "C\xf3mo usarlo ",
          "square.userpopup.friendsrequest.btn": "Agregar",
          "square.userpopup.kickout.ban.btn": "Banear",
          "square.userpopup.kickout.btn": "Banear",
          "square.userpopup.kickout.cancel.btn": "Cancelar",
          "square.userpopup.post.count.btn": "Posts",
          "square.yourthreads.title.yourthreads": "Tus hilos",
          "sticion.msg.desc.expired": "Estos emoticones ya expiraron.",
          "sticker.btn.deleteThisSticker": "Eliminar stickers",
          "sticker.btn.openWebStore": "Tienda Stickers",
          "sticker.customsticker.btn.edit": "Editar texto",
          "sticker.customsticker.cancelalert.desc":
            "Perder\xe1s el texto escrito si sales de esta p\xe1gina.",
          "sticker.customsticker.discard.alert": "Salir",
          "sticker.customsticker.edit.overflow": "El texto es muy largo.",
          "sticker.customsticker.error.updatename.desc":
            "Uy, parece que no se pudo cambiar el texto.",
          "sticker.customsticker.invalidwordupdate.desc":
            "Hay palabras que no est\xe1n admitidas para este sticker. Por favor, elige otras.",
          "sticker.customsticker.sync.alert":
            "Desc\xe1rgatelos en tu tel\xe9fono desde Configuraci\xf3n > Stickers > Mis stickers.",
          "sticker.customsticker.tooltip":
            "\xa1Personaliza tus Stickers con texto!",
          "sticker.download.btn": "Bajar",
          "sticker.download.fail":
            "Error en la descarga.\nInt\xe9ntalo de nuevo.",
          "sticker.downloadAll.confirm": "\xbfDescargas todos tus Stickers?",
          "sticker.downloadAll.desc": "Baja todos tus stickers a la vez.",
          "sticker.downloadAll.downloading": "Descargando stickers...",
          "sticker.downloading.desc":
            "Descargando stickers.\nEspera un momento.",
          "sticker.edit.hint.default": 'Ponle tu texto a "****"',
          "sticker.edit.invalidword.desc": "Palabras no v\xe1lidas",
          "sticker.error.downloadlfailed.desc": "No se pudieron bajar.",
          "sticker.expired.desc":
            "%1 expir\xf3. Se quitar\xe1n estos Stickers.",
          "sticker.msg.desc.delete": "Eliminar",
          "sticker.msg.desc.expired": "Estos stickers ya expiraron.",
          "sticker.msgsticker.button.back": "Atr\xe1s",
          "sticker.msgsticker.button.cancel": "Cancelar",
          "sticker.msgsticker.button.edit": "Editar texto",
          "sticker.msgsticker.button.save": "Guardar",
          "sticker.msgsticker.desc.howtoedit":
            "Elige un sticker para editar el texto.",
          "sticker.msgsticker.desc.prompt":
            "Gu\xe1rdalo y saldr\xe1 en los stickers que mandes.",
          "sticker.msgsticker.validation.errorrefresh":
            "\xa1Vaya! Algo no fue bien. Pulsa en el sticker para cargar la imagen.",
          "sticker.msgsticker.validation.toolong": "\xa1Muy largo!",
          "sticker.nearlyExpired.desc.one": "Expiran en %n d\xeda.",
          "sticker.nearlyExpired.desc.other": "Expiran en %n d\xedas.",
          "sticker.recommendedSticker.label": "Stickers para ti",
          "sticker.search.hint": "Buscar",
          "sticker.search.nosearchresult": "Sin resultados.",
          "sticker.stickerspremium.deletsticker.popup":
            "\xbfLo quitas de tu colecci\xf3n Premium?",
          "sticker.stickerspremium.dropped.desc":
            "Puedes comprarlos y ser\xe1n tuyos.",
          "sticker.stickerspremium.dropped.title":
            "Vaya, ya no est\xe1n en LINE Stickers Premium",
          "sticker.stickerspremium.emojidropped.desc":
            "Puedes comprarlos y ser\xe1n tuyos.",
          "sticker.stickerspremium.emojidropped.title":
            "Vaya, ya no est\xe1n en\nLINE Stickers Premium",
          "sticker.stickerspremium.emojiexpired.desc":
            "\xbfQuieres seguir us\xe1ndolos? Renueva tu suscripci\xf3n LINE Stickers Deluxe.",
          "sticker.stickerspremium.expired.desc":
            "\xbfQuieres seguir us\xe1ndolos? Renueva tu suscripci\xf3n LINE Stickers Premium.",
          "sticker.stickerspremium.expired.title":
            "Expir\xf3 tu membres\xeda Premium",
          "sticker.unpurchased.purchase.btn": "Comprar",
          "sticker.unpurchased.recommended.title": "Para ti",
          "sticon.downloadAll.desc": "Descargar todos los emoticones a la vez.",
          "sticon.downloadAll.downloading": "Descargando...",
          "sticon.downloading.desc": "Descargando...\nEspera un momento.",
          "sticon.expired.desc":
            "%1 expir\xf3. Se quitar\xe1n estos Emoticones.",
          "sticon.nearlyExpired.desc.one": "Expiran en %n d\xeda.",
          "sticon.nearlyExpired.desc.other": "Expiran en %n d\xedas.",
          "sticon.recommendedEmoji.label": "Emoticones para ti",
          "sticon.stickerspremium.deletemoji.popup":
            "\xbfLo quitas de tu colecci\xf3n Premium?",
          "subprofile.common.button.cancel": "Cancelar",
          "subprofile.common.popupbutton.continue": "Continuar",
          "subprofile.common.toast.settingupdated":
            "Configuraci\xf3n del perfil actualizada.",
          "subprofile.editfriends.button.done": "Listo",
          "subprofile.editfriends.popupdesc.dontshowagain":
            "No volver a mostrar",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "No se pudieron seleccionar algunos amigos para este perfil. Int\xe9ntalo de nuevo.",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "No se pudieron seleccionar algunos amigos para este perfil.",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "Alcanzaste el l\xedmite de amigos que puedes establecer en un perfil.",
          "subprofile.editfriends.popuptitle.networkerror":
            "Se produjo un error de red. Comprueba la conexi\xf3n e int\xe9ntalo de nuevo.",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "Disponible solo en la app LINE de tu tel\xe9fono inteligente.",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "A este amigo se le mostrar\xe1 un perfil diferente. \xbfContinuar?",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "Los amigos seleccionados ver\xe1n este perfil. \xbfContinuar?",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "Se produjo un error temporal. Int\xe9ntalo de nuevo m\xe1s tarde.",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "No se pudo cargar tu lista de amigos. Int\xe9ntalo de nuevo.",
          "subprofile.editfriends.subtitle.addfriend": "Agregar amigos",
          "subprofile.editfriends.title.onlyonmobileapp":
            "Crea o elimina un subperfil en la versi\xf3n m\xf3vil.",
          "subprofile.editfriends.title.selectprofile": "Seleccionar perfil",
          "subprofile.editfriends.toast.profileupdatedplural.one":
            "Perfil actualizado para %n amigo.",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "Perfil actualizado para %n amigos.",
          "subprofile.friendsprofile.title.setyourprofile": "Establecer perfil",
          "subprofile.friendsprofile.tooltip.subprofile":
            "Establece el perfil para mostrar a este amigo.",
          "subprofile.groupchatmenu.group.profile": "",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "Cambia el perfil para mostrar amigos en chats grupales.",
          "subprofile.groupprofile.tooltip.subprofile":
            "Establece el perfil que se usar\xe1 en este grupo.",
          "subprofile.groupsettings.button.edit": "Editar",
          "subprofile.groupsettings.subtitle.amountofprofile.one":
            "Se muestra %n perfil",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "Se muestran %n perfiles",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "Establece un subperfil luego de crearlo en la versi\xf3n m\xf3vil.",
          "subprofile.selectfriends.button.deselectall": "Nada",
          "subprofile.selectfriends.button.selectall": "Todo",
          "subprofile.selectfriends.button.selectprofile": "Seleccionar perfil",
          "subprofile.selectfriends.desc.selectfriends":
            "Solo puedes establecer un subperfil para amigos. Los miembros que no lo sean ver\xe1n tu perfil principal.",
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
          "talk.addFriend.recommend.reason.group.name": "Grupo \u300c%1\u300d",
          "talk.addFriend.recommend.reason.lineid":
            "Te agreg\xf3 con tu ID de LINE.",
          "talk.addFriend.recommend.reason.phone":
            "Te agreg\xf3 con tu n\xfamero de tel\xe9fono.",
          "talk.addFriend.recommend.reason.qrcode":
            "Te agreg\xf3 con el c\xf3digo QR.",
          "talk.btn.addbuddy.title": "Agregar",
          "talk.btn.cancel.title": "Cancelar",
          "talk.btn.join.title": "Unirse",
          "talk.chatlist.chatheader.title": "Chats",
          "talk.chatlist.floating.button.chat": "Chat",
          "talk.chatlist.floating.button.chatandgroup": "Grupo o chat",
          "talk.chatlist.floating.button.group": "Grupo",
          "talk.chatlist.floating.button.square": "OpenChat",
          "talk.chatlist.floating.createChat": "Crear chat",
          "talk.chatlist.floating.menu.chatandgroup": "Crea un chat o grupo",
          "talk.chatlist.groupheader.title":
            'Grupos con miembros de nombre "%1"',
          "talk.chatlist.menu.hide": "Ocultar",
          "talk.chatlist.menu.pin.off": "Desanclar chat",
          "talk.chatlist.menu.pin.on": "Anclar chat",
          "talk.chatlist.menu.readAll": "Marcar todos como le\xeddos",
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
          "talk.label.addbuddy.title": "Agregar",
          "talk.label.alreadycontact.title": "Ya es tu Amigo.",
          "talk.label.blocked.buddy.title":
            "Est\xe1 bloqueado. Comprueba tu Configuraci\xf3n.",
          "talk.label.buddies.title": "Amigos",
          "talk.label.buddylist.title": "Amigos",
          "talk.label.chatlist.title": "Chats",
          "talk.label.empty.description.1":
            'Agrega Amigos usando la b\xfasqueda por ID\no de tu lista "\xbfTe suenan?".',
          "talk.label.empty.description.3":
            "Agrega a tus Amigos con la\nb\xfasqueda por ID.",
          "talk.label.empty.title.1": "\xa1Agrega amigos!",
          "talk.label.empty.title.2": "\xa1Chatea ya!",
          "talk.label.empty.title.3": "\xa1Encuentra a tus amigos!",
          "talk.label.failed.title": "Error al mostrar tu lista de Amigos.",
          "talk.label.failedsearch.rejected.title":
            "\xa1Muchas b\xfasquedas!\nNo podr\xe1s buscar gente por sus n\xfameros o ID temporalmente.",
          "talk.label.failedsearch.title": "No encontramos al usuario.\n",
          "talk.label.favorite.title": "Favoritos",
          "talk.label.groups.title": "Grupos",
          "talk.label.invited.title": "Invitaciones a grupos",
          "talk.label.newfriend.title": "Amigos nuevos",
          "talk.label.nosearchresult.title": "Sin resultados.",
          "talk.label.placehodler.title": "Buscar por nombre",
          "talk.label.recentFriends.title": "\xdaltimos chats",
          "talk.label.recommendbuddyplacehodler.title": "Buscar por ID",
          "talk.label.recommended.addFriend": "Agregar",
          "talk.label.recommended.officialAccount.title":
            "Sugerencia de cuentas oficiales",
          "talk.label.recommended.title": "\xbfTe suenan?",
          "talk.label.search.friends": "Buscar amigos",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "No encontramos al usuario.",
          "talk.label.search.friends.phoneNumber.error":
            "Este n\xfamero no existe\no no se puede buscar.",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "Agrega usuarios por su n\xfamero de tel\xe9fono registrando el tuyo primero.\nAbre LINE en tu celular, ve a Configuraci\xf3n > Perfil, y registra tu n\xfamero.",
          "talk.label.square.title": "OpenChat",
          "talk.label.thatisyou.title": "No puedes agregarte a ti mismo.",
          "talk.menu.aboutgroup": "Editar este grupo",
          "talk.menu.addfavorite": "\xa1A tus favoritos!",
          "talk.menu.addgroup": "Crea un grupo",
          "talk.menu.block": "Bloquear",
          "talk.menu.call": "Llamar",
          "talk.menu.call.video": "Videollamada",
          "talk.menu.call.voice": "Llamada",
          "talk.menu.editname": "Cambiar nombre",
          "talk.menu.exit": "Salir",
          "talk.menu.group.call": "Llamar",
          "talk.menu.help": "Ayuda",
          "talk.menu.hide": "Ocultar",
          "talk.menu.leavegroup": "Salir",
          "talk.menu.logout": "Cerrar sesi\xf3n",
          "talk.menu.myProfile": "Mi perfil",
          "talk.menu.notes": "Notas",
          "talk.menu.posts": "Posts",
          "talk.menu.rejectbuddy": "Bloquear",
          "talk.menu.rejectgroup": "Rechazar",
          "talk.menu.removeFavorite": "Quitar de los favoritos",
          "talk.menu.removetalkitem": "Eliminar",
          "talk.menu.sendContact": "Enviar contacto",
          "talk.menu.setting": "Configuraci\xf3n",
          "talk.menu.showProfile": "Perfil",
          "talk.menu.starttalk": "Chat nuevo",
          "talk.menu.talk": "Chat",
          "talk.menu.talkbuddy": "Chat",
          "talk.menu.talkgroup": "Chat",
          "talk.menu.voip": "Llamada",
          "talk.msg.addbuddy.failed": "No se pudo agregar",
          "talk.msg.addrecommended.failed": "No se pudo agregar",
          "talk.msg.block.failed": "No se pudo bloquear.",
          "talk.msg.blockrecommended.failed": "No se pudo bloquear.",
          "talk.msg.del.1.n":
            "Si eliminas este chat, no podr\xe1s acceder al historial de chat.",
          "talk.msg.del.room":
            "Si eliminas este chat, no podr\xe1s recuperar el historial de chat.",
          "talk.msg.favorite.failed": "No se pudo agregar a tus Favoritos.",
          "talk.msg.favorite.overflow.failed":
            "Puedes a\xf1adir hasta 100 usuarios a tus Favoritos.",
          "talk.msg.hide.failed": "No se pudo ocultar.",
          "talk.msg.joininvitedgroup.failed": "No pudiste unirte al grupo.",
          "talk.msg.leavegroup.failed": "Parece que no puedes salir del grupo.",
          "talk.msg.no.room": "Este chat ya est\xe1 eliminado.",
          "talk.msg.rejectinvitedgroup.failed":
            "No se pudo rechazar la invitaci\xf3n.",
          "talk.network.unreachable": "Tu conexi\xf3n es inestable.",
          "talk.search.hint": "Buscar mensajes, nombres",
          "talk.search.label.chatMember": "Buscar nombres",
          "talk.search.label.displayName": "Buscar por nombre",
          "talk.search.label.member.all": "\uba64\ubc84(%1)",
          "talk.search.label.member.selected": "Elegiste a %1",
          "talk.search.label.reSearch": "Buscar en estos resultados",
          "talk.search.label.reSearch.noResult":
            "Vaya, no se puede buscar m\xe1s. ",
          "talk.search.label.textMessage": "Buscar mensajes",
          "talk.tooltip.delete": "Eliminar",
          "theme.mode.guide.dark.desc":
            "Tienes activado el modo oscuro. Tienes m\xe1s opciones en Configuraci\xf3n > B\xe1sica.",
          "theme.mode.guide.desc":
            "La configuraci\xf3n de la apariencia de tu LINE se ajust\xf3 seg\xfan los ajustes de tu sistema. Puedes modificarlo en Configuraci\xf3n > B\xe1sica. ",
          "theme.mode.guide.light.desc":
            "Ya puedes usar el modo oscuro en Configuraci\xf3n > B\xe1sica > Visualizaci\xf3n.",
          "theme.mode.guide.title": "Elige c\xf3mo ver tu LINE",
          "timeline.alert.attach": "Solo puedes adjuntar 1 archivo.",
          "timeline.alert.attach.unavailable":
            "Uno de los archivos no se puede postear. ",
          "timeline.alert.attachphoto": "Puedes adjuntar hasta 9 fotos.",
          "timeline.alert.commentmaxcount":
            "Los comentarios deben tener menos de 1000 caracteres.",
          "timeline.alert.confirm.close": "\xbfSales sin terminar la Nota?",
          "timeline.alert.confirm.deletecomment":
            "\xbfEliminas este comentario?",
          "timeline.alert.confirm.deletepost":
            "Si lo eliminas, tambi\xe9n se eliminar\xe1n los comentarios.\n\xbfContinuar?",
          "timeline.alert.confirm.deletethumb": "\xbfVas a eliminar la foto?",
          "timeline.alert.confirm.replacepost":
            "Est\xe1s creando un post. \xbfLo eliminas y empiezas con otro?",
          "timeline.alert.deletedpost": "Este post se elimin\xf3.",
          "timeline.alert.discard": "Descartar",
          "timeline.alert.error.group.delete":
            "Se elimin\xf3 este p\xfablico.\nVuelve a elegir.",
          "timeline.alert.error.group.rights":
            "No tienes autoridad en este grupo.\nVuelve a elegir.",
          "timeline.alert.fileMaxcount": "M\xe1ximo %n fotos o videos.",
          "timeline.alert.fileMaxcount.plurals.one":
            "M\xe1ximo %n foto o video.",
          "timeline.alert.fileMaxcount.plurals.other":
            "M\xe1ximo %n fotos o videos.",
          "timeline.alert.invalidcoverimage": "No puedes enviar este archivo.",
          "timeline.alert.mediaMaxcount":
            "Adjunta hasta 20 stickers, fotos o videos.",
          "timeline.alert.official.addfriend":
            "Agrega esta cuenta oficial a tu lista de Amigos\npara poner stickers y comentarios.\n\xbfQuieres agregarla? ",
          "timeline.alert.official.addfriend.share":
            "Si agregas esta cuenta oficial como Amigo, podr\xe1s compartir sus posts con tus amigos. \xbfLa agregas?",
          "timeline.alert.official.unblockfriend":
            "Esta cuenta oficial est\xe1 bloqueada.\nDesbloquea la cuenta para poder dejar stickers y comentarios.\n\xbfLa desbloqueas?",
          "timeline.alert.official.unblockfriend.share":
            "Esta cuenta oficial est\xe1 bloqueada.\nSi desbloqueas la cuenta, podr\xe1s compartir sus posts con tus amigos.\n\xbfDesbloquear esta cuenta?",
          "timeline.alert.photoMaxsize":
            "Puedes adjuntar fotos de\nhasta 20 MB.",
          "timeline.alert.photolimit": "Hasta 20 MB por foto.",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount": "Puedes adjuntar hasta %1 fotos.",
          "timeline.alert.stickerMaxcount": "M\xe1ximo %n stickers.",
          "timeline.alert.stickerMaxcount.plurals.one": "M\xe1ximo %n sticker.",
          "timeline.alert.stickerMaxcount.plurals.other":
            "M\xe1ximo %n stickers.",
          "timeline.alert.stickerUploadRule":
            "Solo puedes adjuntar un sticker animado o sonoro en cada post. No puedes adjuntarlos al mismo tiempo que uno normal.",
          "timeline.alert.textmaxcount":
            "Puedes escribir hasta 10 000 caracteres.",
          "timeline.alert.unblockfriend":
            "Bloqueaste esta cuenta. \xbfLa desbloqueas para compartir sus posts?",
          "timeline.alert.unblockfriend.share":
            "Bloqueaste esta cuenta. \xbfLa desbloqueas para compartir sus posts?",
          "timeline.alert.urlUploadRule": "Solo puedes adjuntar 1 enlace.",
          "timeline.alert.videoMaxLength":
            "Puedes adjuntar un video de\nhasta 5 min de duraci\xf3n.",
          "timeline.alert.videoMaxsize":
            "Puedes adjuntar videos de\nhasta 200 MB.",
          "timeline.alert.videolength":
            "No puedes adjuntar videos de m\xe1s de 5 minutos.",
          "timeline.alert.videolimit":
            "Hasta 200 MB o 5 min de duraci\xf3n por video.",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "Tama\xf1o m\xe1ximo para el archivo adjunto es de 200 MB\n",
          "timeline.alert.waitcommentdone":
            "Int\xe9ntalo de nuevo m\xe1s tarde.",
          "timeline.already.remove.comment": "Este comentario se elimin\xf3.",
          "timeline.attachlink.delete": "Eliminar",
          "timeline.attachlink.hint": "Escribe un link.",
          "timeline.attachlink.title": "Escribir link",
          "timeline.comment.approval":
            "Los comentarios se mostrar\xe1n cuando el administrador los apruebe.",
          "timeline.comment.blinddbyadmin":
            "El administrador elimin\xf3 este comentario.",
          "timeline.comment.delete": "Eliminar",
          "timeline.comment.hint": "Escribe tu comentario.",
          "timeline.comment.like": "Me gusta",
          "timeline.comment.like.cancel": "Ya no me gusta",
          "timeline.comment.loadprevious": "Ver comentarios anteriores",
          "timeline.comment.photo.retry":
            "Se produjo un error al cargar.\nInt\xe9ntalo nuevamente.",
          "timeline.comment.reply": "Responder",
          "timeline.comment.stickerorphoto":
            "Los comentarios no pueden incluir m\xe1s de un sticker o foto.",
          "timeline.comment.write": "Post",
          "timeline.common.cancel": "Cancelar",
          "timeline.common.ok": "Aceptar",
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
          "timeline.date.beforeYesterday": "Hace dos d\xedas a las %1",
          "timeline.date.justNow": "Ahorita",
          "timeline.date.yesterday": "Ayer a las %1",
          "timeline.emptypost.networkerror":
            "No se pudo procesar tu solicitud debido a un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "timeline.emptypost.other": "Todav\xeda no hay posts.",
          "timeline.emptypost.unsupported":
            "Esta cuenta oficial solo te env\xeda mensajes de chat.",
          "timeline.error.and.retry":
            "No pudimos procesar tu solicitud debido a un error temporal.\nInt\xe9ntalo de nuevo.",
          "timeline.error.attach.popupSticker":
            "El sticker saldr\xe1 sin animaci\xf3n ni sonido.",
          "timeline.error.cannot.access.file":
            "Algunas fotos no se pudieron subir porque\nya no est\xe1n en tu PC\no sobrepasan los 20 MB.",
          "timeline.error.list.load.retry":
            "\xa1Lo sentimos! No pudimos cargar la informaci\xf3n.\nInt\xe9ntalo de nuevo.",
          "timeline.footer.comment": "Comentar",
          "timeline.footer.like": "Me gusta",
          "timeline.groupPanel.startgroup": "\xa1Crea tus propios grupos!",
          "timeline.groupPanel.startgroup.desc":
            "Puedes escribir notas y crear \xe1lbumes.",
          "timeline.label.nosearchresult.title": "Sin resultados.",
          "timeline.like.count.one": "%1 Me gusta",
          "timeline.like.count.other": "%1 Me gusta",
          "timeline.loading.examine.time": "Programa de mantenimiento",
          "timeline.loading.examine.timeline": "%1 est\xe1 en mantenimiento.",
          "timeline.loading.neednewversion": "Actualiza LINE para verlo.",
          "timeline.loading.networkerror":
            "No se pudo procesar tu solicitud debido a un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "timeline.loading.retry": "Volver a cargar",
          "timeline.menu.sharetotalk": "Compartir en chat",
          "timeline.mergedposts.detail": "Detalles",
          "timeline.no": "No",
          "timeline.note.popupdesc.sharenote":
            "\xbfCompartes esta Nota en el chat?",
          "timeline.noti.content.NC_1001_1": "%1 agreg\xf3 una nueva nota.",
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
          "timeline.noti.content.NC_2002_1":
            "%1 agreg\xf3 una foto al \xe1lbum.",
          "timeline.noti.content.NC_2002_2":
            "%1 y %2 agregaron fotos al \xe1lbum.",
          "timeline.noti.content.NC_2002_3":
            "%1, %2 y %3 m\xe1s agregaron fotos al \xe1lbum.",
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
          "timeline.noti.content.NC_UPDATE":
            "Actualiza tu LINE primero para ver esta notificaci\xf3n.",
          "timeline.noti.empty": "No tienes nuevos avisos.",
          "timeline.noti.error":
            "No se pudieron cargar las notificaciones.\nInt\xe9ntalo de nuevo m\xe1s tarde. ",
          "timeline.noti.home": "Inicio",
          "timeline.oamerge.feed.title": "Tus cuentas oficiales",
          "timeline.oamerge.title": "Tus cuentas oficiales",
          "timeline.officialprofile.networkerror":
            "No se pudo procesar tu solicitud debido a un error de conexi\xf3n.\nInt\xe9ntalo de nuevo.",
          "timeline.officialprofile.title": "Perfil",
          "timeline.original.open": "Ver p\xe1gina original",
          "timeline.poppost.counttime.hour.one": "en %n hora",
          "timeline.poppost.counttime.hour.other": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.few": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.many": "en %n horas",
          "timeline.poppost.counttime.hour.plurals.one": "en %n hora",
          "timeline.poppost.counttime.hour.plurals.other": "en %d horas",
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
            "Este post se eliminar\xe1 en %n horas.",
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
            "Tambi\xe9n puedes arrastrar y soltar para agregar fotos y videos.",
          "timeline.post.attach.drag.guide.premium":
            "Tambi\xe9n puedes arrastrar y soltar para agregar fotos.",
          "timeline.post.attach.draghere":
            "Arrastra y suelta tus fotos y videos.",
          "timeline.post.attach.draghere.premium":
            "Arrastra y suelta tus fotos.",
          "timeline.post.delete": "Eliminar",
          "timeline.post.deleted": "Este post se elimin\xf3.",
          "timeline.post.deletedbyadmin":
            "El administrador del servicio elimin\xf3 este post.",
          "timeline.post.done": "Listo",
          "timeline.post.edit": "Editar",
          "timeline.post.edit.desc": "\xbfSales sin guardar los cambios?",
          "timeline.post.friends": "Mis Amigos",
          "timeline.post.friends.detail":
            "Solo los Amigos de %1 pueden ver este post.\n",
          "timeline.post.grid.more": "+%n",
          "timeline.post.hashtag": "Hashtags",
          "timeline.post.hashtag.guide.title": "\xa1Agrega #tags!",
          "timeline.post.hashtag.results.related": "Similar",
          "timeline.post.hint": "\xbfQu\xe9 hay de nuevo?",
          "timeline.post.keep": "Keep",
          "timeline.post.likeshare.cancel": "Ya no compartir",
          "timeline.post.likeshare.canceled":
            "El post dej\xf3 de ser compartido.",
          "timeline.post.likeshare.done":
            "Ya tiene Me gusta y est\xe1 compartido.\xa0 ",
          "timeline.post.mention.alert": "Puedes mencionar hasta 20 personas.",
          "timeline.post.mention.empty.description":
            "\"<![CDATA[Etiqueta a tus Amigos poniendo <font color='#4166b1'>@su Nombre</font>.\nLos etiquetados recibir\xe1n una notificaci\xf3n y ver\xe1n tu post instant\xe1neamente.]]>\"",
          "timeline.post.mention.empty.title":
            "\xa1Menciona a tus amigos con el s\xedmbolo @!",
          "timeline.post.mention.setting.edit.alert":
            "Si cambias los ajustes de privacidad de este post, estos usuarios ya no podr\xe1n verlo: \xbfLo cambias?",
          "timeline.post.newpost": "Nuevos posts",
          "timeline.post.onlyme": "Solo yo",
          "timeline.post.public": "P\xfablico a todos",
          "timeline.post.public.desc": "Cualquiera puede ver los posts.",
          "timeline.post.public.sharetotimeline": "Compartir en Timeline",
          "timeline.post.scope.group":
            "Solo los miembros de este grupo pueden ver esta nota.",
          "timeline.post.scope.manToMan":
            "Solo t\xfa y %1 pueden ver esta nota.",
          "timeline.post.seemore": "Ver m\xe1s",
          "timeline.post.share": "Compartir",
          "timeline.post.sharedchanged":
            "Este post no se puede mostrar porque cambi\xf3 la configuraci\xf3n de privacidad del post original.",
          "timeline.post.shareddeleted":
            "Este post se elimin\xf3 o la persona que lo poste\xf3 dej\xf3 de usar LINE.",
          "timeline.post.sorting.option.ranking": "\ub7ad\ud0b9\uc21c",
          "timeline.post.sorting.option.time": "Sort by time received",
          "timeline.post.write": "Post",
          "timeline.publicgroup.emptymember": "No has agregado Amigos.",
          "timeline.publicgroup.group": "Grupos",
          "timeline.publicgroup.group.empty": "No hay grupos.",
          "timeline.publicgroup.linefriends": "Amigos",
          "timeline.publicgroup.linefriends.desc":
            "Los Amigos que pueden ver mi Inicio",
          "timeline.publicgroup.nobodysee": "Nadie puede ver este post.",
          "timeline.publicgroup.sharelist": "Mis P\xfablicos",
          "timeline.publicgroup.title.detail":
            "\xbfQui\xe9n puede ver este post?",
          "timeline.publicgroup.title.post":
            "Configuraci\xf3n de privacidad para posts",
          "timeline.recommend": "Sugerencias",
          "timeline.report.desc":
            "Cuando presentas un reporte se env\xedan los detalles del usuario pertinente, los 100 mensajes de chat m\xe1s recientes o el post indicado.",
          "timeline.report.done": "Mandaste el reporte",
          "timeline.report.reason.advertising": "Publicidad",
          "timeline.report.reason.genderHarassment": "Acoso sexual",
          "timeline.report.reason.harassment": "Transgresiones",
          "timeline.report.reason.other": "Otros",
          "timeline.report.selectReason":
            "\xbfPor qu\xe9 quieres enviar este reporte?",
          "timeline.report.title": "Reportar",
          "timeline.request.failed.likeshare.status":
            "No se pudo confirmar si se comparti\xf3.",
          "timeline.request.failed.timeline": "Error al cargar este post.",
          "timeline.request.failed.url":
            "No se pudo cargar la informaci\xf3n del enlace.\nInt\xe9ntalo de nuevo.",
          "timeline.request.failed.user":
            "No encontramos usuarios que coincidan con la informaci\xf3n.",
          "timeline.retry": "Reintentar",
          "timeline.setting.autoopen":
            "Compartir autom\xe1ticamente con amigos nuevos.",
          "timeline.setting.buddylist.empty":
            "Todav\xeda no tienes amigos en LINE.",
          "timeline.setting.desc": "Ajustes de privacidad",
          "timeline.setting.desc2": "Elige si lo compartes en tu Inicio.",
          "timeline.setting.feed.ranking": "Ordenar posts",
          "timeline.setting.feed.ranking.option": "Priorizar posts",
          "timeline.setting.label.blocked": "No me ve",
          "timeline.setting.label.unblocked": "Me ve",
          "timeline.setting.usetoast": "Notificar actualizaciones de LINE VOOM",
          "timeline.share.copyUrl": "Copiar link",
          "timeline.share.copyUrl.toast": "Se copi\xf3 al portapapeles.",
          "timeline.sharetohome.hint": "Escribe nuevos comentarios aqu\xed.",
          "timeline.sharetotalk.comfirm.desc": '\xbfLo env\xedas a "%1"?',
          "timeline.sharetotalk.empty.chat": "No hay chats para elegir.",
          "timeline.sharetotalk.empty.friend": "Vamos, elige a alguien",
          "timeline.sharetotalk.empty.group": "No hay grupos para elegir.",
          "timeline.sharetotalk.tab.chat": "Chats",
          "timeline.sharetotalk.tab.friend": "Amigos",
          "timeline.sharetotalk.tab.group": "Grupos",
          "timeline.sharetotalk.title": "Compartir en chat",
          "timeline.system.check.wait":
            "Estamos haciendo unas mejoras.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "timeline.time.afternoon": "p.m.",
          "timeline.time.morning": "a.m.",
          "timeline.video.popup.waiting":
            "Codificaci\xf3n en proceso.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "timeline.yes": "S\xed",
          "timline.report.policy.desc":
            "Cuando presentas un informe se env\xedan los detalles del usuario pertinente, tus \xfaltimos 20 mensajes de chat con el usuario o el post en cuesti\xf3n.",
          "unsupported.file.checkbox": "Comprimir y\xa0enviar",
          "unsupported.file.common":
            "Los archivos con formatos incompatibles se comprimir\xe1n y enviar\xe1n en formato zip.",
          "unsupported.file.compress.fail":
            "Vaya, no se pudo comprimir el archivo.",
          "unsupported.file.compressing": "Comprimiendo... ",
          "unsupported.file.dontshow": "No volver a mostrar.",
          "unsupported.file.multi":
            "Algunos archivos tienen un formato no reconocible. \xbfLos comprimes y env\xedas?",
          "unsupported.file.single":
            "Este archivo tiene un formato no reconocible. \xbfLo comprimes y env\xedas?",
          "update.msg.check.security1": "Comprobando la seguridad.",
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
          "upic.btn.ok.title": "Aceptar",
          "upic.label.desc.title":
            "Se pueden subir solo archivos\njpeg, png, gif y bmp.",
          "upic.label.upic.title": "Registrar imagen de perfil",
          "upic.msg.cantFindFile": "No se encontr\xf3 el archivo.",
          "upic.msg.not.image": "Solo puedes enviar im\xe1genes.",
          "upic.msg.select": "Selecciona tu imagen de perfil.",
          "upic.msg.sizeExceeds": "No m\xe1s de 20 MB.",
          "user.report.error":
            "No puedes reportar este mensaje porque ya no existe.",
          "user.report.policy.desc":
            "Cuando presentas un reporte se env\xedan los detalles del usuario pertinente y los 10 mensajes de chat m\xe1s recientes o el post indicado.",
          "user.report.question": "\xbfQuieres bloquear a este usuario?",
          "user.search.placeholder": "Buscar por nombre",
          "user.warning.investmentfraud":
            "Cuidado con los fraudes usando LINE.",
          "user.warning.invitedtogroup":
            "<![CDATA[<b><font color='%1'>%2</font></b> te invit\xf3 a un grupo.\n<font color='#FF3A44'>Si te parece una invitaci\xf3n sospechosa, bloquea y reporta dicha cuenta.</font>]]>",
          "user.warning.spammer": "No est\xe1 en tu lista de Amigos.",
          "user.warning.spammer.group":
            '%1 te invit\xf3 a este grupo. Si crees que puede causar problemas, pulsa "Reportar".',
          "videoProfile.error.fileType":
            "El formato no es compatible. Int\xe9ntalo nuevamente.",
          "videoProfile.error.lessThenOneSec":
            "Tienes que grabar m\xe1s de 1 segundo. Int\xe9ntalo nuevamente.",
          "viewer.alert.desc.delete": "\xbfLo eliminas?",
          "viewer.alert.desc.fullsize":
            "Pulsa Esc para salir de pantalla completa.",
          "viewer.alert.desc.mustinstallplugin":
            "Necesitas un plugin para ver fotos, videos y GIFs en el visor multimedia. \xbfDescargar ahora?",
          "viewer.alert.image.expired.previewinstead":
            "El archivo ya no est\xe1 disponible. Solo puedes ver la miniatura del archivo.",
          "viewer.alert.video.expired":
            "Este video no se puede reproducir porque el tiempo de almacenamiento expir\xf3.",
          "viewer.contextmenu.copy": "Copiar",
          "viewer.contextmenu.forward": "Compartir",
          "viewer.contextmenu.keep": "Guardar en Keep",
          "viewer.contextmenu.keepmemo": "Enviar a Keep Memo",
          "viewer.contextmenu.saveas": "Guardar como...",
          "viewer.contextmenu.scanqr": "Escanear c\xf3digo QR",
          "viewer.contextmenu.scantext": "Escanear texto",
          "viewer.copy.toast.copied": "Se copi\xf3 al portapapeles.",
          "viewer.error.media.download.fail": "Vaya, no se pudo guardar.\n",
          "viewer.error.video.common":
            "Vaya, no se pudo reproducir por un error.",
          "viewer.error.video.network":
            "Un error de conexi\xf3n o servidor impidi\xf3 la reproducci\xf3n.\nInt\xe9ntalo de nuevo.",
          "viewer.error.video.transient":
            "Un error temporal impidi\xf3 la reproducci\xf3n.\nInt\xe9ntalo de nuevo.",
          "viewer.keep.toast.saved": "Guardado en Keep.",
          "viewer.menu.edit": "Editar",
          "viewer.menu.forward": "Compartir",
          "viewer.menu.info.name": "Nombre archivo",
          "viewer.menu.keep": "Guardar en Keep",
          "viewer.menu.keepmemo": "Enviar a Keep Memo",
          "viewer.menu.more.delete": "Eliminar",
          "viewer.menu.more.info": "Info archivo",
          "viewer.menu.more.speed": "Velocidad",
          "viewer.menu.openfolder": "Abrir carpeta",
          "viewer.menu.originalsize": "Tama\xf1o real",
          "viewer.menu.rotate": "Girar",
          "viewer.menu.saveas": "Guardar como...",
          "viewer.menu.scanqr": "Escanear c\xf3digo QR",
          "viewer.menu.scantext": "Escanear texto",
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
          "viewer.play.toast.speaker.beingconnected":
            "Cambiando de parlante...",
          "viewer.popup.info.created": "Se cre\xf3 el:",
          "viewer.popup.info.filesize": "Tama\xf1o de archivo",
          "viewer.popup.info.from": "De",
          "viewer.popup.info.resolution": "Resoluci\xf3n",
          "viewer.popup.info.saved": "Guardado el:",
          "viewer.saveas.toast.saved": "Finaliz\xf3 la descarga.",
          "viewer.tooltip.window.close": "Cerrar",
          "viewer.tooltip.window.maximize": "M\xe1x.",
          "viewer.tooltip.window.minimize": "Minimizar",
          "viewer.tooltip.window.restore": "Restaurar",
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
          "voip.button.label.voiceonly": "Contestar sin c\xe1mara",
          "voip.call.tooltip.cameraunavailable": "C\xe1mara no disponible",
          "voip.call.tooltip.microphoneunavailable":
            "Micr\xf3fono no disponible",
          "voip.connect.camera.alert": "C\xe1mara detectada. \xbfLa activas?",
          "voip.connect.mic.alert": "Micr\xf3fono detectado. \xbfLo activas?",
          "voip.desc.calling": "Llamando\u2026",
          "voip.desc.calling.failed":
            "No se pudo llamar a %1. Int\xe9ntalo de nuevo m\xe1s tarde.(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "Est\xe1s llamando con otro dispositivo.",
          "voip.desc.calling.failed.contact.busy":
            "%1 est\xe1 en una llamada.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.desc.calling.failed.maintance":
            "La funci\xf3n de llamada de voz para PC no est\xe1 disponible por el momento.\nInt\xe9ntalo de nuevo m\xe1s tarde.\nAgradecemos tu comprensi\xf3n.",
          "voip.desc.calling.failed.need.audio":
            "No se encontr\xf3 ninguna tarjeta de sonido.\nRev\xedsala y vuelve a intentarlo.",
          "voip.desc.calling.failed.need.device":
            "No se detect\xf3 ni tu micr\xf3fono ni las bocinas.\nCon\xe9ctalos y vuelve a intentarlo.",
          "voip.desc.calling.failed.need.devicesetting":
            "Your microphone or speaker is turned off. Please check your settings and try calling again.",
          "voip.desc.calling.failed.need.mic":
            "No se encontr\xf3 ning\xfan micr\xf3fono.\nAseg\xfarate de que lo tienes bien.",
          "voip.desc.calling.failed.need.oscamera":
            "No se puede usar la c\xe1mara. Permite el acceso a la c\xe1mara de tu dispositivo.",
          "voip.desc.calling.failed.need.osmic":
            "No se puede usar el micr\xf3fono. Permite el acceso al micr\xf3fono de tu dispositivo.",
          "voip.desc.calling.failed.need.ospeaker":
            "Unable to use speaker. Please enable your microphone in the Control Panel.",
          "voip.desc.calling.failed.need.spk":
            "No se encontraron bocinas.\nAseg\xfarate de que est\xe1n conectadas.",
          "voip.desc.calling.failed.need.update":
            "Podr\xe1s usar la funci\xf3n de llamada de voz para\nPC despu\xe9s de que actualices LINE en tu celular.\n",
          "voip.desc.calling.failed.no.accept":
            "No responde.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.desc.calling.failed.other.device.use":
            "Est\xe1s llamando con otro dispositivo.",
          "voip.desc.calling.failed.peer":
            "Error de conexi\xf3n.\n%1 no recibe tu llamada\nporque su versi\xf3n de LINE no es compatible.",
          "voip.desc.calling.video": "Conectando...",
          "voip.desc.camerausage":
            "Para hacer videollamadas dale acceso a LINE a tu c\xe1mara.",
          "voip.desc.camerausage.maconly":
            "Para usar las videollamadas, LINE necesita acceso a tu c\xe1mara. Ve a Ajustes > Seguridad y privacidad > Privacidad.",
          "voip.desc.connecting": "Conectando\u2026",
          "voip.desc.makeCall.Failed.network":
            "La red est\xe1 inestable, y no se pudo hacer la llamada.\nPor favor, int\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.desc.mic.failed":
            "Parece que hay un problema con tu micr\xf3fono.",
          "voip.desc.microphoneusage":
            "Para hacer videollamadas dale acceso a LINE a tu micr\xf3fono.",
          "voip.desc.microphoneusage.maconly":
            "Para usar las llamadaas y videollamadas, LINE necesita acceso a tu micr\xf3fono. Ve a Ajustes > Seguridad y privacidad > Privacidad.",
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
          "voip.effect.guide.adjust.effect": "Ajustar efecto belleza.",
          "voip.effect.guide.detect.face": "Que se vea bien tu rostro.",
          "voip.effect.guide.extra.001": "Prueba este efecto con tu gente.",
          "voip.effect.guide.extra.006":
            "Mueve tu cabeza a la izquierda y derecha.",
          "voip.effect.guide.extra.011": "Sonr\xede.",
          "voip.effect.guide.extra.012": "Ajusta la intensidad de los efectos.",
          "voip.effect.guide.eye.blink": "Parpadea.",
          "voip.effect.guide.mouth.open": "Abre la boca.",
          "voip.error.init.failed.callee":
            "%1 te est\xe1 llamando.\nDebido al estado de tu PC, si\nhaces una llamada puede que la aplicaci\xf3n se cierre.",
          "voip.error.init.failed.caller":
            "Debido al estado de tu PC,\nsi haces una llamada puede que la aplicaci\xf3n se cierre.",
          "voip.label.create.title": "Llamada",
          "voip.label.mic": "Micr\xf3fono",
          "voip.label.speaker": "Altavoz",
          "voip.label.video": "Videollamada",
          "voip.label.video.cameraon": "Activar",
          "voip.label.video.local.cameraOff": "Apagaste la c\xe1mara.",
          "voip.label.video.local.cameraOn": "Activaste la c\xe1mara.",
          "voip.label.video.local.noCamera":
            "No se encontr\xf3 una c\xe1mara.\nTu Amigo no podr\xe1 verte.",
          "voip.label.video.low.quality": "La conexi\xf3n es inestable.",
          "voip.label.video.remote.cameraOff":
            "El otro usuario apag\xf3 su c\xe1mara.",
          "voip.label.video.remote.cameraOn":
            "El otro usuario activ\xf3 su c\xe1mara.",
          "voip.label.video.remote.noCamera":
            "El otro usuario no tiene una c\xe1mara\no no se puede recibir su video correctamente.",
          "voip.label.video.ringing": "\xbfActivas tu c\xe1mara?",
          "voip.label.video.title": "Videollamada con %1",
          "voip.media.unsupported.alert.update":
            "%1 est\xe1 compartiendo su pantalla. Actualiza tu LINE para ver su pantalla.",
          "voip.msg.already.during.call": "Est\xe1s llamando desde otro chat.",
          "voip.msg.bad.connection": "La conexi\xf3n es inestable.",
          "voip.msg.bad.connection.failover": "Conectando de nuevo...",
          "voip.msg.error.no.audio.source":
            "La llamada se cort\xf3 por un problema con el micr\xf3fono. Reinicia tu tel\xe9fono e int\xe9ntalo de nuevo.",
          "voip.msg.error.no.audio.tx.stream":
            "Se produjo un error.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.msg.network.unstable": "La conexi\xf3n es inestable.",
          "voip.msg.not.avalable.during.call":
            "No se puede usar en una llamada.",
          "voip.msg.peer.no.audio.source":
            "Parece que tienen problemas con el micr\xf3fono y la llamada se cort\xf3. Reinicia tu tel\xe9fono e int\xe9ntalo de nuevo.",
          "voip.msg.send.freeCall": "Entonces llamas a %1, \xbfverdad?",
          "voip.msg.send.videoCall": "\xbfQuieres verte con %1?",
          "voip.msg.switch.to.video.noCamera":
            "No te podr\xe1n ver porque no se detect\xf3 una c\xe1mara. \xbfAceptas la videollamada?",
          "voip.msg.video.camera.unavailable":
            "Tu c\xe1mara no es compatible.\nSelecciona otra en Configuraci\xf3n > Llamadas. Puedes llamar y recibir llamadas aunque no tengas una c\xe1mara.",
          "voip.msg.video.term.device.control":
            "Se interrumpi\xf3 la videollamada.\nCambiando a llamada de voz.",
          "voip.msg.video.term.device.interrupted":
            "Tu amigo detuvo su c\xe1mara.",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "No puedes hacer videollamadas debido a un error temporal.\nInt\xe9ntalo de nuevo m\xe1s tarde o haz una llamada de voz.",
          "voip.msg.video.term.overload.video.changing.failed":
            "No puedes hacer videollamadas debido a un error temporal.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.msg.video.term.unknown":
            "Se produjo un error.\nInt\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.msg.video.term.unstable": "La conexi\xf3n no es buena.",
          "voip.msg.video.term.unsupported.device.video":
            "No puedes hacer la videollamada.\nAseg\xfarate de que tu amigo tiene la \xfaltima versi\xf3n de LINE\nen un dispositivo que acepte videollamadas.",
          "voip.msg.video.term.unsupported.device.voice":
            "Conectado con llamada de voz.\nAseg\xfarate de que tu amigo tiene la \xfaltima versi\xf3n de LINE\nen un dispositivo que acepte videollamadas.",
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
          "voip.popup.start": "Iniciar",
          "voip.screen.share.remove.monitor":
            "Se termin\xf3 la llamada porque se desconect\xf3 la computadora.",
          "voip.screenshare.button.zoomin": "Acercar",
          "voip.screenshare.button.zoomout": "Alejar",
          "voip.screenshare.button.zoomreset": "Resetear zoom",
          "voip.screenshare.desc.pause": "Se par\xf3 compartir video.",
          "voip.screenshare.desc.pause.tooltip":
            "Compartir video se para cuando minimizas, cambias el tama\xf1o o mueves la pantalla compartida.",
          "voip.screenshare.error.closeapp": "Ya se cerr\xf3 esta pantalla.",
          "voip.screenshare.index.screen": "Pantalla",
          "voip.screenshare.index.window": "Ventana",
          "voip.screenshare.option.optimizevideoclips":
            "Optimizar para videoclips",
          "voip.screenshare.tooltip.fullscreen": "Pantalla %1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "Optimiza la funci\xf3n compartir pantalla para videclips m\xe1s fluidos.",
          "voip.tooltip.callsetting": "Ajustes llamada",
          "voip.tooltip.camera.off": "Apagar\nc\xe1mara",
          "voip.tooltip.camera.on": "Encender\nc\xe1mara",
          "voip.tooltip.chat": "Chat",
          "voip.tooltip.echocanceloff": "Desactiva Cancelaci\xf3n eco",
          "voip.tooltip.echocancelon": "Activa Cancelaci\xf3n eco",
          "voip.tooltip.end.call": "Colgar",
          "voip.tooltip.end.groupmeetingcall": "Salir",
          "voip.tooltip.fullhd": 'Mejor audio con "Full HD voice" en verde.',
          "voip.tooltip.mic.off": "Silenciar",
          "voip.tooltip.mic.off.muteronguide": "Activa tu micr\xf3fono.",
          "voip.tooltip.mic.off.spacebartoast":
            "Tienes el micr\xf3fono apagado. Deja pulsado en la barra espaciadora para activarlo.",
          "voip.tooltip.mic.on": "Reactivar\nnotificaciones",
          "voip.tooltip.microphone.autovolume": "Volumen ajuste autom\xe1tico",
          "voip.tooltip.onscreentool.clearall": "Resetear",
          "voip.tooltip.onscreentool.eraser": "Borrador",
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
            "Comparte tu pantalla durante las videollamadas.",
          "voip.tooltip.screen.share.stop":
            "Se est\xe1 compartiendo tu pantalla. Selecciona clic en el icono de nuevo para dejar de compartir.",
          "voip.tooltip.speaker.off": "Apagar sonido ",
          "voip.tooltip.speaker.on": "Encender sonido ",
          "voip.tooltip.switch.to.video": "Cambiar a videollamada",
          "voip.tooltip.video.camera": "Activar o desactivar c\xe1mara",
          "voip.tooltip.video.camera.select": "Elegir c\xe1mara",
          "voip.tooltip.video.fullscreen": "Pantalla completa",
          "voip.tooltip.video.fullscreen.restore":
            "Restaurar ventana al tama\xf1o previo",
          "voip.tooltip.video.pin": "Ventana arriba",
          "voip.tooltip.video.pinoff": "Quitar ventana siempre arriba",
          "voip.tooltip.video.speaker": "Activar o desactivar parlantes",
          "voip.tooltip.video.transform": "Videollamada",
          "voip.tooltip.volumezero":
            "Sube el volumen para o\xedr a los dem\xe1s.",
          "voip.video.calling.failed.cameraSwitch":
            "Error al cambiar de c\xe1mara.\nInt\xe9ntalo de nuevo.",
          "voip.video.calling.failed.noCamera":
            "Error al activar la c\xe1mara.\nComprueba si est\xe1 conectada.",
          "voip.video.desc.makeCall.Failed":
            "Error al conectar. Int\xe9ntalo de nuevo m\xe1s tarde.",
          "voip.video.dynamicspeaking.pinoff": "Desanclar",
          "voip.video.dynamicspeaking.pinoff.desc":
            "Video anclado. Puedes desanclarlo en cualquier momento.",
          "voip.video.effect.popup.downloadfail":
            "Vaya, algo no fue bien. \xbfTe descargas este efecto de nuevo?",
          "voip.video.effect.toast.cameraoff": "Activa tu c\xe1mara",
          "voip.video.effect.toast.detectionfail": "Que se vea bien tu rostro.",
          "voip.video.effect.toast.downloadfail":
            "No se pudo bajar. Int\xe9ntalo de nuevo.",
          "voip.video.effect.toast.nospace":
            "No tienes espacio libre en tu dispositivo. Libera espacio e int\xe9ntalo de nuevo.",
          "voip.video.effect.toast.xpccrash":
            "Se resetearon los efectos de la c\xe1mara debido a un error.\nModifica los ajustes de nuevo.",
          "voip.video.menu.bg": "Fondos",
          "voip.video.menu.bg.alert.addbg": "Usa otro archivo como fondo.",
          "voip.video.menu.bg.alert.addbg.button": "Elegir",
          "voip.video.menu.bg.alert.maxbg":
            "Quita alg\xfan fondo para agregar m\xe1s.",
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
          "voip.video.preview.join": "Unirse",
          "voip.video.preview.title": "Vista previa c\xe1mara",
          "voip.video.title.videocallwith": "Videollamada con %1",
          "voip.video.tooltip.filternblur":
            "Prueba los filtros y el efecto de desenfoque.",
          "voip.video.tooltip.startvideocall":
            "Clic para empezar la videollamada.",
          "voip.video.tooltip.videomirroring": "Desactivar duplicar video",
          "voip.video.tooltip.videomirroringoff": "Desactivar video mirroring",
          "voip.video.tooltip.videomirroringon": "Activar video mirroring",
          "voip.videocall.button.beautyfeature": "Belleza",
          "voip.videocall.popup.start": "Iniciar",
          "voip.videocall.popup.turnon": "Activar",
          "win10.notification.reply.guide": "Responde aqu\xed",
        };
      },
    }]);
