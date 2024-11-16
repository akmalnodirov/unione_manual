<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
      <!-- Modal close button -->
      <button
        @click="closeModal"
        class="absolute top-3 right-3 text-gray-600 hover:text-red-600"
      >
        &times;
      </button>

      <!-- Logo -->
      <div class="flex justify-center mb-4">
        <img src="/" alt="Route ELD System" class="w-20 h-20" />
      </div>

      <!-- Title -->
      <h2 class="text-xl font-semibold text-red-700 text-center mb-2">
        Get a free Access
      </h2>
      <p class="text-center text-sm text-gray-500 mb-4">Drive with us Legal</p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            v-model="form.email"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            v-model="form.name"
          />
        </div>
        <div class="mb-4">
          <input
            type="tel"
            placeholder="Phone"
            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            v-model="form.phone"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>

      <p class="text-center text-gray-500 mt-3 text-sm">It's totally free</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(true)
const form = ref({ email: '', name: '', phone: '' })

const closeModal = () => {
  isOpen.value = false
  localStorage.setItem('modal-shown', 'true') // Yopilgandan keyin qayta ko‘rsatmaslik uchun belgilanadi
}

const handleSubmit = () => {
  console.log('Form data:', form.value)
  alert('Form submitted!')
}
</script>
