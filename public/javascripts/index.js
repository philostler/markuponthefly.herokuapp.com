$(document).ready(function onReady() {
  $("#raw").keyup(function onKeyUp() {
    $("#rendered").html(this.value);
  });
});