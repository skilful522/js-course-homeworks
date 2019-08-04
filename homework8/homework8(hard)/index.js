const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
const thirdInput = document.querySelector("#third");
var map = new Map();
var firstArray = [];
var secondArray = [];
var thirdArray = [];
var right = false;
var left = false;
var i = 0;

firstInput.addEventListener('blur', function () {
    addValue(firstInput, firstArray, map);
});

function addValue(input, array, map) {
    if (input.value !== "") {
        array.push(input.value);
        map.set(input, array);
    }
    input.value = "";
}

function moveLeft(array, input) {
    left = true;
    if (i === 0){
        i = array.length;
    }
    input.value = array[i - 1];
    i--;
    return left;
}

function moveRight(array, input) {
    right= true;
    if (i === array.length){
        i = 0
    }
    input.value = array[i];
    i++;
    return right;
}

firstInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            moveLeft(firstArray, firstInput);
            console.log("left "+i);
            break;
        case 39:
            moveRight(firstArray, firstInput);
            console.log("right "+i);
            break;
    }
};

firstInput.onkeypress = () => {
    if (left) {
        for (var j = 0; j < firstArray.length - 1; j++) {
            if (j > i ) {
                firstArray.splice(i);
                left = false;
            }
        }
    }
    if (right) {
        for (var k = 0; k < firstArray.length - 1; k++) {
            if (i > k ) {
                firstArray.splice(i - 1);
                left = false;
            }
        }
    }
};

secondInput.onkeypress = () => {
    if (left) {
        for (var j = 0; j < secondArray.length - 1; j++) {
            if (j > i ) {
                secondArray.splice(i);
                left = false;
            }
        }
    }
    if (right) {
        for (var k = 0; k < secondArray.length - 1; k++) {
            if (i > k ) {
                secondArray.splice(i - 1);
                left = false;
            }
        }
    }
};

thirdInput.onkeypress = () => {
    if (left) {
        for (var j = 0; j < thirdArray.length - 1; j++) {
            if (j > i ) {
                thirdArray.splice(i);
                left = false;
            }
        }
    }
    if (right) {
        for (var k = 0; k < thirdArray.length - 1; k++) {
            if (i > k ) {
                thirdArray.splice(i - 1);
                left = false;
            }
        }
    }
};

secondInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            moveLeft(secondArray, secondInput);
            break;
        case 39:
            moveRight(secondArray, secondInput);
            break;
    }
};
thirdInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            moveLeft(thirdArray, thirdInput);
            break;
        case 39:
            moveRight(thirdArray, thirdInput);
            break;
    }
};

secondInput.addEventListener('blur', function () {
    addValue(secondInput, secondArray, map);
});
thirdInput.addEventListener('blur', function () {
    addValue(thirdInput, thirdArray, map);
});

