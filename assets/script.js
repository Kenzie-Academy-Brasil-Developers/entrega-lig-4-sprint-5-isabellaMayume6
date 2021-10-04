// ---------------- GERANDO MAPA ------------------//
let mainGame = document.getElementById('jogo')
let jogo = document.createElement('div')
jogo.setAttribute('class', 'jogoClass')
mainGame.appendChild(jogo)

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