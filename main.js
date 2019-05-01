
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
    for(let i = 0; i < high; i++) {
        addMelodyButton(songs[i]);
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
    let n = correctAnswers[index];
    if (target.classList.contains('Buttons'))//Чтобы не реагировать на нажатия на див
    {
        if (target.innerHTML === songs[n]) {
        target.classList.add("trueAnswer")
    } else {
        target.classList.add("falseAnswer");
        buttons[n].classList.add("trueAnswer");
        }
    }
}

function toggleIcon(controlButton, audio) {
    audio.paused ? controlButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>' : controlButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function togglePlay(audio) {
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
        buttons[i].textContent = songs[high];
        high += 1;
    }
    songChange();
}

function songChange() {
    index += 1;
    audio = new  Audio(songsSurce[n]);
}

function  stop() {
    audio.pause();
}

function removeClass() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('trueAnswer', 'falseAnswer');
    }
}

const songs = ['Rammstein - deutschland',
                'Heavydirtysoul - Twenty One Pilots',
                'Andre Gagnon - Comme Au Premier Jour',
                'Реанимация - Гражданская оборона',

                'Marilyn Manson - Tourniquet',
                'Rammstein - RADIO',
                'Slipknot - The Blister Exists',
                'Marilyn Manson - Treats Of Romanse',

                'Sam Roberts Band - Chasing the Light',
                'Yann Tiersen - Penn ar Lann',
                'Barns Courtney - "99"',
                'Concorde - Just Kiss Her'
];

const songsSurce = ['Source/Twenty one - Heavydirtysoul.mp3',
                    'Source/Marilyn Manson – Threats of Romance.mp3',
    '','',''];

const correctAnswers = [1,4,9,14,18];
var high = 4,
    index = 0,
    n = 0,
    audio = new Audio(songsSurce[n]);
const wrapper = document.querySelector('.wrapper'),
    buttonsBlock = document.querySelector('#ButtonsBlock');
    addStartButton();
    installButton(high);
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


