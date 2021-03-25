var getType = document.querySelectorAll("#type-pizza");
var getImage = document.querySelectorAll(".image-pizza");

//remove all pizza effects at page start
getType.forEach((li) => {
  li.classList.remove("type-pizza-effect");
});

getImage.forEach((img) => {
  img.classList.remove("image-pizza-effect");
});

//initial page pizza
getType[0].classList.add("type-pizza-effect");
getImage[0].classList.add("image-pizza-effect");

getType.forEach((li, i) => {
  li.addEventListener("click", function () {
    //remove all effects on click
    getImage.forEach((img) => {
      img.classList.remove("image-pizza-effect");
    });
    getType.forEach((li) => {
      li.classList.remove("type-pizza-effect");
    });
    //add the selected one
    getImage[i].classList.add("image-pizza-effect");
    getType[i].classList.add("type-pizza-effect");
  });
});
