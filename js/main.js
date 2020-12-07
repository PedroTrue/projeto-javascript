
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");
    //window.location.href = "https://web.digitalinnovation.one/home";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse aqui";
    elemento.innerHTML = "Obrigado por passar o mouse aqui";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

//console.log(soma(24, 20));
//console.log(setReplace("Vai Íbis", "Íbis", "Flamengo"));

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
console.log(d);
*/

/*
var count;
for(count = 0; count <= 5; count++) {
    console.log(count);
};
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    //count = count + 1;
    count++;
};
*/

/*
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.pop();
//lista.push("uva");
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Pedro Henrique";
//var n1 = 24;
//var n2 = 10;
//var frase = "Íbis é o melhor time do mundo!"
//alert(nome + " tem " + idade + " anos");
//alert(n1 + n2)
//console.log(nome);
//console.log(n1);
//console.log(frase.replace("Íbis", "Flamengo"));
//alert(frase.replace("Íbis", "Flamengo"));