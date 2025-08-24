function arrayOfMultiples(inputArray) {

    if (!Array.isArray(inputArray) || inputArray.length == 0) {
        console.error("Invalid input,please give the proper input");
        return false;
    }


    const multiplierCount = inputArray[inputArray.length - 1];
    let baseNumber;
    let productOfBaseNumber;

    if (typeof multiplierCount !== "number" || multiplierCount < 0) {
        console.error("The baseNumber and multiplierCount value should be a number and multiplierCount should be greater than 0");
        return false;
    }


    for (let j = 0; j < inputArray.length - 1; j++) {
        baseNumber = inputArray[j];

        if (typeof baseNumber !== "number") {
            console.error("All base numbers should be numeric");
            return false;
        }
        //Loop from 1 to multiplierCount 
        // and multiply baseNumber by each i (1, 2, 3, ..., multiplierCount)

        productOfBaseNumber = [];

        for (let i = 1; i <= multiplierCount; i++) {

            productOfBaseNumber.push(baseNumber * i);
        }

        console.log(productOfBaseNumber);
    }
}
arrayOfMultiples([2, 5]);