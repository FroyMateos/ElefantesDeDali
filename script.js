//scroll navbar

const header = document.querySelector('header');


window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    if (top >= 100) {
        header.classList.add('active')
    }
    else {
        header.classList.remove('active');
    }
}

//toggle

$(document).ready(main);

var contador = 1;

function main() {
    $('.checkbtn').click(function () {
        // $('nav').toggle(); 

        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });

};