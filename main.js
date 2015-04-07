
$(document).ready(function(){
    $(".img").hide(); // gömmer alla bilder med klassen .img
    $(".img").first().addClass("active"); // ger den första av bilderna i klassen img klassen active
    $(".active").show(); // visar bilden med klassen active

    

function right() {
     if ($(".active").is(":last-child")) { // om active är den sista bilden...

            $(".img").first().addClass("active"); //...ge den första img klassen active
            $(".img").last().removeClass("active"); // och ta bort klassen active från den sista bilden
            $(".img").fadeOut(1500); //fadout img 
            $(".active").fadeIn(1500); // fadeout active
        }
        else { //annars...
            
            $(".active").next(".img").addClass("active"); //..sätt nästa .img efter .acticve till .active
            $(".active").prev(".active").removeClass("active"); // och ta bort .active från den som precis var .active
            $(".img").fadeOut(1500);
            $(".active").fadeIn(1500);
        }
}

function left() { // samma som right() fast åt andra hållet
    if ($(".active").is(":first-child")) {

        $(".img").last().addClass("active"); 
        $(".img").first().removeClass("active"); 
        $(".img").fadeOut(1500); 
        $(".active").fadeIn(1500); 
    } 
    else{
        $(".active").prev('.img').addClass("active"); 
        $(".active").next('.active').removeClass("active"); 
        $(".img").fadeOut(1500); 
        $(".active").fadeIn(1500); 
    }
}


$("#btn-right").click(function(){ // när man klickar på knapp right kör funktion right()
    right();
}); 
$("#btn-left").click(function(){ // när man klickar på knapp left kör funktion left()
    left();
    }); 
$(window).keydown(function(e) { //om man trycker på högerpil eller vänsterpil på tangentbordet så körs respektive funktion
        var key = e.keyCode;
        if(key==39) { 
            right();
        }if(key==37) {
            left();
        }
    });
});

 