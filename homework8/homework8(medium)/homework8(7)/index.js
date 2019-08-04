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
function setHistory(array, input, map) {
    input.value = array[(array.length - 1) - i];
    console.log(map.get(input));
    console.log("i =" + i + " value=" + array[i] + "length = " + array.length);
    if (i === array.length - 1 || array.length === 1) {
        i = [0];
    } else i++;
}

firstInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            setHistory(firstArray, firstInput, map, i);
    }
};
secondInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            setHistory(secondArray, secondInput, map, i);
    }
};
thirdInput.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            setHistory(thirdArray, thirdInput, map, i);
    }
};

secondInput.addEventListener('blur', function () {
    addValue(secondInput, secondArray, map);
});
thirdInput.addEventListener('blur', function () {
   addValue(thirdInput, thirdArray, map);
});