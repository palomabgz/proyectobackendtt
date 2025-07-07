# Proyecto BackEnd Talento Tech 2025

Este proyecto es una API RESTful construida con **Node.js** y **Express**, que gestiona un catálogo de productos. Está conectada a **Firebase** como base de datos y cuenta con autenticación utilizando **JWT (JSON Web Tokens)**.

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- Firebase (como base de datos)
- JWT para autenticación
- dotenv para variables de entorno
- CORS
- Nodemon (en desarrollo)


## 🚀 Instalación

1. Clonar el repositorio:

```bash
-git clone https://github.com/palomabgz/proyectobackendtt.git
-cd proyectobackendtt
-npm install
```

2. Configurar las variables de entorno:
````
Crea un archivo .env basado en .env.example, y completa los datos necesarios (como claves de Firebase, JWT_SECRET, etc.)
````

3. Iniciar el servidor en modo desarrollo:
````
-npm run dev o npm start
````

4. Autenticación:
````
Iniciar sesión o registrarse para obtener un token que luego se deberá enviar en el encabezado 'Authorization' en cada petición protegida:
" Authorization: Bearer <token> "
````

## 📌 Rutas del proyecto:
-POST /api/auth/login – Login de usuario.
-POST /api/auth/register - Registro de usuario.
-GET /api/products – Obtener productos.
-GET /api/products - Obtener producto por ID (protegida).
-POST /api/products – Crear producto (protegida).
-PUT /api/products - Actualizar producto (protegida).
-DELTE /api/products - Eliminar producto (protegida).

## 👩‍💻 Autora:
Paloma Belén González, Talento Tech 2025.
