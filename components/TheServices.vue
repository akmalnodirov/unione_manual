<template>
  <div class="services-section flex flex-col justify-center pb-4 items-center bg-gradient-to-b from-[rgba(209,209,202,0.3)] to-[rgba(39,40,41,0.5)] p-6">
    <!-- Header Section -->
    <div class="text-center" :class="{ 'fade-in': isVisible }">
      <h1 class="text-4xl md:text-3xl sm:text-2xl font-bold mb-4 text-custom-color" style="letter-spacing: 2px; color: rgb(39, 40, 41);">
        SERVICES
      </h1>
      <div class="w-24 h-2 bg-red-900 mx-auto mb-6"></div>
      <div class="my-4">
        <p class="text-2xl sm:text-3xl font-bold" style="letter-spacing: 2px;">
          Choose Your Plan
        </p>
        <p class="font-normal mt-3 text-base sm:text-sm leading-3" style="letter-spacing: 1px;">
          Make an order for a month or just for one week and get free delivery
        </p>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-6 lg:gap-12 mt-12">
      <div
        v-for="(plan, index) in plans"
        :key="plan.title"
        class="w-full sm:w-80 flex flex-col items-center h-auto sm:h-[700px] rounded-lg card-animation"
        :class="{ 'slide-up': isVisible }"
        :style="{
          'animation-delay': `${index * 0.2}s`,
          'border': '1px solid rgba(0, 0, 0, 0)',
          'background-color': 'rgba(209, 209, 202)'
        }"
      >
        <div class="w-full bg-[#44444D] flex flex-col justify-center items-center pb-8 pt-6 rounded-t-sm">
          <h2 class="text-white text-2xl lg:text-3xl" style="font-family: Georgia;">
            {{ plan.title }}
          </h2>
          <div class="w-24 h-1 mx-auto my-3" style="background-color: #9E1924;"></div>
          <p class="text-white text-lg lg:text-xl">{{ plan.billingCycle }}</p>
        </div>

        <div class="flex flex-col justify-between h-full">
          <ul class="mt-4 w-full p-4 space-y-3 flex-col text-base sm:text-lg font-semibold">
            <li 
              v-for="(feature, featureIndex) in plan.features" 
              :key="feature" 
              class="feature-item flex items-start justify-start gap-2 text-[#272829]"
              :class="{ 'fade-in': isVisible }"
              :style="{ 'animation-delay': `${index * 0.2 + featureIndex * 0.1 + 0.3}s` }"
            >
              <img src="../assets/imgs/tickk.png" alt="img" class="w-5 sm:w-7" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <button 
            class="m-5 bg-[#44444D] py-3 px-10 sm:px-16 text-white font-bold rounded-3xl button-animation"
            :class="{ 'fade-in': isVisible }"
            :style="{ 'animation-delay': `${index * 0.2 + 0.8}s` }"
          >
            <a href="#contact">ACCESS</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
const hasAnimated = ref(false);

const plans = [
  {
    title: "Economy",
    billingCycle: "Billed Monthly",
    features: ["Electronic Logbook", "Electronic DVIR", "Fleet Manager Portal", "GPS Fleet Tracking", "IFTA reporting"]
  },
  {
    title: "Premium",
    billingCycle: "Billed Monthly",
    features: ["24/7 support", "Monitoring logbook", "Electronic Logbook", "Electronic DVIR", "Fleet Manager Portal", "GPS Fleet Tracking", "IFTA reporting"]
  },
  {
    title: "Business",
    billingCycle: "Billed Monthly",
    features: ["Dispatch can monitoring", "Macro Point", "24/7 support", "Monitoring logbook", "Electronic Logbook", "Electronic DVIR", "Fleet Manager Portal", "GPS Fleet Tracking", "IFTA reporting"]
  }
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        isVisible.value = true;
        hasAnimated.value = true;
      }
    });
  }, { threshold: 0.3 });

  const section = document.querySelector('.services-section');
  if (section) {
    observer.observe(section);
  }
});
</script>

<style scoped>
li {
  display: flex;
  gap: 8px;
  align-self: start;
  font-size: 18px;
  font-weight: 600;
  opacity: 0;
}

button:hover {
  background-color: rgb(102, 18, 18);
}

.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.slide-up {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
}

.button-animation {
  opacity: 0;
  transform: translateY(20px);
}

.card-animation {
  opacity: 0;
  transform: translateY(50px);
}

.feature-item {
  opacity: 0;
  transform: translateX(-20px);
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>