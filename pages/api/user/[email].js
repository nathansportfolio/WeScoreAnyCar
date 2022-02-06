import connectToDatabase from "../../../services/newMongo";

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getSaved(req, res);
    }
  }
}

async function getSaved(req, res) {
  const { email } = req.query;

  try {
    const connected = await connectToDatabase();
    const user = await connected.db.collection("users").findOne({
      email,
    });

    return res.json({
      message: JSON.parse(JSON.stringify(user)),
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
