<template>
  <div class="flex  min-h-full">
    <div class="w-1/4 h-screen bg-asphalt pt-12 px-12 pb-10 text-right flex flex-col justify-between items-end text-white">
      <logo color="light" class="w-24 inline-block " />
      <!-- <client-only>
        <vuescroll-carousel :type="'h'" :intervalTime="5000"> -->
      <div>
        <img src="../assets/images/01.jpg" class="block w-44 h-44 rounded-full mx-auto border-4 mb-7" />
        <p class="mb-7">
          <b>طراح</b> تبدیل به مرکز آموزشی من برای یادگیری شده است. آنها درسهای منظمی دارند و هر چیزی که یاد می گیرم ضبط می شود. من این
          پلتفرم را برای افرادی که به دنبال رویکرد سازمان یافته تری در مسیر یادگیری خود هستند توصیه می کنم.
        </p>
        <span class="text-lg font-bold block">پویا کریمی</span>
        <span class="font-thin">برنامه نویس بک اند</span>
      </div>

      <!-- <div>
            <img src="../assets/images/02.jpg" class="block w-44 h-44 rounded-full mx-auto border-4 mb-7" />
            <p class="mb-7">
              <b>طراح</b> تبدیل به مرکز آموزشی من برای یادگیری شده است. آنها درسهای منظمی دارند و هر چیزی که یاد می گیرم ضبط می شود. من این
              پلتفرم را برای افرادی که به دنبال رویکرد سازمان یافته تری در مسیر یادگیری خود هستند توصیه می کنم.
            </p>
            <span class="text-lg font-bold block">پویا کریمی</span>
            <span class="font-thin">برنامه نویس بک اند</span>
          </div>
        </vuescroll-carousel>
      </client-only> -->

      <span class="text-gray-400 text-sm font-light">© 2021 کلیه حقوق محفوظ است </span>
    </div>
    <transition name="auth">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
  export default {
    auth: 'guest'
  }
</script>
