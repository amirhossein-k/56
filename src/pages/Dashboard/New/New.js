import { useState, useRef, useEffect } from "react";
import "./new.scss";
import { Col, Row, Button, Form, FormControl } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
import { createProductAction } from "../../../actions/productActions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControls from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReactLoading from "react-loading";
const New = () => {
  const [namecar, setNameCar] = useState("");
  const [factory, setFactory] = useState("");
  const [distance, setDistance] = useState("");

  const [skills, setSkills] = useState([]);
  const [pic, setPic] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [loade, setLoade] = useState(false);
  const [sucessprop, setSucessprop] = useState(false);

  ////////////////////////
  let navigate = useNavigate();
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  //////////////////////
  const productcrate = useSelector((state) => state.productCreate);
  const { loading, success } = productcrate;
  /////////////////////
  useEffect(() => {
    // if (userInfo) {
    //   navigate("/product");
    // }
    console.log("loading", loading);
    console.log("success", success);

    if (loading === true) {
      setLoade(loading);
    } else if (loading === false) {
      setSucessprop(success);
    }
    if (sucessprop === true && loade === false) {
      setLoade(undefinednudi);
      setSucessprop(undefined);
      navigate("/dashboard/product");
    }
  }, [fileInput, loading, loade, sucessprop]);
  //////////////////////////
  const postDetails = (pics) => {
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "dijamrzud");
      ///////
      console.log(fileInput.current.files);

      // setTimeout(() => {
      //   setDisable(false);
      //   console.log(fileInput.current.files, "toye tttt");
      // }, 5000);
      /////
      fetch("https://api.cloudinary.com/v1_1/dijamrzud/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => console.log(err));
    } else {
      return null;
    }
  };
  //////////////
  const resetHandler = () => {
    setNameCar("");
    setFactory("");
    setDistance("");

    setSkills([null]);
    fileInput.current.value = null;
    setPic("");
  };
  ///////////////
  const submitHandler = (e) => {
    e.preventDefault();
    if (!namecar || !factory || !distance || !skills) return;
    dispatch(
      createProductAction(
        namecar,
        factory,
        distance,
        skills,
        pic,
        price,
        status
      )
    );
    resetHandler();
    // navigate("/dashboard");
    console.log(status);
  };

  ///////////////

  return (
    <Row className="new">
      {/* ///////Sidebar//////// */}
      <Col sm={12} md={2} lg={1} className="fixlistnavbar">
        <Sidebar />
      </Col>
      {/* /////////Container//////// */}
      <Col className="newContainer">
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        {loading && (
          <div className="loading">
            <ReactLoading
              type={"bubbles"}
              color="#000"
              height={500}
              width={500}
            />
          </div>
        )}

        {/* ///// end top ////// */}
        <div className="bottom-new">
          {/* <img src={pic} className="imgproduct" /> */}
          <img src={pic ? pic : null} className="imgproduct" />
          <Form className="formfix" onSubmit={submitHandler}>
            <div className="form-0">
              <Form.Group controlId="pic">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  // onChange={(e) => setPics(e.target.files[0])}
                  onChange={(e) => postDetails(e.target.files[0])}
                  ref={fileInput}
                />
              </Form.Group>
            </div>
            <div className="form-1">
              {/* //// */}
              <Form.Group controlId="titlecar" style={{ width: "100%" }}>
                <Form.Label>نام خودرو</Form.Label>
                <Form.Control
                  type="text"
                  value={namecar}
                  placeholder="نام خودرو"
                  onChange={(e) => setNameCar(e.target.value)}
                />
              </Form.Group>
              {/* //// */}
              <Form.Group controlId="factory" style={{ width: "100%" }}>
                <Form.Label>نام خودرو</Form.Label>
                <Form.Control
                  type="text"
                  value={factory}
                  placeholder="نام کارخانه"
                  onChange={(e) => setFactory(e.target.value)}
                />
              </Form.Group>
              {/* //// */}
              <Form.Group controlId="distance" style={{ width: "100%" }}>
                <Form.Label>نام خودرو</Form.Label>
                <Form.Control
                  type="number"
                  value={distance}
                  placeholder="کارکرد"
                  onChange={(e) => setDistance(e.target.value)}
                />
              </Form.Group>
              {/* //// */}
            </div>
            <div className="form-2 row">
              <Col md={5} lg={4}>
                <TagsInput
                  value={skills}
                  onChange={setSkills}
                  // name="skills"
                  placeHolder="ویژگی"
                />
              </Col>
              <Col>
                <FormControls sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">وضعیت</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={status}
                    label="وضعیت"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value={"approved"}>موجود</MenuItem>
                    <MenuItem value={"sold"}>ناموجود</MenuItem>
                  </Select>
                </FormControls>
              </Col>
              <Col>
                <Form.Group
                  controlId="price"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  <Form.Label style={{ paddingRight: 5 }}>قیمت</Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    placeholder="قیمت"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
              </Col>

              {/* //////statsu///// */}
            </div>

            <div className="button-new">
              <Button type="submit" variant="primary" className="create-new">
                Create Note
              </Button>
              <Button className="mx-2" onClick={resetHandler} variant="danger">
                Reset Feilds
              </Button>
            </div>
          </Form>
        </div>
        {/* ///// end bottom ///// */}
      </Col>
    </Row>
  );
};

export default New;
