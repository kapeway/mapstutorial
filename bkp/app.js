var app = angular.module("addressSearchApp", []);


app.directive("map",function(){
	return{
		restrict:'E',
		template:'<div></div>',
		replace:true,
		link:function(scope,element,attrs){
			var map;
			var myLatLng=new google.maps.LatLng(13.0827,80.2707);
			var loadMap=function(lat, lng) {
				map = new google.maps.Map(document.getElementById(attrs.id), {
				  center: myLatLng,
				  zoom: 10
				});
			}
		}
	};
});


app.controller('addressSearchCtrl', function($scope, $http) {

$scope.location={lat:13.0827,lng:80.2707};

$http.get("https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&key=AIzaSyCnI89R9_5DcPldlSNI8gI5h0JjVoAQfKQ").then(function(response) {
$scope.location = response.data.results[0].geometry.location;
		console.log('latitude:'+$scope.location.lat);
		console.log('logitude:'+$scope.location.lng);
});
});
