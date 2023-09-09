//BMI Calculator Challenge

//Create a BMI calculator using JavaScript functions. 
//The formula for BMI is weight in kilograms divided by height in meters squared.

//Solution:

function bmiCalculator (weight, height) {
    
    var interpretation = Math.round((weight / Math.pow (height,2)));

    if (interpretation <= 18.5) {

        return  "Your BMI is "+interpretation+", so you are underweight." ;

    }

    else if (interpretation > 18.5 && interpretation < 24.9){

        return  "Your BMI is "+interpretation+", so you have a normal weight." ;

    }

    else if (interpretation >= 24.9){

        return  "Your BMI is "+interpretation+", so you are overweight." ;

    }

    return interpretation;

}

var bmi = bmiCalculator(100, 1.8)
console.log(bmi)


//Output:
// Your BMI is 22, so you have a normal weight.function bmiCalculator (weight, height)
