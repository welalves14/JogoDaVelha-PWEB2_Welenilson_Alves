const btnNovoJogo = document.querySelector("button")

const casa1 = document.querySelector("#casa_101")
const casa2 = document.querySelector("#casa_102")
const casa3 = document.querySelector("#casa_103")
const casa4 = document.querySelector("#casa_201")
const casa5 = document.querySelector("#casa_202")
const casa6 = document.querySelector("#casa_203")
const casa7 = document.querySelector("#casa_301")
const casa8 = document.querySelector("#casa_302")
const casa9 = document.querySelector("#casa_303")

var player = 1
var travar_casas = 0
var cont_pts1=0
var cont_pts2=0

document.getElementById("pontos_player_1").textContent = `J1 - ${cont_pts1} Pontos`
document.getElementById("pontos_player_2").textContent = `J2 - ${cont_pts2} Pontos`

btnNovoJogo.onclick = function(e){
    document.getElementById("casa_101").className = "casa v";
    document.getElementById("casa_102").className = "casa v";
    document.getElementById("casa_103").className = "casa v";
    document.getElementById("casa_201").className = "casa v";
    document.getElementById("casa_202").className = "casa v";
    document.getElementById("casa_203").className = "casa v";
    document.getElementById("casa_301").className = "casa v";
    document.getElementById("casa_302").className = "casa v";
    document.getElementById("casa_303").className = "casa v";

    travar_casas = 0
    player = 1
}

function ptsJogador01(){
    if( ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_102").className == "casa x") && (document.getElementById("casa_103").className == "casa x"))
     || ((document.getElementById("casa_201").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_203").className == "casa x"))
     || ((document.getElementById("casa_301").className == "casa x") && (document.getElementById("casa_302").className == "casa x") && (document.getElementById("casa_303").className == "casa x"))
     || ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_201").className == "casa x") && (document.getElementById("casa_301").className == "casa x")) 
     || ((document.getElementById("casa_102").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_302").className == "casa x")) 
     || ((document.getElementById("casa_103").className == "casa x") && (document.getElementById("casa_203").className == "casa x") && (document.getElementById("casa_303").className == "casa x")) 
     || ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_303").className == "casa x")) 
     || ((document.getElementById("casa_103").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_301").className == "casa x"))){
        cont_pts1++
        document.getElementById("pontos_player_1").textContent = `J1 - ${cont_pts1} Pontos`
        casas_x()
    }
}
function ptsJogador02(){
    if( ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_102").className == "casa o") && (document.getElementById("casa_103").className == "casa o"))
     || ((document.getElementById("casa_201").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_203").className == "casa o")) 
     || ((document.getElementById("casa_301").className == "casa o") && (document.getElementById("casa_302").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
     || ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_201").className == "casa o") && (document.getElementById("casa_301").className == "casa o")) 
     || ((document.getElementById("casa_102").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_302").className == "casa o")) 
     || ((document.getElementById("casa_103").className == "casa o") && (document.getElementById("casa_203").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
     || ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
     || ((document.getElementById("casa_103").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_301").className == "casa o"))){
        cont_pts2++
        document.getElementById("pontos_player_2").textContent = `J2 - ${cont_pts2} Pontos`
        casas_x()
    }
}
function ptsJogadores(){
    if(travar_casas==0){
        ptsJogador01()
        ptsJogador02()
    }
}
function casas_x(){
    document.getElementById("casa_101").className = "casa x";
    document.getElementById("casa_102").className = "casa o";
    document.getElementById("casa_103").className = "casa x";
    document.getElementById("casa_201").className = "casa o";
    document.getElementById("casa_202").className = "casa x";
    document.getElementById("casa_203").className = "casa o";
    document.getElementById("casa_301").className = "casa x";
    document.getElementById("casa_302").className = "casa o";
    document.getElementById("casa_303").className = "casa x";

    travar_casas = 1
}

casa1.onclick = function(e) {
    if(document.getElementById("casa_101").className == "casa v"){
        if (player==1){
            document.getElementById("casa_101").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_101").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa2.onclick = function(e) {
    if(document.getElementById("casa_102").className == "casa v"){
        if (player==1){
            document.getElementById("casa_102").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_102").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa3.onclick = function(e) {
    if(document.getElementById("casa_103").className == "casa v"){
        if (player==1){
            document.getElementById("casa_103").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_103").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa4.onclick = function(e) {
    if(document.getElementById("casa_201").className == "casa v"){
        if (player==1){
            document.getElementById("casa_201").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_201").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa5.onclick = function(e) {
    if(document.getElementById("casa_202").className == "casa v"){
        if (player==1){
            document.getElementById("casa_202").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_202").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa6.onclick = function(e) {
    if(document.getElementById("casa_203").className == "casa v"){
        if (player==1){
            document.getElementById("casa_203").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_203").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa7.onclick = function(e) {
    if(document.getElementById("casa_301").className == "casa v"){
        if (player==1){
            document.getElementById("casa_301").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_301").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa8.onclick = function(e) {
    if(document.getElementById("casa_302").className == "casa v"){
        if (player==1){
            document.getElementById("casa_302").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_302").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}
casa9.onclick = function(e) {
    if(document.getElementById("casa_303").className == "casa v"){
        if (player==1){
            document.getElementById("casa_303").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_303").className = "casa o";
            player = 1
        }
    }
    ptsJogadores()
}