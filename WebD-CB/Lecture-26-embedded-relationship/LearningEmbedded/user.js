

let db;

let data = [
    {
        name:"Tripti",
        age: 20,
        hobbies: ["Dancing", "Eating", "Singing"]
    },
    {
        name:"Ujjwal",
        age: 19,
        hobbies: ["Running", "Reading"]
    }
]

db.users.insertMany(data);

// After insertion
[
    {
      _id: ObjectId("644e30c9868b3ae3d6848d6d"),
      name: 'Chai',
      price: 20,
      description: 'Sasti chaai, ekdum swaad'
    },
    {
      _id: ObjectId("644e30c9868b3ae3d6848d6e"),
      name: 'Juice',
      price: 50,
      description: 'Thanda and fresh'
    }
  ]

db.users.updateOne(
    {
        name:'Tripti',
    },
    {
        $set: {
            products:[
                ObjectId("644e30c9868b3ae3d6848d6d"),
                ObjectId("644e30c9868b3ae3d6848d6e"),
            ]
        }
    }
)


db.products.findOne({_id:db.users.findOne({name:'Tripti'}).products[0]})
// Returns chai

//Projections:To pick the fields we want
// db.users.find({}, PROJECTIONS);
// name:1, matlab name lao, _id:0, matlab id mat lao
db.users.find({}, {name:1, _id:0});
db.users.find({}, {name:1, _id:0, hobbies:1});

//Aggregation. :- THis is usually done from mongoose
// Yahan pe bas mongodb se kaise karte hain, woh fulfillment ke liye bataya hai
// Yeh upar jahan users mein id dali hai, wahan pe corresponding products daldega.
db.users.aggregate({
    $lookup:
    {
        from: "products", // Iss table se
        localField: "products", // Is array se keys uthap
        foreignField: "_id", // id se link karo
        as: "myProducts" // Is naam se store karo
    }
})



