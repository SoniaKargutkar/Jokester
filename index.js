const jokes = require('give-me-a-joke')
const colors = require('colors')
const cowsay = require('cowsay')
const figlet = require('figlet')

const caption = "Talking Cow!!"

figlet(caption, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});

jokes.getRandomDadJoke(function (joke){
    console.log(cowsay.say({
        text : joke,
        eyes : 'oO'.rainbow,
        tongue : 'U'
    }));
})

