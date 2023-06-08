// https://www.mongodb.com/docs/drivers/node/current/fundamentals/aggregation/
// Aggregate allows to do multiple filtering, sorting, etc, in one go
// This is basically to analyze data over time.

// match:- query, woh waale elements do jinme koi field ki ek particular value ho
// Group:- unn matches mein se(ya phir db mein), count karo ki field ki common value waale kon se hain
// project:- un documents ki kaun kaun si fields print karni hai
db.people.aggregate([
    {
        $match: 
        {
            age: 20
        }
    }
]);

// This finds group of people with age 20, and returns their hobbies, and how many of them have that hobby
db.people.aggregate([
    { 
        $match:
        {
            age: 20
        }
    },
    {
        $group: {
            _id:"$hobbies.name",
            totalUsers: {
                $sum: 1
            } 
        } 
    }
]);

db.people.aggregate([
    { 
        $match:
        {
            age: 20
        } 
    },
    {
        $group: 
        {   // Means ab jo documents print honge unme _id hobbies.name hogi, aur totalUsers aage ek field jo bataegi kitne log
            // Hain uss hobby ke saath
            _id:"$hobbies.name", 
            totalUsers: 
            {
                $sum: 1
            } 
        } 
    },
    // projection  (different from aggregation):- https://www.mongodb.com/docs/drivers/node/current/fundamentals/indexes/
    {
        $project: 
        {
            _id:1, name:1
        }
    }
]);


// Woh waale elements print karo jo age 20 hai, aur unka keval id aur name print karo.
db.people.aggregate([
    { 
        $match: 
        {
            age: 20
        } 
    },
    {
        $project: 
        {
            _id:1, name:1
        }
    }
]);


