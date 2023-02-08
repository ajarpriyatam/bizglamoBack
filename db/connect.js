const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connect = () => {
  const username = process.env.USER;
  const password = process.env.PASSWORD;
  const adminPassword = encodeURIComponent(password);
  const uri = `mongodb+srv://${username}:${adminPassword}@cluster0.8ryu92v.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
};

module.exports = connect;
