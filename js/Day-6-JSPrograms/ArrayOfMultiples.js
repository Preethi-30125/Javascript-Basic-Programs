function arrayOfMultiples(inputArray){
     if(!Array.isArray(inputArray) || inputArray.length==0){
        console.error("Invalid input,please give the proper input");
        return false;
    } 

    const baseNumber=inputArray[0];
    const multiplierCount=inputArray[inputArray.length-1];

     if(typeof multiplierCount !=="number" || typeof baseNumber !=="number" || multiplierCount<0){
        console.error("The baseNumber and multiplierCount value should be a number and multiplierCount should be greater than 0");
        return false;
        }
    let productOfBaseNumber=[];

    //Loop from 1 to multiplierCount 
    // and multiply baseNumber by each i (1, 2, 3, ..., multiplierCount)
    for(let i=1;i<=multiplierCount;i++){
       
        productOfBaseNumber.push(baseNumber*i);
    }
    console.log(productOfBaseNumber);
    return productOfBaseNumber;
}
arrayOfMultiples([2,5]);