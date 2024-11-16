<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = ref([
  'https://static.tildacdn.net/tild3239-6464-4634-a337-613363396439/2.jpg',
  'https://static.tildacdn.net/tild6632-6334-4465-b464-616538353132/7.jpg',
  'https://static.tildacdn.net/tild6436-6662-4962-a536-353166303861/10.jpg',
  'https://static.tildacdn.net/tild3631-6536-4130-a362-386635656538/6.jpg',
]);

const isVisible = ref(false);
const hasAnimated = ref(false);

const swiperOptions = {
  modules: [Navigation],
  navigation: true,
  loop: false,
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        isVisible.value = true;
        hasAnimated.value = true; 
      }
    });
  }, { threshold: 0.3 }); 

  const section = document.querySelector('.features-section');
  if (section) {
    observer.observe(section);
  }
});
</script>

<template>
  <div class="features-section min-h-screen pt-12 bg-gradient-to-b from-[rgba(209,209,202,0.3)] to-[rgba(39,40,41,0.5)]">
    <div class="w-full max-w-xs mx-auto mb-8" :class="{ 'fade-in': isVisible }">
      <h1 class="text-3xl max-md:text-2xl font-bold mb-4 text-center text-custom-color">
        FEATURES
      </h1>
      <div class="w-32 h-2 bg-red-900 mx-auto"></div>
    </div>

    <div class="flex flex-col justify-center items-center lg:flex-row w-full max-w-7xl mx-auto px-4 gap-8">
      <div class="w-full lg:w-1/2" :class="{ 'slide-in-left': isVisible }">
        <Swiper v-bind="swiperOptions" class="w-full">
          <SwiperSlide v-for="(image, index) in images" :key="index" class="w-full">
            <div class="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img :src="image" alt="Slide image" class="w-full h-auto object-cover" />
              <div class="p-4">
                <!-- Add your content here -->
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="w-full lg:w-1/2" :class="{ 'slide-in-right': isVisible }">
        <div class="text-center">
          <h2 class="text-2xl max-md:text-xl font-bold mb-4 text-custom-color text-[#272829]" style="letter-spacing: 2px;">
            A Comprehensive ELD Solution
          </h2>
          <div class="w-full px-4 h-1 bg-red-900 mx-auto mb-6"></div>
          <p class="text-sm md:text-lg mb-6 text-[#272829]">
            Our platform provides teams with full toolkit of functionality to manage your fleet easily and safety
          </p>
          <ul class="space-y-3 text-left max-w-lg mx-auto">
            <li v-for="(_, index) in 9" :key="index" 
                class="li-custom text-sm md:text-base"
                :class="{ 'fade-in': isVisible }"
                :style="{ animationDelay: `${index * 0.1 + 0.5}s` }">
              <img src="../assets/imgs/tickk.png" alt="icon" class="w-5 md:w-7 mr-2" />
              <span v-if="index === 0">Consulting Service</span>
              <span v-else-if="index === 1">Monitoring</span>
              <span v-else-if="index === 2">Individual work with each driver</span>
              <span v-else-if="index === 3">Preparing monthly audit</span>
              <span v-else-if="index === 4">24/7 Eld Support</span>
              <span v-else-if="index === 5">Transport Canada Certified</span>
              <span v-else-if="index === 6">U.S. and Canadian rule set support</span>
              <span v-else-if="index === 7">Accurate & error-free HOS logs</span>
              <span v-else-if="index === 8">Supported on Android and iOS devices</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.li-custom {
  display: flex;
  align-items: center;
  color: #272829;
  font-weight: 700;
  opacity: 0;
  transform: translateY(20px);
}

/* Swiper custom styles */
:deep(.swiper) {
  width: 100%;
  height: 100%;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #7f1d1d;
  transform: scale(0.7);
}

@media (max-width: 768px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    transform: scale(0.5);
  }
}

@media (max-width: 450px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    transform: scale(0.4);
  }
}

.swiper-slide {
  @apply transition-transform duration-300 ease-in-out;
}

.swiper-slide:hover {
  @apply scale-105;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.slide-in-left {
  opacity: 0;
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  opacity: 0;
  animation: slideInRight 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>