<template>
  <div>
    <input
      type="file"
      class="hidden"
      ref="file"
      @change="change"
    >
    <div class="relative inline-block">

      <img
        :src="avatar"
        class="h-24 w-24 rounded-full object-cover" />
      <div
        class="absolute top-0 h-full w-full bg-gray-100 bg-opacity-25 flex items-center justify-center">
        <q-btn
          flat
          round
          color="grey-4"
          icon="photo_camera"
          @click="browse()" />
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        file: null
      }
    },
    props: {
      value: File,
      defaultImage: String
    },
    computed: {
      ...mapState('auth', ['userState']),
      avatar() {
        if (this.userState.photoURL) {
          return this.userState.photoURL
        }
        return this.defaultImage
      }
    },
    methods: {
      browse() {
        this.$refs.file.click()
      },

      removeImage() {
        this.file = null

        this.$emit('input', null)
      },

      change(e) {

        this.file = e.target.files[0]
        this.$emit('input', this.file)

        let reader = new FileReader()

        reader.readAsDataURL(this.file)

        reader.onload = (e) => {
          this.avatar = e.target.result
        }
      }
    }
  }
</script>

<style>

</style>
