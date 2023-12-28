Array.prototype.myFilter = function (callback, thisArr) {

    if (typeof callback !== 'function') {
        throw new Error(`${callback} not a function!`);
    }

    let resultArray = [];
    thisArr = this;

    for (let i = 0; i < thisArr.length; i++) {

        if (callback(thisArr[i], i, thisArr)) {
            resultArray.push(thisArr[i]);
        }

    }

    return resultArray;
};








