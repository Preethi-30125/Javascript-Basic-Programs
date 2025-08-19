function sumOfMultiples(baseNumber,numberOfMultiples){

     //Checking possible edge cases to ensure valid inputs
    if(typeof baseNumber !== "number" || typeof numberOfMultiples !== "number"){
        console.error("Invalid input,please give the proper input");
        return false;
    } 
    const multiplesArray=[];   
    let sumOfMultiples=0;  

    for(let i=1;i<=numberOfMultiples;i++){
        multiplesArray[multiplesArray.length]=baseNumber*i;  // Create multiples of the number up to the given numberOfMultiples
    }

    // Add up all the baseNumbers in multiplesArray
    for(let i=0;i<multiplesArray.length;i++){
    sumOfMultiples+=multiplesArray[i];
    }
     console.log(sumOfMultiples);
     return sumOfMultiples; 
}
sumOfMultiples(8,3);