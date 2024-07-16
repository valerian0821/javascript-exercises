const fibonacci = function(sequence) {
    let arr = [];
    sequence = Number(sequence);
    if (sequence === 0) {
        return 0;
    } else if (sequence < 0) {
        return "OOPS";
    }
    for (let i = 0; i < sequence; i++) {
        if (arr.length < 2) {
            arr.push(1);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    return arr[sequence - 1];
};

// Do not edit below this line
module.exports = fibonacci;
