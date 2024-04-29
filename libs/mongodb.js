import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to database successfully🚗');
    } catch (error) {
        console.log('⚠⚠🌋🌋', error);
    }
}

export default connectToDatabase;