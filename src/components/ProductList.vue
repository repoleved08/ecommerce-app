<template>
    <div class="bg-white dark:bg-gray-800">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        </h2>
  
        <!-- Products Grid -->
        <div v-if="showSkeleton" class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <!-- Display the skeleton loader if still loading -->
          <div v-for="n in 8" :key="n" class="group relative animate-pulse">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-600 lg:aspect-none lg:h-80">
              <div class="h-full w-full bg-gray-300"></div>
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
              </div>
              <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
            </div>
          </div>
        </div>
  
        <!-- Display actual products once data is fetched -->
        <div v-else class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-600 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.image_url" :alt="product.product_name"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700 dark:text-gray-300">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.product_name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ product.description }}</p>
              </div>
              <button @click="addToCart(product)"
                class="flex items-center z-20 justify-center w-8 h-8 text-gray-800 dark:text-white bg-blue-500 hover:bg-blue-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                </svg>
              </button>
              <p class="text-sm font-medium text-gray-900 dark:text-gray-200">$ {{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useProductStore } from '@/stores/productStore';
  import { useCartStore } from '@/stores/cartStore';  // Import cart store
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  
  const productStore = useProductStore();
  const products = computed(() => productStore.products);
  
  // Access the cart store
  const cartStore = useCartStore();
  
  // Control skeleton visibility
  const showSkeleton = ref(true);
  
  // Fetch products with a delay for skeleton
  onMounted(async () => {
    await productStore.getProducts();
  
    // Show skeleton for a bit longer (e.g., 1.5 seconds)
    setTimeout(() => {
      showSkeleton.value = false;
    }, 1500);
  });
  
  // Add product to the cart using cart store and show toast on success
  const addToCart = async (product) => {
    try {
      await cartStore.addToCart(product.id);
      toast.success(`Added ${product.product_name} to cart!`, { autoClose: 1000 });  // Show success toast
      console.log(`Added product to cart: ${product.product_name}`);
    } catch (error) {
      toast.error('Failed to add product to cart', { autoClose: 1000 });  // Show error toast
      console.error('Failed to add product to cart:', error);
    }
  };
  </script>
  