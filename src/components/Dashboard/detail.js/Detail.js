import { useState, useRef, useEffect } from "react";
import "./detail.scss";
import { Col, Row, Button, Form, FormControl } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
import { createDetailAction } from "../../../actions/detailActions";
///////////////////////////
const Detail = () => {
  let navigate = useNavigate();
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  ////////////////////////
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState([]);
  const [header_img, setHeader_img] = useState([]);
  const [slider_img, setSlider_img] = useState([]);
  const [times, setTimes] = useState([]);
  const [social, setSocial] = useState([]);
  const [loade, setLoade] = useState(false);
  const [errorPic, setErrorPic] = useState(false);

  /////////////////////////
  const detailGet = useSelector((state) => state.detailGet);
  const { loading, success } = detailGet;
  ////////////////////////////
  useEffect(() => {
    if (success === true) {
      dispatch(createDetailAction());
      navigate("/");
    }
  }, [success]);
  //////////////////////////
  const resetHandler = () => {
    setTitle("");
    setSubtitle((prevsubtitle) => prevsubtitle.splice(0, prevsubtitle.length));
    setHeader_img((prevheader_img) =>
      prevheader_img.splice(0, prevheader_img.length)
    );
    setSlider_img((prevslider_img) =>
      prevslider_img.splice(0, prevslider_img.length)
    );
    setTimes((prevtimes) => prevtimes.splice(0, prevtimes.length));
    setSocial((prevsocial) => prevsocial.splice(0, prevsocial.length));

    fileInput.current.value = null;
  };
  ///////////////pic
  const postDetails = (pics) => {
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      setLoade(true);

      const data = new FormData();

      ///////
      const files = fileInput.current.files;

      for (const [key, value] of Object.entries(files)) {
        data.append("file", value);
        data.append("upload_preset", "notezipper");
        data.append("cloud_name", "dijamrzud");

        fetch("https://api.cloudinary.com/v1_1/dijamrzud/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPic((oldpic) => [...oldpic, data.url.toString()]);
            setLoade(false);
            setErrorPic(false);
            console.log("pic", pic);
          })
          .catch((err) => console.log(err));
        console.log("pic", pic);
      }
    } else {
      return null;
    }
  };
  ///////////////
  const submitHandler = (e) => {
    e.preventDefault();
    if (!header_img || !slider_img) return;
    if (pic === undefined || pic === null || pic === "") {
      setErrorPic(true);
    } else {
      dispatch(
        createDetailAction(
          header_img,
          title,
          subtitle,
          slider_img,
          times,
          social
        )
      );
      resetHandler();
    }
  };
  ////////////////////////
  return (
    <Row className="detail">
      {/* ///////Sidebar//////// */}
      <Col sm={12} md={2} lg={1} className="fixlistnavbar">
        <Sidebar />
      </Col>
      <Col className="newContainer">
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom-new">
          <Form className="formfix" onSubmit={submitHandler}>
            <div className="form-0">
              <Form.Group controlId="pic">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  // onChange={(e) => setPics(e.target.files[0])}
                  onChange={(e) => postDetails(e.target.files[0])}
                  ref={fileInput}
                  multiple
                  accept=".jpeg, .png, .jpg"
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
                    <MenuItem value={"null"}></MenuItem>
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
              <Button
                type="submit"
                variant="primary"
                className={`${loade === true ? "disabled" : "create-new"}`}
              >
                Create Note
              </Button>
              <Button className="mx-2" onClick={resetHandler} variant="danger">
                Reset Feilds
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
export default Detail;
