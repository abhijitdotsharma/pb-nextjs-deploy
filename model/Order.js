import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: [true, "Please provide order quantity"],
  },
  city: {
    type: String,
    required: [true, "Please provide city information"],
  },
  status: {
    type: String,
    enum: ["not-started", "pending", "closed"],
    default: "not-started",
  },
  conversationHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conversation",
    },
  ],
});

const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);

export default Order;
