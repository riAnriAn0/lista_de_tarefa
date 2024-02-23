let cxEntrada = document.getElementById('cxEntrada')
let criarNota = document.querySelector('.criarNota')
let main =document.querySelector('main')
let maracar = document.querySelector('.marcar')
let apagar = document.querySelector('.apagar')
let areadeSaida = document.querySelector('.areadeSaida')
let cxSaida = document.querySelector('.cxSaida')

criarNota.addEventListener('click',() =>{
    let novaNota = cxEntrada.value

    if (cxEntrada.value != ''){

        let novaAreadeSaida = document.createElement('div')
        novaAreadeSaida.classList.add('areadeSaida')
        
        let novacxSaida = document.createElement('p')
        novacxSaida.classList.add('cxSaida')
        novacxSaida.textContent = novaNota
        novaAreadeSaida.appendChild(novacxSaida)

        let novoBtnMarcar = document.createElement('button')
        novoBtnMarcar.classList.add('marcar')
        novoBtnMarcar.innerHTML = ('<i class="fa-solid fa-check"></i>')
        novaAreadeSaida.appendChild(novoBtnMarcar)
        
        let novoBtnApagar = document.createElement('button')
        novoBtnApagar.classList.add('apagar')
        novoBtnApagar.innerHTML = ('<i class="fa-solid fa-trash"></i>')
        novaAreadeSaida.appendChild(novoBtnApagar)

        main.appendChild(novaAreadeSaida)
        
        cxEntrada.value = ''
    
    }
})

main.addEventListener('click',(e)=>{
    let btnclicado = e.target
    const divPai = btnclicado.closest('div');

    if(btnclicado.classList == ('marcar')){
        divPai.classList.toggle('areadeSaidaMarcada');

    } else if(btnclicado.classList == ('apagar')){
        divPai.remove();
    }
})

let nightMode = document.querySelector('#nightMode')

nightMode.addEventListener('click',() => {
    console.log('apertado')
    document.body.classList.toggle('modoEscuro')
     
})


