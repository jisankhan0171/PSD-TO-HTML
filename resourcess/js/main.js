
$(document).ready(function(){
  // progress bar  
   $('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
}); 
   // tab 
    var mixer = mixitup('.mymix');
    //sticky nav
    $('.survicess').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
        
    },
     {offset:' 15%'}                       
);
    
    
   
});

  