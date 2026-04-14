
const readline = require("readline-sync")

let objetivo = 5000

let dinheiroGuardado = readline.questionFloat("informe quanto você guardou? R$: ")

let diferenca = objetivo - dinheiroGuardado

console.log("========== Resultado da Economia ==========")
if (dinheiroGuardado >= objetivo) {
    console.log(`Parabéns! Você atingiu seu objetivo de economizar R$ ${objetivo!`)
} else {
    console.log(`Você ainda precisa economizar mais R$ ${Math.abs(diferenca)} para atingir seu objetivo de R$ ${objetivo. Continue economizando!`)
}
console.log("========================================")
