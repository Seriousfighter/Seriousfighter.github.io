<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-lg">
            <nav class="max-w-[841px] mx-auto px-4 sm:px-6 lg:px-[178px]">
                <div class="flex justify-between items-center h-[70px]">
                    <!-- Company Name -->
                    <div class="flex-shrink-0">
                        <h1 class="font-inter font-bold text-[32px] leading-[39px]">LOGO</h1>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center gap-[66px]">
                        <router-link 
                            v-for="(link, index) in navigationLinks"
                            :key="index" 
                            :to="link.to"
                            class="font-inter text-[15px] hover:pointer font-medium text-black hover:bg-GreenOne hover:rounded-xl hover:px-2 transition-all">
                            {{ link.name }}
                        </router-link>

                        
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden">
                        <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                                class="text-black hover:text-GreenOne transition-all">
                            <span class="sr-only">Open menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                    d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <div v-show="isMobileMenuOpen" 
                    class="md:hidden py-4">
                    <div class="flex flex-col gap-4">
                        <router-link 
                                v-for="(link, index) in navigationLinks"
                                :key="index"
                                :to="link.to"
                                class="font-inter text-[15px] font-medium text-black hover:bg-GreenOne cursor-pointer hover:rounded-xl hover:px-2 transition-all">
                            {{ link.name }}
                    </router-link>
                       
                        
                    </div>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="flex-grow">
            <slot />
        </main>

        <!-- Footer -->
        <FooterCustom :footerLinks="footerLinks" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import FooterCustom from './FooterCustom.vue'

defineProps({
    canLogin: {
        type: Boolean,
    },
});
const isMobileMenuOpen = ref(false)

const navigationLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' },
]

const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' }
]
</script>