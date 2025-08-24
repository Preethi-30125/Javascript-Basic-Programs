function repeatingCharacter(inputCharacters) {

    //Checking possible edge cases to ensure valid inputs
    if (!inputCharacters || typeof inputCharacters != "string" || inputCharacters === " ") {
        console.error("Invalid input,please give the proper input");
        return false;
    }

    let maxCount = 0;
    let mostRepeatedCharacter = [];
    let repeatCount;
    let alreadyAdded;

    for (let i = 0; i < inputCharacters.length; i++) {
        repeatCount = 1;
        for (let j = i + 1; j < inputCharacters.length; j++) {
            if (inputCharacters[i] === inputCharacters[j]) {
                repeatCount++;   // Increment count if the same character repeats
            }
            else {
                break;  // Stop counting when a different character is found
            }

        }

        // Save the character if it appears more times in a row than any previous one
        if (repeatCount > maxCount) {
            maxCount = repeatCount;
            mostRepeatedCharacter = [inputCharacters[i]];
        }

        //check if it's already in the array
        else if (repeatCount === maxCount) {
            alreadyAdded = false;
            for (let k = 0; k < mostRepeatedCharacter.length; k++) {
                if (mostRepeatedCharacter[k] === inputCharacters[i]) {
                    alreadyAdded = true;
                    break;
                }
            }
            // If not already in the array, add it
            if (!alreadyAdded) {
                mostRepeatedCharacter.push(inputCharacters[i]);
            }
        }
    }

    if (maxCount == 1) {
        console.error("There is no repetition in the string");
        return true;
    }

    console.log(mostRepeatedCharacter);
    return mostRepeatedCharacter;
}
(repeatingCharacter("traaangfornnwbie"))