const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
const thirdInput = document.querySelector("#third");
const log = document.querySelector("#log");
var map = new Map();
var firstArray = [];
var secondArray = [];
var thirdArray = [];

firstInput.addEventListener('blur', function () {
    if (firstInput.value !== "") {
        firstArray.push(firstInput.value);
        map.set(firstInput, firstArray);
    }
    firstInput.value = "";
});
secondInput.addEventListener('blur', function () {
    if (secondInput.value !== "") {
        secondArray.push(secondInput.value);
        map.set(secondInput, secondArray);
    }
        secondInput.value = "";
});
thirdInput.addEventListener('blur', function () {
    if (thirdInput.value !== "") {
        thirdArray.push(thirdInput.value);
        map.set(thirdInput, thirdArray);
    }
    thirdInput.value = "";
});
log.addEventListener('click', function () {
    console.log(map);
});
