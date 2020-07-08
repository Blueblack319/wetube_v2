import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  text: {
    type: String,
    required: "Comment is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
});

const model = mongoose.model("Comment", commentSchema);
export default model;
