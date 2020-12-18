const DiaryDetail = require('../models/diaryDetail');
const User = require('../models/user');

exports.index = async (req, res, next) => {
  try {
    const diary = await DiaryDetail.find();
    res.status(200).json(diary);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const diaryDetail = await DiaryDetail.findById(req.params.id);

    res.status(200).json(diaryDetail);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { diaryDetail, date } = req.body;

    const user = await User.findById(req.user._id);

    const dr = await DiaryDetail.create({
      writer: user.name,
      diaryDetail: diaryDetail,
      date: new Date(date)
    });

    res.status(200).json({ message: "Diary was created successfully", diaryDetail: dr });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, diaryDetail, date } = req.body;
    console.log(req.body);
    const dr = await DiaryDetail.findOneAndUpdate({ _id: _id }, {
      diaryDetail,
      date: new Date(date)
    });

    res.status(200).json({ message: "Diary was updated successfully", diaryDetail: dr });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await DiaryDetail.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Diary was deleted successfully" });
  } catch (error) {
    next(error);
  }
};