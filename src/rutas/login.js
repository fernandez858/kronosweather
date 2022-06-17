const express = require('express');
const LoginControl = require('../controles/LoginControl');
const ControlFavoritos = require('../controles/ControlFavoritos');

const router = express.Router();

router.get('/login', LoginControl.login);
router.post('/login', LoginControl.auth);
//router.post('/', LoginControl.auth);
router.get('/registro', LoginControl.registro);
router.post('/registro', LoginControl.registraUsuario);
router.get('/logout', LoginControl.logout);

router.post('/guarda_cordenada', ControlFavoritos.registraCordenadas);

module.exports = router;

