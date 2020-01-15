$(document).ready(function() {
  $("#formi").submit(function(event) {
    var inputy = $('#inputy').val()
    var inputer = (inputy).toUpperCase();
    $('#shout').text(inputer);

    event.preventDefault();
  });
});