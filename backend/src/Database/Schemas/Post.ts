import mongoose from "../mongoose";
const mongooseInstance = mongoose.getInstance();
const Schema = mongooseInstance.Schema;

const PostSchema = new Schema({
  title: String,
  author: String,
  description: String,
  content: String,
  date: { type: Date, default: Date.now },
  imageURL: String,
  tags: [String],
  visible: { type: Boolean, default: true },
});

const Post = mongooseInstance.model("Post", PostSchema);

export default Post;
