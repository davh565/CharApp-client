import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isConnected: false,
        newCharId: null,
        testData: 'hello',
        rulesets: ['Pathfinder','D&D 5E', "D&D 4E"],
        campaigns: [],
        characters: []
      },
      mutations: {
        SOCKET_CONNECT(state, status) {
          state.isConnected = true;
        },
        ADDED_CHAR(state, id) {
          state.newCharId = id;
        },
        GET_CHARS(state, chars) {
          state.characters = chars;
        },
      },
      actions: {
        socket_addedChar({ commit }, id) {
          console.log(id)
          commit('ADDED_CHAR', id);
        },
        socket_getChars({ commit }, chars) {
          commit('GET_CHARS', chars);
        },
      },
    })
