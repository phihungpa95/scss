const metas = document.getElementsByTagName('meta');
for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === 'viewport') {
        var is_iPad = navigator.userAgent.match(/iPad/i) != null;
        if (is_iPad) {
            metas[i].setAttribute('content', 'width=1280px');
        } else {
            metas[i].setAttribute('content', 'width=device-width,minimum-scale=1,initial-scale=1');
        }
    }
}

// jQuery(document).ready(function ($) {

//     var navbar_menu = $('.navbar-menu');
//     var navbar_btn = document.querySelector('.navbar_btn');
//     navbar_btn.addEventListener('click', function () {
//         navbar_menu.addClass('show');
//     })
// })
