//
function leerTexto()
{
 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById('texto').innerHTML = this.responseText;            
        }

    };
    xhr.open('GET','data.json',true);
    xhr.send();
}
//
function manejador()
{
    document.getElementById('btnCargarTexto').addEventListener('click',leerTexto,true);
}
//
addEventListener('load',manejador,false);