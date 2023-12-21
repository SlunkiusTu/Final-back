import mongoose from "mongoose";
import AnswerModel from "../models/answer.js";

const ADD_ANSWER = async (req, res) => {
  try {
    const answer = new AnswerModel({
      answer_title: req.body.answer_title,
      answer_text: req.body.answer_text,
      date: req.body.date,
      question_id: req.params.id,
      user_id: req.body.user_id,
    });

    const response = await answer.save();

    return res.status(200).json({ response: response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const GET_ANSWERS = async (req, res) => {
  try {
    const answers = await AnswerModel.aggregate([
      { $match: { question_id: new mongoose.Types.ObjectId(req.params.id) } },
      {
        $lookup: {
          from: "questions",
          localField: "question_id",
          foreignField: "_id",
          as: "question",
        },
      },
    ]);

    return res.status(200).json({ answers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const DELETE_ANSWER = async (req, res) => {
  try {
    const response = await AnswerModel.deleteOne({ _id: req.params.id });
    return res.status(200).json({ response: response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export { ADD_ANSWER, GET_ANSWERS, DELETE_ANSWER };
