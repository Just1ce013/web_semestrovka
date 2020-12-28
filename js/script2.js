jQuery(document).ready(function ($) {
        $('.authorization-back').hide();
        $('authorization').hide();
        document.getElementById('item2').style.visibility='hidden';
        $('.header__log-in-button').click(function(){
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

        var slides = $("#slider #slides").children(".header__item");
        var width = $("#slider #slides").width();
        var i = slides.length;
        var offset = i * width + 50;
        i--;

        $("#slider #slides").css('width',offset);
        
        offset = 0;
        $(".dot__right").click(function(){
            document.getElementById('item1').style.visibility='hidden';
            document.getElementById('item2').style.visibility='visible';
            if (offset < width * i) {
                offset += width;
                $(".header__item").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
                document.getElementsByClassName('dot__left')[0].style.background='#264160';
                document.getElementsByClassName('dot__right')[0].style.background='#346491';
            }
        });

        $(".dot__left").click(function(){
            document.getElementById('item2').style.visibility='hidden';
            document.getElementById('item1').style.visibility='visible';
            if (offset > 0) {
                offset -= width;
                $(".header__item").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
                document.getElementsByClassName('dot__left')[0].style.background='#346491';
                document.getElementsByClassName('dot__right')[0].style.background='#264160';
            }
        });

        function test(){
            offset = 0;
            if (document.getElementById('item2').style.visibility == 'visible'){
                
            }
        }
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