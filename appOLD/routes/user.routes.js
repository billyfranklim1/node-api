const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers","Origin, Content-Type, Accept");
    next();
  });
  app.get("/api/user/:id", [authJwt.verifyToken], controller.getUser);
  app.get('/api/user',[authJwt.verifyToken],controller.getUsers);
  app.post('/api/user',[authJwt.verifyToken],controller.createUser);
  app.put('/api/user',[authJwt.verifyToken],controller.updateUser);
  app.delete('/api/user/:id',[authJwt.verifyToken],controller.delete);
};

