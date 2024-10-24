{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "config": {
    "axis": {
      "labelFont": "supermarket",
      "titleFont": "supermarket",
      "labelFontSize": 19,
      "titleFontSize": 16,
      "labelFontWeight": "bold"
    },
    "legend": {
      "labelFont": "supermarket",
      "titleFont": "supermarket",
      "labelFontSize": 19,
      "titleFontSize": 16
    }
  },
  "data": {
    "name": "dataset"
  },
  "layer": [
    {
      "mark": {
        "type": "boxplot",
        "extent": "min-max",
        "outliers": true,
        "box": {
          "size": 35,
          "stroke": "black",
          "strokeWidth": 1
        }
      },
      "encoding": {
        "x": {
          "field": "division",
          "type": "nominal",
          "axis": {
            "labelAngle": 45
          }
        },
        "y": {
          "field": "Age",
          "type": "quantitative",
          "scale": {"domain": [20, 65]}
        },
        "color": {
          "field": "division",
          "type": "nominal",
          "scale": {
            "scheme": "sinebow",
            "interpolate": "hcl"
          }
        }
      }
    },
    {
      "mark": {"type": "text", "align": "left", "baseline": "top", "dx": 5, "dy": 10},
      "transform": [
        {
          "aggregate": [{"op": "mean", "field": "Age", "as": "mean_Age"}],
          "groupby": ["division"]
        }
      ],
      "encoding": {
        "x": {"field": "division", "type": "nominal"},
        "y": {"field": "mean_Age", "type": "quantitative"},
        "text": {"field": "mean_Age", "type": "quantitative", "format": ".1f"},
        "fontWeight": {"value": "bold"} 
      }
    },
    {
      "mark": {"type": "point", "filled": true, "color": "black", "size": 100},
      "transform": [
        {
          "aggregate": [{"op": "mean", "field": "Age", "as": "mean_Age"}],
          "groupby": ["division"]
        }
      ],
      "encoding": {
        "x": {"field": "division", "type": "nominal"},
        "y": {"field": "mean_Age", "type": "quantitative"}
      }
    }
  ],
  "legend": {
    "orient": "bottom",
    "labelAngle": 45
  }
}