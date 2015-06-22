var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (input) {
  if (input !== '') {
    //do something here
    console.log(pangram(input));
   }
});
function pangram(input){
  var str = input.trim();
  var hash = {};
  var count = 0;
  // all letters in the alphabet, converted to ASCII, add up to 2847, 'a' is 97, 'z' is 122
  for(var num = 97; num <= 122; num++){
    count += num;
  }
  for(var i = 0; i < input.length; i++){
    var char = input[i].toLowerCase().charCodeAt(0);
    if(char <= 122 && char >= 97){
      if(!hash[char]){
        hash[char] = true;
        count -= char;
      }
    }
  }
  return count === 0? 'pangram': 'not pangram';
}
