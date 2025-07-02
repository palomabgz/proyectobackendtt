import { User } from "../models/users.model.js";
import db from "../config/db.js";

const getAllUsers = async () => {
    return await db.getAllUsers();
}

const getUserById = async (id) => {
    const users = await db.getAllUsers();
    return users.find(user => user.id === id);
}

const createUser = async (user) => {
    const users = await db.getAllUsers();
    const newUser = new User ({ name: user.name, email: user.email });
    users.push(newUser);

    await db.saveUsers(users);
    return newUser;
}

const updateUser = async (id, name, email) => {
    const users = await db.getAllUsers();
    const userFound = users.find(user => user.id === id);
    if (!userFound) {
        return null;
    }
    if (name !== undefined) {
        userFound.user.name = name;
    }

    if (email !== undefined) {
        userFound.user.email = email;
    }

    await db.saveUsers(users);

    return userFound;
}

const deleteUser = async (id) => {
    const users = await db.getAllUsers();
    const usersFiltered = users.filter(user => user.id !== id);
    await db.saveUsers(usersFiltered);
}

export default { getAllUsers, createUser, updateUser, getUserById, deleteUser };