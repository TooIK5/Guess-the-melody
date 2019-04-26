
function addStartButton() {
    let startButton = document.createElement('button'),
        textInBut = document.createTextNode('Start the Game!');
    startButton.appendChild(textInBut);
    startButton.className = 'startButton';
    wrapper.insertBefore(startButton, buttonsBlock); //(element, nextSibling)
    isShow('none');
}

function addControlButton() {
    let button = document.createElement('button');
    button.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    wrapper.insertBefore(button, buttonsBlock); //(element, nextSibling)
    button.setAttribute('id', 'controlButton');
}

function isShow(property) {
    buttonsBlock.style.display = property;
}

function addMelodyButton(textInButton) {
    let ButtonName = document.createElement("button"),
        textNodeName = document.createTextNode(textInButton);
    ButtonName.appendChild(textNodeName);
    buttonsBlock.appendChild(ButtonName);
    ButtonName.className = 'Buttons';
}

function installButton(songs) {
    isShow('block');
    for(let i = 0; i < songs.length; i++) {
        addMelodyButton(songs[i]);
    }
}

function removeButton(name) {
    wrapper.removeChild(name);
}

function getTarget(e) {
    if (!e) {
        e = window.event; // e = событие объекта window
    }
    return e.target || e.srcElement; //новые браузеры или не поддерживающие свойство event
}

function itemDone(e) {
    let target;
    target = getTarget(e);
    checkAnswer(target, songs, 1);
}

function checkAnswer(target, songs, i) {
   if (target.innerHTML === songs[i]) {
        console.log('true')
   } else {
    console.log('false')
   }
}

function togglePlay(audio) {
    audio.paused ? audio.play() : audio.pause();
}

function addListener() {
    let controlButton = document.querySelector('#controlButton');
    controlButton.addEventListener('click', () => {
        togglePlay(audio);
    }, false);
}

var songs = ['Rammstein - deutschland','Heavydirtysoul - Twenty One Pilots',
                 'Andre Gagnon - Comme Au Premier Jour','Реанимация - Гражданская оборона'];
var songsSurce = ['https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p8/d43d9d8c55b66a.mp3?extra=B6NX5XKfPqBfDZI-hgTlTK47veyHdqyYT48OrQ-jMR6rwYPwQMNfxw6_XJe7My41-sJwUbMnITry9LwcaMZVM7eIIA0asmUvTNubJYCk7z2MK261ZyxEoPUmv9V3FsLz10V7gnaBIX_b9mkPl-0Ozn4aSg',
    '','','',''];

var audio = new Audio(songsSurce[0]);

var wrapper = document.querySelector('.wrapper'),
    buttonsBlock = document.querySelector('#ButtonsBlock');
addStartButton();
var startButton = document.querySelector('.startButton');

buttonsBlock.addEventListener('click', (e) => {
    itemDone(e);
}, false);

startButton.addEventListener('click', () => {
    installButton(songs);
    removeButton(startButton);
    addControlButton();
    addListener();
}, false);


