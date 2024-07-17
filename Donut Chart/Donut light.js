{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 700,
  "height": 700,
  "padding": -100,
  "signals": [
    {
      "name": "textGradient",
      "update": "{gradient: 'linear', stops: [{offset: 0, color: '#4BD6EF'}, {offset: 1, color: '#4BD6EF'}]}"
    },
    {
      "name": "percent",
      "update": "0",
      "on": [
        {
          "events": {
            "type": "timer",
            "throttle": 0
          },
          "update": "round(data('dataset')[0]['Percentage'])"
        }
      ]
    }
  ],
  "data": [
    {"name": "dataset"},
    {
      "name": "back",
      "values": [],
      "transform": [
        {
          "type": "sequence",
          "start": 0,
          "stop": 100,
          "step": 1,
          "as": "val"
        },
        {
          "type": "formula",
          "expr": "1",
          "as": "t"
        },
        {
          "type": "pie",
          "field": "t",
          "startAngle": {"signal": "0"},
          "endAngle": {"signal": "2*PI"}
        }
      ]
    },
    {
      "name": "front",
      "values": [],
      "transform": [
        {
          "type": "sequence",
          "start": 0,
          "stop": {"signal": "percent"},
          "step": 1,
          "as": "val"
        },
        {
          "type": "formula",
          "expr": "1",
          "as": "t"
        },
        {
          "type": "pie",
          "field": "t",
          "startAngle": {"signal": "0"},
          "endAngle": {
            "signal": "((2*PI)/100)*percent"
          }
        }
      ]
    }
  ],
  "scales": [
    {
      "name": "color",
      "type": "linear",
      "domain": {
        "data": "back",
        "field": "val"
      },
      "range": [
        "#5163E9",
        "#4BD6EF"
      ]
    }
  ],
  "marks": [
    {
      "type": "arc",
      "from": {"data": "back"},
      "encode": {
        "enter": {
          "fill": {"value": "#9092a1"},
          "x": {"signal": "width / 2"},
          "y": {"signal": "height / 2"}
        },
        "update": {
          "startAngle": {
            "field": "startAngle"
          },
          "endAngle": {
            "field": "endAngle"
          },
          "padAngle": {
            "signal": "0.015"
          },
          "innerRadius": {
            "signal": "(width / 2)-150"
          },
          "outerRadius": {
            "signal": "(width / 2)-190"
          }
        }
      }
    },
    {
      "type": "arc",
      "from": {"data": "front"},
      "encode": {
        "enter": {
          "fill": {
            "scale": "color",
            "field": "val"
          },
          "x": {"signal": "width / 2"},
          "y": {"signal": "height / 2"}
        },
        "update": {
          "startAngle": {
            "field": "startAngle"
          },
          "endAngle": {
            "field": "endAngle"
          },
          "padAngle": {
            "signal": "0.015"
          },
          "innerRadius": {
            "signal": "(width / 2)-150"
          },
          "outerRadius": {
            "signal": "(width / 2)-190"
          }
        }
      }
    },
    {
      "type": "arc",
      "data": [{"a": 1}],
      "encode": {
        "enter": {
          "fill": {"value": "#4BD6EF"},
          "x": {"signal": "width / 2"},
          "y": {"signal": "height / 2"}
        },
        "update": {
          "startAngle": {"signal": "0"},
          "endAngle": {
            "signal": "2*PI"
          },
          "innerRadius": {
            "signal": "(width / 2)-220"
          },
          "outerRadius": {
            "signal": "(width / 2)-210"
          }
        }
      }
    },
    {
      "type": "text",
      "data": [{}],
      "encode": {
        "update": {
          "text": {
            "signal": "percent + '%'"
          },
          "align": {"value": "center"},
          "fontWeight": {
            "value": "bold"
          },
          "fill": {
            "signal": "textGradient"
          },
          "x": {"signal": "width /2"},
          "y": {"signal": "width /2"},
          "dy": {"value": 5},
          "fontSize": {"value": 50}
        }
      }
    },
    {
      "type": "text",
      "data": [{}],
      "encode": {
        "update": {
          "text": {
            "value": "% planning"
          },
          "align": {"value": "center"},
          "fontWeight": {
            "value": "bold"
          },
          "fill": {"value": "#4BD6EF"},
          "x": {"signal": "width /2"},
          "y": {"signal": "width /2"},
          "dy": {"value": 40},
          "fontSize": {"value": 30}
        }
      }
    }
  ]
}