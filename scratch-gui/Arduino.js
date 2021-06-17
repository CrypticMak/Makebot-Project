const fs = require('fs');
const read = fs.readFileSync('db.json');
const data = JSON.parse(read);
var keys = Object.keys(data.getTarget[1]);
var pin = [''];
var mode = [''];
for (let i = 1; i < 3; i++) {
    let a = keys[i]; 
    var pinNUMBER = (data.getTarget[1][a].fields.TEXT?.value);
    if (pinNUMBER) {
        pin = (pin + pinNUMBER);
    }
    var Mode = (data.getTarget[1][a].fields.Mode?.value);
    if (Mode) {
        mode = (mode + Mode);
    }
}
fs.writeFileSync('C:/Users/Cryptic/Downloads/arduino-cli/Newsketch/Newsketch.ino', (`void setup() {
    pinMode(${(pin)}, OUTPUT);
}
  void loop() {
    digitalWrite(${(pin)},${mode}); 
    delay(1000);                              
}`)
)
console.log('DONE !');