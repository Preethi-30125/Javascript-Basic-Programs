function FindingDuplicatesinArray(numbersWithDuplicates){

     //Checking possible edge cases to ensure valid inputs
    if(numbersWithDuplicates==null || !Array.isArray(numbersWithDuplicates) || numbersWithDuplicates.length==0){
         return "Invalid input,please give the proper input";
    }
    const duplicates=[];

     //Check if all elements in the Array are numbers
    for(let i=0;i<numbersWithDuplicates.length;i++){
         if(typeof numbersWithDuplicates[i]!=="number"){
            return "Invalid input,please give the proper input";
        }
        let count=0; // Counter for how many times the current number appears

        //Count occurrences of the current number in the array
        for(let j=0;j<numbersWithDuplicates.length;j++){
        if(numbersWithDuplicates[i]===numbersWithDuplicates[j]){
            count++;
        }
        }

        //Check if this number is already in duplicates array
        let alreadyAdded=false;
        for(let k=0;k<duplicates.length;k++){
            if(duplicates[k]===numbersWithDuplicates[i]){
                alreadyAdded=true;
                break; // Stop checking once found
            }
        }

        //If the number appears more than once and not already added, store it in the duplicates Array
        if(count>1 && !alreadyAdded){
            duplicates[duplicates.length]=numbersWithDuplicates[i];
        }
    }
    return duplicates; //Return the duplicate numbers
}
console.log(FindingDuplicatesinArray([1,2,3,2,4,5,3,6]))