import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }

  //@Input('valor') progreso: number = 45; // Dentro de parentecis ('' ) podemos ponerle el nombre del input como su identificador
  @Input('valor') progreso: number = 45;
  @Input() btnClass: string = 'btn btn-primary'

  //@Output -Disparador de la accion del padre-Salida
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();


  cambiaValor (valor: number){
    if(this.progreso >= 100 && valor >=0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor
    this.valorSalida.emit(this.progreso)

    return this.cambiaValor;
  }
}
