<template>
  <div class="w-3/4 min-h-full px-10 py-8">
    <section class="w-full h-14 mb-9">
      در <b>طراح</b> حساب ندارید؟ <nuxt-link to="signup" class="text-green-900"> ثبت نام کنید</nuxt-link>
    </section>
    <section class=" mx-auto h-14 text-right" style="width: 420px">
      <h1 class="text-2xl font-bold mb-5">برای استفاده از <b>طراح</b> وارد شوید</h1>
      <span class="block font-light mb-5"><b>طراح</b> به مهارت تو کمک می‌کنه</span>
      <hr class="font-light mb-5" />
      <form class="mb-2" @submit.prevent="login">
        <label for="" class="font-bold text-sm text-gray-600 mb-3 block">پست الکترونیکی</label>
        <input
          class="text-center mb-6 w-full h-3 bg-gray-100 focus:ring-2 focus:ring-black hover:ring-2 hover:ring-black outline-none py-5 px-3 rounded-lg text-sm transition-all"
          type="text"
          v-model="auth.username"
        />
        <label for="" class="font-bold text-sm text-gray-600 mb-3 block">کلمه عبور</label>
        <input
          class="text-center mb-9 w-full h-3 bg-gray-100 focus:ring-2 focus:ring-black hover:ring-2 hover:ring-black outline-none py-5 px-3 rounded-lg text-sm transition-all"
          type="password"
          v-model="auth.password"
        />
        <button class="w-full p-2 rounded-lg bg-indigo-600 block font-bold text-white hover:bg-black transition-all">
          <span>ورود</span>
          <font-awesome-icon :icon="['fas', 'circle-notch']" class="animate-spin" v-if="isLoading" />
        </button>
      </form>
      <span class="font-light text-xs"><nuxt-link class="underline" to="">کلمه عبور خود را فراموش کردید؟</nuxt-link></span>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    data() {
      return {
        auth: {
          username: '',
          password: ''
        },

        isLoading: false
      }
    },
    methods: {
      async login() {
        if (this.auth.username && this.auth.password) {
          this.isLoading = true
          await this.$auth
            .loginWith('laravelPassport', { data: this.auth })
            .then(() => {
              this.$router.push('/dashboard')
              this.isLoading = false
            })
            .catch(e => {
              this.error = e.response.data.error ? e.response.data.error : ''
              this.$router.push('/login')
              this.isLoading = false
            })
        }
      }
    }
  }
</script>
