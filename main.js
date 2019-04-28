
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
    checkAnswer(target,1);
}

/*function addNextSongs() {

}*/

function checkAnswer(target, i) {
    if (target.classList.contains('Buttons'))//Чтобы не реагировать на нажатия на див
    {
        if (target.innerHTML === songs[i]) {
        target.classList.add("trueAnswer")
    } else {
        target.classList.add("falseAnswer");
        buttons[i].classList.add("trueAnswer");
        }
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

const songs = ['Rammstein - deutschland',
                'Heavydirtysoul - Twenty One Pilots',
                'Andre Gagnon - Comme Au Premier Jour',
                'Реанимация - Гражданская оборона',
                'Marilyn Manson - Tourniquet',
                'Rammstein - RADIO',
                'Slipknot - The Blister Exists',
                'Marilyn Manson - Treats Of Romanse'];

const songsSurce = ['https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p8/1f04517eaf5929.mp3?extra=PwoOY4r0EeXprw3tg5IjKhCFOlxETaCsUJZhIrGZkM91Y7FqIBZmPQrpyqCjN-gfl-DzcWStzo6Hkoh_1fvsaR4LVGL9ojhyK9ZDJFmTPJ4RmemKsoILPFzq7F-54oiuL24rf02Mo8ed5D_0Jqv4oDnZ',
    '','','',''];

var audio = new Audio(songsSurce[0]);
const wrapper = document.querySelector('.wrapper'),
    buttonsBlock = document.querySelector('#ButtonsBlock');
    addStartButton();
    installButton();
const startButton = document.querySelector('.startButton'),
      buttons = document.querySelectorAll('.Buttons');

buttonsBlock.addEventListener('click', (e) => {
    itemDone(e);
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


