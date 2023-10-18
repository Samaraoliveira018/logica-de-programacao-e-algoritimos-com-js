const form1 = document.querySelector('form');
const result = document.querySelector('h3');
form1.addEventListener('submit',(e) => {
    const nome = form1.nome.value
    result.innerText = `Olá ${nome}`
    e.preventDefault();
})
