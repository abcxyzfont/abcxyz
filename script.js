//Function
//Word for the random word generator
function Wordbank() {
 message = ["Good!","Awesome!","Super!","Nice!","Great!"];
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
