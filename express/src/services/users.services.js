const users = [];

const getAllUsers = () => {
    return users;
}

const createUser = (user) => {
    const newUser = new User (user.name, user.email);
    users.push(newUser);
    return
        newUser;
}

const updateUser = (id, name) => {
    const userFound = users.find(user => user.id === id);
    if (!userFound) {
        return null;
    }
    userFound.name = name;
    return
        userFound;
}

export default { getAllUsers, createUser, updateUser };