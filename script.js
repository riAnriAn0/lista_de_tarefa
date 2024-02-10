
let areaNota = document.querySelector('#atraNota')
let editar = document.querySelector('#aditar')
let marcar = document.querySelector('#marca')
let apagar = document.querySelector('#apagar')
let novaNota = document.querySelector('#novaNota')
let main = document.querySelector('#main')

novaNota.addEventListener('click',function(){
    main.innerHTML += (('<div id="cxNota"><div id="nota"> <p id="areaNota" > </p></div><div id="editarNota"><i  id="editar" class="fa-solid fa-pen"></i><i id="marcar"  class="fa-solid fa-check"></i> <i  id="apagar" class="fa-solid fa-trash"></i></div></div>'))
})
