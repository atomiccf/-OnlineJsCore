function createDebounceFunction (callback,delay){
    let timeOutId;

    return function (...args){
       clearTimeout(timeOutId);

       timeOutId = setTimeout(() => {
           callback.call(this, args);
       }, delay);
    }
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);
