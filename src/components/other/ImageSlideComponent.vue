<template>
  <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="grey-7"
        navigation

        class="bg-white text-gray-700"
      >
        <!-- <q-carousel-slide
          name="style"
          class="justify-center">
          <img
            class="   mx-auto"
            src="../../../public/img/undraw_education_f8ru.svg">
          <div class=" text-center">
            <h1 class="flex-auto text-lg font-bold text-slate-900">
              Classic Utility Jacket
            </h1>
          </div>
        </q-carousel-slide> -->

        <q-carousel-slide
          name="style"
          class=" no-wrap flex-center">
          <img
            class="mb-8 h-48 mx-auto"
            src="../../../public/img/undraw_certificate_re_yadi.svg">
          <div class="mt-8 text-center">
            <h1 class="flex-auto text-lg font-bold text-slate-900">
              Classic Utility Jacket
            </h1>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="q"
          class=" no-wrap flex-center">
          <img
            class="mb-8 h-48 mx-auto"
            src="../../../public/img/undraw_educator_re_ju47.svg">
          <div class="mt-8 text-center">
            <h1 class="flex-auto text-lg font-bold text-slate-900">
              Classic Utility Jacket
            </h1>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="w"
          class=" no-wrap flex-center">
          <img
            class="mx-auto"
            src="../../../public/img/undraw_access_account_re_8spm.svg">
          <div class="mt-8 text-center">
            <h1 class="flex-auto text-lg font-bold text-slate-900">
              Classic Utility Jacket
            </h1>
          </div>
        </q-carousel-slide>
      </q-carousel>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(){
      return{
        slide: ref('style'),
      }
    }
  }
</script>

<style>

</style>
