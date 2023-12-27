function isValidArray(array){
    return (Array.isArray(array) && array.every(item => !isNaN(item) && item >= 0));
    }

function isValidIntervalNumber(number) {
    return  number >= 0 && !isNaN(number);
    }

function selectFromInterval(array, startInt, endInt) {
    if(!isValidArray(array)) {
    throw new Error('Ошибка!');
    }

    if (!isValidIntervalNumber(startInt) || !isValidIntervalNumber(endInt)) {
    throw new Error('Ошибка!');
    }

    if(startInt > endInt) {

    return  array.filter(item => item >= endInt && item <= startInt);
    } else {

    return  array.filter(item => item >= startInt && item <= endInt );
    }
}

console.log(typeof NaN)
