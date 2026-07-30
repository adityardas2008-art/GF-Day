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
/* ---------------- */
/* PHOTO GALLERY */
/* ---------------- */

const photos=[

"images/1.jpg",

"images/2.jpg",

"images/3.jpg",

"images/4.jpg",

"images/5.jpg",

"images/6.jpg",

"images/7.jpg",

"images/8.jpg",

"images/9.jpg",

"images/10.jpg"

];

const captions=[

"Your smile is my favourite place ❤️",

"Every glance makes my heart skip a beat 🥹",

"Beauty has a name... Khushu 🌹",

"I could admire you forever 💖",

"You make ordinary moments magical ✨",

"Your eyes hold my whole world 👀❤️",

"My favourite picture... until the next one 📸",

"You are elegance, grace and happiness together 💞",

"I'll always be proud to call you mine 🫶",

"My forever favourite person ❤️"

];

let current=0;

const slide=document.getElementById("slideImage");

const caption=document.getElementById("caption");

const dots=document.querySelectorAll(".dot");

function showSlide(index){

slide.src=photos[index];

caption.innerHTML=captions[index];

dots.forEach(dot=>dot.classList.remove("active"));

dots[index].classList.add("active");

}

setInterval(()=>{

current++;

if(current>=photos.length){

current=0;

}

showSlide(current);

},3500);

showSlide(current);

/* Button */

const timerBtn=document.getElementById("timerBtn");

if(timerBtn){

timerBtn.onclick=()=>{

const timer=document.getElementById("timer");

if(timer){

timer.scrollIntoView({

behavior:"smooth"

});

}

};

}
/* -------------------- */
/* RELATIONSHIP TIMER */
/* -------------------- */

const startDate = new Date("June 21, 2023 00:00:00").getTime();

function updateTimer(){

const now = new Date().getTime();

const difference = now - startDate;

const days = Math.floor(difference / (1000*60*60*24));

const hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((difference%(1000*60*60))/(1000*60));

const seconds = Math.floor((difference%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateTimer,1000);

updateTimer();

/* Next Button */

const timelineBtn=document.getElementById("timelineBtn");

if(timelineBtn){

timelineBtn.onclick=()=>{

const timeline=document.getElementById("timeline");

if(timeline){

timeline.scrollIntoView({

behavior:"smooth"

});

}

};

}
/* Timeline Button */

const reasonBtn=document.getElementById("reasonBtn");

if(reasonBtn){

reasonBtn.onclick=()=>{

const next=document.getElementById("reasons");

if(next){

next.scrollIntoView({

behavior:"smooth"

});

}

};

}
