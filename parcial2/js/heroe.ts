//realizar codigo de la clase "Heroe". el metodo toJSON es parte de la clase y es provisto en el starter
///<reference path="personaje.ts"/>
namespace Clases{

    export class Heroe extends Personaje{

        public id:number;
        public tipo:Clases.tipoHeroe;
        public poder_principal:string;

        constructor( id:number, tipo:Clases.tipoHeroe, nombre:string, edad:number, poder_principal:string )
        {
            super(nombre,edad);
            this.id = id;
            this.tipo = tipo;
            this.poder_principal = poder_principal;
        }

        public toJSON():string{
            let cad:string = super.toJSON().replace('}', '');                      

            let json:string = cad + `, "id":${this.id}, "tipo":${this.tipo.toString()}, "poder_principal":"${this.poder_principal}"}`;
            return json;
        }
}
}

