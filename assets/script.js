//Global Var
let count = 0;

// discos yasmin
const player1 = document.createElement('div');
player1.classList.add('player1')
document.body.appendChild(player1)

const player2 = document.createElement('div');
player2.classList.add('player2')
document.body.appendChild(player2)


// ---------------- GERANDO MAPA ------------------//

let arrayElementos = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
]

let arrayteste = []

let mainGame = document.getElementById('jogo')
let jogo = document.createElement('div')
jogo.setAttribute('class', 'jogoClass')
mainGame.appendChild(jogo)
let coluna = document.createElement('div');
let linha = document.createElement('div');
function gerandoMapa() {
    for (let i = 0; i < arrayElementos.length; i++) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna')
        jogo.appendChild(coluna)
        for (let j = 0; j < arrayElementos[i].length; j++) {

            let linha = document.createElement('div')
            linha.classList.add('linha')
            coluna.appendChild(linha)
        }
    }
}

gerandoMapa()
document.body.addEventListener("click",diskFall);


function diskFall (Event) {
    let alvo = Event.path[0]
    let input = Event.path[1].lastChild
    let actual = input.childElementCount
    console.log(Event.path[1])
    if(alvo.childElementCount === 0){
        if (count%2 === 0 && alvo.className === "linha"){
            const player1 = document.createElement('div');
            player1.classList = 'player1'
            alvo.appendChild(player1);
            count++
        }else if (count%2 === 1 && alvo.className === "linha") {
            const player2 = document.createElement('div');
            player2.classList = 'player2'
            alvo.appendChild(player2);
            count++
        }
    }else {
        actual --
    }
    
};

