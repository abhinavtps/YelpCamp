const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
mongoose.connect("mongodb://localhost:27017/yelp-camp");

const { places, descriptors } = require("./seedHelpers");

//some error checking for mongoose connection

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];
//remove everything in the database initially

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      //YOUR USER ID
      author: "63cd71ad93d2463bb462267c",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum expedita porro sapiente minima cum nam ipsum distinctio explicabo inventore deserunt asperiores amet officia ipsa beatae natus, debitis sunt incidunt. Doloribus?",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dya0hqxl6/image/upload/v1674579785/YelpCamp/hediqeosteswyhpctezk.jpg",
          filename: "YelpCamp/hediqeosteswyhpctezk",
        },
        {
          url: "https://res.cloudinary.com/dya0hqxl6/image/upload/v1674579784/YelpCamp/yotododv0u72lcvhefwp.jpg",
          filename: "YelpCamp/yotododv0u72lcvhefwp",
        },
      ],
    });
    await camp.save();
  }
};

seedDB();
