{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Enhanced Horizontal Beeswarm Chart with Count Labels Above Groups",
  "data": {
    "name": "dataset"
  },
  "title": {
    "text": "Beeswarm Competency by Job Family and IDP Group",
    "fontSize": 20,
    "font": "Roboto",
    "anchor": "middle",
    "offset": 20
  },
  "transform": [
    {"calculate": "random() * 0.4 - 0.2", "as": "random"},
    {"window": [{"op": "rank", "as": "rank"}], "groupby": ["Group_Result"], "sort": [{"field": "random"}]},
    {"calculate": "datum.rank - 0.5", "as": "offset"},
    {"calculate": "datum.offset * 0.1", "as": "jitteredY"},
    {
      "joinaggregate": [{"op": "sum", "field": "Count of Group_Result", "as": "total_count"}],
      "groupby": ["Group_Result"]
    },
    {"calculate": "0.5", "as": "x_position"} 
  ],
  "layer": [
    {
      "mark": {
        "type": "circle",
        "filled": true,
        "stroke": "black",
        "strokeWidth": 1
      },
      "encoding": {
        "y": {
          "field": "Group_Result",
          "type": "nominal",
          "sort": [
            "Meeting Expectations",
            "Approaching Expectations",
            "Minor Learning Gap",
            "Developing Proficiency",
            "Early Development Stage"
          ],
          "axis": {
            "labelAngle": 0,
            "title": "Group Of IDP",
            "labelPadding": 5,
            "labelFont": "Roboto",
            "titleFont": "Roboto"
          },
          "scale": {
            "paddingInner": 0.4
          }
        },
        "yOffset": {"field": "jitteredY", "type": "quantitative"},
        "x": {
          "field": "% Competency",
          "type": "quantitative",
          "fontSize": 200,
          "scale": {
            "domain": [0, 1],
            "nice": true,
            "tickCount": 21
          },
          "axis": {
            "title": "% Competency",
            "format": ".0%",
            "labelFont": "Roboto",
            "titleFont": "Roboto",
            "grid": true
          }
        },
        "size": {
          "field": "% Competency",
          "type": "quantitative",
          "scale": {
            "type": "sqrt",
            "range": [10, 300]
          },
          "legend": {
            "title": "% Competency",
            "titleFont": "Roboto",
            "labelFont": "Roboto",
            "orient": "right",
            "format": ".0%",
            "titlePadding": 10,
            "direction": "vertical",
            "offset": 20
          }
        },
        "color": {
          "field": "Job Family",
          "type": "nominal",
          "scale": {
            "scheme": "category20"  
          }
        },
        "tooltip": [
          {"field": "Group_Result", "type": "nominal", "title": "Group"},
          {"field": "Job Family", "type": "nominal", "title": "Job Family"},
          {"field": "% Competency", "type": "quantitative", "format": ".1%", "title": "% Competency"},
          {"field": "Count of Group_Result", "type": "quantitative", "title": "Count"}
        ]
      }
    },
    {
      "mark": {"type": "text", "align": "right", "baseline": "right", "dy": -1, "dx": 295},
      "encoding": {
        "y": {"field": "Group_Result", "type": "nominal",
        "sort": [
            "Meeting Expectations",
            "Approaching Expectations",
            "Minor Learning Gap",
            "Developing Proficiency",
            "Early Development Stage"
            ]
        },
        "x": {"field": "x_position", "type": "quantitative"},
        "text": {"field": "total_count", "type": "quantitative"}
      }
    }
  ],
  "config": {
    "view": {"stroke": null},
    "background": "#ffffff",
    "font": {"family": "Roboto", "size": 13},
    "legend": {
      "titleFontSize": 10,
      "labelFontSize": 10,
      "symbolSize": 50
    }
  },
  "width": 620,
  "height": 400
}