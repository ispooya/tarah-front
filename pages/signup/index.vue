<template>
  <div class="flex min-h-full">
    <div class="w-3/4 min-h-full px-10 py-8">
      <header class="w-full h-14 mb-9">
        در <b>طراح</b> حساب دارید؟ <nuxt-link to="login" class="text-green-900">وارد شوید</nuxt-link>
      </header>
      <section class=" mx-auto h-14 text-right" style="width: 420px">
        <h1 class="text-2xl font-bold mb-5">برای استفاده از <b>طراح</b> ثبت نام کنید</h1>
        <span class="block font-light mb-5"><b>طراح</b> به مهارت تو کمک می‌کنه</span>
        <hr class="font-light mb-5" />
        <form class="mb-2">
          <label for="" class="font-bold text-sm text-gray-600 mb-3 block">نام کاربری</label>
          <input
            class="text-center mb-6 w-full h-3 bg-gray-100 focus:ring-2 focus:ring-black hover:ring-2 hover:ring-black outline-none py-5 px-3 rounded-lg text-sm transition-all"
            type="text"
            name=""
            id=""
          />

          <label for="" class="font-bold text-sm text-gray-600 mb-3 block">کلمه عبور</label>
          <input
            class="text-center mb-9 w-full h-3 bg-gray-100 focus:ring-2 focus:ring-black hover:ring-2 hover:ring-black outline-none py-5 px-3 rounded-lg text-sm transition-all"
            type="password"
            name=""
            id=""
          />
          <button class="w-full p-2 rounded-lg bg-indigo-600 block font-bold text-white hover:bg-black transition-all" id="">
            ورود
          </button>
        </form>
        <span class="font-light text-xs">.با ثبت نام در <b>طراح</b> ، شما با شرایط خدمات و خط مشی رازداری ما موافقت می کنید </span>
      </section>
    </div>
    <div class="w-1/4 h-screen bg-asphalt pt-12 px-12 pb-10 text-right flex flex-col justify-between items-end text-white">
      <logo color="light" class="w-24 inline-block mb-36" />
      <carousel :per-page="1" :mouse-drag="false" paginationColor="#000" paginationActiveColor="#fff" class="pb-40">
        <slide>
          <img src="../../assets/images/01.jpg" class="block w-44 h-44 rounded-full mx-auto border-4 mb-7" />
          <p class="mb-7">
            <b>طراح</b> تبدیل به مرکز آموزشی من برای یادگیری شده است. آنها درسهای منظمی دارند و هر چیزی که یاد می گیرم ضبط می شود. من این
            پلتفرم را برای افرادی که به دنبال رویکرد سازمان یافته تری در مسیر یادگیری خود هستند توصیه می کنم.
          </p>
          <span class="text-lg font-bold block">پویا کریمی</span>
          <span class="font-thin">برنامه نویس بک اند</span>
        </slide>
        <slide>
          <img src="../../assets/images/02.jpg" class="block w-44 h-44 rounded-full mx-auto border-4 mb-7" />
          <p class="mb-7">
            به عنوان یک طراح بسیار شلوغ که دائماً در حال حرکت است ، <b>طراح</b> به سکوی من برای آموزش مداوم تبدیل شده است. من می توانم خیلی
            سریع هر چیزی را جستجو کنم ، و من کاملاً از یادگیری تعاملی و گیمیفیکیشن آنها لذت می برم. کار عالی ، اوکسل!
          </p>
          <span class="text-lg font-bold block">مهدی خدادادی</span>
          <span class="font-thin">مدیر محصول</span>
        </slide>
      </carousel>
      <span class="text-gray-400 text-sm font-light">© 2021 کلیه حقوق محفوظ است </span>
    </div>
  </div>
</template>
