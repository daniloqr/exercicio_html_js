const form = document.getElementById('form-event');

form.addEventListener('submit', function(event){
    
    event.preventDefault();
// Impede o envio do formulário

    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;
    var mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.className = "valid-message";
        mensagem.style.color = 'green';
        campoA = '';
        campoB = '';
        
    } else {
        mensagem.textContent = "Formulário inválido, o valor de 'B' precisa ser maior do que o valor de 'A' !";
        mensagem.className = "invalid-message";
        mensagem.style.color = 'red';
    }

    })

20