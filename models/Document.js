const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let documentSchema = new Schema(
  {
    image: { type: String },
    location: { type: String },
  },
  {
    // createdAt,updatedAt fields are automatically added into records
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Document", documentSchema);

