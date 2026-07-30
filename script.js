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

"1.jpg",

"2.jpg",

"3.jpg",

"4.jpg",

"5.jpg",

"6.jpg",

"7.jpg",

"8.jpg",

"10.jpg"

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
/* ---------------- */
/* REASONS */
/* ---------------- */

function reveal(card){

const text = card.querySelector("p");

if(text.style.display==="block") return;

text.style.display="block";

card.firstChild.textContent="❤️";

card.style.background="rgba(255,255,255,.3)";

}
const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {
    musicBtn.onclick = () => {
        document.getElementById("final").scrollIntoView({
            behavior: "smooth"
        });
    };
}
/* Final 
/* ---------------- */
/* FINAL */
/* ---------------- */

for(let i=0;i<250;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.getElementById("stars").appendChild(star);

}

document.getElementById("celebrate").onclick=function(){

// Create 350 hearts

for(let i=0;i<350;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💕","💖","🌹","✨"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*30)+"px";

heart.style.animationDuration=(3+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),7000);

}

// Screen fades

document.body.style.transition="2s";

document.body.style.background="black";

// Final Message

setTimeout(()=>{

document.body.innerHTML=`

<div style="height:100vh;

display:flex;

justify-content:center;

align-items:center;

flex-direction:column;

color:white;

text-align:center;

padding:20px;

font-family:Poppins;">

<h1 style="font-size:70px;

font-family:'Great Vibes',cursive;">

I Love You

</h1>

<h2>Khushu ❤️</h2>

<p style="font-size:24px;

max-width:700px;

line-height:2;">

You are the most beautiful chapter of my life.

Every heartbeat,

every dream,

every tomorrow...

has your name written on it.

Happy Girlfriend's Day.

Forever Yours,

<b>Aditya ❤️</b>

</p>

</div>

`;

},2500);

}
