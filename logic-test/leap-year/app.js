function isLeapYear(startYear, endYear) {
    const leapYear = [];
    for (let currentYear = startYear; currentYear <= endYear; currentYear++) {
        if (currentYear % 4 === 0 ){
            if (currentYear % 100 === 0) {
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
