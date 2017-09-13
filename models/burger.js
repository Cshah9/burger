var orm = require('./config/orm.js');


module.exports = {
	getBurgers: function() {
		console.log ("burgers.getBurgers()");
		return orm.selectAll();
	}
	addBurger: function(burger)
	{
		console.log ("burgers.addBurger()", burger);
		return orm.insertOne(burger);
	}
	devourBurger: function(number) {
		console.log ("burgers.devourBurger()", number);
		return orm.updateOne(number);
	}
}
// 
// 
// 