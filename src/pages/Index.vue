<template>
  <q-page class="flex flex-center container">
    <div class="upper box">
      <form-component/>
      <div class="text-center q-pa-sm">
        Não tem conta? <q-btn
          to="/register"
          no-caps
          flat
          color="primary"
          label="Criar conta" />
      </div>
    </div>
    <div class="lower">
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  data() {
    return {
      currentPath: ''
    }
  },
  components: {
    'form-component' : require('components/formComponent.vue').default
  }
}
</script>
