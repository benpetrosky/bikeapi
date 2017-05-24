Bike = function(){
};

Bike.prototype.getBike = function(city, displayYear) {
$.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=https://bikeindex.org/api/v3/swagger_doc?q=' + city).then(function(response){
      console.log(response);
      displayYear(response.bike.year);
});
};
exports.bikeModule = Bike;
