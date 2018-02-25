const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema ({
    clientName: String,
    clientPhone: String,
    clientEmail: String,
    subject: String,
    description: String,
    beginDate: String,
    expectedDate: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;