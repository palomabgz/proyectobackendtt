import usersServices from '../services/users.services.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await usersServices.getAllUsers();
        console.log(users);
        if(users.length === 0) {
            return res
                .status(404)
                .json({ error: 'No se encontraron usuarios' });
        }
    res.status(200).json({ message: 'Listado de usuarios', payload: users});
} catch (error) {
    res.status(500)
    .json({ message: 'Error al obtener los usuarios', error: error.message });
}
}

const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        if (!name || !email) {
            return res
                .status(400)
                .json({ error: 'Todos los campos son requeridos' });
    }
    const newUser = await usersServices.createUser({ name, email });
    res.status(201).json(newUser);
} catch (error) {
    res.status(500)
    .json({ message: 'Error al crear el usuario', error: error.message });
}}

const updateUser = async (req, res) => {
const { id } = req.params;
const { name, email } = req.body;

    try {
        if (!id) {
            return res
                .status(400)
                .json({ error: 'El ID es requerido' });
        }
        const user = await usersServices.updateUser(id, name, email);

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

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await usersServices.getUserById(id);
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

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await usersServices.getUserById(id);
        if (!user) {
            return res
                .status(404)
                .json({ error: 'Usuario no encontrado' });
        }
        await usersServices.deleteUser(id);
        res.status(200).json({ message: 'Usuario eliminado', user: user });
    } catch (error) {
        res.status(500)
        .json({ message: 'Error al eliminar el usuario', error: error.message });
    }
}

export default {
    getAllUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser
}