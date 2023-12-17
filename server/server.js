const express = require("express");
const dotenv = require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const haircuts = require("./data");

const uri = process.env.MONGODB_URI;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const server = express();
const port = 3000;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

server.get("/", (req, res) => {
  res.json(haircuts);
  res.json("Hello");
});

// Fetch and serve all haircuts from DB
server.get("/haircuts", async (req, res) => {
  try {
    // Connect the client to the server
    let connection = await client.connect();
    console.log("Connected to DB");

    let db = connection.db("honeycomb-test");

    let haircuts = await db.collection("haircuts").find().toArray();
    res.json(haircuts);
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
