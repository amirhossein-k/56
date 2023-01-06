import React from "react";
import { Container, Col } from "react-bootstrap";
import InputModule from "../Input/Input";
import "../../styles/Search.css";

const Search = () => {
  return (
    <>
      <Col xl={2} md={4} sm={6} className="justify coll">
        <InputModule>keyword</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify coll">
        <InputModule>All Categories</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify coll">
        <InputModule>Brand</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify coll">
        <InputModule>Fuel Type</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify coll">
        <InputModule>Status</InputModule>
      </Col>
      <Col xl={2} md={4} sm={6} className="justify coll">
        <button className="button fixed">Search</button>
      </Col>
    </>
  );
};

export default Search;
