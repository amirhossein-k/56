import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/Cards.css";
import { Cars } from "../../untils/Cars";
import cash_logo from "../../public/cash.svg";
import car_logo from "../../public/carlogo.svg";
// import ShowMore from './ShowMore'

const Cards = () => {
  return (
    <>
      {Cars.map((item) => {
        return (
          <Card className="pruduct" key={item.id}>
            <Card.Img
              variant="top"
              src={`${item.image}`}
              style={{ height: "-webkit-fill-available" }}
            />
            <Card.Title className="name">{item.name}</Card.Title>

            <Card.Body className="box">
              <Card.Text>
                {" "}
                <Card.Img src={cash_logo} className="imgg" /> {item.price} toman{" "}
              </Card.Text>
              <Card.Text>
                <Card.Img src={car_logo} className="imgg" /> {item.catagory}
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
