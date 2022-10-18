import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { logout } from "../../store/authSlice";

const Header = () => {
  const dispah = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  useEffect(() => {
    goHome();
  }, [auth]);
  return (
    <>
      <header class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {auth && (
                <>
                  <li>
                    <Link class="nav-link px-2 text-white" to="createpost">
                      <h5>New Post</h5> 
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <div class="text-end">
              {!auth ? (
                <>
                  <button type="button" class="btn btn-outline-light me-2">
                    <Link className="nav-link px-2 text-white" to="/login">
                      Login
                    </Link>
                  </button>
                  <button type="button" class="btn btn-warning">
                    <Link className="nav-link px-2 text-white" to="/register">
                      Sign-up
                    </Link>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => dispah(logout())}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
