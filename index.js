function cs(vitoria, derrota) {
    let v = vitoria - derrota;
    let nome = "shaolin matador de porco"
    const r = "O Herói " + nome + " tem saldo de " + v + " vitórias e está no nível de "
  
if (v < 10){
    console.log(r + "Ferro")
}else if(v >= 11 & v <= 20){
    console.log(r + "Bronze")
}else if(v >= 21 & v <= 50){
    console.log(r + "Prata")
}else if(v >= 51 & v <= 80){
    console.log(r + "Ouro")
}else if(v >= 81 & v <= 90){
    console.log(r + "Diamante")
}else if(v >= 91 & v <= 100){
    console.log(r + "lendário")
}else{
    console.log(r + "Imortal")
}

}
  
cs(35,5);


