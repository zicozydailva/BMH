import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    albumId: {
      type: Number,
    },
    title: {
      type: String,
    },
    url: {
      type: String,
    },

    thumbnailUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
