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

function installButton() {
    isShow('block');
    addMelodyButton('Rammstein - deutschland');
    addMelodyButton('Heavydirtysoul - Twenty One Pilots');
    addMelodyButton('Andre Gagnon - Comme Au Premier Jour');
    addMelodyButton('Реанимация - Гражданская оборона');
}

function removeButton(name) {
    wrapper.removeChild(name);
}

function setAttribute() {
    let link = document.querySelectorAll('.Buttons');
    link.item(0).setAttribute('data-value', true);
    link.item(1).setAttribute('data-value', false);
    link.item(2).setAttribute('data-value', false);
    link.item(3).setAttribute('data-value', false);
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
    console.log(target);
}

var wrapper = document.querySelector('.wrapper'),
    buttonsBlock = document.querySelector('#ButtonsBlock');
addStartButton();
var startButton = document.querySelector('.startButton');

buttonsBlock.addEventListener('click', (e) => {
    itemDone(e)
}, false);

startButton.addEventListener('click', () => {
    installButton();
    removeButton(startButton);
    addControlButton();
    setAttribute();
}, false);



