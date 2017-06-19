//Write a function called transmogrifier. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225. Use your function to find the following answers.

//transmogrifier(5, 4, 3);



function transmogrifier(val1, val2, power) {
    var result = Math.pow(val1 * val2, power);

    console.log(result);
}
