const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');


const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.post('/registro', (req, res) => {
  const { nombre, apellido, direccion, correo, telefono, user, contra } = req.body;

  const sql = 'INSERT INTO registro (nombre, apellido, direccion, correo, telefono, user, contra) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const connection = mysql.createConnection({
    host: 'localhost',      
    user: 'root',     
    password: '12345', 
    database: 'stack' 
  });

 
  app.post('/iniciar', (req, res) => {
    const { user, contra } = req.body;

    const query = 'SELECT * FROM registro WHERE user = ?';
    connection.query(query, [user], (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos: ' + err.message);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        if (results.length === 1) {
          const usu = results[0];
          if (contra === usu.contra) {
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
          } else {
            res.status(401).json({ error: 'Credenciales incorrectas' });
          }
        } else {
          res.status(401).json({ error: 'Credenciales incorrectas' });
        }
      }
    });
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos: ' + err.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      const selectQuery = 'SELECT correo FROM registro WHERE correo = ?';
      connection.query(selectQuery, [correo], (err, results) => {
        if (err) {
          console.error('Error al verificar el correo electrónico: ' + err.message);
          res.status(500).json({ error: 'Error interno del servidor' });
        } else if (results.length > 0) {
          res.status(400).json({ error: 'Este correo electrónico ya está registrado' });
        } else {
          const selectUniqueQuery = 'SELECT nombre FROM registro WHERE nombre = ?';
          connection.query(selectUniqueQuery, [nombre], (err, uniqueResults) => {
            if (err) {
              console.error('Error al verificar nombre: ' + err.message);
              res.status(500).json({ error: 'Error interno del servidor' });
            } else if (uniqueResults.length > 0) {
              res.status(400).json({ error: 'Nombre ya registrados' });
            } else {
              const insertQuery = 'INSERT INTO registro (nombre, apellido, direccion, correo, telefono, user, contra) VALUES (?, ?, ?, ?, ?, ?, ?)';
              connection.query(insertQuery, [ nombre, apellido, direccion, correo, telefono, user, contra], (err, results) => {
                if (err) {
                  console.error('Error al insertar datos en la base de datos: ' + err.message);
                  res.status(500).json({ error: 'Error interno del servidor' });
                } else {
                  console.log("Registro correcto");
                  res.status(200).json({ message: 'Registro exitoso' });
                }
              });
            }
          });
        }
      });
    }
  });  
});

app.listen(3001, () => {
  console.log('Servidor en ejecución en el puerto 3001');
});  