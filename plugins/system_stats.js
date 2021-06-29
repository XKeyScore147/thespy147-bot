/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

thespy147 - Yusuf Usta
Developer & Co-Founder - thespy147
*/

const thespy147 = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    thespy147.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 thespy147 Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/thespy147Support\n*Telegram Channel:* https://t.me/thespy147remaster\n*Plugin Channel:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            const pow = '*Powered by thespy147*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    thespy147.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    thespy147.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 thespy147 Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/thespy147Support\n*Telegram Channel:* https://t.me/thespy147remaster\n*Plugin Channel:* ' + Config.CHANNEL, MessageType.text);
        }
        else {
            const pow = '*Powered by thespy147*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    thespy147.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
