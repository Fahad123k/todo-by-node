// initialize mongoose
const mongoose = require("mongoose");
// crate Schema of todo inputs like todo ,catagories, dueDate
const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
});

// export here by models
module.exports = new mongoose.model("Todo", TodoSchema);