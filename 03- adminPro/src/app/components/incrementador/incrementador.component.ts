import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  //@Input('valor') progreso: number = 45; // Dentro de parentecis ('' ) podemos ponerle el nombre del input como su identificador
  @Input() progreso: number = 45;



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
