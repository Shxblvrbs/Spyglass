const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: true,
    },
    curentAmount: {
      type: "String",
      required: true,
    },
    targetAmount: {
      type: "String",
      required: true,
    },
    image: {
      type: "String",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const goalModel = mongoose.model("goal", goalSchema);

module.exports = goalModel;
