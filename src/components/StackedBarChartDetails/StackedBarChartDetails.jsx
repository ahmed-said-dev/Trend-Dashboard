import React from "react";
import "./style.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    Actual: 4000,
    Expected: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Actual: 3000,
    Expected: 1398,
    amt: 2210,
  },
  {
    name: "Apr",
    Actual: 2000,
    Expected: 9800,
    amt: 2290,
  },
  {
    name: "May",
    Actual: 2780,
    Expected: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    Actual: 1890,
    Expected: 4800,
    amt: 2181,
  },
  {
    name: "Jul",
    Actual: 2390,
    Expected: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    Actual: 3490,
    Expected: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    Actual: 2490,
    Expected: 6800,
    amt: 2100,
  },
  {
    name: "Oct",
    Actual: 3490,
    Expected: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    Actual: 5490,
    Expected: 5300,
    amt: 2100,
  },
  {
    name: "Dec",
    Actual: 3890,
    Expected: 3300,
    amt: 2100,
  },
];

const StackedBarChartDetails = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[200px] md:h-auto items-start justify-start max-w-[986px] w-full">
          <div className="flex flex-col h-full items-end justify-start w-full">
            <div className="md:h-[182px] h-full relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <BarChart
                  width={1000}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Expected" stackId="a" fill="#8884d8" />
                  <Bar dataKey="Actual" stackId="a" fill="#eaecf0" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackedBarChartDetails;
