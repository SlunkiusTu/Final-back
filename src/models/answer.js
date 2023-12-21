import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
  answer_title: { type: String, required: true },
  answer_text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  gained_likes_number: { type: Number, default: 0 },
  question_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export default mongoose.model("Answer", answerSchema);
