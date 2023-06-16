import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {
  progreso: number = 45;

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiaValor (valor: number){
    if(this.progreso > 100)
    {
       this.progreso = 100;
    }
    if(this.progreso < 0 )
    {
       this.progreso = 0;
    }

    this.progreso = this.progreso + valor
  }
}
