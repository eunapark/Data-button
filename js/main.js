(function(){

	d3.csv('data/DOITT_SUBWAY_ENTRANCE_01_13SEPT2010.csv', function(error, subwayData){
		if(error){
			console.log(error);
		}

		subwayData.forEach(function(subwayStation){
			var delimiter = '(';
			var subway_station_name_parts = subwayStation.name.split(delimiter);
			var subway_direction = subway_station_name_parts[1];
		
			if (subway_direction){
				subway_direction = subway_direction.replace(/\)/g, ' ');
				subwayStation.direction = subway_direction; 
			}

			subwayStation.name = subway_station_name_parts[0].trim();
		
			subwayStation.lineList = subwayStation.line.split('-');
		});


		var OneLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '1'); 
		});

		var TwoLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '2'); 
		});

		var ThreeLineStops = subwayStations.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '3'); 
		});



		OneLineStops.forEach(function(subwayStation){
			$('#canvas').append('<div class="name">' + subwayStation.name  + '</div>' + subwayStation.lineList.join(' - ') + '</div>' + '</br>');
			console.log("one line stops");
		});

		TwoLineStops.forEach(function(subwayStation){
			$('#canvas').append('<div class="name">' + subwayStation.name  + '</div>' + subwayStation.lineList.join(' - ') + '</div>' + '</br>');
			console.log("two line stops");
		});

		ThreeLineStops.forEach(function(subwayStation){
			$('#canvas').append('<div class="name">' + subwayStation.name  + '</div>' + subwayStation.lineList.join(' - ') + '</div>' + '</br>');
			console.log("three line stops");
		});

		$('#OneLine').on('click', function(){
    		map.locate({setView: true});
   		 	console.log('User Location');
 		});


}).call(this);


