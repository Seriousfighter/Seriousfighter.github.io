<template>
    
        <!-- Hero Section -->
        <HeroSection />

        <!-- Features Section -->
        <FeaturesSection />
        
        <!-- Subscribe Section -->
        <section class="bg-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ModalCustom />
            </div>
        </section>
    
</template>

<script setup>

import ModalCustom from '../components/ModalCustom.vue';
import HeroSection from '../components/sections/HeroSection.vue';
import FeaturesSection from '../components/sections/FeatureSection.vue';


</script>