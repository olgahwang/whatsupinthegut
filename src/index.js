var currentScreen = document.getElementById("mainMenuDiv");
var chosenLevel = 0;
var cur = 0;

function showMainMenu(){
  cur = 0;
  currentScreen.style.display = "none";
  currentScreen = document.getElementById("mainMenuDiv");
  currentScreen.style.display = "flex";
}

function startClicked(){
  cur = 0;
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

function showIntro() {
  currentScreen.style.display = "none";
  currentScreen = document.getElementById("levelIntro");
  if (chosenLevel == 0){
    currentScreen.style.backgroundImage = "url('../assets/saladIntro.jpg')";
  } else if (chosenLevel == 1) {
    currentScreen.style.backgroundImage = "url('../assets/pizzaIntro.jpg')";
  }
  currentScreen.style.display = "flex";
  cur++;
}

function continueToGame(){
  if (chosenLevel == 1) {
    window.location.href = './pizza.html';
  }
  else {
    if (chosenLevel == 0) {
      window.location.href = './salad.html';
    }
  }
}

function nextLevel(){
  if (chosenLevel == 0) {
    window.location.href = './pizza.html';
  }
  else {
    if (chosenLevel == 1) {
      window.location.href = './salad.html';
    }
  }
}

document.addEventListener('keypress', function(event) {
    if(event.keyCode == 49) {
      if (currentScreen.id == "mainMenuDiv"){
        if (chosenLevel == 0){
          chosenLevel=1;
          pizzaChosen();
        } else if (chosenLevel == 1){
          chosenLevel=0;
          saladChosen();
        }
      }

      if (currentScreen.id == "onboarding1" ||
      currentScreen.id == "onboarding2" ||
      currentScreen.id == "onboarding3"){
        showIntro();

      } else if (currentScreen.id == "levelIntro") {
        showMainMenu();
      }
    }
    if (event.keyCode == 51) {
      if (cur == 0) {
        startClicked();
      } else if (cur == 1) {
        showSecondPage();
      } else if (cur == 2) {
        showThirdPage();
      } else if (cur == 3){
        showIntro();
      }
      else if (cur == 4) {
        continueToGame();
      }
    }
});
