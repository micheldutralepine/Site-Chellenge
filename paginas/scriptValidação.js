document.querySelector('[name="cadastrar"]').addEventListener('click', function(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value;
  var rg = document.getElementById('rg').value;
  var pai = document.getElementById('pai').value;
  var agendamento = document.getElementById('agendamento').value;
  var email = document.getElementById('email').value;
  var nascimento = document.getElementById('nascimento').value;
  var cpf = document.getElementById('cpf').value;
  var mae = document.getElementById('mae').value;
  var celular = document.getElementById('celular').value;

  // Limite de caracteres para cada campo
  var maxNome = 50;
  var maxRg = 10;
  var maxPai = 50;
  var maxAgendamento = 20;
  var maxEmail = 50;
  var maxNascimento = 10;
  var maxCpf = 11;
  var maxMae = 50;
  var maxCelular = 15;

  if (nome === '' || nome.length > maxNome) {
    alert('O campo Nome é obrigatório e deve ter no máximo ' + maxNome + ' caracteres!');
    return;
  }

  if (rg === '' || rg.length > maxRg) {
    alert('O campo RG é obrigatório e deve ter no máximo ' + maxRg + ' caracteres!');
    return;
  }

  // Pai agora é opcional
  if (pai.length > maxPai) {
    alert('O campo Pai deve ter no máximo ' + maxPai + ' caracteres!');
    return;
  }

  if (agendamento === '' || agendamento.length > maxAgendamento) {
    alert('O campo Agendamento é obrigatório e deve ter no máximo ' + maxAgendamento + ' caracteres!');
    return;
  }

  if (email === '' || email.length > maxEmail) {
    alert('O campo Email é obrigatório e deve ter no máximo ' + maxEmail + ' caracteres!');
    return;
  }

  if (nascimento === '' || nascimento.length > maxNascimento) {
    alert('O campo Nascimento é obrigatório e deve ter no máximo ' + maxNascimento + ' caracteres!');
    return;
  }

  if (cpf === '' || cpf.length > maxCpf) {
    alert('O campo CPF é obrigatório e deve ter no máximo ' + maxCpf + ' caracteres!');
    return;
  }

  // Mãe agora é opcional
  if (mae.length > maxMae) {
    alert('O campo Mãe deve ter no máximo ' + maxMae + ' caracteres!');
    return;
  }

  if (celular === '' || celular.length > maxCelular) {
    alert('O campo Celular é obrigatório e deve ter no máximo ' + maxCelular + ' caracteres!');
    return;
  }

  // Validações adicionais aqui, se necessário
  alert('Cadastro realizado com sucesso!');
});

/*javaSvript botoes home */
document.addEventListener("DOMContentLoaded", function () {
  var btnHistoria = document.getElementById("btnHistoria");
  var btnProjeto = document.getElementById("btnProjeto");
  var btnAtendimento = document.getElementById("btnAtendimento");

  var infoHistoria = document.querySelector(".info-historia");
  var infoProjeto = document.querySelector(".info-projeto");
  var infoAtendimento = document.querySelector(".info-atendimento");

  btnHistoria.addEventListener("click", function () {
    toggleInfo(infoHistoria);
  });

  btnProjeto.addEventListener("click", function () {
    toggleInfo(infoProjeto);
  });

  btnAtendimento.addEventListener("click", function () {
    toggleInfo(infoAtendimento);
  });

  function toggleInfo(info) {
    infoHistoria.style.display = "none";
    infoProjeto.style.display = "none";
    infoAtendimento.style.display = "none";

    info.style.display = "block";
  }
});




 
    /* mostrar historico  */
    function toggleClasse() {
      var historicoExames = document.getElementById("historico-tratamento");
      historicoExames.classList.toggle("escondida");
  }
  /*atualizando perfilpersonalizado*/
  function validarFormulario() {
    // Adicione suas validações aqui
    var nome = document.getElementById('nome-paciente').value;
    var idade = document.getElementById('idade-paciente').value;
    var corFav = document.getElementById('cor-fav').value;
    var comidaFav = document.getElementById('comida-fav').value;
    var hobbies = document.getElementById('hobbies').value;
    var alergias = document.getElementById('alergias').value;

    // Exemplo de validação simples
    if (nome === '' || idade === '' || corFav === '' || comidaFav === '' || hobbies === '' || alergias === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    // Adicione mais validações conforme necessário

    return true; // Retorna true se o formulário estiver válido e pode ser enviado
  }
   /**banner animação  */

   let currentIndex = 0;

   function showSlide(index) {
     const carousel = document.querySelector('.carousel');
     const slides = document.querySelectorAll('.slide');
   
     if (index < 0) {
       currentIndex = slides.length - 1;
     } else if (index >= slides.length) {
       currentIndex = 0;
     } else {
       currentIndex = index;
     }
   
     const translateValue = -currentIndex * 100 + '%';
     carousel.style.transform = 'translateX(' + translateValue + ')';
   }
   
   function nextSlide() {
     showSlide(currentIndex + 1);
   }
   
   function prevSlide() {
     showSlide(currentIndex - 1);
   }
   
   // Autoplay (opcional)
   setInterval(nextSlide, 3000);
   
   // Inicialização
   showSlide(currentIndex);
   