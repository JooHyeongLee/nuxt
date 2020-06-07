<template>
  <div style="text-align:center; margin-top:25%">
      <span style="margin-top:50%;">샘플입니다</span>
      {{$store.state.sample.data}}
      <button class="login-button" @click="$fetch">Refresh</button>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapState } from "vuex";

export default ({
    name: 'sample',
    layout: 'sample',
    head: {
        link: [
            // { rel: 'stylesheet', href: 'css/style.css'},
            // { rel: 'stylesheet', href: 'css/Dosirak/Dosirak.css'},
        ]
    },
    data() {
        return {
            title: 'sample',
        }
    },
    async fetch() {
        // console.log(this.$sample)
    },
    methods: {
    }
})
</script>

<style scoped>
a {
    color:#fff
}

.fa-google:before{
    font-weight: bold;
    font-size: large;
    content: 'G';
}
.fa-facebook:before{
    font-weight: bold;
    font-size: large;
    content: 'f';
}
.fa-naver:before{
    font-weight: bold;
    font-size: large;
    content: 'N';
}


.login-button {
    background: #4A90E2;
    color: #fff;
    padding: 14px 0;
    font-size: 18px;
    text-align: center;
    border-radius: 30px;
}

.login-false {
    color: #FF5167;
}
</style>
