const abaPrimaria = document.getElementById("abaPrimaria");
const abaSecundaria = document.getElementById("abaSecundaria");
const abas = document.querySelectorAll(".aba")
let abaAtual = 0;

function esconderAbaSelecionada(){
    const abaSelecionada = document.querySelector(".selecionado");
    abaSelecionada.classList.remove("selecionado")
}

function mostrarAba(indiceAba){
    abas[indiceAba].classList.add("selecionado")
}

abaPrimaria.addEventListener("click", function(){
    if (abaAtual === abas.length - 1) return;
    
    esconderAbaSelecionada()

    abaAtual++;
    mostrarAba(abaAtual);
});

abaSecundaria.addEventListener("click", function (){
    if (abaAtual === 0) return;

    esconderAbaSelecionada();

    abaAtual --;
    mostrarAba(abaAtual);
    
})

