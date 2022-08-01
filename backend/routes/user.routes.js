const UserController = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

module.exports = (app)=> {
    const userController = new UserController()

    const router = require('express').Router();

    router.post('/create', userController.create)

    router.post("/login", auth.login)
    router.post("/testLogin", auth.authenticateToken)


    app.use('/api/users', router)
}