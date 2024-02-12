let areaNota = document.getElementById('areaNota')
let notasalva = document.getElementById('notasalva')
let  salvar = document.getElementById('marcar')
let  apagar = document.getElementById('apagar')
let  editar = document.getElementById('editar')

function salvarNota(){
   console.log('botao clicado')
    if(areaNota.value != ''){
      notasalva.setAttribute('id','notasalva')
      notasalva.textContent = areaNota.value
      areaNota.setAttribute('id','areaNota2')
    } 
}
function editarNota(){
   console.log('botao2 clicado')
   areaNota.setAttribute('id','areaNota')
   areaNota.value = notasalva.textContent
   notasalva.setAttribute('id','notasalva2')
}
function apagarNota(){
   console.log('botao3 clicado')
   areaNota.setAttribute('id','areaNota')
   areaNota.value = ''
   notasalva.setAttribute('id','notasalva2')
}
