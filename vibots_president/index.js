am4core.useTheme(am4themes_animated);

var chart = am4core.createFromConfig(
  {
    data: [
      {
        party: "Pikanga#6487",
        litres: 32,
      },
      {
        party: "серега#5454",
        litres: 12,
      },
      {
        party: "Kataklizm13#0018",
        litres: 8,
      } /*,
  {
    party: "Али-Ага Шихлинский",
    litres: 6
  },
  {
    party: "Эдвард Нортон",
    litres: 2
  },
  {
    party: "Вишивани-UkroKing",
    litres: 3
  },
  {
    party: "Брак",
    litres: 13
  }
  ,
  {
    party: "The Netherlands",
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
          category: "party",
        },
      },
    ],
  },
  "chartdiv",
  "PieChart3D"
);
