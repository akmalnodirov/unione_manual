<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl relative animate-fade-in">
      <button 
      @click="$emit('update:modelValue', false)"
      class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
    >
        <span class="sr-only">Yopish</span>
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex justify-center mb-6">
        <img 
          src="../assets/imgs/image.png" 
          alt="Route ELD System" 
          class="w-24 h-24 object-contain"
        />
      </div>

      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">
          Get Free Access
        </h2>
        <p class="text-gray-500">Start your journey with Route ELD</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <div class="relative">
            <input
              type="email"
              required
              placeholder="Email address"
              :class="[
                'w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all',
                errors.email 
                  ? 'border-red-300 focus:ring-red-200' 
                  : 'border-gray-200 focus:ring-blue-100'
              ]"
              v-model="form.email"
              @blur="validateEmail"
            />
            <div v-if="errors.email" class="absolute right-3 top-3 text-red-500">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <p v-if="errors.email" class="mt-2 text-sm text-red-500">{{ errors.email }}</p>
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Full name"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            v-model="form.name"
          />
        </div>

        <div>
          <input
            type="tel"
            required
            placeholder="Phone number"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            v-model="form.phone"
          />
        </div>

        <button
          type="submit"
          :disabled="isSubmitting || Object.keys(errors).length > 0"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isSubmitting" class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Yuborilmoqda...
          </span>
          <span v-else>Get Started</span>
        </button>
      </form>

      <p class="text-center text-gray-500 mt-6 text-sm">
        By signing up, you agree to our 
        <a href="#" class="text-blue-600 hover:underline">Terms</a> and 
        <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const form = ref({
  email: '',
  name: '',
  phone: ''
})

const errors = reactive({
  email: ''
})

const isSubmitting = ref(false)

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!form.value.email) {
    errors.email = 'Email kiritish majburiy'
  } else if (!emailRegex.test(form.value.email)) {
    errors.email = 'Notogri email formati'
  } else {
    errors.email = ''
  }
}

const handleSubmit = async () => {
  validateEmail()
  if (errors.email) return

  isSubmitting.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    localStorage.setItem('modal-shown', 'true')
    emit('update:modelValue', false)
    
    form.value = {
      email: '',
      name: '',
      phone: ''
    }
  } catch (error) {
    console.error('Xatolik yuz berdi:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>