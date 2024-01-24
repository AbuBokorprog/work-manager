import { mongoose } from "mongoose";

export async function db() {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.kq57d4a.mongodb.net/work_manager?retryWrites=true&w=majority`
    );
    console.log("hello world", connection);
  } catch (error) {
    console.log("Failed to connect to Mongoose");
    console.log(error);
  }
}
