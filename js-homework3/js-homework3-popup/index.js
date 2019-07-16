var dialog = document.querySelector('dialog');
var buttonShow = document.querySelector("#show");
var buttonClose = document.querySelector("#close");
var buttonSave = document.querySelector("#save");

buttonShow.addEventListener("click", function () {
    dialog.showModal();
});

buttonClose.addEventListener("click", function () {
    dialog.close();
});
buttonSave.addEventListener("click", function () {
    dialog.close();
    document.getElementById('text').value = '';
});
