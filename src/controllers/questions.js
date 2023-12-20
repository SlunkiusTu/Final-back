import QuestionModel from "../models/question.js";
import AnswerModel from "../models/answer.js";

const ADD_QUESTION = async (req, res) => {
  try {
    const question = new QuestionModel({
      question_title: req.body.question_title,
      question_text: req.body.question_text,
      date: req.body.date,
      user_id: req.body.userId,
    });

    const response = await question.save();

    return res.status(200).json({ response: response });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const GET_QUESTIONS = async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    return res.status(200).json({ questions: questions });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const GET_QUESTION_BY_ID = async (req, res) => {
  try {
    const question = await QuestionModel.findOne({ _id: req.params.id });
    return res.status(200).json({ question: question });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const DELETE_QUESTION = async (req, res) => {
  try {
    const deleteQuestion = await QuestionModel.deleteOne({
      _id: req.params.id,
    });
    if (deleteQuestion) {
      await AnswerModel.deleteMany({ question_id: req.params.id });
      return res.status(200).json({ message: "deleted" });
    } else {
      return res.status(404).json({ message: "Smf went wrong" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export { ADD_QUESTION, GET_QUESTIONS, GET_QUESTION_BY_ID, DELETE_QUESTION };
