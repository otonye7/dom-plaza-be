const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const agendaSchema = new Schema({
    task: {
        type: String,
        trim: true,
        required: "Task cannot be empty",
    },
    dateValue: {
        type: String,
        required: "Date cannot be empty"
    },
    time: {
        type: String,
        required: "Time cannot be empty"
    }
}, { timestamps: true })

module.exports = Agenda = mongoose.model("Agenda", agendaSchema)