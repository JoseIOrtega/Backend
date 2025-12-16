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

exports.eliminarUsuario = async (req, res) => {
  try {
    const id = req.user.id;
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario){
      return res.status(404).json({ msg: "Usuario no encontrado" });
    } 
    await prisma.usuario.delete({ where: { id } });
    res.json({ msg: "Tu cuenta ha sido eliminada correctamente" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
      const id = req.user.id; // ID desde el JWT
      const { nombre, email } = req.body;
      if (!nombre && !email) {
          return res.status(400).json({ msg: "No hay datos para actualizar" });
      }
      const usuario = await prisma.usuario.findUnique({
          where: { id }
      });
      if (!usuario) {
          return res.status(404).json({ msg: "Usuario no encontrado" });
      }
      const usuarioActualizado = await prisma.usuario.update({
          where: { id },
          data: {
            ...(nombre && { nombre }),
            ...(email && { email })
          },
          select: {
              id: true,
              nombre: true,
              email: true,
              creadoEn: true
          }
      });
      res.json({
          msg: "Usuario actualizado correctamente",
          usuario: usuarioActualizado
      });
  }catch (error) {
      if (error.code === "P2002") {
            return res.status(400).json({ msg: "El email ya está en uso" });
      }
      res.status(500).json({ error: error.message });
  }
};
