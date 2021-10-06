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
        coluna.classList.add('coluna')
        jogo.appendChild(coluna)
        
        for (let j = 1; j <= 6; j++) {
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


function vitoriaHorizontal(resultMap,linhasMap){
    const newMap = [];
    for(let i = 0; i < 7;i++){
        newMap.push(resultMap[linhasMap][i])

        for(let i = 0; i < 4;i++){
            if(newMap[i] === newMap[i+1] && 
               newMap[i] === newMap[i+2] && 
               newMap[i] === newMap[i+3] && 
               newMap[i] !== 0){
                if(newMap[i] === 'player1'){
                    let text = 'Player 1'
                    victory(text)
                }else{
                    let text = 'Player 2'
                    victory(text)
                }
            }
        }
    }
  
}

function vitoriaVertical(resultMap,colunasMap){
    const newMap = [];
    for(let i = 0; i < 6;i++){
       newMap.push(resultMap[colunasMap][i])

       for(let j = 0; j < 4;j++){
           if(newMap[i] === newMap[j+1] &&
              newMap[j] === newMap[j+2] &&
              newMap[i] === newMap[j+3] &&
              newMap[i] !== 0){
                  if(newMap[i] === 'player1'){
                      let text = 'Player 1'
                      victory(text)
                    }else{
                      let text = 'Player 2'
                      victory(text)
                    }
            }
        }
    }
}

function victory(text){
let alert =  document.createElement('span');
alert.innerText = `Parabens!! Voce Ganhou ${text}`;
alert.classList.remove('mostrar')
setTimeout(function Sair(){
    alert.classList.add('mostrar')
},2000)
}