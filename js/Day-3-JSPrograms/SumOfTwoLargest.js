function sumOfTwoLargestNumbers(numbersArray){

  //Checking possible edge cases to ensure valid inputs
  if(numbersArray==null || numbersArray.length==0 || !Array.isArray(numbersArray)){
        return "Invalid input,please give the proper input";
    }

    //Check if all elements in the Array are numbers
    for(let i=0;i<numbersArray.length;i++){
      if(typeof numbersArray[i] !== "number"){
        return "Invalid input,please give the proper input";
      }
    }
  
let largest,secondLargest,sum;

// Compare the first two numbers to assign initial values
if(numbersArray[0]>numbersArray[1]){
  largest=numbersArray[0];
  secondLargest=numbersArray[1];
}
else{
  largest=numbersArray[1];
  secondLargest=numbersArray[0];
}

//Loop through the rest of the array to find largest and second largest
for(i=2;i<numbersArray.length;i++){
  if(numbersArray[i]>largest){
    // If current number is bigger than largest
    secondLargest=largest;
    largest=numbersArray[i];
  }
  else if(numbersArray[i]>secondLargest && numbersArray[i] !=largest){
    // If current number is second largest and not equal to largest,update secondLargest
    secondLargest=numbersArray[i];
  }
}
sum=largest+secondLargest; //sum the largest number and second largest number
return sum; //Return the total sum

}
console.log(sumOfTwoLargestNumbers([32, 66, 80, 120, 120, 45]));