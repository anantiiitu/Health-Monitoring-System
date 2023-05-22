import { Component, OnInit } from '@angular/core';
import { HealthDataService } from '../health-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  healthData: any;

  constructor(private healthDataService: HealthDataService) {}

  ngOnInit() {
    this.healthDataService.getHealthData().subscribe((data) => {
      this.healthData = data;
    });
  }
}
