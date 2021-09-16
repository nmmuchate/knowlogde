<template>
  <q-page class="flex flex-center container">
    <div class="upper box">
      <q-form @submit="submitUser">
        <q-card class="my-card full-width">
          <q-card-section class="text-center">
            <h6 class="q-mt-lg q-mb-md">Bem-vindo 🙋</h6>
            <div class="q-px-xs q-pb-md">
              <q-input
                v-model="formData.name"
                autofocus
                outlined
                type="name"
                label="Nome"
              >

                <template v-slot:append>
                  <q-icon color="indigo-5" name="person" />
                </template>

              </q-input>
            </div>
            <div class="q-px-xs">
              <q-input
                v-model="formData.email"
                outlined
                type="email"
                label="email"
              >
                  <template v-slot:append>
                    <q-icon color="indigo-5" name="email" />
                  </template>

              </q-input>
            </div>
            <div class="q-px-xs q-pt-md">
              <q-input
                v-model="formData.password"
                outlined
                type="password"
                label="Password"
              >
                <template v-slot:append>
                  <q-icon color="indigo-5" name="vpn_key" />
                </template>

              </q-input>
            </div>
          </q-card-section>
          <div class="q-px-lg q-py-md">
              <q-btn
                type="submit"
                color="indigo-6"
                text-color="white"
                label="Entrar"
                class="full-width"
              />
          </div>

          <!-- <div class="text-center q-pa-sm">Não tem conta?<a href="">Criar conta</a></div> -->
        </q-card>
      </q-form>
    </div>
    <div class="lower">
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    submitUser() {

      this.registerUser(this.formData)
      // if(this.tab === 'login'){
      //   // login user
      // } else {
      //   //register user
      // }
    }
  }
}
</script>
