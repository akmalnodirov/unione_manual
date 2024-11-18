<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_a3u5zld";
const TEMPLATE_ID = "template_2yaopui";
const PUBLIC_KEY = "51dnlxXPrjyA1LFr0";

emailjs.init(PUBLIC_KEY);

const form = ref({
  firstname: "",
  email: "",
  number: "",
  message: "",
});

async function sendEmail() {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.value.firstname,
        reply_to: form.value.email,
        message: `Name: ${form.value.firstname}\nEmail: ${form.value.email}\nPhone Number: ${form.value.number}\nMessage: ${form.value.message}`,
      },
      PUBLIC_KEY
    );

    if (result.status === 200) {
      alert("Email sent successfully!");
      form.value = {
        firstname: "",
        email: "",
        number: "",
        message: "",
      };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email error:", error);
    alert("Failed to send email. Please try again later.");
  }
}
</script>

<template>
  <div
    class="w-full pb-12 bg-gradient-to-b from-[rgba(209,209,202,0.3)] to-[rgba(39,40,41,0.5)]"
  >
    <div class="w-[90%] max-w-7xl m-auto pt-4">
      <div class="w-full max-w-xs mx-auto mb-8">
        <h1
          class="text-3xl max-md:text-2xl font-medium mb-4 text-center text-custom-color"
          style="letter-spacing: 2px"
        >
          CONTACT
        </h1>
        <div class="w-32 h-2 bg-red-900 mx-auto"></div>
      </div>
      <div class="flex flex-col lg:flex-row justify-center gap-6 pb-4">
        <div class="w-full lg:w-[40%]">
          <h2 class="text-center text-2xl font-bold mb-6 lg:mb-4">
            Contact us
          </h2>
          <form @submit.prevent="sendEmail" class="space-y-4 md:space-y-6">
            <div>
              <label for="firstname" class="block text-sm md:text-lg my-2"
                >First Name</label
              >
              <input
                id="firstname"
                type="text"
                v-model="form.firstname"
                placeholder="Name"
                class="p-3 md:p-4 w-full rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                style="background-color: rgb(209, 209, 202)"
                required
                aria-label="Enter your first name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm md:text-lg my-2"
                >Email</label
              >
              <input
                id="email"
                type="email"
                v-model="form.email"
                placeholder="Your E-mail"
                class="p-3 md:p-4 w-full rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                style="background-color: rgb(209, 209, 202)"
                required
                aria-label="Enter your email address"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm md:text-lg my-2"
                >Phone Number</label
              >
              <input
                id="phone"
                type="tel"
                v-model="form.number"
                placeholder="Your Phone Number"
                class="p-3 md:p-4 w-full rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                style="background-color: rgb(209, 209, 202)"
                required
                aria-label="Enter your phone number"
              />
            </div>

            <div>
              <label for="message" class="block text-sm md:text-lg my-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Comments"
                class="p-3 md:p-4 w-full rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                style="background-color: rgb(209, 209, 202)"
                required
                aria-label="Enter your message or comments"
              ></textarea>
            </div>

            <button
              type="submit"
              class="text-white bg-red-800 font-medium font-georgia px-8 py-3 md:px-12 md:py-4 w-full lg:w-[150px] text-lg md:text-xl hover:bg-red-900 focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
              aria-label="Submit your form"
            >
              Submit
            </button>
          </form>
        </div>

        <div class="w-full lg:w-[50%] flex flex-col justify-between">
          <h2 class="text-center text-2xl font-bold mb-6 lg:mb-4">
            Head Office
          </h2>
          <div class="space-y-5 px-12 max-sm:px-1">
            <p class="flex items-center gap-2 text-xl md:text-xl color-custom">
              <img
                src="https://optim.tildacdn.net/tild3465-6631-4164-b337-663632343662/-/cover/36x36/center/center/-/format/webp/location.png"
                alt="location"
                class="w-6 h-6"
              />
              2722 Erie Ave STE 219, Cincinnati OH, 45208 USA
            </p>
            <div class="flex flex-col gap-2">
              <p
                class="flex items-center gap-2 text-xl md:text-base color-custom"
              >
                <img
                  src="https://optim.tildacdn.net/tild3034-3932-4432-b432-646461656633/-/cover/36x36/center/center/-/format/webp/email.png"
                  alt="email"
                  class="w-6 h-6"
                />
                <a
                  href="mailto:route.support.eld@gmail.com"
                  class="text-2xl md:text-xl"
                  aria-label="Send an email to route.support.eld@gmail.com"
                >
                  route.support.eld@gmail.com
                </a>
              </p>
              <p
                class="flex items-center gap-2 text-lg md:text-base color-custom"
              >
                <img
                  src="https://optim.tildacdn.net/tild3034-3932-4432-b432-646461656633/-/cover/36x36/center/center/-/format/webp/email.png"
                  alt="email"
                  class="w-6 h-6"
                />
                <a
                  href="mailto:routeld.sales.eld@gmail.com"
                  class="text-2xl md:text-xl"
                  >routeld.sales.eld@gmail.com</a
                >
              </p>
              <p
                class="flex items-center gap-2 text-lg md:text-base color-custom"
              >
                <img
                  src="https://optim.tildacdn.net/tild3034-3932-4432-b432-646461656633/-/cover/36x36/center/center/-/format/webp/email.png"
                  alt="email"
                  class="w-6 h-6"
                />

                <a href="mailto:support@routeld.com" class="text-2xl md:text-xl"
                  >support@routeld.com</a
                >
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <p
                class="flex items-center gap-2 text-lg md:text-base color-custom"
              >
                <img
                  src="https://optim.tildacdn.net/tild6132-6636-4461-a163-323864663161/-/cover/36x36/center/center/-/format/webp/phone_icon.png"
                  alt="phone"
                  class="w-6 h-6"
                />
                <a
                  href="tel:+13219997776;ext=101"
                  class="text-2xl md:text-xl"
                  aria-label="Call support at +1 (321) 999-7776 extension 101"
                >
                  Support: +1 (321) 999-7776 ext. 101
                </a>
              </p>
              <p
                class="flex items-center gap-2 text-lg md:text-base color-custom"
              >
                <img
                  src="https://optim.tildacdn.net/tild6132-6636-4461-a163-323864663161/-/cover/36x36/center/center/-/format/webp/phone_icon.png"
                  alt="phone"
                  class="w-6 h-6"
                />
                <a href="tel:+17079570000" class="text-2xl md:text-xl"
                  >sales: +1(707) 957-0000</a
                >
              </p>
            </div>
            <p
              class="flex items-center gap-2 text-lg md:text-base color-custom"
            >
              <img
                src="https://optim.tildacdn.net/tild6233-6266-4339-a562-363633623266/-/cover/38x38/center/center/-/format/webp/telegram.png"
                alt="telegram"
                class="w-6 h-6"
              />
              <a href="#" class="text-2xl md:text-xl">routeSupport(channel)</a>
            </p>
            <div class="flex flex-col gap-2">
              <p
                class="flex items-center gap-2 text-lg md:text-base color-custom"
              >
                <img
                  src="https://optim.tildacdn.net/tild3366-3231-4537-b230-616265313831/-/cover/58x58/center/center/-/format/webp/instag.png"
                  alt="telegram"
                  class="w-6 h-6"
                />
                <a
                  href="https://www.instagram.com/route.eld"
                  class="text-2xl md:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Route.ELD on Instagram"
                >
                  route.eld
                </a>
              </p>
              <p
                class="flex items-center gap-2 text-lg md:text-base color-custom"
              >
                <img
                  src="https://optim.tildacdn.net/tild3731-3061-4661-b132-343063663664/-/cover/38x38/center/center/-/format/webp/Facebook.png"
                  alt="telegram"
                  class="w-6 h-6"
                />
                <a
                  href="https://www.facebook.com/route.eld"
                  class="text-2xl md:text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Route.ELD on Facebook"
                >
                  route.eld
                </a>
              </p>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-center text-xl md:text-2xl mb-4 color-custom">
              Download our official apps for your devices
            </p>
            <div class="flex justify-center gap-4 mt-5">
              <a href="#" class="w-32 md:w-64">
                <img
                  src="https://static.tildacdn.net/tild6566-6661-4461-b032-313336303533/Download_on_the_App_Store_Badge_USUK_135x40.svg"
                  alt="App Store"
                  class="w-full"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.routeeld.mobile"
                class="w-32 md:w-64"
              >
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

<style scoped>
.color-custom {
  color: #272829;
}
</style>
