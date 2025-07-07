import db from "../config/db.js";
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const productCollection = collection(db, "productos");

const getAllProducts = async () => {
    try {
        const productList = await getDocs(productCollection);
        const products = [];
        productList.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.log(error);
    }
}

const saveProduct = async (product) => {
    try {
        const newProduct = await addDoc(productCollection, product);
        return newProduct;
    } catch (error) {
        throw new Error("Error al crear el producto", error.message);
    }
}

const getProductById = async (id) => {
    try {
        const product = await getDoc(doc(productCollection, id));
        if (!product.exists()) {
            throw new Error("Producto no encontrado");
        }
        return { id: product.id, ...product.data() };
    } catch (error) {
        throw new Error("Error al obtener el producto", error.message);
    }
}

const updateProduct = async (id, product) => {
    try {
        const productUpdated = doc(productCollection, id);
        const productData = await getDoc(productUpdated);
        if (!productData.exists()) {
            throw new Error("Producto no encontrado");
        }
        await updateDoc(productUpdated, product);
        return product;
    } catch (error) {
        throw new Error("Error al actualizar el producto", error.message);
    }
}

const deleteProduct = async (id) => {
    try {
        const productDeleted = doc(productCollection, id);
        const productData = await getDoc(productDeleted);
        if (!productData.exists()) {
            throw new Error("Producto no encontrado");
        }
        await deleteDoc(productDeleted);
        return { id, ...productData.data() };
    } catch (error) {
        throw new Error("Error al eliminar el producto", error.message);
    }
}

export { getAllProducts, saveProduct, getProductById, updateProduct, deleteProduct };