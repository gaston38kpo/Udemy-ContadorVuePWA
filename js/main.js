const app = Vue.createApp({
  data() {
    return {
      title: "Contador App - Vue",
      count: 0,
      interval: null,
    };
  },
  methods: {
    disCount() {
      // console.log("click");
      setTimeout(() => {
        this.interval = setInterval(() => this.count--, 100);
      }, 500);
    },
    addCount() {
      setTimeout(() => {
        this.interval = setInterval(() => this.count++, 100);
      }, 500);
    },
    stopCount() {
      clearInterval(this.interval);
      this.interval = false;
    },
    modCount(instruction = "add", limit = 1) {
      clearInterval(this.interval);
      if (instruction === "add") {
        this.count += limit;
      } else if (instruction === "sub") {
        this.count -= limit;
      }
    },
  },
});
