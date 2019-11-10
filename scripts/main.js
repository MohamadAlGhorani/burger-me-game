var scoreElement = document.getElementById('score');
var score = 0;
var knopElement = document.getElementById('knop');
var imgElement = document.getElementById('persongame');
var situatie = '0';
var timerElement = document.getElementById('timer');
var sas;
var img = 1;
var wonElement = document.getElementById('won');
var biteElement = document.getElementById('bite');
var boomElement = document.getElementById('boom');
var burpingElement = document.getElementById('burping');
var newImage = 1;

//Timer aftellen naar 0
function timer() {
    if (situatie == '0') {
        timerElement.textContent = 'Time: 3';
        situatie = '1';
        return situatie;
    } else if (situatie == '1') {
        timerElement.textContent = 'Time: 2';
        situatie = '2';
        return situatie;
    } else if (situatie == '2') {
        timerElement.textContent = 'Time: 1';
        situatie = '3';
        return situatie;
    } else if (situatie == '3') {
        timerElement.textContent = 'Time: 0';
        imgElement.src = 'images/sad.png';
        burpingElement.play();
        knopElement.removeEventListener('click', imgVeranderen);
        knopElement.removeEventListener('click', scoreOmhoog);
        knopElement.removeEventListener('click', geluidOpKlik);
        situatie = '4';
        return situatie;
    }
}

//timer laten elke 590 millesconden de nummer veranderen tot 0
function timerBeginnen() {
    sas = setInterval(timer, 590);
}

//event om de function te laten werken wanneer de pagina geload wordt
window.addEventListener('load', timerBeginnen);

//function om de score omhoog te laten gaan
function scoreOmhoog() {
    score = score + 1;
    scoreElement.textContent = 'Score: ' + score;
}

// function om de plaadje van de persoon te veranderen
function imgVeranderen() {
    if (newImage < 20) {
        newImage = newImage + 1;
        imgElement.src = 'images/' + newImage + '.svg';
        console.log(imgElement.src)
    } else if (newImage == 20) {
        imgElement.src = 'images/20.svg';
        knopElement.removeEventListener('click', scoreOmhoog);
        clearInterval(sas);
        boomElement.play();
        knopElement.removeEventListener('click', geluidOpKlik);
        wonElement.textContent = 'YOU WON';
    }
}

//event om de score functie te laten werken wanneer op de knop gedrukt wordt
knopElement.addEventListener('click', scoreOmhoog);

//event om de plaadje te veranderen wanneer op de knp gedrukt wordt
knopElement.addEventListener('click', imgVeranderen);

// geluid aangaan op elke keer dat je op de knop klikt
function geluidOpKlik() {
    biteElement.play();
}
knopElement.addEventListener('click', geluidOpKlik);


//array en loop om een lijst van de levels te maken
var yourLevel = ['Good if 1 sec over', 'Perfect if 2 sec over', 'Fantastic if 3 sec over'];
var LevelsElement = document.getElementById('levels');
var h2 = document.createElement('h2');
h2.innerHTML = ('levels');
LevelsElement.appendChild(h2);
var ul = document.createElement('ul');
LevelsElement.appendChild(ul);
for (var i = 0; i < yourLevel.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = (yourLevel[i]);
    li.className = 'levels';
    ul.appendChild(li);
}