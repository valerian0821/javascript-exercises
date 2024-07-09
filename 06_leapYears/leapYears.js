const leapYears = function(year) {
    let leapYear = false;
    if (year % 4 == 0) {
        leapYear = true;
        if (year % 100 == 0 && year % 400 != 0) {
            leapYear = false;
        }
    }
    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
