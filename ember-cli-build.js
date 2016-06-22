/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import("bower_components/flat-ui/dist/css/vendor/bootstrap/css/bootstrap.min.css")
  app.import("bower_components/flat-ui/dist/js/flat-ui.min.js")
  app.import("bower_components/flat-ui/dist/css/flat-ui.css")
  app.import("bower_components/flat-ui/dist/css/vendor/bootstrap/fonts/glyphicons-halflings-regular.eot")
  app.import("bower_components/flat-ui/dist/css/vendor/bootstrap/fonts/glyphicons-halflings-regular.svg")
  app.import("bower_components/flat-ui/dist/css/vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf")
  app.import("bower_components/flat-ui/dist/css/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff")
  app.import("bower_components/flat-ui/dist/css/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2")
  app.import("bower_components/flat-ui/dist/fonts/glyphicons/flat-ui-icons-regular.eot",{
    destDir: 'fonts/glyphicons'
  })
  app.import("bower_components/flat-ui/dist/fonts/glyphicons/flat-ui-icons-regular.svg",{
    destDir: 'fonts/glyphicons'
  })
  app.import("bower_components/flat-ui/dist/fonts/glyphicons/flat-ui-icons-regular.tff",{
    destDir: 'fonts/glyphicons'
  })
  app.import("bower_components/flat-ui/dist/fonts/glyphicons/flat-ui-icons-regular.woff",{
    destDir: 'fonts/glyphicons'
  })
  app.import("bower_components/flat-ui/dist/fonts/glyphicons/selection.json",{
    destDir: 'fonts/glyphicons'
  })

  app.import("bower_components/videojs/dist/video-js/video.js")

  var extraAssets = new Funnel("bower_components/flat-ui/dist/fonts/lato",{
    srcDir:"/",
    include: ["**/*.woff", "**/*.eot",'**/*.svg','**/*.ttf'],
    destDir: 'fonts/lato'
  })

  return app.toTree(extraAssets)
};
