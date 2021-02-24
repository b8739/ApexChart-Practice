var options = {
  chart: {
      height: 380,
      type: 'line',
      events: {
          dataPointSelection: function(e, chart, opts) {
              console.log(e, opts)
          },
      },
  },
  series: [{
      name: "Desktops",
      data: [30, 41, 35, 51, 49, 62, 69, 91, 126]
  }],
  grid: {
      row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
      },
  },
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  tooltip: {
      intersect: true,
      shared: false
  },
  markers: {
    size: 6,
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

