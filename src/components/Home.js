import React, { useEffect, useMemo, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Swipper from "./Swipper/Swipper";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import Header from "./Header/Header";
import "../styles/Home.css";
import axios from "axios";
const Home = ({ userInfo }) => {
  const [datas, setDatas] = useState([]);

  const getAnswer = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      "https://backend-site-asll.vercel.app/api/product/list",
      config
    );
    setDatas(data);
    // console.log(data, "val");
  };
  const fetch = useMemo(() => getAnswer(), []);
  useEffect(() => {}, [datas]);
  return (
    // <>
    <Container fluid className="gx-0">
      <Header userInfo={userInfo} />
      <Row>
        <Swipper />
      </Row>
      <Row className="justify-content-start align-items-center g-2 p-3 shadow mt-2 mb-2">
        <Search />
      </Row>
      <Row className="gap-4 fix">
        <Cards datas={datas} setDatas={setDatas} />
      </Row>
      <Row>
        <Col lg={6} className="background">
          <div className="ani-back">
            <img
              src="https://res.cloudinary.com/dijamrzud/image/upload/v1668962705/circle_h6orwc.gif"
              alt="image"
            />
            <div className="car-img">
              <img
                src="https://res.cloudinary.com/dijamrzud/image/upload/v1668962697/car_z05a6c.png"
                alt="image"
              />
            </div>
          </div>
        </Col>
        <Col lg={6} className="background">
          <div className="contain">
            <div className="time">
              <span className="block">
                شنبه تا چهارشنبه<span className="m-2">10-10</span>
              </span>
              <span className="block">
                پنج شنبه<span className="m-2">12-5</span>
              </span>
              <span className="block">
                جمعه<span className="m-2">10-8</span>
              </span>
            </div>
            <div className="social">
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1670610052/phone_mw6xk7.png" />
                <span className="px-3">09391470427</span>
              </div>
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1670610051/insta_aewyg5.png" />
                <span className="px-3">AMIRHOSSEIN-K-1999</span>
              </div>
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1670610010/loc_emmrsc.png" />
                <span className="px-3">تهران</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    // </>
  );
};

export default Home;
