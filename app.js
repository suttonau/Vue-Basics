new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    name: 'Sean',
    url: 'http://www.youtube.com',
    classes: ['one', 'two']
  },
  methods: {
    greet() {
      return `Hello there`
    }
  }
})
