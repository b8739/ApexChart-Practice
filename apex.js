Promise.all([
  loadData(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json"
  ),
  loadData(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-multiple-series-on-time-axis-schema.json"
  )
]).then(function(res) {
  const data = res[0];
  const schema = res[1];

  const dataStore = new FusionCharts.DataStore();
  const dataSource = {
    chart: {},
    caption: {
      text: "Sales Analysis"
    },
    subcaption: {
      text: "Grocery & Footwear"
    },
    series: "Type",
    yaxis: [
      {
        plot: "Sales Value",
        title: "Sale Value",
        format: {
          prefix: "$"
        }
      }
    ]
  };
  dataSource.data = dataStore.createDataTable(data, schema);

  new FusionCharts({
    type: "timeseries",
    renderAt: "chart-container",
    width: "100%",
    height: "500",
    dataSource: dataSource
  }).render();
});