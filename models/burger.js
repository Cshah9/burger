var orm = require('./config/orm.js');


module.exports = {
	getBurgers: function() {
		orm.selectAll();
	}
	addBurger: function(burger)
	{
		orm.insertOne(burger);
	}
	devourBurger: function(number) {
		orm.updateOne(number);
	}
}
// 
// 
// 