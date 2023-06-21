var idade = 68
console.log(`Você tem ${idade} anos de idade.`)

if (idade < 16) {
    console.log("Você não vota!")
} else if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log("Seu voto é opcional!")
} else {
    console.log("Você vota!")
}
