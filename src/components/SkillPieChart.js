import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
    //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: ['Backend', 'Frontend', 'Game Development', 'Test Automation', 'Design', 'Databases'],
    datasets: [
        {
            label: '# of Votes',
            data: [15, 50, 20, 30, 20, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

const SkillPieChart = () => (
    <Pie data={data} />
)

export default SkillPieChart
