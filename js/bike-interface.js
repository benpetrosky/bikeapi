// var apiKey = "";
var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  $('#location-submit').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.info').text("The city you have chosen is " + city + ".");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=https://bikeindex.org/api/v3/swagger_doc?q=' + city, function(response){
  console.log(response);
    });
  });
});
