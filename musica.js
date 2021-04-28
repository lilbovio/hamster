const MessageAttatchment = require("discord.js");
const Discord = require('discord.js'),
    DisTube = require('distube'),
    client = new Discord.Client(),
    config = {
        prefix: "$",
        token: process.env.TOKEN || "ODEzMzM0MzA1MzQ1NzY1Mzc3.YDNymQ.0vCBRXBHxNFhJvbBDsexAKCvZEA"
    };

////C:\Users\vallejo\Desktop\botmusica


// Create a new DisTube
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play")
        distube.play(message, args.join(" "));

    if (["repeat", "loop"].includes(command))
        distube.setRepeatMode(message, parseInt(args[0]));

    if (command == "stop") {
        distube.stop(message);
        message.channel.send("Detuve la musica!");
    }

    if (command == "skip")
        distube.skip(message);

    if (command == "queue") {
        let queue = distube.getQueue(message);
        message.channel.send('Actual lista:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Filtro actual para la lista: " + (filter || "Off"));
    }
});

// Queue status template
const status = (queue) => `Volumen: \`${queue.volume}%\` | Filtro: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

// DisTube event listeners, more in the documentation page
distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Reproduciendo \`${song.name}\` - \`${song.formattedDuration}\`\nPedida por: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Agregado ${song.name} - \`${song.formattedDuration}\` a esta lista por el usuario ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Reproduciendo \`${playlist.name}\` playlist (${playlist.songs.length} canciones).\nPedida por: ${song.user}\nAhora reproduciendo \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Agregada la \`${playlist.name}\` playlist (${playlist.songs.length} canciones) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Elige una de las siguientes opciones**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Elige algo o espera 60 segundos para cancelar*`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`Busqueda cancelada`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("Un error fue encontrado: " + e);
    });


client.login("ODEzNTg3NjcxNDQzMzA4NTg0.YDRekA.m8QUV8d-UEiqmg53Z-KeJXrLLEw");
