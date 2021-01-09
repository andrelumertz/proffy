// procurar o botao
document.querySelector("#add-time")
// quando clicar no botao 
.addEventListener('click', cloneField)


// Executar uma açao
function cloneField() {
     // Duplicar campos. Que campos ? 
     const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false, para pegar todos os dados da div tem que colocar o true

    // pegar os campos. Que campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
         // pega o field do momento e limpar ele
         field.value = ""
    })


     // Colocar na pagina: Onde ?
     document.querySelector('#schedule-items').appendChild (newFieldContainer)
    }
     

    