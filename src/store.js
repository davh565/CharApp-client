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
        NEW_MESSAGE_RECEIVED(state, message) {
          state.message = message;
        },
      },
      actions: {
        otherAction(context, type) {
          return true;
        },
        socket_chatMessage({ commit, dispatch }, message) {
        //   dispatch('newMessage', message);
          commit('NEW_MESSAGE_RECEIVED', message);
        //   if (message.is_important) {
        //     dispatch('alertImportantMessage', message);
        //   }
          // ...
        },
      },
    })
