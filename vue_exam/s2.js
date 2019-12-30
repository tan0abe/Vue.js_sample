new Vue({
  el: "#app",
  data: {
    message: "hello",
    number: 3,
    ok: true
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    sayHi: function() {
      this.message = "hello VueJS";
      return this.message;
    }
  }
});
