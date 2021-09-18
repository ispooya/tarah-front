<template>
  <div>
    <div class="pt-40 text-center" v-if="error.statusCode === 404">user not found!! :((</div>
    <div class="pt-40 text-center" v-if="error.statusCode === 429">too many requests!</div>
    <div class="pt-40 text-center">{{ error.statusCode }}</div>
  </div>
</template>
<script>
  export default {
    methods: {
      refresh() {
        window.location.reload()
      },
    },

    middleware: 'auth',

    props: ['error'],

    layout: 'error',
  }
</script>
