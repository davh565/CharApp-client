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
        characters: [],
        currentPage: []
      },
      mutations: {
        CURRENT_PAGE(state,path){
          state.currentPage = path

        },


        SOCKET_CONNECT(state, status) {
          state.isConnected = true;
        },
        ADDED_CHAR(state, id) {
          state.newCharId = id;
        },
        GET_CHARS(state, chars) {
          state.characters = chars;
        },
        EDIT_CHAR(state, char) {
          // console.log(char.obj)
          const character = state.characters.find(x => x._id ===char.id)
          for (const field in char.obj){
            if (typeof character.data[field] === 'object'){
              for (const subField in char.obj[field]){
                character.data[field][subField] = char.obj[field][subField]
              }
            }
            else character.data[field] = char.obj[field]
            // console.log(character.data[field])
          }
          // console.log(state.characters.find(x => x._id ===char.id))
          // state.characters = char;
        },
        DEL_CHAR(state, char) {
          state.characters = state.characters.filter(x => x._id !== char)
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
        socket_editChar({ commit }, char) {
          commit('EDIT_CHAR', char);
        },
        socket_delChar({ commit }, char) {
          commit('DEL_CHAR', char);
        },
      },
    })
