import { dbFApp } from "../../boot/firebase"

const state = {
  subjects: {},
}

const mutations = {
  addCategories(state, payload) {
    Vue.set(state.subjects, payload.name)
  }
}

const actions = {
  readSubjects({commit}){
    const fetchSubjectsFromFirebaseFirestore = async () => {
      const snapshot = await dbFApp.collection('QUIZ').get();
      snapshot.docs.forEach((doc) => {
        console.log
      })
    }
  }
}

const getters = {
  subjects: (state) => {
    console.log(state.subjects)
    return state.subjects
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
