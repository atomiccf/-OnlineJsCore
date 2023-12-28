function makeObjectDeepCopy(object) {
    const copy = {};

    if (typeof object !== 'object' || object === null) {
        return object;
    }

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            copy[key] = makeObjectDeepCopy(object[key]);
        }
    }

    return copy;
}







