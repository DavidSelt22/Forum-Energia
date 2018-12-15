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

  // $("#button-menu").click(function () { $(".menu-despleg").toggleClass('menu-visible') });


   $("#p").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".programa").offset().top
    }, 1800);
});
    $("#exp").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".exposit").offset().top
    }, 1800);
});

  $("#p2").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".programa").offset().top
    }, 1800);
});
   
   $("#p2").click(function () {
      
      if($("#p2")==$(".programa")){$(".menu-despleg").toggleClass('menu-invisible')}
        else{$(".menu-despleg").toggleClass('menu-visible')}
       
    });




    $("#exp2").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".exposit").offset().top
    }, 1800);
});

     $("#exp2").click(function () {
      
      if($("#p2")==$(".exposit")){$(".menu-despleg").toggleClass('menu-invisible')}
        else{$(".menu-despleg").toggleClass('menu-visible')}
       
    });


    $("#f").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-fotos").offset().top
    }, 1800);
   });
    $("#fd").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-fotos").offset().top
    }, 1800);
});
    $("#v").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-videos").offset().top
    }, 1800);
});
    $("#vd").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".cont-videos").offset().top
    }, 1800);
});



    $("#agenda").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".programa").offset().top
    }, 2000);
});



    $("#exposit").click(function () {
   
    $('html,body').animate({
        scrollTop: $(".exposit").offset().top
    }, 2000);
});



 $("#button-menu").click(function () { $(".menu-despleg").toggleClass('menu-visible') });




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



   



    

    //   $("#mostrar").click(function(event){
   
    //     event.preventDefault();
    //     $("#oculto").show("1000");
     
    // });

    // $("#mostrar").click(function () { $("#contenidotexto").addClass('#mostrarcontenido') });


    //  $("#mostrar").click(function () {
      
    //   if($("#contenidotexto")==$("#contenidotexto")){$(".#contenidotexto").toggleClass('#mostrarcontenido')}
    //     else{$("#contenidotexto").toggleClass('#mostrarcontenido')}
       
    // });



 $("#mostrar").click(function(){
   $(".contenidotexto").addClass("mostrarcontenido");
 });

 $("#ocultar").click(function(event){
  $(".contenidotexto").removeClass("mostrarcontenido");
     
 });

 $("#mostrar1").click(function(){
   $(".contenidotexto1").addClass("mostrarcontenido");
 });

 $("#ocultar1").click(function(event){
  $(".contenidotexto1").removeClass("mostrarcontenido");
     
 });
 $("#mostrar2").click(function(){
   $(".contenidotexto2").addClass("mostrarcontenido2");
 });

 $("#ocultar2").click(function(event){
  $(".contenidotexto2").removeClass("mostrarcontenido2");
     
 });
 $("#mostrar3").click(function(){
   $(".contenidotexto3").addClass("mostrarcontenido");
 });

 $("#ocultar3").click(function(event){
  $(".contenidotexto3").removeClass("mostrarcontenido");
     
 });
 $("#mostrar4").click(function(){
   $(".contenidotexto4").addClass("mostrarcontenido");
 });

 $("#ocultar4").click(function(event){
  $(".contenidotexto4").removeClass("mostrarcontenido");
     
 });
 $("#mostrar5").click(function(){
   $(".contenidotexto5").addClass("mostrarcontenido");
 });

 $("#ocultar5").click(function(event){
  $(".contenidotexto5").removeClass("mostrarcontenido");
     
 });
 $("#mostrar6").click(function(){
   $(".contenidotexto6").addClass("mostrarcontenido");
 });

 $("#ocultar6").click(function(event){
  $(".contenidotexto6").removeClass("mostrarcontenido");
     
 });
 $("#mostrar7").click(function(){
   $(".contenidotexto7").addClass("mostrarcontenido");
 });

 $("#ocultar7").click(function(event){
  $(".contenidotexto7").removeClass("mostrarcontenido");
     
 });
 $("#mostrar8").click(function(){
   $(".contenidotexto8").addClass("mostrarcontenido");
 });

 $("#ocultar8").click(function(event){
  $(".contenidotexto8").removeClass("mostrarcontenido");
     
 });
 $("#mostrar9").click(function(){
   $(".contenidotexto9").addClass("mostrarcontenido");
 });

 $("#ocultar9").click(function(event){
  $(".contenidotexto9").removeClass("mostrarcontenido");
     
 });
 $("#mostrar10").click(function(){
   $(".contenidotexto10").addClass("mostrarcontenido");
 });

 $("#ocultar10").click(function(event){
  $(".contenidotexto10").removeClass("mostrarcontenido");
     
 });
 $("#mostrar11").click(function(){
   $(".contenidotexto11").addClass("mostrarcontenido");
 });

 $("#ocultar11").click(function(event){
  $(".contenidotexto11").removeClass("mostrarcontenido");
     
 });
 $("#mostrar12").click(function(){
   $(".contenidotexto12").addClass("mostrarcontenido");
 });

 $("#ocultar12").click(function(event){
  $(".contenidotexto12").removeClass("mostrarcontenido");
     
 });
 $("#mostrar13").click(function(){
   $(".contenidotexto13").addClass("mostrarcontenido");
 });

 $("#ocultar13").click(function(event){
  $(".contenidotexto13").removeClass("mostrarcontenido");
     
 });
 $("#mostrar14").click(function(){
   $(".contenidotexto14").addClass("mostrarcontenido");
 });

 $("#ocultar14").click(function(event){
  $(".contenidotexto14").removeClass("mostrarcontenido");
     
 });
 $("#mostrar15").click(function(){
   $(".contenidotexto15").addClass("mostrarcontenido");
 });

 $("#ocultar15").click(function(event){
  $(".contenidotexto15").removeClass("mostrarcontenido");
     
 });













});