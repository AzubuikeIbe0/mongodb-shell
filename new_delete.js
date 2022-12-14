const mongo = new Mongo("localhost");
const myDB = mongo.getDB("mydb");
myDB.dropDatabase();