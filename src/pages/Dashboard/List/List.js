import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./list.scss";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
// import Navbar from '../../../components/Dashboard/navbar/Navbar'
import Datatable from "../../../components/Dashboard/datatable/Datatable";
import { Col } from "react-bootstrap";
const List = ({ cardrun, setCardrun }) => {
  // useEffect(() => {
  //   console.log(cardrun, "list b");
  //   setCardrun(true);
  //   console.log(cardrun, "list a");
  // }, []);
  // useEffect(() => {
  //   if (cardrun === true) {
  //     setCardrun(false);
  //     console.log(cardrun, "list render 2");
  //   }
  // }, [cardrun]);
  return (
    <div className="list row">
      <Col sm={12} md={2} lg={2} className="fixlistnavbar">
        <Sidebar />
      </Col>

      <Col sm={12} md={10} lg={10}>
        <div className="listContainer" style={{ width: "100%", padding: 5 }}>
          <Datatable cardrun={cardrun} setCardrun={setCardrun} />
        </div>
      </Col>
    </div>
  );
};

export default List;
