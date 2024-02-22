const { Schema, model, Types } = require("mongoose");

const AddressSchema = new Schema({
  line1: String,
  line2: String,
  city: String,
  state: String,
  postalCode: String,
  country: String
});
const orderSchema = Schema(
  {
    productId: { type: Types.ObjectId, ref: "product" },
    userId: { type: Types.ObjectId, ref: "user" },
    size: {
      required: false,
      type: String,
    },
    color: {
      required: false,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    quantities: {
      required: true,
      type: Number,
    },
    address: {
      required: true,
      type: AddressSchema
    },
    status: {
      default: false,
      type: Boolean,
    },
    received: {
      default: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);
const OrderModel = model("order", orderSchema);
module.exports = OrderModel;
