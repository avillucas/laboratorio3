namespace Clases{
    export abstract class Animal{
        protected _patas:number ;
        protected _edad:number ;
        protected _nombre:string;
        
        constructor(nombre:string, patas:number, edad:number)
        {       
            this._nombre = nombre;
            this._patas = patas;
            this._edad = edad;                
        }

        public toJSON():string{
            let json: string = `{"nombre":"${this._nombre}", "edad":${this._edad},"patas":${this._patas}}`;
            return json;
        }
        
        public get patas():number
        {
            return this._patas;
        }

        public get edad():number
        {
            return this._edad;
        }

        public get nombre():string
        {
            return this._nombre;
        }
        
    }
}