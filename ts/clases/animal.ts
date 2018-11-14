/// <reference path="./mamifero.ts" />
class Animal extends Mamifero{
    private patas:number = 4;
    private nombre:string;
    constructor(patas:number , nombre:string, colorPelo:string){
        super(colorPelo);
        this.patas = patas;
        this.nombre = nombre;    
    }
    get cantidadPatas():number
    {
        return this.patas;
    }

    set cantidadPatas(nuevaCantidadPatas:number)
    {
        this.patas = nuevaCantidadPatas;
    }
}


