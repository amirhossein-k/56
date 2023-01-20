import "./single.scss";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import HeaderChild from "../../components/Header/HeaderChild";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPrdoductAction,
  listProductAction,
} from "../../actions/productActions";
import { useParams } from "react-router-dom";
import {
  Card,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";
const Single = () => {
  const [pics, setPics] = useState([]);
  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId, "id");
  useEffect(() => {
    dispatch(getPrdoductAction(productId));
  }, []);
  const product = useSelector((state) => state.productGet);
  const { data, success, loading } = product;

  useEffect(() => {
    if (success === true) {
      for (const [key, value] of Object.entries(data)) {
        console.log("key", key);
        console.log("key yype", typeof key);
        setKey((prevkey) => [...prevkey, key]);
        setValue((prevvalue) => [...prevvalue, value]);
        if (key === "pic") {
          setPics(value);
          console.log(pics, "pics");
        }
      }
    }
  }, [success, data]);
  if (data) {
    console.log(product);
  }
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <Container fluid className="gx-0">
      <HeaderChild />
      <Row className="image-slider-top">
        <Fade>
          {success === true ? (
            pics.map((item, index) => {
              console.log(typeof item);
              console.log(item);
              return (
                <div className="each-slide">
                  <div className="each-slide-child">
                    <img src={item} alt="" className="img-sidebar" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="each-slide">
              <div className="each-slide-child">
                <img src={images[0]} alt="" className="img-sidebar" />
                <p>خالی</p>
              </div>
            </div>
          )}
        </Fade>
      </Row>
      <Row className="details">
        {key &&
          key.map((item, index) => {
            <Row>
              <Col>{item[index]}</Col>
              <Col>{value[index]}</Col>
            </Row>;
          })}
      </Row>
      <Row className="image-slider-bottom"></Row>
    </Container>
  );
};

export default Single;
