import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  question_title: { type: String, required: true },
  question_text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Questions", questionSchema);
