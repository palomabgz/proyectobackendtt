import { generateToken } from '../utils/jwt.js';

const users = [];

export const registerController = (req, res) => {
    const { username, password } = req.body;

    // Validar que el usuario no exista
    const userExists = users.find(u => u.username === username);
    if (userExists) {
        return res.status(409).json({ message: 'El usuario ya existe' });
    }

    // Guardar usuario nuevo
    users.push({ username, password });

    res.status(201).json({ message: 'Usuario creado correctamente' });
};

export const loginController = (req, res) => {
    const { username, password } = req.body;

    // Buscar usuario en memoria
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    const payload = { username };
    const token = generateToken(payload);

    res.json({ token: `Bearer ${token}` });
};


