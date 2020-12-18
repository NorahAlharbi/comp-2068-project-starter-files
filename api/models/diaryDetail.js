const mongoose = require('mongoose');


const DiaryDetailSchema = new mongoose.Schema({
  writer: {
    type: String,
    required: true
  },
  diaryDetail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date(),
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DiaryDetail', DiaryDetailSchema);