import React, { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";
import { MyContext } from "../Context/Context";

const Stats = () => {
  const { call } = useContext(MyContext);
    console.log(call)
  const callCount = call.filter(item => item.action === "call").length;
  const messageCount = call.filter(item => item.action === "massage").length;
  const videoCount = call.filter(item => item.action === "vedio").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Message", value: messageCount },
    { name: "Video", value: videoCount }
  ];

  const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

  return (
    <div className="mx-auto container">
         <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend />
         <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
   
    </div>
  );
};

export default Stats;