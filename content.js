function init(){
  createDisplayBox();
  browserListeners();
}


function createDisplayBox(){
  let display_box = document.createElement("div");
  display_box.setAttribute("id", "testextension");
  display_box.setAttribute("style",
  `position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-ramily: sans serif;
  font-size: 25px;
  width: auto`);
  document.body.appendChild(display_box);
}


function browserListeners(){
  onmousemove = function(event){
    var box = document.getElementById("testextension");
    box.style.left = event.pageX + "px";
    box.style.top = event.pageY + "px";
  }
  chrome.runtime.onMessage.addListener(function(message){
    var choice = message.userChoice;

    if (choice === "fontFamily"){
      onmouseover = function(event){changeText("testextension", cutText(getCssValue(event, choice)))};
    }
    else {
      onmouseover = function(event){changeText("testextension", getCssValue(event, choice))};
    }
  })
}

///////////////////////////////HELPER FUNCTIONS//////////////////////////////////////
//put helper functions into another function / as methods / as a return value in an object //AKA as methods

function cutText(text){
  return text.split(",")[0].replace(/["]+/g,"");
}

function getCssValue(event, input){
  let elementOver = event.target;
  let text = elementOver.textContent
  let cssObj = window.getComputedStyle(elementOver);
  if(text){return cssObj[input];}
  else{return null}
}

function changeText(id, value){
  document.getElementById(String(id)).textContent = value;
}

init();

// Improvements:
// More buttons with more features...
// better popup UI / css
// click browser_action button to turn on/off
