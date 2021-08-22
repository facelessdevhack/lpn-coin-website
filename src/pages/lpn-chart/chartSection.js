import React, { Component } from 'react'
import bgTwo from '../../assets/bgtwo.jpg'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import './chartStyle.css';

export class ChartSection extends Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_dark);
        let chart = am4core.create("chartdiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0;
        chart.paddingRight = 20;
    
        let data = [];
        let visits = 10;
        for (let i = 1; i < 366; i++) {
          visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
          data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
        }
        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.innerRadius = am4core.percent(40);
        chart.depth = 20;

        // chart.legend = new am4charts.Legend();
        chart.data = [{
            "investors": "Dubai's IBC Group",
            "share": 25000000
          }, {
            "investors": "Digital Assets Holdings",
            "share": 15000000
          }, {
            "investors": "Investo India",
            "share": 25000000
          }, {
            "investors": "Public Distribution",
            "share": 30000000
          }, {
            "investors": "Reserve",
            "share": 5000000
          }];;

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries3D());
        pieSeries.dataFields.value = "share";
        pieSeries.dataFields.category = "investors";
        // pieSeries.slices.template.stroke = am4core.color("#fff");
        // pieSeries.slices.template.strokeWidth = 2;
        // pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template.cornerRadius = 5;
        pieSeries.colors.step = 3;
        pieSeries.labels.template.fontSize = 20
        pieSeries.ticks.template.strokeWidth = 3
        pieSeries.ticks.template.strokeOpacity =1

        // Disabling labels and ticks on inner circle
        // pieSeries.labels.template.disabled = true;
        // pieSeries.ticks.template.disabled = true;

        // Disable sliding out of slices
        // pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        // pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;
    
        this.chart = chart;
      }
      componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }
    render() {
        return (
            <div>
                <img src={bgTwo} id='bgSectionTwo' />
                <div id='tokenSaleDes'>
                    <h1>What is a Token Sale?</h1>
                    <p>A token sale, sometimes referred to as an ICO, is form of crowd funding for digital currency-related projects. In token sales, purch - asers buy units of a new currency in exchange for legal tender or other digital currencies, such as Bitcoin or Ethereum.</p>
                </div>
                <h1 id='tokenHeading'>Token Distribution</h1>
                <div >
                    {/* <ul id='chartdescs'>
                        <li>Dubai's IBC Group</li>
                        <li>Digital Assets Holdings</li>
                        <li>Investo India</li>
                        <li>Public Distribution</li>
                        <li>Reserve</li>
                    </ul> */}
                    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                </div>
            </div>
        )
    }
}

export default ChartSection
