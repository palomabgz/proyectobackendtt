import { getAllProducts, saveProduct, getProductById, updateProduct, deleteProduct } from "../models/product.model.js";

const getAll = async () => {
    return await getAllProducts();
}

const createProduct = async (product) => {
    return await saveProduct(product);
}

const getProduct = async (id) => {
    return await getProductById(id);
}

const productUpdated = async (id, product) => {
    return await updateProduct(id, product);
}

const productDeleted = async (id) => {
    return await deleteProduct(id);
}

export default { getAll, createProduct, getProduct, productUpdated, productDeleted };