function controller(){
  function messageListener(){
  var test = chrome.runtime.onMessage.addListener(function(message){
      var choice = message.userChoice;
      return {choice: choice}
    })
    console.log(test.choice)
  }
  return {
    init: function(){
      createDisplayBox();
      browserListeners(messageListener.choice);
      messageListener();
    }
  }
}

controller.init();


function createDisplayBox(){
  document.createElement("div")
  display_box.setAttribute("id", "kttest");
  display_box.setAttribute("style",
  `position: absolute;
  backgroundColor: black;
  color: white;
  padding: 5px;
  borderRadius: 5px;
  fontFamily: sans serif;
  fontSize: 25px;
  width: auto`);
  document.body.appendChild(display_box);
  console.log("display box created")
}


function browserListeners(choice){
  document.addEventListener('mousemove', function(event){
    var box = document.getElementById("kttest");
    box.style.left = event.pageX + "px";
    box.style.top = event.pageY + "px";
    console.log("test");
  })

  // onmousemove = function(event){
  //   var box = document.getElementById("kttest");
  //   box.style.left = event.pageX + "px";
  //   box.style.top = event.pageY + "px";
  //   console.log("test");
  // }
  onmouseover = function(event){changeText("kttest", getCssValue(event, choice))};

  console.log("browserListeners")
}

  // if (choice === "font-family")
  //   onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
  // }
  // else if (choice === "font-size"){
  //   onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
  // }
  // else if (choice === "font-color"){
  //   onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
  // }

//functions that do things // event listener functions --> separate function (?)


///////////////////////////////FUNCTIONS//////////////////////////////////////
//put helper functions into another function / as methods / as a return value in an object //AKA as methods
function cutText(text){
  return text.split(",")[0].replace(/["]+/g,"");
}

function getCssValue(e, input){
  var elementOver = e.target;
  var cssObj = window.getComputedStyle(elementOver);
  return cssObj[input]
}

function changeText(id, value){
  document.getElementById(String(id)).textContent = value;
}

// Improvements:
// More buttons with more features...
// better popup UI / css
// click browser_action button to turn on/off
//

//content.js
//Make it easier to add more...

chrome.runtime.onMessage.addListener(function(message){
  var choice = message.userChoice;
  if (choice === "fontFamily"){
    onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
  }
  else if (choice === "fontSize"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
  }
  else if (choice === "color"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
  }
})
//clean this up, maybe make a function that does all of this --> init, that can be called to instantiate the styling...
// function createDisplayBox(){
  var display_box = document.createElement("div");
  display_box.setAttribute("id", "kttest");
  display_box.setAttribute("style",
  `position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-family: sans serif;
  font-size: 25px;
  width: auto`);
  document.body.appendChild(display_box);
  console.log("display box created")
// }

// var testdiv = document.createElement("div");
// testdiv.setAttribute("id", "kttest");
// testdiv.style.position = "absolute";
// testdiv.style.backgroundColor = "black";
// testdiv.style.color = "white";
// testdiv.style.padding = "5px";
// testdiv.style.borderRadius = "5px";
// testdiv.style.fontFamily = "sans serif";
// testdiv.style.fontSize = "25px";
// testdiv.style.width = "auto";
// document.body.appendChild(testdiv);

//functions that do things // event listener functions --> separate function (?)
onmousemove = function(event){
  var box = document.getElementById("kttest");
  box.style.left = event.pageX + "px";
  box.style.top = event.pageY + "px";
}

///////////////////////////////FUNCTIONS//////////////////////////////////////
//put helper functions into another function / as methods / as a return value in an object //AKA as methods
function cutText(text){
  return text.split(",")[0].replace(/["]+/g,"");
}

function getCssValue(e, input){
  var elementOver = e.target;
  var cssObj = window.getComputedStyle(elementOver);

  return cssObj[input]
}

function changeText(id, value){
  document.getElementById(String(id)).textContent = value;
}

// Improvements:
// More buttons with more features...
// better popup UI / css
// click browser_action button to turn on/off
//

//
// //////////////////
// function controller(){
//   function messageListener(){
//   var test = chrome.runtime.onMessage.addListener(function(message){
//       var choice = message.userChoice;
//       return {choice: choice}
//     })
//     console.log(test.choice)
//   }
//   return {
//     init: function(){
//       createDisplayBox();
//       browserListeners(messageListener.choice);
//       messageListener();
//     }
//   }
// }
//
// controller.init();
//
//

//
//
// function browserListeners(choice){
//   document.addEventListener('mousemove', function(event){
//     var box = document.getElementById("kttest");
//     box.style.left = event.pageX + "px";
//     box.style.top = event.pageY + "px";
//     console.log("test");
//   })
//
//   // onmousemove = function(event){
//   //   var box = document.getElementById("kttest");
//   //   box.style.left = event.pageX + "px";
//   //   box.style.top = event.pageY + "px";
//   //   console.log("test");
//   // }
//   onmouseover = function(event){changeText("kttest", getCssValue(event, choice))};
//
//   console.log("browserListeners")
// }
//
//   // if (choice === "font-family")
//   //   onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
//   // }
//   // else if (choice === "font-size"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
//   // }
//   // else if (choice === "font-color"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
//   // }
//
// //functions that do things // event listener functions --> separate function (?)
//
//
// ///////////////////////////////FUNCTIONS//////////////////////////////////////
// //put helper functions into another function / as methods / as a return value in an object //AKA as methods
// function cutText(text){
//   return text.split(",")[0].replace(/["]+/g,"");
// }
//
// function getCssValue(e, input){
//   var elementOver = e.target;
//   var cssObj = window.getComputedStyle(elementOver);
//   return cssObj[input]
// }
//
// function changeText(id, value){
//   document.getElementById(String(id)).textContent = value;
// }
//
// // Improvements:
// // More buttons with more features...
// // better popup UI / css
// // click browser_action button to turn on/off
// //
//content.js
//Make it easier to add more...

chrome.runtime.onMessage.addListener(function(message){
  var choice = message.userChoice;
  if (choice === "fontFamily"){
    onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
  }
  else if (choice === "fontSize"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
  }
  else if (choice === "color"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
  }
})
//clean this up, maybe make a function that does all of this --> init, that can be called to instantiate the styling...
// function createDisplayBox(){
  var display_box = document.createElement("div");
  display_box.setAttribute("id", "kttest");
  display_box.setAttribute("style",
  `position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-family: sans serif;
  font-size: 25px;
  width: auto`);
  document.body.appendChild(display_box);
  console.log("display box created")
// }

// var testdiv = document.createElement("div");
// testdiv.setAttribute("id", "kttest");
// testdiv.style.position = "absolute";
// testdiv.style.backgroundColor = "black";
// testdiv.style.color = "white";
// testdiv.style.padding = "5px";
// testdiv.style.borderRadius = "5px";
// testdiv.style.fontFamily = "sans serif";
// testdiv.style.fontSize = "25px";
// testdiv.style.width = "auto";
// document.body.appendChild(testdiv);

//functions that do things // event listener functions --> separate function (?)
onmousemove = function(event){
  var box = document.getElementById("kttest");
  box.style.left = event.pageX + "px";
  box.style.top = event.pageY + "px";
}

///////////////////////////////FUNCTIONS//////////////////////////////////////
//put helper functions into another function / as methods / as a return value in an object //AKA as methods
function cutText(text){
  return text.split(",")[0].replace(/["]+/g,"");
}

function getCssValue(e, input){
  var elementOver = e.target;
  var cssObj = window.getComputedStyle(elementOver);

  return cssObj[input]
}

function changeText(id, value){
  document.getElementById(String(id)).textContent = value;
}

// Improvements:
// More buttons with more features...
// better popup UI / css
// click browser_action button to turn on/off
//

//
// //////////////////
// function controller(){
//   function messageListener(){
//   var test = chrome.runtime.onMessage.addListener(function(message){
//       var choice = message.userChoice;
//       return {choice: choice}
//     })
//     console.log(test.choice)
//   }
//   return {
//     init: function(){
//       createDisplayBox();
//       browserListeners(messageListener.choice);
//       messageListener();
//     }
//   }
// }
//
// controller.init();
//
//

//
//
// function browserListeners(choice){
//   document.addEventListener('mousemove', function(event){
//     var box = document.getElementById("kttest");
//     box.style.left = event.pageX + "px";
//     box.style.top = event.pageY + "px";
//     console.log("test");
//   })
//
//   // onmousemove = function(event){
//   //   var box = document.getElementById("kttest");
//   //   box.style.left = event.pageX + "px";
//   //   box.style.top = event.pageY + "px";
//   //   console.log("test");
//   // }
//   onmouseover = function(event){changeText("kttest", getCssValue(event, choice))};
//
//   console.log("browserListeners")
// }
//
//   // if (choice === "font-family")
//   //   onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
//   // }
//   // else if (choice === "font-size"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
//   // }
//   // else if (choice === "font-color"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
//   // }
//
// //functions that do things // event listener functions --> separate function (?)
//
//
// ///////////////////////////////FUNCTIONS//////////////////////////////////////
// //put helper functions into another function / as methods / as a return value in an object //AKA as methods
// function cutText(text){
//   return text.split(",")[0].replace(/["]+/g,"");
// }
//
// function getCssValue(e, input){
//   var elementOver = e.target;
//   var cssObj = window.getComputedStyle(elementOver);
//   return cssObj[input]
// }
//
// function changeText(id, value){
//   document.getElementById(String(id)).textContent = value;
// }
//
// // Improvements:
// // More buttons with more features...
// // better popup UI / css
// // click browser_action button to turn on/off
// //
//content.js
//Make it easier to add more...

chrome.runtime.onMessage.addListener(function(message){
  var choice = message.userChoice;
  if (choice === "fontFamily"){
    onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
  }
  else if (choice === "fontSize"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
  }
  else if (choice === "color"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
  }
})
//clean this up, maybe make a function that does all of this --> init, that can be called to instantiate the styling...
// function createDisplayBox(){
  var display_box = document.createElement("div");
  display_box.setAttribute("id", "kttest");
  display_box.setAttribute("style",
  `position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-family: sans serif;
  font-size: 25px;
  width: auto`);
  document.body.appendChild(display_box);
  console.log("display box created")
// }

// var testdiv = document.createElement("div");
// testdiv.setAttribute("id", "kttest");
// testdiv.style.position = "absolute";
// testdiv.style.backgroundColor = "black";
// testdiv.style.color = "white";
// testdiv.style.padding = "5px";
// testdiv.style.borderRadius = "5px";
// testdiv.style.fontFamily = "sans serif";
// testdiv.style.fontSize = "25px";
// testdiv.style.width = "auto";
// document.body.appendChild(testdiv);

//functions that do things // event listener functions --> separate function (?)
onmousemove = function(event){
  var box = document.getElementById("kttest");
  box.style.left = event.pageX + "px";
  box.style.top = event.pageY + "px";
}

///////////////////////////////FUNCTIONS//////////////////////////////////////
//put helper functions into another function / as methods / as a return value in an object //AKA as methods
function cutText(text){
  return text.split(",")[0].replace(/["]+/g,"");
}

function getCssValue(e, input){
  var elementOver = e.target;
  var cssObj = window.getComputedStyle(elementOver);

  return cssObj[input]
}

function changeText(id, value){
  document.getElementById(String(id)).textContent = value;
}

// Improvements:
// More buttons with more features...
// better popup UI / css
// click browser_action button to turn on/off
//

//
// //////////////////
// function controller(){
//   function messageListener(){
//   var test = chrome.runtime.onMessage.addListener(function(message){
//       var choice = message.userChoice;
//       return {choice: choice}
//     })
//     console.log(test.choice)
//   }
//   return {
//     init: function(){
//       createDisplayBox();
//       browserListeners(messageListener.choice);
//       messageListener();
//     }
//   }
// }
//
// controller.init();
//
//

//
//
// function browserListeners(choice){
//   document.addEventListener('mousemove', function(event){
//     var box = document.getElementById("kttest");
//     box.style.left = event.pageX + "px";
//     box.style.top = event.pageY + "px";
//     console.log("test");
//   })
//
//   // onmousemove = function(event){
//   //   var box = document.getElementById("kttest");
//   //   box.style.left = event.pageX + "px";
//   //   box.style.top = event.pageY + "px";
//   //   console.log("test");
//   // }
//   onmouseover = function(event){changeText("kttest", getCssValue(event, choice))};
//
//   console.log("browserListeners")
// }
//
//   // if (choice === "font-family")
//   //   onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
//   // }
//   // else if (choice === "font-size"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
//   // }
//   // else if (choice === "font-color"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
//   // }
//
// //functions that do things // event listener functions --> separate function (?)
//
//
// ///////////////////////////////FUNCTIONS//////////////////////////////////////
// //put helper functions into another function / as methods / as a return value in an object //AKA as methods
// function cutText(text){
//   return text.split(",")[0].replace(/["]+/g,"");
// }
//
// function getCssValue(e, input){
//   var elementOver = e.target;
//   var cssObj = window.getComputedStyle(elementOver);
//   return cssObj[input]
// }
//
// function changeText(id, value){
//   document.getElementById(String(id)).textContent = value;
// }
//
// // Improvements:
// // More buttons with more features...
// // better popup UI / css
// // click browser_action button to turn on/off
// //
//content.js
//Make it easier to add more...

chrome.runtime.onMessage.addListener(function(message){
  var choice = message.userChoice;
  if (choice === "fontFamily"){
    onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
  }
  else if (choice === "fontSize"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
  }
  else if (choice === "color"){
    onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
  }
})
//clean this up, maybe make a function that does all of this --> init, that can be called to instantiate the styling...
// function createDisplayBox(){
  var display_box = document.createElement("div");
  display_box.setAttribute("id", "kttest");
  display_box.setAttribute("style",
  `position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-family: sans serif;
  font-size: 25px;
  width: auto`);
  document.body.appendChild(display_box);
  console.log("display box created")
// }

// var testdiv = document.createElement("div");
// testdiv.setAttribute("id", "kttest");
// testdiv.style.position = "absolute";
// testdiv.style.backgroundColor = "black";
// testdiv.style.color = "white";
// testdiv.style.padding = "5px";
// testdiv.style.borderRadius = "5px";
// testdiv.style.fontFamily = "sans serif";
// testdiv.style.fontSize = "25px";
// testdiv.style.width = "auto";
// document.body.appendChild(testdiv);

//functions that do things // event listener functions --> separate function (?)
onmousemove = function(event){
  var box = document.getElementById("kttest");
  box.style.left = event.pageX + "px";
  box.style.top = event.pageY + "px";
}

///////////////////////////////FUNCTIONS//////////////////////////////////////
//put helper functions into another function / as methods / as a return value in an object //AKA as methods
function cutText(text){
  return text.split(",")[0].replace(/["]+/g,"");
}

function getCssValue(e, input){
  var elementOver = e.target;
  var cssObj = window.getComputedStyle(elementOver);

  return cssObj[input]
}

function changeText(id, value){
  document.getElementById(String(id)).textContent = value;
}

// Improvements:
// More buttons with more features...
// better popup UI / css
// click browser_action button to turn on/off
//

//
// //////////////////
// function controller(){
//   function messageListener(){
//   var test = chrome.runtime.onMessage.addListener(function(message){
//       var choice = message.userChoice;
//       return {choice: choice}
//     })
//     console.log(test.choice)
//   }
//   return {
//     init: function(){
//       createDisplayBox();
//       browserListeners(messageListener.choice);
//       messageListener();
//     }
//   }
// }
//
// controller.init();
//
//

//
//
// function browserListeners(choice){
//   document.addEventListener('mousemove', function(event){
//     var box = document.getElementById("kttest");
//     box.style.left = event.pageX + "px";
//     box.style.top = event.pageY + "px";
//     console.log("test");
//   })
//
//   // onmousemove = function(event){
//   //   var box = document.getElementById("kttest");
//   //   box.style.left = event.pageX + "px";
//   //   box.style.top = event.pageY + "px";
//   //   console.log("test");
//   // }
//   onmouseover = function(event){changeText("kttest", getCssValue(event, choice))};
//
//   console.log("browserListeners")
// }
//
//   // if (choice === "font-family")
//   //   onmouseover = function(event){changeText("kttest", cutText(getCssValue(event, "fontFamily")));}
//   // }
//   // else if (choice === "font-size"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "fontSize"));}
//   // }
//   // else if (choice === "font-color"){
//   //   onmouseover = function(event){changeText("kttest", getCssValue(event, "color"));}
//   // }
//
// //functions that do things // event listener functions --> separate function (?)
//
//
// ///////////////////////////////FUNCTIONS//////////////////////////////////////
// //put helper functions into another function / as methods / as a return value in an object //AKA as methods
// function cutText(text){
//   return text.split(",")[0].replace(/["]+/g,"");
// }
//
// function getCssValue(e, input){
//   var elementOver = e.target;
//   var cssObj = window.getComputedStyle(elementOver);
//   return cssObj[input]
// }
//
// function changeText(id, value){
//   document.getElementById(String(id)).textContent = value;
// }
//
// // Improvements:
// // More buttons with more features...
// // better popup UI / css
// // click browser_action button to turn on/off
// //
