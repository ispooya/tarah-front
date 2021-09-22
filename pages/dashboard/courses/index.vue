<template>
  <client-only>
    <vue-scroll class="w-full flex-grow ">
      <div class="px-10 pt-10  flex">
        <div class="flex-grow h-80 pl-10">
          <div class="w-full h-40 rounded-3xl items-center p-8 text-white flex justify-between mb-14" style="background:#664eff">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="96" height="96" rx="16" fill="#664EFF" />
              <path
                d="M16.8306 75.0157L17.6959 79.0168L20.9291 81.5277L16.928 82.393L14.4171 85.6262L13.5517 81.6251L10.3186 79.1142L14.3197 78.2488L16.8306 75.0157Z"
                stroke="white"
                stroke-width="3.09523"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M77.2116 28.7186C75.2009 22.5202 71.2221 17.3549 65.8444 13.9617"
                stroke="white"
                stroke-width="3.09523"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="bevel"
              />
              <path
                d="M86.7926 29.3219C85.5793 25.2488 83.6648 21.0794 81.1162 17.4499C78.3032 13.4441 74.8178 9.87554 70.1203 6.73359"
                stroke="white"
                stroke-width="3.09523"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.5735 17.1357C17.7561 17.1357 16.2827 18.6009 16.2827 20.4083V59.6795C16.2827 61.4869 17.7561 62.9521 19.5735 62.9521H49.1906C51.0081 62.9521 52.4814 61.4869 52.4814 59.6795V20.4083C52.4814 18.6009 51.0081 17.1357 49.1906 17.1357H19.5735Z"
                fill="#F8DB46"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59.7786 34.5632C60.1622 33.4123 61.4062 32.7903 62.5571 33.1739L74.7464 37.237C76.4111 37.7919 77.3488 39.554 76.8792 41.2447L66.4681 78.7246C65.9827 80.4721 64.1762 81.4987 62.4264 81.0215L39.3184 74.7193C38.148 74.4001 37.458 73.1926 37.7772 72.0222C38.0964 70.8518 39.3039 70.1617 40.4743 70.4809L62.5277 76.4955L72.3668 41.0747L61.1678 37.3417C60.0169 36.9581 59.3949 35.7141 59.7786 34.5632Z"
                fill="#05060F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.2827 20.4067C16.2827 18.6002 17.7561 17.1357 19.5735 17.1357H49.1908C51.0083 17.1357 52.4817 18.6002 52.4817 20.4067V59.6576C52.4817 61.464 51.0083 62.9285 49.1908 62.9285H19.5735C17.7561 62.9285 16.2827 61.464 16.2827 59.6576V20.4067ZM20.6677 21.481V58.5832H48.0966V21.481H20.6677Z"
                fill="#05060F"
              />
            </svg>

            <div class="w-2/3 text-right leading-loose">
              <span class="text-xl font-bold block">آموزش خرد</span>
              <span class="text-base font-light">
                <b>طراح</b> یک کتابخانه گسترده از هر دو دوره رایگان و حرفه ای ارائه می دهد. سطح اول هر دوره حرفه ای همیشه رایگان است!
              </span>
            </div>
            <div class="w-3/12 flex justify-end">
              <button class="px-3 h-11 rounded-xl border font-bold ml-4">رد شدن</button>
            </div>
          </div>

          <div class="w-full flex justify-between mb-5">
            <span class="text-xl font-bold">همه دوره ها</span>
          </div>

          <hr class="mb-5" />

          <div class="w-full rounded-4xl grid grid-cols-3 gap-y-6 gap-x-10 items-center mb-14">
            <nuxt-link
              v-for="course in courses"
              :key="course.id"
              :to="`/dashboard/courses/${course.slug}/`"
              class="hover:bg-gray-100 transition-all duration-200 w-full  rounded-4xl border flex flex-col justify-start items-start p-8"
            >
              <div class="w-full ml-4  mb-5">
                <img
                  width="80px"
                  height="80px"
                  :src="`http://www.tarah-dev.ir:8000/storage/${course.icon}`"
                  alt=""
                  class="rounded-full ring-4 ring-gray-200 ring-offset-1"
                />
              </div>
              <div class="mb-2">
                <span class="block text-right font-bold text-lg mb-2">{{ course.name }}</span>
                <span class="block font-light text-sm">{{ course.description }}</span>
              </div>
              <div class="w-full h-5 grid grid-cols-3">
                <span class=" font-normal text-sm text-gray-400  flex">
                  <svg class="w-5 h-5" _ngcontent-ejy-c20="" viewBox="0 0 20 20" id="play-outlined" xmlns="http://www.w3.org/2000/svg">
                    <path
                      _ngcontent-ejy-c20=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.539 10L7.47 5.68v8.64L13.539 10zm-6.433 6.528l8.363-5.848a.817.817 0 000-1.36L7.106 3.472a.819.819 0 00-1.273.68v11.695a.819.819 0 001.273.68z"
                    ></path>
                  </svg>
                  {{ course.lessons_count }} درس
                </span>
                <span class="flex font-normal text-sm text-gray-400">
                  <svg
                    class="w-4 h-4 ml-2"
                    _ngcontent-ejy-c20=""
                    viewBox="0 0 24 24"
                    id="difficulty-easy"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect _ngcontent-ejy-c20="" x="1.5" y="15" width="4.5" height="6" rx="1.5"></rect>
                    <rect _ngcontent-ejy-c20="" x="9" y="9" width="4.5" height="12" rx="1.5" fill-opacity=".32"></rect>
                    <rect _ngcontent-ejy-c20="" x="17.1" y="4.5" width="4.5" height="16.5" rx="1.5" fill-opacity=".32"></rect>
                  </svg>
                  آسان
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="w-full h-9"></div>
        </div>
      </div>
    </vue-scroll>
  </client-only>
</template>
<script>
  export default {
    layout: 'dashboard',
    data() {
      return {
        courses: []
      }
    },
    mounted() {
      this.$axios
        .$post('backend/api/get-all-courses')
        .then(result => {
          this.courses = result
        })
        .catch(err => {})
    }
  }
</script>
