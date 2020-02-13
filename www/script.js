$(window).scroll(function(e){
  if ($(window).scrollTop()<=700)
    $(".explore,.navbar").addClass("at_top");
  else
    $(".explore,.navbar").removeClass("at_top");
});

$(document).on('click','a',function(event){
  event.preventDefault();
  var target=$(this).attr("href");
  
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500);
});


$(window).mousemove(function(evt){
  var pagex=evt.pageX;
  var pagey=evt.pageY;
  
  var x=pagex-$("header#header_index").offset().left;
  var y=pagey-$("header#header_index").offset().top;
  
  // console.log(x+","+y)
  
  if (y < 0 || y>$("header#header_index").outerHeight())
    $("#mouse_icon").css("opacity",0);
  else
    $("#mouse_icon").css("opacity",1);
  
  $("#mouse_icon").css("left",x+"px");
  $("#mouse_icon").css("top",y+"px");
 
  
  $(".move").css("transform","translateX("+(pagex/-20+30)+"px)");
  
  
  
  
});