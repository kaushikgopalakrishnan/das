var express    = require('express'); 
var appRouter = express.Router();
var dasService = require('./../server/service/Service');

module.exports = appRouter;


appRouter.get('/', function(req, res) {
  res.json({ message: 'Welcome to Doctor Appointment System'}); 
});


appRouter.get('/doctors/all', function(req, res) {
  dasService.fetchAllDoctors(function(err,data) {
  	if(err) {
  		res.json(err);
  	} else {
  		res.json(data);
  	}
  });
});

appRouter.post('/doctors/find',function(req,res) {
	var dasHeader = req.body.dasHeader;
	var dasBody = req.body.dasBody;
	dasService.fetchDoctorsByCrteria(dasBody,function(err,data) {
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}
	});

});
