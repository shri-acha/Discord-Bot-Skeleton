const fs = require('fs');
const csv = require('csv-parser');
const Discord = require("discord.js");
const env = require('dotenv').config();
const announcementHandler = require("./Sub-Modules/announcementHandler.js");
const socialMediaNotifierHandler = require("./Sub-Modules/socialMediaNotifierHandler.js")

const {
    Client,
    IntentsBitField,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle  ,
    ModalBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    ChannelType,
    PermissionFlagsBits,
} = require("discord.js");


//All Sub-Modules Imports Goes Here 



module.exports = async (interaction,client) => {
 if (interaction.isChatInputCommand()){
    if(interaction.commandName == "announce"){
      announcementHandler(interaction,client);
      // socialMediaNotifierHandler(client,EmbedBuilder);
    }
 }
};
