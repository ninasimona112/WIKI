import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Topic from "./topicModel.js";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB დაკავშირება
mongoose
  .connect("mongodb://127.0.0.1:27017/wiki")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// იღებს topic და content-ს და ამატებს MongoDB-ში
app.post("/topic", async (req, res) => {
  try {
    const { topic, content } = req.body;

    if (!topic || !content) {
      return res
        .status(400)
        .json({ message: "topic and content are required" });
    }

    const newTopic = await Topic.create({
      title: topic,
      content: content,
    });

    res.status(201).json(newTopic);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating topic", error: error.message });
  }
});

// აბრუნებს ყველა Topic-ს MongoDB-დან
app.get("/topics", async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching topics", error: error.message });
  }
});

// Server start
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
