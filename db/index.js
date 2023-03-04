const mongoose = require("mongoose");
const axios = require("axios")
const CharacterModel = require("../models/Character.model")
require('dotenv')

const MONGO_URI = "mongodb://mongo:27017/BECodeChallenge";


async function populateDatabase() {
  try {
    const count = await CharacterModel.countDocuments();
    if (count > 0) {
      console.log('Database has already been populated')
      return
    }
    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1${process.env.TS}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}&limit=100&offset=0`);
    const characters = response.data.data.results.map(result => ({
      internalId: result.id,
      name: result.name,
      description: result.description,
    }));
    await CharacterModel.insertMany(characters);
    console.log('Database populated successfully')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`)
    populateDatabase()
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err)
  });
