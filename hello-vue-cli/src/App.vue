<!--Name: David, Vincent Jericho C.-->

<template>
  <div id="app">
    <img src="./assets/mygradpicture.jpg">
    <div class="container">
      <div class="alert alert-dark" role="alert">
        <h3>{{ msg }}</h3>
      </div>

      <!--Component Name/s, Insert Below-->
      <profile></profile>
      <education></education>
      <skills></skills>
      <!--<about-us></about-us>
      <my-routine></my-routine>
      <todo-card></todo-card>-->
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import AboutUs from './components/AboutUs.vue'
import MyRoutine from './components/MyRoutine.vue'
import TodoCard from './components/TodoCard.vue'
export default {
  components: { Profile, Education, Skills, AboutUs, MyRoutine, TodoCard },
  name: 'app',
  data () {
    return {
      msg: 'My Detailed Presented Resume'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #da8609;
  margin-top: 60px;
}

h3 {
  font-weight: 400;
}
</style>