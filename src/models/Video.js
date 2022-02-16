import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});

const movieModel = mongoose.model("Video", videoSchema);

export default movieModel;
