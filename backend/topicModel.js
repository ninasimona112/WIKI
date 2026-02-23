import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

export const TopicModel =
  mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default TopicModel;
