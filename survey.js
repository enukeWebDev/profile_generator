const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name or nickname?`, (name) => {
  rl.question(`What's an activity you like doing?`, (faveActivity) => {
    rl.question(`What do you listen to while dooing that?`, (faveToTuneInTo) => {
      rl.question(`Which meal is your favorite - dinner, brunch, etc?`, (faveMeal) => {
        rl.question(`What's your favorite thing to eat for that meal?`, (faveFood) => {
          rl.question(`Which sport is your absolute favorite?`, (faveSport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superPower) => {

              console.log(`My name is: ${name} \nMy favorite activity is: ${faveActivity} \nI always listen to: ${faveToTuneInTo} \nMy favorite meal is: ${faveMeal} \nMy favorite food is: ${faveFood} \nMy favorite sports is: ${faveSport} \nMy superpower is: ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

