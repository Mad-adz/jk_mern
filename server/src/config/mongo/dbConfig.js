import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to ${db.connection.host}:${db.connection.port}/${db.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;