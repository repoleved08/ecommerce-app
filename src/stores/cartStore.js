import { defineStore } from 'pinia'
import { cartService } from '@/services/cartService'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        loading: false,
        error: null,
    }),
    actions: {
        async getCart() {
            this.loading = true
            this.error = null
            try {
                const response = await cartService.getCart()
                this.cart = response.data
                return response
            } catch (error) {
                this.error = error.response?.data.error || 'Error fetching cart'
                return Promise.reject(this.error)
            } finally {
                this.loading = false
            }
        },
        async addToCart(productId) {
            this.loading = true
            this.error = null
            try {
                const response = await cartService.addToCart(productId)
                console.log(response.data)
                this.cart.push(response.data)
                return response
            } catch (error) {
                this.error = error.response?.data.error || 'Error adding to cart'
                return Promise.reject(this.error)
            } finally {
                this.loading = false
            }
        },
        async removeFromCart(productId) {
            this.loading = true
            this.error = null
            try {
                const response = await cartService.removeFromCart(productId)
                this.cart = this.cart.filter((item) => item.product_id !== productId)
                return response
            } catch (error) {
                this.error = error.response?.data.error || 'Error removing from cart'
                return Promise.reject(this.error)
            } finally {
                this.loading = false
            }
        },
        async clearCart() {
            this.loading = true
            this.error = null
            try {
                const response = await cartService.clearCart()
                this.cart = []
                return response
            } catch (error) {
                this.error = error.response?.data.error || 'Error clearing cart'
                return Promise.reject(this.error)
            } finally {
                this.loading = false
            }
        },
    },
})
