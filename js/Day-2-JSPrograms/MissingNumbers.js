function missingNumbersInArray(unSortedArray){

    //Checking possible edge cases to ensure valid inputs
    if(unSortedArray==null || unSortedArray.length==0 || !Array.isArray(unSortedArray)){
        return "Invalid input,please give the proper input";
    }

    //Check if all elements in the Array are numbers
    for(let i=0;i<unSortedArray.length;i++){
        if(typeof unSortedArray[i]!=="number"){
            return "Invalid input,please give the proper input";
        }
    }

    //Check for duplicate elements
    for(let i=0;i<unSortedArray.length;i++){
        for(let j=i+1;j<unSortedArray.length;j++){
        if(unSortedArray[i]===unSortedArray[j]){
            return "The given input has duplicates,please give the proper input";
        }
        }
    }

    //Sort the numbers in ascending order using bubble sort
    const sortedArray=unSortedArray;
    for(let i=0;i<sortedArray.length;i++){
        for(let j=0;j<sortedArray.length;j++){
            if(sortedArray[j]>sortedArray[j+1]){
                // Swap elements
            let temporaryArray=sortedArray[j];
            sortedArray[j]=sortedArray[j+1];
            sortedArray[j+1]=temporaryArray;
            }

        }
    }

    //Find missing numbers between the smallest and largest numbers
    const missingNumbers=[]; 
    for(let i=0;i<sortedArray.length-1;i++){
        const currentNumber=sortedArray[i];
        const nextNumber=sortedArray[i+1];

        //Loop through numbers between current number and next number
        for(let missing=currentNumber+1;missing<nextNumber;missing++){
            missingNumbers[missingNumbers.length]=missing;
        }
    }
    return missingNumbers; //Return all missing numbers
}
console.log(missingNumbersInArray([-3, 68,71,69,73]))