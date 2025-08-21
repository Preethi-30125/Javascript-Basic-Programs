
function encodeMessage(inputText, shiftValue) {

    //Checking possible edge cases to ensure valid inputs
    if (!inputText || !shiftValue || typeof inputText !== "string" || !Number.isInteger(shiftValue) || shiftValue < 0) {
        return "Invalid input,please give the proper input";
    }
    
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let encodedCharacters = "";
    let shiftedIndex;

    for (let i = 0; i < inputText.length; i++) {
        for (let j = 0; j < alphabets.length; j++) {
            if (inputText[i].toLowerCase() === alphabets[j]) {
                // Move forward by 'shiftValue' places and wrap around using %
                shiftedIndex = [j + shiftValue] % alphabets.length;

                // Add the shifted value to the string 'encodedCharacters'
                encodedCharacters += alphabets[shiftedIndex];
                break;
            }
        }
    }
    return encodedCharacters;
}
console.log(encodeMessage("arun", 2))


function decodeMessage(encodedText, shiftValue) {

    //Checking possible edge cases to ensure valid inputs
    if (!encodedText || !shiftValue || typeof encodedText !== "string" || !Number.isInteger(shiftValue) || shiftValue < 0) {
        return "Invalid input,,please give the proper input";
    }

    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let decodedCharacters = "";
    let shiftedIndex;

    for (let i = 0; i < encodedText.length; i++) {

        for (let j = 0; j < alphabets.length; j++) {
            if (encodedText[i].toLowerCase() === alphabets[j]) {
                // Move backward by 'shiftValue' places and wrap around using %
                shiftedIndex = [j - shiftValue] % alphabets.length;

                // If we get a negative number, wrap it to the end of alphabets
                if (shiftedIndex < 0) {
                    shiftedIndex += alphabets.length;
                }
                // Add the shifted value to the string 'decodedCharacters'
                decodedCharacters += alphabets[shiftedIndex];
                break;
            }
        }
    }
    return decodedCharacters;
}
console.log(decodeMessage("ctwp", 2))