let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;


const palavras = [
    palavra001 ={
        nome: "IRLANDA",
        categoria: "PAISES"
    },
    palavra002 ={
        nome: "BRASIL",
        categoria: "PAISES"
    },
    palavra003 ={
        nome: "CAMAROES",
        categoria: "PAISES"
    },
    palavra004 ={
        nome: "JAPAO",
        categoria: "PAISES"
    },
    palavra005 ={
        nome: "MEXICO",
        categoria: "PAISES"
    },
    palavra006 ={
        nome: "CORINTHIANS",
        categoria: "TIMES"
    },
    palavra007 ={
        nome: "CRUZEIRO",
        categoria: "TIMES"
    },
    palavra008 ={
        nome: "FLAMENGO",
        categoria: "TIMES"
    },
    palavra009 ={
        nome: "BAHIA",
        categoria: "TIMES"
    },
    palavra010 ={
        nome: "INTERNACIONAL",
        categoria: "TIMES"
    },
    palavra011 ={
        nome: "TOMATE",
        categoria: "FRUTAS"
    },
    palavra012 ={
        nome: "LARANJA",
        categoria: "FRUTAS"
    },
    palavra013 ={
        nome: "MARACUJA",
        categoria: "FRUTAS"
    },
    palavra014 ={
        nome: "MELANCIA",
        categoria: "FRUTAS"
    },
    palavra015 ={
        nome: "BANANA",
        categoria: "FRUTAS"
    },
    palavra016 ={
        nome: "GUAXINIM",
        categoria: "ANIMAIS"
    },
    palavra017 ={
        nome: "BALEIA",
        categoria: "ANIMAIS"
    },
    palavra018 ={
        nome: "CAVALO",
        categoria: "ANIMAIS"
    },
    palavra019 ={
        nome: "GIRAFA",
        categoria: "ANIMAIS"
    },
    palavra020 ={
        nome: "URSO",
        categoria: "ANIMAIS"
    },
]

palavraSecreta();
function palavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
} 

palavraTela();
function palavraTela(){
    const categoria = document.getElementById("dica");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica [i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
    }
}

function verificaLetra(letra){
    document.getElementById("tecla-" + letra).disabled = true; 
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        palavraTela();
        contagemErros();
    }
    
}

function contagemErros(){
    const numero = document.getElementById("jogadas");
    numero.innerText = "JOGADAS RESTANTES: " + tentativas;
}


function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#696969";
    document.getElementById(tecla).style.color = "#f3f3f3";
}

function comparalistas(letra){
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if(posicao < 0){
        tentativas--
        imagemForca();
        if(tentativas == 0){
            abreModal("DERROTA!", "Você foi enforcado, a palavra era<br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i=0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    } 

    let vitoria = true;
    for(i=0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }
    
    if(vitoria == true){
        abreModal("VITÓRIA!", "Você foi salvo");
        tentativas = 0;        
    }
}

function imagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.backgroundImage = "url('./images/forca1.png')";
            break;        
        case 4:
            document.getElementById("imagem").style.background = "url('./images/forca2.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./images/forca3.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./images/forca4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./images/forca5.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./images/forca6.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./images/forca0.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;
    let modalMensagem = document.getElementById("modalBody");
    modalMensagem.innerHTML = mensagem;
    $("#myModal").modal({
        show:true
    });
}

let bntReiniciar = document.querySelector("#btnReinicio")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});