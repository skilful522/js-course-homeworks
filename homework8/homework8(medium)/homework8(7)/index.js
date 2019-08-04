const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
const thirdInput = document.querySelector("#third");
var map = new Map();
var firstArray = [];
var secondArray = [];
var thirdArray = [];
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
function setHistory(array, input) {
    if (i === 0){
        i = array.length;
    }
    input.value = array[i - 1];
    i--;
}

firstInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            setHistory(firstArray, firstInput);
    }
};
secondInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            setHistory(secondArray, secondInput);
    }
};
thirdInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            setHistory(thirdArray, thirdInput);
    }
};

secondInput.addEventListener('blur', function () {
    addValue(secondInput, secondArray, map);
});
thirdInput.addEventListener('blur', function () {
   addValue(thirdInput, thirdArray, map);
});