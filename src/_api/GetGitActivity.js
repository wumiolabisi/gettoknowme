import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Importer le type de graphique linéaire
import 'chart.js/auto'; // Assurez-vous que chart.js est bien importé
import Link from 'next/link';

const GetGithubActivity = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activityData, setActivityData] = useState(null);

    useEffect(() => {
        const fetchGithubActivity = async () => {
            try {
                const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

                const response = await fetch('https://api.github.com/users/wumiolabisi/events?per_page=200', {
                    headers: {
                        'Authorization': `token ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

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

    const processGithubData = (data) => {
        const labels = [];
        const activityCounts = [];
        const daysAgo = new Date();
        daysAgo.setDate(daysAgo.getDate() - 60);

        // Générer les labels pour les 60 derniers jours
        const currentDate = new Date();
        let datePointer = new Date(daysAgo);

        while (datePointer <= currentDate) {
            labels.push(datePointer.toISOString().slice(0, 10)); // Format YYYY-MM-DD
            activityCounts.push(0); // Initialise avec 0
            datePointer.setDate(datePointer.getDate() + 1); // Passer au jour suivant
        }

        // Compter les événements par jour
        data.forEach((event) => {
            const eventDate = new Date(event.created_at);
            if (eventDate >= daysAgo) {
                const dateStr = eventDate.toISOString().slice(0, 10); // Format YYYY-MM-DD
                const index = labels.indexOf(dateStr);
                if (index !== -1) {
                    activityCounts[index]++;
                }
            }
        });

        return {
            labels,
            datasets: [
                {
                    label: 'Commits',
                    data: activityCounts,
                    borderColor: 'rgba(128, 0, 128, 1)', // Couleur violet foncé pour la ligne
                    backgroundColor: 'rgba(128, 0, 128, 0.2)', // Couleur violet clair pour la zone sous la ligne
                    borderWidth: 2,
                    fill: true,
                    responsive: true
                },
            ],
        };
    };

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div id="gitgraph">
            <h2>Mon activité sur GitHub</h2>
            {activityData ? <Line data={activityData} /> : <p>Pas de données disponibles, désolée.</p>}
            <Link href="https://github.com/wumiolabisi" target="_blank" title="Voir mon activité sur Github.com"><u className="text-xs">Voir sur Github</u></Link>
        </div>
    );
};

export default GetGithubActivity;
