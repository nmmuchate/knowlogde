import { dbFApp } from "../../boot/firebase"

const state = {
  subjects: {}
}

const mutations = {
  addCategories(state, payload) {
    Vue.set(state.subjects, payload.name)
  }
}

const actions = {
  readSubjects({commit}){

    let docRef = dbFApp.collection('QUIZ').doc('Categorias');
    docRef.get().then((doc) => {
      if (doc.exists) {
      }else {
        console.log('Es um perdedor')
      }
    }).catch((error) => {
      console.log('error no servidor::', error)
    })
  }
}

const getters = {
  subjects: (state) => {
    console.log(state.subjects)
    return state.subjects
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
