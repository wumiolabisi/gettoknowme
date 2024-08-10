import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const GetGithubActivity = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activityData, setActivityData] = useState(null);

    useEffect(() => {
        const fetchGithubActivity = async () => {
            try {
                const response = await fetch('https://api.github.com/users/wumiolabisi/events');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Process the data to create a dataset for the chart
                const processedData = processGithubData(data);
                setActivityData(processedData);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError('Error fetching GitHub activity data');
                setLoading(false);
            }
        };

        fetchGithubActivity();
    }, []);

    // Function to process the data from the GitHub API
    const processGithubData = (data) => {
        const labels = [];
        const activityCounts = [];

        data.forEach((event) => {
            const date = new Date(event.created_at).toLocaleDateString();
            const index = labels.indexOf(date);

            if (index === -1) {
                labels.push(date);
                activityCounts.push(1);
            } else {
                activityCounts[index]++;
            }
        });

        return {
            labels,
            datasets: [
                {
                    label: 'GitHub Activity',
                    data: activityCounts,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    if (loading) {
        return <p>Loading...</p>; // Show loading indicator while fetching data
    }

    if (error) {
        return <p>{error}</p>; // Show error message if something went wrong
    }

    return (
        <div>
            <h2>GitHub Activity</h2>
            {activityData ? <Bar data={activityData} /> : <p>No data available</p>}
        </div>
    );
};

export default GetGithubActivity;
