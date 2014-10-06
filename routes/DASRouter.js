var express    = require('express'); 
var appRouter = express.Router();
var dasService = require('./../server/service/Service');
var fs = require('fs');

module.exports = appRouter;


appRouter.get('/', function(req, res) {
  res.json({ message: 'Welcome to Doctor Appointment System'}); 
});


appRouter.get('/doctors/all', function(req, res) {
	var dasHeader = req.body.dasHeader;
	var dasBody = req.body.dasBody;
  	dasService.fetchAllDoctors(function(err,data) {
  		prepareResponseData(dasHeader,dasBody,err,data,function(response) {
  			res.json(response);
  		});
	  });
});

appRouter.post('/doctors/find',function(req,res) {
	var dasHeader = req.body.dasHeader;
	var dasBody = req.body.dasBody;
	dasService.fetchDoctorsByCrteria(dasBody,function(err,data) {
		prepareResponseData(dasHeader,dasBody,err,data,function(response) {
  			res.json(response);
  		});
	});

});


function prepareResponseData(header,body,err,data,callback) {
	var response = JSON.parse(fs.readFileSync(__dirname+'/../json/response.json', 'utf8'));
	if(header) {
		response.dasHeader.sessionId = header.sessionId;
		response.dasHeader.requestDt = header.requestDt;
	}
	response.dasHeader.responseDt = Date.now();
	if(data) {
		response.dasBody = data;
	} else if(err) {
		response.dasBody = body;
		response.dasError = err;
	}
	callback(response);
};

