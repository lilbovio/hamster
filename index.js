const Discord = require("discord.js"); 
const  client = new Discord.Client();
require('dotenv').config();
const fs = require("fs");


const { Client, Collection, Guild} = require("discord.js");

const keepAlive = require('./maincra.js');

/// COMANDO HANDLER /// 
client.comandos = new Discord.Collection()

let archivos = fs.readdirSync("./comandos").filter((f) => f.endsWith(".js"))

for(var archi of archivos) {
  let comando = require("./comandos/"+archi)
  client.comandos.set(comando.nombre, comando)
   console.log(archi+" Fue cargado exitosamente")

}
client.on("ready", () => {   
  console.log("Ready mi g");
        });

client.on('message', (message) => {
  let cmds = [] 
  let prefix = "$"

if(!message.content.startsWith(prefix)) return;
if(message.author.bot) return; 

let usuario = message.mentions.members.first() || message.member;

const args = message.content.slice(prefix.length).trim().split(/ +/g); 
const command = args.shift().toLowerCase(); 

 let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))

    if(cmd){
    return cmd.run(client, message, args)
    }
});

  
  // CUANDO SE PRENDE EL BOT //
client.on("ready", async () => {
  const channelId = '826134802503565413'; 
  const channel = client.channels.cache.get(channelId); 
  const upembed = new Discord.MessageEmbed() 
  .setTitle("Bot Notification") 
  .setColor('RANDOM') 
  .setDescription(`Me Acabo De Prender y/o Reiniciar`) 
  .setFooter(`ahorita mismo estoy en ${client.guilds.cache.size} servidores`) 
  .setThumbnail('https://media.giphy.com/media/n1CpUAeV5gSz5sVOia/giphy.gif') 
  .setTimestamp()
  channel.send(upembed)
})

/// SERVIDORES // 
client.on("guildCreate", (guild) => {
  const serverid = '828129675565072413'; 
 const et = client.channels.cache.get(serverid);
  let embed = new Discord.MessageEmbed()
  .setTitle("Nuevo Servidor  <a:6107pepeclap:827357456085549087> ")

  .addField(`<a:wencanto:829060126518018078>  ${client.user.username} fue invitado a:`, `${guild.name}`)
  
  
  .addFields(
    { name: "<a:wcorona:829060467292241962>  ID del owner:", value:  `${guild.ownerID}`},
    { name: ":person_walking:  Miembros:", value: `${guild.memberCount}`},
  )
  .setColor("#48C9B0")
  .setTimestamp()

  
  et.send(embed)
  })

  client.login("ODEzNTg3NjcxNDQzMzA4NTg0.YDRekA.s1Wn2qIkP2R8aZi3qKsJckdqGDM");