function isLeapYear(startYear, endYear) {
    const leapYear = [];

    for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
        // check if current year divisible by 4
        if (currentYear % 4 === 0 ){
            // check if current year divisible by 100
            if (currentYear % 100 === 0) {
                // check if current year divisible by 400
                if (currentYear % 400 === 0) {
                    leapYear.push(currentYear);
                }
            } else {
                leapYear.push(currentYear);
            }        
        }
    }
    
    return leapYear;
}
