import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const usersFilePath = join(__dirname, '../data/users.json');

const getAllUsers = async () => {
    try {
        const data = await fs.readFile(usersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log("Error al leer el archivo");
        return [];
    }
};

const saveUsers = async (users) => {
    try {
        await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
    } catch (error) {
        console.log("Error al guardar el archivo");
    }
};

export default { getAllUsers, saveUsers };