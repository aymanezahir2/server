const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("DataBase Connected"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
