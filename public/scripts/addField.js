// Procurar o botão
document.querySelector("#add-time")


//Quando clicar no botão
.addEventListener('click', cloneField)


//execute uma ação
function cloneField() {


    //duplicar os campos... Que Campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)


    //pegar os campos..... Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    
    //para cada campo, Limpar
    fields.forEach(function(field) {
        //pegar o field atual e limpar ele
        field.value = ""
    })


    //colocar na pagina..... Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}