const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  provider: String,
  name: String
});

mongoose.model('users', userSchema);
