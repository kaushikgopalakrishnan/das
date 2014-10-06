var genericDAO=require('./GenericDAO');


exports.fetchAllDoctors = function(callback) {
	genericDAO.db.doctors.find({},{"_id":0},function(err,data) {
		callback(err,data);
	});
};

exports.fetchDoctorsByCrteria =  function(criteria,callback) {
	genericDAO.db.doctors.find(criteria,{"_id":0},function(err,data) {
		callback(err,data);
	});
};
