<template>
  <div
    class="
  w-full overflow-hidden h-16 justify-between items-center  flex md:hidden "
  >
    <div class="h-full py-4 flex items-stretch">
      <nuxt-link to="" class=" px-4"><logo class="h-full"/></nuxt-link>
    </div>
    <div class="h-full flex items-center py-6">
      <nuxt-link to="login" class="px-3 flex items-center">ورود</nuxt-link>
      <nuxt-link to="signup" class="px-3 flex items-center">
        <span class="rounded-lg bg-black text-white px-5 py-2">ثبت نام</span>
      </nuxt-link>
    </div>
  </div>
</template>
