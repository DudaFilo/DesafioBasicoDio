let nomeDoHeroi = "Faker"
let quantidadeDeXp = 100000

function nivelDoHeroi() { 

    if (quantidadeDeXp > 10001) { 
        return "Radiante";
    }
  
  if (quantidadeDeXp > 9001) {
    return "Imortal";
  }
  
    if (quantidadeDeXp > 8001) {
    return "Ascendente";
  }
  
    if (quantidadeDeXp > 7001) {
    return "Platina";
  }
  
    if (quantidadeDeXp > 5001) {
    return "Ouro";
  }
  
    if (quantidadeDeXp > 2001) {
    return "Prata";
  }
  
    if (quantidadeDeXp > 1001) {
    return "Bronze";
  }
  
    if (quantidadeDeXp <= 1000) {
    return "Ferro";
  }

} 

nivelDoHeroi()

console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi()}.`) 