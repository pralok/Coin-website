$select_menu = $("<select></select>");
$("#navigation").append($select_menu);

var select_val = $("#navigation ul li a").each(function(){
                                            
    var $option = $("<option></option>");
    $option.val($(this).attr("href"));
    $option.text($(this).text());
    $select_menu.append($option);
});

$select_menu.change(function(){
    window.location = $(this).val();
});




$("#navigation ul li a").click(function(){
    $("#navigation ul li").children().removeClass("selected");
    $(this).addClass("selected");
    
/*
    console.log($("hr").attr("class") === undefined);    
*/
    
    if($("hr").attr("class") === undefined){
        $("hr").addClass("animated rubberBand");
    }/*else{
        $("hr").removeClass("animated rubberBand");
        $("hr").addClass("animated rubberBand");
    }


    console.log($("hr").attr("class") === undefined);    
*/
    
    /*trial*/
    
/*
    $("hr").removeClass("animated rubberBand");
    $("hr").addClass("animated rubberBand");
*/
});


/*smooth scrolling */

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});















/*
$('.banner').unslider({
	speed: 1000,               //  The speed to animate each slide (in milliseconds)
	delay: 30000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: true,               //  Display dot navigation
	fluid: false              //  Support responsive design. May break non-responsive designs
});


$('.banner').unslider();

*/