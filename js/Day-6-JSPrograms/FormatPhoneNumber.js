
function formattingUsPhoneNumber(phoneNumber){

    let usPhoneNumber="";
    if(typeof phoneNumber=="string"){
    for(let currentCharacters of phoneNumber){
        //If the character is a digit (0–9), add it to usPhoneNumber
        if(currentCharacters>="0" && currentCharacters<="9"){
            usPhoneNumber+=currentCharacters;
        }
    }
    //After extracting digits, check if the length is exactly 10
    if(usPhoneNumber.length!==10){
        console.error("Invalid phone number");
        return false;
    }

    //Format into US style phone number
    console.log( "(" + usPhoneNumber.slice(0,3) + ")" + usPhoneNumber.slice(3,6) + "-" + usPhoneNumber.slice(6));
    return true;
}
else{
    console.error("Invalid input,please give the proper input");
    return false;
}

}
formattingUsPhoneNumber("9840164723");