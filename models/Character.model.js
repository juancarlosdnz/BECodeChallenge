const { Schema, model } = require("mongoose");

const characterSchema = new Schema(
  {
    internalId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
);
module.exports = model('Character',characterSchema);

