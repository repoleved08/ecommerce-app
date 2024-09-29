import { defineStore } from "pinia";
import { productService } from "@/services/productService";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        product: null,
        loading: false,
        error: null,
    }),
    actions: {
        async getProducts() {
            this.loading = true;
            this.error = null;
            try {
                const response = await productService.getProducts();
                this.products = response.data;
                return response;
            } catch (error) {
                this.error = error.response?.data.error || "Error fetching products";
                return Promise.reject(this.error);
            } finally {
                this.loading = false;
            }
        },
        async getProduct(id) {
            this.loading = true;
            this.error = null;
            try {
                const response = await productService.getProduct(id);
                this.product = response.data;
                return response;
            } catch (error) {
                this.error = error.response?.data.error || "Error fetching product";
                return Promise.reject(this.error);
            } finally {
                this.loading = false;
            }
        },
        async createProduct(newProduct) {
            this.loading = true;
            this.error = null;
            try {
                const response = await productService.createProduct(newProduct);
                this.products.push(response.data);
                return response;
            } catch (error) {
                this.error = error.response?.data.error || "Error creating product";
                return Promise.reject(this.error);
            } finally {
                this.loading = false;
            }
        },
        async updateProduct(id, updatedProduct) {
            this.loading = true;
            this.error = null;
            try {
                const response = await productService.updateProduct(id, updatedProduct);
                const index = this.products.findIndex((product) => product.id === id);
                this.products[index] = response.data;
                return response;
            } catch (error) {
                this.error = error.response?.data.error || "Error updating product";
                return Promise.reject(this.error);
            } finally {
                this.loading = false;
            }
        },
        async deleteProduct(id) {
            this.loading = true;
            this.error = null;
            try {
                const response = await productService.deleteProduct(id);
                this.products = this.products.filter((product) => product.id !== id);
                return response;
            } catch (error) {
                this.error = error.response?.data.error || "Error deleting product";
                return Promise.reject(this.error);
            } finally {
                this.loading = false;
            }
        },
    },
});
