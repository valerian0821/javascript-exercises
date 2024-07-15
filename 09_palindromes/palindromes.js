const palindromes = function (str) {
    str = str.trim().toLowerCase();
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if ((charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123) || (charCode > 64 && charCode < 91)) {
            newStr = newStr + str.charAt(i);    
        }
    }
    let strArray = newStr.split("");
    let reverseStr = '';
    for (let i = 0; i < newStr.length; i++) {
        reverseStr = reverseStr + strArray.pop();
    }
    return reverseStr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
