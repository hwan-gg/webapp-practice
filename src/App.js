import Layout from "antd/es/layout/layout";
import { Footer } from "antd/es/layout/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import history from "./history";
import actions from "./Actions";
import Navbar from "./Components/Navbar";
import { Home, Login, Users, Profile, Movies } from "./Components/Pages";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.admin.enter());
  }, [dispatch]);

  return (
    <Router history={history}>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Profile/:username" element={<Profile />} />
        </Routes>
        <Footer style={{ textAlign: "center" }}>
          Hwan's webapp for practicing backend
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
