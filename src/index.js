// Load environment variables and other dependencies
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Configure dotenv
dotenv.config({ path: './.env' });

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("❌ DB connection failed:", error);
  });
  

/* 
// Optional: Example of how connectDB might look
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

export default connectDB
*/
