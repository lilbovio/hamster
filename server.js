const Discord = require("discord.js"),
DisTube = require('distube'),
    sexo = new Discord.Client(),
    config = {
        prefix: "$",
        token: process.env.TOKEN || "ODEzMzM0MzA1MzQ1NzY1Mzc3.YDNymQ.0vCBRXBHxNFhJvbBDsexAKCvZEA"
    };
const MusicBot = require('discord-music-system-es');
const db = require("easy.database")
const registros = new db("Canal_registros")
const { Client, MessageEmbed } = require("discord.js");
const client = new Discord.Client({
  disableMentions: 'everyone',
  ws:  {
      Intents: Discord.Intents.ALL,
      properties: {
          $browser: 'Discord Android' 
          
      }
  }
})
const MessageAttatchment = require("discord.js"); //estas son todas mis varibales que necesito declarar

client.on("ready", () => {   //client status para status intercambiable
  console.log("listo xd");
             let statuses = [
        ` Apoyando a ${client.users.cache.size} usuarios en ${client.guilds.cache.size} servidores`,
        " Escribe $help para ayuda",
        " developer: $ 23#0023",
        ` Buscame en top.gg y en proceso de verificacion !! | Trabajando a ${client.ws.ping} ping` 
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"LISTENING"})
    
        }, 5000)
  
        });

        client.on("guildMemberAdd", (member) => {    //este es la bienvenida pq sino luego se me olvida

          const channel = member.guild.channels.cache.get('817082087692828682');
      
          if(!channel) return;
      
          const embed = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setTimestamp()
              .setTitle('**Bienvenido a LA CANTINA** <a:pandita:823740062180573184>')
              .setDescription(`<a:verificado_2:823323437811499039> **Esperamos disfrutes tu estadía.** <a:verificado_2:823323437811499039>\n\nNo olvides seleccionar algunos <:join:823740147128467456> <#817082091116036096>\nTambien pasate por <:join:823740147128467456> <#817082094744371261>\nY al final ve a socializar en <:join:823740147128467456> <#817082112637141034>`)
              .setThumbnail(member.user.avatarURL())
              .setImage('https://media.discordapp.net/attachments/813997816384847874/823743525333499904/La_Cantina.gif?width=630&height=473')
              .setFooter('LA CANTINA', 'https://i.pinimg.com/originals/6d/16/6b/6d166b1ef3c3e5bd661fa7fdb866483b.jpg');
          channel.send(`<@${member.id}>`, embed);
      });
    
      client.on("guildMemberAdd", (member) => {    //Bienvenida a Hamster support
    
        const channel = member.guild.channels.cache.get('826256947170377730');
    
        if(!channel) return;
    
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('**Bienvenido a Hamster Support** <a:pandita:823740062180573184>')
            .setDescription(`<a:verificado_2:823323437811499039> **Esperamos disfrutes tu estadía.** <a:verificado_2:823323437811499039>\n\nNo olvides seleccionar algunos <:join:823740147128467456> <#826248159143264301>\nTambien pasate por <:join:823740147128467456> <#826247589028560927>\nY al final ve a socializar en <:join:823740147128467456> <#825213209346572311>`)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
            .setImage('https://images-ext-2.discordapp.net/external/YGZ0VfnkcnQ07kMhXW6My9_zpZZweco1T4QFQ0pkkRo/https/media.discordapp.net/attachments/799458347547361341/799463786972839936/image0.gif')
            .setFooter('Hamster Support', 'https://media.discordapp.net/attachments/826247824228089867/826258368985038858/hamsterbot.jpg?width=471&height=471');
        channel.send(`<@${member.id}>`, embed);
    });
    
      client.on("guildMemberAdd", (member) => {
    
          const welcome = new MessageEmbed()
        
          .setTitle(`Bienvenido al server ${member.guild.name}`)
          .setDescription(`Hola ${member.user}, disfruta del server`)
          .setColor("RANDOM")
          .setFooter(`Bienvenid@ pasatela muy bien eres el miembro ${member.guild.memberCount}`)
          .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
          member.send(welcome);
        });

        client.on("ready", async () => {
          const channelId = '831696133205524500'; 
          const channel = client.channels.cache.get(channelId); 
          const upembed = new Discord.MessageEmbed() 
          .setTitle("Alerta del bot") 
          .setColor('RANDOM') 
          .setDescription(`Actualmente me encuentro activo para ser usado por ${client.users.cache.size} usuarios`) 
          .setFooter(`Ahora me encuentro en ${client.guilds.cache.size} servidores`) 
          .setThumbnail('https://media.giphy.com/media/n1CpUAeV5gSz5sVOia/giphy.gif') 
          .setTimestamp()
          channel.send(upembed)
        })
        

        client.on("message", message =>{ 
          if(message.content.startsWith(`<@813587671443308584> prefix`))
          message.channel.send("¡Hola! Mi nombre es Hamster Bot para poder interactuar conmigo escribe `$help`, mi prefix es `$`")
         
      

          if(message.content.startsWith('$beso')) {
              let member = message.mentions.members.first()
              || message.guild.members.resolve()
              || message.member
              let gifs = ["https://media.tenor.com/images/ec85a866a451e1a47008ac6a8534d1c4/tenor.gif" , "https://i.pinimg.com/originals/0b/0c/fe/0b0cfe1ee96050c74888352c3e47b3c0.gif" , "https://i.gifer.com/1Ve.gif" , "https://i.pinimg.com/originals/2d/c8/8f/2dc88ffcbdce75ecb53272379d1a7839.gif"];
              let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
              const embed = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setImage(randomIMG)
              .setTitle((member.id === message.member.id)?`${member.displayName} se ama tanto que se dio un besito solo`:`${message.member.displayName} le dio un besito a ${member.displayName}`);
              message.channel.send(embed);
          }
        

          if(message.content.startsWith('$abrazo')) {
            let member = message.mentions.members.first()
            || message.guild.members.resolve()
            || message.member
            let gifs = ["https://i.pinimg.com/originals/67/ef/ab/67efab9807503c0254c4f2df53a7cc86.gif" , "https://i.pinimg.com/originals/92/96/05/929605068c9527af54811ee6b135e994.gif" , "https://media.tenor.com/images/1814bb08a8f243945bb3b94598757d07/tenor.gif" , "https://static.paraloscuriosos.com/img/articles/13002/470x470/orig.58cb972993e30_giphy_4.gif"];
            let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(randomIMG)
            .setTitle((member.id === message.member.id)?`${member.displayName} se abrazo a si mismo`:`${message.member.displayName} le dio un abrazo a ${member.displayName}`);
            message.channel.send(embed);
        }

        if(message.content.startsWith('$golpe')) {
          let member = message.mentions.members.first()
          || message.guild.members.resolve()
          || message.member
          let gifs = ["https://media.tenor.com/images/94664693a59fced0a8eebbe7a176753c/tenor.gif" , "https://media.tenor.com/images/94664693a59fced0a8eebbe7a176753c/tenor.gif" , "https://media.tenor.com/images/94664693a59fced0a8eebbe7a176753c/tenor.gif" , "https://media.tenor.com/images/94664693a59fced0a8eebbe7a176753c/tenor.gif"];
          let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
          const embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setImage(randomIMG)
          .setTitle((member.id === message.member.id)?`${member.displayName} se golpea solo`:`${message.member.displayName} le dio un golpe a ${member.displayName} :0`);
          message.channel.send(embed);
      }

      if(message.content.startsWith('$galletita')) {
        let member = message.mentions.members.first()
        || message.guild.members.resolve()
        || message.member
        let gifs = ["https://i.makeagif.com/media/1-16-2017/V9yW-b.gif" , "https://i.pinimg.com/originals/cf/8e/25/cf8e25aa2314c06bf36a9b935447722c.gif" , "https://media1.giphy.com/media/26FPn8qHcM9VK4nIs/giphy.gif" , "https://media.tenor.com/images/a126678a5af78c6f8949ec0016380a59/tenor.gif"];
        let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(randomIMG)
        .setTitle((member.id === message.member.id)?`${member.displayName} se comio una galletita con leche`:`${message.member.displayName} le dio una galletita con chispitas a ${member.displayName}`);
        message.channel.send(embed);
    }
    
    if(message.content.startsWith('$botinfo')){
      const embed = new Discord.MessageEmbed()
        .setTitle("Hamster Bot")
        .setThumbnail(client.user.avatarURL())
        .addField("➜ Creador", `$ 23#0023`)
        .addField("➜ Fecha De Creacion", `22/02/21`)
        .addField("➜ Usuarios", ` ${client.users.cache.size}`)
        .addField("➜ Servidores", ` ${client.guilds.cache.size}`)
        .addField("➜ Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
        .addField("➜ Ping", `${client.ws.ping}`)
        .addField("➜ Libreria", " Discord.js")
        .setColor("#5CC1FF")
        message.channel.send(embed) 
    }

    if(message.content.startsWith('$ahorcar')) {
      let member = message.mentions.members.first()
      || message.guild.members.resolve()
      || message.member
      let gifs = ["https://media1.giphy.com/media/l0G17mKNa6XJHYN5m/giphy.gif" , "https://i.makeagif.com/media/6-07-2018/ddzZKi.gif" , "https://i.pinimg.com/originals/ba/2d/68/ba2d684029ab936cd88959551ed5fbe4.gif"];
      let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage(randomIMG)
      .setTitle((member.id === message.member.id)?`${member.displayName} se ahorco a el/ella mismo...e e e ¿esto es normal? ._.`:`${message.member.displayName} ahorco a ${member.displayName} es, es, es, es, ¿esto algo normal? `);
      message.channel.send(embed);
  }

  if(message.content.startsWith('$blunt')) {
    let member = message.mentions.members.first()
    || message.guild.members.resolve()
    || message.member
    let gifs = ["https://64.media.tumblr.com/tumblr_ma8t8opw2c1rsmfnpo1_500.gif" , "https://64.media.tumblr.com/ee5160b51827f06cb75f469c52c8042c/tumblr_ml7moeexEh1ri08goo1_400.gif" , "https://media.tenor.com/images/fbc2c3ccdfa0023e4049f53769e2a07b/tenor.gif", "https://media.tenor.com/images/79ebe77b71c43a79c314a793a9c8bd7a/tenor.gif"];
    let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setImage(randomIMG)
    .setTitle((member.id === message.member.id)?`${member.displayName} se prendio un blunt`:`${message.member.displayName} le prendio un blunt a  ${member.displayName}`);
    message.channel.send(embed);
}

if(message.content.startsWith("$user")){
  let estados = {
    "online": "<:online:823279545759039509> En Línea",
    "idle": "<:idle:823279545447743560> Ausente",
    "dnd": "<:dnd:823279545452593172> No molestar",
    "offline": "<:offline:823279545369100299> Desconectado/invisible"
  };

  
  function formatDate (template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
      return template.split(specs[i]).join(item)
    }, template)
  }
  
  let member = message.mentions.members.first() ||  message.member;


    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM") 
      .setDescription("**INFORMACIÓN DEL USUARIO:**") 
      .addField("*Nombre del usuario*", `${member.user.tag}`)
      .addField("**ID**:", `${member.user.id}`)
      .addField("**Apodo**:", `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`, true)
      .addField("**Se unio a discord: <a:verificado:823291267487498291>**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt)) 
      .addField("**Se unio al servidor: <a:verificado_2:823323437811499039>**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))
      .addField("**Estado**:", "**" + estados[member.user.presence.status] + "**")
      .addField("**<a:boos_2:823323436003753984> ¿Es Booster? <a:boos_2:823323436003753984>**:", member.premiumSince ? '**Lo es**' : '**No lo es**')
      .addField("**Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
      .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
      .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp();;
   message.channel.send(embed);
}
    
  });


      client.on("message", message =>{
        if(message.content === ("$server")){
          
        
         let region = {
            europe: "Europa :flag_eu:",
            brazil: "Brasil :flag_br: ",
            hongkong: "Hong Kong :flag_hk:",
            japan: "Japón :flag_jp:",
            russia: "Rusia :flag_ru:",
            singapore: "Singapur :flag_sg:",
            southafrica: "Sudáfrica :flag_za:",
            sydney: "Sydney :flag_au:",
            "us-central": "Central US :flag_us:",
            "us-east": "Este US :flag_us:",
            "us-south": "Sur US :flag_us:",
            "us-west": "Oeste US :flag_us:",
            "vip-us-east": "VIP US Este :flag_us:",
            "eu-central": "Europa Central :flag_eu:",
            "eu-west": "Europa Oeste :flag_eu:",
            london: "London :flag_gb:",
            amsterdam: "Amsterdam :flag_nl:",
            india: "India :flag_in:"
          };
        
        
        
            const server = new Discord.MessageEmbed()
            .setTitle("INFORMACIÓN DEL SERVIDOR")
            .setColor(0x000000)
            .setThumbnail(message.guild.iconURL({dynamic: true}))
            .addField("**ID**", message.guild.id)
            .addField('**CREADO EN <a:loading:823279546056572938>**:', message.guild.createdAt.toLocaleString(), true)
            .addField("**REGION**", `${region[message.guild.region]}`)
            .addField("**OWNER <:owner:823279545724567592>**",`${message.guild.owner.user}`)
            .addField(`**CANALES**` , `${message.guild.channels.cache.filter(x => x.type === "text").size} || :microphone2: De Voz: ${message.guild.channels.cache.filter(x => x.type === "voice").size}`)
            .addField('**EMOJIS**',`${message.guild.emojis.cache.size} <a:emojis:823323437060587551>`)
            .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();
            message.channel.send(server);
        }

        if(message.content.startsWith('$baile')) {
          let member = message.mentions.members.first()
          || message.guild.members.resolve()
          || message.member
          let gifs = ["https://media.tenor.com/images/70506ef1f0464cf5c3f7b5987abc820b/tenor.gif" , "https://i.pinimg.com/originals/cf/8c/bf/cf8cbfddbda0adfa835f2b75b52c3200.gif" , "https://i.pinimg.com/originals/e9/2b/dc/e92bdc35371b66ad099e4f01cc045285.gif", "https://i.pinimg.com/originals/67/11/4e/67114e8b7f91d39ef0b21cb7f3464703.gif", "https://media.tenor.com/images/cc292364a442c9a2f1138b9b41f80370/tenor.gif"];
          let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
          const embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setImage(randomIMG)
          .setTitle((member.id === message.member.id)?`${member.displayName} esta bailando muy feliz, ¡Mira esos pasos!`:`${message.member.displayName} saco a bailar a ${member.displayName} que lindo se ven bailando juntitos`);
          message.channel.send(embed);
      }

      if(message.content.startsWith('$casar')) {
        let member = message.mentions.members.first()
        || message.guild.members.resolve()
        || message.member
        const embed = new Discord.MessageEmbed()
        .setTitle((member.id === message.member.id)?`Menciona a alguien para casarte ${member.displayName}`:`${message.author.username} Se caso con ${member.displayName} ahora seran felices para siempre`)
        .setImage('https://media.discordapp.net/attachments/813997816384847874/824396868581720094/Ositos.gif')
        .setColor('RANDOM')
        .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp();
        message.channel.send(embed);
    }

    if(message.content.startsWith('$divorciarse')) {
      let member = message.mentions.members.first()
      || message.guild.members.resolve()
      || message.member
      const embed = new Discord.MessageEmbed()
      .setTitle((member.id === message.member.id)?`Menciona a alguien para divorciarte ${member.displayName}`:`${message.author.username} Se divorcio de ${member.displayName} ya no seran felicies para siempre :sob:`)
      .setImage('https://media.discordapp.net/attachments/813997816384847874/824399405993033779/milkbear.gif')
      .setColor('RANDOM')
      .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp();
      message.channel.send(embed);
  }
  
  if(message.content === ("reglasembed2")){
    const embed = new Discord.MessageEmbed()
    .setTitle("Reglas Del Servidor")
    .setColor(0x0A14AE)
    .setDescription(":lock: **REGLAS DEL SERVER** :lock:\n\nEs **importante** que leas esto antes de empezar a hablar, sino seras sancionado por el staff.\n:white_check_mark: 1) Respeta los canales, usalos para lo que son (3 warns, luego mute de 3-5 mins)\n:white_check_mark: 2) No pedir moderador/admin o algun rol personalizado (Ban temporal o inmediato)\n:white_check_mark: 3) Use el lenguaje apropiado para el canal (3 warns a mute de 5-10 mins)\n:white_check_mark: 4) No abuse de otros usuarios, haga amenazas, hostigue, intimide, invada la privacidad (Ban permanente)\n:white_check_mark: 5) El acoso en el server o al dm esta completamente prohibido (Ban inmediato)\n:white_check_mark: 6) No poner IP de otros servidores. (Esta sera borrada y seras sancionado con mute de 20 mins, pide permiso del owner para ponerla)\n:white_check_mark: 7) Respeta a los moderadores/admins, no los molestes,si lo haces puedes llevarte sanción de parte del staff (Mute o ban dependiendo la situacion)\n:white_check_mark: 8) Usa un nombre apropiado y avatar. Evita caracteres especiales, emojis, obscenidades, e interpretación. (Se te pedira que sea cambiado a la brevedad)\n:white_check_mark: 9) Sin ventas o intercambios. Cualquier mensaje que trate de vender u ofrecer servicios será borrado y el usuario sancionado. (Ban inmediato)\n:white_check_mark: 10) Sé  amable, cívico. Trata a los demás usuarios bien, y expresa tus pensamientos de manera constructiva. (Sino es asi, mute 2-5 mins)\n:white_check_mark: 11) Filtrar información personal está completamente prohibido. (Ban inmediato) \n:white_check_mark: 12) Cualquier intento o indicio de raid, doxxeo etc es motivo de ban inmediato")
    message.channel.send(embed);
  }

  if(message.content === ("verificacion")){
    const embed = new Discord.MessageEmbed()
    .setTitle("Verificate")
    .setColor(0x0A14AE)
    .setDescription("Reacciona con emoji <a:verificado1:818051687829733416> para poder ver todos los canales\n\nEsto es hecho con la finalidad de proteger el servidor en contra de Bots o Raids")
    message.channel.send(embed);
  }

  if(message.content.startsWith('$avatar')) {
    let member = message.mentions.members.first()
    || message.guild.members.resolve()
    || message.member
    const embed = new Discord.MessageEmbed()
    .setTitle((member.id === message.member.id)?`Tu avatar ${member.displayName} <a:money_pistol:823321202877661224>`:`Avatar de ${member.displayName} <a:money_pistol:823321202877661224>`)
    .setImage(member.user.displayAvatarURL({dynamic: true, size: 2048}))
    .setColor('RANDOM')
    .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp();
    message.channel.send(embed);
}

if(message.content.startsWith('$img')) {
  let member = message.mentions.members.first()
  || message.guild.members.resolve()
  || message.member
  const embed = new Discord.MessageEmbed()
  .setTitle((member.id === message.member.id)?`Tu avatar ${member.displayName} <a:money_pistol:823321202877661224>`:`Avatar de ${member.displayName} <a:money_pistol:823321202877661224>`)
  .setImage(member.user.displayAvatarURL({dynamic: true, size: 2048}))
  .setColor('RANDOM')
  .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp();
  message.channel.send(embed);
}

if(message.content.startsWith('$pp')) {
  let member = message.mentions.members.first()
  || message.guild.members.resolve()
  || message.member
  const embed = new Discord.MessageEmbed()
  .setTitle((member.id === message.member.id)?`Tu avatar ${member.displayName} <a:money_pistol:823321202877661224>`:`Avatar de ${member.displayName} <a:money_pistol:823321202877661224>`)
  .setImage(member.user.displayAvatarURL({dynamic: true, size: 2048}))
  .setColor('RANDOM')
  .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp();
  message.channel.send(embed);
}

if(message.content === ("$servericon")){
  const embed = new Discord.MessageEmbed()
  .setTitle("Icono del server")
  .setColor('RANDOM')
  .setDescription(`Este es el icono de ${message.guild.name}`)
  .setImage(message.guild.iconURL({dynamic: true, size: 2048}))
  .setTimestamp()
  .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
  message.channel.send(embed);
}

if(message.content === ("$serverbanner")){
  const embed = new Discord.MessageEmbed()
  .setTitle("Banner del server")
  .setColor('RANDOM')
  .setDescription(`Este es el banner de ${message.guild.name}`)
  .setImage(message.guild.bannerURL({dynamic: true, size: 2048}))
  .setTimestamp()
  .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
  message.channel.send(embed);
}

if(message.content === ("$reactionroles1")){
  const embed = new Discord.MessageEmbed()
  .setTitle('AUTOROLES')
  .setColor(0x0A14AE)
  .setDescription("Elige tu color favorito\n\n<:diamantemorado:823743390901731339> = <@&817082023733755915>\n<:diamantenegro:823743391740330035> = <@&817082024921137242>\n<:diamanteazul:823743388632219669> = <@&817082025831038996>\n<:diamantemostaza:823743391312379914> = <@&817082026607116308>\n<:diamanterojo:823743391874547713> = <@&817082027417272350>\n<:diamanteamarillo:823743388435218453> = <@&817082028444483594>\n<:diamanteceleste:823743389333848065> = <@&817082029128024096>\n<:diamanterosado:823743392247840828> = <@&817082029870809099>\n<:diamantenaranja:823743391912820780> = <@&817082030721335337>\n<:diamanteverde:823743392273661982> = <@&817082031888138250>\n<:diamantegris:823743389858005002> = <@&817082032747184159>")
  message.channel.send(embed);
}

if(message.content === ("$beneficiosdeboostear")){
  const embed = new Discord.MessageEmbed()
  .setTitle("<a:ezgif3:807502981296685117> BENEFICIOS DE BOOSTEAR <a:ezgif3:807502981296685117>")
  .setColor(0xF10DB6)
  .setDescription(" <a:ezgif5:807502982275006485> Al mejorar el servidor obtendrás los siguientes beneficios. <a:ezgif5:807502982275006485> \n\n• Acceso a colores exclusivos para tu perfil.\n\n• Rol <@&823606536852602932> e insignicia exclusiva.\n\n• Gestionar apodos. (no abusar)\n\n• Unirte a canales de voz llenos. (no abusar)\n\n• Mover a miembros en canales de voz. (no abusar)\n\n• Chat privado para Boosters.\n\n• Envíar imágenes en <#817082112637141034> (Mandar contenido +18 será motivo de sanción).\n\n• Tener un rol personalizado.\n\n• Añadir 2 emotes al servidor.\n\n• Podrás comunicarte con tus influencer favoritos tanto en el canal de texto <#817082111772065892> y en el canal de voz exclusivo")
  message.channel.send(`<@&817082018256388116>`, embed);
}

if(message.content === ("$playlist")){
  const embed = new Discord.MessageEmbed()
  .setTitle('__**Esta es la playlist favorita de mi developer <3**__.')
  .setColor('RANDOM')
  .setDescription('https://youtube.com/playlist?list=PLtWH6n0QuA2nQJKn58bFabcTDqwIUBfDi \n\nLa playlist fue creada por el usuario `ssX82#0082` diganle gracias <:kittylav:829630288882958377>')
  message.channel.send(embed);
}

if(message.content === ("$ayudacomandosdelstaff")){
  const embed = new Discord.MessageEmbed()
  .setTitle("COMANDOS STAFF")
  .setColor(0x0A14AE)
  .setDescription("$Warn: El warn es un aviso, solo se dará un aviso, si la persona no cumple el aviso, la siguiente sanción sería mute, comando: \n$warn {@user} {razón}\n$Mute: El mute es una sanción para que la persona no pueda escribir por un cierto tiempo, si el usuario no entiende, la sanción incrementará por tiempo, comando:\n$mute {@usuario} {tiempo} {razón}\n$Unmute: El unmute es para quitarle el mute al usuario que haya sido muteado por accidente o por falta de entendimiento, comando:\n$unmute {@usuario} {razón}\n$Kick: El kick es para expulsar a una persona del servidor, podrá unirse de nuevo, el kick se usará en casos mayores donde el usuario esté pasando los límites, comando:\n$kick {@usuario} {razón}\n$TempBan: El tempban es para banear a un usuario por un cierto tiempo, este comando solo se usará en casos extremos donde el mismo usuario pase los límites, comando:\n$tempban {@usuario} {tiempo} {razón}\n$Ban: El ban es para banear a un usuario permanente, este comando solo se usará en casos extremos donde el usuario pase los límites, comando:\n$ban {@usuario} {razón}\nUnban: El unban sirve para desbanear a alguien del servidor, comando: \n$unban {@ID}\n$Slowmode: El slowmode sirve para pausar el canal con tiempo, este comando se usará cuando el chat se vuelva difícil de moderar o hagan mucho Flood, comando:\n$slowmode {tiempo}\n$Lockdown: El lockdown sirve para bloquear el canal, este comando solo se usará cuando se vuelva tóxico o difícil de moderar, comando: \n$lockdown(Para desbloquear el canal debes de poner el mismo comando).\n$Purge: El purge sirve para borrar mensajes con el bot, comando: \n$purge {100}\n$Punishments: El punishments sirve para ver todas las sanciones que tiene un usuario, comando:\n$punishments {@usuario} {página}\n$Viewcase: El viewcase sirve para ver la sanción de un usuario más detallado, comando:\n$viewcase {caso}")
  message.channel.send(embed);
}

if(message.content === ("$redes")){
  const embed = new Discord.MessageEmbed()
  .setTitle("Redes Sociales")
  .setColor('RANDOM')
  .setDescription("Este es el perfil de Instragram de mi developer `$ 23#0023` <3.\n<:Insta_1:830961471503466516> Ig: https://www.instagram.com/lil_bovio/")
  message.channel.send(embed);
}

if(message.content === ("$invitar")){
  const embed = new Discord.MessageEmbed()
  .setTitle("INVITACION")
  .setColor('RANDOM')
  .setImage('https://media.giphy.com/media/AZflctIrqN3pBrrpz4/giphy.gif')
  .setDescription('¡Hola! Si quieres que yo forme parte de tu servidor aqui tienes el link para poder invitarme, recurda contar con los permisos para poder invitarme\nSoy un bot multifuncional en version de prueba asi que lamentablemente aun no podre estar 24/7 encendido pero el tiempo que este podre estar a tus ordenes :D\n\nhttps://discord.com/oauth2/authorize?client_id=813587671443308584&scope=bot&permissions=2147483647')
  .setTimestamp()
  .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
  message.channel.send(embed);
}

if(message.content === ("$help")){
  const embed = new Discord.MessageEmbed()
  .setTitle("Comandos del bot | Prefix [$]")
  .setColor('RANDOM')
  .setDescription("Los comandos son\n\n**COMANDOS DE INTERACCION**\n$beso $abrazo $darporro $golpe $baile $ahorcar $galletita $casar $divorciarse\n\n**COMANDOS DE USO**\n$avatar/$pp/$img $mota $bailar $playlist $snipe $server $user\n\n**COMANDOS DE MODERACION**\n$ban $kick $warn\n\n**COMANDOS DE MUSICA**\n[$help music] para mayor info de este modulo\n\nYa contamos con servidor de ayuda oficial puedes unirte aqui\nhttps://discord.gg/dPGUQssBCk")
  .setFooter('Si quieres saber info especifica sobre un modulo escribe $help [modulo] | Si quieres añadirme a tu servidor solo debes escribir $invitar y te dare mi link de invitacion')
  .setTimestamp()
    message.channel.send(embed);
    } 

    if(message.content === ("$help uso")){
      const embed = new Discord.MessageEmbed()
      .setTitle("Comandos del bot | Modulo **[USO]** | Prefix [$]")
      .setColor('RANDOM')
      .setDescription("Los comandos de uso\n\n`$avatar/$pp/$img`\nVe el avatar de algun usuarioo el tuyo\n`$mota`\nPrende un blunt para ti\n`$bailar`\nBaila tu solo\n`$snipe`\nVe el ultimo mensaje eliminado del canal\n`$server`\nVe la informacion del server\n`$user`\nVe la informacion de algun usuario o la tuya")
      .setFooter('Este son los comandos del modulo de interaccion si necesitas otro modulo escribe $help [modulo]')
      .setTimestamp()
    message.channel.send(embed);
    } 

      if(message.content === ("$help interaccion")){
      const embed = new Discord.MessageEmbed()
      .setTitle("Comandos del bot | Modulo **[INTERACCION]** | Prefix [$]")
      .setColor('RANDOM')
      .setDescription("Los comandos de interaccion son\n\n`$beso`\nDale un beso a un usuario\n`$abrazo`\nDale un abrazo a algun usuario\n`$darporro`\nDale un porro a algun usuario\n`$golpe`\nDale un golpe a un usuario\n`$baile`Ponte a bailar con algun usuario\n`$ahorcar`\nAhorca a algun usuario\n`$galletita`\nDale una galletita alguien\n`$casar`\nCasate con alguien\n`$divorciarse`\nDivorciate de la persona con la que te casaste anteriormente")
      .setFooter('Este son los comandos del modulo de interaccion si necesitas otro modulo escribe $help [modulo]')
      .setTimestamp()
    message.channel.send(embed);
    } 

        if(message.content === ("$help moderacion")){
          const embed = new Discord.MessageEmbed()
          .setTitle("Comandos del bot | Modulo **[MODERACION]** | Prefix [$]")
          .setColor('RANDOM')
          .setDescription("Los comandos de moderacion son\n\n`$ban`\nBanea a algun usuario\n`$kick`\nKickea a algun usuario\n`$warn`\nDale una advertencia a algun usuario\n\n**[RECUERDA PONER MI ROL DE HAMSTERBOT ARRIBA DE EL ROL BASE]**")
          .setFooter('Este son los comandos del modulo de interaccion si necesitas otro modulo escribe $help [modulo]')
          .setTimestamp()
    message.channel.send(embed);
    } 

          if(message.content === ("$help music")){
          const embed = new Discord.MessageEmbed()
          .setTitle("Comandos del bot | Modulo **[MUSICA]** | Prefix [$]")
          .setColor('RANDOM')
          .setDescription("Recuerda que aun soy un bot de prueba asi que no me desconectes del canal de voz sino ya no podre funcionar :c\n\nLos comandos de musica son\n\nPLAY:\n\n- play,\n- add,\n- join\n+ <Letra de la canci�n | video URL | playlist URL>\n\n\nSTOP\n\n- stop\n- kill\n- destroy\n- leave\n\n\nNOW PLAYING\n\n- np\n- nowplaying\n- current\n\n\nSKIP\n\n- skip\n- next\n- >>\n\n\nQUEUE\n\n- queue\n- list\n- show\n\n\nPAUSE\n- pause\n\n\nRESUME\n- resume\n\n\nREMOVE\n\n- remove\n- delete\n+ <un numero valido de la lista de reproduccion>")
          .setFooter('Este son los comandos del modulo de musica si necesitas otro modulo escribe $help [modulo]')
          .setTimestamp()
    message.channel.send(embed);
    } 

          if(message.content.startsWith("<@813587671443308584> help")){
          const embed = new Discord.MessageEmbed()
          .setTitle("Para ver los comandos del bot escribe [$help]")
          .setColor('RANDOM')
          .setDescription("Si quieres acceder a la lista completa de comandos a realizar escribe [$help] en cualquier canal")
          message.channel.send(embed);
          }

            let usuarioban = message.mentions.users.first();
            let argumentoban = message.content.substring().split(" ");
             switch(argumentoban[0]){
                case '$ban':
         
                 const { member, mentions } = message;
         
                 const mencion = `<@${member.id}>`;
         
                 if(member.hasPermission("BAN_MEMBERS")){
                    const usuario = mentions.users.first()
                    if (usuario) {
                      const usuariobaneado = message.guild.members.cache.get(usuario.id)
                      usuariobaneado.ban()
                      const embedban = new Discord.MessageEmbed()
                      .setTitle('__**NUEVO BAN**__')
                      .setDescription(`<:ban_check:823436359418904596> | ${usuario.username} Ha sido baneado con exito`)
                      .setTimestamp()
                      .setThumbnail('https://images-ext-1.discordapp.net/external/gMTBkBvQyaP6TOG2i2RNEoG-mYnCfUD_nCRv3x4dcNw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/363732337067950080/a_c368e45d8fe1fad40bf89129012c4325.gif')
                      .setColor(0x0bf14d)
                      .setFooter("Ejecutado por el admin/mod || " + message.member.displayName, message.author.displayAvatarURL())
                      message.channel.send(embedban)
                      usuarioban.send(`Has sido baneado ${message.guild.name} si crees que esto es un error favor de contactar al staff`)
                    } else {
                        const mencionban = new Discord.MessageEmbed()
                        .setTitle('__**ERROR AL BANEAR**__')
                        .setDescription(`${message.author.username} | Especifica el usuario a banear | **[@user]**`)
                        .setTimestamp()
                        .setThumbnail('https://images-ext-1.discordapp.net/external/KJBhmKjmVFmzhOqC9hq5lpthMnPmtUSF9J-ZXUBfjK0/https/media.discordapp.net/attachments/801832085395865600/819453963144790046/emoji.gif')
                        .setColor(0xf8d73c)
                        .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
                      message.channel.send(mencionban)
                    } 
                   } else {
                    const errorban = new Discord.MessageEmbed()
                    .setTitle('__**ERROR AL BANEAR**__')
                      .setDescription(`<:x_:823279545436209184> | ${mencion} No tienes permisos de banear`)
                      .setTimestamp()
                      .setThumbnail('https://images-ext-2.discordapp.net/external/YGZ0VfnkcnQ07kMhXW6My9_zpZZweco1T4QFQ0pkkRo/https/media.discordapp.net/attachments/799458347547361341/799463786972839936/image0.gif')
                      .setColor(0xc30202)
                      .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
                      message.channel.send(errorban)
                    }
                 }
                 let usuariokick = message.mentions.users.first();
                 let argumentokick = message.content.substring().split(" ");
                  switch(argumentokick[0]){
                     case '$kick':
               
                      const { member, mentions } = message;
               
                      const mencion = `<@${member.id}>`;
               
                      if(member.hasPermission("KICK_MEMBERS")){
                         const usuario = mentions.users.first()
                         if (usuario) {
                           const usuariokickeado = message.guild.members.cache.get(usuario.id)
                           usuariokickeado.kick()
                           const embedkick = new Discord.MessageEmbed()
                           .setTitle('__**NUEVO KICK**__')
                           .setDescription(`<:ban_check:823436359418904596> | ${usuario.username} Ha sido kickeado con exito`)
                           .setTimestamp()
                           .setThumbnail('https://images-ext-1.discordapp.net/external/gMTBkBvQyaP6TOG2i2RNEoG-mYnCfUD_nCRv3x4dcNw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/363732337067950080/a_c368e45d8fe1fad40bf89129012c4325.gif')
                           .setColor(0x0bf14d)
                           .setFooter("Ejecutado por el admin/mod || " + message.member.displayName, message.author.displayAvatarURL())
                           message.channel.send(embedkick)
                           usuariokick.send(`Has sido kickeado de ${message.guild.name} si crees que esto es un error favor de contactar al staff`)
                         } else {
                            const mencionkick = new Discord.MessageEmbed()
                            .setTitle('__**ERROR AL KICKEAR**__')
                            .setDescription(`${message.author.username} | Especifica el usuario a banear | **[@user]**`)
                            .setTimestamp()
                            .setThumbnail('https://images-ext-1.discordapp.net/external/KJBhmKjmVFmzhOqC9hq5lpthMnPmtUSF9J-ZXUBfjK0/https/media.discordapp.net/attachments/801832085395865600/819453963144790046/emoji.gif')
                            .setColor(0xf8d73c)
                            .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
                          message.channel.send(mencionkick)
                         } 
                        } else {
                            const errorkick = new Discord.MessageEmbed()
                            .setTitle('__**ERROR AL KICKEAR**__')
                              .setDescription(`<:x_:823279545436209184> | ${mencion} No tienes permisos suficientes para ejecutar esta accion\nPermisos faltantes = ``KICK_MEMBERS```)
                              .setTimestamp()
                              .setThumbnail('https://images-ext-2.discordapp.net/external/YGZ0VfnkcnQ07kMhXW6My9_zpZZweco1T4QFQ0pkkRo/https/media.discordapp.net/attachments/799458347547361341/799463786972839936/image0.gif')
                              .setColor(0xc30202)
                              .setFooter("Pedido por || " + message.member.displayName, message.author.displayAvatarURL())
                              message.channel.send(errorkick)
                            }
                      }

                    let usuariowarn = message.mentions.users.first();
                    let argumentowarn = message.content.substring().split(" ");
                     switch(argumentowarn[0]){
                        case '$warn':
                 
                         const { member, mentions } = message;
                 
                         const mencion = `<@${member.id}>`;
                 
                         if(member.hasPermission("KICK_MEMBERS")){
                            const usuario = mentions.users.first()
                            if (usuario) {
                              const usuariobaneado = message.guild.members.cache.get(usuario.id)
                              message.channel.send(`<:ban_check:823436359418904596> | ${usuario.username} Ha sido warneado con exito`)
                              usuariowarn.send(`Has sido warneado en ${message.guild.name} por el admin/mod ${message.author.username} si crees que esto es un error favor de contactar al staff`)
                            } else {
                              message.channel.send(`${message.author.username} Especifica el usuario a warnear | **[@user]**`)
                            } 
                           } else {
                              message.channel.send(`<:x_:823279545436209184> ${mencion} No tienes permisos de warnear`)
                            }
                         }

                         if(message.content === ("$configvoice")){
                          let user = message.mentions.users.first();
                        const embed = new Discord.MessageEmbed()
                        .setTitle("¿Como funciona el nuevo bot que agregamos?")
                        .setColor(0x0A14AE)
                        .setDescription("Muy facil, no tiene mucha ciencia el bot, tu te unes al canal llamado 'Unete Para Crear' al unirte a este canal de voz lo que haras es crear un canal de voz con el nombre que que tu quieras\n\nAhora, pero ¿cuales son sus comandos?\n\n\nLos comandos de este bot son los siguientes\n**[v!voice lock]**: Este comando sirve para cerrar el canal de voz\n**[v!voice unlock]**: Este comando es para abrir el canal de voz\n**[v!voice name <name>]**: Este comando te permitira renombrar tu canal de voz\n**[v!voice limit <number>]**: Este comando te permitira poner un limite de usuarios a tu canal de voz\n**[v!voice permit <@user>]**: Este comando sirve para darle acceso a una persona es especifico\n**[v!voice reject <@user>]**: Este es lo contrario a el anterior este te permite kickear a un usuario de tu canal de voz\n\nY eso es todo diviertanse con sus amigos creando sus salas privadas pero aun dejaremos los canales privados de Duo, Trio y Squad")
                        message.channel.send(`<@&817082018256388116>`, embed);
                        }

                        if(message.content.startsWith("raid")){
                          message.delete();
                      }

                      if(message.content.startsWith('<@832519395975757876> help')){
                        message.channel.send('Mi prefix en este server es `$`')
                      }

                      if(message.content.startsWith("1raid")){
                        message.delete();
                    }

                    if(message.content.startsWith("1setup")){
                      message.delete();
                  }

                  if(message.content.startsWith("2setup")){
                    message.delete();
                }

                if(message.content.startsWith("Raid")){
                  message.delete();
              }

              if(message.content.startsWith(".raid")){
                message.delete();
            }

            if(message.content.startsWith(".Raid")){
              message.delete();
          }

          if(message.content.startsWith("$raidmode")){
            message.delete();
            message.reply("EL MODO ANTI RAID FUE ACTIVADO")
        }
      
    });


    client.snipes = new Map(); 

var prefix = "$" 

client.on("messageDelete", (message) => {


client.snipes.set(message.channel.id, {
      content: message.content,
      delete: message.author,
      canal: message.channel
    });
});

client.on("message", (message) => {

  if(message.author.bot || !message.content.startsWith(prefix)) return;


const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();


const unders = require('underscore')


let player2 =  message.mentions.users.first();
let player1 = message.author

// Aqu� manejaremos quien empieza
let turno = "";
let i = 0;
//El tiempo lo manejaremos en una variable 
let time = 120000;

if(args[1] == 'jugar') {
/* Este If es opcional, es por si quieren agregar que tambien se pueda jugar contra una computadora
*/    
    player2 = 'pc'
    message.channel.send('Activando computadora...')
    .then(m => {
        setTimeout(function() {
            m.edit('!Empiezas tu! ' + player1.username + '¿Que staff de este server te cae mejor?')
        }, 3000)// Despues de 3s Editara el mensaje
    })

    i = 3
    

}  else if(player2) {
    // Si el usuario quiere jugar contra si mismo o contra un bot
    if(player2.id == message.author.id) {
        return message.channel.send('No puedes jugar con tigo mismo.')
    }  else if (player2.bot == true) {

        return message.channel.send(`Ups creo que quieres jugar contra un bot y eso no se puede`)
    }


    message.channel.send(`${player2} Te estan desafiando a jugar un versus!!:fire:\n**Si:** para aceptar\n**No:** Para rechazar`)

}	else {
    return message.channel.send('**¿Contra quien quieres jugar? Ejemplo:\n`$versus @$ 23`**')
}

 

// Hacemos el colector dependiendo de lo que el usuario escogi� 
let collector

if(player2 == 'pc') {
		collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id, { idle: time })
	
	}	else {
		collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id || m.author.id === player2.id, { idle: time })
}

const embedHelp = new Discord.MessageEmbed()
.setTitle('__**ALCH NO C Q VA AQUI ASJAJS XD__**')
.setColor('YELLOW')
.setDescription('ira primero deja ver q va aca y ya')
.setTimestamp()


collector.on("collect", async m => { 
  // Esto cancela el collector
  if(m.content === "pasar" || m.content == "acabar") return collector.stop("Exited");
 
// Les recomiendo que se fijen como funcionan los switch (son relativamente parecidos a los if)

  switch (i) {
    case 0:
        if(player2 == 'pc') {			
	message.channel.send(embedHelp)
        i = 3
	}  else if(m.author.id == player1.id) {	
          // Esto har� que solo pueda responder el usuario(player2) al que "retas"
	  return
	}  else if(m.content.toLowerCase() == 'si')  {
        //Si el usuario retado responde que "si" redefinimos time a 5 minutos que es lo que va a durar la partida o como ustedes quieran
         time = 300000; //Pd el tiempo va en milisegundos
       
        //Aqui decidiremos quien empieza primero 
        turno = [player1.id, player2.id]
        // El npm underscore tiene algo llamado shuffle que nos permite revolver un array, eso es lo que haremos para decidir quien empieza primero
        turno = unders.shuffle( turno )
        //Sumamos progreso(i) y el s mas adelante veremos para que sirve 
        s = 0;
	  i++
     
        const acceptDuel = new Discord.MessageEmbed()
	   .setTitle('!Duelo aceptado!')
	   .setColor('GREEN')
	   .setDescription(`**!${player1.username} vs ${player2.username}**`)

        const embedTurno = new Discord.MessageEmbed()
	    .setTitle(`**Turno de: ${client.users.cache.get(turno[0]).username}**`)
						
					

        message.channel.send(acceptDuel)
          .then(m => {
	     setTimeout(function() {
		m.edit(embedTurno)
	    }, 4000)
        })  //Este then lo que hara es editar el mensaje despu�s de 4s

    } else if(m.content.toLowerCase() == 'no') {
	  message.channel.send(`Has rechazado la propuesta de ${player1.username}`)
        // Cancelamos el collector
	collector.stop("Finished");
					
	}  else {
          //Esto es si el usuario al que retan no responde si o no
          if(s < 3) {
          //"S" sera el numero de veces que le recordaremos que alguien lo esta retand
	  s++
	  time - 1000;
	return message.channel.send(`${player2.username}, ${player1.username} quiere jugar con tigo!`)

	}  else {

		time - 1000;
		return
    }
}
        break;

          case 1:
            //Aqu� comienza su juego
            if(m.author.id != turno[0]) {
            return

            } else if(m.content == 'comando') {
               //Comando x
            }  else if(m.content == 'pasar') {
               //Un ejemplo para pasar de turno
               message.channel.send(`Turno de:  ${client.users.cache.get(turno[1]).username}\n¿Que persona te cae mal?`)
               i++
            }
						
					
          break; 
            case 2:
              //Turno player 2
              if(m.author.id != turno[1]) {
		return
	     } 

              break;
                case 3:
                    //Turno computadora 
                    break;
             //y as� sucesivamente por cada turno o como ustedes lo hagan
  
}


})
//Esto sirve para saber cuando paro el colector y porque 
collector.on("end", async (collected, reason) => {



        if (reason === "Exited") {
            message.channel.send("Juego cancelado...");
        }

        else if (reason === "idle") {
            //El usuario se demora mucho
            message.channel.send("Has durado mucho... Apurate para la proxima");
          } else {
            //Por otra raz�n
            message.channel.send("Partida terminada...").then(m => m.delete({timeout: 5000}))
            
          }

    })


if(cmd === 'impostor') { //El comando

  const mencionado = message.mentions.members.first() //Definimos mencionado
  
  let random = [
  "No era el impostor",
  "Era el impostor"
  ] //Hacemos frases para ver si es o no
  
  
  if(!mencionado)//Si el autor no menciono a nadie
  
   return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
  
  　　　.　　　 　　.　　　　　。　　 。　. 　
  
  .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
  
  　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
  
  　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
  
  　　ﾟ　　　.　　　. ,　　　　.　 .`) //Enviamos el mensaje
  
  //Pero si menciona
  
  message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
  
  　　　.　　　 　　.　　　　　。　　 。　. 　
  
  .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
  
  　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
  
  　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
  
  　　ﾟ　　　.　　　. ,　　　　.　 .`)
  }


if(cmd === "snipe"){

 const channel = message.mentions.channels.first() || message.channel;



const msg = client.snipes.get(channel.id);
    if (!msg){
	 message.channel.send("No se ha borrado recientemente ningun mensaje")
       .then(m => m.delete({timeout: 5000}));   
	}else{

 const main = new MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Mensaje Escrito de ${msg.delete.tag}`, msg.delete.displayAvatarURL())
 .addField("Canal", `<#${msg.canal.id}>`)
 .setDescription(`${msg.content}`)
 message.channel.send(main);
}


}

});

const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play")
        distube.play(message, args.join(" "));

    if (command == "p")
        distube.play(message, args.join(" "));

    if (["repeat", "loop"].includes(command))
        distube.setRepeatMode(message, parseInt(args[0]));

    if (command == "stop") {
        distube.stop(message);
        message.channel.send(`<a:verificado1:818051687829733416> | ${message.author.username} | Detuve la musica correctamente <a:whattheshark:830983599276032011>`);
    }

    if (command == "skip")
        distube.skip(message);

    if (command == "queue") {
        let queue = distube.getQueue(message);
        message.channel.send(`<a:loading2:823279545959317534> | ${message.author.username} Esta es la actual lista de repodruccion:\n` + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("<a:microfono:836681200654483497> Filtro actual para la lista: " + (filter || "Ninguno"));
    }
});

// Queue status template
const status = (queue) => `Volumen: \`${queue.volume}%\` | Filtro: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

// DisTube event listeners, more in the documentation page
distube  
.on("playSong", (message, queue, song) => {
  const playembed = new Discord.MessageEmbed()
  .setTitle('__**AHORA REPRODUCIENDO**__')
  .setColor('RANDOM')
  .setDescription(`<:YouTube:830959984569221150> Reproduciendo \`${song.name}\` - \`${song.formattedDuration}\`\nPedida por: ${song.user}\n${status(queue)}`)
  .setThumbnail(`https://media.discordapp.net/attachments/826247842544222269/836601739410014308/830959984569221150.png`)
  .setTimestamp()
  message.channel.send(playembed);
});
distube
.on("addSong", (message, queue, song) =>{
  const nuevacancionembed = new Discord.MessageEmbed()
  .setTitle('__**NUEVA CANCION AGREGADA**__')
  .setColor('RANDOM')
  .setDescription(`<:YouTube:830959984569221150> Agregado ${song.name} - \`${song.formattedDuration}\` a esta lista por el usuario ${song.user}`)
  .setThumbnail('https://media.discordapp.net/attachments/826247842544222269/836601739410014308/830959984569221150.png')
  .setTimestamp()  
  message.channel.send(nuevacancionembed);
});
distube
.on("playList", (message, queue, playlist, song) =>{
  const nuevaplaylistembed = new Discord.MessageEmbed()
  .setTitle('__**AHORA REPRODUCIENDO LA PLAYLIST**__')
  .setColor('RANDOM')
  .setDescription(`<:YouTube:830959984569221150> Reproduciendo \`${playlist.name}\` playlist (${playlist.songs.length} canciones).\nPedida por: ${song.user}\nAhora reproduciendo \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)
  .setThumbnail('https://media.discordapp.net/attachments/826247842544222269/836601739410014308/830959984569221150.png')
  .setTimestamp()  
  message.channel.send(nuevaplaylistembed);
});
distube
.on("addList", (message, queue, playlist) =>{
  const nuevaplaylistembed = new Discord.MessageEmbed()
  .setTitle('__**PLAYLIST AGREGADA**__')
  .setColor('RANDOM')
  .setDescription(`<:YouTube:830959984569221150> Agregada la \`${playlist.name}\` playlist (${playlist.songs.length} canciones) to queue\n${status(queue)}`)
  .setThumbnail('https://media.discordapp.net/attachments/826247842544222269/836601739410014308/830959984569221150.png')
  .setTimestamp()  
  message.channel.send(nuevaplaylistembed);
});
distube
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`__**Elige una de las siguientes opciones**__\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n**Elige algo o espera 60 segundos para cancelar**`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`Busqueda cancelada`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("<:oseaperateq:836691071395168377> | Ups, al parecer hay un error | <:oseaperateq:836691071395168377>: " + e);
    });

    client.on("guildCreate", (guild) => {
      const serverid = '831420275383337010'; 
     const et = client.channels.cache.get(serverid);
      let embed = new Discord.MessageEmbed()
      .setTitle("Nuevo Servidor  <:join:823740147128467456> ")
    
      .addField(`<a:pandita:823740062180573184>  ${client.user.username} fue invitado a:`, `${guild.name}`)
      
      
      .addFields(
        { name: "<:owner:823279545724567592>  ID del owner:", value:  `${guild.ownerID}`},
        { name: "<a:loading:823279546056572938>  Miembros:", value: `${guild.memberCount}`},
      )
      .setColor("RANDOM")
      .setTimestamp()
    
      
      et.send(embed)
      })

      client.on("guildDelete", (guild) => {
        const serverid = '831420275383337010'; 
       const et = client.channels.cache.get(serverid);
        let embed = new Discord.MessageEmbed()
        .setTitle("Server eliminado <:join:823740147128467456> ")
      
        .addField(`<a:pandita:823740062180573184>  ${client.user.username} fue sacado de:`, `${guild.name}`)
        
        
        .addFields(
          { name: "<:owner:823279545724567592>  ID del owner:", value:  `${guild.ownerID}`},
          { name: "<a:loading:823279546056572938>  Miembros:", value: `${guild.memberCount}`},
        )
        .setColor("RANDOM")
        .setTimestamp()
      
        
        et.send(embed)
        })

client.login("");

//ODEzNTg3NjcxNDQzMzA4NTg0.YDRekA.iRM21tcCA3Nd9gCYSa3GHrUXf9E