<template>
  <q-page class="flex flex-center">
    <q-btn @click='registerWithFbProvider()' class="btn">
      Entrar
    </q-btn>
  </q-page>
  <!-- <q-page>
      <div class="px-8 py-6">
    <div class="">
        <div class="flex justify-center">
             <img src="../assets/logo.svg" alt="" class="h-12">
        </div>
        <h5 class="text-xl py-6 text-center font-bold leading-none text-gray-900">Bem-vindo De Volta 👋 </h5>
          <div class="py-4 text-center ">
            <q-btn
              @click="registerAndLoginWithGoogleProvider()"
              no-caps
              flat
              color="grey-9"
              class="rounded-lg px-5 py-2.5 items-center"
            >
              <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Google
            </q-btn>
            <q-btn
              color="indigo-6"
              no-caps
              disable
              flat
              class="rounded-lg px-5  items-center"
            >
               <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
              Facebook
            </q-btn>
          </div>


        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            outlined
            type="email"
            v-model="formData.email"
            color="indigo-8"
            label="mail@gmail.com"
            hint="Introduza o seu Email"
            lazy-rules
            :rules="[val => !!val || 'Por favor, insira o seu email']"
          />

          <q-input
            outlined
            type="password"
            v-model="formData.password"
            label="senha"
            color="indigo-8"
            hint="Introduza a sua senha"
            lazy-rules
            :rules="[val => !!val || 'Por favor, insira a sua senha']"
          />

          <q-btn
            label="Esqueceu a senha?"
            no-caps
            flat
            @click="$router.push('/forgot-password')"
            type="submit"
            class="q-mt-none"
            color="indigo-10"
          />

         <q-toggle
            v-model="formData.rememberMe"
            label="Lembrar de mim mais tarde" />

          <div class="">
            <q-btn
              label="Entrar"
              no-caps
              type="submit"
              class="full-width q-mt-none text-white bg-indigo-700"
            />
          </div>
        </q-form>

        <div class="text-center pt-4">
          <q-separator />
          <q-btn
            label="Criar uma conta"
            no-caps
            flat
            color="indigo-10"
            class="q-mt-sm"
            @click="$router.push('/register')"
          />
        </div>
        Button for loggin with google provider
    </div>
  </div>
  </q-page> -->
</template>

<script>
// import { useQuasar } from 'quasar'
import { mapActions } from "vuex";
export default {
  data () {

//     return {
//       formData: {
//         email: '',
//         password: '',
//         rememberMe: false
//       },

//     }
  },
  methods:{
    ...mapActions('auth', ['loginUser', 'resetPassword', 'registerAndLoginWithGoogleProvider', 'registerWithFbProvider']),
  //   onSubmit() {
  //     this.loginUser(this.formData)
  //   },
  //   // rememberMe() {
  //   //   // function to remember user

  //   // }
  },

}
</script>
<style>
  .btn{
    background-color: #9A6AFF;
    color: #FFFFFF;
  }
</style>
