
$(document).ready(function(){
    
    $(".card").click(function(){
        $(this).addClass("visible");
    });

    $('.card').click(function() {
    $('#flips').html(function(i, val) { return val*1+1 });
});

});