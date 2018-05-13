(function user_choice(){
  let buttons = document.querySelectorAll('.ktichbtn')
  buttons.forEach(item => {item.addEventListener('click', activate);});

  function activate(event){
    let buttons = document.querySelectorAll('.ktichbtn')
    let chosenId = event.target.attributes.id.nodeValue;
    buttons.forEach(item => {item.classList.remove('active');})
    document.getElementById(chosenId).classList.add('active');

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {userChoice: chosenId});
    })
  }
})();
