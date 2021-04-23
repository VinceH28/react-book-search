const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sampleApp", {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});