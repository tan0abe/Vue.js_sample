new Vue({
  el: "#app",
  data: {
    message: "hello"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});
