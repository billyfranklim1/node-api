const express = require ('express');
const router = express.Router();

const userController = require('../userController');

// create group with prefix /api/users
router.route('/api/users')
    .get(userController.getUsers)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.delete);





router.post('/', userController.createUser);


// importa controlador 'apiController.js' da pasta: 
// '../controllers/apiController'
const apiController = require('../apiController');
// url do teste será: http://localhost:5000/api/teste
router.get('/teste', apiController.test);
// TODO: listar pontos de interesse da BD
router.get('/details',apiController.details);
// TODO: adicionar novo ponto de interesse
router.post('/interest',apiController.add);
// TODO: atualizar ponto de interesse
router.put('/interest/:id',apiController.update);

router.get('/interest/:id',apiController.findById);
// TODO: apagar ponto de interesse
router.delete('/interest/:id',apiController.delete);

module.exports = router;