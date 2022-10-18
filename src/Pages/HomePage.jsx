import { useDispatch, useSelector } from "react-redux";
import { GetPost } from "../store/ApiRequest/PostRequest.js";
import { useEffect } from "react";
import { CardPostList } from "../Components/Card/CardPostList.jsx";

const HomePage = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(GetPost());
  }, []);
  const blogList = useSelector((state) => state.blog.blogList) ;
  console.log(blogList);

  return (
    
      <div className="container text-center">
        <div className="row">
        <div className="col-sm-8">
        {blogList &&<CardPostList />}
        </div>

          <div className="col-sm-4"></div>
        </div>
      </div>
  );
};

export { HomePage };
