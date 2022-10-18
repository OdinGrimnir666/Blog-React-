import "./App.css";
import Layout from "./Components/Layout/Layout";
import { HomePage } from "./Pages/HomePage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./Pages/CreatePost/CreatePost";
import { RequiteAuth } from "./hook/RequireAuth";
import FullPost from "./Pages/FullPost/FullPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="post/:id" element={<FullPost />} />
          <Route path="login" element={<Login />} />
          <Route
            path="createpost"
            element={
              <RequiteAuth>
                <CreatePost />
              </RequiteAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
