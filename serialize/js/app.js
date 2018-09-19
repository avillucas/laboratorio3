//
function traerAutos()
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            document.getElementById('preloader').setAttribute('style','display:none;')
            if(this.status == 200)
            {                
                var autos = JSON.parse(this.responseText);                        
                document.getElementById('tabla').innerHTML = hacerTabla(autos);

            }else{
                console.log("Error:"+this.status+":"+this.statusText);
            }
        }

    };        
    xhr.open('GET','autos.php',true);    
    xhr.send();
    document.getElementById('preloader').setAttribute('style','display:block;')
}
/*
function cagarPersona()
{ 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            document.getElementById('preloader').setAttribute('style','display:none;')
            if(this.status == 200)
            {
                var data =  this.responseText;
                var persona = JSON.parse(data);                        
            }else{
                console.log("Error:"+this.status+":"+this.statusText);
            }
        }

    };    
    var form = document.getElementById('frmPersona');
    var data = new FormData(form);
    xhr.open('POST','1.php',true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(data);
    document.getElementById('preloader').setAttribute('style','display:block;')
}
*/
function hacerTabla(jsonData)
{
    //mookaroo
    var tabla = '<table>';
    tabla += '<tr><th>ID</th><th>marca</th><th>modelo</th><th>A&ntilde;o</th></th>';    
    for(var i in jsonData)
    {
        tabla += '<tr><td>'+jsonData[i].id+'</th><th>'+jsonData[i].marca+'</th><th>'+jsonData[i].modelo+'</th><th>'+jsonData[i].anio+'</th></th>';    
    }
    tabla += '<table>';
    return tabla;
}
/*
function manejarSubmit(event)
{
    event.preventDefault();    
    cagarPersona();
}
*/


//
function manejador()
{
    traerAutos();
}
//
addEventListener('load',manejador,false);