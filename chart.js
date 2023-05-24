function runchartjs() {
  // Line Chart
  var salesData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Music 1",
        backgroundColor: "rgba(195, 40, 96, 0.1)",
        borderColor: "rgba(195, 40, 96, 1)",
        pointBackgroundColor: "rgba(195, 40, 96, 1)",
        pointBorderColor: "#202b33",
        pointHoverBorderColor: "rgba(225, 225, 225, 0.9)", tension: 0.4,
        data: [3400, 3000, 2500, 4500, 2500, 3400, 3000]
      },
      {
        label: "Music 2",
        backgroundColor: "rgba(255, 172, 100, 0.1)",
        borderColor: "rgba(255, 172, 100, 1)",
        pointBackgroundColor: "rgba(255, 172, 100, 1)",
        pointBorderColor: "#202b33",
        pointHoverBorderColor: "rgba(225, 225, 225, 0.9)", tension: 0.4,
        data: [1900, 1700, 2100, 3600, 2200, 2500, 2000]
      },
      {
        label: "Music 3",
        backgroundColor: "rgba(19, 71, 34, 0.3)",
        borderColor: "rgba(88, 188, 116, 1)",
        pointBackgroundColor: "rgba(88, 188, 116, 1)",
        pointBorderColor: "#202b33",
        pointHoverBorderColor: "rgba(225, 225, 225, 0.9)",
        data: [1000, 1400, 1100, 2600, 2000, 900, 1400],
        tension: 0.4,
      }
    ]
  };

  var ctx = document.getElementById("salesData").getContext("2d");
  window.myLineChart = new Chart(ctx, {
    type: 'line',
    data: salesData,
    options: {
      elements: {
        point: {
          radius: 6,
          borderWidth: 2,
          hoverRadius: 6,
          hoverBorderWidth: 2
        }
      },
      scales: {
        y: {
          grid: {
            lineWidth: 2,
            color: "rgba(225, 255, 255, 0.02)",
            display: true
          },
          ticks: {
            beginAtZero: true,
            stepSize: 500,
            max: 4500
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      responsive: true,
      plugins: {
        annotation: {
          annotations: [{
            type: 'line',
            drawTime: 'afterDatasetsDraw',
            mode: 'horizontal',
            scaleID: 'y',
            value: 2500,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 1,
            borderDash: [10, 5]
          }]
        }
      }
    }
  });

  // Credit Sales
  var creditSales = new ProgressBar.Circle('#creditSales', {
    color: '#e81760',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 1500,
    text: {
      value: '0%'
    },
    step: function (state, bar) {
      bar.setText((bar.value() * 100).toFixed(0) + "%");
    }
  });

  var channelSales = new ProgressBar.Circle('#channelSales', {
    color: '#e88e3c',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 1500,
    text: {
      value: '0%'
    },
    step: function (state, bar) {
      bar.setText((bar.value() * 100).toFixed(0) + "%");
    }
  });

  var directSales = new ProgressBar.Circle('#directSales', {
    color: '#2bab51',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 1500,
    text: {
      value: '0%'
    },
    step: function (state, bar) {
      bar.setText((bar.value() * 100).toFixed(0) + "%");
    }
  });

  creditSales.animate(0.8);
  channelSales.animate(0.64);
  directSales.animate(0.34);

  // Animation: Line Chart Transition
  var lineChartAnimation = anime({
    targets: salesData.datasets[0],
    data: [2500, 3400, 3000, 3400, 3000, 4500, 2500],
    duration: 2000,
    easing: 'easeInOutQuad',
    round: 1,
    update: function () {
      myLineChart.update();
    }
  });
}
document.addEventListener('click', runchartjs);
document.addEventListener('DOMContentLoaded', runchartjs);

