//Function
//Word for the random word generator
function Wordbank() {
 message = ["Love Me \nLove me love me \nSay that you love me \nFool me fool me \nGo on and fool me \nLove me love me \nPretend that you love me\nLeave me leave me \nJust say that you need me","The smile on your face let's me know that you need me\nThere's a truth in your eyes saying you'll never leave me\nThe touch of your hand says you'll catch me wherever I fall\nYou say it best \nWhen you say nothing at all","Super!","Nice!","Great!"];
 return message[Math.floor(Math.random() * message.length)];
};


//Command
$(document).ready(function(){

//HoverGif
$("#one")
  .on("mouseenter", function() {
    $(".bgone").show();
    })
  .on("mouseleave", function() {
    $(".bgone").hide();
    });

$("#two")
  .on("mouseenter", function() {
    $(".bgtwo").show();
    })
  .on("mouseleave", function() {
    $(".bgtwo").hide();
    });


//Scroll
$('a[href*="#"]').on('click', function(event) {
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
  });


//Reset button
$('#buttonone').click(function(){
    $('#sil').val(Wordbank());    
});

});

