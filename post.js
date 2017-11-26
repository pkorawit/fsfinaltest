var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin@ds121456.mlab.com:21456/fsinstadb";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});
function getAllPosts(req, res) {
    //Get data from mongoDB
    var query = {};
    var sort = {create_date:-1};
    db.collection("posts").find(query).sort(sort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}

function getPostsByUser(req, res) {
    //Get data from mongoDB
    var userid = req.params.userid;
    var query = {username:userid};
    var sort = {create_date:-1};
    db.collection("posts").find(query).sort(sort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}

function InsertNewPosts(req, res) {
    //Insert new data to mongoDB
    var newpost = req.body;
    db.collection("posts").insertOne(newpost, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result.ops);
    });
}

module.exports = {
    getAllPosts: getAllPosts,
    getPostsByUser: getPostsByUser,
    InsertNewPosts: InsertNewPosts

};
