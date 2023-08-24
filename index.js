const { createInterface } = require('node:readline');
const { execSync } = require('child_process');
const fetch = require('node-fetch');
const moment = require ('moment');
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

const commands = [donnerstag, ping];

client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else if(interaction.commandName === 'donnerstag') { // This is the example command's name!
    interaction.reply('https://lukaseins.s-ul.eu/dVTE4cgZ');
  } 
});

const dayINeed = 4; // for Thursday
const today = moment().isoWeekday();

if (today == dayINeed) { 
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('donnerstag')) {
    message.channel.send("https://lukaseins.s-ul.eu/dVTE4cgZ")
    }});
} else{
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('donnerstag')) {
    message.channel.send("Es ist noch nicht Donnerstag du Hurensohn.")
    }});
}

const beforethursday = 3; // for wednesday

if (today == beforethursday){
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('mittwoch')) {
    message.channel.send("Morgen ist es endlich so weit...")
    }});
}

const afterthursday = 5;

if (today ==afterthursday){
  client.on("messageCreate", (message) =>{
    if (message.author.bot){ return;}
    if (message.content.toLowerCase().includes('freitag')) {
    message.channel.send("Jetzt beginnt eine lange Woche des wartens, vergiss dein lächeln trotzdem nicht...")
    }});
}


//make sure this line is the last line
client.login('token'); //login bot using token
