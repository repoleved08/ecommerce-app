import apiClient from "./api";

export const productService = {
    getProducts() {
        return apiClient.get("/products");
    },
    getProduct(id) {
        return apiClient.get(`/products/${id}`);
    },
    createProduct(newProduct) {
        return apiClient.post("/products", newProduct);
    },
    updateProduct(id, updatedProduct) {
        return apiClient.put(`/products/${id}`, updatedProduct);
    },
    deleteProduct(id) {
        return apiClient.delete(`/products/${id}`);
    },
};
