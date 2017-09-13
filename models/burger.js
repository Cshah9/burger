var orm = require('../config/orm.js');


module.exports = {
	getBurgers: function(callback) {
		console.log ("burgers.getBurgers()");
		var temp = orm.selectAll(function(res){
			callback(res);
		});
		console.log ("burgers.getBurgers() END temp", temp);
		// return temp;
	},
	addBurger: function(burger)
	{
		console.log ("burgers.addBurger()", burger);
		return orm.insertOne(burger);
	},
	devourBurger: function(number) {
		console.log ("burgers.devourBurger()", number);
		return orm.updateOne(number);
	}
}
// 
// 
// 