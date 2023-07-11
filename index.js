import { funcJogo } from rouge

const rls = require("readline-sync")


function exibirMenu (){

    console.clear();

    console.log("splah ROUGE LIKE");
    console.log("1 - Jogar");
    console.log("2 - Dificuldade");
    console.log("3 - Ranking");
    console.log("4 - Sair");
}

function funcMenu (indice){
    
    if (indice === 1){
        console.clear();
        console.log("foi pro jogo");
    }else if (indice === 2){
      console.clear();
        console.log("Foi para dificuldades");
    }
    else{
        console.log("saiu");
    }
}
do {
//chamada 1
exibirMenu();
var interruptor = rls.questionInt("\n Digite sua option: ")
//chamada 2
funcMenu(interruptor);
}while(interruptor != 1 || interruptor != 2)
