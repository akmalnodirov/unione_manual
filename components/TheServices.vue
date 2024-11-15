<template>
   <div class="flex flex-col justify-center items-center bg-gradient-to-b from-[rgba(209,209,202,0.3)] to-[rgba(39,40,41,0.5)] p-6">
     <!-- Header Section -->
     <div class="text-center">
       <h1 class="text-4xl md:text-3xl sm:text-2xl font-bold mb-4 text-custom-color">SERVICES</h1>
       <div class="w-24 h-2 bg-red-900 mx-auto mb-6"></div>
       <div class="my-4">
         <p class="text-2xl sm:text-xl font-bold">Choose Your Plan</p>
         <p class="font-normal mt-3 text-base sm:text-sm">
           Make an order for a month or just for one week and get free delivery
         </p>
       </div>
     </div>
 
     <!-- Plans Section -->
     <div class="flex flex-wrap justify-center gap-6 lg:gap-12 mt-12">
       <!-- Plan Cards -->
       <div
         v-for="plan in plans"
         :key="plan.title"
         class="w-full sm:w-80 flex flex-col items-center h-auto sm:h-[700px] rounded-lg"
         style="border: 1px solid rgba(0, 0, 0, 0); background-color: rgba(209, 209, 202);"
       >
         <!-- Plan Header -->
         <div class="w-full bg-[#44444D] flex flex-col justify-center items-center pb-8 pt-6 rounded-t-lg">
           <h2 class="text-white text-2xl lg:text-3xl" style="font-family: Georgia;">
             {{ plan.title }}
           </h2>
           <div class="w-24 h-1 mx-auto my-3" style="background-color: #9E1924;"></div>
           <p class="text-white text-lg lg:text-xl">{{ plan.billingCycle }}</p>
         </div>
 
         <!-- Plan Features List -->
        <div class="flex flex-col justify-between  h-full">
          <ul class="mt-4 w-full p-4 space-y-3 flex-col  text-base sm:text-lg font-semibold">
           <li v-for="feature in plan.features" :key="feature" class="flex items-start justify-start gap-2">
             <img src="../assets/imgs/tickk.png" alt="img" class="w-5 sm:w-7" />
             <span>{{ feature }}</span>
           </li>
         </ul>
 
         <!-- Access Button -->
         <button class="m-5   bg-[#44444D] py-3 px-10 sm:px-16 text-white font-bold rounded-3xl ">
           ACCESS
         </button>
        </div>
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
 // Define the plans array with titles, billing cycles, and features for each plan
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
 </script>
 
 <style scoped> 
 /* Styling for list items to align items with icons and add spacing */
 li {
   display: flex;
   gap: 8px;
   align-self: start;
   font-size: 18px;
   font-weight: 600;
 }
 
 /* Button hover effect for better interactivity */
 button:hover {
   background-color: rgb(102, 18, 18);
   
 }
 </style>
 