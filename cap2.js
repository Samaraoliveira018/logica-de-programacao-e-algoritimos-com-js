function olaVoce(){
const form1 = document.querySelector('form');
const result = document.querySelector('h3');
form1.addEventListener('submit',(e) => {
    const nome = form1.nome.value
    result.innerText = `Olá ${nome}`
    e.preventDefault();
})
}


function converterHorasEminutos(){
const form2 = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

form2.addEventListener('submit',(e) => {
    const titulo = form2.inTitulo.value
    const duracao = Number(form2.inDuracao.value)

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    console.log(resp1, resp2)
    e.preventDefault();
})    
}


function promoVeiculo(){
const formVeiculo = document.querySelector('form');
const promoção = document.querySelector('#nomeDoCarro');
const entrada = document.querySelector('#entrada');
const parcela = document.querySelector('#parcelado');

formVeiculo.addEventListener('submit',(e) => {
    const titulo = formVeiculo.inTitulo.value
    const valorVeiculo = Number(formVeiculo.valor.value)
    
    const valorEntrada = Number(valorVeiculo * 0.5)
    const parcelado = valorEntrada / 12;

    promoção.innerText = `Promoção: ${titulo}`
    entrada.innerText = `Entrada de R$: ${valorEntrada.toFixed(2)}`
    parcela.innerText = `+12x de R$: ${parcelado.toFixed(2)}`

    e.preventDefault();
})
}


function totalApagarRestaurante(){
const formBuffet = document.querySelector('form');
const valorTotal = document.querySelector('#valorTotal');

formBuffet.addEventListener('submit',(e) => {
    const valorBuffetKL = formBuffet.buffetkl.value
    const consumo = formBuffet.consumo.value
    const valorPagar = (valorBuffetKL / 1000) * consumo
    
    valorTotal.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`
    
    e.preventDefault();
})
}


// ******************farmacia

function promoFarmacia(){
const formFarm = document.querySelector('form');
const titleRemed = document.querySelector('#titleRemed');
const valor = document.querySelector('#valor');

formFarm.addEventListener('submit',(e) => {
    const nomeMedicamento = formFarm.nomeMedic.value
    const precoMedicamento = formFarm.preco.value
    const medicamento = Math.floor(precoMedicamento * 2)
    
    titleRemed.innerText = `Promoção de: ${nomeMedicamento}`
    valor.innerText = `Valor a pagar R$: ${medicamento.toFixed(2)}`
    
    e.preventDefault();
})
}
