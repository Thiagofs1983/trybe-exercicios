const notaCandidato = Math.floor(Math.random() * 100 + 1);
if (notaCandidato >= 80) {
    console.log("Parabéns, você foi aprovado(a). Sua nota foi:", notaCandidato )
}else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log("Você está na nossa lista de espera. Sua nota foi:", notaCandidato)
}else {
    console.log("Você foi reprovado(a). Sua nota foi:", notaCandidato)
}