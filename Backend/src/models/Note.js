import mongoose from "mongoose";

//1-create a schema
const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
    }, 
    {timestamps: true} //created at, updated at
);

//2-create a model base off that schema
const Note = mongoose.model("Note", noteSchema)

export default Note