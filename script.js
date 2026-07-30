// ----------------------------
// Loader
// ----------------------------

window.onload = function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},3000);

};

// ----------------------------
// Typing Effect
// ----------------------------

const message =
"Dear Khushu ❤️";

let i = 0;

function typeWriter(){

if(i < message.length){

document.getElementById("typing").innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,120);

}

}

setTimeout(typeWriter,3200);

// ----------------------------
// Floating Hearts
// ----------------------------

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*35)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,250);

// ----------------------------
// Button Animation
// ----------------------------

const btn=document.getElementById("enter");

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

// ----------------------------
// Button Click
// ----------------------------

btn.addEventListener("click",()=>{

const next=document.getElementById("love");

if(next){

next.scrollIntoView({

behavior:"smooth"

});

}

});

// ----------------------------
// Console Message
// ----------------------------

console.log("❤️ Website Made With Love By Aditya ❤️");
// Continue Button

const nextBtn = document.getElementById("nextBtn");

if(nextBtn){

nextBtn.addEventListener("click",()=>{

const gallery=document.getElementById("gallery");

if(gallery){

gallery.scrollIntoView({

behavior:"smooth"

});

}

});

}
