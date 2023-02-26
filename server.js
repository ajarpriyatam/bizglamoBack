const app = require("./app.js");
const connect = require("./db/connect.js");
const cors=require("cors");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "db/config.env" });
}

app.use(cors());
connect();
const server = app.listen(process.env.PORT, () => { 
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
