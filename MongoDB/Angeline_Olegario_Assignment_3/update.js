// Deneen has married (congrats!) and has taken a new name: Crawley
db.employee.update(
   { "_id": 1  },
   { $set: { "employeeName": "Deneen Crawley" } }
)

db.employee.updateMany(
    { "manages._id": 1 }, 
    { "$set": { "manages.$.Name": "Deneen Crawley" } }
)

//People will soon be quitting the firm or retiring so we want to add one piece
//of information per employee: whether they are a current employee (true) or not
//(false). All employees are active for the moment.
db.employee.updateMany({}, {$set:{"is_active": true}})


//Jannette has retired
db.employee.update(
   { "_id": 5  },
   { $set: { "is_active": false } }
)
