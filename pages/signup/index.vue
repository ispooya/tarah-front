<template>
  <div class="w-3/4 min-h-full px-10 py-8">
    <section class="w-full h-14 mb-9">
      در <b>طراح</b> حساب دارید؟ <nuxt-link to="login" class="text-green-900">وارد شوید</nuxt-link>
    </section>
    <section class=" mx-auto h-14 text-right" style="width: 420px">
      <h1 class="text-2xl font-bold mb-5">برای استفاده از <b>طراح</b> ثبت نام کنید</h1>
      <span class="block font-light mb-5"><b>طراح</b> به مهارت تو کمک می‌کنه</span>
      <hr class="font-light mb-5" />
      <form class="mb-2" @submit.prevent="signup">
        <label for="" class="font-bold text-sm text-gray-600 mb-3 block">پست الکترونیکی</label>
        <input
          dir="ltr"
          class="text-center mb-6 w-full h-3 bg-gray-100 focus:ring-2 focus:ring-black hover:ring-2 hover:ring-black outline-none py-5 px-3 rounded-lg text-sm transition-all"
          type="text"
          v-model="email"
        />
        <transition name="fade">
          <span class="-mt-4 mb-2 block text-sm text-red-600" v-if="errors.email">{{ errors.email }}</span>
        </transition>

        <label for="" class="font-bold text-sm text-gray-600 mb-3 block">کلمه عبور</label>
        <input
          dir="ltr"
          class="text-center mb-9 w-full h-3 bg-gray-100 focus:ring-2 focus:ring-black hover:ring-2 hover:ring-black outline-none py-5 px-3 rounded-lg text-sm transition-all"
          type="password"
          v-model="password"
        />
        <transition name="fade">
          <span class="-mt-6 mb-3 block text-sm text-red-600" v-if="errors.password">{{ errors.password }}</span>
        </transition>
        <button class="w-full p-2 rounded-lg bg-indigo-600 block font-bold text-white hover:bg-black transition-all">
          <span>ثبت نام</span>
          <font-awesome-icon :icon="['fas', 'circle-notch']" class="animate-spin" v-if="isLoading" />
        </button>
      </form>
      <span class="font-light text-xs">.با ثبت نام در <b>طراح</b> ، شما با شرایط خدمات و خط مشی رازداری ما موافقت می کنید </span>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    auth: 'guest',
    data() {
      return {
        email: '',
        password: '',
        errors: {
          email: '',
          password: ''
        },
        isLoading: false
      }
    },
    methods: {
      async signup() {
        this.isLoading = true
        this.errors.password = ''
        this.errors.email = ''

        this.$axios
          .$post('backend/api/signup', { email: this.email, password: this.password })
          .then(r => {
            if (r.signup) {
              this.$router.push('/login')
            }
            this.isLoading = false
          })
          .catch(e => {
            this.errors.email = e.response.data.errors.email[0] ? e.response.data.errors.email[0] : ''
            this.errors.password = e.response.data.errors.password[0] ? e.response.data.errors.password[0] : ''
            this.isLoading = false
          })
      }
    }
  }
</script>
<style lang="sass" scoped>
  input
    direction: ltr !important
</style>
