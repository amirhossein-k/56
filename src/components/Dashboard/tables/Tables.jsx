import "./tables.scss";
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'carName', headerName: 'اسم ماشین', width: 130 },
//   { field: 'factoryName', headerName: 'کارخانه', width: 130 },
//   {
//     field: 'distance',
//     headerName: 'کارکرد',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.carName || ''} ${params.row.factoryName || ''}`,
//   },
// ];
// const rows = [
//   { id: 1, factoryName: 'ایرانخودرو', carName: '206 ti2', distance: 35 },
//   { id: 2, factoryName: 'سایپا', carName: 'pejo 405', distance: 42 },
//   { id: 3, factoryName: 'مدیران', carName: 'pikan', distance: 45 },
//   { id: 4, factoryName: 'ایرانخودرو', carName: '207i', distance: 16 },
//   { id: 5, factoryName: 'ایرانخودرو', carName: 'peraid', distance: 0 },
//   { id: 6, factoryName: 'سایپا', carName: "pejo 405", distance: 150 },
//   { id: 7, factoryName: 'ایرانخودرو', carName: 'lamborgini', distance: 44 },
//   { id: 8, factoryName: 'مدیران', carName: 'tg5', distance: 36 },
//   { id: 9, factoryName: 'سایپا', carName: 'ferari', distance: 65 },
// ];
////////////


const Tables = () => {
    const rows = [
  { id: 1, carName: 'پراید', factoryName: 'ایرانخودرو', distance: 35 ,
   img: 'https://res.cloudinary.com/dijamrzud/image/upload/v1668963162/thumb_1_zkrqty.jpg',status:"فروخته",statusEn:'Approved' },
  { id: 2, carName: '207i', factoryName: 'ایرانخودرو', distance: 42 ,
   img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg' ,status:"موجود" ,statusEn:'Pending'  },
  { id: 3, carName: 'سمند', factoryName: 'ایرانخودرو', distance: 45 ,
   img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg' ,status:"فروخته" ,statusEn:'Approved' },
  { id: 4, carName: 'پراید', factoryName: 'سایپا', distance: 16 ,
   img: 'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg',status:"موجود" ,statusEn:'Pending' },
  { id: 5, carName: '207i', factoryName: 'ایرانخودرو', distance: 0 , 
  img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg' ,status:"فروخته",statusEn:'Approved'  },
  { id: 6, carName: 'پراید', factoryName: 'سایپا', distance: 150 ,
   img: 'https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars3_o3p17a.jpg',status:"فروخته" ,statusEn:'Approved' },
  { id: 7, carName: 'سمند', factoryName: 'ایرانخودرو', distance: 44 ,
   img:"https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg" ,status:"موجود",statusEn:'Pending'  },
  { id: 8, carName: 'پراید', factoryName: 'سایپا', distance: 36 ,
   img:"https://res.cloudinary.com/dijamrzud/image/upload/v1668962724/cars2_tgwa6d.jpg" ,status:"فروخته" ,statusEn:'Approved' },
  { id: 9, carName: 'پرشیا', factoryName: 'ایرانخودرو', distance: 65 ,
   img:'https://res.cloudinary.com/dijamrzud/image/upload/v1668963157/thumb_2_yk73fb.jpg' ,status:"فروخته",statusEn:'Approved'  }
];
  return (

    <TableContainer component={Paper} className="table" >
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">محصول</TableCell>
         
            <TableCell className="tableCell">شرکت</TableCell>
            <TableCell className="tableCell">کارکرد</TableCell>
            <TableCell className="tableCell">وضعیت</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell >
                {row.id}
              </TableCell>
             
                <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} className="image"/>
                    {row.carName}
                </div>
            </TableCell>
              <TableCell className="tableCell" >{row.factoryName}</TableCell>
              <TableCell className="tableCell" >{row.distance}</TableCell>
              <TableCell className="tableCell" >
                <span className={` status ${row.statusEn}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default Tables;
