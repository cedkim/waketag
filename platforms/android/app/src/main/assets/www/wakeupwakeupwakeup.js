/* Waketag */
var tapped;
tapped = false;
document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener("deviceready", function() {
    beepBeepBeep = new Media("beep.wav", function(){
      beepBeepBeep.seekTo(0);
      beepBeepBeep.play();
    });
    beepBeepBeep.play();
    nfc.addNdefListener(function() {
      if (tapped != true) {
        tapped = false;
        window.overApps.closeOverApp();
      }
    });
  }, false);
});