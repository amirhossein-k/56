import { useState, useRef, useEffect } from "react";

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
  setIsOpen,
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
  setPrice
}) => {
  ////////////////////////
  let navigate = useNavigate();
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  ///////////////
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
        body: data
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
  /////////
  const resetHandler = () => {
    setNameCar("");
    setFactory("");
    setDistance("");

    setSkills([null]);
    fileInput.current.value = null;
    setPic("");
  };
  //////////////
  const submitHandler = (e) => {
    e.preventDefault();
    if (!namecar || !factory || !distance || !skills) return;
    dispatch(
      updateProductAction(
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
    navigate("/dashboard");
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          {/* <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div> */}
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
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
                  {/* //// */}
                  {/* <Form.Group controlId="formControlsTextarea">
              <Form.Label>نام خودرو</Form.Label>
              <Form.Control componentClass="textarea" value={propertys}
                placeholder="ویژگی"
                onChange={e=> setPropertys(e.target.value)} />
            </Form.Group> */}
                  {/* //// */}
                  <TagsInput
                    value={skills}
                    onChange={setSkills}
                    name="fruits"
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
                      <MenuItem value={"approved"}>موجود</MenuItem>
                      <MenuItem value={"sold"}>ناموجود</MenuItem>
                    </Select>
                  </FormControls>
                </div>
                <div className="button-new">
                  <Button
                    type="submit"
                    variant="primary"
                    className="create-new"
                  >
                    Create Note
                  </Button>
                  <Button
                    className="mx-2"
                    onClick={resetHandler}
                    variant="danger"
                  >
                    Reset Feilds
                  </Button>
                </div>
              </Form>
            </div>
          </div>
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
