window.addEventListener('load', function() {

    const registrationForm = document.querySelector('form.registration');

    const fieldPassword = document.getElementById('password');
    const passwordStatus = document.getElementById('password-status');
    const fieldEmail = document.getElementById('email');
    const fieldConfirmEmail = document.getElementById("email-confirm");
    const fieldData = document.getElementById('data');

    registrationForm.addEventListener('submit', (event) => {
    // Validação E-mail 
        if (fieldEmail.value != fieldConfirmEmail.value) {
            alert('Os e-mails não são iguais!');
            event.preventDefault();
        };

    // Validação Data
        const dataPattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
        if (dataPattern.test(fieldData.value) == false) {
            alert('Data inválida, digite uma data correta!');
            event.preventDefault();
        };

    // Validação Senha
        const passwordPattern = /^(?=.*?[A-Z]).{12,}$/;
        if (passwordPattern.test(fieldPassword.value) == false) {
            alert('Senha não confere!');
            event.preventDefault();
        };
    });
    

    // Segunda Validação Senha
    fieldPassword.addEventListener("input", (event) => {
        const input = event.target.value;
        const passwordPattern = /^(?=.*?[A-Z]).{12,}$/;
        if (passwordPattern.test(input) == false) {
            passwordStatus.innerText = "Senha deve ter 12 dígitos e uma letra maiúscula"
        } else {
            passwordStatus.innerText = "Senha OK"
        };
    });
})