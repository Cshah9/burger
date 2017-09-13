var connection = require('./connection.js');


module.exports = {
	selectAll: function() {
		var burgers= [];
		console.log ("orm.selectAll()");

		connection.query('SELECT * FROM burgers', function(err, res){
			// console.log ("res", res);
			for (var i = 0; i < res.length; i++) {
				console.log(res[i]);
				burgers.push({id: res[i], name: res[i].burger_name, devoured: res[i].devoured});
			}

		});
		console.log("burgers", burgers);
		return burgers;

	},

	insertOne: function(burgerName) {

		console.log ("orm.insertOne()");


		connection.query("INSERT INTO burgers(burger_name, devoured, date) VALUES ('"+burgerName+"', 0, CURRENT_TIMESTAMP)", function(err, res){
			console.log ("res", res);
			// for (var i = 0; i < res.length; i++) {
			// 	console.log(res[i]);
			// }
			console.log("res.insertId", res.insertId)
			return res.insertId;

		});
	},

	updateOne: function(burgerId) {

		console.log ("orm.updateOne()");
		

		connection.query("UPDATE burgers SET devoured=1 WHERE id='"+burgerId+"'", function(err, res){
			console.log ("res", res);
			// for (var i = 0; i < res.length; i++) {
			// 	console.log(res[i]);
			// }

		});

	}
}


