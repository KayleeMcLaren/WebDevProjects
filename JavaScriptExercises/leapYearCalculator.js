//Leap Year Challenge Exercise

//Write a program that works out whether if a given year is a leap year. A normal year has 365 days, 
//leap years have 366, with an extra day in February. 

//This is how to work out whether if a particular year is a leap year:
//A year is a leap year if it is evenly divisible by 4;
//except if that year is also evenly divisible by 100;
//unless that year is also evenly divisible by 400.

//e.g. Is the year 2000 a leap year?:
//2000 ÷ 4 = 500 (Leap)
//2000 ÷ 100 = 20 (Not Leap)
//2000 ÷ 400 = 5 (Leap!)
//So the year 2000 is a leap year.

function isLeap(year) {

        if (year % 4 == 0) {
    
            if (year % 100 == 0) {
    
                if (year % 400 == 0) {
    
                    return "Leap year."
    
                } else {
                    return "Not leap year."
                }
    
    
            } else {
                return "Leap year.";
            }
    
        } else {
            return "Not leap year.";
        }   
    }

var year = 2023
console.log(isLeap(year))

//Output:
//Not leap year
