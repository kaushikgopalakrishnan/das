var inquiry=require('./InquiryService');

exports.fetchAllDoctors = function(callback) {
	inquiry.fetchAllDoctors(function(err,data) {
		callback(err,data);
	});
};

exports.fetchDoctorsByCrteria = function(criteria,callback) {
	inquiry.fetchDoctorsByCrteria(criteria,function(err,data) {
		callback(err,data);
	});
};
