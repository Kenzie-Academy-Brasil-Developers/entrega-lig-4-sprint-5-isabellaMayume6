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
    for (let i = 0; i < 7; i++) {
        let coluna = document.createElement('div')
        coluna.classList.add('coluna', 'coluna' + i)
        jogo.appendChild(coluna)
        for (let j = 0; j < 6; j++) {

            let linha = document.createElement('div')
            linha.classList.add('linha', 'linha' + j)
            coluna.appendChild(linha)
        }
    }
}

gerandoMapa()
document.body.addEventListener("click",diskFall);
function diskFall (event){
    let elementoClick = event.path[0]; //Elemento clicado
    let colunaInteira = event.path[1]; //ColunaArray
    let colunaTamanho = colunaInteira.children.length; //Tamanho dos Filhos
    let elementoY = colunaTamanho - 1; //Elemento do ultimo para o primeiro da coluna
    let cell = event.path[1].children[elementoY]; //Ultima celula do tabuleiro
    if (cell.childElementCount === 0){
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
    }else {
        console.log(elementoY)
        while (cell.childElementCount === 1){
            elementoY--
            cell = event.path[1].children[elementoY];
            if (cell.childElementCount === 0){
                if(count%2 === 0){
                    const player1 = document.createElement('div');
                    player1.classList.add('player1')
                    cell.appendChild(player1);
                    count++
                    break
                } else if (count%2 === 1){
                    const player2 = document.createElement('div');
                    player2.classList.add('player2')
                    cell.appendChild(player2);
                    count++
                    break
                }               
            }
            
        }  
    } 
}



