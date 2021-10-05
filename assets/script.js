//Global Var
let count = 0;

// discos yasmin
const player1 = document.createElement('div');
player1.classList = 'player1'
// document.body.appendChild(player1)

const player2 = document.createElement('div');
player2.classList = 'player2'
// document.body.appendChild(player2)

// ---------------- GERANDO MAPA ------------------//
let mainGame = document.getElementById('jogo')
let jogo = document.createElement('div')
jogo.setAttribute('class', 'jogoClass')
mainGame.appendChild(jogo)
let coluna = document.createElement('div');
let linha = document.createElement('div');
function gerandoMapa() {
    for (let i = 1; i <= 7; i++) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna', 'coluna' + i)
        jogo.appendChild(coluna)
        
        for (let j = 1; j <= 6; j++) {
            let linha = document.createElement('div')
            linha.classList.add('linha', 'linha' + j)
            coluna.appendChild(linha)
        }
    }
}

gerandoMapa()
document.body.addEventListener("click",diskFall);

function diskFall (Event) {
    let alvo = Event.path[0]
    let input = Event.path[1]
    let actual = Event.path[1].lastChild
    console.log(alvo.nextSibling);
    if(actual.childElementCount === 0){
        if (count%2 === 0 && alvo.childElementCount === 0){
            const player1 = document.createElement('div');
            player1.classList = 'player1'
            actual.appendChild(player1);
            count++
        }else if (count%2 === 1 && alvo.innerHTML === "") {
            const player2 = document.createElement('div');
            player2.classList = 'player2'
            actual.appendChild(player2);
            count++
        }
    }
    // else if() {

    // }
};

