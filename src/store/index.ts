import { createStore } from 'vuex';

export type State = {
  lists: List[];
}

type Item = {
  name: string;
  done: boolean;
}

type List = {
  name: string;
  items: Item[];
}

const state: State = {
  lists: []
}

export default createStore({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
