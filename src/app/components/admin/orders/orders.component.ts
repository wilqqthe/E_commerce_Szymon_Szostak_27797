import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {

    this.mainService.getOrders();
  }

}
