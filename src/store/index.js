import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'
import ToyService from '@/services/toy.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys: [],
    filterBy: {},
    currToyId: null,
    userMsg: null
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setId(state, toyId) {
      state.currToyId = toyId
    },
    remove(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId)
      state.toys.splice(idx, 1)
      this.commit({ type: 'setMsg', msg: { type: 'success', txt: 'Toy Removed succesfully!' } })
    },
    saveToy(state, { toyToSave }) {
      var idx = state.toys.findIndex(toy => toy._id === toyToSave._id)
      if (idx !== -1) {
        state.toys.splice(idx, 1, toyToSave)
        this.commit({ type: 'setMsg', msg: { type: 'success', txt: 'Toy edited succesfully!' } })
      }
      else {
        state.toys.unshift(toyToSave)
        this.commit({ type: 'setMsg', msg: { type: 'success', txt: 'Toy added succesfully!' } })
      }
      router.push('/toy')
    },
    setMsg(state, { msg }) {
      state.userMsg = msg
      setTimeout(() => {
        state.userMsg = null
      }, 3000)
    }
  },
  actions: {
    loadToys(context) {
      return ToyService.query()
        .then(toys => {
          context.commit({ type: 'setToys', toys })
          return toys
        })
    },
    saveToy(context, { toy }) {
      return ToyService.add(toy)
        .then(toyToSave => {
          context.commit({ type: 'saveToy', toyToSave })
          return toyToSave
        })
    },
    remove(context, { toyId }) {
      ToyService.remove(toyId)
        .then(() => {
          context.commit({ type: 'remove', toyId })
        })
    },
  },
  getters: {
    toys(state) {
      return state.toys
    },
    getToyById(state) {
      return state.toys.find(toy => toy._id === state.currToyId)
    },
    userMsg(state) {
      return state.userMsg
    }

  },
  modules: {
  }
})
