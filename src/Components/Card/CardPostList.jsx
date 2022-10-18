import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardPost } from "./CardPost";
import styles from "./CardPostList.module.css"

const CardPostList = () => {
  const blog = useSelector((state) => state.blog.blogList);
  console.log(blog);
  return (
    <div className={styles.GridList} style={{margin: "3em"}}>
      {blog != null &&
        blog.map((x) => {
          return <Link key={x.id} to={`/post/${x.id}`} style={{"text-decoration": "none",color: "black"}}> <CardPost  {...x}/></Link>;
        })}
      {/* <Pagination /> */}
    </div>
  );
};

export { CardPostList };
