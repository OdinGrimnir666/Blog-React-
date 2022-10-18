import styles from "./CardPost.module.css";

const DateInfo = (date) => {
  return `${new Date(date).getFullYear()}.${
    new Date(date).getMonth() + 1
  }.${new Date(date).getDate()}`;
};

const CardPost = (props) => {
  const { title, description, text, user, createDate } = props;

  return (
    <>
      <div className={`card ${styles.cardpost}`}>
        <div className="card-body">
          <h5 className="card-title">{title.slice(1, 50)}</h5>
          <p className="card-text">{description.slice(1, 50) + "..."}</p>
          <p className="card-text" style={{ "text-align": "right" }}>
            <small className="text-muted">
              Author {user.firstName} Date Creation: {DateInfo(createDate)}
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export { CardPost };
