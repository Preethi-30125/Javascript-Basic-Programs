function correctedString(originalString,targetCharacter,addItem){
    //Checking possible edge cases to ensure valid inputs
    if(!targetCharacter || !originalString || addItem == null  || addItem.length==0 || targetCharacter.length==0 && originalString.length==0 && addItem.length==0 || typeof originalString !== "string"){
    return "Invalid input,please give the proper input";
}
    let modifiedString=""; // Variable to store the modified output string
    

for(let i=0;i<originalString.length;i++){
    if(originalString[i].toLowerCase()===targetCharacter.toLowerCase()){
        modifiedString+=targetCharacter+addItem; // If the current character matches the targetCharacter,
        // append the targetCharacter and the addItem to the result
    }
    else{
        modifiedString+=originalString[i]; // If not a match, just append the current character
    }
}
return modifiedString; //Return the final modified string
}
console.log(correctedString("Cat in the bag","c","@"));