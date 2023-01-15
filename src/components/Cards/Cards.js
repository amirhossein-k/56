import React, { useEffect, useState, useCallback, useRef } from "react";
import { Card } from "react-bootstrap";
import "../../styles/Cards.css";
// import { Cars } from "../../untils/Cars";
import cash_logo from "../../public/cash.svg";
import car_logo from "../../public/carlogo.svg";
import kilo_logo from "../../public/kilo.svg";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { listProductAction } from "../../actions/productActions";

const Cards = ({ product, loading }) => {
  // const dispatch = useDispatch();

  return (
    <>
      {loading && <h1>درحال خواندن دیتا هستیم منتظر بمانید</h1>}
      {!loading &&
        product.map((item) => {
          return (
            <Card className="pruduct" key={item.id}>
              <Card.Img
                variant="top"
                alt=""
                src={`${item.pic}`}
                style={{ height: "-webkit-fill-available" }}
              />
              <Card.Title className="name">{item.namecar}</Card.Title>

              <Card.Body
                className="box"
                style={{ flexDirection: "row", display: "flex" }}
              >
                <Card.Text style={{ margin: " 0 5px" }}>
                  {" "}
                  <Card.Img src={cash_logo} className="imgg" alt="jjj" />{" "}
                  {item.price} toman{" "}
                </Card.Text>
                <Card.Text style={{ margin: " 0 5px" }}>
                  <Card.Img src={car_logo} className="imgg" alt="jjj" />{" "}
                  {item.factory}
                </Card.Text>
                <Card.Text style={{ margin: " 0 5px" }}>
                  <Card.Img src={kilo_logo} className="imgg" alt="jjj" />{" "}
                  {item.distance}
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
