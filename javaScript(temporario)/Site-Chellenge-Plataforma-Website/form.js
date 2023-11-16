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
