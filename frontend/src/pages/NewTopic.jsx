import { useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../axiosClient";

export const NewTopic = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!topic.trim() || !content.trim()) {
      setError("Topic და Content აუცილებელია");
      return;
    }

    try {
      setIsSaving(true);
      await axiosClient.post("/topic", {
        topic: topic.trim(),
        content: content.trim(),
      });

      // შექმნის შემდეგ დაბრუნება მთავარ გვერდზე (შენთან ესაა /entries)
      navigate("/entries");
    } catch (err) {
      setError(err?.response?.data?.message || "შეცდომა topic-ის შექმნისას");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <h2>Add a new topic</h2>

      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      <form className="new-topic" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </label>

        <label>
          Content
          <textarea
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <button type="submit" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save"}
        </button>
      </form>
    </>
  );
};
