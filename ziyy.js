// Hallo wangsaf kembali lagi sama gw aldi fauzi

// di kali ini gw buat scrip bot simple ya dan juga gak banyak fitur nya karena masih tahap mengembangkan
// jika ada yang eror segera lapor gw yaa bisa dm ig gw https://Instagram.com/xziyy__
// jika kalian suka dengan scrip ini bisa komen video yt gw
// dengan cara hastag #KembanginLagiBangBiarKeren
// .....
// case ini full rest api gw ya bang jadi kalian sung pake ae gausah beli hehe


// jangan terlalu di recode jika tidak bisa merecode
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./data/simple.js");
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
const FormData = require('form-data');
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
//const {createSticker} = require('wa-sticker-formatter')// module : "wa-sticker-formatter": "^4.0.14",
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const Exif = require('./data/exif');
const exif = new Exif();
const fetch = require("node-fetch");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require("./data/functions");
const { color, bgcolor } = require("./data/color");
const { fetchJson, getBase64, kyun, createExif } = require("./data/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./data/ytdl");
const { webp2mp4File } = require("./data/webp2mp4");
const afk = JSON.parse(fs.readFileSync("./data/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./data/offline");
const { jadibot, stopjadibot, listjadibot } = require("./data/jadibot");
const {
        
smsg
    
} = require('./data/simple.js')

// DATABASE
const welkom = JSON.parse(fs.readFileSync('./library/database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./library/database/antilink.json'))


thumbnail = fs.readFileSync("./library/gambar/imageThumb.jpeg");
fakereply = fs.readFileSync("./library/gambar/imageFake.jpeg");

//prefix
multi = true
nopref = false
prefa = '!'

// vn/read/ngetik
aread = false
vn = false
ngetik = false

// public/self
self = false,

//EDIT DI INI KAK
ownerNumber = ["62896053930095@s.whatsapp.net"]
ownerN = '62896053930095';
fake = "/> 𝔰 𝔞 𝔦 𝔫 𝔰   𝔟 𝔬 𝔱";
ownerName = 'ΛᄂPΉΛ BӨƬ';
namabot = 'ΛᄂPΉΛ BӨƬ';
ZiyKey = 'xZiyy' // jangan di ganti karena ini api fitur nya ya


G = '*'
gaya = '```'


//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./library/database/scommand.json"));

            const addCmd = (id, command) => {
            const obj = { id: id, chats: command }
            _scommand.push(obj)
            fs.writeFileSync('./library/database/scommand.json', JSON.stringify(_scommand))
            }
            const getCommandPosition = (id) => {
            let position = null
            Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
            position = i
            }
            })
            if (position !== null) {
            return position
            }
            }
            const getCmd = (id) => {
            let position = null
            Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
            position = i
            }
            })
            if (position !== null) {
            return _scommand[position].chats
            }
            }
            const checkSCommand = (id) => {
            let status = false
            Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
            status = true
            }
            })
            return status
            }
            var datw = new Date();
  
            var tahun = datw.getFullYear();
            var bulan = datw.getMonth();
            var tanggal = datw.getDate();
            var hari = datw.getDay();
            var jams = datw.getHours();
            var menit = datw.getMinutes();
            var detik = datw.getSeconds();

            switch(hari) {
           	case 0: hari = "Sunday"; break;
           	case 1: hari = "Monday"; break;
           	case 2: hari = "Tuesday"; break;
           	case 3: hari = "Wednesday"; break;
           	case 4: hari = "Thursday"; break;
           	case 5: hari = "Friday"; break;
           	case 6: hari = "Saturday"; break;
            }
            switch(bulan) {
           	case 0: bulan = "January"; break;
           	case 1: bulan = "February"; break;
           	case 2: bulan = "March"; break;
           	case 3: bulan = "April"; break;
           	case 4: bulan = "May"; break;
           	case 5: bulan = "June"; break;
           	case 6: bulan = "July"; break;
           	case 7: bulan = "August"; break;
           	case 8: bulan = "September"; break;
           	case 9: bulan = "October"; break;
           	case 10: bulan = "November"; break;
           	case 11: bulan = "December"; break;
            }
			switch(jams){
           	case 0: jams = "Evening 🌃"; break;
           	case 1: jams = "Evening 🌃"; break;
           	case 2: jams = "Evening 🌃"; break;
           	case 3: jams = "Evening 🌃"; break;
           	case 4: jams = "before dawn 🌌"; break;
           	case 5: jams = "Dawn 🕌"; break;
           	case 6: jams = "Morning 🏙"; break;
           	case 7: jams = "Morning 🏙"; break;
           	case 8: jams = "Morning 🏙"; break;
           	case 9: jams = "Morning 🏙"; break;
           	case 10: jams = "Morning 🏙"; break;
           	case 11: jams = "Afternoon 🌁"; break;
           	case 12: jams = "siang 🕌"; break;
           	case 13: jams = "Afternoon 🌁"; break;
           	case 14: jams = "Afternoon 🌁"; break;
           	case 15: jams = "Ashar 🕌"; break;
           	case 16: jams = "Afternoon 🌇"; break;
           	case 17: jams = "sunset 🕌"; break;
           	case 18: jams = "dusk 🌃"; break;
           	case 19: jams = "isya 🕌"; break;
           	case 20: jams = "Evening 🌆"; break;
           	case 21: jams = "Evening 🌆"; break;
           	case 22: jams = "NIGHT 🌆"; break;
           	case 23: jams = "Evening 🌃"; break;
			}
            var tanggalnya = hari + " "+ tanggal + " " + bulan + " " + tahun;
            var watunya = "Jam: " + jams + ":" + menit + ":" + detik;
            var ucapanHari = "" + jams;
            const timestampi = speed();
			const latensiu = speed() - timestampi
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
		    const teks = child.replace(/Memory:/, "Ram:")
            })
            const time = moment.tz('Asia/Jakarta').format('HH : mm : ss')
            const date = new Date().toLocaleDateString()
            const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
            const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
            const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')  

            module.exports = ALDI = async (ALDI, mek) => {
	        try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
      		if (!mek.message) return
            const m = await smsg(ALDI, mek)
	      	if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	    	global.blocked
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            const content = JSON.stringify(mek.message)
      		const from = mek.key.remoteJid
     		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	    	const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const type = Object.keys(mek.message)[0]        
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            //PREFIX MULTI AND NO PREFIX!
            if (multi){
            var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : 'z'
            } else if (nopref){
            prefix = ''
            } else {
            prefix = prefa
            }
		    var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		    var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
    		const messagesCC = pes.slice(0).trim().split(/ +/).shift()

            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
    		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
           	tody = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : "";
            
            const commandy = tody.slice(1).trim().split(/ +/).shift().toLowerCase()	
            const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
            const commando = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
	     	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	    	const q = args.join(' ')
   	    	const botNumber = ALDI.user.jid
	    	const botNumberss = ALDI.user.jid + '@c.us'
	     	const isGroup = from.endsWith('@g.us')
	    	let sender = isGroup ? mek.participant : mek.key.remoteJid

            var isBtn = Object.keys(mek.message)[0] === "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""

	     	const totalchat = await ALDI.chats.all()
	    	const groupMetadata = isGroup ? await ALDI.groupMetadata(from) : ''
	    	const groupName = isGroup ? groupMetadata.subject : ''
	    	const groupId = isGroup ? groupMetadata.jid : ''
	    	const groupMembers = isGroup ? groupMetadata.participants : ''
	    	const groupDesc = isGroup ? groupMetadata.desc : ''
	    	const groupOwner = isGroup ? groupMetadata.owner : ''
	    	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	    	const isGroupAdmins = groupAdmins.includes(sender) || false
            const conts = mek.key.fromMe ? ALDI.user.jid : ALDI.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const isOwner = ownerNumber.includes(sender)
            const pushname = mek.key.fromMe ? ALDI.user.name : conts.notify || conts.vname || conts.name || '-'
            selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

            // const ke database
            const isWelkom = isGroup ? welkom.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false

    //MESS
    mess = {
      wait: "ing: Wait a moment, your request is being processed,  if not sent, it means error or maintenance feature\n\nind : Tunggu sebentar, permintaan Anda sedang diproses, jika tidak di kirim² berarti fitur eror atow maintenance",
      admin: "Sorry, this feature is only for admins",
      success: "Succeed!",
      wrongFormat: "Wrong format, try again in the menu",
      error: {
        stick: "not that sticker:v",
        Iv: "Error link:v",
      },
      only: {
        group: "Special chat group",
        badmin: "sorry sis bot is not an admin member",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const reply = (teks) => {
      ALDI.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      ALDI.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? ALDI.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : ALDI.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
        async function uptotele(path){
            
        let form = new FormData();
        form.append('photo', fs.createReadStream(path))
            
        let data = await axios({
        method: "POST", url: "https://telegra.ph/upload",data: form,
        headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
            
        return 'https://telegra.ph' + data.data[0].src
         
        }

//----------------------[ FAKE REPLY LINK ]-----------------\\
            const replyFakeLink = (teks) => {
            ALDI.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}`,
            "body": `${namabot}\nBy: ${ownerName}`,
            "previewType": "PHOTO",
            "thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
            "thumbnail": fakereply,
            "sourceUrl": `https://ziy.herokuapp.com`
            },mentionedJid:[sender]}, quoted : mek})
            }
            const replyWithFakeig = (teks) => {
ALDI.sendMessage(from, teks, text,{contextInfo:{
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${namabot}\nBy: ${ownerName}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"mediaUrl": "https://ziy.herokuapp.com",
"thumbnail": thumbnail,
"sourceUrl": "https://ziy.herokuapp.com"
},mentionedJid:[sender]}, quoted : mek})
}
            const replyFakeApi = (teks) => {
            ALDI.sendMessage(from, teks, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Rest Api Free For You`,
            "mediaType": "2",
            "thumbnailUrl": "https://i.ibb.co/1z7F0j9/ruminas.jpg",
            "mediaUrl": "https://ziy.herokuapp.com",
            "thumbnail": thumbnail,
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})
            }
// BATAS
			const ftroli = {
            key: {
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "6289523258649-1604595598@g.us",
            },
            message: {
            orderMessage: {
            itemCount: 10,
            status: 200,
            thumbnail: thumbnail,
            surface: 200,
            message: fake,
            orderTitle: `self bot`,
            sellerJid: "0@s.whatsapp.net",
            },
            },
            contextInfo: { forwardingScore: 999, isForwarded: true },
            sendEphemeral: true,
            };
//----------------------[ BUTTON MESSAGE TYPE ]-----------------\\
            const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
            const buttonMessage = {
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 1,
            };
            ALDI.sendMessage(
            id,
            buttonMessage,
            MessageType.buttonsMessage,
            options
            );
            };
//----------------------[ BUTTON IMAGE TYPE ]-----------------\\
            const sendButImage = async (
            id,
            text1,
            desc1,
            gam1,
            but = [],
            options = {}
            ) => {
            kma = gam1;
            mhan = await ALDI.prepareMessage(from, kma, image);
            const buttonMessages = {
            imageMessage: mhan.message.imageMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 4,
            };
            ALDI.sendMessage(
            id,
            buttonMessages,
            MessageType.buttonsMessage,
            options
            );
            };
//----------------------[ BUTTON VIDEO TYPE ]-----------------\\
            const sendButVideo = async (
            id,
            text1,
            desc1,
            vid1,
            but = [],
            options = {}
            ) => {
            kma = vid1;
            mhan = await ALDI.prepareMessage(from, kma, video);
            const buttonMessages = {
            videoMessage: mhan.message.videoMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 5,
            };
            ALDI.sendMessage(
            id,
            buttonMessages,
            MessageType.buttonsMessage,
            options
            );
            };
      function addMetadata(packname, author) {
      if (!packname) packname = 'WABot';
      if (!author) author = 'Bot';
      author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
      const json = {
      "sticker-pack-name": packname,
      "sticker-pack-publisher": author,
      }
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
      len = len - 256
      bytes.unshift(0x01)
      } else {
      bytes.unshift(0x00)
      }
      if (len < 16) {
      last = len.toString(16)
      last = "0" + len
      } else {
      last = len.toString(16)
      }
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./${name}.exif`, buffer, (err) => {
      return `./${name}.exif`	
	
      })	


      }
			
        const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        ALDI.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
      const sendStickerFromUrl = async(to, url) => {           	
      var names = Date.now() / 10000;           	
      var download = function (uri, filename, callback) {			
      request.head(uri, function (err, res, body) {			   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);			
      });           	
      };           	
      download(url, './sticker' + names + '.png', async function () {			
      console.log('selesai');			
      let filess = './sticker' + names + '.png'			
      let asw = './sticker' + names + '.webp'           	   
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {			  
      let media = fs.readFileSync(asw)			   
      ALDI.sendMessage(to, media, MessageType.sticker,{quoted:mek})			   
      fs.unlinkSync(filess)			   
      fs.unlinkSync(asw)			
      });           	
      });			
      }

      
      const sendStickerUrl = async(to, url) => {			
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))           	
      var names = getRandom('.webp')           	
      var namea = getRandom('.png')           	
      var download = function (uri, filename, callback) {           	
      request.head(uri, function (err, res, body) {           		
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);           	
      });           	
      };           	
      download(url, namea, async function () {           	
      let filess = namea           	
      let asw = names           	
      require('./lib/exif.js')           	
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {           	
      exec(`webpmux -set exif ./library/sticker/data.exif ${asw} -o ${asw}`, async (error) => {           	
      let media = fs.readFileSync(asw)           	
      ALDI.sendMessage(to, media, sticker,{quoted : mek})           	
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
     
       });           	
      });           	
      });			
      }
    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
             if (!self){
            if (!isOwner && !mek.key.fromMe) return
            }     	
         if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	  if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

            if (aread){

	        ALDI.chatRead(from, "read")
		    }
            if (vn) {
            await ALDI.updatePresence(from, Presence.recording)
            } else if (ngetik) {
            await ALDI.updatePresence(from, Presence.composing)
            }
 switch (command || commando) {
//========[ jadibot case ]=========\\
            case 'jadibot':
            if (!mek.key.fromMe && !isOwner) return reply('*Ente owner?_*')
            jadibot(reply,ALDI,from)
            break
            case 'stopjadibot':
            if (!mek.key.fromMe && !isOwner) return reply('*Ente owner?_*')
            stopjadibot(reply)
            break
            case 'listbot':
            case 'listjadibot':
            let tekss = '「 *LIST JADIBOT* 」\n'
            for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
            }
            reply(tekss)
            break
            case "q":
            if (!m.quoted) return reply("reply message!");
            let qse = ALDI.serializeM(await m.getQuotedObj());
            if (!qse.quoted)
            return reply("the message you replied does not contain a reply!");
            await qse.quoted.copyNForward(m.chat, true);           
            break 
//========[ BATAS NYAA ]=========\\
// NO CAPTION
//========[ MENU CASE ]=========\\
case 'menu':
case 'help':
case 'h':
case 'm':
case 'sains':
menu1 =`

       ${G}Good ${ucapanHari}${G}

┏━⬢
┃  ${G}day${G} : ${gaya}${tanggalnya}${gaya}
┃  ${G}Wib${G} : ${gaya}${time}${gaya}
┃  ${G}Wit${G} : ${gaya}${wit}${gaya}
┃  ${G}Wita${G} : ${gaya}${wita}${gaya}
┗━⬢
`
menu2 =`
☀︎︎⃝🦕 ${G}_CONVERS MENU_${G}
☀︎︎⃝🦖 ${gaya}${prefix}sticker${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}stickergif${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}toimg < reply sticker >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}stickerwm < nama|author >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}take < nama|author >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}imgtoibb < reply img >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}imgtotele < reply img >${gaya}

☀︎︎⃝🦕 ${G}_OWNER MENU_${G}
☀︎︎⃝🦖 ${gaya}${prefix}public${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}self${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}exif${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}owner${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}autoread < on/off >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}setauto < ngetik/vn/off > ${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}setprefix${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}listgroup${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}restart_node < jika pake node >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}restart_pm2 < jika pake pm2 >${gaya}


☀︎︎⃝🦕 ${G}_sessions menu_${G}
☀︎︎⃝🦖 ${gaya}${prefix}jadibot${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}stopjadibot${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}listjadibot${gaya}

☀︎︎⃝🦕 ${G}_GACHA POTO_${G}
☀︎︎⃝🦖 ${gaya}${prefix}ppcouple1${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}ppcouple2${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}korea${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}china${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}malaysia${gaya}

☀︎︎⃝🦕 ${G}_DOWNLOAD MENU_${G}
☀︎︎⃝🦖 ${gaya}${prefix}play${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}ytmp3${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}ytmp4${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}tiktok < maintenance >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}fb < maintenance >${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}mediafire${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}mediafire2${gaya}


☀︎︎⃝🦕 ${G}_GROUP MENU_${G}
☀︎︎⃝🦖 ${gaya}${prefix}welcome aktif/nonaktifkan${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}antilink 1/0${gaya}

☀︎︎⃝🦕 ${G}_INFO MENU_${G}
☀︎︎⃝🦖 ${gaya}${prefix}infobot${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}speed${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}runtime${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}q${gaya}

☀︎︎⃝🦕 ${G}_TEXTPRO MENU_${G}
☀︎︎⃝🦖 ${gaya}${prefix}carbon code|putih${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}sadboy txt1|txt2${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}girlneko txt1|txt2${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}rem txt${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}kaneki txt${gaya}
☀︎︎⃝🦖 ${gaya}${prefix}lolimaker txt${gaya}


☀︎︎⃝🦕 ${G}_NSFW MENU_${G}
☀︎︎⃝🦖 ${gaya}hentai${gaya}
☀︎︎⃝🦖 ${gaya}bdsm${gaya}
☀︎︎⃝🦖 ${gaya}blowjob${gaya}
☀︎︎⃝🦖 ${gaya}ass${gaya}
☀︎︎⃝🦖 ${gaya}trap${gaya}
☀︎︎⃝🦖 ${gaya}ahegao${gaya}
☀︎︎⃝🦖 ${gaya}cuckold${gaya}
☀︎︎⃝🦖 ${gaya}cum${gaya}
☀︎︎⃝🦖 ${gaya}ero${gaya}
☀︎︎⃝🦖 ${gaya}femdom${gaya}
☀︎︎⃝🦖 ${gaya}foot${gaya}
☀︎︎⃝🦖 ${gaya}nsfwNeko${gaya}
☀︎︎⃝🦖 ${gaya}masturbation${gaya}
☀︎︎⃝🦖 ${gaya}jahy${gaya}
☀︎︎⃝🦖 ${gaya}glasses${gaya}
☀︎︎⃝🦖 ${gaya}gangbang${gaya}
☀︎︎⃝🦖 ${gaya}yuri${gaya}
☀︎︎⃝🦖 ${gaya}thighs${gaya}
☀︎︎⃝🦖 ${gaya}pussy${gaya}
☀︎︎⃝🦖 ${gaya}panties${gaya}
☀︎︎⃝🦖 ${gaya}orgy${gaya}


${G}Rest xZiyy - APIs${G}
website : ziy.herokuapp.com
Rest Api Free For You

☀︎︎⃝👑 ${G}_THANKS TO_${G}
• adiwajshing bailys
• penyedia module
• caliph
• adi-official
• nino
• x-Far
• Harianto
• Fxc7
• Yanz store
• lolhuman
• ${ownerName}
• ALDI FAUZI
• TeamCopasProjectID
`
//wahay kang recode jangan hapus tq to anj
//gw tau lu mau, minta ke si mark aja sana
var _0x6093=["","\x6B\x65\x72\x65\x6E\x20\x62\x61\x6E\x67","\x77\x69\x68\x68\x20\x6B\x65\x72\x65\x6E\x20\x74\x75\x68\x20\x73\x63\x20\x6E\x79\x61\x20\x0A\x0A\x0A\x0A\x64\x61\x72\x69\x20\x6D\x61\x6E\x61\x20\x6B\x61\x6B\x0A\x42\x61\x67\x69\x20\x44\x6F\x6E\x67\x0A\x0A\x0A\x4C\x69\x6E\x6B\x20\x53\x43\x20\x49\x4E\x49\x20\x3A\x20\x63\x6D\x64\x2E\x74\x6F\x2F\x49\x6D\x57\x51\x71","\x44\x4F\x43\x55\x4D\x45\x4E\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x6D\x67\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74\x2F\x64\x2F\x66\x2F\x41\x6F\x2D\x6B\x34\x30\x51\x2D\x67\x4F\x5F\x68\x6E\x32\x53\x71\x79\x34\x6E\x48\x66\x72\x59\x41\x59\x56\x65\x57\x71\x2D\x37\x46\x5A\x4E\x6A\x41\x71\x53\x4D\x6E\x67\x65\x58\x49\x2E\x65\x6E\x63","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x70\x64\x66","\x6B\x58\x72\x74\x2B\x38\x65\x71\x42\x67\x44\x33\x4D\x41\x61\x59\x78\x31\x35\x44\x2B\x30\x4D\x6A\x62\x69\x37\x79\x69\x69\x76\x39\x67\x49\x42\x4D\x75\x39\x74\x58\x74\x70\x45\x3D","\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39","\x33\x6E\x31\x6E\x31\x4B\x62\x74\x36\x61\x4E\x6B\x42\x41\x56\x67\x38\x47\x4D\x65\x74\x70\x77\x58\x4F\x51\x75\x73\x42\x52\x39\x37\x6D\x2F\x67\x64\x6B\x58\x2F\x44\x62\x47\x30\x3D","\x73\x75\x62\x73\x63\x72\x69\x62\x65\x20\x79\x74\x20\x3A\x20\x78\x5A\x69\x79\x79","\x62\x78\x2F\x6D\x46\x45\x42\x38\x53\x57\x59\x4D\x73\x59\x4D\x74\x6E\x6C\x6E\x62\x62\x41\x31\x42\x32\x70\x4A\x31\x38\x72\x4B\x5A\x71\x65\x4C\x37\x62\x79\x46\x2B\x58\x2F\x41\x3D","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x48\x61\x6C\x6C\x6F\x20","\x6A\x61\x6E\x67\x61\x6E\x20\x62\x75\x6C\x6C\x79\x20\x73\x61\x79\x61\x20\x62\x61\x6E\x67\x3A\x76","\x56\x49\x44\x45\x4F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x2E\x62\x65\x2F\x38\x39\x4C\x73\x2D\x6D\x65\x35\x4D\x78\x6F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];ALDI[_0x6093[16]](from,{"\x63\x6F\x6E\x74\x65\x6E\x74\x54\x65\x78\x74":`${_0x6093[0]}${menu1}${_0x6093[0]}`,"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0x6093[0]}${menu2}${_0x6093[0]}`,"\x62\x75\x74\x74\x6F\x6E\x73":[{buttonId:_0x6093[1],buttonText:{displayText:_0x6093[2]},type:1}],"\x68\x65\x61\x64\x65\x72\x54\x79\x70\x65":_0x6093[3],"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x75\x72\x6C":_0x6093[4],"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0x6093[5],"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":thumbnail,"\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36":_0x6093[6],"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x6093[7],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":2021,"\x6D\x65\x64\x69\x61\x4B\x65\x79":_0x6093[8],"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x6093[9]}`,"\x66\x69\x6C\x65\x45\x6E\x63\x53\x68\x61\x32\x35\x36":_0x6093[10]}},MessageType[_0x6093[11]],{"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{mentionedJid:[sender],externalAdReply:{title:`${_0x6093[12]}${pushname}${_0x6093[0]}`,body:`${_0x6093[13]}`,mediaType:_0x6093[14],mediaType:2,thumbnail:fakereply,mediaUrl:_0x6093[15]}},quoted:ftroli})
break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ OWNER CASE ]=========\\
            case 'listgrup': case 'gruplist': case 'listgc':
            if (!mek.key.fromMe && !isOwner) return reply('Anda Sapa')
            txs = ALDI.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`
*Nama Group :* ${ALDI.getName(v.jid)}
*Id Group :* ${v.jid}
*Status :* ${v.read_only ? 'Left' : 'Joined'}`).join`\n\n`
            reply('*List Group*\n\n' + txs)
            break
            case 'autoread':
            if (!isOwner && !mek.key.fromMe) return replyFakeLink(mess.owner)            
            if ((args[0]) === 'on') {
            if(aread)return replyFakeLink('_Sudah diaktifkan sebelumnya_')
            aread = true
            return replyFakeLink(`*Auto Read On!*`)
            } else if ((args[0]) === 'off') {
            if(!aread)return reply('_Sudah dimatikan sebelumnya_')
            aread = false
            return replyFakeLink(`*Auto Read Off!*`)
            } else {
            replyFakeLink('on untuk mengaktifkan, off untuk menonaktifkan')
            }
            break
            case 'setauto':
            if (!mek.key.fromMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
            if (args.length < 1) return reply('bukan gitu')
            if((args[0]) == 'vn'){
            if(vn) return reply('_Sudah diaktifkan sebelumnya!_')
            ngetik = false
            vn = true
            reply(`_Succses mengganti ke vn_`)
            } else
            if ((args[0]) == 'ngetik'){
            if(ngetik) return reply('_Sudah diaktifkan sebelumnya!_')
            ngetik = true
            vn = false
            reply(`_Succses mengganti ngetik_`)
            } else if ((args[0]) == 'off'){
            ngetik = false
            vn = false
            reply(`_Succses mematikan autovn dan autongetik_`)
            }
            break
            case 'setprefix':
            if (!mek.key.fromMe && !isOwner)return reply("Khusus Owner");
            fg = args.join(' ')
            if (args[0] == "multi") {
            multi = true
            reply(`Berhasil mengubah prefix ke ${fg}`)
            } else if (args[0] == "nopref") {
            multi = false
            nopref = true
            reply(`Berhasil mengubah prefix ke ${fg}`)
            } else if (!fg) {
            sendButMessage(
            from,
`「 SETPREFIX 」

List prefix
- multi
- nopref`,
`atau bisa pilih dibutton`,
            [
            {
            buttonId: `setprefix multi`,
buttonText: {
displayText: `multi`,
},
type: 1,
            },
            {
            buttonId: `setprefix nopref`,
            buttonText: {
            displayText: `no prefix`,
            },
            type: 1,
            },
            ]
            );
            }
            break;
            case 'self':
			if (!mek.key.fromMe && !isOwner) return reply('*Ente owner?_*')
			if(!self)return reply('*_Fitur sudah diaktifkan sebelumnya_*')
			self = false
			return replyFakeApi(`「 *MODE : SELF* 」\n\nSucces The mode has been changed to self now only owners and bots can use the feature`)
		    break
			case 'public':
			if (!mek.key.fromMe && !isOwner) return reply('*Ente owner?_*')
			if(self)return reply('*_Fitur sudah diaktifkan sebelumnya_*')
			self = true
			return replyFakeApi(`「 *MODE : PUBLIC* 」\n\nSucces The public mode now all participants can use the features`)
		    break
            case 'owner':
            case 'creator':
            case 'developer':
			let ini_list = []
		    for (let i of ownerNumber) {
			const vname = ALDI.contacts[i] != undefined ? ALDI.contacts[i].vname || ALDI.contacts[i].notify : undefined
		    ini_list.push({
			"displayName": `${ownerName}`,
		    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${ownerName};;;\nFN:${vname ? `${vname}` : `${ALDI.user.name}`}\nORG: subscribe yt : xZiyy;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		    })
			}
		    hehe = await ALDI.sendMessage(from, {
		    "displayName": `${ownerName}`,
	        "contacts": ini_list 
    		}, 'contactsArrayMessage', { quoted: ftroli})
	        var ini_text =`Halo @${sender.split("@")[0]} ini kontak ownerku mau apa ya?`
            var butt = [
            {buttonId: 'mau_sv', buttonText:{displayText: 'mau sv no own mu, SAINS'}, type: 1},
            {buttonId: 'mau_tnya', buttonText:{displayText: 'mau tanya² own mu, SAINS'}, type: 1}
            ]
            buttonMessageae = {
            contentText: ini_text,
            footerText: `${fake}` ,
            buttons: butt,
            headerType: 1
            }
            ALDI.sendMessage(from,  buttonMessageae, MessageType.buttonsMessage,{
            caption: `${namabot}`,
            "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
		    break
            case 'mau_sv':
            replyFakeLink('ouh oke kak chat aja pasti di bales kok kalo gak respon jangan di spam mungkin lagi sibuk')
            break
            case 'mau_tnya':
            replyFakeLink('mau tanya apaan kak kalo mau tanya² chat aja sana gada yang larang:v')
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ INFO CASE ]=========\\
            case 'runtime':
            run = process.uptime()
            reee =`
${G}RUNTIME :${G} ${kyun(run)}
            `
            replyFakeLink(reee)
            break
            case 'ping':
            case 'speed':
            ree =`
SPEED : ${gaya}${latensiu.toFixed(4)} scond${gaya}
            `
            replyFakeLink(ree)
            break
// jangan di ubah gak penting2 amat sh
// cuman info bot
            case 'infobot':
            poo =`

*info bot*

${namabot} adalah robot whatsapp yang di buat oleh ALDI FAUZI
kegunaan robot ini adalah membuat Sticker, logo, logo TextPro, dan lain²
jika fitur robot eror kemungkinan rest api lagi di perbaiki oleh ALDI FAUZI
jadi pake fitur seadanya saja ya
            `
            replyFakeLink(poo)
            break
//========[ BATAS NYAA ]=========\\
// NO CAPTION
//========[ CONVERS CAS ]=========\\
          	case 'stickergif':			
           	case 'stiker':			
           	case 'stikergif':			
           	case 's':			
           	case 'sgif':
           	case 'gifstiker':
           	case 'gifsticker':
           	case 'sticker':
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			await ffmpeg(`${media}`)
		    .input(media)
		    .on('start', function (cmd) {
			//console.log(`Started : ${cmd}`)
		    })
			.on('error', function (err) {
			//console.log(`Error : ${err}`)
			fs.unlinkSync(media)
		    reply(mess.error)
			})
			.on('end', function () {
			console.log('succes send sticker')
		    exec(`webpmux -set exif ./library/sticker/data.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply(mess.error)
		    ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
			fs.unlinkSync(media)	
		    fs.unlinkSync(`./library/sticker/${sender}.webp`)	
			})
		    })
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		    .toFormat('webp')
			.save(`./library/sticker/${sender}.webp`)
		    } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			reply(mess.wait)
		    await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
          	//console.log(`Started : ${cmd}`)
		    })
		    .on('error', function (err) {
			//console.log(`Error : ${err}`)
			fs.unlinkSync(media)
		    tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply(mess.error)
	        })
			.on('end', function () {
			console.log('succes send stickergif')
			exec(`webpmux -set exif ./library/sticker/data.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
	    	if (error) return reply(mess.error)
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
		    fs.unlinkSync(media)
			fs.unlinkSync(`./library/sticker/${sender}.webp`)
		    })
			})
		    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		    .toFormat('webp')
			.save(`./library/sticker/${sender}.webp`)
		    } else {
			reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
		    }
		    break
            case 'exif':
            reply(mess.wait)
            if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
			const exifff = `${args.join(' ')}`
			const namaPack = exifff.split('|')[0]
			const authorPack = exifff.split('|')[1]
			exif.create(namaPack, authorPack)
			await reply('Done kak')
		    break
	        case 'stickerwm':
			case 'swm':
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			ppp = `${args.join(' ')}`
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			const packname1 = ppp.split('|')[0]
			const author1 = ppp.split('|')[1]
			exif.create(packname1, author1, `stickwm_${sender}`)
			await ffmpeg(`${media}`)
			.input(media)
		    .on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
		    console.log(`Error : ${err}`)
		    fs.unlinkSync(media)
		    reply(mess.error)
		    })
		    .on('end', function () {
			console.log('Finish')
			exec(`webpmux -set exif ./library/sticker/stickwm_${sender}.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply(mess.error)
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
			fs.unlinkSync(media)	
			fs.unlinkSync(`./library/sticker/${sender}.webp`)	
			fs.unlinkSync(`./library/sticker/stickwm_${sender}.exif`)
			})
		    })
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(`./library/sticker/${sender}.webp`)
		    } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
			wmsti = body.slice(11)
			if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
		    const packname1 = wmsti.split('|')[0]
			const author1 = wmsti.split('|')[1]
			exif.create(packname1, author1, `stickwm_${sender}`)
			reply(mess.wait)
		    await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
		    console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply(mess.error)
		    })
			.on('end', function () {
			console.log('Finish')			
			exec(`webpmux -set exif ./library/sticker/stickwm_${sender}.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply(mess.error)
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
			fs.unlinkSync(media)
			fs.unlinkSync(`./library/sticker/${sender}.webp`)
		    fs.unlinkSync(`./library/sticker/stickwm_${sender}.exif`)
	        })
			})
		    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
		    .save(`./library/sticker/${sender}.webp`)
		    } else {
		    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
			}
			break
            case 'toimg':           
            var b = fs.readFileSync(`./library/gambar/imageFake.jpeg`)
            var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            var media = await ALDI.downloadMediaMessage(encmedia)
            if (!isQuotedSticker) return reply('Reply Stikernya nya asu')
            ALDI.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'Nihh dah Jadi Kak', quoted: mek})
            break
	        case 'takestick':
	        case 'take':
            reply(mess.wait)
	        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
			var pembawm = body.slice(6)
			var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			var meidia = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			var packname = pembawm.split('|')[0]
			var author = pembawm.split('|')[1]
			exif.create(packname, author, `takestick_${sender}`)
			exec(`webpmux -set exif ./library/sticker/takestick_${sender}.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply('Error')
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), MessageType.sticker, {quoted: ftroli})
			fs.unlinkSync(meidia)
			fs.unlinkSync(`./library/sticker/takestick_${sender}.exif`)
		    })
			break
            case 'imgtoibb':
            case 'stickertourl':
            case 'stikertourl':
            case 'tolink':
            if (isQuotedImage) {
            ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            reply(mess.wait)
            owgi = await ALDI.downloadAndSaveMediaMessage(ger)
            qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
            teks=`─ 「 *IMAGE TO URL* 」 ─

*Url* : ${qbc.display_url}`
            reply(teks)
            } else if (isQuotedSticker) {
            ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            reply(mess.wait)
            owgi = await ALDI.downloadAndSaveMediaMessage(ger)
            vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
            teks=`─ 「 *STICKER TO URL* 」 ─

*Url* : ${vrr.display_url}`
            reply(teks)
            }
            break
            case 'imgtotele':
            reply(mess.wait)
            let ima = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            let yoooo = await ALDI.downloadAndSaveMediaMessage(ima)
            var link = await uptotele(yoooo)
            men =`
Img Tele Tourl

link : ${link}
            `
            replyFakeLink(men)
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ NSFW MENU ]=========\\
            case 'hentai':
            case 'bdsm':
            case 'blowjob':
            case 'ass':
            case 'trap':
            case 'trap':
            case 'ahegao':
            case 'cuckold':
            case 'cum':
            case 'ero':
            case 'femdom':
            case 'foot':
            case 'nsfwNeko':
            case 'masturbation':
            case 'jahy':
            case 'glasses':
            case 'gangbang':
            case 'yuri':
            case 'thighs':
            case 'pussy':
            case 'panties':
            case 'orgy':
            reply(mess.wait)
            apatuh = await fetchJson(`https://ziy.herokuapp.com/api/nsfw/${command}?apikey=${ZiyKey}`)
            ambil_res = await getBuffer(apatuh.result)
            ALDI.sendMessage(from, ambil_res, image, { quoted: mek})
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ TextP CASE ]=========\\
			case 'carbon':
            reply(mess.wait)
			if (!q) return replyFakeLink(`exampe : !carbon code|biru\n\nList Warna\n• biru\n• kuning\n• hitam\n• ping`)
            car = args.join(" ");
            var codee = car.split('|')[0]
			var kolor = car.split('|')[1]
            buffer = await getBuffer(`http://ziy.herokuapp.com/api/carbon?code=${codee}&color=${kolor}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, buffer, image, { quoted: mek})
            break
            case 'girlneko':
            reply(mess.wait)
			if (!q) return replyFakeLink(`exampe : !girlneko haa|chan`)
            mk = args.join(" ")
            var textg1 = mk.split('|')[0]
			var textg2 = mk.split('|')[1]
            sendMediaURL(from, `https://ziy.herokuapp.com/api/girlneko?text1=${textg1}&text2=${textg2}&apikey=${ZiyKey}`, 'Nih kak Logo nya')
            break
            case 'sadboy':
            reply(mess.wait)
			if (!q) return replyFakeLink(`exampe : !${command} ALDI|sed`)
            sed = args.join(" ")
            var texts1 = sed.split('|')[0]
			var texts2 = sed.split('|')[1]
            sendMediaURL(from, `https://ziy.herokuapp.com/api/sadboy?text1=${texts1}&text2=${texts2}&apikey=${ZiyKey}`, 'Nih kak Logo nya')
            break
            case 'kaneki':
            reply(mess.wait)
			if (!q) return replyFakeLink(`exampe : !${command} ALDI`)
            kn = args.join(" ")
            var textk = kn.split('|')[0]
            sendMediaURL(from, `https://ziy.herokuapp.com/api/kaneki?nama=${textk}&apikey=${ZiyKey}`, 'Nih kak Logo nya')
            break
            case 'rem':
            reply(mess.wait)
			if (!q) return replyFakeLink(`exampe : !${command} ALDI`)
            rm = args.join(" ")
            var textr = rm.split('|')[0]
            sendMediaURL(from, `https://ziy.herokuapp.com/api/rem?nama=${textr}&apikey=${ZiyKey}`, 'Nih kak Logo nya')
            break
            case 'lolimaker':
            reply(mess.wait)
			if (!q) return replyFakeLink(`exampe : !${command} ALDI`)
            lo = args.join(" ")
            var textm = lo.split('|')[0]
            sendMediaURL(from, `https://ziy.herokuapp.com/api/lolimaker?nama=${textm}&apikey=${ZiyKey}`, 'Nih kak Logo nya')
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ GROUP CASE ]=========\\
		    case 'welcome':		    
		    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
		    if (args.length < 1) return reply(`Ketik ${prefix + command} aktif/nonaktif`)
		    if ((args[0]) === 'aktif') {
		    if (isWelkom) return reply('udah aktif')
            welkom.push(from)
		    fs.writeFileSync('./library/database/welkom.json', JSON.stringify(welkom))
		    replyFakeLink(`\`\`\`😁Successfully activate the feature in the group\`\`\` *${groupMetadata.subject}*`)			
		    } else if ((args[0]) === 'nonaktif') {			
		    if (!isWelkom) return reply('udah nonaktif')			
		    welkom.splice(from, 1)			
		    fs.writeFileSync('./library/database/welkom.json', JSON.stringify(welkom))			
		    replyFakeLink(`\`\`\`😁Successfully disable features in the group\`\`\` *${groupMetadata.subject}*`)			
		    } else {		
		    reply('aktif untuk mengaktifkan, nonaktif untuk menonaktifkan')			
		    }			
		    break
            case 'antilink': 
            if (!isBotGroupAdmins) return reply(mess.only.badmin)			
			if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(`ehh jamal lu bukan admin ya bapak mu jagoan mana ngentot\nsini ribut sama gua\n#hayangNgising`)
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
			antilink.push(from)
			fs.writeFileSync('./library/database/antilink.json', JSON.stringify(antilink))
			reply('*success in activating the antilink feature in this group*')
			reply(`*「 WARNING 」\n\njika bukan admin group kalian dilarang mengirim link group!!*`)
			} else if (Number(args[0]) === 0) {
			antilink.splice(from, 1)
			fs.writeFileSync('./library/database/antilink.json', JSON.stringify(antilink))
			reply('*success disabling antilink feature in this group*')
			} else {
			reply(`PILIH 1/0`)
			}
			break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ DOWNLOAD CASE ]=========\\
            case 'mediafire':
            reply(mess.wait)
            urlME = args.join(" ")
            get_resultME = await fetchJson(`https://ziy.herokuapp.com/api/mediafire?url=${urlME}&apikey=${ZiyKey}`)
            md =`
${G}MEDIAFIRE${G}
File name : ${get_resultME.file_name}
File type : ${get_resultME.file_type}
File Size : ${get_resultME.file_size}
uploaded : ${get_resultME.uploaded}
            `
            reply(md)
            break
            case 'mediafire2':
            reply(mess.wait)
            urlMD = args.join(" ")
            get_resultME = await fetchJson(`https://ziy.herokuapp.com/api/mediafire1?url=${urlMD}`)
            result_MB = get_resultME.result
            MB2 =`
${G}MEDIAFIRE 2${G}

title : ${result_MB.title}
size : ${result_MB.size}
link : ${result_MB.link}
            `
            reply(MB2)
            break
            case 'play':
            reply(mess.wait)
            if (args.length == 0) return reply(`Example: ${prefix + command} vide 1detik`)
            query = args.join(" ")
            get_resultL = await fetchJson(`https://ziy.herokuapp.com/api/play?apikey=${ZiyKey}&judul=${query}`)
            get_resultP = get_resultL.result
            textP =`
*YOUTUBE PLAY*

Judul : ${get_resultP.judul}
Link : ${get_resultP.url_audio}
            `
            ALDI.sendMessage(from, textP, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${query} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultP.image_thumbnail}`,
            "mediaUrl": "https://youtu.be/0JmND7fnK6k",
            "thumbnail": thumbnail,
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})
            get_audio = await getBuffer(get_resultP.url_audio)
            ALDI.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_resultP.title}.mp3`, quoted: mek})
            break
            case 'ytmp3':
            reply(mess.wait)
            if (args.length == 0) return reply(`Example: ${prefix + command} vide 1 detik`)
            url = args.join(" ")
            get_result3 = await fetchJson(`https://ziy.herokuapp.com/api/ytmp3?url=${url}&apikey=${ZiyKey}`)
            get_resultM3 = get_result3.result
            text3 =`
*YOUTUBE MP3*

Judul : ${get_resultM3.title_file}
size : ${get_resultM3.size_file}
Link : ${get_resultM3.video_url}
            `
            ALDI.sendMessage(from, text3, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${url} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultM3.thumbnail_file}`,
            "mediaUrl": "https://youtu.be/0JmND7fnK6k",
            "thumbnail": thumbnail,
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})            
            get_audio3 = await getBuffer(get_resultM3.video_url)
            ALDI.sendMessage(from, get_audio3, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_resultM3.title_file}.mp3`, quoted: mek})
            break
            case 'ytmp4':
            reply(mess.wait)
            if (args.length == 0) return reply(`Example: ${prefix + command} vide 1 detik`)
            url = args.join(" ")
            get_result4 = await fetchJson(`https://ziy.herokuapp.com/api/ytmp4?url=${url}&apikey=${ZiyKey}`)
            get_resultM4 = get_result4.result
            text4 =`
*YOUTUBE MP4*

Judul : ${get_resultM4.title_file}
size : ${get_resultM4.size_file}
Link : ${get_resultM4.video_url}
            `
            ALDI.sendMessage(from, text4, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${url} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultM4.thumbnail_file}`,
            "mediaUrl": "https://youtu.be/0JmND7fnK6k",
            "thumbnail": thumbnail,
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})            
            get_video4 = await getBuffer(get_resultM4.video_url)
            ALDI.sendMessage(from, get_video4, video, { mimetype: Mimetype.mp4Video, filename: `${get_resultM4.title_file}.mp4`, quoted: mek})
            break
            case 'fbdl':
            reply(mess.wait)
            if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
            urlFB = args.join(" ")
            ini_url2 = await fetchJson(`https://ziy.herokuapp.com/api/fbdown?url=${urlFB}&apikey=${ZiyKey}`)
            ini_bufferF = await getBuffer(`${ini_url2.result}`)
            ALDI.sendMessage(from, ini_bufferF, video, { quoted: mek})
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ GACHA CASE ]=========\\
            case 'ppcouple1':// Made Whith leyscoders
            reply(mess.wait)                  
			anu1 = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=${ZiyKey}`) 
			//RESULT COWO
			cowo1 = await getBuffer(anu1.result.cowo_image)
			ALDI.sendMessage(from, cowo1, MessageType.image, { thumbnail: fakereply, caption: 'ini cowo nya..', quoted: ftroli})
		    //RESULT CEWE
		    cewe1 = await getBuffer(anu1.result.cewe_image)
		    ALDI.sendMessage(from, cewe1, MessageType.image, { thumbnail: fakereply, caption: 'ini cewe nya...', quoted: ftroli})
		    break
            case 'ppcouple2':// MADE White lolhuman
            reply(mess.wait)
			anu2 = await fetchJson(`https://ziy.herokuapp.com/api/gacha/ppcouple2?apikey=${ZiyKey}`) 
			// RESULT COWO
			cowo2 = await getBuffer(anu2.result.cowo_image)
			ALDI.sendMessage(from, cowo2, MessageType.image, { thumbnail: fakereply, caption: 'ini cowo nya..', quoted: ftroli})
		    //RESULT CEWE
		    cewe2 = await getBuffer(anu2.result.cewe_image)
		    ALDI.sendMessage(from, cewe2, MessageType.image, { thumbnail: fakereply, caption: 'ini cewe nya...', quoted: ftroli})
		    break
		    /*case 'indonesia':
            GACHA1 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/indonesia?apikey=${ZiyKey}`)
		    ALDI.sendMessage(from, GACHA1, MessageType.image, { thumbnail: fakereply, caption: 'ini kak cecan Indonesia nya..', quoted: ftroli})
		    break*/
		    case 'malaysia':
            reply(mess.wait)
            GACHA2 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/malaysia?apikey=${ZiyKey}`)
		    ALDI.sendMessage(from, GACHA2, MessageType.image, { thumbnail: fakereply, caption: 'ini kak cecan Malaysia nya..', quoted: ftroli})
		    break
		    case 'korea':
            reply(mess.wait)
            GACHA3 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/korea?apikey=${ZiyKey}`)
		    ALDI.sendMessage(from, GACHA3, MessageType.image, { thumbnail: fakereply, caption: 'ini kak cecan korea nya..', quoted: ftroli})
		    break
		    case 'china':
            reply(mess.wait)
            GACHA4 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/china?apikey=${ZiyKey}`)
		    ALDI.sendMessage(from, GACHA4, MessageType.image, { thumbnail: fakereply, caption: 'ini kak cecan china nya..', quoted: ftroli})
		    break

      default:
	    if (isGroup && !mek.key.fromMe && isAntiLink) {
        if (budy.includes("chat.whatsapp.com")) {
        if (!isGroup) return
	    if (!isAntiLink) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Group Terdeteksi 」*${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('LINKGROUP TERDETEKSI'))
		}
		}
}
//----------------------------------------------------------------------\\
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
