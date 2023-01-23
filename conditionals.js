const raining = true;
const cold = false;

if(!raining){
  console.log("Leave your Umbrella at home.");
}

if(cold){
  console.log("Bundle up!");
}

const temperature = -100;

if (temperature < 5){
  console.log("Dress warmly! Layers layers layers!");
} else if (temperature < 17){
  console.log("Better put on a sweater, it's nippy out!");
} else {
  console.log("It's t-shirt weather.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if(isCitizen && age > 18){
  console.log("You are eligible to vote.");
}

if(temperature < -50 || temperature > 50){
  console.log("It's some kind of apocalypse out there!");
}