function numberOfPairs(numberArray,targetSum){

     if((!numberArray) || !Array.isArray(numberArray) || typeof targetSum != "number"){
        console.log("Invalid input,please give the proper input");
        return false;
    }
    let countPairs=0;
    let pairs=[];

    for(let i=0;i<numberArray.length;i++){
        for(let j=i+1;j<numberArray.length;j++){

             // If sum of two different numbers equals to targetSum
            if(numberArray[i]+numberArray[j]==targetSum){

                // Save the pair 
                pairs.push(numberArray[i] + " , " + numberArray[j]);
                countPairs++;  // Increase count of valid pairs
            }
        }
    }
    console.log(countPairs);
    return countPairs;
}
numberOfPairs([4,2,5,6,8,1],6);