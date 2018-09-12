import Vuex from "vuex";
import base from './base';
import auth from './auth';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      base,
      auth
    }
  });
};

export default createStore;