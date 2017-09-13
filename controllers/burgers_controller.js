var express = require('express');
var router =express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req,res) {
	console.log("burgers_controller.js GET /");
	burger.getBurgers(function(data){
		res.json( data );
	});
    
});

router.get('/api/burgers', function(req,res) {
	console.log("burgers_controller.js GET /api/burgers");
    res.json( burger.getBurgers() );
});

router.post('/api/burger', function(req,res) {
	console.log("burgers_controller.js Post /api/burger");
    res.json( {id: burger.addBurger(req.body.name)} );
});

router.put('/api/burger/:id', function(req,res) {
	console.log("burgers_controller.js PUT /api/burger");
	console.log("req.param.id:",  req.param.id);
	if( burger.devourBurger(req.param.id) ) res.send("devoured");
 	else res.send("PROBLEM - stuffed!");
});

module.exports = router;


