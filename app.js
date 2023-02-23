var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'users_db',
    user: 'root',
    password: ''
});

conexion.connect(function (error) {
    if (error) {
        throw error;
    }else {
        console.log('Conexion exitosa VAMOS!!!!!!!!!!!');
    }
});

//Mostrar

conexion.query('SELECT * from users', function(error,results, fields){
    if (error) {
        throw error;
    }else{
        results.forEach(result => {
            console.log(result)
        });
    }
});

//funcion insertar

/* conexion.query('INSERT INTO users(name, last_name) VALUES ("Adam", "Galindo")', function(error, results){
    if (error) {
        throw error;
    }else{
        console.log('Registro Agregado Vamos!!!!!!!', results)
    }
}); */


//Actualizar

/* conexion.query('UPDATE users SET name = "Luna", last_name = "Rogers" WHERE id=5', function(error, results){
    if (error) {
        throw error;
    }else{
        console.log('Registro Actualizado Vamos!!!', results);
    }
}) */

//Borrar

conexion.query('DELETE FROM users WHERE id=2', function(error, results){
    if (error) {
        throw error
    }else{
        console.log('Registro Borrado Vamos!!!', results);
    }
})


conexion.end();