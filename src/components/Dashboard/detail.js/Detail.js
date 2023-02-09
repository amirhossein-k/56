import { useState, useRef, useEffect } from "react";
import "./detail.scss";
import { Col, Row, Button, Form, FormControl } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
import {
  createDetailAction,
  getDetailAction,
  updateDetailAction,
} from "../../../actions/detailActions";
import axios from "axios";
///////////////////////////
const Detail = ({ setCardrun, cardrun }) => {
  let navigate = useNavigate();
  const fileprofile_Input = useRef(null);
  const fileheader_Input = useRef(null);
  const fileslider_Input = useRef(null);
  const dispatch = useDispatch();
  //  times_1,
  //   times_2,
  //   times_3,
  //   social_phone,
  //   social_address,
  //   social_ig,
  ////////////////////////
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState([]);
  const [header_img, setHeader_img] = useState("");
  const [profile_img, setProfile_img] = useState("");
  ///
  const [times_1, setTimes_1] = useState("");
  const [times_2, setTimes_2] = useState("");
  const [times_3, setTimes_3] = useState("");

  const [social_phone, setSocial_phone] = useState("");
  const [social_address, setSocial_address] = useState("");
  const [social_ig, setSocial_ig] = useState("");

  const [slider_img, setSlider_img] = useState([]);

  // const [social, setSocial] = useState([]);

  const [loade, setLoade] = useState(false);
  const [dataget, setDataget] = useState(false);
  const [errorPic, setErrorPic] = useState(false);
  const [datadetail, setDatadetail] = useState(null);

  /////////////////////////
  // const detailcreate = useSelector((state) => state.detailcreate);
  // const { loading, success, detail } = detailcreate;
  const detailget = useSelector((state) => state.detailget);
  const { loading: loadingGet, success: successGet, detail } = detailget;
  ////////////////////////////

  useEffect(() => {
    setCardrun(true);
  }, []);

  useEffect(() => {
    console.log(cardrun, "card ...");
    if (cardrun === true) {
      dispatch(getDetailAction());

      setCardrun(false);
    }
  }, [cardrun]);
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        "https://backend-site-asll.vercel.app/api/detail"
      );

      setHeader_img(data.header_img);
      setProfile_img(data.profile_img);
      setTitle(data.title);
      setSubtitle(data.subtitle);
      setSlider_img(data.slider_img);
      setTimes_1(data.times_1);
      setTimes_2(data.times_2);
      setTimes_3(data.times_3);
      setSocial_address(data.social_address);
      setSocial_phone(data.social_phone);
      setSocial_ig(data.social_ig);
      setDataget(true);
    };
    fetching();
  }, []);

  /////////////////////////////

  console.log("successGet", successGet);
  if (successGet === true) {
    console.log(detail, "ddd");
    console.log(typeof detail, "type");
    if (
      Object.keys(detail).length !== 0 &&
      Object.getPrototypeOf(detail) === Object.prototype
    ) {
    }
  }
  //////////////////////////
  const resetHandler = () => {
    setTitle("");

    setSubtitle("");
    setHeader_img("");
    setProfile_img("");
    setSlider_img((prevslider_img) =>
      prevslider_img.splice(0, prevslider_img.length)
    );
    setTimes_1("");
    setTimes_2("");
    setTimes_3("");
    setSocial_phone("");
    setSocial_address("");
    setSocial_ig("");

    fileprofile_Input.current.value = null;
    fileheader_Input.current.value = null;
    fileslider_Input.current.value = null;
  };
  ///////////////pic
  const picDetails = (pics) => {
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      setLoade(true);

      const data = new FormData();

      ///////picprofile
      if (fileprofile_Input.current.id === "picprofile") {
        const files = fileprofile_Input.current.files;

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
              setProfile_img(data.url.toString());
              setLoade(false);
              setErrorPic(false);
            })
            .catch((err) => console.log(err));
        }
      }
      ////////pic header
      if (fileheader_Input.current.id === "picheader") {
        const files = fileheader_Input.current.files;

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
              setHeader_img(data.url.toString());
              setLoade(false);
              setErrorPic(false);
            })
            .catch((err) => console.log(err));
        }
      }
      ////pic slider
      if (fileslider_Input.current.id === "picslider") {
        const files = fileslider_Input.current.files;

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
              setSlider_img((oldpic) => [...oldpic, data.url.toString()]);
              setLoade(false);
              setErrorPic(false);
            })
            .catch((err) => console.log(err));
        }
      }
    } else {
      return null;
    }
  };
  ///////

  ///////////////
  // function onSubmit(data) {
  //       return isAddMode
  //           ? createUser(data)
  //           : updateUser(id, data);
  //   }
  /////////////////
  const submitHandler = (e) => {
    e.preventDefault();

    if (dataget === true) {
      var details = JSON.parse(localStorage.getItem("DetailGet"));
      for (const [key, value] of Object.entries(details)) {
        if (key === "id") {
          var id = value;
        }
      }
      dispatch(
        updateDetailAction(
          header_img,
          profile_img,
          title,
          subtitle,
          slider_img,
          times_1,
          times_2,
          times_3,
          social_phone,
          social_address,
          social_ig,
          id
        )
      );
      resetHandler();
    } else {
      if (!header_img || !slider_img) return;

      if (
        header_img === undefined ||
        header_img === null ||
        header_img === "" ||
        slider_img === undefined ||
        slider_img === null ||
        slider_img === ""
      ) {
        setErrorPic(true);
      } else {
        dispatch(
          createDetailAction(
            header_img,
            profile_img,
            title,
            subtitle,
            slider_img,
            times_1,
            times_2,
            times_3,
            social_phone,
            social_address,
            social_ig
          )
        );
        resetHandler();
      }
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
        {dataget && (
          <>
            <Row className="profile_box">
              <Col className="box" xs={3}>
                <span>Profile</span>
                <img src={profile_img} alt="" />
              </Col>
              <Col className="box" xs={3}>
                <span style={{ backgroundColor: "#787878" }}>Header</span>
                <img src={header_img} alt="" />
              </Col>
            </Row>
            <Row className="slider_box">
              <span>slider</span>
              <div className="box_img">
                {slider_img.map((item, index) => (
                  <Col className="box">
                    <img src={item} alt="" key={index} />
                  </Col>
                ))}
              </div>
            </Row>
          </>
        )}
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom-new">
          <Form className="formfix" onSubmit={submitHandler}>
            <Row className="form-header">
              <Col xs={9}>
                <Form.Group controlId="picprofile">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    // onChange={(e) => setProfile_img(e.target.files[0])}
                    onChange={(e) => picDetails(e.target.files[0])}
                    ref={fileprofile_Input}
                    accept=".jpeg, .png, .jpg"
                    className={`${
                      loade === true ? "disabled" : "block-detail"
                    }`}
                  />
                </Form.Group>
              </Col>
              <Col xs={9}>
                <Form.Group controlId="picheader">
                  <Form.Label>Header Picture</Form.Label>
                  <Form.Control
                    type="file"
                    // onChange={(e) => setHeader_img(e.target.files[0])}
                    onChange={(e) => picDetails(e.target.files[0])}
                    ref={fileheader_Input}
                    accept=".jpeg, .png, .jpg"
                    className={`${
                      loade === true ? "disabled" : "block-detail"
                    }`}
                  />
                </Form.Group>
              </Col>
              <Row style={{ maxWidth: "58%" }}>
                <Col xs={12} sm={6}>
                  <Form.Group controlId="title">
                    <Form.Label>اسم سایت</Form.Label>
                    <Form.Control
                      type="text"
                      value={title}
                      placeholder="اسم سایت را وارد کنید"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group controlId="subtitle">
                    <Form.Label> توضیحات صفحه اول</Form.Label>
                    <Form.Control
                      type="text"
                      value={subtitle}
                      placeholder="توضیحات...."
                      onChange={(e) => setSubtitle(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Row>
            {/* ////end header/////// */}
            <Row className="form-slider">
              <Col xs={9}>
                <Form.Group controlId="picslider">
                  <Form.Label>silder Pictures</Form.Label>
                  <Form.Control
                    type="file"
                    // onChange={(e) => setSlider_img(e.target.files[0])}
                    onChange={(e) => picDetails(e.target.files[0])}
                    className={`${
                      loade === true ? "disabled" : "block-detail"
                    }`}
                    ref={fileslider_Input}
                    multiple
                    accept=".jpeg, .png, .jpg"
                  />
                </Form.Group>
              </Col>
            </Row>
            {/* ////end slider/////// */}
            <Row className="form-begin">
              <Col xs={12} sm={4}>
                <Form.Group controlId="times_1">
                  <Form.Label>شنبه تا چهارشنبه</Form.Label>
                  <Form.Control
                    type="text"
                    value={times_1}
                    placeholder="ساعت کاری شنبه تا چهارشنبه"
                    onChange={(e) => setTimes_1(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col xs={12} sm={4}>
                <Form.Group controlId="times_2">
                  <Form.Label>ساعت کاری پنجشنبه ها</Form.Label>
                  <Form.Control
                    type="text"
                    value={times_2}
                    placeholder="ساعت کاری پنجشنبه ها "
                    onChange={(e) => setTimes_2(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} sm={4}>
                <Form.Group controlId="times_3">
                  <Form.Label>ساعت کاری جمعه ها</Form.Label>
                  <Form.Control
                    type="text"
                    value={times_3}
                    placeholder="ساعت کاری جمعه ها"
                    onChange={(e) => setTimes_3(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            {/*  */}
            <Row className="form-social">
              <Col xs={12} sm={4}>
                <Form.Group controlId="social_phone">
                  <Form.Label>تلفن</Form.Label>
                  <Form.Control
                    type="text"
                    value={social_phone}
                    placeholder="تلفن"
                    onChange={(e) => setSocial_phone(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col xs={12} sm={4}>
                <Form.Group controlId="social_address">
                  <Form.Label>ادرس</Form.Label>
                  <Form.Control
                    type="text"
                    value={social_address}
                    placeholder="ادرس"
                    onChange={(e) => setSocial_address(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} sm={4}>
                <Form.Group controlId="social_ig">
                  <Form.Label>ایدی اینستاگرام</Form.Label>
                  <Form.Control
                    type="text"
                    value={social_ig}
                    placeholder="ایدی اینستاگرام"
                    onChange={(e) => setSocial_ig(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            {/*  */}
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
