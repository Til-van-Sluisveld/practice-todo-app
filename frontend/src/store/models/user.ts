import { Model } from "@vuex-orm/core";
import ToDo from "./todo";

export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.uid(),
      firstName: this.attr(""),
      lastName: this.attr(""),
      email: this.attr(""),
      todos: this.hasMany(ToDo, "todo_id"),
    };
  }
}
