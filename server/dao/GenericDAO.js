var mongoClient=require('mongojs');
var dbURL = 'admin@127.0.0.1:27017/das';
var collections = ['doctors'];
exports.db = mongoClient.connect(dbURL,collections);
