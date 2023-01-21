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
import { Shamsi, Miladi } from "basic-shamsi";
import moment from "jalali-moment";
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
  const [datas, setDatas] = useState("");
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId, "id");
  useEffect(() => {
    setKey((prevpic) => prevpic.splice(0, prevpic.length));
    setValue((prevpic) => prevpic.splice(0, prevpic.length));
    dispatch(getPrdoductAction(productId));
  }, []);
  const product = useSelector((state) => state.productGet);
  const { data, success, loading } = product;

  useEffect(() => {
    setKey((prevpic) => prevpic.splice(0, prevpic.length));
    setValue((prevpic) => prevpic.splice(0, prevpic.length));
    if (success === true) {
      if (data) {
        for (const [key, value] of Object.entries(data)) {
          console.log("key", key);
          console.log("key yype", typeof key);
          // setKey((prevkey) => [...prevkey, key]);

          console.log("key og", key);
          console.log("value og", value);
          setKey((prevkey) => [...prevkey, key]);
          setValue((prevvalue) => [...prevvalue, value]);
          if (key === "date") {
            // var three = value.toISOString().substring(0, 10);
            var one = value.slice(0, 10);
            var two = one.replaceAll("-", "/");
            var three = Miladi.toShamsi(two);
            setDatas(three);
          }
          if (key === "pic") {
            setPics(value);
            console.log(pics, "pics");
          }
          console.log(datas, "data");
        }
      }
    }
  }, [success]);
  if (data) {
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
              console.log(datas, "datas");
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
        {/* {key && console.log(key, "keii")} */}
        {success &&
          key.map((item, index) => {
            console.log(item, "item");
            console.log(value[index], "value");
            return (
              <Row className="row-child-detail">
                {item === "pic" ||
                item === "_id" ||
                item === "__v" ||
                item === "id" ? null : (
                  <Col sm={3} lg={4} className="col-child-detail item">
                    {/* {item} */}
                    {(() => {
                      switch (item) {
                        case "namecar":
                          return "نام خودرو";
                        case "factory":
                          return "کارخانه";
                        case "distance":
                          return "کارکرد";
                        case "skills":
                          return "ویژگی";

                        case "price":
                          return "قیمت";

                        case "status":
                          return "وضعیت";
                        case "date":
                          return "تاریخ";

                        default:
                          return null;
                      }
                    })()}
                  </Col>
                )}

                {item === "pic" ||
                item === "_id" ||
                item === "__v" ||
                item === "id" ? null : (
                  <Col className="col-child-detail value">
                    {/* {item === "date" ? datas : value[index] ? item ==='status' } */}
                    {(() => {
                      switch (item) {
                        case "date":
                          return datas;
                        case "status":
                          if (value === "sold") {
                            return "موجود";
                          } else {
                            return "فورخته شده";
                          }
                        default:
                          return value[index];
                      }
                    })()}
                  </Col>
                )}
              </Row>
            );
          })}
      </Row>
      <Row className="image-slider-bottom">
        <p></p>
      </Row>
    </Container>
  );
};

export default Single;
