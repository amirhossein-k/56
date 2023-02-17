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
  const [datail, setDetail] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState();
  const [header_img, setHeader_img] = useState("");
  const [profile_img, setProfile_img] = useState("");
  ///
  const [times_1, setTimes_1] = useState("");
  const [times_2, setTimes_2] = useState("");
  const [times_3, setTimes_3] = useState("");

  const [social_phone, setSocial_phone] = useState("");
  const [social_address, setSocial_address] = useState("");
  const [social_ig, setSocial_ig] = useState("");

  const [slider_img, setSlider_img] = useState([]);

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
    if (datail) {
      setHeader_img(datail.header_img);
      setProfile_img(datail.profile_img);
      setTitle(datail.title);
      setSubtitle(datail.subtitle);
      setSlider_img(datail.slider_img);
      setTimes_1(datail.times_1);
      setTimes_2(datail.times_2);
      setTimes_3(datail.times_3);
      setSocial_address(datail.social_address);
      setSocial_phone(datail.social_phone);
      setSocial_ig(datail.social_ig);
      // for (const [key, value] of Object.entries(datail)) {
      //   console.log(key, "keyy");

      //   if (key === "times_1") {
      //     setTimes_1(value);
      //   }
      // }
    }
  }, [datail]);

  return (
    // <>
    <Container fluid className="gx-0">
      <Header
        userInfo={userInfo}
        datail={datail}
        setDetail={setDetail}
        title={title}
        subtitle={subtitle}
        header_img={header_img}
        profile_img={profile_img}
      />
      <Row>
        <Swipper slider_img={slider_img} datail={datail} />
      </Row>
      {/* <Row className="justify-content-start align-items-center g-2 p-3 shadow mt-2 mb-2">
        <Search />
      </Row> */}
      <Row className="gap-4 fix">
        <Cards cardrun={cardrun} setCardrun={setCardrun} Search={Search} />
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
                شنبه تا چهارشنبه<span className="m-2">{datail && times_1}</span>
              </span>
              <span className="block">
                پنج شنبه<span className="m-2">{datail && times_2}</span>
              </span>
              <span className="block">
                جمعه<span className="m-2">{datail && times_3}</span>
              </span>
            </div>
            <div className="social">
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1675871567/Pngtree_call_icon_4419870_bqmoor.png" />
                <span className="px-3">{datail && social_phone}</span>
              </div>
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1675871194/m2H7H7i8Z5d3K9Z5_nh78mr.png" />
                <span className="px-3">{datail && social_ig}</span>
              </div>
              <div className="boxx">
                <img src="https://res.cloudinary.com/dijamrzud/image/upload/v1675871172/m2i8Z5Z5G6A0H7G6_me3zxo.png" />
                <span className="px-3">{datail && social_address}</span>
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
