var inquiryDAO=require('../dao/InquiryDAO');

exports.fetchAllDoctors = function(callback) {
	inquiryDAO.fetchAllDoctors(function (err,data) {
		callback(err,data);
	});
};

exports.fetchDoctorsByCrteria =  function(criteria,callback) {
	var queryCriteria = criteria.search;
	inquiryDAO.fetchDoctorsByCrteria(queryCriteria,function(err,data) {
		callback(err,data);
	});
};