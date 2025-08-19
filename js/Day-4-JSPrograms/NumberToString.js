function convertNumberToString(numberValue) {

    //Checking possible edge cases to ensure valid inputs
    if (Array.isArray(numberValue) || typeof numberValue === "string" || isNaN(Number(numberValue))) {
        console.error("Invalid input,please give the proper input");
        return false;
    }
    let wordsResult = "";

    const numberAsString = "" + numberValue;

    for (let i = 0; i < numberAsString.length; i++) {

        const currentDigit = numberAsString[i];
        // Append the corresponding word for each currentDigit
        if (currentDigit == 1) {
            wordsResult += " one ";
        }
        if (currentDigit == 2) {
            wordsResult += " two ";
        }
        if (currentDigit == 3) {
            wordsResult += " three ";
        }
        if (currentDigit == 4) {
            wordsResult += " four ";
        }
        if (currentDigit == 5) {
            wordsResult += " five ";
        }
        if (currentDigit == 6) {
            wordsResult += " six ";
        }
        if (currentDigit == 7) {
            wordsResult += " seven ";
        }
        if (currentDigit == 8) {
            wordsResult += " eight ";
        }
        if (currentDigit == 9) {
            wordsResult += " nine ";
        }
        if (currentDigit == 0) {
            wordsResult += " zero ";
        }
        if (currentDigit == ".") {
            wordsResult += " point ";
        }
    }
    if (numberValue < 0) {
        console.log("negative " + wordsResult);
        return true;
    }
    console.log(wordsResult);
    return wordsResult;
}
convertNumberToString(98);