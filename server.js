require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});