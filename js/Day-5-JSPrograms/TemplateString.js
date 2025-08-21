function replaceTemplateString(templateString, replacementArray) {
    //Checking possible edge cases to ensure valid inputs
    if (!templateString || !replacementArray || typeof templateString !== "string") {
        console.log("Invalid input,please give the proper input");
        return false;
    }

    let replacedString = "";
    let placeholderKey;
    let keyFoundInReplacements;

    for (let i = 0; i < templateString.length; i++) {

        // Check if we found a placeholder starting with #[
        if (templateString[i] === "#" && templateString[i + 1] === "[") {
            placeholderKey = "";

            // Start loop from after #[ and read until closing bracket ]
            for (i = i + 2; i < templateString.length; i++) {
                if (templateString[i] === "]") {
                    break;
                }
                placeholderKey += templateString[i];
            }

            keyFoundInReplacements = false;

            // Search for the key in replacementArray
            for (let j = 0; j < replacementArray.length; j++) {

                if (!(j in replacementArray) || !Array.isArray(replacementArray[j])) {
                    continue;
                }
                if (replacementArray[j][0] === placeholderKey) {
                    replacedString += replacementArray[j][1];  // Add the replacement value
                    
                    if (replacementArray[j][1] == 0 || !replacementArray[j][1]) {
                        console.log("Invalid input,the key " + "(" + placeholderKey + ")" + " value pair is not found");
                        return false;
                    }
                    keyFoundInReplacements = true;
                    break;
                }
            }

            // If key is not found in replacements array,then it's Invalid
            if (!keyFoundInReplacements) {
                console.log("Invalid input, " + placeholderKey + " is not in replacement array");
                return false;
            }
        }
        else {
            // If it's not a placeholder, just copy the character to replacedString
            replacedString += templateString[i];
        }
    }
    console.log(replacedString);
    return replacedString;
}
replaceTemplateString("Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]", [["location", "Chennai"], ["state","Tamil Nadu"], ["phone", "9840164723"]]);