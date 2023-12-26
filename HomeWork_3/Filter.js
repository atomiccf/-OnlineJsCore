Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function'){
        throw new Error(`${callback} not a function!`);
    }

    let resultArr =[];
    thisArg = this;

    for (let i=0; i< thisArg.length; i++) {

     let result = callback(thisArg[i], i,thisArg)

     if (result){
     resultArr.push(thisArg[i]);
     }
}

    return resultArr;
};

[1,2,2,1].myFilter((item, index, arr) =>{

  return item % 2 === 0

});







