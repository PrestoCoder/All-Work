const mongoose = require('mongoose');
const { Schema } = mongoose;

const postsSchema = new Schema({
    description: String
});

module.exports = mongoose.model('posts', postsSchema);