import { useState, useEffect } from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Login from "./screens/Login";

import { useSelector } from "react-redux";
import HomeDashboard from "./pages/Dashboard/HomeDashboard/HomeDashboard";
// import Login from "./pages/Dashboard/Login/Login";
import List from "./pages/Dashboard/List/List";
import New from "./pages/Dashboard/New/New";
import Single from "./pages/Single/Single";
import ProtectedRoute from "./components/protect/ProtectedRoute";
import Detail from "./components/Dashboard/detail.js/Detail";
import Cards from "./components/Cards/Cards";
///////////////
export default function App() {
  // const [user, setUser] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const [cardrun, setCardrun] = useState(false);
  // console.log(userInfo);
  console.log(cardrun, "app..");
  // useEffect(() => {
  //   setCardrun(true);
  // }, [cardrun]);
  return (
    // <BrowserRouter>
    <Container
      fluid
      style={{ paddingLeft: 0, paddingRight: 0 }}
      className="gx-0"
    >
      {/* <Header />  */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userInfo={userInfo}
              Cards={Cards}
              cardrun={cardrun}
              setCardrun={setCardrun}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products/:productId"
          element={<Single cardrun={cardrun} setCardrun={setCardrun} />}
        />
        <Route element={<ProtectedRoute userInfo={userInfo} />}>
          <Route path="/dashboard">
            <Route
              index
              element={
                <HomeDashboard cardrun={cardrun} setCardrun={setCardrun} />
              }
            />
            <Route path="products">
              <Route index element={<List />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              <Route path="new" element={<New />} />
            </Route>
            <Route path="detail" element={<Detail />} />
          </Route>
        </Route>
        {/* /// */}
        <Route path="login" element={<Login />} />
      </Routes>
    </Container>
    // </BrowserRouter>
  );
}
