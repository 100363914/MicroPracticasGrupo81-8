import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Comanda';
  totalPedido = 0;
  elementoSeleccionado: any; 
  carta:Array<any> = [
      {plato: 'Arroz tres delicias',precio: 3.5},
      {plato: 'Cerdo agridulce',precio: 5.5},
      {plato: 'Ternera con bambú y setas',precio: 7}];
  pedido:Array<any>=[];


  public addComanda(){
    console.log(this.elementoSeleccionado.plato);
    this.pedido.push(this.elementoSeleccionado);
    this.totalPedido = this.totalPedido + this.elementoSeleccionado.precio;
  }
  public delComanda(linea: any){
    this.totalPedido = this.totalPedido - this.pedido[linea].precio;
    this.pedido.splice(linea,1);
  }

}
