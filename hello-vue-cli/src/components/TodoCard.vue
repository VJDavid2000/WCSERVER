<!--Name: David, Vincent Jericho C.-->

<template>
  <div id="todo-card">
    <div class="alert alert-secondary" role="alert">
      <h2>{{ msg7 }}</h2>
      <p>This Display Is Shown The To Do Card.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-card',
  data () {
    return {
      msg7: 'My ToDo Card Component'
    }
  }
}
</script>