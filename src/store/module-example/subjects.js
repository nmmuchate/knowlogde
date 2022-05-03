// import { dbFApp } from "../../boot/firebase"

// const state = {
//   subjects: {},
// }

// const mutations = {
//   addCategories(state, payload) {

//     console.log('paload', payload)

//    state.subjects = payload
//   }
// }

// const actions = {
//   readSubjects({commit},){
//     dbFApp.collection('QUIZ').get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {

//         let subject = []

//         subject.push(doc.data())

//         commit('addCategories', subject.name)
//       })
//     })
//   }
// }

// const getters = {
//   getSubjects: (state) => {
//     console.log( 'subject from to state::',state.subjects)
//     return state.subjects
//   },

// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   getters,
//   actions
// }
