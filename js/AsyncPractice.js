async function printRandomNumber(...args) {
  console.log("Going to print a random number soon: ");
  let randoChoice = -666; //negative for testing
  if (args.length > 0) {
    randoChoice = args[0];
  } else {
    randoChoice = defaultCap;
  }
  let randomNumber = await getRandomNumber(randoChoice);
  console.log("Here it is: ");
  console.log(randomNumber);
}

function getRandomNumber(cap) {
  let rando = -1000;
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      rando = newRandom(cap);
      if (rando > 0) {
        resolve(rando);
        console.log("Promise resolved!");
      } else reject(rando);
    }, 1000);
  }).catch((reject) => {
    console.log("Promise rejected! Rando = " + rando);
  });

  return myPromise;
}

function newRandom(cap) {
  return Math.floor(Math.random() * cap + 1);
}

let defaultCap = 10;
let userInput = 100;
printRandomNumber();
printRandomNumber(userInput);
