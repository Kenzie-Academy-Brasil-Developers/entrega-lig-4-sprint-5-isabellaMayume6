//Global Var
let count = 0;
let cell = 0

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

// Mateus Footer 
let botãoAbaixo1 =document.createElement("button");
let botãoAbaixo2 = document.createElement("button");
let foot = document.createElement("footer");
document.body.appendChild(foot);
foot.appendChild(player1);
let textoP1 = document.createElement("p");
textoP1.innerText = "Player1"
foot.appendChild(textoP1);
foot.appendChild(botãoAbaixo1);
foot.appendChild(player2);
let textoP2 = document.createElement("p");
textoP2.innerText = "Player2";
foot.appendChild(textoP2);
foot.appendChild(botãoAbaixo2);
//Mateus - Aperecer fichas no click no Tabuleiro
mainGame.addEventListener("click",diskFall);
function diskFall (event){
    let colunaInteira = event.path[1]; //ColunaArray
    let colunaTamanho = colunaInteira.children.length; //Tamanho dos Filhos
    let elementoY = colunaTamanho - 1; //Elemento do ultimo para o primeiro da coluna
    cell = event.path[1].children[elementoY]; //Ultima celula do tabuleiro
    while (cell.childElementCount === 1){
        elementoY --
        cell = event.path[1].children[elementoY]
    }    
    if (cell.childElementCount === 0 && colunaInteira.className === "coluna"){
        if(count%2 === 0){
            const player1 = document.createElement('div');
            player1.classList.add('player1')
            cell.appendChild(player1);
            count++
        } else if (count%2 === 1){
            const player2 = document.createElement('div');
            player2.classList.add('player2')
            cell.appendChild(player2);
            count++
        }
    }
}