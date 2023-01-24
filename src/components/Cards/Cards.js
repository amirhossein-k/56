import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { Card } from "react-bootstrap";
import "../../styles/Cards.css";
// import { Cars } from "../../untils/Cars";
import cash_logo from "../../public/cash.svg";
import car_logo from "../../public/carlogo.svg";
import kilo_logo from "../../public/kilo.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProductAction } from "../../actions/productActions";
import { useNavigate, generatePath, Link } from "react-router-dom";

const Cards = ({ cardrun, setCardrun }) => {
  const dispatch = useDispatch();
  const [Id, setId] = useState(null);
  const productList = useSelector((state) => state.productList);
  const { product, loading } = productList;

  useEffect(() => {
    setCardrun(true);
  }, []);
  useEffect(() => {
    console.log(cardrun, "card ...");
    if (cardrun === true) {
      dispatch(listProductAction());
      setCardrun(false);
    }
  }, [cardrun]);

  const navigate = useNavigate();

  console.log(product, "product");
  return (
    <>
      {loading && <h1>درحال خواندن دیتا هستیم منتظر بمانید</h1>}
      {product &&
        product.map((item) => {
          return (
            <Card
              className="pruduct"
              key={item.id}
              onClick={(e) => navigate(`/products/${item.id}`)}
            >
              <Card.Img
                variant="top"
                alt=""
                src={`${item.pic[0]}`}
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
              <div class="card-footer">
                {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                {/* <Link to={`/products/${item.id}`}></Link> */}
              </div>
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
