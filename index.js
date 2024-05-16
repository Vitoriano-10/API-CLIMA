const chave_api = '1f662f07c5e434728541c56bf2b60a49'
let btn = document.querySelector('.button')

// Acionar o botao com enter
addEventListener('keypress', function(e) {
    if (e.key === 'Enter')
    btn.click()
})

// ACIONAR O BOTAO COM O CLICK E CHAMAR A FUNCÃO PARA BUSCAR A CIDADE

btn.addEventListener('click', ()=>{
    const cidade = document.querySelector('.input-busca').value
    if(cidade === ''){
        alert('Digite o nome da cidade!')
    }else{
        cidade.value = ''
        buscarCidade(cidade)
    }
})

// FUNÇOES ASYNC É PARA QUANDO SE USA SERVIDORES
async function buscarCidade(cidade){
    const servidor = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave_api}&lang=pt_br&units=metric`).then(resposta=>resposta.json())
    colocarDadosNaTela(servidor)
}

// PREENCHER A TELA COM OS DADOS DO JSON
function colocarDadosNaTela(servidor){
    console.log(servidor)
    document.querySelector('.cidade').innerHTML = `Tempo em ${servidor.name}`
    document.querySelector('.graus').innerHTML = `${Math.floor(servidor.main.temp)}ºC`
    document.querySelector('.tempo').innerHTML = `${servidor.weather[0].description}`
    document.querySelector('.img-clima').src = `https://openweathermap.org/img/wn/${servidor.weather[0].icon}.png`
    document.querySelector('.umidade-valor').innerHTML = `${servidor.main.humidity
    }%`
}
