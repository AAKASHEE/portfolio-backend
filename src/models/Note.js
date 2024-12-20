// import mongoose from 'mongoose';

// const noteSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true
//   },
//   message: {
//     type: String,
//     required: true
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now
//   }
// }, {
//   timestamps: true
// });

// export default mongoose.model('Note', noteSchema);

// filepath: /Users/aakashe/port_FOLIO_02/backend/src/models/Note.js
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;