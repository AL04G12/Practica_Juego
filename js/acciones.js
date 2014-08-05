//JavaScript
	
$(document).ready(function(e){
	
 
    $('#Beep').click(
function(e){
	navigator.notification.beep(1);
  });//click Beep
   $('#Vibrar').click(
function(e){
	navigator.notification.vibrate(1000);
  });//click Vibrar
});//ready