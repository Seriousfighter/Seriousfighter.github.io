<template>
    
        <JoinSection />
        
        <!-- Reviews Section -->
        <section class="py-16 px-4 sm:px-6 lg:px-8">
            <div class="max-w-[841px] mx-auto">
                <h2 class="font-inter text-[32px] font-bold text-center mb-[66px]">
                    What Our Clients Say
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <UserReviewSection
                        v-for="review in reviews"
                        :key="review.id"
                        :clientName="review.name"
                        :testimony="review.testimony"
                        :rating="review.rating"
                    />
                </div>
            </div>
        </section>
    
</template>

<script setup>

import JoinSection from '../components/sections/JoinSection.vue'
import UserReviewSection from '../components/sections/UserReviewSection.vue'

const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        testimony: "Exceptional service! The team went above and beyond my expectations. Would highly recommend to anyone.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        testimony: "Very professional and responsive. The quality of work is outstanding.",
        rating: 4
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        testimony: "Great experience working with this team. They delivered exactly what we needed.",
        rating: 5
    }
]
</script>