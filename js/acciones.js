//JavaScript
	var audio;
	
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('mario','audio/mario.mp3',function(msg){},function(msg){alert('error: ' +msg);});
	
    $('#Beep').bind ("tap",
function(e){
	navigator.notification.beep(1);
  });//click Beep
   $('#Vibrar').bind ("tap",
function(e){
	navigator.notification.vibrate(1000);
  });//click Vibrar
    $('#Play').bind ("tap",
function(e){
	audio.play('mario');
  });//click Vibrar
	});//device ready
});//ready