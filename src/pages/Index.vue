<template>
  <q-page class="flex flex-center">
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-3xl font-medium text-center">Junte-se a nós hoje</h2>
      <div className="py-4">
        <h3 className="py-4 text-center">Faça login com um dos provedores</h3>
        <div className="flex flex-col gap-4">

          <q-btn @click='registerAndLoginWithGoogleProvider()' class='text-white bg-gray-700 p-2 w-full font-medium rounded-lg flex align-middle gap-2'>
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"><path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            Entrar com Google
          </q-btn>
          <q-btn disable @click='registerWithFbProvider()' class='text-white bg-gray-700 p-2 w-full font-medium rounded-lg flex align-middle gap-2'>
            <svg
                 class="mr-2 -ml-1 w-4 h-4"
                 aria-hidden="true"
                 focusable="false"
                 data-prefix="fab"
                 data-icon="facebook-f"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512">
                 <path
                   fill="currentColor"
                   d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
                  </svg>
            Entrar com Facebook
          </q-btn>
        </div>
      </div>
    </div>
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
               <svg
                 class="mr-2 -ml-1 w-4 h-4"
                 aria-hidden="true"
                 focusable="false"
                 data-prefix="fab"
                 data-icon="facebook-f"
                 role="img"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 320 512">
                 <path
                   fill="currentColor"
                   d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path>
                  </svg>
              Facebook
            </q-btn>
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
    ...mapActions('auth',
      ['loginUser',
      'resetPassword',
      'registerAndLoginWithGoogleProvider',
      'registerWithFbProvider']),
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
