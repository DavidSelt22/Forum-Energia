$(document).ready(function () {

  var flag = false;
  var scroll;


  $(window).scroll(function () {

    scroll = $(window).scrollTop();

    if (scroll > 80) {

      if (!flag) {

        $('header').css({ });
        flag = true;
        $('#logotipo').css({ "height": "65px" });
        flag = true;
        $('.logo').css({ "height": "65px" });
        flag = true;
        $('header label').css({ "margin-top": "13px" });
        flag = true;
        $('.menu-despleg').css({ "top": "60px" });
        flag = true;



      }


    } else {

      if (flag) {
        $(' header').css({ });
        flag = false;
        $('#logotipo').css({ "height": "75px" });
        flag = false;
        $('.logo').css({ "height": "70px" });
        flag = false;
        $('header label').css({ "margin-top": "17px" });
        flag = false;
        $('.menu-despleg').css({ "top": "75px" });
        flag = false;





      }







    }/*/else*/


  });


  $('.flecha').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 2000);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.flecha').fadeIn();
    } else {
      $('.flecha').fadeOut();
    }
  });




  $('.icon').click(function () {
    $('.icon').toggleClass('active');
  });

  $('.icon').on('click', function () {

    $('.menu-despleg').toggleClass('menu-despleg2');

  });

  $("#button-menu").click(function () { $(".menu-despleg").toggleClass('menu-visible') });

   $("#p").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".programa").offset().top
    }, 2000);
});
    $("#exp").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".exposit").offset().top
    }, 2000);
});

  $("#p2").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".programa").offset().top
    }, 2000);
});
    $("#exp2").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".exposit").offset().top
    }, 2000);
});

       $("#f").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-fotos").offset().top
    }, 2000);
});
    $("#fd").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-fotos").offset().top
    }, 2000);
});
    $("#v").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-videos").offset().top
    }, 2000);
});
    $("#vd").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-videos").offset().top
    }, 2000);
});









 $(".accordion-titulo2").click(function(){
    
   var contenido=$(this).next(".accordion-content2");
      
   if(contenido.css("display")=="none"){ //open   
      contenido.slideDown(250); 
      $(this).addClass("open");
        

   }
   else{ //close    
      contenido.slideUp(250);
      $(this).removeClass("open"); 

  }
              
});


        $(".f1").click(function(){
        $("#popfoto").fadeIn();
       });
       $("#exit").click(function(){
        $("#popfoto").fadeOut();
       });


       $(".v1").click(function(){
        $("#popvideo").fadeIn();
       });
       $("#exit").click(function(){
        $("#popvideo").fadeOut();
       });
       
       $(".v1").click(function(){
        $("#popvideo").fadeIn();
       });
       $("#exit2").click(function(){
        $("#popvideo").fadeOut();
       });






});