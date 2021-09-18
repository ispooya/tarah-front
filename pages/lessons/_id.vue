<template>
  <div class="h-screen w-full flex flex-col">
    <div class="w-full h-20 flex gap-x-4 items-center px-4">
      <nuxt-link to="" class="w-11 h-11 rounded-full bg-gray-75 flex justify-center items-center flex-none">
        <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
      </nuxt-link>
      <div class="w-full h-3 bg-gray-75 rounded-full overflow-hidden relative  ">
        <div
          class="h-3 rounded-full bg-pink-600 absolute left-0 transition-all duration-200"
          :style="{ width: answeredPercent + '%' }"
        ></div>
      </div>
      <nuxt-link to="/dashboard/courses" class="w-11 h-11 rounded-full bg-gray-75 flex justify-center items-center flex-none">
        <font-awesome-icon :icon="['fas', 'times']" />
      </nuxt-link>
    </div>

    <div class="w-full h-full flex justify-center items-center overflow-hidden scrollbar-hide" :class="{ 'overflow-y-scroll ': answered }">
      <transition name="practice">
        <div class="flex flex-col items-center h-4/5" v-if="!isLoading && !lessonStarted">
          <img class="w-44 mb-3" :src="`http://localhost:8000/storage/${lesson.icon}`" alt="" />
          <span class="font-bold mb-8 text-xl">{{ lesson.name }}</span>
          <div class="text-gray-400 mb-8">
            <font-awesome-icon class="w-1 h-1" :icon="['fas', 'circle']" />
            <font-awesome-icon class="w-1 h-1" :icon="['fas', 'circle']" />
            <font-awesome-icon class="w-1 h-1" :icon="['fas', 'circle']" />
          </div>
          <span class="mb-4">{{ lesson.quotation ? lesson.quotation.text : '' }}</span>
          <div class="flex items-center gap-x-2 text-sm font-bold">
            <img class="w-7 rounded-full " :src="`http://localhost:8000/storage/${lesson.quotation ? lesson.quotation.pic : ''}`" alt="" />
            <span>{{ lesson.quotation ? lesson.quotation.name : '' }}</span>
          </div>
        </div>
      </transition>

      <div class="flex flex-col  items-center h-4/5 " v-for="practice in practices" :key="practice.id">
        <!-- quiz section -->
        <transition name="practice">
          <div
            class="w-full h-full flex-col justify-center items-center px-7 pb-40 gap-5"
            v-if="lessonStarted && currentPracticeId == practice.id && practice.type == 'quiz' && !answered"
          >
            <span class="block pb-8 text-center text-lg font-bold">{{ practice.hint }}</span>
            <div class="flex justify-center items-start gap-5">
              <img
                class=" rounded-4xl"
                style="width:784px"
                :src="`http://localhost:8000/storage/practices/${practice.options.img}`"
                alt=""
              />

              <div class="flex flex-col gap-5 items-start" style="width:784px">
                <button
                  v-for="(option, index) in practice.options.quizOptions"
                  :key="index"
                  @click=";[answer(option, practice)]"
                  :class="{
                    'border-green-400 hover:border-green-400':
                      currentPracticeId == practice.id && currentAnswer == option && correctAnswerd === true,
                    'border-green-400 hover:border-green-400':
                      currentPracticeId == practice.id && currentAnswer && option == practice.answer,
                    'border-red-600 hover:border-red-600':
                      currentPracticeId == practice.id && currentAnswer == option && correctAnswerd === false
                  }"
                  class="w-full p-5 text-right h-20 rounded-xl border-2 border-gray-200 transition-all duration-200 hover:border-gray-900"
                >
                  <span
                    class="inline-flex justify-center items-center ml-5 w-7 h-7 text-sm font-bold text-gray-400 rounded-md bg-gray-100"
                    >{{ index + 1 }}</span
                  >
                  <span>{{ option }}</span>
                </button>
              </div>
            </div>
          </div>
        </transition>

        <!-- AB section -->
        <transition name="practice">
          <div
            class="w-full h-full flex-col justify-center items-center px-7 pb-40 gap-5"
            v-if="lessonStarted && currentPracticeId == practice.id && practice.type == 'ab' && !answered"
          >
            <span class="block pb-8 text-center text-lg font-bold">{{ practice.hint }}</span>
            <div class="flex justify-center items-start gap-5">
              <img
                @click=";[answer(practice.options.a), practice]"
                class=" rounded-4xl border-2 border-gray-200 transition-all duration-200 cursor-pointer hover:border-black"
                style="width:784px"
                :src="`http://localhost:8000/storage/practices/${practice.options.a}`"
                alt=""
              />
              <img
                @click=";[answer(practice.options.b), practice]"
                class=" rounded-4xl border-2 border-gray-200 transition-all duration-200 cursor-pointer hover:border-black"
                style="width:784px"
                :src="`http://localhost:8000/storage/practices/${practice.options.b}`"
                alt=""
              />
            </div>
          </div>
        </transition>

        <!-- AB description -->
        <transition name="practice">
          <div
            class="w-full h-full flex-col justify-center items-center px-7 pb-40 gap-5"
            v-if="lessonStarted && currentPracticeId == practice.id && answered"
          >
            <div class="flex justify-center items-start gap-5">
              <img
                v-if="practice.type == 'quiz'"
                class=" rounded-4xl"
                style="width:784px"
                :src="`http://localhost:8000/storage/practices/${practice.options.img}`"
                alt=""
              />
              <img
                v-if="practice.type == 'ab'"
                class=" rounded-4xl"
                style="width:784px"
                :src="`http://localhost:8000/storage/practices/${practice.answer}`"
                alt=""
              />
            </div>
            <div class="p-5" style="width:784px">
              <span class="block text-3xl font-bold pb-3">{{ practice.name }}</span>
              <span>{{ practice.description }}</span>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div
      class="w-full h-28 flex gap-x-4 items-center justify-center px-4  border-t"
      :class="{ 'bg-red-50': answered && !correctAnswerd, 'bg-green-50': answered && correctAnswerd }"
    >
      <div class="relative flex items-center gap-x-3">
        <client-only>
          <vue-ellipse-progress
            :progress="timePercent"
            :angle="-90"
            color="#f1c40f"
            :colorFill="'#fff'"
            :size="50"
            :thickness="5"
            :legendValue="time"
            emptyThickness="0%"
          >
          </vue-ellipse-progress>
        </client-only>

        <span class="text-gray-600 text-sm">در حال حاضر امکان خاموش کردن تایمر وجود ندارد </span>
      </div>
      <button
        v-if="!lessonStarted"
        @click="startLesson"
        :disabled="isLoading"
        :class="{ 'bg-gray-400': isLoading }"
        class="w-36 h-16 bg-black mr-32 rounded-2xl text-white text-lg font-bold hover:bg-indigo-700 transition-all duration-200"
      >
        <span v-if="isLoading">درحال بارگزاری...</span>
        <span v-else>شروع</span>
      </button>
      <button
        v-if="lessonStarted"
        @click="resumeLesson"
        :disabled="!answered"
        :class="{
          'bg-gray-400 hover:bg-gray-400': !answered,
          'bg-green-400 hover:bg-green-400': answered && correctAnswerd,
          'bg-red-400 hover:bg-red-400': answered && !correctAnswerd
        }"
        class="w-36 h-16 bg-black mr-32 rounded-2xl text-white text-lg font-bold transition-all duration-200"
      >
        <span>ادامه</span>
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        options: {
          color: '#000',
          trailColor: '#f4f4f4',
          trailWidth: 5,
          svgStyle: {
            display: 'block',
            width: '50px'
          },
          text: {},
          fill: '#fff',
          duration: 1200,
          easing: 'easeOut',
          from: { color: '#eee' },
          to: { color: '#000' },
          step: function(state, circle, attachment) {
            circle.path.setAttribute('stroke', state.color)
          },
          warnings: false
        },
        // current lesson
        lesson: {},
        // current practices
        practices: {},
        // if lesson is started
        lessonStarted: false,
        // current showing practice  in display
        currentPracticeId: '',
        // is loading page and practices
        isLoading: false,
        // if current practice answered
        correctAnswerd: null,
        // current answer by user
        currentAnswer: '',
        // if answered current practice
        answered: false,
        // remaining practice time
        time: 30,
        // remaining practice time percent
        timePercent: 100,
        // time setInterval id
        timeInterval: '',
        // array of wrong answered practices
        wrongAnsweredPractices: [],
        // correct answered counts
        correctAnsweredCounts: 0
      }
    },
    computed: {
      answeredPercent() {
        return 100 / (this.lesson.practices_count / this.correctAnsweredCounts)
      }
    },
    async mounted() {
      this.isLoading = await true
      await this.$axios.$post(`backend/api/lessons/${this.$route.params.id}`).then(result => {
        this.lesson = result
      })
      this.$axios.$post(`backend/api/practices/${this.$route.params.id}`).then(result => {
        this.practices = result
        this.isLoading = false
      })
    },
    methods: {
      resumeLesson() {
        this.timePercent = 100
        this.time = 30
        this.correctAnswerd = null
        this.currentAnswer = ''
        this.answered = false
        setTimeout(() => {
          this.currentPracticeId++
        }, 350)
        this.timeInterval = setInterval(() => {
          this.timePercent -= 3.3
          --this.time
          if (this.time <= 1) {
            clearInterval(this.timeInterval)
            this.timeInterval = ''
            setTimeout(async () => {
              this.time = '0'
              this.timePercent = 0
              this.answered = true
            }, 1000)
          }
        }, 1000)

        if (this.correctAnsweredCounts < this.lesson.practices_count) {
          console.log('ss')
        }
      },
      async startLesson() {
        this.lessonStarted = await true
        setTimeout(() => {
          this.currentPracticeId = 1
        }, 350)
        this.timeInterval = setInterval(() => {
          this.timePercent -= 3.3
          --this.time
          if (this.time <= 1) {
            clearInterval(this.timeInterval)
            this.timeInterval = ''
            setTimeout(async () => {
              this.time = '0'
              this.timePercent = 0
              this.answered = true
            }, 1000)
          }
        }, 1000)
      },
      async answer(answer, practice) {
        clearInterval(this.timeInterval)
        this.timeInterval = ''
        this.currentAnswer = answer
        if (this.practices.find(i => i.answer == answer)) {
          this.correctAnswerd = true
          this.correctAnsweredCounts++
        } else {
          this.correctAnswerd = false
          this.wrongAnsweredPractices.push(practice)
        }
        setTimeout(() => {
          this.answered = true
        }, 500)
      }
    }
  }
</script>
