const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const haircuts = require("./data");

const uri = process.env.MONGODB_URI;

const server = express();
server.use(cors());
const port = 5000;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Fetch and serve all haircuts from DB
server.get("/haircuts", async (req, res) => {
  try {
    // Connect the client to the server
    let connection = await client.connect();
    console.log("Connected to DB");

    let db = connection.db("honeycomb-test");

    let haircuts = await db.collection("haircuts").find().toArray();

    let cleanedData = {};
    for (let haircut of haircuts) {
      // Create obj with name as key for easy accessing by string
      cleanedData[haircut.name] = haircut;
      delete cleanedData.name;
    }
    res.json(cleanedData);
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

// Populate server with all haircuts
server.post("/haircuts/populate", async (req, res) => {
  try {
    // Connect the client to the server
    let connection = await client.connect();
    console.log("Connected to DB");

    let db = connection.db("honeycomb-test");

    let collection = await db.collection("haircuts");
    for (let haircut of haircuts) {
      // Add description to DB
      let description = `The ${haircut.name} is a haircut characterized by x, y, and z.`;
      haircut["description"] = description;
      await collection.insertOne(haircut);
    }
    res.status(204);
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

server.listen(port, async () => {
  try {
    console.log("Connected to server on port", port);
  } catch (error) {
    console.log(error);
  }
});
