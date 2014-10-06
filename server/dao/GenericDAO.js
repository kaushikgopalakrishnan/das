var mongoClient=require('mongojs');
var fs = require('fs');
var db = JSON.parse(fs.readFileSync(__dirname+'/../../resources/database-config.json', 'utf8'));
exports.db = mongoClient.connect(db.url,db.collections);
