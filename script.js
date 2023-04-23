let a=document.getElementById('primeiro-numero')
let b=document.getElementById('segundo-numero')
let calcularResposta=document.getElementById('form-botao-calcular')
let soma=document.getElementById('escolha-soma')
let subtracao=document.getElementById('escolha-subtracao')
let multiplicacao=document.getElementById('escolha-multiplicacao')
let divisao=document.getElementById('escolha-divisao')
let resposta = document.getElementById('resposta')


function calculo (){
    let x= Number(a.value) 
    let y= Number (b.value) 
    let resultado = 0

    if (soma.checked) {
      resultado = x + y;
    } else if (subtracao.checked) {
      resultado = x - y;
    } else if (multiplicacao.checked) {
      resultado = x * y;
    } else if (divisao.checked){
      resultado = x / y;
    }

    resposta.innerHTML= `Resposta: ${resultado}`
     
}

calcularResposta.addEventListener("click", calculo)






