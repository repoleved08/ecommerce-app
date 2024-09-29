import apiClient from "./api";

export const userService = {
    login(credentials) {
        return apiClient.post("/users/login", credentials);
    },
    logout() {
        return apiClient.post("/users/logout");
    },
    register(newUser) {
        return apiClient.post("/users/create", newUser);
    },
    getUserProfile() {
        return apiClient.get("/users/profile");
    },
};
