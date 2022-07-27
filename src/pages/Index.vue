<template>
  <q-page>
      <div class="px-8 py-6">
    <div class="">
        <div class="flex justify-center">
             <img src="../assets/logo.svg" alt="" class="h-12">
        </div>
        <h3 class="text-2xl font-bold text-center">Introduza a sua conta</h3>



        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            outlined
            type="email"
            v-model="formData.email"
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
            hint="Introduza a sua senha"
            lazy-rules
            :rules="[val => !!val || 'Por favor, insira a sua senha']"
          />


         <q-toggle
            v-model="formData.rememberMe"
            label="Lembrar de mim mais tarde" />

          <div class="flex items-baseline justify-between">
            <q-btn
              label="Entrar"
              no-caps
              type="submit"
              class=""
              color="primary"
            />
            <q-btn
              label="Esqueceu a senha?"
              no-caps
              flat
              @click="$router.push('/forgot-password')"
              type="submit"
              class="q-mt-sm"
              color="primary"
            />
          </div>
        </q-form>

        <div class="text-center pt-4">
          <q-separator />
          <q-btn
            label="Criar uma conta"
            no-caps
            flat
            color="primary"
            class="q-mt-sm"
            @click="$router.push('/register')"
          />
        </div>
        <!-- Button for loggin with google provider -->
        <div class="text-center pt-4">
          <q-separator />
          <q-btn
            label="Entrar com o Google"
            no-caps
            flat
            color="primary"
            class="q-mt-sm"
            @click="registerAndLoginWithGoogleProvider()"
          />
        </div>
    </div>
  </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { mapActions } from "vuex";
export default {
  data () {

    return {
      formData: {
        email: 'muchate@gmail.com',
        password: '',
        rememberMe: false
      },

    }
  },
  methods:{
    ...mapActions('auth', ['loginUser', 'resetPassword', 'registerAndLoginWithGoogleProvider']),
    onSubmit() {
      this.loginUser(this.formData)
    },
  },

}
</script>
