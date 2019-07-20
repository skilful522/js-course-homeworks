
var profile = document.querySelector("#profile");
var gallary = document.querySelector("#gallary");
var feed = document.querySelector("#feed");

var profileContent = document.querySelector("#content-profile");
var gallaryContent = document.querySelector("#content-gallary");
var feedContent = document.querySelector("#content-feed");

profileContent.style.display = "none";
gallaryContent.style.display = "none";
feedContent.style.display = "none";

profile.addEventListener('click', function () {
    profileContent.style.display = "block";
    gallaryContent.style.display = "none";
    feedContent.style.display = "none";
});

gallary.addEventListener('click', function () {
    profileContent.style.display = "none";
    gallaryContent.style.display = "block";
    feedContent.style.display = "none";
});

feed.addEventListener('click', function () {
    profileContent.style.display = "none";
    gallaryContent.style.display = "none";
    feedContent.style.display = "block";
});

