{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A heatmap showing the count of records by division and tenure categories with data labels on each bin.",
  "title": {
    "text": "จำนวนคนในแต่ละฝ่ายโดยใช้ประสบการณ์การทำงาน",
    "font": "Supermarket",
    "fontSize": 30,
    "anchor": "start"
  },
  "data": {
    "name": "dataset"
  },
  "padding": {"left": 10, "right": 10, "top": 10, "bottom": 50},
  "layer": [
    {
      "mark": {"type": "rect", "tooltip": true, "stroke": "white", "strokeWidth": 2},
      "encoding": {
        "x": {
          "field": "tenure_categories",
          "type": "nominal",
          "title": "ประสบการณ์ในการทำงาน (อายุงาน)",
          "axis": {
            "labelAngle": 360,
            "orient": "top",
            "labelFont": "Supermarket",
            "labelFontSize": 25,
            "titleFont": "Supermarket",
            "titleFontSize": 25
          }
        },
        "y": {
          "field": "division",
          "type": "nominal",
          "title": "ฝ่าย",
          "axis": {
            "labelFont": "Supermarket",
            "labelFontSize": 20,
            "titleFont": "Supermarket",
            "titleFontSize": 20
          }
        },
        "color": {
          "field": "Countby_tenure",
          "type": "quantitative",
          "title": "จำนวนคน",
          "scale": {
            "type": "sequential",
            "scheme": "blues"
          }
        }
      }
    },
    {
      "mark": {
        "type": "text",
        "baseline": "middle",
        "align": "center",
        "dx": 0,
        "dy": 0,
        "fontSize": 20,
        "font": "Supermarket",
        "fontWeight": "bold"
      },
      "encoding": {
        "x": {"field": "tenure_categories", "type": "nominal"},
        "y": {"field": "division", "type": "nominal"},
        "text": {"field": "Countby_tenure", "type": "quantitative"},
        "color": {"value": "black"}
      }
    },
    {
      "transform": [
        {
          "aggregate": [{"op": "sum", "field": "Countby_tenure", "as": "TotalCount"}],
          "groupby": ["tenure_categories"]
        }
      ],
      "mark": {
        "type": "text",
        "align": "center",
        "baseline": "middle",
        "fontWeight": "bold",
        "fontSize": 20,
        "color": "black",
        "dy": 570
      },
      "encoding": {
        "x": {"field": "tenure_categories", "type": "nominal"},
        "text": {"field": "TotalCount", "type": "quantitative"}
      }
    }
  ],
  "config": {
    "axis": {
      "labelFont": "Supermarket",
      "labelFontSize": 20,
      "titleFont": "Supermarket",
      "titleFontSize": 14
    },
    "header": {
      "labelFont": "Supermarket",
      "labelFontSize": 20,
      "titleFont": "Supermarket",
      "titleFontSize": 16
    },
    "legend": {
      "labelFont": "Supermarket",
      "labelFontSize": 20,
      "titleFont": "Supermarket",
      "titleFontSize": 16
    },
    "title": {
      "font": "Supermarket",
      "fontSize": 20
    }
  }
}
