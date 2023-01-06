import "./single.scss";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
import Chart from "../../../components/Dashboard/chart/Chart";
import Tables from "../../../components/Dashboard/tables/Tables";

const Single = () => {
  return (
    <Row className="single">
      {/* /////////////////////////////  */}
      <Col sm={12} md={2} lg={1} className="fixlistnavbar">
        <Sidebar />
      </Col>
      {/* ////////////////////////////////// */}
      <Col sm={12} md={10} lg={11}>
        <Row className="singleContainer">
          <Col className="top" xs={12} md={4} lg={4}>
            <Row className="left">
              <div className="editButton">Edit </div>
              <Col xs={12} ><h1 className="title">Information</h1></Col>
              {/* ///item */}
              <Col className="item" xs={12}>
                <img
                  src="https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg"
                  alt=""
                  className="itemImg"
                />

                {/* ///details */}
                <div className="details">
                  <h1 className="itemTitle">samand</h1>
                  <div className="detailItem">
                    <span className="itemKey">کارخانه:</span>
                    <span className="itemValue">سایپا</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">کارکرد:</span>
                    <span className="itemValue">5</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">وضعیت:</span>
                    <span className="itemValue">موجود</span>
                  </div>
                </div>
                {/* ////details end */}
              </Col>
              {/* ///item end */}
            </Row>
            {/* //// left end */}
          </Col>
          {/* /// top col end */}
          {/* /////////////////////// */}
          <Col className="right" md={8} lg={8} style={{paddingBlock: 20}}>
            <Chart aspect={3 / 1} title={'نوسانات'}/>
          </Col>
          {/* ////////////////////// */}

          <Col className="buttom" xs={11}>
            <Row>
              <Col xs={12}><h1 className="title">Information</h1></Col>
              <Col>
                <Tables/>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* //row single container */}
      </Col>
      {/* // /col end */}
    </Row>
    // / row single end
  );
};

export default Single;
