const mongoose = require("mongoose");
const dbConfig = require("../../config/db.config");

const useDatabase = async (HOSTMONGO, MONGOBD) => {
  console.log(`mongodb://${HOSTMONGO}${MONGOBD}`);

  try {
    // mongoose.connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@cluster0.mlxr79x.mongodb.net/?retryWrites=true&w=majority`);
    // let url = `mongodb://${HOSTMONGO}${MONGOBD}`;
    let url = `mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@cluster0.mlxr79x.mongodb.net/?retryWrites=true&w=majority`;
    // const connection = await mongoose.connect(url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });


    const connection = await mongoose.connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@cluster0.mlxr79x.mongodb.net/?retryWrites=true&w=majority`);


    mongoose.Promise = global.Promise;

    console.log("Database connected");

    return connection;
  } catch (err) {
    console.log("Error when trying to connect to database");
    console.log(err);
  }
};

const disconnectDatabase = async () => {
  await mongoose.connection.close();
};

module.exports = { useDatabase, disconnectDatabase };
