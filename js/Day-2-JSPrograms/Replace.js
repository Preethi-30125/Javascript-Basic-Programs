function correctedElements(rawElements,replaceElement){

  //Checking possible edge cases to ensure valid inputs
  if(rawElements == null || replaceElement == null || rawElements.length==0 || replaceElement.length==0 || rawElements.length==0 && replaceElement.length==0 || typeof rawElements !== "string"){
    return "Invalid input,please give the proper input";
  }
     let values=""; // Variable to store the modified output string
for(i=0;i<rawElements.length;i++){
    const character=rawElements[i];

    //If the character is a number (0–9), replace it with replaceElement
    if(character=='1'||character=='2'||character=='3'||character=='4'||character=='5'||character=='6'||character=='7'||character=='8'||character=='9'||character=='0'){
      values=values+replaceElement;
    }
    else{
        values=values+character; //If the character is not a number just append the character without any change
    }
    }
    return values;  //Return the modified string
}
console.log(correctedElements("arun@023-9","d"));
//arun@ddd-9