import { Model } from "@vuex-orm/core";

export default class ToDo extends Model {
  static entity = "toDos";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(""),
      content: this.attr(""),
      userId: this.attr(null),
    };
  }
}
