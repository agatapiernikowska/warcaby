var welcomeScreen = document.querySelector(".welcome-screen");
var myButton = document.querySelector('.btn');
var input = document.getElementsByTagName('input')[0];
var myUl = document.getElementsByTagName('ul')[0];



myButton.addEventListener('click', function(){
  var newLi = document.createElement('li');
  newLi.textContent = input.value;
  myUl.appendChild(newLi);
  input.value = "";
  welcomeScreen.classList.add("welcome-screen-hide");
});