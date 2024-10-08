{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"name": "dataset"},
  "transform": [
    {"calculate": "datetime(datum.Year - 543, 0, 1)", "as": "GregorianYear"},
    {"calculate": "datum.Year", "as": "BuddhistYear"}
  ],
  "title": {
    "text": "จำนวนพนักงานเกษียณในอีก 5 ปี",
    "subtitle": "แบ่งตามระดับฝ่ายและปี (พ.ศ.)",
    "anchor": "start",
    "font": "supermarket",
    "fontSize": 30,
    "subtitleFont": "Supermarket",
    "subtitleFontSize": 20
  },
  "layer": [
    {
      "mark": {"type": "rect", "tooltip": true, "stroke": "white", "strokeWidth": 2},
      "encoding": {
        "x": {
          "field": "BuddhistYear",
          "type": "ordinal",
          "axis": {
            "labelAngle": 0,
            "title": "ปี (พ.ศ.)",
            "labelFont": "Supermarket",
            "labelFontSize": 22,
            "grid": false,
            "labelAlign": "center"
          }
        },
        "y": {
          "field": "division",
          "type": "nominal",
          "sort": null,
          "axis": {
            "labelFont": "Supermarket",
            "labelFontSize": 23,
            "labelPadding": 10,
            "title": "ฝ่าย"
          }
        },
        "color": {
          "field": "Employee_Retire_Next_5_year_all__formatted",
          "type": "quantitative",
          "legend": {
            "title": "จำนวนพนักงานเกษียณ",
            "labelFont": "Supermarket",
            "labelFontSize": 20
          },
          "scale": {
            "type": "sequential",
            "scheme": "blues"
          }
        },
        "tooltip": [
          {"field": "division", "type": "nominal", "title": "ฝ่าย"},
          {"field": "BuddhistYear", "type": "quantitative", "title": "ปี (พ.ศ.)"},
          {"field": "Employee_Retire_Next_5_year_all__formatted", "type": "quantitative", "title": "จำนวนพนักงาน"}
        ]
      }
    },
    {
      "mark": {
        "type": "text",
        "align": "center",
        "baseline": "middle",
        "fontWeight": "bold",
        "fontSize": 23
      },
      "encoding": {
        "x": {"field": "BuddhistYear", "type": "ordinal", "bandPosition": 0.5},
        "y": {"field": "division", "type": "nominal", "bandPosition": 0.5},
        "text": {"field": "Employee_Retire_Next_5_year_all__formatted", "type": "quantitative"},
        "color": {"value": "black"}
      }
    },
    {
      "transform": [
        {
          "aggregate": [{"op": "sum", "field": "Employee_Retire_Next_5_year_all__formatted", "as": "TotalRetirees"}],
          "groupby": ["BuddhistYear"]
        }
      ],
      "mark": {
        "type": "text",
        "align": "center",
        "baseline": "middle",
        "fontWeight": "bold",
        "fontSize": 25,
        "color": "black",
        "dy": -19
      },
      "encoding": {
        "x": {"field": "BuddhistYear", "type": "ordinal", "bandPosition": 0.5},
        "y": {"value": 0},
        "text": {"field": "TotalRetirees", "type": "quantitative"},
        "tooltip": {"field": "TotalRetirees", "type": "quantitative", "title": "จำนวนพนักงานเกษียณ"}
      }
    }
  ],
  "config": {
    "axis": {"titleFont": "Supermarket", "titleFontSize": 25},
    "legend": {"titleFont": "Supermarket", "titleFontSize": 22},
    "view": {"stroke": "gray"},
    "background": "#ffffff"
  }
}
