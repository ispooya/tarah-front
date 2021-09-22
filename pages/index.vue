<template>
  <div class="h-24 w-full md:py-5" dir="rtl">
    <!-- header -->
    <landing-header />
    <mobile-landing-header />

    <section class="container mx-auto flex-col-reverse md:flex-row flex justify-evenly items-center md:py-20">
      <div class="w-full px-9 md:px-0 md:w-2/5">
        <h2 class="w-full text-lg md:text-5xl break-words font-black md:font-bold mb-5 leading-relaxed">
          حرفه طراحی خود را به صورت تعاملی بسازید
        </h2>
        <p class="text-lg pb-6 ">
          مهارت های جدید طراحی را بیاموزید، دانش خود را ارزیابی و اندازه گیری کنید و با طراحان سراسر جهان ارتباط برقرار کنید.
        </p>
        <nuxt-link to="/login" class="flex items-center justify-center md:justify-start pb-2"
          ><span class="rounded-lg bg-black text-white px-5 py-3 font-semibold">ورود به طراح</span></nuxt-link
        >
      </div>
      <video class="w-11/12 md:w-2/5 rounded-3xl mb-4 md:mb-0" preload="auto" playsinline="" autoplay="" loop="" muted="">
        <source :src="`http://www.tarah-dev.ir:8000/storage/build-your-design-career.mp4`" />
      </video>
    </section>

    <section class="container mx-auto pt-10 md:py-20 text-center">
      <span class="block mb-4 md:mb-8 text-gray-500 text-lg font-black md:text-base">مورد اعتماد طراحان شرکت های برتر </span>
      <div class="w-full grid grid-cols-2 md:grid-cols-4">
        <nuxt-img class="inline-block mx-auto" v-for="i in companies" :key="i" :src="i" loading="lazy" alt="" />
      </div>
    </section>

    <section class="container mx-auto flex flex-col md:flex-row justify-evenly items-center pt-10 md:py-20">
      <h2 class="w-full text-2xl break-words font-black md:font-bold mb-4 leading-relaxed px-9 block md:hidden">
        یادگیری طراحی
      </h2>

      <video class="w-11/12 md:w-2/5 rounded-3xl mb-4 md:mb-0" preload="auto" playsinline="" autoplay="" loop="" muted="">
        <source :src="`http://www.tarah-dev.ir:8000/storage/learn-design.mp4`" />
      </video>
      <div class="w-full px-9 md:px-0 md:w-2/5">
        <h2 class="w-full text-5xl break-words font-bold mb-5 leading-relaxed hidden md:block">یادگیری طراحی</h2>
        <p class="text-lg md:pb-6 font-light">
          دسترسی به کتابخانه ای گسترده از دوره های طراحی UX/UI و درس هایی با اندازه کوچک که توسط متخصصان طراحی برای متخصصان طراحی ایجاد شده
          است.
        </p>
        <nuxt-link to="" class="flex items-center pb-2">
          <span class="py-3 font-semibold text-blue-800">مشاهده دوره ها -></span>
        </nuxt-link>
      </div>
    </section>

    <section class="container mx-auto flex flex-col-reverse md:flex-row justify-evenly items-center pt-10 md:py-20">
      <div class="w-full px-9 md:px-0 md:w-2/5">
        <h2 class="w-full text-2xl md:text-5xl font-black md:font-bold break-words mb-5 leading-relaxed">ارزیابی مهارت ها</h2>
        <p class="text-lg md:pb-6 font-light">
          با ارزیابی مهارت های UX/UI بینش های ارزشمندی در مورد دانش طراحی خود کسب کنید. مهارت های خود را بسنجید و گزارش قابل اشتراک گذاری
          دریافت کنید.
        </p>
        <nuxt-link to="" class="flex items-center pb-2">
          <span class="py-3 font-semibold text-blue-800">بیشتر بدانید -></span>
        </nuxt-link>
      </div>
      <video class="w-11/12 md:w-2/5 rounded-3xl mb-4 md:mb-0" preload="auto" playsinline="" autoplay="" loop="" muted="">
        <source :src="`http://www.tarah-dev.ir:8000/storage/learn-design.mp4`" />
      </video>
    </section>

    <section class="container mx-auto pt-10 md:py-20 text-center">
      <span class="block mb-4 md:mb-8 text-gray-500 text-lg font-black md:text-base">آمارها به خودی خود صحبت می‌کنند</span>
      <div class="w-full grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        <div>
          <span dir="ltr" class="mb-2 text-5xl font-bold block">500k+</span>
          <span dir="ltr" class="inline-block text-gray-500 mb-4">درس های تمام شده</span>
        </div>
        <div>
          <span dir="ltr" class="mb-2 text-5xl font-bold block">140k+</span>
          <span dir="ltr" class="text-gray-500">کشور های درحال یادگیری</span>
        </div>
        <div>
          <span dir="ltr" class="mb-2 text-5xl font-bold block">5k+</span>
          <span dir="ltr" class="text-gray-500">مدرک های صادر شده</span>
        </div>
        <div>
          <span dir="ltr" class="mb-2 text-5xl font-bold block">6m+</span>
          <span dir="ltr" class="text-gray-500">تمرینات تکمیل شده</span>
        </div>
      </div>
    </section>

    <section class="py-14 md:py-28 px-10 md:px-20 text-center rounded-t-4xl md:rounded-t-5xl bg-gray-100 mt-10 md:mt-0">
      <div class=" max-w-screen-xl mx-auto">
        <h2 class="text-2xl md:text-5xl font-bold md:font-semibold text-right mb-4 md:mb-12">دانش آموختگان ما می‌گویند...</h2>
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/3 px-5 md:block">
            <!-- user -->
            <div class="rounded-3xl bg-white shadow-3xl p-10 mb-10">
              <p class="text-right mb-7">
                طراح به شما کمک می کند تا تکنیک های طراحی UX/UI را به طریقی فوق العاده آسان و زیبا بیاموزید و آگاه باشید. شما واقعاً هنگام
                بازی یاد می گیرید!
              </p>
              <div class="flex items-center">
                <img src="../assets/images/01.jpg" class="w-14 h-14 rounded-full inline-block ml-3" />
                <div class=" inline-flex justify-center flex-col h-14">
                  <h3 class="font-bold ">پویا کریمی</h3>
                  <span class="font-thin">برنامه نویس</span>
                </div>
              </div>
            </div>

            <!-- user -->
            <div class="rounded-3xl bg-white shadow-3xl p-10 mb-10">
              <p class="text-right mb-7">
                من عاشق استفاده از طراح بودم! من احساس می کنم که تجمیع دانش موجود UX و افزایش این دانش بسیار مناسب است. من در یک دوره آنلاین
                ثبت نام کرده ام و طراح به طرز بسیار موثری دروس را تکمیل می کند.
              </p>
              <div class="flex items-center">
                <img src="../assets/images/01.jpg" class="w-14 h-14 rounded-full inline-block ml-3" />
                <div class=" inline-flex justify-center flex-col h-14">
                  <h3 class="font-bold ">پویا کریمی</h3>
                  <span class="font-thin">برنامه نویس</span>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 px-5  ">
            <!-- user -->
            <div class="rounded-3xl bg-white shadow-3xl p-10 mb-10">
              <p class="text-right mb-7">
                من به عنوان یک طراح UX خودآموز ، مهارتهای خود را با جستجوی نکات و ترفندها در Medium و Youtube تقویت کردم. اگرچه این منابع
                آنلاین به رشد من کمک کرده اند ، اما نکته منفی این است که بازگرداندن مراحل من و مرور درس های گذشته دشوار است. طراح تبدیل به
                مرکز آموزشی من برای یادگیری شده است. آنها برنامه های درسی منظمی دارند و هر چیزی که یاد می گیرم ثبت می شود. من این پلتفرم را
                برای افرادی که به دنبال رویکرد سازمان یافته تری در مسیر یادگیری خود هستند توصیه می کنم.
              </p>
              <div class="flex items-center">
                <img src="../assets/images/01.jpg" class="w-14 h-14 rounded-full inline-block ml-3" />
                <div class=" inline-flex justify-center flex-col h-14">
                  <h3 class="font-bold ">پویا کریمی</h3>
                  <span class="font-thin">طراح محصول</span>
                </div>
              </div>
            </div>

            <!-- user -->
            <div class="rounded-3xl bg-white shadow-3xl p-10 mb-10">
              <p class="text-right mb-7">
                طراح به من کمک می کند تا مهارت های طراحی UX/UI خود را در حین حرکت افزایش دهم. من تجربه یادگیری طراح را بر خواندن یک مقاله
                100 صفحه ای در هر روز ترجیح می دهم. آفرین!
              </p>
              <div class="flex items-center">
                <img src="../assets/images/01.jpg" class="w-14 h-14 rounded-full inline-block ml-3" />
                <div class=" inline-flex justify-center flex-col h-14">
                  <h3 class="font-bold ">پویا کریمی</h3>
                  <span class="font-thin">طراح محصول</span>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/3 px-5 hidden md:block">
            <!-- user -->
            <div class="rounded-3xl bg-white shadow-3xl p-10 mb-10">
              <p class="text-right mb-7">
                طراح در آگاهی بیشتر از UX و UI به من کمک می کند. همه اصول اولیه را در بر می گیرد و من را در جهت درست برای تحقیقات بیشتر
                راهنمایی می کند. قطعاً یک برنامه ضروری برای هر کسی که در زمینه فناوری کار می کند!
              </p>
              <div class="flex items-center">
                <img src="../assets/images/01.jpg" class="w-14 h-14 rounded-full inline-block ml-3" />
                <div class=" inline-flex justify-center flex-col h-14">
                  <h3 class="font-bold ">پویا کریمی</h3>
                  <span class="font-thin">طراح محصول</span>
                </div>
              </div>
            </div>

            <!-- user -->
            <div class="rounded-3xl bg-white shadow-3xl p-10 mb-10">
              <p class="text-right mb-7">
                طراح یک منبع شگفت انگیز از دانش است. واقعاً خوب است که مسیرهای یادگیری داشته باشید ، پیشرفت خود را ببینید و بدانید که می
                توانید در چند دقیقه در روز خیلی چیزها یاد بگیرید. صدا ، لحن و شخصیت نیز بسیار دوستانه است ، و باعث می شود که بخواهید برگردید
                و با پلتفرم در ارتباط باشید.
              </p>
              <div class="flex items-center">
                <img src="../assets/images/01.jpg" class="w-14 h-14 rounded-full inline-block ml-3" />
                <div class=" inline-flex justify-center flex-col h-14">
                  <h3 class="font-bold ">پویا کریمی</h3>
                  <span class="font-thin">طراح محصول</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-14 md:py-28 px-10 md:px-20 -mt-11 text-center rounded-4xl md:rounded-t-5xl bg-black-900 overflow-hidden">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-white flex flex-col items-center md:flex-row justify-between mx-auto mb-10 md:mb-48">
          <h2 class="text-xl md:text-5xl font-black md:font-bold md:w-1/2 text-right">ساختن حرفه طراحی شما هرگز آسان نبوده است.</h2>
          <nuxt-link
            id="footer-signin-link"
            to=""
            class="mt-10 md:mt-0 inline-flex justify-center items-center h-20 md:h-32 w-64 px-10 bg-yellow-300 font-bold text-3xl rounded-full text-black-900"
            ><span>ثبت نام</span></nuxt-link
          >
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-16 text-white mb-6">
          <div class="px-5">
            <logo class="w-28 mb-5" color="light" />
            <button class="rounded-md bg-white text-black-900 px-2 py-1 w-full">با ما در تماس باشید</button>
          </div>
          <div class="px-5 text-right">
            <span class="block text-lg font-bold mb-4">دروس</span>
            <ul class="text-gray-400 text-sm ">
              <li class="mb-3"><nuxt-link to="">چارچوب طراحی UI-UX</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">طراحی برای دسترسی</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">الگو های طراحی UI</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">HTML برای طراحان</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">نمایش بیشتر</nuxt-link></li>
            </ul>
          </div>

          <div class="px-5 text-right">
            <span class="block text-lg font-bold mb-4">محصول</span>
            <ul class="text-gray-400 text-sm ">
              <li class="mb-3"><nuxt-link to="">ورود</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">ثبت نام</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">پرداخت</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">یادگیری طراحی</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">ارزیابی مهارت ها</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">برای مربیان</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">برای تیم ها</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">استخدام طراحان</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">ارزیابی طراحان</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">به شبکه استعدادها بپیوندید</nuxt-link></li>
            </ul>
          </div>

          <div class="px-5 text-right">
            <span class="block text-lg font-bold mb-4">مطالعات موردی</span>
            <ul class="text-gray-400 text-sm ">
              <li class="mb-3"><nuxt-link to="">چرا طراح؟</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">برای تیم ها</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">جهت استخدام در تیم</nuxt-link></li>
            </ul>
          </div>

          <div class="px-5 text-right">
            <span class="block text-lg font-bold mb-4">شرکت</span>
            <ul class="text-gray-400 text-sm ">
              <li class="mb-3"><nuxt-link to="">درباره ما</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">بلاگ</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">نقشه راه</nuxt-link></li>
              <li class="mb-3"><nuxt-link to="">راهنمایی</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between text-gray-400">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 mb-4 md:mb-0">
            <nuxt-link to="">سیاست حفظ حریم خصوصی </nuxt-link>
            <nuxt-link to="">شرایط استفاده از خدمات </nuxt-link>
            <nuxt-link to="">شراط استفاده از کوکی ها </nuxt-link>
          </div>
          <div>تمامی حقوق این وبسایت متعلق به استودیو وانا می‌باشد</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    auth: 'guest',
    data() {
      return {
        companies: [
          `http://www.tarah-dev.ir:8000/storage/6139d1acf6299f5e189fc196_amazon.svg`,
          `http://www.tarah-dev.ir:8000/storage/6139d1acc732767bca8c0f03_samsung.svg`,
          `http://www.tarah-dev.ir:8000/storage/6139d1acb9efb0469789aea7_squarespace.svg`,
          `http://www.tarah-dev.ir:8000/storage/6139d1add0cbc977d35d6eed_zillow.svg`,
          `http://www.tarah-dev.ir:8000/storage/6139d1addbc977fe35991229_sephora.svg`,
          `http://www.tarah-dev.ir:8000/storage/6139d1ac29c5f081adea3780_capital%20one.svg`,
          `http://www.tarah-dev.ir:8000/storage/6139d1ac6ae6725eacff68cc_sendible.svg`,
          `http://www.tarah-dev.ir:8000/storage/6139d1ac6f61de7554ec898a_gamesys.svg`
        ]
      }
    }
  }
</script>
<style lang="sass" scoped>
  #footer-signin-link
    box-shadow: 0 0 0 20px #000, 0 0 0 24px #664eff
    transition: all .2s ease
    &:hover
      box-shadow: 0 0 0 10px #000, 0 0 0 14px #664eff
</style>
