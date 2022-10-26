mongo = new Mongo("localhost");
myDB = mongo.getDB("mydb");
myDB.dropDatabase();