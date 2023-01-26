const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  body: String,
  rating: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

//This model is based on one to many relationship
//one campground has many review

module.exports = mongoose.model("Review", reviewSchema);
