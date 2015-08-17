<<<<<<< HEAD
var models = require('../models/models.js');

exports.index = function (req, res) {
  models.Quiz.findAll().then(function (quizes) {
    res.render('quizes/index', { quizes: quizes});
  })
};

//GET /quizes/question
exports.show = function (req, res) {
  models.Quiz.find(req.params.quizId).then(function (quiz) {
      res.render('quizes/show', { quiz: quiz});
  })
=======
//GET /quizes/question
exports.question = function (req, res) {
  res.render('quizes/question', {pregunta: 'Capital de Italia'});
>>>>>>> parent of 3355238... Despliegue DB en Heroku
};

//GET /quizes/answer
exports.answer = function (req, res) {
<<<<<<< HEAD
  models.Quiz.find(req.params.quizId).then(function (quiz) {
    if(req.query.respuesta === quiz.respuesta){
      res.render('quizes/answer',
       { quiz: quiz, respuesta: 'Correcto'});
    }else{
      res.render('quizes/answer',
        { quiz: quiz, respuesta: 'Incorrecto'});
    }
  })
=======
  if(req.query.respuesta === "Roma"){
    res.render('quizes/answer', {respuesta: 'Correcto'});
  }else{
    res.render('quizes/answer', {respuesta: 'Inorrecto'});
  }
>>>>>>> parent of 3355238... Despliegue DB en Heroku
};
exports.author = function (req, res) {
  res.render('author');
}
