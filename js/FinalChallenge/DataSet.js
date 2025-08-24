
const userData = require('./users-db.json');

//Main function to validate the userdata

function extractingDataFromDataSet(data) {

    if (!Array.isArray(data) || data.length == 0) {
        console.error("Invalid input,please give the proper input");
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        if (!data[i].income || typeof data[i].income !== "number" || data[i].income < 0 || !data[i].country || typeof data[i].country !== "string" || !data[i].email || typeof data[i].email !== "string" || !data[i].gender || typeof data[i].gender !== "string") {
            console.error("Invalid input,please give the proper input");
            return false;
        }
    }
    findHighestIncomeWithCountry(userData);
    findCombinedHighestIncome(userData);
    findSpecificEmail(userData, ".gov");
    findHighestFemaleIncomeWithCountry(userData, 'Female');
    getPaginatedResult(userData, 2, 20);
}

function findHighestIncomeWithCountry(data) {
    let highestIncome = 0;
    let countryWithHighestIncome;

    for (let i = 0; i < data.length; i++) {
        if (data[i].income > highestIncome) {
            highestIncome = data[i].income;
            countryWithHighestIncome = data[i].country;
        }
    }
    console.log("Country :", countryWithHighestIncome, "\nIncome:", highestIncome);
}


function findCombinedHighestIncome(data) {

    let incomeByCountry = {};
    let highestIncome = 0;
    let countryWithHighestIncome;
    let country;
    let income;

    for (let j = 0; j < data.length; j++) {
        country = data[j].country;
        income = data[j].income;

        // Initialize country if not already present
        if (!incomeByCountry[country]) {
            incomeByCountry[country] = 0;

        }
        incomeByCountry[country] += income;

        // Track highest combined income
        if (incomeByCountry[country] > highestIncome) {
            highestIncome = incomeByCountry[country];
            countryWithHighestIncome = country;
        }
    }
    console.log("Combined income for each country:", incomeByCountry);
    console.log("Combined highest income : ", highestIncome);
    console.log("Country which has combined highest income:", countryWithHighestIncome);
}


function findSpecificEmail(data, getEmail) {
    if (!getEmail || typeof getEmail !== "string") {
        console.error("Invalid email,please give the proper email");
        return false;
    }
    getEmail = getEmail.toLowerCase();
    let governmentEmail = [];
    let email;
    let tempGetEmail = "";
    // Remove spaces from search string(getEmail)
    for (let i = 0; i < getEmail.length; i++) {
        if (getEmail[i] == " ") {
            continue;
        }
        tempGetEmail += getEmail[i];
    }
    getEmail = tempGetEmail;

    for (let k = 0; k < data.length; k++) {
        email = data[k].email.toLowerCase();

        if (email[email.length - 1] == getEmail[getEmail.length - 1] && email[email.length - 2] == getEmail[getEmail.length - 2] && email[email.length - 3] == getEmail[getEmail.length - 3] && email[email.length - 4] == getEmail[getEmail.length - 4]) {
            governmentEmail.push(email);
        }
    }
    if (governmentEmail.length == 0) {
        console.error("No emails found with " + getEmail);
        return false;
    }
    console.log("Government EmailId :", governmentEmail);
}


function findHighestFemaleIncomeWithCountry(data, gender) {
    let tempGender = "";

    // Remove spaces from search string(getEmail)
    for (let i = 0; i < gender.length; i++) {
        if (gender[i] == " ") {
            continue;
        }
        tempGender += gender[i];
    }
    gender = tempGender;

    let femaleCountryIncome = {};
    let highestFemaleIncome = 0;
    let countryWithFemaleHighestIncome = "";
    let country;
    let income;
    let genderData;

    for (let j = 0; j < data.length; j++) {
        country = data[j].country;
        income = data[j].income;
        genderData = data[j].gender;

        if (genderData.toLowerCase() == gender.toLowerCase()) {

            if (!femaleCountryIncome[country]) {
                femaleCountryIncome[country] = 0;

            }
            femaleCountryIncome[country] += income;

            if (femaleCountryIncome[country] > highestFemaleIncome) {
                highestFemaleIncome = femaleCountryIncome[country];
                countryWithFemaleHighestIncome = country;
            }

        }

    }

    if (countryWithFemaleHighestIncome == "") {
        console.error("No records found for gender : " + gender);
        return false;
    }
    console.log("Combined " + gender + " income for each country:", femaleCountryIncome);
    console.log("Highest " + gender + " income : ", highestFemaleIncome);
    console.log("Country which has combined highest " + gender + " income : ", countryWithFemaleHighestIncome);
}


function getPaginatedResult(data, pageNumber, pageSize) {

    if (typeof pageNumber !== "number" || pageNumber <= 0 || typeof pageSize !== "number" || pageSize <= 0) {
        console.error("Invalid input,please give the proper input");
        return false;
    }
    let startingIndex = (pageNumber - 1) * pageSize;
    let endingIndex = startingIndex + pageSize;
    let paginatedPage = [];

    for (let i = startingIndex; i < endingIndex && i < data.length; i++) {
        paginatedPage.push(data[i]);
    }
    console.table(paginatedPage);
}

extractingDataFromDataSet(userData);


