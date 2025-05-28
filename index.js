// Paloma Belén González, Pre-entrega (Proyecto Back End, Talento Tech 2025).

const method = process.argv[2];
const id = process.argv[3];
const url = "https://fakestoreapi.com/products";

// GET:
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log (data);
    } catch (error) {
        console.log("No se pudo obtener los productos", error);
    }
}

// GET PRODUCT:
const fetchProduct = async (url, id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// POST:
const postData = async (url) => {
    const product = { title: "Nuevo producto", price: 1000 };
    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    };
    try {
        const response = await fetch(url, config);
        const data = await response.json();
        console.log("Producto creado",data);
    } catch (error) {
        console.error("No se pudo crear el producto:", error);
    }
};

// DELETE:
const deleteData = async (url, id) => {
    try {
        const response = await fetch(`${url}/${id}`, 
        { method: "DELETE" });

        const data = await response.json();
        console.log("Producto eliminado", data);
    } catch (error) {
        console.error("No se pudo eliminar el producto:", error);
    }
};

switch (method) {
    case "get":
        fetchData(url); 
        break;
    case "getProduct":
        fetchProduct(url, id); 
        break;
    case "post":
        postData(url); 
        break;
    case "delete":
        deleteData(url, id);
        break;
    default:
        console.log("Método no válido");
}