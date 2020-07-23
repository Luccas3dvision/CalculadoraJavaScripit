function somar() {
    /* chamando variavel dos inputs numericos*/
    var txtn1 = window.document.getElementById('txtn1')
    var txtn2 = window.document.querySelector('input#txtn2')
    /* defininco resultado dos inputs */
    var res = window.document.getElementById('res')
    /*  funcao para resultado ANTECAO EM LETRAS MAIUSCULAS E MINUSCULAS*/
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var s = n1 + n2
    /* mostar resultado NO HTML*/
    res.innerHTML = 'Seu resultado é  '+ s  
}
/* funcao para subitrair*/
function subitrair() {
/* chamando variavel dos inputs numericos para supitrair*/
var txtn1 = window.document.getElementById('txtn1')
var txtn2 = window.document.querySelector('input#txtn2')
/* defininco resultado dos inputs */
var res_subitrair = window.document.getElementById('res_subitrair')
/*  funcao para resultado da subitração */
var n1 = Number(txtn1.value)
var n2 = Number(txtn2.value)
var s = n1 - n2
/* mostar resultado NO HTML*/
res_subitrair.innerHTML = 'Seu resultado é  '+ s  
}
/* funcao para divisao */
function dividir() {
/* chamando variveis  mantenter no mesmo padrao para nao se embananar*/
var txtn1 = document.getElementById('txtn1')
var txtn2 = document.getElementById('txtn2')
/*definir o local dos inputs de respostas*/
var res_dividir = document.getElementById('res_dividir')
/* funcao de calculos nunber para converter a str em int */
var n1 = Number(txtn1.value)
var n2 = Number(txtn2.value)
var s = n1 / n2
/* mostar resultado NO HTML*/
res_dividir.innerHTML = 'Seu resultado é  '+ s  
}
/* funcao para multiplicar*/
function multiplicar() {
/* chamando variveis  mantenter no mesmo padrao para nao se embananar*/
var txtn1 = document.getElementById('txtn1')
var txtn2 = document.getElementById('txtn2')
/*definir o local dos inputs de respostas*/
var res_multiplicar = document.getElementById('res_multiplicar')
/* funcao de calculos nunber para converter a str em int */
var n1 = Number(txtn1.value)
var n2 = Number(txtn2.value)
var s = n1 * n2
/* mostar resultado NO HTML*/
res_multiplicar.innerHTML = 'Seu resultado é  '+ s
}