{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "name": "dataset"
  },
  "transform": [
    {
      "calculate": "-datum.Level_position_funnel",
      "as": "Level_position_funnel_negative"
    },
    {
      "joinaggregate": [{"op": "sum", "field": "Level_position_funnel", "as": "Total"}]
    },
    {
      "calculate": "(datum.Level_position_funnel / datum.Total)",
      "as": "Percentage"
    }
  ],
  "title": {
    "text": "Pyramid Chart of Level Positions",
    "fontSize": 25,
    "font": "Supermarket",
    "anchor": "middle"
  },
  "layer": [
    {
      "mark": {"type": "bar", "tooltip": true},
      "encoding": {
        "y": {
          "field": "level position",
          "type": "ordinal",
          "sort": {"field": "Category_Sort_Order", "order": "ascending"},
          "axis": {"title": "ระดับตำแหน่ง", "labelAngle": 0, "labelFont": "Supermarket","titleFont": "Supermarket","titleFontSize": 16}
        },
        "x": {
          "field": "Level_position_funnel_negative",
          "type": "quantitative",
          "axis": {"title": "จำนวน", "labelExpr": "datum.value < 0 ? -datum.value : ''", "labelFont": "Supermarket","titleFont": "Supermarket","titleFontSize": 16}
        },
        "color": {
          "field": "level position",
          "type": "nominal",
          "legend": {"labelFont": "Supermarket"}, 
          "scale": {
            "domain": ["ผู้บริหารระดับสูง", "ผู้บริหารระดับกลาง", "ผู้บริหารระดับต้น", "พนักงานทั่วไป"],
            "range": ["#D21F4F", "#F97000", "#02D081", "#48FA95"]
          }
        },
        "tooltip": [
          {"field": "level position", "title": "ระดับตำแหน่ง"},
          {"field": "Level_position_funnel", "title": "จำนวน", "type": "quantitative"},
          {"field": "Percentage", "title": "Percentage", "format": ".2%"}
        ]
      }
    },
    {
      "mark": {"type": "bar", "tooltip": true},
      "encoding": {
        "y": {
          "field": "level position",
          "type": "ordinal",
          "sort": {"field": "Category_Sort_Order", "order": "ascending"},
          "axis": {"title": "", "labelFont": "Supermarket", "labelFontSize": 20}
        },
        "x": {
          "field": "Level_position_funnel",
          "type": "quantitative",
          "axis": {"title": "", "labelExpr": "datum.value > 0 ? datum.value : ''", "labelFont": "Supermarket", "labelFontSize": 12}
        },
        "color": {
          "field": "level position",
          "type": "nominal",
          "scale": {
            "domain": ["ผู้บริหารระดับสูง", "ผู้บริหารระดับกลาง", "ผู้บริหารระดับต้น", "พนักงานทั่วไป"],
            "range": ["#D21F4F", "#F97000", "#02D081", "#48FA95"]
          }
        },
        "tooltip": [
          {"field": "level position", "title": "ระดับตำแหน่ง"},
          {"field": "Level_position_funnel", "title": "จำนวน", "type": "quantitative"},
          {"field": "Percentage", "title": "Percentage", "format": ".2%"}
        ]
      }
    },
    { 
      "mark": {
        "type": "text",
        "align": "center",
        "baseline": "middle",
        "fontSize": 20,
        "fontWeight": "bold",
        "font": "Supermarket",
        "dx": 20,
        "color": "black"
      },
      "encoding": {
        "text": {"field": "Level_position_funnel", "type": "quantitative"},
        "y": {
          "field": "level position",
          "type": "ordinal",
          "sort": {"field": "Category_Sort_Order", "order": "ascending"}
        },
        "x": {"field": "Level_position_funnel", "type": "quantitative"}
      }
    },
    { 
      "mark": {
        "type": "text",
        "align": "left",
        "baseline": "middle",
        "fontSize": 18,
        "fontWeight": "bold",
        "font": "Supermarket",
        "color": "white",
        "dx": 5
      },
      "encoding": {
        "text": {"field": "Percentage", "type": "quantitative", "format": ".2%", "formatType": "number"}, 
        "y": {
          "field": "level position",
          "type": "ordinal",
          "sort": {"field": "Category_Sort_Order", "order": "ascending"}
        },
        "x": {"field": "Level_position_funnel_negative", "type": "quantitative"}
      }
    }
  ],
  "config": {
    "axis": {"labelAngle": 0, "labelFont": "Supermarket"},
    "text": {"font": "Supermarket"},
    "legend": {"labelFont": "Supermarket"} 
  }
}