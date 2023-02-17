import React, { useEffect, useMemo, useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Swipper from "./Swipper/Swipper";
import Search from "./Search/Search";
// import Cards from "./Cards/Cards";
import Header from "./Header/Header";
import "../styles/Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../actions/productActions";
///////////
const Home = ({ userInfo, Cards, cardrun, setCardrun }) => {
  const dispatch = useDispatch();
  const [datail, setDetail] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        "https://backend-site-asll.vercel.app/api/detail"
      );
      setDetail(data);
    };
    fetching();
  }, []);

  useEffect(() => {
    console.log(typeof datail, "too");
    for (const [key, value] of Object.entires(datail)) {
      // console.log(typeof key,'keyy')
      // switch(key){
      // }
    }
  }, [datail]);

  return (
    // <>
    <Container fluid className="gx-0">
      <Header userInfo={userInfo} datail={datail} setDetail={setDetail} />
      <Row>
        <Swipper />
      </Row>
      <Row className="justify-content-start align-items-center g-2 p-3 shadow mt-2 mb-2">
        <Search />
      </Row>
      <Row className="gap-4 fix">
        <Cards cardrun={cardrun} setCardrun={setCardrun} />
      </Row>
      <Row>
        <Col md={6} className="background">
          <div className="ani-back">
            <img
              src="https://res.cloudinary.com/dijamrzud/image/upload/v1675873934/giphy_nkvmcl.gif"
              alt="image"
            />
            <div className="car-img">
              <img
                src="https://res.cloudinary.com/dijamrzud/image/upload/v1675871193/NicePng_carpng_3406804_byfcuz.png"
                alt="image"
              />
            </div>
          </div>
        </Col>
        <Col md={6} className="background">
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
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1675871567/Pngtree_call_icon_4419870_bqmoor.png" />
                <span className="px-3">09391470427</span>
              </div>
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1675871194/m2H7H7i8Z5d3K9Z5_nh78mr.png" />
                <span className="px-3">AMIRHOSSEIN-K-1999</span>
              </div>
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1675871172/m2i8Z5Z5G6A0H7G6_me3zxo.png" />
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
