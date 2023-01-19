import "./single.scss";

import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import HeaderChild from "../../components/Header/HeaderChild";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
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
          {/* <div className="each-slide">
            <div>
              <img src={images[0]} alt="" />
            </div>
            <p>First Slide</p>
          </div>
          <div className="each-slide">
            <p>Second Slide</p>
            <div>
              <img src={images[1]} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={images[2]} alt="" />
            </div>
            <p>Third Slide</p>
          </div> */}
        </Fade>
      </Row>
      <Row className="details"></Row>
      <Row className="image-slider-bottom"></Row>
    </Container>
  );
};

export default Single;
