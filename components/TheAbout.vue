<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const hasAnimated = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        isVisible.value = true;
        hasAnimated.value = true;
      }
    });
  }, { threshold: 0.3 });

  const section = document.querySelector('.about-services-section');
  if (section) {
    observer.observe(section);
  }
});
</script>

<template>
  <div class="about-services-section flex flex-col justify-center items-center bg-gradient-to-b from-[rgba(39,40,41,0.5)] to-[rgba(209,209,202,0.3)] p-6">
    <div class="text-center" :class="{ 'fade-in': isVisible }">
      <h1 class="text-4xl max-md:text-2xl font-bold mb-4 text-custom-color">
        ABOUT OUR SERVICES
      </h1>
      <div class="w-48 h-2 bg-red-900 mx-auto mb-6"></div>
    </div>

    <div class="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
      <div class="mb-4 md:mb-0 flex justify-center" :class="{ 'slide-in-left': isVisible }">
        <img
          src="../assets/imgs/clockc.png"
          alt="clock"
          class="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
        />
      </div>
      
      <ul class="h-full space-y-5 text-base md:text-lg lg:text-xl xl:text-2xl mt-4 flex flex-col justify-center">
        <li v-for="(item, index) in 9" :key="index" 
            class="li-custom"
            :class="{ 'fade-in': isVisible }"
            :style="{ animationDelay: `${index * 0.1 + 0.5}s` }">
          <img src="../assets/imgs/tickk.png" alt="icon" class="w-7 mr-2" />
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
</template>

<style scoped>
.text-custom-color {
  color: #272829;
  font-weight: 700;
}

.li-custom {
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  color: #272829;
  font-weight: 700;
  opacity: 0;
  transform: translateY(20px);
}

@media (min-width: 640px) {
  .li-custom {
    font-size: 1.25rem;
  }
}

@media (min-width: 768px) {
  .li-custom {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .li-custom {
    font-size: 1.75rem;
  }
}

@media (min-width: 1280px) {
  .li-custom {
    font-size: 2rem;
  }
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.slide-in-left {
  opacity: 0;
  animation: slideInLeft 0.8s ease-out forwards;
}

/* Animation keyframes */
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
</style>