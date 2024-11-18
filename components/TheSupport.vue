<template>
  <div
    class="h-auto min-h-[70vh] flex flex-col justify-center bg-gradient-to-b from-[rgba(39,40,41,0.5)] to-[rgba(209,209,202,0.3)]"
  >
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold mb-2">SUPPORT</h1>
        <div class="w-16 h-1 bg-red-600 mx-auto"></div>
        <h2 class="text-2xl mt-4">Eld Support Solution</h2>
      </div>

      <div class="flex justify-center gap-3 mb-8">
        <UButton
          v-for="button in buttons"
          :key="button.id"
          :class="[
            'transition-all duration-300 rounded-full',
            activeButton === button.id
              ? 'bg-[#44444D] text-white'
              : 'bg-gray-600 text-white hover:bg-gray-700',
            'px-4 py-1 text-xs',
            'sm:px-6 sm:py-2 sm:text-sm',
            'md:px-8 md:py-2 md:text-base',
            'lg:px-14 lg:py-3 lg:text-lg',
          ]"
          @click="handleButtonClick(button.id)"
        >
          {{ button.text }}
        </UButton>
      </div>

      <div class="space-y-12">
        <TransitionGroup name="sections" tag="div" class="relative">
          <div
            v-if="activeButton === 'manuals'"
            :key="'manuals'"
            class="w-full"
          >
            <div class="w-full max-w-xl mx-auto mb-8">
              <h1
                class="text-3xl max-md:text-2xl font-bold mb-4 text-center text-custom-color"
              >
                Instruction Manuals
              </h1>
              <div class="w-48 h-1 bg-red-900 mx-auto"></div>
            </div>

            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <div
                v-for="card in manualCards"
                :key="card.id"
                class="bg-yellow-100 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 aspect-[4/3]"
              >
                <div class="w-full h-full">
                  <img
                    :src="card.src"
                    class="w-full h-full object-cover"
                    alt="manual"
                  />
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'videos'" :key="'videos'" class="w-full">
            <div class="w-full m-auto flex justify-center my-6">
              <h2 class="text-3xl max-md:text-xl max-lg:text-2xl font-semibold text-center">
                Most popular videos about trucking industry
              </h2>
            </div>
            <div
              class="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              <div
                v-for="video in videoCards"
                :key="video.id"
                class="max-w-[384px] w-full h-64 flex flex-col justify-between items-center shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
              >
                <iframe
                  class="w-full h-full aspect-video"
                  :src="video.src"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <h3 class="font-semibold text-lg">{{ video.title }}</h3>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'other'" :key="'other'" class="w-full">
            <div class="w-full max-w-xl mx-auto mb-8">
              <h1
                class="text-3xl max-md:text-2xl font-bold mb-4 text-center text-custom-color"
              >
                General Frequently Asked Questions
              </h1>
              <div class="w-full h-1 bg-red-900 mx-auto"></div>
            </div>
            <div class="max-w-4xl mx-auto p-6 space-y-4 mb-12">
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  Is your ELD FMCSA certified?
                </h2>
                <p class="text-sm font-light">
                  In compliance with the FMCSA's ELD Mandate, our ELD Compliance
                  Solution was registered and certified by the FMCSA.
                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  Do I have to print my logs during an inspection?
                </h2>
                <p class="text-sm font-light">
                  With our ELD, you're not required to present physical logs.
                  Our ELD is able to transfer data electronically, but screen
                  displays can also be presented if need be. However, an
                  enforcement officer may request that additional information be
                  provided by email, fax, or other similar means within 48 hours
                  of the roadside inspection.
                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  Will your ELD help prevent HOS violations?
                </h2>
                <p class="text-sm font-light">
                  ROUTE ELD is designed to notify drivers, safety officials of
                  potential violations beforehand. Notifications will be
                  received by the aforementioned parties 1 hour, 30 minutes, 15
                  minutes, and 5 minutes prior to the violation.
                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  Will the application work on my cell phone?
                </h2>
                <p class="text-sm font-light">
                  While ELD devices will connect and work with cellular phones,
                  we highly recommend running our application on a tablet for
                  optimal performance.
                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  How ELD Device installed in the truck?
                </h2>
                <p class="text-sm font-light">
                  ROUTE ELD can be installed effortlessly. Once you plug the ELD
                  device into the diagnostics port of your vehicle, On the app
                  you need to input the ELD Device MAC Address and, your device
                  should be paired
                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  How can drivers create driver vehicle inspection reports (DVIRs)?
                </h2>
                <p class="text-sm font-light">
                  Drivers can use the World Trucking ELD Electronic Logbook App to create DVIRs. The DVIRs created in the app can be accessed by fleet managers by viewing the World Trucking ELD Portal (Dashboard).

                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  How is driving time recorded?
                </h2>
                <p class="text-sm font-light">
                  A driver’s driving time will be automatically recorded as long as the driver connects their mobile device to the ELD via Bluetooth and the vehicle is registered in the World Trucking ELD App. A vehicle is considered to be in motion if it is traveling over 5 mph.
                </p>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'faq'" :key="'faq'" class="w-full">
            <div class="w-full max-w-xl mx-auto mb-8 font">
              <h1
                class="text-3xl max-md:text-xl font-bold mb-4 text-center text-custom-color"
              >
                Other useful tips
              </h1>
              <div class="w-32 h-1 bg-red-900 mx-auto"></div>
            </div>
            <div class="max-w-3xl mx-auto p-6 mb-12">
              <UAccordion
                :items="items"
                :ui="{ wrapper: 'flex flex-col w-full',
                  item: {
                    base: 'bg-[#44444D] , m-0, px-3 py-1, border  border-gray-200'
                  }
                 }"
              >
                <template #default="{ item, open }">
                  <UButton
                    variant="ghost"
                    class="border   bg-[#44444D] border-gray-200"
                    style="border-bottom: none;"
                    :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' }, }"
                  >
                    <span class="truncate text-white p-4">{{
                      item.label
                    }}</span>
                    <template #trailing>
                      <UIcon
                        name="i-heroicons-plus"
                        class="w-5 h-5 ms-auto text-white transform transition-transform duration-200"
                        :class="[open && 'rotate-90']"
                      />
                    </template>
                  </UButton>
                </template>
              </UAccordion>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeButton = ref(null);

const buttons = [
  { id: "manuals", text: "MANUALS" },
  { id: "videos", text: "VIDEOS" },
  { id: "other", text: "FAQ" },
  { id: "faq", text: "OTHER" },
];

const manualCards = [
  {
    id: 1,
    src: "https://optim.tildacdn.net/tild3037-6637-4137-b838-623463373764/-/cover/456x324/center/center/-/format/webp/1.jpg",
  },
  {
    id: 2,
    src: "https://static.tildacdn.net/tild3533-3663-4530-a235-623930636633/3.jpg",
  },
  {
    id: 3,
    src: "https://optim.tildacdn.net/tild3839-3431-4565-b132-653234333432/-/cover/456x324/center/center/-/format/webp/4.jpg",
  },
  {
    id: 4,
    src: "https://static.tildacdn.net/tild3862-3166-4038-a462-623733393965/5.jpg",
  },
  {
    id: 5,
    src: "https://optim.tildacdn.net/tild6630-6130-4037-a461-656163373138/-/cover/456x324/center/center/-/format/webp/8.jpg",
  },
  {
    id: 6,
    src: "https://optim.tildacdn.net/tild3539-6439-4536-b034-386663396232/-/cover/456x324/center/center/-/format/webp/9.jpg",
  },
  {
    id: 7,
    src: "https://optim.tildacdn.net/tild6235-6166-4934-b664-353964643437/-/cover/456x324/center/center/-/format/webp/11.jpg",
  },
  {
    id: 8,
    src: "https://optim.tildacdn.net/tild3030-6134-4236-b464-616431376232/-/cover/456x324/center/center/-/format/webp/12.jpg",
  },
];

const videoCards = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/CP1LyV6n5TA?si=G2WMHtlxs-2qK1f9",
    title: "Getting Started with ELD",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/GOSimU3hTKg?si=XbDuSYmBPjH53VY3",
    title: "ELD Installation Guide",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/GOSimU3hTKg?si=XbDuSYmBPjH53VY3",
    title: "Troubleshooting Common Issues",
  },
];

const items = [
  {
    label: "Where is ROUTE ELD's office located?",
    content: "1612 Prosser  Ave Ste 315, Dayton OH,45409-2041 USA",
  },
  {
    label: "How can i get new device?",
    content:
      "To get ELD hardware, please call us Sales Department at 321-999-7776 ext 101 oremail us at route.support.eld@gmail.com",
  },
  {
    label: "What ELD hardware manufacturers are compatible with ROUTE ELD?",
    content:
      "Bluelink,IOSIX, and Pacific Track(Android only) devices are compatible with our system. Please note that if you have an Indian device(VNA2), you will need to upgrade because the hardware has been discontinued. Contact us 321-999-7776 ext 101 or email us at route.suppport.eld@gmail.com to purchase a replacement.",
  },
  {
    label: "Does ROUTE ELD require a contract?",
    content:
      "No ,we offer a month-to-month subscription that doesn't require a long-term commitment. There are also no fess or penalties if you cancel services at any time",
  },
  {
    label: "Which cellular network provider is preferable",
    content:
      "Verizon (Unlimited) and T-Mobile (Unlimited)Does",
  },
];

const handleButtonClick = (buttonId) => {
  if (activeButton.value === buttonId) {
    activeButton.value = null;
  } else {
    activeButton.value = buttonId;
  }
};
</script>

<style scoped>
.sections-enter-active,
.sections-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
}

.sections-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.sections-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.sections-move {
  transition: transform 0.5s ease;
}
</style>
