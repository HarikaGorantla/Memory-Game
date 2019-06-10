"use strict";
// the below are the variables used to make static design of the game to dynamic design
var arr = [];
var cnt = 0;
var min = 0;
var sec = 0;
var stime = 0;
var allset = 0;
var stoptime;
var shufflevar;
// Created a list to holds all the cards
var Deckcards = [...document.querySelectorAll(".card")];
var stars = [...document.querySelectorAll(".fa", ".fa-star")];
var deck = document.querySelector(".deck");

shufflevar = shuffle(Deckcards);

// Shuffle function
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//I have  set up an  event listener for a card. If a card is clicked:then dsplays the card's symbol
for (var i in Deckcards) {
  Deckcards[i].addEventListener("click", flip);
}

for (var i in Deckcards) {
  Deckcards[i].addEventListener("click", function() {})
}
//  add the card to a *list* of "open" cards
for (var i = 0; i < 16; i++) {
  [].forEach.call(Deckcards, (lst) => {
    deck.appendChild(lst);
  });

}
//the below flip function is used for dispalying the card and also to disable if doesn't match
function flip() {
  if (stime == 0) {
    timerset();
    stime += 1;
  }
  arr.push(this);
  this.classList.add("open");
  this.classList.add("show");
  this.classList.add("disable");
  setTimeout(Samecards, 300);
}
//  if the list already has another card, check to see if the two cards match
function Samecards() {
  if (arr.length == 2) {
    console.log("length is 2");
    //increment the move counter
    cnt = cnt + 1;
    movecnt();
    // if the cards do match, lock the cards in the open position
    if (arr[0].children[0].className == arr[1].children[0].className) {
      allset += 1;
      if (allset == 8) {
        timerstop();
      }
      arr[0].classList.remove("open", "show");
      arr[0].classList.add("match");
      arr[1].classList.remove("open", "show");
      arr[1].classList.add("match");
      arr = [];
    }
    // if the cards do not match, remove the cards from the list and hide the card's symbol
    else {
      arr[0].classList.remove("open", "show", "disable");
      arr[0].classList.add("card");
      arr[1].classList.remove("open", "show", "disable");
      arr[1].classList.add("card");
      arr = [];
    }
  }

}
//to dispaly the stars
function movecnt() {
  document.querySelector(".moves").innerHTML = cnt;
  if (cnt == 12) {
    stars[2].classList.add("fa", "fa-star-o");
    stars[2].classList.remove("fa-star");
  }
  if (cnt > 12 && cnt == 16) {
    stars[1].classList.add("fa", "fa-star-o");
    stars[1].classList.remove("fa-star");
  }
  if (cnt > 16 && cnt == 20) {
    stars[0].classList.add("fa", "fa-star-o");
    stars[0].classList.remove("fa-star");
  }
}
//the below function is used to restart the game
function restartGame() {
  window.location.reload();



}
//this function is used to calculate the time for the Game and increment it for every second
function timerset() {
  stoptime = setInterval(function timesetter() {
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;
    sec += 1;
    if (sec == 60) {
      min += 1;
      sec = 0;
    }

  }, 1000);
}
//this function is used to stop the timer in the game
function timerstop() {
  clearInterval(stoptime);

  var modal = document.getElementById("popup");

  var span = document.getElementsByClassName("close")[0];
  document.querySelector(".time").innerHTML = min + "min" + (sec - 1) + "sec";
  modal.style.display = "block";
  //the below lines of code is used to display stars on the pop up window
  var popup_stars = [...document.querySelector(".starrating").children];
  console.log(stars);
  console.log(popup_stars);
  popup_stars[0].children[0].className = stars[0].className;
  popup_stars[1].children[0].className = stars[1].className;
  popup_stars[2].children[0].className = stars[2].className;
  document.querySelector(".final_moves").innerHTML = cnt;

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
