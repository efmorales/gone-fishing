const prompt = require('prompt-sync')({sigint: true});

// ================VARIABLES//ARRAYS================
    
let adjectiveArray = ['🔴 Red', '🐊 Scaly', '🔥 Fire', '🧊 Ice', '🍃 Wind', '🔮 Crystal', '🫠 Fragile', '🟣 Purple', '🧂 Salty', '🍭 Sweet', '🍍 Sour', '🌶 Spicy', '🐬 Floppy', '✨ Shiny', '🏜 Dry', '🐸 Slimy','⚡️ Electric','🪐 Galactic','🛸🌌 Interdimensional','🤔 Confused','😠 Angry','😨 Scared','🙏 Sacred ','🎆 Neon','🦾 Cyberpunk', '😤 Smelly', '😟 Sad', '😁 Happy', '🥹 Hopeful', '😩 Unlucky', '😉 Lucky', '🪙 Silver', '👑 Golden','🫣 Anxious', '🥴 Drunk', '😶‍🌫️ Sneaky', '📜 Ancient'];

let typeArray = ['Salmon', 'Bass', 'Trout', 'Cod', 'Tuna', 'Catfish'];

// ===================PROGRAM===================

console.log("\nYou've gone 🐟 fishing 🐟! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) ⏰ and can catch at most 10 lbs of fish.\n")

let caughtFish = [];

for (let i=6; i < 12; i++){

    console.log('==================================\n');
    console.log(`The time is ${i}:00am⏱. So far you've caught: `); 
    
    // After this line we should show how many fish we've caught each cumulatively each hour

    console.log(`${caughtFish.length} fish, ${getTotalWeight()} pounds, $${getTotalValue()} \n`);

    let fish = generateFish(); // this helps store each fish!
    
    console.log(`You caught a ${fish.name} weighing ${fish.weight} pounds and valued at $${fish.value} \n`);

    // If the total fish weight is bigger than 10, reroll.

    let currentTotalWeight = getTotalWeight(); // not that necessary, but still encouraged

    if (currentTotalWeight + fish.weight > 10){
        console.log(`\nThe weight has exceded the 10 pounds limit. Releasing the fish.\n`);
        console.log(`Please press [enter] to continue`);
        prompt(`>`);
    
        continue;
        
    }

    // choose to keep or release the fish

    console.log((`Press 'c' to catch or 'r' to release:`));
    let catchOrRelease = prompt(`> `);

    while (catchOrRelease !== "c" && catchOrRelease !== "r"){
        console.log('Please input a valid action ("c" or "r").');
        catchOrRelease = prompt(`> `);
    }

    if (catchOrRelease === 'c'){
        //we need to push fish value into array
        caughtFish.push(fish);
        //closing with a console.log if you decided to catch it
        console.log(`\nYou chose to keep the ${fish.name}! \n`);
    } else if (catchOrRelease === 'r'){
        console.log (`\nYou chose to release the ${fish.name}. \n`);
    }

}    

console.log('\n==================================\n');

console.log('\nThe time is 12:00pm. Times up!\n');
console.log(`You've caught ${caughtFish.length} fish 🐠!\n`);
// This for loop will get a list of the individual fish we've caught
for (let i=0; caughtFish.length > i; i++){
    console.log(`* ${caughtFish[i].name}, ${caughtFish[i].weight} lbs, $${caughtFish[i].value}.`);
}

console.log(`\nTotal weight: ${getTotalWeight()} 🎒`);
console.log(`Total value: $${getTotalValue()} 💰\n`);


console.log('\n==================================\n');


// ================TESTS=================

// console.log(`Random Weigth`);
// console.log(generateRandomWeight());
// console.log(`Random Value`);
// console.log(generateRandomValue());
// console.log(`Random Type`);
// console.log(generateRandomName());
// console.log(`Full Fish`);
// console.log(generateFish());
// ==weight and value test==
// let fish1 = generateFish();
// let fish2 = generateFish();
// caughtFish.push(fish1,fish2);
// console.log(caughtFish);
// console.log(getTotalWeight(caughtFish));
// console.log(getTotalValue(caughtFish));
//


// ================FUNCTIONS================

function generateRandomWeight(){
    let weight = Number((Math.random() * 5).toPrecision(3));
    
    while(weight < 1){
        weight = Number((Math.random() * 5).toPrecision(3));
    };
    
    return weight;
}

function generateRandomValue(){
    let value = Number((Math.random() * 5).toPrecision(3));
    
    while (value < 0.1){
        value = Number((Math.random() * 5).toPrecision(3));
    }
    
    if(value < 1){
        value = Number(value.toPrecision(2));
    };
    
    return value;
}

function generateRandomName(adj1,adj2,type){

    adj1 = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];

    adj2 = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];

    type = typeArray[Math.floor(Math.random() * typeArray.length)];

    while(adj1 === adj2){
        adj2 = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    };

    return `${adj1} ${adj2} ${type}`
}

function generateFish(){
    let fish = {};
    fish.name = generateRandomName()
    fish.weight = generateRandomWeight()
    fish.value = generateRandomValue()
    return fish;
}

function getTotalWeight(){
    let totalWeight=0;
    for(let i = 0; caughtFish.length > i;i++){
        totalWeight = totalWeight + caughtFish[i].weight;
    } // I got 0 when I first tried fish.weight.length... but that length is 0! haha
    //I also got an error when I tried fish.weight[i] instead of fish[i].weight! in the first one I'm trying to access the 'i' array of fish.weight; instead I should access the 'i' fish weight!
    return Number(totalWeight.toPrecision(3));
}

function getTotalValue(){
    let totalValue = 0;
    for(let i = 0; caughtFish.length > i;i++){
        totalValue = totalValue + caughtFish[i].value;
    }
    return Number(totalValue.toPrecision(3));
}

// function getTotalValue(){
//     let totalValue = 0;

//     for (let fish of caughtFish){
//         totalValue = totalValue + fish.value;
//     }
//     return Number(totalValue.toPrecision(3));
// }

