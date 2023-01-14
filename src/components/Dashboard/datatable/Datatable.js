import "./datatable.scss";

import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductAction,
  deleteProductAction,
  updateProductAction,
} from "../../../actions/productActions";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
  GridRowId,
  GridColumns,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SyncIcon from "@mui/icons-material/Sync";
import Modal from "../modal/Modal";
import ModalImages from "../modal/ModalImages";
// ......................................................
import ModalImage from "react-modal-image";
//.......................................................

const Datatable = ({ setDatas, datas }) => {
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
      editable: true,
    },
    {
      field: "factory",
      headerName: "کارخانه",
      width: 150,
      editable: true,
    },

    {
      field: "distance",
      headerName: "کارکرد",
      width: 150,
      editable: true,
    },

    {
      field: "pic",
      headerName: "عکس",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <img
          src={params.value}
          className="img-table "
          onClick={habdlepic(params.value)}
        />
      ),
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 150,
      editable: true,
    },
    {
      field: "skills",
      headerName: "ویژگی",
      width: 150,
      editable: true,
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
          onClick={() => openhandle(params.id)}
        />,
      ],
    },
  ];

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { product, loading } = productList;
  /////////////

  //////////////
  const productDelete = useSelector((state) => state.productDelete);
  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = productDelete;
  ////////////
  const [isOpens, setIsOpens] = useState(false);
  const [isid, setIsId] = useState("");
  const [urlpic, setUrlpic] = useState("");
  const [openpic, setOpenpic] = useState(false);
  const [loadupdate, setLoadupdate] = useState(false);
  const [update, setUpdate] = useState(false);
  /////////////////
  const [pr, setPer] = useState([]);
  const [produc, setProduc] = useState([]);

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
  const openhandle = (me) => {
    setIsOpens(true);
    setIsId(me);
    var result = product.find(({ id }) => id === me);
    console.log(isOpens, "isopen");
    setNameCar(result.namecar);

    setFactory(result.factory);
    setDistance(result.distance);
    setSkills(result.skills);
    setPic(result.pic);
    setStatus(result.status);
    setPrice(result.price);
  };

  const habdlepic = React.useCallback(
    (pic: GridRowPic) => () => {
      setTimeout(() => {
        setUrlpic(pic);
        setOpenpic(true);
      });
    },
    []
  );
  ////////

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
  useEffect(() => {
    dispatch(listProductAction());
    if (product) {
      console.log("amad");
      setPer(product);
    }
  }, [dispatch, successDelete]);
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        {(() => {
          if (product) {
            return (
              <DataGrid
                rows={product}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
              />
            );
          } else {
            return <h1 className="loadingclass">Loading</h1>;
          }
        })()}
      </Box>
      {isOpens && (
        <Modal
          setIsOpens={setIsOpens}
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
          isOpens={isOpens}
          setLoadupdate={setLoadupdate}
          loadupdate={loadupdate}
          setUpdate={setUpdate}
        />
      )}
      {openpic && (
        <ModalImage
          urlpic={urlpic}
          setUrlpic={setUrlpic}
          openpic={openpic}
          setOpenpic={setOpenpic}
        />
      )}
    </>
  );
};

export default Datatable;
