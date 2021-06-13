// Menu Button Design

function openMenu() {
    document.getElementById('nevbar').style.width="100%";
}

function closeMenu() {
    document.getElementById('nevbar').style.width="0%";
}

//Smooth Scroll

$('.menu-list a, scroll-button a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false
});


//MixitUp
var mixer = mixitup('.grid-gallery');
