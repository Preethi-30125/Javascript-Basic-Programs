function commonInterestInBooks(students) {
    if (!students || !Array.isArray(students) || students.length == 0) {
        console.error("Invalid input,please give the proper input");
        return false;
    }

    //Create a map to link each book with the students who like it
    const bookToStudentMap = {};
    for (let i = 0; i < students.length; i++) {

        if (!students[i] || !students[i].name || !Array.isArray(students[i].books)) {
            continue;
        }

        for (let j = 0; j < students[i].books.length; j++) {
            let bookName = students[i].books[j];

            // If the book is not yet in the map, create an empty list
            if (!bookToStudentMap[bookName]) {
                bookToStudentMap[bookName] = [];
            }
            // Add the student's name to the list of that book
            bookToStudentMap[bookName].push(students[i].name);
        }
    }

    for (let bookName in bookToStudentMap) {
        let studentNamesList = "";
        // Build a string like: "'Arun', 'Ashok'"
        for (let i = 0; i < bookToStudentMap[bookName].length; i++) {
            studentNamesList += "'" + bookToStudentMap[bookName][i] + "'";
            if (i < bookToStudentMap[bookName].length - 1) {
                studentNamesList += ", ";
            }
        }
        console.log(bookName + "-[" + studentNamesList + "]");
    }
    //Count shared interests (only books that more than 1 student likes)
    const sharedInterestCounts = {};
    for (let bookName in bookToStudentMap) {
        let studentsWithBook = bookToStudentMap[bookName];
        if (studentsWithBook.length > 1) {   // Only if more than 1 students like it
                //Credit to the first student in the list and add it to the sharedInterestCounts
                if (!sharedInterestCounts[studentsWithBook[0]]) {
                    sharedInterestCounts[studentsWithBook[0]] = 0;
                }
                // Increase the count (number of shared interests)
                sharedInterestCounts[studentsWithBook[0]]++;
        }
    }
    // Find the maximum shared interest count
    let maxSharedCount = 0;
    let mostSharedStudents = [];
    for (let studentName in sharedInterestCounts) {
        if (sharedInterestCounts[studentName] > maxSharedCount) {
            maxSharedCount = sharedInterestCounts[studentName];
        }
    }

    //Collect all students who have that maximum shared count
    for (let studentName in sharedInterestCounts) {
        if (sharedInterestCounts[studentName] === maxSharedCount) {
            mostSharedStudents.push("'" + studentName + "'");
        }
    }
    console.log("Most shared interest:[" + mostSharedStudents.join(",") + "]");
}

commonInterestInBooks([
    {
        id: 0,
        name: 'Arun',
        books: ['Wings of Fire', 'Chakra'],
    },
    {
        id: 1,
        name: 'Ashok',
        books: ['Chakra', 'War and Peace', 'The Shining']
    },
    {
        id: 2,
        name: 'Balu',
        books: ['Wings of Fire', 'All about Cricket'],
    },
    {
        id: 3,
        name: 'Cathi',
        books: ['Against the wind', 'The Shining', 'War and Peace']
    },
]);