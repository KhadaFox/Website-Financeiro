document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});