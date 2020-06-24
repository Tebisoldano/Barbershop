$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var mover = this.hash;

      $("html, body").animate({
        scrollTop: $(mover).offset().top
      }, 800, function(){
        window.location = mover;

      });
    }
  });
});
