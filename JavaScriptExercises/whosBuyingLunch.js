//Who's Buying Lunch? Code Challenge
//Write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

function whosPaying(names) {      
    var randomPerson = names[Math.floor(Math.random()*names.length)]
    return randomPerson + " is going to buy lunch today!"
}

const namesArray = ["Lily", "Luka", "Sofia", "Arran", "Nina", "Max"]

console.log(whosPaying(namesArray))
