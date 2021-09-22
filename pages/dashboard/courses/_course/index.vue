<template>
  <client-only>
    <vue-scroll class="w-full flex-grow ">
      <div class="px-10 pt-10 flex justify-between">
        <div class="w-3/5 flex flex-col">
          <nuxt-link
            v-for="lesson in course.lessons"
            :key="lesson.id"
            :to="`/lessons/${lesson.id}`"
            class="group bg-gray-50 transition-all duration-200 w-full  rounded-4xl border flex justify-start items-center p-6 relative overflow-hidden"
          >
            <div class="ml-3">
              <img v-if="!isLoading" :src="`http://www.tarah-dev.ir:8000/storage/${lesson.icon}`" alt="" class="rounded-md h-16" />
            </div>
            <div>
              <span class="block text-right font-bold text-lg mb-2">{{ lesson.name }}</span>
              <span class="inline-block text-right text-sm text-gray-400 mb-2 ml-4">{{ lesson.time }} دقیقه</span>
              <span class="inline-block text-right text-sm text-gray-400 mb-2">{{ lesson.practices_count }} سوال</span>
            </div>
            <div
              class="z-50 flex justify-end items-center absolute w-full h-36 bg-gradient-to-r opacity-0 group-hover:opacity-100 from-gray-50 via-gray-50 to-transparent left-0 transition-all duration-200"
            >
              <button class="transition-all duration-200 px-3 h-11 rounded-xl hover:bg-gray-200 bg-gray-100 font-bold ml-4">
                مطالب تئوری
              </button>
              <button class="transition-all duration-200 px-3 h-11 rounded-xl hover:bg-black bg-indigo-600 text-white font-bold ml-4">
                شروع درس
              </button>
            </div>
          </nuxt-link>
        </div>

        <div class="w-1/4">
          <img
            v-if="!isLoading"
            width="90px"
            height="90px"
            :src="`http://www.tarah-dev.ir:8000/storage/${course.icon}`"
            alt=""
            class="mb-6 block rounded-full ring-8 ring-gray-200 ring-offset-1"
          />
          <h1 class="font-bold text-2xl mb-2">
            {{ course.name }}
          </h1>
          <p class="font-medium text-gray-400 mb-2">
            {{ course.description }}
          </p>
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
              <svg class="w-4 h-4 ml-2" _ngcontent-ejy-c20="" viewBox="0 0 24 24" id="difficulty-easy" xmlns="http://www.w3.org/2000/svg">
                <rect _ngcontent-ejy-c20="" x="1.5" y="15" width="4.5" height="6" rx="1.5"></rect>
                <rect _ngcontent-ejy-c20="" x="9" y="9" width="4.5" height="12" rx="1.5" fill-opacity=".32"></rect>
                <rect _ngcontent-ejy-c20="" x="17.1" y="4.5" width="4.5" height="16.5" rx="1.5" fill-opacity=".32"></rect>
              </svg>
              راحت
            </span>
          </div>
        </div>
      </div>
    </vue-scroll>
  </client-only>
</template>
<script>
  export default {
    data() {
      return {
        course: '',
        isLoading: false
      }
    },
    mounted() {
      this.isLoading = true
      this.$axios.$post(`backend/api/courses/${this.$route.params.course}`).then(result => {
        this.course = result
        this.isLoading = false
      })
    },
    layout: 'dashboard'
  }
</script>
