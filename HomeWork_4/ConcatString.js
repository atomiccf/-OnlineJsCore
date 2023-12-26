function isValidString (string){
   return typeof string === "string";
}

function concatStrings(str,separator) {

    return function(next){

    if (next === undefined || !isValidString(next)) {

    return str;
    }

    if (isValidString(separator)) {

    return concatStrings(`${str}${separator}${next}`,separator);
    } else {

    return concatStrings(`${str}${next}`);
    }
    }
}

