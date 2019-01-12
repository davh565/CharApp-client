import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isConnected: false,
        message: null,
        testData: 'hello',
        rulesets: ['Pathfinder','D&D 5E', "D&D 4E"],
        campaigns: [],
        characters: ['Theren Greenwood','Testy McTesterson', 'Smashy Smashface']
      },
      mutations: {
        SOCKET_CONNECT(state, status) {
          state.isConnected = true;
        },
        ADDED_CHAR(state, id) {
          state.message = id;
        },
      },
      actions: {
        socket_addedChar({ commit }, id) {
          console.log(id)
        //   dispatch('newMessage', message);
          commit('ADDED_CHAR', id);
        //   if (message.is_important) {
        //     dispatch('alertImportantMessage', message);
        //   }
          // ...
        },
      },
    })
