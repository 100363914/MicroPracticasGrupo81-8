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
      {plato: 'Arroz tres delicias',precio: 3.5, cantidad: 0},
      {plato: 'Cerdo agridulce',precio: 5.5, cantidad: 0},
      {plato: 'Ternera con bambú y setas',precio: 7, cantidad: 0}];
  pedido:Array<any>=[];


  public addComanda(){
    if (this.pedido.indexOf(this.elementoSeleccionado) != -1) {
      this.elementoSeleccionado.cantidad++;
      this.totalPedido = this.totalPedido + this.elementoSeleccionado.precio;
    }else {
    this.elementoSeleccionado.cantidad++;
    this.pedido.push(this.elementoSeleccionado);
    this.totalPedido = this.totalPedido + this.elementoSeleccionado.precio;
    }
    
  }
  public delComanda(linea: any){
    if(this.pedido[linea].cantidad == 1){
      this.pedido[linea].cantidad--;
      this.totalPedido = this.totalPedido - this.pedido[linea].precio;
      this.pedido.splice(linea,1);
    }else{
      this.pedido[linea].cantidad--;
      this.totalPedido = this.totalPedido - this.pedido[linea].precio;
    }
 
  }

}
