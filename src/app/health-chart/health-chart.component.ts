import { Component, OnInit } from '@angular/core';
import { HealthDataService } from '../health-data.service';

@Component({
  selector: 'app-health-chart',
  templateUrl: './health-chart.component.html',
  styleUrls: ['./health-chart.component.css'],
})
export class HealthChartComponent implements OnInit {
  chartData: any = [];
  chartLabels: string[] = [];
  chartOptions: any = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Heart Rate',
        },
      },
    },
  };

  constructor(private healthDataService: HealthDataService) {}

  ngOnInit() {
    this.healthDataService.getHealthData().subscribe((data) => {
      const heartRateData = data.heartRate;
      const labels = Object.keys(heartRateData);
      const values = Object.values(heartRateData);

      this.chartData = [
        {
          data: values,
          label: 'Heart Rate',
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
        },
      ];

      this.chartLabels = labels;
    });
  }
}
