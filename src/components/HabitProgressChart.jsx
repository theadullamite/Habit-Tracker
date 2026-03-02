import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./HabitProgressChart.css";

export const HabitProgressChart = ({ data }) => {
  console.log("data length:", data?.length);
  console.log(data);

  if (!data || data.length === 0) {
    return <div className="chart-card">Loading chart...</div>;
  }

  return (
    <div className="chart-card">
      <h2 className="chart-title">Habit Chart</h2>
      <div className="chart-container">
        <ResponsiveContainer
          width="100%"
          height={300}
          style={{ border: "3px solid" }}
        >
          <BarChart
           
            data={data}
            style={{
              border: "4px solid orange",
            }}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
            
          >
            <defs>
              <linearGradient
                id="completedGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#4bde86" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#00fecfdd" stopOpacity={0.7} />
              </linearGradient>

              <linearGradient id="missedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff512f" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#dd2476" stopOpacity={0.7} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "#ccc", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              dy={4}
              padding={{ left: 0, right: 0 }}
              scale="point"
            />

            <YAxis
              domain={[0, 1]}
              width={30}
              ticks={[0, 1]}
              tick={{ fill: "#ccc", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(191, 191, 243, 0.9)",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            />

            <Legend
              wrapperStyle={{
                color: "#ddd",
                paddingTop: "20px",
              }}
              verticalAlign="bottom"
              align="center"
            />

            <Bar
              dataKey="completed"
              stackId="a"
              fill="url(#completedGradient)"
              radius={[6, 6, 0, 0]}
              isAnimationActive
              animationDuration={1000}
             
            />

            <Bar
              dataKey="missed"
              stackId="a"
              fill="url(#missedGradient)"
              radius={[6, 6, 0, 0]}
              isAnimationActive
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

