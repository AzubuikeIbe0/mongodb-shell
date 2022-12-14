db.inventory.insertOne({
  _id: 10,
  type: "electronic",
  item: "ipad",
  qty: 15,
  price: 550,
});

db.inventory.insertOne({
  _id: 11,
  type: "electronic",
  item: "iphone",
  qty: 13,
  price: 400,
});
db.inventory.insertOne({
  _id: 12,
  type: "consumables",
  item: "print cartridge",
  qty: 5,
});
db.inventory.insertOne({
  _id: 13,
  type: "electronic",
  item: "imac",
  qty: 10,
  price: 400,
});
db.inventory.insertOne({
  _id: 14,
  type: "book",
  item: "yes to noSQL",
  qty: 10,
  price: 40,
});
db.inventory.insertOne({
  _id: 15,
  type: "book",
  item: "Mongo Mongo",
  qty: 10,
  price: 40,
});

db.employee.insertOne({
  firstname: "Peter",
  lastName: "Smith",
});

db.order.insertOne({
  _id: 99999,
  name: { first: "John", last: "McCarthy" },
  orderDate: new Date("Sep 04, 2013"),
  ShippingAddress: {
    line1: "Belgard Road",
    line2: "Tallaght",
    city: "Dublin",
  },

  lineItems: [
    {
      product: "screws",
      qty: 10,
      uom: "kg",
      unitPrice: 10.0,
    },
    {
      product: "fuel",
      qty: 30,
      uom: "litres",
      unitPrice: 3.0,
    },
    {
      product: "tiles",
      qty: 2,
      uom: "pallots",
      unitPrice: 259.0,
      colour: "cream",
    },
  ],
});

// 1.
db.inventory.updateOne(
    { type: "book", item: "journal", price: 10 },
    { $set: { qty: 10 } },
    { upsert: true }
);
// 2.
db.inventory.updateOne(
    { type: "book", item: "journal", price: 10 },
    { $set: { qty: 999 } },
    { upsert: true }
);
// 3.
db.inventory.updateOne(
    { type: "book" }, 
    { $inc: { qty: 5 } }
);
//Finds first match and increments
// 4.
db.inventory.updateOne(
    { type: "book" }, 
    { $inc: { qty: 5 } }, 
    { multi: true }
);

// 3
// You must use dot notation to update values in subdocuments. For Example:
db.order.updateOne(
    { _id: 99999},
    { $set: {"name.first": "John James"}
})


//EXERCISES:
// 1. Try out the above updates. Execute them singly and check the changes made to the  documents in the collection using an appropriate find command

//2. The Govt have put a put a €20 tax on all electronic equipment. Write appropriate update.

db.inventory.updateMany(
    { type: "electronic" },
    { $inc: { price: 20 } },
    { upsert: false }
);

//3. Write an update to reflect that journal item price is now €20 and they have just received a delivery of 100.

db.inventory.updateOne(
    { item: "journal"},
    { $inc: { qty: 100 } },
    { $set: { price: 20 } },
    { upsert: false }
);


db.inventory.findOne({item:"journal"})

//4. Write an update statement that changes line1 to Belgard Road Lower and adds a PostCode Field value 24

db.order.updateOne(
    {_id: 99999},
    {$set: {"ShippingAddress.line1": "Belgard Road Lower", "ShippingAddress.PostCode": 24}},
    {upsert: true}
  )

//   Replace All Fields
//   Given the following inventory document exist in the inventory collection:
  db.inventory.insertOne({
    "_id" : 22,
    "type" :"book",
    "item" : "The Snapper",
    "author" : "Roddy Doyle",
    "price" : 20,
    "qty" : 4
    })

// The update operation below passes an <update> document that contains only fieldand value pairs,
// which means the document replaces all the fields in the original document. The operation does
// not replace the_id value. The operation contains the same value for the item field in both
// the <query> and <update>documents, which means the field does not change:

db.inventory.updateOne(
    {_id : 22},
    {$set:{item : "The Snapper", price : 20, qty : 4 }}
)

//equivalent to SQL SELECT * FROM inventory

db.inventory.find( {} )


// -- equivalent to the SQL WHERE type=”book” clause
db.inventory.find( { type: "book" } ).pretty()

// Matches any of the words in the
db.inventory.find( { type: { $in: [ "book", "electronic" ] } } ).pretty()


// -- equivalent to the SQL OR clause
db.inventory.find({ $or: [{"qty": { $gt: 100 } },{ "price": { $lt: 450 } }]
} ) .pretty()

// -- equivalent to the SQL AND clause
db.inventory.find( { type: "electronic", "qty": { $gt: 5 } } ) .pretty()

// -- equivalent to the SQL OR and AND clause
db.inventory.find( { type: "book", $or: [ { "qty": { $gt: 10 } },
{ "price": { $lt: 450 } } ]
} ).pretty()


db.order.find( { "name.first":"John" }).pretty()

db.employee.removeOne({})

db.employee.drop()


// EXERCISES
// 1. Find the inventory documents that either electronic or book and have a price less than 200.

db.inventory.find({type: {$in:["book", "electronic"]}, price:{$lt: 200}})

//OR
db.inventory.find( { $or:[ {"type":"book"},
{"type":"electronic"}], "price":{$lt: 200 } })

// 2. Find the inventory documents that are type book, with an item name journal and have a price greater than 5

db.inventory.find({type: "book", item:"journal", price:{$gt:5}})

// 3. Find all the document that have price in the range of 101 to 699 (hint use $and)

db.inventory.find({$and:[{price:{$gt:100}}, {price:{$lt:700}}] })
// OR
db.inventory.find({ "price": { $gt: 100,$lt: 700 }} )

// 4. Find an order that has a firstname of John and last name of Smith whose shipping  address is in Dublin

db.order.find({"name.first":"John", "name.last":"Smith","ShippingAddress.city":"Dublin"})

// 5. Delete inventory documents that are type book or electronic
db.inventory.remove({$or:[{type:"book"}, {type:"electronic"}]})
//OR
db.inventory.remove( { "type": { $in: [ "book", "electronic" ] }
})

db.inventory.find()