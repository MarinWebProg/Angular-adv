import { Component, Input } from '@angular/core';

//Importes externos
import { ChartData, Color, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

   // Doughnut
   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       {
        data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
      },
     ],


   };
   public doughnutChartType: ChartType = 'doughnut';

}
