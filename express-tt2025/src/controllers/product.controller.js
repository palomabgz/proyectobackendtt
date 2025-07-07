import productServices from "../services/product.services.js";

const getProducts = async (req, res) => {
    try {
        const products = await productServices.getAll();
        res.status(200).json({ message: 'Listado de productos', payload: products });
    } catch (error) {
        res.status(500)
        .json({ message: 'Error al obtener los productos', error: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const { nombre, precio, disponible } = req.body

        const newProduct = { 
            nombre, 
            precio:+precio, 
            disponible: disponible || false
        };

        const product = await productServices.createProduct(newProduct);
        res.status(200).json({ message: 'Producto creado', payload: product });
    } catch (error) {
        res.status(500)
        .json({ message: 'Error al crear el producto', error: error.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productServices.getProduct(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto obtenido', payload: product });
    } catch (error) {
        res.status(500)
        .json({ message: 'Error al obtener el producto', error: error.message });
    }
}

const productUpdated = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productServices.productUpdated(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto actualizado', payload: product });
    } catch (error) {
        res.status(500)
        .json({ message: 'Error al actualizar el producto', error: error.message });
    }
}

const productDeleted = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productServices.productDeleted(id);
        res.status(200).json({ message: 'Producto eliminado', payload: product });
    } catch (error) {
        if (error.message === 'Producto no encontrado') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500)
        .json({ message: 'Error al eliminar el producto', error: error.message });
    }
}

export default { getProducts, createProduct, getProductById, productUpdated, productDeleted };