
const userData = require('./users-db.json');
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
findHighestIncomeWithCountry(userData);

function findCombinedHighestIncome(data) {
    let incomeByCountry = {};
    let highestIncome = 0;
    let countryWithHighestIncome;

    for (let j = 0; j < data.length; j++) {
        let country = data[j].country;
        let income = data[j].income;
        if (!incomeByCountry[country]) {
            incomeByCountry[country] = 0;

        }
        incomeByCountry[country] += income;

        if (incomeByCountry[country] > highestIncome) {
            highestIncome = incomeByCountry[country];
            countryWithHighestIncome = country;
        }
    }
    console.log("Combined income for each country:", incomeByCountry);
    console.log("Combined highest income : ", highestIncome);
    console.log("Country which has combined highest income:", countryWithHighestIncome);
}
findCombinedHighestIncome(userData);

function findSpecificEmail(data,getEmail) {
    let governmentEmail = [];
    for (let k = 0; k < data.length; k++) {
        let email = data[k].email;
        if (email[email.length - 1] == getEmail[getEmail.length-1] && email[email.length - 2] == getEmail[getEmail.length-2] && email[email.length - 3] == getEmail[getEmail.length-3] && email[email.length - 4] == getEmail[getEmail.length-4]) {
            governmentEmail.push(email);
        }
    }
    console.log("Government EmailId :", governmentEmail);
}
findSpecificEmail(userData,".gov");

function findHighestFemaleIncomeWithCountry(data,gender) {
    let femaleCountryIncome = {};
    let highestFemaleIncome = 0;
    let countryWithFemaleHighestIncome = "";

    for (let j = 0; j < data.length; j++) {
        let country = data[j].country;
        let income = data[j].income;
        let genderData = data[j].gender;

        if (genderData == gender) {

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
    console.log("Combined female income for each country:", femaleCountryIncome);
    console.log("Highest female income : ", highestFemaleIncome);
    console.log("Country which has combined highest female income : ", countryWithFemaleHighestIncome);
}
findHighestFemaleIncomeWithCountry(userData,'Female');

function getPaginatedResult(data, pageNumber, pageSize) {
    let startingIndex = (pageNumber - 1) * pageSize;
    let endingIndex = startingIndex + pageSize;
    let paginatedPage = [];

    for (let i = startingIndex; i < endingIndex && i < data.length; i++) {
        paginatedPage.push(data[i]);
    }
    console.table(paginatedPage);
}
getPaginatedResult(userData, 3, 20);


