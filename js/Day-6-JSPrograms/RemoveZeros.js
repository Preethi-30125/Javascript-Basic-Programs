
function removeZerosFromString(inputString,removeZeros){
    if(inputString.length == 0 || removeZeros == 0){
        console.log("Invalid input,please give the proper input");
        return false;
    }

    let startingIndex=0;
    if(typeof inputString == "string" && typeof removeZeros == "string"){

         // Loop from left to right to handle leading zeros
    for(let i=0;i<inputString.length;i++){
        if(removeZeros=="leading"){
            if(inputString[i] !== "0"){
                startingIndex=i;
                break;
            }
            }

        }
        let endingIndex=inputString.length-1;

         // Loop from right to left to handle trailing zeros
        for(let i=inputString.length-1;i>=0;i--){
          if(removeZeros=="trailing"){
            if(inputString[i] !== "0"){
                endingIndex=i;
                break;
            }
        }
        }

        // Extract substring from startingIndex to endingIndex
        const zerosRemovedString=inputString.slice(startingIndex,endingIndex+1);
        console.log(zerosRemovedString);
        return zerosRemovedString;
    }
    else{
        console.error("Invalid input type");
        return false;
    }
    }
removeZerosFromString("00000012343423000","leading");