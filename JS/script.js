let jogador = 0;
let jogador0_placar = 0;
let jogador1_placar = 0;
let tabuleiro = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]

placar0 = document.getElementById("j0");
placar1 = document.getElementById("j1");

placar0.innerHTML = jogador0_placar;
placar1.innerHTML = jogador1_placar;

function atualizar(){
    if(jogador == 0){
        jogador0_placar += 1;
    }
    else{
        jogador1_placar += 1;
    }

    placar0 = document.getElementById("j0");
    placar1 = document.getElementById("j1");

    placar0.innerHTML = jogador0_placar;
    placar1.innerHTML = jogador1_placar;
}

function colocar_simbolo(x,y,jogador){
    if(jogador == 0){
        var img = "url('./IMG/JogodaVelha01.jpg')";
    }
    else{
        var img = "url('./IMG/JogodaVelha02.jpg')";
    }

    let id = "casa" + x + y;
    
    let casa = document.getElementById(id)

    casa.style.backgroundImage = img;
}

function casa_clicada(x,y){
    console.log("jogador: " + jogador + " / Casa: (" + x + ", " + y + ")");

    if(tabuleiro[x][y] == -1){
        tabuleiro[x][y] = jogador;
        colocar_simbolo(x,y,jogador)
        
        if(verificar_vitoria() == true){
            alert("Jogador " + jogador + " venceu a partida");
            //document.location.reload();

            atualizar();

            reiniciar_jogo();
        }
        else{
            if(verificar_velha() == true){
                alert("Velha")
                //document.location.reload();
                reiniciar_jogo();
            }
        }

        if(jogador == 0){
            jogador += 1;
        }
        else{
            jogador -= 1;
        }
    }
    else{
        console.log("jogada invalida")
    }
}

function verificar_linhas(){
    for(let i = 0; i < 3; i++){
        let cont = 0;
        for(let j = 0; j < 3; j++){
            if(tabuleiro[i][j] == jogador){
                cont += 1;    
                if(cont == 3){
                    return true;
                }
            }
        }
    }
    return false;
}

function verificar_colunas(){
    for(let i = 0; i < 3; i++){
        let cont = 0;
        for(let j = 0; j < 3; j++){
            if(tabuleiro[j][i] == jogador){
                cont += 1;    
                if(cont == 3){
                    return true;
                }
            }
        }
    }
    return false;
}

function verificar_diagonais(){
    if(tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[0][0] == tabuleiro[2][2] && tabuleiro[0][0] == jogador){
        return true;
    }
    if(tabuleiro[2][0] == tabuleiro[1][1] && tabuleiro[2][0] == tabuleiro[0][2] && tabuleiro[2][0] == jogador){
        return true;
    }
    return false
}

function verificar_vitoria(){
    if(verificar_linhas() == true){
        return true;
    }
    if(verificar_colunas()==true){
        return true;
    }
    if(verificar_diagonais()==true){
        return true;
    }
    return false;
}

function verificar_velha(){
    for(let i = 0; i < 2; i++){
        if(tabuleiro[i].indexOf(-1) != -1){
            return false;
        }
    }
    return true;
}

function reiniciar_jogo(){
    //
}