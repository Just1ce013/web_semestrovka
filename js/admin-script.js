$(document).ready(
    function() {
        $('.authorization-back').hide();
        $('authorization').hide();
        $('.top-part__log-in-button').click(function(){
            $('.authorization').show();
            $('.authorization').show();
        });
        $('.top-part__log-in-button').click(function(){
            $('.authorization-back').show();
            $('.authorization').show();
        });
        $(".authorization-back").on('click', function (e) {
            if (e.target == this) closeModal()
        });
        $('.authorization__close-button').click(function(){
            closeModal()
        });
        $('.authorization__button').click(function(){
            let isValidMail = checkEmail();
            if (isValidMail) {
                let isValidPswd = checkPswd();
                if (isValidPswd){
                    window.location.href = 'admin.html';
                }
            }
        });
    }
);

function checkPswd(){
    if (document.getElementById("passwd").value.length > 5){
        return true;
    }
    else {
        alert('Слишком короткий пароль!!!');
        return false;
    }
}

function checkEmail(){
    if (document.getElementById("mail").value.length > 4){
        let email = $('#mail[type=email]').val();
        
        if (email.length > 0
        && (email.match(/.+?\@.+/g) || []).length !== 1) {
            console.log('invalid');
            alert('Вы ввели некорректный e-mail!');
            return false;
        } else {
            console.log('valid');
            return true;
        }
    }
    else {
        alert('Некорректные данные авторизации!!!');
        return false;
    }
}
    

function closeModal(){
    $('.authorization-back').fadeOut('fast');
    $('.authorization').fadeOut('fast');
    $('#mail').val('');
    $('#passwd').val('');
}