import { LOGOUT, REGISTER, SET_ERROR, SET_USER, LOGIN } from "../types";

const state = {
  isAuthenticated: false,
  user: {},
  error: null,
  loading: false,
};
const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};
const mutations = {
  [SET_ERROR](state, payload) {
    state.error = payload;
  },
  [LOGOUT](state) {
    state.user = null;
    state.loading = false;
    state.error = "";
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
  [SET_USER](state, payload) {
    state.isAuthenticated = true;
    state.user = payload;
    state.error = {};
    localStorage.setItem("token", payload.jwt);
    localStorage.setItem("user", payload.user);
  },
};
const actions = {
  async [LOGIN](context, payload) {
    try {
      context.commit(SET_USER, payload);
    } catch (error) {
      context.commit(SET_ERROR, error);
    }
  },
  async [REGISTER](context, payload) {
    try {
      context.commit(SET_USER, payload);
    } catch (error) {
      context.commit(SET_ERROR, error);
    }
  },
  [LOGOUT](context) {
    context.commit(LOGOUT);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
