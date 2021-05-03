import { createStore } from "vuex";
import auth from "./modules/auth.js";
import movies from "./modules/orders.js";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    movies,
  },
});
