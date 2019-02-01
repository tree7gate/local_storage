const clicker = document.querySelector(".clicker");
const counter = document.querySelector(".counter");
const saveStorage = document.querySelector(".saveStorage");
const clearStorage = document.querySelector(".clearStorage");
const reset = document.querySelector(".reset");
const storage = window.localStorage;

let mySave = {};

// load local storage on page load
function loadStorage(){
  if(storage.getItem('save')){
    mySave = JSON.parse(storage.getItem('save'));
    console.log(`Game Progress Loaded`);
    counter.textContent = mySave.count;
  } else {
    mySave.count = 0;
    counter.textContent = 0;
    console.log('Game Progress not Found');
  }
}

loadStorage();

// click events

clicker.addEventListener("click", function() {
  mySave.count++;
  counter.textContent = mySave.count;
});

saveStorage.addEventListener("click", function(){
  storage.setItem("save", JSON.stringify(mySave));
  console.log("Game Saved");
});

clearStorage.addEventListener("click", function(){
  storage.clear();
  console.log("Game Progressed Cleared!");
});

// clear the local storage and set mySave.count and display to 0
reset.addEventListener("click", function(){
  mySave.count = 0;
  counter.textContent = 0;
  storage.removeItem("save");
  console.log("Ready to start again!");
});
