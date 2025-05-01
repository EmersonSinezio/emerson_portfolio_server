import mongoose from "mongoose";
const { Schema } = mongoose;

const contactDataSchema = new Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("ContactData", contactDataSchema);
