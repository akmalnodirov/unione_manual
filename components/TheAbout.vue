<template>
   <div
     class="flex flex-col justify-center items-center bg-gradient-to-b from-[rgba(39,40,41,0.5)] to-[rgba(209,209,202,0.3)] p-6 "
   >
     <div class="text-center">
       <h1 class="text-4xl max-md:text-2xl font-bold mb-4 text-custom-color">
         ABOUT OUR SERVICES
       </h1>
       <div class="w-48 h-2 bg-red-900 mx-auto mb-6"></div>
     </div>
 
     <div
       class="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-6 space-y-6 md:space-y-0"
     >
       <div class="mb-4 md:mb-0 flex justify-center">
         <img
           src="../assets/imgs/clockc.png"
           alt="clock"
           class="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
         />
       </div>
       <ul class="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7 mr-2" />
           Consulting Service
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7  mr-2" />
           Monitoring
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7 mr-2" />
           Individual work with each driver
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7  mr-2" />
           Preparing monthly audit
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7 mr-2" />
           24/7 Eld Support
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7 mr-2" />
           Transport Canada Certified
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7 mr-2" />
           U.S. and Canadian rule set support
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7  mr-2" />
           Accurate & error-free HOS logs
         </li>
         <li class="li-custom">
           <img src="../assets/imgs/tickk.png" alt="icon" class="w-7  mr-2" />
           Supported on Android and iOS devices
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
   font-size: 1.125rem; /* 18px */
   display: flex;
   align-items: center;
   color: #272829;
   font-weight: 700;
 }
 
 @media (min-width: 640px) {
   .li-custom {
     font-size: 1.25rem; /* 20px */
   }
 }
 
 @media (min-width: 768px) {
   .li-custom {
     font-size: 1.5rem; /* 24px */
   }
 }
 
 @media (min-width: 1024px) {
   .li-custom {
     font-size: 1.75rem; /* 28px */
   }
 }
 
 @media (min-width: 1280px) {
   .li-custom {
     font-size: 2rem; /* 32px */
   }
 }
 </style>
 