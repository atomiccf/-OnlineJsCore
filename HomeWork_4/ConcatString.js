function isValidString(string) {
    return typeof string === "string";
}

function concatStrings(str, separator) {
    return function (next) {
        if (next === undefined || !isValidString(next)) {
            return str;
        }

        if (isValidString(separator)) {
            return concatStrings(`${str}${separator}${next}`, separator);
        } else {
            return concatStrings(`${str}${next}`);
        }

    }
}

console.log(concatStrings('first')('second')('third')()) // 'firstsecondthird'
console.log(concatStrings('first', null)('second')()) //'firstsecond'
console.log( concatStrings('first', '123')('second')('third')()) //  'first123second123third'
console.log(concatStrings('some-value')('')('')(null)) // 'some-value'
console.log(concatStrings('some-value')(2)) // 'some-value'
console.log(concatStrings('some-value')('333')(123n)) //'some-val333'

