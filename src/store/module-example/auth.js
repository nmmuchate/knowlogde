import { Loading, Dialog, Notify } from 'quasar'
import { dbAuth, dbFApp, provider, providerFb } from 'src/boot/firebase'

// import Vue from 'vue'
// import { uid } from 'quasar'




const mutations = {
  addUser(state, payload){
    state.userState = payload
  },
  setUserDetails(state, payload){
    state.userState = payload
  }
  }


const actions = {
  registerUser({commit}, payload){
    Loading.show()
    console.log('payload', payload)

    // this.errors = []
    // if()

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
            subjectWithBigScore: '',
            scores: [],
          }
        }
      }

      dbFApp.collection('users').doc(dbAuth.currentUser.uid).set(newuser).then(res => {

        // add user to store
        commit('addUser', newuser)


        this.$router.push('/home')
        Loading.hide()
      })
      .catch(err => {
        console.log('err', err)
        Loading.hide()
      })

    })
    .catch(error => {
      Dialog.create({
        title: 'Error',
        message: error.message,
      }).onOk(() =>{
        console.log('Ok')
      })
    })
  },

  registerAndLoginWithGoogleProvider(){
    Loading.show();
    dbAuth.signInWithPopup (provider).then(res => {
      let credential = res.credential;
      let token = credential.accessToken;
      let user = res.user;
      console.log('user', user)
      console.log('token', token)
      console.log('credential', credential)
      console.log('res', res)
      let userDetails = {
        id: dbAuth.currentUser.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createAt: new Date(),
        updateAt: new Date(),
        isOnline: true,
        details: {
          phone: user.phoneNumber,
          subjectsLiked: [],
          universitys: [],
        },
        detailsGame: {
          highScore: 0,
          countHowManyTimesPlayed:{
            timesPlayed: 0,
            timesWon: 0,
            timesLost: 0,
            subjectWithBigScore: '',
            scores: [],
          }
        }
      }
      dbFApp.collection('users').doc(dbAuth.currentUser.uid).set(userDetails).then(res => {
        // Após o login bem-sucedido
        this.$router.push('/home')
        Notify.create({
          message: 'Login bem-sucedido. Bem-vindo!',
          type: 'positive',
          position: 'top',
          timeout: 3000 // Tempo em milissegundos para a notificação desaparecer automaticamente
        })
        Loading.hide();
      }).catch(err => {

      })
    }).catch((error) => {
      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          this.errorMessage = 'Esta conta de e-mail já está associada a uma conta usando outro método de autenticação.'
          // Fornecer orientações sobre como proceder
          break
          case 'auth/popup-closed-by-user':
            this.errorMessage = 'O processo de login foi interrompido. Por favor, tente novamente.'
            // Fornecer orientações sobre como proceder
            break
            default:
              this.errorMessage = 'Erro ao autenticar. Por favor, tente novamente.'
      }
    })
  },

  registerWithFbProvider(){
    Loading.show()
    dbAuth.signInWithPopup(providerFb).then((result) => {
      let credential = result.credential
      let user = result.user
      let accessToken = credential.accessToken
      let userDetails = {
        id: dbAuth.currentUser.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createAt: new Date(),
        updateAt: new Date(),
        isOnline: true,
        details: {
          phone: user.phoneNumber,
          subjectsLiked: [],
          universitys: [],
        },
        detailsGame: {
          highScore: 0,
          countHowManyTimesPlayed:{
            timesPlayed: 0,
            timesWon: 0,
            timesLost: 0,
            subjectWithBigScore: '',
            scores: [],
          }
        }
      }
      dbFApp.collection('users').doc(dbAuth.currentUser.uid).set(userDetails).then(res => {

      this.$router.push('/home')
      Loading.hide();
      }).catch(err => {
        console.log('err', err)

      })
      this.$router.push('/home')
      Loading.hide()
    }).catch((error) => {
        // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      Loading.hide()
      this.$router.push('/')


    // ...

    })
  },

  loginUser({commit}, payload){
    Loading.show()
    dbAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {


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
        switch (error.code) {
          case 'auth/invalid-email':
              error.message = 'Este Email é invalido.'
              Dialog.create({
                title: 'Error',
                message: error.message,

              }).onOk(()=>{
                console.log('Este E-mail invalido')
                Loading.hide()
              })
              break
          case 'auth/user-not-found':
              error.message = 'Nenhuma conta com este e-mail encontrado'
              Dialog.create({
                title: 'Error',
                message: error.message,
              }).onOk(()=>{
                console.log('Este E-mail invalido')
              })
              Loading.hide()
              break
          case 'auth/wrong-password':
              error.message = 'A palavra-passe esta incorrecta'
              Dialog.create({
                title: 'Error',
                message: error.message,
              }).onOk(()=>{
                console.log('Este E-mail invalido')
              })
              Loading.hide()
              break
          default:
              error.message = 'O E-mail ou a palavra-passe esta incorrecta'
              Dialog.create({
                title: 'Error',
                message: error.message,
              }).onOk(()=>{
                console.log('Este E-mail invalido')
              })
              Loading.hide()
              break
      }
      })
  },
  // updateUser({commit}, payload){
  //   console.log('updateUser', payload)
  //   dbFApp.collection('users').doc(payload.id).update(payload.data).then(res => {
  //     console.log('user updated', res)
  //     commit('setUserDetails', payload.data)
  //   })
  // },


  handleAuthStateChanged({ commit }, payload){
    console.log('payload', payload)
    dbAuth.onAuthStateChanged(user => {
      if (user) {
        // Call current user from dbFapp.
        // dbFApp.collection('users').doc(user.uid).get().then(res => {
        //   commit('setUserDetails', res.data())
        // })
        this.user = user


      } else {
        this.$router.push('/')
        console.log('no user')
      }
    }
    )
  },


  resetPassword({},payload){
    console.log('resetPassword', payload)
    dbAuth.sendPasswordResetEmail(payload).then(res => {
      console.log('resetPassword', res)
      console.log('Email sent.')
    })
  },
  chooseRoute({}, payload){
    console.log('payload', payload)
  },
  logoutUser(){
    dbAuth.signOut()
    this.$router.push('/')
  }
}

const getters = {
  users: (state) => {
    console.log(state.users)
    return state.users
  }
}

const state = {
  userState: null,
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
