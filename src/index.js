var currentScreen = document.getElementById("onboarding1");
var chosenLevel = 0;
var cur = 0;

function showFirstPage() {
  currentScreen = document.getElementById("onboarding1");
  currentScreen.style.display = "flex";
  var wrapperDiv = document.getElementById("onboardingWrapper");
  wrapperDiv.style.display = "flex";
  cur++;
}

function showSecondPage() {
  currentScreen.style.display = "none";
  currentScreen = document.getElementById("onboarding2");
  currentScreen.style.display = "flex";
  cur++;
}

function showThirdPage() {
  currentScreen.style.display = "none";
  currentScreen = document.getElementById("onboarding3");
  currentScreen.style.display = "flex";
  cur++;
}

function startClicked(){
  var oldBg = document.getElementById("mainMenuDiv");
  oldBg.style.display = "none";
  showFirstPage();
}

function pizzaChosen(){
  chosenLevel = 1;
  var pizza = document.getElementById("pizzaLevel");
  pizza.style.boxShadow = "0px 0px 0px 4px #5FAD56";
  var salad = document.getElementById("saladLevel");
  salad.style.boxShadow = "0px 0px 0px 0px";
}

function saladChosen(){
  chosenLevel = 0;
  var salad = document.getElementById("saladLevel");
  salad.style.boxShadow = "0px 0px 0px 4px #5FAD56";
  var pizza = document.getElementById("pizzaLevel");
  pizza.style.boxShadow = "0px 0px 0px 0px";
}

function continueToGame(){
  if (chosenLevel == 0) {
    window.location.href = './pizza.html';
    console.log("Pizza");
  }
  else {
    if (chosenLevel == 1) {
      window.location.href = './salad.html';
      console.log("Salad");
    }
  }
}

document.addEventListener('keypress', function(event) {
    if(event.keyCode == 49) {
      console.log("1 pressed");
      if (chosenLevel == 0){
        chosenLevel=1;
        pizzaChosen();
      } else if (chosenLevel == 1){
        chosenLevel=0;
        saladChosen();
      }
    }
    if (event.keyCode == 51) {
      if (cur == 0) {
        startClicked();
      } else if (cur == 1) {
        showSecondPage();
      } else if (cur == 2) {
        showThirdPage();
      } else if (cur == 3) {
        continueToGame();
      }
    }
});
