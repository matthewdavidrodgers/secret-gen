const specials = ['!', '#', '$', '%', '&', '*', '+', '-', '.', '/', '<', '>', '=', '?', '@', '^', '~', '_'];

function generateAlpha () {
   const isLower = Math.floor(Math.random() * 2) % 2 === 0; 
   const charInt = Math.floor(Math.random() * 25);
   return String.fromCharCode(isLower ? charInt + 97 : charInt + 65);
}

function generateNum () {
   return String(Math.floor(Math.random() * 9));
}

function generateSpecial () {
   const charIntIndex = Math.floor(Math.random() * specials.length);
   return specials[charIntIndex];
}

function generate (length=32) {
   let acc = '';
   for (let i = 0; i < length; i++) {
      const dice = Math.floor(Math.random() * 5);
      if (dice === 0) {
         acc += generateSpecial();
      } else if (dice == 1) {
         acc += generateNum();
      } else {
         acc += generateAlpha();
      }
   }
   return acc;
}

// begin execution
let generated_key;
if (process.argv.length === 3) {
   generated_key = generate(+process.argv[2]);
} else {
   generated_key = generate();
}
console.log(generated_key);
