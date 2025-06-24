import { User } from "../models/users.model.js";
const users = [];

const getAllUsers = () => {
    return users;
}

const getUserById = (id) => {
    return users.find(user => user.id === id);
}

const createUser = (user) => {
    const newUser = new User (user.name, user.email);
    users.push(newUser);
    return
        newUser;
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