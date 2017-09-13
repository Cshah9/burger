var connection = require('./connection.js');


module.exports = {
	selectAll: function() {

		console.log ("orm.selectAll()");

		connection.query('SELECT * FROM burgers', function(err, res){
			// console.log ("res", res);
			for (var i = 0; i < res.length; i++) {
				console.log(res[i]);
			}

		});


	},

	insertOne: function(burgerName) {

		console.log ("orm.insertOne()");


		connection.query("INSERT INTO burgers(burger_name, devoured, date) VALUES ('"+burgerName+"', 0, CURRENT_TIMESTAMP)", function(err, res){
			console.log ("res", res);
			// for (var i = 0; i < res.length; i++) {
			// 	console.log(res[i]);
			// }

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


