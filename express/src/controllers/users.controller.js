import usersServices from '../services/users.services.js';

const getAllUsers = (req, res) => {
    const users = usersServices.getAllUsers();
    res.status(200).json(users);
}

const createUser = (req, res) => {
    const { name, email } = req.body;
    try {
        if (!name || !email) {
            return res
                .status(400)
                .json({ error: 'Todos los campos son requeridos' });
    }
    const newUser = usersServices.createUser({ name, email });
    res.status(201).json(newUser);
} catch (error) {
    res.status(500)
    .json({ message: 'Error al crear el usuario', error: error.message });
}}

const updateUser = (req, res) => {
const { id } = req.params;
const { name } = req.body;

    try {
        if (!id) {
            return res
                .status(400)
                .json({ error: 'El ID es requerido' });
        }
        const user =usersServices.updateUser(id, name);

        if (!user) {
            return res
                .status(404)
                .json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario actualizado', user: user });
    } catch (error) {
        res.status(500)
        .json({ message: 'Error al actualizar el usuario', error: error.message });
    }
}

const getUserById = (req, res) => {
    const { id } = req.params;
    try {
        const user = usersServices.getUserById(id);
        if (!user) {
            return res
                .status(404)
                .json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500)
        .json({ message: 'Error al obtener el usuario', error: error.message });
    }
}

export default {
    getAllUsers,
    createUser,
    updateUser,
    getUserById
}