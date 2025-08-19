function findnthLargest(originalNumbers,count){
    //Checking possible edge cases to ensure valid inputs
    if(originalNumbers==null || count==null || count<=0 || count>originalNumbers.length || originalNumbers.length===0 || originalNumbers.length===0 && count.length===0|| !Array.isArray(originalNumbers) || typeof count != "number" || !Number.isInteger(count) ){
        return "Invalid input,please give the proper input";
    }

    //Check if all elements in the array are numbers
    for(let i=0;i<originalNumbers.length;i++){
        if(typeof originalNumbers[i]!=="number"){
            return "Invalid input,please give the proper input";
        }
    }

    //Check for duplicate elements
    for(let i=0;i<originalNumbers.length;i++){
        for(let j=i+1;j<originalNumbers.length;j++){
        if(originalNumbers[i]===originalNumbers[j]){
            return "The given input has duplicates,please give the proper input";
        }
        }
    }

    //Find the nth largest number using a selection sort approach
    
 for(let i=0;i<count;i++){
     let maxIndex=i;   // Assume the current index holds the largest number
     for(let j=i+1;j<originalNumbers.length;j++){
        if(originalNumbers[j]>originalNumbers[maxIndex]){
            maxIndex=j;  // Update maxIndex if a larger number is found
        }
     }

       // Swap the largest found number with the number at position 'i'
     const temporary=originalNumbers[i];
     originalNumbers[i]=originalNumbers[maxIndex];
    originalNumbers[maxIndex]=temporary;
 
 }
 return originalNumbers[count-1];    //Return the nth largest number
}
console.log(findnthLargest([3, 3, 4, 5, 6, 88],2))
