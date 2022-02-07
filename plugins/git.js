const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('https://telegra.ph/file/24f32f57035641a8698e4.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number wa.me/18254138025*
   

*whatsapp group : https://chat.whatsapp.com/FVOdpPLaMvP24rIfTzCGof*


*githublink       _https://tinyurl.com/yjdej5a2_*


*audio commads    _https://tinyurl.com/ydvlpbol_*

*Bot Make Video ytube -https://youtu.be/s3ugOuxbQ_Q_*

*sticker commads  _https://tinyurl.com/yfpd23yn_*     
`}) 

})); 
