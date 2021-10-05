//Global Var
let count = 0;

// discos yasmin
const player1 = document.createElement('div');
player1.classList.add('player1')
// document.body.appendChild(player1)

const player2 = document.createElement('div');
player2.classList.add('player2')
// document.body.appendChild(player2)


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
        coluna.classList.add('coluna', 'coluna' + i)
        jogo.appendChild(coluna)
        for (let j = 0; j < arrayElementos[i].length; j++) {

            let linha = document.createElement('div')
            linha.classList.add('linha', 'linha' + j)
            coluna.appendChild(linha)
        }
    }
}

gerandoMapa()
document.body.addEventListener("click",diskFall);
let playerMapChange = arrayElementos[0][5]
let eixoY = 5

function diskFall (Event) {
    let alvo = Event.path[0] //elemento da linha
    let input = Event.path[1] // coluna
    let actual = Event.path[1].lastChild//ultimo filho da coluna
    console.log(input.children[eixoY].childElementCount)
    if(input.children[eixoY].childElementCount === 0){
        if(input.children[eixoY] === actual)
            if (count%2 === 0){
                const player1 = document.createElement('div');
                player1.classList = 'player1'
                actual.appendChild(player1);
                count++
            }else if (count%2 === 1 ){
                const player2 = document.createElement('div');
                player2.classList = 'player2'
                actual.appendChild(player2);
                playerMapChange = 1
                count++
        } eixoY--
    }
    else if(actual.childElementCount === 1) {
        const player2 = document.createElement('div');
        player2.classList = 'player2'
    }
};

