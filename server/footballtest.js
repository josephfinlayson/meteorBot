// if (typeof this.FootballBot !== 'undefined') {
//     console.log(FootballBot);
bot = new FootballBot('/dev/rfcomm0', {
    repl: false
});

var leftMotor = new FootballBot.Motor({
    pins: {
        pwm: 9,
        dir: 7
    }
});

var rightMotor = new FootballBot.Motor({
    pins: {
        pwm: 10,
        dir: 8
    }
});

bot.on('ready', function() {
    bot.attach(leftMotor);
    bot.attach(rightMotor);
});

var leftTimer, rightTimer, direction;

Meteor.methods({
    keydown: function(key) {
        switch (key) {
            case "up":
                clearTimeout(leftTimer);
                clearTimeout(rightTimer);
                leftMotor.fwd();
                rightMotor.fwd();
                leftMotor.speed(255);
                rightMotor.speed(255);
                direction = "fwd";
                break;
            
            case "down":
                console.log("down");
                leftMotor.stop();
                rightMotor.stop();
                
                // leftTimer = setTimeout(function() {
                    leftMotor.rev();
                    leftMotor.speed(255);
                // }, 500);
                
                // rightTimer = setTimeout(function() {
                    rightMotor.rev();
                    rightMotor.speed(255);
                // }, 500);
                
                direction = "rev";
                break;
            
            case 'left':
                leftMotor.speed(255);
                break;
            
            case 'right':
                console.log("right");
                rightMotor.speed(255);
                break;
            
            default:
                leftMotor.stop();
                rightMotor.stop();
        }

    },
    'keyup': function(key) {
        switch (key) {
            case "up":
                leftMotor.stop();
                rightMotor.stop();
                break;
            case "down":
                leftMotor.stop();
                rightMotor.stop();
                break;
            case 'left':
                leftMotor.stop();
                rightMotor.stop();
                break;
            case 'right':
                leftMotor.stop();
                rightMotor.stop();
                break;
        }
    }
});
