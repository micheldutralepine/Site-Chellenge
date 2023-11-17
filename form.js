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
});
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
