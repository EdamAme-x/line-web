!function () {
  try {
    var e = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      t = (new Error()).stack;
    t &&
      (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "45ca31bf-3fd3-4b14-9fa8-425ead09f1dc",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-45ca31bf-3fd3-4b14-9fa8-425ead09f1dc");
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
    []).push([[687], {
      58687: (e, t, o) => {
        o.r(t), o.d(t, { default: () => a });
        const a = {
          "abuse.report.sent.data.notice.chat_selected":
            "The message you're reporting, up to 9 messages exchanged before or after it, the reported user's information (including their display name, profile icon, and status message), and your information (including your display name and profile icon).",
          "abuse.report.sent.data.notice.direct_chat":
            "The 10 most recent messages exchanged in this chat, the reported user's information (including their display name, profile icon, and status message), and your information (including your display name and profile icon).",
          "abuse.report.sent.data.notice.direct_invitation":
            "The 10 most recent messages exchanged in this chat, the reported user's information (including their display name, profile icon, and status message), and your information (including your display name and profile icon).",
          "abuse.report.sent.data.notice.friend_profile":
            "The reported user's information (including their display name, profile icon, and status message) and your information (including your display name and profile icon).",
          "abuse.report.sent.data.notice.group_chat":
            "The 10 most recent messages exchanged in this group, the group information (including the group name, the group's profile icon, and the information of the person who invited you to the group), and your information (including your display name and profile icon).",
          "abuse.report.sent.data.notice.group_chat_selected":
            "The message you're reporting, up to 9 messages exchanged before or after it, the group information (including the group name, the group's profile icon, and the information of the person who invited you to the group), and your information (including your display name and profile icon).",
          "abuse.report.sent.data.notice.group_invitation":
            "The 10 most recent messages exchanged in this group, the group information (including the group name, the group's profile icon, and the information of the person who invited you to the group), and your information (including your display name and profile icon).",
          "abuse.report.sent.data.notice.note_comment":
            "The reported comment, the note that had the comment, the reported user's information (including their display name), and your information (including your display name).",
          "abuse.report.sent.data.notice.note_post":
            "The reported note, the comments on that note, the reported user's information (including their display name), and your information (including your display name).",
          "abuse.report.sent.data.notice.room_chat":
            "The 10 most recent messages exchanged in this chat, your information (including your display name and profile icon), and the chat information (including the information of the person who invited you to the chat).",
          "abuse.report.sent.data.notice.room_chat_selected":
            "The message you're reporting, up to 9 messages exchanged before or after it, your information (including your display name and profile icon), and the chat information (including the information of the person who invited you to the chat).",
          "abuse.report.sent.data.notice.room_invitation":
            "The 10 most recent messages exchanged in this chat, your information (including your display name and profile icon), and the chat information (including the information of the person who invited you to the chat).",
          "abuse.report.sent.data.notice.square.chat.selected":
            "Relevant information of the OpenChat that is being reported (such as the chat's name, cover photo, member count, and OpenChat identifier) along with the last 100 messages sent in the chat, and your info as well as details related to the chat admin (such as nicknames used in the chat, and user identifiers).",
          "abuse.report.sent.data.notice.square.member.selected":
            "Relevant information of the OpenChat that is being reported (such as the chat's name, cover photo, and member count) along with the last 100 messages sent in the chat, and your info as well as details related to the reported user (such as the reported user's profile icon, nicknames used in the chat, and user identifiers).",
          "abuse.report.sent.data.notice.square.message.selected":
            "Relevant information of the chatroom that is being reported (such as its chat identifier) and the OpenChat that is being reported (such as the chat's name, cover photo, member count, and OpenChat identifier) along with the last 10 messages sent from the reported message in the chat, and your info as well as details related to the reported user (such as the reported user's profile icon, nicknames used in the chat, and user identifiers).",
          "abuse.report.sent.data.notice.square.note.selected":
            "The contents of the reported note (such as text, images, videos, emoji, and its post identifier), relevant information of the OpenChat (such as the chat's name, cover photo, member count, and OpenChat identifier), and your info as well as details related to the reported user (including the reported user's profile icon, their membership status, nicknames used in the chat, and user identifiers).",
          "abuse.report.sent.data.notice.square.notecomment.selected":
            "Details of the reported comment (such as text, images, emoji, and its comment identifier), relevant information about the OpenChat (such as its name, cover photo, member count, and OpenChat identifier), and your info as well as details related to the reported user (including the reported user's profile icon, their membership status, nicknames used in the chat, and user identifiers).",
          "abuse.report.sent.data.notice.square.setting.selected":
            "Relevant information of the chatroom that is being reported (such as the chat's name, cover photo, member count, and chat identifier) along with the last 50 messages sent in the chat, information of the OpenChat that is being reported (such as the OpenChat identifier), and your info as well as details related to the chat admin (such as nicknames used in the chat and user identifiers).",
          "abuse.report.sent.data.notice.template":
            "When you make a report, you send the information shown below to LY Corporation. We use this information to verify the content of the report, take appropriate action, and prevent future abuse of our services. This includes using the information to develop abuse prevention tools.\nTo that end, we may share this information on a need-to-know basis with companies within our group as well as with third-party contractors.\n\nInformation to be sent with your report:\n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "the information for the note's reported comment (such as the comment's identifier, the text, images, and emoji), the reported user's information (such as their user identifier and their display name), the chat's information (such as the chat's identifier), and your information (such as your user identifier and your display name).",
          "note.reportnote.desc.reportnotefrommenu":
            "the information for the reported note (such as the note's identifier, the text, images, emoji, and videos), the reported user's information (such as their user identifier and their display name), the chat's information (such as the chat's identifier), and your information (such as your user identifier and your display name).",
          "openchat.abusereport.desc.threadmessage":
            "the reported message and the 10 messages preceding it in the thread, the reported user's information (such as their nickname and their profile icon), the OpenChat's information (such as the OpenChat's identifier, the OpenChat's name, the cover photo, and the number of members), the chat's information (such as the chat's identifier), the thread's information (such as the thread's identifier), and your information (such as your user identifier and your nickname).",
          "openchat.abusereport.desc.threaduser":
            "the last 50 messages sent in the thread by the reported user, the reported user's information (such as their user identifier, their nickname, and their profile icon), the OpenChat's information (such as the OpenChat's name, the cover photo, and the number of members), the chat's information (such as the chat's identifier), the thread's information (such as the thread's identifier and the last 100 messages sent in the thread), and your information (such as your user identifier and your nickname).",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "Not enough free space.\nPlease free at least 30 MB on your system before trying again.\n",
          ImageViewerLabelNoImage: "No photos shared in this chat.",
          "Keep.info.from.keepmemo": "Keep Memo",
          LoginErrorNaverLoginForbbide: "Please enter a valid email address.",
          Poll_Message_btn: "See details",
          Poll_Title: "Poll",
          "Setting.Alert.Remove.History":
            "If you delete your chat history, you won't be able to recover it. Continue?\n ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "Please restart LINE to change the screen size.\nRestart now?",
          "Setting.label.alarm.sound.1": "Default tone",
          "Setting.label.alarm.sound.2": "Fun LINE",
          "Setting.label.alarm.sound.3": "Calm LINE",
          "Setting.label.alarm.sound.4": "Bell",
          "Setting.label.alarm.sound.5": "Nudge",
          "Setting.label.alarm.sound.6": "Xylophone",
          "Setting.label.alarm.sound.7": "Whistle",
          "Setting.label.alarm.sound.8": "Doorbell",
          "Setting.label.alarm.sound.9": "Crystal",
          "access.chat.search.calendar": "Calendar",
          "access.openchat.chatmenu.button.addyourthreads":
            "Add to favorite threads",
          "access.openchat.chatmenu.button.removeyourthreads":
            "Remove from favorite threads",
          "access.openchat.chatmenu.button.yourthreads": "Favorite threads",
          "access.square.chat.button.more": "Open ad option menu",
          "ad.alert.popup.cantplayduringcall": "Unable to play during a call.",
          "ad.desc.playinginviewer": "Playing in viewer",
          "ad.menu.admute.hideContent": "Hide this banner",
          "ad.menu.admute.hideadvertiser": "Hide all ads from this advertiser",
          "ad.menu.admute.hidethisad": "Hide this ad",
          "ad.menu.videoEnlarge": "Expand and play in viewer",
          "addFriends.error.crossregion":
            "To add this user as a friend, please scan their QR code.",
          "addfriends.label.norecommendation.description":
            "We don't have any recommendations for you right now.",
          "addfriends.menu.chatandgroup": "Create a group",
          "addfriends.search.captcha.fail":
            "The number you entered doesn't match the image. Please try again to add friend.\n",
          "album.add.photo.drag": "Drag and drop photos here.",
          "album.addphotos.desc.limitexceeded":
            "You can only add up to 1,000 items per album.",
          "album.addpopup.desc.e2eeabletoretry":
            "Unable to add items. Please try again.",
          "album.addpopup.desc.retry":
            "Unable to add some items. Please try again.",
          "album.addpopup.desc.unabletoretry":
            "Some items can't be added because they are not supported in albums.",
          "album.createalbum.tooltip.originalresolution.jp":
            "Select this option to add original quality photos.",
          "album.deletepopup.desc.deletealbum":
            "All items in the album will be permanently deleted. Delete this album?",
          "album.label.download": "Download",
          "album.main.desc.albumvideos.one": "%n video",
          "album.main.desc.albumvideos.other": "%n videos",
          "album.main.toast.encodingerror":
            "This video can't be played due to an encoding error.",
          "album.main.toast.encodinginprogress":
            "Encoding in progress. Please try again later.",
          "album.main.tooltip.paidplan":
            "Videos can only be added with a paid plan, and will be deleted if the plan is canceled.",
          "album.mainpopup.button.no": "No",
          "album.mainpopup.button.yes": "Yes",
          "album.mainpopup.desc.deletedvideo": "This video was deleted.",
          "album.mainpopup.desc.stopadding": "Stop adding these items?",
          "album.msg.cancel.upload": "Stop adding these photos?",
          "album.picker.toast.20videomax.jp":
            "You can only add up to 20 videos at once.",
          "album.picker.toast.5minutesvideomax.jp":
            "You can only add videos that are 5 minutes or shorter.",
          "album.picker.toast.max300":
            "You can only add up to 300 items at once.",
          "album.picker.toast.originalresolution.jp":
            "Selected photos will be added in original quality.",
          "album.picker.toast.over20mb.jp":
            "Videos, large photos or those in an unsupported format, and photos edited in LINE will be added in standard quality.",
          "album.picker.toast.somestandard.jp":
            "The selected photos will be added in their original quality. Videos, large photos or those in an unsupported format, and photos edited in LINE will be added in standard quality.",
          "album.picker.toast.videomax.jp.one":
            "You can only add %n more video to this album.",
          "album.picker.toast.videomax.jp.other":
            "You can only add %n more videos to this album.",
          "album.share.toast.addvideomax.jp":
            "You can only add up to 100 videos per album.",
          "album.updatepopup.button.dontshow": "Don't show again",
          "album.updatepopup.button.later": "Later",
          "album.updatepopup.button.updatenow": "Update now",
          "album.updatepopup.desc.notavailable":
            "Some album content may not appear in your current version. Update LINE to the latest version.",
          "album.viewer.button.additems": "Add items",
          "alert.album.blocked.user":
            "You can't use Albums with people you have blocked.",
          "alert.note.blocked.user":
            "You can't use Notes with people you have blocked.",
          "announce.donotshowagain": "Don't show again",
          "announce.donotshowagain.mouseover": "Don't show again",
          "announce.error": "Unable to find the message for this announcement.",
          "announce.minimize": "Minimize",
          "announce.unannounce": "Unannounce",
          "announcement.message.album": "Album: %1",
          "announcement.message.annoucement": "Announce",
          "announcement.message.error.description":
            "Unable to find the message for this announcement.",
          "announcement.message.note.no.text": "Note shared on %1",
          "announcement.message.note.text": "Note: %1",
          "announcement.system.message":
            "<![CDATA[%1 made an <u>announcement</u>.]]>",
          "app.title": "LINE update",
          "att.prepopup.description":
            "This will let us tailor LINE content and ads to your interests.",
          "authorize.content.desc1":
            "As a security measure,\xa0you must verify your account when logging in via a PC for the first time.",
          "authorize.content.desc2":
            "Enter the following code on your mobile device.\n",
          "authorize.e2ee.about.letterSealing": "What is Letter Sealing?",
          "authorize.e2ee.app.update":
            "LINE's security has been enhanced.\nPlease update to the latest version of LINE.",
          "authorize.e2ee.desc1":
            "You need to verify your account to use Letter Sealing.\n",
          "authorize.e2ee.desc2":
            "Enter the following code on your mobile device.\n",
          "authorize.e2ee.primary.cancel":
            "Verification canceled on your mobile device. Please try again.",
          "authorize.msg.closing.alert":
            "You won't be logged in if you close this window. Continue anyway?",
          "authorize.msg.timeout.alert":
            "Your login has expired.\nPlease try again.",
          "authorize.msg.useage.alert":
            'From your smartphone, go to Settings > Account, and enable "Allow login" to log in.',
          "authorize.remained.time": "Time remaining",
          "authorize.window.title": "PC verification",
          "autoSuggest.add.language": "Add languages",
          "autoSuggest.enable": "Display suggestions",
          "autoSuggest.enabled.language": "Language",
          "autoSuggest.msg.desc": "Auto-suggest stickers or emoji as you type.",
          "autoSuggest.msg.desc.downloadFailed":
            "Download unsuccessful.\nPlease try again.",
          "autoSuggest.msg.download.all.emoji": "Download all emoji?",
          "autoSuggest.msg.download.all.sticker":
            "You must download stickers to preview them.\nDownload all your stickers?\n",
          "autoSuggest.title": "Sticker suggestions",
          "buddy.alert.common.failed.add.contact": "Unable to add friend.",
          "buddy.alert.not.allowed.add.contact":
            "The account you are trying to add has reached its maximum friend limit.",
          "buddy.btn.addBuddy": "Add friend",
          "buddy.btn.blockBuddy": "Block",
          "buddy.btn.chat": "Chat",
          "buddy.btn.home": "Home",
          "buddy.btn.setting.profile": "Edit profile",
          "buddy.btn.unblockBuddy": "Unblock",
          "buddy.btn.voip": "Voice call",
          "buddy.label.edit.title": "Change friend's name",
          "buddy.label.info.title": "Profile",
          "buddylist.chooseFriend.empty.btn": "Chat",
          "buddylist.chooseFriend.empty.desc": "Start a new conversation!",
          "buddylist.chooseGroup.emty.desc":
            "You do not have any chat history\nin %1.\nGet the conversation started!",
          "buddylist.chooseMe.empty.desc": "Start a new conversation!",
          "buddylist.plusMenu.chat": "Chat",
          "budy.label.unregisterUser":
            "You haven't added this user as a friend. ",
          "call.callsettingspreview.desc.nocamera":
            "Check your call settings before joining. You won't be seen because your camera couldn't be detected.",
          "call.callsettingspreview.desc.nocameradetected":
            "Your camera couldn't be detected.",
          "call.callsettingspreview.desc.nomic":
            "Check your call settings before joining. You won't be heard because your microphone couldn't be detected.",
          "call.callsettingspreview.desc.nomicdetected":
            "Your microphone couldn't be detected.",
          "call.callsettingspreview.desc.nomicorcamera":
            "Check your call settings before joining. You won't be seen or heard because your camera and microphone couldn't be detected.",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "Your camera and microphone couldn't be detected.",
          "call.cameraoff.friend":
            "The other person's camera\nhas been turned off.",
          "call.cameraoff.me": "Your camera has been turned off.",
          "call.chat.confirm.popup.start": "Start a call?",
          "call.chat.confirm.popup.start.btn.video": "Start video call",
          "call.chat.confirm.popup.start.btn.voice": "Start voice call",
          "call.chatscreen.popup.alreadyinacall": "You are already on a call.",
          "call.doodling.popup.viewerupdaterequired":
            "The other person must first update their LINE app to the latest version for you to use this feature together.",
          "call.doodling.toast.doodlepaused":
            "Doodling is not available while screen sharing is paused.",
          "call.doodling.toast.noiosdoodle":
            "Doodling is unvailable for screens being shared on iOS.",
          "call.doodling.toast.sharepaused":
            "Screen sharing is currently paused.",
          "call.doodling.toast.sharerupdaterequired":
            "The person sharing their screen must first update their LINE app to the latest version for all participants to use this feature.",
          "call.effects.menu.stickers": "Stickers",
          "call.effects.popup.graphiccardproblem":
            "You may experience problems during the call because your graphics card does not meet the minimum requirements for the LINE video call feature.\nContinue anyway?",
          "call.effects.popup.removebgeffect":
            'Deleting your current background will revert your video to the "No background" setting. Delete anyway?',
          "call.effects.toast.stickersonetime":
            "Some stickers may not be supported during calls.",
          "call.error.popupdesc.featureunavailableondevice":
            "A person in call is using a feature that isn't supported on your device. Join the call with the mobile version of LINE to use this feature.",
          "call.error.popupdesc.groupcallunavailable":
            "Group call is currently unavailable. We're working to restore the feature.",
          "call.error.popupdesc.livetalkunavailable":
            "Live talk is currently unavailable. We're working to restore the feature.",
          "call.error.popupdesc.oacallunavailable":
            "Unable to make calls at this time. We're working to restore the feature.",
          "call.error.popupdesc.outdatedapp":
            "A person in call is using a feature that isn't supported on your current version of LINE. Update LINE to the latest version to use this feature.",
          "call.error.popupdesc.videocallunavailable":
            "Video call is currently unavailable. Please make a voice call instead.",
          "call.error.tooltip.audionosrc":
            "Please check whether your microphone is working properly.",
          "call.error.unsupporteddevice":
            "LINE calls aren't supported on this device.",
          "call.groupcall.leavebutton": "Leave call",
          "call.participants.desc.noresults": "No results found.",
          "call.screen.toast.updaterequired":
            "Your friend can't see stickers because they're using an older version of LINE.",
          "call.screenshare.taskbar.screenshare": "Select a screen to share",
          "call.screenshare.taskbar.ytsearch": "Search for YouTube videos",
          "call.screenshare.toast.shareerror":
            "%1 is already using a feature that shares a screen.",
          "call.screenshare.toast.unsupportedos":
            "Update your OS to Windows 10 or use the mobile version of LINE to see the shared screen.",
          "call.screenshare.youtube.popup.startvideo":
            "Share your screen with call participants?",
          "call.sharedcontent.desc.newdatatype":
            "%1 started showing content that is unsupported on your version of LINE. Please update LINE to the latest version.",
          "call.toast.cpuheavyload":
            "Your computer is under heavy load, and your call quality may be affected. Try closing other applications.",
          "call.toast.handsfreebt.mic":
            'Switched to the "%1" microphone. Please set your speaker to the same device.',
          "call.toast.handsfreebt.speaker":
            'Switched to the "%1" speaker. Please set your microphone to the same device.',
          "call.video.filter.clear": "Clear",
          "call.video.filter.original": "Original",
          "call.viewmode.desc.focusview": "Focus view",
          "call.viewmode.desc.focusviewcenter": "Focus view (middle)",
          "call.viewmode.desc.focusviewleft": "Focus view (left)",
          "call.viewmode.desc.focusviewright": "Focus view (right)",
          "call.viewmode.desc.gridview": "Grid view",
          "call.viewmode.desc.separateview": "Detach thumbnails",
          "call.watchtogethermenu.desc.100kviewsth": "%1",
          "call.watchtogethermenu.desc.100kwatchingth": "%1",
          "call.watchtogethermenu.desc.10kviewsth": "%1",
          "call.watchtogethermenu.desc.10kwatchingth": "%1",
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1B watching",
          "call.watchtogethermenu.desc.1bviews": "%1B views",
          "call.watchtogethermenu.desc.1eokpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1eokviews": "%1",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1K watching",
          "call.watchtogethermenu.desc.1kviews": "%1K views",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1manviews": "%1",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1M watching",
          "call.watchtogethermenu.desc.1mviews": "%1M views",
          "call.watchtogethermenu.desc.1mviewsth": "%1",
          "call.watchtogethermenu.desc.1mwatchingth": "%1",
          "call.watchtogethermenu.desc.daysago.one": "%n day ago",
          "call.watchtogethermenu.desc.daysago.other": "%n days ago",
          "call.watchtogethermenu.desc.hoursago.one": "%n hour ago",
          "call.watchtogethermenu.desc.hoursago.other": "%n hours ago",
          "call.watchtogethermenu.desc.justnow": "Just now",
          "call.watchtogethermenu.desc.lessthan1kviewsth": "%1",
          "call.watchtogethermenu.desc.lessthan1kwatchingth": "%1",
          "call.watchtogethermenu.desc.minutesago.one": "%n minute ago",
          "call.watchtogethermenu.desc.minutesago.other": "%n minutes ago",
          "call.watchtogethermenu.desc.monthsago.one": "%n month ago",
          "call.watchtogethermenu.desc.monthsago.other": "%n months ago",
          "call.watchtogethermenu.desc.peoplewatchingen": "%1 watching",
          "call.watchtogethermenu.desc.userswatchinglivevideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideoen.one": "%n view",
          "call.watchtogethermenu.desc.userswatchingvideoen.other": "%n views",
          "call.watchtogethermenu.desc.yearsago.one": "%n year ago",
          "call.watchtogethermenu.desc.yearsago.other": "%n years ago",
          "call.youtube.desc.headphones":
            "Please use headphones to prevent echo.",
          "call.youtube.desc.noresults": "No results found.",
          "call.youtube.paste.descforonetoone":
            "Search for videos you want to share with your friend. (Headphones are recommended.)",
          "call.youtube.popup.shareerror":
            "Unable to share the YouTube video due to a temporary error. Please try again.",
          "call.youtube.popupbutton.allow": "Allow",
          "call.youtube.popupbutton.disallow": "Don't allow",
          "call.youtube.popupdesc.clipboard":
            "This will automatically paste the YouTube video link you copied to the browser.",
          "call.youtube.popuptitle.clipboard":
            "Allow LINE access to your clipboard",
          "call.youtube.statusbadge.premiering": "Premiering now",
          "call.youtube.title.trendingvideos": "Trending videos",
          "call.youtube.videodesc.date": "Scheduled for %1",
          "call.youtube.videodesc.datevariable": "MMM dd, yyyy HH:mm",
          "capture.command.close": "Close",
          "capture.command.copy": "Copy",
          "capture.command.done": "Done",
          "capture.command.draw": "Draw",
          "capture.command.gif": "Capture GIF",
          "capture.command.gif.cancel":
            "Closing the capture screen will discard this GIF. Continue anyway?",
          "capture.command.gif.create": "Creating GIF",
          "capture.command.gif.error.maxFileSize":
            "The GIF file you captured is larger than 20 MB.\n(Currently %1 MB)\nPlease try again.",
          "capture.command.gif.error.maxSize":
            "Unable to capture GIF because the selection area is too large.\nPlease select a smaller area.",
          "capture.command.gif.error.size":
            "Unable to capture GIF because the selection area is too small.\nPlease select a larger area.",
          "capture.command.gif.stop": "Stop",
          "capture.command.gif.tooltip":
            "Capture a part of your screen and save it as a GIF.",
          "capture.command.quit": "Quit",
          "capture.command.redo": "Redo",
          "capture.command.save": "Save",
          "capture.command.share": "Share",
          "capture.command.undo": "Undo",
          "capture.desc.need.os.recordscreen":
            "Unable to capture screenshot. Please grant LINE access to the Screen Recording feature.",
          "capture.msg.onEditing":
            "Closing the capture screen will discard your changes. Continue anyway?",
          "capture.scan.error.maxFileSize":
            "The image you are trying to capture is too large. Please adjust the size and try again.",
          "capture.scan.error.resolution":
            "Unable to capture image because its resolution isn't supported. Please adjust the resolution and try again.",
          "capture.tool.eclipse": "Round",
          "capture.tool.line": "Line",
          "capture.tool.lineColor": "Line color",
          "capture.tool.mosaic": "Pixelate",
          "capture.tool.penwidth": "Width",
          "capture.tool.rectangle": "Square",
          "capture.tool.select": "Select",
          "capture.tool.shape": "Shape",
          "capture.tool.text": "Text",
          "capture.tool.textColor": "Font color",
          "capture.tool.textSize": "Font size",
          "capture.tool.textSize.big": "Large",
          "capture.tool.textSize.medium": "Medium",
          "capture.tool.textSize.small": "Small",
          "chat.action.leaveChat.confirm":
            "If you leave this chat, you'll lose its entire chat history.\nLeave the chat?",
          "chat.alert.clipboard.largedata":
            "The item you copied is too large to paste into the chat.",
          "chat.alert.file.open.fromNotbuddy":
            "Files sent from users who are not on your friends list may be unsafe.\nOpen it anyway?",
          "chat.alert.file.open.fromSquare":
            "Files sent from users you may not know may be unsafe.\nOpen it anyway?",
          "chat.alert.file.open.frombuddy":
            "Make sure the file is safe before opening it.\nAre you sure you want to open the file?",
          "chat.alert.file.open.notSupport":
            "Unable to open the file because it is in an unsupported format.",
          "chat.alert.file.unsupported.all.one":
            "The selected file is in an unsupported format. Compress and send the file?",
          "chat.alert.file.unsupported.all.other":
            "The selected files are in an unsupported format. Compress and send them?",
          "chat.alert.file.unsupported.some.one":
            "One of the selected files is in an unsupported format. Compress and send the file?",
          "chat.alert.file.unsupported.some.other":
            "%n files are in an unsupported format. Compress and send them?",
          "chat.alert.invite.alreadyinvited": "%1 has\nalready been invited.  ",
          "chat.alert.invite.alreadyjoined":
            "%1 is already a member of this group.\n  ",
          "chat.alert.invite.blockedbuddy":
            "You can't invite accounts you have blocked.",
          "chat.alert.invite.confirm": "Invite %1\nto this chat?",
          "chat.alert.invite.notbuddy":
            "Add %1 as a friend\nto invite them to this chat. ",
          "chat.alert.invite.verificationrequired":
            "To join a group via QR code or invitation link, you first need to verify that you're at least 18 years old.",
          "chat.alert.sharePost": "Share notes and albums\nwith %1?",
          "chat.alert.unavailable.file":
            "Unable to share this file because its storage period expired.",
          "chat.alert.unsend.fail.error":
            "Unable to unsend message. Please try again.",
          "chat.alert.unsend.fail.time":
            "You can't unsend a message after too much time has passed from when it was sent.",
          "chat.alert.unsend.old.version":
            "This message may not be removed from some users' chats depending on what LINE version they use. Continue?",
          "chat.audio.tooltip": "Audio",
          "chat.btn.capture.tooltip": "Capture screen",
          "chat.btn.close.tooltip": "Close",
          "chat.btn.emoji": "Emoji",
          "chat.btn.facemark": "Emoticons",
          "chat.btn.file": "Send file",
          "chat.btn.keepmemo.tooltip": "Keep Memo",
          "chat.btn.max.tooltip": "Max",
          "chat.btn.menu.tooltip": "Menu",
          "chat.btn.min.tooltip": "Min",
          "chat.btn.reset.tooltip": "Restore",
          "chat.btn.sticker": "Stickers",
          "chat.btn.sticker.tooltip": "Stickers",
          "chat.btn.voip": "Free call",
          "chat.contact.label": "Contact",
          "chat.context.menu.search.name": "Search names",
          "chat.context.menu.send.contact": "Share contact",
          "chat.context.menu.talk": "Chat 1-on-1",
          "chat.desc.quit.uploading":
            "You are currently sending one or more files in a chat.\nClosing LINE now will prevent the files from being sent correctly.",
          "chat.edit.alert.unavailable.picture":
            "Unable to load photo as it is no longer available.",
          "chat.emoji.label.animation.unavailable":
            "See the sticker animations on your mobile device",
          "chat.emoji.label.recentIconDesc1":
            "Recently used emoji are displayed here.",
          "chat.emoji.label.recentIconDesc2":
            "Try sending an emoji to a friend.",
          "chat.emoji.label.recentLetterDesc1":
            "Recently used emoticons are displayed here.",
          "chat.emoji.label.recentLetterDesc2":
            "Try sending an emoticon to a friend.",
          "chat.emoji.label.recentStickerDesc1":
            "Recently used stickers are displayed here.",
          "chat.emoji.label.recentStickerDesc2":
            "Try sending a sticker to a friend.",
          "chat.err.file.broken":
            "Unable to save file.\nPlease check your PC's available storage space.",
          "chat.err.file.download.failed": "Unable to save file.",
          "chat.err.file.download.localError":
            "Unable to save file. Please try again later.",
          "chat.err.file.exceed.capacity":
            "You can only send up to %1 of files at a time.",
          "chat.err.file.exceed.dailyCapacity":
            "You can only send up to %1 of files in one day.",
          "chat.err.file.folderPermission":
            "Unable to save file in the selected folder.\nPlease select a different location and try again.",
          "chat.err.file.need.space":
            "Not enough free space left on your device. Please free up some space and try again.",
          "chat.err.file.open":
            "File is in use. Please try sending it again after closing it.",
          "chat.err.file.some.unpardoned":
            "This file format can't be sent.\nAll other selected files will be sent.\n",
          "chat.err.file.unpardoned": "This file format can't be sent.",
          "chat.err.media.copyFailed":
            "Encoding in progress.\nPlease try again later.",
          "chat.err.media.infoLoadFailed":
            "Unable to process your request due to a connection error.\nPlease try again.",
          "chat.error.badwords":
            "Unable to send this message due to its content.\nPlease write a different message.",
          "chat.error.popup.noauth":
            "Unable to open the file as LINE doesn't have permission to open files from this folder.",
          "chat.file.audio.sizeExceeds":
            "You can only send audio files up to 30 MB in size.",
          "chat.file.cancel.tooltip": "Cancel",
          "chat.file.cantFindFile": "Unable to locate file.",
          "chat.file.closeConfirm":
            "Any file transfers in progress will be canceled if you close this window.\nAre you sure you want to close it?",
          "chat.file.countExceeds": "You can send up to %1 files at a time.",
          "chat.file.label.expired": "Expired",
          "chat.file.video.sizeExceeds":
            "You can only send video files up to 200 MB in size.",
          "chat.flex.btn.send": "Done",
          "chat.flex.date.select": "Choose a date",
          "chat.flex.datetime.select": "Choose a date and time",
          "chat.flex.error.unknown":
            "This feature is not available on your current version of LINE.",
          "chat.flex.time.select": "Choose a time",
          "chat.group.msg.e2ee.guide":
            "This chat is protected\nwith Letter Sealing",
          "chat.group.noMember.placeholder": "You're the only one here.",
          "chat.grouphome.label.enjoySns.title":
            "Share notes and albums with your friends here!\n",
          "chat.image.tooltip": "Photos",
          "chat.input.placeholder": "Enter a message",
          "chat.inputbar.msg.album": "Album",
          "chat.inputbar.msg.albumcontents": "Album items",
          "chat.label.del": "Delete",
          "chat.label.makeAlbum": 'Created the album "%1".',
          "chat.label.open": "Open",
          "chat.label.openFile": "Open file",
          "chat.label.openFolder": "Open folder",
          "chat.label.playback": "Playback",
          "chat.label.retry": "Resend",
          "chat.label.save": "Save",
          "chat.label.saveAs": "Save as...",
          "chat.label.saveOpen": "Save and open",
          "chat.label.sendFail": "Unable to send",
          "chat.label.share": "Share",
          "chat.label.showAlbum": "View album\xa0",
          "chat.label.showPost": "View note",
          "chat.label.showPrev": "Show previous chats",
          "chat.label.totalMediaCount": "Total %1",
          "chat.linemusic.shared": "You shared music.",
          "chat.linemusic.shared.other": "%1 shared music with you.",
          "chat.list.call":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Call time]]>',
          "chat.list.call.canceled":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Canceled call]]>',
          "chat.list.call.icon":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\">]]>',
          "chat.list.call.missedCall":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Missed call]]>',
          "chat.list.call.rejected":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> No answer]]>',
          "chat.list.desc.read.unread.all": "All messages marked as read.",
          "chat.list.group.createdby": "Group created by:",
          "chat.list.group.invite": "%1 invited you to a group.",
          "chat.list.group.layer": "You have been invited to this group.",
          "chat.list.group.nogroupcreator":
            "This group's original creator is currently not part of the group.",
          "chat.list.linecall": "[LINE Premium Call]",
          "chat.list.mention": "You were mentioned.",
          "chat.list.menu.clear.all.unreadmessage": "Mark all as read",
          "chat.list.menu.sort.favorites": "Favorites",
          "chat.list.menu.sort.time": "Time received",
          "chat.list.menu.sort.unreadcount": "Unread messages",
          "chat.list.menu.tooltip": "Sort by",
          "chat.list.sortBtn.tooltip": "Unread messages",
          "chat.list.sortByUnread.desc":
            "Unread messages have been moved to the top. ",
          "chat.menu.Image.download": "Download complete.",
          "chat.menu.Image.download.fail":
            "Unable to save this file.\nPlease try again.",
          "chat.menu.alarmOff": "Mute chat",
          "chat.menu.alarmOn": "Unmute chat",
          "chat.menu.albums": "Albums",
          "chat.menu.alwaysTop": "Keep window on top",
          "chat.menu.backgroundSetting": "Background Settings",
          "chat.menu.backgroundSetting.apply": "Apply",
          "chat.menu.backgroundSetting.cancel": "Cancel",
          "chat.menu.backgroundSetting.file": "Select file",
          "chat.menu.backgroundSetting.image.failed":
            "Unable to use this photo.",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "You can only upload photos\xa0that\xa0are\xa0%1 MB\xa0or\xa0smaller.",
          "chat.menu.backgroundSetting.option": "Display option",
          "chat.menu.backgroundSetting.option.detail": "Tile",
          "chat.menu.backgroundSetting.option.fill": "Fill",
          "chat.menu.backgroundSetting.photo.save.failed":
            "Unable to save photo.",
          "chat.menu.backgroundSetting.photo.transparency": "Transparency",
          "chat.menu.backgroundSetting.photoGuide":
            "Customize your chat wallpaper.",
          "chat.menu.backgroundSetting.reset": "Reset",
          "chat.menu.backgroundSetting.select": "Select wallpaper",
          "chat.menu.backgroundSetting.tab.color": "Color",
          "chat.menu.backgroundSetting.tab.illustration": "Illustration",
          "chat.menu.backgroundSetting.tab.photo": "Photos",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "Unavailable in dark mode.",
          "chat.menu.copy": "Copy",
          "chat.menu.delete": "Delete chat history",
          "chat.menu.group.noMember": "No members",
          "chat.menu.invite": "Invite",
          "chat.menu.invite.group": "Members & invites",
          "chat.menu.leave": "Leave chat",
          "chat.menu.make": "Create group",
          "chat.menu.msg.announce": "Announce",
          "chat.menu.msg.unsend": "Unsend",
          "chat.menu.openAlbum": "Show all images",
          "chat.menu.openAlbum.download": "Download complete.",
          "chat.menu.openAlbum.download.fail": "Unable to download items.",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "Unable to complete download to the selected folder.\nPlease change your download location and try again.",
          "chat.menu.openAlbum.download.open": "Open folder",
          "chat.menu.openAlbum.downloading": "Downloading...",
          "chat.menu.openAlbum.retry": "Retry",
          "chat.menu.openAlbum.saveKeep": "Saved in Keep.",
          "chat.menu.openAlbum.saveKeep.open": "Open Keep",
          "chat.menu.openAlbum.savingKeep": "Saving in Keep...",
          "chat.menu.openAlbum.savingKeep.fail": "Unable to save in Keep.",
          "chat.menu.openAlbum.selected": "%1 items selected",
          "chat.menu.openLink": "View all URLs",
          "chat.menu.openLink.noURL": "No URLs shared in this chat.",
          "chat.menu.paste": "Paste",
          "chat.menu.recommend": "Recommend",
          "chat.menu.save": "Save chat",
          "chat.menu.save.note": "Save to Notes",
          "chat.menu.searchMsgs": "Search chat",
          "chat.menu.selectAll": "Select all",
          "chat.menu.selectedCopy": "Copy selected text",
          "chat.menu.settings": "Settings",
          "chat.menu.showAllContents": "Chat contents",
          "chat.menu.sticker.openWebStore": "Sticker Shop",
          "chat.menu.sticker.showDetail": "Open",
          "chat.menu.translation": "Translate",
          "chat.message.present.emoji.receive": "Gifted you some emoji!",
          "chat.message.present.receive.confirm": "Check it out",
          "chat.message.present.sticker.receive": "Gifted you some stickers!",
          "chat.message.present.theme.receive":
            "Gifted you a theme!\nCheck it out using LINE on your mobile device.",
          "chat.message.sharealbum": "Shared an album.",
          "chat.message.sharenote": "Shared a note.",
          "chat.msg.album.addphoto.one": "%n item added to album.",
          "chat.msg.album.addphoto.other": "%n items added to album.",
          "chat.msg.album.create": 'Album "%1" created.',
          "chat.msg.album.delete": '%1 deleted the album "%2".',
          "chat.msg.album.removephoto":
            '%1 deleted one or more items from the album "%2".',
          "chat.msg.album.rename":
            '%1 changed the name of the album "%2" to "%3".',
          "chat.msg.album.viewPhoto": "View album\xa0",
          "chat.msg.applink.app.recv": "Check out %1 on your mobile device!",
          "chat.msg.applink.app.sent":
            "You introduced %1. Check it out on your mobile device.",
          "chat.msg.applink.friend.recv":
            "You received a friend request from %1. Check it out on your mobile device.",
          "chat.msg.applink.friend.sent":
            "Your friend request has been sent on %1! Check it out on your mobile device.",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "Canceled",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[This call is protected by Letter Sealing.\nA <img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11"> icon is displayed in security-enhanced calls.]]>',
          "chat.msg.call.missedCall": "Missed call",
          "chat.msg.call.rejected": "No answer",
          "chat.msg.changeGroupImage":
            "%1 changed the group's profile picture.",
          "chat.msg.changeGroupName": "%1 changed the group's name to %2.",
          "chat.msg.chatevent.unknown":
            "This notification is not available on the desktop version of LINE.\nCheck it out on your mobile device.",
          "chat.msg.e2ee.decryptingMsg": "Decrypting...",
          "chat.msg.e2ee.guide": "This chat is protected\nwith Letter Sealing",
          "chat.msg.e2ee.needKeyExchange":
            "This message is encrypted.\nVerify your identity to read this message.",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\nUnable to display message as it couldn't be decrypted. Please ask your friend to resend the message.",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "This message can't be decrypted.\nThis message wasn't backed up and restored from your previous device. Unfortunately, there's no way to read it on your current device.",
          "chat.msg.e2ee.setting.disabled":
            "This message is encrypted. Please view this message on your phone.",
          "chat.msg.file.change.type.audio":
            "Some devices may be unable to play this voice message due to its large size.",
          "chat.msg.file.change.type.video":
            "Some devices may be unable to play this video due to its large size.",
          "chat.msg.file.ext": "File ext",
          "chat.msg.file.period": "Until:",
          "chat.msg.file.received": "%1 sent a file.",
          "chat.msg.file.sent": "The file has been sent.",
          "chat.msg.file.size": "Size: %1",
          "chat.msg.file.waiting": "Waiting",
          "chat.msg.groupInvite": "%1 invited %2 to the group.",
          "chat.msg.groupboard.updated":
            "The group board has been updated. Check out the updates on your mobile device.",
          "chat.msg.home.shared": "Shared %1's post.",
          "chat.msg.inviteCancel": "%1 canceled %2's invitation to the group.",
          "chat.msg.joinGroup": "%1 joined the group.",
          "chat.msg.kickout": "%1 removed %2 from the group.",
          "chat.msg.leave": "%1 left the chat.",
          "chat.msg.leaveGroup": "%1 left the group.",
          "chat.msg.leavegroup.1.n.confirm":
            "If you leave this chat, you'll no longer be able to view its chat history. Leave this chat?",
          "chat.msg.nomember": "Empty chat",
          "chat.msg.preview.default": "Tap here to open the link.",
          "chat.msg.read": "Read",
          "chat.msg.search.cancelSearch": "Canceled",
          "chat.msg.search.hint.fromName": "Please enter the sender name.",
          "chat.msg.search.hint.message": "Enter text to search for",
          "chat.msg.search.hint.roomName": "Search for chats and messages",
          "chat.msg.search.result.hint.addOption":
            "Try adding more chats or senders and then search again.",
          "chat.msg.search.result.hint.noResultReason1":
            "You may not obtain any search results if you are using a different PC. ",
          "chat.msg.search.result.hint.noResultReason2":
            "You may not obtain any search results if you have not used the desktop version of LINE for more than two weeks. ",
          "chat.msg.search.result.noResult": "No results found.",
          "chat.msg.search.title.date": "Date",
          "chat.msg.search.title.fromName": "Sender",
          "chat.msg.search.title.message": "Message",
          "chat.msg.search.title.roomName": "Chat",
          "chat.msg.smartphone": "Check it out on your mobile device.",
          "chat.msg.start.unreadMessage": "Unread messages below",
          "chat.msg.sticker.gift.from.buddy":
            "You received a gift! Download it now.",
          "chat.msg.sticker.gift.from.me": "Gift sent!",
          "chat.msg.sticker.period.expired":
            "Validity period has expired.\nPlease purchase %1 again on your mobile device.",
          "chat.msg.sticon.period.expired":
            "%1 has expired. Please purchase it again from the Sticker Shop on the mobile version of LINE.",
          "chat.msg.sync": "Syncing messages...",
          "chat.msg.text.seeAll": "See more",
          "chat.msg.theme.gift.from.me": "Gift sent!",
          "chat.msg.unknown.message": "Unable to view message.",
          "chat.msg.unread": "Unread",
          "chat.msgbox.alarmoff.description":
            "New message notifications won't be shown for this chat.",
          "chat.msgbox.bannedWord":
            "This message contains prohibited words and can't be sent.",
          "chat.msgbox.save.description":
            "Only the chat messages displayed on this screen will be saved in text format.\n",
          "chat.msgbox.save.dontShow": "Don't show this again",
          "chat.msgbox.save.empty": "No messages to save.",
          "chat.noMember.group.error.noAuth":
            "This feature can only be used by group members.",
          "chat.noMember.singleRoom.error.album":
            "You can't add any more items or create any more albums in this chat.",
          "chat.noMember.singleRoom.error.note":
            "You can't add any more notes to this chat.",
          "chat.noinput.group.invitation": "Join the group to chat.",
          "chat.notes.notification.sharenote": "Shared a note.",
          "chat.notimessage.sharealbum": "Shared an album.",
          "chat.poll.message.btn": "See details",
          "chat.poll.title": "Poll",
          "chat.popup.btn.pasteAsImage": "Image",
          "chat.popup.btn.pasteAsText": "Text",
          "chat.popup.clipboard.withImage":
            "Select how you would like to paste the clipboard content.",
          "chat.popup.desc.grouplimit":
            "You've reached the maximum number of LINE groups. To create a new group, first leave an older group and then try again.",
          "chat.popup.title.grouplimit": "Group limit reached",
          "chat.popupbutton.delete": "No, delete it",
          "chat.popupbutton.resend": "Yes, resend",
          "chat.popupdesc.serveroutage1":
            "Due to a server error, the other person can't view this message. Resend it as a new message?",
          "chat.popupdesc.serveroutagegroup":
            "Due to a server error, some members of the group can't view this message. Resend it as a new message?",
          "chat.popuptitle.serveroutage": "Resend message?",
          "chat.profile.menu.displayName.search": "Search messages by name",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_icon.png",
          "chat.reply.album": "Album: %1",
          "chat.reply.jump": "Go back to reply",
          "chat.reply.jump.delete": "That message has been unsent.",
          "chat.reply.no.original.message": "Message unavailable.",
          "chat.reply.note.no.text": "Note shared on %1",
          "chat.reply.note.text": "Note: %1",
          "chat.room.msg.invitorNotBuddy":
            "You've been invited to a group by %1, who you haven't added as a friend.",
          "chat.save.location": "Location",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_icon.png",
          "chat.setting.theme.snow.disable": "Disable snow effect",
          "chat.setting.theme.snow.enable": "Enable snow effect",
          "chat.share.notexist":
            "This user has either deleted their LINE account or doesn't exist.",
          "chat.sharing.notification.sharealbum": "Shared an album.",
          "chat.sharing.notification.sharenote": "Shared a note.",
          "chat.status.block":
            "You can't send chat messages to accounts you have blocked.",
          "chat.status.disconn":
            "Message transmission is temporarily unavailable.",
          "chat.status.e2ee.verification.fail":
            "Letter Sealing account verification has been canceled.\n\nYou can only view encrypted messages after verifying your account.\n",
          "chat.status.keyExchangeBtn": "Verify my identity",
          "chat.status.leave":
            "You can't send any more messages after leaving the chat.",
          "chat.status.needKeyExchange":
            "You have to verify your identity to use Letter Sealing encryption on the desktop version of LINE.",
          "chat.system.inviteeoverlimit":
            "The following members can't join because they've already reached the LINE group limit.\n%1",
          "chat.system.msg.a.unsend": "%1 unsent a message.",
          "chat.system.msg.unsend": "Message unsent.",
          "chat.systemmessage.upgradegroup":
            "Group settings have changed. New members to this group must now accept an invite to join.",
          "chat.title.chatMember": "Members",
          "chat.toast.notifications.mute":
            "Notifications for this chat are OFF.",
          "chat.toast.notifications.unmute":
            "Notifications for this chat are ON.",
          "chat.trans.tooltip": "Transparency",
          "chat.video.play": "Play",
          "chat.video.replay": "Replay",
          "chat.video.tooltip": "Videos",
          "chatapp.giphy.forward":
            "Unable to forward GIF files sent using GIPHY.",
          "chatapp.giphy.forward.next":
            "Unable to forward GIF files sent using GIPHY. Forward the other files?",
          "chatapp.giphy.keep":
            "Unable to save GIF files sent using GIPHY in Keep.",
          "chatapp.giphy.keep.next":
            "Unable to save GIF files sent using GIPHY in Keep. Save the other files?",
          "chatl.share.alert.error":
            "Unable to share this message because it was unsent.",
          "chatl.share.alert.max": "You can only select up to %1 chats.",
          "chatl.share.toast.multiple.one": "Message shared to %n chat.",
          "chatl.share.toast.multiple.other": "Message shared to %n chats.",
          "chatl.share.toast.single": "Shared with %1.",
          "chatl.sharetotalk.title": "Share with",
          "chatlist.allinone.close.btn": "Collapse chats",
          "chatlist.allinone.open.btn": "Expand chats",
          "chatlist.btn.startchat": "Start chat",
          "chatlist.chooseChat.empty.btn": "Show here",
          "chatlist.chooseChat.empty.desc":
            "This chat is open in a separate window.\nShow the chat here?",
          "chatlist.context.menu.seperateChat.label": "Open in separate window",
          "chatlist.guide.allinone.text":
            "Expand this window to open chats in a new pane.",
          "chatlist.guide.chatStart.text": "Start chatting!",
          "chatlist.hide.confirm":
            "Hiding chats doesn't delete their messages. ",
          "chatlist.keepmemo.desc.msg":
            "Send any texts, photos, videos, and links you want to keep for yourself.",
          "chatlist.keepmemo.desc.title": "Keep Memo",
          "chatlist.search.hint.chatList": "Search chat list",
          "chatlist.sort.unreadRoom": "Show chats with unread messages",
          "chatlive.end.popup.done": "End",
          "chatlive.error.notavailable":
            "Another member started a call already.",
          "chatlive.maximum": "Maximum number of participants reached.",
          "chatlive.msg.over.traffic":
            "Streaming traffic is too high at the moment.\nPlease try again later.",
          "chatlive.screen.share.ongoing.body": "Your screen is being shared.",
          "chatlive.screen.share.ongoing.stop": "Stop",
          "chatlive.screen.share.ongoing.top": "Sharing your screen.",
          "chatlive.screen.share.select.body":
            "You are about to share your PC screen. Select the screen you want to share.",
          "chatlive.screen.share.select.done": "Share",
          "chatlive.screen.share.select.item": "Screen %1",
          "chatlive.screen.share.select.title": "Select a screen to share",
          "chatlive.viewer.list.title.other": "%n viewers",
          "chatlive.viewer.list.title.plurals.one": "%n viewer",
          "chatlive.viewer.list.title.plurals.other": "%n viewers",
          "chatroom.guide.sticker.text":
            "Enliven your chats with charming stickers.",
          "chatsettings.desc.membersjoinautomatically":
            "Members join the group as soon as they're invited. Disable this setting to always require members to accept an invite before joining.",
          "chatsettings.popup.desc.onewaywarning":
            "Once you disable this setting, you can't turn it back on again. Are you sure?",
          "chatsettings.popup.title.onewaywarning": "This can't be undone",
          "chatsettings.title.membersjoinautomatically":
            "Members join automatically",
          "choosefriends.button.createGroup": "Create a group",
          "choosefriends.button.gotochatsingle": "Chat one-to-one",
          "choosefriends.button.invite": "Invite",
          "choosefriends.title.default": "Choose friends",
          "choosefriends.title.numselected": "%1 selected",
          "chrome.common.toast.unabletocopy":
            "Unable to copy. Please try again.",
          "chrome.setting.desc.notiforsp":
            "Turn off mobile notifications when logged in to the Chrome version.",
          "chrome.time.desc.outofrangetime": "h:mm aaa",
          "chrome.time.toast.outofrange":
            "The time must be set earlier than %1.",
          "chrome.time.toast.outofrange2":
            "The time must be set to %1 or later.",
          "chrome.user.error.failedToBlock":
            "Unable to block this account right now. Please try again after a while.",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "Unable to decline invitation.",
          "chrome.user.error.failedToHide":
            "Unable to hide this account right now. Please try again after a while.",
          "chrome.user.error.failedToJoinGroup":
            "Unable to join this group right now. Please try again after a while.",
          "chrome.user.error.failedToLeaveGroup": "Unable to leave group.",
          "chrome.user.error.failedToMarkFavorite":
            "Unable to add friend to Favorites.",
          "chrome.user.error.failedToShowUser":
            "Unable to unhide this account right now. Please try again after a while.",
          "chrome.user.error.failedToUnblock": "Unable to unblock account.",
          "common.album.empty.desc": "Create albums to share exciting moments.",
          "common.alert.errorcode": "Error code: %1",
          "common.alert.notsupported":
            "Please update LINE to use this feature.",
          "common.alert.unsend.content":
            "This content has been unsent by its sender.",
          "common.alert.unsend.multi.contents":
            "Unsent items will be excluded.",
          "common.alert.unsupported.osversion":
            "Your current OS version doesn't support this feature. Please update your OS to the latest version.",
          "common.alert.update.title": "Update",
          "common.alert.version.other":
            "A different version of LINE is already running.",
          "common.am": "AM",
          "common.btn.back": "Back",
          "common.btn.cancel": "Cancel",
          "common.btn.capture.option": "Hide window when capturing",
          "common.btn.capture.option.tooltip": "Screen capture options",
          "common.btn.delete": "Delete",
          "common.btn.discard": "Leave",
          "common.btn.forward": "Share",
          "common.btn.hide": "Hide",
          "common.btn.next": "Next",
          "common.btn.quit": "Close LINE",
          "common.btn.retry": "Retry",
          "common.btn.run": "Lock",
          "common.btn.save": "Save",
          "common.btn.seemore": "See more",
          "common.btn.submit": "OK",
          "common.btn.unhide": "Unhide",
          "common.cancel": "Cancel",
          "common.cancelalert.desc":
            "Your custom caption will be lost if you leave this page. Are you sure?",
          "common.code.tooltip": "You can scan the image's QR code.",
          "common.content.address.share.from.buddy": "%1 shared a contact.",
          "common.content.address.share.from.me": "You sent a contact.",
          "common.content.applink.app.recv": "Introducing %1.",
          "common.content.applink.app.sent": "You introduced %1.",
          "common.content.applink.friend.recv":
            "You received a friend request from %1.",
          "common.content.applink.friend.sent":
            "Your friend request has been sent on %1!",
          "common.content.audio": "%1 sent an audio file.",
          "common.content.audio.mine": "You sent an audio file.",
          "common.content.coupon.message.postfix":
            "Check it out on your mobile device. ",
          "common.content.group.note.updated": "Added a new note.",
          "common.content.group.note.updated.myself": "Added a new note.",
          "common.content.groupboard.from.buddy": "%1 updated the group board.",
          "common.content.groupboard.from.me":
            "The group board has been updated.",
          "common.content.home.shared": "Shared %1's post.",
          "common.content.home.shared.myself": "Shared %1's post.",
          "common.content.image": "%1 sent a photo.",
          "common.content.image.mine": "You sent a photo.",
          "common.content.invite": 'You have been invited to "%1".',
          "common.content.location.from.buddy": "%1 sent you a location.",
          "common.content.location.from.me": "You sent a location.",
          "common.content.mantoman.note.newpost": "Added a new note.",
          "common.content.mantoman.note.newpost.myself": "Added a new note.",
          "common.content.normal": "sent you a message.",
          "common.content.pdf": "%1 sent a PDF file.",
          "common.content.pdf.mine": "You sent a PDF file.",
          "common.content.presence.join": "%1 joined the chat.",
          "common.content.presence.join.multiple.plurals.few":
            "%n members are participating in the chat including %1.",
          "common.content.presence.join.multiple.plurals.many":
            "%n members are participating in the chat including %1.",
          "common.content.presence.join.multiple.plurals.one":
            "%n member is participating in the chat including %1.",
          "common.content.presence.join.multiple.plurals.other":
            "%n members are participating in the chat including %1.",
          "common.content.presence.join.multiple.plurals.two":
            "%n members are participating in the chat including %1.",
          "common.content.presence.join.multiple.plurals.zero":
            "%n members are participating in the chat including %1.",
          "common.content.presence.leave": "%1 left the chat.",
          "common.content.sticker": "%1 sent a sticker.",
          "common.content.sticker.gift.from.buddy": "%1 sent you a gift!",
          "common.content.sticker.gift.from.me": "Gift sent!",
          "common.content.sticker.mine": "You sent a sticker.",
          "common.content.theme.gift.from.buddy": "%1 has sent you a gift!",
          "common.content.theme.gift.from.me": "Your gift has been sent!",
          "common.content.timeline.post":
            "Click to view the post in a browser.",
          "common.content.video": "%1 sent a video.",
          "common.content.video.mine": "You sent a video.",
          "common.continue": "Continue",
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
          "common.date.format.short": "MMM d",
          "common.delete": "Delete",
          "common.desc.macupdate": "Please update your Mac OS.",
          "common.desc.temporary.error":
            "Unable to process your request due to a temporary error.",
          "common.error.image.scan":
            "You can't scan text on images that have expired.",
          "common.error.ocr.failed":
            "Unable to scan text. Please choose another language and try again.",
          "common.error.ocr.unknown": "Unable to convert image.",
          "common.error.translation.failed":
            "Unable to translate text. Please edit the text or set to another language and try again.",
          "common.friday": "Friday",
          "common.friday.short": "Fri",
          "common.label.auto.slang": "Detect language",
          "common.label.code": "Scan QR code",
          "common.label.copy": "Copy",
          "common.label.cut": "Cut",
          "common.label.date": "Date",
          "common.label.delete": "Delete",
          "common.label.file": "File",
          "common.label.lang.ar": "Arabic",
          "common.label.lang.de": "German",
          "common.label.lang.en": "English",
          "common.label.lang.es": "Spanish",
          "common.label.lang.fa": "Persian",
          "common.label.lang.hi": "Hindi",
          "common.label.lang.id": "Indonesian",
          "common.label.lang.ja": "Japanese",
          "common.label.lang.ko": "Korean",
          "common.label.lang.my": "Burmese",
          "common.label.lang.pt": "Portuguese",
          "common.label.lang.ru": "Russian",
          "common.label.lang.th": "Thai",
          "common.label.lang.vi": "Vietnamese",
          "common.label.lang.zhcn": "Chinese (Simplified)",
          "common.label.lang.zhtw": "Chinese (Traditional)",
          "common.label.moveURL": "Go to URL",
          "common.label.ocr": "Scan text",
          "common.label.ocrlang": "Converted",
          "common.label.paste": "Paste",
          "common.label.redo": "Redo",
          "common.label.selectAll": "Select all",
          "common.label.slang": "Original",
          "common.label.text.placeholder": "Enter the above number",
          "common.label.time": "Time",
          "common.label.tlang": "Translated",
          "common.label.undo": "Undo",
          "common.license.disagree": "Disagree",
          "common.license.filename": "chrome://license/English.rtf",
          "common.license.title": "Terms of Service",
          "common.lineUrltoQR.alert.desc1":
            "Feature available on the mobile version of LINE",
          "common.lineUrltoQR.alert.desc2":
            "Scan the QR code below with the mobile version of the app to use this feature.",
          "common.loading": "Loading...",
          "common.loading.splash": "Opening LINE...",
          "common.mac.upgrader.title": "New LINE update available",
          "common.menu.copyToClipboard": "Copy to clipboard",
          "common.menu.delete": "Delete",
          "common.menu.forward": "Share",
          "common.menu.reply": "Reply",
          "common.menu.saveAs": "Save as...",
          "common.monday": "Monday",
          "common.monday.short": "Mon",
          "common.msg.already.new.version": "This is the most recent version.",
          "common.msg.bot.openapi":
            "%1 is managed by %2.\nPlease see the link below for more information regarding the handling of personal information LY Corporation provided to the account manager and any personal information you provide to the account manager.",
          "common.msg.bot.openapi.agree": "I agree",
          "common.msg.bot.openapi.link": "http://me2.do/FYc54WAQ",
          "common.msg.bot.openapi.title": "Agree to provide information",
          "common.msg.checking.version": "Checking for updates...",
          "common.msg.db.optimize":
            "Optimizing your LINE app\nfor better performance...\nPlease wait.",
          "common.msg.db.optimize.complete": "Optimization complete.",
          "common.msg.db.optimize.error":
            "Unable to complete optimization due to a temporary error.\nLINE will now restart.\n",
          "common.msg.favorite.exceeded":
            "You can only have up to 100 favorites.",
          "common.msg.has.new.version": "A new version is available.",
          "common.msg.has.new.version.alert":
            "A new version is available.\nUpdate now? ",
          "common.msg.invitation.overflow":
            "You can only invite up to %1 people.",
          "common.msg.license.opensource": "Legal notices",
          "common.msg.sticker.need.mobile.download":
            'Download free stickers on your mobile device first to use them.\nGo to Settings > Stickers > "My Stickers" or Sticker Shop > FREE to download them.',
          "common.msg.terms": "Terms of Service",
          "common.msg.update.button.label": "Update now",
          "common.msg.update.button.label.mac": "Go to App Store",
          "common.msg.warning.autoLogin":
            "You'll be automatically logged in when you launch the application.\nPlease only use this on your own PC to protect your personal information.",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "Use Notes to keep track of and share important info.",
          "common.notice.dontremind": "Don't show this again",
          "common.notice.label.close": "Close",
          "common.notice.meta.url": "line_desktop_notice/EN/1135",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/EN/1136",
          "common.notice.title": "Announcements",
          "common.ocr.agree.desc":
            "Your photos will be sent to our servers while using this feature. Do you agree to provide photos to LY Corporation for this feature?",
          "common.ocr.agree.title": "Opt in to provide photos",
          "common.ocr.mlstatus.off":
            "You haven't agreed to provide your images for the improvement of the service. You can change your agreement status on the mobile version of LINE.",
          "common.ocr.mlstatus.on":
            "This icon is brightly displayed if you agree to provide your images for the improvement of the service. You can change your agreement status on the mobile version of LINE.",
          "common.ocr.tooltip": "Try out the instant translation feature!",
          "common.ocrlang.tooltip":
            "Set the language you wish to convert the image to.",
          "common.off": "Off",
          "common.on": "On",
          "common.picture.popup.saveImageError": "Unable to save image.",
          "common.picture.popup.showImageError": "Unable to load image.",
          "common.pm": "PM",
          "common.popup.force.update":
            "LINE needs to be updated.\nPlease update and restart the app.",
          "common.popup.force.update.confirm":
            "You can use LINE after updating.",
          "common.popup.force.update.inapp":
            "LINE needs to be updated.\nPlease update and restart the app.",
          "common.popup.force.update.later":
            "You will be notified again in an hour.",
          "common.popup.queryUpgrade":
            "A new version is available.\nUpdate now? ",
          "common.popup.sendkey.msg.mac": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.sendkey.msg.win": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.serverAPI.error.update":
            "LINE needs to be updated.\nUpdate now?",
          "common.prepare.service":
            "If you are already using the latest version, it means that the feature is currently being readied for your OS.\n",
          "common.push.mac.versionUpdate":
            "Please update your LINE app to the latest version.",
          "common.report.done": "Report sent.",
          "common.report.reason.desc":
            "Tell us why you are sending us this report.",
          "common.request.error":
            "An unknown error occurred.\nPlease try again later.",
          "common.saturday": "Saturday",
          "common.saturday.short": "Sat",
          "common.search.error.length": "You must enter at least 2 characters.",
          "common.search.invalidtext":
            "Your keyword can't contain any special characters. Please enter a different keyword.",
          "common.seeall": "See all",
          "common.share.url.copied": "Link copied.",
          "common.sunday": "Sunday",
          "common.sunday.short": "Sun",
          "common.thursday": "Thursday",
          "common.thursday.short": "Thu",
          "common.time.format": "h:mm %1",
          "common.toast.album.delete": "Album deleted.",
          "common.toast.album.rename": "Album renamed.",
          "common.toast.albumCreated": "Album created. ",
          "common.toast.audio": "Voice message sent.",
          "common.toast.chatevent.unknown":
            "This notification is not available.",
          "common.toast.contact": "Contact shared.",
          "common.toast.file": "File sent.",
          "common.toast.gift": "Gift sent!",
          "common.toast.image": "Photo sent.",
          "common.toast.inviteGroup": "You have been invited to a group.",
          "common.toast.label.newMessage": "You have a new message.",
          "common.toast.linemusic": "Shared music.",
          "common.toast.location": "",
          "common.toast.note": "Added a new note.",
          "common.toast.receiverequest": "Pending money request.",
          "common.toast.sticker": "Sticker sent.",
          "common.toast.timeline.group.invite":
            "You have been invited to a group.",
          "common.toast.timeline.new.comment": "Check it out now.",
          "common.toast.timeline.new.mention": "Mentioned you in a comment.",
          "common.toast.timeline.new.post": "Added a new note.",
          "common.toast.timeline.new.sticker": "Check it out now.",
          "common.toast.timeline.title.comment": "%1's comment",
          "common.toast.timeline.title.like": "%1's like",
          "common.toast.timeline.title.recomment": "%1's mention",
          "common.toast.video": "Video sent.",
          "common.toast.voip.call": "Answer",
          "common.toast.voip.call.msg": "Incoming call...",
          "common.toast.voip.refuse": "Decline",
          "common.today": "Today",
          "common.translation.apply.alert":
            "You can translate up to 5,000 characters from the original text. ",
          "common.translation.apply.imagedirect": "Overlay translation",
          "common.translation.imagedirect.failed":
            "A temporary error occurred. Please change the language pair or try again later.",
          "common.translation.imagedirect.tooltip":
            "Turn this on to instantly translate text and show the translation in the photo.",
          "common.tuesday": "Tuesday",
          "common.tuesday.short": "Tue",
          "common.unsupported.version.message":
            "Your current version of LINE doesn't support this feature.\nPlease update to the latest version of LINE.",
          "common.update.popup.win10":
            "Please update LINE to the latest version.",
          "common.updater": "Update now",
          "common.updater.autoUpdate": "Update automatically",
          "common.updater.autoUpdate.apply":
            "<![CDATA[Update LINE to the latest version?\n<font color='#9e9e9e'>Updating will restart LINE.\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "A newer version of LINE is available.\nLINE will restart if you click OK.",
          "common.updater.newVersion.confirm":
            "Your version of LINE is up to date.",
          "common.updater.newVersion.download.apply":
            "<![CDATA[Download complete.\nInstall it now?\n<font color='#9e9e9e'>LINE will restart if you click OK.</font>]]>",
          "common.updater.newVersion.downloading":
            "Downloading the latest version of LINE...\nPlease wait.",
          "common.updater.newVersion.incompleted":
            "Update incomplete.\nPlease try again later.",
          "common.updater.newVersion.low.hardDisk":
            "Not enough disk space.\nPlease free some up and try again.\n",
          "common.updater.notice.description": "What's new in this update?",
          "common.updater.notice.history": "Update history",
          "common.updater.notice.title": "Update",
          "common.updater.notice.updated": "Updated to latest version.",
          "common.wednesday": "Wednesday",
          "common.wednesday.short": "Wed",
          "common.yearMonth.format": "MMMM yyyy",
          "common.yesterday": "Yesterday",
          "creategroup.button.create": "Create",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "Members join the group as soon as they're invited. Disable this setting to always require members to accept an invite before joining.",
          "creategroup.checkbox.title.membersjoinautomatically":
            "Members join automatically",
          "creategroup.label.membercount": "Members",
          "creategroup.placeholder.entergroupname": "Enter a group name",
          "creategroup.placerholder.defaultname.autojoinoff": "%1's group",
          "creategroup.popup.desc.100memberswarning":
            "Members can't join automatically in groups with more than 100 members. New members must first accept an invite to join.\nTo allow members to join automatically, limit your group to no more than 100 members.",
          "creategroup.popup.desc.invitelocked":
            "To keep this setting off, limit your group to no more than 100 members.",
          "creategroup.popup.desc.inviteonwarning":
            "In groups with more than 100 members, new members must first accept an invite to join.\nTo keep this setting off, limit your group to no more than 100 members.",
          "creategroup.popup.desc.toomanygroups":
            "You've reached the maximum number of LINE groups. To join a new group, first leave an older group and then try again.",
          "creategroup.popup.title.100memberswarning":
            "Members can't join automatically",
          "creategroup.popup.title.invitelocked": "Invite setting locked",
          "creategroup.popup.title.inviteonwarning":
            "Members must accept invites to join",
          "creategroup.popup.title.toomanygroups": "Group limit reached",
          "creategroup.popup.title.toomanymembers":
            "Reduce the number of group members",
          "creategroup.title.setupProfile": "Set up group profile",
          "creategroup.toggle.desc.requireinvite":
            "New members must accept an invite to join the group. This setting can't be turned off after the group is created.",
          "creategroup.toggle.title.requireinvite":
            "Members must accept invite",
          "creategroup.tooltip.groupname":
            "Pick a name that tells your friends what this group is for.",
          "creategrouppopup.desc.toomanymembers":
            "To allow members to join automatically, limit your group to no more than 100 members.",
          "deletedata.chatHisotry.all.desc.confirm":
            "Delete all chat history from all your devices? Your chat history can't be recovered once deleted.",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "Delete all chat history from this device? Your chat history can't be recovered once deleted. ",
          "desktop.addchatfolder.button.add": "Create",
          "desktop.addchatfolder.placeholder.entername": "Enter folder name",
          "desktop.addchatfolder.title.addnewfolder": "Create new folder",
          "desktop.addchatpopup.button.add": "Add",
          "desktop.addchatpopup.button.cancel": "Cancel",
          "desktop.addchatpopup.desc.allchats": "All chats",
          "desktop.addchatpopup.desc.selected": "%1\xa0selected",
          "desktop.addchatpopup.placeholder.search": "Search",
          "desktop.addchatpopup.title.addchats": "Add chats to this folder",
          "desktop.addfriends.desc.recommendedai": "AI account recommendations",
          "desktop.addtoalbum.button.cancel": "Cancel",
          "desktop.addtoalbum.button.createalbum": "Create album",
          "desktop.addtoalbum.title.selectalbum": "Select album",
          "desktop.album.allalbums.button.albums": "Albums",
          "desktop.album.allalbums.button.photos": "Photos",
          "desktop.album.allalbums.desc.albumsempty":
            "Albums created in any of your chats will be shown here.",
          "desktop.album.allalbums.desc.dateformat": "MMMM yyyy",
          "desktop.album.allalbums.desc.photosempty":
            "Items added to albums will be shown here.",
          "desktop.album.allalbums.menu.lastcreated": "Last created",
          "desktop.album.allalbums.menu.lastupdated": "Last updated",
          "desktop.album.allalbums.title.allalbums": "All albums",
          "desktop.album.allalbums.title.photosempty": "No items yet.",
          "desktop.album.allalbums.title.unableshow":
            "Unable to show albums.\nPlease try again.",
          "desktop.album.allalbums.tooltip.allalbums":
            "Albums from all your chats are shown here, even those you've hidden or deleted from the chat list.",
          "desktop.album.button.add": "Add",
          "desktop.album.button.cancel": "Cancel",
          "desktop.album.button.create": "Create",
          "desktop.album.button.namechangedone": "Save",
          "desktop.album.button.share": "Share",
          "desktop.album.button.sharealbum": "Share album",
          "desktop.album.commonkey.button.tryagain": "Retry",
          "desktop.album.desc.albumphotos.one": "%n photo",
          "desktop.album.desc.albumphotos.other": "%n photos",
          "desktop.album.desc.draganddrop": "Drag and drop items here.",
          "desktop.album.error.sharealbum":
            "You shared too many albums in a short time.",
          "desktop.album.main.tooltip.albumsallchats":
            "See albums from all your chats in one place.",
          "desktop.album.max.media.alert": "You can only send up to %1 items.",
          "desktop.album.photos.button.seealbum": "See album",
          "desktop.album.popupdesc.sharealbum": "Share this album in the chat?",
          "desktop.album.tooltip.nowsharealbum":
            "You can now share an album in chat!",
          "desktop.album.viewer.button.seealbum": "See album",
          "desktop.album.viewer.title.unableshow":
            "Unable to show item.\nPlease try again.",
          "desktop.backgroundsetting.button.deletecover":
            "Delete profile cover",
          "desktop.backgroundsetting.button.selectphoto": "Select photo",
          "desktop.blankchatfolder.button.addchat": "Add chat",
          "desktop.blankchatfolder.desc.nochats":
            "No chats added to this folder yet.",
          "desktop.blankchatfolder.desc.nochats1":
            "Click the button below to add a chat or drag it here.",
          "desktop.calendar.button.recent": "Recent",
          "desktop.calendar.desc.month": "MMM",
          "desktop.calendar.desc.year": "yyyy",
          "desktop.callsettings.desc.showmessagealerts":
            "Show notification alerts for new chat messages during calls",
          "desktop.chat.choose.empty":
            "You don't have any chats to choose from.",
          "desktop.chat.popup.blockeduser.button.close": "Don't report",
          "desktop.chat.popup.blockeduser.button.report": "Send report",
          "desktop.chat.popup.blockeduser.desc":
            "If you think this might be a bot or malicious user, sending a report helps keep LINE safe and secure.",
          "desktop.chat.popup.blockeduser.title": "Report %1?",
          "desktop.chat.toast.chatunhidden": "This chat is no longer hidden.",
          "desktop.chat.warning.btn.addfriend": "Add friend",
          "desktop.chat.warning.btn.blockfriend": "Block",
          "desktop.chat.warning.btn.decline": "Decline",
          "desktop.chat.warning.btn.join": "Join",
          "desktop.chat.warning.btn.leave": "Leave",
          "desktop.chat.warning.btn.report": "Report",
          "desktop.chat.warning.btn.unblockfriend": "Unblock",
          "desktop.chatfolder.tab.all": "All",
          "desktop.chatfolder.tab.friends": "Friends",
          "desktop.chatfolder.tab.groups": "Groups",
          "desktop.chatfolder.tab.newfolder": "Folder %1",
          "desktop.chatfolder.tab.officialaccounts": "Official accounts",
          "desktop.chatfolder.tab.openchats": "OpenChats",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "%1 chats added to the folder.",
          "desktop.chatfolder.toast.addedtofolderone":
            "1 chat added to the folder.",
          "desktop.chatfolder.toast.nameinuse":
            "A folder with the same name already exists. Please enter a different name.",
          "desktop.chatfolder.toast.removedchatmulti":
            "%1 chats moved to their default folders.",
          "desktop.chatfolder.toast.removedchatone":
            "1 chat moved to its default folder.",
          "desktop.chatfolder.toast.uptohund":
            "You can only add up to 100 chats per folder.",
          "desktop.chatfolderguide.button.learnmore": "Learn more",
          "desktop.chatfolderguide.desc.desc1":
            "Click the edit icon in the top right corner to add a folder",
          "desktop.chatfolderguide.desc.desc2":
            "Right-click on a folder to change its settings",
          "desktop.chatfolderguide.desc.desc3":
            "Change the order of chat folders by dragging them",
          "desktop.chatfolderguide.desc.editdragchange":
            "Drag folders to change the order. Click the + icon to create a new folder.",
          "desktop.chatfolderguide.desc.title":
            "No sweat, all gain! Organize your chats in chat folders",
          "desktop.chatfoldermenu.button.addchat": "Add chat",
          "desktop.chatfoldermenu.button.changefoldername":
            "Change folder name",
          "desktop.chatfoldermenu.button.deletefolder": "Delete folder",
          "desktop.chatfoldermenu.button.mutefolder": "Mute folder",
          "desktop.chatfoldermenu.button.readall": "Read all",
          "desktop.chatfoldermenu.button.removechat": "Remove chat",
          "desktop.chatfoldermenu.button.unmutefolder": "Unmute folder",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "You can't add all your chats to a folder.",
          "desktop.chatfoldermenu.toast.uptoten":
            "You can only create up to 10 chat folders.",
          "desktop.chatfolderpopup.button.ok": "OK",
          "desktop.chatfolderpopup.desc.chatfolder":
            "Use chat folders to group your chats however you like and find them more easily. Click the + icon in the bar at the top of the Chats tab to get started.",
          "desktop.chatfolderpopup.desc.folderlineup":
            "Change the order of chat folders by dragging each folder to its desired spot.",
          "desktop.chatfolderpopup.desc.managefolder":
            "Right-click on a folder to change its settings.",
          "desktop.chatfolderpopup.desc.unabletosync":
            "Unable to sync chat folders due to a temporary error. Click the sync icon in the top right corner and try again.",
          "desktop.chatfolderpopup.title.chatfolder":
            "Organize your chats in chat folders",
          "desktop.chatfolderpopup.title.folderlineup":
            "Rearrange your chat folder lineup",
          "desktop.chatfolderpopup.title.managefolder":
            "Easily manage your chat folders",
          "desktop.chatfoldersetting.button.cancel": "Cancel",
          "desktop.chatfoldersetting.button.disable": "Disable",
          "desktop.chatfoldersetting.desc.disable":
            "Disabling the chat folders feature will delete all folder settings. Disable chat folders?",
          "desktop.chatfoldertooltip.desc.createchatfolder":
            "Create chat folders to organize your chats.",
          "desktop.chatlist.button.hide": "See less",
          "desktop.chatmenu.button.addtoalbum": "Add to album",
          "desktop.chatssettings.desc.chateffects":
            "Show background animations in chats.",
          "desktop.chatssettings.subtitle.chateffects": "Background animations",
          "desktop.codecerror.desc.unabletoplay":
            "Unable to play this file due to a video codec error.",
          "desktop.common.go.to.settings": "Go to Settings",
          "desktop.common.index.chats": "Chats",
          "desktop.common.index.favorites": "Favorites",
          "desktop.common.index.friends": "Friends",
          "desktop.common.index.groups": "Groups",
          "desktop.common.index.recentlyshared": "Recently shared with",
          "desktop.common.report": "Report",
          "desktop.defaultprofile.button.cancel": "Cancel",
          "desktop.defaultprofile.button.save": "Save",
          "desktop.defaultprofile.title.selectdefault": "Select from defaults",
          "desktop.deletefolderpopup.button.cancel": "Cancel",
          "desktop.deletefolderpopup.button.delete": "Delete",
          "desktop.deletefolderpopup.desc.deletefolder":
            'Delete the "%1" folder? Deleting this folder will automatically move all chats in it back to their default folders.',
          "desktop.download.popup.call": "Downloading call plug-in...",
          "desktop.download.popup.calldone":
            "Download complete. You can now make and receive calls.",
          "desktop.download.popup.plugin": "Downloading GIF capture plug-in...",
          "desktop.download.popup.plugindone":
            "Download complete. You can now capture GIFs.",
          "desktop.download.popup.pluginnetworkerror":
            "Unable to download the plug-in. Check your network connection and try again.",
          "desktop.download.popup.pluginnospace":
            "Insufficient space on your device. Free up some storage space and try again.",
          "desktop.download.popup.pluginunexpectederror":
            "Unable to download plug-in.\nPlease try again.",
          "desktop.download.popup.viewer": "Downloading viewer plug-in...",
          "desktop.download.popup.viewerdone":
            "Download complete. Select a media file to open it in the viewer.",
          "desktop.dragndrop.button.addfiles": "Add files",
          "desktop.dragndrop.button.cancelcompress": "Cancel",
          "desktop.dragndrop.button.send": "Send (%1)",
          "desktop.dragndrop.button.sendcompressed": "Send",
          "desktop.dragndrop.checkbox.alwayscompress":
            "Always compress and send",
          "desktop.dragndrop.title.sendfile": "Send files",
          "desktop.dragndrop.toast.upto50": "You can send up to 50 files.",
          "desktop.error.popup.noverification":
            "Verification failed on the mobile version of LINE. Please try again.",
          "desktop.errorpopup.desc.downloadback":
            "It may take a while longer to download the plug-in. Close this window and continue downloading in the background?",
          "desktop.errorpopup.desc.downloadno": "Stay on window",
          "desktop.errorpopup.desc.downloadyes": "Close and continue",
          "desktop.errorpopup.desc.expired":
            "Unable to resend this file because it expired.",
          "desktop.errorpopup.desc.remobile":
            "Unable to send the message due to a server error. Please try again on the mobile version of LINE.",
          "desktop.errorpopup.desc.remobiles":
            "Unable to send the message in the group due to a server error. Please try again on the mobile version of LINE.",
          "desktop.errorpopup.desc.renewmembership":
            "Unable to add items because your LYP Premium membership status changed. Check your membership status and try again.",
          "desktop.errorpopup.desc.revisedtermsofuse":
            "Unable to add items because you haven't agreed to the revised Agreement Regarding Use of Information. Please try adding a video or a photo in original quality to an album on your mobile device and agree to the revised individual policies.",
          "desktop.errorpopup.title.resend": "Resend this message",
          "desktop.favoritethreads.desc.nothreads":
            "Add threads you're interested in to your favorites by clicking the star icon in the upper right corner of the corresponding thread.",
          "desktop.fileshare.button.cancel": "Cancel",
          "desktop.fileshare.button.open": "Share",
          "desktop.fileshare.desc.unsafefile":
            "You've been asked to share the file below with another user. Share this file?\n\n%1",
          "desktop.foldermenu.button.moveto": "Move to",
          "desktop.friends.choose.empty":
            "You don't have any friends to choose from.",
          "desktop.friendssearch.title.friendssearch": "Friend search",
          "desktop.gprofilesetting.button.capturescreen": "Capture screen",
          "desktop.gprofilesetting.button.createtext": "Create text profile",
          "desktop.gprofilesetting.button.deleteprofile":
            "Delete profile photo",
          "desktop.gprofilesetting.button.selectdefault":
            "Select from defaults",
          "desktop.gprofilesetting.button.selectphoto": "Select photo",
          "desktop.group.choose.empty":
            "You don't have any groups to choose from.",
          "desktop.hevcerror.desc.unabletoplay":
            "Unable to play this file format. Download the file?",
          "desktop.installer.button.install": "Install",
          "desktop.installer.checkbox.iagree":
            "I agree to the [LY Corporation Common Terms of Use|https://terms.line.me/line_terms?lang=en].",
          "desktop.installer.desc.installingline":
            "Installing LINE. Please wait.",
          "desktop.installer.desc.readandagree":
            "Read and agree to the terms of use to install LINE.",
          "desktop.installercancel.button.no": "No",
          "desktop.installercancel.button.yes": "Yes",
          "desktop.installercancel.desc.stopinstalling":
            "Stop installing LINE?",
          "desktop.installerror.button.download": "Download",
          "desktop.installerror.desc.badfile":
            "LINE was not installed properly. Please download the installation file and try again.",
          "desktop.leavescreenpopup.button.cancel": "Cancel",
          "desktop.leavescreenpopup.button.leave": "Leave",
          "desktop.line.albums.desc.photosnotyet":
            "Viewing all photos will be available soon.",
          "desktop.line.chatmenu.title.albumsempty": "No albums yet.",
          "desktop.login.button.gotoemailwithPhoneNumber": "Log in with email",
          "desktop.login.button.gotosmartphone": "Log in with my smartphone",
          "desktop.login.button.loginwithsmartphone": "Log in with smartphone",
          "desktop.login.desc.transferring": "Transferring your LINE account",
          "desktop.login.desc.verification":
            "If you're having trouble accessing LINE on your smartphone, please transfer your LINE account.",
          "desktop.login.popup.scanqr":
            "Scan the QR code below with your smartphone and tap Password to reset your password.",
          "desktop.login.popup.seeonmobile":
            "Reset your password on your smartphone",
          "desktop.login.popupbutton.gotit": "Show verification code",
          "desktop.login.popupdesc.cancelverification":
            "Don't verify my identity",
          "desktop.login.popupdesc.loggingin":
            "Verify your identity on your smartphone.",
          "desktop.login.popupdesc.pairingverificationcode":
            'Open LINE on your smartphone and enter the 6-digit code in Settings > Account > "Pair a new device."',
          "desktop.login.popupdesc.pairingverificationcodeguide":
            'Link your smartphone account for the first time\n\n1. Open LINE on your smartphone.\n2. Open Settings > Account > "Pair a new device."\n3. Enter your 6-digit verification code.\nTap "Show verification code" to continue.',
          "desktop.login.popupdesc.pairsecondarydevice": "Pair a new device",
          "desktop.login.popuptitle.loggingin": "Logging you in",
          "desktop.login.popuptitle.pairingverificationcode":
            "Pair with your smartphone account",
          "desktop.main.popup.newversion":
            "A new version of the LINE app is available. Update now?",
          "desktop.movetomenu.button.all": "All",
          "desktop.movetomenu.button.customfolder": "%1",
          "desktop.movetomenu.button.friends": "Friends",
          "desktop.movetomenu.button.groups": "Groups",
          "desktop.movetomenu.button.oas": "Official accounts",
          "desktop.movetomenu.button.openchats": "OpenChats",
          "desktop.mypsticker.button.stickershop": "Sticker shop",
          "desktop.mypsticker.button.upgrade": "Upgrade to Deluxe",
          "desktop.mypsticker.desc.getmore": "Find more Premium stickers!",
          "desktop.mypsticker.desc.maximum":
            "Keep up to %1 Premium sticker sets at a time.",
          "desktop.mypsticker.desc.nosticker":
            "Your Premium stickers will show up here.",
          "desktop.mypsticker.desc.upgradetodeluxe":
            "With a Deluxe course plan, you can keep up to 1,000 sticker or emoji sets. Upgrade to the Deluxe course plan on the mobile version.",
          "desktop.mysticker.button.cancel": "Cancel",
          "desktop.mysticker.button.cancelshow": "Cancel",
          "desktop.mysticker.button.showall": "Show all",
          "desktop.mysticker.button.stop": "Stop",
          "desktop.mysticker.button.stopshow": "Stop",
          "desktop.mysticker.desc.downloadstopemoji": "Stop downloading emoji?",
          "desktop.mysticker.desc.downloadstopsticker":
            "Stop downloading stickers?",
          "desktop.mysticker.desc.stopshowemoji": "Stop downloading all emoji?",
          "desktop.mysticker.desc.stopshowsticker":
            "Stop downloading all stickers?",
          "desktop.mystickers.desc.noexpire": "No expiration date",
          "desktop.mystickers.desc.nolongerp": "No longer available in Premium",
          "desktop.mystickers.desc.passedtime": "Expired",
          "desktop.mystickers.desc.until": "Valid until %1",
          "desktop.mystickers.tooltip.hide": "Hide",
          "desktop.mystickers.tooltip.show": "Show",
          "desktop.noin87notice.button.download": "Download",
          "desktop.noin87notice.desc.supportend":
            "LINE no longer supports Windows 7 and 8. Please click below to download the latest compatible version.",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "Some official account operators may still be able to see unsent messages depending on their system configuration. Unsend this message anyway?",
          "desktop.ocr.popup.toobig":
            "Unable to process because the image is bigger than 5 MB. Resize your image and try again.",
          "desktop.openchatsetting.popup.onmobile":
            "You can change this setting on the mobile version of LINE.",
          "desktop.premiumhistory.desc.history":
            "These are the Premium stickers you haven't been using in the past year.",
          "desktop.premiumpopup.button.canceleold": "Cancel",
          "desktop.premiumpopup.button.deleteold": "Delete",
          "desktop.premiumpopup.button.edit": "Edit stickers",
          "desktop.premiumpopup.desc.downloadlimit":
            "You already have %1 Premium sticker sets in your collection. To download this set, delete an existing set from your collection and try again.",
          "desktop.premiumpopup.desc.notavailablee":
            "This emoji set is no longer available on LINE Stickers Premium. Delete it from your list?",
          "desktop.premiumpopup.desc.notavailables":
            "This sticker set is no longer available on LINE Stickers Premium. Delete it from your list?",
          "desktop.premiumpopup.title.downloadlimit": "Download limit",
          "desktop.profile.desc.video15secs":
            "Profile cover videos must be shorter than 15 seconds.",
          "desktop.profile.desc.video6secs":
            "Profile videos must be shorter than 6 seconds.",
          "desktop.profileselectphoto.button.cancel": "Cancel",
          "desktop.profileselectphoto.button.save": "Save",
          "desktop.profilesetting.button.capturescreen": "Capture screen",
          "desktop.profilesetting.button.createtext": "Create text profile",
          "desktop.profilesetting.button.deleteprofile": "Delete profile photo",
          "desktop.profilesetting.button.selectdefault": "Select from defaults",
          "desktop.profilesetting.button.selectphoto": "Select photo",
          "desktop.profilesetting.popup.500savechat":
            "The last 500 messages sent in the chat will be saved as a text file.",
          "desktop.quickreply.popup.notonpc":
            "This feature is unavailable on the desktop version of LINE.",
          "desktop.reaction.button.ok": "OK",
          "desktop.reaction.button.seemore": "Learn more",
          "desktop.reaction.desc.error":
            "Your reaction didn't go through due to a temporary error. Please try again.",
          "desktop.reaction.desc.plurals.one": "%1 reaction",
          "desktop.reaction.desc.plurals.other": "%1 reactions",
          "desktop.reaction.desc.reaction1":
            "Drag your cursor over a message\nand click the smile icon to leave a reaction.",
          "desktop.reaction.desc.reaction2":
            "Click the icon below a message to see\nyour friends' reactions.",
          "desktop.reaction.desc.unsent":
            "You can no longer react to this message.",
          "desktop.reaction.title.reaction":
            "A reaction is worth a\nthousand messages!",
          "desktop.reaction.toast.expired":
            "You can no longer react to this item because it expired.",
          "desktop.reaction.toast.unsent":
            "You can no longer react to this photo because it was unsent.",
          "desktop.reaction.tooltip.smile":
            "Click the smile icon to react to the photo.",
          "desktop.removechatpopup.button.cancel": "Cancel",
          "desktop.removechatpopup.button.remove": "Remove",
          "desktop.removechatpopup.desc.allchats.one": "%1 chat in folder",
          "desktop.removechatpopup.desc.allchats.other": "%1 chats in folder",
          "desktop.removechatpopup.desc.selected": "%1 selected",
          "desktop.removechatpopup.placeholder.search": "Search",
          "desktop.removechatpopup.title.removechats":
            "Remove chats from this folder",
          "desktop.restorepopup.button.ignore": "Ignore",
          "desktop.restorepopup.button.restore": "Restore",
          "desktop.restorepopup.desc.restoreline":
            "There is another LINE app installed by different route. Restore your chat history from the other app?",
          "desktop.setting.desc.enablechatfolders": "Enable chat folders",
          "desktop.setting.desc.windows": "Windows",
          "desktop.setting.title.chatfolder": "Chat folder",
          "desktop.settings.desc.cantgetnotifocusassist":
            "You're unable to receive notifications from LINE because Focus Assist is on. Change the Focus Assist settings on your device.",
          "desktop.settings.desc.cantgetnotiline":
            "You haven't enabled notifications from LINE. Enable them in your device\u2019s settings.",
          "desktop.settings.desc.cantgetnotios":
            "You haven't enabled notifications. Enable them in your device\u2019s settings.",
          "desktop.settings.desc.osnotification":
            "Choose Windows to receive notifications according to Windows system settings.",
          "desktop.settings.desc.safeguard":
            "Preview files before sending them when dragging and dropping them to a chat.",
          "desktop.settings.notification.description":
            "Force closing the app may cause notifications to arrive late or not be delivered.",
          "desktop.settings.notifications.turnonm":
            "You haven't enabled notifications from LINE. Enable them in your device\u2019s settings.",
          "desktop.settings.notifications.turnonw":
            "You haven't enabled notifications from LINE. To do so, go to your device's Settings > System > Notifications & actions, then enable notifications for LINE.",
          "desktop.settings.title.safeguard": "File previews",
          "desktop.shortcuts.desc.tilechats": "Tile chats",
          "desktop.shortcuts.desc.undotiling": "Undo tiling chats",
          "desktop.smode.popup.nogif":
            "You can't use the call, media viewer, and GIF capture features in Windows 10 S mode due to the security policy.",
          "desktop.sticker.button.deletedstickers":
            "Premium download history\xa0",
          "desktop.sticker.button.mystickers": "My Stickers",
          "desktop.sticker.button.premium": "My Premium stickers",
          "desktop.sticker.tooltip.switch":
            "Change the order of your stickers to organize them. The list will automatically sync with the mobile version.",
          "desktop.stickers.desc.recentlyusede": "Recently used emoji",
          "desktop.stickers.desc.recentlyuseds": "Recently used stickers",
          "desktop.stickers.tooltip.synced":
            "The order of your stickers and emoji has been synced with the mobile version of the app.",
          "desktop.stickertab.button.seemore": "See more",
          "desktop.stickertab.desc.latestemoji": "%1's latest emoji",
          "desktop.stickertab.desc.lateststicker": "%1's latest stickers",
          "desktop.tab.button.ai": "AI",
          "desktop.textprofile.button.cancel": "Cancel",
          "desktop.textprofile.button.save": "Save",
          "desktop.textprofile.desc.defaultfont": "Default font",
          "desktop.textprofile.placeholder.entertext": "Enter text",
          "desktop.textprofile.title.createtextprofile": "Create text profile",
          "desktop.thread.desc.sendfiletothread": "Send files to the chat",
          "desktop.thread.tooltip.taphere":
            "Click this icon to add or remove the thread from your favorite ones.",
          "desktop.updatepopup.button.later": "Later",
          "desktop.updatepopup.button.update": "Update",
          "desktop.updatepopup.desc.update1":
            "LINE %1 can no longer be used. Update to the latest version. Updating will restart LINE.",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1 can no longer be used. Update to the latest version from the App Store.",
          "desktop.viewer.desc.gifby": "GIF from %1",
          "desktop.viewer.desc.gifmagazine": "GIFMAGAZINE",
          "desktop.viewer.popup.cantsave":
            "Unable to save GIFs from %1 in Keep.",
          "desktop.viewer.popup.cantsaves":
            "Unable to save GIFs from %1 in Keep. Save the rest of the files?",
          "desktop.viewer.popup.cantshare": "Unable to share GIFs from %1.",
          "desktop.viewer.popup.cantshares":
            "Unable to share GIFs from %1. Share the rest of the files?",
          "desktop.wallpaper.popup.delete":
            "Delete this wallpaper? Any chats using it will be set to the default wallpaper.",
          "dialog.download.font": "Tahoma",
          "dialog.download.message": "Updating...",
          "dialog.download.messagesub": "Please wait.",
          "displayname.error.badwords":
            "Unable to use this display name.\nPlease try another one. ",
          "duplicategroup.popup.button.gotochatmultiple": "Open group",
          "duplicategroup.popup.createnewgroup": "Create a new group",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "You already have a group with these members (%1). Open that group instead?",
          "duplicategroup.popup.desc.selfchatexists":
            "You already have a group with yourself as the only member\xa0(%1). Open that group instead?",
          "duplicategroup.popup.title.groupexists": "Group already exists",
          "e2ee.auth.pincode.timeout":
            "An error has occurred.\nPlease try again later.",
          "e2ee.message.title": "This message can't be decrypted",
          "e2ee.popupbutton.ok": "OK",
          "e2ee.popupdesc.pleaseresend":
            "Unable to display this message for security reasons. Please ask the sender to resend it.",
          "e2ee.popupdesc.securityerror":
            "Unable to open this file for security reasons.",
          "e2ee.popuptitle.securityerror": "Security error",
          "emoji.downloadAll.confirm": "Download all your emoji?",
          "friend.msg.block":
            'Block %1? You won\'t receive any more messages from this account. You can unblock accounts by going to Settings > Friends > "Blocked accounts."',
          "friend.msg.hide":
            'Hide %1 from your friend list? You can unhide accounts by going to Settings > Friends > "Hidden accounts."',
          "gallery.picker.original.btn": "Original",
          "gnb.guide.allNotification.text":
            "Mute all notifications with a single click when you want some peace and quiet.",
          "group.btn.add.title": "Add",
          "group.btn.cancel.title": "Cancel",
          "group.btn.cancelinvite.title": "Cancel",
          "group.btn.invite.title": "Add friends to chat",
          "group.btn.removeMember.title": "Delete",
          "group.button.invitefrineds": "Invite friends",
          "group.label.addprofile.title": "Edit",
          "group.label.create.title": "Create a group",
          "group.label.groupname.title": "Group name",
          "group.label.invitee.title": "Pending",
          "group.label.member.title": "Members",
          "group.label.modify.title": "Edit this Group",
          "group.label.modifyprofile.title": "Edit",
          "group.label.nobuddy.title": "No members",
          "group.label.nobuddytoselect.title":
            "You have no friends to choose from.",
          "group.label.nosearchresult.title": "No results found.",
          "group.label.nothing.title": "No friends selected.",
          "group.label.selectmember.title": "Invite members",
          "group.label.unauthorized":
            "You don't have permissions for this group.",
          "group.menu.delete": "Remove",
          "group.menu.leave": "Leave",
          "group.msg.cancelInvite.confirm":
            "%1 hasn't joined the group yet. Cancel their invite?",
          "group.msg.cancelinvite.failed": "Unable to cancel invitation.",
          "group.msg.empty.name": "Please enter a group name.",
          "group.msg.kickoutmember.confirm": "Remove %1 from the group?",
          "group.msg.kickoutmember.failed": "Unable to remove member.",
          "group.msg.leavegroup.confirm":
            "If you leave this group, you'll no longer be able to view its member list or chat history. Leave this group?",
          "group.msg.makegroup.failed": "Unable to create group.",
          "group.msg.overflow.name": "You can only enter up to 20 characters.",
          "group.msg.uploadimge.failed": "Unable to upload group image.",
          "group.profile.delete": "Delete profile",
          "group.profile.select.default": "Select from profile",
          "group.profile.select.local": "Select from computer",
          "group.text.placerholder.title": "Group name",
          "group.title.members": "Members",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "The meeting feature is currently unavailable to underage users.",
          "groupcall.alert.popup.error.nowcalling":
            "You can't make two calls at once.\nPlease finish your current call and try again.",
          "groupcall.call.change.to.video": "Switch to video call?",
          "groupcall.call.change.to.video.noCamera":
            "Your video won't be shown because no camera is detected. Switch to video call anyway?",
          "groupcall.call.endwatchtogether.button": "Stop sharing",
          "groupcall.call.invite.complete": "Invitation sent.",
          "groupcall.call.invite.tooltip":
            "Click this button to invite others in the chat to the group call.",
          "groupcall.call.popupbutton.cancel": "Not now",
          "groupcall.call.popupbutton.switch": "Switch",
          "groupcall.call.popupdesc.newcam": 'Switch to "%1" now?',
          "groupcall.call.popupdesc.newmic": 'Switch to "%1" now?',
          "groupcall.call.popupdesc.newspeaker": 'Switch to "%1" now?',
          "groupcall.call.popuptitle.newcam": "New camera found",
          "groupcall.call.popuptitle.newmic": "New microphone found",
          "groupcall.call.popuptitle.newspeaker": "New speaker found",
          "groupcall.call.speaker.many.few": "%1 and %2 others",
          "groupcall.call.speaker.many.many": "%1 and %2 others",
          "groupcall.call.speaker.many.one": "%1 and %2 others",
          "groupcall.call.speaker.many.other": "%1 and %2 others",
          "groupcall.call.speaker.many.two": "%1 and %2 others",
          "groupcall.call.speaker.many.zero": "%1 and %2 others",
          "groupcall.call.toast.loadingyoutube": "Loading...",
          "groupcall.call.toast.someoneelsepreparingwatchtogether":
            "%1 is getting ready to share their screen.",
          "groupcall.call.toast.usersjoinedgroupcall.one":
            "%1 and %n other person joined the group call.",
          "groupcall.call.toast.usersjoinedgroupcall.other":
            "%1 and %n other people joined the group call.",
          "groupcall.call.toast.usersleftgroupcall.one":
            "%1 and %n other person left the group call.",
          "groupcall.call.toast.usersleftgroupcall.other":
            "%1 and %n other people left the group call.",
          "groupcall.call.waiting.msg":
            "Waiting for others to join the call...",
          "groupcall.call.watchtogether.button": "Share screen",
          "groupcall.callsettings.button.numberofparticipants":
            "Participants (%1)",
          "groupcall.callsettings.tooltip.handsfreebt":
            "%1 needs to be set as both microphone and speaker.",
          "groupcall.callsettingspreview.desc.nocamera":
            "Check your call settings before joining. You won't be seen because your camera couldn't be detected.",
          "groupcall.callsettingspreview.desc.nomic":
            "Check your call settings before joining. You won't be heard because your microphone couldn't be detected.",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "Check your call settings before joining. You won't be seen or heard because your camera and microphone couldn't be detected.",
          "groupcall.chat.alert.popup.error.overflow":
            "Unable to start group call due to heavy call volume.\nPlease try again later.",
          "groupcall.chat.confirm.popup.cant":
            "You can't join this group call because you are not a member of this group.",
          "groupcall.chat.confirm.popup.join.few":
            "There are %n participants in this group call. Would you like to join the call?",
          "groupcall.chat.confirm.popup.join.many":
            "There are %n participants in this group call. Would you like to join the call?",
          "groupcall.chat.confirm.popup.join.one":
            "There is %n participant in this group call. Would you like to join the call?",
          "groupcall.chat.confirm.popup.join.other":
            "There are %n participants in this group call. Would you like to join the call?",
          "groupcall.chat.confirm.popup.join.two":
            "There are %n participants in this group call. Would you like to join the call?",
          "groupcall.chat.confirm.popup.join.zero":
            "There are %n participants in this group call. Would you like to join the call?",
          "groupcall.chat.confirm.popup.start":
            "There are no ongoing group calls.\nStart a call?",
          "groupcall.chat.confirm.popup.start.btn.video": "Start video call",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "Start a group voice call?",
          "groupcall.chat.layer.join.btn": "Join",
          "groupcall.chat.layer.numofmembers.few":
            '<![CDATA[<font color=\\"#527fdc\\">%n people</font> in call.]]>',
          "groupcall.chat.layer.numofmembers.many":
            '<![CDATA[<font color=\\"#527fdc\\">%n people</font> in call.]]>',
          "groupcall.chat.layer.numofmembers.one":
            '<![CDATA[<font color=\\"#527fdc\\">%n person</font> in call.]]>',
          "groupcall.chat.layer.numofmembers.other":
            '<![CDATA[<font color=\\"#527fdc\\">%n people</font> in call.]]>',
          "groupcall.chat.layer.numofmembers.two":
            '<![CDATA[<font color=\\"#527fdc\\">%n people</font> in call.]]>',
          "groupcall.chat.layer.numofmembers.zero":
            '<![CDATA[<font color=\\"#527fdc\\">%n people</font> in call.]]>',
          "groupcall.chat.layer.start.btn": "Start",
          "groupcall.chat.layer.start.dscr": "Start a group call.",
          "groupcall.chat.layer.start.msg": "%1 has started a group call.",
          "groupcall.chat.message.end": "Group call ended.",
          "groupcall.chat.message.invite":
            "You have been invited to a group call:\n%1",
          "groupcall.chat.message.start": "Group call started.",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            'You\'ve been invited to join the LINE meeting "%1". Follow the link below to join the call.\n%2',
          "groupcall.chatlink.popupdesc.invalidlink": "Invalid link.",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "Create a link-based meeting and share it with others to start a call.",
          "groupcall.createchat.button.createmeeting": "Meeting",
          "groupcall.deletemeeting.popupdesc.delete": "Delete",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "Delete this meeting?",
          "groupcall.editmeetingname.popuptitle.edit": "Edit meeting name",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "There can only be up to %1 people in the group call.",
          "groupcall.groupcallsettings.title.participants": "Participants",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "%1 was removed from the meeting.",
          "groupcall.invite.index.not.join": "Pending",
          "groupcall.invite.selectall": "Select all",
          "groupcall.invite.title": "Invite",
          "groupcall.kickout.popup":
            "The call has ended due to a connection timeout.",
          "groupcall.leavemeeting.popupbutton.leave": "Leave",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "If you leave this meeting, you will no longer be able to view its participants list or chat history. Leave this meeting?",
          "groupcall.meetingintroguide.button.start": "Create meeting",
          "groupcall.meetingintroguide.desc.disclaimers":
            "Please note that meeting links are only valid for 90 days upon creation. When you join a meeting or send a message in the meeting chat, your LINE display name and profile photo will be visible to other participants.",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "Please note that meeting links are only valid for 90 days upon creation, and can only be accessed by those over the age limit. When you join a meeting or send a message in a meeting chat, your LINE display name and profile photo will be visible to other participants.",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "Start a video meeting with whomever you want by simply sharing a meeting link.",
          "groupcall.meetingintroguide.header.connect":
            "Connect more easily\nwith a single link",
          "groupcall.meetingintroguide.title.meetings": "Meetings",
          "groupcall.meetingnameedit.popupbutton.save": "Save",
          "groupcall.meetingparticipantlist.button.remove": "Remove",
          "groupcall.meetingparticipants.button.next": "Next",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "Search by name",
          "groupcall.meetingparticipants.title.reportuser": "Report",
          "groupcall.meetings.button.copymeetinglink": "Copy link",
          "groupcall.meetings.button.createmeeting": "Create meeting",
          "groupcall.meetings.button.shareinvite": "Invite",
          "groupcall.meetings.button.startmeeting": "Start",
          "groupcall.meetings.desc.createdjustnow": "Just now",
          "groupcall.meetings.desc.usersmeeting": "%1's meeting",
          "groupcall.meetings.popup.policyblock":
            "You can't use LINE Meeting because your account is suspected of violating our terms.",
          "groupcall.meetings.popupdesc.networkerror":
            "Unable to load the screen due to a network error. Please try again.",
          "groupcall.meetings.toast.meetingcreated": "Meeting created.",
          "groupcall.meetingscreen.tooltip.invitemorepeople":
            "Invite more people to the meeting.",
          "groupcall.participantlist.desc.cameraturnedoff": "Camera turned off",
          "groupcall.participantlist.desc.gridview": "Switch to grid view",
          "groupcall.participantlist.desc.muted": "Muted",
          "groupcall.participantlist.desc.participantview":
            "Pin this person to the focus screen",
          "groupcall.participantlist.placeholder.searchbyname":
            "Search by name",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "Your LINE display name and profile photo will be shown.",
          "groupcall.removefrommeeting.popupbutton.remove": "Remove",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "Remove %1 from the meeting?",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "Unable to remove this participant due to a temporary error. Please try again.",
          "groupcall.report.button.content": "Inappropriate content",
          "groupcall.report.button.harrassment": "Sexual harassment",
          "groupcall.report.button.impersonation": "Impersonation",
          "groupcall.report.button.impersonation.inquirypopup":
            "Please consider providing us detailed information to help us investigate this case of impersonation by proceeding to our inquiry form and filling out the requested items.",
          "groupcall.report.button.impersonation.inquirypopup.decline": "Skip",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "Proceed",
          "groupcall.report.button.other": "Other",
          "groupcall.report.button.report": "Report",
          "groupcall.report.button.scam": "Scam",
          "groupcall.report.button.spam": "Spam/Advertising",
          "groupcall.report.desc.reportreason":
            "We'll receive information about this user and meeting screenshots to help us moderate the report.",
          "groupcall.report.popupbutton.donotremove": "Don't remove",
          "groupcall.report.popupbutton.remove": "Remove",
          "groupcall.report.popupdesc.removeuser":
            "Report sent.\nRemove this user from the meeting?",
          "groupcall.report.subtitle.reportreason":
            "Let us know what\u2019s going on.",
          "groupcall.screenshare.receiver.failreceive":
            "Waiting for screen to load...",
          "groupcall.screenshare.receiver.senderdesc":
            "%1 is sharing their screen.",
          "groupcall.screenshare.receiver.viewscreen":
            "Return to shared screen",
          "groupcall.screenshare.sender.btn.stop": "Stop sharing",
          "groupcall.screenshare.sender.desc": "You're sharing your screen.",
          "groupcall.settings.menu.report": "Report",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "You can only create up to 30 meetings. Delete a meeting that is no longer being used and try again.",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "You can only invite participants to the meeting by sharing the meeting invite. Copy the link and share in chat to invite others.",
          "groupcall.title": "Group call",
          "groupcall.toast.deviceerror.camera":
            "This camera is being used by another app. Please select a different camera.",
          "groupcall.toast.newdevice.camera": 'Switched to the "%1" camera.',
          "groupcall.toast.newdevice.mic": 'Switched to the "%1" microphone.',
          "groupcall.toast.newdevice.speaker": 'Switched to the "%1" speaker.',
          "groupcall.verifyage.desc.verifyageinmobileversion":
            'You must verify your age to use this feature.\nTo verify your age, go to Settings > "Age verification" on the mobile version of LINE.',
          "groupcall.video.alert.member.join": "%1 joined the group call.",
          "groupcall.video.alert.member.leave": "%1 left the group call.",
          "groupcall.video.alert.streaming.off.member":
            "You turned off this person's video.\nTurn it on again to view it.",
          "groupcall.video.chat.error.without.camera.body":
            "No camera detected. Join this group call without showing your video?",
          "groupcall.video.chat.error.without.camera.btn.video":
            "Join Video Call",
          "groupcall.video.chat.error.without.camera.btn.voice":
            "Join Voice Call",
          "groupcall.video.chat.layer.start.dscr": "Start a group video call.",
          "groupcall.video.chat.layer.start.msg":
            "%1 started a group video call.",
          "groupcall.video.chat.layer.start.shortmsg": "Video call started",
          "groupcall.video.chat.message.invite":
            'You have been invited to a group video call:\n"%1"',
          "groupcall.video.chat.message.start": "Group video call started.",
          "groupcall.video.desc.guide.tryCall":
            "You can now participate in group video calls using LINE on your desktop. ",
          "groupcall.video.error.change.to.voice":
            "Changed to voice call due to network instability or heavy call volume.",
          "groupcall.video.error.not.video.member":
            "Unable to show this person's video because they joined the call without video.",
          "groupcall.video.fullview.streaming.fail.body":
            "Unable to load %1's video.\nPlease try again.",
          "groupcall.video.fullview.streaming.fail.button": "Retry",
          "groupcall.video.fullview.streaming.off.body":
            "You turned off %1's video.\nTurn it on again to view it.",
          "groupcall.video.menu.streaming.off": "Turn off video",
          "groupcall.video.menu.streaming.on": "Turn on video",
          "groupcall.video.title": "Group video call",
          "groupcall.video.toast.cameraoff":
            "Your camera is now turned off and the Effects window has been closed.",
          "groupcall.video.tooltip.focusview": "Switch to focus view",
          "groupcall.video.tooltip.gridview": "Switch to grid view",
          "groupcall.video.tooltip.profilelist": "View participants",
          "groupcall.video.tooltip.videolayout": "Change video layout",
          "groupcall.viewmode.desc.focusviewcenter": "Focus view (middle)",
          "groupcall.viewmode.desc.focusviewleft": "Focus view (left)",
          "groupcall.viewmode.desc.focusviewright": "Focus view (right)",
          "groupcall.viewmode.desc.gridview": "Grid view",
          "groupcall.voice.chat.confirm.popup.join":
            "There is an ongoing group voice call.\xa0Join the call?",
          "groupcall.voice.chat.layer.start.dscr": "Start a group voice call.",
          "groupcall.voice.chat.layer.start.msg":
            "%1 started a group voice call.",
          "groupcall.voice.chat.layer.start.shortmsg": "Voice call started",
          "groupcall.voice.chat.message.invite":
            'You have been invited to a group voice call:\n"%1"',
          "groupcall.voice.chat.message.start": "Group voice call started. ",
          "groupcall.voice.title": "Group voice call",
          "groupcall.watchtogethercall.popupbutton.start": "Start",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "Start watching this video with others?",
          "groupcall.watchtogethercall.toast.currentlyinsession":
            "%1 is sharing their screen.",
          "groupcall.watchtogethercall.toast.userendedwatchtogether":
            "%1 stopped sharing their screen.",
          "groupcall.watchtogethercall.toast.userstartedwatchtogether":
            "%1 started sharing their screen.",
          "groupcall.watchtogethermenu.button.screenshare": "Your screen",
          "groupcall.watchtogethermenu.button.youtube": "YouTube",
          "groupcall.watchtogethermenu.desc.policy": "Privacy Policy",
          "groupcall.watchtogethermenu.desc.searchonyoutube":
            "Search YouTube link, keyword",
          "groupcall.watchtogethermenu.desc.terms": "Terms of Service",
          "groupcall.youtube.edge.popup.btn.install": "Continue",
          "groupcall.youtube.edge.popup.desc":
            "You need to install Microsoft Edge Chromium to share YouTube videos. Continue to the Microsoft website?",
          "groupcall.youtube.endduetoerror":
            "YouTube video sharing ended due to a temporary error. Please try again.",
          "groupcall.youtube.error.reinstall":
            "Unable to play the video due to a temporary error. Please try again, or reinstall your browser if the issue persists.",
          "groupcall.youtube.paste": "Share YouTube video",
          "groupcall.youtube.paste.btn.play": "Play",
          "groupcall.youtube.paste.btn.search": "Preview",
          "groupcall.youtube.paste.desc":
            "Search for videos you want to share with others. (Headphones are recommended.)",
          "groupcall.youtube.paste.noresult":
            "Unable to load the video. Please check the link and try again.",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "Play",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "Pause your current video and play a new one?",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1 is already sharing a YouTube video.",
          "groupcall.youtube.paste.toast.error":
            "Unable to share the video due to a temporary error.",
          "groupcall.youtube.paste.unknownerror":
            "Unable to load the video due to a temporary error. Please try again.",
          "groupcall.youtube.receiver.newvideo": "%1 is preparing a new video.",
          "groupcall.youtube.receiver.playvideo": "Return to video",
          "groupcall.youtube.receiver.senderdesc": "%1 is playing a video.",
          "groupcall.youtube.receiver.tooltip.mute": "Mute",
          "groupcall.youtube.receiver.tooltip.unmute": "Unmute",
          "groupcall.youtube.receiver.videopaused": "%1 paused the video.",
          "groupcall.youtube.sender.btn.stop": "Stop sharing",
          "groupcall.youtube.sender.desc": "You're sharing a video.",
          "groupcall.youtube.stop.popup.btn.confirm": "Stop sharing",
          "groupcall.youtube.stop.popup.desc":
            "Stop sharing this YouTube video?",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "YouTube video sharing is currently unavailable for Windows desktops.",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1 canceled %2's invitation to the group.",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1 added %2 to the group. <a href="line://nv/group/settings/groupname/chatId=%3">Change the group name</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1 joined the group. <a href="line://nv/group/settings/groupname/chatId=%2">Change the group name</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1 removed %2 from the group.",
          "groupchat.linkqr.error.block":
            "This group doesn't allow invites via\nlinks or QR codes.",
          "groupchat.linkqr.error.renew": "This group doesn't exist.",
          "groupchat.push.invitedtojoingroup":
            "%1 invited you to join a group.",
          "groupchat.push.someonejoinsgroup": "%1 joined the group.",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1 allowed joining via link or QR code.",
          "groupchat.systemmsg.cancelinvite":
            "%1 canceled %2's invitation to the group.",
          "groupchat.systemmsg.cancelinvite.updatename":
            "<![CDATA[%1 canceled %2's invitation. The group name won't change automatically. <a href=\"line://nv/group/settings/groupname/chatId=%3\">Change the group name</a>]]>",
          "groupchat.systemmsg.changegroupname":
            '%1 changed the group\'s name to "%2".',
          "groupchat.systemmsg.changegroupphoto":
            "%1 changed the group's profile picture.",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1 disabled joining via link or QR code.",
          "groupchat.systemmsg.inviteuser":
            "%1 invited %2 to the group. Wait for them to join before chatting.",
          "groupchat.systemmsg.inviteuser1n": "%1 added %2 to the group.",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%1 added %2 to the group. <a href="line://nv/group/settings/groupname/chatId=%3">Change the group name</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%1 added %2 to the group. The group name won\'t change automatically. <a href="line://nv/group/settings/groupname/chatId=%3">Change the group name</a>]]>',
          "groupchat.systemmsg.kickoutuser": "%1 removed %2 from the group.",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%1 removed %2 from the group. The group name won\'t change automatically. <a href="line://nv/group/settings/groupname/chatId=%3">Change the group name</a>]]>',
          "groupchat.systemmsg.userjoin": "%1 joined the group.",
          "groupchat.systemmsg.userjoin.updatename": "%1 joined the group.",
          "groupchat.systemmsg.userleave": "%1 left the group.",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1 left the group. The group name won\'t change automatically. <a href="line://nv/group/settings/groupname/chatId=%2">Change the group name</a>]]>',
          "groupchat.systemmsg.youareinvited": "%1 invited you to the group.",
          "grouphome.album.alert.inprogress":
            "You can't add items or delete albums while you are uploading items. \nPlease try again later.",
          "grouphome.album.alert.reupload": "Upload item again?",
          "grouphome.album.alert.save.failed": "Unable to save item.",
          "grouphome.album.alert.stopUpload": "Stop upload",
          "grouphome.album.alert.unregistereduser":
            "You can't use Albums with users who have deleted their accounts.",
          "grouphome.album.label.reupload": "Resume upload",
          "grouphome.albumdetail.addPhoto": "Add photos",
          "grouphome.albumdetail.alert.changeAlbum":
            "Albums can't be restored once deleted.\nDeleting this album will also cause all of its photos to be permanently deleted.\nAre you sure you want to delete this album?",
          "grouphome.albumdetail.changeName": "Rename album",
          "grouphome.albumdetail.delete": "Delete album",
          "grouphome.albumdetail.empty.desc":
            "We all have moments we want to remember for a lifetime. Create albums together with your friends!",
          "grouphome.albumdetail.empty.title": "No items added.",
          "grouphome.albumdetail.error":
            "Unable to load data.\nPlease try again.",
          "grouphome.albumdetail.saveComplete": "Saved successfully.",
          "grouphome.albumdetail.saveall": "Save all",
          "grouphome.albumdetail.savingPhoto": "Saving items\u2026",
          "grouphome.albumdetail.selectCount.plurals.few": "%n selected",
          "grouphome.albumdetail.selectCount.plurals.many": "%n selected",
          "grouphome.albumdetail.selectCount.plurals.one": "%n selected",
          "grouphome.albumdetail.selectCount.plurals.other": "%n selected",
          "grouphome.albumdetail.selectCount.plurals.two": "%n selected",
          "grouphome.albumdetail.selectCount.plurals.zero": "%n selected",
          "grouphome.albumdetail.title.changeAlbum": "Rename album",
          "grouphome.albumdetail.uploader": "by %1",
          "grouphome.alert.addphoto":
            "Are you sure you want to cancel?\nThe attached item won't be saved.",
          "grouphome.alert.albumLimitCount":
            "You can't create any more albums.\nYou can create up to %n albums.",
          "grouphome.alert.alreadyDeleteAlbum": "This album has been deleted.",
          "grouphome.alert.alreadyDeletePhoto": "This item has been deleted.",
          "grouphome.alert.makealbum":
            "You haven't finished creating your album yet. Leave without creating it?",
          "grouphome.alert.photoLimitCount":
            "You can't add any more photos.\nYou can add up to %1 photos to each album.",
          "grouphome.label.album": "Albums",
          "grouphome.label.album.addPhoto": "Add photos",
          "grouphome.label.album.changeName": "Rename album",
          "grouphome.label.album.delete": "Delete album",
          "grouphome.label.album.empty": "No albums here yet.",
          "grouphome.label.album.make": "Create album",
          "grouphome.label.albumName": "Album name",
          "grouphome.label.post": "Notes",
          "grouphome.label.post.empty": "No notes here yet.",
          "grouphome.label.showAllPost": "All notes",
          "grouphome.label.showUserHome": "%1's Home",
          "grouphome.label.showallalbum": "All albums",
          "grouphome.label.writepost": "New note",
          "grouphome.member.alert.joinGroup":
            "You are now a member of the group.",
          "grouphome.member.label.showGroup": "View group",
          "grouphome.post.alert.unregistereduser":
            "You can't use Notes with users whose accounts have been deleted.",
          "gruopchat.dynamic.group.title.memberleft.updatename":
            "%1 left the group.",
          "hub.menubar.tooltip": "Check out LINE services in LINE HUB.",
          "hub.menubar.tooltip.renew":
            "LINE HUB\u5168\u65b0\u5716\u793a\uff0c\u638c\u63e1\u6240\u6709LINE\u7cbe\u9078\u5167\u5bb9\uff01",
          "image.viewer.btn.edit.tooltip": "Opening image editor...",
          "image.viewer.btn.minimizesize.tooltip": "Fit to window",
          "image.viewer.cancel": "Cancel",
          "image.viewer.copy": "Copy",
          "image.viewer.crop": "Crop",
          "image.viewer.download.error": "A temporary error occurred.",
          "image.viewer.loading.error":
            "Your request has not been processed due to a temporary error.\nPlease try again.\n",
          "image.viewer.ok": "OK",
          "image.viewer.save": "Download",
          "image.viewer.share.chat": "Send to chat",
          "imageEditor.btn.doNotSave": "Don't save",
          "imageEditor.msg.onEditing": "Save edited images to your PC?",
          "imageEditor.msg.onModified": "This image has unsaved changes.",
          "imageEditor.msg.toobig":
            "Unable to edit this image because its resolution is too high.",
          "invite.btn.cancel.title": "Cancel",
          "invite.btn.invite.title": "OK",
          "invite.label.create.title": "Add Friends to Chat",
          "invite.label.invitee.title": "Invite",
          "invite.label.nobuddytoselect.title":
            "You haven't selected any friends.",
          "invite.label.nosearchresult.title": "User not found.",
          "invite.label.nothing.title": "No friends selected.",
          "invite.label.person.title.plurals.few": "%nmembers",
          "invite.label.person.title.plurals.many": "%nmembers",
          "invite.label.person.title.plurals.one": "%nmember",
          "invite.label.person.title.plurals.other": "%nmembers",
          "invite.label.person.title.plurals.two": "%nmembers",
          "invite.label.person.title.plurals.zero": "%nmembers",
          "keep.alert.sendtochat.unsupported.all.one":
            "Unable to send the selected file because it is in an unsupported format.",
          "keep.alert.sendtochat.unsupported.all.other":
            "Unable to send the selected files because they are in an unsupported format.",
          "keep.alert.sendtochat.unsupported.file.multi": "",
          "keep.alert.sendtochat.unsupported.some.one":
            "One of the selected files can't be sent because it is in an unsupported format. Send the rest of the files?",
          "keep.alert.sendtochat.unsupported.some.other":
            "%n files can't be sent because they are in an unsupported format. Send the rest of the files?",
          "keep.btn.retry": "Retry",
          "keep.category.all": "All",
          "keep.category.files": "Files",
          "keep.category.links": "Links",
          "keep.category.memos": "Memos",
          "keep.category.newtext": "Text",
          "keep.category.photos": "Photos",
          "keep.category.photosvideos": "Photos and videos",
          "keep.category.text": "Text",
          "keep.category.videos": "Videos",
          "keep.common.error.503":
            "Keep is currently under maintenance.\nDowntime: MMM dd, HH:mm \u2013 MMM dd, HH:mm (UTC+9)",
          "keep.date.format": "MMM d, yyyy",
          "keep.desc.PR.title": "When can I use Keep?",
          "keep.desc.alreadyDeleted": "This content is no longer available.",
          "keep.desc.copied": "Copied",
          "keep.desc.count.others.plurals.few": "and %1 others",
          "keep.desc.count.others.plurals.many": "and %1 others",
          "keep.desc.count.others.plurals.one": "and %1 other",
          "keep.desc.count.others.plurals.other": "and %1 others",
          "keep.desc.count.others.plurals.two": "and %1 others",
          "keep.desc.count.others.plurals.zero": "and %1 others",
          "keep.desc.delete.one": "Delete selected item?",
          "keep.desc.delete.other": "Delete selected items?",
          "keep.desc.discard": "Your edits haven't been saved. Discard edits?",
          "keep.desc.downloadError":
            "Unable to complete task because an error occurred while downloading the file.",
          "keep.desc.downloading": "Downloading...",
          "keep.desc.drag": "Drag and drop your file here\nor click Upload.",
          "keep.desc.dragHere": "Drag and drop your file here.",
          "keep.desc.error.reason.exceedPhotoResolution":
            "Resolution is larger than 10,000 px.",
          "keep.desc.error.reason.exceedPhotoSize":
            "Photo is larger than 20 MB.",
          "keep.desc.error.reason.expired":
            "Unable to load this content as it's no longer available.",
          "keep.desc.error.reason.lackOfStorage": "Not enough storage space.",
          "keep.desc.error.reason.networkError": "A network error occurred.",
          "keep.desc.error.reason.notFoundFile": "Unable to find file.",
          "keep.desc.error.reason.unknown": "Unable to upload item.",
          "keep.desc.error.reason.unknownFileType":
            "Unable to upload this file type.",
          "keep.desc.exceedCharacter":
            "You can only enter up to 10,000 characters. ",
          "keep.desc.expiredContent.askDelete":
            "Unable to view this item because its storage period has expired.\nDelete the expired item?\n",
          "keep.desc.expiredContent.couldNotConfirmed":
            "Unable to view this item because its storage period has expired.",
          "keep.desc.expiredContent.storagePeriod":
            "Storage period has expired.",
          "keep.desc.fileCountExceeds": "You can only save up to 20 files.",
          "keep.desc.guide.tryKeep": "Store your stuff\nTry out Keep today!",
          "keep.desc.itemsavedinkeepexpired":
            "This item is no longer available.",
          "keep.desc.loadFailed":
            "Unable to load.\nPlease check your network connection and try again. ",
          "keep.desc.loadFromKeep": "Open files in Keep",
          "keep.desc.loadingData": "Loading data. Please wait a moment.",
          "keep.desc.maximumUploadableSize.plurals.few":
            "You can only upload up to %1 MB at once.",
          "keep.desc.maximumUploadableSize.plurals.many":
            "You can only upload up to %1 MB at once.",
          "keep.desc.maximumUploadableSize.plurals.one":
            "You can only upload up to %1 MB at once.",
          "keep.desc.maximumUploadableSize.plurals.other":
            "You can only upload up to %1 MB at once.",
          "keep.desc.maximumUploadableSize.plurals.two":
            "You can only upload up to %1 MB at once.",
          "keep.desc.maximumUploadableSize.plurals.zero":
            "You can only upload up to %1 MB at once.",
          "keep.desc.noSearchResult": "No results found.",
          "keep.desc.noSelectableItem":
            "You don't have any items that you can select.",
          "keep.desc.notSupportType": "Unable to open this file type. ",
          "keep.desc.notifyPeriod":
            "Files over %1 MB will be saved for 30 days. ",
          "keep.desc.photoLoadFailed":
            "Unable to load photo.\nPlease check your network connection and try again. ",
          "keep.desc.quit.uploading":
            "You are currently uploading files to Keep.\nClosing LINE now will prevent the files from being sent correctly.",
          "keep.desc.requesturl.failed.error":
            "Unable to load URL information. Please try again.",
          "keep.desc.retry": "Please try again.",
          "keep.desc.saved": "Saved. ",
          "keep.desc.savedInKeep": "Saved in Keep.",
          "keep.desc.saving": "Saving...",
          "keep.desc.storageFull": "Insufficient free space in Keep.",
          "keep.desc.storageFull.freeUpSpace":
            "Insufficient free space in Keep. Please try again after freeing up some space. ",
          "keep.desc.storageFull.unable":
            "Unable to add items because you don't have any more free space in Keep.",
          "keep.desc.storageFull.unableToSelect":
            "Unable to select items because you don't have any more storage space available in Keep. ",
          "keep.desc.temporaryError":
            "Unable to complete the requested task due to a temporary error.\nPlease try again.\n",
          "keep.desc.totalSpace": "Total space: %1",
          "keep.desc.unexpectedErrorOccured": "An unexpected error occurred.",
          "keep.desc.upload.error.maxFileSize":
            "Unable to upload files larger than %1 GB.\nPlease check the file size and try again.",
          "keep.desc.upload.inProgress": "Uploading to Keep...",
          "keep.desc.upload.notifyIncompleteUpload":
            "File upload is in progress.\nIf you close LINE now, the file may only be partially uploaded.",
          "keep.desc.uploadFail.storage.plurals.few":
            "Unable to upload %1 items due to insufficient storage space.",
          "keep.desc.uploadFail.storage.plurals.many":
            "Unable to upload %1 items due to insufficient storage space.",
          "keep.desc.uploadFail.storage.plurals.one":
            "Unable to upload %1 item due to insufficient storage space.",
          "keep.desc.uploadFail.storage.plurals.other":
            "Unable to upload %1 items due to insufficient storage space.",
          "keep.desc.uploadFail.storage.plurals.two":
            "Unable to upload %1 items due to insufficient storage space.",
          "keep.desc.uploadFail.storage.plurals.zero":
            "Unable to upload %1 items due to insufficient storage space.",
          "keep.desc.uploadFailed": "Unable to upload.",
          "keep.desc.uploadPending": "Waiting to upload...",
          "keep.desc.uploading": "Uploading...",
          "keep.desc.usableSpace": "%1 used",
          "keep.desc.videoLoadFailed":
            "Unable to load video.\nPlease check your network connection and try again. ",
          "keep.desc.wait": "Please wait a moment.",
          "keep.desc.warning.deleteAll":
            "Delete all files?\nYour files can't be restored once deleted.",
          "keep.desc.warning.deleteAll.chromeUser":
            "Delete all files?\nYour Chrome memos will also be removed if you click Delete.\nYour files can't be restored once deleted.",
          "keep.download.btn": "Open folder",
          "keep.download.success": "Download complete.",
          "keep.emptytitle.title": "Keep it here",
          "keep.full.sync.working": "Synchronizing... %1%",
          "keep.home.bannerdesc.endofkeep":
            "Back up important items from Keep until %1.",
          "keep.home.bannertitle.endofkeep": "End of Keep",
          "keep.home.desc.timeformat": "MMM d, yyyy",
          "keep.home.emptydesc.descforplaces":
            "Places you save from official accounts, LINE PLACE, and so on will show up here.",
          "keep.home.popupbutton.close": "Close",
          "keep.home.popupbutton.dontshowagain": "Don't show again",
          "keep.home.popupbutton.learnmore": "Learn more",
          "keep.home.popupdesc.endofkeep":
            "Keep will no longer be available from %1. Please back up any important items to your device.\n* Keep Memo will still be available after the termination of Keep.",
          "keep.home.popuptitle.endofkeep": "End of Keep and back up guide",
          "keep.home.tab.places": "Places",
          "keep.home.toast.pinneditems": "Pinned",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "You can share up to 20 items at once.",
          "keep.keepitem.itemsenttokeepmemoexpired":
            "This item you sent in Keep Memo is expired.",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "Any content you sent to Keep Memo will be shown in Keep for you to manage and edit.",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "Have something you don't want to let out of your sight?\nTry pinning it so that it stays on top.",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "You can keep any items in Keep Memo forever by saving, pinning, editing, or adding to collections in Keep.",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            'Introducing "Keep Memo"',
          "keep.keepmemoguide.popuptitle.keepitemsforever":
            "Keeping items forever",
          "keep.keepmemoguide.popuptitle.pinningitems": "Pinning items",
          "keep.label.add": "Add",
          "keep.label.addText": "Add",
          "keep.label.capture": "Screen capture",
          "keep.label.chromeMemo": "Chrome memos",
          "keep.label.copy": "Copy",
          "keep.label.createdTime": "Created",
          "keep.label.delete": "Delete",
          "keep.label.deleteAll": "Delete all",
          "keep.label.deleting": "Deleting...",
          "keep.label.details": "Details",
          "keep.label.download": "Download",
          "keep.label.edit": "Edit",
          "keep.label.emptyText": "No Content",
          "keep.label.expired": "Expired",
          "keep.label.fileSize": "File size",
          "keep.label.from": "From",
          "keep.label.goToKeep": "Open Keep",
          "keep.label.hitocoto": "What's up?",
          "keep.label.justNow": "Just now",
          "keep.label.learnMore": "Find out now",
          "keep.label.modifiedTime": "Last modified",
          "keep.label.more": "More",
          "keep.label.newMemo": "Memo",
          "keep.label.open": "Open",
          "keep.label.openkeepmemo": "Open Keep Memo",
          "keep.label.order.stored": "Saved date",
          "keep.label.order.updated": "Last updated",
          "keep.label.paste": "Paste",
          "keep.label.pause": "Pause",
          "keep.label.period": "Storage period",
          "keep.label.pin": "Pin",
          "keep.label.play": "Play",
          "keep.label.playTime": "Playback time",
          "keep.label.refresh": "Refresh",
          "keep.label.resolution": "Resolution",
          "keep.label.save": "Save",
          "keep.label.saveInKeep": "Save in Keep",
          "keep.label.savedTime": "Saved",
          "keep.label.search": "Search all",
          "keep.label.searchResult": "Search results",
          "keep.label.send": "Send",
          "keep.label.settings": "Settings",
          "keep.label.shareToChat": "Send to chat",
          "keep.label.sortByDate": "Sort by date",
          "keep.label.sortByName": "Sort by name",
          "keep.label.sortBySize": "Sort by size",
          "keep.label.terminate": "Close LINE",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "Unpin",
          "keep.label.upload": "Upload",
          "keep.label.uploadFile": "Upload Files",
          "keep.label.viewinkeepmemo": "View in Keep Memo",
          "keep.label.voiceMessage": "Voice message",
          "keep.label.volume": "Space used",
          "keep.label.writememo.title": "Memos",
          "keep.label.writetext.title": "Text",
          "keep.main.desc.keepfadeout":
            "Keep is no longer available. Update your LINE app to the latest version.",
          "keep.title": "Keep",
          "keep.toast.itempinned": "Pinned successfully.",
          "keep.toast.itemunpinned": "Unpinned successfully.",
          "keepmemo.alert.deletemessage":
            "The\xa0selected\xa0messages\xa0will only be\xa0deleted\xa0on this device. Continue?",
          "keepmemo.alert.unsendmessage":
            "The\xa0selected\xa0messages\xa0will be deleted from all of your devices. Continue?",
          "keepmemo.category.all": "All",
          "keepmemo.category.files": "Files",
          "keepmemo.category.links": "Links",
          "keepmemo.category.photos": "Photos",
          "keepmemo.category.text": "Text",
          "keepmemo.category.videos": "Videos",
          "keepmemo.desc.noSelectableItem":
            "You don't have any items that you can select.",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "You can only share up to 20 items at once.",
          "keepmemo.label.goToKeepMemo": "Open Keep Memo",
          "keepmemo.label.search": "Search",
          "keepmemo.label.sendToKeepMemo": "Send to Keep Memo",
          "keepmemo.label.share": "Share",
          "keepmemo.label.tooltip": "Keep Memo",
          "keepmemo.msg.desc.systemmsg":
            "Send any messages, photos, videos, and links you want to keep for yourself.",
          "keepmemo.title": "Send to Keep Memo",
          "keyword.notice.btn": "Add keywords",
          "keyword.notice.desc":
            "Add keywords to receive alerts for any messages that include them.",
          "keyword.notice.title": "Keyword alerts",
          "keyword.notification.desc": "Keyword mentioned",
          "kickout.all.v3":
            "You've been automatically logged out. Please log in again.",
          "kickout.dormant.account":
            "Please log in again using the email address you registered on the mobile version of LINE and verify your account.",
          "kickout.email.account.modified":
            "You have been logged out because you either registered a new email address or changed your password.",
          "kickout.expired": "Logged out after being\nidle for a long period.",
          "kickout.networkError":
            "You have been logged out due to a network error. Please log in again.",
          "kickout.noAllowedSecondaryDevice":
            "You were logged out via the mobile version of LINE.",
          "kickout.notAuthorizedDevice":
            "Automatically logged out after logging in on another PC.\n   ",
          "kickout.notAvailableUser":
            "You have been logged out of LINE because your account was deleted on another device.",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "You have been logged out due to a server error. Please log in again.",
          "kickout.serverMaintenance":
            "The server is currently under maintenance. Please log in again later.",
          "kickout.serviceMaintenance":
            "You have been logged out due to a temporary error. Please log in again.",
          "kickout.square.server.fail":
            "You were logged out due to an OpenChat verification error. Please log in again.",
          "line.keepmemoguide.popupdesc.page1":
            "You can freely send memos, photos or other items to Keep Memo like any other chat.",
          "line.keepmemoguide.popuptitle.page1": 'Introducing "Keep Memo"',
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "Please update LINE and try again.",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "Error",
          "line.updatepopup.button.leave": "Leave",
          "linechrome.chat.desc.unsupportedmessage":
            "This message can't be viewed on LINE Chrome. Check it out on the mobile version.",
          "linechrome.chat.desc.unsupportedstickers":
            "This sticker isn't available on LINE Chrome. \nCheck it out on the mobile version.",
          "linechrome.chat.toast.nofolders": "Unable to share folder.",
          "linechrome.chat.toast.supportedlanguage":
            "LINE Chrome supports the translated language. Change your language in Settings.",
          "linechrome.end.desc.endline": "End LINE Chrome?",
          "linechrome.main.button.mute1": "Mute for 1 hour",
          "linechrome.main.button.mute2": "Mute for 2 hours",
          "linechrome.main.button.mute24": "Mute for 24 hours",
          "linechrome.main.button.mute30": "Mute for 30 minutes",
          "linechrome.main.desc.unmutehour": "Unmutes in %1 hours",
          "linechrome.main.desc.unmuteminute": "Unmutes in %1 minutes",
          "linechrome.main.desc.unmutesecond.one": "Unmutes in %1 second",
          "linechrome.main.desc.unmutesecond.other": "Unmutes in %1 seconds",
          "linemusic.playlist": "Playlist",
          "linemusic.title": "LINE MUSIC",
          "linemusic.topic": "Topic",
          "lockscreen.kickout.accountError":
            "You have been locked out of LINE because you entered the wrong password too many times.",
          "lockscreen.lockscreen.text": "Your LINE is currently locked. ",
          "lockscreen.msg.alert.oncalling":
            "Lock your LINE?\nYour current call will be disconnected.",
          "lockscreen.msg.unlock.description":
            "Lock LINE?\nYour password will be required to unlock.",
          "lockscreen.msg.unlockAuto.description":
            "Lock LINE when your computer is idle?\nYour password will be required to unlock.",
          "lockscreen.password.fail": "Invalid password. Please try again.",
          "lockscreen.password.text":
            "Please enter your LINE password to unlock.",
          "lockscreen.password.unlock.btn": "Unlock",
          "login.btn.emailQRcode.login": "Email/QR code login >",
          "login.btn.login": "Log in",
          "login.btn.signUp": "Sign up",
          "login.emailLogin.identity.credential.error":
            "Invalid email address.\nPlease enter your email correctly.",
          "login.emailLogin.label.error.accountError":
            "Email address or password is either incorrect or not registered with LINE.",
          "login.emailLogin.label.error.inputError":
            "Please enter your email address and password.",
          "login.emailLogin.link.changeToNaverLogin": "NAVER ID Sign In",
          "login.emailLogin.link.findPassword": "Forgot your password?",
          "login.emailLogin.placeHolder.email": "Email address",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "Email or phone number",
          "login.emailLogin.placeHolder.password": "Password",
          "login.emailLogin.popup.findPassword":
            'You can change your email address and password via Settings > Account > "Email registration" in your mobile LINE app.\n\n\n\n\n',
          "login.error.auth.failed":
            "Unable to automatically log in because you're already logged in from another PC or your login has expired.\n\n ",
          "login.label.certificate.not.vaild":
            "Unable to verify security certificate.\nPlease set the correct date on your PC.",
          "login.label.doingLogin": "Logging in...",
          "login.label.error.auth.failed.anotherPC":
            "Unable to automatically log in because you're already logged in from another PC.",
          "login.label.error.auth.failed.loginExpired":
            "Unable to automatically log in because your login has expired.",
          "login.label.error.dberror":
            "LINE detected an error and was able to recover.\nPlease log in again.",
          "login.label.error.dormant.account":
            "Log in using the email address you registered on the mobile version of LINE and verify your account.",
          "login.label.error.extraError":
            "Unable to log in at this time. Please try again in a moment.",
          "login.label.error.keyboardError":
            "Please change your keyboard to English.",
          "login.label.error.networkError":
            "Unable to log in due to network issues.\nPlease check your connection and try again.",
          "login.label.error.pinCode":
            "The verification code is incorrect. Please try again with the accurate code.",
          "login.label.error.schemeError":
            "Please log in to LINE and try again.",
          "login.label.error.serverError":
            "A server error occurred. Please try again later.",
          "login.label.error.serverMaintenance":
            "The server is currently under maintenance. Please try again later.",
          "login.label.error.verification.timeout":
            "Your verification code has expired.\nPlease request another code.",
          "login.label.searching.network":
            "Searching for optimal network connection...",
          "login.loginwithsmartphone.tooltip":
            "Log in without a password by verifying on your phone.",
          "login.naverLogin.checkbox.keepLoginStatus":
            "Log me in automatically",
          "login.naverLogin.checkbox.startUpWin":
            "Run LINE when Windows starts",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "Unable to log in.\nPlease check your proxy settings and try again.",
          "login.naverLogin.link.changeToEmailLogin":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.naverLogin.link.findIDPassword1":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.link.findIDPassword2":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.placeHolder.naverID": "Naver ID",
          "login.naverLogin.placeHolder.password": "Password",
          "login.naverLogin.url.ID":
            "https://nid.naver.com/user/help.nhn?todo=idinquiry",
          "login.naverLogin.url.pass":
            "https://nid.naver.com/user/help.nhn?todo=pwinquiry",
          "login.otp.link.title": "OTP \ub3c4\uc6c0\ub9d0",
          "login.otp.link.url":
            "https://help.naver.com/support/contents/contents.nhn?serviceNo=532&categoryNo=1533",
          "login.password.ascii.error":
            "Please change your keyboard language to English.",
          "login.phoneNumberLogin.alert.info":
            "Only users who signed up via the desktop version of LINE can log in with a phone number.",
          "login.phoneNumberLogin.alert.networkerror":
            "Your request hasn't been processed due to a connection error.\nPlease try again.",
          "login.phoneNumberLogin.identity.credential.error":
            "Invalid phone number. Please enter a valid phone number.",
          "login.phoneNumberLogin.label.country": "Select country",
          "login.phoneNumberLogin.label.error.accountError":
            "The phone number or password you entered doesn't exist or is invalid.",
          "login.phoneNumberLogin.label.error.inputError":
            "Please enter your phone number and password.",
          "login.phoneNumberLogin.placeHolder.password": "Password",
          "login.phoneNumberLogin.placeHolder.phone": "Phone number",
          "login.phoneNumberLogin.placeHolder.search": "Search",
          "login.phoneNumberLogin.verification.desc":
            "As a security measure, you must verify your account when logging in via a PC for the first time.\nPlease enter the verification code sent via text message. If you did not receive the verification code, please try the following.",
          "login.popup.abuse":
            "You've been locked out of LINE due to too many incorrect login attempts. Log in with your QR code.",
          "login.popup.error.diskFull":
            "You have less than 1 GB of disk space remaining.\nSome LINE features may not work.",
          "login.popup.kickout.r0": "logged in from another PC",
          "login.popup.kickout.r1": "left LINE idle for a while",
          "login.popup.kickout.r2": "logged out using the mobile app",
          "login.popup.kickout.r3": "deleted your LINE account",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5": "Can't use the app due to maintenance",
          "login.popup.kickout.subtitle":
            "You will be logged out when you have:",
          "login.popup.kickout.title": "You are logged out of LINE.",
          "login.qrLogin.desc.error.expired":
            "Your QR code has expired.\nClick the refresh icon to generate a new code.",
          "login.qrLogin.desc.error.network":
            "Unable to load your QR code due to a network error.\nPlease check your connection and try again.",
          "login.qrLogin.desc.howto":
            "To scan your QR code, open LINE on your mobile device and tap the QR code icon in the search box.",
          "login.qrLogin.title": "QR code login",
          "login.register.already": "LINE user login",
          "login.register.downloadLink": "Download mobile LINE app >>",
          "login.register.help.desc":
            "Register your email address on the mobile version of LINE to use the desktop version.\n",
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
          "login.register.newmember": "Sign up",
          "login.registration.password.reset": "Reset password",
          "login.simpleLogin.btn.updateQrCode": "Update QR code",
          "login.simpleLogin.label.desc.normal":
            'On your mobile LINE app go to More > "Add friends" > "QR code" and scan the QR code.\nThis QR code can only be used for login purposes.',
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "Once the QR code is updated,\xa0you can't update it again for a while.\n",
          "login.simpleLogin.label.error.qrcodeExpired":
            "This QR code is no longer valid. Please update the QR code.",
          "login.simpleLogin.link.howto": "How to log in with your QR code",
          "login.tab.emailLogin": "Email login",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin": "Phone number login >",
          "login.tab.phoneNumberLogin.title": "Phone number login",
          "login.tab.simpleLogin": "QR code login",
          "loginHelp.email.image.0": "images/en-US/01_main.png",
          "loginHelp.email.image.1": "images/en-US/02_email.png",
          "loginHelp.email.image.registration":
            "image://login/en-US/03_email.png",
          "loginHelp.emailLogin.label.step1":
            "Go to Settings > Account in the LINE app.",
          "loginHelp.emailLogin.label.step2":
            'Register your email by going to "Email address" in the Account menu.',
          "loginHelp.emailLogin.label.tab.mobile":
            "Signed up on the mobile version",
          "loginHelp.emailLogin.label.tab.pc":
            "Signed up on the desktop version",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "Email login is only available if you have registered your email address. To register your email, go to Settings > Basic > Register email.\n",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "Phone number login and email login methods share the same password.\nPlease enter your email address followed by the password for your phone number login.",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "If you have not registered your email address",
          "loginHelp.emailLogin.label.tab.pc.title2":
            "If you have registered your email address",
          "loginHelp.emailLogin.label.title": "Email login help",
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
          "loginHelp.qrcode.image.0": "images/en-US/03_qr01.png",
          "loginHelp.qrcode.image.1": "images/en-US/04_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            'In your LINE app, go to More > "Add friends" > "QR code" and scan the QR code.',
          "loginHelp.qrcodeLogin.label.step2":
            'After scanning, tap the "Log in" button displayed in your LINE app to log in to the desktop version.',
          "loginHelp.qrcodeLogin.label.title":
            "How to log in with your QR code",
          "loginHelp.qrcodeLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.qrcodeLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "markdown.input.context.menu.bold": "Bold",
          "markdown.input.context.menu.codeblock": "Text block",
          "markdown.input.context.menu.italic": "Italic",
          "markdown.input.context.menu.strikethrough": "Strikethrough",
          "markdown.input.context.menu.wordblock": "Line block",
          "markdown.input.guideline.bold": "*Bold*",
          "markdown.input.guideline.codeblock": "```Code block```",
          "markdown.input.guideline.italic": "_Italic_",
          "markdown.input.guideline.strikethrough": "~Strikethrough~",
          "markdown.input.guideline.wordblock": "`Inline code`",
          "markdown.input.menu.help": "About text formatting",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "You need to install DirectX 9.0c in order to play this video.\nInstall it now? ",
          "media.msg.err.expired":
            "Unable to play this video because its storage period has expired.",
          "media.msg.err.network":
            "Unable to play due to a network or server error.\nPlease try again.",
          "media.msg.err.transient":
            "Unable to play due to a temporary error.\nPlease try again.",
          "media.msg.tooltip.close": "Close",
          "media.msg.tooltip.minimize": "Minimize",
          "media.msg.tooltip.pause": "Pause",
          "media.msg.tooltip.play": "Playback",
          "media.msg.tooltip.playspeed": "Speed",
          "media.msg.tooltip.stop": "Stop",
          "media.msg.tooltip.volume": "Volume",
          "media.msg.tooltip.volume1": "Volume",
          "media.video.full.screen.out": "Press Esc to exit full screen.",
          "media.video.replay": "Replay",
          "meeting.popup.end.body": "Leave this meeting?",
          "meeting.popup.end.button": "Leave",
          "meeting.tooltip.end.call": "Leave meeting",
          "menu.menubar.allNotification.off": "Mute all notifications",
          "menu.menubar.allNotification.on": "Unmute all notifications",
          "menu.menubar.friend.addFriend": "Add friends",
          "menu.menubar.friend.makeGroup": "Create group",
          "menu.menubar.friend.title": "Friends",
          "menu.menubar.help.lineHelp": "LINE Help",
          "menu.menubar.help.title": "Help",
          "menu.menubar.keepmemo": "Keep Memo",
          "menu.menubar.line.about": "About LINE",
          "menu.menubar.line.exit": "Quit",
          "menu.menubar.line.hideLine": "Hide LINE",
          "menu.menubar.line.hideOthers": "Hide others",
          "menu.menubar.line.setting": "Settings",
          "menu.menubar.line.showAll": "Show all",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "Chats",
          "menu.menubar.view.friend": "Friends",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "My profile",
          "menu.menubar.view.myhome": "My Home",
          "menu.menubar.view.openchat": "OpenChat",
          "menu.menubar.view.services": "Services",
          "menu.menubar.view.title": "View",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll": "Move all to top",
          "menu.menubar.window.maximize": "Maximize",
          "menu.menubar.window.minimize": "Minimize",
          "menu.menubar.window.title": "Windows",
          "menu.setting.lockscreen": "Lock mode",
          "menu.toast.allNotification.off": "Unmuted",
          "menu.toast.allNotification.on": "Muted",
          "menu.tray.about": "About LINE",
          "menu.tray.balloon.login": "You are logged into LINE",
          "menu.tray.balloon.logout": "You are logged out of LINE.",
          "menu.tray.check.update": "Check for updates",
          "menu.tray.exit": "Quit",
          "menu.tray.keepmemo": "Keep Memo",
          "menu.tray.login": "Log in",
          "menu.tray.logout": "Log out",
          "menu.tray.setting": "Settings",
          "menu.tray.showBuddyList": "Friends",
          "message.context.background": "Set as chat wallpaper",
          "message.context.cancel.imageselect": "Deselect photo",
          "message.context.imageselect": "Select photo",
          "message.delete.confirm":
            "The selected messages will be deleted from your device only. They won't be deleted from your friends' devices.",
          "message.error.invalidfile": "Update files are corrupt.",
          "message.error.opensetup": "Unable to open update files.",
          "message.error.opensetup.codesign":
            "Unable to use update file because it's corrupted.",
          "message.error.update": "Update incomplete.",
          "message.error.updateurl": "Unable to obtain update URL.",
          "msgbox.alert.font.exist": "This font is already applied.",
          "msgbox.alert.nospace":
            "Insufficient free space on your device. Free up space by deleting apps, photos, or videos you no longer need.",
          "msgbox.alert.resolution.apply":
            "LINE needs to restart to adjust to the new screen resolution. Restart now?",
          "msgbox.btn.block": "Block",
          "msgbox.btn.buddy.title": "See added friend",
          "msgbox.btn.cancel.title": "Cancel",
          "msgbox.btn.cancelInvite.no": "No",
          "msgbox.btn.cancelInvite.yes": "Yes",
          "msgbox.btn.close.title": "Close",
          "msgbox.btn.delete": "Delete",
          "msgbox.btn.download.title": "Download",
          "msgbox.btn.fileOpen": "Open file",
          "msgbox.btn.gotosettings": "Settings",
          "msgbox.btn.hide": "Hide",
          "msgbox.btn.install.title": "Download",
          "msgbox.btn.later.title": "Later",
          "msgbox.btn.leave.1.n": "Leave",
          "msgbox.btn.leave.group": "Leave",
          "msgbox.btn.lock.enable": "Lock",
          "msgbox.btn.lock.start": "Lock",
          "msgbox.btn.no.title": "No",
          "msgbox.btn.nocancel.title": "Cancel",
          "msgbox.btn.ok.title": "OK",
          "msgbox.btn.post.title": "Post",
          "msgbox.btn.qrcode.title": "How to log in with your QR code",
          "msgbox.btn.quit.title": "Quit",
          "msgbox.btn.remove": "Remove",
          "msgbox.btn.restart": "Restart",
          "msgbox.btn.retry.title": "Retry",
          "msgbox.btn.send": "Send",
          "msgbox.btn.sendkey.title": "Change",
          "msgbox.btn.sendshare": "Send",
          "msgbox.btn.unsend": "Unsend",
          "msgbox.btn.update.title": "Update now",
          "msgbox.btn.use": "Agree",
          "msgbox.btn.yes.title": "Yes",
          "msgbox.btn.yescontinue.title": "Continue",
          "msgbox.btn.yesleave.title": "Leave",
          "msgbox.desc.seemore": "Learn more",
          "msgbox.error.request.popup.desc":
            "A temporary error occurred. Please try again later.",
          "needqr.login.button.label": "QR code login",
          "needqr.title.content1":
            "To prevent unauthorized access, you need to log in via QR code when logging in for the first time on a PC.\n",
          "needqr.title.label": "Please log in via QR Code.",
          "note.save.comfirm.desc": "Save to [%1]'s note?",
          "notificationcenter.timeslot.earlier": "Older",
          "notificationcenter.timeslot.recent": "Recent",
          "notificationcenter.title": "Notifications",
          "nx.textbox.copy": "Copy",
          "nx.textbox.paste": "Paste",
          "nx.textbox.selectall": "Select all",
          "oa.profile.desc.region.notselected": "Unspecified",
          "oa.profile.investmentfraud": "Watch out for fraud using LINE.",
          "ocr.policy.agree.btn": "Agree",
          "ocr.policy.disagree.btn": "Decline",
          "ocr.progress.desc.scan": "Reading text...",
          "ocr.progress.desc.translate": "Translating...",
          "openchat.allthreads.desc.nothreads":
            "All threads created in this OpenChat will show up here.",
          "openchat.allthreads.title.nothreads":
            "No threads in this OpenChat yet.",
          "openchat.chatlist.popup.deletechat":
            "Delete this chat from your chat list? It won't be deleted from your OpenChat list.",
          "openchat.chatlist.popup.hidechat":
            "Hide this chat from your chat list? It will still be shown in your OpenChat list.",
          "openchat.favoritethreads.title.nothreads":
            "No favorite threads yet.",
          "openchat.hidemessages.desc.hidethismember":
            "Hide this member's messages from now on? They will be hidden in this OpenChat and its subchats, and previous messages will still be shown.",
          "openchat.hidemessages.desc.maximumhide":
            "You reached the limit of members whose messages you can hide. Try again after unhiding someone else's messages from their profile.",
          "openchat.hidemessages.desc.messageshidden":
            "Messages from this member are now hidden. You can unhide them from their profile.",
          "openchat.join.button.requestjoin": "Request to join",
          "openchat.linkpopup.desc.donotshowformonth":
            "Don't show again for a month",
          "openchat.readallthreads.desc.markallasread":
            "Mark all thread messages as read?",
          "openchat.settings.desc.mentioneveryone": "Mention everyone (@All)",
          "openchat.thread.desc.fewerthan10": "Fewer than 10 messages",
          "openchat.thread.desc.sendafiletothread": "Send files to this thread",
          "openchat.thread.desc.updateline": "Update LINE to see this message.",
          "openchat.thread.placeholder.expired":
            "Unable to add a message to an expired thread.",
          "openchat.thread.tooltip.yourthreadicon":
            "See all the threads in this OpenChat as well as your favorite ones.",
          "openchat.threadpopup.desc.expired":
            "Unable to add or remove this thread because it expired.",
          "openchat.threadpopup.desc.expirederror": "This thread has expired.",
          "openchat.threadpopup.desc.unsupported":
            "A file format not supported in threads is included.",
          "openchat.threads.button.readall": "Read all",
          "openchat.threads.button.seemessages": "See messages",
          "openchat.threads.tab.all": "All",
          "openchat.threads.tab.favorites": "Favorites",
          "openchat.threads.title.threads": "Threads",
          "openchat.threads.tooltip.messagewontsend":
            "Messages in the thread won't be sent to the chat.",
          "openchat.threadspopup.button.cancel": "Cancel",
          "openchat.threadspopup.button.delete": "Delete",
          "openchat.threadspopup.button.unsend": "Unsend",
          "openchat.threadspopup.desc.deleterootmessage":
            "Deleting this message will delete the thread for all members.",
          "openchat.threadspopup.desc.unsendrootmessage":
            "Unsending the message will delete the thread for all members.",
          "openchat.threadspopup.title.deleterootmessage":
            "Delete this message?",
          "openchat.threadspopup.title.unsendrootmessage":
            "Unsend this message?",
          "openchat.unhidemessages.desc.unhidden":
            "You can see messages they send from now on.",
          "openchat.unhidemessages.desc.unhide":
            "Unhide this member's messages from now on? Previously hidden messages will not be shown.",
          "openchat.userprofile.button.hidemessages": "Hide messages",
          "openchat.userprofile.button.unhidemessages": "Unhide messages",
          "openchat.yourthread.button.seemessages": "See messages",
          "openchat.yourthread.desc.fewerthan10": "Fewer than 10 messages",
          "openchat.yourthreads.button.readmore": "Read more about threads",
          "openchat.yourthreads.desc.newthreadmessages": "New thread messages",
          "openchat.yourthreads.desc.photosent": "Photo sent.",
          "openchat.yourthreads.desc.stickersent": "Sticker sent.",
          "openchat.yourthreads.desc.videosent": "Video sent.",
          "openchat.yourthreads.desc.vmsent": "Voice message sent.",
          "openchat.yourthreads.title.messageunavailable":
            "Message unavailable",
          "openchat.yourthreadspopup.button.ok": "OK",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "This thread has been deleted.",
          "os.msgbox.btn.gotosettings": "System Preferences",
          "pl.square.setting.tooltip":
            "You can specify who can create and delete polls in the square.",
          "poll.create.title": "Create poll",
          "poll.edit.title": "Edit poll",
          "poll.main.title": "Poll",
          "poll.ongoing.title": "Vote",
          "poll.result.title": "Results",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry": "Download failed. Please try again.",
          "power.label.tootip": "Close LINE",
          "profile.btn.chat.tooltip": "Chat",
          "profile.btn.home.tooltip": "Home",
          "profile.btn.recommend.tooltip": "Recommend",
          "profile.button.investmentfraudwarning":
            "Watch out for fraud using LINE.",
          "profile.delete": "Delete profile",
          "profile.desc.birthday": "MMM d",
          "profile.desc.onediting":
            "Leave this screen? Unsaved changes will be discarded.",
          "profile.desc.timelineposts": "LINE VOOM posts",
          "profile.edit.background.color": "Select background color",
          "profile.edit.font.color": "Select font color",
          "profile.edit.placeholder": "Enter text",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "Name set by friend: %1",
          "profile.popup.report": "Report",
          "profile.seemoremenu.button.block": "Block",
          "profile.select.capture": "Capture screen",
          "profile.select.default": "Select from profile",
          "profile.select.local": "Select from computer",
          "profile.select.text": "Text profile",
          "profile.socialprofile.menutitle.editprofile": "Profile settings",
          "registration.btn.label.resendPin": "Resend verification code",
          "registration.btn.message.resendPin": "Verification code resent.",
          "registration.check.age.ageVerification.body":
            'You must verify your age to use this feature.\nTo verify your age, go to Settings > "Age verification" on the mobile version of LINE.',
          "registration.check.age.ageVerification.title": "Age verification",
          "registration.check.age.ageunder.body":
            "This feature is only available to users verified to be at least 18 years of age.",
          "registration.check.age.error.loadUrl":
            "Connection error. Please check your connection and try again.",
          "registration.check.age.error.retrieveRequest":
            "An error occurred while verifying your age. Please try again.",
          "registration.check.age.underAge":
            "You need to verify that you are 18 years or older on the mobile version of LINE to add friends using search. You can still add friends by scanning their QR code on your mobile device.",
          "registration.code.phone.call": "Call me instead",
          "registration.code.phone.guide":
            "You will receive an automated call that will tell you your verification code.\nPlease note the call may come from an unlisted number, and you may incur charges for the call depending on your mobile phone plan.\n\n",
          "registration.code.sms.resent.guide":
            "You can request a new code in %1 minute(s) and %2 second(s).\n",
          "registration.common.next": "Next",
          "registration.common.underIE8.alert":
            "Signing up requires Internet Explorer 8 or above.\nPlease update Internet Explorer or sign up using your mobile device.",
          "reply.doubleclick.toast": "Double-click a message to reply. ",
          "reply.error.toast": "Unable to find original message.",
          "reply.goto.replied": "Go back to reply",
          "reply.no.original.message": "(Original message unavailable)",
          "reply.unknown.user": "Unknown user",
          "report.btn.agreeandsend": "Agree & send",
          "report.btn.agreeandsend.thpdpa": "Acknowledge and send",
          "report.confirm.groupinvitation":
            "Reporting a user who invited you to a group chat will share that chat's data with LINE.",
          "report.desc.reason": "Let us know what\u2019s going on.",
          "report.desc.title": "Report",
          "report.done": "Report sent.",
          "report.done.suggestBlock": "Report sent.\nBlock this user?",
          "report.done.suggestBlock.groupinvitation": "Block %1?",
          "report.note.subTitle": "Report this post.\n(Creator: %1)",
          "report.popupbutton.impersonation.decline": "Skip",
          "report.popupbutton.impersonation.proceed": "Proceed",
          "report.reason.Other": "Other",
          "report.reason.gender": "Sexual harassment",
          "report.reason.harrassment": "Other harassment",
          "report.reason.impersonation": "Impersonation",
          "report.reason.impersonation.inquirypopup":
            "Please consider providing us detailed information to help us investigate this case of impersonation by proceeding to our inquiry form and filling out the requested items.",
          "report.reason.scam": "Scam",
          "report.reason.spam": "Spam/Advertising",
          "requireinvite.popup.button.cancel": "Never mind",
          "requireinvite.popup.button.confirmon": "Disable",
          "requireinvite.popup.desc.onewaywarning":
            "This setting can't be turned off again.",
          "requireinvite.popup.title.onewaywarning":
            "Require new members to accept invites?",
          "requireinvite.toggle.desc":
            "New members must accept an invite to join the group.",
          "requireinvite.toggle.title": "Members must accept invite",
          "screen.desc.need.os.recordscreen":
            "Please grant LINE access to the Screen Recording feature to use screen capture and screen sharing during video calls.",
          "screenshare.desc.need.os.recordscreen":
            "Unable to share screen. Please grant LINE access to the Screen Recording feature.",
          "screenshare.ongoing.error":
            "This feature is not available when screen sharing.",
          "screenshare.ongoing.user": "Screen sharing in progress.",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "Clear all of your recent searches?",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "Enable recent searches?",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "Disable recent searches?",
          "search.defaultView.offSaveSearchKeyword": "Disable auto-save",
          "search.defaultView.onSaveSearchKeyword": "Enable auto-save",
          "search.defaultView.recentSearchKeyword": "Recent searches",
          "search.defaultView.recentSearchKeywordEmpty":
            "You don't have any recent searches.",
          "search.defaultView.removeAllRecentSearchKeywords": "Clear all",
          "search.defaultView.saveSearchKeywordOff":
            "Recent searches are disabled.",
          "select.video.error.ratio":
            "This aspect ratio can\u2019t be used for profile videos.",
          "service.download.done.popup.desc": "Download complete.",
          "service.download.inprogress.popup.desc": "Downloading\n%1...",
          "service.install.device.done.popup.desc": "Installation complete.",
          "service.install.device.popup.desc": "Installing\n%1...",
          "service.install.popup.desc":
            "You need to install %2 to use the %1 feature. Download the installation file?",
          "setting.advancedSetting": "Advanced settings",
          "setting.advancedSetting.proxy.apply": "Apply",
          "setting.advancedSetting.proxy.apply.disabled":
            "Proxy settings disabled.",
          "setting.advancedSetting.proxy.apply.enabled":
            "Proxy settings enabled.",
          "setting.advancedSetting.proxy.check": "Check proxy",
          "setting.advancedSetting.proxy.complete": "Proxy server available.",
          "setting.advancedSetting.proxy.connect.check":
            "Testing connection via proxy server...",
          "setting.advancedSetting.proxy.fail":
            "Unable to connect via proxy.\nPlease check your proxy settings and try again.",
          "setting.advancedSetting.proxy.fail.protocol":
            "Proxy protocol error: %1",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "Unable to verify user.",
          "setting.advancedSetting.proxy.host": "Host",
          "setting.advancedSetting.proxy.port": "Port",
          "setting.advancedSetting.proxy.protocol": "Protocol",
          "setting.advancedSetting.proxy.protocol.check":
            "Checking protocol...",
          "setting.advancedSetting.proxy.responseTime": "(Latency: %1 ms)",
          "setting.advancedSetting.proxy.server": "Server",
          "setting.advancedSetting.proxy.server.check":
            "Checking for proxy server...",
          "setting.advancedSetting.proxy.title": "Proxy",
          "setting.advancedSetting.proxy.use": "Enable proxy server",
          "setting.advancedSetting.proxy.verification":
            "Enable proxy verification",
          "setting.advancedSetting.proxy.verification.id": "Username",
          "setting.advancedSetting.proxy.verification.pw": "Password",
          "setting.advancedSetting.sync": "Sync",
          "setting.advancedSetting.sync.completed": "Data synced.",
          "setting.advancedSetting.sync.desc":
            "Sync your friends and chat lists to keep them up to date.",
          "setting.advancedSetting.sync.error.interval":
            "LINE syncs your data every %1 minutes.\nPlease try again later.",
          "setting.advancedSetting.sync.error.network":
            "Sync is unavailable due to a network error.\nPlease check your network connection.",
          "setting.advancedSetting.sync.inprogress": "Syncing...\nPlease wait.",
          "setting.advancedSetting.sync.time": "MMM d, yyyy h:mm %1",
          "setting.advancedSetting.sync.title": "Sync data",
          "setting.alarm.name": "Notification tone %1",
          "setting.basic.font.apply.alert":
            "Your font changes will be applied after you restart LINE. Restart now?",
          "setting.basic.heading.language": "Language",
          "setting.basic.language.apply.alert":
            "Please restart LINE to change language settings. Restart now?",
          "setting.basic.language.apply.desc":
            "Changes will be applied upon restart.",
          "setting.basic.language.apply.no": "Restart later",
          "setting.basic.language.apply.yes": "Restart now",
          "setting.btn.select.folder": "Select",
          "setting.btn.submit": "OK",
          "setting.call.blur": "Background effect",
          "setting.call.call.incomingnoti":
            "Show notifications for incoming calls",
          "setting.call.camera": "Camera",
          "setting.call.defaultMike": "Use system settings",
          "setting.call.defaultSpeaker": "Use system settings",
          "setting.call.desc.deviceloading": "Loading devices...",
          "setting.call.ducking": "Reduce sound volume of other apps",
          "setting.call.grouphd": "HD group video call",
          "setting.call.grouphd.desc":
            "Make HD group video calls with better image quality at a cost of higher CPU and RAM usage.",
          "setting.call.grouphd.desc.forwin":
            "Make HD group video calls using device's video codec. Results in better image quality at a cost of higher CPU and RAM usage.",
          "setting.call.handsfreebtinfo.desc":
            "If you're having trouble with Bluetooth devices that are recognized both as a speaker and a microphone, try setting both your microphone and speaker to the same device.",
          "setting.call.label.duckingGuide":
            "Reduce the volume of other applications' sound during calls by adjusting the slider. Setting the slider to 100% will mute other applications.",
          "setting.call.mic.desc.noisecancelinglight":
            "Remove noises like a computer fan or background music.",
          "setting.call.mic.desc.noisecancelingstrong":
            "Remove noises like dog barking or keyboard noises.",
          "setting.call.mic.echocancelling": "Echo cancellation",
          "setting.call.mic.echocancelling.desc":
            "This removes any echo caused by your audio devices so that others in the call can hear you clearly. Turn off this option when sharing sound from your computer.",
          "setting.call.mic.echocancelling.mouseovertooltip":
            'Select "Optimized" for the recommended cancellation level. Select "Maximized" to remove echo more effectively, but note that your audio may cut out when others speak at the same time as you.',
          "setting.call.mic.echocancelling.option1": "Optimized",
          "setting.call.mic.echocancelling.option2": "Maximized",
          "setting.call.mic.menu.noisecancelinglight": "Light",
          "setting.call.mic.menu.noisecancelingstrong": "Strong",
          "setting.call.mic.noisecanceling": "Noise cancellation",
          "setting.call.mic.noisecanceling.checkbox":
            "Enable noise cancellation",
          "setting.call.mic.noisecanceling.desc":
            "Suppress background noise on your side of the call so people can hear you better.",
          "setting.call.mike": "Microphone",
          "setting.call.mike.autoVolume": "Auto-adjust volume",
          "setting.call.msg.noCamera":
            "No camera connected.\nPlease check the device's connection and try again.",
          "setting.call.msg.noMike":
            "No microphone connected.\nPlease check the device's connection and try again.",
          "setting.call.msg.noSpeaker":
            "No speaker connected.\nPlease check the device's connection and try again.",
          "setting.call.noDevice": "No device",
          "setting.call.speaker": "Speaker",
          "setting.call.videocall": "Video",
          "setting.call.videocall.HWvideocodec": "Use device's video codec",
          "setting.call.videocall.HWvideocodec.desc":
            "Use device's internal video codec to prevent excessive battery drain and overheating. Turn off this option if you have any issues with video calls, as some devices may not properly support this feature.",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "Your change will be applied from the next call. To apply the change now, restart the call.",
          "setting.call.videocall.dynamicspeaking":
            "Always show the current speaker",
          "setting.call.videocall.dynamicspeaking.desc":
            "Automatically display the video of speaking participants in the larger focus screen in focus view, or display their thumbnail video on the first page in grid view.",
          "setting.call.videocall.gridviewmaxdisplay":
            "Display up to 49 participants in grid view",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "Show up to 49 thumbnails of participants at a time in grid view.",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[Up to 25 thumbnails are supported on this device. See <a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">Help</a> for more details.]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "Mute notifications while screen sharing in full screen mode",
          "setting.call.videocall.showpreview":
            "Show camera preview before joining a video call",
          "setting.call.voicesettings": "Voice",
          "setting.call.youtube.clipboard":
            "Paste links from clipboard for sharing YouTube videos",
          "setting.call.youtube.clipboard.checkbox": "Allow clipboard access",
          "setting.call.youtube.clipboard.desc":
            "This will automatically paste the YouTube video link you copied to the browser when selecting a YouTube video to share.",
          "setting.chats.deletedata.chatHisotry.btn.all": "All devices",
          "setting.chats.deletedata.chatHisotry.btn.onlypc": "This device only",
          "setting.chats.deletedata.chatHisotry.desc":
            "Select where you want to delete your chat history from. This can't be undone.",
          "setting.chats.deletedata.chatHisotry.title": "Chat history ",
          "setting.default.font.label": "Default font",
          "setting.desc.removeLocalChat":
            "Your chat history will be permanently deleted.",
          "setting.hiddenchat.empty": "You haven't hidden any chats.",
          "setting.hiddenchat.title": "Hidden chats",
          "setting.keep.alert.deleteAll":
            "Delete everything from Keep? This will not affect Keep Memo.",
          "setting.keep.btn.deleteAll": "Delete all saved items",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "This only includes the storage you're using for Keep, but not Keep Memo.",
          "setting.keep.desc.photos": "Photos",
          "setting.keep.desc.text": "Text",
          "setting.keep.desc.videos": "Videos",
          "setting.keyword.add.error.character":
            "<![CDATA[Keywords cannot contain: >, <, or spaces.]]>",
          "setting.keyword.add.error.characterDup":
            "You have already added this keyword.",
          "setting.keyword.add.error.characterSize":
            "Keywords must be at least two characters long.",
          "setting.keyword.added": "Added keywords",
          "setting.keyword.btn.add": "Add keyword",
          "setting.keyword.desc":
            "Get alerts for unread messages with these keywords.",
          "setting.keyword.title": "Keyword alerts",
          "setting.label.basic.alarmMode": "Notification method",
          "setting.label.basic.alarmMode.showAlarm": "Pop-up notification",
          "setting.label.basic.alarmMode.soundAlarm": "Sound notification",
          "setting.label.basic.alarmRule": "Notification rules",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "Send notifications for group invitations and new members joining a group.",
          "setting.label.basic.alarmRule.mention":
            "Send notifications whenever someone mentions me",
          "setting.label.basic.alarmRule.newChatAlarm":
            "Send notifications for new messages",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "Mute notifications when in full screen mode",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "Turn off mobile notifications when logged in to the desktop version.\n(Notifications will still be sent while LINE is locked or after 3 minutes of inactivity.)",
          "setting.label.basic.alarmRule.note": "Send notifications for notes",
          "setting.label.basic.alarmRule.videocal":
            "Disable sound notifications during voice and video calls",
          "setting.label.basic.alarmSound": "Notification sound",
          "setting.label.basic.alarmtype": "Notification style",
          "setting.label.basic.alarmtype.basic": "Default",
          "setting.label.basic.font": "Chat font setting",
          "setting.label.basic.font.desc":
            "Font settings will be applied to chats only.",
          "setting.label.basic.font.extraLarge": "Extra large",
          "setting.label.basic.font.extraLarge.size": "16",
          "setting.label.basic.font.large": "Large",
          "setting.label.basic.font.large.size": "14",
          "setting.label.basic.font.name": "Font",
          "setting.label.basic.font.normal": "Normal",
          "setting.label.basic.font.normal.size": "12",
          "setting.label.basic.font.normal.size.mac": "13",
          "setting.label.basic.font.size": "Size",
          "setting.label.basic.font.small": "Small",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key": "Send key",
          "setting.label.private.profile.propertyName.id":
            "(Your ID will not be disclosed.)",
          "setting.label.title": "Settings",
          "setting.lockscreen": "Lock mode",
          "setting.lockscreen.time.15minutes": "15 minutes",
          "setting.lockscreen.time.1hour": "1 hour",
          "setting.lockscreen.time.30minutes": "30 minutes",
          "setting.lockscreen.time.3hours": "3 hours",
          "setting.lockscreen.time.3minutes": "3 minutes",
          "setting.lockscreen.time.5minutes": "5 minutes",
          "setting.lockscreen.turn.on":
            "Lock LINE when left idle for longer than",
          "setting.maintab.alarm": "Notifications",
          "setting.maintab.basicSetting": "Basic",
          "setting.maintab.call": "Calls",
          "setting.maintab.chat": "Chats",
          "setting.maintab.contact": "Friends",
          "setting.maintab.privacy": "Privacy",
          "setting.maintab.profile": "Profile",
          "setting.maintab.talk": "Chats & calls",
          "setting.messengerView.allinone.desc":
            "Chats are shown on the right.",
          "setting.messengerView.allinone.label": "Single-body",
          "setting.messengerView.apply.alert":
            "If you change your chat viewing option, all open chat windows will be closed.\nContinue?\n",
          "setting.messengerView.label": "Chat viewing style",
          "setting.messengerView.seperate.desc":
            "Chats are shown in separate windows.",
          "setting.messengerView.seperate.label": "Separate windows",
          "setting.popup.private.emptyName":
            "Please enter at least one character.",
          "setting.popup.private.tooLongName":
            "Display names can't exceed 20 characters.",
          "setting.shorcut.chatfolder.move": "Move folder",
          "setting.shorcut.desc.chatfolder": "Chat folders",
          "setting.shorcut.list.previous.chat": "Go to previous chat",
          "setting.shorcut.list.search": "Search",
          "setting.shortcut.array.window": "Sort chats",
          "setting.shortcut.callnlive.audio": "Turn microphone on/off",
          "setting.shortcut.callnlive.video": "Turn camera on/off",
          "setting.shortcut.cancel.array.window": "Remove chat sorting",
          "setting.shortcut.capture.copy": "Copy",
          "setting.shortcut.capture.draw.straight":
            "Draw straight line, square, circle",
          "setting.shortcut.capture.fix": "Reposition captured screen",
          "setting.shortcut.capture.redo": "Redo",
          "setting.shortcut.capture.save": "Save",
          "setting.shortcut.capture.undo": "Undo",
          "setting.shortcut.chat.newline": "New line",
          "setting.shortcut.chat.open.keep": "Open Keep",
          "setting.shortcut.chat.screen.capture": "Capture screen",
          "setting.shortcut.close.window": "Close window",
          "setting.shortcut.lable": "Keyboard shortcuts",
          "setting.shortcut.list.basic": "Basic",
          "setting.shortcut.list.callnlive": "Calls",
          "setting.shortcut.list.chat": "Chat",
          "setting.shortcut.list.friend.chat": "Friends, chat list",
          "setting.shortcut.list.viewer": "Media viewer",
          "setting.shortcut.markdown.bold": "Bold",
          "setting.shortcut.markdown.codeblock": "Text block",
          "setting.shortcut.markdown.italic": "Italic",
          "setting.shortcut.markdown.strikethrough": "Strikethrough",
          "setting.shortcut.markdown.title": "Text formatting",
          "setting.shortcut.markdown.wordblock": "Line block",
          "setting.shortcut.min.window": "Minimize window",
          "setting.shortcut.move.add.friend": "Go to Add friends tab",
          "setting.shortcut.move.bottom": "Go to bottom of chat",
          "setting.shortcut.move.chat.list": "Go to Chats tab",
          "setting.shortcut.move.friend.list": "Go to Friends tab",
          "setting.shortcut.move.top": "Go to top of chat",
          "setting.shortcut.on.lock": "Enable lock mode",
          "setting.shortcut.open.keep": "Open Keep",
          "setting.shortcut.open.note": "Open Notes",
          "setting.shortcut.open.sticker": "Open sticker window",
          "setting.shortcut.open.tip": "Display shortcut tooltips",
          "setting.shortcut.open.window": "Open in new window",
          "setting.shortcut.photo.copy": "Copy file",
          "setting.shortcut.photo.save": "Save file",
          "setting.shortcut.screen.chapture": "Capture screen",
          "setting.shortcut.search": "Search",
          "setting.shortcut.send.file": "Send file",
          "setting.shortcut.timeline.comment": "Write comment",
          "setting.shortcut.timeline.like": "Like",
          "setting.shortcut.timeline.like.pick": "Choose expression",
          "setting.shortcut.tip":
            "Convenient keyboard shortcuts for everything in LINE.",
          "setting.shortcut.video.jump":
            "Seek forward/backward 5 seconds for videos",
          "setting.shortcut.videongif.stop": "Play/Pause",
          "setting.shortcut.viewer.fullscreen": "View in full screen",
          "setting.shortcut.volume.control": "Raise/lower volume for videos",
          "setting.shortcut.zoominout": "Enlarge/reduce image",
          "setting.tab.download.folder": "Download folder",
          "setting.tab.file.trans": "File",
          "setting.tab.login": "Login",
          "setting.tab.url.preview": "URL previews",
          "setting.tab.voip": "Call",
          "setting.talk.animation.gif": "Animated GIFs",
          "setting.talk.animation.gif.play": "Auto-play animated GIFs in chats",
          "setting.talk.backgroundSetting.apply":
            "The selected wallpaper will be applied to all chats.\nContinue?",
          "setting.talk.backgroundSetting.apply.allChats": "Apply to all chats",
          "setting.talk.backgroundSetting.detail":
            "Select the wallpaper that you want to apply to your chats (OpenChats are excluded).",
          "setting.talk.backgroundSetting.selected": "Select wallpaper",
          "setting.talk.backgroundSetting.title": "Chat Background",
          "setting.talk.heading.talk": "Chats",
          "setting.talk.photo.resolution.detail":
            "Photos larger than 20 MB can't be sent in their original resolution.",
          "setting.talk.photo.resolution.option.default": "Default",
          "setting.talk.photo.resolution.option.original": "Original  ",
          "setting.talk.photo.resolution.option.standard": "Standard",
          "setting.talk.photo.resolution.title": "Photo resolution",
          "setting.talk.theme.check.seasonal": "Snow effect",
          "setting.talk.theme.desc.seasonal": "Themes",
          "setting.theme.desc.darkmode.limitation":
            "Some screens are currently unavailable in dark mode.",
          "setting.theme.mode.dark": "Dark mode",
          "setting.theme.mode.light": "Light mode",
          "setting.theme.systemSetting": "Use system setting",
          "setting.theme.title": "Display mode",
          "setting.url.preview.desc":
            "Show thumbnails and preview site info for links shared in chat.",
          "setting.window.scaleRatio": "Screen size",
          "setting.window.scaleRatio.default": "Default display size",
          "settingAlarm.label.duration": "Duration",
          "settingAlarm.label.lucid": "Transparent",
          "settingAlarm.label.opacity": "Transparency",
          "settingAlarm.label.opaque": "Opaque",
          "settingAlarm.label.setAlarmWindow": "Alert settings",
          "settingAlarm.label.toastContent": "Details",
          "settingAlarm.label.toastPreview": "Show preview",
          "settingAlarm.label.unitSecond": "sec",
          "settingLogin.alert.autoLogin":
            "Automatic login is enabled. You can disable this feature in Settings.",
          "settingLogin.check.autoLogin": "Log me in automatically",
          "settingLogin.check.autoRunWin": "Run LINE when Windows starts",
          "settingPrivacy.btn.ublockBuddy": "Unblock",
          "settingPrivacy.call.blur.desc":
            "Drag the slider to adjust the intensity of the blurring effect during video calls.",
          "settingPrivacy.cleardata.cache.desc":
            "Your cached data will be deleted. Photos, videos, voice messages, or files won't be deleted.",
          "settingPrivacy.cleardata.cache.error":
            "Unable to delete some of your cached data. Please try again later.",
          "settingPrivacy.cleardata.cache.popup":
            "Your cached data will be deleted. Continue?",
          "settingPrivacy.label.allowCallAlarm.desc":
            "The same setting will be enabled for your mobile LINE app.",
          "settingPrivacy.label.allowCallAlarmPC": "Allow incoming calls",
          "settingPrivacy.label.blockAndDelete.desc":
            "Delete this account from your blocked accounts list? Note that their account will still be blocked. To add them as a friend again, search for their account by ID or phone number.",
          "settingPrivacy.label.blockBuddyList": "Blocked accounts",
          "settingPrivacy.label.blockBuddyListEmpty":
            "You haven't blocked any accounts.",
          "settingPrivacy.label.blocksquarememberlist":
            "Blocked members in OpenChat",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "You haven't blocked any members.",
          "settingPrivacy.label.buddySearchAllow": "Allow friends to search",
          "settingPrivacy.label.clearRecords": "Delete chat history",
          "settingPrivacy.label.cleardata": "Delete data",
          "settingPrivacy.label.cleardata.cache": "Cached data",
          "settingPrivacy.label.filterMessages":
            "Reject any messages not sent by your friends.",
          "settingPrivacy.label.filterMessages.title":
            "Block messages from non-friends",
          "settingPrivacy.label.hiddenBuddyList": "Hidden accounts",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "You haven't hidden any accounts.",
          "settingPrivacy.label.hideAndDelete.desc":
            "Delete this account from your hidden accounts list? Note that they will still be able to send you messages. To add them as a friend again, search for their account by ID or phone number.",
          "settingPrivacy.label.idSearchAllowYes": "Public ID",
          "settingPrivacy.label.title": "Privacy",
          "settingProfile.error.invalidData":
            "This display name can't be used.",
          "settingProfile.error.network":
            "Unable to process your request due to a temporary error.\nPlease try again.\n",
          "settingProfile.error.server":
            "Unable to process your request due to a temporary error.\nPlease try again.",
          "settingProfile.label.emailEmpty": "Not set",
          "settingProfile.label.modifyprofile": "Edit",
          "settingProfile.label.myInfo": "My info",
          "settingProfile.label.nickName": "Display name",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "The email address you are trying to register is too similar to your current password.\nPlease register a different email address.",
          "settingProfile.label.registerAcoount.mailAddress": "Email",
          "settingProfile.label.statusEmpty": "Not set",
          "settingProfile.label.statusMessage": "Status message",
          "settingProfile.label.userID": "LINE ID",
          "settingProfile.link.registerAcoount.mailAddress": "Register email >",
          "settingProfile.statusMessage.edit": "Enter a status message",
          "settingProfile.statusMessage.edit.failed":
            "Unable to save status message.",
          "settings.basic.number.edit": "Change phone number",
          "settings.delete.account": "Delete account",
          "settings.delete.account.btn": "Delete account",
          "settings.deleteAccount.confirm.desc":
            "If you delete your LINE account, your friend list and chat history will be permanently deleted. Are you sure you want to delete your LINE account?",
          "settings.deleteAccount.confirm.title":
            "Are you sure you want to delete your LINE account?",
          "settings.deleteAccount.success":
            "You have been logged out of LINE because your account was deleted.",
          "settings.label.tooltip": "Settings",
          "settings.privacy.publicUserID": "Allow others to add me by ID",
          "settings.privacy.publicUserID.description":
            "Enable this setting to allow others to add you as a friend by searching for your ID.",
          "settings.privacy.rejectStrangeMessages": "Filter messages",
          "settings.privacy.rejectStrangeMessages.description":
            "Enable this setting to reject messages not sent by your friends.",
          "settings.privacy.title": "Privacy",
          "settings.profile.myInfo.birthday": "Birthday",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "If you choose to show your birthday, we\u2019ll send you a special animation on your birthday that only you can see. Your friends will also be able to see your birthday from your profile, the Home and Chat tabs, and other places.",
          "settings.profile.myInfo.birthday.showMonthday": "Show my birthday",
          "showAllContents.File": "Files",
          "showAllContents.Iink": "Links",
          "showAllContents.ImageVideo": "Photos & videos",
          "showAllContents.file.noFile": "No files shared in this chat.",
          "showAllContents.moveMessage": "See in chat",
          "showAllContents.moveMessage.lastMessage": "See the newest message",
          "showAllContents.uploadMember": "Uploaded by %1 ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "Request(s) deleted.\n\n(Some requests were already handled by another admin.)",
          "square.abuse.textinput":
            "Your account has been restricted because of abusive actions linked to it.",
          "square.access.changephoto":
            "Change your profile photo for this OpenChat",
          "square.access.chat": "Create a new chat",
          "square.access.chat.image": "Change this chat's profile photo",
          "square.access.chatroomtohome": "Go to SQUARE Home",
          "square.access.cover.image": "Change this OpenChat's cover photo",
          "square.access.create": "Create an OpenChat",
          "square.access.hide": "Hide the OpenChat's description",
          "square.access.invite": "Invite friends",
          "square.access.join": "Join the OpenChat",
          "square.access.joinrequest": "Request to join the OpenChat",
          "square.access.postoption": "View more note options",
          "square.access.profile.image":
            "Change your profile photo for this OpenChat",
          "square.access.profile.nickname":
            "Change your nickname for this OpenChat",
          "square.access.qrcode": "The OpenChat's QR code",
          "square.access.search": "Search for OpenChats",
          "square.access.show": "Show the OpenChat's description",
          "square.access.square": "OpenChat",
          "square.access.squareoption": "View more OpenChat options",
          "square.access.timelinetosquare": "Go to OpenChat",
          "square.access.write": "Write a note",
          "square.ageconfirmation.popupbutton.cancel": "Cancel",
          "square.ageconfirmation.popupbutton.yes": "Yes, I'm at least 18",
          "square.ageconfirmation.popupdesc.atleast18tosetrestriction":
            "You must be at least 18 years of age to set an age restriction on an OpenChat. As the admin of this OpenChat, please ensure that more mature topics of conversation among members be limited to tobacco and alcohol. Note that this option can't be changed once set.",
          "square.ageconfirmation.popuptitle.ageconfirmationrequired":
            "Age confirmation required",
          "square.ageconfirmationrequired.popupbutton.cancel": "Cancel",
          "square.ageconfirmationrequired.popupbutton.yes": "Confirm and join",
          "square.ageconfirmationrequired.popupdesc.onlyusersoverlegalageallowedtojoin":
            "This OpenChat is only available to users who are 18 or older. To ensure the safety of all users, you must abide by OpenChat's Terms of Use and Guideline.",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "Only 18 or older users can join",
          "square.announcement.donotshowagain": "Don't show again",
          "square.announcement.donotshowagain.mouseover": "Don't\nshow again",
          "square.announcement.error":
            "Unable to find the message for this announcement.",
          "square.announcement.message.annouce": "Announce",
          "square.announcement.minimize": "Minimize",
          "square.announcement.unannounce": "Unannounce",
          "square.answer.guide":
            "You must answer the question above to request to join this chat.",
          "square.answer.send.done": "Request sent.",
          "square.answer.title": "Answer question",
          "square.banreportuser.popupbutton.cancel": "Cancel",
          "square.banuser.popupdesc.banafterleaving":
            "This user already left the OpenChat. You can ban them from joining again or report their account.",
          "square.chat.button.threadmessages":
            "<![CDATA[<b><font color='%1'>%2+</font></b> messages]]>",
          "square.chat.button.threadmessages999":
            "<![CDATA[See <b><font color='%1'>%2+</font></b> messages]]>",
          "square.chat.button.threadmessagesfew": "See messages in thread",
          "square.chat.button.threadmessagesmany": "%1+ messages",
          "square.chat.desc.sent": "Sent",
          "square.chat.err.file.exceed.capacity":
            "Unable to send file as its size exceeds the limit.",
          "square.chat.menu.aboutchatroom": "Manage OpenChat",
          "square.chat.more.leaveroom": "Leave chat",
          "square.chat.placeholder.qna": "Answer this question",
          "square.chat.reply.notification": "Reply: %1",
          "square.chat.reply.notification2": "%1's reply: %2",
          "square.chat.setting": "Detailed settings",
          "square.chat.settings.bg.apply.square.image":
            "Apply the OpenChat's photo to the background",
          "square.chat.settings.export.title": "Chat in %1",
          "square.chat.system.msg.invite.a.b": "%1 invited %2 to the chat.",
          "square.chat.system.msg.join.chat": "%1 joined the chat.",
          "square.chat.system.msg.leave.chat": "%1 left the chat.",
          "square.chat.text.input.nickname": "Chat as %1",
          "square.chatcontent.button.seemoreqna": "See more",
          "square.chatcontent.tab.qna": "Q&A messages",
          "square.chatlist.alert.deletedchat":
            "This chat doesn't exist. Try joining another chat.",
          "square.chatlist.alert.max":
            "You cannot join this chat as the maximum number of members has been reached.",
          "square.chatlist.join.guide":
            "Select a chat to join. To see the full list of subchats in this OpenChat, enter any chat and tap Chats from the chat menu.",
          "square.chatlist.joined.title": "Current chats ",
          "square.chatlist.joined.zero":
            "You have not joined any square chats yet.",
          "square.chatlist.max.member.desc": "This chat is already full.",
          "square.chatlist.public.join.alert":
            "The chat will also appear in your main chat list.\n",
          "square.chatlist.public.join.btn": "Join ",
          "square.chatlist.public.max.btn": "Full",
          "square.chatlist.public.no.msg": "There are no messages.",
          "square.chatlist.public.title": "Available chats ",
          "square.chatlist.public.zero": "No chats available.",
          "square.chatlist.reply.alert": "Someone replied to you.",
          "square.chatlist.square.button": "OpenChat",
          "square.chatlist.title": "Chats",
          "square.chatmenu.button.qna": "Q&A messages",
          "square.chatmenu.button.thread": "Thread",
          "square.chatmenu.button.yourthreads": "Your threads",
          "square.chatroom.alert.open.url":
            "This link may be unsafe.\nAre you sure you want to open it?",
          "square.chatroom.block.inputarea.deletedchat": "Chat deleted",
          "square.chatroom.block.inputarea.deletedgroup": "OpenChat deleted",
          "square.chatroom.block.inputarea.kickoutgroup":
            "Removed from the OpenChat",
          "square.chatroom.chatlilst.guide.des":
            "You can see and join this OpenChat.",
          "square.chatroom.chatlist.title": "Chats",
          "square.chatroom.confirm.desc.kickout":
            "This member will be banned from the OpenChat. Continue?",
          "square.chatroom.create.image": "Select photo",
          "square.chatroom.default.announce.content": 'Welcome to "%1"!',
          "square.chatroom.deletefromall.alert":
            "The selected messages will be deleted for all members. Continue?",
          "square.chatroom.desc.botadded": "%1 added %2 to the chat.",
          "square.chatroom.desc.botremoved": "%1 removed %2 from the chat.",
          "square.chatroom.error.alert.deletedchatroom":
            "This chat doesn't exist. Try joining another chat.",
          "square.chatroom.input.deletedgroup": "Deleted OpenChat",
          "square.chatroom.input.join.btn": 'Join "%1"',
          "square.chatroom.invite.layer.des":
            "Invite friends you want to share this OpenChat with.",
          "square.chatroom.layer.upperloading": "Loading chat history...",
          "square.chatroom.longpress.deleteformall": "Erase",
          "square.chatroom.longpress.deletefromall.title": "Erase from chat",
          "square.chatroom.longpress.kickout": "Remove",
          "square.chatroom.longpress.squarepost": "Note",
          "square.chatroom.memberlist.guest": "Guests",
          "square.chatroom.setting.deletechat": "Delete subchat",
          "square.chatroom.setting.deletechat.description":
            "Deleting the subchat will make it unavailable to all members. Continue away?",
          "square.chatroom.setting.report": "Report",
          "square.chatroom.settings.change.title": "Chat name",
          "square.chatroom.settings.leave.no.message": "Leave silently",
          "square.chatroom.system.alert.notfriend":
            'You haven\'t added %2 from the "%1" OpenChat as a friend.\nPlease be careful when exchanging messages with them.',
          "square.chatroom.system.message.change.bg":
            "An admin changed the OpenChat's photo.",
          "square.chatroom.system.message.change.maxparticipants":
            "%1 set the chat's member limit to %2.",
          "square.chatroom.system.message.change.name":
            '%1 changed the chat\'s name to "%2".',
          "square.chatroom.system.message.change.picture":
            "%1 changed the chat's profile photo.",
          "square.chatroom.system.message.kickout":
            "%1 was banned from the OpenChat.",
          "square.chatroom.system.msg.alert.private":
            'Heads up! You\'re in a private chat for the square "%1".',
          "square.chatroom.system.msg.alert.public":
            'Heads up! You\'re in the "%1" OpenChat.',
          "square.chatroom.system.msg.guide.loading":
            "Previous messages are loaded each time you scroll.",
          "square.chatroom.system.msg.guide.report":
            "Right-click messages (including photos, videos, and links) to report them.",
          "square.chatroom.system.msg.tooltip.private":
            'You\'re entering a private chat for the square "%1".',
          "square.chatroom.system.msg.tooltip.public":
            'You\'re entering the "%1" OpenChat.',
          "square.chatroom.systemmsg.deletedchat":
            "This chat has been deleted. ",
          "square.chatroom.systemmsg.deletedgroup":
            "The OpenChat has been deleted.",
          "square.chatroom.systemmsg.emptycommunity": "Unavailable OpenChat",
          "square.chatroom.systemmsg.emptyroom": "Unavailable chat",
          "square.chatroom.systemmsg.kickout":
            "You've been removed from this chat by an admin. ",
          "square.chatroom.vmenu.chatlist": "Chats",
          "square.chatroom.vmenu.groupchatlist": "Square home",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "Let the chat know\nyou're leaving.",
          "square.coadmin.alert": "Set as a co-admin?",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\uc5b5",
          "square.common.desc.usercount1k": "%1K",
          "square.common.desc.usercount1m": "%1M",
          "square.common.desc.usercount1man": "%1\ub9cc",
          "square.common.share": "Share",
          "square.community.home.alert.invited.chat":
            "Accept the chat invite and join now?",
          "square.community.home.chat.button.start": "Start",
          "square.community.home.invite.button": "Invite",
          "square.community.home.msg.chat.onlymember":
            "You can participate in chats after joining the square.\nJoin now?",
          "square.community.home.msg.onlymember":
            "You can participate in the square\nonce your request to join is approved.",
          "square.content.home.shared": "Shared a note.",
          "square.cover.chat.btn": "Chat",
          "square.cover.investmentscams": "Watch out for fraud using LINE.",
          "square.cover.post.btn": "Notes",
          "square.create.btn": "",
          "square.create.category": "Category ",
          "square.create.category.desc":
            "Selecting a category will make the OpenChat eligible to appear in recommendations.",
          "square.create.default.category": "None",
          "square.create.description": "Description",
          "square.create.description.desc": "Describe the OpenChat",
          "square.create.description.input": "Description",
          "square.create.description2": "Enter keywords using #hashtags",
          "square.create.error.no.name": "Please enter the OpenChat's name.",
          "square.create.error.popup.input.description.info":
            "Please enter an OpenChat description.",
          "square.create.error.popup.input.info":
            "Please enter all required information.",
          "square.create.groupname": "OpenChat name",
          "square.create.image": "Select photo",
          "square.create.over.text.num.alert": "Maximum length reached. ",
          "square.create.search": "Allow search",
          "square.create.search.desc":
            "Others can search for this OpenChat by its name or description.",
          "square.create.setting.desc":
            "Others will be able to search for your OpenChat.",
          "square.create.sgroup.approval.desc":
            "Admin approval is required to join the OpenChat.",
          "square.create.sgroup.closedtype": "Approval needed to join",
          "square.create.sgroup.opentype": "Join immediately",
          "square.create.subchat.guide.des":
            "The OpenChat's privacy settings and admin permissions will be applied to all subchats.",
          "square.create.subchat.title": "Create subchat",
          "square.create.title": "Create OpenChat",
          "square.create.welcome": "Welcome message",
          "square.createchat.error.no.auth.public":
            "The admin has disabled the option to create subchats.",
          "square.createchat.inputtitle": "Enter subchat name",
          "square.createchat.title": "Create chat",
          "square.createchat.type.maximum.option": "Max participants",
          "square.createchat.type.maximum.option.desc":
            "Set the maximum number of members who can join the chat.",
          "square.createchat.type.private": "Private ",
          "square.createchat.type.private.desc":
            "Only invited members can join this chat.",
          "square.createchat.type.public": "Public",
          "square.createchat.type.public.desc": "Anyone can join this chat.",
          "square.createchat.type.public.option": "Open to all members",
          "square.createopenchat.button.setagerestriction":
            "Set age restriction",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "Allow only users who are 18 or older to join this OpenChat.",
          "square.createopenchat.desc.search":
            "Some of the OpenChat's messages can be previewed and searched by others. You can change this setting in the OpenChat's settings once it is created.",
          "square.createopenchat.placeholder.enterdescription":
            "Enter description",
          "square.createsubchat.toggle.notifyinopenchat":
            "Notify OpenChat of new subchat",
          "square.default.name.title": "OpenChat name",
          "square.error.cannot.forward.contact":
            "You can't send contact info to OpenChats.",
          "square.error.fail.upload.profile.image":
            "Unable to edit your profile. ",
          "square.error.not.normal":
            "An unknown error occurred.\nPlease try again later.",
          "square.error.noti.kickout": "You were banned from the OpenChat.",
          "square.error.popup.cannot.invite":
            "The square's admin disabled this feature.",
          "square.error.popup.cannot.join":
            "Unable to join this OpenChat at the moment. Try again another time.",
          "square.error.popup.deletedgroup": "This OpenChat no longer exists.",
          "square.error.popup.network":
            "Unable to connect.\nPlease check your connection and try again.",
          "square.error.popup.noauth":
            "You don't have permission to access this section.\nYou'll be redirected to \"OpenChat settings.\"",
          "square.error.popup.noauth.alert":
            "You don't have permission to access this section. ",
          "square.error.popup.usingbyotheruser":
            "This setting is currently being modified by another user.\nPlease try again later.",
          "square.filtering.keyword.error.alert": "This word can't be used.",
          "square.fraudpopup.button.cancel": "Cancel",
          "square.fraudpopup.button.continue": "Continue",
          "square.fraudpopup.button.learnmore": "Learn more",
          "square.fraudpopup.desc.investmentscams":
            "Investment fraud involving social media scam ads impersonating celebrities is on the rise. Please be careful when sending and receiving messages and report any suspicious activity.",
          "square.fraudpopup.title.investmentscams":
            "Investment scams are on the rise",
          "square.friendslist.join.requests": "Manage join requests",
          "square.friendstab.newrequest": "Requests to join an OpenChat",
          "square.friendstab.request.count": "Join requests ",
          "square.friendstab.request.counts.2.one": "Join request %n",
          "square.friendstab.request.counts.2.other": "Join requests %n",
          "square.friendstab.request.counts.2.plurals.one": "Join request %n",
          "square.friendstab.request.counts.2.plurals.other":
            "Join requests %n",
          "square.friendstab.request.counts.one": "Join request %n ",
          "square.friendstab.request.counts.other": "Join requests %n ",
          "square.friendstab.request.counts.plurals.one": "Join request %n",
          "square.friendstab.request.counts.plurals.other": "Join requests %n",
          "square.group.create.change.image": "Change photo",
          "square.group.name": "OpenChat",
          "square.group.settings.basic": "Basic OpenChat settings",
          "square.group.settings.change.groupname": "OpenChat name",
          "square.group.settings.change.myname": "Display name",
          "square.group.settings.delete.alert":
            "Deleting an OpenChat will delete all of the OpenChat's data, including its chat history. Are you sure you want to delete this OpenChat?",
          "square.group.settings.editmember.kickout": "Remove members",
          "square.group.settings.editmember.kickout.alert.done":
            "Member removed",
          "square.group.settings.group.profile": "Edit OpenChat profile",
          "square.group.settings.groupset": "OpenChat settings",
          "square.group.settings.leave": "Leave OpenChat",
          "square.group.settings.leave.alert":
            "If you leave an OpenChat, all data related to it will be deleted, including your chat history. Leave this OpenChat?",
          "square.group.settings.leave.error.alert.admin":
            "Please transfer your admin permissions to another\nmember before you leave the OpenChat.",
          "square.group.settings.manageauth.additional": "Set permissions",
          "square.group.settings.manageauth.additionalchatfeatures":
            "Additional chat features",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "Create polls",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "Delete polls",
          "square.group.settings.manageauth.chatapp":
            "Additional chat features",
          "square.group.settings.manageauth.setmaxparticipants":
            "Change max chat participants",
          "square.group.settings.managegroup": "Manage OpenChat",
          "square.group.settings.managegroup.allowtojoin": "Approval required",
          "square.group.settings.managegroup.allowtojoin.desc":
            "Admin approval is required to join the OpenChat.",
          "square.group.settings.managegroup.allowtosearch":
            "Show OpenChat in search",
          "square.group.settings.managegroup.allowtosearch.desc":
            "Others can search for this OpenChat by keyword.",
          "square.group.settings.managegroup.autotag": "Auto-suggest tags ",
          "square.group.settings.managegroup.autotag.decs":
            "Tags are automatically suggested when writing posts.",
          "square.group.settings.managegroup.deletegroup": "Delete OpenChat",
          "square.group.settings.managegroup.invite": "Invite new members",
          "square.group.settings.managegroup.invite.desc":
            "When disabled, other members cannot be invited and previously shared links and QR codes will no longer work.",
          "square.group.settings.managegroup.updateurl":
            "Update invitation link",
          "square.group.settings.managegroup.updateurl.desc":
            "You cannot use the current invite link after updating it.\nContinue?",
          "square.group.settings.managemember": "Manage members",
          "square.group.settings.managemembers.alert.cannot.select":
            "You can only select up to %n people.",
          "square.group.settings.managemembers.allowrejoin": "Unban",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "Allow this member to rejoin the OpenChat?",
          "square.group.settings.managemembers.blocktojoin": "Banned members",
          "square.group.settings.managemembers.blocktojoin.alert":
            "Unbanning this user will allow them to rejoin the OpenChat. Continue?",
          "square.group.settings.managemembers.manageadmin": "Manage admins",
          "square.group.settings.managemembers.manageadmin.added": "Added. ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "Revoke Co-Admin permissions from this member?",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "Remove",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "Co-admins ",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "Transfer admin permissions",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "Transfer admin permissions to this member?\nYou will automatically become a co-admin. ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            'Grant co-admin permissions to the members you want to manage the square with.\nYou can set co-admin roles in "Manage permissions." ',
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "If you transfer your Admin permissions to a Co-Admin, you will automatically become a Co-Admin yourself.",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "Grant co-admin permissions",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            'Grant co-admin permissions to the members you want to manage the OpenChat with.\nYou can set co-admin roles in "Manage permissions."',
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "There are no available members.",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "You have not added any co-admins yet.",
          "square.group.settings.managemembers.manageadmin.select": "Select",
          "square.group.settings.managemembers.manageauth":
            "Manage permissions ",
          "square.group.settings.managemembers.manageauth.acceptrequest":
            "Approve join requests",
          "square.group.settings.managemembers.manageauth.admincoadmin":
            "Admin and co-admins",
          "square.group.settings.managemembers.manageauth.adminonly": "Admin",
          "square.group.settings.managemembers.manageauth.all": "All members ",
          "square.group.settings.managemembers.manageauth.createpost":
            "Write post ",
          "square.group.settings.managemembers.manageauth.createpublicchat":
            "Create subchat",
          "square.group.settings.managemembers.manageauth.deletecontents":
            "Delete chats and posts",
          "square.group.settings.managemembers.manageauth.description":
            "Adjust permissions for who can make various changes to an OpenChat.",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "Invite members ",
          "square.group.settings.managemembers.manageauth.kickout":
            "Remove members",
          "square.group.settings.managemembers.managepost": "Write notes",
          "square.group.settings.managemembers.request": "Join requests",
          "square.group.settings.managemembers.request.accept": "Approve",
          "square.group.settings.managemembers.request.accept.alert.done":
            "Request approved.",
          "square.group.settings.managemembers.request.accept.alert.notall.done":
            "Request(s) approved. Please note that some requests may already have been handled by the admin or co-admin, or declined if the chat is at full capacity.",
          "square.group.settings.managemembers.request.acceptall":
            "Approve all ",
          "square.group.settings.managemembers.request.acceptall.alert":
            "Approve all join requests?",
          "square.group.settings.managemembers.request.delete.alert":
            "Delete this join request?",
          "square.group.settings.managemembers.request.delete.alert.done":
            "Request deleted.",
          "square.group.settings.managemembers.request.delete.alert.notall.done":
            "Request(s) deleted.\n(Some requests were already handled by another admin.)",
          "square.group.settings.managemembers.request.noti.tooltip":
            "Choose whether to receive notifications when someone requests to join. ",
          "square.group.settings.managemembers.request.select100":
            "Select %1 most recent",
          "square.group.settings.managemembers.request.selectall": "Select all",
          "square.group.settings.managemembers.request.zero":
            "There are no join requests.",
          "square.group.settings.memberlist": "View or invite members",
          "square.group.settings.myprofile.title": "My profile",
          "square.group.settings.nickname": "Nickname",
          "square.group.settings.noti.post": "Post notifications",
          "square.group.settings.noti.post.dec":
            "You can receive post notifications.",
          "square.group.settings.policy":
            "OpenChat\nTerms and Conditions of Use",
          "square.group.settings.profile.title": "",
          "square.group.settings.recieve.chat": "Receive chat invites",
          "square.group.settings.recieve.friendsrequest":
            "Receive friend requests ",
          "square.group.settings.report": "Report OpenChat",
          "square.group.settings.reportpage.agreeandsend": "Agree & send",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "Acknowledge and send",
          "square.group.settings.reportpage.desc":
            "Select why you are reporting this content.",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "Please consider providing us detailed information to help us investigate this case of impersonation by proceeding to our inquiry form and filling out the requested items.",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "Skip",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "Proceed",
          "square.group.settings.reportpage.reason1": "Spam/Advertising",
          "square.group.settings.reportpage.reason2": "Sexual harassment",
          "square.group.settings.reportpage.reason3": "Other harassment",
          "square.group.settings.reportpage.reason4": "Other",
          "square.group.settings.reportpage.reason5": "Off-topic content",
          "square.group.settings.reportpage.reason6": "Impersonation",
          "square.group.settings.reportpage.reason7": "Scam",
          "square.group.settings.reportpage.report.btn": "Report",
          "square.group.settings.reportpage.reportdone": "Report sent.",
          "square.grouppopup.alert.alreadyjoin":
            "You are already a member of this OpenChat. Try closing the screen and entering again.",
          "square.grouppopup.alert.blocked":
            "You cannot join this OpenChat. Please try again next time.",
          "square.grouppopup.alert.join.ing":
            "Awaiting admin approval.\nYou will be added to the OpenChat once an admin approves your request.",
          "square.grouppopup.alert.requestdone":
            "You have requested to join. You will be added to the OpenChat once an admin approves your request.",
          "square.grouppopup.button.join.ing": "Awaiting approval...",
          "square.grouppopup.chat.count.plurals.one": "%1 chat",
          "square.grouppopup.chat.count.plurals.other": "%1 chats",
          "square.grouppopup.invite.tooltip":
            "Invite friends via LINE or by sharing an invite link or QR code.",
          "square.grouppopup.invitefriend": "Invite friends",
          "square.grouppopup.member.count.plurals.one": "%1 member",
          "square.grouppopup.member.count.plurals.other": "%1 members",
          "square.grouppopup.post.count.plurals.one": "%1 note",
          "square.grouppopup.post.count.plurals.other": "%1 notes",
          "square.grouppopup.qrcode": "Invite via QR Code",
          "square.grouppopup.qrcode.desc":
            "Show someone the QR Code or share it via a post.",
          "square.grouppopup.qrcode.save": "Save QR code",
          "square.grouppopup.qrcode.saved": "QR code saved. ",
          "square.grouppopup.sendrequest": "Request to join",
          "square.grouppopup.url": "Invite via Link",
          "square.grouppopup.url.app": "Share via other app",
          "square.grouppopup.url.line": "Share on LINE",
          "square.home.addfavorite": "Add to Favorites",
          "square.home.cancelfavorite": "Remove from Favorites",
          "square.home.chat.section.invited": "Invited chats",
          "square.home.favorite.tooltip":
            "Click this button to add the OpenChat to\nyour Favorites in Friends.",
          "square.home.invite.copy.link": "Copy link",
          "square.home.invite.save.qr": "Save QR code",
          "square.home.invite.share.link": "Share link",
          "square.home.invite.share.qr": "Share QR code",
          "square.home.menu.photo": "Photo",
          "square.home.menu.write": "Write",
          "square.home.nickname": "%1",
          "square.home.setting": "Settings",
          "square.home.tab.chat": "Chats",
          "square.home.tab.post": "Posts",
          "square.home.toast.addfavorite": "Added to Favorites.",
          "square.home.toast.cancelfavorite": "Removed from Favorites.",
          "square.invite.complete.one":
            "You sent an invitation message to %n member.",
          "square.invite.complete.other":
            "You sent invitation messages to %n members.",
          "square.invite.complete.plurals.one":
            "You sent an invitation message to %n member.",
          "square.invite.complete.plurals.other":
            "You sent invitation messages to %n members.",
          "square.invite.friend": "Invite friends",
          "square.invite.urlscheme.chatroom.chatname": 'Invite to "%1"',
          "square.invitemember.confirm.donotshowagain": "Don't display again",
          "square.invitemember.confirm.invite":
            "Invited users can view previous messages.",
          "square.invitemember.desc":
            "You can only invite square members to chat. Invite friends to the square first to chat with them.",
          "square.invitemember.desc.urlscheme.chatroom":
            'Click "Invite to chat" to invite users who haven\'t joined the OpenChat yet.',
          "square.invitemember.invitetogroup": "Invite to OpenChat",
          "square.invitemember.invitetogroup.urlscheme.chatroom":
            "Invite to chat",
          "square.invitemember.memberlist.title": '"%1" members %n',
          "square.invitemember.title": "Select invitees",
          "square.invitetoopenchat.button.share": "Share",
          "square.invitetoopenchat.desc.sharelinktoinvitemembers":
            "Share the OpenChat link to invite friends.",
          "square.join.precaution":
            'Welcome to "%1"! Please refrain from sending messages that violate OpenChat\'s service policy, as this could lead to restrictions on your use.',
          "square.join.question.guide": "Enter 5-50 characters",
          "square.joincode.error": "Incorrect code. Please try again.",
          "square.joincode.guide":
            "Join the chat by entering the code set by the admin.",
          "square.joincode.guide.description":
            "Enter the 4-8 character alphanumeric code required to join the OpenChat.",
          "square.joincode.input.guide": "Enter code",
          "square.joincode.title": "Enter chat code",
          "square.joinscreen.placeholder.enteranswerhere": "Enter answer",
          "square.keyboardmenu.button.qna": "Q&A message",
          "square.kickout.alert.done":
            'This member was banned from the OpenChat. You can unban them by going to "Manage members" > "Banned members" in the OpenChat\'s settings.',
          "square.kickout.blockoption": "Ban from the OpenChat",
          "square.kickout.error.alert.admin":
            "You cannot ban an admin or co-admin.",
          "square.kickout.reason1": "Advertising or spam",
          "square.kickout.reason2": "Unwholesome or obscene expressions",
          "square.kickout.reason3": "Other rule violation",
          "square.leave.last.person.alert": "",
          "square.leftuser.kickout.btn": "Ban",
          "square.main.create.block.alert":
            "You can't create a square during the beta test period. ",
          "square.main.create.guide":
            "Create your own OpenChat and\nget to know new people.",
          "square.main.mylist": "Your OpenChats",
          "square.main.mylist.sortbyname": "By name",
          "square.main.mylist.sortbyupdate": "Last updated",
          "square.main.mylist.sortbyvisit": "Last visited",
          "square.main.mylist.viewall": "See all",
          "square.main.mylist.zero":
            "Join an OpenChat to talk to new people who share your interests, or create your own!",
          "square.main.search.block.alert":
            "Search features are not available during the beta test period. ",
          "square.main.search.default.msg": "OpenChat name, Description",
          "square.managemembers.button.seewholeft": "See who left recently",
          "square.managemembers.desc.seewholeft":
            "See who left the OpenChat in the last 24 hours.",
          "square.manageopenchat.desc.setjoincode":
            "Enter the code required to join the chat.",
          "square.members": "Members",
          "square.members.addmembers": "Invite members",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "A member is banned",
          "square.membershipsystemmessages.button.userjoinsthechat":
            "A new member joins",
          "square.membershipsystemmessages.button.userleavesthechat":
            "A member leaves",
          "square.membershipsystemmessages.desc.managesystemmessages":
            "Show or hide messages when someone joins, leaves, or is banned from the OpenChat.",
          "square.menu.invite": "Invite",
          "square.mythreads.button.seemessages.one":
            "<![CDATA[See\xa0<b><font color='%1'>%n</font></b>\xa0message]]>",
          "square.mythreads.button.seemessages.other":
            "<![CDATA[See\xa0<b><font color='%1'>%n</font></b>\xa0messages]]>",
          "square.noti.admin": 'You are now the admin of the "%1" OpenChat.',
          "square.noti.coadmin": 'You are now a co-admin of the "%1" OpenChat.',
          "square.noti.delete.chat":
            'The chat "%1" has been deleted by an admin.',
          "square.noti.deleted.coadmin":
            'You are no longer a co-admin of the "%1" OpenChat.',
          "square.noti.deleted.gorup": 'The "%1" OpenChat has been deleted.',
          "square.noti.join.done": 'You joined the "%1" OpenChat.',
          "square.noti.joinrequest": '%1 requested to join the "%2" OpenChat.',
          "square.noti.kickout": 'You were banned from the "%1" OpenChat.',
          "square.notification.desc.userjoinedopenchat":
            'A new member joined the OpenChat "%1".',
          "square.notification.setting":
            "Notifications for OpenChat notes\nYou must enable notifications for OpenChat notes on your mobile device to receive them on desktop.",
          "square.openchat.desc.adminaddedbottochat":
            "[0] added [1] to the chat.",
          "square.openchat.desc.adminremovedbotfromchat":
            "[0] removed [1] from the chat.",
          "square.openchat.desc.messageremovedforsharinginappropriatecontent":
            "%1's message was removed because it was suspected of violating OpenChat's service policy.",
          "square.openchat.desc.userbannedbysomeoneelse":
            "%2 was banned from the OpenChat by %1.",
          "square.openchat.popup.dontshow":
            "Don't show this message again in this OpenChat",
          "square.openchat.popupbutton.close": "Close",
          "square.openchat.popupbutton.deleteforall": "Everyone in chat",
          "square.openchat.popupbutton.deleteforyou": "Just me",
          "square.openchat.popupbutton.ok": "OK",
          "square.openchat.popupbutton.seemore": "Learn more",
          "square.openchat.popupdesc.deletemessagesfor":
            "Select for whom you want to delete the selected messages.\nYou can drag your mouse to select up to 50 messages to delete.",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            "New messages in this chat will be indicated by an N icon in the chat list.",
          "square.openchat.popupdesc.unsendmessage":
            "This message may not be removed from some members\u2019 chats depending on what LINE version they use. Unsend this message?",
          "square.openchat.popuptitle.deletemessages": "Delete messages",
          "square.openchatannouncements.title.announcements": "Announcement",
          "square.openchatcharacterprofiles.button.cancel": "Cancel",
          "square.openchatcharacterprofiles.button.save": "Save",
          "square.openchatcharacterprofiles.title.selectcharacter":
            "Select character",
          "square.openchatentry.button.confirm": "OK",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[Don\u2019t send <font color=\\'#07B53B\\'>rude messages</font> or act in ways that could cause <font color=\\'#07B53B\\'>offense</font>.]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[Follow these <font color=\\'#07B53B\\'>simple rules</font> to continue enjoying OpenChat.]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[OpenChat is a welcoming space for all. Please treat all members <font color=\\'#07B53B\\'>with respect</font>.]]>",
          "square.openchatentry.header.dontsendrudemessages": "2. Keep it kind",
          "square.openchatentry.header.followopenchatrules": "3. Have fun",
          "square.openchatentry.header.treatmemberswithrespect":
            "1. R-E-S-P-E-C-T!",
          "square.openchatentry.title.openchatuserules":
            "Things to keep in mind when using OpenChat",
          "square.openchatinvite.desc.userinvitedtojoinchat":
            'You\'ve been invited to join "%1."',
          "square.openchatinvite.desc.userinvitedtojoinsquare":
            'You\'ve been invited to join "%1."',
          "square.openchatlist.desc.viewchatandaddtofavorites":
            "View the OpenChat's profile and name and add it to your favorites.",
          "square.openchatlist.header.yourchats": "Your chats %1",
          "square.openchatliveinvite.popupdesc.usefeatureonmobileapp":
            "This feature is only available on the mobile version of LINE.",
          "square.openchatmember.button.default": "Default",
          "square.openchatmember.button.oldjoin": "Oldest to newest",
          "square.openchatmember.button.recentjoin": "Newest to oldest",
          "square.openchatmember.desc.days.one": "%d day ago",
          "square.openchatmember.desc.days.other": "%d days ago",
          "square.openchatmember.desc.hours.one": "%d hour ago",
          "square.openchatmember.desc.hours.other": "%d hours ago",
          "square.openchatmember.desc.justnow": "Just now",
          "square.openchatmember.desc.lastvisited": "Last visited",
          "square.openchatmember.desc.minutes.one": "%d minute ago",
          "square.openchatmember.desc.minutes.other": "%d minutes ago",
          "square.openchatmembers.desc.hundredthousandmembersth": "%1",
          "square.openchatmembers.desc.membersen": "%1",
          "square.openchatmembers.desc.memberskoja": "%1",
          "square.openchatmembers.desc.membersth": "%1",
          "square.openchatmembers.desc.tenthousandmemberskoja": "%1",
          "square.openchatmembers.desc.tenthousandmembersth": "%1",
          "square.openchatmembers.desc.thousandmembersen": "%1K",
          "square.openchatmembers.desc.thousandmembersth": "%1",
          "square.openchatmenu.button.hidemessagecount":
            "Hide message count\nNew messages in OpenChats will be indicated by an N icon.",
          "square.openchatmenu.button.showmessagecount": "Show message count",
          "square.openchatmenu.desc.joindate": "Joined on dd/mm/yyyy",
          "square.openchatmenu.desc.messagereplies":
            "Get notified when people reply to your messages.",
          "square.openchatmenu.desc.onlyadmin":
            "Only the admin and co-admins can see when each member joined or last visited the OpenChat.",
          "square.openchatmenu.desc.visitdays.one": "Visited %1 day ago",
          "square.openchatmenu.desc.visitdays.other": "Visited %1 days ago",
          "square.openchatmenu.desc.visitmonths.one": "Visited %1 month ago",
          "square.openchatmenu.desc.visitmonths.other": "Visited %1 months ago",
          "square.openchatmenu.desc.visittoday": "Visited today",
          "square.openchatmenu.desc.visityester": "Visited yesterday",
          "square.openchatmenu.toggle.messagereplies": "Message replies",
          "square.openchatmessage.desc.noreactions": "No reactions yet.",
          "square.openchatmessagefield.desc.readonlymode":
            "The chat is set to read-only.",
          "square.openchatnotes.desc.subchatmemberscanseenotes":
            "Members of any subchats can also see notes shared in the OpenChat.",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "OpenChat",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "Verify your phone number when using OpenChat to ensure a safer service for all. You can do so in the mobile version of the app.",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "Verification required",
          "square.openchatpopup.button.cancel": "Cancel",
          "square.openchatpopup.button.confirm": "Confirm",
          "square.openchatpopup.desc.changesetting":
            "The changed setting will also be applied to the OpenChat and other subchats. Continue anyway?",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "This OpenChat is only open to those 18 or older.",
          "square.openchatprivacysettings.desc.opentoallages":
            "This OpenChat is open to all ages.",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "Enter the code required to join the OpenChat. Please note that changing the privacy settings of the OpenChat to require a code to join will prevent underage users or those who haven't verified their age from joining.",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "Enter the question that must be answered to join the chat. The admin or co-admin will review applicants and approve members. Please note that changing the privacy settings of the OpenChat to require admin approval will prevent underage users or those who haven't verified their age from joining.",
          "square.openchatprofile.button.join": "Join with new profile",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "This OpenChat is set in a different country or region.",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "This OpenChat is set to read-only",
          "square.openchatprofile.desc.tooltip":
            "Join this OpenChat using a new nickname and profile photo.",
          "square.openchatsetting.desc.maxpeople":
            "This setting can't be changed for MegaChats.",
          "square.openchatsetting.desc.mentionnoti":
            "Get notified whenever you are mentioned in chats, even if chat notifications are turned off.",
          "square.openchatsetting.desc.mentions": "Mentions",
          "square.openchatsetting.desc.onlyopen":
            "This option is only available when the OpenChat is open to all ages.",
          "square.openchatsetting.desc.visibility":
            "Allow message preview and search",
          "square.openchatsetting.desc.visibilityallowed": "Allowed",
          "square.openchatsetting.desc.visibilitynotallowed": "Not allowed",
          "square.openchatsetting.desc.visiforco":
            "This chat's messages can be searched. This may be enabled if the same setting is enabled in the OpenChat, and can only be changed by the admin.",
          "square.openchatsettings.button.allowmessagesfrom":
            "Allow messages from",
          "square.openchatsettings.button.continue": "Continue",
          "square.openchatsettings.button.leavemainchat": "Leave main chat",
          "square.openchatsettings.button.leavesubchat": "Leave subchat",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "Manage system messages",
          "square.openchatsettings.button.settoreadonlymode":
            "Set to read only",
          "square.openchatsettings.desc.addopenchatdescription":
            "Enter description",
          "square.openchatsettings.desc.coverphotosetasprofilephotoandbackground":
            "The cover photo of this OpenChat will also be set as its profile photo and background.",
          "square.openchatsettings.desc.getnotifiedwhensomeonejoins":
            "Get notified when someone new joins the chat.",
          "square.openchatsettings.desc.readonlymodeformembers":
            "Allow only the admin or co-admins to send messages to the chat.",
          "square.openchatsettings.header.chatsettings": "Chat settings",
          "square.openchatsettings.header.details": "Details",
          "square.openchatsettings.header.editsubchatprofile":
            "Edit subchat profile",
          "square.openchatsettings.header.openchatsettings": "Settings",
          "square.openchatsettings.header.subchatsettings": "Subchat settings",
          "square.openchatsettings.placeholder.enterhashtags":
            "Enter description",
          "square.openchatsettings.popup.searchoff":
            "All messages will no longer be searchable and won't be shown on the chat profile. Continue anyway?",
          "square.openchatsettings.popup.searchon":
            "New messages will be searchable and shown on the chat profile. Continue anyway?",
          "square.openchatsettings.popupdesc.selectacoadmin":
            "You must select at least 1 member as co-admin before you can leave the subchat.",
          "square.openchatsettings.toggle.newmembernotification":
            "New member notification",
          "square.openchatsettingstatus.desc.readonlymodedisabled":
            "Anyone in the chat can now send messages.",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "Only the admin can send messages.",
          "square.openchatsettingv.desc.allmessages": "All messages",
          "square.openchatsettingv.desc.dontallow": "Don't allow",
          "square.openchatsettingv.desc.off":
            "This option is only available when the OpenChat is allowed to be shown in search.",
          "square.openchatsettingv.desc.on":
            "Messages from the OpenChat will be shown in search and in its profile.",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "Invite friends to this OpenChat and have them join the conversation.",
          "square.openchatsharelink.title.sharelink":
            "Share this OpenChat link",
          "square.openchatsubchat.title.subchatname": "Subchat name",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "The wallpaper you set will be seen only by you.",
          "square.pdpa.policy.agree.btn": "Continue",
          "square.personaloption.alert.error.name":
            "This name is already in use. Please enter a different name.",
          "square.personaloption.chat": "Receive chat invites",
          "square.personaloption.chat.desc":
            "Receive invite messages from OpenChat members.",
          "square.personaloption.copy": "Link copied. ",
          "square.personaloption.friendrequest": "Receive friend requests",
          "square.personaloption.friendrequest.desc":
            "Members can send you friend requests.",
          "square.personaloption.greetingmessage": "Message for admin",
          "square.personaloption.greetingmessage.default":
            "Please enter a message for the admin.",
          "square.personaloption.guide": "Enter nickname",
          "square.personaloption.join.btn": "Join",
          "square.personaloption.joincode.btn": "Join using code",
          "square.personaloption.profile.title": "OpenChat profile",
          "square.personaloption.profile.title.tooltip.desc":
            "Set your nickname and profile photo for this OpenChat. Your LINE profile won't be shown.",
          "square.personaloption.sendrequest.btn": "Request to join",
          "square.personaloption.welcomemsg": "Welcome message ",
          "square.policy.agree.btn": "Agree",
          "square.policy.title": "Terms of Use and policies",
          "square.policy.viewall": "Read the complete OpenChat Terms of Use",
          "square.popup.button.grantpermission": "Set",
          "square.popup.button.setaspublic": "Continue",
          "square.post.announcement.announce": "Set",
          "square.post.announcement.delete": "Delete note",
          "square.post.announcement.delete.desc":
            "The note will also be removed from important notes. Delete the note?",
          "square.post.announcement.guide":
            "Set notes as important so nobody misses them.",
          "square.post.announcement.list.title": "Important notes",
          "square.post.announcement.list.zero": "There are no notes yet.",
          "square.post.announcement.mark": "Set as important note",
          "square.post.announcement.mark.desc":
            "Notifications will only be sent to OpenChat members for the first important note set each day.",
          "square.post.announcement.postui": "Important",
          "square.post.announcement.postui2": "<b>Important note</b>",
          "square.post.announcement.push": "New important note set in %1.",
          "square.post.announcement.remove": "Remove important setting",
          "square.post.announcement.seeall.plural.one": "%1 important note",
          "square.post.announcement.seeall.plural.other": "%1 important notes",
          "square.post.endpage.squarename": "%1",
          "square.post.error.deletedcomment": "This comment has been deleted.",
          "square.post.error.deletedjoined":
            "The post has already been deleted. ",
          "square.post.error.deletedpost": "This note has been deleted.",
          "square.post.error.write":
            "The admin has disabled the option to write posts. ",
          "square.post.hashtag.title": "%2 in %1",
          "square.post.join": "Join",
          "square.post.joinguide":
            'Don\'t miss out! Join "%1" now to share chats and posts with other members.',
          "square.post.linktype.chatlist": "shared an OpenChat note.",
          "square.post.linktype.scroll": "shared an OpenChat note.",
          "square.post.linktype.title": "View note",
          "square.post.share.chatlist": "Share with",
          "square.post.share.popup": "Sharing OpenChat notes",
          "square.post.title": "Notes",
          "square.post.write.guide":
            "Others will be able to see your note in OpenChat.",
          "square.post.write.guidecountryspecific":
            "Share with others in this OpenChat.",
          "square.post.write.hashtag":
            "Try adding tags to your square posts. Tags make it easy for\nother square members to find posts and chat about specific topics.",
          "square.post.zeropage.newpost": "Write",
          "square.post.zeropage.welcome":
            "Be the first to write a note in this OpenChat!",
          "square.postpopup.join":
            "Only square members can use this feature. Join the square?",
          "square.privacy.setting.approval": "Require admin approval",
          "square.privacy.setting.guide":
            "Only those approved by the admin or who enter the correct code can join the OpenChat and its subchats, if available.",
          "square.privacy.setting.joincode": "Require code to join",
          "square.privacy.setting.off": "Public",
          "square.privacy.setting.off.guide":
            "Anyone can join the OpenChat, including subchats if available.",
          "square.privacy.setting.title": "Privacy settings",
          "square.privacy.turnoff.alert":
            "Anyone will be able to join this chat. Continue?",
          "square.privcay.setting.off.guide":
            "Anyone can join the space and its chats.",
          "square.qrcode.save.failed": "Unable to save QR code.",
          "square.readonlyopenchat.popupbutton.ok": "OK",
          "square.repairdata.button.repairdata": "Repair",
          "square.repairdata.desc.syncrepairdata":
            "Sync and repair OpenChat data.\nRepaired data: OpenChat data and related settings",
          "square.repairdata.popupdesc.repairinginprogress":
            "Repairing data\nDon't close this window while syncing is in progress.",
          "square.repairdata.popupdesc.synccomplete":
            "Sync complete. OpenChat data repaired.",
          "square.repairdata.title.repairdata": "Repair OpenChat data",
          "square.report.page.reason01": "",
          "square.report.page.reason02": "",
          "square.report.page.reason03": "",
          "square.report.page.reason04": "",
          "square.report.policy.desc":
            "Reports will be reviewed under the OpenChat policy and processed accordingly.",
          "square.report.policy.desc01": "",
          "square.report.policy.desc02": "",
          "square.report.policy.message": "",
          "square.report.subTitle": "Report this note.\n(Creator: %1)",
          "square.reportopenchat.desc.reportchatfromprofile":
            "Relevant information of the OpenChat that is being reported (such as the chat's name, cover photo, and member count) along with the last 100 messages sent in the chat, and your info as well as details related to the chat admin (including nicknames used in the chat and identifying info).",
          "square.reportopenchat.desc.reportchatfromsettings":
            "Relevant information of the OpenChat that is being reported (such as the chat's name, cover photo, and member count) along with the last 50 messages sent in the chat, and your info as well as details related to the chat admin (including nicknames used in the chat and identifying info).",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "Details of the reported comment (such as text, images, or emoji), relevant information about the OpenChat (such as its name, cover photo, and member count), and your info as well as details related to the reported user (including the reported user's profile icon, their membership status, nicknames used in the chat, and other identifying info).",
          "square.reportopenchat.desc.reportopenchatmember":
            "Relevant information of the OpenChat that is being reported (such as the chat's name, cover photo, and member count) along with the last 100 messages sent in the chat, and your info as well as details related to the reported user (including the reported user's profile icon, nicknames used in the chat, and identifying info).",
          "square.reportopenchat.desc.reportopenchatmessage":
            "Relevant information of the OpenChat that is being reported (such as the chat's name, cover photo, and member count) along with the last 10 messages sent in the chat, and your info as well as details related to the reported user (including the reported user's profile icon, nicknames used in the chat, and identifying info).",
          "square.reportopenchat.desc.reportopenchatnote":
            "The contents of the reported note (such as text, images, videos, or emoji), relevant information of the OpenChat (such as the chat's name, cover photo, and member count), and your info as well as details related to the reported user (including the reported user's profile icon, their membership status, nicknames used in the chat, and identifying info).",
          "square.requesttojoin.button.submit": "Submit",
          "square.set.joincode.input.guide": "Enter code",
          "square.set.question.input.guide":
            "Enter the question that must be answered to join the chat. The admin or co-admin will review applicants and approve members.",
          "square.setopenchatprofile.button.characterprofile":
            "Character profile",
          "square.setting.auth.announcement": "Set announcement",
          "square.setting.auth.message.post": "Delete messages and notes",
          "square.settings.deleteaccount.desc":
            "The OpenChat's admin permissions will be automatically transferred to another member.",
          "square.settings.managesquare.defaultchatroom.desc":
            "The default chat can't be deleted.",
          "square.settings.managesquare.defaultchatroom.title":
            'Default chat for the square "%1"',
          "square.settings.managesquare.privatechat": "Allow private chats",
          "square.settings.managesquare.privatechat.desc":
            "Members can create private chats or message each other directly.",
          "square.settings.memberlist.members.subtitle": "Members",
          "square.settings.members": "Members (%n)",
          "square.settings.myprofile.leavesquare": "Leave OpenChat",
          "square.sub.name.title": "Subchat name",
          "square.thread.desc.nochat":
            "Messages in the thread won't be sent to the chat.",
          "square.thread.desc.startofthread": "See message in chat",
          "square.thread.placeholder.replytothread": "Reply to thread",
          "square.thread.title.thread": "Thread",
          "square.thread.toast.nolongerwatching":
            "Removed from favorite threads.",
          "square.thread.toast.nowwatching": "Added to favorite threads.",
          "square.timeline.button.tooltip":
            "Chat about fun stuff\nwith new people!",
          "square.tooltip.chatroom.settings.changename":
            "Set a custom name and profile for the default chat.",
          "square.unsupported.version.message":
            "Your current version of LINE doesn't support this feature.\nPlease update to the latest version of LINE.",
          "square.urlscheme.alert.linkjoin.function.off":
            "Unable to join via invitation link.\nAsk an OpenChat member to invite you.",
          "square.urlscheme.desc2":
            "You can only join this square from iOS or Android devices. ",
          "square.urlscheme.error.notexist": "This OpenChat does not exist.",
          "square.urlscheme.invite.msg":
            "You've been invited to join an OpenChat.",
          "square.urlscheme.package":
            "[%1] You've been invited to join an OpenChat.\n%3\n%2",
          "square.urlscheme.package.chatroom":
            'You\'ve been invited to join "%1". Visit the link below to join the OpenChat.\n%2',
          "square.urlscheme.package.chatroom2": "",
          "square.user.admin": "Admin",
          "square.user.coadmin": "Co-admin",
          "square.userpopup.blockinvite": "Block invites",
          "square.userpopup.error.alert.notmember":
            "No longer a member of this OpenChat.",
          "square.userpopup.friendsinfo.btn": "Info ",
          "square.userpopup.friendsrequest.btn": "Friend request",
          "square.userpopup.kickout.ban.btn": "Ban",
          "square.userpopup.kickout.btn": "Ban",
          "square.userpopup.kickout.cancel.btn": "Cancel",
          "square.userpopup.post.count.btn": "Posts",
          "square.yourthreads.title.yourthreads": "Your threads",
          "sticion.msg.desc.expired": "These emoji have expired.",
          "sticker.btn.deleteThisSticker": "Delete sticker set",
          "sticker.btn.openWebStore": "Sticker Shop",
          "sticker.customsticker.btn.edit": "Edit caption",
          "sticker.customsticker.cancelalert.desc":
            "Your custom caption will be lost if you leave this page. Are you sure?",
          "sticker.customsticker.discard.alert": "Leave",
          "sticker.customsticker.edit.overflow": "Caption is too long.",
          "sticker.customsticker.error.updatename.desc":
            "Sorry, we weren't able to update your caption just now.",
          "sticker.customsticker.invalidwordupdate.desc":
            "These stickers were disabled because an invalid word was detected in their custom caption. Please edit the caption to keep using these stickers.",
          "sticker.customsticker.sync.alert":
            "Custom captions created on desktop may not be applied immediately on your mobile device. You can update these stickers on your mobile device by downloading the sticker set in Settings > Stickers > My Stickers.",
          "sticker.customsticker.tooltip":
            "Create your own personalized sticker captions!",
          "sticker.download.btn": "Download",
          "sticker.download.fail": "Download unsuccessful.\nPlease try again.",
          "sticker.downloadAll.confirm": "Download all your stickers?",
          "sticker.downloadAll.desc": "Download all your stickers at once.",
          "sticker.downloadAll.downloading": "Downloading stickers...",
          "sticker.downloading.desc":
            "Downloading stickers.\nPlease wait a moment.",
          "sticker.edit.hint.default": 'Enter a caption for "****"',
          "sticker.edit.invalidword.desc": "Invalid word detected.",
          "sticker.error.downloadlfailed.desc": "Unable to download stickers.",
          "sticker.expired.desc": "%1 expired. These stickers will be removed.",
          "sticker.msg.desc.delete": "Delete",
          "sticker.msg.desc.expired": "These stickers have expired.",
          "sticker.msgsticker.button.back": "Back",
          "sticker.msgsticker.button.cancel": "Cancel",
          "sticker.msgsticker.button.edit": "Edit caption",
          "sticker.msgsticker.button.save": "Save",
          "sticker.msgsticker.desc.howtoedit":
            "Click a sticker to edit the caption for it.",
          "sticker.msgsticker.desc.prompt":
            "Your new message will appear in future stickers you send.",
          "sticker.msgsticker.validation.errorrefresh":
            "Something went wrong. Click the sticker to refresh the image.",
          "sticker.msgsticker.validation.toolong": "Try a shorter message.",
          "sticker.nearlyExpired.desc.one": "These stickers expire in %n day.",
          "sticker.nearlyExpired.desc.other":
            "These stickers expire in %n days.",
          "sticker.recommendedSticker.label": "Recommended stickers",
          "sticker.search.hint": "Search",
          "sticker.search.nosearchresult": "No results found.",
          "sticker.stickerspremium.deletsticker.popup":
            "Delete this sticker set from your Premium collection?",
          "sticker.stickerspremium.dropped.desc":
            "Please buy these stickers to keep using them.",
          "sticker.stickerspremium.dropped.title":
            "These stickers are no longer available on LINE Stickers Premium",
          "sticker.stickerspremium.emojidropped.desc":
            "Please buy these emoji to keep using them.",
          "sticker.stickerspremium.emojidropped.title":
            "These emoji are no longer available on\nLINE Stickers Premium",
          "sticker.stickerspremium.emojiexpired.desc":
            "To keep using these emoji, please renew your LINE Stickers Premium Deluxe course subscription.",
          "sticker.stickerspremium.expired.desc":
            "To keep using these stickers, please renew your LINE Stickers Premium subscription.",
          "sticker.stickerspremium.expired.title":
            "Your Premium membership expired",
          "sticker.unpurchased.purchase.btn": "Purchase",
          "sticker.unpurchased.recommended.title": "Recommended",
          "sticon.downloadAll.desc": "Download all your emojis at once.",
          "sticon.downloadAll.downloading": "Downloading emoji...",
          "sticon.downloading.desc":
            "Downloading emoji.\nPlease wait a moment.",
          "sticon.expired.desc": "%1 expired. These emoji will be removed.",
          "sticon.nearlyExpired.desc.one": "These emoji expire in %n day.",
          "sticon.nearlyExpired.desc.other": "These emoji expire in %n days.",
          "sticon.recommendedEmoji.label": "Recommended emoji",
          "sticon.stickerspremium.deletemoji.popup":
            "Delete this emoji set from your Premium collection?",
          "subprofile.common.button.cancel": "Cancel",
          "subprofile.common.popupbutton.continue": "Continue",
          "subprofile.common.toast.settingupdated": "Profile settings updated.",
          "subprofile.editfriends.button.done": "Done",
          "subprofile.editfriends.popupdesc.dontshowagain": "Don't show again",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "Unable to select some friends for this profile. Please try again.",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "Unable to select some friends for this profile.",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "You reached the limit of friends you can set to a profile.",
          "subprofile.editfriends.popuptitle.networkerror":
            "A network error occurred. Please check your connection and try again.",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "This feature is only available on the smartphone version of the LINE app.",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "A different profile will be shown to this friend. Continue?",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "The friends you selected will see this profile. Continue?",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "A temporary error occurred. Please try again later.",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "Unable to load your friend list. Please try again.",
          "subprofile.editfriends.subtitle.addfriend": "Add friends",
          "subprofile.editfriends.title.onlyonmobileapp":
            "You can create or delete a subprofile on the mobile version.",
          "subprofile.editfriends.title.selectprofile": "Select profile",
          "subprofile.editfriends.toast.profileupdatedplural.one":
            "Profile updated for %n friend.",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "Profile updated for %n friends.",
          "subprofile.friendsprofile.title.setyourprofile":
            "Set profile display",
          "subprofile.friendsprofile.tooltip.subprofile":
            "Set the profile to show this friend.",
          "subprofile.groupchatmenu.group.profile": "Group Profile",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "Change which profile to show friends in group chats.",
          "subprofile.groupprofile.tooltip.subprofile":
            "Set the profile to use in this group.",
          "subprofile.groupsettings.button.edit": "Edit",
          "subprofile.groupsettings.subtitle.amountofprofile.one":
            "%n profile being shown",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "%n profiles being shown",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "You can set a subprofile after creating it on the mobile version.",
          "subprofile.selectfriends.button.deselectall": "Deselect all",
          "subprofile.selectfriends.button.selectall": "Select all",
          "subprofile.selectfriends.button.selectprofile": "Select profile",
          "subprofile.selectfriends.desc.selectfriends":
            "You can only set a subprofile for friends. Group members who aren't your friend will see your main profile.",
          "subprofile.settings.button.edit": "Your profiles",
          "subprofile.settings.desc.aboutsubprofile":
            "You can only edit an existing subprofile on the desktop version. Create or delete a subprofile on the mobile version.",
          "subprofile.settings.desc.zerocase":
            'No friends set yet. Click "Add friends" and select who will see this profile.',
          "subprofile.settings.title.app": "App",
          "subprofile.yourprofile.bannerdesc.cantsetsubprofile":
            "Unable to set a subprofile.",
          "subprofile.yourprofile.bannerdesc.shownfor30days":
            "Your subprofile will be shown for the next 30 days. Renew your membership to continue using it.",
          "subprofile.yourprofile.bannertitle.expired": "Membership expired",
          "subprofile.yourprofile.bannertitle.temporaryerror":
            "Temporary error",
          "subprofile.yourprofile.button.editfriends": "Edit friends",
          "subprofile.yourprofile.desc.amountoffriend.one":
            "%n friend can see this profile",
          "subprofile.yourprofile.desc.amountoffriend.other":
            "%n friends can see this profile",
          "subprofile.yourprofile.subtitle.mainprofile": "Main profile",
          "subprofile.yourprofile.subtitle.subprofile": "Subprofile",
          "subprofile.yourprofile.title.editfriends": "Edit friends",
          "subprofile.yourprofile.title.yourprofile": "Your profiles",
          "talk.addFriend.recommend.reason.group":
            "Member of one of your groups",
          "talk.addFriend.recommend.reason.group.name":
            "Member of group \u300c%1\u300d",
          "talk.addFriend.recommend.reason.lineid": "Added you by LINE ID",
          "talk.addFriend.recommend.reason.phone": "Added you by phone number",
          "talk.addFriend.recommend.reason.qrcode": "Added you by QR code",
          "talk.btn.addbuddy.title": "Add",
          "talk.btn.cancel.title": "Cancel",
          "talk.btn.join.title": "Join",
          "talk.chatlist.chatheader.title": "Chats",
          "talk.chatlist.floating.button.chat": "Chat",
          "talk.chatlist.floating.button.chatandgroup": "Group or chat",
          "talk.chatlist.floating.button.group": "Group",
          "talk.chatlist.floating.button.square": "OpenChat",
          "talk.chatlist.floating.createChat": "Create chat",
          "talk.chatlist.floating.menu.chatandgroup": "Create a chat or group",
          "talk.chatlist.groupheader.title": 'Groups with members named "%1"',
          "talk.chatlist.menu.hide": "Hide",
          "talk.chatlist.menu.pin.off": "Unpin chat",
          "talk.chatlist.menu.pin.on": "Pin chat",
          "talk.chatlist.menu.readAll": "Mark all as read",
          "talk.chatlist.msgsSearchCount.few": "%n Messages found",
          "talk.chatlist.msgsSearchCount.many": "%n Messages found",
          "talk.chatlist.msgsSearchCount.one": "%n Message found",
          "talk.chatlist.msgsSearchCount.other": "%n Messages found",
          "talk.chatlist.msgsSearchCount.plurals.one": "%n message found",
          "talk.chatlist.msgsSearchCount.plurals.other": "%n messages found",
          "talk.chatlist.msgsSearchCount.two": "%n Messages found",
          "talk.chatlist.msgsSearchCount.zero": "%n Messages found",
          "talk.chatlist.msgsSearchHeader.title": "Messages",
          "talk.chatlist.search.placeholder": "Search chats",
          "talk.label.addbuddy.title": "Add",
          "talk.label.alreadycontact.title":
            "This user is already your friend.",
          "talk.label.blocked.buddy.title":
            "This account is blocked. Check your settings to unblock them.",
          "talk.label.buddies.title": "Friends",
          "talk.label.buddylist.title": "Friends",
          "talk.label.chatlist.title": "Chats",
          "talk.label.empty.description.1":
            "Add friends using ID search or from your friend recommendations list.\n",
          "talk.label.empty.description.3":
            "Add your friends by searching\nfor their ID in the search box.",
          "talk.label.empty.title.1": "Let's add some friends!",
          "talk.label.empty.title.2": "Let's start chatting!",
          "talk.label.empty.title.3": "Find your friends!",
          "talk.label.failed.title": "Unable to display friend list.",
          "talk.label.failedsearch.rejected.title":
            "The maximum number of searches has been exceeded.\nSearching by ID or phone number is temporarily unavailable.",
          "talk.label.failedsearch.title": "User not found.\n",
          "talk.label.favorite.title": "Favorites",
          "talk.label.groups.title": "Groups",
          "talk.label.invited.title": "Group invitations",
          "talk.label.newfriend.title": "New friends",
          "talk.label.nosearchresult.title": "No results found.",
          "talk.label.placehodler.title": "Search by display name",
          "talk.label.recentFriends.title": "Recent chats",
          "talk.label.recommendbuddyplacehodler.title": "Search by ID",
          "talk.label.recommended.addFriend": "Add as friend",
          "talk.label.recommended.officialAccount.title":
            "Official account recommendations",
          "talk.label.recommended.title": "Friend recommendations",
          "talk.label.search.friends": "Search for friends",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "User not found.",
          "talk.label.search.friends.phoneNumber.error":
            "Phone number does not exist or may not be searchable.\n",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "You can only search for other users by phone number after registering your own number on LINE.\nPlease go to Settings > Profile on the mobile version of LINE to register your phone number.",
          "talk.label.square.title": "OpenChat",
          "talk.label.thatisyou.title": "You can't add yourself as a friend.",
          "talk.menu.aboutgroup": "Edit this Group",
          "talk.menu.addfavorite": "Add to favorites",
          "talk.menu.addgroup": "Create a group",
          "talk.menu.block": "Block",
          "talk.menu.call": "Call",
          "talk.menu.call.video": "Video call",
          "talk.menu.call.voice": "Voice call",
          "talk.menu.editname": "Change friend's name",
          "talk.menu.exit": "Quit",
          "talk.menu.group.call": "Start a call",
          "talk.menu.help": "Help",
          "talk.menu.hide": "Hide",
          "talk.menu.leavegroup": "Leave",
          "talk.menu.logout": "Log out",
          "talk.menu.myProfile": "My Profile",
          "talk.menu.notes": "Notes",
          "talk.menu.posts": "Posts",
          "talk.menu.rejectbuddy": "Block",
          "talk.menu.rejectgroup": "Decline",
          "talk.menu.removeFavorite": "Remove from favorites",
          "talk.menu.removetalkitem": "Delete",
          "talk.menu.sendContact": "Share contact",
          "talk.menu.setting": "Settings",
          "talk.menu.showProfile": "Profile",
          "talk.menu.starttalk": "Start chat",
          "talk.menu.talk": "Chat",
          "talk.menu.talkbuddy": "Chat",
          "talk.menu.talkgroup": "Chat",
          "talk.menu.voip": "Voice call",
          "talk.msg.addbuddy.failed": "Unable to add friend(s).",
          "talk.msg.addrecommended.failed": "Unable to add friend(s).",
          "talk.msg.block.failed": "Unable to block friend.",
          "talk.msg.blockrecommended.failed": "Unable to block this friend.",
          "talk.msg.del.1.n":
            "If you delete this chat from your chat list, you'll no longer be able to view its chat history or remain in it. Delete this chat?",
          "talk.msg.del.room":
            "If you delete this chat from your chat list, you won't be able to restore its chat history. Delete this chat?",
          "talk.msg.favorite.failed": "Unable to add to favorites.",
          "talk.msg.favorite.overflow.failed":
            "You can only have up to 100 favorites.",
          "talk.msg.hide.failed": "Unable to hide account(s).",
          "talk.msg.joininvitedgroup.failed": "Unable to join group.",
          "talk.msg.leavegroup.failed": "Unable to leave group.",
          "talk.msg.no.room": "This chat has been deleted.",
          "talk.msg.rejectinvitedgroup.failed": "Unable to decline invitation.",
          "talk.network.unreachable": "Unstable connection.",
          "talk.search.hint": "Search messages, names",
          "talk.search.label.chatMember": "Search names",
          "talk.search.label.displayName": "Search by name",
          "talk.search.label.member.all": "Members (%1)",
          "talk.search.label.member.selected": "%1 member(s) selected",
          "talk.search.label.reSearch": "Search within these results",
          "talk.search.label.reSearch.noResult": "Unable to search further. ",
          "talk.search.label.textMessage": "Search messages",
          "talk.tooltip.delete": "Delete",
          "theme.mode.guide.dark.desc":
            'Your display mode is now set to dark mode. Go to Settings > Basic > "Display mode" for more options.',
          "theme.mode.guide.desc":
            "The display mode was automatically applied according to your system setting. Go to Settings > Basic to switch the display mode.",
          "theme.mode.guide.light.desc":
            'You can now set the display mode to dark mode in LINE. Change the display mode in Settings > Basic > "Display mode."',
          "theme.mode.guide.title": "Try the new display mode.",
          "timeline.alert.attach": "You can add up to 1 attachment.",
          "timeline.alert.attach.unavailable":
            "Your attachments contain a file that can't be added to a post. ",
          "timeline.alert.attachphoto": "You can attach up to 9 photos.",
          "timeline.alert.commentmaxcount":
            "You can only enter up to 1,000 characters.",
          "timeline.alert.confirm.close":
            "You haven't finished your note yet. Leave without finishing?",
          "timeline.alert.confirm.deletecomment":
            "Are you sure you want to delete this comment?",
          "timeline.alert.confirm.deletepost":
            "If you delete this, its comments will also be deleted.\nContinue?",
          "timeline.alert.confirm.deletethumb": "Delete the photo?",
          "timeline.alert.confirm.replacepost":
            "You are currently creating a post. Discard it and create a new one?",
          "timeline.alert.deletedpost": "This post has been deleted.",
          "timeline.alert.discard": "Discard",
          "timeline.alert.error.group.delete":
            "The selected custom list has been deleted.\nPlease select a different list.",
          "timeline.alert.error.group.rights":
            "You don't have any permissions in the selected group.\nPlease select a different group.",
          "timeline.alert.fileMaxcount":
            "You can attach up to %n photos or videos.",
          "timeline.alert.fileMaxcount.plurals.one":
            "You can attach up to %n photo or video.",
          "timeline.alert.fileMaxcount.plurals.other":
            "You can attach up to %n photos or videos.",
          "timeline.alert.invalidcoverimage": "Unable to send file.",
          "timeline.alert.mediaMaxcount":
            "You can attach up to 20 stickers, photos, or videos.",
          "timeline.alert.official.addfriend":
            "Add this official account as a friend to comment on and like its posts.\nAdd account as friend?\n ",
          "timeline.alert.official.addfriend.share":
            "Add this official account as a friend to share its posts with your friends. Add account as friend?",
          "timeline.alert.official.unblockfriend":
            "You've blocked this official account.\nIf you unblock it, you can comment on and like its posts.\nUnblock account?",
          "timeline.alert.official.unblockfriend.share":
            "You've blocked this official account.\nIf you unblock it, you can share its posts.\nUnblock account?",
          "timeline.alert.photoMaxsize":
            "You can only add photos smaller than 20 MB.\n",
          "timeline.alert.photolimit": "Up to 20 MB per photo",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount":
            "You can only attach up to %1 photos.",
          "timeline.alert.stickerMaxcount": "You can attach up to %n stickers.",
          "timeline.alert.stickerMaxcount.plurals.one":
            "You can attach up to %n sticker.",
          "timeline.alert.stickerMaxcount.plurals.other":
            "You can attach up to %n stickers.",
          "timeline.alert.stickerUploadRule":
            "Only one sound sticker or animated sticker can be attached per post. They can't be attached along with regular stickers.",
          "timeline.alert.textmaxcount":
            "You can only enter up to 10,000 characters.",
          "timeline.alert.unblockfriend":
            "You've blocked this account. If you unblock it, you can share its posts. Unblock this account?",
          "timeline.alert.unblockfriend.share":
            "You've blocked this account. If you unblock it, you can share its posts. Unblock this account?",
          "timeline.alert.urlUploadRule": "You can only attach one link.",
          "timeline.alert.videoMaxLength":
            "You can attach a video of up to 5 minutes in length.\n",
          "timeline.alert.videoMaxsize":
            "You can only post videos that are less than 200 MB.\n",
          "timeline.alert.videolength":
            "You can't attach videos longer than 5 minutes.",
          "timeline.alert.videolimit": "Up to 200 MB or 5 minutes per video",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "You can only post videos that are less than 200 MB.\n",
          "timeline.alert.waitcommentdone": "Please try again later.",
          "timeline.already.remove.comment": "This comment has been deleted.",
          "timeline.attachlink.delete": "Delete",
          "timeline.attachlink.hint": "Enter a URL.",
          "timeline.attachlink.title": "Add link",
          "timeline.comment.approval":
            "Your comment will be displayed once it's approved by the official Home admin.",
          "timeline.comment.blinddbyadmin":
            "This comment has been deleted by the admin.",
          "timeline.comment.delete": "Delete",
          "timeline.comment.hint": "Enter your comment.",
          "timeline.comment.like": "Like",
          "timeline.comment.like.cancel": "Unlike",
          "timeline.comment.loadprevious": "Load previous comments",
          "timeline.comment.photo.retry":
            "Unable to load image.\nPlease try again.",
          "timeline.comment.reply": "Reply",
          "timeline.comment.stickerorphoto":
            "Comments can't include more than one sticker or photo.",
          "timeline.comment.write": "Post",
          "timeline.common.cancel": "Cancel",
          "timeline.common.ok": "OK",
          "timeline.common.share": "Share",
          "timeline.date.beforeHour.plurals.few": "%n hours ago",
          "timeline.date.beforeHour.plurals.many": "%n hours ago",
          "timeline.date.beforeHour.plurals.one": "%n hour ago",
          "timeline.date.beforeHour.plurals.other": "%n hours ago",
          "timeline.date.beforeHour.plurals.two": "%n hours ago",
          "timeline.date.beforeHour.plurals.zero": "%n hours ago",
          "timeline.date.beforeMinute.plurals.few": "%n minutes ago",
          "timeline.date.beforeMinute.plurals.many": "%n minutes ago",
          "timeline.date.beforeMinute.plurals.one": "%n minute ago",
          "timeline.date.beforeMinute.plurals.other": "%n minutes ago",
          "timeline.date.beforeMinute.plurals.two": "%n minutes ago",
          "timeline.date.beforeMinute.plurals.zero": "%n minutes ago",
          "timeline.date.beforeYesterday": "Two days ago at %1",
          "timeline.date.justNow": "Just now",
          "timeline.date.yesterday": "Yesterday at %1",
          "timeline.emptypost.networkerror":
            "Unable to process your request due to a connection error.\nPlease try again.",
          "timeline.emptypost.other": "No shared moments.",
          "timeline.emptypost.unsupported":
            "This official account only sends chat messages.",
          "timeline.error.and.retry":
            "Unable to process your request due to a temporary error.\nPlease try again.",
          "timeline.error.attach.popupSticker":
            "This sticker will be added as a static sticker without animation or sound.",
          "timeline.error.cannot.access.file":
            "Unable to upload some of your photos because\nthe original photos were deleted from your PC\nor the maximum upload limit (20 MB) was reached.",
          "timeline.error.list.load.retry":
            "Unable to load info.\nPlease try again.",
          "timeline.footer.comment": "Comment",
          "timeline.footer.like": "Like",
          "timeline.groupPanel.startgroup": "Make a group!",
          "timeline.groupPanel.startgroup.desc":
            "Try sharing notes and creating albums.",
          "timeline.label.nosearchresult.title": "No results found.",
          "timeline.like.count.one": "%1 like",
          "timeline.like.count.other": "%1 likes",
          "timeline.loading.examine.time": "Maintenance schedule",
          "timeline.loading.examine.timeline":
            "%1 is currently under maintenance.",
          "timeline.loading.neednewversion":
            "Check it out on the latest version of LINE.",
          "timeline.loading.networkerror":
            "Unable to process your request due to a connection error.\nPlease try again.",
          "timeline.loading.retry": "Reload",
          "timeline.menu.sharetotalk": "Share to chat",
          "timeline.mergedposts.detail": "Details",
          "timeline.no": "No",
          "timeline.note.popupdesc.sharenote": "Share this note in the chat?",
          "timeline.noti.content.NC_1001_1": "%1 added a new note.",
          "timeline.noti.content.NC_1001_2": "%1 and %2 added new notes.",
          "timeline.noti.content.NC_1001_3":
            "%1, %2, and %3 others added new notes.",
          "timeline.noti.content.NC_1002_1": "%1 commented on your post.",
          "timeline.noti.content.NC_1002_2":
            "%1 and %2 commented on your post.",
          "timeline.noti.content.NC_1002_3":
            "%1, %2, and %3 others commented on your post.",
          "timeline.noti.content.NC_1003_1": "%1 mentioned you in a comment.",
          "timeline.noti.content.NC_1003_2":
            "%1 and %2 mentioned you in their comments.",
          "timeline.noti.content.NC_1003_3":
            "%1, %2, and %3 others mentioned you in their comments.",
          "timeline.noti.content.NC_1004_1": "%1 liked your post.",
          "timeline.noti.content.NC_1004_2": "%1 and %2 liked your post.",
          "timeline.noti.content.NC_1004_3":
            "%1, %2, and %3 others liked your post.",
          "timeline.noti.content.NC_2001_1": "%1 created a new album.",
          "timeline.noti.content.NC_2001_2": "%1 and %2 created new albums.",
          "timeline.noti.content.NC_2001_3":
            "%1, %2, and %3 others created new albums.",
          "timeline.noti.content.NC_2002_1": "%1 added a photo to an album.",
          "timeline.noti.content.NC_2002_2":
            "%1 and %2 added photos to an album.",
          "timeline.noti.content.NC_2002_3":
            "%1, %2, and %3 others added photos to an album.",
          "timeline.noti.content.NC_3001_1": "%1 commented on your post.",
          "timeline.noti.content.NC_3001_2":
            "%1 and %2 commented on your post.",
          "timeline.noti.content.NC_3001_3":
            "%1, %2, and %3 others commented on your post.",
          "timeline.noti.content.NC_3002_1": "%1 mentioned you in a comment.",
          "timeline.noti.content.NC_3002_2":
            "%1 and %2 mentioned you in their comments.",
          "timeline.noti.content.NC_3002_3":
            "%1, %2, and %3 others mentioned you in their comments.",
          "timeline.noti.content.NC_3003_1": "%1 liked your post.",
          "timeline.noti.content.NC_3003_2": "%1 and %2 liked your post.",
          "timeline.noti.content.NC_3003_3":
            "%1, %2, and %3 others liked your post.",
          "timeline.noti.content.NC_4001_1": "%1 joined your group.",
          "timeline.noti.content.NC_4002_1": "%1 shared your post.",
          "timeline.noti.content.NC_UPDATE":
            "Update LINE to see this notification.",
          "timeline.noti.empty": "You have no new notifications.",
          "timeline.noti.error":
            "Unable to load notifications.\nPlease try again later. ",
          "timeline.noti.home": "Home",
          "timeline.oamerge.feed.title": "Your official accounts",
          "timeline.oamerge.title": "Your official accounts",
          "timeline.officialprofile.networkerror":
            "Your request hasn't been processed due to a connection error.\nPlease try again.",
          "timeline.officialprofile.title": "Profile",
          "timeline.original.open": "See Original Page",
          "timeline.poppost.counttime.hour.one": "%n hour left",
          "timeline.poppost.counttime.hour.other": "%n hours left",
          "timeline.poppost.counttime.hour.plurals.few": "%n hours left",
          "timeline.poppost.counttime.hour.plurals.many": "%n hours left",
          "timeline.poppost.counttime.hour.plurals.one": "%n hour left",
          "timeline.poppost.counttime.hour.plurals.other": "%n hours left",
          "timeline.poppost.counttime.hour.plurals.two": "%n hours left",
          "timeline.poppost.counttime.hour.plurals.zero": "%n hours left",
          "timeline.poppost.counttime.min.one": "%n minute left",
          "timeline.poppost.counttime.min.other": "%n minutes left",
          "timeline.poppost.counttime.min.plurals.few": "%n minutes left",
          "timeline.poppost.counttime.min.plurals.many": "%n minutes left",
          "timeline.poppost.counttime.min.plurals.one": "%n minute left",
          "timeline.poppost.counttime.min.plurals.other": "%n minutes left",
          "timeline.poppost.counttime.min.plurals.two": "%n minutes left",
          "timeline.poppost.counttime.min.plurals.zero": "%n minutes left",
          "timeline.poppost.counttime.soon": "1 minute left",
          "timeline.poppost.tooltip.hour.one":
            "This post will be deleted in %n hour.",
          "timeline.poppost.tooltip.hour.other":
            "This post will be deleted in %n hours.",
          "timeline.poppost.tooltip.hour.plurals.few":
            "This post will be deleted in %n hours.",
          "timeline.poppost.tooltip.hour.plurals.many":
            "This post will be deleted in %d hours.",
          "timeline.poppost.tooltip.hour.plurals.one":
            "This post will be deleted in %n hour.",
          "timeline.poppost.tooltip.hour.plurals.other":
            "This post will be deleted in %n hours.",
          "timeline.poppost.tooltip.hour.plurals.two":
            "This post will be deleted in %n hours.",
          "timeline.poppost.tooltip.hour.plurals.zero":
            "This post will be deleted in %n hours.",
          "timeline.poppost.tooltip.min.one":
            "This post will be deleted in %n minute.",
          "timeline.poppost.tooltip.min.other":
            "This post will be deleted in %n minutes.",
          "timeline.poppost.tooltip.min.plurals.few":
            "This post will be deleted in %n minutes.",
          "timeline.poppost.tooltip.min.plurals.many":
            "This post will be deleted in %n minutes.",
          "timeline.poppost.tooltip.min.plurals.one":
            "This post will be deleted in %n minute.",
          "timeline.poppost.tooltip.min.plurals.other":
            "This post will be deleted in %n minutes.",
          "timeline.poppost.tooltip.min.plurals.two":
            "This post will be deleted in %n minutes.",
          "timeline.poppost.tooltip.min.plurals.zero":
            "This post will be deleted in %n minutes.",
          "timeline.poppost.tooltip.soon":
            "This post will be deleted in 1 minute.",
          "timeline.post.attach.drag.guide":
            "You can also drag and drop to add photos or videos.",
          "timeline.post.attach.drag.guide.premium":
            "You can also drag and drop to add photos.",
          "timeline.post.attach.draghere":
            "Drag and drop to add photos or videos.",
          "timeline.post.attach.draghere.premium":
            "Drag and drop to add photos.",
          "timeline.post.delete": "Delete",
          "timeline.post.deleted": "This post has been deleted.",
          "timeline.post.deletedbyadmin":
            "This post has been deleted by the admin.",
          "timeline.post.done": "Done",
          "timeline.post.edit": "Edit",
          "timeline.post.edit.desc":
            "Your note contains unsaved changes. Leave without saving?",
          "timeline.post.friends": "%1's LINE friends",
          "timeline.post.friends.detail":
            "Only %1's LINE friends can see this post.\n",
          "timeline.post.grid.more": "+%n",
          "timeline.post.hashtag": "Hashtags",
          "timeline.post.hashtag.guide.title": "Try adding #tags!",
          "timeline.post.hashtag.results.related": "Related",
          "timeline.post.hint": "What's new?",
          "timeline.post.keep": "Keep",
          "timeline.post.likeshare.cancel": "Cancel share",
          "timeline.post.likeshare.canceled": "Canceled sharing the post.",
          "timeline.post.likeshare.done":
            "You have already liked and shared this. ",
          "timeline.post.mention.alert":
            "You can only mention up to 20 people per message.",
          "timeline.post.mention.empty.description":
            "\"<![CDATA[Type <font color='#4166b1'>@friend's name</font> to mention your friends.\nThose friends will instantly receive a notification and see your post.]]>\"",
          "timeline.post.mention.empty.title":
            "Mention friends with an @symbol!",
          "timeline.post.mention.setting.edit.alert":
            "If you change the privacy settings for this post, the following users will no longer be able to see it. Continue?",
          "timeline.post.newpost": "New Posts",
          "timeline.post.onlyme": "Only me",
          "timeline.post.public": "Public",
          "timeline.post.public.desc": "Public posts can be seen by anyone.",
          "timeline.post.public.sharetotimeline": "Share on Timeline",
          "timeline.post.scope.group":
            "Only members of this group can view this note.",
          "timeline.post.scope.manToMan": "Only you and %1 can see this note.",
          "timeline.post.seemore": "See more",
          "timeline.post.share": "Share",
          "timeline.post.sharedchanged":
            "This post can't be displayed because the privacy settings of the original post have changed.",
          "timeline.post.shareddeleted":
            "The post has either been deleted or the poster is no longer using LINE.",
          "timeline.post.sorting.option.ranking": "Sort by ranking",
          "timeline.post.sorting.option.time": "Sort by time received",
          "timeline.post.write": "Post",
          "timeline.publicgroup.emptymember": "No friends have been added.",
          "timeline.publicgroup.group": "Groups",
          "timeline.publicgroup.group.empty": "No group lists.",
          "timeline.publicgroup.linefriends": "Friends",
          "timeline.publicgroup.linefriends.desc":
            "Visible to friends who can view your Home",
          "timeline.publicgroup.nobodysee":
            "This post can't be seen by anyone.",
          "timeline.publicgroup.sharelist": "Custom list",
          "timeline.publicgroup.title.detail": "Who can view this post?",
          "timeline.publicgroup.title.post": "Post privacy settings",
          "timeline.recommend": "Recommend",
          "timeline.report.desc":
            "Filing a report will send the relevant user's info along with either your 100 most recent chat messages with the user or the post in question.",
          "timeline.report.done": "Report sent.",
          "timeline.report.reason.advertising": "Advertising",
          "timeline.report.reason.genderHarassment": "Gender harassment",
          "timeline.report.reason.harassment": "Harassment",
          "timeline.report.reason.other": "Other",
          "timeline.report.selectReason":
            "Tell us why you are sending us this report.",
          "timeline.report.title": "Report",
          "timeline.request.failed.likeshare.status":
            "Unable to load sharing status.",
          "timeline.request.failed.timeline": "Unable to load this post.",
          "timeline.request.failed.url":
            "Unable to load URL information.\nPlease try again.",
          "timeline.request.failed.user": "No users found.",
          "timeline.retry": "Retry",
          "timeline.setting.autoopen": "Share with new friends by default",
          "timeline.setting.buddylist.empty":
            "You don't have any LINE friends yet.",
          "timeline.setting.desc": "Privacy settings",
          "timeline.setting.desc2": "Choose whether to share on your Home.",
          "timeline.setting.feed.ranking": "Post order",
          "timeline.setting.feed.ranking.option": "Show popular posts first",
          "timeline.setting.label.blocked": "Hidden",
          "timeline.setting.label.unblocked": "Shown",
          "timeline.setting.usetoast":
            "Send notifications for LINE VOOM updates",
          "timeline.share.copyUrl": "Copy link",
          "timeline.share.copyUrl.toast": "Link copied to clipboard.",
          "timeline.sharetohome.hint": "Enter an additional message here",
          "timeline.sharetotalk.comfirm.desc": 'Send to "%1"?',
          "timeline.sharetotalk.empty.chat":
            "You have no chats to choose from.",
          "timeline.sharetotalk.empty.friend":
            "You have no friends to choose from.",
          "timeline.sharetotalk.empty.group":
            "You have no groups to choose from.",
          "timeline.sharetotalk.tab.chat": "Chats",
          "timeline.sharetotalk.tab.friend": "Friends",
          "timeline.sharetotalk.tab.group": "Groups",
          "timeline.sharetotalk.title": "Share to chat",
          "timeline.system.check.wait":
            "This feature is currently under maintenance.\nPlease try again later.",
          "timeline.time.afternoon": "PM",
          "timeline.time.morning": "AM",
          "timeline.video.popup.waiting":
            "Encoding in progress.\nPlease try again later.",
          "timeline.yes": "Yes",
          "timline.report.policy.desc":
            "Reporting a chat or post will send the relevant user's info along with your 20 most recent chat messages with them or the post in question.",
          "unsupported.file.checkbox": "Always compress and\xa0send",
          "unsupported.file.common":
            "Files in unsupported formats will be compressed and sent in zip format.",
          "unsupported.file.compress.fail":
            "Unable to zip your file. Please try again.",
          "unsupported.file.compressing": "Creating zip file... ",
          "unsupported.file.dontshow": "Don't show this again",
          "unsupported.file.multi":
            "Some files are in an unsupported format. Zip and send them?",
          "unsupported.file.single":
            "The file is in an unsupported format. Zip and send it?",
          "update.msg.check.security1": "Security check in progress.",
          "update.msg.check.security2": "Please wait.",
          "update.summary.url":
            "http://openapis.jboard.naver.jp/mobile/document/line_desktop/EN/997",
          "upgradegroupinvite.button.requireinvites": "Require invites",
          "upgradegroupinvite.popup.desc.toomanyfriends":
            "In groups with more than 100 members, new members must first accept an invite to join.\nTo keep this setting off, limit your group to no more than 100 members.",
          "upgradegroupinvite.popup.title.toomanyfriends":
            "Require members to accept invites to join?",
          "upic.btn.cancel.title": "Cancel",
          "upic.btn.find.title": "Browse",
          "upic.btn.ok.title": "OK",
          "upic.label.desc.title":
            "Only jpg, jpeg, png, gif, and bmp files can be uploaded.\n",
          "upic.label.upic.title": "Edit profile photo",
          "upic.msg.cantFindFile": "Unable to find file.",
          "upic.msg.not.image": "Only image files can be sent.",
          "upic.msg.select": "Select your profile photo.",
          "upic.msg.sizeExceeds": "Maximum photo size is 20 MB.",
          "user.report.error":
            "Unable to report this message because it no longer exists.",
          "user.report.policy.desc":
            "Reporting a chat or post will send the relevant user's info along with your 10 most recent chat messages with them or the post in question.",
          "user.report.question": "Block this user?",
          "user.search.placeholder": "Search by name",
          "user.warning.investmentfraud": "Watch out for fraud using LINE.",
          "user.warning.invitedtogroup":
            "<![CDATA[<b><font color='%1'>%2</font></b> invited you to a group.\n<font color='#FF3A44'>Don't recognize this person? You can block and report them.</font>]]>",
          "user.warning.spammer": "This user isn't your friend yet.",
          "user.warning.spammer.group":
            "You have been invited to a group by %1. You can report this user for any suspicious activity by clicking the Report button.",
          "videoProfile.error.fileType":
            "This file format can't be used for profile videos. Please try again.",
          "videoProfile.error.lessThenOneSec":
            "Your profile video must be at least 1 second long. Please try again.",
          "viewer.alert.desc.delete": "Delete this?",
          "viewer.alert.desc.fullsize": "Press Esc to exit full screen.",
          "viewer.alert.desc.mustinstallplugin":
            "You need a plug-in to view photos, videos, and GIFs in the media viewer. Download now?",
          "viewer.alert.image.expired.previewinstead":
            "You can only view the file thumbnail as the file itself is no longer available.",
          "viewer.alert.video.expired":
            "The video cannot be played back as the storage period has elapsed.",
          "viewer.contextmenu.copy": "Copy",
          "viewer.contextmenu.forward": "Share",
          "viewer.contextmenu.keep": "Save in Keep",
          "viewer.contextmenu.keepmemo": "Send to Keep Memo",
          "viewer.contextmenu.saveas": "Save as...",
          "viewer.contextmenu.scanqr": "Scan QR code",
          "viewer.contextmenu.scantext": "Scan text",
          "viewer.copy.toast.copied": "Copied to clipboard.",
          "viewer.error.media.download.fail":
            "Unable to save this file.\nPlease try again.",
          "viewer.error.video.common":
            "Unable to play due to a temporary error.",
          "viewer.error.video.network":
            "Unable to play due to a network or server error.\nPlease try again.",
          "viewer.error.video.transient":
            "Unable to play due to a temporary error.\nPlease try again.",
          "viewer.keep.toast.saved": "Saved in Keep.",
          "viewer.menu.edit": "Edit",
          "viewer.menu.forward": "Share",
          "viewer.menu.info.name": "Filename",
          "viewer.menu.keep": "Save in Keep",
          "viewer.menu.keepmemo": "Send to Keep Memo",
          "viewer.menu.more.delete": "Delete",
          "viewer.menu.more.info": "File details",
          "viewer.menu.more.speed": "Speed",
          "viewer.menu.openfolder": "Open folder",
          "viewer.menu.originalsize": "Actual size",
          "viewer.menu.rotate": "Rotate",
          "viewer.menu.saveas": "Save as...",
          "viewer.menu.scanqr": "Scan QR code",
          "viewer.menu.scantext": "Scan text",
          "viewer.menu.showalbums": "Show all items",
          "viewer.menu.showallcontents": "Show all items",
          "viewer.menu.thumbnail.expand": "Show thumbnails",
          "viewer.menu.thumbnail.fold": "Hide thumbnails",
          "viewer.menu.video.pause": "Pause",
          "viewer.menu.video.play": "Playback",
          "viewer.menu.video.replay": "Replay",
          "viewer.menu.video.stop": "Stop",
          "viewer.menu.video.volume": "Volume",
          "viewer.menu.zoomin": "Zoom in",
          "viewer.menu.zoomout": "Zoom out",
          "viewer.play.toast.speaker.beingconnected":
            "Switching to a new speaker. Please wait a moment.",
          "viewer.popup.info.created": "Created",
          "viewer.popup.info.filesize": "File size",
          "viewer.popup.info.from": "From",
          "viewer.popup.info.resolution": "Resolution",
          "viewer.popup.info.saved": "Saved",
          "viewer.saveas.toast.saved": "Download complete.",
          "viewer.tooltip.window.close": "Close",
          "viewer.tooltip.window.maximize": "Max",
          "viewer.tooltip.window.minimize": "Minimize",
          "viewer.tooltip.window.restore": "Restore",
          "voip.beautyfeature.button.clearall": "Clear all",
          "voip.beautyfeature.popupbutton.cancel": "Cancel",
          "voip.beautyfeature.popupbutton.clearall": "Clear all",
          "voip.beautyfeature.popupdesc.clearfaceeffects":
            "You must first clear all face effects to use the beauty feature. Clear all effects now?",
          "voip.beautyfeature.toggle.darkeneyebrows": "Darken eyebrows",
          "voip.beautyfeature.toggle.fillinlips": "Fill in lips",
          "voip.beautyfeature.toggle.resizeeyes": "Enlarge eyes",
          "voip.beautyfeature.toggle.revert": "Set to default",
          "voip.beautyfeature.toggle.slimjawline": "Slim jawline",
          "voip.beautyfeature.toggle.slimnose": "Slim nose",
          "voip.beautyfeature.toggle.smoothcomplexion": "Smooth complexion",
          "voip.button.label.call": "Answer",
          "voip.button.label.disconnect": "End",
          "voip.button.label.voiceonly": "Answer without video",
          "voip.call.tooltip.cameraunavailable": "Camera unavailable",
          "voip.call.tooltip.microphoneunavailable": "Microphone unavailable",
          "voip.connect.camera.alert":
            "A camera was detected. Turn on your camera now?",
          "voip.connect.mic.alert":
            "A microphone was detected. Turn on your microphone now?",
          "voip.desc.calling": "Calling...",
          "voip.desc.calling.failed":
            "%1Unable to make call. Please try again later.(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "You are currently calling on another device.",
          "voip.desc.calling.failed.contact.busy":
            "%1 is currently in a call.\nPlease try again later.",
          "voip.desc.calling.failed.maintance":
            "Voice calls are temporarily unavailable on the desktop version of LINE.\nPlease try again later.\n",
          "voip.desc.calling.failed.need.audio":
            "No audio device detected.\nPlease check your audio drivers and try again.",
          "voip.desc.calling.failed.need.device":
            "No microphone or speakers detected.\nPlease connect them and try again.",
          "voip.desc.calling.failed.need.devicesetting":
            "Your microphone or speaker is turned off. Please check your settings and try calling again.",
          "voip.desc.calling.failed.need.mic":
            "Unable to detect microphone.\nPlease check it and try again.",
          "voip.desc.calling.failed.need.oscamera":
            "Unable to use camera. Please grant your device access to the camera.",
          "voip.desc.calling.failed.need.osmic":
            "Unable to use microphone. Please grant your device access to the microphone.",
          "voip.desc.calling.failed.need.ospeaker":
            "Unable to use speaker. Please enable your microphone in the Control Panel.",
          "voip.desc.calling.failed.need.spk":
            "Unable to detect speakers.\nPlease check them and try again.",
          "voip.desc.calling.failed.need.update":
            "You can use voice calls on the desktop version of LINE by updating the LINE app on your mobile device.\n\n",
          "voip.desc.calling.failed.no.accept":
            "There was no answer.\nPlease try again later.",
          "voip.desc.calling.failed.other.device.use":
            "You are currently calling on another device.",
          "voip.desc.calling.failed.peer":
            "Connection error\nUnable to complete call with %1 because they are not using a compatible version of LINE.\n",
          "voip.desc.calling.video": "Making video call...",
          "voip.desc.camerausage":
            "LINE needs access to your camera to start video calls.",
          "voip.desc.camerausage.maconly":
            "LINE needs access to the camera at System Preferences > Security & Privacy > Privacy to start video calls.",
          "voip.desc.connecting": "Connecting...",
          "voip.desc.makeCall.Failed.network":
            "Unable to connect call due to network instability.\nPlease try again later.",
          "voip.desc.mic.failed":
            "There seems to be a problem with your microphone. Check your microphone if no one can hear you in the call.",
          "voip.desc.microphoneusage":
            "LINE needs access to your microphone to start voice and video calls.",
          "voip.desc.microphoneusage.maconly":
            "LINE needs access to the microphone at System Preferences > Security & Privacy > Privacy to start voice and video calls.",
          "voip.desc.ringing": "Incoming call...",
          "voip.desc.ringing.video": "Incoming video call...",
          "voip.desc.speaker.failed":
            "There seems to be a problem with your speaker. Check your speaker if you can't hear any sound.",
          "voip.disconnect.camera.entry.alert":
            "Join the video call? Your video will not be seen because your camera couldn't be detected.",
          "voip.disconnect.camera.error":
            "This feature is unavailable because your camera couldn't be detected.",
          "voip.disconnect.mic.entry.alert":
            "Join the video call? Your sound will not be heard because your microphone couldn't be detected.",
          "voip.disconnect.mic.entry.alert.audio":
            "Join the voice call? You won't be heard because your microphone couldn't be detected.",
          "voip.disconnect.mic.error":
            "This feature is unavailable because your microphone couldn't be detected.",
          "voip.disconnect.micncam.entry.alert":
            "Join the video call? Your sound and video will not be shared because your microphone and camera couldn't be detected.",
          "voip.effect.guide.adjust.effect": "Adjust beauty effect.",
          "voip.effect.guide.detect.face":
            "Make sure your face is clearly visible.",
          "voip.effect.guide.extra.001": "Try this effect with your friends.",
          "voip.effect.guide.extra.006": "Shake your head left and right.",
          "voip.effect.guide.extra.011": "Make a smiling face.",
          "voip.effect.guide.extra.012":
            "Drag the slider to adjust the intensity of effects.",
          "voip.effect.guide.eye.blink": "Blink your eyes.",
          "voip.effect.guide.mouth.open": "Open your mouth.",
          "voip.error.init.failed.callee":
            "Incoming call from %1\nDue to the current status of your PC,\xa0making a call may cause this program to shut down unexpectedly.\n",
          "voip.error.init.failed.caller":
            "Due to the current status of your PC, making a call may cause this program to shut down unexpectedly.\n",
          "voip.label.create.title": "Voice call",
          "voip.label.mic": "Microphone",
          "voip.label.speaker": "Speakers",
          "voip.label.video": "Video call",
          "voip.label.video.cameraon": "Turn on",
          "voip.label.video.local.cameraOff":
            "Your camera has been turned off.",
          "voip.label.video.local.cameraOn": "You have turned on your camera.",
          "voip.label.video.local.noCamera":
            "No camera found.\nYour friend won't be able to see you.",
          "voip.label.video.low.quality": "Unstable connection.",
          "voip.label.video.remote.cameraOff":
            "Your friend turned off their camera.",
          "voip.label.video.remote.cameraOn":
            "The other person turned on their camera.",
          "voip.label.video.remote.noCamera":
            "Your friend doesn't have a camera, or there's an error receiving their video.\n",
          "voip.label.video.ringing": "Turn on your camera?",
          "voip.label.video.title": "Video call with %1",
          "voip.media.unsupported.alert.update":
            "%1 started sharing their screen. Update LINE to the latest version to see their screen.",
          "voip.msg.already.during.call":
            "You are already on a call in another chat.",
          "voip.msg.bad.connection": "Unstable connection.",
          "voip.msg.bad.connection.failover": "Reconnecting...",
          "voip.msg.error.no.audio.source":
            "Call ended due to microphone issue. Please try calling again later.",
          "voip.msg.error.no.audio.tx.stream":
            "An error has occurred.\nPlease try again later.",
          "voip.msg.network.unstable": "Unstable connection.",
          "voip.msg.not.avalable.during.call":
            "This feature is unavailable while on a call.",
          "voip.msg.peer.no.audio.source":
            "Call ended due to issue with other participant's microphone. Please try calling again later.",
          "voip.msg.send.freeCall": "Make a voice call to %1?",
          "voip.msg.send.videoCall": "Make a video call to %1?",
          "voip.msg.switch.to.video.noCamera":
            "Your video won't be shown because no camera is detected. Accept the video call?",
          "voip.msg.video.camera.unavailable":
            "Your camera isn't supported.\nSelect another camera in Settings > Calls > \"Camera settings.\" You can still make or receive calls even if your camera isn't supported, but your friends won't be able to see you.",
          "voip.msg.video.term.device.control":
            "Video call interrupted.\nReturning to voice call mode.",
          "voip.msg.video.term.device.interrupted":
            "The other person paused their camera.",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "Video calls are currently unavailable due to a temporary error.\nPlease make a voice call instead, or try again later.",
          "voip.msg.video.term.overload.video.changing.failed":
            "Video calls are currently unavailable due to a temporary error.\nPlease try again later.",
          "voip.msg.video.term.unknown":
            "An error has occurred.\nPlease try again later.",
          "voip.msg.video.term.unstable":
            "Unable to complete video call due to network instability.",
          "voip.msg.video.term.unsupported.device.video":
            "Unable to complete video call.\nPlease make sure that the person you are trying to call is using the latest version of LINE on a device that supports video calls.\n",
          "voip.msg.video.term.unsupported.device.voice":
            "Connected without video.\nPlease make sure that the person you are trying to call is using the latest version of LINE on a device that supports video calls.\n",
          "voip.msg.warning.close": "End this call?",
          "voip.msg.warning.groupclose": "Leave this call?",
          "voip.noisecanceling.desc.guide":
            "Noise\xa0cancellation\xa0is\xa0enabled\xa0to\xa0suppress\xa0background\xa0noise.",
          "voip.noisecanceling.popup.desc":
            "Your change will be applied from the next call. To apply the change now, restart the call.",
          "voip.noisecanceling.tooltip.off": "Enable\xa0noise\xa0cancellation",
          "voip.noisecanceling.tooltip.on": "Disable noise cancellation",
          "voip.popup.end": "End call",
          "voip.popup.start": "Start",
          "voip.screen.share.remove.monitor":
            "Call ended because the monitor was disconnected.",
          "voip.screenshare.button.zoomin": "Zoom in",
          "voip.screenshare.button.zoomout": "Zoom out",
          "voip.screenshare.button.zoomreset": "Reset zoom",
          "voip.screenshare.desc.pause": "Screen sharing is paused.",
          "voip.screenshare.desc.pause.tooltip":
            "Screen sharing is paused when you minimize, resize, or move the shared window.",
          "voip.screenshare.error.closeapp":
            "You can't share screens that have already been closed.",
          "voip.screenshare.index.screen": "Screen",
          "voip.screenshare.index.window": "Window",
          "voip.screenshare.option.optimizevideoclips":
            "Optimize for video clips",
          "voip.screenshare.tooltip.fullscreen": "Desktop %1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "Optimize screen sharing for smoother video clips.",
          "voip.tooltip.callsetting": "Call settings",
          "voip.tooltip.camera.off": "Stop camera",
          "voip.tooltip.camera.on": "Start camera",
          "voip.tooltip.chat": "Chat",
          "voip.tooltip.echocanceloff": "Turn off echo cancellation",
          "voip.tooltip.echocancelon": "Turn on echo cancellation",
          "voip.tooltip.end.call": "End",
          "voip.tooltip.end.groupmeetingcall": "Leave",
          "voip.tooltip.fullhd":
            'Experience clearer audio in voice calls when "Full HD voice" turns green.',
          "voip.tooltip.mic.off": "Mute",
          "voip.tooltip.mic.off.muteronguide":
            "Your microphone is muted. Unmute your microphone to start talking.",
          "voip.tooltip.mic.off.spacebartoast":
            "Your microphone is muted. Press and hold the space bar to temporarily unmute it.",
          "voip.tooltip.mic.on": "Unmute",
          "voip.tooltip.microphone.autovolume": "Volume auto-adjusted",
          "voip.tooltip.onscreentool.clearall": "Clear all",
          "voip.tooltip.onscreentool.eraser": "Eraser",
          "voip.tooltip.onscreentool.off": "Close drawing tools",
          "voip.tooltip.onscreentool.on": "Open drawing tools",
          "voip.tooltip.onscreentool.pen": "Pen",
          "voip.tooltip.onscreentool.pointer": "Pointer",
          "voip.tooltip.onscreentool.redo": "Redo",
          "voip.tooltip.onscreentool.select": "Move",
          "voip.tooltip.onscreentool.stamp": "Stamp",
          "voip.tooltip.onscreentool.undo": "Undo",
          "voip.tooltip.screen.share": "Share screen",
          "voip.tooltip.screen.share.off": "Stop sharing",
          "voip.tooltip.screen.share.start":
            "Share your screen during video calls.",
          "voip.tooltip.screen.share.stop":
            "Your screen is being shared. Click the icon again to end screen sharing.",
          "voip.tooltip.speaker.off": "Turn off sound",
          "voip.tooltip.speaker.on": "Turn on sound",
          "voip.tooltip.switch.to.video": "Click to switch to video call",
          "voip.tooltip.video.camera": "Turn camera on/off",
          "voip.tooltip.video.camera.select": "Select camera",
          "voip.tooltip.video.fullscreen": "Enter full screen",
          "voip.tooltip.video.fullscreen.restore":
            "Restore window to previous size",
          "voip.tooltip.video.pin": "Keep window always on top",
          "voip.tooltip.video.pinoff": "Disable window always on top",
          "voip.tooltip.video.speaker": "Turn speakers on/off",
          "voip.tooltip.video.transform": "Start video call",
          "voip.tooltip.volumezero":
            "Your speaker volume is set to zero. Raise the volume to hear others.",
          "voip.video.calling.failed.cameraSwitch":
            "Unable to switch cameras.\nPlease try again.",
          "voip.video.calling.failed.noCamera":
            "Unable to turn on camera.\nPlease check if your camera is connected.",
          "voip.video.desc.makeCall.Failed":
            "Unable to connect. Please try again later.",
          "voip.video.dynamicspeaking.pinoff": "Unpin",
          "voip.video.dynamicspeaking.pinoff.desc":
            "Video pinned. Click Unpin in the top right corner of the video to unpin it.",
          "voip.video.effect.popup.downloadfail":
            "Unable to download the effect. Try again?",
          "voip.video.effect.toast.cameraoff":
            "Please turn on your camera first.",
          "voip.video.effect.toast.detectionfail":
            "Make sure your face is clearly visible.",
          "voip.video.effect.toast.downloadfail":
            "Unable to download. Please try again.",
          "voip.video.effect.toast.nospace":
            "Insufficient space on your device. Free up some storage space and try again.",
          "voip.video.effect.toast.xpccrash":
            "Camera effects have been reset due to a temporary error.\nPlease adjust the settings again.",
          "voip.video.menu.bg": "Backgrounds",
          "voip.video.menu.bg.alert.addbg":
            "Unable to load this file. Select a different file to use as your background.",
          "voip.video.menu.bg.alert.addbg.button": "Select",
          "voip.video.menu.bg.alert.maxbg":
            "Unable to add more backgrounds. Remove a background you no longer need and try again.",
          "voip.video.menu.bgsettings": "Effects",
          "voip.video.menu.blur": "Background blur",
          "voip.video.menu.effect": "Face effects",
          "voip.video.menu.filter": "Filters",
          "voip.video.popupbutton.close": "Close",
          "voip.video.popupbutton.dontshow": "Don't show",
          "voip.video.popupbutton.opensettings": "Open settings",
          "voip.video.popupbutton.show": "Show",
          "voip.video.popupdesc.dontshowpreview":
            "By disabling this option, you'll be able to join video calls without previewing your camera.",
          "voip.video.popuptitle.dontshowpreview":
            "Change your camera preview setting",
          "voip.video.preview.blur.off": "None",
          "voip.video.preview.blur.on": "Background\nblur",
          "voip.video.preview.cameraoff": "Turn off camera",
          "voip.video.preview.desc":
            "Check your camera before you join the video call.",
          "voip.video.preview.join": "Join",
          "voip.video.preview.title": "Camera preview",
          "voip.video.title.videocallwith": "Video call with %1",
          "voip.video.tooltip.filternblur":
            "Try out filters and background blur effect.",
          "voip.video.tooltip.startvideocall": "Click to start the video call.",
          "voip.video.tooltip.videomirroring": "Disable video mirroring",
          "voip.video.tooltip.videomirroringoff": "Turn off video mirroring",
          "voip.video.tooltip.videomirroringon": "Turn on video mirroring",
          "voip.videocall.button.beautyfeature": "Beauty",
          "voip.videocall.popup.start": "Start",
          "voip.videocall.popup.turnon": "Turn on",
          "win10.notification.reply.guide": "Reply here",
        };
      },
    }]);
