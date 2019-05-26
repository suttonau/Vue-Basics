/* eslint-disable no-undef */
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data: {
    title: 'Vues from the 6',
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    greet() {
      return `Hello there`
    },
    logEvent(e) {
      console.log(e)
    },
    logCoords(e) {
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    }
  }
})
