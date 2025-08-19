
function mergingAndSorting(inputArray1,inputArray2){

    //Checking possible edge cases to ensure valid inputs
    if(!Array.isArray(inputArray1) || !Array.isArray(inputArray2) || inputArray1==null || inputArray2==null || inputArray1.length==0 || inputArray2.length==0 || inputArray1.length==0 && inputArray2.length==0){
        return "Invalid input,please give the proper input";
    }

    //Check if all elements in the inputArray1 are numbers
    for(let i=0;i<inputArray1.length;i++){
        if(typeof inputArray1[i]!=="number"){
            return "Invalid input,please give the proper input";
        }
    }

    //Check if all elements in the inputArray2 are numbers
    for(let i=0;i<inputArray2.length;i++){
        if(typeof inputArray2[i]!=="number"){
            return "Invalid input,please give the proper input";
        }
    }

     //Merge arrays into a single string with commas
    const inputArray3=[];
    inputArray3[inputArray3.length]=inputArray1+ "," + inputArray2 ;
    
    const mergedString=inputArray3[0];

    //Prepare a number array for parsed integers
    const numberArray=[];

    let temporary="";

    //Convert the comma-separated string into integers
    for(let i=0;i<mergedString.length;i++){

         // If the current character is not a comma, add it to temporary
        if(mergedString[i]!=','){
            temporary+=mergedString[i];
        }

        // If a comma is found, process the number
        else{
            numberArray[numberArray.length]=parseInt(temporary);
            temporary=""; // Reset for next number
        }
    }
     //Handle the last number after the loop ends
    numberArray[numberArray.length]=parseInt(temporary);

//Sort the numbers in ascending order using bubble sort
for(let i=0;i<numberArray.length;i++){
    for(let j=0;j<numberArray.length;j++){
        if(numberArray[j]>numberArray[j+1]){
            // Swap elements
        let temp=numberArray[j];
        numberArray[j]=numberArray[j+1];
        numberArray[j+1]=temp;
        
        }
    }
}
    return numberArray; //Return the sorted merged array
}
console.log(mergingAndSorting([1,4,6],[2,5,3]));