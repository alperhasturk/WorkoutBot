import {Client, Message} from 'discord.js';
import {config} from 'dotenv';
import {workouts} from './workouts.js';
config();







const client = new Client({ intents:['Guilds', 'GuildMessages', 'MessageContent'] });  


client.on("ready", () => {
    console.log( `ONLINE ${client.user.tag}!`);

    client.user.setPresence({activities: [{name: 'always lifting '}], status: 'online'});
})

client.on("messageCreate", msg => {
    if(msg.content === "!workout"){
        function randomWorkout(){
            let random = Math.floor(Math.random()*workouts.length);
            return workouts[random];
        }
        let workout = randomWorkout();
            msg.reply(workout.name +"\n"+workout.description+" \n"+workout.reps + " Reps ,\n  " + workout.sets +" Sets ,\n " +"Rest "+workout.rest + " Seconds"+" ");
        
    }});
client.login(process.env.TOKEN);