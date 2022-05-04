<template>
    <q-page>

        

        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

            <div class="flex flex-col items-center mt-6">
                <q-btn @click="uploadAvatar()" class='w-12 h-12 rounded-full ml-4' round>
                    <q-avatar size="48px">
                        <img src='../assets/avatar.svg' alt='' >
                    </q-avatar>
                </q-btn>
            </div>

          <q-input
            outlined
            v-model="formData.name"
            :label="userState.name"
            hint="Actualize o seu nome"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            outlined
            disable
            type="email"
            :label="userState.email"
            hint="Este é o seu email"
            lazy-rules
            :rules="[val => !!val || 'Por favor, insira o seu email']"
          />

          <q-input
            outlined
            type="password"
            v-model="formData.password"
            label="senha"
            hint="Introduza a sua nova senha"
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

          <div class="flex items-baseline justify-between">
            <q-btn
              label="Atualizar dados"
              no-caps
              type="submit"
              class="full-width"
              @click="test"
              color="primary" 
            />
            
          </div>
        </q-form>
    </q-page>
</template>

<script>

import { mapState } from 'vuex'
// import  from 'usequasar'

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }
        }
    },
    computed: {
        ...mapState('auth', ['userState']),
        test(){
            console.log('userState::',this.userState.name)
            return this.userState
        }
    },
    methods: {
        onSubmit() {
            this.$q.notify({
                color: 'positive',
                text: 'Formulário enviado com sucesso!'
            })
        },
        uploadAvatar(){
            
            this.$q.notify({
                color: 'positive',
                text: 'Avatar atualizado com sucesso!'
            })
        }
    }
}
</script>

<style>

</style>