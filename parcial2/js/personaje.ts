///<reference path="enumerados.ts"/>

namespace Clases{

export abstract class Personaje{
    public nombre:string;
    public edad:number;
   

    //hacer constructor
    constructor(nombre:string , edad:number)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    public toJSON():string{
        let json: string = `{"nombre":"${this.nombre}", "edad":${this.edad}}`;
        return json;
    }

}

}