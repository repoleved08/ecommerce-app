<template>
    <div
        class="w-full max-w-sm mx-auto my-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <!-- Show error if any -->
        <p v-if="error" class="text-red-500 mb-4">{{ error }}</p>
        <form class="space-y-6" @submit.prevent="registerUser">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
            <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    username
                </label>
                <input type="text" name="username" id="username" v-model="form.username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="nameabc" required />
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    email
                </label>
                <input type="email" name="email" id="email" v-model="form.email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@gmail.com" required />
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    password
                </label>
                <input type="password" name="password" id="password" placeholder="••••••••" v-model="form.password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required />
            </div>

            <button type="submit" :disabled="loading"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{ loading ? 'Registering...' : 'Register your account' }} </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                already registered? <router-link :to="{ name: 'login' }"
                    class="text-blue-700 hover:underline dark:text-blue-500">Login to your account</router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {useUserStore} from '@/stores/userStore'

const userStore = useUserStore()
const router = useRouter()

const form = ref({
    username: '',
    email: '',
    password: ''
})

const error = computed(() => userStore.error)
const loading = computed(() => userStore.loading)

const registerUser = async () => {
    await userStore.register(form.value)
    if (!userStore.error) {
        alert('Registration successful. Please login to continue')
        router.push({ name: 'login' })
    }
}

</script>
