<template>
    <div class="bg-white dark:bg-gray-900 ">
        <!-- Mobile menu -->
        <TransitionRoot as="template" :show="open">
            <Dialog class="relative z-40 lg:hidden" @close="open = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                        enter-from="-translate-x-full" enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                        leave-to="-translate-x-full">
                        <DialogPanel
                            class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-700 pb-12 shadow-xl">
                            <div class="flex px-4 pb-2 pt-5">
                                <button type="button"
                                    class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                    @click="open = false">
                                    <span class="absolute -inset-0.5" />
                                    <span class="sr-only">Close menu</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <!-- Links -->
                            <TabGroup as="div" class="mt-2">
                                <div class="border-b border-gray-200">
                                    <TabList class="-mb-px flex space-x-8 px-4">
                                        <Tab as="template" v-for="category in navigation.categories"
                                            :key="category.name" v-slot="{ selected }">
                                            <button
                                                :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900', 'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium']">{{
                                                    category.name }}</button>
                                        </Tab>
                                    </TabList>
                                </div>
                                <TabPanels as="template">
                                    <TabPanel v-for="category in navigation.categories" :key="category.name"
                                        class="space-y-10 px-4 pb-8 pt-10">
                                        <div class="grid grid-cols-2 gap-x-4">
                                            <div v-for="item in category.featured" :key="item.name"
                                                class="group relative text-sm">
                                                <div
                                                    class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img :src="item.imageSrc" :alt="item.imageAlt"
                                                        class="object-cover object-center" />
                                                </div>
                                                <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                                    <span class="absolute inset-0 z-10" aria-hidden="true" />
                                                    {{ item.name }}
                                                </a>
                                                <p aria-hidden="true" class="mt-1">Shop now</p>
                                            </div>
                                        </div>
                                        <div v-for="section in category.sections" :key="section.name">
                                            <p :id="`${category.id}-${section.id}-heading-mobile`"
                                                class="font-medium text-gray-900">{{ section.name }}</p>
                                            <ul role="list"
                                                :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                                                class="mt-6 flex flex-col space-y-6">
                                                <li v-for="item in section.items" :key="item.name" class="flow-root">
                                                    <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{
                                                        item.name }}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>

                            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                                    <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name
                                        }}</a>
                                </div>
                            </div>

                            <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div class="flow-root">
                                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                                </div>
                                <div class="flow-root">
                                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
                                </div>
                            </div>

                            <div class="border-t border-gray-200 px-4 py-6">
                                <a href="#" class="-m-2 flex items-center p-2">
                                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt=""
                                        class="block h-auto w-5 flex-shrink-0" />
                                    <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                    <span class="sr-only">, change currency</span>
                                </a>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <header class="relative z-40 bg-white dark:bg-gray-900 dark:shadow-md">
            <p
                class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                Get free delivery on orders over $100
            </p>

            <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="border-b border-gray-200 dark:border-gray-700">
                    <div class="flex h-16 items-center">
                        <button type="button"
                            class="relative rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 dark:text-gray-300 lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-150"
                            @click="open = true">
                            <span class="sr-only">Open menu</span>
                            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                        </button>

                        <!-- Logo -->
                        <div class="ml-4 flex lg:ml-0">
                            <a href="#">
                                <span class="sr-only">Your Company</span>
                                <img class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Company Logo" />
                            </a>
                        </div>

                        <!-- Flyout menus -->
                        <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div class="flex h-full space-x-8">
                                <Popover v-for="category in navigation.categories" :key="category.name" class="flex"
                                    v-slot="{ open }">
                                    <div class="relative flex">
                                        <PopoverButton
                                            :class="[open ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">
                                            {{ category.name }}</PopoverButton>
                                    </div>

                                    <transition enter-active-class="transition ease-out duration-200"
                                        enter-from-class="opacity-0" enter-to-class="opacity-100"
                                        leave-active-class="transition ease-in duration-150"
                                        leave-from-class="opacity-100" leave-to-class="opacity-0">
                                        <PopoverPanel
                                            class="absolute inset-x-0 top-full text-sm text-gray-500 dark:text-gray-300">
                                            <div class="absolute inset-0 top-1/2 bg-white dark:bg-gray-800 shadow"
                                                aria-hidden="true" />
                                            <div class="relative bg-white dark:bg-gray-800">
                                                <div class="mx-auto max-w-7xl px-8">
                                                    <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                                            <div v-for="item in category.featured" :key="item.name"
                                                                class="group relative text-base sm:text-sm">
                                                                <div
                                                                    class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:opacity-75">
                                                                    <img :src="item.imageSrc" :alt="item.imageAlt"
                                                                        class="object-cover object-center" />
                                                                </div>
                                                                <a :href="item.href"
                                                                    class="mt-6 block font-medium text-gray-900 dark:text-gray-100">
                                                                    <span class="absolute inset-0 z-10"
                                                                        aria-hidden="true" />
                                                                    {{ item.name }}
                                                                </a>
                                                                <p aria-hidden="true" class="mt-1">Shop now</p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                            <div v-for="section in category.sections"
                                                                :key="section.name">
                                                                <p :id="`${section.name}-heading`"
                                                                    class="font-medium text-gray-900 dark:text-gray-200">
                                                                    {{ section.name }}</p>
                                                                <ul role="list"
                                                                    :aria-labelledby="`${section.name}-heading`"
                                                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                    <li v-for="item in section.items" :key="item.name"
                                                                        class="flex">
                                                                        <a :href="item.href"
                                                                            class="hover:text-gray-800 dark:hover:text-gray-300">{{
                                                                                item.name }}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </transition>
                                </Popover>

                                <a v-for="page in navigation.pages" :key="page.name" :href="page.href"
                                    class="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">{{
                                        page.name }}</a>
                            </div>
                        </PopoverGroup>

                        <div class="ml-auto flex items-center">
                            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <button @click="toggleTheme" type="button"
                                    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 transition-all">
                                    <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                                        </path>
                                    </svg>
                                    <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <a href="#"
                                    class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">Sign
                                    in</a>
                                <span class="h-6 w-px bg-gray-200 dark:bg-gray-600" aria-hidden="true" />
                                <a href="#"
                                    class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">Create
                                    account</a>
                            </div>

                            <div class="hidden lg:ml-8 lg:flex">
                                <a href="#"
                                    class="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
                                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="Canada Flag"
                                        class="block h-auto w-5 flex-shrink-0" />
                                    <span class="ml-3 block text-sm font-medium">CAD</span>
                                    <span class="sr-only">, change currency</span>
                                </a>
                            </div>

                            <!-- Search -->
                            <div class="flex lg:ml-6">
                                <a href="#"
                                    class="p-2 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200">
                                    <span class="sr-only">Search</span>
                                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                                </a>
                            </div>

                            <!-- Cart
                            <div class="ml-4 flow-root lg:ml-6">
                                <a href="#" class="group -m-2 flex items-center p-2">
                                    <ShoppingBagIcon
                                        class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-200"
                                        aria-hidden="true" />
                                    <span
                                        class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">0</span>
                                    <span class="sr-only">items in cart, view bag</span>
                                </a>
                            </div> -->
                            <!-- Cart -->
                            <div ref="dropdownContainer" class="relative ml-4 flow-root lg:ml-6">
                                <button @click="toggleDropdown" class="group -m-2 flex items-center p-2"
                                    aria-haspopup="true" aria-expanded="dropdownOpen.toString()">
                                    <ShoppingBagIcon
                                        class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-200"
                                        aria-hidden="true" />
                                    <span
                                        class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">{{
                                        cartItems.length }}</span>
                                    <span class="sr-only">items in cart, view bag</span>
                                </button>

                                <!-- Dropdown Menu -->
                                <div v-if="dropdownOpen" ref="dropdownMenu"
                                    class="absolute right-0 z-10 mt-4 w-80 rounded-md bg-white dark:bg-gray-800 shadow-xl ring-1 ring-black ring-opacity-5">
                                    <div class="py-4 px-4" role="menu" aria-orientation="vertical"
                                        aria-labelledby="dropdown-button">
                                        <!-- Cart Items -->
                                        <template v-if="cartItems.length" v-for="item in cartItems" :key="item.id">
                                            <div
                                                class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                                                <!-- Product Image (Placeholder) -->
                                                <img src="https://via.placeholder.com/50" alt="item-image"
                                                    class="w-12 h-12 rounded-lg object-cover">
                                                <!-- Product Info -->
                                                <div class="ml-4">
                                                    <p class="text-gray-800 dark:text-gray-200">{{ item.name }}</p>
                                                    <p class="text-sm text-gray-500 dark:text-gray-400">Quantity: {{
                                                        item.quantity }}</p>
                                                </div>
                                                <!-- Product Price (Placeholder) -->
                                                <p class="text-gray-800 dark:text-gray-200 font-medium">$10.00</p>
                                                <!-- Custom Trash Icon -->
                                                <button @click="removeItem(item.id)"
                                                    class="ml-4 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500">
                                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </template>

                                        <!-- If Cart is Empty -->
                                        <p v-else class="text-center text-gray-500 dark:text-gray-400 py-4">Your cart is
                                            empty.</p>

                                        <!-- Subtotal and Actions -->
                                        <div class="mt-4">
                                            <div
                                                class="flex justify-between items-center py-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                                                <span>Total:</span>
                                                <!-- Placeholder total, adjust accordingly -->
                                                <span>$30.00</span>
                                            </div>
                                            <!-- Checkout and Continue Shopping Links -->
                                            <div
                                                class="flex flex-col space-y-2 mt-4 sm:flex-row sm:space-y-0 sm:space-x-2">
                                                <!-- Continue Shopping -->
                                                <a href="/continue-shopping"
                                                    class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 text-sm text-center sm:text-left">
                                                    Continue Shopping
                                                </a>
                                                <!-- Proceed to Checkout -->
                                                <button
                                                    class="bg-indigo-600 dark:bg-indigo-500 text-white px-2 py-2 rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-400 w-full sm:w-auto text-center">
                                                    Proceed to Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Create a reactive variable for dark mode state
const isDark = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
    }
}

// Check for saved theme preference or system preference
onMounted(() => {
    if (localStorage.getItem('color-theme') === 'dark' ||
        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    } else {
        isDark.value = false
        document.documentElement.classList.remove('dark')
    }
})

import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Dresses', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Denim', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}

const open = ref(false)

//import { TrashIcon } from '@heroicons/vue/outline'

const dropdownOpen = ref(false)

// Hardcoded cart items
const cartItems = ref([
    { id: 1, name: 'Product 1', quantity: 2 },
    { id: 2, name: 'Product 2', quantity: 1 },
    { id: 3, name: 'Product 3', quantity: 3 },
])

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

const removeItem = (id) => {
    cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>
