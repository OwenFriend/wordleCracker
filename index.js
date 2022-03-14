// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const wordList = new Array();
const grays = new Array();

readTextFile("./wordlist.json", function(text){
  wordList = JSON.parse(text);
  console.log(data);
});

var button = document.querySelector('button');
button.onclick = function() {
  if(document.getElementById("wordInput").value.length == 5 && document.getElementById("guessInput").value.length == 5){
    sort();
    wordList = wordList.filter(cleanList);
    document.getElementById("p1").innerHTML = wordList
  }
}

function sort(word, result){
  for(i = 0; i < 5; i++){
    if(result.split('').join(',')[i] == "X"){
      grays.push(word.split('').join(',')[i]);
    }
  }
}

function cleanList(word){
  var check = true;
  for(i = 0; i < grays.Length(); i++){
    if(word.includes(grays[i])){
      return false;
    }
  }
  return true;
}

function checkForLetter(string){

}

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

//usage: