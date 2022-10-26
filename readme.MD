


STEP 1 Download and install Mongo DB https://tudublin-my.sharepoint.com/:u:/g/personal/sean_mchugh_tudublin_ie/EZzSNibB61hGrq-sC4uaOgIB3j34oQ8jRMotiRVXhOtYBw?e=npo61e

STEP 2 Create a folder for the database storage files

STEP 3 Open command prompt , Go toto the path to the Mongo DB bin and type mongod

STEP 4 enter the path to the mongo db bin and type in mongod --port 27017 --dbpath "C:\Users\x00191169\OneDrive - Technological University Dublin\TuDublin\Mongodatabase
"

This will initialize the database folder created earlier

STEP 5 Open a second commang prompt to connect the DBMS while leaving open the first one. 
Got to the path to the Mongo DB bin and type mongosh the ENTER



C:\Users\x00191169>cd..

C:\Users>cd..

C:\>cd mongodb-windows-x86_64-6.0.2-mongosh1.6.0

C:\mongodb-windows-x86_64-6.0.2-mongosh1.6.0>cd bin

C:\mongodb-windows-x86_64-6.0.2-mongosh1.6.0\bin>mongosh
Current Mongosh Log ID: 6359392b41ad95118db43ce9
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0
Using MongoDB:          5.0.3
Using Mongosh:          1.6.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2022-10-26T11:06:03.374+01:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

------
   Enable MongoDB's free cloud-based monitoring service, which will then receive and display
   metrics about your deployment (disk utilization, CPU, operation statistics, etc).

   The monitoring data will be available on a MongoDB website with a unique URL accessible to you
   and anyone you share the URL with. MongoDB may use this information to make product
   improvements and to suggest MongoDB products and deployment options to you.

   To enable free monitoring, run the following command: db.enableFreeMonitoring()
   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
------

test> show databases
admin    40.00 KiB
config   96.00 KiB
local    80.00 KiB
test    236.00 KiB
mydb> db
mydbched to db mydb
mydb> help

  Shell Help:

    use                                        Set current database
    show                                       'show databases'/'show dbs': Print a list of all available databases.
                                               'show collections'/'show tables': Print a list of all collections for current database.
                                               'show profile': Prints system.profile information.

mydb> j = { "name" : "mongo" }
{ name: 'mongo' }
mydb> k = { "x" : 3 }
{ x: 3 }
mydb> db.testData.insertOne( j )
{
  acknowledged: true,

mydb> show collections
testData
mydb> db
mydb
mydb> show dbs
admin    40.00 KiB
config  108.00 KiB
local    80.00 KiB
mydb     72.00 KiB
test    236.00 KiB
mydb> db.testData.find().pretty()
[
  { _id: ObjectId("63593e412ae78796222176d3"), name: 'mongo' },
  { _id: ObjectId("63593e412ae78796222176d4"), x: 3 },
  { _id: 1, username: 'johnclayton', password: 'bf38395d61b821748ae1' },
  { _id: ObjectId("63593e6b2ae78796222176d5"), name: 'mongo' },
  { _id: ObjectId("63593e6b2ae78796222176d6"), x: 3 }
]
mydb> db.testData.insertOne({_id:123456, "name":"john"})
{ acknowledged: true, insertedId: 123456 }
mydb> db.testData.insertOne({_id:123456, "name":"mary"})
MongoServerError: E11000 duplicate key error collection: mydb.testData index: _id_ dup key: { _id: 123456 }
mydb> db.testData.find({"name":"john"})
[ { _id: 123456, name: 'john' } ]
mydb> db.testData.find({"name":"john"},{"name":0})
[ { _id: 123456 } ]
mydb> db.testData.find({"name":"john"},{"name":1, "_id":0})
[ { name: 'john' } ]
mydb> load("C:/Users/x00191169/OneDrive - Technological University Dublin/3rd Year\Big Data/Wk6Lab/db_delete.js");
Error: ENOENT: no such file or directory, open 'C:\Users\x00191169\OneDrive - Technological University Dublin\3rd YearBig Data\Wk6Lab\db_delete.js'
mydb> load("C:/Users/x00191169/OneDrive - Technological University Dublin/3rd Year\Big Data/Wk6Lab/db_delete.js");
Error: ENOENT: no such file or directory, open 'C:\Users\x00191169\OneDrive - Technological University Dublin\3rd YearBig Data\Wk6Lab\db_delete.js'
mydb> load("C:/db_delete.js");
true
mydb> db.users.insertMany ([ {"username": "patdonohoe","dba_rights": true,
... "password": "bfeeeed61b821748ae1"},
... {"username": "johnclayton","dba_rights": true,
... "password": "bf38395d61b821748ae1"},
... {"username": "mattmurphy","dba_rights": false,
... "password": "bf38395d61b8217481"},

mydb> for (var i = 1; i <= 25; i++) db.mynewcollection.insertOne( { x : i
... } )
{
  acknowledged: true,
  insertedId: ObjectId("635947d12ae78796222176f3")
}
mydb> function insertData(dbName, colName, num) {
... var col = db.getSiblingDB(dbName).getCollection(colName);
... for (i = 0; i < num; i++) {
... col.insertOne({x:i});
... }
... print(col.countDocuments());}
[Function: insertData]
mydb> insertData("mynewdb", "mynewcollection", 100)
100

mydb> use mynewdb
switched to db mynewdb
mynewdb> var c = db.mynewcollection.find()

mynewdb> while (c.hasNext() ) printjson( c.next() )
{ _id: ObjectId("6359483c2ae78796222176f4"), x: 0 }
{ _id: ObjectId("6359483c2ae78796222176f5"), x: 1 }
{ _id: ObjectId("6359483c2ae78796222176f6"), x: 2 }
{ _id: ObjectId("6359483c2ae78796222176f7"), x: 3 }
{ _id: ObjectId("6359483c2ae78796222176f8"), x: 4 }
{ _id: ObjectId("6359483c2ae78796222176f9"), x: 5 }
{ _id: ObjectId("6359483c2ae78796222176fa"), x: 6 }
{ _id: ObjectId("6359483c2ae78796222176fb"), x: 7 }
{ _id: ObjectId("6359483c2ae78796222176fc"), x: 8 }
{ _id: ObjectId("6359483c2ae78796222176fd"), x: 9 }
{ _id: ObjectId("6359483c2ae78796222176fe"), x: 10 }on.insertOne( { x : i
{ _id: ObjectId("6359483c2ae78796222176ff"), x: 11 }ction.insertOne( { x : i
{ _id: ObjectId("6359483c2ae7879622217700"), x: 12 }
{ _id: ObjectId("6359483c2ae7879622217701"), x: 13 }
{ _id: ObjectId("6359483c2ae7879622217702"), x: 14 }
{ _id: ObjectId("6359483c2ae7879622217703"), x: 15 }
{ _id: ObjectId("6359483c2ae7879622217704"), x: 16 }
{ _id: ObjectId("6359483c2ae7879622217705"), x: 17 }
{ _id: ObjectId("6359483c2ae7879622217706"), x: 18 }
{ _id: ObjectId("6359483c2ae7879622217707"), x: 19 }
{ _id: ObjectId("6359483c2ae7879622217708"), x: 20 }
{ _id: ObjectId("6359483c2ae7879622217709"), x: 21 }
{ _id: ObjectId("6359483c2ae787962221770a"), x: 22 }
{ _id: ObjectId("6359483c2ae787962221770b"), x: 23 }
{ _id: ObjectId("6359483c2ae787962221770c"), x: 24 }
{ _id: ObjectId("6359483c2ae787962221770d"), x: 25 }
{ _id: ObjectId("6359483c2ae787962221770e"), x: 26 }
{ _id: ObjectId("6359483c2ae787962221770f"), x: 27 }
{ _id: ObjectId("6359483c2ae7879622217710"), x: 28 }
{ _id: ObjectId("6359483c2ae7879622217711"), x: 29 }
{ _id: ObjectId("6359483c2ae7879622217712"), x: 30 }
{ _id: ObjectId("6359483c2ae7879622217713"), x: 31 }
{ _id: ObjectId("6359483c2ae7879622217714"), x: 32 }
{ _id: ObjectId("6359483c2ae7879622217715"), x: 33 }
{ _id: ObjectId("6359483c2ae7879622217716"), x: 34 }
{ _id: ObjectId("6359483c2ae7879622217717"), x: 35 }
{ _id: ObjectId("6359483c2ae7879622217718"), x: 36 }
{ _id: ObjectId("6359483c2ae7879622217719"), x: 37 }
{ _id: ObjectId("6359483c2ae787962221771a"), x: 38 }
{ _id: ObjectId("6359483c2ae787962221771b"), x: 39 }
{ _id: ObjectId("6359483c2ae787962221771c"), x: 40 }
{ _id: ObjectId("6359483c2ae787962221771d"), x: 41 }
{ _id: ObjectId("6359483c2ae787962221771e"), x: 42 }
{ _id: ObjectId("6359483c2ae787962221771f"), x: 43 }
{ _id: ObjectId("6359483c2ae7879622217720"), x: 44 }
{ _id: ObjectId("6359483c2ae7879622217721"), x: 45 }
{ _id: ObjectId("6359483c2ae7879622217722"), x: 46 }
{ _id: ObjectId("6359483c2ae7879622217723"), x: 47 }
{ _id: ObjectId("6359483c2ae7879622217724"), x: 48 }
{ _id: ObjectId("6359483c2ae7879622217725"), x: 49 }
{ _id: ObjectId("6359483c2ae7879622217726"), x: 50 }
{ _id: ObjectId("6359483c2ae7879622217727"), x: 51 }
{ _id: ObjectId("6359483c2ae7879622217728"), x: 52 }
{ _id: ObjectId("6359483c2ae7879622217729"), x: 53 }
{ _id: ObjectId("6359483c2ae787962221772a"), x: 54 }
{ _id: ObjectId("6359483c2ae787962221772b"), x: 55 }
{ _id: ObjectId("6359483c2ae787962221772c"), x: 56 }
{ _id: ObjectId("6359483c2ae787962221772d"), x: 57 }
{ _id: ObjectId("6359483c2ae787962221772e"), x: 58 }
{ _id: ObjectId("6359483c2ae787962221772f"), x: 59 }
{ _id: ObjectId("6359483c2ae7879622217730"), x: 60 }
{ _id: ObjectId("6359483c2ae7879622217731"), x: 61 }
{ _id: ObjectId("6359483c2ae7879622217732"), x: 62 }
{ _id: ObjectId("6359483c2ae7879622217733"), x: 63 }
{ _id: ObjectId("6359483c2ae7879622217734"), x: 64 }
{ _id: ObjectId("6359483c2ae7879622217735"), x: 65 }
{ _id: ObjectId("6359483c2ae7879622217736"), x: 66 }
{ _id: ObjectId("6359483c2ae7879622217737"), x: 67 }
{ _id: ObjectId("6359483c2ae7879622217738"), x: 68 }
{ _id: ObjectId("6359483c2ae7879622217739"), x: 69 }
{ _id: ObjectId("6359483c2ae787962221773a"), x: 70 }
{ _id: ObjectId("6359483c2ae787962221773b"), x: 71 }
{ _id: ObjectId("6359483c2ae787962221773c"), x: 72 }
{ _id: ObjectId("6359483c2ae787962221773d"), x: 73 }

mynewdb> for (var i = 1; i <= 25; i++) db.mynewcollection.insertOne( { x : i
... for (var i = 1; i <= 25; i++) db.mymoviecollection.insertOne( { x : i } )
Uncaught:
SyntaxError: Unexpected token, expected "," (2:0)

  1 | for (var i = 1; i <= 25; i++) db.mynewcollection.insertOne( { x : i
> 2 | for (var i = 1; i <= 25; i++) db.mymoviecollection.insertOne( { x : i } )
    | ^
  3 |

mynewdb> history
ReferenceError: history is not defined
mynewdb>
















[
  { _id: ObjectId("6359483c2ae78796222176f4"), x: 0 },
  { _id: ObjectId("6359483c2ae78796222176f5"), x: 1 },
  { _id: ObjectId("6359483c2ae78796222176f6"), x: 2 }
mynewdb> printjson( c [ 4 ] )

