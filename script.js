//Login

$('#session').click(() => { localStorage.setItem('session', 'false') });

$('#logar').click((e) => {
    var emailLogin = $('#email');
    var senhaLogin = $('#senha');
    if (emailLogin.val() == localStorage.getItem('login') && senhaLogin.val() == localStorage.getItem('senha')) {
        localStorage.setItem('session', 'true');
        e.preventDefault();
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos');
    }
});


// Cadastro

$('#cadastrar').click((e) => {
    var email = $('#emailCad');
    var senha = $('#senhaCad');
    var confirma = $('#confirmaCad');

    if (senha.val() != confirma.val()) {
        alert('Senhas precisam ser iguais');
    } else {
        localStorage.setItem('login', email.val());
        localStorage.setItem('senha', senha.val());
        e.preventDefault();
        window.location.href = 'login.html';
    }
});



