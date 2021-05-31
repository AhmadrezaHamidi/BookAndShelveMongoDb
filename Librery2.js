db.createCollection('Persons')
db.createCollection('Book')
db.createCollection('Shelve')
db.createCollection('Librery')


show collections


db.Persons.insertOne({
    'Name': 'ahmadreza',
    'PhoneNumber': '093388383838',
    'age': 22
})
db.Persons.insertMany([{
    'Name': 'ahmadreza1',
    'PhoneNumber': '093389383838'
}, {
    'Name': 'ahmadreza3',
    'PhoneNumber': '0393388383838',
    'city': 'tehran'
}, {
    'Name': 'ahmadreza4',
    'PhoneNumber': '0943388383838'
}])




db.Persons.find({
    'age': 22
})

db.Persons.find({
    'age': {
        $gt: 20
    }
})

db.Book.insertMany(
    [{
        'Name': 'Book1',
        'author': 'author1',
        'Description': 'addksdjs hshaschs sushxasi scschhc scus '
    }, {
        'Name': 'Book2',
        'author': 'author2'
    }, {
        'Name': 'Book3',
        'author': 'author3',
        'Description': 'addksdjs hshaschs sushxasi scschhc scus3 '
    }, {
        'Name': 'Book4'
    }]
)

db.Book.find()

db.Shelve.insertMany(
    [{
        'Name': 'Lovely',
        'Books': ['60b32baa285900009f005e40', '60b32baa285900009f005e41', '60b32baa285900009f005e3f']
    }, {
        'Name': 'sher',
        'Books': ['60b32baa285900009f005e3e', '60b32ba6285900009f005e3d', '60b32ba6285900009f005e3c']
    }, {
        'Name': 'adbiyat',
        'Books': ['60b32ba6285900009f005e3a', '60b32ba6285900009f005e3b']
    }]
)

db.Shelve.find()

db.Librery.insertOne(
    {
        "OwnerId": "60b327a3285900009f005e36",
        "shelveIds": ["60b32de8285900009f005e42", "60b32de8285900009f005e43", "60b32de8285900009f005e44"]
    }
)


db.Librery.findOne({
    "OwnerId": "60b327a3285900009f005e36"
})



db.Persons.find({$or:[{"city":"tehran"},{"Name":"ahmadreza"}]})


db.Persons.find()

db.Persons.updateMany({"_id": ObjectId("60b327a3285900009f005e36")},{$set:{"Role":"Admin"}})
db.Persons.save({
    "_id": ObjectId("60b32827285900009f005e37"),
    "Name": "MohhmadRezaAmini",
    "PhoneNumber": "093389383838",
    "Role": "admin"
})

db.Persons.save({
    "_id": ObjectId("70b32827285900009f005e37"),
    "Name": "MazdakNazemi",
    "PhoneNumber": "ccccc838",
    "Role": "kid"
})


db.Persons.find()
db.Persons.find({},{"Name" : 1 })
///show me Name And Ids 

db.Persons.find({},{"Name" : 1 ,"_id":0})
///if we want just Names on colllections 


db.Persons.find({},{"Name" : 1 ,"_id":1,"PhoneNumber":1}).limit(3)
///3 top of data 
db.Persons.find({},{"Name" : 1 ,"_id":1,"PhoneNumber":1}).skip(2).limit(2
)

db.Persons.find({},{"Name" : 1 ,"_id":1,"PhoneNumber":1}).sort({"Name":-1})

for(i=10;i<20;++i)
{
   db.Persons.insert({"Name":'ahmad',"age":+i});
}

////we must use undexing for found yhe data in best Time
db.Persons.find() 
db.Persons.ensureIndex({"_id":1});

db.Persons.findOne({"_id":ObjectId("60b327a3285900009f005e36")})


db.Persons.updateMany({
"_id": ObjectId("60b32827285900009f005e37"),
},{$set:{"Gender":"Woman"}})

////some times we want to gropBy somethin and for this we use this way 
db.Persons.aggregate([{$group:{_id :"$Gender",Myresult : {$sum : 1}}}])
///look like as and gropp by in sql server 


///for maxinum age 
db.Persons.aggregate([{$group:{_id :"$Gender",MaxAge : {$max : "$age"}}}])



///for Minimum age 
db.Persons.aggregate([{$group:{_id :"$Gender",MinAge : {$min : "$age"}}}])
