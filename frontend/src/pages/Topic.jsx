import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";

export const Topic = () => {
  const [topic, setTopic] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { topicId } = useParams();

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await axiosClient.get(`/entries/${topicId}`);
        setTopic(response.data);
      } catch (err) {
        setError(
          err?.response?.data?.message || "Topic-ის ჩამოტვირთვა ვერ მოხერხდა",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchTopic();
  }, [topicId]);

  if (loading) return <p>იტვირთება...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.content}</p>
    </div>
  );
};
