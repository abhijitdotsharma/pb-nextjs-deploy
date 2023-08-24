import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orders",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  comment: String,
  attachment: String,
});

const Conversation =
  mongoose.models.conversations ||
  mongoose.model("conversations", conversationSchema);

export default Conversation;
