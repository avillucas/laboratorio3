function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
/***/ 
var lista = [];
var txtNombre;
var txtEdad;
/**
 * Determina la asignacion del manejador
 */
function asignarManejadores()
{    
    //var frm = document.forms[0];
    //var frm = document.forms['frmalta'];
    var frm = document.getElementById('frmalta')
    frm.addEventListener('submit',manejarEnvio,false);
    txtNombre = document.getElementById('txtnombre');
    txtEdad = document.getElementById('txtedad');    
}
/***
 * Manejador del envio 
 ***/
function manejarEnvio(event)
{    
    event.preventDefault();
    cargarLista(); 
}
/** 
 * Carga la tabla
 **/
function cargarLista()
{
    //tomar los valores 
    var persona = new Persona(txtNombre.value,parseInt(txtEdad.value));
    lista.push(persona);      
    refrescarVista();  
}

/**
 * Muestra la lista en una tabla
 */
function refrescarVista()
{
    var tabla = '<table id="tablapersonas"><tr><th>Nombre</th><th>Edad</th></tr>';
    for(var i in lista){
        var persona = lista[i];
        tabla += '</tr><td>'+persona.nombre+'</td><td>'+persona.edad+'</td></tr>';
    }
    tabla += '</table>';
    document.getElementById('divtabla').innerHTML = tabla;
}


// disparador de todos los eventos
window.addEventListener('load',asignarManejadores,false);

