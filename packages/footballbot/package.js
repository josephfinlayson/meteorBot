Package.describe({
  summary: "Meteor version of footballbot"
});

Npm.depends({'footballbot':"1.2.0"});

Package.on_use(function (api, where) {
  api.add_files('server/fbot.js', ['server']);
});

