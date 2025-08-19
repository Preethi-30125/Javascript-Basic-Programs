function sumOfEvenNumbers(numberArray){

    //Checking possible edge cases to ensure valid inputs
    if(!numberArray || !Array.isArray(numberArray) || numberArray.length===0){
        console.error("Invalid input,please give the proper input");
        return false;
    }
    let totalEvenSum=0;  

    for(let i=0;i<numberArray.length;i++){
        // If the number is even, add it to the totalEvenSum
        if(numberArray[i]%2==0){
            totalEvenSum=totalEvenSum+numberArray[i];
        }

    }
    if(totalEvenSum===0){
        console.error("The array only contains odd numbers");
            return true;
    }
    console.log(totalEvenSum);
return totalEvenSum;  
}
sumOfEvenNumbers([38, 3, 2, 8, 31]);