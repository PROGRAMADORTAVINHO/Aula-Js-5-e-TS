let n1 = document.getElementById("n1") as HTMLInputElement
let n2 = document.getElementById("n2") as HTMLInputElement
let botao = document.getElementById("calcular") as HTMLInputElement
let res = document.getElementById("resultado") as HTMLInputElement

function calcular(n1,n2){
    return n1+n2
}

botao.addEventListener("click", function(){
 res.innerHTML = calcular(n1.value, n2.value)
})