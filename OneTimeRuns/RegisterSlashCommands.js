require('dotenv').config();
const { REST, Routes,ApplicationCommandOptionType } = require('discord.js');


//The Below Snippets Shows How to Create a Slash Command( generally for Moderator and Higher Level Use (Make the Command Name and Conditions Discriptive ))
const commands = [
  {
    name: 'announce',
    description: '/annouce announces on a channel!',
    options:[
      {
        name: 'message',
        description: 'Message for the annoucement!(Make sure to use | for line breaks)',
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ]
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
