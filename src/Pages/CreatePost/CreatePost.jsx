import styles from "./CreatePost.module.css";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { PostPost } from "../../store/ApiRequest/PostRequest";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ResetResposeStatus } from "../../store/blogSlice";

const CreatePost = () => {
  const { id, token } = useSelector((x) => x.auth);
  const dispath = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      text: "",
    },
    onSubmit: (values) => {
      values.id = id;
      values.token=token
      dispath(PostPost(values));
      formik.handleReset();
    },
  });
  const navigate = useNavigate();
  const goHome = () => navigate("/");


  const { responseStatus } = useSelector((x) => x.blog);
  useEffect(() => {
    if (responseStatus === 201) {
       goHome();
       dispath(ResetResposeStatus())

    }
  }, [responseStatus]);

  return (
    <>
      <form method="post" onSubmit={formik.handleSubmit}>
        <div className={`container ${styles.CreatePost}`}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.title}
              type="text"
              name="title"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.description}
              name="description"
              className="form-control"
              placeholder="Short Description"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{
                height: "5rem",
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Text
            </label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.text}
              name="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{
                height: "30rem",
              }}
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary d-block w-100" type="submit">
          Create Post
        </button>
      </form>
    </>
  );
};

export { CreatePost };
