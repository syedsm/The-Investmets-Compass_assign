// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

function SalesDashboard() {
    // const [salesData, setSalesData] = useState([]);

    // useEffect(() => {
    //     // Fetch sales data from backend API
    //     axios.get('/api/sales')
    //         .then(response => {
    //             // Update state with fetched sales data
    //             setSalesData(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching sales data:', error);
    //         });
    // }, []);

    return (
        <div>
            <h2>Welcome to the Sales Dashboard</h2>
            {/* <div>
                <h3>Sales Trend</h3>
                <Line
                    // data={{
                    //     labels: salesData.map(data => data.date),
                    //     datasets: [
                    //         {
                    //             label: 'Sales',
                    //             data: salesData.map(data => data.sales),
                    //             backgroundColor: 'rgba(75,192,192,0.2)',
                    //             borderColor: 'rgba(75,192,192,1)',
                    //             borderWidth: 1
                    //         }
                    //     ]
                    // }}
                    // options={{
                    //     scales: {
                    //         y: {
                    //             beginAtZero: true
                    //         }
                    //     }
                    // }}
                />
            </div> */}
        </div>
    );
}

export default SalesDashboard;
