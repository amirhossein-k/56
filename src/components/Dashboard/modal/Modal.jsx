import React, { useState, useRef, useEffect, useCallback } from "react";

import styles from "./modal.module.scss";
import { RiCloseLine } from "react-icons/ri";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControls from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Col, Row, Button, Form, FormControl } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProductAction } from "../../../actions/productActions";

///////////////////////////
const Modal = ({
  setIsOpens,
  updatehandle,
  isid,
  price,
  status,
  pic,
  factory,
  skills,
  distance,
  namecar,
  setFactory,
  setNameCar,
  setDistance,
  setSkills,
  setPic,
  setStatus,
  setPrice,
  isform,
  urlpic,
  setUrlpic,
  setOpenpic,
  openpic,
  isOpens,
  setLoadupdate,
  loadupdate,
  setUpdate,
}) => {
  ////////////////////////

  //////////////////////////
  let navigate = useNavigate();
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  ///////////////
  const productupdate = useSelector((state) => state.productUpdate);
  const { loading, success } = productupdate;
  //////////////
  const [loadpic, setLoadpic] = useState(false);
  const [load, setLoad] = useState(false);
  const postDetails = (pics) => {
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      setLoadpic(true);
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "dijamrzud");
      ///////
      console.log(fileInput.current.files);

      fetch("https://api.cloudinary.com/v1_1/dijamrzud/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setLoadpic(false);
        })
        .catch((err) => console.log(err));
    } else {
      return null;
    }
  };
  /////////
  const resetHandler = () => {
    setNameCar("");
    setFactory("");
    setDistance("");

    setSkills([null]);
    fileInput.current.value = null;
    setPic("");
  };

  ////////////////
  const submitHandler = (e) => {
    setLoad(true);
    e.preventDefault();
    if (!namecar || !factory || !distance || !skills) return;

    dispatch(
      updateProductAction(
        isid,
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
    // setUpdate(true)
  };

  const handleclose = () => {
    setIsOpens(false);
    // setOpenpic(false);
  };
  /////////////
  // useEffect(() => {
  //   if (loading === false) {
  //     navigate("/dashboard/products");
  //   }
  // }, [loading]);
  useEffect(() => {
    if (success === true) {
      dispatch(updateProductAction());
      setUpdate(true);
    }
  }, [success]);

  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={() => handleclose()}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {isOpens && (
            <div className={styles.modalContent}>
              <div className="top">
                <h1>Add New Product</h1>
              </div>
              {/* ///// end top ////// */}
              <div className="bottom-new">
                {/* <img src={pic} className="imgproduct" /> */}
                <img src={pic ? pic : null} className={styles.imgproduct} />
                <Form className={styles.formfix} onSubmit={submitHandler}>
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
                  <div className={styles.form_1}>
                    {/* //// */}
                    <Form.Group
                      controlId="titlecar"
                      style={{ width: "90%", marginRight: 6 }}
                    >
                      <Form.Label>نام خودرو</Form.Label>
                      <Form.Control
                        type="text"
                        value={namecar}
                        placeholder="نام خودرو"
                        onChange={(e) => setNameCar(e.target.value)}
                      />
                    </Form.Group>
                    {/* //// */}
                    <Form.Group
                      controlId="factory"
                      style={{ width: "90%", marginRight: 6 }}
                    >
                      <Form.Label>نام خودرو</Form.Label>
                      <Form.Control
                        type="text"
                        value={factory}
                        placeholder="نام کارخانه"
                        onChange={(e) => setFactory(e.target.value)}
                      />
                    </Form.Group>
                    {/* //// */}
                    <Form.Group controlId="distance" style={{ width: "90%" }}>
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
                  <div className="form-2">
                    <TagsInput
                      value={skills}
                      onChange={setSkills}
                      name="skills"
                      placeHolder="ویژگی"
                    />
                    {/* //////statsu///// */}
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
                    <Form.Group controlId="price" style={{ width: "20%" }}>
                      <Form.Label>قیمت</Form.Label>
                      <Form.Control
                        type="number"
                        value={price}
                        placeholder="قیمت"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                  <div className="button-new">
                    <Button
                      type="submit"
                      variant="primary"
                      className={`create-new ${
                        loadpic ? "disabled" : "inline-block"
                      }`}
                    >
                      اپدیت
                    </Button>
                    <Button
                      className="mx-2"
                      onClick={resetHandler}
                      variant="danger"
                    >
                      ریست
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          )}
          {isOpens && (
            <div className={styles.modalContent}>
              <img src={urlpic} style={{ width: 200 }} />
            </div>
          )}
          {/* <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
