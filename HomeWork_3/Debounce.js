function createDebounceFunction (callback,delay){
    let timeOutId;

    return function (...args){
    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => {
    callback.call(this, args);
    }, delay);
    }
}


