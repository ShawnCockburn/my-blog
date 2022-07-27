import mongoose, { Mongoose } from "mongoose";
import 'dotenv/config'

export default (() => {
  let instance: Mongoose;
  const uri = process.env.DB_URI;

  console.log("database URI",uri);

  const createInstance = () => {
    try {
      mongoose.connect(
        uri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        },
        () => console.log("connected")
      );
    } catch (error) {
      console.log("could not connect");
    }
    return mongoose;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
