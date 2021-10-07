const botaoIniciar = document.getElementById('iniciar-jogo')
const janelamodal = document.getElementById('janela-modal')
let botaoPlayAgain = document.getElementById('jogarnovamente')
let modalVitoriaScooby = document.getElementById('modal-vitoria-scooby')
let modalVitoriaSalsicha = document.getElementById('modal-vitoria-salsicha')
let count = 0
let cell = 0

const player1 = document.createElement('div');
player1.classList.add('player1')

const player2 = document.createElement('div');
player2.classList.add('player2')


let arrayElementos = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]

let mainGame = document.getElementById('jogo')
let jogo = document.createElement('div')
jogo.setAttribute('id', 'jogoClass')
mainGame.appendChild(jogo)

let coluna = document.createElement('div');
let linha = document.createElement('div');

function gerandoMapa() {
    for (let i = 0; i < 7; i++) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna')
        coluna.setAttribute('id', 'coluna' + i)
        jogo.appendChild(coluna)
        for (let j = 0; j < 6; j++) {

            let linha = document.createElement('div')
            linha.classList.add('linha')
            coluna.appendChild(linha)
        }
    }
}

gerandoMapa()

const clickgame = document.getElementById('jogoClass')
clickgame.addEventListener("click", diskFall);

let resposta = document.getElementById('informacao')
resposta.innerText = 'Regras: cada jogador tenta colocar quatro de suas pedras em fila, seja na horizontal, vertical ou diagonal, bloqueando seu adversário para que ele não consiga fazer o mesmo. O player1 Começa!';

function audioexterno() {
    let audio = document.getElementById('abertura');
    audio.volume = 0.1
    audio.play()
}

audioexterno()

botaoIniciar.addEventListener('click', function () {
    janelamodal.style.visibility = 'hidden';

})


function draw() {
    let marks = 0
    for (let i = 0; i < arrayElementos.length; i++) {
        if (arrayElementos[i][0] !== 0) {
            marks++
        }
    }
    if (marks === 7) {

        return console.log('empate')
    }
}


function diskFall(event) {
    let colunaInteira = event.path[1];
    let colunaTamanho = colunaInteira.children.length;
    let elementoY = colunaTamanho - 1;
    let elementoX = colunaInteira.id
    cell = event.path[1].children[elementoY];

    while (cell.childElementCount === 1) {
        elementoY--
        if (elementoY >= 0){
            cell = event.path[1].children[elementoY]
        }
    }

    if (cell.childElementCount === 0 && colunaInteira.className === 'coluna') {
        if (count % 2 === 0) {
            const player1 = document.createElement('div');
            player1.classList.add('player1')
            cell.appendChild(player1);
            arrayElementos[elementoX[6]][elementoY] = 1
            count++
        } else if (count % 2 === 1) {
            const player2 = document.createElement('div');
            player2.classList.add('player2')
            cell.appendChild(player2);
            arrayElementos[elementoX[6]][elementoY] = 2
            count++
        }
    }
    condicaoVitoria()
    draw()
}


const edgeX = arrayElementos[0].length - 3;
const edgeY = arrayElementos.length - 3;


function condicaoVitoria() {
    for (let y = 0; y < arrayElementos.length; y++) {
        for (let x = 0; x < edgeX; x++) {
            let cell = arrayElementos[y][x];
            if (cell === 1) {
                if (cell === arrayElementos[y][x + 1] && cell === arrayElementos[y][x + 2] && cell === arrayElementos[y][x + 3]) {
                    modalVitoriaSalsicha.style.visibility = 'inherit'
                }
            } else if (cell === 2) {
                if (cell === arrayElementos[y][x + 1] && cell === arrayElementos[y][x + 2] && cell === arrayElementos[y][x + 3]) {
                    modalVitoriaScooby.style.visibility = 'inherit'
                }
            }
        }
    }

    for (let y = 0; y < edgeY; y++) {
        for (let x = 0; x < arrayElementos[0].length; x++) {
            cell = arrayElementos[y][x];
            if (cell === 1) {
                if (cell === arrayElementos[y + 1][x] && cell === arrayElementos[y + 2][x] && cell === arrayElementos[y + 3][x]) {
                    modalVitoriaSalsicha.style.visibility = 'inherit'
                }
            } else if (cell === 2) {
                if (cell === arrayElementos[y + 1][x] && cell === arrayElementos[y + 2][x] && cell === arrayElementos[y + 3][x]) {
                    modalVitoriaScooby.style.visibility = 'inherit'
                }
            }
        }
    }

    for (let y = 0; y < edgeY; y++) {
        for (let x = 0; x < edgeX; x++) {
            cell = arrayElementos[y][x];
            if (cell === 1) {
                if (cell === arrayElementos[y + 1][x + 1] && cell === arrayElementos[y + 2][x + 2]) {
                    modalVitoriaSalsicha.style.visibility = 'inherit'
                }
            } else if (cell === 2) {
                if (cell === arrayElementos[y + 1][x + 1] && cell === arrayElementos[y + 2][x + 2]) {
                    modalVitoriaScooby.style.visibility = 'inherit'
                }
            }
        }
    }

    for (let y = 3; y < arrayElementos.length; y++) {
        for (let x = 0; x < edgeX; x++) {
            cell = arrayElementos[y][x];
            if (cell === 1) {
                if (cell === arrayElementos[y - 1][x + 1] && cell === arrayElementos[y - 2][x + 2]) {
                    modalVitoriaSalsicha.style.visibility = 'inherit'
                }
            } else if (cell === 2) {
                if (cell === arrayElementos[y - 1][x + 1] && cell === arrayElementos[y - 2][x + 2]) {
                    modalVitoriaScooby.style.visibility = 'inherit'
                }
            }
        }
    }
}



botaoPlayAgain.addEventListener('click', function () {
    document.location.reload()
})