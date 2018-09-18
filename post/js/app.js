//
function cagarPersona()
{
 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var data =  this.responseText;
            var persona = JSON.parse(data);            
            //document.getElementById('txtNombre').setAttribute('value',persona.nombre) ;
            //document.getElementById('txtEdad').setAttribute('value',persona.edad) ;
        }

    };
    var data = getData();
    xhr.open('POST','1.php',true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}
function getData()
{
    var edad = document.getElementById('txtEdad').value;
    var nombre =document.getElementById('txtNombre').value;    
    return "nombre="+encodeURIComponent(nombre)+'&edad='+encodeURIComponent(edad);    
}
//
function manejador()
{
    document.getElementById('btnCargarPersona').addEventListener('click',cagarPersona,true);
}
//
addEventListener('load',manejador,false);