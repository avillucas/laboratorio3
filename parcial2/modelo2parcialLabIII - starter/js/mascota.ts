namespace Clases{
    export class Mascota extends Animal{    
        private _id:number;
        private _tipo:tipoMascota;

        constructor(id:number, nombre:string, edad:number, patas:number,tipo:tipoMascota){
            super(nombre, patas, edad);
            this._id = id;
            this._tipo = tipo;
        }

        public get id():number
        {
            return this._id;
        }

        public get tipo():tipoMascota
        {
            return this._tipo;
        }

    }
}

