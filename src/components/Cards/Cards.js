import React, { useEffect, useState, useCallback, useRef } from "react";
import { Card } from "react-bootstrap";
import "../../styles/Cards.css";
// import { Cars } from "../../untils/Cars";
import cash_logo from "../../public/cash.svg";
import car_logo from "../../public/carlogo.svg";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { listProductAction } from "../../actions/productActions";

const Cards = ({ setDatas, datas }) => {
  // const dispatch = useDispatch();

  return (
    <>
      {datas &&
        datas.map((item) => {
          return (
            <Card className="pruduct" key={item.id}>
              <Card.Img
                variant="top"
                alt=""
                src={`${item.pic}`}
                style={{ height: "-webkit-fill-available" }}
              />
              <Card.Title className="name">{item.namecar}</Card.Title>

              <Card.Body className="box">
                <Card.Text>
                  {" "}
                  <Card.Img src={cash_logo} className="imgg" alt="jjj" />{" "}
                  {item.price} toman{" "}
                </Card.Text>
                <Card.Text>
                  <Card.Img src={car_logo} className="imgg" alt="jjj" />{" "}
                  {item.factory}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      <div className="con-btn">
        <button className="buttonn">Show More</button>
      </div>
    </>
  );
};

export default Cards;
