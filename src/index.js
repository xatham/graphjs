import '../node_modules/chart.js'
import 'chartjs-plugin-datalabels'

window.onload = function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    'red',
                    'green',
                    'blue',
                    'yellow',
                    'orange'
                ],
                label: 'Dataset 1'
            }],
            labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue'
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
    window.myDoughnut = new Chart(ctx, config);
};
