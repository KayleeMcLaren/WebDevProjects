//Life in Weeks Exercise

//Create a function that tells you how many days, weeks and months you have left if you live until 90 years old.

//It will take your current age as the input and console.logs a message with our time left in this format:
//You have x days, y weeks, and z months left.

//Where x, y and z are replaced with the actual calculated numbers.
//For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

//Solution:

function lifeInWeeks(age) {

    var years_remaining = 90 - age
    var days = years_remaining * 365
    var weeks = years_remaining * 52
    var months = years_remaining * 12

console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}

lifeInWeeks(45)

//Output:
//You have 16425 days, 2340 weeks, and 540 months left.
