const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

// Registro
exports.register = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const existe = await prisma.usuario.findUnique({
        where: { email },
    });
    if (existe){
        return res.status(400).json({ msg: "El email ya existe" });
    }else{
        const hashed = await bcrypt.hash(password, 10);
        const usuario = await prisma.usuario.create({
            data: { nombre, email, password: hashed },
        });
        res.json({ msg: "Usuario registrado", usuario });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await prisma.usuario.findUnique({
            where: { email },
        });
        if (!usuario){
            return res.status(400).json({ msg: "Credenciales inválidas" });
        }else{
            const valid = await bcrypt.compare(password, usuario.password);
            if (!valid){
                return res.status(400).json({ msg: "Contraseña incorrecta" });
            }else{             
                const token = jwt.sign(
                    {
                        id: usuario.id,
                        email: usuario.email,
                    },
                    JWT_SECRET,
                    { expiresIn: "2h" }
                );
                res.json({ msg: "Login exitoso", token });
            }
        }
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};