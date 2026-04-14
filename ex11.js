
const prompt = require('readline-sync')

let tamanhoTotal = 20

let quantidadeBaixada = prompt.questionInt('Quantos GB foram baixados?: ')
let percentual = (quantidadeBaixada / tamanhoTotal) * 100

console.log('========== Progresso do Download ==========' )
console.log(`Você já baixou ${Math.round(percentual)}% do arquivo.`)
console.log('========================================')
