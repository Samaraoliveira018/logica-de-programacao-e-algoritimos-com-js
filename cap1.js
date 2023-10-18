function dobroDeUmNumero(){
    const num = prompt("Digite um Número:")
    const dobro = num * 2;
    alert(`O dobro de ${num} é ${dobro}`);
}

// dobroDeUmNumero();

function calcSomaDeDoisNúmeros(){
    const n1=prompt('Digite o primeiro número:');
    const n2=prompt('Digite o segundo número:')
    let soma = Number(n1) + Number(n2);
    alert (`A Soma dos valores digitados foi: ${soma}`)
}
// calcSomaDeDoisNúmeros();

function taxaDoGarcomEvalorDoJantar(){
    const valorJantar = parseInt(prompt('Total do Jantar: '));
    const porcentagemTaxaGarçom = (valorJantar*0.1).toFixed(2);

    let totalASerPago = parseInt(valorJantar) + parseInt(porcentagemTaxaGarçom);
    alert(`Total a ser pago será ${totalASerPago}`);
}
// taxaDoGarcomEvalorDoJantar()

function tempoTotalViagemEmHoras(){
    const dias = parseInt(prompt('qty de dias:'));
    const horas = parseFloat(prompt('Quantidade de Horas:'));
    let total = (dias * 24) + horas;
    alert(`Total de Horas: ${total}`)
}
// tempoTotalViagemEmHoras()

function calcNumerosVizinhosAnteriorAnPosterior(){
    const numero = parseInt(prompt('Insira um número:'))
    const numPosterior = numero + 1;
    const numAnterior = numero - 1;

    alert(`Números vizinhos ${numAnterior} e ${numPosterior}`)
}
// calcNumerosVizinhosAnteriorAnPosterior()

function valorPagoPorCliente(){
    const totalConta = Number(prompt("Insira valor da conta:"));
    const totalClientes = Number(prompt("Insira quantos clientes vão pagar a conta:"));
    let valorAPagar = totalConta / totalClientes;
    alert(`O valor à ser pago por cada cliente é: ${valorAPagar}`);
}
// valorPagoPorCliente();

function calcPrecoDeUmProduto(){
    const precoProduto = Number(prompt("Insira o valor do produto:"));
    const produtoDesconto10 = precoProduto * 0.1;
    const valorComDesconto = precoProduto - produtoDesconto10;
    const produtoParcelado = precoProduto / 3;
    alert(`O valor com 10% de desconto é: ${valorComDesconto}R$ e parcelado em 3x é ${produtoParcelado}R$`)
}

// calcPrecoDeUmProduto();

function calcMedia(){
    const nota1 = Number(prompt("Insira a 1ª nota:"));
    const nota2 = Number(prompt("Insira a 2ª nota:"));
    const mediaFinal = (nota1+nota2)/2;
    alert(`Sua média final é: ${mediaFinal}`)
}
// calcMedia();
