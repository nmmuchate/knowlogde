<template>
  <q-page>  
      <div class="flex items-center justify-center ">
    <div class=" mt-4 text-left bg-white">
        <div class="flex justify-center">
             <img src="../assets/logo.svg" alt="" class="h-12">
        </div>
        <h3 class="text-2xl font-bold text-center">Introduza a sua nova conta</h3>
       
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="formData.name"
            label="Seu nome"
            hint="Introduza o seu nome"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

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

          <q-input
            outlined
            type="password"
            v-model="formData.passwordConfirm"
            label="Confirmar senha"
            hint="Confirme a sua senha"
            lazy-rules
            :rules="[val => !!val || 'Por favor, confirme a sua senha',
            val => val === formData.password || 'As senhas não coincidem']"
          />

         <q-toggle
            v-model="formData.rememberMe"
            label="Lembrar de mim mais tarde" />

          <div class="flex items-baseline justify-between">
            <q-btn
              label="Entrar"
              no-caps
              type="submit"
              class="full-width"
              color="primary" 
            />
            <!-- <q-btn
              label="Esqueci a senha"
              no-caps
              flat
              type="submit"
              class="q-mt-sm"
              color="primary" 
            /> -->
          </div>
        </q-form>
        <div class="text-center pt-4">
          <q-separator />
          <q-btn
            label="Entrar com a minha conta"
            no-caps
            flat
            color="primary" 
            class="q-mt-sm"
            @click="$router.push('/')"
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
        name: '',
        email: '',
        password: '',
        rememberMe: false,
        passwordConfirm: ''
      },

    }
  },
  methods:{
    ...mapActions('auth', ['registerUser']),
    onSubmit() {
      this.registerUser(this.formData)
    },
  },
  
}
</script>