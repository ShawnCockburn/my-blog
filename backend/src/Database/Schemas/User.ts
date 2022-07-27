import mongoose from "../mongoose";
const mongooseInstance = mongoose.getInstance();
const Schema = mongooseInstance.Schema;

const UserSchema = new Schema({
  password: String,
  email: String,
  name: String,
  imageUrl: String,
});

const User = mongooseInstance.model<{
  password: string;
  email: string;
  name: string;
  token: string;
  imageUrl: string;
}>("User", UserSchema);

export default User;
