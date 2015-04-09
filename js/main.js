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

		var OneLineStops = subwayData.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '1');
		});

		var TwoLineStops = subwayData.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '2'); 
		});

		var ThreeLineStops = subwayData.filter(function(subwayStation){
			return _.contains(subwayStation.lineList, '3'); 
		});

		function showOne() {
		OneLineStops.forEach(function(subwayStation){
			$('#canvas').append('<div class="name">' + subwayStation.name  + '</div>' + subwayStation.lineList.join(' - ') + '</div>' + '</br>'); 
		});
	}

		OneLineStops.forEach(function(subwayStation){
			$('.OneLine').on('click', function(showOne){
			console.log("one line stops");
			});
		})
		
		// TwoLineStops.forEach(function(subwayStation){
		// 	$('#canvas').append('<div class="name">' + subwayStation.name  + '</div>' + subwayStation.lineList.join(' - ') + '</div>' + '</br>');
		// 	console.log("two line stops");
		// });

		// ThreeLineStops.forEach(function(subwayStation){
		// 	$('#canvas').append('<div class="name">' + subwayStation.name  + '</div>' + subwayStation.lineList.join(' - ') + '</div>' + '</br>');
		// 	console.log("three line stops");
		// });
	})

}).call(this);


