const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio();
let mappedKeys = [];

const playTune = (key) => {
    audio.src = `/src/tunes/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150);
};

const handleVolume = (ev) => {
   audio.volume = ev.target.value;
};

const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (ev) => {
    if(mappedKeys.includes(ev.key))
        playTune(ev.key);
});


keysCheck.addEventListener("click", showHideKeys)