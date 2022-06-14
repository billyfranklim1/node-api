const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers","Origin, Content-Type, Accept");
    next();
  });
  // app.get("/api/test/all", controller.allAccess);
  app.get("/api/user/:id", [authJwt.verifyToken], controller.getUser);
  // app.get("/api/test/mod",[authJwt.verifyToken, authJwt.isModerator],controller.moderatorBoard);
  // app.get("/api/test/admin",[authJwt.verifyToken, authJwt.isAdmin],controller.adminBoard);
  // app.get('/user/:id', controller.getUser);
  app.get('/api/user',controller.getUsers);
  // app.post('/api/user',controller.createUser);
  // app.put('/api/user',controller.updateUser);
  // app.delete('/api/user/:id',controller.delete);
  // app.post('/login', controller.login);
};

