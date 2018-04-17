var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

router.get('/kids', function(req, res, next) {
  connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="kids"`,(err, result) => {
	if(err){
		throw err; 
		console.log(err);
	}
	else{
		console.log(JSON.stringify(result));
		connect.query(`SELECT * FROM movies WHERE user_type="kids"`,(err,content_result)=>{
			if(err){
				throw err;
				console.log(err);
			}
			else{
				console.log(JSON.stringify(content_result));
				res.render('videos', {videos:true, kids:true, title: 'Videos for kids - Cool Movies', result_category:result, category:"all",result_content:content_result,host:req.hostname});
			}
		});
	}
  });
});

router.get('/general', function(req, res, next) {
  connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="adult"`,(err, result) => {
	if(err){
		throw err; 
		console.log(err);
	}
	else{
		console.log(JSON.stringify(result));
		connect.query(`SELECT * FROM movies WHERE user_type="adult"`,(err,content_result)=>{
			if(err){
				throw err;
				console.log(err);
			}
			else{
				console.log(JSON.stringify(content_result));
				res.render('videos', {videos:true, general:true, title: 'Videos - Cool Movies', result_category:result, category:"all",result_content:content_result,host:req.hostname});
			}
		});
	}
  });
});

router.get('/kids/filter', function(req, res, next) {
  cat= req.query.category;
  if(cat !="all"){
	  connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="kids"`,(err, result) => {
		if(err){
			throw err; 
			console.log(err);
		}
		else{
			console.log(JSON.stringify(result));
			query=`SELECT * FROM movies WHERE genre="${cat}" AND user_type="kids"`;
			console.log(query);
			connect.query(`SELECT * FROM movies WHERE genre="${cat}" AND user_type="kids"`,(err,content_result)=>{
				if(err){
					throw err;
					console.log(err);
				}
				else{
					console.log(JSON.stringify(content_result));
					res.render('videos', {videos:true, kids:true, title: 'Videos for kids - Cool Movies', result_category:result, category:cat,result_content:content_result,host:req.hostname});
				}
			});
		}
	  });
  }
  else{
	  res.redirect('../kids');
  }
});



router.get('/general/filter', function(req, res, next) {
  cat= req.query.category;
  if(cat !="all"){
	  connect.query(`SELECT DISTINCT genre FROM movies WHERE user_type="adult"`,(err, result) => {
		if(err){
			throw err; 
			console.log(err);
		}
		else{
			console.log(JSON.stringify(result));
			connect.query(`SELECT * FROM movies WHERE genre="${cat}" AND user_type="adult"`,(err,content_result)=>{
				if(err){
					throw err;
					console.log(err);
				}
				else{
					console.log(JSON.stringify(content_result));
					res.render('videos', {videos:true, general:true, title: 'Videos - Cool Movies', result_category:result, category:cat, result_content:content_result, host:req.hostname});
				}
			});
		}
	  });
  }
  else{
	  res.redirect('../general');
  }
});

router.get('/general/:id', function(req, res, next) {
  id= req.params.id;
  connect.query(`SELECT * FROM movies WHERE id="${id}"`,(err,result) => {
	  if(err){
		  throw err;
		  console.log(err);
	  }
	  else{
		  console.log(JSON.stringify(result));
		  res.render('details',{videos:true,general:true, details:true,title:'Video details - Cool Movies',movie:result[0]});
	  }
  });
});

router.get('/kids/:id', function(req, res, next) {
    id= req.params.id;
	connect.query(`SELECT * FROM movies WHERE id="${id}"`,(err,result) => {
	  if(err){
		  throw err;
		  console.log(err);
	  }
	  else{
		  console.log(JSON.stringify(result));
		  res.render('details',{videos:true,kids:true, details:true, title:'Video details - Cool Movies',movie:result[0]});
	  }
  });
});

module.exports= router;