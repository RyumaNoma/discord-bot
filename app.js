//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTUyMTMxMDYzOTM0MjIyMzQx.D17D2A.QJEjc89Z77gqb-MWaG9LZiuKERw';
client.on('ready', () => {
    console.log('ready...');
});
//Bot自身の発言を無視する呪い
client.on('message', message =>{
    if(message.author.bot){
        return;
   }
//↓ここに後述のコードをコピペする↓
   if (message.content === 'こんにちは') {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text =`こんにちは`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }
    if (message.content.match(/discord.gg/)) {
        message.delete(100)
    }
//↑ここに後述のコードをコピペする↑
});
client.login(token);