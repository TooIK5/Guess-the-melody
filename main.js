
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
    wrapper.insertBefore(button, buttonsBlock); //(element, nextSibling)
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
    checkAnswer(target);
}

function checkAnswer(target) {
    if (target.classList.contains('Buttons'))//Чтобы не реагировать на нажатия на див
    {
        var key = target.innerHTML;
        if (songs[key] !== 0) {
        target.classList.add("trueAnswer")
    } else {
        target.classList.add("falseAnswer");
        //buttons[n].classList.add("trueAnswer");
        }
    }
}

function toggleIcon(controlButton) {
    audio.paused ? controlButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>' : controlButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function togglePlay() {
    audio.paused ? audio.play() : audio.pause();
}

function addListener() {
    let controlButton = document.querySelector('#controlButton');
        controlButton.addEventListener('click', () => {
        togglePlay(audio);
        toggleIcon(controlButton, audio);
    }, false);
}

function addNextSongs() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = keys[high];
        high += 1;
    }
    songChange();
}

function songChange() {
    audio = new Audio(songs[keys[n]]);
    n = answers[index];
    index += 1;
}

function  stop() {
    audio.pause();
}

function removeClass() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('trueAnswer', 'falseAnswer');
    }
}

const songs = {
    'Rammstein - deutschland': 0,
    'Heavydirtysoul - Twenty One Pilots': 'Source/Twenty one - Heavydirtysoul.mp3',
    'Andre Gagnon - Comme Au Premier Jour': 0,
    'Metallica - nothing else metter': 0,

    'Marilyn Manson - Tourniquet': 0,
    'Rammstein - RADIO': 0,
    'Slipknot - The Blister Exists': 0,
    'Marilyn Manson - Treats Of Romanse': 'Source/Marilyn Manson – Threats of Romance.mp3',

    'Sam Roberts Band - Chasing the Light': 0,
    'Yann Tiersen - Penn ar Lann': 0,
    'Barns Courtney - "99"': 0,
    'Concorde - Just Kiss Her': 'Source/Concorde - Just Kiss Her.mp3'
};

const keys = Object.keys(songs),
      answers = [7, 11];
var n = 7,
    audio = new Audio(songs['Heavydirtysoul - Twenty One Pilots']),
    high = 4,
    index = 1;

const wrapper = document.querySelector('.wrapper'),
    buttonsBlock = document.querySelector('#ButtonsBlock');
    addStartButton();
    installButton();
const startButton = document.querySelector('.startButton'),
      buttons = document.querySelectorAll('.Buttons');

buttonsBlock.addEventListener('click', (e) => {
    itemDone(e);
    setTimeout(stop, 3500);
    setTimeout(addNextSongs, 4000);
    setTimeout(removeClass, 4000);
}, false);

startButton.addEventListener('click', () => {
    removeButton(startButton);
    addControlButton();
    addListener();
    isShow(buttonsBlock,'block');
    for (let i = 0; i < buttons.length; i++) {
        isShow(buttons[i],'block');
    }
}, false);


