var  i = 0;
var images = [];
var order = ["First", "Second", "Third"];

images[0] = "https://source.unsplash.com/800x600/weekly?ocean";
images[1] = "https://source.unsplash.com/800x600/weekly?magma";
images[2] = "https://source.unsplash.com/800x600/weekly?fire";


var left = document.querySelector("button");
var right = document.querySelector("#rightButton");

left.addEventListener('click', function () {
    if (i === 0){
        i = images.length - 1;
        document.slide.src = images[i];
        document.getElementById("order").innerHTML = order[i] + " slide lable";
    } else i--;
    document.slide.src = images[i];
    document.getElementById("order").innerHTML = order[i] + " slide lable";
});

right.addEventListener('click', function () {
    if (i < images.length - 1){
        i++;
        document.slide.src = images[i];
        document.getElementById("order").innerHTML = order[i] + " slide lable";
    } else {
        i = 0;
        document.slide.src = images[i];
        document.getElementById("order").innerHTML = order[i] + " slide lable";
    }

});

window.onload = document.slide.src = images[0];
document.getElementById("order").innerHTML = order[0] + " slide lable";
