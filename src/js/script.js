$('.nav-menu-btn').on('click', function(){
			$(this).closest('.nav-menu').toggleClass('menu-open');
});
$('.footerAncor').on('click',function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });