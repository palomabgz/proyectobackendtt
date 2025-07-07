import jwt from 'jsonwebtoken';
import { verifyToken } from '../utils/jwt.js';

const SECRET_KEY = process.env.SECRET_KEY;

export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user;
        next();
    });
    } else {
        res.status(401).json({ message: 'No autorizado, token faltante' });
    }
};

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1]; // Espera formato "Bearer <token>"

    const payload = verifyToken(token);

    if (!payload) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }

    req.user = payload; // lo que viene en el token (ejemplo: username)

    next();
};