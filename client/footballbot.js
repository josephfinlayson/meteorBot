    Session.set('reactiveKey', '')
    Template.hello.key = function() {
        return Session.get('reactiveKey').toUpperCase();
    };

    maps = {
        38: "up",
        37: "left",
        39: "right",
        40: "down",
    };

    Template.hello.events({
        'keydown': function(key) {
            key = maps[key.keyCode];
            Session.set('reactiveKey', key);
            Meteor.call('keydown', key);
            // template data, if any, is available in 'this'
        },
        'keyup': function(key) {
            key = maps[key.keyCode];
            if (Session.equals('reactiveKey', key)) {
                Session.set('reactiveKey',  '');
            }

            Meteor.call('keyup', key);
        }

    });
