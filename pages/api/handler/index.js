import mongoose from "mongoose";
import UserModel from "../../../services/user";
import clientPromise from "../../../services/mongo";

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "POST": {
      return addUser(req, res);
    }
    case "PUT": {
      return updateSaved(req, res);
    }

    case "GET": {
      return getSaved(req, res);
    }

    case "DELETE": {
      return deletedSaved(req, res);
    }
  }
}

async function addUser(req, res) {
  await mongoose.connect(
    "mongodb+srv://james:Jamied123@cars.natt5.mongodb.net/cars?retryWrites=true&w=majority"
  );

  try {
    let response = new UserModel({ email: req.body, saved: [] });
    response.save();
    return res.json({
      message: response,
      success: false,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function getSaved(req, res) {
  const { email } = req.query;
  await mongoose.connect(
    "mongodb+srv://james:Jamied123@cars.natt5.mongodb.net/cars?retryWrites=true&w=majority"
  );

  try {
    const client = await clientPromise;
    const db = client.db("cars");

    const user = await db.collection("users").find({
      email,
    });

    return res.json({
      message: user,
      success: false,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function updateSaved(req, res) {
  const {
    email,
    registration,
    engineSize,
    fuelType,
    make,
    model,
    primaryColour,
    score,
    avgScore,
  } = JSON.parse(req.body);
  await mongoose.connect(
    "mongodb+srv://james:Jamied123@cars.natt5.mongodb.net/cars?retryWrites=true&w=majority"
  );

  try {
    const user = await UserModel.updateOne(
      { email },
      {
        $push: {
          saved: {
            registration,
            engineSize,
            fuelType,
            make,
            model,
            primaryColour,
            score,
            avgScore,
          },
        },
      },
      { upsert: true, runValidators: true },
      function (err, doc) {}
    ).clone();

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

async function deletedSaved(req, res) {
  const {
    email,
    registration,
    engineSize,
    fuelType,
    make,
    model,
    primaryColour,
    score,
    avgScore,
  } = JSON.parse(req.body);

  await mongoose.connect(
    "mongodb+srv://james:Jamied123@cars.natt5.mongodb.net/cars?retryWrites=true&w=majority"
  );

  try {
    const user = await UserModel.updateOne(
      { email },
      {
        $pull: {
          saved: {
            registration,
            engineSize,
            fuelType,
            make,
            model,
            primaryColour,
            score,
            avgScore,
          },
        },
      },
      { upsert: true, runValidators: true },
      function (err, doc) {}
    );
    return res.json({
      message: user,
      success: false,
    });
  } catch (error) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
