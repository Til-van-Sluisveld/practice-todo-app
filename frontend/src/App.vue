<template>
  <div id="app">
    <h1>To Do List</h1>
    title:
    <input v-model="form.title" />
    <br />
    content:
    <input v-model="form.content" />
    <br />
    <button @click="addToDo">Add To Do</button>
  </div>
</template>

<script>
import ToDo from "./store/models/todo";

export default {
  name: "App",

  data() {
    return {
      form: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    addToDo() {
      // console.log("test");
      ToDo.insert({ data: this.form });
    },
  },

  components: {},
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
