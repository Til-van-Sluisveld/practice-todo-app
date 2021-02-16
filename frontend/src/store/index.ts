import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import User from "./models/user";
import ToDo from "./models/todo";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User);
database.register(ToDo);

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
});
