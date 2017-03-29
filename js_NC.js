$(document).ready(function(){


$('img').click(function() {
  //  $(this).attr('placeholder','data-alt-src',));

   // temp
   var temp = $(this).attr('src');
   console.log(temp);
   // make the first thing the second thing
   var alt = $(this).attr('data-alt-src');
   console.log(alt);

   $(this).attr('src', alt);

   // make the second thing temp
   $(this).attr('data-alt-src', temp);

});






});
