import style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "../../store/ApiRequest/AuthRequest";

const Login = () => {
  const dispath = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
    },
    onSubmit: (values) => {
      formik.handleReset();
      dispath(login(values));
    },
  });

  const {auth} = useSelector(x=>x.auth) 

  const navigate = useNavigate();

  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";
  const goHome = () => navigate(fromPage);
  useEffect(() => {
    if (auth == true) {
      goHome();
    }
  }, [auth]);

  return (
    <div className="card-body d-flex flex-column align-items-center">
    <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
      <svg
        className="bi bi-person"
        xmlns="http://www.w3.org/2000/svg"
        width="10em"
        height="10em"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
      </svg>
    </div>
    <form
      className="text-center"
      method="post"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-3">
        <input
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className="form-control"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
      </div>
      <div className="mb-3">
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary d-block w-100" type="submit">
          Login
        </button>
      </div>
      <p className="text-muted">Forgot your password?</p>
    </form>
  </div>
   
  );
};

export default Login;
