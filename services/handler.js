const { connectToDatabase } = require("../mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "POST": {
      return addPost(req, res);
    }
  }
}

async function addPost(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    console.log("res", db);
    // add the post
    await db.collection("users").insertOne(JSON.parse(req.body));
    // return a message
    return res.json({
      message: "Post added successfully",
      success: true,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
