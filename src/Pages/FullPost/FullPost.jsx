import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;

const ApiPath = `http://${apiHost}:${apiPort}/`;

const DateInfo = (date) => {
  return `${new Date(date).getFullYear()}.${
    new Date(date).getMonth() + 1
  }.${new Date(date).getDate()}`;
};

const FullPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`${ApiPath}post/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <hr />
      <h1>{post.text}</h1>
      <h3>Author:{post.user.firstName}</h3>
      <h5> Create post:{DateInfo(post.createDate)}  Edit Post:{DateInfo(post.EditDate)}</h5>
      
    </div>
  );
};

export default FullPost;
