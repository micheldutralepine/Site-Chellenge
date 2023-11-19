/*mostrar texto */
    function leiaMais() {
      var pontos = document.getElementById('pontos');
      var maisTexto = document.getElementById('mais');
      var btnLeiaMais = document.getElementById('btnLeiaMais');

      if (pontos.style.display === 'none') {
        pontos.style.display = 'inline';
        maisTexto.style.display = 'none';
        btnLeiaMais.innerHTML = 'Leia Mais';
      } else {
        pontos.style.display = 'none';
        maisTexto.style.display = 'inline';
        btnLeiaMais.innerHTML = 'Leia Menos';
      }
    }

    /*baner rotativo codigo  nao funciona(ainda)*/ 
    let bannerImgs = document.querySelectorAll('.img-banner img');
    let currentIndex = 0;

    function changeBanner() {
      bannerImgs[currentIndex].style.display = 'none';
      currentIndex++;

      if (currentIndex >= bannerImgs.length) {
        currentIndex = 0;
      }

      bannerImgs[currentIndex].style.display = 'block';
    }

    setInterval(changeBanner, 3000);
 
    /* mostrar historico  */
    function toggleClasse() {
      var historicoExames = document.getElementById("historicoTratamento");
      historicoExames.classList.toggle("escondida");
  }
   /*validação segundo form*/
   document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.form-agendamento');
    form.addEventListener('submit', function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
 
    function validarFormulario() {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var dataAgendamento = document.getElementById('data-agendamento').value;
        var horaAgendamento = document.getElementById('hora-agendamento').value;
 
        var mensagemErro = '';
 
        if (nome === '') {
            mensagemErro += 'Por favor, informe seu nome.\n';
        }
 
        if (email === '') {
            mensagemErro += 'Por favor, informe seu e-mail.\n';
        }
 
        if (telefone === '') {
            mensagemErro += 'Por favor, informe seu telefone.\n';
        }
 
        if (dataAgendamento === '') {
            mensagemErro += 'Por favor, informe a data do agendamento.\n';
        }
 
        if (horaAgendamento === '') {
            mensagemErro += 'Por favor, informe a hora do agendamento.\n';
        }
 
        var mensagemSucesso = document.getElementById('mensagem-sucesso');
 
        if (mensagemErro !== '') {
            alert(mensagemErro);
            mensagemSucesso.classList.add('hidden');
            return false; // A validação falhou
        } else {
            mensagemSucesso.classList.remove('hidden');
            return true; // A validação passou
        }
    }
 })

 /*form-novaconta*/

const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");
const endereco = document.getElementById("endereco")


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória.")
  }else if(passwordValue.length < 8){
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if(confirmationPasswordValue === ""){
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
  }else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation, "As senhas não são iguais.")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }


}


function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}
