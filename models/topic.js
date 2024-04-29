import mongoose, { Schema } from "mongoose";

const TopicSchema = new Schema({
    title: String,
    descriptin: String,
}, { timestamps: true });

const Topic = mongoose.models.Topic || mongoose.models('Topic', TopicSchema);

export default Topic;