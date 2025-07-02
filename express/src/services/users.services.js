import { User } from "../models/users.model.js";
import db from "../config/db.js";

const getAllUsers = async () => {
    return await db.getAllUsers();
}

const getUserById = (id) => {
    return db.users.find(user => user.id === id);
}

const createUser = async (user) => {
    const users = await db.getAllUsers();
    const newUser = new User ({ name: user.name, email: user.email });
    users.push(newUser);

    await db.saveUsers(users);
    return newUser;
}

const updateUser = (id, name) => {
    const userFound = getUserById(id);
    if (!userFound) {
        return null;
    }
    userFound.name = name;
    return
        userFound;
}

export default { getAllUsers, createUser, updateUser, getUserById };