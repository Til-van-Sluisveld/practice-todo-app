import { Model } from "@vuex-orm/core";

export default class ToDo extends Model {
  static entity = "toDos";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(""),
      description: this.attr(""),
      finished: this.boolean(false),
      userId: this.attr(null),
    };
  }
}
