import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";
import "./RevenueChart.css";

const pinkShades = ["#4CAF50", "#FF9800", "#2196F3", "#e62490", "#bf1d74"];

function RevenueChart() {
    const [data, setData] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState();
    const [selectedWeekLabel, setSelectedWeekLabel] = useState("");

    // Fetch data from API
    useEffect(() => {
        async function fetchData() {
            try {
                // const response = await fetch("/api/revenue-data"); // Thay bằng URL API thực tế
                const response = await fetch("http://localhost:3001/revenue-data");

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching revenue data:", error);
            }
        }
        fetchData();
    }, []);

    const handleBarClick = (data) => {
        setSelectedWeek(data.details);
        setSelectedWeekLabel(data.week);
    };

    const pieData = selectedWeek
        ? Object.entries(selectedWeek).map(([key, value]) => ({
              name: key,
              value,
          }))
        : [];

    return (
        <div className="chart-container">
            <h2>Doanh thu Quý 1 2024</h2>
            <ResponsiveContainer width="100%" height={170}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    onClick={(e) => {
                        if (e && e.activePayload) {
                            handleBarClick(e.activePayload[0].payload);
                        }
                    }}
                >
                    <XAxis dataKey="week" interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#f582c2" name="Doanh thu" />
                </BarChart>
            </ResponsiveContainer>

            {selectedWeek && (
                <div className="details-container">
                    <div className="details-table">
                        <h3>Doanh thu chi tiết {selectedWeekLabel}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Loại phòng</th>
                                    <th>Doanh thu (VNĐ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(selectedWeek).map(([roomType, revenue]) => (
                                    <tr key={roomType}>
                                        <td>{roomType}</td>
                                        <td>{revenue.toLocaleString("vi-VN")} VNĐ</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pie-chart">
                        <h3>Phần trăm doanh thu các loại phòng</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="55%"
                                    outerRadius={50}
                                    fill="#f254aa"
                                    label={({ name, percent }) =>
                                        `${name}: ${(percent * 100).toFixed(0)}%`
                                    }
                                >
                                    {pieData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={pinkShades[index % pinkShades.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RevenueChart;
