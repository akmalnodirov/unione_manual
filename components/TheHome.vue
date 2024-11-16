<template>
  <div class="relative w-full h-[90vh]">
    <img
      class="w-full h-full object-cover"
      src="../assets/imgs/download.png"
      alt="truck"
    />

    <div class="absolute inset-0 bg-black bg-opacity-70"></div>

    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
    >
      <h1 class="w-[50%] text-2xl md:text-4xl lg:text-6xl max-md:w-[90%] font-bold leading-6" style="letter-spacing: 2px;" >
        We help you navigate your complex business environment
      </h1>
    </div>

    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center cursor-pointer"
    >
      <button @click="scrollToSection" class="focus:outline-none">
        <svg
          class="animate-bounce w-8 h-8 md:w-10 md:h-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const targetSection = ref(null);

const scrollToSection = () => {
  const nextSection = document.getElementById('features');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
button:hover {
  background: none;
  box-shadow: none;
}

button:focus {
  outline: none;
}

.bg-opacity-50 {
  transition: background-color 0.3s ease;
}
</style>
