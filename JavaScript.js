/*criando botao  usando paramentros */ 
function botao(num) 
{
    /*variavel para concaternar (um  atrad do outro)*/ 
    let salvo = document.calc.txt.value;
    document.calc.txt.value = salvo + num;
}
