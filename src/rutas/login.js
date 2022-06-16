const express = require('express');
const LoginControl = require('../controles/LoginControl');

const router = express.Router();

router.get('/login', LoginControl.login);
router.post('/login', LoginControl.auth);
//router.post('/', LoginControl.auth);
router.get('/registro', LoginControl.registro);
router.post('/registro', LoginControl.registraUsuario);
router.get('/logout', LoginControl.logout);

module.exports = router;

