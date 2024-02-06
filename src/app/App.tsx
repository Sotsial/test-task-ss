import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogItem from "../pages/Blog/BlogItem";
import BlogPage from "../pages/Blog/BlogPage";
import CounterPage from "../pages/Counter/CounterPage";
import FakeApiPage from "../pages/FakeApi/FakeApiPage";
import LoginPage from "../pages/Login/LoginPage";
import Layout from "../shared/Layout/Layout";
import { selectToken } from "./store/authSlice";

function App() {
  const isAuth = useSelector(selectToken);

  if (!isAuth)
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blogs/:id" element={<BlogItem />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="fakeApi" element={<FakeApiPage />} />
        <Route path="*" element={<Navigate to={"/blogs"} />} />
      </Route>
    </Routes>
  );
}

export default App;
