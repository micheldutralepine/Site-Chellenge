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
  } function validarFormulario() {
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
      alert("atualizado com sucesso")
    return true; // Retorna true se o formulário estiver válido e pode ser enviado
  }
  




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
  