import { dbAuth } from 'src/boot/firebase'
// import Vue from 'vue'
// import { uid } from 'quasar'

const state = {
  users: {},
}

const mutations = {
  addUser(state, payload){
    Vue.set(state.users, payload.id, payload.object)
  }
}

const actions = {
  registerUser({commit, state}, payload){
    console.log('payload', payload)
    dbAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(res => {
      console.log(res)

    })
    .catch(error => {
      console.log(error.message)
    })

    // let userId = uid()

    // let user = {
    //   id: userId,
    //   email: '',
    //   name: '',
    //   image: '',
    //   createAt: new Date(),
    //   updateAt: new Date(),
    // }
    // commit('addUser', user)
    // console.log('user::',user)
  },

  loginUser({}, payload){
    dbAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
      console.log('response', response)
      .catch(error => {
        console.log(error.message)
      })
    })
  },
  handleAuthStateChanged({}, payload){
    console.log('handleAuthStateChanged')
    dbAuth.onAuthStateChanged(user => {
      if (user) {
        // User is logged in.
        let userId = dbAuth.currentUser.uid
        console.log('userID', userId)
        this.$router.push('/home')
      }
      else {
        //User is logged out
        this.$router.replace('/auth')
      }
    })
  },
  logoutUser(){
    dbAuth.signOut()
  }
}

const getters = {
  users: (state) => {
    console.log(state.users)
    return state.users
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
