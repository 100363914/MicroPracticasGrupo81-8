import { EstadoCoche } from "./estado-coche.enum";


export class Coche {
    marca:string;
    modelo:string;
    foto:string;
    fecha_modelo:Date;
    fecha_venta:Date;
    precio:number;
    estado: EstadoCoche;  


    constructor(marca:string, modelo:string, fecha_modelo:Date, fecha_venta:Date, precio:number, estado:EstadoCoche, foto?:string){
        this.marca = marca;
        this.modelo = modelo;
        this.fecha_modelo = fecha_modelo;
        this.fecha_venta = fecha_venta;       
        this.precio = precio;
        this.estado = estado;

        if (foto != undefined){
            this.foto = foto;
        }else{
            this.foto=''
        }
    }

    public getWords(){
        let words: string[] = [];
        words.push(...this.marca.split(' '));//... -> spread
        words.push(...this.modelo.split(' '));
        words.push(this.precio + '');
        words.push(this.estado);

        return words.map((value:string) => {
            return value.toLowerCase();
        });
    }

    public getPVP():number{
       return this.precio * 1.2;

    }

    public discount(){
        this.precio *= 0.9;
    }
    
}
