var orm = require('../config/orm.js');


module.exports = {
	getBurgers: function(callback) {
		console.log ("burgers.getBurgers()");
		orm.selectAll(function(res){
			console.log ("burgers.getBurgers() callback");
			callback(res);
		});
		console.log ("burgers.getBurgers() END");
		// return temp;
	},
	addBurger: function(burger, callback)
	{
		console.log ("burgers.addBurger()", burger);
		 orm.insertOne(burger, function(res){
			callback(res);
		});
		 console.log ("burgers.addBurger() END");
	},
	devourBurger: function(number, callback) {
		console.log ("burgers.devourBurger()", number);
		 orm.updateOne(number, function(res){
			callback(res);
		});
		 console.log ("burgers.devourBurger() END");
	}
}
// 
// 
// 