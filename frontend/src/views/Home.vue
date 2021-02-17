<template>
  <div class="home">
    <h1>Welcome to the To-Do app</h1>
    <v-list>
      <ToDoItem v-for="todo in toDos" :key="todo.id" :value="todo" />
    </v-list>
  </div>
</template>

<script>
import Vue from "vue";
import ToDoItem from "../components/ToDoItem.vue";
import Component from "vue-class-component";
import ToDo from "../store/models/todo";

@Component({
  components: { ToDoItem },
})
export default class Home extends Vue {
  created() {
    const testingToDos = [
      {
        id: 1,
        title: "First thing to do",
        description: "Insert an initial state for testing",
        finished: true,
        userId: 1,
      },
      {
        id: 2,
        title: "Second thing to do",
        description: "todo's are displayed on the page correctly",
        finished: false,
        userId: 1,
      },
      {
        id: 3,
        title: "Third thing to do",
        description: "Something",
        finished: false,
        userId: 1,
      },
      {
        id: 4,
        title: "Fourth thing to do",
        description: "Profit",
        finished: false,
        userId: 1,
      },
    ];

    ToDo.insert({ data: testingToDos });
  }

  get toDos() {
    return ToDo.all();
  }
}
</script>
