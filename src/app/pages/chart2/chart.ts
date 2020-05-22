import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ChartComponent,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'chart2',
  templateUrl: './chart.html',
  styleUrls: ['./chart.scss']
})
export class Chart2 {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Clientes/Hora',
          data: [20, 100, 40, 30, 50, 80, 33]
        }
      ],
      chart: {
        height: 350,
        type: 'radar'
      },
      dataLabels: {
        enabled: true
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            // strokeColor: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      title: {
        text: 'Concurrencia de Clientes'
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColors: ['#FF4560'],
        strokeWidth: 2
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          }
        }
      },
      xaxis: {
        categories: [
          'Afligidos',
          'Of. Principal',
          '2 de Mayo',
          'Magdalena',
          'San Borja',
          'Avelino',
          'cachimayo'
        ]
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          // formatter: function (val, i) {
          //   if (i % 2 === 0) {
          //     return val;
          //   } else {
          //     return 0;
          //   }
          // }
        }
      }
    };
  }
}
