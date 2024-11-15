<template>
  <header class="top-0 left-0 w-full z-10 shadow-sm" style="background-color: rgb(209, 209, 202);">
    <!-- Desktop Navigation -->
   <div class="hidden lg:block h-[120px]"></div>

<!-- Fixed Navbar -->
<div class="hidden lg:flex flex-col fixed top-0 left-0 w-full  items-center z-50 shadow-md h-[120px]" style="background-color: rgb(209, 209, 202);">
   <div class="flex justify-center items-center w-[400px]">
      <img src="../assets/imgs/noroot.png" alt="Logo" />
   </div>
   <ul class="flex gap-8">
      <li class="navbar-li"><a href="#home"">Home</a></li>
      <li class="navbar-li"><a href="#features">Features</a></li>
      <li class="navbar-li"><a href="#about">About</a></li>
      <li class="navbar-li"><a href="#services">Services</a></li>
      <li class="navbar-li"><a href="#support">Support</a></li>
      <li class="navbar-li"><a href="#contact">Contacts</a></li>
      <li class="navbar-li"><a href="#" >+1(321)999-7776</a></li>
   </ul>
</div>

    <!-- Mobile Menu Button -->
    <div class="w-full flex lg:hidden justify-end items-center p-4  bg-black">
      <button @click="toggleMenu" class="text-xl font-bold text-white">
        &#9776;
      </button>
    </div>

    <!-- Mobile Menu -->
<div v-if="isMenuOpen" class="w-full ">
  <div class="w-full flex justify-end lg:hidden absolute top-1 right-2  p-1 bg-black">
  <button @click="toggleMenu" class="text-4xl ml-1 font-bold text-white">&times;</button>
  </div>
  <div class="h-[465px]  inset-0  bg-white flex flex-col items-center">
    <div class="w-[359px] mb-4 mt-10">
    <img src="../assets/imgs/noroot.png" alt="Logo" />
  </div>
  <ul class="flex flex-col items-center gap-4">
    <li class="navbar-li"><a href="#">Home</a></li>
    <li class="navbar-li"><a href="#">Features</a></li>
    <li class="navbar-li"><a href="#">About</a></li>
    <li class="navbar-li"><a href="#">Services</a></li>
    <li class="navbar-li"><a href="#">Support</a></li>
    <li class="navbar-li"><a href="#">Contacts</a></li>
    <li class="navbar-li"><a href="#">+1(321)999-7776</a></li>
  </ul>
  </div>
</div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<style scoped>
.navbar-li a {
  color: rgb(158, 25, 36);
  font-size: 18px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s;
}

.navbar-li a:hover {
  color: black;
}
</style>
