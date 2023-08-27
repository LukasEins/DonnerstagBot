const { createInterface } = require('node:readline');
const { execSync } = require('child_process');
const fetch = require('node-fetch');
const { Client, Routes, GatewayIntentBits } = require('discord.js');


//create new client
const client = new Client({ intents: [GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,] });
const rl = createInterface({ input: process.stdin, output: process.stdout });

client.once('ready', () => {
    console.log('Es ist schon wieder... Donnerstag');
});

const donnerstag = {
  name:'donnerstag',
  description:'endlich wieder Donnerstag'
}

const ping = {
  name: 'ping',
  description: 'Pings the bot and shows the latency'
};

const berlinTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" });

const today = new Date(berlinTime).getDay(); 

const commands = [donnerstag, ping];


if (today === 4) {
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('donnerstag')) {
    message.channel.send("https://lukaseins.s-ul.eu/dVTE4cgZ")
    }});
client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else if(interaction.commandName === 'donnerstag') {
    interaction.reply('https://lukaseins.s-ul.eu/dVTE4cgZ');
  } 
});
} else {
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('donnerstag')) {
    message.channel.send("Es ist noch nicht Donnerstag du Hurensohn.")
    }});
}

if (today === 1){
  client.on("messageCreate", (message) =>{
	if (message.author.bot){return;}
	if (message.content.toLowerCase().includes('montag')) {
		message.channel.send("und so beginnt es...")
		message.channel.send("https://lukaseins.s-ul.eu/howKEqfv")
	}});
}

if (today === 3){
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('mittwoch')) {
    message.channel.send("Morgen ist es endlich so weit...")
    }});
}

if (today === 5){
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('freitag')) {
    message.channel.send("Jetzt beginnt eine lange Woche des Wartens, vergiss dein Lächeln trotzdem nicht...")
    }});
}

//make sure this line is the last line
client.login('token'); //login bot using token
