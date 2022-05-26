<template>
    <q-page>
      <div class='flex justify-center' >

          <avatar-input-component
            v-model="photoURL"
          />
        </div>

          <q-input
            outlined
            v-model="name"
            :label="userState.name"
            hint="Actualize o seu nome"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            outlined
            v-model="email"
            type="email"
            :label="userState.email"
            hint="Este é o seu email"
          />

          <q-input
            outlined
            type="password"
            v-model="password"
            label="senha"
            hint="Introduza a sua nova senha"
            lazy-rules
          />

          <q-input
            outlined
            type="password"
            v-model="passwordConfirm"
            label="Confirmar senha"
            hint="Confirme a sua senha"
            lazy-rules
            :rules="[val => !!val || 'Por favor, confirme a sua senha',
            val => val === password || 'As senhas não coincidem']"
          />

          <div class="flex items-baseline justify-between">
            <q-btn
              label="Atualizar dados"
              @click="updateUser()"
              no-caps
              type="submit"
              class="full-width"
              color="primary"
            />

          </div>
    </q-page>
</template>

<script>

import { mapState } from 'vuex'
import AvatarInputComponent from '../components/Profile/AvatarInputComponent.vue'
import { Loading } from 'quasar'

import { dbFApp, dbAuth } from '../boot/firebase'
// import  from 'usequasar'

export default {
  data() {
      return {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        photoURL: ''
      }
  },
  components: {
    AvatarInputComponent
  },
  computed: {
      ...mapState('auth', ['userState']),
      test(){
        return this.email > 0
      }
  },
  methods: {
    updateUser(){
      if(this.name === ''){
        this.name = this.userState.name
      }
      if(this.email === ''){
        this.email = this.userState.email
      }
      Loading.show({
        message: 'Actualizando...',
      })
      dbAuth.currentUser.updateEmail(this.email)
        .then(() => {
          console.log('Email updated')
        }).catch((error) => {
          console.log(error)
        })
      dbFApp.collection('users').doc(this.userState.id)
        .update({name: this.name})
        .then(() => {
          console.log('Document successfully updated!')
          Loading.hide()
          this.$router.push('/settings')
        })
        .catch((error) => {
          console.error('Error updating document: ', error)
        })

    }
  }
}
</script>

<style>

</style>
