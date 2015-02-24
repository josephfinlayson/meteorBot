// if (Meteor.isClient) {
//     Template.hello.greeting = function() {
//         return "Welcome to meteorBot.";
//     };

//     Template.hello.events({
//         'click input': function() {
//             // template data, if any, is available in 'this'
//             if (typeof console !== 'undefined')
//                 console.log("You pressed the button");
//         }
//     });
// }




// if (Meteor.isServer) {

//         var FootballBot = Meteor.require('footballbot');
//         var bot = new FootballBot('/dev/rfcomm0');
//         var keypress = Meteor.require('keypress');
//         var _ = Meteor.require('underscore');
//         var allowedKeys = ['up', 'left', 'right', 'down'];

//         var leftMotor = new FootballBot.Motor({
//             pins: {
//                 pwm: 9,
//                 dir: 7
//             }
//         });
//         var rightMotor = new FootballBot.Motor({
//             pins: {
//                 pwm: 10,
//                 dir: 8
//             }
//         });

//         bot.on('ready', function() {

//             bot.attach(leftMotor);
//             bot.attach(rightMotor);
//             // keypress
//             console.log("ready!");
//             leftMotor.start();
//             rightMotor.start();
//             setTimeout(function() {
//                 leftMotor.stop();
//                 rightMotor.stop();
//             }, 5000);

//             keypress(process.stdin);
//             // listen for the "keypress" event
//             process.stdin.on('keypress', function(ch, key) {
//                 console.log(key);
//                 if (key.name) {
//                     if (_.contains(allowedKeys, key.name)) {
//                         handleKeypress(key);

//                     }


//                 }

//             });
//         });

//         function handleKeypress(key) {
//             switch (key.name) {
//                 case 'up':
//                     console.log('up');
//                     leftMotor.start();
//                     rightMotor.start();
//                     break;
//                 case 'down':
//                     console.log('down');
//                     leftMotor.stop();
//                     rightMotor.stop();
//                     break;
//                 case 'right':
//                     rightMotor.start();
//                     break;
//                 case 'left':
//                     leftMotor.start();
//                     break;
//                 default:
//                     // function() {}
//             }
//         }

//     Meteor.startup(function() {
//     });
// }
