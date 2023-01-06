import "./datatable.scss";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductAction,
  deleteProductAction,
  updateProductAction
} from "../../../actions/productActions";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
  GridRowId,
  GridColumns
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SyncIcon from "@mui/icons-material/Sync";
import Modal from "../modal/Modal";
// ......................................................

//.......................................................

const Datatable = () => {
  const [rows, setRows] = useState([]);

  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setPer((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );
  //////////////////////////
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "namecar",
      headerName: "خودرو",
      width: 150,
      editable: true
    },
    {
      field: "factory",
      headerName: "کارخانه",
      width: 150,
      editable: true
    },

    {
      field: "distance",
      headerName: "کارکرد",
      width: 150,
      editable: true
    },

    {
      field: "pic",
      headerName: "عکس",
      width: 150,
      editable: true,
      renderCell: (params) => <img src={params.value} className="img-table " />
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 150,
      editable: true
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 150,
      editable: true
    },
    {
      field: "skills",
      headerName: "ویژگی",
      width: 150,
      editable: true
    },
    {
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          // onClick={deleteUser(params.id)}
          onClick={deletehandle(params.id)}
        />,
        <GridActionsCellItem
          icon={<SyncIcon />}
          label="Toggle Admin"
          onClick={openhandle(params.id)}
          showInMenu
        />
      ]
    }
  ];
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { product, loading } = productList;
  /////////////
  const productDelete = useSelector((state) => state.productDelete);
  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete
  } = productDelete;
  ////////////
  const [isOpen, setIsOpen] = useState(false);
  const [isid, setIsId] = useState("");
  /////////////////
  const [pr, setPer] = useState([]);
  useEffect(() => {
    dispatch(listProductAction());
    if (product) {
      console.log("amad");
      setPer(product);
    }
  }, [dispatch, successDelete]);
  ////////////
  const [namecar, setNameCar] = useState("");
  const [factory, setFactory] = useState("");
  const [distance, setDistance] = useState("");

  const [skills, setSkills] = useState([]);
  const [pic, setPic] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  ///////////
  const updatehandle = (id) => {
    dispatch(updateProductAction(id));
  };

  /////////
  const openhandle = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setIsOpen(true);
        setIsId(id);
        const result = product.find(({ id }) => id === id);
        setNameCar(result.namecar);
        console.log(namecar);
        setFactory(result.factory);
        setDistance(result.distance);
        setSkills(result.skills);
        setPic(result.pic);
        setStatus(result.status);
        setPrice(result.price);
      });
    },
    []
  );
  ///////////

  /////////////
  const deletehandle = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        // setPer((prevRows) => prevRows.filter((row) => row.id !== id));
        dispatch(deleteProductAction(id));
      });
    },
    []
  );
  // ...................

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        {product && (
          <DataGrid
            rows={product}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        )}
      </Box>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          updatehandle={updatehandle}
          isid={isid}
          price={price}
          status={status}
          pic={pic}
          factory={factory}
          skills={skills}
          distance={distance}
          namecar={namecar}
          setFactory={setFactory}
          setNameCar={setNameCar}
          setDistance={setDistance}
          setSkills={setSkills}
          setPic={setPic}
          setStatus={setStatus}
          setPrice={setPrice}
        />
      )}
    </>
    // <>
    //   <button onClick={() => setIsOpen(true)}>Open Modal</button>
    // </>
  );
};

export default Datatable;
