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
            console.info(persona);
            //document.getElementById('txtNombre').setAttribute('value',persona.nombre) ;
            //document.getElementById('txtEdad').setAttribute('value',persona.edad) ;
        }

    };
    var edad = document.getElementById('txtEdad').value;
    var nombre =document.getElementById('txtNombre').value;
    xhr.open('GET','1.php?nombre='+nombre+'&edad='+edad,true);
    xhr.send();
}
//
function manejador()
{
    document.getElementById('btnCargarPersona').addEventListener('click',cagarPersona,true);
}
//
addEventListener('load',manejador,false);