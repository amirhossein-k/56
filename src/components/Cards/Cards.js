import React, { useEffect, useState, useCallback, useRef } from "react";
import { Card } from "react-bootstrap";
import "../../styles/Cards.css";
import { Cars } from "../../untils/Cars";
import cash_logo from "../../public/cash.svg";
import car_logo from "../../public/carlogo.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../actions/productActions";

const Cards = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState();

  const getAnswer = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      "https://4oqwur-9000.preview.csb.app/api/product/list",
      config
    );
    setVal(data);
    console.log(val, "val");
  };

  useEffect(() => {
    getAnswer();
  }, []);
  return (
    <>
      {val.map((item) => {
        return (
          <Card className="pruduct" key={item.id}>
            <Card.Img
              variant="top"
              src={`${item.pic}`}
              style={{ height: "-webkit-fill-available" }}
            />
            <Card.Title className="name">{item.namecar}</Card.Title>

            <Card.Body className="box">
              <Card.Text>
                {" "}
                <Card.Img src={cash_logo} className="imgg" /> {item.price} toman{" "}
              </Card.Text>
              <Card.Text>
                <Card.Img src={car_logo} className="imgg" /> {item.factory}
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
