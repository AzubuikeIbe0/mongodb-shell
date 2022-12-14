//Create the following document in a collection called customers

// 1. Create an index on the cust_id in ascending order. [hint lookup createIndex
//     method ].

db.collection.createIndex(
    {
        "A": 1
    },
    {
        unique: true,
        sparse: true,
        expireAfterSeconds: 3600
    }
  )


db.customers.insertOne(
{ cust_id:"A1",
 name:"sean",
 noOrders:1, 
 age:23,
 gender:"male",
 interests:["reading","fishing", "golf"],
 stats: [{month:"Jan","noClicks":1332, "noVisits":234, "bonusTokens":14 },
        {month:"Feb","noClicks":32, "noVisits":24, "bonusTokens":4 }],
 cityResidence:"dublin",
 sales_totalamount:450 
} 
)
db.customers.insertOne(
{cust_id:"A2",
 name:"mary",
 noOrders:5,
 age:25,
 gender:"female",
 interests:["knitting","gardening", "golf"],
 stats:[{month:"Jan","noClicks":1332, "noVisits":234, "bonusTokens":4 },
        {month:"Feb","noClicks":32, "noVisits":24, "bonusTokens":4 }],
 cityResidence:"dublin",
 sales_totalamount:200 
} 
)
db.customers.insertOne(
{cust_id:"A3",
 name:"joan",
 noOrders:4,
 age:45,
 gender:"f",
 interests:["knitting","reading", "soccer", "debating"],
 stats:[{month:"Jan","noClicks":1332, "noVisits":234, "bonusTokens":4 },
        {month:"Feb","noClicks":32, "noVisits":24, "bonusTokens":4 }],
 cityResidence:"cork",
 sales_totalamount:300 
} 
)
db.customers.insertOne(
{cust_id:"A4",
 name:"peter",
 noOrders:5,
 age:55,
 gender:"male",
 interests:["programming","reading fiction", "rugby", "hurling"],
 stats:[{month:"Jan","noClicks":7832, "noVisits":234, "bonusTokens":4 },
        {month:"Feb","noClicks":1312, "noVisits":124, "bonusTokens":25 }],
 marital_status:"married",
 cityResidence:"galway",
 sales_totalamount:3400 
} 
)
db.customers.insertOne(
{cust_id:"B1",
 name:"jane",
 noOrders:2,
 age:45,
 gender:"f",
 interests:["knitting","reading", "facebook"],
 stats:[{month:"Jan","noClicks":332, "noVisits":22, "bonusTokens":4 },
        {month:"Feb","noClicks":32, "noVisits":24, "bonusTokens":8 }],
 cityResidence:"cork",
 sales_totalamount:4500 
} 
)
db.customers.insertOne(
{cust_id:"B2",
 name:"june",
 noOrders:1,
 age:52,
 gender:"f",
 interests:["knitting","reading", "soccer", "debating"],
 stats:[{month:"Jan","noClicks":132, "noVisits":24, "bonusTokens":14 },
        {month:"Feb","noClicks":56, "noVisits":14, "bonusTokens":3 }],
 cityResidence:"cork",
 sales_totalamount:1200 
} 
)
db.customers.insertOne(
{cust_id:"A21",
 name:"paddy",
 noOrders:1,
 age:46,
 gender:"male",
 interests:["soccer", "art", "gaming"],
 stats:[{month:"Jan","noClicks":1332, "noVisits":234, "bonusTokens":12 },
        {month:"Feb","noClicks":132, "noVisits":214, "bonusTokens":22 }],
 cityResidence:"cork",
 sales_totalamount:1300 
} 
)
db.customers.insertOne(
{cust_id:"B21",
 name:"jean",
 noOrders:3,
 age:25,
 gender:"female",
 interests:["acting", "painting", "debating"],
 stats:[{month:"Jan","noClicks":1332, "noVisits":234, "bonusTokens":4 },
        {month:"Feb","noClicks":12, "noVisits":1, "bonusTokens":0 }],
 cityResidence:"dublin",
 sales_totalamount:3550 
} 
)
db.customers.insertOne(
{cust_id:"B31", 
 name:"Allan",
 noOrders:2,
 age:27,
 gender:"male",
 interests:["rugby","hill walking", "cycling", "debating"],
 stats: [{month:"Jan","noClicks":432, "noVisits":234, "bonusTokens":0 },
        {month:"Feb","noClicks":432, "noVisits":234, "bonusTokens":0 },
        {month:"Mar","noClicks":432, "noVisits":234, "bonusTokens":22 }
],
 cityResidence:"galway",
 sales_totalamount:3000 
} 
)




