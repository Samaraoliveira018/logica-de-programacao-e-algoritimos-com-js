function situacaoDoAluno(){
    const frm = document.querySelector('form');
    const resp1 = document.querySelector('h3');
    const resp2 = document.querySelector('h4');

    frm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const nome = frm.inNome.value;
        const nota1 = Number(frm.inNota1.value);
        const nota2 = Number(frm.inNota2.value);
        const media = (nota1 + nota2)/2
        resp1.innerText = `Média das Notas ${media.toFixed(2)}`

        if(media >= 7){
            resp2.innerText = `Parabéns ${nome} você está Aprovado!`;
            resp2.style.color = 'blue';
        }else {
            resp2.innerText = `Ops! ${nome} você precisa estudar mais.`;
            resp2.style.color = 'red';
        }
    })
}

function calcPesoIdeal(){
    const frm = document.querySelector("form")
    const resp = document.querySelector("h3")
    frm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const nome = frm.inNome.value
        const masculino = frm.inMasculino.checked
        const altura = Number(frm.inAltura.value)
        let peso;
        if(masculino){
            peso = 22*Math.pow(altura,2)
        }else{
            peso = 21*Math.pow(altura,2)
        }

        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
    })
}

function limparCampos(){
    const frm = document.querySelector("form")
    const resp = document.querySelector("h3")

    frm.addEventListener("reset",()=>{
        resp.innerText = " "
    })
}
