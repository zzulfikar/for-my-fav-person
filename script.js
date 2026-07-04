const openBtn = document.getElementById("openBtn");

const welcome = document.getElementById("welcome");

const mainPage = document.getElementById("mainPage");

if(openBtn){

openBtn.addEventListener("click", () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        mainPage.style.display = "block";

    }, 500);

});

}


// ==========================
// Fade Animation Saat Scroll
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

});

document.querySelectorAll(".fade-in").forEach(section => {

    observer.observe(section);

});

const envelope = document.getElementById("envelope");

const letterPaper = document.getElementById("letterPaper");

if(envelope){

envelope.addEventListener("click",()=>{
    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.style.display="none";

        letterPaper.classList.remove("hidden");

        letterPaper.classList.add("show-letter");

    },600);    
    music.play()

    .then(()=>{

    disk.classList.add("spin");

    })

    .catch(err=>{

        console.error(err);})

    playBtn.textContent="⏸ Pause";


});
}



const music = document.getElementById("musicPlayer");

const playBtn = document.getElementById("playBtn");

const disk = document.getElementById("disk");

const progressBar = document.getElementById("progressBar");

const currentTime = document.getElementById("currentTime");

const duration = document.getElementById("duration");

if(playBtn){

playBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        disk.classList.add("spin");

        playBtn.textContent="⏸ Pause";

    }

    else{

        music.pause();

        disk.classList.remove("spin");

        playBtn.textContent="▶ Play Music";

    }

});
}

const sakuraContainer = document.getElementById("sakura-container");

function createSakura(){

    const sakura = document.createElement("div");

    sakura.classList.add("sakura");

    sakura.innerHTML = "🌸";

    sakura.style.left = Math.random()*100+"vw";

    sakura.style.animationDuration =
    (5+Math.random()*5)+"s";

    sakura.style.fontSize =
    (16+Math.random()*18)+"px";

    if(!sakuraContainer) return;

    sakuraContainer.appendChild(sakura);

    setTimeout(()=>{

        sakura.remove();

    },10000);

}

setInterval(createSakura,700);

const topBtn = document.getElementById("topBtn");

if(topBtn){

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
}

// ===========================
// LOVE COUNTER
// ===========================

const counter = document.getElementById("loveCounter");

// Ganti tanggal ini sesuai awal cerita kalian
const startDate = new Date("2026-05-23T20:39:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff / (1000*60*60)) % 24);

    const minutes = Math.floor((diff / (1000*60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    counter.innerHTML = `
    ${days} Days<br>
    ${hours} Hours<br>
    ${minutes} Minutes<br>
    ${seconds} Seconds
    `;

}

updateCounter();

setInterval(updateCounter,1000);

const heroTitle = document.querySelector(".hero-text h2");

const text = "You are my safest place. 🛐";

let index = 0;

if(heroTitle){

    heroTitle.textContent = "";

}

function typeWriter(){

    if(index < text.length){

        heroTitle.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}

window.addEventListener("load",typeWriter);



document.addEventListener("mousemove",(e)=>{

    const sparkle=document.createElement("span");

    sparkle.classList.add("sparkle");

    sparkle.style.left=e.pageX+"px";

    sparkle.style.top=e.pageY+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },600);

});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

if(music){

music.addEventListener("loadedmetadata",()=>{

    progressBar.max = Math.floor(music.duration);

    duration.innerHTML = formatTime(music.duration);

});
}

if(music){

music.addEventListener("timeupdate",()=>{

    progressBar.value = Math.floor(music.currentTime);

    currentTime.innerHTML = formatTime(music.currentTime);

});
}

if(progressBar){

progressBar.addEventListener("input",()=>{
    music.currentTime = progressBar.value;
});
}

if(music){

music.addEventListener("ended",()=>{

    disk.classList.remove("spin");

    playBtn.textContent="▶ Play Music";

    progressBar.value = 0;

});
}

function formatTime(time){

    const minute = Math.floor(time/60);

    const second = Math.floor(time%60);

    return `${minute}:${second < 10 ? "0"+second : second}`;

}

const secretBtn=document.getElementById("secretBtn");

const secretMessage=document.getElementById("secretMessage");

if(secretBtn){

secretBtn.addEventListener("click",()=>{

    secretMessage.classList.remove("hidden");

    secretBtn.style.display="none";

    for(let i=0;i<40;i++){

        setTimeout(createHeart,i*100);

    }

});

}

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.classList.add("heart");

    heart.style.left=Math.random()*100+"vw";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

const restart=document.getElementById("restartBtn");

if(restart){

restart.addEventListener("click",()=>{

    window.scrollTo({

    top:0,

    behavior:"smooth"

    });

});
}
