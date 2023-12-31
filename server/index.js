const express = require("express");
require("dotenv").config();
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const app = express();

const port = 4000;

//Connect Database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, console.log(`Server started on port ${port}`));
