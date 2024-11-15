<template>
  <div
    class="bg-gradient-to-b from-[rgba(39,40,41,0.5)] to-[rgba(209,209,202,0.3)]"
  >
    <div class="container mx-auto px-4 py-8">
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
    activeButtons[button.id]
      ? 'bg-[#44444D] text-white'
      : 'bg-gray-600 text-white hover:bg-gray-700',
    'px-4 py-1 text-xs', // Default styling
    'sm:px-6 sm:py-2 sm:text-sm', // Small screens
    'md:px-8 md:py-2 md:text-base', // Medium screens
    'lg:px-14 lg:py-3 lg:text-lg', // Large screens
  ]"
  @click="toggleSection(button.id)"
>
  {{ button.text }}
</UButton>
      </div>

      <div class="space-y-12">
        <TransitionGroup name="cards" tag="div">
          <div
            v-if="activeButtons.manuals"
            :key="'manuals'"
            ref="manualsRef"
            class="w-full h-[90vh]"
          >
            <div class="w-full max-w-xl mx-auto mb-8">
              <h1
                class="text-3xl max-md:text-2xl font-bold mb-4 text-center text-custom-color"
              >
                GInstruction Manuals
              </h1>
              <div class="w-48 h-1 bg-red-900 mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div
            v-if="activeButtons.videos"
            :key="'videos'"
            ref="videosRef"
            class="w-full h-[80vh]"
          >
            <div class="w-full m-auto flex justify-center my-6">
              <h2 class="text-3xl">
                Most popular videos about trucking industry
              </h2>
            </div>
            <div
              class="w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div
                v-for="video in videoCards"
                :key="video.id"
                class="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
              >
                <iframe
                  class="w-full aspect-video"
                  :src="video.src"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="p-4">
                  <h3 class="font-semibold text-lg">{{ video.title }}</h3>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="activeButtons.other"
            :key="'other'"
            ref="otherRef"
            class="w-full h-[90vh]"
          >
            <div class="w-full max-w-xl mx-auto mb-8">
              <h1
                class="text-3xl max-md:text-2xl font-bold mb-4 text-center text-custom-color"
              >
                General Frequently Asked Questions
              </h1>
              <div class="w-full h-1 bg-red-900 mx-auto"></div>
            </div>
            <div class="max-w-4xl mx-auto p-6 space-y-4">
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  Is your ELD FMCSA certified?
                </h2>
                <p class="text-sm font-light">
                  In compliance with the FMCSA’s ELD Mandate, our ELD Compliance
                  Solution was registered and certified by the FMCSA.
                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  Do I have to print my logs during an inspection?
                </h2>
                <p class="text-sm font-light">
                  With our ELD, you’re not required to present physical logs.
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
                  How can drivers create driver vehicle inspection reports
                  (DVIRs)?
                </h2>
                <p class="text-sm font-light">
                  Drivers can use the World Trucking ELD Electronic Logbook App
                  to create DVIRs. The DVIRs created in the app can be accessed
                  by fleet managers by viewing the World Trucking ELD Portal
                  (Dashboard).
                </p>
              </div>
              <div>
                <h2 class="text-xl text-red-800 font-medium">
                  How is driving time recorded?
                </h2>
                <p class="text-sm font-light">
                  A driver’s driving time will be automatically recorded as long
                  as the driver connects their mobile device to the ELD via
                  Bluetooth and the vehicle is registered in the World Trucking
                  ELD App. A vehicle is considered to be in motion if it is
                  traveling over 5 mph.
                </p>
              </div>
            </div>
          </div>

          <div
            v-if="activeButtons.faq"
            :key="'faq'"
            ref="faqRef"
            class="w-full h-[90vh]"
          >
            <div class="w-full max-w-xl mx-auto mb-8 font">
              <h1
                class="text-3xl max-md:text-xl font-bold mb-4 text-center text-custom-color"
              >
                Other useful tips
              </h1>
              <div class="w-32 h-1 bg-red-900 mx-auto"></div>
            </div>
            <div class="max-w-3xl mx-auto p-6">
              <UAccordion
                :items="items"
                :ui="{ wrapper: 'flex flex-col w-full' }"
              >
                <template #default="{ item, index, open }">
                  <UButton
                    variant="ghost"
                    class="border my-2 bg-[#44444D] border-gray-200 dark:border-gray-700"
                    :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
                  >
                    <span class="truncate text-white p-4"
                      >{{ index + 1 }}. {{ item.label }}</span
                    >

                    <template #trailing>
                      <UIcon
                        name="i-heroicons-chevron-right-20-solid"
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
import { ref, watch } from "vue";

const activeButtons = ref({
  manuals: false,
  videos: false,
  faq: false,
  other: false,
});

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
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Getting Started with ELD",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "ELD Installation Guide",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Troubleshooting Common Issues",
  },
];

const faqs = ref([
  {
    question: "How do I install the ELD device?",
    answer:
      "Installation is simple: plug the device into your vehicle's diagnostic port, download our app, and follow the in-app setup instructions.",
    isOpen: false,
  },
  {
    question: "What should I do if my device isn't connecting?",
    answer:
      "First, ensure the device is properly plugged in. If issues persist, try restarting your vehicle and the app. Contact support if problems continue.",
    isOpen: false,
  },
  {
    question: "How often does the device need maintenance?",
    answer:
      "Our ELD devices are designed for minimal maintenance. We recommend checking connections monthly and updating the software when prompted.",
    isOpen: false,
  },
]);

const otherResources = [
  {
    id: 1,
    title: "Training Materials",
    description:
      "Access our comprehensive training materials for drivers and fleet managers.",
    link: "#",
  },
  {
    id: 2,
    title: "Compliance Guidelines",
    description:
      "Stay up to date with the latest ELD compliance requirements and regulations.",
    link: "#",
  },
  {
    id: 3,
    title: "Support Contact",
    description: "24/7 support available through phone, email, or live chat.",
    link: "#",
  },
  {
    id: 4,
    title: "Software Updates",
    description: "Download the latest software updates and patch notes.",
    link: "#",
  },
];

const items = [
  {
    label: "Where is ROUTE ELD's officelocated?",
    defaultOpen: true,
    content: "1612 Prosser",
  },
  {
    label: "Installation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Theming",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Layouts",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Components",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Utilities",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];

const toggleSection = (buttonId) => {
  activeButtons.value[buttonId] = !activeButtons.value[buttonId];
};
</script>

<style scoped>
.cards-enter-active,
.cards-leave-active {
  transition: all 0.5s ease;
}

.cards-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.cards-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.cards-move {
  transition: transform 0.5s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
