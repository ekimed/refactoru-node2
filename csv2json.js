var fs = require('fs')


function csv2json (input, output) {
	var read = fs.readFileSync('input.csv', 'utf-8');

	//split by new line
	var read = read.split('\n');

	//get keys
	var header = read[0].split(',');

	//temp array to hold the objects
	var tempArray = [];
	

	for (var i = 1; i<read.length; i++) {
		var temp = {};

		var items = read[i].split(',');
		for (var j = 0; j<header.length; j ++) {
			temp[header[j]] = items[j];
		}

		tempArray.push(temp);
	}

	var jsonData = JSON.stringify(tempArray);
	var write = fs.writeFileSync(output, jsonData);
}

csv2json('input.csv', 'output.json')

