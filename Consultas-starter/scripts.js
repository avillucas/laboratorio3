//console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */


var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos

soluciones.usuariosFemeninos = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Female';
    })
    .map(function(user){
        return user.nombre;
    });
}
//console.log("Retornar un array con los nombres de los usuarios femeninos");
//console.log(soluciones.usuariosFemeninos(data));

// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Male';
    })
    .map(function(user){
        return user.email;
    });   
}
//console.log(" Retornar un array de strings (el email de los usuarios de sexo masculino)");
//console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function(usuarios, edad){
    return usuarios
    .filter(function(user){
        return user.edad > edad;
    })
    .map(function(user){
        return [
            user.nombre,
            user.email,
            user.edad
         ] ;
    });   
}
//console.log("Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que edad");
//console.log(soluciones.usuariosMayores(data, 40));

// Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.
soluciones.usuarioMasGrande = function(usuarios){        
    var data = 
    usuarios    
    .reduce(function(usuarioPrevio , usuarioActual){
        console.info(usuarioPrevio , usuarioActual);
        if(usuarioActual.edad > usuarioPrevio.edad)
        {
            return usuarioPrevio;
        }
        else
        {
            return usuarioActual;
        }
    })
    .map(user => [user.nombre,user.edad]);     
    //.map(user =>  [user.nombre, user.edad]);
    return data;
}
//console.log("Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.");
console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function(usuarios){  
    return usuarios.reduce((previo,actual) =>  previo+actual, 0) / usuarios.length;   
}

//console.log("Promedio edad usuarios " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function(usuarios){
    
    console.info(usuarios
        .filter(user => user.genero === "Male"));
    return usuarios
    .filter(user => user.genero === "Male")
    .reduce((previo, actual)=> previo + actual) / usuarios.lenght;  
   
}
//console.log("Promedio edad Varones " + soluciones.promedioVarones(data));

 // Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function(usuarios){
    return usuarios
    .filter(user => user.genero === "Female")
    .reduce((previo, actual)=> previo + actual) / usuarios.lenght;    
}

//console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));