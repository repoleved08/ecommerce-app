import apiClient from "./api";

export const orderService = {
    getOrders() {
        return apiClient.get("/orders/create");
    },
    getOrder(id) {
        return apiClient.get(`/orders/${id}`);
    },
    createOrder(newOrder) {
        return apiClient.post("/orders", newOrder);
    },
    updateOrder(id, updatedOrder) {
        return apiClient.put(`/orders/${id}`, updatedOrder);
    },
    deleteOrder(id) {
        return apiClient.delete(`/orders/${id}`);
    },
};
