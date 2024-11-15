<script setup lang="ts"></script>

<template>
  <div
    class="w-full bg-gradient-to-b from-[rgba(209,209,202,0.3)] to-[rgba(39,40,41,0.5)]"
  >
    <div class="w-[90%] max-w-7xl m-auto pt-4">
      <div class="w-full max-w-xs mx-auto mb-8">
        <h1
          class="text-3xl max-md:text-2xl font-bold mb-4 text-center text-custom-color"
        >
          CONTACT
        </h1>
        <div class="w-32 h-2 bg-red-900 mx-auto"></div>
      </div>
      <div class="flex flex-col lg:flex-row justify-center gap-6 pb-4">
        <!-- Contact Form -->
        <div class="w-full lg:w-[40%]">
          <h2 class="text-center text-2xl font-bold mb-6 lg:mb-4">Contact us</h2>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label for="firstname" class="block text-sm md:text-base">First Name</label>
              <input
                type="text"
                placeholder="Name"
                class="p-3 md:p-4 w-full rounded border border-gray-400 bg-gray-200"
              />
            </div>
            <div>
              <label for="email" class="block text-sm md:text-base">Email</label>
              <input
                type="email"
                placeholder="Your E-mail"
                class="p-3 md:p-4 w-full rounded border border-gray-400 bg-gray-200"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm md:text-base">Phone Number</label>
              <input
                type="number"
                placeholder="Your Phone"
                class="p-3 md:p-4 w-full rounded border border-gray-400 bg-gray-200"
              />
            </div>
            <div>
              <label for="message" class="block text-sm md:text-base">Message</label>
              <textarea
                id="message"
                placeholder="Comments"
                class="p-3 md:p-4 w-full rounded border border-gray-400 bg-gray-200"
              ></textarea>
            </div>
            <button class="text-white bg-red-700 px-8 py-3 md:px-12 md:py-4 w-full text-lg md:text-xl">
              Submit
            </button>
          </div>
        </div>

        <!-- Head Office -->
        <div class="w-full lg:w-[50%] flex flex-col justify-between">
          <h2 class="text-center text-2xl font-bold mb-6 lg:mb-4">Head Office</h2>
          <div class="space-y-4">
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild3465-6631-4164-b337-663632343662/-/cover/36x36/center/center/-/format/webp/location.png"
                alt="location"
                class="w-6 h-6"
              />
              2722 Erie Ave STE 219, Cincinnati OH, 45208 USA
            </p>
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild3034-3932-4432-b432-646461656633/-/cover/36x36/center/center/-/format/webp/email.png"
                alt="email"
                class="w-6 h-6"
              />
              <a href="#">support: +1(321) 999-7776 ext.101</a>
            </p>
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild3034-3932-4432-b432-646461656633/-/cover/36x36/center/center/-/format/webp/email.png"
                alt="email"
                class="w-6 h-6"
              />
              <a href="#">support: +1(321) 999-7776 ext.101</a>
            </p>
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild6132-6636-4461-a163-323864663161/-/cover/36x36/center/center/-/format/webp/phone_icon.png"
                alt="phone"
                class="w-6 h-6"
              />
              <a href="#">route.support.eld@gmail.com</a>
            </p>
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild6132-6636-4461-a163-323864663161/-/cover/36x36/center/center/-/format/webp/phone_icon.png"
                alt="phone"
                class="w-6 h-6"
              />
              <a href="#">route.support.eld@gmail.com</a>
            </p>
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild6132-6636-4461-a163-323864663161/-/cover/36x36/center/center/-/format/webp/phone_icon.png"
                alt="phone"
                class="w-6 h-6"
              />
              <a href="#">route.support.eld@gmail.com</a>
            </p>
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild6233-6266-4339-a562-363633623266/-/cover/38x38/center/center/-/format/webp/telegram.png"
                alt="telegram"
                class="w-6 h-6"
              />
              <a href="#">routeSupport(channel)</a>
            </p>
            <p class="flex items-center gap-2 text-sm md:text-base">
              <img
                src="https://optim.tildacdn.net/tild3366-3231-4537-b230-616265313831/-/cover/58x58/center/center/-/format/webp/instag.png"
                alt="telegram"
                class="w-6 h-6"
              />
              <a href="#">routeSupport(channel)</a>
            </p>
           
          </div>

          <div class="mt-6">
            <p class="text-center text-lg md:text-xl mb-4">
              Download our official apps for your devices
            </p>
            <div class="flex justify-center gap-4">
              <a href="#" class="w-32 md:w-48">
                <img
                  src="https://static.tildacdn.net/tild6566-6661-4461-b032-313336303533/Download_on_the_App_Store_Badge_USUK_135x40.svg"
                  alt="App Store"
                  class="w-full"
                />
              </a>
              <a href="#" class="w-32 md:w-48">
                <img
                  src="https://optim.tildacdn.net/tild3734-3862-4336-b731-366161643439/-/resize/288x/-/format/webp/googleplaybadge2.png"
                  alt="Google Play"
                  class="w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
