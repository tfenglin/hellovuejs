<template>
  <div id="app">
    <h1>hello world</h1>
    <h2>{{ count }}</h2>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  computed: {
    localcount() {
      return this.$store.state.count;
    },
    ...mapState(['count']),
  },
  created() {
    console.log('store', this.$store);
    this.increment();
    //console.log();
    this.sayHello();
  },
  mounted() {
    console.log('count', this.$store.state.count);
  },
  methods: {
    sayHello() {
      console.log('hello');
    },
    increment() {
      this.$store.commit('increment', { count: 10 });
      console.log('count', this.$store.state.count);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss">
$color: #00ff80;
body {
  color: $color;
}
</style>
<style lang="less" scoped>
@color: #d62f2f;
#app {
  background-color: @color;
}
</style>
