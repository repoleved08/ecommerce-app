import apiClient from "./api";

export const cartService = {
    getCart() {
        return apiClient.get("/cart");
    },
    addToCart(productId, quantity = 1) {
        return apiClient.post(`/cart/${productId}`, { quantity });
    },
    removeFromCart(productId) {
        return apiClient.delete(`/cart/${productId}`);
    },
    clearCart() {
        return apiClient.delete("/cart");
    },
};
