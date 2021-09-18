import Vue from 'vue'
import vuescroll from 'vuescroll'

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    scrollPanel: {
      initialScrollY: false,
      initialScrollX: false,
      scrollingX: false,
      scrollingY: true,
      speed: 500,
      verticalNativeBarPos: 'left'
    },
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'number'
    },
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: false,
      background: '#5627ff',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: true,
      minSize: 0,
      size: '4px',
      disable: false
    }
  },
  name: 'vueScroll' // customize component name, default -> vueScroll
})
