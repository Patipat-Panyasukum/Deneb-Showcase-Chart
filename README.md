# Deneb Showcase Chart

 Deneb is a powerful visual tool for creating custom visualizations in Power BI using the Vega and Vega-Lite visualization grammars. With Deneb, you can build advanced, interactive, and highly customizable charts that go beyond the standard visualizations available in Power BI.
 
 
- **Beeswarm Competency by Job Family and IDP Group**
![image all](https://github.com/Patipat-Panyasukum/Deneb-Showcase-Chart/blob/main/Beeswarm%20Chart/Beeswarm%20Competency%20Chart.PNG?raw=true)

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


- **Quartdance sactter PCT blind Spot Analysis**
![image all](https://github.com/Patipat-Panyasukum/Deneb-Showcase-Chart/blob/main/Bubble%20plot/Quart%20sactter%20blind%20Spot%20Analysis.PNG?raw=true)


- **Advanced horizontal barplot with facet**
![image all](https://github.com/Patipat-Panyasukum/Deneb-Showcase-Chart/blob/main/ADVANCED%20Bar%20Chart/Facet%20Bar%20chart%20Compare%20Actual%20vs%20Target.PNG?raw=true)
![image all](https://github.com/Patipat-Panyasukum/Deneb-Showcase-Chart/blob/main/ADVANCED%20Bar%20Chart/2.PNG?raw=true)

- **Heatmap_Retirement**
  
![image all](https://github.com/Patipat-Panyasukum/Deneb-Showcase-Chart/blob/main/Advanecd%20Heatmap/Heatmap%20Retirement%20Next%205%20Years.PNG?raw=true)


- **Heatmap_Expreience**
  
![image all](https://github.com/Patipat-Panyasukum/Deneb-Showcase-Chart/blob/main/Advanecd%20Heatmap/Heatmap%20Expreience.PNG?raw=true)
 
# Key Features of Deneb

**Custom Visualizations:** 

 Deneb allows you to create a wide range of visualizations that are not possible with out-of-the-box Power BI visuals.
 
**Vega and Vega-Lite:**  

It uses the Vega and Vega-Lite visualization grammars, which are high-level grammar-based languages for creating, sharing, and exploring data visualizations.

**Interactivity:**  

You can add interactivity to your charts, such as tooltips, filters, and selection-based actions.

**Advanced Customization:**  

Deneb provides a high degree of control over the appearance and behavior of your visualizations, enabling you to customize everything from colors and shapes to axes and legends.

**Integration with Power BI:**  

Deneb visualizations can be seamlessly integrated into Power BI reports and dashboards, leveraging the data and capabilities of Power BI.
