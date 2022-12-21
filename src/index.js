const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("../db");
const dotenv = require("dotenv");
const componentRouter = require("../routers/ComponentRouter");
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", componentRouter);
connectDB();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
