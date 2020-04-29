$(document).ready(function(){   
       
    var $navbar = $("#xyz"),
        y_pos = $navbar.offset().top;
        winwidth= $(window).width();
    var $mainopt = $(".mainopt");
     if(($(window).width())<=768){ $mainopt.removeClass("mmopt");}
        else if(($(window).width())>768){$mainopt.addClass("mmopt");}
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos) 
            $navbar.addClass("fixit");
        else if (scrollTop <= (y_pos)) 
            $navbar.removeClass("fixit");
                
    })
    $( window ).resize(function() {
        if(($(window).width())<=768){ $mainopt.removeClass("mmopt");}
        else if(($(window).width())>768){$mainopt.addClass("mmopt");}
   })
});


