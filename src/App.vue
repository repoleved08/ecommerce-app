<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

onMounted(async () => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
        await cartStore.getCart(); // Fetch the cart for the user
    }
});
</script>

<template>
  <div class="dark:bg-gray-800 dark:border-gray-700 bg-white">
    <header>
      <div>
        <nav>
          <Navbar />
        </nav>
      </div>
    </header>
    <RouterView />
    <Footer />
  </div>
</template>
