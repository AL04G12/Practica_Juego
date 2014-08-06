//JavaScript
	var audio;
$(document).ready(function(e){
	if (window.plugins&&window.plugins.LowLatencyAudio)
	
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('mario','audio/mario.mp3', function(msg){},
	    function(msg){alert('error: ' +msg);});

    $('#Beep').tap(
function(e){
	navigator.notification.beep(1);
  });//click Beep
   $('#Vibrar').tap(
function(e){
	navigator.notification.vibrate(1000);
  });//click Vibrar
    $('#Play').tap(
function(e){
	audio.play('mario');
  });//click Vibrar
  
});//ready