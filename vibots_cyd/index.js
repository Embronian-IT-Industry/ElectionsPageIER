am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig(
  {
    data: [
      {
        cydia: "Grogcheese#0699",
        litres: 13,
      },
      {
        cydia: "Протас#9072",
        litres: 18,
      } /*,
  {
    cydia: "Симонов",
    litres: 29
  },
  {
    cydia: "Дейрон",
    litres: 18
  },
  {
    cydia: "Дорога",
    litres: 14
  },
  {
    cydia: "Хаус",
    litres: 15
  },
  {
    cydia: "Пидорович",
    litres: 120
  }
   ,
  {
    cydia: "Belgium",
    litres: 60
  },
  {
    cydia: "The Netherlands",
    litres: 50
  
  }*/,
    ],
    legend: {},
    innerRadius: "40%",
    series: [
      {
        type: "PieSeries3D",
        dataFields: {
          value: "litres",
          category: "cydia",
        },
      },
    ],
  },
  "chartdiv",
  "PieChart3D"
);
