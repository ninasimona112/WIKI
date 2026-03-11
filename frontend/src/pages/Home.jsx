import { Link } from "react-router";
import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";

export const Home = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axiosClient.get("/topics");
        setTopics(response.data);
      } catch (err) {
        setError(
          err?.response?.data?.message || "Topics-ის ჩამოტვირთვა ვერ მოხერხდა",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  if (loading) return <p>იტვირთება...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Available entries</h2>
      <ul>
        {topics.map((item) => (
          <li key={item._id}>
            <Link to={`/entries/${item._id}`}>{item.topic}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
