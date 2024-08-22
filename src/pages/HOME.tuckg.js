// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

    // Write your Javascript code here using the Velo framework API

    // Print hello world:
    // console.log("Hello world!");

    // Call functions on <!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grafic Vânzări</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            width: 80%;
            max-width: 1200px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            padding: 20px;
            box-sizing: border-box;
        }
        h1 {
            text-align: center;
            color: #4CAF50;
        }
        label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            display: block;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        .chart-container {
            margin-top: 20px;
        }
        canvas {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Grafic Vânzări Zilnice</h1>
        <form id="salesForm">
            <!-- Generare input-uri pentru fiecare zi -->
            <script>
                for (let i = 1; i <= 16; i++) {
                    document.write(`
                        <label for="day${i}">Ziua ${i}:</label>
                        <input type="number" id="day${i}" placeholder="Introdu valoarea vândută în Ziua ${i}">
                    `);
                }
            </script>
            <button type="button" onclick="updateChart()">Actualizează Grafic</button>
        </form>
        <div class="chart-container">
            <canvas id="salesChart"></canvas>
        </div>
    </div>

    <!-- Include Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        const ctx = document.getElementById('salesChart').getContext('2d');
        let salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 16 }, (_, i) => `Ziua ${i + 1}`),
                datasets: [{
                    label: 'Vânzări Zilnice',
                    data: Array(16).fill(0),
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Zile Lucrate'
                        },
                        grid: {
                            borderColor: '#000',
                            borderWidth: 1
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Sume (lei)'
                        },
                        ticks: {
                            stepSize: 1000,
                            callback: function(value) {
                                return value.toLocaleString('ro-RO'); // Formatarea numerelor în stil românesc
                            }
                        },
                        grid: {
                            borderColor: '#000',
                            borderWidth: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });

        function updateChart() {
            const salesData = Array.from({ length: 16 }, (_, i) => {
                return parseFloat(document.getElementById(`day${i + 1}`).value) || 0;
            });

            salesChart.data.datasets[0].data = salesData;
            salesChart.update();
        }
    </script>
</body>
</html>
    page elements, e.g.:
        // $w("#button1").label = "Click me!";

        // Click "Run", or Preview your site, to execute your code

});