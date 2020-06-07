<template>
  <v-btn v-if="this.$store.getters.getUser" icon>
    <v-avatar size="40">
      <img 
        :src="this.$store.getters.getUser.photoURL" 
        :alt="this.$store.getters.getUser.displayName"
      />
    </v-avatar>
  </v-btn>
  <v-btn v-else icon color="white" @click="googleLogin">
    <v-icon>fab fa-google</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    googleLogin() {
      this.$store.dispatch('signInWithGoogle').then(() => {
        // 로그인 팝업 창
      }).catch((e)=> {
        console.error(e.message)
      })
    }
  }
}
</script>