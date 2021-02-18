<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox
        v-model="value.finished"
        color="success"
        @change="updateFinished"
      ></v-checkbox>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ value.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ value.description }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import ToDo from "../store/models/todo";

@Component
export default class ToDoItem extends Vue {
  @Prop(Object)
  value: ToDo | undefined;

  updateFinished(e: boolean) {
    // console.log(this.value?.$id);
    // console.log(e);

    ToDo.update({
      where: this.value?.$id,
      data: {
        finished: e,
      },
    });
  }
}
</script>
