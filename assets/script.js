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
function diskFall (event){
    let pointClick = event.path[0];
    let element = event.path[1];
    let eixo = event.path[1].children.length;
    let eixoY = eixo - 1
    let cell = event.path[1].children[eixoY];
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
        console.log(eixoY)
        while (cell.childElementCount === 1){
            eixoY--
            console.log(eixoY)
            cell = event.path[1].children[eixoY];
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



