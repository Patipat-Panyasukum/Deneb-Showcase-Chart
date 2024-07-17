{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "name": "dataset" 
  },
  "repeat": {
    "row": ["% Blind spot", "Count of Blind spot"],  
    "column": ["% Blind spot", "Count of Blind spot"] 
  },
  "spec": {
    "mark": {
      "type": "point",
      "filled": true  
    },
    "encoding": {
      "x": {"field": {"repeat": "column"}, "type": "quantitative"},
      "y": {"field": {"repeat": "row"}, "type": "quantitative"},
      "color": {"field": "job_family", "type": "nominal"},
      "tooltip": [
        {"field": "% Blind spot", "type": "quantitative", "title": "% Blind Spot", "format": ".0%"},
        {"field": "Count of Blind spot", "type": "quantitative", "title": "Count of Blind Spots"}
      ]
    },
    "resolve": {
      "scale": {
        "x": "independent", 
        "y": "independent" 
      }
    }
  },
  "config": {
    "axis": {
      "labelFontSize": 12,
      "titleFontSize": 14
    }
  }
}