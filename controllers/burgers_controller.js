var express = require('express');
var router =express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req,res) {
	console.log("burgers_controller.js GET /");
	burger.getBurgers(function(data){
		// res.json( data );
		console.log(data)
		res.render("index", {burgers: data});
	});

    
});

// router.get('/api/burgers', function(req,res) {
// 	console.log("burgers_controller.js GET /api/burgers");
//     burger.getBurgers(function(data){
// 		res.json( data );
// 	});
// });

router.post('/', function(req,res) {
	console.log("burgers_controller.js Post");
	burger.addBurger(req.body.name, function(data){
		res.json( {id: data } );
	});
    
});

router.put('/:id', function(req,res) {
	console.log("burgers_controller.js PUT /");
	console.log("req.param.id:",  req.param.id);
	burger.devourBurger(req.param.id, function(data){
		if( data ) res.send("devoured");
 		else res.send("PROBLEM - stuffed!");
	});
	
});

module.exports = router;


