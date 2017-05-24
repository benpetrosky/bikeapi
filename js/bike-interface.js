var Bike = require('./../js/bike.js').bikeModule;

var bikeInfo = function(bikes){
  $('.info').text('');
  bikes.forEach(function(bike) {
    $('.info').append('<li><ul><li>Color:' + bike.color + '</li><li>Year: ' + bike.year + '</li><li>Picture: <img src="' + bike.image + '"</li>');
  });
};

$(document).ready(function(){
  var bikeSearch = new Bike();
  $('#location-submit').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    bikeSearch.getBike(city, bikeInfo);

  });
});

//     $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=Seattle,WA&distance=10&stolenness=proximity&access_token=https://bikeindex.org/api/v3/swagger_doc?q=' + city, function(response){
//     $('.info').text("The city you have chosen is " + city + ".  We also know  " + response.bikes);
//
//     console.log(response);
//     });
//   });
// });
