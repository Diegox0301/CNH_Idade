let idade = prompt("Qual a sua idade?");
let CNH = prompt("Voce possui CNH?");

if (idade >= 18 && CNH == "sim" ){
    console.log("Pode dirigir");
}
else if (idade >= 18 && CNH == "nao"){
    console.log("Não pode dirigir");
}
else{
    console.log("Não pode dirigir");
}