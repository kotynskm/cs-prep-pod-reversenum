function reverseNumber(num) {
    
    // create a boolean value to flag if number is negative
    let isNegative = false;
    // if num is negative set isNeg to true
    if(num < 0){
        isNegative = true;
    }
    // convert input number to a positive value using Math.abs
    let numberAbs = Math.abs(num);
    // turn number into a string, turn into an array, reverse it, join back into a string
    let reversed = numberAbs.toString().split("").reverse().join("");
    // convert string into a number
    let reversedNum = Number(reversed);
    // check if value is negative and if it is, return negative value of reversedNum, else return reversedNum
    if(isNegative){
        return -reversedNum;
    }else{    
    return reversedNum;
}
}

