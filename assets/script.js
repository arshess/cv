$(function(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);    
    });
      
    var discord = $('#tocopy');
    $('#btn-discord').click(function(){
        navigator.clipboard.writeText('Arshess#1700');   
    });

    // const target = document.querySelector('section');
    // // const options = {
    // //     threshold: 0.50,
    // //   }
    // function jsp(truc){
    //     console.log("coucou");
    // }
    // const observer = new IntersectionObserver(jsp);
    // observer.observe(target);

    // Navigation active state on scroll

    //test méthode 2
    var nav_sections = $('section');
    var main_nav = $('#menu');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
            }
            console.log(main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li'));
            // main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
            $(".nav-menu ul:first li:first").addClass('active');
        }
        });
    });
});