<template>
  <div class="w-full h-screen bg-gray-100 flex flex-row-reverse">
    <div class="flex-grow h-full rounded-r-3xl shadow-xl bg-white flex flex-col  overflow-hidden">
      <div class="h-20 px-10 pt-6 pb-3 flex justify-between items-center hf bg-white w-full">
        <span class="font-bold text-3xl" v-if="$route.name == 'dashboard'">خانه</span>
        <span class="font-bold text-3xl" v-if="$route.name == 'dashboard-courses'">دوره ها</span>
        <span class="font-bold text-3xl" v-if="$route.name == 'dashboard-arcade'">arcade</span>
        <span class="font-bold text-3xl" v-if="$route.name == 'dashboard-saved'">ذخیره شده ها</span>
        <span class="font-bold text-3xl" v-if="$route.name == 'dashboard-leaderboard'">تابلوی امتیازات</span>
        <div class="flex">
          <form class="relative">
            <font-awesome-icon :icon="['fas', 'search']" class="ml-3 absolute right-4 top-3 z-30 cursor-pointer" />
            <input class="w-80 h-11 rounded-full bg-gray-75 px-5 pr-12 " type="text" name="" id="" />
          </form>
          <div class="h-11 w-11 bg-black rounded-full mr-6 cursor-pointer"></div>
        </div>
      </div>
      <transition name="auth">
        <Nuxt />
      </transition>
    </div>
    <div class="w-56 flex-shrink-0 h-full py-3">
      <div class="w-full px-6 py-3 mb-10">
        <logo class="w-1/3 float-right" />
      </div>

      <div class="px-3 w-full text-gray-500 font-bold">
        <nuxt-link
          :to="{ name: 'dashboard' }"
          class="w-full h-12 flex  px-4 items-center hover:bg-gray-75 rounded-xl mb-1 transition-colors "
        >
          <font-awesome-icon :icon="['fas', 'home']" class="ml-3" />

          خانه
        </nuxt-link>
        <nuxt-link to="/dashboard/courses/" class="w-full h-12 flex  px-4 items-center hover:bg-gray-75 rounded-xl mb-1 transition-colors ">
          <font-awesome-icon :icon="['fas', 'graduation-cap']" class="ml-3" />

          دوره ها
        </nuxt-link>
        <nuxt-link to="/dashboard/arcade/" class="w-full h-12 flex  px-4 items-center hover:bg-gray-75 rounded-xl mb-1 transition-colors ">
          <font-awesome-icon :icon="['fas', 'gamepad']" class="ml-3" />
          Arcade
        </nuxt-link>
        <nuxt-link to="/dashboard/saved/" class="w-full h-12 flex  px-4 items-center hover:bg-gray-75 rounded-xl mb-1 transition-colors ">
          <font-awesome-icon :icon="['fas', 'bookmark']" class="ml-3" />
          ذخیره شده ها
        </nuxt-link>
        <nuxt-link
          to="/dashboard/leaderboard/"
          class="w-full h-12 flex  px-4 items-center hover:bg-gray-75 rounded-xl mb-1 transition-colors "
        >
          <font-awesome-icon :icon="['fas', 'trophy']" class="ml-3" />
          تابلوی امتیازات
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  .nuxt-link-exact-active
    background-color: #ededfb
    color: #5627ff
</style>
<script>
  export default {}
</script>
