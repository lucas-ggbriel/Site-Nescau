let nome = window.document.getElementById("nome")
let email = document.getElementById("email")
let telefone = document.querySelectorAll("#telefone")

function validaCampos(){
    let validaEmail = document.querySelectorAll("#validaEmail")
    let validaNome = document.getElementById("validaNome")
    let validaTelefone = document.querySelectorAll("#validaTelefone")
    let nomeT = false;
    let emailT = false;
    let telefoneT = false;

    if(nome.value.length < 3){
        validaNome.innerHTML = "<div class='alert alert-danger' role='alert'>Nome inválido!</div>"
    }else{
        nomeT = true;
    }
    
    if(email.value.length == 0){
        validaEmail.innerHTML = "<div class='alert alert-danger' role='alert'>Digite seu email!</div>"
    }else{
        emailT = true;
    }if(telefone.value.length < 11 || telefone.value.length > 12){
        validaTelefone.innerHTML = "<div class='alert alert-danger' role='alert'>Telefone inválido</div>"
    }else{
        telefoneT = true;
    }

    if(nomeT == true && emailT == true && telefoneT == true){
        alert("Cadastro realizado com sucesso!")
    }
}