const express = require("express");
const router = express.Router();

const {usuarios,usuarioPorId,eliminarUsuario,actualizarUsuario} = require("../controllers/user.controller");
const auth=require("../middleware/auth.middleware");

router.get("/usuarios", auth,usuarios)
//router.get("/usuarios",usuarios)

router.get("/usuarios/:id", auth, usuarioPorId);
//router.get("/usuarios/:id", usuarioPorId);

router.delete("/usuarios/eliminar", auth, eliminarUsuario);
router.patch("/usuarios/actualizar", auth, actualizarUsuario);

module.exports = router;



