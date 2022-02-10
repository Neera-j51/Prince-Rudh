const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LOGO, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync(''), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
```owner number wa.me/917736771516```
   

```whatsapp group : https://chat.whatsapp.com/GQKFAsYW10VCJqP0pRs4gb```


githublink : ```github.com/KINGS-AS/RDX_V2```


*Developers*      
| @PrinceRudh 😈 github.com/PrinceRudh
| @Viz-zer 😈 github.com/Viz-Zer
| @MrAxenzo 😈 github.com/MrAxenzo 
`}) 

})); 
