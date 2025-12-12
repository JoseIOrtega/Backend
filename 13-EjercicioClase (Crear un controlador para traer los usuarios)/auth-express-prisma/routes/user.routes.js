const express = require("express");
const router = express.Router();

const {usuarios,usuarioPorId} = require("../controllers/user.controller");
const auth=require("../middleware/auth.middleware");

router.get("/usuarios", auth,usuarios)
//router.get("/usuarios",usuarios)

router.get("/usuarios/:id", auth, usuarioPorId);
//router.get("/usuarios/:id", usuarioPorId);

module.exports = router;



