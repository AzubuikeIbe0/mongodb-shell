
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
    col.insertOne({x:i});
    }
    print(col.countDocuments());
}

insertData("mynewdb", "mynewcollection", 100);

// use mynewdb
let c = db.mynewcollection.find();

while (c.hasNext() ) printjson( c.next() );

printjson( c [ 4 ] )


db.mynewcollection.find().limit(3)

db.movies.insertMany([
  {
    imdb: 1,
    title: "the killer",
    year: 2000,
    rating: 18,
    type: "action",
    actors: { "main Actor": "Jenifer", "boss Actor": "Julie" },
  },
  {
    imdb: 2,
    title: "karen",
    year: 1956,
    rating: 13,
    type: "comedy",
    actors: { "main Actor": "George", "boss Actor": "Green" },
  },
  {
    imdb: 1,
    title: "Commando",
    year: 1987,
    rating: 12,
    type: "action",
    actors: { "main Actor": "Schwazzenegar", "boss Actor": "Van" },
  },
  {
    imdb: 2,
    title: "Ghost",
    year: 1956,
    rating: 13,
    type: "comedy",
    actors: { "main Actor": "Dracula", "boss Actor": "Green" },
  },
]);


db.books.insertMany([
  {
    book_id: 123346,
    "title": "cheese Burger",
    "author": "Tito Vido"
  },
  {
    book_id: 123347,
    "title": "the Earth's Child",
    "author": "PN Okeke"
  },
  {
    book_id: 123348,
    "title": "Cry of the Owls",
    "author": "Timo Werner"
  },
  {
    book_id: 123349,
    "title": "Seven Up",
    "author": "Fido Dido"
  },
  {
    ordered: true
  }
])

db.books.find({"title":"cheese burger"},{"title": 1, "author": 1, "book_id": 0, "_id":0});