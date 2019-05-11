
function addStartButton() {
    let startButton = document.createElement('button'),
        textInBut = document.createTextNode('Start the Game!');
    startButton.appendChild(textInBut);
    startButton.className = 'startButton';
    wrapper.insertBefore(startButton, buttonsBlock); //(element, nextSibling)
    buttonsBlock.style.display = 'none';
}

function addControlButton() {
    let button = document.createElement('button');
    button.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    wrapper.insertBefore(button, buttonsBlock);
    button.setAttribute('id', 'controlButton');
}

function isShow(element, prop) {
    element.style.display = prop;
}

function addMelodyButton(text) {
    let Button = document.createElement("button"),
        textNodeName = document.createTextNode(text);
    Button.appendChild(textNodeName);
    buttonsBlock.appendChild(Button);
    Button.className = 'Buttons';
    Button.style.display = 'none';
}

function installButton() {
    for(let i = 0; i < 4; i++) {
        addMelodyButton(keys[i]);
    }
}

function removeButton(name) {
    wrapper.removeChild(name);
}

function itemDone(e) {
    let target;
    target = e.target;
    if (target.classList.contains('Buttons')) {
        checkAnswer(target);
        removeBlur();
        removeElements();
        setTimeout(stop, 4500);
        setTimeout(removeClass, 5000);
        setTimeout(addNextSongs, 5000);
        setTimeout(makeVideoElement, 5000);
        setTimeout(changeVideo, 4500);
    }
}

function checkAnswer(target) {
    if (target.classList.contains('Buttons'))
    {
        let key = target.innerHTML;
        if (songs[key] !== 0) {
        target.classList.add("trueAnswer");
            guessedSongs += 1;
    } else {
        target.classList.add("falseAnswer");
        //buttons[n].classList.add("trueAnswer");
        }
    }
}

function toggleIcon(controlButton, videoElement) {
    videoElement.paused ? controlButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>' : controlButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function togglePlayVideo(videoElement) {
    videoElement.paused ? videoElement.play() : videoElement.pause();
}

function  removeBlur() {
    document.querySelector('.blur').classList.remove('blur');
    console.log('wasCalled');
}

function addListener() {
    let controlButton = document.querySelector('#controlButton');
        controlButton.addEventListener('click', () => {
            let videoElement = document.querySelector('.video');
            togglePlayVideo(videoElement);
        toggleIcon(controlButton,videoElement );
    }, false);
}

function addNextSongs() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = keys[high];
        high += 1;
    }
    audioChange();
}

function audioChange() {
    n = answers[index];
    index += 1;
}

function removeClass() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('trueAnswer', 'falseAnswer');
    }
}

function removeElements() {
    if (high === 20) {
        for (let i = 0; i < buttons.length; i++) {
            isShow(buttons[i],'none');
        }
        let b = document.querySelector('#controlButton');
        isShow(b, 'none');
        changeCounter();
    }
}

function changeCounter() {
    elCounter.textContent = 'Guessed melody:' + guessedSongs;
}

function makeVideoElement() {
    let video = document.createElement('video'),
        source = document.createElement("source"),
        key = videoObj[keysInVideo[VideoIndex]];
    source.setAttribute('src', key);
    video.setAttribute('autoplay', '');
    video.classList.add('video', 'blur');
    video.appendChild(source);
    viewContent.appendChild(video);
}

function changeVideo() {
    function remove() {
        document.querySelector('.video').remove();
    }
    remove();
    VideoIndex += 1;
}

changeBG = () => {
  wrapper.style.background = 'black'
};

const videoObj = {
    1 : 'Source/1.mp4',
    2 : 'Source/2.mp4',
    3 : 'Source/3.mp4',
    4 : 'Source/4.mp4',
    5 : 'Source/5.mp4'
};

const songs = {
    'Rammstein - deutschland': 0,
    'Heavydirtysoul - Twenty One Pilots': 1,
    'Andre Gagnon - Comme Au Premier Jour': 0,
    'Metallica - nothing else metter': 0,

    'Marilyn Manson - Tourniquet': 0,
    'Rammstein - RADIO': 0,
    'Slipknot - The Blister Exists': 1,
    'Marilyn Manson - Treats Of Romanse': 0,

    'Sam Roberts Band - Chasing the Light': 0,
    'Yann Tiersen - Penn ar Lann': 0,
    'Barns Courtney - "99"': 0,
    'Concorde - Just Kiss Her': 1,

    'Fruhling In Paris - Rammstein': 0,
    'New Karma - BRONCHO': 'true',
    'Walking To Winter - Mineral': 0,
    'The Nameless - Slipknot': 0,

    'Chikapunga - Wooden Constructions': 0,
    'Bullwinkle, Pt. I - The Centurians': 1,
    'wife - motorama': 0,
    'Cornucopia - Serj Tankian': 0
};

const keys = Object.keys(songs),
      keysInVideo = Object.keys(videoObj),
      answers = [7, 11,12,17],
      elCounter = document.querySelector('#counter');

var n = 7,
    VideoIndex = 0,
    high = 4,
    index = 1,
    guessedSongs = 0;

const wrapper = document.querySelector('.wrapper'),
      buttonsBlock = document.querySelector('#ButtonsBlock'),
      viewContent = document.querySelector('#viewContent');
    addStartButton();
    installButton();
const startButton = document.querySelector('.startButton'),
      buttons = document.querySelectorAll('.Buttons');

buttonsBlock.addEventListener('click', (e) => {
    itemDone(e);
}, false);

startButton.addEventListener('click', () => {
    removeButton(startButton);
    changeBG();
    addControlButton();
    addListener();
    makeVideoElement();
    isShow(buttonsBlock,'block');
    for (let i = 0; i < buttons.length; i++) {
        isShow(buttons[i],'block');
    }
}, false);


