var wrapper = document.querySelector('.wrapper'),
    buttonsBlock = document.querySelector('#ButtonsBlock');

function creatorStartButton() {
    let startButton = document.createElement('button'),
        textInBut = document.createTextNode('Start the Game!');
        startButton.appendChild(textInBut);
        startButton.className = 'startButton';
        wrapper.insertBefore(startButton, buttonsBlock); //(element, nextSibling)
        HiderForButtonsBlock('none');
}

function creatorControlButton() {
    let button = document.createElement('button');
        button.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        wrapper.insertBefore(button, buttonsBlock); //(element, nextSibling)
        button.setAttribute('id', 'controlButton');
}

function HiderForButtonsBlock(property) {
    buttonsBlock.style.display = property;
}

creatorStartButton();

function ButtonCreator(textInButton) {
    let ButtonName = document.createElement("button"),
        textNodeName = document.createTextNode(textInButton);
    ButtonName.appendChild(textNodeName);
    buttonsBlock.appendChild(ButtonName);
    ButtonName.className = 'Buttons';
}

function buttonInstaller() {
    HiderForButtonsBlock('block');
    ButtonCreator( 'Rammstein - deutschland');
    ButtonCreator( 'Heavydirtysoul - Twenty One Pilots');
    ButtonCreator( 'Andre Gagnon - Comme Au Premier Jour');
    ButtonCreator( 'Реанимация - Гражданская оборона');
}

function removerButtons(name) {
    wrapper.removeChild(name);
}

var startButton = document.querySelector('.startButton');
    startButton.addEventListener('click',  () => {
        buttonInstaller();
        removerButtons(startButton);
        creatorControlButton();
        attributeSetter();
    }, false);

function attributeSetter() {
    let link = document.querySelectorAll('.Buttons');
    link.item(0).setAttribute('data-value', true);
    link.item(1).setAttribute('data-value', false);
    link.item(2).setAttribute('data-value', false);
    link.item(3).setAttribute('data-value', false);
    //alert(link.item(3).dataset.value); //Альтернатива getAttribute
}

