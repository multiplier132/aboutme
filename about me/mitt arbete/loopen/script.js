// play button + now playing

let nowplaying = document.querySelector("#now-playing");

function updateNowPlaying() {
  nowplaying.innerText = "Nu spelas";
}

updateNowPlaying();
let button = document.getElementsByClassName("Play.button");
let btn = document.querySelectorAll("play-button");

let play1 = document.querySelector("#play-1");
document.getElementById("play-1").addEventListener("click", function () {
  if (play1.innerText === "spela") {
    play1.innerText = "paus";
    nowplaying.innerText = "enter sandman";
    play1.classList.remove("playing");
  } else {
    play1.innerText = "spela";
    nowplaying.innerText = "nu spelas";
    play1.classList.add("playing");
  }
});
let play2 = document.querySelector("#play-2");
document.getElementById("play-2").addEventListener("click", function () {
  if (play2.innerText === "spela") {
    play2.innerText = "paus";
    nowplaying.innerText = "Levitating";
    play2.classList.remove("playing");
  } else {
    play2.innerText = "spela";
    nowplaying.innerText = "nu spelas";
    play2.classList.add("playing");
  }
});
let play3 = document.querySelector("#play-3");
document.getElementById("play-3").addEventListener("click", function () {
  if (play3.innerText === "spela") {
    play3.innerText = "paus";
    nowplaying.innerText =
      "I'm Like a Lawyer with the Way I'm Always Trying to Get You Off (Me & You)";
    play3.classList.remove("playing");
  } else {
    play3.innerText = "spela";
    nowplaying.innerText = "nu spelas";
    play3.classList.add("playing");
  }
});
let play4 = document.querySelector("#play-4");
document.getElementById("play-4").addEventListener("click", function () {
  if (play4.innerText === "spela") {
    play4.innerText = "paus";
    nowplaying.innerText = "HUMBLE";
    play4.classList.remove("playing");
  } else {
    play4.innerText = "spela";
    nowplaying.innerText = "nu spelas";
    play4.classList.add("playing");
  }
});

//hjärta

let likecountinner = Number(document.querySelector("#liked-count").innerText);
let likecount = document.querySelector("#liked-count");

let like1 = document.querySelector("#like-1");
document.getElementById("like-1").addEventListener("click", function () {
  let isliked = like1.classList.contains("liked");
  if (isliked) {
    console.log("i am here")
    like1.classList.remove("liked");
     if (likecountinner > 0) {
      likecountinner--; // minska värdet
      likecount.innerText = likecountinner;
    }

  } else {
    // lägg till like
    like1.classList.add("liked");

    likecountinner++; // öka värdet
    likecount.innerText = likecountinner;
  }
});

let like2 = document.querySelector("#like-2");
document.getElementById("like-2").addEventListener("click", function () {
  let l2 = like2.classList.contains("liked");

  if (l2 === true) {
    like2.classList.remove("liked");
  } else {
    like2.classList.add("liked");
  }
});

let like3 = document.querySelector("#like-3");
document.getElementById("like-3").addEventListener("click", function () {
  let l3 = like3.classList.contains("liked");

  if (l3 === true) {
    like3.classList.remove("liked");
  } else {
    like3.classList.add("liked");
  }
});

let like4 = document.querySelector("#like-4");
document.getElementById("like-4").addEventListener("click", function () {
  let l4 = like4.classList.contains("liked");

  if (l4 === true) {
    like4.classList.remove("liked");
  } else {
    like4.classList.add("liked");
  }
});

/*let likec = document.querySelector("#liked-count")
document.querySelector("#liked-count").addEventListener("click", function () {
    console.log("likec")
    if (like1 === true){
        likec += 1
        console.log(likec)
    } else {
        likec -= 1
    }
});*/
