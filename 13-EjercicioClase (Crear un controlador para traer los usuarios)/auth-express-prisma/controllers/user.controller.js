const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.usuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
        select: { id: true, nombre: true, email: true, creadoEn: true }
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.usuarioPorId = async (req, res) => {
  try {
    const id = Number(req.params.id); 
    const usuario = await prisma.usuario.findUnique({
      where: { id },
      select: { id: true, nombre: true, email: true, creadoEn: true }
    });

    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    res.json(usuario);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};







