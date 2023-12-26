Array.prototype.myFilter = function (callback, thisArg) {

    if (typeof callback !== 'function'){
        throw new Error(`${callback} not a function!`);
    }

    let resultArr =[];
    thisArg = this;

    for (let i=0; i< thisArg.length; i++) {

    if (callback(thisArg[i], i,thisArg)){
    resultArr.push(thisArg[i]);
    }

    }

    return resultArr;

};

console.log([1,2,2,1].myFilter((item, index, arr) =>{

    return item % 2 === 0;

}))








