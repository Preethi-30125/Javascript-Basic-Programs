function sumOfNumbersInString(stringOfNumbers){

     //Checking possible edge cases to ensure valid inputs
    if(stringOfNumbers==null|| stringOfNumbers.length==0 || typeof stringOfNumbers != "string"){
        return "Invalid input,please give the proper input";
    }
    const convertedString=[]; //Array to store the parsed integers
    let temporary="";// Temporary string to hold digits before a comma
    let sum=0;

    //Convert the comma-separated string into integers
    for(let i=0;i<stringOfNumbers.length;i++){
        const characters=stringOfNumbers[i];
        // If the current character is not a comma, add it to temporary
        if(characters!=','){
            temporary+=characters;
        }

         // If a comma is found and temporary is not empty, process the number
        else if(temporary!=""){

            // Validate that it's a number
            if(isNaN(temporary)){
                return "Invalid input,please give the proper input";;
            }
            const numbers=parseFloat(temporary);
            convertedString[convertedString.length]=numbers;
            sum=sum+numbers;
            temporary=""; // Reset for next number
        } 
    }

    //Handle the last number after the loop ends
    if(temporary!=""){
        if(isNaN(temporary)){
            return "Invalid input,please give the proper input";;
        }
        const Numbers=parseFloat(temporary);
        convertedString[convertedString.length]=Numbers;
        sum=sum+Numbers; // Add the numbers to sum
    }
    
   return sum; //Return the total sum
}
console.log(sumOfNumbersInString("90, -10, aaa"))