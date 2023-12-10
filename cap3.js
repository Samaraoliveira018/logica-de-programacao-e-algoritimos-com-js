const prompt = require('prompt-sync')()
const salario = Number(prompt('Salário R$: '))
const tempo = Number(prompt('Tempo(anos): '))
const quadrienios = Number(Math.floor(tempo / 4))
let porcentagem4 = Number(salario * 1/100)
let salarioMaisQuadrienio = Number(porcentagem4 * quadrienios)
let salarioFinal = salario + salarioMaisQuadrienio

console.log(`Quadriênios: ${quadrienios}`)
console.log(`O valor do bônus é: ${salarioFinal}`)

const prompt = require('prompt-sync')()
const num1  = Number(prompt("1º Número: "))
const num2 = Number(prompt("2º Número: "))
const soma = num1 + num2
console.log(`Soma é ${soma}`)

const prompt = require('prompt-sync')()
const veiculo = prompt("Veículo: ")
const preco = Number(prompt('Preço R$: '))
const entrada = preco*0.50
const parcela = (preco *0.50)/12
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada do cliente: R$ ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)

const prompt = require('prompt-sync')()
const pesoKg = Number(prompt("Peso da ração(kg): "));
const consumo = Number(prompt("Consumo em gramas(gr): "))
const pesoGr = pesoKg * 1000
const duracao =Math.floor(pesoGr/consumo)
const sobra = pesoGr % consumo
console.log(`Duração ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)
