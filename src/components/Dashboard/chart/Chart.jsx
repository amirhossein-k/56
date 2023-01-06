import "./chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//////////
const data = [
  {name:'فروردین' , Total:1200},
  {name:'اردیبهشت' , Total:2100},
  {name:'خرداد' , Total:100},
  {name:'تیر' , Total:1000},
  {name:'مرداد' , Total:1700},
  {name:'شهریور' , Total:800},
  {name:'مهر' , Total:600},
  {name:'ابان' , Total:1000},
  {name:'اذر' , Total:2000},
  {name:'دی' , Total:400},
  {name:'بهمن' , Total:1300},
  {name:'اسفند' , Total:1200},
];
/////////
const Chart = ({aspect,title}) => {
  
  return (
  <div className="chart">
    <div className="title">{title} </div>
      <ResponsiveContainer width="100%" height='100%' aspect={aspect}>
      <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke="rgba(0,0,0,0.5)"/>
      {/* <YAxis /> */}
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Total"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        
      />
      {/* ///line two */}
      {/* <Line type="monotone" dataKey="Total" stroke="#82ca9d" /> */}
    </LineChart>
</ResponsiveContainer>
  </div>
  )
};

export default Chart;
