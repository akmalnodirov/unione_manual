<template>
  <header class="top-0 left-0 w-full z-10 shadow-sm" style="background-color: rgb(209, 209, 202);">
   <div class="hidden lg:block h-[120px]"></div>

<div class="hidden lg:flex flex-col fixed top-0 left-0 w-full  items-center z-50 shadow-md h-[120px]" style="background-color: rgb(209, 209, 202);">
   <div class="flex justify-center items-center w-[400px]">
      <img src="../assets/imgs/noroot.png" alt="Logo" />
   </div>
   <ul class="flex gap-8">
      <li class="navbar-li"><a href="#home" @click.prevent="scrollToSection('home')">Home</a></li>
      <li class="navbar-li"><a href="#features" @click.prevent="scrollToSection('features')">Features</a></li>
      <li class="navbar-li"><a href="#about" @click.prevent="scrollToSection('about')">About</a></li>
      <li class="navbar-li"><a href="#services" @click.prevent="scrollToSection('services')">Services</a></li>
      <li class="navbar-li"><a href="#support" @click.prevent="scrollToSection('support')">Support</a></li>
      <li class="navbar-li"><a href="#contact" @click.prevent="scrollToSection('contact')">Contacts</a></li>
      <li class="navbar-li"><a href="tel:+13219997776">+1(321)999-7776</a></li>
   </ul>
</div>

    <div class="w-full flex lg:hidden justify-end items-center p-4  bg-black">
      <button @click="toggleMenu" class="text-xl font-bold text-white">
        &#9776;
      </button>
    </div>

<div v-if="isMenuOpen" class="w-full ">
  <div class="w-full flex justify-end lg:hidden absolute top-1 right-2  p-1 bg-black">
  <button @click="toggleMenu" class="text-4xl ml-1 font-bold text-white">&times;</button>
  </div>
  <div class="h-[465px]  inset-0  bg-white flex flex-col items-center">
    <div class="w-[359px] mb-4 mt-10">
    <img src="../assets/imgs/noroot.png" alt="Logo" />
  </div>
  <ul class="flex flex-col items-center gap-4">
    <li class="navbar-li"><a href="#" @click.prevent="scrollToSection('home')" >Home</a></li>
    <li class="navbar-li"><a href="#" @click.prevent="scrollToSection('features')" >Features</a></li>
    <li class="navbar-li"><a href="#" @click.prevent="scrollToSection('about')" >About</a></li>
    <li class="navbar-li"><a href="#" @click.prevent="scrollToSection('services')" >Services</a></li>
    <li class="navbar-li"><a href="#" @click.prevent="scrollToSection('support')" >Support</a></li>
    <li class="navbar-li"><a @click.prevent="scrollToSection('contact')" >Contacts</a></li>
    <li class="navbar-li"><a href="tel:+13219997776">+1(321)999-7776</a></li>
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

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    isMenuOpen.value = false;
  }
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
  text-decoration: none;
}

.navbar-li a:hover {
  color: black;
}

#home, #features, #about, #services, #support, #contact {
  padding-top: 150px;
  margin-top: -150px;
}
</style>
