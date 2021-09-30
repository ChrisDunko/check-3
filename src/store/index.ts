import { createStore } from 'vuex';

export type State = {
  textYup: string;
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
  textYup: 'yup!',
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
