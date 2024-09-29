import { defineStore } from 'pinia';
import { userService } from '@/services/userService';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        loading: false,
        error: null,
        token: localStorage.getItem('token') || null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        // Pinia Store (userStore.js)
        async login(credentials) {
            this.loading = true;
            this.error = null;
            try {
                const response = await userService.login(credentials);

                const token = response.data.token.token;
                const user = response.data.token.user;

                // Store token
                localStorage.setItem('token', token);
                this.token = token;
                this.user = user;

                return response;
            } catch (error) {
                this.error = error.response?.data.error || "Login failed";
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            // Remove token from localStorage and state
            localStorage.removeItem('token');
            this.token = null;
            this.user = null;
        },
        async register(newUser) {
            this.loading = true;
            this.error = null;
            try {
                const response = await userService.register(newUser);
                this.user = response.data;
                return response;
            } catch (error) {
                this.error = error.response?.data.error || error.message || 'Error registering user';
                return Promise.reject(this.error); // Return the error for further handling in the component
            } finally {
                this.loading = false;
            }
        },
        // async getUserProfile() {
        //   const response = await userService.getUserProfile();
        //   this.user = response.data;
        //   return response;
        // },
    },
});
