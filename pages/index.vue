<template>
 <main>
    <TheHome id="home" />
    <TheFeatures id="features" />
    <TheAbout  id="about"/>
    <TheServices  id="services"/>
    <TheSupport id="support" />
    <TheContacts id="contact"/>
    <TheFormModal 
    v-if="showModal" 
    @close="closeModal"
  />
    <footer>
      <div class="w-full h-[7vh] flex justify-center items-center" style="background-color: rgba(39, 40, 41, 0.9)">
         <p class=" text-sm" style="color: rgb(255, 255, 255, 0.5);" >© 2023 All Right Reserved. Route Eld Service.</p>
      </div>
    </footer>
 </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showModal = ref(false)

onMounted(() => {
  const isModalShown = localStorage.getItem('modal-shown')

  if (!isModalShown) {
    setTimeout(() => {
      showModal.value = true
      // Modalni ko'rsatgandan so'ng localStorage'ga belgi qo'yamiz
      localStorage.setItem('modal-shown', 'true')
    }, 4000)
  }
})

// Modalni yopish uchun metod
const closeModal = () => {
  showModal.value = false
}
</script>
<style scoped></style>
