var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");


var newsfeed = panels.Panel({
  width: 350,
  height: 500,
  contentURL: self.data.url("popup.html"),
  contentScriptFile: [self.data.url("jquery.js"),self.data.url("popup.js")]
});


var button = buttons.ActionButton({
  id: "GitHubLatest",
  label: "Upcoming and Popular repos on Github",
  icon: {
    "16": "./img/icon32.png",
    "32": "./img/icon32.png"
  },
  onClick: popup 
})


function popup(){
  newsfeed.show({ position: button });
 };


newsfeed.port.on("linkClicked", function (text) {
  tabs.open(text);
});
