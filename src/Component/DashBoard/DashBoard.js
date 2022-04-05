import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='md:grid md:grid-cols-2 gap-10'>
            <div>
                <h4 className='text-blue-500 font-bold text-2xl'>MONTH WISE SELL</h4>
            <LineChart width={800} height={600}
    data={data}>
      <Line dataKey={'sell'}></Line>
          <XAxis dataKey={'month'} />
          <YAxis></YAxis>
          <Tooltip/>

    </LineChart>
            </div>

            <div>
                <h4 className='text-blue-500 font-bold text-2xl'>Investment vs Revenue</h4>
            <AreaChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
         
        </AreaChart>
            </div>

            <div>
            <h4 className='text-blue-500 font-bold text-2xl'>Investment vs Revenue</h4>
            <BarChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
            </div>

            <div>
            <h4 className='text-blue-500 font-bold text-2xl'>Investment vs Revenue</h4>
        <PieChart width={800} height={600}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip/>
        </PieChart>
    
            </div>
        </div>

    );
};

export default DashBoard;