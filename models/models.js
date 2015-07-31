var path = require('path');

//Cargar modelo ORM
var Sequelize = require('sequelize');

//usar BBDD SQLite
var sequelize = new Sequelize(null, null, null, {dialect: "sqlite", storage: "quiz.sqlite"});

//Importa la definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz;//exporta la definicion de la tabla Quiz

//sequelize.sycn() crea e inicializa tabla de preguntajs en DB
sequelize.sync().success(function () {
  // success(...) ejecuta el manajador una vez creada la tabla
  Quiz.count().success(function (count) {
    if(count === 0){ // la tabla se inicializa solo si esta vacia
      Quiz.create({ pregunta: 'Caital de Italia',
                    respuesta: 'Roma'
                  })
      .success(function () {console.log('Base de datos inicializada')});
    };
  });
});
