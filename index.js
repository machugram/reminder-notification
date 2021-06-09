// const notifier = require('node-notifier');
const prompt = require("prompt-sync")({ sigint: true });
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
// One line notification Statments
// notifier.notify('Go empty the dishwasher!');

// Object
 const NotificationCenter = require('node-notifier').NotificationCenter;

var notifier = new NotificationCenter({
  withFallback: false, // Use Growl Fallback if <= 10.8
  customPath: void 0 // Relative/Absolute path to binary if you want to use your own fork of terminal-notifier
});


reminderBadge = (name, title, subtitle, detail,timeout) => {
notifier.notify({
    'title': `${title}`,
    'subtitle': `${subtitle}`,
    'message': `${detail}`,
    'sound': 'ding.mp3', // Case Sensitive string for location of sound file, or use one of macOS' native sounds (see below)
    'icon': 'Terminal', // Absolute Path to Triggering Icon
    'contentImage': void 0, // Absolute Path to Attached Image (Content Image)
    'open': void 0, // URL to open on Click
    'wait': true, // Wait for User Action against Notification or times out. Same as timeout = 5 seconds

  // New in latest version. See `example/macInput.js` for usage
  timeout: timeout, // Takes precedence over wait if both are defined.
  closeLabel: "Cancel", // String. Label for cancel button
  actions: ["Snooze","Clear"], // String | Array<String>. Action label or list of labels in case of dropdown
  dropdownLabel: void 0, // String. Label to be used if multiple actions
  reply: true // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
}, function(error, response, metadata) {
  console.log(error, response, metadata);
});
}


const name = prompt("What is your name?");
console.log(name);
const title = prompt("What is the title of your task?");
console.log(title);
const subtitle = prompt("What is the subtitle of your task?");
console.log(subtitle);
const detail = prompt("Enter the details of your task?");
console.log(detail);
const timeout = prompt("How long do you want the time out of the task to be? Enter a number : ");
console.log(timeout);
reminderBadge(name,title,subtitle,detail,timeout);
