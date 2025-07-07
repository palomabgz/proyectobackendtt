import { generateToken } from '../utils/jwt.js';

export const loginController = (req, res) => {
    const { username, password } = req.body;

    if (username === 'usuario1' && password === '1234') {
        const payload = { username };

        const token = generateToken(payload);

        res.json({ token: `Bearer ${token}` });
    } else {
        res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }
};
