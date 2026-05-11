// =====================================
// MULTIPLE BACKGROUND VIDEO SLIDER
// =====================================

const bgVideos =
document.querySelectorAll('.bg-video');

let currentVideo = 0;

function switchVideo(){

    if(bgVideos.length <= 1){
        return;
    }

    bgVideos[currentVideo]
    .classList.remove('active');

    currentVideo++;

    if(currentVideo >= bgVideos.length){
        currentVideo = 0;
    }

    bgVideos[currentVideo]
    .classList.add('active');

}

setInterval(switchVideo, 8000);


// =====================================
// CINEMATIC VIDEO SPEED
// =====================================

bgVideos.forEach((video)=>{

    video.playbackRate = 0.85;

});


// =====================================
// SCROLL REVEAL EFFECT
// =====================================

const elements = document.querySelectorAll(
'.slide, .video-card, .quote-section'
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

});

elements.forEach((el)=>{

    el.style.opacity = "0";

    el.style.transform =
    "translateY(80px)";

    el.style.transition =
    "1s ease";

    observer.observe(el);

});


// =====================================
// PREMIUM MUSIC SYSTEM
// =====================================

const music =
document.getElementById('bg-music');

const musicBtn =
document.getElementById('music-btn');

let isPlaying = false;


// AUTO PLAY AFTER FIRST CLICK

document.body.addEventListener('click', () => {

    if(!isPlaying){

        music.play();

        isPlaying = true;

        musicBtn.classList.add('playing');

    }

}, { once:true });


// MUSIC BUTTON CONTROL

musicBtn.addEventListener('click', () => {

    if(isPlaying){

        music.pause();

        isPlaying = false;

        musicBtn.classList.remove('playing');

    }

    else{

        music.play();

        isPlaying = true;

        musicBtn.classList.add('playing');

    }

});