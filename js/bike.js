var appid = "02b6cd61f97488e3d720c0e0f614a6fa207faf0f52b6234a31357af5961295ce";

function Bike(color, year, image){
  this.color = color;
  this.year = year;
  this.image = image;
}

Bike.prototype.getBike = function(city, bikeInfo) {
  bikes = [];
$.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=10&stolenness=proximity&appid=' + appid).then(function(response){
  for (var i=0; i < 25; i++) {
    var color = response.bikes[i].frame_colors;
    var year = response.bikes[i].year;
    var image = response.bikes[i].thumb;
    newBike = new Bike(color, year, image);
    bikes.push(newBike);
    }
    bikeInfo(bikes);
  });
};

exports.bikeModule = Bike;
