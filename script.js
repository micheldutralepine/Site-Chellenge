
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
      alert("atualizado com sucesso")
    return true; // Retorna true se o formulário estiver válido e pode ser enviado
  }
  


