$.ajaxSetup ({  
  cache: false  
}); 

$(document).ready(function onReady() {
  $("#raw").keyup(function onKeyUp() {
    $("#rendered").load("/render", { raw: this.value })
  });
});