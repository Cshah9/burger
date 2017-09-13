var connection = require('./connection.js');


module.exports = {
	selectAll: function(callback) {
		var daBurgers= [];
		console.log ("orm.selectAll()");

		connection.query('SELECT * FROM burgers', function(err, res){
			// console.log ("res", res);
			for (var i = 0; i < res.length; i++) {
				console.log(res[i]);
				daBurgers.push({id: res[i].id, name: res[i].burger_name, devoured: res[i].devoured});
			}

			console.log("burgers", daBurgers);
			callback(daBurgers);
		});
		

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
			if(res.affectedRows == 1) return true;
			return false;

		});

	}
}


