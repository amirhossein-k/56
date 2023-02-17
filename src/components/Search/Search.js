import React from "react";
import { Container, Col } from "react-bootstrap";
import InputModule from "../Input/Input";
import "../../styles/Search.css";

const Search = ({
  setSearchInput,
  searchResult,
  setSearchResult,
  searchInput,
  product,
}) => {
  const colls = ["اسم ماشین", "کارخانه", "سوخت مصرفی", "وضعیت"];
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    let searchFruits = product.filter((fruit) => {
      return e.target.value !== "" && product.includes(e.target.value);
    });
    setSearchResult(searchFruits);
  };
  return (
    <>
      {/* <Col xl={2} md={4} sm={6} className="justify coll">
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
      </Col> */}
      {/* {(() => {
       
      
      })()} */}

      {colls.map((item, index) => {
        return (
          <Col xl={2} md={4} sm={6} className="justify coll" key={index}>
            {/* <InputModule
              setSearchInput={setSearchInput}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              searchInput={searchInput}
              item={item}
              product={product}
            /> */}
            <input
              className="inputstyle"
              type="text"
              placeholder={item}
              value={searchInput}
              onChange={handleSearch}
            />
          </Col>
        );
      })}
      <Col xl={2} md={4} sm={6} className="justify coll">
        <button className="button fixed">Search</button>
      </Col>
    </>
  );
};

export default Search;
