function originalUpdate(event) {
    console.log(event);
}

function throttle(func, ms) {

    let isThrottled = false;
    let cacheArgs;
    let cacheThis;

    function wrapper() {

        if (isThrottled) {
            cacheArgs = arguments;
            cacheThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (cacheArgs) {
                wrapper.apply(cacheThis, cacheArgs);
                cacheArgs = cacheThis = null;
            }
        }, ms);
    }

    return wrapper;
}

function originalInputHandle(event) {
    console.log(event);
}

function debounce(f, ms) {

    let check = false;

    return function () {
        if (check) return;

        f.apply(this, arguments);

        check = true;

        setTimeout(() => check = false, ms);
    };

}

const debouncedInputHandle = debounce(originalInputHandle, 1000);

const throttleUpdate = throttle(originalUpdate, 1000);


addEventListener('mousemove', throttleUpdate);
addEventListener('input', debouncedInputHandle);

let first = [3, 10, 4, 4, 8, 9];
let second = [80, 4, 8, 11];

function intersection(array1, array2) {
    const array =[...array1, ...array2];
    const map = new Map();
    array.forEach( value => map.set(value, (map.get(value) || 0) + 1));
    return array.filter(value => map.get(value) > 1);
}

console.log(intersection(first, second));

let array = [10, 3, 10, 4, 8, 3, 9, 4];

function unique(array) {
    return [...new Set(array)];
}

console.log(unique(array));
