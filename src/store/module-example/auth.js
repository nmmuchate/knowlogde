import { Loading } from 'quasar'
import { dbAuth, dbFApp } from 'src/boot/firebase'
// import Vue from 'vue'
// import { uid } from 'quasar'

const state = {
  userState: null,
}

const mutations = {
  addUser(state, payload){
    state.userState = payload
  },
  setUserDetails(state, payload){
    console.log('setUserDetails', payload)
    state.userState = payload
  }
  }


const actions = {
  registerUser({commit}, payload){
    console.log('payload', payload)
    dbAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(res => {
      // add user to firebase firestore
      let newuser = {
        id: dbAuth.currentUser.uid,
        name: payload.name,
        email: payload.email,
        photoURL: '',
        createAt: new Date(),
        updateAt: new Date(),
        isOnline: true,
        details: {
          phone: '',
          subjectsLiked: [],
          universitys: [],
        },
        detailsGame: {
          highScore: 0,
          countHowManyTimesPlayed:{
            timesPlayed: 0,
            timesWon: 0,
            timesLost: 0,
            scores: [],
          }
        }
      }

      dbFApp.collection('users').doc(dbAuth.currentUser.uid).set(newuser).then(res => {
        console.log('user added', res.id)

        // add user to store
        commit('addUser', newuser)


        this.$router.push('/home')
      })
      .catch(err => {
        console.log('err', err)
      })

    })
    .catch(error => {
      console.log(error.message)
    })
  },

  loginUser({commit}, payload){
    Loading.show()
    dbAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response)


        // set user to local storage
        commit('setUserDetails', {
          id: response.user.uid,
          email: response.user.email,

          password: response.user.password

        })

        this.$router.push('/home')
        Loading.hide()
      })
      .catch(error => {
        Loading.hide()
        console.log(error.message)
      })
  },
  handleAuthStateChanged({ commit }, payload){
    console.log('payload', payload)
    dbAuth.onAuthStateChanged(user => {
      console.log('user', user)
      if (user) {
        // Call current user from dbFapp.
        dbFApp.collection('users').doc(user.uid).get().then(res => {
          console.log('res', res.data())
          commit('setUserDetails', res.data())
        })

        // set user to local storage
        // commit('setUserDetails', {
        //   id: user.uid,
        //   name: user.name,
        //   email: user.email,
        //   photoURL: user.photoURL,
        // })

        this.$router.push('/home')
      } else {
        console.log('no user')
        this.$router.push('/')
      }
    }
    )
  },
  logoutUser(){
    dbAuth.signOut()
    commit('setUserDetails', null)
    this.$router.push('/')
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
