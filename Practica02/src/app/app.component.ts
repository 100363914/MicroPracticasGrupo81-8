import { Component, OnInit } from '@angular/core';
import {Coche} from './coche'
import { EstadoCoche } from './estado-coche.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Practica02';
  filterWords = '';
  
  coches:Array<Coche>= [
    new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,EstadoCoche.MALO),
    new Coche('tesla','model 3',new Date(2019,11,1),new Date(2020,11,1),49000,EstadoCoche.BUENO, './assets/images/tesla-model-3.png'),
    new Coche('toyota','fortuner',new Date(2021,10,1),new Date(2021,3,1),38000,EstadoCoche.BUENO, './assets/images/4runner.png')
  ]

  getFiltred(search:string){
    search = search.toLowerCase();
    return this.coches.filter((coche:Coche) => {
      let listOfWords = coche.getWords();
      let filterWords = search.split(' ');

      for(let key of filterWords){
        for(let exampleWord of listOfWords){
          if(exampleWord.indexOf(key) == 0){
            return true;
          }
        }
      }
      return false;
    });
  }


  
  discountCoche(index:number){
    this.coches[index].discount();
  }

  deleteCoche(index:number){
    this.coches.splice(index,1);
  }
  
  
  

}
