$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeTo(2000,0.2);
  // $(".green-box").fadeTo(2000,0.5);
  // $(".blue-box").fadeTo(2000,0.8);

  //$(".blue-box").fadeToggle();
  //$(".blue-box").fadeToggle();

/*  $(".blue-box").animate({
      "margin-left": "+=200px"
  }, 1500, "linear");

  $(".blue-box").animate({
      "margin-left": "-=200px"
  }, 1500, "linear");*/


  // $(".blue-box").animate({
  //     "margin-left": "200px",
  //     "opacity": "0",
  //     "height": "50px",
  //     "margin-top": "25px"
  // }, 1500, "linear");
  
  // $("p").animate({
  //     "font-size": "20px"
  // }, 1000);

  // $(".red-box").fadeTo(2000,0.2);
  // $(".green-box").delay(1000).fadeTo(2000,0.5);
  // $(".blue-box").delay(2000).fadeTo(2000,0.8).fadeOut().delay(1500).fadeIn();

  $(".red-box").fadeTo(2000,0.5, function() {
      $(".green-box").fadeTo(2000,0.5, function() {
         $(".blue-box").fadeTo(2000,0.5);  
      });
  });

});