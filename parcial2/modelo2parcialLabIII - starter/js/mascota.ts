///<reference path="animal.ts"/>
namespace Clases{
    export class Mascota extends Animal{    
        private _id:number;
        private _tipo:Clases.tipoMascota;

        constructor(id:number, nombre:string, edad:number, patas:number,tipo:Clases.tipoMascota){
            super(nombre, patas, edad);
            this._id = id;
            this._tipo = tipo;
        }

        public get id():number
        {
            return this._id;
        }

        public get tipo():Clases.tipoMascota
        {
            return this._tipo;
        }

        public toJSON():string
        {
            let json: string = `{"id":"${this._id}","tipo":"${this._tipo}","nombre":"${this._nombre}", "edad":${this._edad},"patas":${this._patas}}`;
            return json;            
        }
    }
}

