const mongo = new Mongo("localhost");
const myDB = mongo.getDB("mydb");
myDB.dropDatabase();

db.students.insertMany([
  {
    _id: 1,
    name: "Jenny",
    address: { "street No": 85, "street name": "Georges Park", city: "Dublin" },
    "area of study": "IT management",
  },
  {
    _id: 2,
    name: "Jeda",
    address: {
      "street No": 56,
      "street name": "Leeson Park",
      city: "Limerick",
    },
    "area of study": "Software Engineer",
  },
  {
    _id: 3,
    name: "Jero",
    address: { "street No": 256, "street name": "Merlin Park", city: "Galway" },
    "area of study": "Data Analytics",
  },
]);

db.students.deleteOne({ _id: 3 });

for (let i = 1; i <= 25; i++) db.mynewcollection.insertOne({ x: i });

function insertData(dbName, colName, num) {
  let col = db.getSiblingDB(dbName).getCollection(colName);
  for (i = 0; i < num; i++) {
    col.insertOne({ x: i });
  }
  print(col.countDocuments());
}

insertData("mynewdb", "mynewcollection", 100);

// use mynewdb
let c = db.mynewcollection.find();

while (c.hasNext()) printjson(c.next());

printjson(c[4]);

db.mynewcollection.find().limit(3);

db.movies.insertOne([
  {
    imdb: 1,
    title: "The Terminator",
    type: "movie",
  },
]);

db.movies.insertOne([
  {
    imdb: 2,
    title: "The Commando",
    type: "Action",
  },
]);

db.movies.insertOne([
  {
    _id: "tt0075148",
    imdb: 3,
    title: "Rambo",
    type: "Action",
  },
]);

db.movies.insertMany(
  [
    {
      imdb: 7,
      title: "the killer",
      year: 2000,
      rating: 18,
      type: "action",
      actors: { "main Actor": "Jenifer", "boss Actor": "Julie" },
    },
    {
      _id: "tt0075148",
      imdb: 4,
      title: "karen",
      year: 1956,
      rating: 13,
      type: "comedy",
      actors: { "main Actor": "George", "boss Actor": "Green" },
    },
    {
      imdb: 5,
      title: "Commando",
      year: 1987,
      rating: 12,
      type: "action",
      actors: { "main Actor": "Schwazzenegar", "boss Actor": "Van" },
    },
    {
      imdb: 6,
      title: "Ghost",
      year: 1956,
      rating: 13,
      type: "comedy",
      actors: { "main Actor": "Dracula", "boss Actor": "Green" },
    },
  ],
  { ordered: false }
);

db.book.insertOne([
  {
    book_id: 1,
    title: "Mother Night",
    author: "Kurt Vonnegut",
  },
]);

db.books.insertMany([
  {
    book_id: 123346,
    title: "cheese Burger",
    author: "Tito Vido",
  },
  {
    book_id: 123347,
    title: "the Earth's Child",
    author: "PN Okeke",
  },
  {
    book_id: 123348,
    title: "Cry of the Owls",
    author: "Timo Werner",
  },
  {
    book_id: 123349,
    title: "Seven Up",
    author: "Fido Dido",
  },
  {
    ordered: true,
  },
]);

db.books.find({ title: "cheese Burger" }, { book_id: 0, _id: 0 });

db.books.find({}, { book_id: 0, _id: 0 });

db.books.update(
    { book_id: 12345 },
    { $set: { quantity: 10 } }
);

db.books.updateOne(
  { book_id: 12345 },
  { $set: { quantity: 10 } },
  { upsert: true }
);

db.books.updateOne(
  { book_id: 12345 },
  { $set: { quantity: 10 } }
)


// A note on Datatypes and ObjectId
// Common Datatypes
// MongoDB adds support for a number of common data types while keeping JSON’s essential
// key/value–pair nature. Exactly how values of each type are represented varies by language, but
// this is a list of the commonly supported types and how they are represented as part of a
// document in the shell. The most common types are (try out the inserts and find them in the
// collection):
// Null - The null type can be used to represent both a null value and a nonexistent field:
db.datatypes.insertOne({"x" : null})
// Boolean - There is a boolean type, which can be used for the values true and false :
db.datatypes.insertOne({"x" : true} )
// Number - The shell defaults to using 64-bit floating-point numbers. Thus, these numbers
// both look “normal” in the shell:
db.datatypes.insertOne({"x" : 3.14});
db.datatypes.insertOne({"x" : 3} );
// For integers, use the NumberInt or NumberLong classes, which represent 4-byte or 8-
// byte signed integers, respectively.
db.datatypes.insertOne({"x" : NumberInt("3")});
db.datatypes.insertOne({"x" : NumberLong("3")} );
// String - Any string of UTF-8 characters can be represented using the string type:
db.datatypes.insertOne({"x" : "foobar"} )
// Date - MongoDB stores dates as 64-bit integers representing milliseconds since the Unix
// epoch (January 1, 1970). The time zone is not stored:
db.datatypes.insertOne({"x" : new Date()} )
// Regular expression
// Queries can use regular expressions using JavaScript’s regular expression syntax:
db.datatypes.insertOne({"x" : /foobar/i} )
// Array
// Sets or lists of values can be represented as arrays:
db.datatypes.insertOne({"x" : ["a", "b", "c"]} )
// Embedded document
// Documents can contain entire documents embedded as values in a parent document
db.datatypes.insertOne({"x" : {"foo" : "bar"}})


db.datatypes.find()

db.datatypes.insert({"x" : ObjectId()})

db.datatypes.find()